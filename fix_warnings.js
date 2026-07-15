const fs = require('fs');

const filesToUpdate = ['index.html']; // Let's focus on index.html first since the user specified it, though we can do all html files

filesToUpdate.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        // Fix 1: Add font-display: swap to all @font-face declarations
        // Match @font-face { and insert font-display: swap; if not already present
        content = content.replace(/@font-face\s*\{(?!\s*font-display:\s*swap;)/g, '@font-face { font-display: swap;');

        // Fix 2: Mute JQMIGRATE warning
        // Look for the jquery-migrate script inclusion and prepend the mute script
        if (content.includes('jquery-migrate') && !content.includes('jQuery.migrateMute = true;')) {
            content = content.replace(
                /(<script[^>]*src=["'][^"']*jquery-migrate[^"']*["'][^>]*><\/script>)/i,
                "<script>jQuery.migrateMute = true;</script>\n$1"
            );
        }

        fs.writeFileSync(file, content, 'utf8');
        console.log(`Successfully updated ${file}`);
    }
});
