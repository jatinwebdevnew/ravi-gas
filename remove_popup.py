import sys

def remove_popup(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    start_idx = -1
    end_idx = -1
    
    for i, line in enumerate(lines):
        if '<!-- Custom Home Popup Modal -->' in line:
            start_idx = i
        if '<!-- End Custom Home Popup Modal -->' in line:
            end_idx = i
            
    if start_idx != -1 and end_idx != -1 and start_idx < end_idx:
        new_lines = lines[:start_idx] + lines[end_idx+1:]
        with open(filepath, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
        print(f"Removed popup from {filepath} (lines {start_idx+1} to {end_idx+1})")
    else:
        print(f"Could not find complete popup block in {filepath}")

remove_popup('our-products.html')
