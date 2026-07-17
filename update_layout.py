import os
import re

def update_files():
    # Read index.html
    try:
        with open('index.html', 'r', encoding='utf-8') as f:
            index_content = f.read()
    except Exception as e:
        print(f"Error reading index.html: {e}")
        return

    # Extract header using regex
    # It starts with <header class="site-header"> and ends with the closing </div> of mobile-menu-wrap
    header_pattern = re.compile(r'(<header class="site-header">.*?</header>\s*<div class="mobile-menu-wrap">.*?<div class="mobile-menu-toggle">\s*</div>\s*</div>)', re.DOTALL)
    header_match = header_pattern.search(index_content)
    
    if not header_match:
        print("Could not find header pattern in index.html")
        return
    header_str = header_match.group(1)

    # Extract footer
    footer_pattern = re.compile(r'(<footer class="site-footer">.*?</footer>)', re.DOTALL)
    footer_match = footer_pattern.search(index_content)
    
    if not footer_match:
        print("Could not find footer pattern in index.html")
        return
    footer_str = footer_match.group(1)
    
    html_files = [f for f in os.listdir('.') if f.endswith('.html') and f != 'index.html']
    
    updated_count = 0
    for file in html_files:
        try:
            with open(file, 'r', encoding='utf-8') as f:
                content = f.read()
                
            original_content = content
            
            # Replace header
            content = header_pattern.sub(header_str.replace('\\', '\\\\'), content, count=1)
            
            # Replace footer
            content = footer_pattern.sub(footer_str.replace('\\', '\\\\'), content, count=1)
            
            if content != original_content:
                with open(file, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Updated {file}")
                updated_count += 1
            else:
                print(f"No changes needed for {file} (or patterns not found)")
                
        except Exception as e:
            print(f"Error processing {file}: {e}")
            
    print(f"\nSuccessfully updated {updated_count} out of {len(html_files)} HTML files.")

if __name__ == '__main__':
    update_files()
