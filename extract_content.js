const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\RAO JATIN\\.gemini\\antigravity-ide\\brain\\6f0034f7-d948-41b6-8116-a227178b4d4c\\.system_generated\\steps\\397\\content.md', 'utf8');

// Find all image sources
const imgRegex = /<img[^>]+src="([^"]+)"/g;
let match;
console.log("IMAGES:");
while ((match = imgRegex.exec(content)) !== null) {
  console.log(match[1]);
}

// Find Safety text block
const safetyIndex = content.indexOf('SAFETY');
if (safetyIndex !== -1) {
  console.log("\nSAFETY TEXT:");
  console.log(content.substring(safetyIndex, safetyIndex + 500));
}

// Find Conservation Tips block
const consIndex = content.indexOf('CONSERVATION TIPS');
if (consIndex !== -1) {
  console.log("\nCONSERVATION TIPS TEXT:");
  console.log(content.substring(consIndex, consIndex + 1000));
}
