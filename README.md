# Ready gulp-project

1. Deploy a project
    'npm install'  - install all dependencies
    'gulp sass' - collect styles
    'gulp pug-html' - only if .pug templates in project
    'gulp watch' - run project


2. Tasks
    'gulp sass' - collect all .sass to style.css
    'gulp pug-html' - convert .pug to .html
    'gulp min-js' - concat and minify js
    'gulp min-css' - minify css
    'gulp min-image' - compress images
    'gulp px-rem' - convert px to rem
    'gulp watch' - all tasks + run localhost
    'gulp build' - collect all sources to /dist. This task automatically clean the folder before collecting.


Optional :
    'npm install bower' - install bower for libriares, e.g. jquery ( 'bower install jquery' ). All libriares install to src/libs