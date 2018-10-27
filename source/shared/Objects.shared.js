"use strict";

const types = {
    component: 'component',
    container: 'container',
    action: 'action',
    actionType: 'actionType',
    module: 'module',
    reducer: 'reducer',
    route: 'route'
};
const logTypes = {
    CREATE: 'CREATE', 
    INFO: 'INFO', 
    WARNING: 'WARNING', 
    ERROR: 'ERROR', 
    SHORTCUT: 'SHORTCUT', 
};

exports.GENERATABLE_TYPES = types;
exports.LOG_TYPES = logTypes;