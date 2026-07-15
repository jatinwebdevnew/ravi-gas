const fs = require('fs');
let widget = fs.readFileSync('dumped.html', 'utf8');

// Replace card 1 (Drilling -> Domestic LPG)
widget = widget.replace(/https:\/\/promo-theme.com\/fuelgize\/wp-content\/uploads\/2024\/02\/fuelgize-03\.webp[^>]*>/g, 'images/Domestic-1.jpg" class="attachment-full size-full" alt="Domestic LPG" style="width:100%;height:100%;object-fit:cover;" />');
widget = widget.replace(/Drilling/g, 'Domestic LPG');

// Replace card 2 (Transportation -> Commercial LPG)
widget = widget.replace(/https:\/\/promo-theme.com\/fuelgize\/wp-content\/uploads\/2024\/02\/fuelgize-04\.webp[^>]*>/g, 'images/service-commercial.png" class="attachment-full size-full" alt="Commercial LPG" style="width:100%;height:100%;object-fit:cover;" />');
widget = widget.replace(/Transportation/g, 'Commercial LPG');

// Replace card 3 (Transportation -> Industrial Supply)
// Wait, the third card has "Transportation" too in the original dumped.html. We need to be careful to only replace the third one.
// Let's just do it sequentially.
let parts = widget.split('pt-service-image');
if (parts.length > 3) {
  parts[3] = parts[3].replace(/https:\/\/promo-theme.com\/fuelgize\/wp-content\/uploads\/2024\/02\/fuelgize-05\.webp[^>]*>/, 'images/Industrial.jpg" class="attachment-full size-full" alt="Industrial Supply" style="width:100%;height:100%;object-fit:cover;" />');
  parts[3] = parts[3].replace(/Commercial LPG/, 'Industrial Supply'); // because we globally replaced Transportation to Commercial LPG above
}
widget = parts.join('pt-service-image');

widget = widget.replace(/\/fuelgize\/services\//g, 'domestic.html'); // just link all to domestic for simplicity, or we can use generic links
widget = widget.replace(/href="#"/g, 'href="our-products.html"');

fs.writeFileSync('dumped_fixed.html', widget);
console.log('Fixed widget written to dumped_fixed.html');
