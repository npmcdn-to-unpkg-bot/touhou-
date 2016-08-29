// Karma configuration
'use strict';

module.exports = function(config) {
    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            // bower:js
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-animate/angular-animate.js',
            'app/bower_components/angular-aria/angular-aria.js',
            'app/bower_components/angular-ui-router/release/angular-ui-router.js',
            'app/bower_components/angular-strap/dist/angular-strap.js',
            'app/bower_components/angular-strap/dist/angular-strap.tpl.js',
            'app/bower_components/angular-gettext/dist/angular-gettext.js',
            'app/bower_components/angularjs-datepicker/dist/angular-datepicker.min.js',
            'app/bower_components/at-table/dist/angular-table.js',
            'app/bower_components/lodash/lodash.js',
            'app/bower_components/restangular/dist/restangular.js',
            'app/bower_components/angular-apimock/dist/angular-apimock.js',
            'app/bower_components/moment/moment.js',
            'app/bower_components/underscore/underscore.js',
            'app/bower_components/spin.js/spin.js',
            'app/bower_components/angular-spinner/angular-spinner.js',
            'app/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
            'app/bower_components/angular-messages/angular-messages.js',
            'app/bower_components/angular-toastr/dist/angular-toastr.tpls.js',
            'app/bower_components/angular-locker/dist/angular-locker.min.js',
            'app/bower_components/angular-ui-tree/dist/angular-ui-tree.js',
            'app/bower_components/js-md5/js/md5.js',
            'app/bower_components/chart.js/dist/Chart.min.js',
            'app/bower_components/angular-chart.js/dist/angular-chart.js',
            'app/bower_components/ng-img-crop/compile/minified/ng-img-crop.js',
            'app/bower_components/angular-upload/angular-upload.js',
            'app/bower_components/ng-file-upload/ng-file-upload.js',
            'app/bower_components/ng-file-upload-shim/ng-file-upload-shim.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            'app/bower_components/karma-read-json/karma-read-json.js',
            // endbower

            // modules first
            'app/scripts/**/_*.js',
            // all the rest of the files
            'app/scripts/**/*.js',
            // load html as well as required for karma-ng-html2js-preprocessor
            'app/scripts/**/*.html',
            
            // JSON test fixtures
            {
                pattern:  '*/mock_data/**/*.json',
                watched:  true,
                served:   true,
                included: false
            }
        ],


        // list of files to exclude
        exclude: [],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        plugins: [
            'karma-jasmine',
            //'karma-coverage',
            'karma-phantomjs-launcher',
            'karma-ng-html2js-preprocessor'
        ],

        preprocessors: {
            //'**/app/scripts/**/!(*spec).js': 'coverage',
            '**/app/scripts/**/*.html': 'ng-html2js'
        },

        ngHtml2JsPreprocessor: {
            moduleName: 'templates',
            stripPrefix: 'app/'
        },

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    });
};
