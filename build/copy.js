const fs = require("fs")
const path = require("path")

const isDirectorySync = function(src){
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  return exists && stats.isDirectory();
}

/**
 * Look ma, it's cp -R.
 * @param {string} src  The path to the thing to copy.
 * @param {string} dest The path to the new copy.
 */
const copyRecursiveSync = function(src, dest) {
  if (isDirectorySync(src)) {
    fs.mkdirSync(dest);
    fs.readdirSync(src).forEach(function(childItemName) {
      copyRecursiveSync(path.join(src, childItemName),
                        path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
};

const copySiteFiles = function(){
  
  if(isDirectorySync('dist')) fs.rmdirSync('dist', {recursive: true});

  fs.mkdirSync('dist');
  copyRecursiveSync('img', 'dist/img');
  copyRecursiveSync('css', 'dist/css');
  copyRecursiveSync('js', 'dist/js');
  fs.copyFileSync('index.html', 'dist/index.html');
  fs.copyFileSync('favicon.ico', 'dist/favicon.ico');
}

copySiteFiles();

