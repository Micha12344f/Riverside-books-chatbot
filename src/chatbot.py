import json
from src.matcher import find_best_match
from src.types import FAQ

# TODO: implement interactive CLI
with open("faqs.json", "r", encoding="utf-8") as f:
    faqs_data = json.load(f)

faqs = [FAQ(**item) for item in faqs_data]
print("Riverside Books Chatbot — work in progress")
print(f"Loaded {len(faqs)} FAQs")
