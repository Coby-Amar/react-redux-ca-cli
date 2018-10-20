"use strict";
const { generate } = require('../modules');
const { GENERATABLE_TYPES } = require('../shared/Arrays.shared');
const { GENERATABLE_TYPES_ALAIAES } = require('../shared/Objects.shared');
const { Logger } = require( '../shared/Logger.shared' );
const logger = new Logger();

exports.command = [ 'generate <type> <where> <name>', 'g', 'gen' ]; 
exports.des = 'generate new <type> <where> u tell it to with the <name> you give( first letter of name with be changed to upper case ) '; 
exports.builder = yargs => {
    yargs.positional('type', {
        choices: GENERATABLE_TYPES,
        describe: 'What to generate',
        type: 'string'
    });
    yargs.positional('where', {
        describe: 'Where to generate',
        type: 'string'
    });
    yargs.positional('name', {
        describe: 'Name of generated',
        type: 'string'
    });
    };
exports.handler = ({ type, where, name }) => {
    if ( !where || !name || !type ) {
        throw new Error('Error Code: 100. Ask on git Hub!');
    }
    const nameToUpper = firstLetterToUpper( name );
    logger.log( Logger.TYPES.INFO, `Starting to generate new ${ type }: ${ nameToUpper }` );
    const result = generate(type, where, nameToUpper);
    logger.log( Logger.TYPES.INFO, `Finished generating new ${ type }: ${ nameToUpper }` );
    logger.log( Logger.TYPES.SHORTCUT, `generate ${ GENERATABLE_TYPES_ALAIAES[ type ].join('/') } <where> <name>` );
    return result;
};