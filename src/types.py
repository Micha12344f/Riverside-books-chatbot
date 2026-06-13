from dataclasses import dataclass

@dataclass
class FAQ:
    id: int
    question: str
    answer: str

@dataclass
class MatchResult:
    faq: FAQ
    score: float
