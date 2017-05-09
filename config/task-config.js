const path = require('path');
const pug  = require('gulp-pug');
const browserSync    = require('browser-sync')
const gulpif         = require('gulp-if');
const htmlmin        = require('gulp-htmlmin');
const handleErrors   = require('blendid/gulpfile.js/lib/handleErrors');

// const paths = {
//     src:  path.resolve(process.env.CWD, PATH_CONFIG.src, PATH_CONFIG.pug.src, '*.pug'),
//     dest: path.resolve(process.env.CWD, PATH_CONFIG.dest, PATH_CONFIG.pug.dest)
// }
const paths = {
    pug : {
        src: path.resolve(process.env.PWD, PATH_CONFIG.src, PATH_CONFIG.html.src, '*.pug'),
        dest: path.resolve(process.env.PWD, PATH_CONFIG.dest, PATH_CONFIG.html.dest)
    }
}
module.exports = {
    html        : false,
    images      : true,
    fonts       : true,
    static      : true,
    svgSprite   : true,
    ghPages     : true,
    stylesheets : true,

    javascripts: {
        entry: {
            // files paths are relative to
            // javascripts.dest in path-config.json
            app: ["./app.js"]
        }
    },

    browserSync: {
        port: 9000,
        proxy: {
            target: "localhost:3000"
        },
        files: ['views/**/*.pug']

    },

    production: {
        rev: true
    }
}

