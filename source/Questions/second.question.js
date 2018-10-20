"use strict";
const { generate, list } = require( '../shared//Strings.shared' );
const { GENERATABLE_TYPES } = require( '../shared/Arrays.shared' );
const Separator = require( 'inquirer' ).Separator;
const choices = [
    ...GENERATABLE_TYPES.map( type => ({ name: type, value: type }) ),
    new Separator(),
]

module.exports = {
    name: 'type', 
    message: `What to generate?`, 
    type: list, 
    choices, 
    when: ({ start }) => start === generate
}