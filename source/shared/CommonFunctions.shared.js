"use strict";
class CommonFunctions {
    /**
     * 
     * @param {string} input 
     */
    invalidLocation( input ) {
        return `${ input }: is NOT a valid location`;
    }

    /**
     * 
     * @param {string} text 
     */
    firstLetterToUpper( text ) {
        return text[0].toUpperCase() + text.substring(1, text.length );
    }

    /**
     * 
     * @param {string} stringToReplace 
     * @param {string} replaceWith 
     */
    replaceDummy( stringToReplace, replaceWith ) {
        return stringToReplace.replace( /Dummy/g, replaceWith );
    }
}
exports.CommonFunctions = new CommonFunctions();
// module.exports = {
//     getTypeName: type => {
//         let name = type;
//         switch (type) {
//             case 'comp':
//             case 'c': {
//                 name = 'component';
//                 break;
//             }
//             case 'cont':
//             case 'ct': {
//                 name = 'container';
//                 break;
//             }
//             case 'red':
//             case 'r': {
//                 name = 'reducer';
//                 break;
//             }
//             case 'red':
//             case 'r': {
//                 name = 'reducer';
//                 break;
//             }
//             case 'act':
//             case 'a': {
//                 name = 'action';
//                 break;
//             }
//             case 'acte':
//             case 'at': {
//                 name = 'actionType';
//                 break;
//             }
//             case 'mod':
//             case 'm': {
//                 name = 'module';
//                 break;
//             } 
//             case 'rot':
//             case 'r': {
//                 name = 'route';
//                 break;
//             }
//         }
//         return name;
//     }
// }