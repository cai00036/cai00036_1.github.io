const gulp = require('gulp')
const sass = require('gulp-sass')

gulp.task('sass', function () {
  return gulp
    .src('scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
})
gulp.task('default', function () {
  gulp.watch('scss/**/*.scss', gulp.series('sass'))
})
//
// const gulp = require('gulp')
// const sass = require('gulp-sass')
// const browserSync = require('browser-sync').create()
// const postcss = require('gulp-postcss')//load the postcss library
// const autoprefixer = require('autoprefixer')//load the
// const cssnano = require('cssnano')//load the cssnano plugin
//
// /Define a task to compile Sass and run autoprefixerand cssnano
// gulp.task('sass',function(){
// const plugins = [
//   autoprefixer ({browsers: ['last 2 version']}),
// cssnano()
// ]
//
// return gulp
//   .src ('scss/**/*.scss')//source of any sass files
// .pipe(sass())//run the sass compiler on the source filter
// .pipe(gulp.dest('css'))//destination for the compiled css files
// .pipe(postcss(plugins))//apply the PostCSS plugins
// .pipe(gulp.dest('./css/min'))//path to output the minified css file
// .pipe(browserSync.stream())//run the browersync stream
//
// })
//
//
//
// //Define the default task
// gulp.task('default',function( ) {
//   //initialize browserSync on the current folder
// browserSync.init({server:'./'})
// //watch for changes toany files in scss folder and its sub folders and with .scss extension, run the sass task when a change is found
// gulp.watch('scss/**/*.scss',gulp.series('sass'))
// //watch for changes on any .html file and reload the browser on change
// gulp.watch('*.html').on('change',browserSync.reload)
// })
