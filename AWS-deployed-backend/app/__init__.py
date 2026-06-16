from .chatbot import build_matcher, main, run_cli
from .data import DEFAULT_FAQS_FILE, load_faqs
from .matchers import LlmMatcher, LexicalMatcher, Matcher, SemanticMatcher
from .models import FAQ, MatchCandidate, MatchResult

__all__ = [
    "build_matcher",
    "main",
    "run_cli",
    "DEFAULT_FAQS_FILE",
    "load_faqs",
    "LlmMatcher",
    "LexicalMatcher",
    "Matcher",
    "SemanticMatcher",
    "FAQ",
    "MatchCandidate",
    "MatchResult",
]

__version__ = "1.0.0"
__author__ = "Ryan"
