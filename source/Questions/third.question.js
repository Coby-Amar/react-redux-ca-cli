"use strict";
const { create, confirm } = require( '../shared//Strings.shared' );

module.exports = {
    name: 'withRedux', 
    message: `Create with redux?`, 
    type: confirm, 
    when: ({ start }) => start === create
}