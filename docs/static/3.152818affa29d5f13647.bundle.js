webpackJsonp([3],{1339:function(module,__webpack_exports__,__webpack_require__){"use strict";function _objectWithoutProperties(obj,keys){var target={};for(var i in obj)keys.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(obj,i)&&(target[i]=obj[i]);return target}var __WEBPACK_IMPORTED_MODULE_0_react__=__webpack_require__(0),__WEBPACK_IMPORTED_MODULE_0_react___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__),__WEBPACK_IMPORTED_MODULE_1_armory_component_ui__=__webpack_require__(278),_extends=(__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_armory_component_ui__),Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}),TraitsEmbed=function(_ref){var ids=_ref.ids,className=(_ref.traits,_ref.className),blankText=_ref.blankText,size=_ref.size,props=_objectWithoutProperties(_ref,["ids","traits","className","blankText","size"]);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:className},ids.map(function(id,index){return id>=0?__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_armory_component_ui__.Gw2Trait,_extends({active:!0,key:index,id:id,size:size},props)):__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_armory_component_ui__.Gw2Trait,{key:index,active:!0,tooltipTextOverride:blankText,size:size})}))};__webpack_exports__.a=TraitsEmbed,TraitsEmbed.__docgenInfo={description:"",props:{ids:{flowType:{name:"Array",elements:[{name:"number"}],raw:"Array<number>"},required:!0,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Traits/index.js"]={name:"TraitsEmbed",docgenInfo:TraitsEmbed.__docgenInfo,path:"src/components/Traits/index.js"})},677:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0_react__=__webpack_require__(0),__WEBPACK_IMPORTED_MODULE_0_react___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__),__WEBPACK_IMPORTED_MODULE_1__components_Traits__=__webpack_require__(1339),_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target};__webpack_exports__.default=function(element,ids){return function(props){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Traits__.a,_extends({},props,{ids:ids}))}}}});