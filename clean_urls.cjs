const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dirPath));
  });
}

walkDir(path.join(__dirname, 'src'), (filePath) => {
  if (!filePath.endsWith('.ts') && !filePath.endsWith('.tsx')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;

  // Replace API.something(`/api/...) with API.something(`/...)
  newContent = newContent.replace(/\bAPI\.(get|post|put|delete|patch)\(\s*([`'"])\/api\//g, 'API.$1($2/');
  
  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent);
    console.log(`Updated ${filePath}`);
  }
});
