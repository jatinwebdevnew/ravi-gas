const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf8');
let oldIndex = fs.readFileSync('old_index_utf8.html', 'utf8');

// The missing part in oldIndex starts after the c24a68c closing tags, up to the 'Strategic Importance' pt-icon-box.
// Let's locate the exact chunk in oldIndex.
// We know it starts at line 818: "                </div>\n              </div>\n            </div>"
// And goes until line 868: "                        </div>" (the High Demand box closing)
let oldLines = oldIndex.split(/\r?\n/);
let missingChunk = oldLines.slice(817, 868).join('\n') + '\n';

// In index.html, we need to insert this missing chunk exactly between:
// "</div>" (end of custom-services-grid, line 1018)
// and
// "                        <div class=\"pt-icon-box\">" (Strategic Importance, line 1020)

let indexLines = indexHtml.split(/\r?\n/);
let targetIndex = -1;
for (let i = 0; i < indexLines.length; i++) {
    if (indexLines[i].includes('Strategic Importance')) {
        // found Strategic Importance at line i+1. The pt-icon-box is a few lines above.
        // Let's backtrack to find '<div class="pt-icon-box">'
        for (let j = i; j >= 0; j--) {
            if (indexLines[j].includes('<div class="pt-icon-box">')) {
                targetIndex = j;
                break;
            }
        }
        break;
    }
}

if (targetIndex !== -1) {
    // Insert the missing chunk at targetIndex
    indexLines.splice(targetIndex, 0, missingChunk);
    fs.writeFileSync('index.html', indexLines.join('\n'));
    console.log('Successfully injected the missing chunk at line ' + (targetIndex + 1));
} else {
    console.log('Could not find Strategic Importance in index.html');
}
