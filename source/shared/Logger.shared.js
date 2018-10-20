"use strict";
const { 
    greenBright, 
    blueBright,
    bgWhiteBright,
    yellowBright,
    redBright
} = require( 'chalk' ).default
const { LOG_TYPES } = require('./objects.shared');
class Logger {
    log( type, message ) {
        switch ( type ) {
            case LOG_TYPES.CREATE: {
                return console.log(`${ greenBright('[ Create ]') } ${ message }`);
            }
            case LOG_TYPES.SHORTCUT: {
                return console.log(`${ blueBright('[ Shortcut ]') } ${ message }`);
            }
            case LOG_TYPES.INFO: {
                return console.info(`${ bgWhiteBright.black('[ Info ]') } ${ message }`);
            }
            case LOG_TYPES.WARNING: {
                return console.warn(`${ yellowBright('[ Warning ]') } ${ message }`);
            }
            case LOG_TYPES.ERROR: {
                return console.error(`${ redBright('[ Error ]') } ${ message }`);
            }
        }
    }

    static get TYPES() {
        return LOG_TYPES;
    }
}
exports.Logger = Logger;