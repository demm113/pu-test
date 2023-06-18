(()=>{"use strict";var e,t={1079:(e,t,n)=>{var o=n(9477),i=n(1217);const a=window.THREE||n(9477),r=function(e,t){void 0===t&&console.warn('THREE.TrackballControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.TrackballControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.');const n=this,o=-1;this.object=e,this.domElement=t,this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.keys=[65,83,68],this.mouseButtons={LEFT:a.MOUSE.ROTATE,MIDDLE:a.MOUSE.ZOOM,RIGHT:a.MOUSE.PAN},this.target=new a.Vector3;const i=new a.Vector3;let r=o,s=o,c=new a.Vector3,d=new a.Vector2,p=new a.Vector2,u=new a.Vector3,l=0,m=new a.Vector2,h=new a.Vector2,g=0,w=0,y=new a.Vector2,v=new a.Vector2;this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom;var f={type:"change"},E={type:"start"},b={type:"end"};this.handleResize=function(){const e=n.domElement.getBoundingClientRect(),t=n.domElement.ownerDocument.documentElement;n.screen.left=e.left+window.pageXOffset-t.clientLeft,n.screen.top=e.top+window.pageYOffset-t.clientTop,n.screen.width=e.width,n.screen.height=e.height};const L=function(){const e=new a.Vector2;return function(t,o){return e.set((t-n.screen.left)/n.screen.width,(o-n.screen.top)/n.screen.height),e}}(),D=function(){const e=new a.Vector2;return function(t,o){return e.set((t-.5*n.screen.width-n.screen.left)/(.5*n.screen.width),(n.screen.height+2*(n.screen.top-o))/n.screen.width),e}}();function j(e){if(!1!==n.enabled)switch(e.pointerType){case"mouse":case"pen":!function(e){if(e.preventDefault(),e.stopPropagation(),r===o)switch(e.button){case n.mouseButtons.LEFT:r=0;break;case n.mouseButtons.MIDDLE:r=1;break;case n.mouseButtons.RIGHT:r=2;break;default:r=o}const t=s!==o?s:r;0!==t||n.noRotate?1!==t||n.noZoom?2!==t||n.noPan||(y.copy(L(e.pageX,e.pageY)),v.copy(y)):(m.copy(L(e.pageX,e.pageY)),h.copy(m)):(p.copy(D(e.pageX,e.pageY)),d.copy(p)),n.domElement.ownerDocument.addEventListener("pointermove",k,!1),n.domElement.ownerDocument.addEventListener("pointerup",x,!1),n.dispatchEvent(E)}(e)}}function k(e){if(!1!==n.enabled)switch(e.pointerType){case"mouse":case"pen":!function(e){if(!1===n.enabled)return;e.preventDefault(),e.stopPropagation();const t=s!==o?s:r;0!==t||n.noRotate?1!==t||n.noZoom?2!==t||n.noPan||v.copy(L(e.pageX,e.pageY)):h.copy(L(e.pageX,e.pageY)):(d.copy(p),p.copy(D(e.pageX,e.pageY)))}(e)}}function x(e){if(!1!==n.enabled)switch(e.pointerType){case"mouse":case"pen":!function(e){!1!==n.enabled&&(e.preventDefault(),e.stopPropagation(),r=o,n.domElement.ownerDocument.removeEventListener("pointermove",k),n.domElement.ownerDocument.removeEventListener("pointerup",x),n.dispatchEvent(b))}(e)}}function M(e){!1!==n.enabled&&(window.removeEventListener("keydown",M),s===o&&(e.keyCode!==n.keys[0]||n.noRotate?e.keyCode!==n.keys[1]||n.noZoom?e.keyCode!==n.keys[2]||n.noPan||(s=2):s=1:s=0))}function S(){!1!==n.enabled&&(s=o,window.addEventListener("keydown",M,!1))}function V(e){if(!1!==n.enabled&&!0!==n.noZoom){switch(e.preventDefault(),e.stopPropagation(),e.deltaMode){case 2:m.y-=.025*e.deltaY;break;case 1:m.y-=.01*e.deltaY;break;default:m.y-=25e-5*e.deltaY}n.dispatchEvent(E),n.dispatchEvent(b)}}function P(e){if(!1!==n.enabled){if(e.preventDefault(),1===e.touches.length)r=3,p.copy(D(e.touches[0].pageX,e.touches[0].pageY)),d.copy(p);else{r=4;var t=e.touches[0].pageX-e.touches[1].pageX,o=e.touches[0].pageY-e.touches[1].pageY;w=g=Math.sqrt(t*t+o*o);var i=(e.touches[0].pageX+e.touches[1].pageX)/2,a=(e.touches[0].pageY+e.touches[1].pageY)/2;y.copy(L(i,a)),v.copy(y)}n.dispatchEvent(E)}}function O(e){if(!1!==n.enabled)if(e.preventDefault(),e.stopPropagation(),1===e.touches.length)d.copy(p),p.copy(D(e.touches[0].pageX,e.touches[0].pageY));else{var t=e.touches[0].pageX-e.touches[1].pageX,o=e.touches[0].pageY-e.touches[1].pageY;w=Math.sqrt(t*t+o*o);var i=(e.touches[0].pageX+e.touches[1].pageX)/2,a=(e.touches[0].pageY+e.touches[1].pageY)/2;v.copy(L(i,a))}}function Y(e){if(!1!==n.enabled){switch(e.touches.length){case 0:r=o;break;case 1:r=3,p.copy(D(e.touches[0].pageX,e.touches[0].pageY)),d.copy(p)}n.dispatchEvent(b)}}function T(e){!1!==n.enabled&&e.preventDefault()}this.rotateCamera=function(){let e,t=new a.Vector3,o=new a.Quaternion,i=new a.Vector3,r=new a.Vector3,s=new a.Vector3,m=new a.Vector3;return function(){m.set(p.x-d.x,p.y-d.y,0),e=m.length(),e?(c.copy(n.object.position).sub(n.target),i.copy(c).normalize(),r.copy(n.object.up).normalize(),s.crossVectors(r,i).normalize(),r.setLength(p.y-d.y),s.setLength(p.x-d.x),m.copy(r.add(s)),t.crossVectors(m,c).normalize(),e*=n.rotateSpeed,o.setFromAxisAngle(t,e),c.applyQuaternion(o),n.object.up.applyQuaternion(o),u.copy(t),l=e):!n.staticMoving&&l&&(l*=Math.sqrt(1-n.dynamicDampingFactor),c.copy(n.object.position).sub(n.target),o.setFromAxisAngle(u,l),c.applyQuaternion(o),n.object.up.applyQuaternion(o)),d.copy(p)}}(),this.zoomCamera=function(){let e;4===r?(e=g/w,g=w,c.multiplyScalar(e)):(e=1+(h.y-m.y)*n.zoomSpeed,1!==e&&e>0&&c.multiplyScalar(e),n.staticMoving?m.copy(h):m.y+=(h.y-m.y)*this.dynamicDampingFactor)},this.panCamera=function(){let e=new a.Vector2,t=new a.Vector3,o=new a.Vector3;return function(){e.copy(v).sub(y),e.lengthSq()&&(e.multiplyScalar(c.length()*n.panSpeed),o.copy(c).cross(n.object.up).setLength(e.x),o.add(t.copy(n.object.up).setLength(e.y)),n.object.position.add(o),n.target.add(o),n.staticMoving?y.copy(v):y.add(e.subVectors(v,y).multiplyScalar(n.dynamicDampingFactor)))}}(),this.checkDistances=function(){n.noZoom&&n.noPan||(c.lengthSq()>n.maxDistance*n.maxDistance&&(n.object.position.addVectors(n.target,c.setLength(n.maxDistance)),m.copy(h)),c.lengthSq()<n.minDistance*n.minDistance&&(n.object.position.addVectors(n.target,c.setLength(n.minDistance)),m.copy(h)))},this.update=function(){c.subVectors(n.object.position,n.target),n.noRotate||n.rotateCamera(),n.noZoom||n.zoomCamera(),n.noPan||n.panCamera(),n.object.position.addVectors(n.target,c),n.checkDistances(),n.object.lookAt(n.target),i.distanceToSquared(n.object.position)>1e-6&&(n.dispatchEvent(f),i.copy(n.object.position))},this.reset=function(){r=o,s=o,n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.up.copy(n.up0),c.subVectors(n.object.position,n.target),n.object.lookAt(n.target),n.dispatchEvent(f),i.copy(n.object.position)},this.dispose=function(){n.domElement.removeEventListener("contextmenu",T,!1),n.domElement.removeEventListener("pointerdown",j,!1),n.domElement.removeEventListener("wheel",V,!1),n.domElement.removeEventListener("touchstart",P,!1),n.domElement.removeEventListener("touchend",Y,!1),n.domElement.removeEventListener("touchmove",O,!1),n.domElement.ownerDocument.removeEventListener("pointermove",k,!1),n.domElement.ownerDocument.removeEventListener("pointerup",x,!1),window.removeEventListener("keydown",M,!1),window.removeEventListener("keyup",S,!1)},this.domElement.addEventListener("contextmenu",T,!1),this.domElement.addEventListener("pointerdown",j,!1),this.domElement.addEventListener("wheel",V,!1),this.domElement.addEventListener("touchstart",P,!1),this.domElement.addEventListener("touchend",Y,!1),this.domElement.addEventListener("touchmove",O,!1),this.domElement.ownerDocument.addEventListener("pointermove",k,!1),this.domElement.ownerDocument.addEventListener("pointerup",x,!1),window.addEventListener("keydown",M,!1),window.addEventListener("keyup",S,!1),this.handleResize(),this.update()};(r.prototype=Object.create(a.EventDispatcher.prototype)).constructor=r;const s=r;function c(e){return!(!e.material||"canvas"!==e.material.name)}document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("webgl"),[t,n,a,r,d]=function(){try{const{hash:e}=window.location,t=e.substring(1).split(","),n=t.shift(),[o,i,a,r]=t.map((e=>parseInt(e,10)));if(!n||Number.isNaN(a)||Number.isNaN(r)||Number.isNaN(o)||Number.isNaN(i))throw new Error("NaN");return[n,o,i,a,r]}catch(e){return["d",0,65536,0,0]}}(),p=new o.MeshPhongMaterial({map:(new o.TextureLoader).load(`./tiles/${n}/texture.webp`),bumpMap:(new o.TextureLoader).load(`./assets3d/normal${n}.jpg`),bumpScale:.02,specularMap:(new o.TextureLoader).load(`./assets3d/specular${n}.jpg`),specular:new o.Color("grey")});let u=window.innerWidth,l=window.innerHeight;const m=new o.Scene,h=new o.PerspectiveCamera(45,u/l,.01,1e3);h.position.z=4;const g=new o.WebGLRenderer;g.setSize(u,l),m.add(new o.AmbientLight(3355443));let w=null,y=null;function v(){w.update(),y&&(y.rotation.y+=5e-4),requestAnimationFrame(v),g.render(m,h)}const f=new o.DirectionalLight(16777215,.7);f.position.set(10,6,10),m.add(f),(new i.E).load("./assets3d/globe.glb",(e=>{m.add(e.scene);const{children:t}=e.scene;for(let e=0;e<t.length;e++){c(t[e])&&(y=t[e]);const n=t[e].children;for(let o=0;o<n.length;o++)c(n[o])&&(y=t[e])}y&&(y.material=p),function(e,t,n){const[o,i]=n,a=3*Math.PI/2,r=-i*Math.PI/e,s=2*-o*Math.PI/e;t.rotation.x+=0+r,t.rotation.y+=a+s}(a,y,[r,d]),w=function(){const e=new s(h,g.domElement);return e.rotateSpeed=1.8,e.zoomSpeed=1,e.panSpeed=.3,e.minDistance=1.5,e.maxDistance=70,e.keys=[65,83,68],e.dynamicDampingFactor=.2,e}(),v(),document.getElementById("loading").style.display="none"}),(()=>{}),(()=>{})),e.appendChild(g.domElement);const E=new o.Mesh(new o.SphereGeometry(90,64,64),new o.MeshBasicMaterial({map:(new o.TextureLoader).load("./assets3d/starfield.png"),side:o.BackSide}));m.add(E),window.addEventListener("resize",(function(){u=window.innerWidth,l=window.innerHeight,g.setSize(u,l),h.aspect=u/l,h.updateProjectionMatrix(),w&&w.handleResize()}),!1);const b=new o.Raycaster,L=new o.Vector2,D=document.getElementById("coorbox");function j(e){if(!y)return;e?(L.x=e.clientX/window.innerWidth*2-1,L.y=-e.clientY/window.innerHeight*2+1):(L.x=0,L.y=0),b.setFromCamera(L,h);const t=b.intersectObject(y),n=document.getElementsByTagName("BODY")[0];if(t.length>0){const{x:e,y:o}=t[0].uv,i=Math.floor((e-.5)*a),r=Math.floor((.5-o)*a);D.innerHTML=`(${i}, ${r})`,n.style.cursor="move"}else n.style.cursor="default"}function k(e){if(!y)return;L.x=e.clientX/window.innerWidth*2-1,L.y=-e.clientY/window.innerHeight*2+1,b.setFromCamera(L,h);const n=b.intersectObject(y);if(n.length>0){const{x:e,y:o}=n[0].uv,i=Math.round((e-.5)*a),r=Math.round((.5-o)*a);window.location.href=`./#${t},${i},${r},0`}}setInterval(j,1e3);let x=0;const M=[0,0];document.addEventListener("mousemove",j,!1),document.addEventListener("touchstart",(function(e){if(e.touches.length>1)return void(x=0);const t=Date.now(),{pageX:n,pageY:o}=e.touches[0];if(x>t-500&&(M[0]-n)**2+(M[1]-o)**2<400)return e.clientX=n,e.clientY=o,void k(e);x=t,M[0]=n,M[1]=o}),!1),document.addEventListener("dblclick",k,!1)}))}},n={};function o(e){var i=n[e];if(void 0!==i)return i.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,o),a.exports}o.m=t,e=[],o.O=(t,n,i,a)=>{if(!n){var r=1/0;for(p=0;p<e.length;p++){for(var[n,i,a]=e[p],s=!0,c=0;c<n.length;c++)(!1&a||r>=a)&&Object.keys(o.O).every((e=>o.O[e](n[c])))?n.splice(c--,1):(s=!1,a<r&&(r=a));if(s){e.splice(p--,1);var d=i();void 0!==d&&(t=d)}}return t}a=a||0;for(var p=e.length;p>0&&e[p-1][2]>a;p--)e[p]=e[p-1];e[p]=[n,i,a]},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.j=304,(()=>{var e={304:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var i,a,[r,s,c]=n,d=0;if(r.some((t=>0!==e[t]))){for(i in s)o.o(s,i)&&(o.m[i]=s[i]);if(c)var p=c(o)}for(t&&t(n);d<r.length;d++)a=r[d],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(p)},n=self.webpackChunkPixelPlanet=self.webpackChunkPixelPlanet||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=o.O(void 0,[841],(()=>o(1079)));i=o.O(i)})();