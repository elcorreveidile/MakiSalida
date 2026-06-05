const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

async function createFavicons() {
  try {
    // Configuración para las imágenes
    const sizes = [32, 192, 180];

    for (const size of sizes) {
      // Crear un SVG dinámico
      const svg = `
        <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
          <rect width="${size}" height="${size}" fill="#FFD700" rx="${size / 2}"/>
          <text x="${size/2}" y="${size * 0.7}" font-size="${size * 0.55}" text-anchor="middle" font-family="Apple Color Emoji, Segoe UI Emoji, Arial">🚪</text>
        </svg>
      `;

      // Convertir SVG a PNG usando sharp
      const png = await sharp(Buffer.from(svg))
        .resize(size, size)
        .png()
        .toBuffer();

      const filename = size === 180 ? 'apple-icon.png' : `favicon-${size}x${size}.png`;
      fs.writeFileSync(path.join(publicDir, filename), png);
      console.log(`✅ Created ${filename}`);
    }

    // Crear favicon.ico (múltiples tamaños en un archivo)
    // Para simplificar, creamos un PNG de 32x32 y lo usamos como .ico
    const svg32 = `
      <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" fill="#FFD700" rx="16"/>
        <text x="16" y="22" font-size="18" text-anchor="middle" font-family="Apple Color Emoji, Segoe UI Emoji, Arial">🚪</text>
      </svg>
    `;

    const icoPng = await sharp(Buffer.from(svg32))
      .png()
      .toBuffer();

    fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoPng);
    console.log('✅ Created favicon.ico');

    console.log('✅ All favicons created successfully!');
  } catch (error) {
    console.error('❌ Error creating favicons:', error);
  }
}

createFavicons();
