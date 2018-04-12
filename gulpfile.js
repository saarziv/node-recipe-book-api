
const gulp = require('gulp');
const ts  = require('gulp-typescript');
const JSON_FILES = ['src/*.json','src/**/*.json'];

//stores the typescript configuration we have in our tsconfig.json.
const tsProject = ts.createProject('tsconfig.json');

//creates a gulp task named scripts (can be executed from cli by gulp scripts)
gulp.task('scripts', () =>{

    //explanation of ts functions here :https://github.com/ivogabe/gulp-typescript/blob/master/readme.md
    //explanation of gulp functions here :https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulpdestpath-options


    //gets the ts files returned from the tsconfig.file with the src()(probably according to the include property in the ts.config.json.)
    //then on the pipe with the tsProject() compiles the ts files retrieved to js , and stores it all in tsResult (its not an async functions..)
    //then we use the  gulp.dest('path') to write the compiled js files to the build directory.
    const tsResult = tsProject.src().pipe(tsProject());
    return tsResult.js.pipe(gulp.dest('build'));
});

//creates task named watch , and when execute will execute itself plus the scripts task.
//gulp.watch gets a globe (which is a path described in a patter like src/**/*.js) and
// on every change made in that path executes the scripts task
gulp.task('watch', ['scripts'], () => {
    gulp.watch('src/**/*.js',['scripts']);
});

//gets all the json files in the following paths :'src/*.json','src/**/*.json' and puts them in the /build directory.
gulp.task('assets',function () {

    return gulp.src(JSON_FILES).pipe(gulp.dest('build'));
});

//when running gulp from cli without any task name , it will defaultly run the watch and assets tasks.
//where the watch task runs the scripts task (only after a change in the src folder)
gulp.task('default',['watch','assets']);

//not in package.json scripts we add the : gulp scripts
//which will run all the tasks here..