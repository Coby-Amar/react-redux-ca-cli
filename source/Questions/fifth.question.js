"use strict";
const { cancel, input } = require( '../shared/Strings.shared' );
const { CommonFunctions } = require( '../shared/CommonFunctions.shared' );

module.exports = {
    name: 'name', 
    message: `What should it be named?`, 
    type: input, 
    default: ({ type }) => type ? 'Dummy': 'dummy',
    when: ({ start }) => start !== cancel,
    validate: (input, { type }) => CommonFunctions.validateName( input, type )
}