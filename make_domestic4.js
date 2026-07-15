const fs = require('fs');
let content = fs.readFileSync('domestic.html', 'utf8');

// 1. Remove the old .card-image-wrapper CSS entirely
content = content.replace(/\.card-image-wrapper\s*\{[^}]+\}/g, '');
content = content.replace(/\.card-image-wrapper img\s*\{[^}]+\}/g, '');
content = content.replace(/\.premium-card:hover \.card-image-wrapper img\s*\{[^}]+\}/g, '');

// 2. Add the new CSS before </style>
const newCSS = `
  /* Free Style Aspect Ratio & Offset Frame CSS */
  .card-image-wrapper {
    flex: 1;
    min-width: 320px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
    background: transparent;
    overflow: visible !important;
  }
  
  .image-frame {
    position: relative;
    width: 100%;
    max-width: 420px;
    z-index: 1;
  }
  
  .image-frame::before {
    content: '';
    position: absolute;
    top: 25px;
    right: -25px;
    width: 100%;
    height: 100%;
    border: 5px solid #0077d4;
    border-radius: 16px;
    z-index: -1;
    transition: all 0.4s ease;
  }
  
  .premium-card:nth-child(even) .image-frame::before {
    right: auto;
    left: -25px;
    border-color: #ffcd57;
  }

  .image-frame img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
    border-radius: 16px;
    box-shadow: 0 15px 35px rgba(0,0,0,0.15);
    position: relative;
    z-index: 2;
    transition: transform 0.5s ease;
  }

  .premium-card:hover .image-frame::before {
    top: 15px;
    right: -15px;
  }

  .premium-card:nth-child(even):hover .image-frame::before {
    right: auto;
    left: -15px;
  }

  .premium-card:hover .image-frame img {
    transform: translateY(-5px);
  }
  
  @media (max-width: 991px) {
    .image-frame { max-width: 90%; margin-top: 20px; }
  }
`;
content = content.replace('</style>', newCSS + '\n</style>');

// 3. Ensure .premium-card overflow is visible so the offset frame isn't clipped
content = content.replace('overflow: hidden;', 'overflow: visible;');

// 4. Wrap all <img> tags inside .card-image-wrapper with .image-frame
content = content.replace(/<div class="card-image-wrapper">\s*<img([^>]+)>\s*<\/div>/g, 
  '<div class="card-image-wrapper">\n      <div class="image-frame">\n        <img$1>\n      </div>\n    </div>');

fs.writeFileSync('domestic.html', content);
console.log('domestic.html updated with free-style ratio and side offset frames');
