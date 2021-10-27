 var copy = require('copy');
 var fs = require('fs');
 
 var copyCallback = function(err, files) {
  if (err) throw err;
  if(files && files.length) {
    files.forEach((f) => console.log('file copied : ' + f.dest));
  }
}

// sources
copy('img/**/*', 'docs/img', copyCallback);
copy('css/*.min.css', 'docs/css', copyCallback);
copy('branding/**/*', 'docs/branding', copyCallback);
copy('*.html', 'docs', copyCallback);
copy('favicon.ico', 'docs', copyCallback);