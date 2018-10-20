"use strict";
const { cancel, input } = require( '../shared/Strings.shared' );

module.exports = {
    name: 'name', 
    message: `What should it be named?`, 
    type: input, 
    default: ({ type }) => type ? 'Dummy': 'dummy',
    when: ({ start }) => start !== cancel,
    validation: (input, { type }) => {
        if ( type ) {
            return /^[a-zA-Z]+$/.test( input ) || 'Name can only contain letters';
        }
        return /^[a-z-_]+$/.test( input ) || 'Name can only contain a-z, - and _'; 
    }
}