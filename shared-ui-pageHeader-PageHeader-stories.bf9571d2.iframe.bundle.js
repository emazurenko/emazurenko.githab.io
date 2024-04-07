/*! For license information please see shared-ui-pageHeader-PageHeader-stories.bf9571d2.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[919],{"./src/shared/ui/pageHeader/PageHeader.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _PageHeader__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/ui/pageHeader/PageHeader.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"UI/Page header",component:_PageHeader__WEBPACK_IMPORTED_MODULE_1__.m};var Default=function Default(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_PageHeader__WEBPACK_IMPORTED_MODULE_1__.m,{})};Default.displayName="Default",Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => <PageHeader />",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/shared/ui/logo/Logo.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>Logo});__webpack_require__("./node_modules/react/index.js");var clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js");const e_market_namespaceObject=__webpack_require__.p+"static/media/e-market.0a8f79ae.svg";var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Logo_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/logo/Logo.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Logo_module.Z,options);const logo_Logo_module=Logo_module.Z&&Logo_module.Z.locals?Logo_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Logo=function Logo(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"small":_ref$size;return(0,jsx_runtime.jsx)("img",{src:e_market_namespaceObject,className:(0,clsx_m.Z)(logo_Logo_module.logo,logo_Logo_module[size]),alt:"Логотип интернет-магазина E-Market"})};Logo.displayName="Logo";try{Logo.displayName="Logo",Logo.__docgenInfo={description:"",displayName:"Logo",props:{size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/logo/Logo.tsx#Logo"]={docgenInfo:Logo.__docgenInfo,name:"Logo",path:"src/shared/ui/logo/Logo.tsx#Logo"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/ui/pageHeader/PageHeader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>PageHeader});__webpack_require__("./node_modules/react/index.js");var Logo=__webpack_require__("./src/shared/ui/logo/Logo.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),PageHeader_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/pageHeader/PageHeader.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(PageHeader_module.Z,options);const pageHeader_PageHeader_module=PageHeader_module.Z&&PageHeader_module.Z.locals?PageHeader_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),appTitle=(0,jsx_runtime.jsxs)("h2",{children:["Магазин электронных распродаж ",(0,jsx_runtime.jsx)("i",{children:"E-Market"})]}),PageHeader=function PageHeader(){return(0,jsx_runtime.jsxs)("div",{className:pageHeader_PageHeader_module.root,children:[(0,jsx_runtime.jsx)(Logo.T,{}),appTitle]})};PageHeader.displayName="PageHeader";try{PageHeader.displayName="PageHeader",PageHeader.__docgenInfo={description:"",displayName:"PageHeader",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/pageHeader/PageHeader.tsx#PageHeader"]={docgenInfo:PageHeader.__docgenInfo,name:"PageHeader",path:"src/shared/ui/pageHeader/PageHeader.tsx#PageHeader"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/logo/Logo.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".TqVVG1Rt5YGXD4qyyPP7{width:100px;height:100px;padding:5px}.TqVVG1Rt5YGXD4qyyPP7.ZQ9i3aOPR0IWIkI4ZrmI{width:100px;height:100px;padding:5px}.TqVVG1Rt5YGXD4qyyPP7.MI5EGenzPfQ0U9n9obv6{width:200px;height:200px;padding:10px}","",{version:3,sources:["webpack://./src/shared/ui/logo/Logo.module.scss","webpack://./src/shared/ui/variables.scss"],names:[],mappings:"AAOA,sBCFE,WDFqB,CCGrB,YDHqB,CACrB,WAAA,CAMA,2CCLA,WDFqB,CCGrB,YDHqB,CACrB,WAAA,CAUA,2CCTA,WDUuB,CCTvB,YDSuB,CACrB,YAAA",sourcesContent:["@import '../variables.scss';\n\n@mixin default_size() {\n  @include square_size(100px);\n  padding: 5px;\n}\n\n.logo {\n  @include default_size();\n\n  &.small {\n    @include default_size();\n  }\n\n  &.medium {\n    @include square_size(200px);\n    padding: 10px;\n  }\n}\n","$app_width: 700px;\n$main_color: #a74e1b;\n$second_color: #7d2304;\n\n@mixin square_size($dimension) {\n  width: $dimension;\n  height: $dimension;\n}\n\n@mixin button_style() {\n  color: $second_color;\n  background-color: #f2ebde;\n  border: 2px solid $main_color;\n  cursor: pointer;\n  padding-inline: 3px;\n  text-align: center;\n}\n\n@mixin button_style_hover() {\n  background-color: #f3efe9;\n}\n\n@mixin button_style_active() {\n  background-color: #f6f5f5;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={logo:"TqVVG1Rt5YGXD4qyyPP7",small:"ZQ9i3aOPR0IWIkI4ZrmI",medium:"MI5EGenzPfQ0U9n9obv6"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/pageHeader/PageHeader.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".GgpV9S6N4PKHKtXiAs5g{position:fixed;margin:0 auto;padding:10px;box-shadow:0px 8px 10px #a74e1b;border-radius:4px;background-color:#fff;width:680px;display:flex;align-items:center}.GgpV9S6N4PKHKtXiAs5g h2{display:inline;font-family:sans-serif;font-size:40px;margin:0 10px;color:#a74e1b}.GgpV9S6N4PKHKtXiAs5g h2:first-letter{color:#9f2304;font-size:45px;font-style:italic}.GgpV9S6N4PKHKtXiAs5g h2 i{color:#d7a136}","",{version:3,sources:["webpack://./src/shared/ui/pageHeader/PageHeader.module.scss","webpack://./src/shared/ui/variables.scss"],names:[],mappings:"AAIA,sBACE,cAAA,CACA,aAAA,CACA,YALa,CAMb,+BAAA,CACA,iBAAA,CACA,qBAAA,CACA,WAAA,CACA,YAAA,CACA,kBAAA,CAEA,yBACE,cAAA,CACA,sBAAA,CACA,cAAA,CACA,aAAA,CACA,aCnBS,CDqBT,sCACE,aAAA,CACA,cAAA,CACA,iBAAA,CAGF,2BACE,aAAA",sourcesContent:["@import '../variables.scss';\n\n$padding_size: 10px;\n\n.root {\n  position: fixed;\n  margin: 0 auto;\n  padding: $padding_size;\n  box-shadow: 0px 8px 10px $main_color;\n  border-radius: 4px;\n  background-color: white;\n  width: $app_width - 2 * $padding_size;\n  display: flex;\n  align-items: center;\n\n  h2 {\n    display: inline;\n    font-family: sans-serif;\n    font-size: 40px;\n    margin: 0 10px;\n    color: $main_color;\n\n    &:first-letter {\n      color: rgb(159, 35, 4);\n      font-size: 45px;\n      font-style: italic;\n    }\n\n    i {\n      color: #d7a136;\n    }\n  }\n}\n","$app_width: 700px;\n$main_color: #a74e1b;\n$second_color: #7d2304;\n\n@mixin square_size($dimension) {\n  width: $dimension;\n  height: $dimension;\n}\n\n@mixin button_style() {\n  color: $second_color;\n  background-color: #f2ebde;\n  border: 2px solid $main_color;\n  cursor: pointer;\n  padding-inline: 3px;\n  text-align: center;\n}\n\n@mixin button_style_hover() {\n  background-color: #f3efe9;\n}\n\n@mixin button_style_active() {\n  background-color: #f6f5f5;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"GgpV9S6N4PKHKtXiAs5g"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);