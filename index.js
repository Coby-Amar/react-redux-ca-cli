#!/usr/bin/env node
"use strict";
const yargs = require('yargs');

const {
    options,
    commands
} = require('./source');
const { Logger } = require( './source/shared/Logger.shared' );
const logger = new Logger();
yargs
    .options( options.general )
    .scriptName('r-r-cli')
    .argv;
try {
    //Usage Command
    yargs
        .demandCommand(1, 'You need at least one command before moving on')
        .command( commands.default )
        .exitProcess()
        .argv;
    //Create Command
    yargs
        .command( commands.create )
        .options( options.create )
        .exitProcess()
        .argv;
    //Generate Command
    yargs
        .command( commands.generate )
        .options( options.generate )
        .exitProcess()
        .argv;    
} catch ({ message }) {
    logger.log(  Logger.TYPES.ERROR, message );    
}
