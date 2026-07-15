const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf8');

const targetStr = `                </div>
              </div>
            </div>
            <div class="elementor-element elementor-element-ca52f12 e-flex e-con-boxed e-con e-parent"`;

const replaceStr = `              </div>
            </div>
            <div class="elementor-element elementor-element-ca52f12 e-flex e-con-boxed e-con e-parent"`;

if (indexHtml.includes(targetStr)) {
    indexHtml = indexHtml.replace(targetStr, replaceStr);
    fs.writeFileSync('index.html', indexHtml);
    console.log('Successfully removed extra closing div.');
} else {
    console.log('Target string not found.');
}
