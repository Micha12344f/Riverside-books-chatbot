import pytest
from src.matcher import find_best_match
from src.types import FAQ

def test_find_best_match_exists():
    assert find_best_match is not None
