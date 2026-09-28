import QRCode from 'qrcode';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const reviewUrl = "https://g.page/r/CUnYdHkUFe8IEBI/review";
const outputDir = path.join(__dirname, '../public');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate luxury Gold QR code on Dark Brown background
QRCode.toFile(
  path.join(outputDir, 'rokea-review-qr.png'),
  reviewUrl,
  {
    width: 1024,
    margin: 3,
    color: {
      dark: '#dfb76c',   // Royal Gold
      light: '#170f0a'   // Rich Chocolate Brown
    },
    errorCorrectionLevel: 'H'
  },
  function (err) {
    if (err) throw err;
    console.log('✅ High-resolution ROKEA QR Code generated in public/rokea-review-qr.png');
  }
);

// Also generate SVG version for vector printing
QRCode.toString(
  reviewUrl,
  {
    type: 'svg',
    margin: 3,
    color: {
      dark: '#dfb76c',
      light: '#170f0a'
    },
    errorCorrectionLevel: 'H'
  },
  function (err, string) {
    if (err) throw err;
    fs.writeFileSync(path.join(outputDir, 'rokea-review-qr.svg'), string);
    console.log('✅ Vector SVG ROKEA QR Code generated in public/rokea-review-qr.svg');
  }
);
