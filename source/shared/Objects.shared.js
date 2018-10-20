"use strict";

const types = {
    component: 'component',
    container: 'container',
    action: 'action',
    actionType: 'actionType',
    module: 'module',
    reducer: 'reducer',
    route: 'route'
}
exports.GENERATABLE_TYPES = types;

const aliases = {};
for (const key in types) {
    const value = types[ key ];
    aliases[ value ] = [
        value,
        value.slice( 0, 4 )
    ]
}
exports.GENERATABLE_TYPES_ALAIAES = aliases;

exports.LOG_TYPES = {
    CREATE: 'CREATE', 
    INFO: 'INFO', 
    WARNING: 'WARNING', 
    ERROR: 'ERROR', 
    SHORTCUT: 'SHORTCUT', 
}
