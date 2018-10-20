"use strict";
const textFiles = require('../textFiles');
const { FileSystem } = require('./FileSystem.module');
const { ProjectLayout } = require('../layouts/Project.layout');
const { Logger } = require( '../shared/Logger.shared' );
const logger = new Logger();

class ProjectModule {
    constructor( where, name, withRedux, shouldInstall ) {
        const regExp = new RegExp( name, 'i' );
        this.where= where.replace( regExp, '/' );
        this.name= name; 
        this.withRedux= withRedux; 
        this.shouldInstall= shouldInstall;
    }
    create() {
        const { where, name, withRedux, shouldInstall } = this;
        const projectLayout = new ProjectLayout( where, name, withRedux );
        textFiles.packageJson = textFiles.packageJson.toString().replace( /dummy/g, name );
        textFiles.componentJs = textFiles.componentJs.toString().replace( /Dummy/g, 'App' );
        if ( withRedux ) {
            textFiles.containerJs = textFiles.packageJson.toString().replace( /Dummy/g, 'App' );
            textFiles.sourceIndex = textFiles.sourceIndex.toString().replace( 'components', 'containers' );            
        }
        const layout = projectLayout.create();
        logger.log( Logger.TYPES.INFO,  `Staring to create new react ${ withRedux ? 'redux ': '' }project: ${ name }` );
        FileSystem.createDirAndFiles( layout );
        logger.log( Logger.TYPES.INFO,  `Finished creating new react ${ withRedux ? 'redux ': '' }project: ${ name }` );
        logger.log( Logger.TYPES.SHORTCUT,  'create/cre/c <where> <name> [ -r for redux ]' );
        return true;
    }
}
exports.ProjectModule = ProjectModule;
