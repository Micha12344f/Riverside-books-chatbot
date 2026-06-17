function normalizeBody(body) {
  if (!body) {
    return {};
  }

  if (typeof body === "string") {
    try {
      return JSON.parse(body);
    } catch {
      return {};
    }
  }

  return body;
}

module.exports = async (req, res) => {
  if (req.method === "OPTIONS") {
    res.setHeader("Allow", "POST, OPTIONS");
    res.status(204).end();
    return;
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST, OPTIONS");
    res.status(405).json({ answer: "Method not allowed.", matched: false });
    return;
  }

  const backendUrl = process.env.RIVERSIDE_BACKEND_URL;
  if (!backendUrl) {
    res.status(500).json({ answer: "Chat backend is not configured.", matched: false });
    return;
  }

  try {
    const upstream = await fetch(backendUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(normalizeBody(req.body)),
    });

    const text = await upstream.text();
    res.status(upstream.status);
    res.setHeader("Cache-Control", "no-store");
    res.setHeader("Content-Type", upstream.headers.get("content-type") || "application/json");
    res.send(text);
  } catch {
    res.status(502).json({
      answer: "Chat backend is unavailable right now.",
      matched: false,
    });
  }
};
