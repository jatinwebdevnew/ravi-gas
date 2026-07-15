const fs = require('fs'); 
const html = fs.readFileSync('C:\\\\Users\\\\RAO JATIN\\\\.gemini\\\\antigravity-ide\\\\brain\\\\27f827f8-335b-40c6-b2ef-166a324de1a4\\\\.system_generated\\\\steps\\\\110\\\\content.md', 'utf8');
const text = html.replace(/<style[^>]*>.*?<\/style>/gi, '')
                .replace(/<script[^>]*>.*?<\/script>/gi, '')
                .replace(/<[^>]+>/g, ' ')
                .replace(/\s+/g, ' ')
                .trim();
console.log(text.substring(0, 5000));
