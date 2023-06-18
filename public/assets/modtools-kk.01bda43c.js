"use strict";(self.webpackChunkPixelPlanet=self.webpackChunkPixelPlanet||[]).push([[189],{4384:(e,t,o)=>{o.r(t),o.d(t,{default:()=>J});var a,n,i,l,d,r,s,c,p,u=o(7294),v=o(743),m=o(2354),h=o(9665),f=o(980);function y(e,t,o,a){p||(p="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var l=new Array(i),d=0;d<i;d++)l[d]=arguments[d+3];t.children=l}if(t&&n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);else t||(t=n||{});return{$$typeof:p,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}const b={coords:"",tlcoords:"",brcoords:"",tlrcoords:"",brrcoords:"",tlccoords:"",brccoords:""};function x(){const e=(0,h.x2)(),[t,o]=(0,u.useState)(0),[p,x]=(0,u.useState)("build"),[w,g]=(0,u.useState)("spare"),[k,S]=(0,u.useState)("protect"),[C,$]=(0,u.useState)(e),[I,F]=(0,u.useState)(null),[N,P]=(0,u.useState)({}),[D,_]=(0,u.useState)(!1),[O,W]=(0,v.v9)((e=>[e.canvas.canvasId,e.canvas.canvases]),v.wU);let X,Y;switch((0,u.useEffect)((()=>{o(O)}),[O]),p){case"build":X="Кенепте сурет құру.";break;case"protect":X="Сурет құрып, оны қорғау.";break;case"wipe":X="Сурет құрып, оның пикселдері үшін күту уақытын боялмағандай орнату."}switch(w){case"spare":Y="Айналасында боялмаған пикселдері бар артық пикселдерді өшіру";break;case"spareext":Y="Айналасында боялмаған пикселдері немесе 1 боялған пикселі бар артық пикселдерді өшіру";break;case"spareextu":Y="Айналасында бір түсті фоны немесе боялмаған пикселдері бар артық пикселдерді өшіру (ЕКІ КҮТУ УАҚЫТЫ БАР КЕНЕПТЕРДЕ ӨТЕ АГРЕССИВТІ!)"}(0,m.Z)((()=>{!async function(e){const t=new FormData;t.append("cleanerstat",!0);const o=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:t});o.ok?e(await o.json()):e({})}((e=>P(e)))}),1e4);const T=N.running?`Status: ${N.method} from ${N.tl} to ${N.br} on canvas ${W[N.canvasId].ident} to ${N.percent} done`:"Күйі: өшірулі";return y("div",{className:"content"},void 0,I&&y("div",{className:"respbox"},void 0,I.split("\n").map((e=>y("p",{},e.slice(0,3),e))),y("span",{role:"button",tabIndex:-1,className:"modallink",onClick:()=>F(null)},void 0,"Жабу")),y("p",{},void 0,"Кенеп таңдау",": ",y("select",{value:t,onChange:e=>{const t=e.target;o(t.options[t.selectedIndex].value)}},void 0,Object.keys(W).filter((e=>!W[e].v)).map((e=>y("option",{value:e},e,W[e].title))))),a||(a=y("div",{className:"modaldivider"})),y("h3",{},void 0,"Сурет жүктеу"),y("p",{},void 0,"Кенепке сурет жүктеп салу"),y("p",{},void 0,"Файл",": ",n||(n=y("input",{type:"file",name:"image",id:"imgfile"}))),y("select",{value:p,onChange:e=>{const t=e.target;x(t.options[t.selectedIndex].value)}},void 0,["build","protect","wipe"].map((e=>y("option",{value:e},e,e)))),y("p",{},void 0,X),y("p",{},void 0,"X_Y пішіміндегі координаттар:"," ",y("input",{defaultValue:b.coords,style:{display:"inline-block",width:"100%",maxWidth:"15em"},type:"text",placeholder:"X_Y",onChange:e=>{b.coords=e.target.value.trim()}})),y("button",{type:"button",onClick:()=>{D||(_(!0),async function(e,t,o,a){const n=new FormData,i=document.getElementById("imgfile"),l=i.files&&i.files[0]?i.files[0]:null;n.append("imageaction",e),n.append("image",l),n.append("canvasid",t),n.append("coords",o);const d=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:n});var r;r=await d.text(),_(!1),F(r)}(p,t,b.coords))}},void 0,D?"...":"Жіберу"),i||(i=y("br",{})),l||(l=y("div",{className:"modaldivider"})),y("h3",{},void 0,"Пиксел қорғалуы"),y("p",{},void 0,"Аймақтың қорғалуын баптау         (дәлірек басқару керек болса,         альфа арнасы бар суретті жүктеп, оны қорғаңыз)"),y("select",{value:k,onChange:e=>{const t=e.target;S(t.options[t.selectedIndex].value)}},void 0,["protect","unprotect"].map((e=>y("option",{value:e},e,e)))),y("p",{},void 0,"Жоғарғы сол жақ бұрыш"," (X_Y): ",y("input",{defaultValue:b.tlcoords,style:{display:"inline-block",width:"100%",maxWidth:"15em"},type:"text",placeholder:"X_Y",onChange:e=>{const t=e.target.value.trim();b.tlcoords=t}})),y("p",{},void 0,"Төменгі оң жақ бұрыш"," (X_Y): ",y("input",{defaultValue:b.brcoords,style:{display:"inline-block",width:"100%",maxWidth:"15em"},type:"text",placeholder:"X_Y",onChange:e=>{const t=e.target.value.trim();b.brcoords=t}})),y("button",{type:"button",onClick:()=>{D||(_(!0),async function(e,t,o,a,n){const i=new FormData;i.append("protaction",e),i.append("canvasid",t),i.append("ulcoor",o),i.append("brcoor",a);const l=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:i});var d;d=await l.text(),_(!1),F(d)}(k,t,b.tlcoords,b.brcoords))}},void 0,D?"...":"Жіберу"),window.ssv&&window.ssv.backupurl&&y("div",{},void 0,d||(d=y("br",{})),r||(r=y("div",{className:"modaldivider"})),y("h3",{},void 0,"Күнге дейін шегіндіру"),y("p",{},void 0,"Кенептегі аймақты таңдалған күн мен уақытқа дейін шегіндіру (00:00 UTC)"),y("input",{type:"date",value:C,pattern:"\\d{4}-\\d{2}-\\d{2}",min:W[t].sd,max:e,onChange:e=>{$(e.target.value)}}),y("p",{},void 0,"Жоғарғы сол жақ бұрыш"," (X_Y): ",y("input",{defaultValue:b.tlrcoords,style:{display:"inline-block",width:"100%",maxWidth:"15em"},type:"text",placeholder:"X_Y",onChange:e=>{const t=e.target.value.trim();b.tlrcoords=t}})),y("p",{},void 0,"Төменгі оң жақ бұрыш"," (X_Y): ",y("input",{defaultValue:b.brrcoords,style:{display:"inline-block",width:"100%",maxWidth:"15em"},type:"text",placeholder:"X_Y",onChange:e=>{const t=e.target.value.trim();b.brrcoords=t}})),y("button",{type:"button",onClick:()=>{D||(_(!0),async function(e,t,o,a,n){const i=new FormData,l=(0,h.UW)(e);i.append("rollback",l),i.append("canvasid",t),i.append("ulcoor",o),i.append("brcoor",a);const d=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:i});var r;r=await d.text(),_(!1),F(r)}(C,t,b.tlrcoords,b.brrcoords))}},void 0,D?"...":"Жіберу")),s||(s=y("br",{})),c||(c=y("div",{className:"modaldivider"})),y("h3",{},void 0,"Кенеп тазартқыш"),y("p",{},void 0,"Кенептің үлкен аймақтарын қоқыстан тазарту үшін сүзгі қолдану."),y("select",{value:w,onChange:e=>{const t=e.target;g(t.options[t.selectedIndex].value)}},void 0,["spare","spareext","spareextu"].map((e=>y("option",{value:e},e,e)))),y("p",{},void 0,Y),y("p",{style:{fontWeight:"bold"}},void 0,T),y("p",{},void 0,"Жоғарғы сол жақ бұрыш"," (X_Y): ",y("input",{defaultValue:b.tlccoords,style:{display:"inline-block",width:"100%",maxWidth:"15em"},type:"text",placeholder:"X_Y",onChange:e=>{const t=e.target.value.trim();b.tlccoords=t}})),y("p",{},void 0,"Төменгі оң жақ бұрыш"," (X_Y): ",y("input",{defaultValue:b.brccoords,style:{display:"inline-block",width:"100%",maxWidth:"15em"},type:"text",placeholder:"X_Y",onChange:e=>{const t=e.target.value.trim();b.brccoords=t}})),y("button",{type:"button",onClick:()=>{D||(_(!0),async function(e,o,a,n,i){const l=new FormData;l.append("cleaneraction",e),l.append("canvasid",o),l.append("ulcoor",a),l.append("brcoor",n);const d=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:l});var r;r=await d.text(),P({running:!0,percent:"N/A",method:w,tl:b.tlccoords,br:b.brccoords,canvasId:t}),_(!1),F(r)}(w,t,b.tlccoords,b.brccoords))}},void 0,D?"...":"Жіберу"),y("button",{type:"button",onClick:()=>{D||(_(!0),async function(e){const t=new FormData;t.append("cleanercancel",!0);const o=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:t});o.ok?e(await o.text()):e("")}((e=>{P({}),_(!1),F(e)})))}},void 0,D?"...":"Тазартқышты тоқтату"))}const w=u.memo(x);var g,k,S,C,$,I,F,N,P,D;function _(e,t,o,a){D||(D="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var l=new Array(i),d=0;d<i;d++)l[d]=arguments[d+3];t.children=l}if(t&&n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);else t||(t=n||{});return{$$typeof:D,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function O(){const[e,t]=(0,u.useState)("iidtoip"),[o,a]=(0,u.useState)(""),[n,i]=(0,u.useState)(""),[l,d]=(0,u.useState)(null),[r,s]=(0,u.useState)([]),[c,p]=(0,u.useState)(!1);return(0,u.useEffect)((()=>{!async function(e){const t=new FormData;t.append("modlist",!0);const o=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:t});o.ok?e(await o.json()):e([])}((e=>s(e)))}),[]),_("div",{className:"content"},void 0,l&&_("div",{className:"respbox"},void 0,l.split("\n").map((e=>_("p",{},e.slice(0,3),e))),_("span",{role:"button",tabIndex:-1,className:"modallink",onClick:()=>d(null)},void 0,"Жабу")),_("div",{},void 0,g||(g=_("br",{})),_("h3",{},void 0,"IP әрекеттері"),_("p",{},void 0,"IP-лерді басқару (әр жолға бір IP)"),_("select",{value:e,onChange:e=>{const o=e.target;t(o.options[o.selectedIndex].value)}},void 0,["iidtoip","iptoiid"].map((e=>_("option",{value:e},e,e)))),k||(k=_("br",{})),_("textarea",{rows:"10",cols:"17",value:n,onChange:e=>i(e.target.value)}),S||(S=_("br",{})),_("button",{type:"button",onClick:()=>{c||(p(!0),async function(e,t,o){const a=new FormData;a.append("ipaction",e),a.append("ip",t);const n=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:a});var l;l=await n.text(),p(!1),i(l)}(e,n))}},void 0,c?"...":"Жіберу"),C||(C=_("br",{})),$||($=_("div",{className:"modaldivider"})),_("h3",{},void 0,"Модераторларды басқару"),_("p",{},void 0,"Модератордан шығару"),r.length?_("span",{className:"unblocklist"},void 0,r.map((e=>_("div",{role:"button",tabIndex:0,onClick:()=>{c||(p(!0),async function(t,o){const a=new FormData;a.append("remmod",t);const n=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:a});var i,l;i=n.ok,l=await n.text(),i&&s(r.filter((t=>t[0]!==e[0]))),p(!1),d(l)}(e[0]))}},e[0],`⦸ ${e[0]} ${e[1]}`)))):_("p",{},void 0,"Модераторлар жоқ"),I||(I=_("br",{})),_("p",{},void 0,"Модератор тағайындау"),_("p",{},void 0,"Жаңа модератордың атын енгізіңіз",": ",_("input",{value:o,style:{display:"inline-block",width:"100%",maxWidth:"20em"},type:"text",placeholder:"Қолданушы аты",onChange:e=>{const t=e.target.value.trim();a(t)}})),_("button",{type:"button",onClick:()=>{c||(p(!0),async function(e,t){const o=new FormData;o.append("makemod",e);const a=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:o});a.ok?t(await a.json()):t(await a.text())}(o,(e=>{"string"==typeof e?d(e):(d(`Made ${e[1]} mod successfully.`),s([...r,e])),p(!1)})))}},void 0,c?"...":"Жіберу"),F||(F=_("br",{})),N||(N=_("div",{className:"modaldivider"})),P||(P=_("br",{}))))}const W=u.memo(O);var X,Y,T,A=o(1740);function V(e,t,o,a){T||(T="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var l=new Array(i),d=0;d<i;d++)l[d]=arguments[d+3];t.children=l}if(t&&n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);else t||(t=n||{});return{$$typeof:T,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}const E={tlcoords:"",brcoords:"",interval:"15m",iid:""};async function j(e,t,o,a,n,i,l){let d=(0,h.bG)(n);if(!d)return void l({info:"Жарамсыз интервал"});d=Date.now()-d;const r=new FormData;r.append("watchaction",e),r.append("canvasid",t),r.append("ulcoor",o),r.append("brcoor",a),r.append("time",d),r.append("iid",i);try{const e=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:r});let t;try{t=await e.json()}catch{throw new Error(await e.text())}l(await t)}catch(e){l({info:`Error: ${e.message}`})}}function L(){const[e,t]=(0,u.useState)(0),[o,a]=(0,u.useState)(!0),[n,i]=(0,u.useState)(0),[l,d]=(0,u.useState)({}),[r,s]=(0,u.useState)(null),[c,p]=(0,u.useState)(!1),[m,h]=(0,v.v9)((e=>[e.canvas.canvasId,e.canvas.canvases]),v.wU);(0,u.useEffect)((()=>{t(m)}),[m]);const{columns:f,types:y,rows:b,ts:x}=l,w=y?y.indexOf("cid"):-1;return u.createElement(u.Fragment,null,V("div",{className:"content"},void 0,r&&V("div",{className:"respbox"},void 0,r.split("\n").map((e=>V("p",{},e.slice(0,3),e))),V("span",{role:"button",tabIndex:-1,className:"modallink",onClick:()=>s(null)},void 0,"Жабу")),V("p",{},void 0,"Аймақта кім салғанын тексеру"),V("p",{},void 0,"Кенеп",": ",V("select",{value:e,onChange:e=>{const o=e.target;t(o.options[o.selectedIndex].value)}},void 0,Object.keys(h).filter((e=>!h[e].v)).map((e=>V("option",{value:e},e,h[e].title))))," Интервал: ",V("input",{defaultValue:E.interval,style:{display:"inline-block",width:"100%",maxWidth:"5em"},type:"text",placeholder:"15m",onChange:e=>{const t=e.target.value.trim();E.interval=t}})," IID (міндетті емес): ",V("input",{defaultValue:E.iid,style:{display:"inline-block",width:"100%",maxWidth:"10em"},type:"text",placeholder:"xxxx-xxxxx-xxxx",onChange:e=>{const t=e.target.value.trim();E.iid=t}})),V("p",{},void 0,"Жоғарғы сол жақ бұрыш"," (X_Y): ",V("input",{defaultValue:E.tlcoords,style:{display:"inline-block",width:"100%",maxWidth:"15em"},type:"text",placeholder:"X_Y",onChange:e=>{const t=e.target.value.trim();E.tlcoords=t}})),V("p",{},void 0,"Төменгі оң жақ бұрыш"," (X_Y): ",V("input",{defaultValue:E.brcoords,style:{display:"inline-block",width:"100%",maxWidth:"15em"},type:"text",placeholder:"X_Y",onChange:e=>{const t=e.target.value.trim();E.brcoords=t}})),V("button",{type:"button",onClick:()=>{c||(p(!0),j("all",e,E.tlcoords,E.brcoords,E.interval,E.iid,(e=>{p(!1),s(e.info),e.rows&&(i(0),d({columns:e.columns,types:e.types,rows:e.rows,ts:Date.now()}))})))}},void 0,c?"...":"Пикселдерді алу"),V("button",{type:"button",onClick:()=>{c||(p(!0),j("summary",e,E.tlcoords,E.brcoords,E.interval,E.iid,(e=>{p(!1),s(e.info),e.rows&&(i(0),d({columns:e.columns,types:e.types,rows:e.rows,ts:Date.now()}))})))}},void 0,c?"...":"Қолданушыларды алу")),X||(X=V("br",{})),b&&f&&y&&V(u.Fragment,{},x,Y||(Y=V("div",{className:"modaldivider"})),V("table",{style:{fontSize:11}},void 0,V("thead",{},void 0,V("tr",{},void 0,f.slice(1).map(((e,t)=>V("th",{style:n-1===t?{cursor:"pointer",fontWeight:"normal"}:{cursor:"pointer"},onClick:()=>{n-1===t?a(!o):i(t+1)}},e,e))))),V("tbody",{style:{userSelect:"text"}},void 0,b.sort(((e,t)=>function(e,t,o){if("string"==typeof e&&"string"==typeof t){let a=e.localeCompare(t);return o&&(a*=-1),a}return e&&"N/A"!==e||(e=0),t&&"N/A"!==t||(t=0),e<t?o?-1:1:e>t?o?1:-1:0}(e[n],t[n],o))).map((t=>V("tr",{},t[0],t.slice(1).map(((o,a)=>{const n=y[a+1];if(null===o)return V("td",{},n,"N/A");switch(n){case"ts":{const e=new Date(o);let t=e.getMinutes();return t<10&&(t=`0${t}`),V("td",{title:e.toLocaleDateString()},n,`${e.getHours()}:${t}`)}case"clr":{const a=w>0?t[w]:e,i=h[a]&&h[a].colors&&h[a].colors[o];return V("td",i?{style:{backgroundColor:`rgb(${i[0]},${i[1]},${i[2]})`}}:{},n,o)}case"coord":{const a=w>0?t[w]:e;return V("td",{},n,V("a",{href:`./#${h[a]&&h[a].ident},${o},47`},void 0,o))}case"flag":{const e=o.toLowerCase();return V("td",{title:o},n,V("img",{style:{height:"1em",imageRendering:"crisp-edges"},alt:o,src:`/cf/${e}.gif`}))}case"cid":{const e=h?.ident;return V("td",{},n,e)}case"cidr":return V("td",{},n,V("span",{role:"button",tabIndex:-1,style:{cursor:"pointer",whiteSpace:"initial"},title:"Алмасу буферіне көшіру",onClick:()=>(0,A.Z)(o.slice(0,o.indexOf("/")))},void 0,o));case"uuid":return V("td",{},n,V("span",{role:"button",tabIndex:-1,style:{cursor:"pointer",whiteSpace:"initial"},title:"Алмасу буферіне көшіру",onClick:()=>(0,A.Z)(o)},void 0,o));case"user":{const e=o.lastIndexOf(",");return-1===e?V("td",{},n,V("span",{},void 0,o)):V("td",{title:o.slice(e+1)},n,V("span",{},void 0,o.slice(0,e)))}default:return V("td",{},n,o)}})))))))))}var U,Z,G,M;function R(e,t,o,a){U||(U="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var l=new Array(i),d=0;d<i;d++)l[d]=arguments[d+3];t.children=l}if(t&&n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);else t||(t=n||{});return{$$typeof:U,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function z(){const[e,t]=(0,u.useState)("givecaptcha"),[o,a]=(0,u.useState)(""),[n,i]=(0,u.useState)(""),[l,d]=(0,u.useState)("1d"),[r,s]=(0,u.useState)(""),[c,p]=(0,u.useState)(!1);return R("div",{style:{textAlign:"center",paddingLeft:"5%",paddingRight:"5%"}},void 0,R("h3",{},void 0,"IID әрекеттері"),R("select",{value:e,onChange:e=>{const o=e.target;t(o.options[o.selectedIndex].value)}},void 0,["status","givecaptcha","ban","unban","whitelist","unwhitelist"].map((e=>R("option",{value:e},e,e)))),"ban"===e&&R(u.Fragment,{},"ban",R("p",{},void 0,"Себебі"),R("input",{maxLength:"200",style:{width:"100%"},value:n,placeholder:"Себебін енгізіңіз",onChange:e=>i(e.target.value)}),R("p",{},void 0,"Мерзімі: ",R("input",{style:{display:"inline-block",width:"100%",maxWidth:"7em"},value:l,placeholder:"1d",onChange:e=>{d(e.target.value.trim())}}),"(0 = шексіз)")),R("p",{},void 0," IID: ",R("input",{value:o,style:{display:"inline-block",width:"100%",maxWidth:"10em"},type:"text",placeholder:"xxxx-xxxxx-xxxx",onChange:e=>{a(e.target.value.trim())}}),R("button",{type:"button",onClick:()=>{c||(p(!0),async function(e,t,o,a,n){let i=(0,h.bG)(a);if(0===i&&"0"!==a)return void n("Мерзімін енгізуіңіз қажет");if(!t)return void n("IID енгізуіңіз қажет");i>0&&(i+=Date.now());const l=new FormData;l.append("iidaction",e),l.append("reason",o),l.append("time",i),l.append("iid",t);const d=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:l});n(await d.text())}(e,o,n,l,(e=>{p(!1),s(e)})))}},void 0,c?"...":"Жіберу")),R("textarea",{style:{width:"100%"},rows:r?r.split("\n").length:10,value:r,readOnly:!0}))}function B(e,t,o,a){M||(M="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var l=new Array(i),d=0;d<i;d++)l[d]=arguments[d+3];t.children=l}if(t&&n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);else t||(t=n||{});return{$$typeof:M,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}const H={Canvas:w,Admin:W,Watch:u.memo(L),IID:u.memo(z)};function q(){const[e,t]=(0,u.useState)("Canvas"),o=(0,v.v9)((e=>e.user.userlvl)),a=H[e],n=Object.keys(H).filter((e=>"Admin"!==e||1===o));return u.createElement(u.Fragment,null,B("div",{className:"content",style:{overflowWrap:"anywhere"}},void 0,n.map(((o,a)=>B(u.Fragment,{},o,B("span",{role:"button",tabIndex:-1,className:e===o?"modallink selected":"modallink",onClick:()=>t(o)},void 0,o),a!==n.length-1&&(Z||(Z=B("span",{className:"hdivider"})))))),G||(G=B("div",{className:"modaldivider"}))),a&&B(a,{}))}const J=u.memo(q)}}]);