#!/usr/bin/env node
"use strict";
const yargs = require('yargs');

const {
    options,
    commands
} = require('./source');
// const { functions: { log }, strings: {  ERROR } } = require( './src/shared' );
try {
    yargs
        .options( options.general )
        .scriptName('r-r-cli')
        .argv;
    yargs
        .demandCommand(1, 'You need at least one command before moving on')
        //Usage Command
        .command( commands.default )
            .argv;    
    //     //Create Command
    //     .command(create)
    //     .options(createOptions)
    //     //Generate Command
    //     .command(generate)
    //     .exitProcess()
    //     .argv;    
} catch ({ message }) {
    console.log('message: ', message);
    // log( ERROR, message );    
}
