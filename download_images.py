import os
import re
import urllib.request
import ssl
from urllib.parse import urlparse

# Directories to search
dirs_to_search = ['.', 'css']

# Find all HTML and CSS files
files_to_process = []
for d in dirs_to_search:
    if os.path.exists(d):
        for f in os.listdir(d):
            if f.endswith('.html') or f.endswith('.css'):
                files_to_process.append(os.path.join(d, f))

url_pattern1 = re.compile(r'src=["\'](https?://[^"\']+\.(?:jpg|jpeg|png|gif|svg|webp))["\']', re.IGNORECASE)
url_pattern2 = re.compile(r'url\([\'"]?(https?://[^\'"\)]+\.(?:jpg|jpeg|png|gif|svg|webp))[\'"]?\)', re.IGNORECASE)

image_urls = set()
for file_path in files_to_process:
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        for match in url_pattern1.finditer(content):
            image_urls.add(match.group(1))
        for match in url_pattern2.finditer(content):
            image_urls.add(match.group(1))
    except Exception as e:
        print(f"Error reading {file_path}: {e}")

images_dir = 'images'
if not os.path.exists(images_dir):
    os.makedirs(images_dir)

url_to_local = {}
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

for url in image_urls:
    try:
        parsed_url = urlparse(url)
        filename = os.path.basename(parsed_url.path)
        local_path = os.path.join(images_dir, filename)
        
        # skip if already exists and has size > 0
        if os.path.exists(local_path) and os.path.getsize(local_path) > 0:
            url_to_local[url] = f'images/{filename}'
            continue
            
        print(f"Downloading {url} to {local_path}...")
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, context=ctx) as response, open(local_path, 'wb') as out_file:
            data = response.read()
            out_file.write(data)
            
        url_to_local[url] = f'images/{filename}'
    except Exception as e:
        print(f"Failed to download {url}: {e}")

for file_path in files_to_process:
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        original_content = content
        for url, local_rel_path in url_to_local.items():
            replacement = local_rel_path
            if file_path.startswith('css\\') or file_path.startswith('css/'):
                replacement = '../' + local_rel_path
            content = content.replace(url, replacement)
            
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated {file_path}")
    except Exception as e:
        print(f"Error updating {file_path}: {e}")

print("Done downloading and updating images.")
