import { task, watch, src, dest, series } from 'gulp';
import render from 'gulp-nunjucks-render';
import data from 'gulp-data';
import sass from 'gulp-sass';
import del from 'del';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'autoprefixer';
import postcss from 'gulp-postcss';
import gulpWebpack from 'webpack-stream';
import webpack from 'webpack';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';

const browserSync = require('browser-sync').create();

/**
 * Clean
 *
 * Remove old artifacts from previous builds
 */
task('clean', () => del(['dist']));

/**
 * Templates
 *
 * Generate static html from nunjucks templates
 */
task('templates', () => {
  return src(`*.njk`)
    .pipe(data(() => require('./data.json')))
    .pipe(
      render({
        path: `./`,
      })
    )
    .pipe(dest('dist'));
});

/**
 * Styles
 *
 * Compile scss files to css
 */
task('styles', () => {
  return src(`scss/main.scss`)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(
      postcss([
        autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false,
        }),
      ])
    )
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/styles'))
    .pipe(browserSync.stream());
});

/**
 * Scripts
 *
 * Convert to es5 javascript
 */
task('scripts', () => {
  return src(`js/index.js`)
    .pipe(
      gulpWebpack(
        {
          output: {
            filename: 'index.js',
          },
          mode: 'development',
          devtool: 'source-map',
          module: {
            rules: [
              {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                },
              },
            ],
          },
          plugins: [
            new webpack.ProvidePlugin({
              $: 'jquery',
              jQuery: 'jquery',
            }),
          ],
        },
        webpack
      )
    )
    .pipe(dest('dist/js'));
});

/**
 * Assets
 *
 * Move images to build folder
 */
task('assets', () => {
  return src('images/**/*').pipe(dest('dist/images/'));
});

/**
 * Build
 *
 * Generates site
 */
task('build', series('clean', 'templates', 'styles', 'scripts', 'assets'));

/**
 * Serve
 *
 * Starts a local development server with live reload
 */
task(
  'serve',
  series('build', () => {
    browserSync.init({
      server: {
        baseDir: './dist/',
      },
      open: false,
    });

    watch(`**/*.njk`, series('templates'));
    watch(`scss/**/*.scss`, series('styles'));
    watch(`js/**/*.js`, series('scripts'));

    // Reloads
    watch('dist/*.html').on('change', browserSync.reload);
    watch('dist/js/*.js').on('change', browserSync.reload);
  })
);
