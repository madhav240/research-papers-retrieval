import json
import random

papers = []
for i in range(10000):
    title = f"Research Paper {i+1}"
    authors = [f"Author {random.randint(1, 100)}" for _ in range(random.randint(2, 5))]
    year = random.randint(2010, 2022)
    citation_count = random.randint(1, 500)
    papers.append({
    "title": title,
    "authors": authors,
    "year": year,
    "citation_count": citation_count
    })

with open('./papers.json', 'w') as f:
    json.dump(papers, f, indent=4)