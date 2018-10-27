"use strict";
const { ProjectModule } = require('../modules/Project.module');
const { create } = require('../options');

exports.command = [ 'create <where> <name> [withRedux] [install]', 'cre', 'c' ]; 
exports.des = 'create new project <where> and with what <name> and if with redux';
exports.builder = yargs => {
    yargs.positional('where', {
        describe: 'Where to create',
        type: 'string'
    });
    yargs.positional('name', {
        describe: "Project's name",
        type: 'string'
    });
    yargs.options( create );
}; 
exports.handler = ({ where, name, withRedux, install }) => {
    if ( !where || !name ) {
        throw new Error('Error Code: 100. Ask on Git Hub!');
    }
    const projectModule = new ProjectModule( where, name, withRedux, install );
    const result = projectModule.create();
    return result;
};