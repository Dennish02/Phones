const { src, dest, watch, parallel } = require('gulp');



// CSS
const sass = require('gulp-sass')(require('sass'));//gulp-sass se usa para conectar sass con gulp
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');//guarda la referencia y la guarda para poder leer en el navegador el codigo minificado
const autoprefixer = require('autoprefixer')//se asegura que funcione en que funcione en todos los navegadores el codigo css
const cssnano = require('cssnano')//comprime
const postcss = require('gulp-postcss')



function css( done ) {
    src('./src/assets/scss/**/*.scss') // Identificar el archivo .SCSS a compilar
        .pipe(sourcemaps.init())
        .pipe( plumber())//no detiene el workflow cuando hay un error
        .pipe( sass() ) // Compilarlo
        .pipe( postcss([autoprefixer(), cssnano()]) )
        .pipe( sourcemaps.write('.'))
        .pipe( dest('./src/assets/build/css') ) // Almacenarla en el disco duro
    done();//done es para que cuando finalize la tarea se vuelve  a llamar, para simular async
}



function dev( done ) {
    watch('src/assets/scss/**/*.scss', css);
    done();
}


//exports.css = css;

exports.dev = dev;
