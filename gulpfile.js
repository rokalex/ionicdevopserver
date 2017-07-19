/**
 * @Author: alexandrerocca
 * @Date:   2017-07-19T12:55:43+02:00
 * @Last modified by:   alexandrerocca
 * @Last modified time: 2017-07-19T12:57:42+02:00
 */


 var gulp = require('gulp');
 var ghPages = require('gulp-gh-pages');

 var path = "./platforms/browser/www";

 gulp.task('deploy', function() {
   return gulp.src( path+'/**/*' )
     .pipe(ghPages());
 });
