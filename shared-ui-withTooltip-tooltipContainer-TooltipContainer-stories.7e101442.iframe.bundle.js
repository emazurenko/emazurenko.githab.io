/*! For license information please see shared-ui-withTooltip-tooltipContainer-TooltipContainer-stories.7e101442.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[752],{"./src/shared/ui/withTooltip/tooltipContainer/TooltipContainer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultTooltip:()=>DefaultTooltip,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var src_shared_ui_withTooltip_tooltipContainer_TooltipContainer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/ui/withTooltip/tooltipContainer/TooltipContainer.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"UI Kit/Tooltip",component:src_shared_ui_withTooltip_tooltipContainer_TooltipContainer__WEBPACK_IMPORTED_MODULE_1__.Z};var handleHideTooltip=function handleHideTooltip(){console.log("Tooltip closed")},Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(src_shared_ui_withTooltip_tooltipContainer_TooltipContainer__WEBPACK_IMPORTED_MODULE_1__.Z,_objectSpread(_objectSpread({},args),{},{onHideTooltip:handleHideTooltip}))};Template.displayName="Template";var DefaultTooltip=Template.bind({});DefaultTooltip.args={text:"Подсказка",pos:{top:10,left:10}},DefaultTooltip.parameters={...DefaultTooltip.parameters,docs:{...DefaultTooltip.parameters?.docs,source:{originalSource:"(args: TooltipContainerProps) => <TooltipContainer {...args} onHideTooltip={handleHideTooltip} />",...DefaultTooltip.parameters?.docs?.source}}};const __namedExportsOrder=["DefaultTooltip"]},"./src/shared/ui/withTooltip/tooltipContainer/TooltipContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>TOOLTIP_WIDTH,Z:()=>tooltipContainer_TooltipContainer});var react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Tooltip_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/withTooltip/tooltipContainer/tooltip/Tooltip.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Tooltip_module.Z,options);const tooltip_Tooltip_module=Tooltip_module.Z&&Tooltip_module.Z.locals?Tooltip_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Tooltip=function Tooltip(_ref){var text=_ref.text,visible=_ref.visible,onHideTooltip=_ref.onHideTooltip,_useState2=_slicedToArray((0,react.useState)(tooltip_Tooltip_module.root),2),classNames=_useState2[0],setClassNames=_useState2[1];(0,react.useLayoutEffect)((function(){setClassNames((0,clsx_m.Z)(tooltip_Tooltip_module.root,visible?tooltip_Tooltip_module.appear:tooltip_Tooltip_module.hide))}),[visible]),(0,react.useLayoutEffect)((function(){visible&&setClassNames((0,clsx_m.Z)(tooltip_Tooltip_module.root,tooltip_Tooltip_module.appear))}),[text,visible]);return(0,jsx_runtime.jsx)("div",{className:classNames,onAnimationEnd:function handleHideAnimationEnd(){!visible&&onHideTooltip()},children:(0,jsx_runtime.jsx)("p",{className:tooltip_Tooltip_module.content,children:text})})};Tooltip.displayName="Tooltip";const tooltip_Tooltip=Tooltip;try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"",displayName:"Tooltip",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}},onHideTooltip:{defaultValue:null,description:"",name:"onHideTooltip",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/withTooltip/tooltipContainer/tooltip/Tooltip.tsx#Tooltip"]={docgenInfo:Tooltip.__docgenInfo,name:"Tooltip",path:"src/shared/ui/withTooltip/tooltipContainer/tooltip/Tooltip.tsx#Tooltip"})}catch(__react_docgen_typescript_loader_error){}var TooltipContainer_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/withTooltip/tooltipContainer/TooltipContainer.module.scss"),TooltipContainer_module_options={};TooltipContainer_module_options.styleTagTransform=styleTagTransform_default(),TooltipContainer_module_options.setAttributes=setAttributesWithoutAttributes_default(),TooltipContainer_module_options.insert=insertBySelector_default().bind(null,"head"),TooltipContainer_module_options.domAPI=styleDomAPI_default(),TooltipContainer_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(TooltipContainer_module.Z,TooltipContainer_module_options);const tooltipContainer_TooltipContainer_module=TooltipContainer_module.Z&&TooltipContainer_module.Z.locals?TooltipContainer_module.Z.locals:void 0;function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["text","pos"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function TooltipContainer_slicedToArray(arr,i){return function TooltipContainer_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function TooltipContainer_iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function TooltipContainer_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return TooltipContainer_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return TooltipContainer_arrayLikeToArray(o,minLen)}(arr,i)||function TooltipContainer_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function TooltipContainer_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var TOOLTIP_WIDTH=200,body=document.body,TooltipContainer=function TooltipContainer(_ref){var text=_ref.text,pos=_ref.pos,props=_objectWithoutProperties(_ref,_excluded),_useState2=TooltipContainer_slicedToArray((0,react.useState)(!0),2),visible=_useState2[0],setVisible=_useState2[1],handleHideTooltip=function handleHideTooltip(){setVisible(!1)};return(0,react.useEffect)((function(){setVisible(!0);var timeoutId=setTimeout(handleHideTooltip,8e3);return function(){return clearTimeout(timeoutId)}}),[text]),(0,react_dom.createPortal)((0,jsx_runtime.jsx)("div",{className:tooltipContainer_TooltipContainer_module.root,onClick:handleHideTooltip,style:_objectSpread(_objectSpread({},pos),{},{width:"".concat(TOOLTIP_WIDTH,"px")}),children:(0,jsx_runtime.jsx)(tooltip_Tooltip,_objectSpread(_objectSpread({},props),{},{text,visible}))}),body)};const tooltipContainer_TooltipContainer=TooltipContainer;try{TooltipContainer.displayName="TooltipContainer",TooltipContainer.__docgenInfo={description:"",displayName:"TooltipContainer",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},onHideTooltip:{defaultValue:null,description:"",name:"onHideTooltip",required:!0,type:{name:"() => void"}},pos:{defaultValue:null,description:"",name:"pos",required:!0,type:{name:"Pos"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/withTooltip/tooltipContainer/TooltipContainer.tsx#TooltipContainer"]={docgenInfo:TooltipContainer.__docgenInfo,name:"TooltipContainer",path:"src/shared/ui/withTooltip/tooltipContainer/TooltipContainer.tsx#TooltipContainer"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/withTooltip/tooltipContainer/TooltipContainer.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".E6X3J16TzEI8oI6PR_4l{position:absolute;padding-top:10px;z-index:1}","",{version:3,sources:["webpack://./src/shared/ui/withTooltip/tooltipContainer/TooltipContainer.module.scss"],names:[],mappings:"AAAA,sBACE,iBAAA,CACA,gBAAA,CACA,SAAA",sourcesContent:[".root {\n  position: absolute;\n  padding-top: 10px;\n  z-index: 1;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"E6X3J16TzEI8oI6PR_4l"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/withTooltip/tooltipContainer/tooltip/Tooltip.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".tEZXZ3LAEE4wGnYCQ0_w:hover{cursor:pointer}.tEZXZ3LAEE4wGnYCQ0_w.yHsl8On_Dpb8fSriJNhX{animation-duration:.3s;animation-timing-function:ease-out;animation-name:yHsl8On_Dpb8fSriJNhX}.tEZXZ3LAEE4wGnYCQ0_w.rdNbkkxFWJZzKiNhKhJs{animation-duration:.3s;animation-timing-function:ease-out;animation-name:rdNbkkxFWJZzKiNhKhJs;animation-fill-mode:forwards}.CqfHTIP8_y0F2sWprLJw{font-size:16px;padding:10px;margin:0;font-family:sans-serif;border-radius:3px}html .CqfHTIP8_y0F2sWprLJw{box-shadow:0px 4px 5px #a74e1b}html.light .CqfHTIP8_y0F2sWprLJw{box-shadow:0px 4px 5px #a74e1b}html.dark .CqfHTIP8_y0F2sWprLJw{box-shadow:0px 4px 5px #eed4c4}html .CqfHTIP8_y0F2sWprLJw{color:#7d2304}html.light .CqfHTIP8_y0F2sWprLJw{color:#7d2304}html.dark .CqfHTIP8_y0F2sWprLJw{color:#f2ebde}html .CqfHTIP8_y0F2sWprLJw{background:linear-gradient(#f6f5f5, #f2ebde)}html.light .CqfHTIP8_y0F2sWprLJw{background:linear-gradient(#f6f5f5, #f2ebde)}html.dark .CqfHTIP8_y0F2sWprLJw{background:linear-gradient(#e5a179, #c26b3a)}@keyframes yHsl8On_Dpb8fSriJNhX{from{opacity:0;margin-top:40px}to{opacity:1;margin-top:0}}@keyframes rdNbkkxFWJZzKiNhKhJs{from{opacity:1;margin-top:0}to{opacity:0;margin-top:40px}}","",{version:3,sources:["webpack://./src/shared/ui/withTooltip/tooltipContainer/tooltip/Tooltip.module.scss","webpack://./src/shared/ui/themes.scss"],names:[],mappings:"AAUE,4BACE,cAAA,CAGF,2CATA,sBAHe,CAIf,kCAAA,CAUE,mCAAA,CAGF,2CAdA,sBAHe,CAIf,kCAAA,CAeE,mCAAA,CACA,4BAAA,CAIJ,sBACE,cAAA,CACA,YAAA,CACA,QAAA,CACA,sBAAA,CACA,iBAAA,CCUS,2BACP,8BAAA,CAEO,iCACP,8BAAA,CAEO,gCACP,8BAAA,CAPO,2BACP,aAAA,CAEO,iCACP,aAAA,CAEO,gCACP,aAAA,CAPO,2BACP,4CAAA,CAEO,iCACP,4CAAA,CAEO,gCACP,4CAAA,CDXJ,gCACE,KACE,SAAA,CACA,eAAA,CAEF,GACE,SAAA,CACA,YAAA,CAAA,CAIJ,gCACE,KACE,SAAA,CACA,YAAA,CAEF,GACE,SAAA,CACA,eAAA,CAAA",sourcesContent:["@import 'src/shared/ui/variables';\n\n$animation_time: 0.3s;\n\n@mixin animation_params() {\n  animation-duration: $animation_time;\n  animation-timing-function: ease-out;\n}\n\n.root {\n  &:hover {\n    cursor: pointer;\n  }\n\n  &.appear {\n    @include animation_params();\n    animation-name: appear;\n  }\n\n  &.hide {\n    @include animation_params();\n    animation-name: hide;\n    animation-fill-mode: forwards;\n  }\n}\n\n.content {\n  font-size: 16px;\n  padding: 10px;\n  margin: 0;\n  font-family: sans-serif;\n  border-radius: 3px;\n  @include theme(box-shadow, tooltip_box_shadow);\n  @include theme(color, second_color);\n  @include theme(background, tooltip_background);\n}\n\n@keyframes appear {\n  from {\n    opacity: 0;\n    margin-top: 40px;\n  }\n  to {\n    opacity: 1;\n    margin-top: 0;\n  }\n}\n\n@keyframes hide {\n  from {\n    opacity: 1;\n    margin-top: 0;\n  }\n  to {\n    opacity: 0;\n    margin-top: 40px;\n  }\n}\n","$light: (\n  main_color: #a74e1b,\n  main_bg: white,\n  second_color: #7d2304,\n  button_bg: #f2ebde,\n  button_bg_hover: #f3efe9,\n  button_bg_active: #f6f5f5,\n  app_bg: #fdfbf5,\n  app_text: rgb(94, 54, 54),\n  layout_bg: rgb(249, 242, 232),\n  title_color: #d7a136,\n  header_box_shadow: 0px 8px 10px #a74e1b,\n  button_close: #aa0000,\n  button_close_hover: rgb(251, 137, 137),\n  button_close_active: rgb(206, 1, 1),\n  product_card_box_shadow: 0px 0px 12px #a74e1b,\n  tooltip_background: linear-gradient(#f6f5f5, #f2ebde),\n  tooltip_box_shadow: 0px 4px 5px #a74e1b,\n);\n\n$dark: (\n  main_color: #eed4c4,\n  main_bg: #dca281,\n  second_color: #f2ebde,\n  button_bg: #c26b3a,\n  button_bg_hover: #ce6f37,\n  button_bg_active: #e5a179,\n  app_bg: #eccbb8,\n  app_text: rgb(255, 246, 240),\n  layout_bg: #ecb79a,\n  title_color: #f5d8af,\n  header_box_shadow: 0px 8px 10px #eed4c4,\n  button_close: #aa0000,\n  button_close_hover: rgb(245, 178, 178),\n  button_close_active: rgb(206, 1, 1),\n  product_card_box_shadow: 0px 0px 12px #eed4c4,\n  tooltip_background: linear-gradient(#e5a179, #c26b3a),\n  tooltip_box_shadow: 0px 4px 5px #eed4c4,\n);\n\n@mixin theme($property, $var, $before: null, $after: null) {\n  @at-root html:global() #{&} {\n    #{$property}: #{$before} #{map-get($light, $var)} #{$after};\n  }\n  @at-root html:global(.light) #{&} {\n    #{$property}: #{$before} #{map-get($light, $var)} #{$after};\n  }\n  @at-root html:global(.dark) #{&} {\n    #{$property}: #{$before} #{map-get($dark, $var)} #{$after};\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"tEZXZ3LAEE4wGnYCQ0_w",appear:"yHsl8On_Dpb8fSriJNhX",hide:"rdNbkkxFWJZzKiNhKhJs",content:"CqfHTIP8_y0F2sWprLJw"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);