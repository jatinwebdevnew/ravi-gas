const { execSync } = require('child_process');
const output = execSync('git show 9d9a07a:index.html').toString('utf8');
const lines = output.split('\n');
const start = lines.findIndex(l => l.includes('class="pt-services layout-grid'));
const end = lines.findIndex((l, i) => i > start && l.includes('pt-swiper-pagination') || (i > start + 50 && l.includes('</div>') && lines[i+1] && lines[i+1].includes('</div>') && lines[i+2] && lines[i+2].includes('</div>') && lines[i+3] && lines[i+3].includes('</article>')));
console.log({start, end});
const widgetLines = lines.slice(start - 2, start + 110);
require('fs').writeFileSync('widget_dump.html', widgetLines.join('\n'));
