"use strict";
const { GeneratorLayout } = require('./Generator.layout');
const {
    source,
    packageJson,
    gitIgnore,
    server,
    babelRc,
    webPack,
    indexHtml,
    Index,
    shared
} = require('../shared/Strings.shared');
class ProjectLayout {
    constructor( where, name, isRedux ) {
        this.where = where; 
        this.name = name; 
        this.isRedux = isRedux;
        this.generatorLayout = new GeneratorLayout( where );
        this.defaultSourceDir = [
            this.generatorLayout.component
        ];
        this.reduxSourceDir = [
            ...this.defaultSourceDir,
            this.generatorLayout.container,
            this.generatorLayout.actionType,
            this.generatorLayout.action,
            this.generatorLayout.reducer
        ]
    }
    get create() {
        const { where, name, isRedux, defaultSourceDir, reduxSourceDir, generatorLayout } = this;
        const home = `./${ where }${ name ? '/' + name : '' }`;
        return {
            path: home,
            files: [{
                type: packageJson,
                location: '/package.json'
            }, {
                type: babelRc,
                location: '/.babelrc'
            }, {
                type: gitIgnore,
                location: '/.gitignore'
            }, {
                type: webPack,
                location: '/webpack.config.js'
            }, {
                type: server,
                location: '/app.js'
            }, {
                type: indexHtml,
                location: '/index.html'
            }],
            dirs: [{
                path: '/public',
                dirs: [{
                    path: '/scripts'
                }, {
                    path: '/styles'
                }]
            }, {
                path: `/${ shared }`
            }, 
            generatorLayout.module,
            generatorLayout.route,
            {
                path: `/${ source }`,
                files: [{
                    type: source + Index,
                    location: '/index.js'
                }],
                dirs: isRedux ?  reduxSourceDir : defaultSourceDir
            }]
        };

    }
}
exports.ProjectLayout = ProjectLayout;