const fs = require('fs');
const path = require('path');

const directoryPath = __dirname;

fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    
    files.forEach(function (file) {
        if (file.endsWith('.html') && file !== 'index.html') {
            let content = fs.readFileSync(file, 'utf8');
            
            // Fix 1: Add font-display: swap to all @font-face declarations
            content = content.replace(/@font-face\s*\{(?!\s*font-display:\s*swap;)/g, '@font-face { font-display: swap;');

            // Fix 2: Mute JQMIGRATE warning
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
});
