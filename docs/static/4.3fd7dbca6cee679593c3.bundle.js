webpackJsonp([4],{1338:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_react__=__webpack_require__(0),__WEBPACK_IMPORTED_MODULE_0_react___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__),__WEBPACK_IMPORTED_MODULE_1_armory_component_ui__=__webpack_require__(278),SpecializationsEmbed=(__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_armory_component_ui__),function(_ref){var specs=_ref.specs,className=_ref.className;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:className},specs.map(function(spec){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_armory_component_ui__.Gw2Specialization,{key:spec.id,id:spec.id,activeTraits:spec.traits})}))});__webpack_exports__.a=SpecializationsEmbed,SpecializationsEmbed.__docgenInfo={description:"",props:{specs:{flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  id: number,\n  traits?: Array<number>,\n}",signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"traits",value:{name:"Array",elements:[{name:"number"}],raw:"Array<number>",required:!1}}]}}],raw:"Array<{\n  id: number,\n  traits?: Array<number>,\n}>"},required:!0,description:""},className:{flowType:{name:"string"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Specializations/index.js"]={name:"SpecializationsEmbed",docgenInfo:SpecializationsEmbed.__docgenInfo,path:"src/components/Specializations/index.js"})},676:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0_react__=__webpack_require__(0),__WEBPACK_IMPORTED_MODULE_0_react___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__),__WEBPACK_IMPORTED_MODULE_1__components_Specializations__=__webpack_require__(1338),__WEBPACK_IMPORTED_MODULE_2__bootstrap__=__webpack_require__(670),_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target};__webpack_exports__.default=function(element,ids){var traitIds=ids.map(function(id){var rawId=element.getAttribute(Object(__WEBPACK_IMPORTED_MODULE_2__bootstrap__.b)(id+"-traits"));return rawId?rawId.split(",").map(function(traitId){return+traitId}):[]}).reduce(function(arr,next){return arr.concat(next)},[]),specs=ids.map(function(id){return{id:+id,traits:traitIds}});return function(props){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Specializations__.a,_extends({},props,{specs:specs}))}}}});