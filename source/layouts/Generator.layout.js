"use strict";
const {
    Index,
    Js,
    css,
} = require('../shared/Strings.shared');
const { GENERATABLE_TYPES } = require('../shared/Objects.shared');
const { action, actionType, component, container, reducer, route} = GENERATABLE_TYPES;
const moduleType = GENERATABLE_TYPES.module;

class GeneratorLayout {
    constructor( type, where, name ) { 
        this.type = type; 
        this.where = where; 
        this.name = name;
    }

    generate() {
        const { type } = this;
        return GeneratorLayout[ type ] || null;
    }
        
    get component() {
        const { where, name } = this;
        return {
            path: where || `/${ component }s`,
            dirs: [{
                path: name || '/App',
                files: [{
                    type: component + Js,
                    location: `/${ name || 'App' }.view.jsx`
                }, {
                    type: css,
                    location: `/${ name || 'App' }.less`
                }]
            }]
        };
    }
    
    get container() {
        const { where, name } = this;
        return {
            path: where || `/${ container }s`,
            dirs: [{
                path: name || '/App',
                files: [{
                    type: container + Js,
                    location: `/${ name || 'App' }.view.jsx`
                }, {
                    type: css,
                    location: `/${ name || 'App' }.less`
                }]
            }]        
        };
    }
    
    get actionType() {
        const { where, name } = this;
        return {
            path: where || `/${ actionType }s`,
            files: [where ? {} : {
                type: actionType + Index,
                location: '/index.js',
            }, {
                type: actionType + Js,
                location: `/${ name ||'Dummy' }.actionType.js`
            }]
        };
    }

    get action() {
        const { where, name } = this;
        return {
            path: where || `/${ action }s`,
            files: [where ? {} : {
                type: action + Index,
                location: '/index.js',
            }, {
                type: action + Js,
                location: `/${ name ||'Dummy' }.action.js`
            }]
        };
    }

    get reducer() {
        const { where, name } = this;
        return {
            path: where || `/${ reducer }s`,
            files: [where ? {} : {
                type: reducer + Index,
                location: '/index.js',
            }, {
                type: reducer + Js,
                location: `/${ name ||'Dummy' }.reducer.js`
            }]        
        };
    }

    get module() {
        const { where, name } = this;
        return {
            path: where || `/${  moduleType }s`,
            files: [where ? {} : {
                type: moduleType + Index,
                location: '/index.js',
            }, {
                type: moduleType + Js,
                location: `/${ name ||'Dummy' }.module.js`
            }]        
        };
    }

    get route() {
        const { where, name } = this;
        return {
            path: where || `/${ route }s`,
            files: [where ? {} : {
                type: route + Index,
                location: '/index.js',
            }, {
                type: route + Js,
                location: `/${ name ||'Dummy' }.route.js`
            }]        
        };
    }
}
exports.GeneratorLayout = GeneratorLayout;