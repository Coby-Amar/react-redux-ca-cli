"use strict";
const fs = require( 'fs' );

class CommonFunctions {
    /**
     * 
     * @param {string} input 
     */
    invalidLocation( input ) {
        return `${ input }: is NOT a valid location`;
    }

    /**
     * 
     * @param {string} text 
     */
    firstLetterToUpper( text ) {
        return text[0].toUpperCase() + text.substring(1, text.length );
    }

    /**
     * 
     * @param {string} stringToReplace 
     * @param {string} replaceWith 
     */
    replaceDummy( stringToReplace, replaceWith ) {
        return stringToReplace.replace( /Dummy/g, replaceWith );
    }
    /**
     * 
     * @param {string} path 
     */
    validatePath( path ) {
        const regex = /(^\.\/|\.\.\/[a-zA-z-_/]*){1}(?:[\/a-zA-z-_/]*)/.test( path );
        if (!regex) {
            return `Invalid: ${path} MUST start with ./ OR ../`
        }
        const condition =  fs.existsSync( path );
        return condition || `Invalid: Given path ${path} doesn't exist`;
    }
    /**
     * 
     * @param {string} name 
     * @param {string} type 
     */
    validateName( name, type ) {
        if ( type ) {
            return /^[a-zA-Z]+$/.test( name ) || `Invalid: ${ name } can only contain letters`;
        }
        return /^[a-z-_]+$/.test( name ) || `Invalid: ${ name } can only contain lower case letters, - and _`;
    }
}
exports.CommonFunctions = new CommonFunctions();