(function(t){function e(e){for(var a,r,s=e[0],u=e[1],c=e[2],l=0,d=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(a=!1)}a&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},r={app:0},i={app:0},o=[];function s(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"8a4a4d9b"}[t]+".js"}function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={about:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"e53e556b"}[t]+".css",i=u.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var c=o[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===a||l===i))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],l=c.getAttribute("data-href");if(l===a||l===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[t],f.parentNode.removeChild(f),n(o)},f.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=o);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(t);var d=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}i[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/translate-helper/",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"1d6c":function(t,e,n){"use strict";n("82f4")},"1e7d":function(t,e,n){"use strict";n("5667")},"449b":function(t,e,n){},5667:function(t,e,n){},"67cc":function(t,e,n){},"82f4":function(t,e,n){},"91d0":function(t,e,n){},a6c7:function(t,e,n){"use strict";n("67cc")},afba:function(t,e,n){"use strict";n("449b")},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r={id:"nav"},i=Object(a["g"])("Home"),o=Object(a["g"])(" | "),s=Object(a["g"])("Settings"),u=Object(a["g"])(" | "),c=Object(a["g"])("About");function l(t,e,n,l,d,f){var p=Object(a["x"])("router-link"),h=Object(a["x"])("router-view");return Object(a["q"])(),Object(a["d"])(a["a"],null,[Object(a["h"])("div",r,[Object(a["h"])(p,{to:"/"},{default:Object(a["D"])((function(){return[i]})),_:1}),o,Object(a["h"])(p,{to:"/settings"},{default:Object(a["D"])((function(){return[s]})),_:1}),u,Object(a["h"])(p,{to:"/about"},{default:Object(a["D"])((function(){return[c]})),_:1})]),Object(a["h"])(h)],64)}var d=n("1da1"),f=(n("96cf"),Object(a["i"])({setup:function(){var t=Object(a["l"])("state");return{state:t}},mounted:function(){this.backgroundDownloadTranslations()},methods:{backgroundDownloadTranslations:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,!t.state.settings.translationsSourceUri){e.next=4;break}return e.next=4,t.state.translations.existing.download(t.state.settings.translationsSourceUri);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()}}}));n("1e7d");f.render=l;var p=f,h=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),b=Object(a["F"])("data-v-425e4dbf");Object(a["t"])("data-v-425e4dbf");var g=Object(a["h"])("h1",null,"Translations",-1),v={key:0},O={key:0},j={class:"list"},m={id:"download-file",ref:"fileDownload",href:"",download:"",target:"_blank"};Object(a["r"])();var y=b((function(t,e,n,r,i,o){var s=Object(a["x"])("fa-icon"),u=Object(a["x"])("translation-list");return Object(a["q"])(),Object(a["d"])("div",null,[g,Object(a["h"])("button",{onClick:e[1]||(e[1]=function(){return t.addEmpty&&t.addEmpty.apply(t,arguments)}),class:"add"},[Object(a["h"])(s,{icon:"plus-square",class:"fas icon"})]),Object(a["h"])("button",{onClick:e[4]||(e[4]=function(){return t.makeExport&&t.makeExport.apply(t,arguments)}),class:"export"},[Object(a["h"])(s,{icon:"cloud-download-alt",class:"fas icon"}),t.nameFieldShown?(Object(a["q"])(),Object(a["d"])("div",v,[Object(a["E"])(Object(a["h"])("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=function(e){return t.nameField=e}),placeholder:"Export name"},null,512),[[a["B"],t.nameField]]),Object(a["h"])("button",{onClick:e[3]||(e[3]=function(){return t.onSetNameClick&&t.onSetNameClick.apply(t,arguments)}),class:"download-confirm"}," Download ")])):Object(a["e"])("",!0)]),Object(a["h"])("button",{onClick:e[5]||(e[5]=function(){return t.clear&&t.clear.apply(t,arguments)}),class:"reset"},[Object(a["h"])(s,{icon:"window-close",class:"fas icon"})]),Object(a["h"])("div",null,[t.saving?(Object(a["q"])(),Object(a["d"])("span",O)):Object(a["e"])("",!0)]),Object(a["h"])("div",j,[Object(a["h"])(u,{translations:t.translations,languages:t.languages},null,8,["translations","languages"])]),Object(a["h"])("a",m,null,512)])})),w=n("3835"),k=(n("159b"),n("4fad"),n("4de4"),n("5db7"),n("73d9"),n("d81d"),n("a15b"),n("a434"),Object(a["F"])("data-v-af1df4f4"));Object(a["t"])("data-v-af1df4f4");var x={class:"translation-list"},_=Object(a["h"])("th",null,null,-1);Object(a["r"])();var S=k((function(t,e,n,r,i,o){var s=Object(a["x"])("translation-row");return Object(a["q"])(),Object(a["d"])("table",x,[Object(a["h"])("tr",null,[Object(a["h"])("th",{onClick:e[1]||(e[1]=function(e){return t.setSortBy("key")})},"Key"),(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(t.langs,(function(e){return Object(a["q"])(),Object(a["d"])("th",{key:e,onClick:function(n){return t.setSortBy(e)}},Object(a["z"])(e),9,["onClick"])})),128)),_]),(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(t.sortedList,(function(e){return Object(a["q"])(),Object(a["d"])(s,{key:e.key,item:e,languages:t.langs},null,8,["item","languages"])})),128))])})),T=(n("fb6a"),Object(a["F"])("data-v-25cce414")),E=T((function(t,e,n,r,i,o){return Object(a["q"])(),Object(a["d"])("tr",{class:{conflict:t.status.duplicate||t.status.conflict}},[Object(a["h"])("td",null,[Object(a["E"])(Object(a["h"])("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.data.key=e}),onChange:e[2]||(e[2]=function(){return t.updateValue&&t.updateValue.apply(t,arguments)}),class:"key-field"},null,544),[[a["B"],t.data.key,void 0,{lazy:!0}]])]),(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(t.langs,(function(n){return Object(a["q"])(),Object(a["d"])("td",{key:n},[Object(a["E"])(Object(a["h"])("input",{type:"text","onUpdate:modelValue":function(e){return t.data[n]=e},onChange:e[3]||(e[3]=function(){return t.updateValue&&t.updateValue.apply(t,arguments)})},null,40,["onUpdate:modelValue"]),[[a["B"],t.data[n],void 0,{lazy:!0}]])])})),128)),Object(a["h"])("td",null,[Object(a["h"])("button",{onClick:e[4]||(e[4]=function(e){return t.deleteRow(t.data.key)})},"X")])],2)})),C=Object(a["i"])({setup:function(t){var e=Object(a["l"])("state"),n=function(t){return e.translations.values.filter((function(e){return e.key===t})).length>1},r=Object(a["u"])({duplicate:n(t.item.key),conflict:!e.translations.existing.allowsKey(t.item.key)}),i=function(){var a=Object(d["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r.conflict=!e.translations.existing.allowsKey(t.item.key),r.duplicate=n(t.item.key),a.next=4,e.translations.saveAsync();case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),o=function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.translations.deleteRow(n),e.translations.save();case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return{data:t.item,langs:t.languages,updateValue:i,deleteRow:o,hasMultiple:n,status:r}},props:{item:{type:Object,required:!0},languages:{type:Array,required:!0}}});n("a6c7");C.render=E,C.__scopeId="data-v-25cce414";var U=C,q=Object(a["i"])({setup:function(t){var e=Object(a["v"])("+key"),n=Object(a["b"])((function(){var n=e.value,a=n.slice(1),r="-"===n.slice();return t.translations.slice().sort((function(t,e){return r?t[a]>e[a]:t[a]<e[a]}))}));return{items:t.translations,langs:t.languages,sortedList:n}},components:{TranslationRow:U},props:{translations:{type:Object,required:!0},languages:{type:Array,required:!0}}});n("1d6c");q.render=S,q.__scopeId="data-v-af1df4f4";var D=q,R=Object(a["i"])({setup:function(){var t=Object(a["l"])("state"),e=Object(a["v"])(null),n=function(){var e={key:""};t.settings.languages.forEach((function(t){return e[t]=""})),t.translations.update(e)},r=Object(a["v"])(""),i=Object(a["v"])(!1),o=function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r.value&&(r.value=""),i.value=!0,t.next=4,Object(a["m"])();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s={resolve:void 0,reject:void 0},u=function(){s.resolve&&s.resolve()},c=function(t,e){for(var n=t,a=0,r=Object.entries(e);a<r.length;a++){var i=Object(w["a"])(r[a],2),o=i[0],s=i[1];n=n.replaceAll("{"+o+"}",s)}return n},l=function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o();case 2:return e.next=4,new Promise((function(t,e){s.resolve=function(){t()},s.reject=function(){e()}}));case 4:return e.abrupt("return",c(t.settings.translationFilename,{name:r.value}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){return t.translations.values.flatMap((function(e){return t.settings.languages.map((function(t){return{key:e.key,lang:t,value:e[t]||""}}))})).filter((function(t){return!!t.value&&!!t.key&&!!t.lang}))},p=function(){return encodeURIComponent(t.settings.translationTemplate.prefix+f().map((function(e){return c(t.settings.translationTemplate.each,e)})).join("")+t.settings.translationTemplate.suffix)},h=function(){var n=Object(d["a"])(regeneratorRuntime.mark((function n(){var r,i,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.translations.connect();case 2:return n.next=4,l();case 4:if(r=n.sent,i="data:text/plain;charset=utf-8,".concat(p()),!e.value){n.next=16;break}return o=e.value,o.setAttribute("href",i),o.setAttribute("download",r),n.next=12,o.click();case 12:return n.next=14,Object(a["m"])();case 14:o.setAttribute("href",""),o.setAttribute("download","");case 16:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),b=function(){t.translations.values.splice(0,t.translations.values.length-1)};return{translations:t.translations.values,languages:t.settings.languages,addEmpty:n,saving:t.translations.saving,makeExport:h,fileDownload:e,nameFieldShown:i,onSetNameClick:u,nameField:r,clear:b}},components:{TranslationList:D}});n("e276");R.render=y,R.__scopeId="data-v-425e4dbf";var F=R,A=(n("b0c0"),Object(a["F"])("data-v-3394dad7"));Object(a["t"])("data-v-3394dad7");var I=Object(a["h"])("h1",null,"Settings",-1),P={class:"settings-fields"},B=Object(a["h"])("h2",null,"Translation export template",-1),L=Object(a["h"])("label",{for:"template"},"Template",-1),N=Object(a["h"])("label",{for:"prefix"},"Prefix",-1),V=Object(a["h"])("label",{for:"suffix"},"Suffix",-1),J=Object(a["h"])("label",{for:"filenameTemplate"},"Filename",-1),M=Object(a["h"])("h2",null,"Language support",-1),K={for:"languages"},z=Object(a["g"])("Languages "),H=Object(a["h"])("h2",null,"Existing external translations",-1),X=Object(a["h"])("label",{for:"translationsSourceUrl"},"Translation sources",-1),$={class:"download-status"},G=Object(a["h"])("hr",null,null,-1);Object(a["r"])();var Q=A((function(t,e,n,r,i,o){var s=Object(a["x"])("fa-icon");return Object(a["q"])(),Object(a["d"])(a["a"],null,[I,Object(a["h"])("div",P,[B,Object(a["h"])("div",null,[L,Object(a["E"])(Object(a["h"])("textarea",{name:"template","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.templateString=e}),placeholder:"Translation template. Use {key} {lang} {value} for respective data. Each translation will be emitted once."},null,512),[[a["B"],t.templateString]])]),Object(a["h"])("div",null,[N,Object(a["E"])(Object(a["h"])("textarea",{name:"prefix","onUpdate:modelValue":e[2]||(e[2]=function(e){return t.prefix=e}),placeholder:"Optional prefix for template file content - appended before all languages."},null,512),[[a["B"],t.prefix]])]),Object(a["h"])("div",null,[V,Object(a["E"])(Object(a["h"])("textarea",{name:"suffix","onUpdate:modelValue":e[3]||(e[3]=function(e){return t.suffix=e}),placeholder:"Optional suffix for template file content - appended after all languages."},null,512),[[a["B"],t.suffix]])]),Object(a["h"])("div",null,[J,Object(a["E"])(Object(a["h"])("input",{type:"text","onUpdate:modelValue":e[4]||(e[4]=function(e){return t.filenameTemplate=e}),placeholder:"Filename template, use {name} for namefield placeholder"},null,512),[[a["B"],t.filenameTemplate]])]),M,Object(a["h"])("div",null,[Object(a["h"])("label",K,[z,Object(a["h"])("button",{onClick:e[5]||(e[5]=function(){return t.addLanguage&&t.addLanguage.apply(t,arguments)})},"Add")]),(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(t.languages,(function(e){return Object(a["q"])(),Object(a["d"])("div",{key:e},[Object(a["E"])(Object(a["h"])("input",{type:"text","onUpdate:modelValue":function(t){return e.name=t}},null,8,["onUpdate:modelValue"]),[[a["B"],e.name]]),Object(a["h"])("button",{onClick:function(n){return t.removeLang(e.name)}},"X",8,["onClick"])])})),128))]),H,Object(a["h"])("div",null,[X,Object(a["E"])(Object(a["h"])("input",{type:"text","onUpdate:modelValue":e[6]||(e[6]=function(e){return t.translationSourceUri=e}),placeholder:"Translation source uri"},null,512),[[a["B"],t.translationSourceUri]]),Object(a["h"])("div",$,[t.downloadStatus.downloading.value?(Object(a["q"])(),Object(a["d"])(s,{key:0,icon:"sync",class:"fas icon"})):Object(a["e"])("",!0),t.downloadStatus.downloaded.value&&!t.downloadStatus.downloading.value?(Object(a["q"])(),Object(a["d"])(s,{key:1,icon:"check-square",class:"fas icon"})):Object(a["e"])("",!0),t.downloadError&&!t.downloadStatus.downloading.value?(Object(a["q"])(),Object(a["d"])(s,{key:2,icon:"check-square",class:"fas icon"})):Object(a["e"])("",!0)])]),G,Object(a["h"])("div",null,[Object(a["h"])("button",{onClick:e[7]||(e[7]=function(){return t.save&&t.save.apply(t,arguments)})},"Save"),Object(a["h"])("button",{onClick:e[8]||(e[8]=function(){return t.reload&&t.reload.apply(t,arguments)})},"Cancel")])])],64)})),W=(n("c740"),Object(a["i"])({setup:function(){var t=Object(a["l"])("state"),e=t.translations.existing.downloadStatus;return{settings:t.settings,downloadStatus:e,existingTranslations:t.translations.existing}},data:function(){return{templateString:"",prefix:"",suffix:"",filenameTemplate:"",languages:[],translationSourceUri:"",downloadError:!1}},methods:{addLanguage:function(){this.languages.some((function(t){return!t}))||this.languages.push({name:""})},removeLang:function(t){var e=this.languages.findIndex((function(e){return e.name==t}));-1!==e&&this.languages.splice(e,1)},save:function(){this.settings.update({translationTemplate:{prefix:this.prefix,suffix:this.suffix,each:this.templateString},translationFilename:this.filenameTemplate,languages:this.languages.map((function(t){return t.name})),translationsSourceUri:this.translationSourceUri}),this.downloadTranslations()},downloadTranslations:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.downloadError=!1,t.settings.translationsSourceUri){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,t.existingTranslations.download(t.settings.translationsSourceUri);case 6:e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](3),console.log(e.t0),t.downloadError=!0;case 12:case"end":return e.stop()}}),e,null,[[3,8]])})))()},reload:function(){this.templateString=this.settings.translationTemplate.each,this.prefix=this.settings.translationTemplate.prefix,this.suffix=this.settings.translationTemplate.suffix,this.filenameTemplate=this.settings.translationFilename,this.languages=this.settings.languages.map((function(t){return{name:t}})),this.translationSourceUri=this.settings.translationsSourceUri||""}},mounted:function(){this.reload()}}));n("afba");W.render=Q,W.__scopeId="data-v-3394dad7";var Y=W,Z=[{path:"/",name:"Home",component:F},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/settings",name:"Settings",component:Y}],tt=Object(h["a"])({history:Object(h["b"])(),routes:Z}),et=tt,nt=n("d4ec"),at=n("bee2"),rt="translate-helper-settings",it="translate-helper-values",ot="translate-existing-buffer",st=function(t,e){window.localStorage.setItem(t,e)},ut=function(t){return window.localStorage.getItem(t)},ct={setItem:st,getItem:ut};function lt(){return{translationTemplate:{prefix:"",suffix:"",each:"{key}\t{value}\t{lang}"},translationFilename:"{name}.csv",languages:["EN","PL"]}}var dt=function(){function t(e){Object(nt["a"])(this,t),this._storage=e;var n=e.getItem(rt),r=n?JSON.parse(n):lt();this._data=Object(a["u"])(r)}return Object(at["a"])(t,[{key:"languages",get:function(){return this._data.languages}},{key:"translationTemplate",get:function(){return this._data.translationTemplate}},{key:"translationFilename",get:function(){return this._data.translationFilename}},{key:"translationsSourceUri",get:function(){return this._data.translationsSourceUri||null}},{key:"update",value:function(t){this._storage.setItem(rt,JSON.stringify(t)),this._data.translationTemplate.prefix=t.translationTemplate.prefix,this._data.translationTemplate.suffix=t.translationTemplate.suffix,this._data.translationTemplate.each=t.translationTemplate.each,this._data.translationFilename=t.translationFilename,this._data.languages=t.languages,this._data.translationsSourceUri=t.translationsSourceUri}}]),t}(),ft=n("2909"),pt=(n("99af"),n("1276"),n("ac1f"),n("bc3a")),ht=n.n(pt),bt=function(){function t(e){Object(nt["a"])(this,t),this.tree=e,this.hasDownloadedData=Object(a["v"])(!1),this.isDownloading=Object(a["v"])(!1),this.downloadCallbacks=[]}return Object(at["a"])(t,[{key:"keys",get:function(){var t=function t(e,n){return n?"string"===typeof n?[e.join(".")]:Object.entries(n).flatMap((function(n){var a=Object(w["a"])(n,2),r=a[0],i=a[1];return t([].concat(Object(ft["a"])(e),[r]),i)})):[]};return t([],this.tree)}},{key:"all",get:function(){return this.tree}},{key:"onDownload",value:function(t){this.downloadCallbacks.push(t)}},{key:"allowsKey",value:function(t){var e=t.split("."),n=this.tree;while(e.length>0){var a=n[e[0]];if(!a)return!0;if("string"===typeof a)return 1===e.length;e.shift(),n=a}return!1}},{key:"downloaded",get:function(){return this.hasDownloadedData.value}},{key:"downloading",get:function(){return this.isDownloading.value}},{key:"downloadStatus",get:function(){return{downloading:this.isDownloading,downloaded:this.hasDownloadedData}}},{key:"download",value:function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(e){var n,a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.isDownloading.value=!0,t.next=4,ht.a.get(e);case 4:if(n=t.sent.data,"string"!==typeof n){t.next=7;break}throw new Error("Unable to parse translations as string");case 7:this.tree=n,this.hasDownloadedData.value=!0,this.isDownloading.value=!1,this.downloadCallbacks.forEach((function(t){return t(a.tree)})),t.next=18;break;case 13:throw t.prev=13,t.t0=t["catch"](0),this.hasDownloadedData.value=!1,this.isDownloading.value=!1,t.t0;case 18:return t.abrupt("return",this);case 19:case"end":return t.stop()}}),t,this,[[0,13]])})));function e(e){return t.apply(this,arguments)}return e}()}]),t}(),gt=function(){function t(e){Object(nt["a"])(this,t),this._storage=e;var n=JSON.parse(e.getItem(it)||"[]");this._values=Object(a["u"])(n),this._pending=null,this._saving=Object(a["v"])(!1);var r=JSON.parse(e.getItem(ot)||"{}");this._existing=new bt(r),this._existing.onDownload((function(t){e.setItem(ot,JSON.stringify(t))}))}return Object(at["a"])(t,[{key:"existing",get:function(){return this._existing}},{key:"values",get:function(){return this._values}},{key:"saving",get:function(){return this._saving}},{key:"update",value:function(t){var e=this._values.filter((function(e){return e.key==t.key}));if(e.length>0)for(var n=e[0],a=0,r=Object.entries(t);a<r.length;a++){var i=Object(w["a"])(r[a],2),o=i[0],s=i[1];n[o]=s}else this._values.push(t);this.save()}},{key:"save",value:function(){this._pending||(this._pending=this.saveAsync())}},{key:"saveAsync",value:function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this._pending){t.next=2;break}return t.abrupt("return",this._pending);case 2:return this._saving.value=!0,t.next=5,new Promise((function(t){return setTimeout(t,1e3)}));case 5:this._storage.setItem(it,JSON.stringify(this._values)),this._values.some((function(t){return!t.key}))||this._values.push({key:""}),this._pending=null,this._saving.value=!1;case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"connect",value:function(){return this._pending||new Promise((function(t){t()}))}},{key:"deleteRow",value:function(t){var e=this._values.findIndex((function(e){return e.key==t}));this._values.splice(e,1)}}]),t}(),vt=function(){function t(){Object(nt["a"])(this,t),this._storage=ct,this._translations=new gt(this._storage),this._settings=new dt(this._storage)}return Object(at["a"])(t,[{key:"translations",get:function(){return this._translations}},{key:"settings",get:function(){return this._settings}}]),t}(),Ot=n("ecee"),jt=n("c074"),mt=n("f2d1");function yt(t,e,n,r,i,o){return Object(a["q"])(),Object(a["d"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:t.$props.class,viewBox:"0 0 ".concat(t.width," ").concat(t.height)},[Object(a["h"])("path",{fill:"currentColor",d:t.svgPath},null,8,["d"])],10,["viewBox"])}var wt=Object(a["i"])({name:"FontAwesomeIcon",props:{icon:{type:String,required:!0},type:{type:String,default:"fas",required:!1},class:String},setup:function(t){var e=Object(a["b"])((function(){return Object(Ot["a"])({prefix:t.type,iconName:t.icon})})),n=Object(a["b"])((function(){return e.value.icon[0]})),r=Object(a["b"])((function(){return e.value.icon[1]})),i=Object(a["b"])((function(){return e.value.icon[4]}));return{width:n,height:r,svgPath:i}}});wt.render=yt;var kt=wt;Ot["b"].add(jt["a"],mt["b"],mt["a"]);var xt=new vt;Object(a["c"])(p).use(et).component("fa-icon",kt).provide("state",xt).mount("#app")},e276:function(t,e,n){"use strict";n("91d0")}});
//# sourceMappingURL=app.fdc7b86e.js.map