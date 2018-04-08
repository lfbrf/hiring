var gulp = require('gulp');

var elixir = require('laravel-elixir');
elixir.config.assetsPath = 'resources/';
elixir(function(mix) {
    mix.styles([
        'style.scss'
    ]);
});


gulp.task('default', function () { console.log('Hello Gulp!') });

