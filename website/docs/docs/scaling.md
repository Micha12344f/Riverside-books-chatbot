---
id: scaling
title: Scaling Plan
---

# Scaling Plan

The current project is tuned for 20 FAQs.

That is why it uses local retrieval first.

## When To Scale Beyond This

Move beyond the current approach when:

- the FAQ set becomes much larger
- answers overlap more
- answers need synthesis
- the team wants better analytics and observability

## Recommended Future Direction

Keep retrieval first, then add an LLM only when needed.

That future flow would be:

1. retrieve top candidates
2. return a stored answer directly when the winner is obvious
3. call an LLM only for ambiguous or multi-source questions
4. still refuse weak evidence cases
