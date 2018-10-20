"use strict";
const textFiles = require('../textFiles');
const { FileSystem } = require('./FileSystem.module');
const { ProjectLayout } = require('../layouts/Project.layout');

class ProjectModule {
    constructor( where, name, isRedux, shouldInstall ) {
        const regExp = new RegExp( name, 'i' );
        this.where= where.replace( regExp, '/' );
        this.name= name; 
        this.isRedux= isRedux; 
        this.shouldInstall= shouldInstall;
    }
    create() {
        const { where, name, isRedux, shouldInstall } = this;
        const projectLayout = new ProjectLayout( where, name, isRedux );
        textFiles.packageJson = textFiles.packageJson.toString().replace( /dummy/g, name );
        textFiles.componentJs = textFiles.componentJs.toString().replace( /Dummy/g, 'App' );
        if ( isRedux ) {
            textFiles.containerJs = textFiles.packageJson.toString().replace( /Dummy/g, 'App' );
            textFiles.sourceIndex = textFiles.sourceIndex.toString().replace( 'components', 'containers' );            
        }
        const layout = projectLayout.create;
        FileSystem.createDirAndFiles( layout );
        return true;
    }
}
exports.ProjectModule = ProjectModule;
