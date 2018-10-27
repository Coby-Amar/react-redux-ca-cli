"use strict";
const { load, commands } = require('npm');
const textFiles = require('../textFiles');
const { FileSystem } = require('./FileSystem.module');
const { ProjectLayout } = require('../layouts/Project.layout');
const { CommonFunctions } = require( '../shared/CommonFunctions.shared' );
const { Logger } = require( '../shared/Logger.shared' );
const logger = new Logger();

class ProjectModule {
    constructor( where, name, withRedux, install ) {
        const regExp = new RegExp( name, 'i' );
        this.where= where.replace( regExp, '/' );
        this.name= name; 
        this.withRedux= withRedux; 
        this.install= install;
    }
    create() {
        const { where, name, withRedux, install } = this;
        const projectLayout = new ProjectLayout( where, name, withRedux );
        textFiles.packageJson = textFiles.packageJson.toString().replace( /dummy/g, name );
        textFiles.indexHtml = textFiles.indexHtml.toString().replace( /Dummy/, name );
        textFiles.componentJs = textFiles.componentJs.toString().replace( /Dummy/g, 'App' );
        if ( withRedux ) {
            textFiles.containerJs = textFiles.containerJs.toString().replace( /Dummy/g, 'App' );
            textFiles.sourceIndex = textFiles.sourceIndex.toString().replace( 'components', 'containers' );            
        }
        const layout = projectLayout.create();
        logger.log( Logger.TYPES.INFO,  `Staring to create new react ${ withRedux ? 'redux ': '' }project: ${ name }` );
        FileSystem.createDirAndFiles( layout );
        logger.log( Logger.TYPES.INFO,  `Finished creating new react ${ withRedux ? 'redux ': '' }project: ${ name }` );
        logger.log( Logger.TYPES.SHORTCUT,  'create/cre/c <where> <name> [ -r for redux ] [ -i to install ]' );
        if ( install ) {
            try {
                const home = `${ where }${  name ?  where.endsWith('/') ? name: '/' + name : '' }`;
                process.chdir( home );
                load({}, () => {
                    logger.log( Logger.TYPES.INFO, 'Started installing node_modules' );
                    commands.install([''], () => {
                        logger.log( Logger.TYPES.INFO,  'Finished installing node_modules' );
                    });
                })
            } catch (error) {
                console.log('install failed');
                throw new Error('Error Code: 101. Ask on Git Hub!')
            }
        }
        return true;
    }
}
exports.ProjectModule = ProjectModule;
