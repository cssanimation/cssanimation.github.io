// Generated on 2015-01-15 using generator-jekyllized 0.7.0
'use strict';

var gulp = require('gulp');
// Loads the plugins without having to list all of them, but you need
// to call them as $.pluginname
var $ = require('gulp-load-plugins')();

// BrowserSync isn't a gulp package, and needs to be loaded manually
var browserSync = require('browser-sync');

// Compiles the SASS files and moves them into the 'assets/stylesheets' directory
gulp.task('styles', function () {
  // Looks at the style.scss file for what to include and creates a style.css file
  return gulp.src('_src/sass/**/*.scss')
    .pipe($.sass({outputStyle: 'compressed'}))
    // AutoPrefix your CSS so it works between browsers
    .pipe($.autoprefixer('last 2 versions', { cascade: true }))
    // Directory your CSS file goes to
    .pipe(gulp.dest('css/'))
    // Outputs the size of the CSS file
    .pipe($.size({title: 'styles'}))
});

// Optimizes the images that exists
gulp.task('images', function () {
  return gulp.src('_src/images/**')
    //.pipe($.changed('images'))
    .pipe($.imagemin({
      // Lossless conversion to progressive JPGs
      progressive: true,
      // Interlace GIFs for progressive rendering
      interlaced: true
    }))
    .pipe(gulp.dest('images'))
    .pipe($.size({title: 'images'}));
});

gulp.task('build', $.shell.task('jekyll build --watch'));

gulp.task('serve', function () {
  browserSync.init({server: {baseDir: '_site/'}});
  // Reloads page when some of the already built files changed:
  gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});

// These tasks will look for files that change while serving and will auto-regenerate or
// reload the website accordingly. Update or add other files you need to be watched.
gulp.task('watch', function () {
  gulp.watch(['src/sass/**/*.scss'], ['styles']);
});

// Default task, run when just writing 'gulp' in the terminal
gulp.task('default', ['styles', 'build', 'serve', 'watch']);
