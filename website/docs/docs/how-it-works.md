---
id: how-it-works
title: How It Works
---

# How It Works

The chatbot works in a simple flow:

1. load the FAQ data from `faqs.json`
2. combine each FAQ question and answer into one searchable block
3. create embeddings for those FAQ blocks
4. embed the user question
5. compare the user question to each FAQ
6. rank the best matches
7. answer only if the top result is strong enough and clearly ahead

## Safety Rules

The chatbot refuses weak answers when:

- the top score is too low
- the best result is too close to second place

There is also a special rejection for exact event-date style questions because the source data does not provide those dates directly.

## Fallback Behavior

If the embedding model is unavailable, the chatbot falls back to a simpler lexical matcher instead of crashing.
