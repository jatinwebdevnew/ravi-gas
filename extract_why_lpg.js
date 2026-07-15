const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\RAO JATIN\\.gemini\\antigravity-ide\\brain\\6f0034f7-d948-41b6-8116-a227178b4d4c\\.system_generated\\steps\\581\\content.md', 'utf8');

// The main content in Elementor is usually inside .elementor-widget-theme-post-content or similar,
// but we can just regex for the paragraphs if it's simple text.
// Let's extract everything between <main> and </main> or just strip HTML.

let mainMatch = content.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
if (mainMatch) {
    let mainHtml = mainMatch[1];
    // Simple tag stripper to see the text
    let text = mainHtml.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
    console.log("TEXT EXTRACTED:");
    console.log(text.substring(0, 2000));
    
    // Let's also look for images
    let imgRegex = /<img[^>]+src="([^">]+)"/g;
    let match;
    console.log("\\nIMAGES FOUND:");
    while ((match = imgRegex.exec(mainHtml)) !== null) {
        console.log(match[1]);
    }
} else {
    console.log("No main tag found.");
}
