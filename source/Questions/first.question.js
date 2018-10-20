"use strict";
const { create, generate, cancel, list } = require( '../shared/Strings.shared' );
const Separator = require( 'inquirer' ).Separator;
const choices = [
    { 
        name: 'Create a project',
        value: create,
        type: list

    },
    { 
        name: 'Run a generator',
        value: generate
    },
    new Separator(),
    { 
        name: 'Cancel!',
        value: cancel
    },
];

module.exports = {
    name: 'start', 
    message: `What would you like to do?`, 
    type: list, 
    choices
}