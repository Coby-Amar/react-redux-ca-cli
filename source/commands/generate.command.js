"use strict";
const { GeneratorModule } = require('../modules/Generator.module');
const { GENERATABLE_TYPES } = require('../shared/Arrays.shared');
const { generate } = require('../options');

exports.command = [ 'generate <type> <where> <name>', 'gen', 'g' ]; 
exports.des = 'generate new <type> <where> u tell it to with the <name> you give( first letter of name with be changed to upper case ) '; 
exports.builder = yargs => {
    yargs.positional('type', {
        choices: GENERATABLE_TYPES,
        describe: 'What to generate',
        type: 'string'
    });
    yargs.positional('where', {
        describe: 'Where to generate',
        type: 'string'
    });
    yargs.positional('name', {
        describe: 'Name of generated',
        type: 'string'
    });
    yargs.options( generate );
};
exports.handler = ({ type, where, name }) => {
    if ( !where || !name || !type ) {
        throw new Error('Error Code: 100. Ask on Git Hub!');
    }
    const generatorModule = new GeneratorModule( where, type, name );
    const result = generatorModule.generate();
    return result;
};