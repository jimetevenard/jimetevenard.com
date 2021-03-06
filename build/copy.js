 var copy = require('copy');
 var fs = require('fs');
 
 var copyCallback = function(err, files) {
  if (err) throw err;
  if(files && files.length) {
    files.forEach((f) => console.log('file copied : ' + f.dest));
  }
}

// sources
copy('img/**/*', 'dist/img', copyCallback);
copy('css/*.min.css', 'dist/css', copyCallback);
copy('branding/**/*', 'dist/branding', copyCallback);
copy('*.html', 'dist', copyCallback);
copy('favicon.ico', 'dist', copyCallback);