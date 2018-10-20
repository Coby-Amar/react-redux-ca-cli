"use strict";
const { source, cancel, input } = require( '../shared/Strings.shared' );
const { CommonFunctions } = require( '../shared/CommonFunctions.shared' );

module.exports = {
    name: 'where', 
    message: `Where should it go?`, 
    type: input, 
    when: ({ start }) => start !== cancel, 
    default: ({ type }) => type ? `./${ source }/${ type }s` : './', 
    validate: input => CommonFunctions.validatePath( input )
}