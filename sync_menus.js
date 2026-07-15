const fs = require('fs');

function getBlock(content, startStr, endStr) {
  const start = content.indexOf(startStr);
  if (start === -1) return null;
  const end = content.indexOf(endStr, start);
  if (end === -1) return null;
  return content.substring(start, end + endStr.length);
}

function replaceBlock(content, startStr, endRegexStr, replacement) {
  const start = content.indexOf(startStr);
  if (start === -1) return content;
  
  // Use regex to find the end flexibly (e.g. ignoring exact spaces)
  const regex = new RegExp(startStr.replace(/[.*+?^\${}()|[\]\\]/g, '\\$&') + '[\\s\\S]*?' + endRegexStr, 'i');
  return content.replace(regex, replacement);
}

const indexContent = fs.readFileSync('index.html', 'utf8');

// 1. Extract Desktop Menu
// From <div class="site-menu-wrap overlay-mobile"> to </div><!-- .site-menu-wrap --> 
// Wait, the end of desktop menu might not have a comment.
// Let's use exact strings from index.html
const desktopStart = '<div class="site-menu-wrap overlay-mobile">';
const desktopEndStr = '                    </nav>\n                  </div>';
const desktopMenuBlock = getBlock(indexContent, desktopStart, desktopEndStr);

// 2. Extract Mobile Menu
const mobileStart = '<div class="mobile-menu-wrap">';
const mobileEndStr = '      <div class="mobile-menu-toggle">\n      </div>\n    </div>';
const mobileMenuBlock = getBlock(indexContent, mobileStart, mobileEndStr);

if (!desktopMenuBlock || !mobileMenuBlock) {
  console.error("Could not find the blocks in index.html");
  process.exit(1);
}

const files = fs.readdirSync(__dirname).filter(f => f.endsWith('.html') && f !== 'index.html');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Replace desktop menu
  // The desktop menu end regex: <\/nav>\s*<\/div>
  content = replaceBlock(content, desktopStart, '<\\/nav>\\s*<\\/div>', desktopMenuBlock);

  // Replace mobile menu
  // The mobile menu end regex: <div class="mobile-menu-toggle">[\s\S]*?<\/div>\s*<\/div>
  content = replaceBlock(content, mobileStart, '<div class="mobile-menu-toggle">[\\s\\S]*?<\\/div>\\s*<\\/div>', mobileMenuBlock);

  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log(`Synced menus in ${file}`);
  }
});

console.log('All menus synced successfully!');
