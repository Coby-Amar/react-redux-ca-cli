"use strict";
const { GENERATABLE_TYPES } = require( './Objects.shared' );

const generatableTypes = Object.keys( GENERATABLE_TYPES ).map( key => GENERATABLE_TYPES[ key ] );

exports.GENERATABLE_TYPES = generatableTypes; 
