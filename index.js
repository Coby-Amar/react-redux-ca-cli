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
    .options( options.default )
    .scriptName('r-r-cli')
    .argv;
try {
    //Usage Command
    yargs
        .demandCommand(1, 'You need at least one command before moving on')
        .command( commands.default )
    //Create Command
        .command( commands.create )
    //Generate Command
    yargs
        .command( commands.generate )
        .exitProcess()
        .argv;    
} catch ({ message }) {
    logger.log(  Logger.TYPES.ERROR, message );    
}
