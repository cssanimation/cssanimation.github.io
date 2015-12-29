// Generated on 2015-01-15 using generator-jekyllized 0.7.0
'use strict';

var gulp = require('gulp');
// Loads the plugins without having to list all of them, but you need
// to call them as $.pluginname
var $ = require('gulp-load-plugins')();
var tinypng = require('gulp-tinypng-compress');
var critical = require('critical');

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

gulp.task('images', function () {
  gulp.src('_src/images/**/*.{png,jpg,jpeg}')
  .pipe(tinypng({
      key: 'K6Et0FaK-Ybw480ibpNN99XvU9mJsLqD',
      sigFile: 'images/.tinypng-sigs',
      log: true
  }))
  .pipe(gulp.dest('images'));
});

// Generate & Inline Critical-path CSS
gulp.task('critical', function (cb) {
    critical.generate({
        inline: false,
        base: '_site/',
        src: 'index.html',
        dest: '_include/critical.css',
        width: 860,
        height: 680,
        minify: true
    });
});

// Page speed analysis
var psi = require('psi');
var site = 'https://cssanimation.rocks';
var key = '';

// Please feel free to use the `nokey` option to try out PageSpeed
// Insights as part of your build process. For more frequent use,
// we recommend registering for your own API key. For more info:
// https://developers.google.com/speed/docs/insights/v2/getting-started

gulp.task('mobile', function () {
    return psi(site, {
        // key: key
        nokey: 'true',
        strategy: 'mobile',
    }).then(function (data) {
        console.log('Speed score: ' + data.ruleGroups.SPEED.score);
        console.log('Usability score: ' + data.ruleGroups.USABILITY.score);
    });
});

gulp.task('desktop', function () {
    return psi(site, {
        nokey: 'true',
        // key: key,
        strategy: 'desktop',
    }).then(function (data) {
        console.log('Speed score: ' + data.ruleGroups.SPEED.score);
    });
});


gulp.task('build:dev', $.shell.task('jekyll build --watch --config _config.yml,_dev_config.yml'));

gulp.task('build:prod', $.shell.task('jekyll build --watch --config _config.yml'));

gulp.task('serve', function () {
  browserSync.init({server: {baseDir: '_site/'}});
  // Reloads page when some of the already built files changed:
  gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});



// These tasks will look for files that change while serving and will auto-regenerate or
// reload the website accordingly. Update or add other files you need to be watched.
gulp.task('watch', function () {
  gulp.watch(['_src/sass/**/*.scss'], ['styles']);
  gulp.watch(['_src/images/**/*.{png,jpg,jpeg}'], ['images']);
});

// Default task, run when just writing 'gulp' in the terminal
gulp.task('default', ['styles', 'images', 'build:dev', 'serve', 'watch']);

gulp.task('prod', ['styles', 'images', 'build:prod', 'serve', 'watch']);
