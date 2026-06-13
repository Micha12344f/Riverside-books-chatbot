---
id: source-guide
title: Source Guide
---

# Source Guide

The Python code is intentionally split into small focused files.

## Main Files

- `src/models.py`
  - shared data objects
- `src/data.py`
  - FAQ loading
- `src/matchers.py`
  - semantic and lexical matching logic
- `src/chatbot.py`
  - normal CLI flow
- `src/live_test.py`
  - visible ranking and interactive inspection runner

## Why This Split Helps

It keeps:

- loading logic separate from matching logic
- matching logic separate from terminal input/output
- testing easier
- notebooks easier to line up with the actual code
