"use strict";
const { GeneratorModule } = require('../modules/Generator.module');
const { GENERATABLE_TYPES } = require('../shared/Arrays.shared');

exports.command = [ 'generate <type> <where> <name>', 'g', 'gen' ]; 
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
    };
exports.handler = ({ type, where, name }) => {
    if ( !where || !name || !type ) {
        throw new Error('Error Code: 100. Ask on git Hub!');
    }
    const generatorModule = new GeneratorModule( where, type, name );
    const result = generatorModule.generate();
    return result;
};