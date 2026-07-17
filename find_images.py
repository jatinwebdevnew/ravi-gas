import os
import re

html_files = [f for f in os.listdir('.') if f.endswith('.html')]

# Regular expression to match absolute HTTP/HTTPS image URLs
img_src_pattern = re.compile(r'src=["\'](https?://[^"\']+)["\']', re.IGNORECASE)
url_pattern = re.compile(r'url\([\'"]?(https?://[^\'"\)]+)[\'"]?\)', re.IGNORECASE)

external_images = set()

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
        
    for match in img_src_pattern.finditer(content):
        url = match.group(1)
        external_images.add(url)
        
    for match in url_pattern.finditer(content):
        url = match.group(1)
        external_images.add(url)

print("Found external images:")
for img in sorted(external_images):
    print(img)
print(f"Total: {len(external_images)}")
