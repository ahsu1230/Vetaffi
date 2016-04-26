var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('start', function() {
  return browserSync.reload({
      stream: true
    });
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: '.'
    },
  })
});

gulp.task('watch', ['browserSync'], function (){
  gulp.watch('*.html', browserSync.reload); 
});

gulp.task('default', ['start', 'browserSync']);