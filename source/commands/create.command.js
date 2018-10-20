"use strict";
const { ProjectModule } = require('../modules/Project.module');

exports.command = [ 'create <where> <name> [redux]', 'cre', 'c' ]; 
exports.des = 'create new project <where> and with what <name> and if with redux';
exports.builder = yargs => {
    yargs.positional('where', {
        describe: 'Where to create',
        type: 'string'
    });
    yargs.positional('name', {
        describe: "Project's name",
        type: 'string'
    })
}; 
exports.handler = ({ where, name, withRedux, shouldInstall }) => {
    if ( !where || !name ) {
        throw new Error('Error Code: 100. Ask on git Hub!');
    }
    const projectModule = new ProjectModule( where, name, withRedux, shouldInstall );
    const result = projectModule.create();
    return result;
};