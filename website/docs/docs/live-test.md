---
id: live-test
title: Live Test Runner
---

# Live Test Runner

The project includes a second Python entrypoint:

```bash
python -m src.live_test
```

This runner is meant for visibility rather than minimal output.

## What It Shows

- Python environment information
- embedding package status
- first FAQ preview
- model warm-up
- your typed question
- prepared question text
- ranked FAQ table
- final accepted answer, if one passes the safe threshold

## Why It Exists

The normal CLI is better for everyday use.

The live test runner is better for:

- debugging
- demos
- understanding why one FAQ beat another
