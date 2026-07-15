const fs = require('fs');
const path = require('path');

const directoryPath = __dirname;

fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    
    files.forEach(function (file) {
        if (path.extname(file) === '.html') {
            const filePath = path.join(directoryPath, file);
            let content = fs.readFileSync(filePath, 'utf8');
            let modified = false;

            // Update GET CONNECTION links
            if (content.includes('href="#contact">GET CONNECTION</a>')) {
                content = content.replace(/href="#contact">GET CONNECTION<\/a>/g, 'href="get-new-connection.html">GET CONNECTION</a>');
                modified = true;
            }
            if (content.includes('href="#contact"')) {
                content = content.replace(/href="#contact"/g, 'href="get-new-connection.html"');
                modified = true;
            }

            // Update /fuelgize/contact/ links
            if (content.includes('/fuelgize/contact/')) {
                content = content.replace(/\/fuelgize\/contact\//g, 'contact.html');
                modified = true;
            }

            // Look for any place that says Contact Us but links to contact.html? No, that's correct now.
            // But wait, get-new-connection.html should have its menu item updated if it highlighted contact.html
            // We fixed it by separating them, but what if there's no link to contact.html in desktop menu?
            // "Contact us" buttons exist in header. They link to /fuelgize/contact/, which we just replaced with contact.html.

            if (modified) {
                fs.writeFileSync(filePath, content);
                console.log(`Updated links in ${file}`);
            }
        }
    });
});
