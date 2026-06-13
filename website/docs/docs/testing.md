---
id: testing
title: Testing
---

# Testing

Run tests from the project root:

```bash
pytest
```

## What The Tests Cover

- CLI behavior
- semantic matcher caching
- weak-match rejection
- fallback behavior
- expected FAQ matches
- expected no-match cases

## Why The Test Suite Is Small

This is a take-home sized project, not a full production platform.

The tests aim to prove the important behavior without turning the repository into a giant test harness.
