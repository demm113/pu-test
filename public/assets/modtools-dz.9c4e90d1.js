"use strict";(self.webpackChunkPixelPlanet=self.webpackChunkPixelPlanet||[]).push([[189],{4384:(e,t,o)=>{o.r(t),o.d(t,{default:()=>J});var a,n,i,l,r,d,s,c,p,u=o(7294),v=o(743),m=o(2354),h=o(9665),f=o(980);function y(e,t,o,a){p||(p="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var l=new Array(i),r=0;r<i;r++)l[r]=arguments[r+3];t.children=l}if(t&&n)for(var d in n)void 0===t[d]&&(t[d]=n[d]);else t||(t=n||{});return{$$typeof:p,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}const b={coords:"",tlcoords:"",brcoords:"",tlrcoords:"",brrcoords:"",tlccoords:"",brccoords:""};function x(){const e=(0,h.x2)(),[t,o]=(0,u.useState)(0),[p,x]=(0,u.useState)("build"),[w,g]=(0,u.useState)("spare"),[S,k]=(0,u.useState)("protect"),[C,$]=(0,u.useState)(e),[I,N]=(0,u.useState)(null),[F,P]=(0,u.useState)({}),[D,_]=(0,u.useState)(!1),[A,O]=(0,v.v9)((e=>[e.canvas.canvasId,e.canvas.canvases]),v.wU);let T,Y;switch((0,u.useEffect)((()=>{o(A)}),[A]),p){case"build":T="Build image on canvas.";break;case"protect":T="Build image and set it to protected.";break;case"wipe":T="Build image, but reset cooldown to unset-pixel cd."}switch(w){case"spare":Y="Clean spare pixels that are surrounded by unset pixels";break;case"spareext":Y="Clean spare pixels that are surrounded by unset pixels and up to 1 other set pixels";break;case"spareextu":Y="Clean spare pixels that are surrounded by a single other color or unset pixels (VERY AGGRESSIVE ON CANVASES THAT ALLOW UNSET PIXELS (where there are two cooldowns)!)"}(0,m.Z)((()=>{!async function(e){const t=new FormData;t.append("cleanerstat",!0);const o=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:t});o.ok?e(await o.json()):e({})}((e=>P(e)))}),1e4);const W=F.running?`Status: ${F.method} from ${F.tl} to ${F.br} on canvas ${O[F.canvasId].ident} to ${F.percent} done`:"Status: Not running";return y("div",{className:"content"},void 0,I&&y("div",{className:"respbox"},void 0,I.split("\n").map((e=>y("p",{},e.slice(0,3),e))),y("span",{role:"button",tabIndex:-1,className:"modallink",onClick:()=>N(null)},void 0,"ཁེ་བཙོང༌།")),y("p",{},void 0,"Choose Canvas",": ",y("select",{value:t,onChange:e=>{const t=e.target;o(t.options[t.selectedIndex].value)}},void 0,Object.keys(O).filter((e=>!O[e].v)).map((e=>y("option",{value:e},e,O[e].title))))),a||(a=y("div",{className:"modaldivider"})),y("h3",{},void 0,"Image Upload"),y("p",{},void 0,"Upload images to canvas"),y("p",{},void 0,"File",": ",n||(n=y("input",{type:"file",name:"image",id:"imgfile"}))),y("select",{value:p,onChange:e=>{const t=e.target;x(t.options[t.selectedIndex].value)}},void 0,["build","protect","wipe"].map((e=>y("option",{value:e},e,e)))),y("p",{},void 0,T),y("p",{},void 0,"Coordinates in X_Y format:"," ",y("input",{defaultValue:b.coords,style:{display:"inline-block",width:"100%",maxWidth:"15em"},type:"text",placeholder:"X_Y",onChange:e=>{b.coords=e.target.value.trim()}})),y("button",{type:"button",onClick:()=>{D||(_(!0),async function(e,t,o,a){const n=new FormData,i=document.getElementById("imgfile"),l=i.files&&i.files[0]?i.files[0]:null;n.append("imageaction",e),n.append("image",l),n.append("canvasid",t),n.append("coords",o);const r=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:n});var d;d=await r.text(),_(!1),N(d)}(p,t,b.coords))}},void 0,D?"...":"Submit"),i||(i=y("br",{})),l||(l=y("div",{className:"modaldivider"})),y("h3",{},void 0,"Pixel Protection"),y("p",{},void 0,"Set protection of areas (if you need finer grained control, use protect with image upload and alpha layers)"),y("select",{value:S,onChange:e=>{const t=e.target;k(t.options[t.selectedIndex].value)}},void 0,["protect","unprotect"].map((e=>y("option",{value:e},e,e)))),y("p",{},void 0,"Top-left corner"," (X_Y): ",y("input",{defaultValue:b.tlcoords,style:{display:"inline-block",width:"100%",maxWidth:"15em"},type:"text",placeholder:"X_Y",onChange:e=>{const t=e.target.value.trim();b.tlcoords=t}})),y("p",{},void 0,"Bottom-right corner"," (X_Y): ",y("input",{defaultValue:b.brcoords,style:{display:"inline-block",width:"100%",maxWidth:"15em"},type:"text",placeholder:"X_Y",onChange:e=>{const t=e.target.value.trim();b.brcoords=t}})),y("button",{type:"button",onClick:()=>{D||(_(!0),async function(e,t,o,a,n){const i=new FormData;i.append("protaction",e),i.append("canvasid",t),i.append("ulcoor",o),i.append("brcoor",a);const l=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:i});var r;r=await l.text(),_(!1),N(r)}(S,t,b.tlcoords,b.brcoords))}},void 0,D?"...":"Submit"),window.ssv&&window.ssv.backupurl&&y("div",{},void 0,r||(r=y("br",{})),d||(d=y("div",{className:"modaldivider"})),y("h3",{},void 0,"Rollback to Date"),y("p",{},void 0,"Rollback an area of the canvas to a set date (00:00 UTC)"),y("input",{type:"date",value:C,pattern:"\\d{4}-\\d{2}-\\d{2}",min:O[t].sd,max:e,onChange:e=>{$(e.target.value)}}),y("p",{},void 0,"Top-left corner"," (X_Y): ",y("input",{defaultValue:b.tlrcoords,style:{display:"inline-block",width:"100%",maxWidth:"15em"},type:"text",placeholder:"X_Y",onChange:e=>{const t=e.target.value.trim();b.tlrcoords=t}})),y("p",{},void 0,"Bottom-right corner"," (X_Y): ",y("input",{defaultValue:b.brrcoords,style:{display:"inline-block",width:"100%",maxWidth:"15em"},type:"text",placeholder:"X_Y",onChange:e=>{const t=e.target.value.trim();b.brrcoords=t}})),y("button",{type:"button",onClick:()=>{D||(_(!0),async function(e,t,o,a,n){const i=new FormData,l=(0,h.UW)(e);i.append("rollback",l),i.append("canvasid",t),i.append("ulcoor",o),i.append("brcoor",a);const r=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:i});var d;d=await r.text(),_(!1),N(d)}(C,t,b.tlrcoords,b.brrcoords))}},void 0,D?"...":"Submit")),s||(s=y("br",{})),c||(c=y("div",{className:"modaldivider"})),y("h3",{},void 0,"Canvas Cleaner"),y("p",{},void 0,"Apply a filter to clean trash in large canvas areas."),y("select",{value:w,onChange:e=>{const t=e.target;g(t.options[t.selectedIndex].value)}},void 0,["spare","spareext","spareextu"].map((e=>y("option",{value:e},e,e)))),y("p",{},void 0,Y),y("p",{style:{fontWeight:"bold"}},void 0,W),y("p",{},void 0,"Top-left corner"," (X_Y): ",y("input",{defaultValue:b.tlccoords,style:{display:"inline-block",width:"100%",maxWidth:"15em"},type:"text",placeholder:"X_Y",onChange:e=>{const t=e.target.value.trim();b.tlccoords=t}})),y("p",{},void 0,"Bottom-right corner"," (X_Y): ",y("input",{defaultValue:b.brccoords,style:{display:"inline-block",width:"100%",maxWidth:"15em"},type:"text",placeholder:"X_Y",onChange:e=>{const t=e.target.value.trim();b.brccoords=t}})),y("button",{type:"button",onClick:()=>{D||(_(!0),async function(e,o,a,n,i){const l=new FormData;l.append("cleaneraction",e),l.append("canvasid",o),l.append("ulcoor",a),l.append("brcoor",n);const r=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:l});var d;d=await r.text(),P({running:!0,percent:"N/A",method:w,tl:b.tlccoords,br:b.brccoords,canvasId:t}),_(!1),N(d)}(w,t,b.tlccoords,b.brccoords))}},void 0,D?"...":"Submit"),y("button",{type:"button",onClick:()=>{D||(_(!0),async function(e){const t=new FormData;t.append("cleanercancel",!0);const o=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:t});o.ok?e(await o.text()):e("")}((e=>{P({}),_(!1),N(e)})))}},void 0,D?"...":"Stop Cleaner"))}const w=u.memo(x);var g,S,k,C,$,I,N,F,P,D;function _(e,t,o,a){D||(D="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var l=new Array(i),r=0;r<i;r++)l[r]=arguments[r+3];t.children=l}if(t&&n)for(var d in n)void 0===t[d]&&(t[d]=n[d]);else t||(t=n||{});return{$$typeof:D,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function A(){const[e,t]=(0,u.useState)("iidtoip"),[o,a]=(0,u.useState)(""),[n,i]=(0,u.useState)(""),[l,r]=(0,u.useState)(null),[d,s]=(0,u.useState)([]),[c,p]=(0,u.useState)(!1);return(0,u.useEffect)((()=>{!async function(e){const t=new FormData;t.append("modlist",!0);const o=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:t});o.ok?e(await o.json()):e([])}((e=>s(e)))}),[]),_("div",{className:"content"},void 0,l&&_("div",{className:"respbox"},void 0,l.split("\n").map((e=>_("p",{},e.slice(0,3),e))),_("span",{role:"button",tabIndex:-1,className:"modallink",onClick:()=>r(null)},void 0,"ཁེ་བཙོང༌།")),_("div",{},void 0,g||(g=_("br",{})),_("h3",{},void 0,"IP Actions"),_("p",{},void 0,"Do stuff with IPs (one IP per line)"),_("select",{value:e,onChange:e=>{const o=e.target;t(o.options[o.selectedIndex].value)}},void 0,["iidtoip","iptoiid"].map((e=>_("option",{value:e},e,e)))),S||(S=_("br",{})),_("textarea",{rows:"10",cols:"17",value:n,onChange:e=>i(e.target.value)}),k||(k=_("br",{})),_("button",{type:"button",onClick:()=>{c||(p(!0),async function(e,t,o){const a=new FormData;a.append("ipaction",e),a.append("ip",t);const n=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:a});var l;l=await n.text(),p(!1),i(l)}(e,n))}},void 0,c?"...":"Submit"),C||(C=_("br",{})),$||($=_("div",{className:"modaldivider"})),_("h3",{},void 0,"Manage Moderators"),_("p",{},void 0,"Remove Moderator"),d.length?_("span",{className:"unblocklist"},void 0,d.map((e=>_("div",{role:"button",tabIndex:0,onClick:()=>{c||(p(!0),async function(t,o){const a=new FormData;a.append("remmod",t);const n=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:a});var i,l;i=n.ok,l=await n.text(),i&&s(d.filter((t=>t[0]!==e[0]))),p(!1),r(l)}(e[0]))}},e[0],`⦸ ${e[0]} ${e[1]}`)))):_("p",{},void 0,"There are no mods"),I||(I=_("br",{})),_("p",{},void 0,"Assign new Mod"),_("p",{},void 0,"Enter UserName of new Mod",": ",_("input",{value:o,style:{display:"inline-block",width:"100%",maxWidth:"20em"},type:"text",placeholder:"User Name",onChange:e=>{const t=e.target.value.trim();a(t)}})),_("button",{type:"button",onClick:()=>{c||(p(!0),async function(e,t){const o=new FormData;o.append("makemod",e);const a=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:o});a.ok?t(await a.json()):t(await a.text())}(o,(e=>{"string"==typeof e?r(e):(r(`Made ${e[1]} mod successfully.`),s([...d,e])),p(!1)})))}},void 0,c?"...":"Submit"),N||(N=_("br",{})),F||(F=_("div",{className:"modaldivider"})),P||(P=_("br",{}))))}const O=u.memo(A);var T,Y,W,X=o(1740);function E(e,t,o,a){W||(W="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var l=new Array(i),r=0;r<i;r++)l[r]=arguments[r+3];t.children=l}if(t&&n)for(var d in n)void 0===t[d]&&(t[d]=n[d]);else t||(t=n||{});return{$$typeof:W,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}const V={tlcoords:"",brcoords:"",interval:"15m",iid:""};async function U(e,t,o,a,n,i,l){let r=(0,h.bG)(n);if(!r)return void l({info:"Interval is invalid"});r=Date.now()-r;const d=new FormData;d.append("watchaction",e),d.append("canvasid",t),d.append("ulcoor",o),d.append("brcoor",a),d.append("time",r),d.append("iid",i);try{const e=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:d});let t;try{t=await e.json()}catch{throw new Error(await e.text())}l(await t)}catch(e){l({info:`Error: ${e.message}`})}}function R(){const[e,t]=(0,u.useState)(0),[o,a]=(0,u.useState)(!0),[n,i]=(0,u.useState)(0),[l,r]=(0,u.useState)({}),[d,s]=(0,u.useState)(null),[c,p]=(0,u.useState)(!1),[m,h]=(0,v.v9)((e=>[e.canvas.canvasId,e.canvas.canvases]),v.wU);(0,u.useEffect)((()=>{t(m)}),[m]);const{columns:f,types:y,rows:b,ts:x}=l,w=y?y.indexOf("cid"):-1;return u.createElement(u.Fragment,null,E("div",{className:"content"},void 0,d&&E("div",{className:"respbox"},void 0,d.split("\n").map((e=>E("p",{},e.slice(0,3),e))),E("span",{role:"button",tabIndex:-1,className:"modallink",onClick:()=>s(null)},void 0,"ཁེ་བཙོང༌།")),E("p",{},void 0,"Check who placed in an area"),E("p",{},void 0,"Canvas",": ",E("select",{value:e,onChange:e=>{const o=e.target;t(o.options[o.selectedIndex].value)}},void 0,Object.keys(h).filter((e=>!h[e].v)).map((e=>E("option",{value:e},e,h[e].title))))," Interval: ",E("input",{defaultValue:V.interval,style:{display:"inline-block",width:"100%",maxWidth:"5em"},type:"text",placeholder:"15m",onChange:e=>{const t=e.target.value.trim();V.interval=t}})," IID (optional): ",E("input",{defaultValue:V.iid,style:{display:"inline-block",width:"100%",maxWidth:"10em"},type:"text",placeholder:"xxxx-xxxxx-xxxx",onChange:e=>{const t=e.target.value.trim();V.iid=t}})),E("p",{},void 0,"Top-left corner"," (X_Y): ",E("input",{defaultValue:V.tlcoords,style:{display:"inline-block",width:"100%",maxWidth:"15em"},type:"text",placeholder:"X_Y",onChange:e=>{const t=e.target.value.trim();V.tlcoords=t}})),E("p",{},void 0,"Bottom-right corner"," (X_Y): ",E("input",{defaultValue:V.brcoords,style:{display:"inline-block",width:"100%",maxWidth:"15em"},type:"text",placeholder:"X_Y",onChange:e=>{const t=e.target.value.trim();V.brcoords=t}})),E("button",{type:"button",onClick:()=>{c||(p(!0),U("all",e,V.tlcoords,V.brcoords,V.interval,V.iid,(e=>{p(!1),s(e.info),e.rows&&(i(0),r({columns:e.columns,types:e.types,rows:e.rows,ts:Date.now()}))})))}},void 0,c?"...":"Get Pixels"),E("button",{type:"button",onClick:()=>{c||(p(!0),U("summary",e,V.tlcoords,V.brcoords,V.interval,V.iid,(e=>{p(!1),s(e.info),e.rows&&(i(0),r({columns:e.columns,types:e.types,rows:e.rows,ts:Date.now()}))})))}},void 0,c?"...":"Get Users")),T||(T=E("br",{})),b&&f&&y&&E(u.Fragment,{},x,Y||(Y=E("div",{className:"modaldivider"})),E("table",{style:{fontSize:11}},void 0,E("thead",{},void 0,E("tr",{},void 0,f.slice(1).map(((e,t)=>E("th",{style:n-1===t?{cursor:"pointer",fontWeight:"normal"}:{cursor:"pointer"},onClick:()=>{n-1===t?a(!o):i(t+1)}},e,e))))),E("tbody",{style:{userSelect:"text"}},void 0,b.sort(((e,t)=>function(e,t,o){if("string"==typeof e&&"string"==typeof t){let a=e.localeCompare(t);return o&&(a*=-1),a}return e&&"N/A"!==e||(e=0),t&&"N/A"!==t||(t=0),e<t?o?-1:1:e>t?o?1:-1:0}(e[n],t[n],o))).map((t=>E("tr",{},t[0],t.slice(1).map(((o,a)=>{const n=y[a+1];if(null===o)return E("td",{},n,"N/A");switch(n){case"ts":{const e=new Date(o);let t=e.getMinutes();return t<10&&(t=`0${t}`),E("td",{title:e.toLocaleDateString()},n,`${e.getHours()}:${t}`)}case"clr":{const a=w>0?t[w]:e,i=h[a]&&h[a].colors&&h[a].colors[o];return E("td",i?{style:{backgroundColor:`rgb(${i[0]},${i[1]},${i[2]})`}}:{},n,o)}case"coord":{const a=w>0?t[w]:e;return E("td",{},n,E("a",{href:`./#${h[a]&&h[a].ident},${o},47`},void 0,o))}case"flag":{const e=o.toLowerCase();return E("td",{title:o},n,E("img",{style:{height:"1em",imageRendering:"crisp-edges"},alt:o,src:`/cf/${e}.gif`}))}case"cid":{const e=h?.ident;return E("td",{},n,e)}case"cidr":return E("td",{},n,E("span",{role:"button",tabIndex:-1,style:{cursor:"pointer",whiteSpace:"initial"},title:"ཀ་དཔེ། ཨིན།འདུགཡོད། ཆོས་རྒྱུགས་བཀོད་ཚོགས།",onClick:()=>(0,X.Z)(o.slice(0,o.indexOf("/")))},void 0,o));case"uuid":return E("td",{},n,E("span",{role:"button",tabIndex:-1,style:{cursor:"pointer",whiteSpace:"initial"},title:"ཀ་དཔེ། ཨིན།འདུགཡོད། ཆོས་རྒྱུགས་བཀོད་ཚོགས།",onClick:()=>(0,X.Z)(o)},void 0,o));case"user":{const e=o.lastIndexOf(",");return-1===e?E("td",{},n,E("span",{},void 0,o)):E("td",{title:o.slice(e+1)},n,E("span",{},void 0,o.slice(0,e)))}default:return E("td",{},n,o)}})))))))))}var B,j,L,M;function G(e,t,o,a){B||(B="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var l=new Array(i),r=0;r<i;r++)l[r]=arguments[r+3];t.children=l}if(t&&n)for(var d in n)void 0===t[d]&&(t[d]=n[d]);else t||(t=n||{});return{$$typeof:B,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function Z(){const[e,t]=(0,u.useState)("givecaptcha"),[o,a]=(0,u.useState)(""),[n,i]=(0,u.useState)(""),[l,r]=(0,u.useState)("1d"),[d,s]=(0,u.useState)(""),[c,p]=(0,u.useState)(!1);return G("div",{style:{textAlign:"center",paddingLeft:"5%",paddingRight:"5%"}},void 0,G("h3",{},void 0,"IID Actions"),G("select",{value:e,onChange:e=>{const o=e.target;t(o.options[o.selectedIndex].value)}},void 0,["status","givecaptcha","ban","unban","whitelist","unwhitelist"].map((e=>G("option",{value:e},e,e)))),"ban"===e&&G(u.Fragment,{},"ban",G("p",{},void 0,"Reason"),G("input",{maxLength:"200",style:{width:"100%"},value:n,placeholder:"Enter Reason",onChange:e=>i(e.target.value)}),G("p",{},void 0,"Duration: ",G("input",{style:{display:"inline-block",width:"100%",maxWidth:"7em"},value:l,placeholder:"1d",onChange:e=>{r(e.target.value.trim())}}),"(0 = infinite)")),G("p",{},void 0," IID: ",G("input",{value:o,style:{display:"inline-block",width:"100%",maxWidth:"10em"},type:"text",placeholder:"xxxx-xxxxx-xxxx",onChange:e=>{a(e.target.value.trim())}}),G("button",{type:"button",onClick:()=>{c||(p(!0),async function(e,t,o,a,n){let i=(0,h.bG)(a);if(0===i&&"0"!==a)return void n("You must enter a duration");if(!t)return void n("You must enter an IID");i>0&&(i+=Date.now());const l=new FormData;l.append("iidaction",e),l.append("reason",o),l.append("time",i),l.append("iid",t);const r=await fetch(`${f.Fx}/api/modtools`,{credentials:"include",method:"POST",body:l});n(await r.text())}(e,o,n,l,(e=>{p(!1),s(e)})))}},void 0,c?"...":"Submit")),G("textarea",{style:{width:"100%"},rows:d?d.split("\n").length:10,value:d,readOnly:!0}))}function H(e,t,o,a){M||(M="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var l=new Array(i),r=0;r<i;r++)l[r]=arguments[r+3];t.children=l}if(t&&n)for(var d in n)void 0===t[d]&&(t[d]=n[d]);else t||(t=n||{});return{$$typeof:M,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}const z={Canvas:w,Admin:O,Watch:u.memo(R),IID:u.memo(Z)};function q(){const[e,t]=(0,u.useState)("Canvas"),o=(0,v.v9)((e=>e.user.userlvl)),a=z[e],n=Object.keys(z).filter((e=>"Admin"!==e||1===o));return u.createElement(u.Fragment,null,H("div",{className:"content",style:{overflowWrap:"anywhere"}},void 0,n.map(((o,a)=>H(u.Fragment,{},o,H("span",{role:"button",tabIndex:-1,className:e===o?"modallink selected":"modallink",onClick:()=>t(o)},void 0,o),a!==n.length-1&&(j||(j=H("span",{className:"hdivider"})))))),L||(L=H("div",{className:"modaldivider"}))),a&&H(a,{}))}const J=u.memo(q)}}]);