(function(e){function t(t){for(var n,r,l=t[0],s=t[1],c=t[2],u=0,p=[];u<l.length;u++)r=l[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);f&&f(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,r=1;r<o.length;r++){var l=o[r];0!==a[l]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=o[0]))}return e}var n={},r={app:0},a={app:0},i=[];function l(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-3686ce24":"b0cdf968","chunk-d6ce5718":"0bfe0b58"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(e){var t=[],o={"chunk-3686ce24":1,"chunk-d6ce5718":1};r[e]?t.push(r[e]):0!==r[e]&&o[e]&&t.push(r[e]=new Promise((function(t,o){for(var n="css/"+({}[e]||e)+"."+{"chunk-3686ce24":"c0465533","chunk-d6ce5718":"8cb4f945"}[e]+".css",a=s.p+n,i=document.getElementsByTagName("link"),l=0;l<i.length;l++){var c=i[l],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===a))return t()}var p=document.getElementsByTagName("style");for(l=0;l<p.length;l++){c=p[l],u=c.getAttribute("data-href");if(u===n||u===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[e],f.parentNode.removeChild(f),o(i)},f.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){r[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,o){n=a[e]=[t,o]}));t.push(n[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=l(e);var p=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(f);var o=a[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",p.name="ChunkLoadError",p.type=n,p.request=r,o[1](p)}a[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(o,n,function(t){return e[t]}.bind(null,n));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var f=u;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("el-header",{staticClass:"header"},[o("div",{staticClass:"-container"},[o("el-popover",{staticClass:"button lang-button",attrs:{placement:"bottom",trigger:"click"}},[o("el-radio-group",{attrs:{value:e.locale},on:{input:e.updateLang}},e._l(e.langs,(function(t){return o("el-radio",{key:t.label,attrs:{label:t.value}},[e._v(e._s(e.$t(t.label)))])})),1),o("el-tooltip",{attrs:{slot:"reference",effect:"light",content:e.$t("Language"),placement:"bottom"},slot:"reference"},[o("el-button",{attrs:{icon:"el-icon-map-location",circle:""}})],1)],1),"/"==e.$route.path?o("el-tooltip",{attrs:{effect:"light",content:e.$t("Help"),placement:"bottom"}},[o("el-button",{staticClass:"button import-button",attrs:{icon:"el-icon-question",circle:""},on:{click:function(t){return e.showTutorial()}}})],1):e._e(),"/flow"==e.$route.path?o("el-tooltip",{attrs:{effect:"light",content:e.$t("Upload another flow"),placement:"bottom"}},[o("el-button",{staticClass:"button import-button",attrs:{icon:"el-icon-upload",circle:""},on:{click:function(t){return e.returnToHome()}}})],1):e._e(),"/flow"==e.$route.path?o("el-tooltip",{attrs:{effect:"light",content:e.$t("flip chart"),placement:"bottom"}},[o("el-button",{staticClass:"button import-button",class:{"-flipped":"TB"==e.direction},attrs:{icon:"el-icon-sort",circle:""},on:{click:function(t){return e.toggleDirection()}}})],1):e._e(),o("el-tooltip",{staticClass:"item",attrs:{effect:"light",placement:"bottom"}},[o("span",{attrs:{slot:"content"},slot:"content"},[e._v("NeoAssist.com S/A © "+e._s(e.today)+". "+e._s(e.$t("All rights reserved")))]),o("img",{staticClass:"logo",attrs:{src:"https://homologacao.neoassist.com/clients/watsonreader/logoNeo.png",alt:"logo"}})])],1)]),o("el-main",{staticClass:"content"},[o("router-view",{ref:"home"})],1)],1)},a=[],i=(o("a4d3"),o("4de4"),o("4160"),o("e439"),o("dbb4"),o("b64b"),o("159b"),o("ade3")),l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-row",[o("el-menu",{attrs:{"default-active":e.itens[0].label,mode:"horizontal"}},e._l(e.itens,(function(t){return o("el-col",{key:t.label,attrs:{span:e.spanSize}},[o("el-menu-item",{attrs:{index:t.label,router:"true"},on:{click:function(o){return e.goto(t.route)}}},[e._v(e._s(t.label))])],1)})),1)],1)},s=[],c=(o("ac1f"),o("5319"),{name:"top-navigation",computed:{spanSize:function(){return 24/this.itens.length}},props:{itens:{type:Array,required:!0,default:[{label:"",route:"/"}]}},methods:{goto:function(e){this.$router.replace(e)}}}),u=c,p=o("2877"),f=Object(p["a"])(u,l,s,!1,null,null,null),d=(f.exports,o("2f62"));function h(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function m(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?h(Object(o),!0).forEach((function(t){Object(i["a"])(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):h(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var g={data:function(){return{langs:[{label:"English",value:"en_us"},{label:"Portuguese",value:"pt_br"}]}},computed:m({},Object(d["c"])({locale:function(e){return e.locale},direction:function(e){return e.direction}}),{today:function(){var e=new Date;return e.getUTCFullYear()}}),methods:m({updateLang:function(e){this.$store.commit("SET_LANG",e),this.$root.$i18n.locale=e},returnToHome:function(){this.$router.push("/")},toggleDirection:function(){this.$store.commit("TOGGLE_DIRECTION")},showTutorial:function(){this.$refs.home.toggle()}},d["b"]["TOGGLE_DIRECTION"])},b=g,v=(o("cf25"),Object(p["a"])(b,r,a,!1,null,null,null)),y=v.exports,O=(o("d3b7"),o("8c4f"));n["default"].use(O["a"]);var S=[{path:"/",name:"home",component:function(){return o.e("chunk-3686ce24").then(o.bind(null,"bb51"))}},{path:"/flow",name:"flow",component:function(){return o.e("chunk-d6ce5718").then(o.bind(null,"0c0b"))}}],E=new O["a"]({routes:S}),w=E;n["default"].use(d["a"]);var _=new d["a"].Store({state:{chart:{},file:{},locale:"pt_br",direction:"TB"},mutations:{SET_LANG:function(e,t){e.locale=t},SET_FILE:function(e,t){e.file=t},SET_CHART:function(e,t){e.chart=t},TOGGLE_DIRECTION:function(e){"TB"==e.direction?e.direction="LR":e.direction="TB"}},actions:{},modules:{}}),k=o("a925"),T=o("5c96"),x=o.n(T),C={"Welcome to Watson Reader":"Welcome to Watson Reader","All rights reserved":"All rights reserved","Export JSON":"Export JSON",root:"Root","jump to":"Jump to",user_input:"after user's input",body:"immediately",condition:"if target's contition is met","no results":"No results","Upload Here":"Upload Here",Overview:"Overview","How to Export Watson's JSON":"How to Export Watsons JSON",step:"step","Access Watson's platform":"Access Watson's platform","Select an Instance":"Select an Instance","Click on the Skills tab":"Click on the Skills tab","Select 'Export' for the Skill you'd like to export":"Select 'Export' for the Skill you'd like to export",nodeId:"ID",title:"Title",context:"Context",conditions:"Conditions",output:"Output",previous:"Previous",then:"then",type:"Type",Entities:"Entities",Intents:"Intents",Language:"Language",Help:"Help","Upload another flow":"Upload another flow","flip chart":"flip chart",English:"English",Success:"Success","Bot successfully imported":"Bot successfully imported",Error:"Error","JSON File is not a Watson Bot":"JSON File is not a Watson Bot","Failed to read file":"Failed to read file",Loading:"Loading","Processing file...":"Processing file...",Portuguese:"Portuguese","Drop your JSON file here":"Drop your JSON file here"},N={"Welcome to Watson Reader":"Bem-vindo ao Watson Reader","All rights reserved":"Todos os direitos reservados","Export JSON":"Exporte o JSON",root:"Raíz","jump to":"Saltar para",user_input:"após mensagem do usuário",body:"imediatamente",condition:"se condição do alvo for cumprida","Upload Here":"Envie abaixo","no results":"Nenhum resultado encontrado",Overview:"Visualize","How to Export Watson's JSON":"Como exportar o JSON do Watson","Access Watson's platform":"Acesse a platforma do Watson","Select an Instance":"Selecione uma Instância","Click on the Skills tab":"Clique na Aba Skills","Select 'Export' for the Skill you'd like to export":"Selecione 'Exportar' para a Skill que quiser exportar",step:"Passo",nodeId:"ID",title:"Título",context:"Contexto",conditions:"Condições",output:"Saída",previous:"Anterior",parent:"Pai",then:"Depois",type:"Tipo",Entities:"Entidades",Intents:"Intenções",Language:"Idioma",Help:"Ajuda","Upload another flow":"Enviar novo fluxo","flip chart":"Girar diagrama",Success:"Sucesso","Bot successfully imported":"Bot importado com sucesso",Error:"Erro","JSON File is not a Watson Bot":"Arquivo JSON não é um bot do Watson","Failed to read file":"Falha ao ler arquivo",Loading:"Carregando","Processing file...":"Estamos processando o arquivo...",English:"Inglês",Portuguese:"Português","Drop your JSON file here":"Solte seu arquivo .JSON aqui!"},j={en_us:C,pt_br:N};o("0fae");n["default"].use(x.a),n["default"].use(k["a"]),n["default"].config.productionTip=!1;var P=new k["a"]({locale:_.state.locale,messages:j});new n["default"]({router:w,store:_,i18n:P,render:function(e){return e(y)}}).$mount("#app")},cf25:function(e,t,o){"use strict";var n=o("fea6"),r=o.n(n);r.a},fea6:function(e,t,o){}});
//# sourceMappingURL=app.014a6e29.js.map