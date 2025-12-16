#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const pkg = require('../package.json');

const headerTemplate = `// ${pkg.name} v${pkg.version}\n`;
const libDir = 'lib';

function addHeaderToFiles() {
  if (!fs.existsSync(libDir)) {
    console.error(`Directory ${libDir} does not exist`);
    return;
  }

  const files = fs.readdirSync(libDir);
  
  files.forEach(file => {
    if (file.endsWith('.js') || file.endsWith('.d.ts')) {
      const filePath = path.join(libDir, file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Only add header if it doesn't already exist
      if (!content.startsWith('//')) {
        const newContent = headerTemplate + content;
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Added header to ${file}`);
      }
    }
  });
}

addHeaderToFiles();