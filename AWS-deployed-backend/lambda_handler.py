from __future__ import annotations

import json
import os
from pathlib import Path

from app.data import load_faqs
from app.matchers import LexicalMatcher

# Load FAQs once at cold start
_APP_ROOT = Path(__file__).resolve().parent
_FAQS = load_faqs(_APP_ROOT / "app" / "runtime_assets" / "faqs.json")
_MATCHER = LexicalMatcher()

FALLBACK_MESSAGE = "Sorry, I don't know that one — please ask a member of staff."
_DEFAULT_ALLOWED_ORIGINS = (
    "https://riverside-chatbot-website.vercel.app",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
)


def _load_allowed_origins() -> tuple[str, ...]:
    configured = os.environ.get("ALLOWED_ORIGINS", "")
    if configured.strip():
        return tuple(origin.strip() for origin in configured.split(",") if origin.strip())

    return _DEFAULT_ALLOWED_ORIGINS


_ALLOWED_ORIGINS = _load_allowed_origins()


def lambda_handler(event: dict, context: object) -> dict:
    """API Gateway HTTP API v2 handler.

    Expects: {"query": "user question"}
    Returns: {"answer": "...", "matched": true/false}
    """
    request_origin = _get_request_origin(event)
    if request_origin and request_origin not in _ALLOWED_ORIGINS:
        return _response(
            403,
            {"answer": "Origin not allowed.", "matched": False},
            request_origin=request_origin,
        )

    # Handle CORS preflight
    if event.get("requestContext", {}).get("http", {}).get("method") == "OPTIONS":
        return _response(200, {"ok": True}, request_origin=request_origin)

    # Parse the incoming request
    body = event.get("body", "{}")
    if isinstance(body, str):
        try:
            body = json.loads(body)
        except json.JSONDecodeError:
            body = {}

    query = (body.get("query") or "").strip()
    if not query:
        return _response(
            400,
            {"answer": "Please ask a question.", "matched": False},
            request_origin=request_origin,
        )

    # Match against FAQs
    result = _MATCHER.match(query, _FAQS)
    if result is None:
        return _response(
            200,
            {"answer": FALLBACK_MESSAGE, "matched": False},
            request_origin=request_origin,
        )

    return _response(
        200,
        {"answer": result.faq.answer, "matched": True},
        request_origin=request_origin,
    )


def _get_request_origin(event: dict) -> str:
    headers = event.get("headers") or {}
    return headers.get("origin") or headers.get("Origin") or ""


def _response(status_code: int, body: dict, request_origin: str = "") -> dict:
    headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Max-Age": "86400",
        "Vary": "Origin",
    }

    if request_origin in _ALLOWED_ORIGINS:
        headers["Access-Control-Allow-Origin"] = request_origin

    return {
        "statusCode": status_code,
        "headers": headers,
        "body": json.dumps(body),
    }
