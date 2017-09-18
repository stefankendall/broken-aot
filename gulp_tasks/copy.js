const gulp = require('gulp');
const gulpCopy = require('gulp-copy');

gulp.task('copy:docs', () => {
  return gulp.src(['docs/*.*']).pipe(gulpCopy('dist'));
});
