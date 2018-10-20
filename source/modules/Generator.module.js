"use strict";
const { FileSystem } = require('./FileSystem.module');

class GeneratorModule {
    constructor( where, type, name ) {
        this.where = where; 
        this.type = type; 
        this.name = name;
    }
    generate() {
        const { where, type, name } = this;
        const regExp = new RegExp( name, 'i' );
        const layout = generatorLayouts( type, where.replace( regExp, '/' ) , name );
        FileSystem.createDirAndFiles( layout ); 
        return true;
    }
    
}
exports.GeneratorModule = GeneratorModule;