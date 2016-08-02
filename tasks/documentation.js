var shell = require('gulp-shell'),
    gulp = require('gulp');

gulp.task('docs', shell.task([
  'node_modules/jsdoc/jsdoc.js '+
    '-c node_modules/angular-jsdoc/common/conf.json '+   // config file
    '-t docs/documentation-template '+   // template file
    '-d docs/methods '+                           // output directory
    './README.md ' +                            // to include README.md as index contents
    '-r app/scripts docs/tutorials '  +                 // source code directory
    '-u docs/tutorials'                              // tutorials directory
]));