"use strict";
const { prompt } = require( 'inquirer' );
const Questions = require( '../Questions' );
const commands = {
    create: require( './create.command' ),
    generate: require( './generate.command' )

}
const { cancel } = require( '../shared/Strings.shared' );
const { Logger } = require( '../shared/Logger.shared' );
const logger = new Logger();

exports.command = '$0'; 
exports.des = 'What Would you like to do?';
exports.builder = yargs => {}; 
exports.handler = argv => {
    if ( argv._.length > 0 ) {
        return;
    }
    prompt( Questions )
        .then( answers => {
            const { start } = answers;
            if ( start === cancel ) {
                return logger.log( Logger.TYPES.INFO,  'Bye, Have a nice day ;)' );
            }
            commands[ start ].handler( answers );
        })
        .catch( ({ message }) => {
            logger.log( Logger.TYPES.ERROR,  message );
        })
};