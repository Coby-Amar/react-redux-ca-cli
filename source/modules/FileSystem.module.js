"use strict";
const fs = require('fs');
const textFiles = require('../textFiles');
const { Logger } = require('../shared/Logger.shared');
const logger = new Logger();

class FileSystem {
    createDirAndFiles( layout, parentPath = '' ) {
        const { path, files, dirs } = layout
        const fullPath = parentPath + path;
        FileSystem.createDir( fullPath );
        FileSystem.createFiles( files, fullPath );
        if ( dirs ) {
            dirs.forEach( dir => {
                this.createDirAndFiles( dir, fullPath );
            });                
        }
    }
    static createDir( dir ) {
        if ( this.isPathInvalid( dir )  ) {
            throw new Error( 'Give wrong or none existent location' );
        }
        const doesExist = fs.existsSync(dir);
        if (doesExist){
            FileSystem.getLogMessage( dir, 'folder', Logger.TYPES.WARNING ); 
            return true;
        }
        fs.mkdirSync(dir);
        FileSystem.getLogMessage( dir, 'folder', Logger.TYPES.CREATE );       
        return false;
    }
    static isPathInvalid( path ) {
        if ( path &&  typeof path === 'string'  ) {
            const allPaths = path.split('/');
            allPaths.pop();
            for (let index = 0, l = allPaths.length; index < l; index++) {
                const dir = allPaths.slice( 0 , index + 1 ).join('/');
                if ( !fs.existsSync( dir ) ) {
                    return true;
                }
            }
            return false;
        }
        return true;
    }
    static createFiles( files, parentPath ) {
        if( !files ) {
            return;
        }
        files.forEach( ({ type, location }) => {
            if ( type && location ) {
                const to = parentPath + location;
                const from = textFiles[ type ];
                this.writeToFile( to, from );
            }
        });
    }
    static writeToFile( to, from = null ) {
        if ( fs.existsSync(to) ) {
            FileSystem.getLogMessage( to, 'file', Logger.TYPES.WARNING ) ;
            return true;        
        }
        fs.writeFileSync( to, from || '' );        
        FileSystem.getLogMessage( to, 'file', Logger.TYPES.CREATE );
        return false;        
    }
    static getLogMessage( dir, fileOrFolder, type ) {
        const locations = dir.split('/');
        const currentDir = locations.pop()
        const message = `${ fileOrFolder }: ${ currentDir } ${ type === Logger.TYPES.WARNING ? 'already exists ' : '' }${ locations.length > 1 ? `in ${locations.join('/')}` : '' }`;
        logger.log( type, message );
    }
}
exports.FileSystem = new FileSystem();