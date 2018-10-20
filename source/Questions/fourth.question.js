"use strict";
const { cancel, input } = require( '../shared/Strings.shared' );

module.exports = {
    name: 'where', 
    message: `Where should it go?`, 
    type: input, 
    when: ({ start }) => start !== cancel, 
    default: ({ type }) => type ? `./${ source }/${ type }s` : './', 
    validation: input => /^[\.\/a-zA-z-_]+$/.test( input ) || INVALID_INPUT_MESSAGE( input )
}