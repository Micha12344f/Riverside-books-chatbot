---
id: overview
title: Overview
---

# Riverside Books Chatbot

This site documents the Riverside Books chatbot project.

The project is a small FAQ chatbot built around local semantic retrieval rather than an LLM-first approach.

## Main Idea

For a fixed set of 20 FAQs, the best default is:

- embed the FAQs locally
- rank them against the user question
- answer only when the best match looks safe

That makes the chatbot:

- cheaper
- easier to test
- easier to explain
- less likely to hallucinate

## Main Project Parts

- `main.py`
  - standard CLI chatbot
- `src/`
  - real Python implementation
- `tests/`
  - automated checks
- `src/Jupyter Notebooks/`
  - educational and interactive notebooks
- `website/`
  - this documentation site
