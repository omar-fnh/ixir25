const { watch, series,src,dest } = require('gulp');
const include = require('gulp-include')

function defaultTask(cb) {
    // place code for your default task here
    cb();
  }

  function clean(cb) {
    // body omitted
    cb();
  }
  
  function javascript(cb) {
    return src('src/js/main.js')
    .pipe(include())
    .on('error', console.log)
    .pipe(dest('build/js/'));
    cb();
  }

  function php(cb) {
    return src('src/*.php')
    .pipe(include())
      .on('error', console.log)
    .pipe(dest('build/'));
    cb();
  }


  function php_folder(cb) {
    src(['src/docs/**/*']).pipe(dest('build/docs/'));
    src(['src/log/**/*']).pipe(dest('build/log/'));
    return src('src/php/**/*').pipe(dest('build/php/'));
    cb();
  }
  
  function css(cb) {
    return src('src/css/main.css')
    .pipe(include())
      .on('error', console.log)
    .pipe(dest('build/css/'));
    cb();
  }

  function images(cb){
    return src('src/images/**/*')
    .pipe(dest('build/images/'))
    cb(); 
  }
  
  exports.default = function() {

    watch('src/**/*.css', css);
    watch('src/js/**/*', javascript);
    watch('src/images/*', images);
    watch(['src/*.php','src/html/**/*'], php);
    watch('src/php/*', php_folder);

  };



