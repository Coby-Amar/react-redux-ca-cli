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
    Redux,
    shared
} = require('../shared/Strings.shared');
class ProjectLayout {
    constructor( where, name, isRedux ) {
        this.where = where; 
        this.name = name; 
        this.isRedux = isRedux;
        this.generatorLayout = new GeneratorLayout();
        const { component, container, actionType, action, reducer } = this.generatorLayout;
        this.defaultSourceDir = [
            {
                path: `/${ shared }`
            },
            component
        ];
        this.reduxSourceDir = [
            ...this.defaultSourceDir,
            container,
            actionType,
            action,
            reducer
        ]
    }
    create() {
        const { where, name, isRedux, defaultSourceDir, reduxSourceDir, generatorLayout } = this;
        const home = `${ where }${  name ?  where.endsWith('/') ? name: '/' + name : '' }`;
        const { module, route } = generatorLayout;
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
            }],
            dirs: [{
                path: '/public',
                dirs: [{
                    path: '/scripts'
                }, {
                    path: '/styles'
                }],
                files: [ {
                    type: indexHtml,
                    location: '/index.html'
                }]
            }, 
            module,
            route,
            {
                path: `/${ source }`,
                files: [{
                    type: source + Index + ( isRedux ? Redux : '' ),
                    location: '/index.js'
                }],
                dirs: isRedux ?  reduxSourceDir : defaultSourceDir
            }]
        };

    }
}
exports.ProjectLayout = ProjectLayout;