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

        # Fix JQMIGRATE warning
        if "jQuery.migrateMute = true;" not in content:
            content = re.sub(
                r'([ \t]*)(<script id="jquery-migrate-js")',
                r'\1<script>jQuery.migrateMute = true;</script>\n\1\2',
                content
            )
        
        # Remove Cloudflare RUM script
        content = re.sub(
            r'[ \t]*<script[^>]*?(?:data-cf-beacon|v833ccba57c9e4d2798f2e76cebdd09a11778172276447)[^>]*?></script>\n?',
            '',
            content
        )
        
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)

print("Errors fixed successfully.")
