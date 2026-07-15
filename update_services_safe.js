const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const block1 = `<div class="pt-service">
                      <div class="pt-service-image">
                        <img decoding="async" width="1064" height="620" src="images/fuelgize-03.webp" class="attachment-full size-full" alt=""   />
                      </div>
                      <div class="pt-service-caption">
                        <div class="pt-service-title">
                          <a href="#contact-us">                          Drilling
</a>
                        </div>
                        <div class="pt-service-button ">
                          <a class="pt-button textual" href="#contact-us">                          <span>                          Contact Us
</span>
                          <i aria-hidden="true" class="pticon pticon-plus"></i>
</a>
                        </div>
                      </div>
                      <a href="#contact-us" class="pt-service-link"></a>
                    </div>`;

const newBlock1 = `<div class="pt-service">
    <div class="pt-service-image">
        <img decoding="async" width="1064" height="620" src="images/service-domestic.png" class="attachment-full size-full" style="object-fit: cover;" alt="Domestic LPG" />
    </div>
    <div class="pt-service-caption" style="bottom: 0; background: linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0)); padding: 25px;">
        <div class="pt-service-title">
            <a href="domestic.html" style="font-size: 24px; line-height: 1.2;">LPG for Domestic Purpose</a>
        </div>
        <div class="pt-service-text" style="color: #e2e8f0; font-size: 14px; line-height: 1.5; margin-top: 10px; margin-bottom: 15px; font-family: 'Inter', sans-serif;">
            At RAVI GAS SERVICE, through all of our Gurugram activities we believe in providing comfort to customers. With that in mind, we launched 'Beyond LPG' in 2004.
        </div>
        <div class="pt-service-button ">
            <a class="pt-button textual" href="domestic.html">
                <span>Read More</span>
                <i aria-hidden="true" class="pticon pticon-plus"></i>
            </a>
        </div>
    </div>
    <a href="domestic.html" class="pt-service-link"></a>
</div>`;

const block2 = `<div class="pt-service">
                      <div class="pt-service-image">
                        <img loading="lazy" decoding="async" width="1064" height="620" src="images/fuelgize-04.webp" class="attachment-full size-full" alt=""   />
                      </div>
                      <div class="pt-service-caption">
                        <div class="pt-service-title">
                          <a href="#contact-us">                          Transportation
</a>
                        </div>
                        <div class="pt-service-button  pt-service-button ">
                          <a class="pt-button textual" href="#contact-us">                          <span>                          Contact Us
</span>
                          <i aria-hidden="true" class="pticon pticon-plus"></i>
</a>
                        </div>
                      </div>
                      <a href="#contact-us" class="pt-service-link"></a>
                    </div>`;

const newBlock2 = `<div class="pt-service">
    <div class="pt-service-image">
        <img loading="lazy" decoding="async" width="1064" height="620" src="images/service-industrial.png" class="attachment-full size-full" style="object-fit: cover;" alt="Industrial LPG" />
    </div>
    <div class="pt-service-caption" style="bottom: 0; background: linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0)); padding: 25px;">
        <div class="pt-service-title">
            <a href="industrial.html" style="font-size: 24px; line-height: 1.2;">LPG For Industrial Purpose</a>
        </div>
        <div class="pt-service-text" style="color: #e2e8f0; font-size: 14px; line-height: 1.5; margin-top: 10px; margin-bottom: 15px; font-family: 'Inter', sans-serif;">
            LPG (Liquefied Petroleum Gas) can indeed be a viable and efficient fuel option for various industrial uses. Here are some reasons why LPG is considered.
        </div>
        <div class="pt-service-button  pt-service-button ">
            <a class="pt-button textual" href="industrial.html">
                <span>Read More</span>
                <i aria-hidden="true" class="pticon pticon-plus"></i>
            </a>
        </div>
    </div>
    <a href="industrial.html" class="pt-service-link"></a>
</div>`;

const block3 = `<div class="pt-service">
                      <div class="pt-service-image">
                        <img loading="lazy" decoding="async" width="1064" height="620" src="images/fuelgize-05.webp" class="attachment-full size-full" alt=""   />
                      </div>
                      <div class="pt-service-caption">
                        <div class="pt-service-title">
                          <a href="#">                          Transportation
</a>
                        </div>
                        <div class="pt-service-button  pt-service-button  pt-service-button ">
                          <a class="pt-button textual" href="#">                          <span>                          Contact Us
</span>
                          <i aria-hidden="true" class="pticon pticon-plus"></i>
</a>
                        </div>
                      </div>
                      <a href="#" class="pt-service-link"></a>
                    </div>`;

const newBlock3 = `<div class="pt-service">
    <div class="pt-service-image">
        <img loading="lazy" decoding="async" width="1064" height="620" src="images/service-commercial.png" class="attachment-full size-full" style="object-fit: cover;" alt="Commercial LPG" />
    </div>
    <div class="pt-service-caption" style="bottom: 0; background: linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0)); padding: 25px;">
        <div class="pt-service-title">
            <a href="bmcg.html" style="font-size: 24px; line-height: 1.2;">LPG for Commercial Purpose</a>
        </div>
        <div class="pt-service-text" style="color: #e2e8f0; font-size: 14px; line-height: 1.5; margin-top: 10px; margin-bottom: 15px; font-family: 'Inter', sans-serif;">
            Commercial usage of LPG gas (Liquefied Petroleum Gas) is quite common and widespread. LPG is a versatile and convenient fuel source that finds.
        </div>
        <div class="pt-service-button  pt-service-button  pt-service-button ">
            <a class="pt-button textual" href="bmcg.html">
                <span>Read More</span>
                <i aria-hidden="true" class="pticon pticon-plus"></i>
            </a>
        </div>
    </div>
    <a href="bmcg.html" class="pt-service-link"></a>
</div>`;

// Check if found before replacing
if (!html.includes(block1)) console.log("Block 1 not found!");
if (!html.includes(block2)) console.log("Block 2 not found!");
if (!html.includes(block3)) console.log("Block 3 not found!");

html = html.replace(block1, newBlock1);
html = html.replace(block2, newBlock2);
html = html.replace(block3, newBlock3);

fs.writeFileSync('index.html', html);
console.log('Safe replacement complete');
