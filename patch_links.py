import json
import re

with open('paper_links.json', 'r', encoding='utf-8') as f:
    links = json.load(f)
    
title_to_link = {p['title'].strip(): p['link'] for p in links if p['link']}

with open('src/pages/Publications.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

def replacer(match):
    full_match = match.group(0)
    title = match.group(1).strip()
    
    # Extract the year to append the link after it
    # We'll just replace the whole block by finding 'year: \d+'
    link = title_to_link.get(title)
    if not link:
        return full_match
        
    # check if link is already present
    if 'link:' in full_match:
        # replace existing link
        return re.sub(r'link:\s*".*?"', f'link: "{link}"', full_match)
        
    # otherwise append link after year
    # we'll look for year: \d+
    year_match = re.search(r'(year:\s*\d+)', full_match)
    if year_match:
        return full_match.replace(year_match.group(1), f'{year_match.group(1)},\n      link: "{link}"')
    
    return full_match

# regex to capture each paper object: { authors: ..., title: "...", ... }
# We capture from `{` to `}` inside the array
pattern = re.compile(r'\{\s*authors:.*?title:\s*"(.*?)".*?\}', re.DOTALL)

new_content = pattern.sub(replacer, content)

with open('src/pages/Publications.jsx', 'w', encoding='utf-8') as f:
    f.write(new_content)
    
print("Successfully patched Publications.jsx")
