// removeFrontmatter.js
import fs from 'fs';
import path from 'path';

const BLOG_DIR = './src/content/blog';

function removeFrontmatterFromFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const cleaned = content.replace(/^---[\s\S]*?---\n*/, ''); // borra el frontmatter si lo hay
  fs.writeFileSync(filePath, cleaned, 'utf-8');
  console.log(`🧹 Limpio: ${filePath}`);
}

function processBlogFiles() {
  const files = fs.readdirSync(BLOG_DIR);
  files.forEach((file) => {
    const fullPath = path.join(BLOG_DIR, file);
    if (path.extname(fullPath) === '.md') {
      removeFrontmatterFromFile(fullPath);
    }
  });
}

processBlogFiles();
