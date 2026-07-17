import os
import re

directory = r"c:\Users\RAO JATIN\OneDrive\RAVI GAS"

for filename in os.listdir(directory):
    if filename.endswith(".html"):
        filepath = os.path.join(directory, filename)
        try:
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()
        except UnicodeDecodeError:
            with open(filepath, "r", encoding="latin-1") as f:
                content = f.read()

        # Replace all instances of href="index.html" with href="/"
        content = content.replace('href="index.html"', 'href="/"')
        # Also handle potential single quotes
        content = content.replace("href='index.html'", "href='/'")
        
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)

print("Replaced index.html links successfully.")
