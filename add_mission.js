const fs = require('fs');

let content = fs.readFileSync('about.html', 'utf8');

const targetStr = '<!-- Bottom: LPG Rates Table -->';
const insertIndex = content.indexOf('</section>', content.indexOf(targetStr));

if (insertIndex !== -1) {
    const cardsHtml = `
          <!-- Mission, Vision, Principle Section -->
          <div style="display: flex; flex-wrap: wrap; gap: 30px; margin-top: 60px; margin-bottom: 20px;">
            
            <!-- Our Mission -->
            <div style="flex: 1; min-width: 300px; background: #ffffff; padding: 40px 30px; border-radius: 12px; border-bottom: 4px solid #ffcd57; box-shadow: 0 10px 30px rgba(0,0,0,0.05); text-align: center; transition: transform 0.3s ease, box-shadow 0.3s ease;" onmouseover="this.style.transform='translateY(-10px)'; this.style.boxShadow='0 15px 40px rgba(0,0,0,0.1)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 10px 30px rgba(0,0,0,0.05)';">
              <div style="width: 80px; height: 80px; background: rgba(0, 119, 212, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 25px auto;">
                <i class="fa fa-bullseye" style="color: #0077d4; font-size: 40px;"></i>
              </div>
              <h3 style="font-family: 'Inter', sans-serif; font-size: 24px; color: #1e293b; font-weight: 700; text-transform: uppercase; margin-bottom: 20px;">Our Mission</h3>
              <p style="font-family: 'Inter', sans-serif; font-size: 16px; color: #67768e; line-height: 1.8; margin: 0;">
                Our Mission Is To Arrange Safe, Reliable And Trouble Free Transportation Of Lpg Along With Enablement Of Safe And Efficient Lpg Handling At Customer End.
              </p>
            </div>
            
            <!-- Our Vision -->
            <div style="flex: 1; min-width: 300px; background: #ffffff; padding: 40px 30px; border-radius: 12px; border-bottom: 4px solid #ffcd57; box-shadow: 0 10px 30px rgba(0,0,0,0.05); text-align: center; transition: transform 0.3s ease, box-shadow 0.3s ease;" onmouseover="this.style.transform='translateY(-10px)'; this.style.boxShadow='0 15px 40px rgba(0,0,0,0.1)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 10px 30px rgba(0,0,0,0.05)';">
              <div style="width: 80px; height: 80px; background: rgba(0, 119, 212, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 25px auto;">
                <i class="fa fa-eye" style="color: #0077d4; font-size: 36px;"></i>
              </div>
              <h3 style="font-family: 'Inter', sans-serif; font-size: 24px; color: #1e293b; font-weight: 700; text-transform: uppercase; margin-bottom: 20px;">Our Vision</h3>
              <p style="font-family: 'Inter', sans-serif; font-size: 16px; color: #67768e; line-height: 1.8; margin: 0;">
                We aspire to be our customer’s partner of choice for transportation of Liquefied Petroleum Gas (LPG), recognized for our leading service & operational standards.
              </p>
            </div>
            
            <!-- Our Principle -->
            <div style="flex: 1; min-width: 300px; background: #ffffff; padding: 40px 30px; border-radius: 12px; border-bottom: 4px solid #ffcd57; box-shadow: 0 10px 30px rgba(0,0,0,0.05); text-align: center; transition: transform 0.3s ease, box-shadow 0.3s ease;" onmouseover="this.style.transform='translateY(-10px)'; this.style.boxShadow='0 15px 40px rgba(0,0,0,0.1)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 10px 30px rgba(0,0,0,0.05)';">
              <div style="width: 80px; height: 80px; background: rgba(0, 119, 212, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 25px auto;">
                <i class="fa fa-wrench" style="color: #0077d4; font-size: 36px;"></i>
              </div>
              <h3 style="font-family: 'Inter', sans-serif; font-size: 24px; color: #1e293b; font-weight: 700; text-transform: uppercase; margin-bottom: 20px;">Our Principle</h3>
              <p style="font-family: 'Inter', sans-serif; font-size: 16px; color: #67768e; line-height: 1.8; margin: 0;">
                Safety above all
              </p>
            </div>
            
          </div>
`;
    // Find the closing </div> of max-width: 1200px before the </section>
    // It's easier to just do string replacement right before the closing </div></section>
    
    // Instead of regex, let's find `</div>\n      </section>`
    const exactEnd = '</div>\n      </section>';
    if (content.includes(exactEnd)) {
        content = content.replace(exactEnd, cardsHtml + '\n' + exactEnd);
        fs.writeFileSync('about.html', content);
        console.log('Added Mission/Vision/Principle block to about.html');
    } else {
        console.log('Could not find the exact end tags.');
    }
} else {
    console.log('Could not find insert index.');
}
