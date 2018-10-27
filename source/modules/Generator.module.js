"use strict";
const textFiles = require('../textFiles');
const { FileSystem } = require('./FileSystem.module');
const { GeneratorLayout } = require('../layouts/Generator.layout');
const { CommonFunctions } = require('../shared/CommonFunctions.shared');
const { Js } = require('../shared/Strings.shared');
const { Logger } = require( '../shared/Logger.shared' );
const logger = new Logger();

class GeneratorModule {
    constructor( where, type, name ) {
        const regExp = new RegExp( name, 'i' );
        this.where = where.replace( regExp, '/' );
        this.type = type; 
        this.name = CommonFunctions.firstLetterToUpper( this.where.endsWith('/') ? name : '/' + name );
    }
    generate() {
        const { where, type, name } = this;
        logger.log( Logger.TYPES.INFO, `Starting to generate new ${ type }: ${ name }` );
        const generatorLayout = new GeneratorLayout( where, type, name );
        textFiles[ type + Js ] = textFiles[ type + Js ].toString().replace( /Dummy/g, name );
        const layout = generatorLayout.generate();
        FileSystem.createDirAndFiles( layout ); 
        logger.log( Logger.TYPES.INFO, `Finished generating new ${ type }: ${ name }` );
        logger.log( Logger.TYPES.SHORTCUT, `generate ${ type } <where> <name>` );
        return true;
    }
    
}
exports.GeneratorModule = GeneratorModule;