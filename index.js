var gutil = require('gulp-util');
var through  = require('through2');
var path  = require('path');

module.exports = function(dest) {
    var _lines = [];
    function transform(file, encoding, callback) {
        var filepath = path.relative(path.dirname(dest), file.path);
        _lines.push('/// <reference path="' + filepath + '"/>');
        callback();
    }
    function flush(callback) {
        var file = new gutil.File({
            cwd: dest,
            path: dest,
            contents: new Buffer(_lines.join('\n'))
        });
        this.push(file);
        callback();
    }
    return through.obj(transform, flush);
};
