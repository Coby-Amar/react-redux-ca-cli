"use strict";

module.exports = {
    r: {
        alias: 'withRedux',
        type: 'boolean',
        describe: 'Set if react-redux project.',
        default: false
    },
    i: {
        alias: 'install',
        type: 'boolean',
        describe: 'Set if should install node_modules after creation.',
        default: false
    }
}
