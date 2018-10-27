"use strict";
const { create, confirm } = require( '../shared//Strings.shared' );
const { GENERATABLE_TYPES } = require( '../shared/Arrays.shared' );
const Separator = require( 'inquirer' ).Separator;
const choices = [
    ...GENERATABLE_TYPES.map( type => ({ name: type, value: type }) ),
    new Separator(),
]

module.exports = {
    name: 'install', 
    message: `Should run npm install?`, 
    type: confirm,
    default: 'Y',
    when: ({ start }) => start === create
}