const gulp = require("gulp");
const sass = require("gulp-sass");
const sassGlob = require("gulp-sass-glob");

function compileSass() {
  return gulp
    .src("styles/**/*.scss") // Chemin de vos fichiers SCSS dans le dossier "styles"
    .pipe(sassGlob()) // Prend en charge les imports SCSS avec des wildcards (*)
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("public/css")); // Chemin de destination pour les fichiers CSS générés
}

function watchFiles() {
  gulp.watch("styles/**/*.scss", compileSass);
}

// Définissez une tâche par défaut pour exécuter la compilation et la surveillance
exports.default = gulp.series(compileSass, watchFiles);
