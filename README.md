# gulp-ts-reference

## Usage

```javascript
var gulp = require('gulp');
var tsReference = require('gulp-ts-reference');

gulp.task('default', function(){
    var dest = 'dest/include.d.ts';
	gulp.src('src/**/*.ts')
        .pipe(tsReference(dest))
        .pipe(gulp.dest(dest));
});
```
