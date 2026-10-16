(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xa="169",hu=0,wc=1,uu=2,eh=1,nh=2,kn=3,ai=0,Ve=1,He=2,ri=0,es=1,Ec=2,bc=3,Tc=4,du=5,yi=100,fu=101,pu=102,mu=103,gu=104,vu=200,_u=201,xu=202,yu=203,Jo=204,Qo=205,Mu=206,Su=207,wu=208,Eu=209,bu=210,Tu=211,Au=212,Cu=213,Ru=214,ta=0,ea=1,na=2,rs=3,ia=4,sa=5,ra=6,oa=7,ih=0,Pu=1,Lu=2,oi=0,Iu=1,Nu=2,Du=3,sh=4,Uu=5,Fu=6,Ou=7,rh=300,os=301,as=302,aa=303,ca=304,to=306,Vr=1e3,wi=1001,la=1002,Ye=1003,zu=1004,Qs=1005,dn=1006,ho=1007,Ei=1008,Xn=1009,oh=1010,ah=1011,Hs=1012,qa=1013,Ai=1014,wn=1015,$s=1016,Ya=1017,$a=1018,cs=1020,ch=35902,lh=1021,hh=1022,pn=1023,uh=1024,dh=1025,ns=1026,ls=1027,Ka=1028,ja=1029,fh=1030,Za=1031,Ja=1033,Ur=33776,Fr=33777,Or=33778,zr=33779,ha=35840,ua=35841,da=35842,fa=35843,pa=36196,ma=37492,ga=37496,va=37808,_a=37809,xa=37810,ya=37811,Ma=37812,Sa=37813,wa=37814,Ea=37815,ba=37816,Ta=37817,Aa=37818,Ca=37819,Ra=37820,Pa=37821,Br=36492,La=36494,Ia=36495,ph=36283,Na=36284,Da=36285,Ua=36286,Bu=3200,ku=3201,mh=0,Hu=1,ni="",qe="srgb",ci="srgb-linear",Qa="display-p3",eo="display-p3-linear",Wr="linear",he="srgb",Xr="rec709",qr="p3",Ni=7680,Ac=519,Gu=512,Vu=513,Wu=514,gh=515,Xu=516,qu=517,Yu=518,$u=519,Cc=35044,Rc="300 es",Vn=2e3,Yr=2001;class ps{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pc=1234567;const Ns=Math.PI/180,hs=180/Math.PI;function Pi(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[r&255]+De[r>>8&255]+De[r>>16&255]+De[r>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function we(r,t,e){return Math.max(t,Math.min(e,r))}function tc(r,t){return(r%t+t)%t}function Ku(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function ju(r,t,e){return r!==t?(e-r)/(t-r):0}function Ds(r,t,e){return(1-e)*r+e*t}function Zu(r,t,e,n){return Ds(r,t,1-Math.exp(-e*n))}function Ju(r,t=1){return t-Math.abs(tc(r,t*2)-t)}function Qu(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function td(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function ed(r,t){return r+Math.floor(Math.random()*(t-r+1))}function nd(r,t){return r+Math.random()*(t-r)}function id(r){return r*(.5-Math.random())}function sd(r){r!==void 0&&(Pc=r);let t=Pc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function rd(r){return r*Ns}function od(r){return r*hs}function ad(r){return(r&r-1)===0&&r!==0}function cd(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ld(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function hd(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+n)/2),h=o((t+n)/2),d=s((t-n)/2),u=o((t-n)/2),p=s((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":r.set(a*h,c*d,c*u,a*l);break;case"YZY":r.set(c*u,a*h,c*d,a*l);break;case"ZXZ":r.set(c*d,c*u,a*h,a*l);break;case"XZX":r.set(a*h,c*m,c*p,a*l);break;case"YXY":r.set(c*p,a*h,c*m,a*l);break;case"ZYZ":r.set(c*m,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ji(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Be(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Fa={DEG2RAD:Ns,RAD2DEG:hs,generateUUID:Pi,clamp:we,euclideanModulo:tc,mapLinear:Ku,inverseLerp:ju,lerp:Ds,damp:Zu,pingpong:Ju,smoothstep:Qu,smootherstep:td,randInt:ed,randFloat:nd,randFloatSpread:id,seededRandom:sd,degToRad:rd,radToDeg:od,isPowerOfTwo:ad,ceilPowerOfTwo:cd,floorPowerOfTwo:ld,setQuaternionFromProperEuler:hd,normalize:Be,denormalize:ji};class gt{constructor(t=0,e=0){gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(t,e,n,i,s,o,a,c,l){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l)}set(t,e,n,i,s,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],p=n[5],m=n[8],v=i[0],f=i[3],g=i[6],_=i[1],y=i[4],M=i[7],R=i[2],A=i[5],T=i[8];return s[0]=o*v+a*_+c*R,s[3]=o*f+a*y+c*A,s[6]=o*g+a*M+c*T,s[1]=l*v+h*_+d*R,s[4]=l*f+h*y+d*A,s[7]=l*g+h*M+d*T,s[2]=u*v+p*_+m*R,s[5]=u*f+p*y+m*A,s[8]=u*g+p*M+m*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,u=a*c-h*s,p=l*s-o*c,m=e*d+n*u+i*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return t[0]=d*v,t[1]=(i*l-h*n)*v,t[2]=(a*n-i*o)*v,t[3]=u*v,t[4]=(h*e-i*c)*v,t[5]=(i*s-a*e)*v,t[6]=p*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(uo.makeScale(t,e)),this}rotate(t){return this.premultiply(uo.makeRotation(-t)),this}translate(t,e){return this.premultiply(uo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const uo=new Kt;function vh(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function $r(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ud(){const r=$r("canvas");return r.style.display="block",r}const Lc={};function kr(r){r in Lc||(Lc[r]=!0,console.warn(r))}function dd(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function fd(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function pd(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ic=new Kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Nc=new Kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xs={[ci]:{transfer:Wr,primaries:Xr,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[qe]:{transfer:he,primaries:Xr,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[eo]:{transfer:Wr,primaries:qr,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(Nc),fromReference:r=>r.applyMatrix3(Ic)},[Qa]:{transfer:he,primaries:qr,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(Nc),fromReference:r=>r.applyMatrix3(Ic).convertLinearToSRGB()}},md=new Set([ci,eo]),re={enabled:!0,_workingColorSpace:ci,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!md.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=xs[t].toReference,i=xs[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return xs[r].primaries},getTransfer:function(r){return r===ni?Wr:xs[r].transfer},getLuminanceCoefficients:function(r,t=this._workingColorSpace){return r.fromArray(xs[t].luminanceCoefficients)}};function is(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function fo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Di;class gd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Di===void 0&&(Di=$r("canvas")),Di.width=t.width,Di.height=t.height;const n=Di.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Di}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=$r("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=is(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(is(e[n]/255)*255):e[n]=is(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let vd=0;class _h{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=Pi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(po(i[o].image)):s.push(po(i[o]))}else s=po(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function po(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?gd.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _d=0;class Oe extends ps{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,n=wi,i=wi,s=dn,o=Ei,a=pn,c=Xn,l=Oe.DEFAULT_ANISOTROPY,h=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=Pi(),this.name="",this.source=new _h(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vr:t.x=t.x-Math.floor(t.x);break;case wi:t.x=t.x<0?0:1;break;case la:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vr:t.y=t.y-Math.floor(t.y);break;case wi:t.y=t.y<0?0:1;break;case la:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=rh;Oe.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,n=0,i=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],p=c[5],m=c[9],v=c[2],f=c[6],g=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(m-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(m+f)<.1&&Math.abs(l+p+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,M=(p+1)/2,R=(g+1)/2,A=(h+u)/4,T=(d+v)/4,I=(m+f)/4;return y>M&&y>R?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=A/n,s=T/n):M>R?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=A/i,s=I/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=T/s,i=I/s),this.set(n,i,s,e),this}let _=Math.sqrt((f-m)*(f-m)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(f-m)/_,this.y=(d-v)/_,this.z=(u-h)/_,this.w=Math.acos((l+p+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xd extends ps{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Oe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new _h(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends xd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class xh extends Oe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yd extends Oe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let ms=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const u=s[o+0],p=s[o+1],m=s[o+2],v=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=p,t[e+2]=m,t[e+3]=v;return}if(d!==v||c!==u||l!==p||h!==m){let f=1-a;const g=c*u+l*p+h*m+d*v,_=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){const R=Math.sqrt(y),A=Math.atan2(R,g*_);f=Math.sin(f*A)/R,a=Math.sin(a*A)/R}const M=a*_;if(c=c*f+u*M,l=l*f+p*M,h=h*f+m*M,d=d*f+v*M,f===1-a){const R=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=R,l*=R,h*=R,d*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=s[o],u=s[o+1],p=s[o+2],m=s[o+3];return t[e]=a*m+h*d+c*p-l*u,t[e+1]=c*m+h*u+l*d-a*p,t[e+2]=l*m+h*p+a*u-c*d,t[e+3]=h*m-a*d-c*u-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),d=a(s/2),u=c(n/2),p=c(i/2),m=c(s/2);switch(o){case"XYZ":this._x=u*h*d+l*p*m,this._y=l*p*d-u*h*m,this._z=l*h*m+u*p*d,this._w=l*h*d-u*p*m;break;case"YXZ":this._x=u*h*d+l*p*m,this._y=l*p*d-u*h*m,this._z=l*h*m-u*p*d,this._w=l*h*d+u*p*m;break;case"ZXY":this._x=u*h*d-l*p*m,this._y=l*p*d+u*h*m,this._z=l*h*m+u*p*d,this._w=l*h*d-u*p*m;break;case"ZYX":this._x=u*h*d-l*p*m,this._y=l*p*d+u*h*m,this._z=l*h*m-u*p*d,this._w=l*h*d+u*p*m;break;case"YZX":this._x=u*h*d+l*p*m,this._y=l*p*d+u*h*m,this._z=l*h*m-u*p*d,this._w=l*h*d-u*p*m;break;case"XZY":this._x=u*h*d-l*p*m,this._y=l*p*d-u*h*m,this._z=l*h*m+u*p*d,this._w=l*h*d+u*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(o-i)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(h-c)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+l)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(s-l)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-i)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-s*i),d=2*(s*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-s*d,this.z=i+c*d+s*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return mo.copy(this).projectOnVector(t),this.sub(mo)}reflect(t){return this.sub(mo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mo=new D,Dc=new ms;class Li{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,cn):cn.fromBufferAttribute(s,o),cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),tr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),tr.copy(n.boundingBox)),tr.applyMatrix4(t.matrixWorld),this.union(tr)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ys),er.subVectors(this.max,ys),Ui.subVectors(t.a,ys),Fi.subVectors(t.b,ys),Oi.subVectors(t.c,ys),Yn.subVectors(Fi,Ui),$n.subVectors(Oi,Fi),hi.subVectors(Ui,Oi);let e=[0,-Yn.z,Yn.y,0,-$n.z,$n.y,0,-hi.z,hi.y,Yn.z,0,-Yn.x,$n.z,0,-$n.x,hi.z,0,-hi.x,-Yn.y,Yn.x,0,-$n.y,$n.x,0,-hi.y,hi.x,0];return!go(e,Ui,Fi,Oi,er)||(e=[1,0,0,0,1,0,0,0,1],!go(e,Ui,Fi,Oi,er))?!1:(nr.crossVectors(Yn,$n),e=[nr.x,nr.y,nr.z],go(e,Ui,Fi,Oi,er))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ln=[new D,new D,new D,new D,new D,new D,new D,new D],cn=new D,tr=new Li,Ui=new D,Fi=new D,Oi=new D,Yn=new D,$n=new D,hi=new D,ys=new D,er=new D,nr=new D,ui=new D;function go(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ui.fromArray(r,s);const a=i.x*Math.abs(ui.x)+i.y*Math.abs(ui.y)+i.z*Math.abs(ui.z),c=t.dot(ui),l=e.dot(ui),h=n.dot(ui);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Md=new Li,Ms=new D,vo=new D;class gs{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Md.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ms.subVectors(t,this.center);const e=Ms.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ms,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ms.copy(t.center).add(vo)),this.expandByPoint(Ms.copy(t.center).sub(vo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const In=new D,_o=new D,ir=new D,Kn=new D,xo=new D,sr=new D,yo=new D;let yh=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,In)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=In.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(In.copy(this.origin).addScaledVector(this.direction,e),In.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){_o.copy(t).add(e).multiplyScalar(.5),ir.copy(e).sub(t).normalize(),Kn.copy(this.origin).sub(_o);const s=t.distanceTo(e)*.5,o=-this.direction.dot(ir),a=Kn.dot(this.direction),c=-Kn.dot(ir),l=Kn.lengthSq(),h=Math.abs(1-o*o);let d,u,p,m;if(h>0)if(d=o*c-a,u=o*a-c,m=s*h,d>=0)if(u>=-m)if(u<=m){const v=1/h;d*=v,u*=v,p=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=s,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*c)+l;else u=-s,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*c)+l;else u<=-m?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+u*(u+2*c)+l):u<=m?(d=0,u=Math.min(Math.max(-s,-c),s),p=u*(u+2*c)+l):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+u*(u+2*c)+l);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(_o).addScaledVector(ir,u),p}intersectSphere(t,e){In.subVectors(t.center,this.origin);const n=In.dot(this.direction),i=In.dot(In)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,In)!==null}intersectTriangle(t,e,n,i,s){xo.subVectors(e,t),sr.subVectors(n,t),yo.crossVectors(xo,sr);let o=this.direction.dot(yo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kn.subVectors(this.origin,t);const c=a*this.direction.dot(sr.crossVectors(Kn,sr));if(c<0)return null;const l=a*this.direction.dot(xo.cross(Kn));if(l<0||c+l>o)return null;const h=-a*Kn.dot(yo);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class ae{constructor(t,e,n,i,s,o,a,c,l,h,d,u,p,m,v,f){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l,h,d,u,p,m,v,f)}set(t,e,n,i,s,o,a,c,l,h,d,u,p,m,v,f){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=d,g[14]=u,g[3]=p,g[7]=m,g[11]=v,g[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/zi.setFromMatrixColumn(t,0).length(),s=1/zi.setFromMatrixColumn(t,1).length(),o=1/zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=o*h,p=o*d,m=a*h,v=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=p+m*l,e[5]=u-v*l,e[9]=-a*c,e[2]=v-u*l,e[6]=m+p*l,e[10]=o*c}else if(t.order==="YXZ"){const u=c*h,p=c*d,m=l*h,v=l*d;e[0]=u+v*a,e[4]=m*a-p,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=p*a-m,e[6]=v+u*a,e[10]=o*c}else if(t.order==="ZXY"){const u=c*h,p=c*d,m=l*h,v=l*d;e[0]=u-v*a,e[4]=-o*d,e[8]=m+p*a,e[1]=p+m*a,e[5]=o*h,e[9]=v-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const u=o*h,p=o*d,m=a*h,v=a*d;e[0]=c*h,e[4]=m*l-p,e[8]=u*l+v,e[1]=c*d,e[5]=v*l+u,e[9]=p*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const u=o*c,p=o*l,m=a*c,v=a*l;e[0]=c*h,e[4]=v-u*d,e[8]=m*d+p,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*d+m,e[10]=u-v*d}else if(t.order==="XZY"){const u=o*c,p=o*l,m=a*c,v=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+v,e[5]=o*h,e[9]=p*d-m,e[2]=m*d-p,e[6]=a*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Sd,t,wd)}lookAt(t,e,n){const i=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),jn.crossVectors(n,je),jn.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),jn.crossVectors(n,je)),jn.normalize(),rr.crossVectors(je,jn),i[0]=jn.x,i[4]=rr.x,i[8]=je.x,i[1]=jn.y,i[5]=rr.y,i[9]=je.y,i[2]=jn.z,i[6]=rr.z,i[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],p=n[13],m=n[2],v=n[6],f=n[10],g=n[14],_=n[3],y=n[7],M=n[11],R=n[15],A=i[0],T=i[4],I=i[8],q=i[12],x=i[1],S=i[5],k=i[9],L=i[13],F=i[2],O=i[6],N=i[10],Z=i[14],z=i[3],tt=i[7],G=i[11],et=i[15];return s[0]=o*A+a*x+c*F+l*z,s[4]=o*T+a*S+c*O+l*tt,s[8]=o*I+a*k+c*N+l*G,s[12]=o*q+a*L+c*Z+l*et,s[1]=h*A+d*x+u*F+p*z,s[5]=h*T+d*S+u*O+p*tt,s[9]=h*I+d*k+u*N+p*G,s[13]=h*q+d*L+u*Z+p*et,s[2]=m*A+v*x+f*F+g*z,s[6]=m*T+v*S+f*O+g*tt,s[10]=m*I+v*k+f*N+g*G,s[14]=m*q+v*L+f*Z+g*et,s[3]=_*A+y*x+M*F+R*z,s[7]=_*T+y*S+M*O+R*tt,s[11]=_*I+y*k+M*N+R*G,s[15]=_*q+y*L+M*Z+R*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],p=t[14],m=t[3],v=t[7],f=t[11],g=t[15];return m*(+s*c*d-i*l*d-s*a*u+n*l*u+i*a*p-n*c*p)+v*(+e*c*p-e*l*u+s*o*u-i*o*p+i*l*h-s*c*h)+f*(+e*l*d-e*a*p-s*o*d+n*o*p+s*a*h-n*l*h)+g*(-i*a*h-e*c*d+e*a*u+i*o*d-n*o*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],p=t[11],m=t[12],v=t[13],f=t[14],g=t[15],_=d*f*l-v*u*l+v*c*p-a*f*p-d*c*g+a*u*g,y=m*u*l-h*f*l-m*c*p+o*f*p+h*c*g-o*u*g,M=h*v*l-m*d*l+m*a*p-o*v*p-h*a*g+o*d*g,R=m*d*c-h*v*c-m*a*u+o*v*u+h*a*f-o*d*f,A=e*_+n*y+i*M+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return t[0]=_*T,t[1]=(v*u*s-d*f*s-v*i*p+n*f*p+d*i*g-n*u*g)*T,t[2]=(a*f*s-v*c*s+v*i*l-n*f*l-a*i*g+n*c*g)*T,t[3]=(d*c*s-a*u*s-d*i*l+n*u*l+a*i*p-n*c*p)*T,t[4]=y*T,t[5]=(h*f*s-m*u*s+m*i*p-e*f*p-h*i*g+e*u*g)*T,t[6]=(m*c*s-o*f*s-m*i*l+e*f*l+o*i*g-e*c*g)*T,t[7]=(o*u*s-h*c*s+h*i*l-e*u*l-o*i*p+e*c*p)*T,t[8]=M*T,t[9]=(m*d*s-h*v*s-m*n*p+e*v*p+h*n*g-e*d*g)*T,t[10]=(o*v*s-m*a*s+m*n*l-e*v*l-o*n*g+e*a*g)*T,t[11]=(h*a*s-o*d*s-h*n*l+e*d*l+o*n*p-e*a*p)*T,t[12]=R*T,t[13]=(h*v*i-m*d*i+m*n*u-e*v*u-h*n*f+e*d*f)*T,t[14]=(m*a*i-o*v*i-m*n*c+e*v*c+o*n*f-e*a*f)*T,t[15]=(o*d*i-h*a*i+h*n*c-e*d*c-o*n*u+e*a*u)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,d=a+a,u=s*l,p=s*h,m=s*d,v=o*h,f=o*d,g=a*d,_=c*l,y=c*h,M=c*d,R=n.x,A=n.y,T=n.z;return i[0]=(1-(v+g))*R,i[1]=(p+M)*R,i[2]=(m-y)*R,i[3]=0,i[4]=(p-M)*A,i[5]=(1-(u+g))*A,i[6]=(f+_)*A,i[7]=0,i[8]=(m+y)*T,i[9]=(f-_)*T,i[10]=(1-(u+v))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=zi.set(i[0],i[1],i[2]).length();const o=zi.set(i[4],i[5],i[6]).length(),a=zi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],ln.copy(this);const l=1/s,h=1/o,d=1/a;return ln.elements[0]*=l,ln.elements[1]*=l,ln.elements[2]*=l,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=d,ln.elements[9]*=d,ln.elements[10]*=d,e.setFromRotationMatrix(ln),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Vn){const c=this.elements,l=2*s/(e-t),h=2*s/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let p,m;if(a===Vn)p=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===Yr)p=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Vn){const c=this.elements,l=1/(e-t),h=1/(n-i),d=1/(o-s),u=(e+t)*l,p=(n+i)*h;let m,v;if(a===Vn)m=(o+s)*d,v=-2*d;else if(a===Yr)m=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const zi=new D,ln=new ae,Sd=new D(0,0,0),wd=new D(1,1,1),jn=new D,rr=new D,je=new D,Uc=new ae,Fc=new ms;class Tn{constructor(t=0,e=0,n=0,i=Tn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(we(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-we(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(we(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-we(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(we(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Uc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fc.setFromEuler(this),this.setFromQuaternion(Fc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tn.DEFAULT_ORDER="XYZ";class Mh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ed=0;const Oc=new D,Bi=new ms,Nn=new ae,or=new D,Ss=new D,bd=new D,Td=new ms,zc=new D(1,0,0),Bc=new D(0,1,0),kc=new D(0,0,1),Hc={type:"added"},Ad={type:"removed"},ki={type:"childadded",child:null},Mo={type:"childremoved",child:null};class _e extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_e.DEFAULT_UP.clone();const t=new D,e=new Tn,n=new ms,i=new D(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ae},normalMatrix:{value:new Kt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=_e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.premultiply(Bi),this}rotateX(t){return this.rotateOnAxis(zc,t)}rotateY(t){return this.rotateOnAxis(Bc,t)}rotateZ(t){return this.rotateOnAxis(kc,t)}translateOnAxis(t,e){return Oc.copy(t).applyQuaternion(this.quaternion),this.position.add(Oc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zc,t)}translateY(t){return this.translateOnAxis(Bc,t)}translateZ(t){return this.translateOnAxis(kc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?or.copy(t):or.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(Ss,or,this.up):Nn.lookAt(or,Ss,this.up),this.quaternion.setFromRotationMatrix(Nn),i&&(Nn.extractRotation(i.matrixWorld),Bi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Bi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hc),ki.child=t,this.dispatchEvent(ki),ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ad),Mo.child=t,this.dispatchEvent(Mo),Mo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hc),ki.child=t,this.dispatchEvent(ki),ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,t,bd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,Td,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),p=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}_e.DEFAULT_UP=new D(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new D,Dn=new D,So=new D,Un=new D,Hi=new D,Gi=new D,Gc=new D,wo=new D,Eo=new D,bo=new D,To=new ge,Ao=new ge,Co=new ge;class fn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),hn.subVectors(t,e),i.cross(hn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){hn.subVectors(i,e),Dn.subVectors(n,e),So.subVectors(t,e);const o=hn.dot(hn),a=hn.dot(Dn),c=hn.dot(So),l=Dn.dot(Dn),h=Dn.dot(So),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const u=1/d,p=(l*c-a*h)*u,m=(o*h-a*c)*u;return s.set(1-p-m,m,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(t,e,n,i,s,o,a,c){return this.getBarycoord(t,e,n,i,Un)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Un.x),c.addScaledVector(o,Un.y),c.addScaledVector(a,Un.z),c)}static getInterpolatedAttribute(t,e,n,i,s,o){return To.setScalar(0),Ao.setScalar(0),Co.setScalar(0),To.fromBufferAttribute(t,e),Ao.fromBufferAttribute(t,n),Co.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(To,s.x),o.addScaledVector(Ao,s.y),o.addScaledVector(Co,s.z),o}static isFrontFacing(t,e,n,i){return hn.subVectors(n,e),Dn.subVectors(t,e),hn.cross(Dn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),hn.cross(Dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return fn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return fn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return fn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return fn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return fn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;Hi.subVectors(i,n),Gi.subVectors(s,n),wo.subVectors(t,n);const c=Hi.dot(wo),l=Gi.dot(wo);if(c<=0&&l<=0)return e.copy(n);Eo.subVectors(t,i);const h=Hi.dot(Eo),d=Gi.dot(Eo);if(h>=0&&d<=h)return e.copy(i);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Hi,o);bo.subVectors(t,s);const p=Hi.dot(bo),m=Gi.dot(bo);if(m>=0&&p<=m)return e.copy(s);const v=p*l-c*m;if(v<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(Gi,a);const f=h*m-p*d;if(f<=0&&d-h>=0&&p-m>=0)return Gc.subVectors(s,i),a=(d-h)/(d-h+(p-m)),e.copy(i).addScaledVector(Gc,a);const g=1/(f+v+u);return o=v*g,a=u*g,e.copy(n).addScaledVector(Hi,o).addScaledVector(Gi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Sh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},ar={h:0,s:0,l:0};function Ro(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=re.workingColorSpace){if(t=tc(t,1),e=we(e,0,1),n=we(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Ro(o,s,t+1/3),this.g=Ro(o,s,t),this.b=Ro(o,s,t-1/3)}return re.toWorkingColorSpace(this,i),this}setStyle(t,e=qe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){const n=Sh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=is(t.r),this.g=is(t.g),this.b=is(t.b),this}copyLinearToSRGB(t){return this.r=fo(t.r),this.g=fo(t.g),this.b=fo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return re.fromWorkingColorSpace(Ue.copy(this),t),Math.round(we(Ue.r*255,0,255))*65536+Math.round(we(Ue.g*255,0,255))*256+Math.round(we(Ue.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.fromWorkingColorSpace(Ue.copy(this),e);const n=Ue.r,i=Ue.g,s=Ue.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-s)/d+(i<s?6:0);break;case i:c=(s-n)/d+2;break;case s:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.fromWorkingColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=qe){re.fromWorkingColorSpace(Ue.copy(this),t);const e=Ue.r,n=Ue.g,i=Ue.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Zn),this.setHSL(Zn.h+t,Zn.s+e,Zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Zn),t.getHSL(ar);const n=Ds(Zn.h,ar.h,e),i=Ds(Zn.s,ar.s,e),s=Ds(Zn.l,ar.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ue=new jt;jt.NAMES=Sh;let Cd=0,vs=class extends ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=es,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jo,this.blendDst=Qo,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ni,this.stencilZFail=Ni,this.stencilZPass=Ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(n.blending=this.blending),this.side!==ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Jo&&(n.blendSrc=this.blendSrc),this.blendDst!==Qo&&(n.blendDst=this.blendDst),this.blendEquation!==yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ac&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}};class Hn extends vs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xe=new D,cr=new gt;class Ge{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Cc,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)cr.fromBufferAttribute(this,e),cr.applyMatrix3(t),this.setXY(e,cr.x,cr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ji(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ji(e,this.array)),e}setX(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ji(e,this.array)),e}setY(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ji(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ji(e,this.array)),e}setW(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),i=Be(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),i=Be(i,this.array),s=Be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Cc&&(t.usage=this.usage),t}}class wh extends Ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Eh extends Ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ue extends Ge{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Rd=0;const en=new ae,Po=new _e,Vi=new D,Ze=new Li,ws=new Li,Ae=new D;class ze extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vh(t)?Eh:wh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Kt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,n){return en.makeTranslation(t,e,n),this.applyMatrix4(en),this}scale(t,e,n){return en.makeScale(t,e,n),this.applyMatrix4(en),this}lookAt(t){return Po.lookAt(t),Po.updateMatrix(),this.applyMatrix4(Po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ue(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Li);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Ze.setFromBufferAttribute(s),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];ws.setFromBufferAttribute(a),this.morphTargetsRelative?(Ae.addVectors(Ze.min,ws.min),Ze.expandByPoint(Ae),Ae.addVectors(Ze.max,ws.max),Ze.expandByPoint(Ae)):(Ze.expandByPoint(ws.min),Ze.expandByPoint(ws.max))}Ze.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Ae.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ae));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ae.fromBufferAttribute(a,l),c&&(Vi.fromBufferAttribute(t,l),Ae.add(Vi)),i=Math.max(i,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ge(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new D,c[I]=new D;const l=new D,h=new D,d=new D,u=new gt,p=new gt,m=new gt,v=new D,f=new D;function g(I,q,x){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,q),d.fromBufferAttribute(n,x),u.fromBufferAttribute(s,I),p.fromBufferAttribute(s,q),m.fromBufferAttribute(s,x),h.sub(l),d.sub(l),p.sub(u),m.sub(u);const S=1/(p.x*m.y-m.x*p.y);isFinite(S)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(S),f.copy(d).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(S),a[I].add(v),a[q].add(v),a[x].add(v),c[I].add(f),c[q].add(f),c[x].add(f))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let I=0,q=_.length;I<q;++I){const x=_[I],S=x.start,k=x.count;for(let L=S,F=S+k;L<F;L+=3)g(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const y=new D,M=new D,R=new D,A=new D;function T(I){R.fromBufferAttribute(i,I),A.copy(R);const q=a[I];y.copy(q),y.sub(R.multiplyScalar(R.dot(q))).normalize(),M.crossVectors(A,q);const S=M.dot(c[I])<0?-1:1;o.setXYZW(I,y.x,y.y,y.z,S)}for(let I=0,q=_.length;I<q;++I){const x=_[I],S=x.start,k=x.count;for(let L=S,F=S+k;L<F;L+=3)T(t.getX(L+0)),T(t.getX(L+1)),T(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new D,s=new D,o=new D,a=new D,c=new D,l=new D,h=new D,d=new D;if(t)for(let u=0,p=t.count;u<p;u+=3){const m=t.getX(u+0),v=t.getX(u+1),f=t.getX(u+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,f),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,f),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let u=0,p=e.count;u<p;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h);let p=0,m=0;for(let v=0,f=c.length;v<f;v++){a.isInterleavedBufferAttribute?p=c[v]*a.data.stride+a.offset:p=c[v]*h;for(let g=0;g<h;g++)u[m++]=l[p++]}return new Ge(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ze,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,d=l.length;h<d;h++){const u=l[h],p=t(u,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const p=l[d];h.push(p.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],d=s[l];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vc=new ae,di=new yh,lr=new gs,Wc=new D,hr=new D,ur=new D,dr=new D,Lo=new D,fr=new D,Xc=new D,pr=new D;class Gt extends _e{constructor(t=new ze,e=new Hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){fr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],d=s[c];h!==0&&(Lo.fromBufferAttribute(d,t),o?fr.addScaledVector(Lo,h):fr.addScaledVector(Lo.sub(e),h))}e.add(fr)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(s),di.copy(t.ray).recast(t.near),!(lr.containsPoint(di.origin)===!1&&(di.intersectSphere(lr,Wc)===null||di.origin.distanceToSquared(Wc)>(t.far-t.near)**2))&&(Vc.copy(s).invert(),di.copy(t.ray).applyMatrix4(Vc),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,di)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=u.length;m<v;m++){const f=u[m],g=o[f.materialIndex],_=Math.max(f.start,p.start),y=Math.min(a.count,Math.min(f.start+f.count,p.start+p.count));for(let M=_,R=y;M<R;M+=3){const A=a.getX(M),T=a.getX(M+1),I=a.getX(M+2);i=mr(this,g,t,n,l,h,d,A,T,I),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const m=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let f=m,g=v;f<g;f+=3){const _=a.getX(f),y=a.getX(f+1),M=a.getX(f+2);i=mr(this,o,t,n,l,h,d,_,y,M),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,v=u.length;m<v;m++){const f=u[m],g=o[f.materialIndex],_=Math.max(f.start,p.start),y=Math.min(c.count,Math.min(f.start+f.count,p.start+p.count));for(let M=_,R=y;M<R;M+=3){const A=M,T=M+1,I=M+2;i=mr(this,g,t,n,l,h,d,A,T,I),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const m=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let f=m,g=v;f<g;f+=3){const _=f,y=f+1,M=f+2;i=mr(this,o,t,n,l,h,d,_,y,M),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}}}function Pd(r,t,e,n,i,s,o,a){let c;if(t.side===Ve?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,t.side===ai,a),c===null)return null;pr.copy(a),pr.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(pr);return l<e.near||l>e.far?null:{distance:l,point:pr.clone(),object:r}}function mr(r,t,e,n,i,s,o,a,c,l){r.getVertexPosition(a,hr),r.getVertexPosition(c,ur),r.getVertexPosition(l,dr);const h=Pd(r,t,e,n,hr,ur,dr,Xc);if(h){const d=new D;fn.getBarycoord(Xc,hr,ur,dr,d),i&&(h.uv=fn.getInterpolatedAttribute(i,a,c,l,d,new gt)),s&&(h.uv1=fn.getInterpolatedAttribute(s,a,c,l,d,new gt)),o&&(h.normal=fn.getInterpolatedAttribute(o,a,c,l,d,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new D,materialIndex:0};fn.getNormal(hr,ur,dr,u.normal),h.face=u,h.barycoord=d}return h}class qt extends ze{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],d=[];let u=0,p=0;m("z","y","x",-1,-1,n,e,t,o,s,0),m("z","y","x",1,-1,n,e,-t,o,s,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(d,2));function m(v,f,g,_,y,M,R,A,T,I,q){const x=M/T,S=R/I,k=M/2,L=R/2,F=A/2,O=T+1,N=I+1;let Z=0,z=0;const tt=new D;for(let G=0;G<N;G++){const et=G*S-L;for(let pt=0;pt<O;pt++){const Ot=pt*x-k;tt[v]=Ot*_,tt[f]=et*y,tt[g]=F,l.push(tt.x,tt.y,tt.z),tt[v]=0,tt[f]=0,tt[g]=A>0?1:-1,h.push(tt.x,tt.y,tt.z),d.push(pt/T),d.push(1-G/I),Z+=1}}for(let G=0;G<I;G++)for(let et=0;et<T;et++){const pt=u+et+O*G,Ot=u+et+O*(G+1),J=u+(et+1)+O*(G+1),ot=u+(et+1)+O*G;c.push(pt,Ot,ot),c.push(Ot,J,ot),z+=6}a.addGroup(p,z,q),p+=z,u+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function us(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ke(r){const t={};for(let e=0;e<r.length;e++){const n=us(r[e]);for(const i in n)t[i]=n[i]}return t}function Ld(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function bh(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const Th={clone:us,merge:ke};var Id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends vs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Id,this.fragmentShader=Nd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=us(t.uniforms),this.uniformsGroups=Ld(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ah extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=Vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Jn=new D,qc=new gt,Yc=new gt;class Je extends Ah{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=hs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hs*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Jn.x,Jn.y).multiplyScalar(-t/Jn.z),Jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jn.x,Jn.y).multiplyScalar(-t/Jn.z)}getViewSize(t,e){return this.getViewBounds(t,qc,Yc),e.subVectors(Yc,qc)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ns*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Wi=-90,Xi=1;class Dd extends _e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Je(Wi,Xi,t,e);i.layers=this.layers,this.add(i);const s=new Je(Wi,Xi,t,e);s.layers=this.layers,this.add(s);const o=new Je(Wi,Xi,t,e);o.layers=this.layers,this.add(o);const a=new Je(Wi,Xi,t,e);a.layers=this.layers,this.add(a);const c=new Je(Wi,Xi,t,e);c.layers=this.layers,this.add(c);const l=new Je(Wi,Xi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Yr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Ch extends Oe{constructor(t,e,n,i,s,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:os,super(t,e,n,i,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ud extends Ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ch(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:dn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new qt(5,5,5),s=new An({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:ri});s.uniforms.tEquirect.value=e;const o=new Gt(i,s),a=e.minFilter;return e.minFilter===Ei&&(e.minFilter=dn),new Dd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const Io=new D,Fd=new D,Od=new Kt;class _i{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Io.subVectors(n,e).cross(Fd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Io),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Od.getNormalMatrix(t),i=this.coplanarPoint(Io).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new gs,gr=new D;class ec{constructor(t=new _i,e=new _i,n=new _i,i=new _i,s=new _i,o=new _i){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vn){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],d=i[6],u=i[7],p=i[8],m=i[9],v=i[10],f=i[11],g=i[12],_=i[13],y=i[14],M=i[15];if(n[0].setComponents(c-s,u-l,f-p,M-g).normalize(),n[1].setComponents(c+s,u+l,f+p,M+g).normalize(),n[2].setComponents(c+o,u+h,f+m,M+_).normalize(),n[3].setComponents(c-o,u-h,f-m,M-_).normalize(),n[4].setComponents(c-a,u-d,f-v,M-y).normalize(),e===Vn)n[5].setComponents(c+a,u+d,f+v,M+y).normalize();else if(e===Yr)n[5].setComponents(a,d,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(t){return fi.center.set(0,0,0),fi.radius=.7071067811865476,fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(gr.x=i.normal.x>0?t.max.x:t.min.x,gr.y=i.normal.y>0?t.max.y:t.min.y,gr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(gr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Rh(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function zd(r){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,d=l.byteLength,u=r.createBuffer();r.bindBuffer(c,u),r.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=r.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=r.SHORT;else if(l instanceof Uint32Array)p=r.UNSIGNED_INT;else if(l instanceof Int32Array)p=r.INT;else if(l instanceof Int8Array)p=r.BYTE;else if(l instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const h=c.array,d=c.updateRanges;if(r.bindBuffer(l,a),d.length===0)r.bufferSubData(l,0,h);else{d.sort((p,m)=>p.start-m.start);let u=0;for(let p=1;p<d.length;p++){const m=d[u],v=d[p];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++u,d[u]=v)}d.length=u+1;for(let p=0,m=d.length;p<m;p++){const v=d[p];r.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(r.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}class sn extends ze{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,d=t/a,u=e/c,p=[],m=[],v=[],f=[];for(let g=0;g<h;g++){const _=g*u-o;for(let y=0;y<l;y++){const M=y*d-s;m.push(M,-_,0),v.push(0,0,1),f.push(y/a),f.push(1-g/c)}}for(let g=0;g<c;g++)for(let _=0;_<a;_++){const y=_+l*g,M=_+l*(g+1),R=_+1+l*(g+1),A=_+1+l*g;p.push(y,M,A),p.push(M,R,A)}this.setIndex(p),this.setAttribute("position",new ue(m,3)),this.setAttribute("normal",new ue(v,3)),this.setAttribute("uv",new ue(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Bd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Hd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$d=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Jd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,lf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,uf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,df=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ff=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gf="gl_FragColor = linearToOutputTexel( gl_FragColor );",vf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_f=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Mf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ef=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Af=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,If=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Nf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Df=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Uf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ff=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Of=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$f=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Kf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ep=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,np=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ip=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ap=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,up=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,mp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_p=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Sp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ep=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ap=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Rp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ip=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Np=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Dp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Yp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$p=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,em=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,im=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,om=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,am=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,um=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_m=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$t={alphahash_fragment:Bd,alphahash_pars_fragment:kd,alphamap_fragment:Hd,alphamap_pars_fragment:Gd,alphatest_fragment:Vd,alphatest_pars_fragment:Wd,aomap_fragment:Xd,aomap_pars_fragment:qd,batching_pars_vertex:Yd,batching_vertex:$d,begin_vertex:Kd,beginnormal_vertex:jd,bsdfs:Zd,iridescence_fragment:Jd,bumpmap_pars_fragment:Qd,clipping_planes_fragment:tf,clipping_planes_pars_fragment:ef,clipping_planes_pars_vertex:nf,clipping_planes_vertex:sf,color_fragment:rf,color_pars_fragment:of,color_pars_vertex:af,color_vertex:cf,common:lf,cube_uv_reflection_fragment:hf,defaultnormal_vertex:uf,displacementmap_pars_vertex:df,displacementmap_vertex:ff,emissivemap_fragment:pf,emissivemap_pars_fragment:mf,colorspace_fragment:gf,colorspace_pars_fragment:vf,envmap_fragment:_f,envmap_common_pars_fragment:xf,envmap_pars_fragment:yf,envmap_pars_vertex:Mf,envmap_physical_pars_fragment:If,envmap_vertex:Sf,fog_vertex:wf,fog_pars_vertex:Ef,fog_fragment:bf,fog_pars_fragment:Tf,gradientmap_pars_fragment:Af,lightmap_pars_fragment:Cf,lights_lambert_fragment:Rf,lights_lambert_pars_fragment:Pf,lights_pars_begin:Lf,lights_toon_fragment:Nf,lights_toon_pars_fragment:Df,lights_phong_fragment:Uf,lights_phong_pars_fragment:Ff,lights_physical_fragment:Of,lights_physical_pars_fragment:zf,lights_fragment_begin:Bf,lights_fragment_maps:kf,lights_fragment_end:Hf,logdepthbuf_fragment:Gf,logdepthbuf_pars_fragment:Vf,logdepthbuf_pars_vertex:Wf,logdepthbuf_vertex:Xf,map_fragment:qf,map_pars_fragment:Yf,map_particle_fragment:$f,map_particle_pars_fragment:Kf,metalnessmap_fragment:jf,metalnessmap_pars_fragment:Zf,morphinstance_vertex:Jf,morphcolor_vertex:Qf,morphnormal_vertex:tp,morphtarget_pars_vertex:ep,morphtarget_vertex:np,normal_fragment_begin:ip,normal_fragment_maps:sp,normal_pars_fragment:rp,normal_pars_vertex:op,normal_vertex:ap,normalmap_pars_fragment:cp,clearcoat_normal_fragment_begin:lp,clearcoat_normal_fragment_maps:hp,clearcoat_pars_fragment:up,iridescence_pars_fragment:dp,opaque_fragment:fp,packing:pp,premultiplied_alpha_fragment:mp,project_vertex:gp,dithering_fragment:vp,dithering_pars_fragment:_p,roughnessmap_fragment:xp,roughnessmap_pars_fragment:yp,shadowmap_pars_fragment:Mp,shadowmap_pars_vertex:Sp,shadowmap_vertex:wp,shadowmask_pars_fragment:Ep,skinbase_vertex:bp,skinning_pars_vertex:Tp,skinning_vertex:Ap,skinnormal_vertex:Cp,specularmap_fragment:Rp,specularmap_pars_fragment:Pp,tonemapping_fragment:Lp,tonemapping_pars_fragment:Ip,transmission_fragment:Np,transmission_pars_fragment:Dp,uv_pars_fragment:Up,uv_pars_vertex:Fp,uv_vertex:Op,worldpos_vertex:zp,background_vert:Bp,background_frag:kp,backgroundCube_vert:Hp,backgroundCube_frag:Gp,cube_vert:Vp,cube_frag:Wp,depth_vert:Xp,depth_frag:qp,distanceRGBA_vert:Yp,distanceRGBA_frag:$p,equirect_vert:Kp,equirect_frag:jp,linedashed_vert:Zp,linedashed_frag:Jp,meshbasic_vert:Qp,meshbasic_frag:tm,meshlambert_vert:em,meshlambert_frag:nm,meshmatcap_vert:im,meshmatcap_frag:sm,meshnormal_vert:rm,meshnormal_frag:om,meshphong_vert:am,meshphong_frag:cm,meshphysical_vert:lm,meshphysical_frag:hm,meshtoon_vert:um,meshtoon_frag:dm,points_vert:fm,points_frag:pm,shadow_vert:mm,shadow_frag:gm,sprite_vert:vm,sprite_frag:_m},At={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Mn={basic:{uniforms:ke([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:ke([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new jt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:ke([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:ke([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:ke([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new jt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:ke([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:ke([At.points,At.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:ke([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:ke([At.common,At.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:ke([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:ke([At.sprite,At.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:ke([At.common,At.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:ke([At.lights,At.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Mn.physical={uniforms:ke([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const vr={r:0,b:0,g:0},pi=new Tn,xm=new ae;function ym(r,t,e,n,i,s,o){const a=new jt(0);let c=s===!0?0:1,l,h,d=null,u=0,p=null;function m(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y)),y}function v(_){let y=!1;const M=m(_);M===null?g(a,c):M&&M.isColor&&(g(M,1),y=!0);const R=r.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function f(_,y){const M=m(y);M&&(M.isCubeTexture||M.mapping===to)?(h===void 0&&(h=new Gt(new qt(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:us(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),pi.copy(y.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(xm.makeRotationFromEuler(pi)),h.material.toneMapped=re.getTransfer(M.colorSpace)!==he,(d!==M||u!==M.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,d=M,u=M.version,p=r.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Gt(new sn(2,2),new An({name:"BackgroundMaterial",uniforms:us(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=re.getTransfer(M.colorSpace)!==he,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||u!==M.version||p!==r.toneMapping)&&(l.material.needsUpdate=!0,d=M,u=M.version,p=r.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,y){_.getRGB(vr,bh(r)),n.buffers.color.setClear(vr.r,vr.g,vr.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),c=y,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,g(a,c)},render:v,addToRenderList:f}}function Mm(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null);let s=i,o=!1;function a(x,S,k,L,F){let O=!1;const N=d(L,k,S);s!==N&&(s=N,l(s.object)),O=p(x,L,k,F),O&&m(x,L,k,F),F!==null&&t.update(F,r.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,M(x,S,k,L),F!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function c(){return r.createVertexArray()}function l(x){return r.bindVertexArray(x)}function h(x){return r.deleteVertexArray(x)}function d(x,S,k){const L=k.wireframe===!0;let F=n[x.id];F===void 0&&(F={},n[x.id]=F);let O=F[S.id];O===void 0&&(O={},F[S.id]=O);let N=O[L];return N===void 0&&(N=u(c()),O[L]=N),N}function u(x){const S=[],k=[],L=[];for(let F=0;F<e;F++)S[F]=0,k[F]=0,L[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:k,attributeDivisors:L,object:x,attributes:{},index:null}}function p(x,S,k,L){const F=s.attributes,O=S.attributes;let N=0;const Z=k.getAttributes();for(const z in Z)if(Z[z].location>=0){const G=F[z];let et=O[z];if(et===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(et=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(et=x.instanceColor)),G===void 0||G.attribute!==et||et&&G.data!==et.data)return!0;N++}return s.attributesNum!==N||s.index!==L}function m(x,S,k,L){const F={},O=S.attributes;let N=0;const Z=k.getAttributes();for(const z in Z)if(Z[z].location>=0){let G=O[z];G===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(G=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(G=x.instanceColor));const et={};et.attribute=G,G&&G.data&&(et.data=G.data),F[z]=et,N++}s.attributes=F,s.attributesNum=N,s.index=L}function v(){const x=s.newAttributes;for(let S=0,k=x.length;S<k;S++)x[S]=0}function f(x){g(x,0)}function g(x,S){const k=s.newAttributes,L=s.enabledAttributes,F=s.attributeDivisors;k[x]=1,L[x]===0&&(r.enableVertexAttribArray(x),L[x]=1),F[x]!==S&&(r.vertexAttribDivisor(x,S),F[x]=S)}function _(){const x=s.newAttributes,S=s.enabledAttributes;for(let k=0,L=S.length;k<L;k++)S[k]!==x[k]&&(r.disableVertexAttribArray(k),S[k]=0)}function y(x,S,k,L,F,O,N){N===!0?r.vertexAttribIPointer(x,S,k,F,O):r.vertexAttribPointer(x,S,k,L,F,O)}function M(x,S,k,L){v();const F=L.attributes,O=k.getAttributes(),N=S.defaultAttributeValues;for(const Z in O){const z=O[Z];if(z.location>=0){let tt=F[Z];if(tt===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(tt=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(tt=x.instanceColor)),tt!==void 0){const G=tt.normalized,et=tt.itemSize,pt=t.get(tt);if(pt===void 0)continue;const Ot=pt.buffer,J=pt.type,ot=pt.bytesPerElement,bt=J===r.INT||J===r.UNSIGNED_INT||tt.gpuType===qa;if(tt.isInterleavedBufferAttribute){const vt=tt.data,X=vt.stride,st=tt.offset;if(vt.isInstancedInterleavedBuffer){for(let _t=0;_t<z.locationSize;_t++)g(z.location+_t,vt.meshPerAttribute);x.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let _t=0;_t<z.locationSize;_t++)f(z.location+_t);r.bindBuffer(r.ARRAY_BUFFER,Ot);for(let _t=0;_t<z.locationSize;_t++)y(z.location+_t,et/z.locationSize,J,G,X*ot,(st+et/z.locationSize*_t)*ot,bt)}else{if(tt.isInstancedBufferAttribute){for(let vt=0;vt<z.locationSize;vt++)g(z.location+vt,tt.meshPerAttribute);x.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let vt=0;vt<z.locationSize;vt++)f(z.location+vt);r.bindBuffer(r.ARRAY_BUFFER,Ot);for(let vt=0;vt<z.locationSize;vt++)y(z.location+vt,et/z.locationSize,J,G,et*ot,et/z.locationSize*vt*ot,bt)}}else if(N!==void 0){const G=N[Z];if(G!==void 0)switch(G.length){case 2:r.vertexAttrib2fv(z.location,G);break;case 3:r.vertexAttrib3fv(z.location,G);break;case 4:r.vertexAttrib4fv(z.location,G);break;default:r.vertexAttrib1fv(z.location,G)}}}}_()}function R(){I();for(const x in n){const S=n[x];for(const k in S){const L=S[k];for(const F in L)h(L[F].object),delete L[F];delete S[k]}delete n[x]}}function A(x){if(n[x.id]===void 0)return;const S=n[x.id];for(const k in S){const L=S[k];for(const F in L)h(L[F].object),delete L[F];delete S[k]}delete n[x.id]}function T(x){for(const S in n){const k=n[S];if(k[x.id]===void 0)continue;const L=k[x.id];for(const F in L)h(L[F].object),delete L[F];delete k[x.id]}}function I(){q(),o=!0,s!==i&&(s=i,l(s.object))}function q(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:q,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:f,disableUnusedAttributes:_}}function Sm(r,t,e){let n;function i(l){n=l}function s(l,h){r.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,d){d!==0&&(r.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function a(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let p=0;for(let m=0;m<d;m++)p+=h[m];e.update(p,n,1)}function c(l,h,d,u){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<l.length;m++)o(l[m],h[m],u[m]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let m=0;for(let v=0;v<d;v++)m+=h[v];for(let v=0;v<u.length;v++)e.update(m,n,u[v])}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function wm(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==pn&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const I=T===$s&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Xn&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==wn&&!I)}function c(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){const T=t.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),f=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=m>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:f,maxAttributes:g,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:R,maxSamples:A}}function Em(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new _i,a=new Kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||i;return i=u,n=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){const m=d.clippingPlanes,v=d.clipIntersection,f=d.clipShadows,g=r.get(d);if(!i||m===null||m.length===0||s&&!f)s?h(null):l();else{const _=s?0:n,y=_*4;let M=g.clippingState||null;c.value=M,M=h(m,u,y,p);for(let R=0;R!==y;++R)M[R]=e[R];g.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,m){const v=d!==null?d.length:0;let f=null;if(v!==0){if(f=c.value,m!==!0||f===null){const g=p+v*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(f===null||f.length<g)&&(f=new Float32Array(g));for(let y=0,M=p;y!==v;++y,M+=4)o.copy(d[y]).applyMatrix4(_,a),o.normal.toArray(f,M),f[M+3]=o.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,f}}function bm(r){let t=new WeakMap;function e(o,a){return a===aa?o.mapping=os:a===ca&&(o.mapping=as),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===aa||a===ca)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Ud(c.height);return l.fromEquirectangularTexture(r,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Ph extends Ah{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Zi=4,$c=[.125,.215,.35,.446,.526,.582],Mi=20,No=new Ph,Kc=new jt;let Do=null,Uo=0,Fo=0,Oo=!1;const xi=(1+Math.sqrt(5))/2,qi=1/xi,jc=[new D(-xi,qi,0),new D(xi,qi,0),new D(-qi,0,xi),new D(qi,0,xi),new D(0,xi,-qi),new D(0,xi,qi),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Oa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Do=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),Fo=this._renderer.getActiveMipmapLevel(),Oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Do,Uo,Fo),this._renderer.xr.enabled=Oo,t.scissorTest=!1,_r(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===os||t.mapping===as?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Do=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),Fo=this._renderer.getActiveMipmapLevel(),Oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:$s,format:pn,colorSpace:ci,depthBuffer:!1},i=Zc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tm(s)),this._blurMaterial=Am(s,t,e)}return i}_compileMaterial(t){const e=new Gt(this._lodPlanes[0],t);this._renderer.compile(e,No)}_sceneToCubeUV(t,e,n,i){const a=new Je(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Kc),h.toneMapping=oi,h.autoClear=!1;const p=new Hn({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),m=new Gt(new qt,p);let v=!1;const f=t.background;f?f.isColor&&(p.color.copy(f),t.background=null,v=!0):(p.color.copy(Kc),v=!0);for(let g=0;g<6;g++){const _=g%3;_===0?(a.up.set(0,c[g],0),a.lookAt(l[g],0,0)):_===1?(a.up.set(0,0,c[g]),a.lookAt(0,l[g],0)):(a.up.set(0,c[g],0),a.lookAt(0,0,l[g]));const y=this._cubeSize;_r(i,_*y,g>2?y:0,y,y),h.setRenderTarget(i),v&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===os||t.mapping===as;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jc());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Gt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;_r(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,No)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=jc[(i-s-1)%jc.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Gt(this._lodPlanes[i],l),u=l.uniforms,p=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Mi-1),v=s/m,f=isFinite(s)?1+Math.floor(h*v):Mi;f>Mi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Mi}`);const g=[];let _=0;for(let T=0;T<Mi;++T){const I=T/v,q=Math.exp(-I*I/2);g.push(q),T===0?_+=q:T<f&&(_+=2*q)}for(let T=0;T<g.length;T++)g[T]=g[T]/_;u.envMap.value=t.texture,u.samples.value=f,u.weights.value=g,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:y}=this;u.dTheta.value=m,u.mipInt.value=y-n;const M=this._sizeLods[i],R=3*M*(i>y-Zi?i-y+Zi:0),A=4*(this._cubeSize-M);_r(e,R,A,3*M,2*M),c.setRenderTarget(e),c.render(d,No)}}function Tm(r){const t=[],e=[],n=[];let i=r;const s=r-Zi+1+$c.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>r-Zi?c=$c[o-r+Zi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,m=6,v=3,f=2,g=1,_=new Float32Array(v*m*p),y=new Float32Array(f*m*p),M=new Float32Array(g*m*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,I=A>2?0:-1,q=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];_.set(q,v*m*A),y.set(u,f*m*A);const x=[A,A,A,A,A,A];M.set(x,g*m*A)}const R=new ze;R.setAttribute("position",new Ge(_,v)),R.setAttribute("uv",new Ge(y,f)),R.setAttribute("faceIndex",new Ge(M,g)),t.push(R),i>Zi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Zc(r,t,e){const n=new Ci(r,t,e);return n.texture.mapping=to,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _r(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Am(r,t,e){const n=new Float32Array(Mi),i=new D(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Jc(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Qc(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function nc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Cm(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===aa||c===ca,h=c===os||c===as;if(l||h){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Oa(r)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new Oa(r)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Rm(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&kr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Pm(r,t,e,n){const i={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const m in u.attributes)t.remove(u.attributes[m]);for(const m in u.morphAttributes){const v=u.morphAttributes[m];for(let f=0,g=v.length;f<g;f++)t.remove(v[f])}u.removeEventListener("dispose",o),delete i[u.id];const p=s.get(u);p&&(t.remove(p),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const m in u)t.update(u[m],r.ARRAY_BUFFER);const p=d.morphAttributes;for(const m in p){const v=p[m];for(let f=0,g=v.length;f<g;f++)t.update(v[f],r.ARRAY_BUFFER)}}function l(d){const u=[],p=d.index,m=d.attributes.position;let v=0;if(p!==null){const _=p.array;v=p.version;for(let y=0,M=_.length;y<M;y+=3){const R=_[y+0],A=_[y+1],T=_[y+2];u.push(R,A,A,T,T,R)}}else if(m!==void 0){const _=m.array;v=m.version;for(let y=0,M=_.length/3-1;y<M;y+=3){const R=y+0,A=y+1,T=y+2;u.push(R,A,A,T,T,R)}}else return;const f=new(vh(u)?Eh:wh)(u,1);f.version=v;const g=s.get(d);g&&t.remove(g),s.set(d,f)}function h(d){const u=s.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function Lm(r,t,e){let n;function i(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function c(u,p){r.drawElements(n,p,s,u*o),e.update(p,n,1)}function l(u,p,m){m!==0&&(r.drawElementsInstanced(n,p,s,u*o,m),e.update(p,n,m))}function h(u,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,u,0,m);let f=0;for(let g=0;g<m;g++)f+=p[g];e.update(f,n,1)}function d(u,p,m,v){if(m===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<u.length;g++)l(u[g]/o,p[g],v[g]);else{f.multiDrawElementsInstancedWEBGL(n,p,0,s,u,0,v,0,m);let g=0;for(let _=0;_<m;_++)g+=p[_];for(let _=0;_<v.length;_++)e.update(g,n,v[_])}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Im(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Nm(r,t,e){const n=new WeakMap,i=new ge;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let x=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var p=x;u!==void 0&&u.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let M=0;m===!0&&(M=1),v===!0&&(M=2),f===!0&&(M=3);let R=a.attributes.position.count*M,A=1;R>t.maxTextureSize&&(A=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const T=new Float32Array(R*A*4*d),I=new xh(T,R,A,d);I.type=wn,I.needsUpdate=!0;const q=M*4;for(let S=0;S<d;S++){const k=g[S],L=_[S],F=y[S],O=R*A*4*S;for(let N=0;N<k.count;N++){const Z=N*q;m===!0&&(i.fromBufferAttribute(k,N),T[O+Z+0]=i.x,T[O+Z+1]=i.y,T[O+Z+2]=i.z,T[O+Z+3]=0),v===!0&&(i.fromBufferAttribute(L,N),T[O+Z+4]=i.x,T[O+Z+5]=i.y,T[O+Z+6]=i.z,T[O+Z+7]=0),f===!0&&(i.fromBufferAttribute(F,N),T[O+Z+8]=i.x,T[O+Z+9]=i.y,T[O+Z+10]=i.z,T[O+Z+11]=F.itemSize===4?i.w:1)}}u={count:d,texture:I,size:new gt(R,A)},n.set(a,u),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let m=0;for(let f=0;f<l.length;f++)m+=l[f];const v=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(r,"morphTargetBaseInfluence",v),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function Dm(r,t,e,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(i.get(d)!==l&&(t.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return d}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}class Lh extends Oe{constructor(t,e,n,i,s,o,a,c,l,h=ns){if(h!==ns&&h!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ns&&(n=Ai),n===void 0&&h===ls&&(n=cs),super(null,i,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ye,this.minFilter=c!==void 0?c:Ye,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ih=new Oe,tl=new Lh(1,1),Nh=new xh,Dh=new yd,Uh=new Ch,el=[],nl=[],il=new Float32Array(16),sl=new Float32Array(9),rl=new Float32Array(4);function _s(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=el[i];if(s===void 0&&(s=new Float32Array(i),el[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function be(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Te(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function no(r,t){let e=nl[t];e===void 0&&(e=new Int32Array(t),nl[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Um(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Fm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;r.uniform2fv(this.addr,t),Te(e,t)}}function Om(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;r.uniform3fv(this.addr,t),Te(e,t)}}function zm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;r.uniform4fv(this.addr,t),Te(e,t)}}function Bm(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(be(e,n))return;rl.set(n),r.uniformMatrix2fv(this.addr,!1,rl),Te(e,n)}}function km(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(be(e,n))return;sl.set(n),r.uniformMatrix3fv(this.addr,!1,sl),Te(e,n)}}function Hm(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(be(e,n))return;il.set(n),r.uniformMatrix4fv(this.addr,!1,il),Te(e,n)}}function Gm(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Vm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;r.uniform2iv(this.addr,t),Te(e,t)}}function Wm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;r.uniform3iv(this.addr,t),Te(e,t)}}function Xm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;r.uniform4iv(this.addr,t),Te(e,t)}}function qm(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Ym(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;r.uniform2uiv(this.addr,t),Te(e,t)}}function $m(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;r.uniform3uiv(this.addr,t),Te(e,t)}}function Km(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;r.uniform4uiv(this.addr,t),Te(e,t)}}function jm(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(tl.compareFunction=gh,s=tl):s=Ih,e.setTexture2D(t||s,i)}function Zm(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Dh,i)}function Jm(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Uh,i)}function Qm(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Nh,i)}function t0(r){switch(r){case 5126:return Um;case 35664:return Fm;case 35665:return Om;case 35666:return zm;case 35674:return Bm;case 35675:return km;case 35676:return Hm;case 5124:case 35670:return Gm;case 35667:case 35671:return Vm;case 35668:case 35672:return Wm;case 35669:case 35673:return Xm;case 5125:return qm;case 36294:return Ym;case 36295:return $m;case 36296:return Km;case 35678:case 36198:case 36298:case 36306:case 35682:return jm;case 35679:case 36299:case 36307:return Zm;case 35680:case 36300:case 36308:case 36293:return Jm;case 36289:case 36303:case 36311:case 36292:return Qm}}function e0(r,t){r.uniform1fv(this.addr,t)}function n0(r,t){const e=_s(t,this.size,2);r.uniform2fv(this.addr,e)}function i0(r,t){const e=_s(t,this.size,3);r.uniform3fv(this.addr,e)}function s0(r,t){const e=_s(t,this.size,4);r.uniform4fv(this.addr,e)}function r0(r,t){const e=_s(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function o0(r,t){const e=_s(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function a0(r,t){const e=_s(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function c0(r,t){r.uniform1iv(this.addr,t)}function l0(r,t){r.uniform2iv(this.addr,t)}function h0(r,t){r.uniform3iv(this.addr,t)}function u0(r,t){r.uniform4iv(this.addr,t)}function d0(r,t){r.uniform1uiv(this.addr,t)}function f0(r,t){r.uniform2uiv(this.addr,t)}function p0(r,t){r.uniform3uiv(this.addr,t)}function m0(r,t){r.uniform4uiv(this.addr,t)}function g0(r,t,e){const n=this.cache,i=t.length,s=no(e,i);be(n,s)||(r.uniform1iv(this.addr,s),Te(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Ih,s[o])}function v0(r,t,e){const n=this.cache,i=t.length,s=no(e,i);be(n,s)||(r.uniform1iv(this.addr,s),Te(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Dh,s[o])}function _0(r,t,e){const n=this.cache,i=t.length,s=no(e,i);be(n,s)||(r.uniform1iv(this.addr,s),Te(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Uh,s[o])}function x0(r,t,e){const n=this.cache,i=t.length,s=no(e,i);be(n,s)||(r.uniform1iv(this.addr,s),Te(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Nh,s[o])}function y0(r){switch(r){case 5126:return e0;case 35664:return n0;case 35665:return i0;case 35666:return s0;case 35674:return r0;case 35675:return o0;case 35676:return a0;case 5124:case 35670:return c0;case 35667:case 35671:return l0;case 35668:case 35672:return h0;case 35669:case 35673:return u0;case 5125:return d0;case 36294:return f0;case 36295:return p0;case 36296:return m0;case 35678:case 36198:case 36298:case 36306:case 35682:return g0;case 35679:case 36299:case 36307:return v0;case 35680:case 36300:case 36308:case 36293:return _0;case 36289:case 36303:case 36311:case 36292:return x0}}class M0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=t0(e.type)}}class S0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=y0(e.type)}}class w0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const zo=/(\w+)(\])?(\[|\.)?/g;function ol(r,t){r.seq.push(t),r.map[t.id]=t}function E0(r,t,e){const n=r.name,i=n.length;for(zo.lastIndex=0;;){const s=zo.exec(n),o=zo.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){ol(e,l===void 0?new M0(a,r,t):new S0(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new w0(a),ol(e,d)),e=d}}}class Hr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);E0(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function al(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const b0=37297;let T0=0;function A0(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function C0(r){const t=re.getPrimaries(re.workingColorSpace),e=re.getPrimaries(r);let n;switch(t===e?n="":t===qr&&e===Xr?n="LinearDisplayP3ToLinearSRGB":t===Xr&&e===qr&&(n="LinearSRGBToLinearDisplayP3"),r){case ci:case eo:return[n,"LinearTransferOETF"];case qe:case Qa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function cl(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+A0(r.getShaderSource(t),o)}else return i}function R0(r,t){const e=C0(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function P0(r,t){let e;switch(t){case Iu:e="Linear";break;case Nu:e="Reinhard";break;case Du:e="Cineon";break;case sh:e="ACESFilmic";break;case Fu:e="AgX";break;case Ou:e="Neutral";break;case Uu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const xr=new D;function L0(){re.getLuminanceCoefficients(xr);const r=xr.x.toFixed(4),t=xr.y.toFixed(4),e=xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function I0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ls).join(`
`)}function N0(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function D0(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Ls(r){return r!==""}function ll(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hl(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const U0=/^[ \t]*#include +<([\w\d./]+)>/gm;function za(r){return r.replace(U0,O0)}const F0=new Map;function O0(r,t){let e=$t[t];if(e===void 0){const n=F0.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return za(e)}const z0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ul(r){return r.replace(z0,B0)}function B0(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function dl(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function k0(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===eh?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===nh?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===kn&&(t="SHADOWMAP_TYPE_VSM"),t}function H0(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case os:case as:t="ENVMAP_TYPE_CUBE";break;case to:t="ENVMAP_TYPE_CUBE_UV";break}return t}function G0(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case as:t="ENVMAP_MODE_REFRACTION";break}return t}function V0(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ih:t="ENVMAP_BLENDING_MULTIPLY";break;case Pu:t="ENVMAP_BLENDING_MIX";break;case Lu:t="ENVMAP_BLENDING_ADD";break}return t}function W0(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function X0(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=k0(e),l=H0(e),h=G0(e),d=V0(e),u=W0(e),p=I0(e),m=N0(s),v=i.createProgram();let f,g,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ls).join(`
`),f.length>0&&(f+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ls).join(`
`),g.length>0&&(g+=`
`)):(f=[dl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),g=[dl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?$t.tonemapping_pars_fragment:"",e.toneMapping!==oi?P0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,R0("linearToOutputTexel",e.outputColorSpace),L0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ls).join(`
`)),o=za(o),o=ll(o,e),o=hl(o,e),a=za(a),a=ll(a,e),a=hl(a,e),o=ul(o),a=ul(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,g=["#define varying in",e.glslVersion===Rc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Rc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=_+f+o,M=_+g+a,R=al(i,i.VERTEX_SHADER,y),A=al(i,i.FRAGMENT_SHADER,M);i.attachShader(v,R),i.attachShader(v,A),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function T(S){if(r.debug.checkShaderErrors){const k=i.getProgramInfoLog(v).trim(),L=i.getShaderInfoLog(R).trim(),F=i.getShaderInfoLog(A).trim();let O=!0,N=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(O=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,R,A);else{const Z=cl(i,R,"vertex"),z=cl(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+k+`
`+Z+`
`+z)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(L===""||F==="")&&(N=!1);N&&(S.diagnostics={runnable:O,programLog:k,vertexShader:{log:L,prefix:f},fragmentShader:{log:F,prefix:g}})}i.deleteShader(R),i.deleteShader(A),I=new Hr(i,v),q=D0(i,v)}let I;this.getUniforms=function(){return I===void 0&&T(this),I};let q;this.getAttributes=function(){return q===void 0&&T(this),q};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(v,b0)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=T0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=A,this}let q0=0;class Y0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new $0(t),e.set(t,n)),n}}class $0{constructor(t){this.id=q0++,this.code=t,this.usedTimes=0}}function K0(r,t,e,n,i,s,o){const a=new Mh,c=new Y0,l=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.reverseDepthBuffer,p=i.vertexTextures;let m=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,S,k,L,F){const O=L.fog,N=F.geometry,Z=x.isMeshStandardMaterial?L.environment:null,z=(x.isMeshStandardMaterial?e:t).get(x.envMap||Z),tt=z&&z.mapping===to?z.image.height:null,G=v[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const et=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,pt=et!==void 0?et.length:0;let Ot=0;N.morphAttributes.position!==void 0&&(Ot=1),N.morphAttributes.normal!==void 0&&(Ot=2),N.morphAttributes.color!==void 0&&(Ot=3);let J,ot,bt,vt;if(G){const Ie=Mn[G];J=Ie.vertexShader,ot=Ie.fragmentShader}else J=x.vertexShader,ot=x.fragmentShader,c.update(x),bt=c.getVertexShaderID(x),vt=c.getFragmentShaderID(x);const X=r.getRenderTarget(),st=F.isInstancedMesh===!0,_t=F.isBatchedMesh===!0,Et=!!x.map,K=!!x.matcap,C=!!z,ht=!!x.aoMap,mt=!!x.lightMap,ut=!!x.bumpMap,dt=!!x.normalMap,Ft=!!x.displacementMap,Mt=!!x.emissiveMap,P=!!x.metalnessMap,E=!!x.roughnessMap,W=x.anisotropy>0,nt=x.clearcoat>0,at=x.dispersion>0,it=x.iridescence>0,Lt=x.sheen>0,St=x.transmission>0,Ct=W&&!!x.anisotropyMap,Zt=nt&&!!x.clearcoatMap,U=nt&&!!x.clearcoatNormalMap,Q=nt&&!!x.clearcoatRoughnessMap,ct=it&&!!x.iridescenceMap,ft=it&&!!x.iridescenceThicknessMap,lt=Lt&&!!x.sheenColorMap,Nt=Lt&&!!x.sheenRoughnessMap,Dt=!!x.specularMap,Xt=!!x.specularColorMap,B=!!x.specularIntensityMap,xt=St&&!!x.transmissionMap,j=St&&!!x.thicknessMap,rt=!!x.gradientMap,wt=!!x.alphaMap,Tt=x.alphaTest>0,Qt=!!x.alphaHash,pe=!!x.extensions;let Le=oi;x.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Le=r.toneMapping);const ee={shaderID:G,shaderType:x.type,shaderName:x.name,vertexShader:J,fragmentShader:ot,defines:x.defines,customVertexShaderID:bt,customFragmentShaderID:vt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:_t,batchingColor:_t&&F._colorsTexture!==null,instancing:st,instancingColor:st&&F.instanceColor!==null,instancingMorph:st&&F.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:X===null?r.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:ci,alphaToCoverage:!!x.alphaToCoverage,map:Et,matcap:K,envMap:C,envMapMode:C&&z.mapping,envMapCubeUVHeight:tt,aoMap:ht,lightMap:mt,bumpMap:ut,normalMap:dt,displacementMap:p&&Ft,emissiveMap:Mt,normalMapObjectSpace:dt&&x.normalMapType===Hu,normalMapTangentSpace:dt&&x.normalMapType===mh,metalnessMap:P,roughnessMap:E,anisotropy:W,anisotropyMap:Ct,clearcoat:nt,clearcoatMap:Zt,clearcoatNormalMap:U,clearcoatRoughnessMap:Q,dispersion:at,iridescence:it,iridescenceMap:ct,iridescenceThicknessMap:ft,sheen:Lt,sheenColorMap:lt,sheenRoughnessMap:Nt,specularMap:Dt,specularColorMap:Xt,specularIntensityMap:B,transmission:St,transmissionMap:xt,thicknessMap:j,gradientMap:rt,opaque:x.transparent===!1&&x.blending===es&&x.alphaToCoverage===!1,alphaMap:wt,alphaTest:Tt,alphaHash:Qt,combine:x.combine,mapUv:Et&&f(x.map.channel),aoMapUv:ht&&f(x.aoMap.channel),lightMapUv:mt&&f(x.lightMap.channel),bumpMapUv:ut&&f(x.bumpMap.channel),normalMapUv:dt&&f(x.normalMap.channel),displacementMapUv:Ft&&f(x.displacementMap.channel),emissiveMapUv:Mt&&f(x.emissiveMap.channel),metalnessMapUv:P&&f(x.metalnessMap.channel),roughnessMapUv:E&&f(x.roughnessMap.channel),anisotropyMapUv:Ct&&f(x.anisotropyMap.channel),clearcoatMapUv:Zt&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:U&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&f(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&f(x.sheenRoughnessMap.channel),specularMapUv:Dt&&f(x.specularMap.channel),specularColorMapUv:Xt&&f(x.specularColorMap.channel),specularIntensityMapUv:B&&f(x.specularIntensityMap.channel),transmissionMapUv:xt&&f(x.transmissionMap.channel),thicknessMapUv:j&&f(x.thicknessMap.channel),alphaMapUv:wt&&f(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(dt||W),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!N.attributes.uv&&(Et||wt),fog:!!O,useFog:x.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:u,skinning:F.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:Ot,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:Le,decodeVideoTexture:Et&&x.map.isVideoTexture===!0&&re.getTransfer(x.map.colorSpace)===he,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===He,flipSided:x.side===Ve,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:pe&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&x.extensions.multiDraw===!0||_t)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ee.vertexUv1s=l.has(1),ee.vertexUv2s=l.has(2),ee.vertexUv3s=l.has(3),l.clear(),ee}function _(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const k in x.defines)S.push(k),S.push(x.defines[k]);return x.isRawShaderMaterial===!1&&(y(S,x),M(S,x),S.push(r.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function y(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function M(x,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),x.push(a.mask)}function R(x){const S=v[x.type];let k;if(S){const L=Mn[S];k=Th.clone(L.uniforms)}else k=x.uniforms;return k}function A(x,S){let k;for(let L=0,F=h.length;L<F;L++){const O=h[L];if(O.cacheKey===S){k=O,++k.usedTimes;break}}return k===void 0&&(k=new X0(r,S,x,s),h.push(k)),k}function T(x){if(--x.usedTimes===0){const S=h.indexOf(x);h[S]=h[h.length-1],h.pop(),x.destroy()}}function I(x){c.remove(x)}function q(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:R,acquireProgram:A,releaseProgram:T,releaseShaderCache:I,programs:h,dispose:q}}function j0(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,c){r.get(o)[a]=c}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function Z0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function fl(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function pl(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,p,m,v,f){let g=r[t];return g===void 0?(g={id:d.id,object:d,geometry:u,material:p,groupOrder:m,renderOrder:d.renderOrder,z:v,group:f},r[t]=g):(g.id=d.id,g.object=d,g.geometry=u,g.material=p,g.groupOrder=m,g.renderOrder=d.renderOrder,g.z=v,g.group=f),t++,g}function a(d,u,p,m,v,f){const g=o(d,u,p,m,v,f);p.transmission>0?n.push(g):p.transparent===!0?i.push(g):e.push(g)}function c(d,u,p,m,v,f){const g=o(d,u,p,m,v,f);p.transmission>0?n.unshift(g):p.transparent===!0?i.unshift(g):e.unshift(g)}function l(d,u){e.length>1&&e.sort(d||Z0),n.length>1&&n.sort(u||fl),i.length>1&&i.sort(u||fl)}function h(){for(let d=t,u=r.length;d<u;d++){const p=r[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function J0(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new pl,r.set(n,[o])):i>=s.length?(o=new pl,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Q0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new jt};break;case"SpotLight":e={position:new D,direction:new D,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new D,halfWidth:new D,halfHeight:new D};break}return r[t.id]=e,e}}}function tg(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let eg=0;function ng(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function ig(r){const t=new Q0,e=tg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const i=new D,s=new ae,o=new ae;function a(l){let h=0,d=0,u=0;for(let q=0;q<9;q++)n.probe[q].set(0,0,0);let p=0,m=0,v=0,f=0,g=0,_=0,y=0,M=0,R=0,A=0,T=0;l.sort(ng);for(let q=0,x=l.length;q<x;q++){const S=l[q],k=S.color,L=S.intensity,F=S.distance,O=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=k.r*L,d+=k.g*L,u+=k.b*L;else if(S.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(S.sh.coefficients[N],L);T++}else if(S.isDirectionalLight){const N=t.get(S);if(N.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const Z=S.shadow,z=e.get(S);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,n.directionalShadow[p]=z,n.directionalShadowMap[p]=O,n.directionalShadowMatrix[p]=S.shadow.matrix,_++}n.directional[p]=N,p++}else if(S.isSpotLight){const N=t.get(S);N.position.setFromMatrixPosition(S.matrixWorld),N.color.copy(k).multiplyScalar(L),N.distance=F,N.coneCos=Math.cos(S.angle),N.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),N.decay=S.decay,n.spot[v]=N;const Z=S.shadow;if(S.map&&(n.spotLightMap[R]=S.map,R++,Z.updateMatrices(S),S.castShadow&&A++),n.spotLightMatrix[v]=Z.matrix,S.castShadow){const z=e.get(S);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,n.spotShadow[v]=z,n.spotShadowMap[v]=O,M++}v++}else if(S.isRectAreaLight){const N=t.get(S);N.color.copy(k).multiplyScalar(L),N.halfWidth.set(S.width*.5,0,0),N.halfHeight.set(0,S.height*.5,0),n.rectArea[f]=N,f++}else if(S.isPointLight){const N=t.get(S);if(N.color.copy(S.color).multiplyScalar(S.intensity),N.distance=S.distance,N.decay=S.decay,S.castShadow){const Z=S.shadow,z=e.get(S);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,z.shadowCameraNear=Z.camera.near,z.shadowCameraFar=Z.camera.far,n.pointShadow[m]=z,n.pointShadowMap[m]=O,n.pointShadowMatrix[m]=S.shadow.matrix,y++}n.point[m]=N,m++}else if(S.isHemisphereLight){const N=t.get(S);N.skyColor.copy(S.color).multiplyScalar(L),N.groundColor.copy(S.groundColor).multiplyScalar(L),n.hemi[g]=N,g++}}f>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=At.LTC_FLOAT_1,n.rectAreaLTC2=At.LTC_FLOAT_2):(n.rectAreaLTC1=At.LTC_HALF_1,n.rectAreaLTC2=At.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const I=n.hash;(I.directionalLength!==p||I.pointLength!==m||I.spotLength!==v||I.rectAreaLength!==f||I.hemiLength!==g||I.numDirectionalShadows!==_||I.numPointShadows!==y||I.numSpotShadows!==M||I.numSpotMaps!==R||I.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=f,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,I.directionalLength=p,I.pointLength=m,I.spotLength=v,I.rectAreaLength=f,I.hemiLength=g,I.numDirectionalShadows=_,I.numPointShadows=y,I.numSpotShadows=M,I.numSpotMaps=R,I.numLightProbes=T,n.version=eg++)}function c(l,h){let d=0,u=0,p=0,m=0,v=0;const f=h.matrixWorldInverse;for(let g=0,_=l.length;g<_;g++){const y=l[g];if(y.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(f),d++}else if(y.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(f),p++}else if(y.isRectAreaLight){const M=n.rectArea[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(f),o.identity(),s.copy(y.matrixWorld),s.premultiply(f),o.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const M=n.point[u];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(f),u++}else if(y.isHemisphereLight){const M=n.hemi[v];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(f),v++}}}return{setup:a,setupView:c,state:n}}function ml(r){const t=new ig(r),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function sg(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new ml(r),t.set(i,[a])):s>=o.length?(a=new ml(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class rg extends vs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class og extends vs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ag=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function lg(r,t,e){let n=new ec;const i=new gt,s=new gt,o=new ge,a=new rg({depthPacking:ku}),c=new og,l={},h=e.maxTextureSize,d={[ai]:Ve,[Ve]:ai,[He]:He},u=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:ag,fragmentShader:cg}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const m=new ze;m.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Gt(m,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eh;let g=this.type;this.render=function(A,T,I){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||A.length===0)return;const q=r.getRenderTarget(),x=r.getActiveCubeFace(),S=r.getActiveMipmapLevel(),k=r.state;k.setBlending(ri),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const L=g!==kn&&this.type===kn,F=g===kn&&this.type!==kn;for(let O=0,N=A.length;O<N;O++){const Z=A[O],z=Z.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const tt=z.getFrameExtents();if(i.multiply(tt),s.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/tt.x),i.x=s.x*tt.x,z.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/tt.y),i.y=s.y*tt.y,z.mapSize.y=s.y)),z.map===null||L===!0||F===!0){const et=this.type!==kn?{minFilter:Ye,magFilter:Ye}:{};z.map!==null&&z.map.dispose(),z.map=new Ci(i.x,i.y,et),z.map.texture.name=Z.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const G=z.getViewportCount();for(let et=0;et<G;et++){const pt=z.getViewport(et);o.set(s.x*pt.x,s.y*pt.y,s.x*pt.z,s.y*pt.w),k.viewport(o),z.updateMatrices(Z,et),n=z.getFrustum(),M(T,I,z.camera,Z,this.type)}z.isPointLightShadow!==!0&&this.type===kn&&_(z,I),z.needsUpdate=!1}g=this.type,f.needsUpdate=!1,r.setRenderTarget(q,x,S)};function _(A,T){const I=t.update(v);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ci(i.x,i.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(T,null,I,u,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(T,null,I,p,v,null)}function y(A,T,I,q){let x=null;const S=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(S!==void 0)x=S;else if(x=I.isPointLight===!0?c:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const k=x.uuid,L=T.uuid;let F=l[k];F===void 0&&(F={},l[k]=F);let O=F[L];O===void 0&&(O=x.clone(),F[L]=O,T.addEventListener("dispose",R)),x=O}if(x.visible=T.visible,x.wireframe=T.wireframe,q===kn?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:d[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const k=r.properties.get(x);k.light=I}return x}function M(A,T,I,q,x){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===kn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const L=t.update(A),F=A.material;if(Array.isArray(F)){const O=L.groups;for(let N=0,Z=O.length;N<Z;N++){const z=O[N],tt=F[z.materialIndex];if(tt&&tt.visible){const G=y(A,tt,q,x);A.onBeforeShadow(r,A,T,I,L,G,z),r.renderBufferDirect(I,null,L,G,A,z),A.onAfterShadow(r,A,T,I,L,G,z)}}}else if(F.visible){const O=y(A,F,q,x);A.onBeforeShadow(r,A,T,I,L,O,null),r.renderBufferDirect(I,null,L,O,A,null),A.onAfterShadow(r,A,T,I,L,O,null)}}const k=A.children;for(let L=0,F=k.length;L<F;L++)M(k[L],T,I,q,x)}function R(A){A.target.removeEventListener("dispose",R);for(const I in l){const q=l[I],x=A.target.uuid;x in q&&(q[x].dispose(),delete q[x])}}}const hg={[ta]:ea,[na]:ra,[ia]:oa,[rs]:sa,[ea]:ta,[ra]:na,[oa]:ia,[sa]:rs};function ug(r){function t(){let B=!1;const xt=new ge;let j=null;const rt=new ge(0,0,0,0);return{setMask:function(wt){j!==wt&&!B&&(r.colorMask(wt,wt,wt,wt),j=wt)},setLocked:function(wt){B=wt},setClear:function(wt,Tt,Qt,pe,Le){Le===!0&&(wt*=pe,Tt*=pe,Qt*=pe),xt.set(wt,Tt,Qt,pe),rt.equals(xt)===!1&&(r.clearColor(wt,Tt,Qt,pe),rt.copy(xt))},reset:function(){B=!1,j=null,rt.set(-1,0,0,0)}}}function e(){let B=!1,xt=!1,j=null,rt=null,wt=null;return{setReversed:function(Tt){xt=Tt},setTest:function(Tt){Tt?bt(r.DEPTH_TEST):vt(r.DEPTH_TEST)},setMask:function(Tt){j!==Tt&&!B&&(r.depthMask(Tt),j=Tt)},setFunc:function(Tt){if(xt&&(Tt=hg[Tt]),rt!==Tt){switch(Tt){case ta:r.depthFunc(r.NEVER);break;case ea:r.depthFunc(r.ALWAYS);break;case na:r.depthFunc(r.LESS);break;case rs:r.depthFunc(r.LEQUAL);break;case ia:r.depthFunc(r.EQUAL);break;case sa:r.depthFunc(r.GEQUAL);break;case ra:r.depthFunc(r.GREATER);break;case oa:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}rt=Tt}},setLocked:function(Tt){B=Tt},setClear:function(Tt){wt!==Tt&&(r.clearDepth(Tt),wt=Tt)},reset:function(){B=!1,j=null,rt=null,wt=null}}}function n(){let B=!1,xt=null,j=null,rt=null,wt=null,Tt=null,Qt=null,pe=null,Le=null;return{setTest:function(ee){B||(ee?bt(r.STENCIL_TEST):vt(r.STENCIL_TEST))},setMask:function(ee){xt!==ee&&!B&&(r.stencilMask(ee),xt=ee)},setFunc:function(ee,Ie,Ne){(j!==ee||rt!==Ie||wt!==Ne)&&(r.stencilFunc(ee,Ie,Ne),j=ee,rt=Ie,wt=Ne)},setOp:function(ee,Ie,Ne){(Tt!==ee||Qt!==Ie||pe!==Ne)&&(r.stencilOp(ee,Ie,Ne),Tt=ee,Qt=Ie,pe=Ne)},setLocked:function(ee){B=ee},setClear:function(ee){Le!==ee&&(r.clearStencil(ee),Le=ee)},reset:function(){B=!1,xt=null,j=null,rt=null,wt=null,Tt=null,Qt=null,pe=null,Le=null}}}const i=new t,s=new e,o=new n,a=new WeakMap,c=new WeakMap;let l={},h={},d=new WeakMap,u=[],p=null,m=!1,v=null,f=null,g=null,_=null,y=null,M=null,R=null,A=new jt(0,0,0),T=0,I=!1,q=null,x=null,S=null,k=null,L=null;const F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,N=0;const Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(Z)[1]),O=N>=1):Z.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),O=N>=2);let z=null,tt={};const G=r.getParameter(r.SCISSOR_BOX),et=r.getParameter(r.VIEWPORT),pt=new ge().fromArray(G),Ot=new ge().fromArray(et);function J(B,xt,j,rt){const wt=new Uint8Array(4),Tt=r.createTexture();r.bindTexture(B,Tt),r.texParameteri(B,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(B,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Qt=0;Qt<j;Qt++)B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY?r.texImage3D(xt,0,r.RGBA,1,1,rt,0,r.RGBA,r.UNSIGNED_BYTE,wt):r.texImage2D(xt+Qt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,wt);return Tt}const ot={};ot[r.TEXTURE_2D]=J(r.TEXTURE_2D,r.TEXTURE_2D,1),ot[r.TEXTURE_CUBE_MAP]=J(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[r.TEXTURE_2D_ARRAY]=J(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ot[r.TEXTURE_3D]=J(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),bt(r.DEPTH_TEST),s.setFunc(rs),mt(!1),ut(wc),bt(r.CULL_FACE),C(ri);function bt(B){l[B]!==!0&&(r.enable(B),l[B]=!0)}function vt(B){l[B]!==!1&&(r.disable(B),l[B]=!1)}function X(B,xt){return h[B]!==xt?(r.bindFramebuffer(B,xt),h[B]=xt,B===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=xt),B===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=xt),!0):!1}function st(B,xt){let j=u,rt=!1;if(B){j=d.get(xt),j===void 0&&(j=[],d.set(xt,j));const wt=B.textures;if(j.length!==wt.length||j[0]!==r.COLOR_ATTACHMENT0){for(let Tt=0,Qt=wt.length;Tt<Qt;Tt++)j[Tt]=r.COLOR_ATTACHMENT0+Tt;j.length=wt.length,rt=!0}}else j[0]!==r.BACK&&(j[0]=r.BACK,rt=!0);rt&&r.drawBuffers(j)}function _t(B){return p!==B?(r.useProgram(B),p=B,!0):!1}const Et={[yi]:r.FUNC_ADD,[fu]:r.FUNC_SUBTRACT,[pu]:r.FUNC_REVERSE_SUBTRACT};Et[mu]=r.MIN,Et[gu]=r.MAX;const K={[vu]:r.ZERO,[_u]:r.ONE,[xu]:r.SRC_COLOR,[Jo]:r.SRC_ALPHA,[bu]:r.SRC_ALPHA_SATURATE,[wu]:r.DST_COLOR,[Mu]:r.DST_ALPHA,[yu]:r.ONE_MINUS_SRC_COLOR,[Qo]:r.ONE_MINUS_SRC_ALPHA,[Eu]:r.ONE_MINUS_DST_COLOR,[Su]:r.ONE_MINUS_DST_ALPHA,[Tu]:r.CONSTANT_COLOR,[Au]:r.ONE_MINUS_CONSTANT_COLOR,[Cu]:r.CONSTANT_ALPHA,[Ru]:r.ONE_MINUS_CONSTANT_ALPHA};function C(B,xt,j,rt,wt,Tt,Qt,pe,Le,ee){if(B===ri){m===!0&&(vt(r.BLEND),m=!1);return}if(m===!1&&(bt(r.BLEND),m=!0),B!==du){if(B!==v||ee!==I){if((f!==yi||y!==yi)&&(r.blendEquation(r.FUNC_ADD),f=yi,y=yi),ee)switch(B){case es:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ec:r.blendFunc(r.ONE,r.ONE);break;case bc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Tc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case es:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ec:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case bc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Tc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}g=null,_=null,M=null,R=null,A.set(0,0,0),T=0,v=B,I=ee}return}wt=wt||xt,Tt=Tt||j,Qt=Qt||rt,(xt!==f||wt!==y)&&(r.blendEquationSeparate(Et[xt],Et[wt]),f=xt,y=wt),(j!==g||rt!==_||Tt!==M||Qt!==R)&&(r.blendFuncSeparate(K[j],K[rt],K[Tt],K[Qt]),g=j,_=rt,M=Tt,R=Qt),(pe.equals(A)===!1||Le!==T)&&(r.blendColor(pe.r,pe.g,pe.b,Le),A.copy(pe),T=Le),v=B,I=!1}function ht(B,xt){B.side===He?vt(r.CULL_FACE):bt(r.CULL_FACE);let j=B.side===Ve;xt&&(j=!j),mt(j),B.blending===es&&B.transparent===!1?C(ri):C(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),s.setFunc(B.depthFunc),s.setTest(B.depthTest),s.setMask(B.depthWrite),i.setMask(B.colorWrite);const rt=B.stencilWrite;o.setTest(rt),rt&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ft(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?bt(r.SAMPLE_ALPHA_TO_COVERAGE):vt(r.SAMPLE_ALPHA_TO_COVERAGE)}function mt(B){q!==B&&(B?r.frontFace(r.CW):r.frontFace(r.CCW),q=B)}function ut(B){B!==hu?(bt(r.CULL_FACE),B!==x&&(B===wc?r.cullFace(r.BACK):B===uu?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):vt(r.CULL_FACE),x=B}function dt(B){B!==S&&(O&&r.lineWidth(B),S=B)}function Ft(B,xt,j){B?(bt(r.POLYGON_OFFSET_FILL),(k!==xt||L!==j)&&(r.polygonOffset(xt,j),k=xt,L=j)):vt(r.POLYGON_OFFSET_FILL)}function Mt(B){B?bt(r.SCISSOR_TEST):vt(r.SCISSOR_TEST)}function P(B){B===void 0&&(B=r.TEXTURE0+F-1),z!==B&&(r.activeTexture(B),z=B)}function E(B,xt,j){j===void 0&&(z===null?j=r.TEXTURE0+F-1:j=z);let rt=tt[j];rt===void 0&&(rt={type:void 0,texture:void 0},tt[j]=rt),(rt.type!==B||rt.texture!==xt)&&(z!==j&&(r.activeTexture(j),z=j),r.bindTexture(B,xt||ot[B]),rt.type=B,rt.texture=xt)}function W(){const B=tt[z];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function nt(){try{r.compressedTexImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function at(){try{r.compressedTexImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function it(){try{r.texSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Lt(){try{r.texSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function St(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ct(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Zt(){try{r.texStorage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function U(){try{r.texStorage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Q(){try{r.texImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ct(){try{r.texImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ft(B){pt.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),pt.copy(B))}function lt(B){Ot.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),Ot.copy(B))}function Nt(B,xt){let j=c.get(xt);j===void 0&&(j=new WeakMap,c.set(xt,j));let rt=j.get(B);rt===void 0&&(rt=r.getUniformBlockIndex(xt,B.name),j.set(B,rt))}function Dt(B,xt){const rt=c.get(xt).get(B);a.get(xt)!==rt&&(r.uniformBlockBinding(xt,rt,B.__bindingPointIndex),a.set(xt,rt))}function Xt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),l={},z=null,tt={},h={},d=new WeakMap,u=[],p=null,m=!1,v=null,f=null,g=null,_=null,y=null,M=null,R=null,A=new jt(0,0,0),T=0,I=!1,q=null,x=null,S=null,k=null,L=null,pt.set(0,0,r.canvas.width,r.canvas.height),Ot.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:bt,disable:vt,bindFramebuffer:X,drawBuffers:st,useProgram:_t,setBlending:C,setMaterial:ht,setFlipSided:mt,setCullFace:ut,setLineWidth:dt,setPolygonOffset:Ft,setScissorTest:Mt,activeTexture:P,bindTexture:E,unbindTexture:W,compressedTexImage2D:nt,compressedTexImage3D:at,texImage2D:Q,texImage3D:ct,updateUBOMapping:Nt,uniformBlockBinding:Dt,texStorage2D:Zt,texStorage3D:U,texSubImage2D:it,texSubImage3D:Lt,compressedTexSubImage2D:St,compressedTexSubImage3D:Ct,scissor:ft,viewport:lt,reset:Xt}}function gl(r,t,e,n){const i=dg(n);switch(e){case lh:return r*t;case uh:return r*t;case dh:return r*t*2;case Ka:return r*t/i.components*i.byteLength;case ja:return r*t/i.components*i.byteLength;case fh:return r*t*2/i.components*i.byteLength;case Za:return r*t*2/i.components*i.byteLength;case hh:return r*t*3/i.components*i.byteLength;case pn:return r*t*4/i.components*i.byteLength;case Ja:return r*t*4/i.components*i.byteLength;case Ur:case Fr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Or:case zr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ua:case fa:return Math.max(r,16)*Math.max(t,8)/4;case ha:case da:return Math.max(r,8)*Math.max(t,8)/2;case pa:case ma:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ga:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case va:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case _a:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case xa:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case ya:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Ma:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Sa:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case wa:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Ea:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case ba:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Ta:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Aa:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Ca:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Ra:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Pa:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Br:case La:case Ia:return Math.ceil(r/4)*Math.ceil(t/4)*16;case ph:case Na:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Da:case Ua:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function dg(r){switch(r){case Xn:case oh:return{byteLength:1,components:1};case Hs:case ah:case $s:return{byteLength:2,components:1};case Ya:case $a:return{byteLength:2,components:4};case Ai:case qa:case wn:return{byteLength:4,components:1};case ch:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function fg(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new gt,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,E){return p?new OffscreenCanvas(P,E):$r("canvas")}function v(P,E,W){let nt=1;const at=Mt(P);if((at.width>W||at.height>W)&&(nt=W/Math.max(at.width,at.height)),nt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const it=Math.floor(nt*at.width),Lt=Math.floor(nt*at.height);d===void 0&&(d=m(it,Lt));const St=E?m(it,Lt):d;return St.width=it,St.height=Lt,St.getContext("2d").drawImage(P,0,0,it,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+it+"x"+Lt+")."),St}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),P;return P}function f(P){return P.generateMipmaps&&P.minFilter!==Ye&&P.minFilter!==dn}function g(P){r.generateMipmap(P)}function _(P,E,W,nt,at=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let it=E;if(E===r.RED&&(W===r.FLOAT&&(it=r.R32F),W===r.HALF_FLOAT&&(it=r.R16F),W===r.UNSIGNED_BYTE&&(it=r.R8)),E===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(it=r.R8UI),W===r.UNSIGNED_SHORT&&(it=r.R16UI),W===r.UNSIGNED_INT&&(it=r.R32UI),W===r.BYTE&&(it=r.R8I),W===r.SHORT&&(it=r.R16I),W===r.INT&&(it=r.R32I)),E===r.RG&&(W===r.FLOAT&&(it=r.RG32F),W===r.HALF_FLOAT&&(it=r.RG16F),W===r.UNSIGNED_BYTE&&(it=r.RG8)),E===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(it=r.RG8UI),W===r.UNSIGNED_SHORT&&(it=r.RG16UI),W===r.UNSIGNED_INT&&(it=r.RG32UI),W===r.BYTE&&(it=r.RG8I),W===r.SHORT&&(it=r.RG16I),W===r.INT&&(it=r.RG32I)),E===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&(it=r.RGB8UI),W===r.UNSIGNED_SHORT&&(it=r.RGB16UI),W===r.UNSIGNED_INT&&(it=r.RGB32UI),W===r.BYTE&&(it=r.RGB8I),W===r.SHORT&&(it=r.RGB16I),W===r.INT&&(it=r.RGB32I)),E===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&(it=r.RGBA8UI),W===r.UNSIGNED_SHORT&&(it=r.RGBA16UI),W===r.UNSIGNED_INT&&(it=r.RGBA32UI),W===r.BYTE&&(it=r.RGBA8I),W===r.SHORT&&(it=r.RGBA16I),W===r.INT&&(it=r.RGBA32I)),E===r.RGB&&W===r.UNSIGNED_INT_5_9_9_9_REV&&(it=r.RGB9_E5),E===r.RGBA){const Lt=at?Wr:re.getTransfer(nt);W===r.FLOAT&&(it=r.RGBA32F),W===r.HALF_FLOAT&&(it=r.RGBA16F),W===r.UNSIGNED_BYTE&&(it=Lt===he?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&(it=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(it=r.RGB5_A1)}return(it===r.R16F||it===r.R32F||it===r.RG16F||it===r.RG32F||it===r.RGBA16F||it===r.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function y(P,E){let W;return P?E===null||E===Ai||E===cs?W=r.DEPTH24_STENCIL8:E===wn?W=r.DEPTH32F_STENCIL8:E===Hs&&(W=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ai||E===cs?W=r.DEPTH_COMPONENT24:E===wn?W=r.DEPTH_COMPONENT32F:E===Hs&&(W=r.DEPTH_COMPONENT16),W}function M(P,E){return f(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ye&&P.minFilter!==dn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function R(P){const E=P.target;E.removeEventListener("dispose",R),T(E),E.isVideoTexture&&h.delete(E)}function A(P){const E=P.target;E.removeEventListener("dispose",A),q(E)}function T(P){const E=n.get(P);if(E.__webglInit===void 0)return;const W=P.source,nt=u.get(W);if(nt){const at=nt[E.__cacheKey];at.usedTimes--,at.usedTimes===0&&I(P),Object.keys(nt).length===0&&u.delete(W)}n.remove(P)}function I(P){const E=n.get(P);r.deleteTexture(E.__webglTexture);const W=P.source,nt=u.get(W);delete nt[E.__cacheKey],o.memory.textures--}function q(P){const E=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(E.__webglFramebuffer[nt]))for(let at=0;at<E.__webglFramebuffer[nt].length;at++)r.deleteFramebuffer(E.__webglFramebuffer[nt][at]);else r.deleteFramebuffer(E.__webglFramebuffer[nt]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[nt])}else{if(Array.isArray(E.__webglFramebuffer))for(let nt=0;nt<E.__webglFramebuffer.length;nt++)r.deleteFramebuffer(E.__webglFramebuffer[nt]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let nt=0;nt<E.__webglColorRenderbuffer.length;nt++)E.__webglColorRenderbuffer[nt]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[nt]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=P.textures;for(let nt=0,at=W.length;nt<at;nt++){const it=n.get(W[nt]);it.__webglTexture&&(r.deleteTexture(it.__webglTexture),o.memory.textures--),n.remove(W[nt])}n.remove(P)}let x=0;function S(){x=0}function k(){const P=x;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),x+=1,P}function L(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function F(P,E){const W=n.get(P);if(P.isVideoTexture&&dt(P),P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){const nt=P.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ot(W,P,E);return}}e.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+E)}function O(P,E){const W=n.get(P);if(P.version>0&&W.__version!==P.version){Ot(W,P,E);return}e.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+E)}function N(P,E){const W=n.get(P);if(P.version>0&&W.__version!==P.version){Ot(W,P,E);return}e.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+E)}function Z(P,E){const W=n.get(P);if(P.version>0&&W.__version!==P.version){J(W,P,E);return}e.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+E)}const z={[Vr]:r.REPEAT,[wi]:r.CLAMP_TO_EDGE,[la]:r.MIRRORED_REPEAT},tt={[Ye]:r.NEAREST,[zu]:r.NEAREST_MIPMAP_NEAREST,[Qs]:r.NEAREST_MIPMAP_LINEAR,[dn]:r.LINEAR,[ho]:r.LINEAR_MIPMAP_NEAREST,[Ei]:r.LINEAR_MIPMAP_LINEAR},G={[Gu]:r.NEVER,[$u]:r.ALWAYS,[Vu]:r.LESS,[gh]:r.LEQUAL,[Wu]:r.EQUAL,[Yu]:r.GEQUAL,[Xu]:r.GREATER,[qu]:r.NOTEQUAL};function et(P,E){if(E.type===wn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===dn||E.magFilter===ho||E.magFilter===Qs||E.magFilter===Ei||E.minFilter===dn||E.minFilter===ho||E.minFilter===Qs||E.minFilter===Ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,z[E.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,z[E.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,z[E.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,tt[E.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,tt[E.minFilter]),E.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,G[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ye||E.minFilter!==Qs&&E.minFilter!==Ei||E.type===wn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function pt(P,E){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",R));const nt=E.source;let at=u.get(nt);at===void 0&&(at={},u.set(nt,at));const it=L(E);if(it!==P.__cacheKey){at[it]===void 0&&(at[it]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,W=!0),at[it].usedTimes++;const Lt=at[P.__cacheKey];Lt!==void 0&&(at[P.__cacheKey].usedTimes--,Lt.usedTimes===0&&I(E)),P.__cacheKey=it,P.__webglTexture=at[it].texture}return W}function Ot(P,E,W){let nt=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(nt=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(nt=r.TEXTURE_3D);const at=pt(P,E),it=E.source;e.bindTexture(nt,P.__webglTexture,r.TEXTURE0+W);const Lt=n.get(it);if(it.version!==Lt.__version||at===!0){e.activeTexture(r.TEXTURE0+W);const St=re.getPrimaries(re.workingColorSpace),Ct=E.colorSpace===ni?null:re.getPrimaries(E.colorSpace),Zt=E.colorSpace===ni||St===Ct?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let U=v(E.image,!1,i.maxTextureSize);U=Ft(E,U);const Q=s.convert(E.format,E.colorSpace),ct=s.convert(E.type);let ft=_(E.internalFormat,Q,ct,E.colorSpace,E.isVideoTexture);et(nt,E);let lt;const Nt=E.mipmaps,Dt=E.isVideoTexture!==!0,Xt=Lt.__version===void 0||at===!0,B=it.dataReady,xt=M(E,U);if(E.isDepthTexture)ft=y(E.format===ls,E.type),Xt&&(Dt?e.texStorage2D(r.TEXTURE_2D,1,ft,U.width,U.height):e.texImage2D(r.TEXTURE_2D,0,ft,U.width,U.height,0,Q,ct,null));else if(E.isDataTexture)if(Nt.length>0){Dt&&Xt&&e.texStorage2D(r.TEXTURE_2D,xt,ft,Nt[0].width,Nt[0].height);for(let j=0,rt=Nt.length;j<rt;j++)lt=Nt[j],Dt?B&&e.texSubImage2D(r.TEXTURE_2D,j,0,0,lt.width,lt.height,Q,ct,lt.data):e.texImage2D(r.TEXTURE_2D,j,ft,lt.width,lt.height,0,Q,ct,lt.data);E.generateMipmaps=!1}else Dt?(Xt&&e.texStorage2D(r.TEXTURE_2D,xt,ft,U.width,U.height),B&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,U.width,U.height,Q,ct,U.data)):e.texImage2D(r.TEXTURE_2D,0,ft,U.width,U.height,0,Q,ct,U.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Dt&&Xt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,xt,ft,Nt[0].width,Nt[0].height,U.depth);for(let j=0,rt=Nt.length;j<rt;j++)if(lt=Nt[j],E.format!==pn)if(Q!==null)if(Dt){if(B)if(E.layerUpdates.size>0){const wt=gl(lt.width,lt.height,E.format,E.type);for(const Tt of E.layerUpdates){const Qt=lt.data.subarray(Tt*wt/lt.data.BYTES_PER_ELEMENT,(Tt+1)*wt/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,Tt,lt.width,lt.height,1,Q,Qt,0,0)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,lt.width,lt.height,U.depth,Q,lt.data,0,0)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,j,ft,lt.width,lt.height,U.depth,0,lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?B&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,lt.width,lt.height,U.depth,Q,ct,lt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,j,ft,lt.width,lt.height,U.depth,0,Q,ct,lt.data)}else{Dt&&Xt&&e.texStorage2D(r.TEXTURE_2D,xt,ft,Nt[0].width,Nt[0].height);for(let j=0,rt=Nt.length;j<rt;j++)lt=Nt[j],E.format!==pn?Q!==null?Dt?B&&e.compressedTexSubImage2D(r.TEXTURE_2D,j,0,0,lt.width,lt.height,Q,lt.data):e.compressedTexImage2D(r.TEXTURE_2D,j,ft,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?B&&e.texSubImage2D(r.TEXTURE_2D,j,0,0,lt.width,lt.height,Q,ct,lt.data):e.texImage2D(r.TEXTURE_2D,j,ft,lt.width,lt.height,0,Q,ct,lt.data)}else if(E.isDataArrayTexture)if(Dt){if(Xt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,xt,ft,U.width,U.height,U.depth),B)if(E.layerUpdates.size>0){const j=gl(U.width,U.height,E.format,E.type);for(const rt of E.layerUpdates){const wt=U.data.subarray(rt*j/U.data.BYTES_PER_ELEMENT,(rt+1)*j/U.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,rt,U.width,U.height,1,Q,ct,wt)}E.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,U.width,U.height,U.depth,Q,ct,U.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,ft,U.width,U.height,U.depth,0,Q,ct,U.data);else if(E.isData3DTexture)Dt?(Xt&&e.texStorage3D(r.TEXTURE_3D,xt,ft,U.width,U.height,U.depth),B&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,U.width,U.height,U.depth,Q,ct,U.data)):e.texImage3D(r.TEXTURE_3D,0,ft,U.width,U.height,U.depth,0,Q,ct,U.data);else if(E.isFramebufferTexture){if(Xt)if(Dt)e.texStorage2D(r.TEXTURE_2D,xt,ft,U.width,U.height);else{let j=U.width,rt=U.height;for(let wt=0;wt<xt;wt++)e.texImage2D(r.TEXTURE_2D,wt,ft,j,rt,0,Q,ct,null),j>>=1,rt>>=1}}else if(Nt.length>0){if(Dt&&Xt){const j=Mt(Nt[0]);e.texStorage2D(r.TEXTURE_2D,xt,ft,j.width,j.height)}for(let j=0,rt=Nt.length;j<rt;j++)lt=Nt[j],Dt?B&&e.texSubImage2D(r.TEXTURE_2D,j,0,0,Q,ct,lt):e.texImage2D(r.TEXTURE_2D,j,ft,Q,ct,lt);E.generateMipmaps=!1}else if(Dt){if(Xt){const j=Mt(U);e.texStorage2D(r.TEXTURE_2D,xt,ft,j.width,j.height)}B&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Q,ct,U)}else e.texImage2D(r.TEXTURE_2D,0,ft,Q,ct,U);f(E)&&g(nt),Lt.__version=it.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function J(P,E,W){if(E.image.length!==6)return;const nt=pt(P,E),at=E.source;e.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+W);const it=n.get(at);if(at.version!==it.__version||nt===!0){e.activeTexture(r.TEXTURE0+W);const Lt=re.getPrimaries(re.workingColorSpace),St=E.colorSpace===ni?null:re.getPrimaries(E.colorSpace),Ct=E.colorSpace===ni||Lt===St?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);const Zt=E.isCompressedTexture||E.image[0].isCompressedTexture,U=E.image[0]&&E.image[0].isDataTexture,Q=[];for(let rt=0;rt<6;rt++)!Zt&&!U?Q[rt]=v(E.image[rt],!0,i.maxCubemapSize):Q[rt]=U?E.image[rt].image:E.image[rt],Q[rt]=Ft(E,Q[rt]);const ct=Q[0],ft=s.convert(E.format,E.colorSpace),lt=s.convert(E.type),Nt=_(E.internalFormat,ft,lt,E.colorSpace),Dt=E.isVideoTexture!==!0,Xt=it.__version===void 0||nt===!0,B=at.dataReady;let xt=M(E,ct);et(r.TEXTURE_CUBE_MAP,E);let j;if(Zt){Dt&&Xt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,xt,Nt,ct.width,ct.height);for(let rt=0;rt<6;rt++){j=Q[rt].mipmaps;for(let wt=0;wt<j.length;wt++){const Tt=j[wt];E.format!==pn?ft!==null?Dt?B&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt,0,0,Tt.width,Tt.height,ft,Tt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt,Nt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?B&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt,0,0,Tt.width,Tt.height,ft,lt,Tt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt,Nt,Tt.width,Tt.height,0,ft,lt,Tt.data)}}}else{if(j=E.mipmaps,Dt&&Xt){j.length>0&&xt++;const rt=Mt(Q[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,xt,Nt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(U){Dt?B&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Q[rt].width,Q[rt].height,ft,lt,Q[rt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Nt,Q[rt].width,Q[rt].height,0,ft,lt,Q[rt].data);for(let wt=0;wt<j.length;wt++){const Qt=j[wt].image[rt].image;Dt?B&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt+1,0,0,Qt.width,Qt.height,ft,lt,Qt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt+1,Nt,Qt.width,Qt.height,0,ft,lt,Qt.data)}}else{Dt?B&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,ft,lt,Q[rt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Nt,ft,lt,Q[rt]);for(let wt=0;wt<j.length;wt++){const Tt=j[wt];Dt?B&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt+1,0,0,ft,lt,Tt.image[rt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt+1,Nt,ft,lt,Tt.image[rt])}}}f(E)&&g(r.TEXTURE_CUBE_MAP),it.__version=at.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ot(P,E,W,nt,at,it){const Lt=s.convert(W.format,W.colorSpace),St=s.convert(W.type),Ct=_(W.internalFormat,Lt,St,W.colorSpace);if(!n.get(E).__hasExternalTextures){const U=Math.max(1,E.width>>it),Q=Math.max(1,E.height>>it);at===r.TEXTURE_3D||at===r.TEXTURE_2D_ARRAY?e.texImage3D(at,it,Ct,U,Q,E.depth,0,Lt,St,null):e.texImage2D(at,it,Ct,U,Q,0,Lt,St,null)}e.bindFramebuffer(r.FRAMEBUFFER,P),ut(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,nt,at,n.get(W).__webglTexture,0,mt(E)):(at===r.TEXTURE_2D||at>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,nt,at,n.get(W).__webglTexture,it),e.bindFramebuffer(r.FRAMEBUFFER,null)}function bt(P,E,W){if(r.bindRenderbuffer(r.RENDERBUFFER,P),E.depthBuffer){const nt=E.depthTexture,at=nt&&nt.isDepthTexture?nt.type:null,it=y(E.stencilBuffer,at),Lt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,St=mt(E);ut(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,St,it,E.width,E.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,St,it,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,it,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Lt,r.RENDERBUFFER,P)}else{const nt=E.textures;for(let at=0;at<nt.length;at++){const it=nt[at],Lt=s.convert(it.format,it.colorSpace),St=s.convert(it.type),Ct=_(it.internalFormat,Lt,St,it.colorSpace),Zt=mt(E);W&&ut(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Zt,Ct,E.width,E.height):ut(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Zt,Ct,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Ct,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function vt(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),F(E.depthTexture,0);const nt=n.get(E.depthTexture).__webglTexture,at=mt(E);if(E.depthTexture.format===ns)ut(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,nt,0,at):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,nt,0);else if(E.depthTexture.format===ls)ut(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,nt,0,at):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function X(P){const E=n.get(P),W=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const nt=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),nt){const at=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,nt.removeEventListener("dispose",at)};nt.addEventListener("dispose",at),E.__depthDisposeCallback=at}E.__boundDepthTexture=nt}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");vt(E.__webglFramebuffer,P)}else if(W){E.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[nt]),E.__webglDepthbuffer[nt]===void 0)E.__webglDepthbuffer[nt]=r.createRenderbuffer(),bt(E.__webglDepthbuffer[nt],P,!1);else{const at=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,it=E.__webglDepthbuffer[nt];r.bindRenderbuffer(r.RENDERBUFFER,it),r.framebufferRenderbuffer(r.FRAMEBUFFER,at,r.RENDERBUFFER,it)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),bt(E.__webglDepthbuffer,P,!1);else{const nt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,at=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,at),r.framebufferRenderbuffer(r.FRAMEBUFFER,nt,r.RENDERBUFFER,at)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function st(P,E,W){const nt=n.get(P);E!==void 0&&ot(nt.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&X(P)}function _t(P){const E=P.texture,W=n.get(P),nt=n.get(E);P.addEventListener("dispose",A);const at=P.textures,it=P.isWebGLCubeRenderTarget===!0,Lt=at.length>1;if(Lt||(nt.__webglTexture===void 0&&(nt.__webglTexture=r.createTexture()),nt.__version=E.version,o.memory.textures++),it){W.__webglFramebuffer=[];for(let St=0;St<6;St++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[St]=[];for(let Ct=0;Ct<E.mipmaps.length;Ct++)W.__webglFramebuffer[St][Ct]=r.createFramebuffer()}else W.__webglFramebuffer[St]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let St=0;St<E.mipmaps.length;St++)W.__webglFramebuffer[St]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(Lt)for(let St=0,Ct=at.length;St<Ct;St++){const Zt=n.get(at[St]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=r.createTexture(),o.memory.textures++)}if(P.samples>0&&ut(P)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let St=0;St<at.length;St++){const Ct=at[St];W.__webglColorRenderbuffer[St]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[St]);const Zt=s.convert(Ct.format,Ct.colorSpace),U=s.convert(Ct.type),Q=_(Ct.internalFormat,Zt,U,Ct.colorSpace,P.isXRRenderTarget===!0),ct=mt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,ct,Q,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+St,r.RENDERBUFFER,W.__webglColorRenderbuffer[St])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),bt(W.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(it){e.bindTexture(r.TEXTURE_CUBE_MAP,nt.__webglTexture),et(r.TEXTURE_CUBE_MAP,E);for(let St=0;St<6;St++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ct=0;Ct<E.mipmaps.length;Ct++)ot(W.__webglFramebuffer[St][Ct],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ct);else ot(W.__webglFramebuffer[St],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0);f(E)&&g(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let St=0,Ct=at.length;St<Ct;St++){const Zt=at[St],U=n.get(Zt);e.bindTexture(r.TEXTURE_2D,U.__webglTexture),et(r.TEXTURE_2D,Zt),ot(W.__webglFramebuffer,P,Zt,r.COLOR_ATTACHMENT0+St,r.TEXTURE_2D,0),f(Zt)&&g(r.TEXTURE_2D)}e.unbindTexture()}else{let St=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(St=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(St,nt.__webglTexture),et(St,E),E.mipmaps&&E.mipmaps.length>0)for(let Ct=0;Ct<E.mipmaps.length;Ct++)ot(W.__webglFramebuffer[Ct],P,E,r.COLOR_ATTACHMENT0,St,Ct);else ot(W.__webglFramebuffer,P,E,r.COLOR_ATTACHMENT0,St,0);f(E)&&g(St),e.unbindTexture()}P.depthBuffer&&X(P)}function Et(P){const E=P.textures;for(let W=0,nt=E.length;W<nt;W++){const at=E[W];if(f(at)){const it=P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Lt=n.get(at).__webglTexture;e.bindTexture(it,Lt),g(it),e.unbindTexture()}}}const K=[],C=[];function ht(P){if(P.samples>0){if(ut(P)===!1){const E=P.textures,W=P.width,nt=P.height;let at=r.COLOR_BUFFER_BIT;const it=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Lt=n.get(P),St=E.length>1;if(St)for(let Ct=0;Ct<E.length;Ct++)e.bindFramebuffer(r.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Lt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Ct=0;Ct<E.length;Ct++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(at|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(at|=r.STENCIL_BUFFER_BIT)),St){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Lt.__webglColorRenderbuffer[Ct]);const Zt=n.get(E[Ct]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Zt,0)}r.blitFramebuffer(0,0,W,nt,0,0,W,nt,at,r.NEAREST),c===!0&&(K.length=0,C.length=0,K.push(r.COLOR_ATTACHMENT0+Ct),P.depthBuffer&&P.resolveDepthBuffer===!1&&(K.push(it),C.push(it),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,C)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,K))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),St)for(let Ct=0;Ct<E.length;Ct++){e.bindFramebuffer(r.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.RENDERBUFFER,Lt.__webglColorRenderbuffer[Ct]);const Zt=n.get(E[Ct]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Lt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.TEXTURE_2D,Zt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const E=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function mt(P){return Math.min(i.maxSamples,P.samples)}function ut(P){const E=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function dt(P){const E=o.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function Ft(P,E){const W=P.colorSpace,nt=P.format,at=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==ci&&W!==ni&&(re.getTransfer(W)===he?(nt!==pn||at!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}function Mt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=S,this.setTexture2D=F,this.setTexture2DArray=O,this.setTexture3D=N,this.setTextureCube=Z,this.rebindTextures=st,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=X,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=ut}function pg(r,t){function e(n,i=ni){let s;const o=re.getTransfer(i);if(n===Xn)return r.UNSIGNED_BYTE;if(n===Ya)return r.UNSIGNED_SHORT_4_4_4_4;if(n===$a)return r.UNSIGNED_SHORT_5_5_5_1;if(n===ch)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===oh)return r.BYTE;if(n===ah)return r.SHORT;if(n===Hs)return r.UNSIGNED_SHORT;if(n===qa)return r.INT;if(n===Ai)return r.UNSIGNED_INT;if(n===wn)return r.FLOAT;if(n===$s)return r.HALF_FLOAT;if(n===lh)return r.ALPHA;if(n===hh)return r.RGB;if(n===pn)return r.RGBA;if(n===uh)return r.LUMINANCE;if(n===dh)return r.LUMINANCE_ALPHA;if(n===ns)return r.DEPTH_COMPONENT;if(n===ls)return r.DEPTH_STENCIL;if(n===Ka)return r.RED;if(n===ja)return r.RED_INTEGER;if(n===fh)return r.RG;if(n===Za)return r.RG_INTEGER;if(n===Ja)return r.RGBA_INTEGER;if(n===Ur||n===Fr||n===Or||n===zr)if(o===he)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ur)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Or)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ur)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Or)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ha||n===ua||n===da||n===fa)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ha)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ua)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===da)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===pa||n===ma||n===ga)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===pa||n===ma)return o===he?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ga)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===va||n===_a||n===xa||n===ya||n===Ma||n===Sa||n===wa||n===Ea||n===ba||n===Ta||n===Aa||n===Ca||n===Ra||n===Pa)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===va)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_a)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xa)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ya)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ma)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sa)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wa)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ea)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ba)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ta)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Aa)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ca)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ra)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Pa)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Br||n===La||n===Ia)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Br)return o===he?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===La)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ia)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ph||n===Na||n===Da||n===Ua)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Br)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Na)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Da)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ua)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class mg extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Fe extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gg={type:"move"};class Bo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const f=e.getJointPose(v,n),g=this._getHandJoint(l,v);f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=f.radius),g.visible=f!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,m=.005;l.inputState.pinching&&u>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gg)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Fe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const vg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_g=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class xg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Oe,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new An({vertexShader:vg,fragmentShader:_g,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Gt(new sn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yg extends ps{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,p=null,m=null;const v=new xg,f=e.getContextAttributes();let g=null,_=null;const y=[],M=[],R=new gt;let A=null;const T=new Je;T.layers.enable(1),T.viewport=new ge;const I=new Je;I.layers.enable(2),I.viewport=new ge;const q=[T,I],x=new mg;x.layers.enable(1),x.layers.enable(2);let S=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ot=y[J];return ot===void 0&&(ot=new Bo,y[J]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(J){let ot=y[J];return ot===void 0&&(ot=new Bo,y[J]=ot),ot.getGripSpace()},this.getHand=function(J){let ot=y[J];return ot===void 0&&(ot=new Bo,y[J]=ot),ot.getHandSpace()};function L(J){const ot=M.indexOf(J.inputSource);if(ot===-1)return;const bt=y[ot];bt!==void 0&&(bt.update(J.inputSource,J.frame,l||o),bt.dispatchEvent({type:J.type,data:J.inputSource}))}function F(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",O);for(let J=0;J<y.length;J++){const ot=M[J];ot!==null&&(M[J]=null,y[J].disconnect(ot))}S=null,k=null,v.reset(),t.setRenderTarget(g),p=null,u=null,d=null,i=null,_=null,Ot.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(g=t.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",F),i.addEventListener("inputsourceschange",O),f.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(R),i.renderState.layers===void 0){const ot={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,e,ot),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Ci(p.framebufferWidth,p.framebufferHeight,{format:pn,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let ot=null,bt=null,vt=null;f.depth&&(vt=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=f.stencil?ls:ns,bt=f.stencil?cs:Ai);const X={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:s};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(X),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new Ci(u.textureWidth,u.textureHeight,{format:pn,type:Xn,depthTexture:new Lh(u.textureWidth,u.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Ot.setContext(i),Ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function O(J){for(let ot=0;ot<J.removed.length;ot++){const bt=J.removed[ot],vt=M.indexOf(bt);vt>=0&&(M[vt]=null,y[vt].disconnect(bt))}for(let ot=0;ot<J.added.length;ot++){const bt=J.added[ot];let vt=M.indexOf(bt);if(vt===-1){for(let st=0;st<y.length;st++)if(st>=M.length){M.push(bt),vt=st;break}else if(M[st]===null){M[st]=bt,vt=st;break}if(vt===-1)break}const X=y[vt];X&&X.connect(bt)}}const N=new D,Z=new D;function z(J,ot,bt){N.setFromMatrixPosition(ot.matrixWorld),Z.setFromMatrixPosition(bt.matrixWorld);const vt=N.distanceTo(Z),X=ot.projectionMatrix.elements,st=bt.projectionMatrix.elements,_t=X[14]/(X[10]-1),Et=X[14]/(X[10]+1),K=(X[9]+1)/X[5],C=(X[9]-1)/X[5],ht=(X[8]-1)/X[0],mt=(st[8]+1)/st[0],ut=_t*ht,dt=_t*mt,Ft=vt/(-ht+mt),Mt=Ft*-ht;if(ot.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Mt),J.translateZ(Ft),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),X[10]===-1)J.projectionMatrix.copy(ot.projectionMatrix),J.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const P=_t+Ft,E=Et+Ft,W=ut-Mt,nt=dt+(vt-Mt),at=K*Et/E*P,it=C*Et/E*P;J.projectionMatrix.makePerspective(W,nt,at,it,P,E),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function tt(J,ot){ot===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ot.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let ot=J.near,bt=J.far;v.texture!==null&&(v.depthNear>0&&(ot=v.depthNear),v.depthFar>0&&(bt=v.depthFar)),x.near=I.near=T.near=ot,x.far=I.far=T.far=bt,(S!==x.near||k!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),S=x.near,k=x.far);const vt=J.parent,X=x.cameras;tt(x,vt);for(let st=0;st<X.length;st++)tt(X[st],vt);X.length===2?z(x,T,I):x.projectionMatrix.copy(T.projectionMatrix),G(J,x,vt)};function G(J,ot,bt){bt===null?J.matrix.copy(ot.matrixWorld):(J.matrix.copy(bt.matrixWorld),J.matrix.invert(),J.matrix.multiply(ot.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ot.projectionMatrix),J.projectionMatrixInverse.copy(ot.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=hs*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(J){c=J,u!==null&&(u.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let et=null;function pt(J,ot){if(h=ot.getViewerPose(l||o),m=ot,h!==null){const bt=h.views;p!==null&&(t.setRenderTargetFramebuffer(_,p.framebuffer),t.setRenderTarget(_));let vt=!1;bt.length!==x.cameras.length&&(x.cameras.length=0,vt=!0);for(let st=0;st<bt.length;st++){const _t=bt[st];let Et=null;if(p!==null)Et=p.getViewport(_t);else{const C=d.getViewSubImage(u,_t);Et=C.viewport,st===0&&(t.setRenderTargetTextures(_,C.colorTexture,u.ignoreDepthValues?void 0:C.depthStencilTexture),t.setRenderTarget(_))}let K=q[st];K===void 0&&(K=new Je,K.layers.enable(st),K.viewport=new ge,q[st]=K),K.matrix.fromArray(_t.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(_t.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(Et.x,Et.y,Et.width,Et.height),st===0&&(x.matrix.copy(K.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),vt===!0&&x.cameras.push(K)}const X=i.enabledFeatures;if(X&&X.includes("depth-sensing")){const st=d.getDepthInformation(bt[0]);st&&st.isValid&&st.texture&&v.init(t,st,i.renderState)}}for(let bt=0;bt<y.length;bt++){const vt=M[bt],X=y[bt];vt!==null&&X!==void 0&&X.update(vt,ot,l||o)}et&&et(J,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),m=null}const Ot=new Rh;Ot.setAnimationLoop(pt),this.setAnimationLoop=function(J){et=J},this.dispose=function(){}}}const mi=new Tn,Mg=new ae;function Sg(r,t){function e(f,g){f.matrixAutoUpdate===!0&&f.updateMatrix(),g.value.copy(f.matrix)}function n(f,g){g.color.getRGB(f.fogColor.value,bh(r)),g.isFog?(f.fogNear.value=g.near,f.fogFar.value=g.far):g.isFogExp2&&(f.fogDensity.value=g.density)}function i(f,g,_,y,M){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(f,g):g.isMeshToonMaterial?(s(f,g),d(f,g)):g.isMeshPhongMaterial?(s(f,g),h(f,g)):g.isMeshStandardMaterial?(s(f,g),u(f,g),g.isMeshPhysicalMaterial&&p(f,g,M)):g.isMeshMatcapMaterial?(s(f,g),m(f,g)):g.isMeshDepthMaterial?s(f,g):g.isMeshDistanceMaterial?(s(f,g),v(f,g)):g.isMeshNormalMaterial?s(f,g):g.isLineBasicMaterial?(o(f,g),g.isLineDashedMaterial&&a(f,g)):g.isPointsMaterial?c(f,g,_,y):g.isSpriteMaterial?l(f,g):g.isShadowMaterial?(f.color.value.copy(g.color),f.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(f,g){f.opacity.value=g.opacity,g.color&&f.diffuse.value.copy(g.color),g.emissive&&f.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(f.map.value=g.map,e(g.map,f.mapTransform)),g.alphaMap&&(f.alphaMap.value=g.alphaMap,e(g.alphaMap,f.alphaMapTransform)),g.bumpMap&&(f.bumpMap.value=g.bumpMap,e(g.bumpMap,f.bumpMapTransform),f.bumpScale.value=g.bumpScale,g.side===Ve&&(f.bumpScale.value*=-1)),g.normalMap&&(f.normalMap.value=g.normalMap,e(g.normalMap,f.normalMapTransform),f.normalScale.value.copy(g.normalScale),g.side===Ve&&f.normalScale.value.negate()),g.displacementMap&&(f.displacementMap.value=g.displacementMap,e(g.displacementMap,f.displacementMapTransform),f.displacementScale.value=g.displacementScale,f.displacementBias.value=g.displacementBias),g.emissiveMap&&(f.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,f.emissiveMapTransform)),g.specularMap&&(f.specularMap.value=g.specularMap,e(g.specularMap,f.specularMapTransform)),g.alphaTest>0&&(f.alphaTest.value=g.alphaTest);const _=t.get(g),y=_.envMap,M=_.envMapRotation;y&&(f.envMap.value=y,mi.copy(M),mi.x*=-1,mi.y*=-1,mi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),f.envMapRotation.value.setFromMatrix4(Mg.makeRotationFromEuler(mi)),f.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=g.reflectivity,f.ior.value=g.ior,f.refractionRatio.value=g.refractionRatio),g.lightMap&&(f.lightMap.value=g.lightMap,f.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,f.lightMapTransform)),g.aoMap&&(f.aoMap.value=g.aoMap,f.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,f.aoMapTransform))}function o(f,g){f.diffuse.value.copy(g.color),f.opacity.value=g.opacity,g.map&&(f.map.value=g.map,e(g.map,f.mapTransform))}function a(f,g){f.dashSize.value=g.dashSize,f.totalSize.value=g.dashSize+g.gapSize,f.scale.value=g.scale}function c(f,g,_,y){f.diffuse.value.copy(g.color),f.opacity.value=g.opacity,f.size.value=g.size*_,f.scale.value=y*.5,g.map&&(f.map.value=g.map,e(g.map,f.uvTransform)),g.alphaMap&&(f.alphaMap.value=g.alphaMap,e(g.alphaMap,f.alphaMapTransform)),g.alphaTest>0&&(f.alphaTest.value=g.alphaTest)}function l(f,g){f.diffuse.value.copy(g.color),f.opacity.value=g.opacity,f.rotation.value=g.rotation,g.map&&(f.map.value=g.map,e(g.map,f.mapTransform)),g.alphaMap&&(f.alphaMap.value=g.alphaMap,e(g.alphaMap,f.alphaMapTransform)),g.alphaTest>0&&(f.alphaTest.value=g.alphaTest)}function h(f,g){f.specular.value.copy(g.specular),f.shininess.value=Math.max(g.shininess,1e-4)}function d(f,g){g.gradientMap&&(f.gradientMap.value=g.gradientMap)}function u(f,g){f.metalness.value=g.metalness,g.metalnessMap&&(f.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,f.metalnessMapTransform)),f.roughness.value=g.roughness,g.roughnessMap&&(f.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,f.roughnessMapTransform)),g.envMap&&(f.envMapIntensity.value=g.envMapIntensity)}function p(f,g,_){f.ior.value=g.ior,g.sheen>0&&(f.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),f.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(f.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,f.sheenColorMapTransform)),g.sheenRoughnessMap&&(f.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,f.sheenRoughnessMapTransform))),g.clearcoat>0&&(f.clearcoat.value=g.clearcoat,f.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(f.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,f.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(f.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ve&&f.clearcoatNormalScale.value.negate())),g.dispersion>0&&(f.dispersion.value=g.dispersion),g.iridescence>0&&(f.iridescence.value=g.iridescence,f.iridescenceIOR.value=g.iridescenceIOR,f.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(f.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,f.iridescenceMapTransform)),g.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),g.transmission>0&&(f.transmission.value=g.transmission,f.transmissionSamplerMap.value=_.texture,f.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(f.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,f.transmissionMapTransform)),f.thickness.value=g.thickness,g.thicknessMap&&(f.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=g.attenuationDistance,f.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(f.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(f.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=g.specularIntensity,f.specularColor.value.copy(g.specularColor),g.specularColorMap&&(f.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,f.specularColorMapTransform)),g.specularIntensityMap&&(f.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,f.specularIntensityMapTransform))}function m(f,g){g.matcap&&(f.matcap.value=g.matcap)}function v(f,g){const _=t.get(g).light;f.referencePosition.value.setFromMatrixPosition(_.matrixWorld),f.nearDistance.value=_.shadow.camera.near,f.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function wg(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,y){const M=y.program;n.uniformBlockBinding(_,M)}function l(_,y){let M=i[_.id];M===void 0&&(m(_),M=h(_),i[_.id]=M,_.addEventListener("dispose",f));const R=y.program;n.updateUBOMapping(_,R);const A=t.render.frame;s[_.id]!==A&&(u(_),s[_.id]=A)}function h(_){const y=d();_.__bindingPointIndex=y;const M=r.createBuffer(),R=_.__size,A=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,R,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,M),M}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const y=i[_.id],M=_.uniforms,R=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let A=0,T=M.length;A<T;A++){const I=Array.isArray(M[A])?M[A]:[M[A]];for(let q=0,x=I.length;q<x;q++){const S=I[q];if(p(S,A,q,R)===!0){const k=S.__offset,L=Array.isArray(S.value)?S.value:[S.value];let F=0;for(let O=0;O<L.length;O++){const N=L[O],Z=v(N);typeof N=="number"||typeof N=="boolean"?(S.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,k+F,S.__data)):N.isMatrix3?(S.__data[0]=N.elements[0],S.__data[1]=N.elements[1],S.__data[2]=N.elements[2],S.__data[3]=0,S.__data[4]=N.elements[3],S.__data[5]=N.elements[4],S.__data[6]=N.elements[5],S.__data[7]=0,S.__data[8]=N.elements[6],S.__data[9]=N.elements[7],S.__data[10]=N.elements[8],S.__data[11]=0):(N.toArray(S.__data,F),F+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,k,S.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(_,y,M,R){const A=_.value,T=y+"_"+M;if(R[T]===void 0)return typeof A=="number"||typeof A=="boolean"?R[T]=A:R[T]=A.clone(),!0;{const I=R[T];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return R[T]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function m(_){const y=_.uniforms;let M=0;const R=16;for(let T=0,I=y.length;T<I;T++){const q=Array.isArray(y[T])?y[T]:[y[T]];for(let x=0,S=q.length;x<S;x++){const k=q[x],L=Array.isArray(k.value)?k.value:[k.value];for(let F=0,O=L.length;F<O;F++){const N=L[F],Z=v(N),z=M%R,tt=z%Z.boundary,G=z+tt;M+=tt,G!==0&&R-G<Z.storage&&(M+=R-G),k.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=M,M+=Z.storage}}}const A=M%R;return A>0&&(M+=R-A),_.__size=M,_.__cache={},this}function v(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function f(_){const y=_.target;y.removeEventListener("dispose",f);const M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function g(){for(const _ in i)r.deleteBuffer(i[_]);o=[],i={},s={}}return{bind:c,update:l,dispose:g}}class Eg{constructor(t={}){const{canvas:e=ud(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;const p=new Uint32Array(4),m=new Int32Array(4);let v=null,f=null;const g=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qe,this.toneMapping=oi,this.toneMappingExposure=1;const y=this;let M=!1,R=0,A=0,T=null,I=-1,q=null;const x=new ge,S=new ge;let k=null;const L=new jt(0);let F=0,O=e.width,N=e.height,Z=1,z=null,tt=null;const G=new ge(0,0,O,N),et=new ge(0,0,O,N);let pt=!1;const Ot=new ec;let J=!1,ot=!1;const bt=new ae,vt=new ae,X=new D,st=new ge,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Et=!1;function K(){return T===null?Z:1}let C=n;function ht(b,H){return e.getContext(b,H)}try{const b={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Xa}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),C===null){const H="webgl2";if(C=ht(H,b),C===null)throw ht(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let mt,ut,dt,Ft,Mt,P,E,W,nt,at,it,Lt,St,Ct,Zt,U,Q,ct,ft,lt,Nt,Dt,Xt,B;function xt(){mt=new Rm(C),mt.init(),Dt=new pg(C,mt),ut=new wm(C,mt,t,Dt),dt=new ug(C),ut.reverseDepthBuffer&&dt.buffers.depth.setReversed(!0),Ft=new Im(C),Mt=new j0,P=new fg(C,mt,dt,Mt,ut,Dt,Ft),E=new bm(y),W=new Cm(y),nt=new zd(C),Xt=new Mm(C,nt),at=new Pm(C,nt,Ft,Xt),it=new Dm(C,at,nt,Ft),ft=new Nm(C,ut,P),U=new Em(Mt),Lt=new K0(y,E,W,mt,ut,Xt,U),St=new Sg(y,Mt),Ct=new J0,Zt=new sg(mt),ct=new ym(y,E,W,dt,it,u,c),Q=new lg(y,it,ut),B=new wg(C,Ft,ut,dt),lt=new Sm(C,mt,Ft),Nt=new Lm(C,mt,Ft),Ft.programs=Lt.programs,y.capabilities=ut,y.extensions=mt,y.properties=Mt,y.renderLists=Ct,y.shadowMap=Q,y.state=dt,y.info=Ft}xt();const j=new yg(y,C);this.xr=j,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const b=mt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=mt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(b){b!==void 0&&(Z=b,this.setSize(O,N,!1))},this.getSize=function(b){return b.set(O,N)},this.setSize=function(b,H,Y=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=b,N=H,e.width=Math.floor(b*Z),e.height=Math.floor(H*Z),Y===!0&&(e.style.width=b+"px",e.style.height=H+"px"),this.setViewport(0,0,b,H)},this.getDrawingBufferSize=function(b){return b.set(O*Z,N*Z).floor()},this.setDrawingBufferSize=function(b,H,Y){O=b,N=H,Z=Y,e.width=Math.floor(b*Y),e.height=Math.floor(H*Y),this.setViewport(0,0,b,H)},this.getCurrentViewport=function(b){return b.copy(x)},this.getViewport=function(b){return b.copy(G)},this.setViewport=function(b,H,Y,$){b.isVector4?G.set(b.x,b.y,b.z,b.w):G.set(b,H,Y,$),dt.viewport(x.copy(G).multiplyScalar(Z).round())},this.getScissor=function(b){return b.copy(et)},this.setScissor=function(b,H,Y,$){b.isVector4?et.set(b.x,b.y,b.z,b.w):et.set(b,H,Y,$),dt.scissor(S.copy(et).multiplyScalar(Z).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(b){dt.setScissorTest(pt=b)},this.setOpaqueSort=function(b){z=b},this.setTransparentSort=function(b){tt=b},this.getClearColor=function(b){return b.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor.apply(ct,arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha.apply(ct,arguments)},this.clear=function(b=!0,H=!0,Y=!0){let $=0;if(b){let V=!1;if(T!==null){const yt=T.texture.format;V=yt===Ja||yt===Za||yt===ja}if(V){const yt=T.texture.type,Rt=yt===Xn||yt===Ai||yt===Hs||yt===cs||yt===Ya||yt===$a,Ut=ct.getClearColor(),zt=ct.getClearAlpha(),Vt=Ut.r,Wt=Ut.g,Bt=Ut.b;Rt?(p[0]=Vt,p[1]=Wt,p[2]=Bt,p[3]=zt,C.clearBufferuiv(C.COLOR,0,p)):(m[0]=Vt,m[1]=Wt,m[2]=Bt,m[3]=zt,C.clearBufferiv(C.COLOR,0,m))}else $|=C.COLOR_BUFFER_BIT}H&&($|=C.DEPTH_BUFFER_BIT,C.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Y&&($|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),Ct.dispose(),Zt.dispose(),Mt.dispose(),E.dispose(),W.dispose(),it.dispose(),Xt.dispose(),B.dispose(),Lt.dispose(),j.dispose(),j.removeEventListener("sessionstart",mc),j.removeEventListener("sessionend",gc),li.stop()};function rt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const b=Ft.autoReset,H=Q.enabled,Y=Q.autoUpdate,$=Q.needsUpdate,V=Q.type;xt(),Ft.autoReset=b,Q.enabled=H,Q.autoUpdate=Y,Q.needsUpdate=$,Q.type=V}function Tt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Qt(b){const H=b.target;H.removeEventListener("dispose",Qt),pe(H)}function pe(b){Le(b),Mt.remove(b)}function Le(b){const H=Mt.get(b).programs;H!==void 0&&(H.forEach(function(Y){Lt.releaseProgram(Y)}),b.isShaderMaterial&&Lt.releaseShaderCache(b))}this.renderBufferDirect=function(b,H,Y,$,V,yt){H===null&&(H=_t);const Rt=V.isMesh&&V.matrixWorld.determinant()<0,Ut=ou(b,H,Y,$,V);dt.setMaterial($,Rt);let zt=Y.index,Vt=1;if($.wireframe===!0){if(zt=at.getWireframeAttribute(Y),zt===void 0)return;Vt=2}const Wt=Y.drawRange,Bt=Y.attributes.position;let oe=Wt.start*Vt,ce=(Wt.start+Wt.count)*Vt;yt!==null&&(oe=Math.max(oe,yt.start*Vt),ce=Math.min(ce,(yt.start+yt.count)*Vt)),zt!==null?(oe=Math.max(oe,0),ce=Math.min(ce,zt.count)):Bt!=null&&(oe=Math.max(oe,0),ce=Math.min(ce,Bt.count));const me=ce-oe;if(me<0||me===1/0)return;Xt.setup(V,$,Ut,Y,zt);let $e,ie=lt;if(zt!==null&&($e=nt.get(zt),ie=Nt,ie.setIndex($e)),V.isMesh)$.wireframe===!0?(dt.setLineWidth($.wireframeLinewidth*K()),ie.setMode(C.LINES)):ie.setMode(C.TRIANGLES);else if(V.isLine){let kt=$.linewidth;kt===void 0&&(kt=1),dt.setLineWidth(kt*K()),V.isLineSegments?ie.setMode(C.LINES):V.isLineLoop?ie.setMode(C.LINE_LOOP):ie.setMode(C.LINE_STRIP)}else V.isPoints?ie.setMode(C.POINTS):V.isSprite&&ie.setMode(C.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)ie.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))ie.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const kt=V._multiDrawStarts,Ce=V._multiDrawCounts,se=V._multiDrawCount,an=zt?nt.get(zt).bytesPerElement:1,Ii=Mt.get($).currentProgram.getUniforms();for(let Ke=0;Ke<se;Ke++)Ii.setValue(C,"_gl_DrawID",Ke),ie.render(kt[Ke]/an,Ce[Ke])}else if(V.isInstancedMesh)ie.renderInstances(oe,me,V.count);else if(Y.isInstancedBufferGeometry){const kt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ce=Math.min(Y.instanceCount,kt);ie.renderInstances(oe,me,Ce)}else ie.render(oe,me)};function ee(b,H,Y){b.transparent===!0&&b.side===He&&b.forceSinglePass===!1?(b.side=Ve,b.needsUpdate=!0,Js(b,H,Y),b.side=ai,b.needsUpdate=!0,Js(b,H,Y),b.side=He):Js(b,H,Y)}this.compile=function(b,H,Y=null){Y===null&&(Y=b),f=Zt.get(Y),f.init(H),_.push(f),Y.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),b!==Y&&b.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),f.setupLights();const $=new Set;return b.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const yt=V.material;if(yt)if(Array.isArray(yt))for(let Rt=0;Rt<yt.length;Rt++){const Ut=yt[Rt];ee(Ut,Y,V),$.add(Ut)}else ee(yt,Y,V),$.add(yt)}),_.pop(),f=null,$},this.compileAsync=function(b,H,Y=null){const $=this.compile(b,H,Y);return new Promise(V=>{function yt(){if($.forEach(function(Rt){Mt.get(Rt).currentProgram.isReady()&&$.delete(Rt)}),$.size===0){V(b);return}setTimeout(yt,10)}mt.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let Ie=null;function Ne(b){Ie&&Ie(b)}function mc(){li.stop()}function gc(){li.start()}const li=new Rh;li.setAnimationLoop(Ne),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(b){Ie=b,j.setAnimationLoop(b),b===null?li.stop():li.start()},j.addEventListener("sessionstart",mc),j.addEventListener("sessionend",gc),this.render=function(b,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(H),H=j.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,H,T),f=Zt.get(b,_.length),f.init(H),_.push(f),vt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Ot.setFromProjectionMatrix(vt),ot=this.localClippingEnabled,J=U.init(this.clippingPlanes,ot),v=Ct.get(b,g.length),v.init(),g.push(v),j.enabled===!0&&j.isPresenting===!0){const yt=y.xr.getDepthSensingMesh();yt!==null&&oo(yt,H,-1/0,y.sortObjects)}oo(b,H,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(z,tt),Et=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Et&&ct.addToRenderList(v,b),this.info.render.frame++,J===!0&&U.beginShadows();const Y=f.state.shadowsArray;Q.render(Y,b,H),J===!0&&U.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=v.opaque,V=v.transmissive;if(f.setupLights(),H.isArrayCamera){const yt=H.cameras;if(V.length>0)for(let Rt=0,Ut=yt.length;Rt<Ut;Rt++){const zt=yt[Rt];_c($,V,b,zt)}Et&&ct.render(b);for(let Rt=0,Ut=yt.length;Rt<Ut;Rt++){const zt=yt[Rt];vc(v,b,zt,zt.viewport)}}else V.length>0&&_c($,V,b,H),Et&&ct.render(b),vc(v,b,H);T!==null&&(P.updateMultisampleRenderTarget(T),P.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(y,b,H),Xt.resetDefaultState(),I=-1,q=null,_.pop(),_.length>0?(f=_[_.length-1],J===!0&&U.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,g.pop(),g.length>0?v=g[g.length-1]:v=null};function oo(b,H,Y,$){if(b.visible===!1)return;if(b.layers.test(H.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(H);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ot.intersectsSprite(b)){$&&st.setFromMatrixPosition(b.matrixWorld).applyMatrix4(vt);const Rt=it.update(b),Ut=b.material;Ut.visible&&v.push(b,Rt,Ut,Y,st.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ot.intersectsObject(b))){const Rt=it.update(b),Ut=b.material;if($&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),st.copy(b.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),st.copy(Rt.boundingSphere.center)),st.applyMatrix4(b.matrixWorld).applyMatrix4(vt)),Array.isArray(Ut)){const zt=Rt.groups;for(let Vt=0,Wt=zt.length;Vt<Wt;Vt++){const Bt=zt[Vt],oe=Ut[Bt.materialIndex];oe&&oe.visible&&v.push(b,Rt,oe,Y,st.z,Bt)}}else Ut.visible&&v.push(b,Rt,Ut,Y,st.z,null)}}const yt=b.children;for(let Rt=0,Ut=yt.length;Rt<Ut;Rt++)oo(yt[Rt],H,Y,$)}function vc(b,H,Y,$){const V=b.opaque,yt=b.transmissive,Rt=b.transparent;f.setupLightsView(Y),J===!0&&U.setGlobalState(y.clippingPlanes,Y),$&&dt.viewport(x.copy($)),V.length>0&&Zs(V,H,Y),yt.length>0&&Zs(yt,H,Y),Rt.length>0&&Zs(Rt,H,Y),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function _c(b,H,Y,$){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[$.id]===void 0&&(f.state.transmissionRenderTarget[$.id]=new Ci(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?$s:Xn,minFilter:Ei,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));const yt=f.state.transmissionRenderTarget[$.id],Rt=$.viewport||x;yt.setSize(Rt.z,Rt.w);const Ut=y.getRenderTarget();y.setRenderTarget(yt),y.getClearColor(L),F=y.getClearAlpha(),F<1&&y.setClearColor(16777215,.5),y.clear(),Et&&ct.render(Y);const zt=y.toneMapping;y.toneMapping=oi;const Vt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),f.setupLightsView($),J===!0&&U.setGlobalState(y.clippingPlanes,$),Zs(b,Y,$),P.updateMultisampleRenderTarget(yt),P.updateRenderTargetMipmap(yt),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Bt=0,oe=H.length;Bt<oe;Bt++){const ce=H[Bt],me=ce.object,$e=ce.geometry,ie=ce.material,kt=ce.group;if(ie.side===He&&me.layers.test($.layers)){const Ce=ie.side;ie.side=Ve,ie.needsUpdate=!0,xc(me,Y,$,$e,ie,kt),ie.side=Ce,ie.needsUpdate=!0,Wt=!0}}Wt===!0&&(P.updateMultisampleRenderTarget(yt),P.updateRenderTargetMipmap(yt))}y.setRenderTarget(Ut),y.setClearColor(L,F),Vt!==void 0&&($.viewport=Vt),y.toneMapping=zt}function Zs(b,H,Y){const $=H.isScene===!0?H.overrideMaterial:null;for(let V=0,yt=b.length;V<yt;V++){const Rt=b[V],Ut=Rt.object,zt=Rt.geometry,Vt=$===null?Rt.material:$,Wt=Rt.group;Ut.layers.test(Y.layers)&&xc(Ut,H,Y,zt,Vt,Wt)}}function xc(b,H,Y,$,V,yt){b.onBeforeRender(y,H,Y,$,V,yt),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(y,H,Y,$,b,yt),V.transparent===!0&&V.side===He&&V.forceSinglePass===!1?(V.side=Ve,V.needsUpdate=!0,y.renderBufferDirect(Y,H,$,V,b,yt),V.side=ai,V.needsUpdate=!0,y.renderBufferDirect(Y,H,$,V,b,yt),V.side=He):y.renderBufferDirect(Y,H,$,V,b,yt),b.onAfterRender(y,H,Y,$,V,yt)}function Js(b,H,Y){H.isScene!==!0&&(H=_t);const $=Mt.get(b),V=f.state.lights,yt=f.state.shadowsArray,Rt=V.state.version,Ut=Lt.getParameters(b,V.state,yt,H,Y),zt=Lt.getProgramCacheKey(Ut);let Vt=$.programs;$.environment=b.isMeshStandardMaterial?H.environment:null,$.fog=H.fog,$.envMap=(b.isMeshStandardMaterial?W:E).get(b.envMap||$.environment),$.envMapRotation=$.environment!==null&&b.envMap===null?H.environmentRotation:b.envMapRotation,Vt===void 0&&(b.addEventListener("dispose",Qt),Vt=new Map,$.programs=Vt);let Wt=Vt.get(zt);if(Wt!==void 0){if($.currentProgram===Wt&&$.lightsStateVersion===Rt)return Mc(b,Ut),Wt}else Ut.uniforms=Lt.getUniforms(b),b.onBeforeCompile(Ut,y),Wt=Lt.acquireProgram(Ut,zt),Vt.set(zt,Wt),$.uniforms=Ut.uniforms;const Bt=$.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Bt.clippingPlanes=U.uniform),Mc(b,Ut),$.needsLights=cu(b),$.lightsStateVersion=Rt,$.needsLights&&(Bt.ambientLightColor.value=V.state.ambient,Bt.lightProbe.value=V.state.probe,Bt.directionalLights.value=V.state.directional,Bt.directionalLightShadows.value=V.state.directionalShadow,Bt.spotLights.value=V.state.spot,Bt.spotLightShadows.value=V.state.spotShadow,Bt.rectAreaLights.value=V.state.rectArea,Bt.ltc_1.value=V.state.rectAreaLTC1,Bt.ltc_2.value=V.state.rectAreaLTC2,Bt.pointLights.value=V.state.point,Bt.pointLightShadows.value=V.state.pointShadow,Bt.hemisphereLights.value=V.state.hemi,Bt.directionalShadowMap.value=V.state.directionalShadowMap,Bt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Bt.spotShadowMap.value=V.state.spotShadowMap,Bt.spotLightMatrix.value=V.state.spotLightMatrix,Bt.spotLightMap.value=V.state.spotLightMap,Bt.pointShadowMap.value=V.state.pointShadowMap,Bt.pointShadowMatrix.value=V.state.pointShadowMatrix),$.currentProgram=Wt,$.uniformsList=null,Wt}function yc(b){if(b.uniformsList===null){const H=b.currentProgram.getUniforms();b.uniformsList=Hr.seqWithValue(H.seq,b.uniforms)}return b.uniformsList}function Mc(b,H){const Y=Mt.get(b);Y.outputColorSpace=H.outputColorSpace,Y.batching=H.batching,Y.batchingColor=H.batchingColor,Y.instancing=H.instancing,Y.instancingColor=H.instancingColor,Y.instancingMorph=H.instancingMorph,Y.skinning=H.skinning,Y.morphTargets=H.morphTargets,Y.morphNormals=H.morphNormals,Y.morphColors=H.morphColors,Y.morphTargetsCount=H.morphTargetsCount,Y.numClippingPlanes=H.numClippingPlanes,Y.numIntersection=H.numClipIntersection,Y.vertexAlphas=H.vertexAlphas,Y.vertexTangents=H.vertexTangents,Y.toneMapping=H.toneMapping}function ou(b,H,Y,$,V){H.isScene!==!0&&(H=_t),P.resetTextureUnits();const yt=H.fog,Rt=$.isMeshStandardMaterial?H.environment:null,Ut=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ci,zt=($.isMeshStandardMaterial?W:E).get($.envMap||Rt),Vt=$.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Wt=!!Y.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Bt=!!Y.morphAttributes.position,oe=!!Y.morphAttributes.normal,ce=!!Y.morphAttributes.color;let me=oi;$.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(me=y.toneMapping);const $e=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ie=$e!==void 0?$e.length:0,kt=Mt.get($),Ce=f.state.lights;if(J===!0&&(ot===!0||b!==q)){const tn=b===q&&$.id===I;U.setState($,b,tn)}let se=!1;$.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Ce.state.version||kt.outputColorSpace!==Ut||V.isBatchedMesh&&kt.batching===!1||!V.isBatchedMesh&&kt.batching===!0||V.isBatchedMesh&&kt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&kt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&kt.instancing===!1||!V.isInstancedMesh&&kt.instancing===!0||V.isSkinnedMesh&&kt.skinning===!1||!V.isSkinnedMesh&&kt.skinning===!0||V.isInstancedMesh&&kt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&kt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&kt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&kt.instancingMorph===!1&&V.morphTexture!==null||kt.envMap!==zt||$.fog===!0&&kt.fog!==yt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==U.numPlanes||kt.numIntersection!==U.numIntersection)||kt.vertexAlphas!==Vt||kt.vertexTangents!==Wt||kt.morphTargets!==Bt||kt.morphNormals!==oe||kt.morphColors!==ce||kt.toneMapping!==me||kt.morphTargetsCount!==ie)&&(se=!0):(se=!0,kt.__version=$.version);let an=kt.currentProgram;se===!0&&(an=Js($,H,V));let Ii=!1,Ke=!1,ao=!1;const ve=an.getUniforms(),qn=kt.uniforms;if(dt.useProgram(an.program)&&(Ii=!0,Ke=!0,ao=!0),$.id!==I&&(I=$.id,Ke=!0),Ii||q!==b){ut.reverseDepthBuffer?(bt.copy(b.projectionMatrix),fd(bt),pd(bt),ve.setValue(C,"projectionMatrix",bt)):ve.setValue(C,"projectionMatrix",b.projectionMatrix),ve.setValue(C,"viewMatrix",b.matrixWorldInverse);const tn=ve.map.cameraPosition;tn!==void 0&&tn.setValue(C,X.setFromMatrixPosition(b.matrixWorld)),ut.logarithmicDepthBuffer&&ve.setValue(C,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&ve.setValue(C,"isOrthographic",b.isOrthographicCamera===!0),q!==b&&(q=b,Ke=!0,ao=!0)}if(V.isSkinnedMesh){ve.setOptional(C,V,"bindMatrix"),ve.setOptional(C,V,"bindMatrixInverse");const tn=V.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),ve.setValue(C,"boneTexture",tn.boneTexture,P))}V.isBatchedMesh&&(ve.setOptional(C,V,"batchingTexture"),ve.setValue(C,"batchingTexture",V._matricesTexture,P),ve.setOptional(C,V,"batchingIdTexture"),ve.setValue(C,"batchingIdTexture",V._indirectTexture,P),ve.setOptional(C,V,"batchingColorTexture"),V._colorsTexture!==null&&ve.setValue(C,"batchingColorTexture",V._colorsTexture,P));const co=Y.morphAttributes;if((co.position!==void 0||co.normal!==void 0||co.color!==void 0)&&ft.update(V,Y,an),(Ke||kt.receiveShadow!==V.receiveShadow)&&(kt.receiveShadow=V.receiveShadow,ve.setValue(C,"receiveShadow",V.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(qn.envMap.value=zt,qn.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&H.environment!==null&&(qn.envMapIntensity.value=H.environmentIntensity),Ke&&(ve.setValue(C,"toneMappingExposure",y.toneMappingExposure),kt.needsLights&&au(qn,ao),yt&&$.fog===!0&&St.refreshFogUniforms(qn,yt),St.refreshMaterialUniforms(qn,$,Z,N,f.state.transmissionRenderTarget[b.id]),Hr.upload(C,yc(kt),qn,P)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Hr.upload(C,yc(kt),qn,P),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&ve.setValue(C,"center",V.center),ve.setValue(C,"modelViewMatrix",V.modelViewMatrix),ve.setValue(C,"normalMatrix",V.normalMatrix),ve.setValue(C,"modelMatrix",V.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const tn=$.uniformsGroups;for(let lo=0,lu=tn.length;lo<lu;lo++){const Sc=tn[lo];B.update(Sc,an),B.bind(Sc,an)}}return an}function au(b,H){b.ambientLightColor.needsUpdate=H,b.lightProbe.needsUpdate=H,b.directionalLights.needsUpdate=H,b.directionalLightShadows.needsUpdate=H,b.pointLights.needsUpdate=H,b.pointLightShadows.needsUpdate=H,b.spotLights.needsUpdate=H,b.spotLightShadows.needsUpdate=H,b.rectAreaLights.needsUpdate=H,b.hemisphereLights.needsUpdate=H}function cu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,H,Y){Mt.get(b.texture).__webglTexture=H,Mt.get(b.depthTexture).__webglTexture=Y;const $=Mt.get(b);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=Y===void 0,$.__autoAllocateDepthBuffer||mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,H){const Y=Mt.get(b);Y.__webglFramebuffer=H,Y.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(b,H=0,Y=0){T=b,R=H,A=Y;let $=!0,V=null,yt=!1,Rt=!1;if(b){const zt=Mt.get(b);if(zt.__useDefaultFramebuffer!==void 0)dt.bindFramebuffer(C.FRAMEBUFFER,null),$=!1;else if(zt.__webglFramebuffer===void 0)P.setupRenderTarget(b);else if(zt.__hasExternalTextures)P.rebindTextures(b,Mt.get(b.texture).__webglTexture,Mt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Bt=b.depthTexture;if(zt.__boundDepthTexture!==Bt){if(Bt!==null&&Mt.has(Bt)&&(b.width!==Bt.image.width||b.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(b)}}const Vt=b.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Rt=!0);const Wt=Mt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Wt[H])?V=Wt[H][Y]:V=Wt[H],yt=!0):b.samples>0&&P.useMultisampledRTT(b)===!1?V=Mt.get(b).__webglMultisampledFramebuffer:Array.isArray(Wt)?V=Wt[Y]:V=Wt,x.copy(b.viewport),S.copy(b.scissor),k=b.scissorTest}else x.copy(G).multiplyScalar(Z).floor(),S.copy(et).multiplyScalar(Z).floor(),k=pt;if(dt.bindFramebuffer(C.FRAMEBUFFER,V)&&$&&dt.drawBuffers(b,V),dt.viewport(x),dt.scissor(S),dt.setScissorTest(k),yt){const zt=Mt.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+H,zt.__webglTexture,Y)}else if(Rt){const zt=Mt.get(b.texture),Vt=H||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,zt.__webglTexture,Y||0,Vt)}I=-1},this.readRenderTargetPixels=function(b,H,Y,$,V,yt,Rt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=Mt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ut=Ut[Rt]),Ut){dt.bindFramebuffer(C.FRAMEBUFFER,Ut);try{const zt=b.texture,Vt=zt.format,Wt=zt.type;if(!ut.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=b.width-$&&Y>=0&&Y<=b.height-V&&C.readPixels(H,Y,$,V,Dt.convert(Vt),Dt.convert(Wt),yt)}finally{const zt=T!==null?Mt.get(T).__webglFramebuffer:null;dt.bindFramebuffer(C.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(b,H,Y,$,V,yt,Rt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=Mt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ut=Ut[Rt]),Ut){const zt=b.texture,Vt=zt.format,Wt=zt.type;if(!ut.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=b.width-$&&Y>=0&&Y<=b.height-V){dt.bindFramebuffer(C.FRAMEBUFFER,Ut);const Bt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Bt),C.bufferData(C.PIXEL_PACK_BUFFER,yt.byteLength,C.STREAM_READ),C.readPixels(H,Y,$,V,Dt.convert(Vt),Dt.convert(Wt),0);const oe=T!==null?Mt.get(T).__webglFramebuffer:null;dt.bindFramebuffer(C.FRAMEBUFFER,oe);const ce=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await dd(C,ce,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Bt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,yt),C.deleteBuffer(Bt),C.deleteSync(ce),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,H=null,Y=0){b.isTexture!==!0&&(kr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,b=arguments[1]);const $=Math.pow(2,-Y),V=Math.floor(b.image.width*$),yt=Math.floor(b.image.height*$),Rt=H!==null?H.x:0,Ut=H!==null?H.y:0;P.setTexture2D(b,0),C.copyTexSubImage2D(C.TEXTURE_2D,Y,0,0,Rt,Ut,V,yt),dt.unbindTexture()},this.copyTextureToTexture=function(b,H,Y=null,$=null,V=0){b.isTexture!==!0&&(kr("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,b=arguments[1],H=arguments[2],V=arguments[3]||0,Y=null);let yt,Rt,Ut,zt,Vt,Wt;Y!==null?(yt=Y.max.x-Y.min.x,Rt=Y.max.y-Y.min.y,Ut=Y.min.x,zt=Y.min.y):(yt=b.image.width,Rt=b.image.height,Ut=0,zt=0),$!==null?(Vt=$.x,Wt=$.y):(Vt=0,Wt=0);const Bt=Dt.convert(H.format),oe=Dt.convert(H.type);P.setTexture2D(H,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,H.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,H.unpackAlignment);const ce=C.getParameter(C.UNPACK_ROW_LENGTH),me=C.getParameter(C.UNPACK_IMAGE_HEIGHT),$e=C.getParameter(C.UNPACK_SKIP_PIXELS),ie=C.getParameter(C.UNPACK_SKIP_ROWS),kt=C.getParameter(C.UNPACK_SKIP_IMAGES),Ce=b.isCompressedTexture?b.mipmaps[V]:b.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,Ce.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ce.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ut),C.pixelStorei(C.UNPACK_SKIP_ROWS,zt),b.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,V,Vt,Wt,yt,Rt,Bt,oe,Ce.data):b.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,V,Vt,Wt,Ce.width,Ce.height,Bt,Ce.data):C.texSubImage2D(C.TEXTURE_2D,V,Vt,Wt,yt,Rt,Bt,oe,Ce),C.pixelStorei(C.UNPACK_ROW_LENGTH,ce),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,me),C.pixelStorei(C.UNPACK_SKIP_PIXELS,$e),C.pixelStorei(C.UNPACK_SKIP_ROWS,ie),C.pixelStorei(C.UNPACK_SKIP_IMAGES,kt),V===0&&H.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),dt.unbindTexture()},this.copyTextureToTexture3D=function(b,H,Y=null,$=null,V=0){b.isTexture!==!0&&(kr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,$=arguments[1]||null,b=arguments[2],H=arguments[3],V=arguments[4]||0);let yt,Rt,Ut,zt,Vt,Wt,Bt,oe,ce;const me=b.isCompressedTexture?b.mipmaps[V]:b.image;Y!==null?(yt=Y.max.x-Y.min.x,Rt=Y.max.y-Y.min.y,Ut=Y.max.z-Y.min.z,zt=Y.min.x,Vt=Y.min.y,Wt=Y.min.z):(yt=me.width,Rt=me.height,Ut=me.depth,zt=0,Vt=0,Wt=0),$!==null?(Bt=$.x,oe=$.y,ce=$.z):(Bt=0,oe=0,ce=0);const $e=Dt.convert(H.format),ie=Dt.convert(H.type);let kt;if(H.isData3DTexture)P.setTexture3D(H,0),kt=C.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)P.setTexture2DArray(H,0),kt=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,H.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,H.unpackAlignment);const Ce=C.getParameter(C.UNPACK_ROW_LENGTH),se=C.getParameter(C.UNPACK_IMAGE_HEIGHT),an=C.getParameter(C.UNPACK_SKIP_PIXELS),Ii=C.getParameter(C.UNPACK_SKIP_ROWS),Ke=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,me.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,me.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,zt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Vt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Wt),b.isDataTexture||b.isData3DTexture?C.texSubImage3D(kt,V,Bt,oe,ce,yt,Rt,Ut,$e,ie,me.data):H.isCompressedArrayTexture?C.compressedTexSubImage3D(kt,V,Bt,oe,ce,yt,Rt,Ut,$e,me.data):C.texSubImage3D(kt,V,Bt,oe,ce,yt,Rt,Ut,$e,ie,me),C.pixelStorei(C.UNPACK_ROW_LENGTH,Ce),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,se),C.pixelStorei(C.UNPACK_SKIP_PIXELS,an),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ii),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ke),V===0&&H.generateMipmaps&&C.generateMipmap(kt),dt.unbindTexture()},this.initRenderTarget=function(b){Mt.get(b).__webglFramebuffer===void 0&&P.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?P.setTextureCube(b,0):b.isData3DTexture?P.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?P.setTexture2DArray(b,0):P.setTexture2D(b,0),dt.unbindTexture()},this.resetState=function(){R=0,A=0,T=null,dt.reset(),Xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Qa?"display-p3":"srgb",e.unpackColorSpace=re.workingColorSpace===eo?"display-p3":"srgb"}}class ic{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new jt(t),this.density=e}clone(){return new ic(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Fh extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class bg extends Oe{constructor(t=null,e=1,n=1,i,s,o,a,c,l=Ye,h=Ye,d,u){super(null,o,a,c,l,h,i,s,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vl extends Ge{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Yi=new ae,_l=new ae,yr=[],xl=new Li,Tg=new ae,Es=new Gt,bs=new gs;class Ag extends Gt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Tg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Li),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Yi),xl.copy(t.boundingBox).applyMatrix4(Yi),this.boundingBox.union(xl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new gs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Yi),bs.copy(t.boundingSphere).applyMatrix4(Yi),this.boundingSphere.union(bs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Es.geometry=this.geometry,Es.material=this.material,Es.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bs.copy(this.boundingSphere),bs.applyMatrix4(n),t.ray.intersectsSphere(bs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Yi),_l.multiplyMatrices(n,Yi),Es.matrixWorld=_l,Es.raycast(t,yr);for(let o=0,a=yr.length;o<a;o++){const c=yr[o];c.instanceId=s,c.object=this,e.push(c)}yr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new vl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new bg(new Float32Array(i*this.count),i,this.count,Ka,wn));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Cg extends vs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const yl=new ae,Ba=new yh,Mr=new gs,Sr=new D;class Rg extends _e{constructor(t=new ze,e=new Cg){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(i),Mr.radius+=s,t.ray.intersectsSphere(Mr)===!1)return;yl.copy(i).invert(),Ba.copy(t.ray).applyMatrix4(yl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){const u=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let m=u,v=p;m<v;m++){const f=l.getX(m);Sr.fromBufferAttribute(d,f),Ml(Sr,f,c,i,t,e,this)}}else{const u=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let m=u,v=p;m<v;m++)Sr.fromBufferAttribute(d,m),Ml(Sr,m,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ml(r,t,e,n,i,s,o){const a=Ba.distanceSqToPoint(r);if(a<e){const c=new D;Ba.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class io extends Oe{constructor(t,e,n,i,s,o,a,c,l){super(t,e,n,i,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Rn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(s-1);const h=n[i],u=n[i+1]-h,p=(o-h)/u;return(i+p)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),c=e||(o.isVector2?new gt:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,i=[],s=[],o=[],a=new D,c=new ae;for(let p=0;p<=t;p++){const m=p/t;i[p]=this.getTangentAt(m,new D)}s[0]=new D,o[0]=new D;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(we(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(a,m))}o[p].crossVectors(i[p],s[p])}if(e===!0){let p=Math.acos(we(s[0].dot(s[t]),-1,1));p/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(p=-p);for(let m=1;m<=t;m++)s[m].applyMatrix4(c.makeRotationAxis(i[m],p*m)),o[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class sc extends Rn{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new gt){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,p=l-this.aY;c=u*h-p*d+this.aX,l=u*d+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Pg extends sc{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function rc(){let r=0,t=0,e=0,n=0;function i(s,o,a,c){r=s,t=a,e=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){i(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,d){let u=(o-s)/l-(a-s)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+d)+(c-a)/d;u*=h,p*=h,i(o,a,u,p)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const wr=new D,ko=new rc,Ho=new rc,Go=new rc;class Lg extends Rn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new D){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%s]:(wr.subVectors(i[0],i[1]).add(i[0]),l=wr);const d=i[a%s],u=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(wr.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=wr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(u),p),f=Math.pow(u.distanceToSquared(h),p);v<1e-4&&(v=1),m<1e-4&&(m=v),f<1e-4&&(f=v),ko.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,m,v,f),Ho.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,m,v,f),Go.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,m,v,f)}else this.curveType==="catmullrom"&&(ko.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),Ho.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),Go.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(ko.calc(c),Ho.calc(c),Go.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new D().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Sl(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,c=r*a;return(2*e-2*n+s+o)*c+(-3*e+3*n-2*s-o)*a+s*r+e}function Ig(r,t){const e=1-r;return e*e*t}function Ng(r,t){return 2*(1-r)*r*t}function Dg(r,t){return r*r*t}function Us(r,t,e,n){return Ig(r,t)+Ng(r,e)+Dg(r,n)}function Ug(r,t){const e=1-r;return e*e*e*t}function Fg(r,t){const e=1-r;return 3*e*e*r*t}function Og(r,t){return 3*(1-r)*r*r*t}function zg(r,t){return r*r*r*t}function Fs(r,t,e,n,i){return Ug(r,t)+Fg(r,e)+Og(r,n)+zg(r,i)}class Oh extends Rn{constructor(t=new gt,e=new gt,n=new gt,i=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new gt){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Fs(t,i.x,s.x,o.x,a.x),Fs(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Bg extends Rn{constructor(t=new D,e=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new D){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Fs(t,i.x,s.x,o.x,a.x),Fs(t,i.y,s.y,o.y,a.y),Fs(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class zh extends Rn{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kg extends Rn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bh extends Rn{constructor(t=new gt,e=new gt,n=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new gt){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Us(t,i.x,s.x,o.x),Us(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hg extends Rn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Us(t,i.x,s.x,o.x),Us(t,i.y,s.y,o.y),Us(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kh extends Rn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(Sl(a,c.x,l.x,h.x,d.x),Sl(a,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new gt().fromArray(i))}return this}}var ka=Object.freeze({__proto__:null,ArcCurve:Pg,CatmullRomCurve3:Lg,CubicBezierCurve:Oh,CubicBezierCurve3:Bg,EllipseCurve:sc,LineCurve:zh,LineCurve3:kg,QuadraticBezierCurve:Bh,QuadraticBezierCurve3:Hg,SplineCurve:kh});class Gg extends Rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ka[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new ka[i.type]().fromJSON(i))}return this}}class wl extends Gg{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new zh(this.currentPoint.clone(),new gt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new Bh(this.currentPoint.clone(),new gt(t,e),new gt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new Oh(this.currentPoint.clone(),new gt(t,e),new gt(n,i),new gt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new kh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,s,o,a,c),this}absellipse(t,e,n,i,s,o,a,c){const l=new sc(t,e,n,i,s,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Kr extends ze{constructor(t=[new gt(0,-.5),new gt(.5,0),new gt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=we(i,0,Math.PI*2);const s=[],o=[],a=[],c=[],l=[],h=1/e,d=new D,u=new gt,p=new D,m=new D,v=new D;let f=0,g=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:f=t[_+1].x-t[_].x,g=t[_+1].y-t[_].y,p.x=g*1,p.y=-f,p.z=g*0,v.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:f=t[_+1].x-t[_].x,g=t[_+1].y-t[_].y,p.x=g*1,p.y=-f,p.z=g*0,m.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),c.push(p.x,p.y,p.z),v.copy(m)}for(let _=0;_<=e;_++){const y=n+_*h*i,M=Math.sin(y),R=Math.cos(y);for(let A=0;A<=t.length-1;A++){d.x=t[A].x*M,d.y=t[A].y,d.z=t[A].x*R,o.push(d.x,d.y,d.z),u.x=_/e,u.y=A/(t.length-1),a.push(u.x,u.y);const T=c[3*A+0]*M,I=c[3*A+1],q=c[3*A+0]*R;l.push(T,I,q)}}for(let _=0;_<e;_++)for(let y=0;y<t.length-1;y++){const M=y+_*t.length,R=M,A=M+t.length,T=M+t.length+1,I=M+1;s.push(R,A,I),s.push(T,I,A)}this.setIndex(s),this.setAttribute("position",new ue(o,3)),this.setAttribute("uv",new ue(a,2)),this.setAttribute("normal",new ue(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kr(t.points,t.segments,t.phiStart,t.phiLength)}}class Sn extends ze{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],d=[],u=[],p=[];let m=0;const v=[],f=n/2;let g=0;_(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ue(d,3)),this.setAttribute("normal",new ue(u,3)),this.setAttribute("uv",new ue(p,2));function _(){const M=new D,R=new D;let A=0;const T=(e-t)/n;for(let I=0;I<=s;I++){const q=[],x=I/s,S=x*(e-t)+t;for(let k=0;k<=i;k++){const L=k/i,F=L*c+a,O=Math.sin(F),N=Math.cos(F);R.x=S*O,R.y=-x*n+f,R.z=S*N,d.push(R.x,R.y,R.z),M.set(O,T,N).normalize(),u.push(M.x,M.y,M.z),p.push(L,1-x),q.push(m++)}v.push(q)}for(let I=0;I<i;I++)for(let q=0;q<s;q++){const x=v[q][I],S=v[q+1][I],k=v[q+1][I+1],L=v[q][I+1];t>0&&(h.push(x,S,L),A+=3),e>0&&(h.push(S,k,L),A+=3)}l.addGroup(g,A,0),g+=A}function y(M){const R=m,A=new gt,T=new D;let I=0;const q=M===!0?t:e,x=M===!0?1:-1;for(let k=1;k<=i;k++)d.push(0,f*x,0),u.push(0,x,0),p.push(.5,.5),m++;const S=m;for(let k=0;k<=i;k++){const F=k/i*c+a,O=Math.cos(F),N=Math.sin(F);T.x=q*N,T.y=f*x,T.z=q*O,d.push(T.x,T.y,T.z),u.push(0,x,0),A.x=O*.5+.5,A.y=N*.5*x+.5,p.push(A.x,A.y),m++}for(let k=0;k<i;k++){const L=R+k,F=S+k;M===!0?h.push(F,F+1,L):h.push(F+1,F,L),I+=3}l.addGroup(g,I,M===!0?1:2),g+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class oc extends Sn{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new oc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}let Hh=class extends wl{constructor(t){super(t),this.uuid=Pi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new wl().fromJSON(i))}return this}};const Vg={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=Gh(r,0,i,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l,h,d,u,p;if(n&&(s=$g(r,t,s,e)),r.length>80*e){a=l=r[0],c=h=r[1];for(let m=e;m<i;m+=e)d=r[m],u=r[m+1],d<a&&(a=d),u<c&&(c=u),d>l&&(l=d),u>h&&(h=u);p=Math.max(l-a,h-c),p=p!==0?32767/p:0}return Gs(s,o,e,a,c,p,0),o}};function Gh(r,t,e,n,i){let s,o;if(i===rv(r,t,e,n)>0)for(s=t;s<e;s+=n)o=El(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=El(s,r[s],r[s+1],o);return o&&so(o,o.next)&&(Ws(o),o=o.next),o}function Ri(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(so(e,e.next)||fe(e.prev,e,e.next)===0)){if(Ws(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Gs(r,t,e,n,i,s,o){if(!r)return;!o&&s&&Qg(r,n,i,s);let a=r,c,l;for(;r.prev!==r.next;){if(c=r.prev,l=r.next,s?Xg(r,n,i,s):Wg(r)){t.push(c.i/e|0),t.push(r.i/e|0),t.push(l.i/e|0),Ws(r),r=l.next,a=l.next;continue}if(r=l,r===a){o?o===1?(r=qg(Ri(r),t,e),Gs(r,t,e,n,i,s,2)):o===2&&Yg(r,t,e,n,i,s):Gs(Ri(r),t,e,n,i,s,1);break}}}function Wg(r){const t=r.prev,e=r,n=r.next;if(fe(t,e,n)>=0)return!1;const i=t.x,s=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=i<s?i<o?i:o:s<o?s:o,d=a<c?a<l?a:l:c<l?c:l,u=i>s?i>o?i:o:s>o?s:o,p=a>c?a>l?a:l:c>l?c:l;let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=p&&Ji(i,a,s,c,o,l,m.x,m.y)&&fe(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Xg(r,t,e,n){const i=r.prev,s=r,o=r.next;if(fe(i,s,o)>=0)return!1;const a=i.x,c=s.x,l=o.x,h=i.y,d=s.y,u=o.y,p=a<c?a<l?a:l:c<l?c:l,m=h<d?h<u?h:u:d<u?d:u,v=a>c?a>l?a:l:c>l?c:l,f=h>d?h>u?h:u:d>u?d:u,g=Ha(p,m,t,e,n),_=Ha(v,f,t,e,n);let y=r.prevZ,M=r.nextZ;for(;y&&y.z>=g&&M&&M.z<=_;){if(y.x>=p&&y.x<=v&&y.y>=m&&y.y<=f&&y!==i&&y!==o&&Ji(a,h,c,d,l,u,y.x,y.y)&&fe(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=p&&M.x<=v&&M.y>=m&&M.y<=f&&M!==i&&M!==o&&Ji(a,h,c,d,l,u,M.x,M.y)&&fe(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=g;){if(y.x>=p&&y.x<=v&&y.y>=m&&y.y<=f&&y!==i&&y!==o&&Ji(a,h,c,d,l,u,y.x,y.y)&&fe(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=_;){if(M.x>=p&&M.x<=v&&M.y>=m&&M.y<=f&&M!==i&&M!==o&&Ji(a,h,c,d,l,u,M.x,M.y)&&fe(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function qg(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!so(i,s)&&Vh(i,n,n.next,s)&&Vs(i,s)&&Vs(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),Ws(n),Ws(n.next),n=r=s),n=n.next}while(n!==r);return Ri(n)}function Yg(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&nv(o,a)){let c=Wh(o,a);o=Ri(o,o.next),c=Ri(c,c.next),Gs(o,t,e,n,i,s,0),Gs(c,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function $g(r,t,e,n){const i=[];let s,o,a,c,l;for(s=0,o=t.length;s<o;s++)a=t[s]*n,c=s<o-1?t[s+1]*n:r.length,l=Gh(r,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(ev(l));for(i.sort(Kg),s=0;s<i.length;s++)e=jg(i[s],e);return e}function Kg(r,t){return r.x-t.x}function jg(r,t){const e=Zg(r,t);if(!e)return t;const n=Wh(e,r);return Ri(n,n.next),Ri(e,e.next)}function Zg(r,t){let e=t,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=s&&u>n&&(n=u,i=e.x<e.next.x?e:e.next,u===s))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,c=i.x,l=i.y;let h=1/0,d;e=i;do s>=e.x&&e.x>=c&&s!==e.x&&Ji(o<l?s:n,o,c,l,o<l?n:s,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(s-e.x),Vs(e,r)&&(d<h||d===h&&(e.x>i.x||e.x===i.x&&Jg(i,e)))&&(i=e,h=d)),e=e.next;while(e!==a);return i}function Jg(r,t){return fe(r.prev,r,t.prev)<0&&fe(t.next,r,r.next)<0}function Qg(r,t,e,n){let i=r;do i.z===0&&(i.z=Ha(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,tv(i)}function tv(r){let t,e,n,i,s,o,a,c,l=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,l*=2}while(o>1);return r}function Ha(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function ev(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Ji(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function nv(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!iv(r,t)&&(Vs(r,t)&&Vs(t,r)&&sv(r,t)&&(fe(r.prev,r,t.prev)||fe(r,t.prev,t))||so(r,t)&&fe(r.prev,r,r.next)>0&&fe(t.prev,t,t.next)>0)}function fe(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function so(r,t){return r.x===t.x&&r.y===t.y}function Vh(r,t,e,n){const i=br(fe(r,t,e)),s=br(fe(r,t,n)),o=br(fe(e,n,r)),a=br(fe(e,n,t));return!!(i!==s&&o!==a||i===0&&Er(r,e,t)||s===0&&Er(r,n,t)||o===0&&Er(e,r,n)||a===0&&Er(e,t,n))}function Er(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function br(r){return r>0?1:r<0?-1:0}function iv(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Vh(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function Vs(r,t){return fe(r.prev,r,r.next)<0?fe(r,t,r.next)>=0&&fe(r,r.prev,t)>=0:fe(r,t,r.prev)<0||fe(r,r.next,t)<0}function sv(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function Wh(r,t){const e=new Ga(r.i,r.x,r.y),n=new Ga(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function El(r,t,e,n){const i=new Ga(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ws(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Ga(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function rv(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class Os{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return Os.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];bl(t),Tl(n,t);let o=t.length;e.forEach(bl);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,Tl(n,e[c]);const a=Vg.triangulate(n,i);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function bl(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Tl(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class ac extends ze{constructor(t=new Hh([new gt(.5,.5),new gt(-.5,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new ue(i,3)),this.setAttribute("uv",new ue(s,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:p-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,f=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:ov;let y,M=!1,R,A,T,I;g&&(y=g.getSpacedPoints(h),M=!0,u=!1,R=g.computeFrenetFrames(h,!1),A=new D,T=new D,I=new D),u||(f=0,p=0,m=0,v=0);const q=a.extractPoints(l);let x=q.shape;const S=q.holes;if(!Os.isClockWise(x)){x=x.reverse();for(let K=0,C=S.length;K<C;K++){const ht=S[K];Os.isClockWise(ht)&&(S[K]=ht.reverse())}}const L=Os.triangulateShape(x,S),F=x;for(let K=0,C=S.length;K<C;K++){const ht=S[K];x=x.concat(ht)}function O(K,C,ht){return C||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(C,ht)}const N=x.length,Z=L.length;function z(K,C,ht){let mt,ut,dt;const Ft=K.x-C.x,Mt=K.y-C.y,P=ht.x-K.x,E=ht.y-K.y,W=Ft*Ft+Mt*Mt,nt=Ft*E-Mt*P;if(Math.abs(nt)>Number.EPSILON){const at=Math.sqrt(W),it=Math.sqrt(P*P+E*E),Lt=C.x-Mt/at,St=C.y+Ft/at,Ct=ht.x-E/it,Zt=ht.y+P/it,U=((Ct-Lt)*E-(Zt-St)*P)/(Ft*E-Mt*P);mt=Lt+Ft*U-K.x,ut=St+Mt*U-K.y;const Q=mt*mt+ut*ut;if(Q<=2)return new gt(mt,ut);dt=Math.sqrt(Q/2)}else{let at=!1;Ft>Number.EPSILON?P>Number.EPSILON&&(at=!0):Ft<-Number.EPSILON?P<-Number.EPSILON&&(at=!0):Math.sign(Mt)===Math.sign(E)&&(at=!0),at?(mt=-Mt,ut=Ft,dt=Math.sqrt(W)):(mt=Ft,ut=Mt,dt=Math.sqrt(W/2))}return new gt(mt/dt,ut/dt)}const tt=[];for(let K=0,C=F.length,ht=C-1,mt=K+1;K<C;K++,ht++,mt++)ht===C&&(ht=0),mt===C&&(mt=0),tt[K]=z(F[K],F[ht],F[mt]);const G=[];let et,pt=tt.concat();for(let K=0,C=S.length;K<C;K++){const ht=S[K];et=[];for(let mt=0,ut=ht.length,dt=ut-1,Ft=mt+1;mt<ut;mt++,dt++,Ft++)dt===ut&&(dt=0),Ft===ut&&(Ft=0),et[mt]=z(ht[mt],ht[dt],ht[Ft]);G.push(et),pt=pt.concat(et)}for(let K=0;K<f;K++){const C=K/f,ht=p*Math.cos(C*Math.PI/2),mt=m*Math.sin(C*Math.PI/2)+v;for(let ut=0,dt=F.length;ut<dt;ut++){const Ft=O(F[ut],tt[ut],mt);vt(Ft.x,Ft.y,-ht)}for(let ut=0,dt=S.length;ut<dt;ut++){const Ft=S[ut];et=G[ut];for(let Mt=0,P=Ft.length;Mt<P;Mt++){const E=O(Ft[Mt],et[Mt],mt);vt(E.x,E.y,-ht)}}}const Ot=m+v;for(let K=0;K<N;K++){const C=u?O(x[K],pt[K],Ot):x[K];M?(T.copy(R.normals[0]).multiplyScalar(C.x),A.copy(R.binormals[0]).multiplyScalar(C.y),I.copy(y[0]).add(T).add(A),vt(I.x,I.y,I.z)):vt(C.x,C.y,0)}for(let K=1;K<=h;K++)for(let C=0;C<N;C++){const ht=u?O(x[C],pt[C],Ot):x[C];M?(T.copy(R.normals[K]).multiplyScalar(ht.x),A.copy(R.binormals[K]).multiplyScalar(ht.y),I.copy(y[K]).add(T).add(A),vt(I.x,I.y,I.z)):vt(ht.x,ht.y,d/h*K)}for(let K=f-1;K>=0;K--){const C=K/f,ht=p*Math.cos(C*Math.PI/2),mt=m*Math.sin(C*Math.PI/2)+v;for(let ut=0,dt=F.length;ut<dt;ut++){const Ft=O(F[ut],tt[ut],mt);vt(Ft.x,Ft.y,d+ht)}for(let ut=0,dt=S.length;ut<dt;ut++){const Ft=S[ut];et=G[ut];for(let Mt=0,P=Ft.length;Mt<P;Mt++){const E=O(Ft[Mt],et[Mt],mt);M?vt(E.x,E.y+y[h-1].y,y[h-1].x+ht):vt(E.x,E.y,d+ht)}}}J(),ot();function J(){const K=i.length/3;if(u){let C=0,ht=N*C;for(let mt=0;mt<Z;mt++){const ut=L[mt];X(ut[2]+ht,ut[1]+ht,ut[0]+ht)}C=h+f*2,ht=N*C;for(let mt=0;mt<Z;mt++){const ut=L[mt];X(ut[0]+ht,ut[1]+ht,ut[2]+ht)}}else{for(let C=0;C<Z;C++){const ht=L[C];X(ht[2],ht[1],ht[0])}for(let C=0;C<Z;C++){const ht=L[C];X(ht[0]+N*h,ht[1]+N*h,ht[2]+N*h)}}n.addGroup(K,i.length/3-K,0)}function ot(){const K=i.length/3;let C=0;bt(F,C),C+=F.length;for(let ht=0,mt=S.length;ht<mt;ht++){const ut=S[ht];bt(ut,C),C+=ut.length}n.addGroup(K,i.length/3-K,1)}function bt(K,C){let ht=K.length;for(;--ht>=0;){const mt=ht;let ut=ht-1;ut<0&&(ut=K.length-1);for(let dt=0,Ft=h+f*2;dt<Ft;dt++){const Mt=N*dt,P=N*(dt+1),E=C+mt+Mt,W=C+ut+Mt,nt=C+ut+P,at=C+mt+P;st(E,W,nt,at)}}}function vt(K,C,ht){c.push(K),c.push(C),c.push(ht)}function X(K,C,ht){_t(K),_t(C),_t(ht);const mt=i.length/3,ut=_.generateTopUV(n,i,mt-3,mt-2,mt-1);Et(ut[0]),Et(ut[1]),Et(ut[2])}function st(K,C,ht,mt){_t(K),_t(C),_t(mt),_t(C),_t(ht),_t(mt);const ut=i.length/3,dt=_.generateSideWallUV(n,i,ut-6,ut-3,ut-2,ut-1);Et(dt[0]),Et(dt[1]),Et(dt[3]),Et(dt[1]),Et(dt[2]),Et(dt[3])}function _t(K){i.push(c[K*3+0]),i.push(c[K*3+1]),i.push(c[K*3+2])}function Et(K){s.push(K.x),s.push(K.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return av(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new ka[i.type]().fromJSON(i)),new ac(n,t.options)}}const ov={generateTopUV:function(r,t,e,n,i){const s=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new gt(s,o),new gt(a,c),new gt(l,h)]},generateSideWallUV:function(r,t,e,n,i,s){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[i*3],p=t[i*3+1],m=t[i*3+2],v=t[s*3],f=t[s*3+1],g=t[s*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new gt(o,1-c),new gt(l,1-d),new gt(u,1-m),new gt(v,1-g)]:[new gt(a,1-c),new gt(h,1-d),new gt(p,1-m),new gt(f,1-g)]}};function av(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class zs extends ze{constructor(t=.5,e=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let d=t;const u=(e-t)/i,p=new D,m=new gt;for(let v=0;v<=i;v++){for(let f=0;f<=n;f++){const g=s+f/n*o;p.x=d*Math.cos(g),p.y=d*Math.sin(g),c.push(p.x,p.y,p.z),l.push(0,0,1),m.x=(p.x/e+1)/2,m.y=(p.y/e+1)/2,h.push(m.x,m.y)}d+=u}for(let v=0;v<i;v++){const f=v*(n+1);for(let g=0;g<n;g++){const _=g+f,y=_,M=_+n+1,R=_+n+2,A=_+1;a.push(y,M,A),a.push(M,R,A)}}this.setIndex(a),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(l,3)),this.setAttribute("uv",new ue(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zs(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ds extends ze{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],d=new D,u=new D,p=[],m=[],v=[],f=[];for(let g=0;g<=n;g++){const _=[],y=g/n;let M=0;g===0&&o===0?M=.5/e:g===n&&c===Math.PI&&(M=-.5/e);for(let R=0;R<=e;R++){const A=R/e;d.x=-t*Math.cos(i+A*s)*Math.sin(o+y*a),d.y=t*Math.cos(o+y*a),d.z=t*Math.sin(i+A*s)*Math.sin(o+y*a),m.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),f.push(A+M,1-y),_.push(l++)}h.push(_)}for(let g=0;g<n;g++)for(let _=0;_<e;_++){const y=h[g][_+1],M=h[g][_],R=h[g+1][_],A=h[g+1][_+1];(g!==0||o>0)&&p.push(y,M,A),(g!==n-1||c<Math.PI)&&p.push(M,R,A)}this.setIndex(p),this.setAttribute("position",new ue(m,3)),this.setAttribute("normal",new ue(v,3)),this.setAttribute("uv",new ue(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ds(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class cc extends ze{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new D,d=new D,u=new D;for(let p=0;p<=n;p++)for(let m=0;m<=i;m++){const v=m/i*s,f=p/n*Math.PI*2;d.x=(t+e*Math.cos(f))*Math.cos(v),d.y=(t+e*Math.cos(f))*Math.sin(v),d.z=e*Math.sin(f),a.push(d.x,d.y,d.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(m/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=i;m++){const v=(i+1)*p+m-1,f=(i+1)*(p-1)+m-1,g=(i+1)*(p-1)+m,_=(i+1)*p+m;o.push(v,f,_),o.push(f,g,_)}this.setIndex(o),this.setAttribute("position",new ue(a,3)),this.setAttribute("normal",new ue(c,3)),this.setAttribute("uv",new ue(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class te extends vs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mh,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Va extends te{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new gt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return we(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new jt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new jt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new jt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class lc extends _e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class cv extends lc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Vo=new ae,Al=new D,Cl=new D;class Xh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ec,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Al.setFromMatrixPosition(t.matrixWorld),e.position.copy(Al),Cl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Cl),e.updateMatrixWorld(),Vo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class lv extends Xh{constructor(){super(new Je(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=hs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class hv extends lc{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new lv}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class uv extends Xh{constructor(){super(new Ph(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dv extends lc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.shadow=new uv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xa);class mn{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new w);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new w);const n=this.elements,i=t.x,s=t.y,o=t.z;return e.x=n[0]*i+n[1]*s+n[2]*o,e.y=n[3]*i+n[4]*s+n[5]*o,e.z=n[6]*i+n[7]*s+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new mn);const n=this.elements,i=t.elements,s=e.elements,o=n[0],a=n[1],c=n[2],l=n[3],h=n[4],d=n[5],u=n[6],p=n[7],m=n[8],v=i[0],f=i[1],g=i[2],_=i[3],y=i[4],M=i[5],R=i[6],A=i[7],T=i[8];return s[0]=o*v+a*_+c*R,s[1]=o*f+a*y+c*A,s[2]=o*g+a*M+c*T,s[3]=l*v+h*_+d*R,s[4]=l*f+h*y+d*A,s[5]=l*g+h*M+d*T,s[6]=u*v+p*_+m*R,s[7]=u*f+p*y+m*A,s[8]=u*g+p*M+m*T,e}scale(t,e){e===void 0&&(e=new mn);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new w);const n=3,i=4,s=[];let o,a;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)s[o+i*a]=this.elements[o+3*a];s[3+4*0]=t.x,s[3+4*1]=t.y,s[3+4*2]=t.z;let c=3;const l=c;let h;const d=4;let u;do{if(o=l-c,s[o+i*o]===0){for(a=o+1;a<l;a++)if(s[o+i*a]!==0){h=d;do u=d-h,s[u+i*o]+=s[u+i*a];while(--h);break}}if(s[o+i*o]!==0)for(a=o+1;a<l;a++){const p=s[o+i*a]/s[o+i*o];h=d;do u=d-h,s[u+i*a]=u<=o?0:s[u+i*a]-s[u+i*o]*p;while(--h)}}while(--c);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new mn);const e=3,n=6,i=fv;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const c=a;let l;const h=n;let d;do{if(s=c-a,i[s+n*s]===0){for(o=s+1;o<c;o++)if(i[s+n*o]!==0){l=h;do d=h-l,i[d+n*s]+=i[d+n*o];while(--l);break}}if(i[s+n*s]!==0)for(o=s+1;o<c;o++){const u=i[s+n*o]/i[s+n*s];l=h;do d=h-l,i[d+n*o]=d<=s?0:i[d+n*o]-i[d+n*s]*u;while(--l)}}while(--a);s=2;do{o=s-1;do{const u=i[s+n*o]/i[s+n*s];l=n;do d=n-l,i[d+n*o]=i[d+n*o]-i[d+n*s]*u;while(--l)}while(o--)}while(--s);s=2;do{const u=1/i[s+n*s];l=n;do d=n-l,i[d+n*s]=i[d+n*s]*u;while(--l)}while(s--);s=2;do{o=2;do{if(d=i[e+o+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,o,d)}while(o--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,o=e+e,a=n+n,c=i+i,l=e*o,h=e*a,d=e*c,u=n*a,p=n*c,m=i*c,v=s*o,f=s*a,g=s*c,_=this.elements;return _[3*0+0]=1-(u+m),_[3*0+1]=h-g,_[3*0+2]=d+f,_[3*1+0]=h+g,_[3*1+1]=1-(l+m),_[3*1+2]=p-v,_[3*2+0]=d-f,_[3*2+1]=p+v,_[3*2+2]=1-(l+u),this}transpose(t){t===void 0&&(t=new mn);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const fv=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class w{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new w);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,c=this.z;return e.x=a*s-c*i,e.y=c*n-o*s,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new w(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new w(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new mn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new w);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return Math.sqrt((s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return(s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new w);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new w),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new w),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new w),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=pv,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=mv;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Rl),Rl.almostEquals(t,e)}clone(){return new w(this.x,this.y,this.z)}}w.ZERO=new w(0,0,0);w.UNIT_X=new w(1,0,0);w.UNIT_Y=new w(0,1,0);w.UNIT_Z=new w(0,0,1);const pv=new w,mv=new w,Rl=new w;class Qe{constructor(t){t===void 0&&(t={}),this.lowerBound=new w,this.upperBound=new w,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,o=this.upperBound,a=n;s.copy(t[0]),a&&a.vmult(s,s),o.copy(s);for(let c=1;c<t.length;c++){let l=t[c];a&&(a.vmult(l,Pl),l=Pl),l.x>o.x&&(o.x=l.x),l.x<s.x&&(s.x=l.x),l.y>o.y&&(o.y=l.y),l.y<s.y&&(s.y=l.y),l.z>o.z&&(o.z=l.z),l.z<s.z&&(s.z=l.z)}return e&&(e.vadd(s,s),e.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new Qe().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,o=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,c=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return o&&a&&c}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,o,a,c){const l=this.lowerBound,h=this.upperBound;t.copy(l),e.set(h.x,l.y,l.z),n.set(h.x,h.y,l.z),i.set(l.x,h.y,h.z),s.set(h.x,l.y,h.z),o.set(l.x,h.y,l.z),a.set(l.x,l.y,h.z),c.copy(h)}toLocalFrame(t,e){const n=Ll,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,a,c,l,h,d);for(let u=0;u!==8;u++){const p=n[u];t.pointToLocal(p,p)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=Ll,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,a,c,l,h,d);for(let u=0;u!==8;u++){const p=n[u];t.pointToWorld(p,p)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,c=(this.upperBound.x-n.x)*i,l=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,p=Math.max(Math.max(Math.min(a,c),Math.min(l,h)),Math.min(d,u)),m=Math.min(Math.min(Math.max(a,c),Math.max(l,h)),Math.max(d,u));return!(m<0||p>m)}}const Pl=new w,Ll=[new w,new w,new w,new w,new w,new w,new w,new w];class Il{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class qh{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class Me{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new w),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=gv,i=vv;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new Me);const n=this.x,i=this.y,s=this.z,o=this.w,a=t.x,c=t.y,l=t.z,h=t.w;return e.x=n*h+o*a+i*l-s*c,e.y=i*h+o*c+s*a-n*l,e.z=s*h+o*l+n*c-i*a,e.w=o*h-n*a-i*c-s*l,e}inverse(t){t===void 0&&(t=new Me);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const o=1/(e*e+n*n+i*i+s*s);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new Me),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new w);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,c=this.z,l=this.w,h=l*n+a*s-c*i,d=l*i+c*n-o*s,u=l*s+o*i-a*n,p=-o*n-a*i-c*s;return e.x=h*l+p*-o+d*-c-u*-a,e.y=d*l+p*-a+u*-o-h*-c,e.z=u*l+p*-c+h*-a-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const o=this.x,a=this.y,c=this.z,l=this.w;switch(e){case"YZX":const h=o*a+c*l;if(h>.499&&(n=2*Math.atan2(o,l),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(o,l),i=-Math.PI/2,s=0),n===void 0){const d=o*o,u=a*a,p=c*c;n=Math.atan2(2*a*l-2*o*c,1-2*u-2*p),i=Math.asin(2*h),s=Math.atan2(2*o*l-2*a*c,1-2*d-2*p)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),c=Math.sin(t/2),l=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=c*o*a+s*l*h,this.y=s*l*a-c*o*h,this.z=s*o*h+c*l*a,this.w=s*o*a-c*l*h):i==="YXZ"?(this.x=c*o*a+s*l*h,this.y=s*l*a-c*o*h,this.z=s*o*h-c*l*a,this.w=s*o*a+c*l*h):i==="ZXY"?(this.x=c*o*a-s*l*h,this.y=s*l*a+c*o*h,this.z=s*o*h+c*l*a,this.w=s*o*a-c*l*h):i==="ZYX"?(this.x=c*o*a-s*l*h,this.y=s*l*a+c*o*h,this.z=s*o*h-c*l*a,this.w=s*o*a+c*l*h):i==="YZX"?(this.x=c*o*a+s*l*h,this.y=s*l*a+c*o*h,this.z=s*o*h-c*l*a,this.w=s*o*a-c*l*h):i==="XZY"&&(this.x=c*o*a-s*l*h,this.y=s*l*a-c*o*h,this.z=s*o*h+c*l*a,this.w=s*o*a+c*l*h),this}clone(){return new Me(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new Me);const i=this.x,s=this.y,o=this.z,a=this.w;let c=t.x,l=t.y,h=t.z,d=t.w,u,p,m,v,f;return p=i*c+s*l+o*h+a*d,p<0&&(p=-p,c=-c,l=-l,h=-h,d=-d),1-p>1e-6?(u=Math.acos(p),m=Math.sin(u),v=Math.sin((1-e)*u)/m,f=Math.sin(e*u)/m):(v=1-e,f=e),n.x=v*i+f*c,n.y=v*s+f*l,n.z=v*o+f*h,n.w=v*a+f*d,n}integrate(t,e,n,i){i===void 0&&(i=new Me);const s=t.x*n.x,o=t.y*n.y,a=t.z*n.z,c=this.x,l=this.y,h=this.z,d=this.w,u=e*.5;return i.x+=u*(s*d+o*h-a*l),i.y+=u*(o*d+a*c-s*h),i.z+=u*(a*d+s*l-o*c),i.w+=u*(-s*c-o*l-a*h),i}}const gv=new w,vv=new w,_v={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class It{constructor(t){t===void 0&&(t={}),this.id=It.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}It.idCounter=0;It.types=_v;class ne{constructor(t){t===void 0&&(t={}),this.position=new w,this.quaternion=new Me,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return ne.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return ne.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new w),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new w),n.vsub(t,i),e.conjugate(Nl),Nl.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new w),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new w),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new w),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const Nl=new Me;class ss extends It{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=t;super({type:It.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new w;for(let s=0;s!==t.length;s++){const o=t[s],a=o.length;for(let c=0;c!==a;c++){const l=(c+1)%a;e[o[c]].vsub(e[o[l]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new w;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];ss.computeNormal(i,s,o,e)}static computeNormal(t,e,n,i){const s=new w,o=new w;e.vsub(t,o),n.vsub(e,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,o,a,c,l){const h=new w;let d=-1,u=-Number.MAX_VALUE;for(let m=0;m<n.faces.length;m++){h.copy(n.faceNormals[m]),s.vmult(h,h);const v=h.dot(o);v>u&&(u=v,d=m)}const p=[];for(let m=0;m<n.faces[d].length;m++){const v=n.vertices[n.faces[d][m]],f=new w;f.copy(v),s.vmult(f,f),i.vadd(f,f),p.push(f)}d>=0&&this.clipFaceAgainstHull(o,t,e,p,a,c,l)}findSeparatingAxis(t,e,n,i,s,o,a,c){const l=new w,h=new w,d=new w,u=new w,p=new w,m=new w;let v=Number.MAX_VALUE;const f=this;if(f.uniqueAxes)for(let g=0;g!==f.uniqueAxes.length;g++){n.vmult(f.uniqueAxes[g],l);const _=f.testSepAxis(l,t,e,n,i,s);if(_===!1)return!1;_<v&&(v=_,o.copy(l))}else{const g=a?a.length:f.faces.length;for(let _=0;_<g;_++){const y=a?a[_]:_;l.copy(f.faceNormals[y]),n.vmult(l,l);const M=f.testSepAxis(l,t,e,n,i,s);if(M===!1)return!1;M<v&&(v=M,o.copy(l))}}if(t.uniqueAxes)for(let g=0;g!==t.uniqueAxes.length;g++){s.vmult(t.uniqueAxes[g],h);const _=f.testSepAxis(h,t,e,n,i,s);if(_===!1)return!1;_<v&&(v=_,o.copy(h))}else{const g=c?c.length:t.faces.length;for(let _=0;_<g;_++){const y=c?c[_]:_;h.copy(t.faceNormals[y]),s.vmult(h,h);const M=f.testSepAxis(h,t,e,n,i,s);if(M===!1)return!1;M<v&&(v=M,o.copy(h))}}for(let g=0;g!==f.uniqueEdges.length;g++){n.vmult(f.uniqueEdges[g],u);for(let _=0;_!==t.uniqueEdges.length;_++)if(s.vmult(t.uniqueEdges[_],p),u.cross(p,m),!m.almostZero()){m.normalize();const y=f.testSepAxis(m,t,e,n,i,s);if(y===!1)return!1;y<v&&(v=y,o.copy(m))}}return i.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,s,o){const a=this;ss.project(a,t,n,i,Wo),ss.project(e,t,s,o,Xo);const c=Wo[0],l=Wo[1],h=Xo[0],d=Xo[1];if(c<d||h<l)return!1;const u=c-d,p=h-l;return u<p?u:p}calculateLocalInertia(t,e){const n=new w,i=new w;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*s*2*s+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,o,a){const c=new w,l=new w,h=new w,d=new w,u=new w,p=new w,m=new w,v=new w,f=this,g=[],_=i,y=g;let M=-1,R=Number.MAX_VALUE;for(let x=0;x<f.faces.length;x++){c.copy(f.faceNormals[x]),n.vmult(c,c);const S=c.dot(t);S<R&&(R=S,M=x)}if(M<0)return;const A=f.faces[M];A.connectedFaces=[];for(let x=0;x<f.faces.length;x++)for(let S=0;S<f.faces[x].length;S++)A.indexOf(f.faces[x][S])!==-1&&x!==M&&A.connectedFaces.indexOf(x)===-1&&A.connectedFaces.push(x);const T=A.length;for(let x=0;x<T;x++){const S=f.vertices[A[x]],k=f.vertices[A[(x+1)%T]];S.vsub(k,l),h.copy(l),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[M]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),p.copy(S),n.vmult(p,p),e.vadd(p,p);const L=A.connectedFaces[x];m.copy(this.faceNormals[L]);const F=this.getPlaneConstantOfFace(L);v.copy(m),n.vmult(v,v);const O=F-v.dot(e);for(this.clipFaceAgainstPlane(_,y,v,O);_.length;)_.shift();for(;y.length;)_.push(y.shift())}m.copy(this.faceNormals[M]);const I=this.getPlaneConstantOfFace(M);v.copy(m),n.vmult(v,v);const q=I-v.dot(e);for(let x=0;x<_.length;x++){let S=v.dot(_[x])+q;if(S<=s&&(console.log(`clamped: depth=${S} to minDist=${s}`),S=s),S<=o){const k=_[x];if(S<=1e-6){const L={point:k,normal:v,depth:S};a.push(L)}}}}clipFaceAgainstPlane(t,e,n,i){let s,o;const a=t.length;if(a<2)return e;let c=t[t.length-1],l=t[0];s=n.dot(c)+i;for(let h=0;h<a;h++){if(l=t[h],o=n.dot(l)+i,s<0)if(o<0){const d=new w;d.copy(l),e.push(d)}else{const d=new w;c.lerp(l,s/(s-o),d),e.push(d)}else if(o<0){const d=new w;c.lerp(l,s/(s-o),d),e.push(d),e.push(l)}c=l,s=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new w);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new w);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let o,a,c,l,h,d,u=new w;for(let p=0;p<s.length;p++){u.copy(s[p]),e.vmult(u,u),t.vadd(u,u);const m=u;(o===void 0||m.x<o)&&(o=m.x),(l===void 0||m.x>l)&&(l=m.x),(a===void 0||m.y<a)&&(a=m.y),(h===void 0||m.y>h)&&(h=m.y),(c===void 0||m.z<c)&&(c=m.z),(d===void 0||m.z>d)&&(d=m.z)}n.set(o,a,c),i.set(l,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new w);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const o=i[s];e.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];e.vmult(o,o)}}if(t)for(let s=0;s<n;s++){const o=i[s];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=new w;this.getAveragePointLocal(s);for(let o=0;o<this.faces.length;o++){let a=i[o];const c=e[n[o][0]],l=new w;t.vsub(c,l);const h=a.dot(l),d=new w;s.vsub(c,d);const u=a.dot(d);if(h<0&&u>0||h>0&&u<0)return!1}return-1}static project(t,e,n,i,s){const o=t.vertices.length,a=xv;let c=0,l=0;const h=yv,d=t.vertices;h.setZero(),ne.vectorToLocalFrame(n,i,e,a),ne.pointToLocalFrame(n,i,h,h);const u=h.dot(a);l=c=d[0].dot(a);for(let p=1;p<o;p++){const m=d[p].dot(a);m>c&&(c=m),m<l&&(l=m)}if(l-=u,c-=u,l>c){const p=l;l=c,c=p}s[0]=c,s[1]=l}}const Wo=[],Xo=[];new w;const xv=new w,yv=new w;class Wn extends It{constructor(t){super({type:It.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=w,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],c=new ss({vertices:s,faces:o,axes:a});this.convexPolyhedronRepresentation=c,c.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new w),Wn.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)Qn.set(s[o][0],s[o][1],s[o][2]),e.vmult(Qn,Qn),t.vadd(Qn,Qn),n(Qn.x,Qn.y,Qn.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;vn[0].set(s.x,s.y,s.z),vn[1].set(-s.x,s.y,s.z),vn[2].set(-s.x,-s.y,s.z),vn[3].set(-s.x,-s.y,-s.z),vn[4].set(s.x,-s.y,-s.z),vn[5].set(s.x,s.y,-s.z),vn[6].set(-s.x,s.y,-s.z),vn[7].set(s.x,-s.y,s.z);const o=vn[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const c=vn[a];e.vmult(c,c),t.vadd(c,c);const l=c.x,h=c.y,d=c.z;l>i.x&&(i.x=l),h>i.y&&(i.y=h),d>i.z&&(i.z=d),l<n.x&&(n.x=l),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const Qn=new w,vn=[new w,new w,new w,new w,new w,new w,new w,new w],hc={DYNAMIC:1,STATIC:2,KINEMATIC:4},uc={AWAKE:0,SLEEPY:1,SLEEPING:2};class Pt extends qh{constructor(t){t===void 0&&(t={}),super(),this.id=Pt.idCounter++,this.index=-1,this.world=null,this.vlambda=new w,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new w,this.previousPosition=new w,this.interpolatedPosition=new w,this.initPosition=new w,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new w,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new w,this.force=new w;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?Pt.STATIC:Pt.DYNAMIC,typeof t.type==typeof Pt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=Pt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new w,this.quaternion=new Me,this.initQuaternion=new Me,this.previousQuaternion=new Me,this.interpolatedQuaternion=new Me,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new w,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new w,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new w,this.invInertia=new w,this.invInertiaWorld=new mn,this.invMassSolve=0,this.invInertiaSolve=new w,this.invInertiaWorldSolve=new mn,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new w(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new w(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new Qe,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new w,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=Pt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===Pt.SLEEPING&&this.dispatchEvent(Pt.wakeupEvent)}sleep(){this.sleepState=Pt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===Pt.AWAKE&&n<i?(this.sleepState=Pt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(Pt.sleepyEvent)):e===Pt.SLEEPY&&n>i?this.wakeUp():e===Pt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(Pt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===Pt.SLEEPING||this.type===Pt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new w),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new w),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new w),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new w),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new w,s=new Me;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const o=t[s];o.updateBoundingSphereRadius();const a=e[s].length(),c=o.boundingSphereRadius;a+c>i&&(i=a+c)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=Mv,o=Sv,a=this.quaternion,c=this.aabb,l=wv;for(let h=0;h!==i;h++){const d=t[h];a.vmult(e[h],s),s.vadd(this.position,s),a.mult(n[h],o),d.calculateWorldAABB(s,o,l.lowerBound,l.upperBound),h===0?c.copy(l):c.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=Ev,i=bv;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new w),this.type!==Pt.DYNAMIC)return;this.sleepState===Pt.SLEEPING&&this.wakeUp();const n=Tv;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new w),this.type!==Pt.DYNAMIC)return;const n=Av,i=Cv;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===Pt.DYNAMIC&&(this.sleepState===Pt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new w),this.type!==Pt.DYNAMIC)return;this.sleepState===Pt.SLEEPING&&this.wakeUp();const n=e,i=Rv;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=Pv;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new w),this.type!==Pt.DYNAMIC)return;const n=Lv,i=Iv;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=Nv;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Wn.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new w;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===Pt.DYNAMIC||this.type===Pt.KINEMATIC)||this.sleepState===Pt.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,a=this.force,c=this.torque,l=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,p=h*t;i.x+=a.x*p*u.x,i.y+=a.y*p*u.y,i.z+=a.z*p*u.z;const m=d.elements,v=this.angularFactor,f=c.x*v.x,g=c.y*v.y,_=c.z*v.z;s.x+=t*(m[0]*f+m[1]*g+m[2]*_),s.y+=t*(m[3]*f+m[4]*g+m[5]*_),s.z+=t*(m[6]*f+m[7]*g+m[8]*_),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,l.integrate(this.angularVelocity,t,this.angularFactor,l),e&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}Pt.idCounter=0;Pt.COLLIDE_EVENT_NAME="collide";Pt.DYNAMIC=hc.DYNAMIC;Pt.STATIC=hc.STATIC;Pt.KINEMATIC=hc.KINEMATIC;Pt.AWAKE=uc.AWAKE;Pt.SLEEPY=uc.SLEEPY;Pt.SLEEPING=uc.SLEEPING;Pt.wakeupEvent={type:"wakeup"};Pt.sleepyEvent={type:"sleepy"};Pt.sleepEvent={type:"sleep"};const Mv=new w,Sv=new Me,wv=new Qe,Ev=new mn,bv=new mn;new mn;const Tv=new w,Av=new w,Cv=new w,Rv=new w,Pv=new w,Lv=new w,Iv=new w,Nv=new w;class Yh{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&Pt.STATIC||t.sleepState===Pt.SLEEPING)&&(e.type&Pt.STATIC||e.sleepState===Pt.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=Dv;e.position.vsub(t.position,s);const o=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=Uv,i=Fv,s=Ov,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],s[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const c=i[a].id,l=s[a].id,h=c<l?`${c},${l}`:`${l},${c}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const c=n.keys.pop(),l=n[c];t.push(i[l]),e.push(s[l]),delete n[c]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new w;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Dv=new w;new w;new Me;new w;const Uv={keys:[]},Fv=[],Ov=[];new w;new w;new w;class zv extends Yh{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let o,a;for(let c=0;c!==s;c++)for(let l=0;l!==c;l++)o=i[c],a=i[l],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class fs{constructor(){this.rayFromWorld=new w,this.rayToWorld=new w,this.hitNormalWorld=new w,this.hitPointWorld=new w,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=a}}let $h,Kh,jh,Zh,Jh,Qh,tu;const dc={CLOSEST:1,ANY:2,ALL:4};$h=It.types.SPHERE;Kh=It.types.PLANE;jh=It.types.BOX;Zh=It.types.CYLINDER;Jh=It.types.CONVEXPOLYHEDRON;Qh=It.types.HEIGHTFIELD;tu=It.types.TRIMESH;class ye{get[$h](){return this._intersectSphere}get[Kh](){return this._intersectPlane}get[jh](){return this._intersectBox}get[Zh](){return this._intersectConvex}get[Jh](){return this._intersectConvex}get[Qh](){return this._intersectHeightfield}get[tu](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new w),e===void 0&&(e=new w),this.from=t.clone(),this.to=e.clone(),this.direction=new w,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=ye.ANY,this.result=new fs,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||ye.ANY,this.result=e.result||new fs,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Dl),qo.length=0,t.broadphase.aabbQuery(t,Dl,qo),this.intersectBodies(qo),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const i=Bv,s=kv;for(let o=0,a=t.shapes.length;o<a;o++){const c=t.shapes[o];if(!(n&&!c.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],s),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(c,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if(t_(s,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const o=this.from,a=this.to,c=this.direction,l=new w(0,0,1);e.vmult(l,l);const h=new w;o.vsub(n,h);const d=h.dot(l);a.vsub(n,h);const u=h.dot(l);if(d*u>0||o.distanceTo(a)<d)return;const p=l.dot(c);if(Math.abs(p)<this.precision)return;const m=new w,v=new w,f=new w;o.vsub(n,m);const g=-l.dot(m)/p;c.scale(g,v),o.vadd(v,f),this.reportIntersection(l,f,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const o=Hv;o.from.copy(this.from),o.to.copy(this.to),ne.pointToLocalFrame(n,e,o.from,o.from),ne.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=Gv;let c,l,h,d;c=l=0,h=d=t.data.length-1;const u=new Qe;o.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),c=Math.max(c,a[0]),l=Math.max(l,a[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let p=c;p<h;p++)for(let m=l;m<d;m++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(p,m,u),!!u.overlapsRay(o)){if(t.getConvexTrianglePillar(p,m,!1),ne.pointToWorldFrame(n,e,t.pillarOffset,Tr),this._intersectConvex(t.pillarConvex,e,Tr,i,s,Ul),this.result.shouldStop)return;t.getConvexTrianglePillar(p,m,!0),ne.pointToWorldFrame(n,e,t.pillarOffset,Tr),this._intersectConvex(t.pillarConvex,e,Tr,i,s,Ul)}}}_intersectSphere(t,e,n,i,s){const o=this.from,a=this.to,c=t.radius,l=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-c**2,u=h**2-4*l*d,p=Vv,m=Wv;if(!(u<0))if(u===0)o.lerp(a,u,p),p.vsub(n,m),m.normalize(),this.reportIntersection(m,p,s,i,-1);else{const v=(-h-Math.sqrt(u))/(2*l),f=(-h+Math.sqrt(u))/(2*l);if(v>=0&&v<=1&&(o.lerp(a,v,p),p.vsub(n,m),m.normalize(),this.reportIntersection(m,p,s,i,-1)),this.result.shouldStop)return;f>=0&&f<=1&&(o.lerp(a,f,p),p.vsub(n,m),m.normalize(),this.reportIntersection(m,p,s,i,-1))}}_intersectConvex(t,e,n,i,s,o){const a=Xv,c=Fl,l=o&&o.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,p=this.direction,m=this.from,v=this.to,f=m.distanceTo(v),g=l?l.length:h.length,_=this.result;for(let y=0;!_.shouldStop&&y<g;y++){const M=l?l[y]:y,R=h[M],A=u[M],T=e,I=n;c.copy(d[R[0]]),T.vmult(c,c),c.vadd(I,c),c.vsub(m,c),T.vmult(A,a);const q=p.dot(a);if(Math.abs(q)<this.precision)continue;const x=a.dot(c)/q;if(!(x<0)){p.scale(x,We),We.vadd(m,We),un.copy(d[R[0]]),T.vmult(un,un),I.vadd(un,un);for(let S=1;!_.shouldStop&&S<R.length-1;S++){_n.copy(d[R[S]]),xn.copy(d[R[S+1]]),T.vmult(_n,_n),T.vmult(xn,xn),I.vadd(_n,_n),I.vadd(xn,xn);const k=We.distanceTo(m);!(ye.pointInTriangle(We,un,_n,xn)||ye.pointInTriangle(We,_n,un,xn))||k>f||this.reportIntersection(a,We,s,i,M)}}}}_intersectTrimesh(t,e,n,i,s,o){const a=qv,c=Jv,l=Qv,h=Fl,d=Yv,u=$v,p=Kv,m=Zv,v=jv,f=t.indices;t.vertices;const g=this.from,_=this.to,y=this.direction;l.position.copy(n),l.quaternion.copy(e),ne.vectorToLocalFrame(n,e,y,d),ne.pointToLocalFrame(n,e,g,u),ne.pointToLocalFrame(n,e,_,p),p.x*=t.scale.x,p.y*=t.scale.y,p.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,p.vsub(u,d),d.normalize();const M=u.distanceSquared(p);t.tree.rayQuery(this,l,c);for(let R=0,A=c.length;!this.result.shouldStop&&R!==A;R++){const T=c[R];t.getNormal(T,a),t.getVertex(f[T*3],un),un.vsub(u,h);const I=d.dot(a),q=a.dot(h)/I;if(q<0)continue;d.scale(q,We),We.vadd(u,We),t.getVertex(f[T*3+1],_n),t.getVertex(f[T*3+2],xn);const x=We.distanceSquared(u);!(ye.pointInTriangle(We,_n,un,xn)||ye.pointInTriangle(We,un,_n,xn))||x>M||(ne.vectorToWorldFrame(e,a,v),ne.pointToWorldFrame(n,e,We,m),this.reportIntersection(v,m,s,i,T))}c.length=0}reportIntersection(t,e,n,i,s){const o=this.from,a=this.to,c=o.distanceTo(e),l=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(l.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case ye.ALL:this.hasHit=!0,l.set(o,a,t,e,n,i,c),l.hasHit=!0,this.callback(l);break;case ye.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,i,c));break;case ye.ANY:this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,i,c),l.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,Si),n.vsub(e,Ts),t.vsub(e,Yo);const s=Si.dot(Si),o=Si.dot(Ts),a=Si.dot(Yo),c=Ts.dot(Ts),l=Ts.dot(Yo);let h,d;return(h=c*a-o*l)>=0&&(d=s*l-o*a)>=0&&h+d<s*c-o*o}}ye.CLOSEST=dc.CLOSEST;ye.ANY=dc.ANY;ye.ALL=dc.ALL;const Dl=new Qe,qo=[],Ts=new w,Yo=new w,Bv=new w,kv=new Me,We=new w,un=new w,_n=new w,xn=new w;new w;new fs;const Ul={faceList:[0]},Tr=new w,Hv=new ye,Gv=[],Vv=new w,Wv=new w,Xv=new w;new w;new w;const Fl=new w,qv=new w,Yv=new w,$v=new w,Kv=new w,jv=new w,Zv=new w;new Qe;const Jv=[],Qv=new ne,Si=new w,Ar=new w;function t_(r,t,e){e.vsub(r,Si);const n=Si.dot(t);return t.scale(n,Ar),Ar.vadd(r,Ar),e.distanceTo(Ar)}class Qi extends Yh{static checkBounds(t,e,n){let i,s;n===0?(i=t.position.x,s=e.position.x):n===1?(i=t.position.y,s=e.position.y):n===2&&(i=t.position.z,s=e.position.z);const o=t.boundingRadius,a=e.boundingRadius,c=i+o;return s-a<c}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.x<=i.aabb.lowerBound.x);s--)t[s+1]=t[s];t[s+1]=i}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.y<=i.aabb.lowerBound.y);s--)t[s+1]=t[s];t[s+1]=i}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.z<=i.aabb.lowerBound.z);s--)t[s+1]=t[s];t[s+1]=i}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;const e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{const i=e.indexOf(n.body);i!==-1&&e.splice(i,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){const i=this.axisList,s=i.length,o=this.axisIndex;let a,c;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==s;a++){const l=i[a];for(c=a+1;c<s;c++){const h=i[c];if(this.needBroadphaseCollision(l,h)){if(!Qi.checkBounds(l,h,o))break;this.intersectionTest(l,h,e,n)}}}}sortList(){const t=this.axisList,e=this.axisIndex,n=t.length;for(let i=0;i!==n;i++){const s=t[i];s.aabbNeedsUpdate&&s.updateAABB()}e===0?Qi.insertionSortX(t):e===1?Qi.insertionSortY(t):e===2&&Qi.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,i=0,s=0,o=0;const a=this.axisList,c=a.length,l=1/c;for(let p=0;p!==c;p++){const m=a[p],v=m.position.x;t+=v,e+=v*v;const f=m.position.y;n+=f,i+=f*f;const g=m.position.z;s+=g,o+=g*g}const h=e-t*t*l,d=i-n*n*l,u=o-s*s*l;h>d?h>u?this.axisIndex=0:this.axisIndex=2:d>u?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);const i=this.axisIndex;let s="x";i===1&&(s="y"),i===2&&(s="z");const o=this.axisList;e.lowerBound[s],e.upperBound[s];for(let a=0;a<o.length;a++){const c=o[a];c.aabbNeedsUpdate&&c.updateAABB(),c.aabb.overlaps(e)&&n.push(c)}return n}}class e_{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class Ol{constructor(){this.spatial=new w,this.rotational=new w}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class Ks{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Ks.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Ol,this.jacobianElementB=new Ol,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*t-i*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return t.spatial.dot(s)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,a=n.angularVelocity,c=i.angularVelocity;return t.multiplyVectors(s,a)+e.multiplyVectors(o,c)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,a=n.wlambda,c=i.wlambda;return t.multiplyVectors(s,a)+e.multiplyVectors(o,c)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,a=i.force,c=i.torque,l=n.invMassSolve,h=i.invMassSolve;return s.scale(l,zl),a.scale(h,Bl),n.invInertiaWorldSolve.vmult(o,kl),i.invInertiaWorldSolve.vmult(c,Hl),t.multiplyVectors(zl,kl)+e.multiplyVectors(Bl,Hl)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,c=i.invInertiaWorldSolve;let l=s+o;return a.vmult(t.rotational,Cr),l+=Cr.dot(t.rotational),c.vmult(e.rotational,Cr),l+=Cr.dot(e.rotational),l}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=n_;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Ks.idCounter=0;const zl=new w,Bl=new w,kl=new w,Hl=new w,Cr=new w,n_=new w;class i_ extends Ks{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new w,this.rj=new w,this.ni=new w}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,a=this.rj,c=s_,l=r_,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=s.velocity,p=s.angularVelocity;s.force,s.torque;const m=o_,v=this.jacobianElementA,f=this.jacobianElementB,g=this.ni;o.cross(g,c),a.cross(g,l),g.negate(v.spatial),c.negate(v.rotational),f.spatial.copy(g),f.rotational.copy(l),m.copy(s.position),m.vadd(a,m),m.vsub(i.position,m),m.vsub(o,m);const _=g.dot(m),y=this.restitution+1,M=y*u.dot(g)-y*h.dot(g)+p.dot(l)-d.dot(c),R=this.computeGiMf();return-_*e-M*n-t*R}getImpactVelocityAlongNormal(){const t=a_,e=c_,n=l_,i=h_,s=u_;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const s_=new w,r_=new w,o_=new w,a_=new w,c_=new w,l_=new w,h_=new w,u_=new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;class Gl extends Ks{constructor(t,e,n){super(t,e,-n,n),this.ri=new w,this.rj=new w,this.t=new w}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=d_,o=f_,a=this.t;n.cross(a,s),i.cross(a,o);const c=this.jacobianElementA,l=this.jacobianElementB;a.negate(c.spatial),s.negate(c.rotational),l.spatial.copy(a),l.rotational.copy(o);const h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}}const d_=new w,f_=new w;class ro{constructor(t,e,n){n=e_.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=ro.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}ro.idCounter=0;class js{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=js.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}js.idCounter=0;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new ye;new w;new w;new w;new w(1,0,0),new w(0,1,0),new w(0,0,1);new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;class p_ extends ss{constructor(t,e,n,i){if(t===void 0&&(t=1),e===void 0&&(e=1),n===void 0&&(n=1),i===void 0&&(i=8),t<0)throw new Error("The cylinder radiusTop cannot be negative.");if(e<0)throw new Error("The cylinder radiusBottom cannot be negative.");const s=i,o=[],a=[],c=[],l=[],h=[],d=Math.cos,u=Math.sin;o.push(new w(-e*u(0),-n*.5,e*d(0))),l.push(0),o.push(new w(-t*u(0),n*.5,t*d(0))),h.push(1);for(let m=0;m<s;m++){const v=2*Math.PI/s*(m+1),f=2*Math.PI/s*(m+.5);m<s-1?(o.push(new w(-e*u(v),-n*.5,e*d(v))),l.push(2*m+2),o.push(new w(-t*u(v),n*.5,t*d(v))),h.push(2*m+3),c.push([2*m,2*m+1,2*m+3,2*m+2])):c.push([2*m,2*m+1,1,0]),(s%2===1||m<s/2)&&a.push(new w(-u(f),0,d(f)))}c.push(l),a.push(new w(0,1,0));const p=[];for(let m=0;m<h.length;m++)p.push(h[h.length-m-1]);c.push(p),super({vertices:o,faces:c,axes:a}),this.type=It.types.CYLINDER,this.radiusTop=t,this.radiusBottom=e,this.height=n,this.numSegments=i}}new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new Qe;new w;new Qe;new w;new w;new w;new w;new w;new w;new w;new Qe;new w;new ne;new Qe;class m_{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class g_ extends m_{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,a=o.length,c=e.bodies,l=c.length,h=t;let d,u,p,m,v,f;if(a!==0)for(let M=0;M!==l;M++)c[M].updateSolveMassProperties();const g=__,_=x_,y=v_;g.length=a,_.length=a,y.length=a;for(let M=0;M!==a;M++){const R=o[M];y[M]=0,_[M]=R.computeB(h),g[M]=1/R.computeC()}if(a!==0){for(let A=0;A!==l;A++){const T=c[A],I=T.vlambda,q=T.wlambda;I.set(0,0,0),q.set(0,0,0)}for(n=0;n!==i;n++){m=0;for(let A=0;A!==a;A++){const T=o[A];d=_[A],u=g[A],f=y[A],v=T.computeGWlambda(),p=u*(d-v-T.eps*f),f+p<T.minForce?p=T.minForce-f:f+p>T.maxForce&&(p=T.maxForce-f),y[A]+=p,m+=p>0?p:-p,T.addToWlambda(p)}if(m*m<s)break}for(let A=0;A!==l;A++){const T=c[A],I=T.velocity,q=T.angularVelocity;T.vlambda.vmul(T.linearFactor,T.vlambda),I.vadd(T.vlambda,I),T.wlambda.vmul(T.angularFactor,T.wlambda),q.vadd(T.wlambda,q)}let M=o.length;const R=1/h;for(;M--;)o[M].multiplier=y[M]*R}return n}}const v_=[],__=[],x_=[];class y_{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class M_ extends y_{constructor(){super(...arguments),this.type=w}constructObject(){return new w}}const le={sphereSphere:It.types.SPHERE,spherePlane:It.types.SPHERE|It.types.PLANE,boxBox:It.types.BOX|It.types.BOX,sphereBox:It.types.SPHERE|It.types.BOX,planeBox:It.types.PLANE|It.types.BOX,convexConvex:It.types.CONVEXPOLYHEDRON,sphereConvex:It.types.SPHERE|It.types.CONVEXPOLYHEDRON,planeConvex:It.types.PLANE|It.types.CONVEXPOLYHEDRON,boxConvex:It.types.BOX|It.types.CONVEXPOLYHEDRON,sphereHeightfield:It.types.SPHERE|It.types.HEIGHTFIELD,boxHeightfield:It.types.BOX|It.types.HEIGHTFIELD,convexHeightfield:It.types.CONVEXPOLYHEDRON|It.types.HEIGHTFIELD,sphereParticle:It.types.PARTICLE|It.types.SPHERE,planeParticle:It.types.PLANE|It.types.PARTICLE,boxParticle:It.types.BOX|It.types.PARTICLE,convexParticle:It.types.PARTICLE|It.types.CONVEXPOLYHEDRON,cylinderCylinder:It.types.CYLINDER,sphereCylinder:It.types.SPHERE|It.types.CYLINDER,planeCylinder:It.types.PLANE|It.types.CYLINDER,boxCylinder:It.types.BOX|It.types.CYLINDER,convexCylinder:It.types.CONVEXPOLYHEDRON|It.types.CYLINDER,heightfieldCylinder:It.types.HEIGHTFIELD|It.types.CYLINDER,particleCylinder:It.types.PARTICLE|It.types.CYLINDER,sphereTrimesh:It.types.SPHERE|It.types.TRIMESH,planeTrimesh:It.types.PLANE|It.types.TRIMESH};class S_{get[le.sphereSphere](){return this.sphereSphere}get[le.spherePlane](){return this.spherePlane}get[le.boxBox](){return this.boxBox}get[le.sphereBox](){return this.sphereBox}get[le.planeBox](){return this.planeBox}get[le.convexConvex](){return this.convexConvex}get[le.sphereConvex](){return this.sphereConvex}get[le.planeConvex](){return this.planeConvex}get[le.boxConvex](){return this.boxConvex}get[le.sphereHeightfield](){return this.sphereHeightfield}get[le.boxHeightfield](){return this.boxHeightfield}get[le.convexHeightfield](){return this.convexHeightfield}get[le.sphereParticle](){return this.sphereParticle}get[le.planeParticle](){return this.planeParticle}get[le.boxParticle](){return this.boxParticle}get[le.convexParticle](){return this.convexParticle}get[le.cylinderCylinder](){return this.convexConvex}get[le.sphereCylinder](){return this.sphereConvex}get[le.planeCylinder](){return this.planeConvex}get[le.boxCylinder](){return this.boxConvex}get[le.convexCylinder](){return this.convexConvex}get[le.heightfieldCylinder](){return this.heightfieldCylinder}get[le.particleCylinder](){return this.particleCylinder}get[le.sphereTrimesh](){return this.sphereTrimesh}get[le.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new M_,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new i_(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const c=this.currentContactMaterial;a.restitution=c.restitution,a.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);const l=n.material||t.material,h=i.material||e.material;return l&&h&&l.restitution>=0&&h.restitution>=0&&(a.restitution=l.restitution*h.restitution),a.si=s||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,o=t.sj,a=this.world,c=this.currentContactMaterial;let l=c.friction;const h=s.material||n.material,d=o.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(l=h.friction*d.friction),l>0){const u=l*(a.frictionGravity||a.gravity).length();let p=n.invMass+i.invMass;p>0&&(p=1/p);const m=this.frictionEquationPool,v=m.length?m.pop():new Gl(n,i,u*p),f=m.length?m.pop():new Gl(n,i,u*p);return v.bi=f.bi=n,v.bj=f.bj=i,v.minForce=f.minForce=-u*p,v.maxForce=f.maxForce=u*p,v.ri.copy(t.ri),v.rj.copy(t.rj),f.ri.copy(t.ri),f.rj.copy(t.rj),t.ni.tangents(v.t,f.t),v.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),f.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),v.enabled=f.enabled=t.enabled,e.push(v,f),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];gi.setZero(),$i.setZero(),Ki.setZero();const s=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==s?(gi.vadd(e.ni,gi),$i.vadd(e.ri,$i),Ki.vadd(e.rj,Ki)):(gi.vsub(e.ni,gi),$i.vadd(e.rj,$i),Ki.vadd(e.ri,Ki));const o=1/t;$i.scale(o,n.ri),Ki.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),gi.normalize(),gi.tangents(n.t,i.t)}getContacts(t,e,n,i,s,o,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const c=b_,l=T_,h=w_,d=E_;for(let u=0,p=t.length;u!==p;u++){const m=t[u],v=e[u];let f=null;m.material&&v.material&&(f=n.getContactMaterial(m.material,v.material)||null);const g=m.type&Pt.KINEMATIC&&v.type&Pt.STATIC||m.type&Pt.STATIC&&v.type&Pt.KINEMATIC||m.type&Pt.KINEMATIC&&v.type&Pt.KINEMATIC;for(let _=0;_<m.shapes.length;_++){m.quaternion.mult(m.shapeOrientations[_],c),m.quaternion.vmult(m.shapeOffsets[_],h),h.vadd(m.position,h);const y=m.shapes[_];for(let M=0;M<v.shapes.length;M++){v.quaternion.mult(v.shapeOrientations[M],l),v.quaternion.vmult(v.shapeOffsets[M],d),d.vadd(v.position,d);const R=v.shapes[M];if(!(y.collisionFilterMask&R.collisionFilterGroup&&R.collisionFilterMask&y.collisionFilterGroup)||h.distanceTo(d)>y.boundingSphereRadius+R.boundingSphereRadius)continue;let A=null;y.material&&R.material&&(A=n.getContactMaterial(y.material,R.material)||null),this.currentContactMaterial=A||f||n.defaultContactMaterial;const T=y.type|R.type,I=this[T];if(I){let q=!1;y.type<R.type?q=I.call(this,y,R,h,d,c,l,m,v,y,R,g):q=I.call(this,R,y,d,h,l,c,v,m,y,R,g),q&&g&&(n.shapeOverlapKeeper.set(y.id,R.id),n.bodyOverlapKeeper.set(m.id,v.id))}}}}}sphereSphere(t,e,n,i,s,o,a,c,l,h,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;const u=this.createContactEquation(a,c,t,e,l,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(c.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,i,s,o,a,c,l,h,d){const u=this.createContactEquation(a,c,t,e,l,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(i,Rr),u.ni.scale(u.ni.dot(Rr),Vl),Rr.vsub(Vl,u.rj),-Rr.dot(u.ni)<=t.radius){if(d)return!0;const p=u.ri,m=u.rj;p.vadd(n,p),p.vsub(a.position,p),m.vadd(i,m),m.vsub(c.position,m),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,i,s,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,o,a,c,t,e,d)}sphereBox(t,e,n,i,s,o,a,c,l,h,d){const u=this.v3pool,p=J_;n.vsub(i,Pr),e.getSideNormals(p,o);const m=t.radius;let v=!1;const f=tx,g=ex,_=nx;let y=null,M=0,R=0,A=0,T=null;for(let N=0,Z=p.length;N!==Z&&v===!1;N++){const z=K_;z.copy(p[N]);const tt=z.length();z.normalize();const G=Pr.dot(z);if(G<tt+m&&G>0){const et=j_,pt=Z_;et.copy(p[(N+1)%3]),pt.copy(p[(N+2)%3]);const Ot=et.length(),J=pt.length();et.normalize(),pt.normalize();const ot=Pr.dot(et),bt=Pr.dot(pt);if(ot<Ot&&ot>-Ot&&bt<J&&bt>-J){const vt=Math.abs(G-tt-m);if((T===null||vt<T)&&(T=vt,R=ot,A=bt,y=tt,f.copy(z),g.copy(et),_.copy(pt),M++,d))return!0}}}if(M){v=!0;const N=this.createContactEquation(a,c,t,e,l,h);f.scale(-m,N.ri),N.ni.copy(f),N.ni.negate(N.ni),f.scale(y,f),g.scale(R,g),f.vadd(g,f),_.scale(A,_),f.vadd(_,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),N.rj.vadd(i,N.rj),N.rj.vsub(c.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}let I=u.get();const q=Q_;for(let N=0;N!==2&&!v;N++)for(let Z=0;Z!==2&&!v;Z++)for(let z=0;z!==2&&!v;z++)if(I.set(0,0,0),N?I.vadd(p[0],I):I.vsub(p[0],I),Z?I.vadd(p[1],I):I.vsub(p[1],I),z?I.vadd(p[2],I):I.vsub(p[2],I),i.vadd(I,q),q.vsub(n,q),q.lengthSquared()<m*m){if(d)return!0;v=!0;const tt=this.createContactEquation(a,c,t,e,l,h);tt.ri.copy(q),tt.ri.normalize(),tt.ni.copy(tt.ri),tt.ri.scale(m,tt.ri),tt.rj.copy(I),tt.ri.vadd(n,tt.ri),tt.ri.vsub(a.position,tt.ri),tt.rj.vadd(i,tt.rj),tt.rj.vsub(c.position,tt.rj),this.result.push(tt),this.createFrictionEquationsFromContact(tt,this.frictionResult)}u.release(I),I=null;const x=u.get(),S=u.get(),k=u.get(),L=u.get(),F=u.get(),O=p.length;for(let N=0;N!==O&&!v;N++)for(let Z=0;Z!==O&&!v;Z++)if(N%3!==Z%3){p[Z].cross(p[N],x),x.normalize(),p[N].vadd(p[Z],S),k.copy(n),k.vsub(S,k),k.vsub(i,k);const z=k.dot(x);x.scale(z,L);let tt=0;for(;tt===N%3||tt===Z%3;)tt++;F.copy(n),F.vsub(L,F),F.vsub(S,F),F.vsub(i,F);const G=Math.abs(z),et=F.length();if(G<p[tt].length()&&et<m){if(d)return!0;v=!0;const pt=this.createContactEquation(a,c,t,e,l,h);S.vadd(L,pt.rj),pt.rj.copy(pt.rj),F.negate(pt.ni),pt.ni.normalize(),pt.ri.copy(pt.rj),pt.ri.vadd(i,pt.ri),pt.ri.vsub(n,pt.ri),pt.ri.normalize(),pt.ri.scale(m,pt.ri),pt.ri.vadd(n,pt.ri),pt.ri.vsub(a.position,pt.ri),pt.rj.vadd(i,pt.rj),pt.rj.vsub(c.position,pt.rj),this.result.push(pt),this.createFrictionEquationsFromContact(pt,this.frictionResult)}}u.release(x,S,k,L,F)}planeBox(t,e,n,i,s,o,a,c,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,o,a,c,t,e,d)}convexConvex(t,e,n,i,s,o,a,c,l,h,d,u,p){const m=vx;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,o,m,u,p)){const v=[],f=_x;t.clipAgainstHull(n,s,e,i,o,m,-100,100,v);let g=0;for(let _=0;_!==v.length;_++){if(d)return!0;const y=this.createContactEquation(a,c,t,e,l,h),M=y.ri,R=y.rj;m.negate(y.ni),v[_].normal.negate(f),f.scale(v[_].depth,f),v[_].point.vadd(f,M),R.copy(v[_].point),M.vsub(n,M),R.vsub(i,R),M.vadd(n,M),M.vsub(a.position,M),R.vadd(i,R),R.vsub(c.position,R),this.result.push(y),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}}sphereConvex(t,e,n,i,s,o,a,c,l,h,d){const u=this.v3pool;n.vsub(i,ix);const p=e.faceNormals,m=e.faces,v=e.vertices,f=t.radius;let g=!1;for(let _=0;_!==v.length;_++){const y=v[_],M=ax;o.vmult(y,M),i.vadd(M,M);const R=ox;if(M.vsub(n,R),R.lengthSquared()<f*f){if(d)return!0;g=!0;const A=this.createContactEquation(a,c,t,e,l,h);A.ri.copy(R),A.ri.normalize(),A.ni.copy(A.ri),A.ri.scale(f,A.ri),M.vsub(i,A.rj),A.ri.vadd(n,A.ri),A.ri.vsub(a.position,A.ri),A.rj.vadd(i,A.rj),A.rj.vsub(c.position,A.rj),this.result.push(A),this.createFrictionEquationsFromContact(A,this.frictionResult);return}}for(let _=0,y=m.length;_!==y&&g===!1;_++){const M=p[_],R=m[_],A=cx;o.vmult(M,A);const T=lx;o.vmult(v[R[0]],T),T.vadd(i,T);const I=hx;A.scale(-f,I),n.vadd(I,I);const q=ux;I.vsub(T,q);const x=q.dot(A),S=dx;if(n.vsub(T,S),x<0&&S.dot(A)>0){const k=[];for(let L=0,F=R.length;L!==F;L++){const O=u.get();o.vmult(v[R[L]],O),i.vadd(O,O),k.push(O)}if($_(k,A,n)){if(d)return!0;g=!0;const L=this.createContactEquation(a,c,t,e,l,h);A.scale(-f,L.ri),A.negate(L.ni);const F=u.get();A.scale(-x,F);const O=u.get();A.scale(-f,O),n.vsub(i,L.rj),L.rj.vadd(O,L.rj),L.rj.vadd(F,L.rj),L.rj.vadd(i,L.rj),L.rj.vsub(c.position,L.rj),L.ri.vadd(n,L.ri),L.ri.vsub(a.position,L.ri),u.release(F),u.release(O),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult);for(let N=0,Z=k.length;N!==Z;N++)u.release(k[N]);return}else for(let L=0;L!==R.length;L++){const F=u.get(),O=u.get();o.vmult(v[R[(L+1)%R.length]],F),o.vmult(v[R[(L+2)%R.length]],O),i.vadd(F,F),i.vadd(O,O);const N=sx;O.vsub(F,N);const Z=rx;N.unit(Z);const z=u.get(),tt=u.get();n.vsub(F,tt);const G=tt.dot(Z);Z.scale(G,z),z.vadd(F,z);const et=u.get();if(z.vsub(n,et),G>0&&G*G<N.lengthSquared()&&et.lengthSquared()<f*f){if(d)return!0;const pt=this.createContactEquation(a,c,t,e,l,h);z.vsub(i,pt.rj),z.vsub(n,pt.ni),pt.ni.normalize(),pt.ni.scale(f,pt.ri),pt.rj.vadd(i,pt.rj),pt.rj.vsub(c.position,pt.rj),pt.ri.vadd(n,pt.ri),pt.ri.vsub(a.position,pt.ri),this.result.push(pt),this.createFrictionEquationsFromContact(pt,this.frictionResult);for(let Ot=0,J=k.length;Ot!==J;Ot++)u.release(k[Ot]);u.release(F),u.release(O),u.release(z),u.release(et),u.release(tt);return}u.release(F),u.release(O),u.release(z),u.release(et),u.release(tt)}for(let L=0,F=k.length;L!==F;L++)u.release(k[L])}}}planeConvex(t,e,n,i,s,o,a,c,l,h,d){const u=fx,p=px;p.set(0,0,1),s.vmult(p,p);let m=0;const v=mx;for(let f=0;f!==e.vertices.length;f++)if(u.copy(e.vertices[f]),o.vmult(u,u),i.vadd(u,u),u.vsub(n,v),p.dot(v)<=0){if(d)return!0;const _=this.createContactEquation(a,c,t,e,l,h),y=gx;p.scale(p.dot(v),y),u.vsub(y,y),y.vsub(n,_.ri),_.ni.copy(p),u.vsub(i,_.rj),_.ri.vadd(n,_.ri),_.ri.vsub(a.position,_.ri),_.rj.vadd(i,_.rj),_.rj.vsub(c.position,_.rj),this.result.push(_),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}boxConvex(t,e,n,i,s,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,o,a,c,t,e,d)}sphereHeightfield(t,e,n,i,s,o,a,c,l,h,d){const u=e.data,p=t.radius,m=e.elementSize,v=Px,f=Rx;ne.pointToLocalFrame(i,o,n,f);let g=Math.floor((f.x-p)/m)-1,_=Math.ceil((f.x+p)/m)+1,y=Math.floor((f.y-p)/m)-1,M=Math.ceil((f.y+p)/m)+1;if(_<0||M<0||g>u.length||y>u[0].length)return;g<0&&(g=0),_<0&&(_=0),y<0&&(y=0),M<0&&(M=0),g>=u.length&&(g=u.length-1),_>=u.length&&(_=u.length-1),M>=u[0].length&&(M=u[0].length-1),y>=u[0].length&&(y=u[0].length-1);const R=[];e.getRectMinMax(g,y,_,M,R);const A=R[0],T=R[1];if(f.z-p>T||f.z+p<A)return;const I=this.result;for(let q=g;q<_;q++)for(let x=y;x<M;x++){const S=I.length;let k=!1;if(e.getConvexTrianglePillar(q,x,!1),ne.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(k=this.sphereConvex(t,e.pillarConvex,n,v,s,o,a,c,t,e,d)),d&&k||(e.getConvexTrianglePillar(q,x,!0),ne.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(k=this.sphereConvex(t,e.pillarConvex,n,v,s,o,a,c,t,e,d)),d&&k))return!0;if(I.length-S>2)return}}boxHeightfield(t,e,n,i,s,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,o,a,c,t,e,d)}convexHeightfield(t,e,n,i,s,o,a,c,l,h,d){const u=e.data,p=e.elementSize,m=t.boundingSphereRadius,v=Ax,f=Cx,g=Tx;ne.pointToLocalFrame(i,o,n,g);let _=Math.floor((g.x-m)/p)-1,y=Math.ceil((g.x+m)/p)+1,M=Math.floor((g.y-m)/p)-1,R=Math.ceil((g.y+m)/p)+1;if(y<0||R<0||_>u.length||M>u[0].length)return;_<0&&(_=0),y<0&&(y=0),M<0&&(M=0),R<0&&(R=0),_>=u.length&&(_=u.length-1),y>=u.length&&(y=u.length-1),R>=u[0].length&&(R=u[0].length-1),M>=u[0].length&&(M=u[0].length-1);const A=[];e.getRectMinMax(_,M,y,R,A);const T=A[0],I=A[1];if(!(g.z-m>I||g.z+m<T))for(let q=_;q<y;q++)for(let x=M;x<R;x++){let S=!1;if(e.getConvexTrianglePillar(q,x,!1),ne.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(S=this.convexConvex(t,e.pillarConvex,n,v,s,o,a,c,null,null,d,f,null)),d&&S||(e.getConvexTrianglePillar(q,x,!0),ne.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(S=this.convexConvex(t,e.pillarConvex,n,v,s,o,a,c,null,null,d,f,null)),d&&S))return!0}}sphereParticle(t,e,n,i,s,o,a,c,l,h,d){const u=Sx;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;const m=this.createContactEquation(c,a,e,t,l,h);u.normalize(),m.rj.copy(u),m.rj.scale(t.radius,m.rj),m.ni.copy(u),m.ni.negate(m.ni),m.ri.set(0,0,0),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}}planeParticle(t,e,n,i,s,o,a,c,l,h,d){const u=xx;u.set(0,0,1),a.quaternion.vmult(u,u);const p=yx;if(i.vsub(a.position,p),u.dot(p)<=0){if(d)return!0;const v=this.createContactEquation(c,a,e,t,l,h);v.ni.copy(u),v.ni.negate(v.ni),v.ri.set(0,0,0);const f=Mx;u.scale(u.dot(i),f),i.vsub(f,f),v.rj.copy(f),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(t,e,n,i,s,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,o,a,c,t,e,d)}convexParticle(t,e,n,i,s,o,a,c,l,h,d){let u=-1;const p=Ex,m=bx;let v=null;const f=wx;if(f.copy(i),f.vsub(n,f),s.conjugate(Wl),Wl.vmult(f,f),t.pointIsInside(f)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let g=0,_=t.faces.length;g!==_;g++){const y=[t.worldVertices[t.faces[g][0]]],M=t.worldFaceNormals[g];i.vsub(y[0],Xl);const R=-M.dot(Xl);if(v===null||Math.abs(R)<Math.abs(v)){if(d)return!0;v=R,u=g,p.copy(M)}}if(u!==-1){const g=this.createContactEquation(c,a,e,t,l,h);p.scale(v,m),m.vadd(i,m),m.vsub(n,m),g.rj.copy(m),p.negate(g.ni),g.ri.set(0,0,0);const _=g.ri,y=g.rj;_.vadd(i,_),_.vsub(c.position,_),y.vadd(n,y),y.vsub(a.position,y),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,o,a,c,l,h,d){return this.convexHeightfield(e,t,i,n,o,s,c,a,l,h,d)}particleCylinder(t,e,n,i,s,o,a,c,l,h,d){return this.convexParticle(e,t,i,n,o,s,c,a,l,h,d)}sphereTrimesh(t,e,n,i,s,o,a,c,l,h,d){const u=D_,p=U_,m=F_,v=O_,f=z_,g=B_,_=V_,y=N_,M=L_,R=W_;ne.pointToLocalFrame(i,o,n,f);const A=t.radius;_.lowerBound.set(f.x-A,f.y-A,f.z-A),_.upperBound.set(f.x+A,f.y+A,f.z+A),e.getTrianglesInAABB(_,R);const T=I_,I=t.radius*t.radius;for(let L=0;L<R.length;L++)for(let F=0;F<3;F++)if(e.getVertex(e.indices[R[L]*3+F],T),T.vsub(f,M),M.lengthSquared()<=I){if(y.copy(T),ne.pointToWorldFrame(i,o,y,T),T.vsub(n,M),d)return!0;let O=this.createContactEquation(a,c,t,e,l,h);O.ni.copy(M),O.ni.normalize(),O.ri.copy(O.ni),O.ri.scale(t.radius,O.ri),O.ri.vadd(n,O.ri),O.ri.vsub(a.position,O.ri),O.rj.copy(T),O.rj.vsub(c.position,O.rj),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}for(let L=0;L<R.length;L++)for(let F=0;F<3;F++){e.getVertex(e.indices[R[L]*3+F],u),e.getVertex(e.indices[R[L]*3+(F+1)%3],p),p.vsub(u,m),f.vsub(p,g);const O=g.dot(m);f.vsub(u,g);let N=g.dot(m);if(N>0&&O<0&&(f.vsub(u,g),v.copy(m),v.normalize(),N=g.dot(v),v.scale(N,g),g.vadd(u,g),g.distanceTo(f)<t.radius)){if(d)return!0;const z=this.createContactEquation(a,c,t,e,l,h);g.vsub(f,z.ni),z.ni.normalize(),z.ni.scale(t.radius,z.ri),z.ri.vadd(n,z.ri),z.ri.vsub(a.position,z.ri),ne.pointToWorldFrame(i,o,g,g),g.vsub(c.position,z.rj),ne.vectorToWorldFrame(o,z.ni,z.ni),ne.vectorToWorldFrame(o,z.ri,z.ri),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}}const q=k_,x=H_,S=G_,k=P_;for(let L=0,F=R.length;L!==F;L++){e.getTriangleVertices(R[L],q,x,S),e.getNormal(R[L],k),f.vsub(q,g);let O=g.dot(k);if(k.scale(O,g),f.vsub(g,g),O=g.distanceTo(f),ye.pointInTriangle(g,q,x,S)&&O<t.radius){if(d)return!0;let N=this.createContactEquation(a,c,t,e,l,h);g.vsub(f,N.ni),N.ni.normalize(),N.ni.scale(t.radius,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),ne.pointToWorldFrame(i,o,g,g),g.vsub(c.position,N.rj),ne.vectorToWorldFrame(o,N.ni,N.ni),ne.vectorToWorldFrame(o,N.ri,N.ri),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}}R.length=0}planeTrimesh(t,e,n,i,s,o,a,c,l,h,d){const u=new w,p=A_;p.set(0,0,1),s.vmult(p,p);for(let m=0;m<e.vertices.length/3;m++){e.getVertex(m,u);const v=new w;v.copy(u),ne.pointToWorldFrame(i,o,v,u);const f=C_;if(u.vsub(n,f),p.dot(f)<=0){if(d)return!0;const _=this.createContactEquation(a,c,t,e,l,h);_.ni.copy(p);const y=R_;p.scale(f.dot(p),y),u.vsub(y,y),_.ri.copy(y),_.ri.vsub(a.position,_.ri),_.rj.copy(u),_.rj.vsub(c.position,_.rj),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}}}const gi=new w,$i=new w,Ki=new w,w_=new w,E_=new w,b_=new Me,T_=new Me,A_=new w,C_=new w,R_=new w,P_=new w,L_=new w;new w;const I_=new w,N_=new w,D_=new w,U_=new w,F_=new w,O_=new w,z_=new w,B_=new w,k_=new w,H_=new w,G_=new w,V_=new Qe,W_=[],Rr=new w,Vl=new w,X_=new w,q_=new w,Y_=new w;function $_(r,t,e){let n=null;const i=r.length;for(let s=0;s!==i;s++){const o=r[s],a=X_;r[(s+1)%i].vsub(o,a);const c=q_;a.cross(t,c);const l=Y_;e.vsub(o,l);const h=c.dot(l);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const Pr=new w,K_=new w,j_=new w,Z_=new w,J_=[new w,new w,new w,new w,new w,new w],Q_=new w,tx=new w,ex=new w,nx=new w,ix=new w,sx=new w,rx=new w,ox=new w,ax=new w,cx=new w,lx=new w,hx=new w,ux=new w,dx=new w;new w;new w;const fx=new w,px=new w,mx=new w,gx=new w,vx=new w,_x=new w,xx=new w,yx=new w,Mx=new w,Sx=new w,Wl=new Me,wx=new w;new w;const Ex=new w,Xl=new w,bx=new w,Tx=new w,Ax=new w,Cx=[0],Rx=new w,Px=new w;class ql{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,o=i.length;let a=0;for(let c=0;c<s;c++){let l=!1;const h=n[c];for(;h>i[a];)a++;l=h===i[a],l||Yl(t,h)}a=0;for(let c=0;c<o;c++){let l=!1;const h=i[c];for(;h>n[a];)a++;l=n[a]===h,l||Yl(e,h)}}}function Yl(r,t){r.push((t&4294901760)>>16,t&65535)}const $o=(r,t)=>r<t?`${r}-${t}`:`${t}-${r}`;class Lx{constructor(){this.data={keys:[]}}get(t,e){const n=$o(t,e);return this.data[n]}set(t,e,n){const i=$o(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=$o(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class Ix extends qh{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new w,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new w,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new zv,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new g_,this.constraints=[],this.narrowphase=new S_(this),this.collisionMatrix=new Il,this.collisionMatrixPrevious=new Il,this.bodyOverlapKeeper=new ql,this.shapeOverlapKeeper=new ql,this.contactmaterials=[],this.contactMaterialTable=new Lx,this.defaultMaterial=new js("default"),this.defaultContactMaterial=new ro(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof fs?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=ye.ALL,n.from=t,n.to=e,n.callback=i,Ko.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=ye.ANY,n.from=t,n.to=e,n.result=i,Ko.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=ye.CLOSEST,n.from=t,n.to=e,n.result=i,Ko.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof Pt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=Se.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=Se.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(Se.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const c=this.bodies[a];c.previousPosition.lerp(c.position,o,c.interpolatedPosition),c.previousQuaternion.slerp(c.quaternion,o,c.interpolatedQuaternion),c.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=Ox,i=zx,s=this.bodies.length,o=this.bodies,a=this.solver,c=this.gravity,l=this.doProfiling,h=this.profile,d=Pt.DYNAMIC;let u=-1/0;const p=this.constraints,m=Fx;c.length();const v=c.x,f=c.y,g=c.z;let _=0;for(l&&(u=Se.now()),_=0;_!==s;_++){const L=o[_];if(L.type===d){const F=L.force,O=L.mass;F.x+=O*v,F.y+=O*f,F.z+=O*g}}for(let L=0,F=this.subsystems.length;L!==F;L++)this.subsystems[L].update();l&&(u=Se.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),l&&(h.broadphase=Se.now()-u);let y=p.length;for(_=0;_!==y;_++){const L=p[_];if(!L.collideConnected)for(let F=n.length-1;F>=0;F-=1)(L.bodyA===n[F]&&L.bodyB===i[F]||L.bodyB===n[F]&&L.bodyA===i[F])&&(n.splice(F,1),i.splice(F,1))}this.collisionMatrixTick(),l&&(u=Se.now());const M=Ux,R=e.length;for(_=0;_!==R;_++)M.push(e[_]);e.length=0;const A=this.frictionEquations.length;for(_=0;_!==A;_++)m.push(this.frictionEquations[_]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,M,this.frictionEquations,m),l&&(h.narrowphase=Se.now()-u),l&&(u=Se.now()),_=0;_<this.frictionEquations.length;_++)a.addEquation(this.frictionEquations[_]);const T=e.length;for(let L=0;L!==T;L++){const F=e[L],O=F.bi,N=F.bj,Z=F.si,z=F.sj;let tt;if(O.material&&N.material?tt=this.getContactMaterial(O.material,N.material)||this.defaultContactMaterial:tt=this.defaultContactMaterial,tt.friction,O.material&&N.material&&(O.material.friction>=0&&N.material.friction>=0&&O.material.friction*N.material.friction,O.material.restitution>=0&&N.material.restitution>=0&&(F.restitution=O.material.restitution*N.material.restitution)),a.addEquation(F),O.allowSleep&&O.type===Pt.DYNAMIC&&O.sleepState===Pt.SLEEPING&&N.sleepState===Pt.AWAKE&&N.type!==Pt.STATIC){const G=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),et=N.sleepSpeedLimit**2;G>=et*2&&(O.wakeUpAfterNarrowphase=!0)}if(N.allowSleep&&N.type===Pt.DYNAMIC&&N.sleepState===Pt.SLEEPING&&O.sleepState===Pt.AWAKE&&O.type!==Pt.STATIC){const G=O.velocity.lengthSquared()+O.angularVelocity.lengthSquared(),et=O.sleepSpeedLimit**2;G>=et*2&&(N.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(O,N,!0),this.collisionMatrixPrevious.get(O,N)||(As.body=N,As.contact=F,O.dispatchEvent(As),As.body=O,N.dispatchEvent(As)),this.bodyOverlapKeeper.set(O.id,N.id),this.shapeOverlapKeeper.set(Z.id,z.id)}for(this.emitContactEvents(),l&&(h.makeContactConstraints=Se.now()-u,u=Se.now()),_=0;_!==s;_++){const L=o[_];L.wakeUpAfterNarrowphase&&(L.wakeUp(),L.wakeUpAfterNarrowphase=!1)}for(y=p.length,_=0;_!==y;_++){const L=p[_];L.update();for(let F=0,O=L.equations.length;F!==O;F++){const N=L.equations[F];a.addEquation(N)}}a.solve(t,this),l&&(h.solve=Se.now()-u),a.removeAllEquations();const I=Math.pow;for(_=0;_!==s;_++){const L=o[_];if(L.type&d){const F=I(1-L.linearDamping,t),O=L.velocity;O.scale(F,O);const N=L.angularVelocity;if(N){const Z=I(1-L.angularDamping,t);N.scale(Z,N)}}}this.dispatchEvent(Dx),l&&(u=Se.now());const x=this.stepnumber%(this.quatNormalizeSkip+1)===0,S=this.quatNormalizeFast;for(_=0;_!==s;_++)o[_].integrate(t,x,S);this.clearForces(),this.broadphase.dirty=!0,l&&(h.integrate=Se.now()-u),this.stepnumber+=1,this.dispatchEvent(Nx);let k=!0;if(this.allowSleep)for(k=!1,_=0;_!==s;_++){const L=o[_];L.sleepTick(this.time),L.sleepState!==Pt.SLEEPING&&(k=!0)}this.hasActiveBodies=k}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(Fn,On),t){for(let s=0,o=Fn.length;s<o;s+=2)Cs.bodyA=this.getBodyById(Fn[s]),Cs.bodyB=this.getBodyById(Fn[s+1]),this.dispatchEvent(Cs);Cs.bodyA=Cs.bodyB=null}if(e){for(let s=0,o=On.length;s<o;s+=2)Rs.bodyA=this.getBodyById(On[s]),Rs.bodyB=this.getBodyById(On[s+1]),this.dispatchEvent(Rs);Rs.bodyA=Rs.bodyB=null}Fn.length=On.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(Fn,On),n){for(let s=0,o=Fn.length;s<o;s+=2){const a=this.getShapeById(Fn[s]),c=this.getShapeById(Fn[s+1]);zn.shapeA=a,zn.shapeB=c,a&&(zn.bodyA=a.body),c&&(zn.bodyB=c.body),this.dispatchEvent(zn)}zn.bodyA=zn.bodyB=zn.shapeA=zn.shapeB=null}if(i){for(let s=0,o=On.length;s<o;s+=2){const a=this.getShapeById(On[s]),c=this.getShapeById(On[s+1]);Bn.shapeA=a,Bn.shapeB=c,a&&(Bn.bodyA=a.body),c&&(Bn.bodyB=c.body),this.dispatchEvent(Bn)}Bn.bodyA=Bn.bodyB=Bn.shapeA=Bn.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new Qe;const Ko=new ye,Se=globalThis.performance||{};if(!Se.now){let r=Date.now();Se.timing&&Se.timing.navigationStart&&(r=Se.timing.navigationStart),Se.now=()=>Date.now()-r}new w;const Nx={type:"postStep"},Dx={type:"preStep"},As={type:Pt.COLLIDE_EVENT_NAME,body:null,contact:null},Ux=[],Fx=[],Ox=[],zx=[],Fn=[],On=[],Cs={type:"beginContact",bodyA:null,bodyB:null},Rs={type:"endContact",bodyA:null,bodyB:null},zn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Bn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},ti=9.81,yn=.44704,jo={length:4.25,width:2,height:1.12,wheelbase:2.75,trackF:1.7,trackR:1.72,wheelRadiusF:.345,wheelRadiusR:.36,wheelWidthF:.28,wheelWidthR:.34,cgHeight:.42,weightFront:.43,suspension:{rest:.2,travel:.15,kF:115e3,kR:128e3,damp:9e3,antiRoll:26e3},tire:{mu:1.45,muLat:1.4,peakSlipAngle:.13,peakSlipRatio:.1,rollRes:.012},aero:{CdA_low:.36,CdA_high:.55,ClA_low:.3,ClA_high:1.25},steerMax:.52,vMax:104.5,battery:{peakPowerKW:1500,kWh:200},fan:{maxPowerKW:180,maxSuctionG:2,spoolTime:.35,sealGap:.3,sealFull:.18}},eu={performance:{...jo,id:"performance",name:"Performance",tag:"Road ready · 2 seats",seats:2,massDry:1790,motorForce:34e3,motorPowerKW:1050,claim0to60:"< 1.6 s",price:"$50,000 reservation",tank:null,thrusters:[],desc:"Active aero + multi-mode fan suction. No thrusters."},thrust:{...jo,id:"thrust",name:"Thrust",tag:"Race ready · 2 seats",seats:2,massDry:1830,motorForce:34e3,motorPowerKW:1050,claim0to60:"< 0.9 s",price:"$250,000 reservation (limited)",tank:{volumeL:600,fillBar:350,minBar:20,fullThrustBar:60,isp:72,compressorKgS:1.2},thrusters:[{id:"R1",pos:[-2.08,.42,-.42],dir:[1,0,0],max:21e3,group:"boost"},{id:"R2",pos:[-2.08,.42,.42],dir:[1,0,0],max:21e3,group:"boost"}],desc:"Fan suction + twin rear cold-gas thrusters for sub-second launches."},rocket:{...jo,id:"rocket",name:"Rocket",tag:"Air ready · 1 seat · invite only",seats:1,massDry:1860,motorForce:34e3,motorPowerKW:1050,claim0to60:"< 0.59 s (event timer 0.81 s)",price:"Invite only · not road legal",tank:{volumeL:600,fillBar:350,minBar:20,fullThrustBar:60,isp:72,compressorKgS:1.2},thrusters:[{id:"R1",pos:[-2.08,.42,-.45],dir:[1,0,0],max:18500,group:"boost"},{id:"R2",pos:[-2.08,.42,.45],dir:[1,0,0],max:18500,group:"boost"},{id:"DFL",pos:[1.45,.18,-.8],dir:[0,1,0],max:14e3,group:"lift"},{id:"DFR",pos:[1.45,.18,.8],dir:[0,1,0],max:14e3,group:"lift"},{id:"DRL",pos:[-1.5,.18,-.82],dir:[0,1,0],max:14e3,group:"lift"},{id:"DRR",pos:[-1.5,.18,.82],dir:[0,1,0],max:14e3,group:"lift"},{id:"LFL",pos:[1.7,.45,-.98],dir:[0,0,1],max:4500,group:"side"},{id:"LFR",pos:[1.7,.45,.98],dir:[0,0,-1],max:4500,group:"side"},{id:"LRL",pos:[-1.75,.45,-.98],dir:[0,0,1],max:4500,group:"side"},{id:"LRR",pos:[-1.75,.45,.98],dir:[0,0,-1],max:4500,group:"side"}],desc:"10 perimeter cold-gas thrusters: boost, lift, flips and hover landings."}};class Xs extends Gt{constructor(){const t=Xs.SkyShader,e=new An({name:t.name,uniforms:Th.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:Ve,depthWrite:!1});super(new qt(1,1,1),e),this.isSky=!0}}Xs.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new D},up:{value:new D(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const Re={ramp:{R:7,Ls:9,segLen:.6,width:7.5,x0:0,z:0,thetaMax:Math.PI*200/180},stuntSpawn:{x:-70,z:0,yaw:0},lineup:{z:46,x0:34,spawnX:-90},drag:{z:-60,startX:-200},freeSpawn:{x:120,z:90,yaw:Math.PI}},Bs=1,Bx=2,jr=4,nu=8;function Is(r,t,e,n=1){const i=document.createElement("canvas");i.width=r,i.height=t;const s=i.getContext("2d");e(s,r,t);const o=new io(i);return o.wrapS=o.wrapT=Vr,o.repeat.set(n,n),o.colorSpace=qe,o.anisotropy=8,o}function Lr(r,t,e,n,i,s=9e3,o=2){r.fillStyle=n,r.fillRect(0,0,t,e);for(let a=0;a<s;a++){const c=(Math.random()-.5)*i;r.fillStyle=`rgba(${c>0?255:0},${c>0?255:0},${c>0?255:0},${Math.abs(c)})`,r.fillRect(Math.random()*t,Math.random()*e,o,o)}}function $l(r,{w:t=1024,h:e=256,font:n="bold 120px system-ui",color:i="#fff",bg:s="rgba(0,0,0,0)"}={}){return Is(t,e,a=>{a.fillStyle=s,a.fillRect(0,0,t,e),a.font=n,a.fillStyle=i,a.textAlign="center",a.textBaseline="middle",a.fillText(r,t/2,e/2)})}function kx(r,t,e,n){const i={dynamic:[],rampSegments:[],lineupCars:[],refillPads:[],cinematicCams:[],lights:[]},s=new Xs;s.scale.setScalar(45e3),r.add(s);const o=s.material.uniforms;o.turbidity.value=6,o.rayleigh.value=2.2,o.mieCoefficient.value=.006,o.mieDirectionalG.value=.86;const a=new D().setFromSphericalCoords(1,Fa.degToRad(84),Fa.degToRad(235));o.sunPosition.value.copy(a);const c=new Oa(e),l=new Fh,h=new Xs;h.scale.setScalar(1e3),Object.assign(h.material.uniforms.sunPosition.value,a);for(const U of["turbidity","rayleigh","mieCoefficient","mieDirectionalG"])h.material.uniforms[U].value=o[U].value;l.add(h),r.environment=c.fromScene(l).texture,r.fog=new ic(13609354,.0011);const d=new cv(12374783,5916214,.9);r.add(d);const u=new dv(16763034,2.6);u.position.copy(a).multiplyScalar(200),u.castShadow=!0;const p=n==="high"?4096:2048;u.shadow.mapSize.set(p,p);const m=u.shadow.camera;m.left=-70,m.right=70,m.top=70,m.bottom=-70,m.near=10,m.far=500,u.shadow.bias=-3e-4,u.shadow.normalBias=.03,r.add(u),r.add(u.target),i.sun=u,i.sunDir=a;const v=Is(1024,1024,(U,Q,ct)=>{Lr(U,Q,ct,"#b9b2a6",.1,4e4,2),U.strokeStyle="rgba(60,55,50,0.35)",U.lineWidth=3;for(let ft=0;ft<=4;ft++)U.beginPath(),U.moveTo(ft*Q/4,0),U.lineTo(ft*Q/4,ct),U.stroke(),U.beginPath(),U.moveTo(0,ft*ct/4),U.lineTo(Q,ft*ct/4),U.stroke();for(let ft=0;ft<40;ft++)U.fillStyle=`rgba(40,35,30,${Math.random()*.08})`,U.beginPath(),U.arc(Math.random()*Q,Math.random()*ct,20+Math.random()*120,0,7),U.fill()},60),f=new Gt(new sn(1200,1200),new te({map:v,roughness:.92}));f.rotation.x=-Math.PI/2,f.receiveShadow=!0,r.add(f);const g=Is(512,512,(U,Q,ct)=>Lr(U,Q,ct,"#8a7155",.18,3e4,3),200),_=new Gt(new sn(2e4,2e4),new te({map:g,roughness:1}));_.rotation.x=-Math.PI/2,_.position.y=-.03,r.add(_);const y=new Pt({mass:0,shape:new Wn(new w(4e3,1,4e3)),collisionFilterGroup:Bs,collisionFilterMask:-1});y.position.set(0,-1,0),t.addBody(y),i.ground=y;const M=(U,Q,ct,ft,lt,Nt,Dt,Xt=0,B=!0)=>{const xt=new Gt(new qt(U,Q,ct),ft);if(xt.position.set(lt,Nt,Dt),xt.rotation.y=Xt,xt.castShadow=!0,xt.receiveShadow=!0,r.add(xt),B){const j=new Pt({mass:0,shape:new Wn(new w(U/2,Q/2,ct/2)),collisionFilterGroup:Bs});j.position.set(lt,Nt,Dt),j.quaternion.setFromEuler(0,Xt,0),t.addBody(j)}return xt},R=Re.drag,A=Is(512,512,(U,Q,ct)=>Lr(U,Q,ct,"#2b2c2e",.16,5e4,2),1);A.repeat.set(350,6);const T=new Gt(new sn(1900,26),new te({map:A,roughness:.85}));T.rotation.x=-Math.PI/2,T.position.set(R.startX+930,.012,R.z),T.receiveShadow=!0,r.add(T);const I=new Hn({color:15921906}),q=new Hn({color:15777824}),x=(U,Q,ct,ft,lt)=>{const Nt=new Gt(new sn(ct,ft),lt);Nt.rotation.x=-Math.PI/2,Nt.position.set(U,.02,Q),r.add(Nt)};x(R.startX+930,R.z-12.5,1900,.3,I),x(R.startX+930,R.z+12.5,1900,.3,I);for(let U=R.startX;U<R.startX+1850;U+=12)x(U,R.z,6,.2,q);const S=[[0,"START"],[18.288,"60 FT"],[100.584,"330 FT"],[201.168,"1/8 MILE"],[304.8,"1000 FT"],[402.336,"1/4 MILE"],[1e3,"1 KM"],[1609.344,"1 MILE"]],k=new te({color:3159098,metalness:.6,roughness:.4});for(const[U,Q]of S){x(R.startX+U,R.z,.4,25,Q==="START"||Q==="1/4 MILE"?I:q);const ct=new Gt(new sn(6,1.5),new Hn({map:$l(Q,{bg:"#111",color:Q==="1/4 MILE"?"#ff4040":"#fff"}),side:He}));ct.position.set(R.startX+U,7.2,R.z),ct.rotation.y=-Math.PI/2,r.add(ct),M(.4,7,.4,k,R.startX+U,3.5,R.z-14,0,!0),M(.4,7,.4,k,R.startX+U,3.5,R.z+14,0,!0),M(.4,.4,28.4,k,R.startX+U,7.9,R.z,0,!1)}const L=new Fe;L.position.set(R.startX-3,0,R.z-3),r.add(L),L.add(new Gt(new qt(.3,3.2,.3),k).translateY(1.6)),i.treeLights=[],[16755200,16755200,16755200,65348,16711680].forEach((U,Q)=>{const ct=new te({color:1118481,emissive:U,emissiveIntensity:0}),ft=new Gt(new ds(.16,12,8),ct);ft.position.set(.25,3-Q*.42,0),L.add(ft),i.treeLights.push(ct)});const O=document.createElement("canvas");O.width=1024,O.height=384;const N=new io(O);N.colorSpace=qe;const Z=new Gt(new sn(12,4.5),new Hn({map:N}));Z.position.set(R.startX+30,6.5,R.z-22),r.add(Z),M(.5,4.5,.5,k,R.startX+30,2.2,R.z-22.4,0,!1),i.dragBoard={canvas:O,tex:N};const z=Re.ramp,tt=[];{let U=z.x0,Q=0,ct=0;const ft=.05;tt.push([U,Q,ct]);let lt=0,Nt=0;for(let Dt=0;ct<z.thetaMax;Dt+=ft){const Xt=Math.min(Dt/z.Ls,1)/z.R;ct+=Xt*ft,U+=Math.cos(ct)*ft,Q+=Math.sin(ct)*ft,lt+=ft,lt-Nt>=z.segLen&&(tt.push([U,Q,ct]),Nt=lt)}}i.rampPath=tt,i.rampTop=Math.max(...tt.map(U=>U[1]));const G=new te({color:3816770,roughness:.75,metalness:.25}),et=Is(256,256,(U,Q,ct)=>{Lr(U,Q,ct,"#2e3136",.18,8e3,2),U.fillStyle="#e8e8e8",U.fillRect(0,0,8,ct),U.fillRect(Q-8,0,8,ct)},1),pt=new te({map:et,roughness:.8,metalness:.1}),Ot=.4;for(let U=0;U<tt.length-1;U++){const[Q,ct]=tt[U],[ft,lt]=tt[U+1],Nt=Math.atan2(lt-ct,ft-Q),Dt=Math.hypot(ft-Q,lt-ct)+.05,Xt=(Q+ft)/2+Math.sin(Nt)*Ot/2,B=(ct+lt)/2-Math.cos(Nt)*Ot/2,xt=new Gt(new qt(Dt,Ot,z.width),[G,G,pt,G,G,G]);xt.position.set(Xt,B,z.z),xt.rotation.z=Nt,xt.castShadow=!0,xt.receiveShadow=!0,r.add(xt);const j=new Pt({mass:0,shape:new Wn(new w(Dt/2,Ot/2,z.width/2)),collisionFilterGroup:nu,collisionFilterMask:jr});j.position.set(Xt,B,z.z),j.quaternion.setFromEuler(0,0,Nt),t.addBody(j),i.rampSegments.push(j);for(const rt of[-1,1]){const wt=new Gt(new qt(Dt,.9,.12),G);if(wt.position.set((Q+ft)/2-Math.sin(Nt)*.3,(ct+lt)/2+Math.cos(Nt)*.3,z.z+rt*(z.width/2+.06)),wt.rotation.z=Nt,wt.castShadow=!0,r.add(wt),U%3===0){const Tt=new Gt(new qt(.5,.04,.08),new te({color:1118481,emissive:10474495,emissiveIntensity:2}));Tt.position.set((Q+ft)/2-Math.sin(Nt)*.03,(ct+lt)/2+Math.cos(Nt)*.03,z.z+rt*(z.width/2-.15)),Tt.rotation.z=Nt,r.add(Tt)}}}const J=new te({color:9080726,roughness:.5,metalness:.8}),ot=Math.max(...tt.map(U=>U[0]));for(const U of[-1,1]){const Q=z.z+U*(z.width/2+.6);for(let ft=0;ft<tt.length;ft+=6){const[lt,Nt,Dt]=tt[ft],Xt=lt+Math.sin(Dt)*.6,B=Nt-Math.cos(Dt)*.6;B>.6&&M(.26,B,.26,J,Xt,B/2,Q,0,!1)}const ct=new Gt(new qt(.3,i.rampTop+1.5,.3),J);ct.position.set(ot+1.8,(i.rampTop+1.5)/2,Q),ct.castShadow=!0,r.add(ct);for(let ft=0;ft<Math.floor(i.rampTop/2.1);ft++){const lt=new Gt(new qt(.12,3.3,.12),J);lt.position.set(ot+1.1,1.1+ft*2.1,Q),lt.rotation.z=ft%2?.6:-.6,r.add(lt)}}for(let U=0;U<tt.length;U+=8){const[Q,ct,ft]=tt[U];if(ct<1)continue;const lt=new Gt(new qt(.3,.3,z.width+1.6),J);lt.position.set(Q+Math.sin(ft)*.6,ct-Math.cos(ft)*.6,z.z),r.add(lt)}const bt=new Gt(new zs(5.5,6,48),new Hn({color:16777215}));bt.rotation.x=-Math.PI/2;const vt=tt[tt.length-1][0]-7;bt.position.set(vt,.02,z.z),r.add(bt);const X=new Gt(new zs(1.6,2,40),new Hn({color:16724016}));X.rotation.x=-Math.PI/2,X.position.set(vt,.021,z.z),r.add(X),i.landingZone=new D(vt,0,z.z),x(-40,z.z-z.width/2,80,.25,I),x(-40,z.z+z.width/2,80,.25,I);const st=Re.lineup,_t=[{name:"two-seat robotaxi",L:4.3,W:1.95,H:1.25,col:13225168,shape:"pod"},{name:"angular pickup",L:5.7,W:2.2,H:1.9,col:10988979,shape:"wedge",metal:.9},{name:"semi tractor",L:7,W:2.6,H:3.9,col:15790320,shape:"semi"},{name:"crossover",L:4.75,W:1.95,H:1.62,col:1780298,shape:"suv"},{name:"sedan",L:4.72,W:1.9,H:1.44,col:9113364,shape:"sedan"}];let Et=st.x0;_t.forEach((U,Q)=>{const ct=Et+U.W/2;Et+=U.W+.9;const ft=new Fe;ft.position.set(ct,0,st.z),ft.rotation.y=Math.PI/2*(Q%2?1:-1),r.add(ft);const lt=new Va({color:U.col,roughness:.3,metalness:U.metal??.4,clearcoat:.8,flatShading:!0}),Nt=new te({color:1119256,roughness:.1,metalness:.8}),Dt=new te({color:1118481,roughness:.9}),Xt=(rt,wt,Tt,Qt,pe,Le,ee,Ie=0)=>{const Ne=new Gt(new qt(rt,wt,Tt),Qt);return Ne.position.set(pe,Le,ee),Ne.rotation.z=Ie,Ne.castShadow=Ne.receiveShadow=!0,ft.add(Ne),Ne};if(U.shape==="semi")Xt(2.6,3,U.W,lt,2,2.2,0),Xt(.1,1,U.W*.9,Nt,3.31,2.9,0),Xt(4.2,.5,1.2,new te({color:3355443}),-1.2,1,0),Xt(2.6,.6,U.W,lt,2,.9,0);else if(U.shape==="wedge"){const rt=new Hh([new gt(-2.85,.45),new gt(2.85,.45),new gt(2.85,1.15),new gt(.2,1.9),new gt(-2.85,1.25)]),wt=new Gt(new ac(rt,{depth:U.W,bevelEnabled:!1}),lt);wt.position.z=-U.W/2,wt.castShadow=!0,ft.add(wt)}else Xt(U.L,U.H*.5,U.W,lt,0,U.H*.42,0),Xt(U.L*(U.shape==="pod"?.55:.5),U.H*.4,U.W*.86,Nt,U.shape==="suv"?-.2:-.1,U.H*.82,0);const B=U.L*.33,xt=U.shape==="semi"?.52:.36;for(const rt of[-1,1])for(const wt of[-1,1]){const Tt=new Gt(new Sn(xt,xt,.3,16).rotateX(Math.PI/2),Dt);Tt.position.set(rt*B,xt,wt*(U.W/2-.12)),Tt.castShadow=!0,ft.add(Tt)}const j=new Pt({mass:0,shape:new Wn(new w(U.W/2,U.H/2,U.L/2)),collisionFilterGroup:Bs});j.position.set(ct,U.H/2,st.z),t.addBody(j),i.lineupCars.push({...U,x:ct,body:j})}),i.lineupEnd=Et,x(0,st.z-4,220,.25,I),x(0,st.z+4,220,.25,I);const K=new te({color:663600,emissive:2271999,emissiveIntensity:1.2,transparent:!0,opacity:.6});for(const U of[[Re.stuntSpawn.x,Re.stuntSpawn.z],[st.spawnX,st.z],[R.startX-25,R.z],[Re.freeSpawn.x,Re.freeSpawn.z]]){const Q=new Gt(new sn(6,4),K);Q.rotation.x=-Math.PI/2,Q.position.set(U[0],.025,U[1]),r.add(Q),i.refillPads.push(new D(U[0],0,U[1]))}const C=new Gt(new zs(39.7,40.3,128),I);C.rotation.x=-Math.PI/2,C.position.set(180,.02,120),r.add(C);const ht=new te({color:16734720,roughness:.6});for(let U=0;U<14;U++){const Q=60+U*14,ct=160+(U%2?3:-3),ft=new Gt(new oc(.25,.7,12),ht);ft.castShadow=!0,r.add(ft);const lt=new Pt({mass:4,shape:new p_(.05,.25,.7,8),collisionFilterGroup:jr,linearDamping:.1,angularDamping:.3});lt.position.set(Q,.36,ct),t.addBody(lt),i.dynamic.push({mesh:ft,body:lt})}const mt=new te({color:4869458,roughness:.8}),ut=new qt(.45,.9,.4),dt=new te({roughness:.9}),Ft=n==="low"?600:2400,Mt=new Ag(ut,dt,Ft);let P=0;const E=new _e,W=new jt,nt=[[-25,-26,60,0],[55,20,50,Math.PI],[-30,26,40,Math.PI]];for(const[U,Q,ct,ft]of nt)for(let lt=0;lt<8;lt++){const Nt=M(ct,.5*(lt+1),1.2,mt,U,.25*(lt+1),Q+(ft===0?-lt*1.2:lt*1.2),0,!1);for(let Dt=0;Dt<ct/.75&&P<Ft;Dt++)Math.random()<.25||(E.position.set(U-ct/2+Dt*.75+Math.random()*.2,.5*(lt+1)+.45,Nt.position.z),E.rotation.y=ft,E.updateMatrix(),Mt.setMatrixAt(P,E.matrix),Mt.setColorAt(P,W.setHSL(Math.random(),.5,.25+Math.random()*.4)),P++)}Mt.count=P,Mt.castShadow=!0,r.add(Mt);const at=new te({color:10133670,metalness:.7,roughness:.4}),it=new te({color:16777215,emissive:16773848,emissiveIntensity:4});for(const[U,Q]of[[-45,-18],[30,-18],[-45,18],[30,22],[-140,-75],[60,-75],[260,-75]]){M(.6,22,.6,at,U,11,Q,0,!0);const ct=new Gt(new qt(3,1.6,.4),it);ct.position.set(U,22.5,Q),ct.lookAt(0,0,0),r.add(ct)}if(n!=="low")for(const[U,Q,ct,ft]of[[-45,-18,0,0],[30,22,0,0],[30,-18,40,46]]){const lt=new hv(16773341,900,140,.7,.5,1.6);lt.position.set(U,22,Q),lt.target.position.set(ct,2,ft),r.add(lt,lt.target),i.lights.push(lt)}const Lt=$l("ROADSTER ROCKET · FAN SIM",{w:2048,h:512,font:"bold 150px system-ui",color:"#e8f2ff",bg:"#05070c"}),St=new Gt(new sn(24,6),new Hn({map:Lt}));St.position.set(-10,12,-40),r.add(St),M(.8,9,.8,at,-20,4.5,-40.5,0,!1),M(.8,9,.8,at,0,4.5,-40.5,0,!1);const Ct=new te({color:7301734,roughness:.9});for(const[U,Q,ct]of[[-600,-900,70],[-520,-860,40],[300,-1100,95],[900,400,60],[-1e3,600,50]])M(10,ct,10,Ct,U,ct/2,Q,0,!1),M(22,4,22,Ct,U,ct*.8,Q,0,!1);const Zt=new Gt(new ds(9,16,12),Ct);return Zt.position.set(450,40,-700),r.add(Zt),M(2,36,2,Ct,450,18,-700,0,!1),i.cinematicCams=[new D(-14,1.2,12),new D(14,3,-12),new D(-30,6,-10),new D(48,1.5,54),new D(20,8,36),new D(-150,1.2,-48),new D(60,2,-72),new D(230,1.5,-48)],t.bodies.forEach(U=>{U.aabbNeedsUpdate=!0,U.updateAABB()}),i}const iu=(r,t,e)=>r+(t-r)*e;function vi(r,t){if(t<=r[0][0])return r[0][1];for(let e=1;e<r.length;e++)if(t<=r[e][0]){const n=(t-r[e-1][0])/(r[e][0]-r[e-1][0]);return iu(r[e-1][1],r[e][1],n)}return r[r.length-1][1]}const bi=1.4,Ti=-1.35;let Ps=null;function Hx(){if(Ps)return Ps;const r=document.createElement("canvas");r.width=256,r.height=160;const t=r.getContext("2d");t.fillStyle="#05080f",t.fillRect(0,0,256,160),t.fillStyle="#1b2a44";for(let e=0;e<6;e++)t.fillRect(10+e*40,90,34,60);return t.fillStyle="#7fd0ff",t.font="bold 48px system-ui",t.fillText("0",20,60),t.font="16px system-ui",t.fillText("mph · TRACK",70,58),Ps=new io(r),Ps.colorSpace=qe,Ps}function Gx(r,t={}){const e=new Fe;e.name="roadster";const n=r.length/2,i={paint:new Va({side:He,color:15659246,roughness:.38,metalness:.05,clearcoat:.6,clearcoatRoughness:.35,sheen:.4,sheenColor:new jt(14673663),flatShading:!0}),glass:new Va({side:He,depthWrite:!1,color:13214282,roughness:.05,metalness:.85,transparent:!0,opacity:.72,flatShading:!0,envMapIntensity:1.6}),carbon:new te({color:1382170,roughness:.55,metalness:.3,flatShading:!0,side:He}),black:new te({color:460810,roughness:.7,metalness:.1}),metal:new te({color:10134445,roughness:.25,metalness:1}),nozzle:new te({color:7171955,roughness:.3,metalness:1,side:He}),tire:new te({color:1118481,roughness:.92}),rim:new te({color:2764081,roughness:.3,metalness:.9}),head:new te({color:16777215,emissive:15267071,emissiveIntensity:3}),tail:new te({color:5570560,emissive:16718354,emissiveIntensity:2.5}),seat:new te({color:15921903,roughness:.8}),suede:new te({color:5593180,roughness:1}),screen:new te({color:329484,emissive:16777215,emissiveMap:Hx(),emissiveIntensity:.9}),caliper:new te({color:9211796,roughness:.4,metalness:.8})},s=[],o=46;for(let X=0;X<=o;X++)s.push(iu(-n,n,X/o));[-.75,.95,1.55,-1.6].forEach(X=>s.push(X)),s.sort((X,st)=>X-st);const a=[[-n,.8],[-n+.06,.86],[-1.7,.9],[-.95,.99],[-.45,1.09],[-.1,r.height],[.35,1.08],[.95,.8],[1.55,.66],[n-.15,.52],[n,.36]],c=[[-n,.78],[-1.7,.84],[-.75,.86],[.95,.76],[1.55,.64],[n-.15,.5],[n,.35]],l=[[-n,.66],[-1.35,.72],[-.6,.62],[.4,.58],[1.4,.66],[n-.2,.44],[n,.3]],h=[[-n,.9],[-n+.15,.97],[-1.35,1],[-.55,.93],[.4,.94],[1.4,.99],[n-.25,.92],[n,.8]],d=[[-n,.8],[-1.35,.86],[-.6,.72],[.2,.74],[.95,.8],[1.4,.88],[n,.72]],u=[[-n,.62],[-1,.56],[-.3,.46],[.4,.48],[.95,.64],[n,.62]],p=.14,m=.46;function v(X){let st=p;for(const _t of[bi,Ti]){const Et=_t===bi?r.wheelRadiusF:r.wheelRadiusR,K=X-_t;Math.abs(K)<m&&(st=Math.max(st,Et+Math.sqrt(m*m-K*K)-.02))}return st}const f=[];for(const X of s){const st=vi(h,X),_t=v(X),Et=vi(l,X),K=vi(c,X),C=vi(a,X),ht=Math.min(vi(d,X),st-.03),mt=Math.min(vi(u,X),ht-.05),dt=_t>p+.001?Math.min(_t+.02,Et-.05):p+.13;f.push([[0,p],[st*.9,p],[st,Math.max(dt,Math.min(_t,Et-.04))],[st*.985,Math.max(Et,_t+.03)],[ht,Math.max(K,Et+.02)],[mt,Math.max(C-.03,K+.02)],[0,Math.max(C,K+.03)]])}const g=[],_=[],y=[],M=f[0].length;for(let X=0;X<s.length;X++){for(let st=0;st<M;st++)g.push(s[X],f[X][st][1],f[X][st][0]);for(let st=0;st<M;st++)g.push(s[X],f[X][st][1],-f[X][st][0])}const R={0:[],1:[],2:[]};for(let X=0;X<s.length-1;X++){const st=(s[X]+s[X+1])/2,_t=st>-.75&&st<.95;for(let Et=0;Et<2;Et++)for(let K=0;K<M-1;K++){const C=X*2*M+Et*M+K,ht=C+1,mt=C+2*M,ut=ht+2*M;let dt=0;K<=1&&(dt=2),_t&&K>=4&&(dt=1),_t&&K===3&&st>-.45&&st<.75&&(dt=1),Et===0?R[dt].push(C,mt,ht,ht,mt,ut):R[dt].push(C,ht,mt,ht,ut,mt)}}let A=0;for(const X of[0,1,2])_.push(...R[X]),y.push([A,R[X].length,X]),A+=R[X].length;const T=_.length;for(const X of[0,s.length-1]){const st=X*2*M,_t=X!==0;for(let Et=0;Et<M-1;Et++){const K=st+Et,C=st+Et+1,ht=st+M+Et,mt=st+M+Et+1;_t?_.push(K,C,ht,ht,C,mt):_.push(K,ht,C,ht,mt,C)}}y.push([T,_.length-T,2]);const I=new ze;I.setAttribute("position",new ue(g,3)),I.setIndex(_),y.forEach(([X,st,_t])=>I.addGroup(X,st,_t));const q=I.toNonIndexed();q.computeVertexNormals();const x=new Gt(q,[i.paint,i.glass,i.carbon]);x.castShadow=!0,x.receiveShadow=!0,e.add(x);const S=(X,st,_t,Et,K,C=0,ht=0,mt=0,ut=e)=>{const dt=new Gt(X,st);return dt.position.set(_t,Et,K),dt.rotation.set(C,ht,mt),dt.castShadow=!0,ut.add(dt),dt},k=vi(c,n-.06);S(new qt(.03,.022,1.42),i.head,n-.04,k-.03,0),S(new qt(.02,.05,1.86),i.tail,-n-.005,.74,0),S(new qt(.06,.32,1.75),i.black,-n+.02,.45,0),S(new qt(.35,.03,1.8),i.carbon,n-.12,.13,0),S(new qt(.04,.09,1.2),i.black,n-.02,.22,0);for(const X of[-1,1]){const st=S(new qt(.62,.16,.04),i.black,-.72,.5,X*.935,0,0,-.18);st.rotation.y=X*.08,S(new qt(.14,.04,.1),i.carbon,.72,.8,X*.84),S(new qt(2.3,.05,.05),i.carbon,0,.12,X*.93)}for(let X=-3;X<=3;X++)S(new qt(.55,.16,.012),i.carbon,-n+.28,.18,X*.22,0,0,.18);const L=[],F=new qt(.01,.16,.045);for(const X of[-.5,.5]){const st=S(new cc(.19,.025,8,24),i.metal,-n-.01,.42,X,0,Math.PI/2,0);st.castShadow=!1;const _t=new Fe;_t.position.set(-n+0,.42,X),e.add(_t);for(let Et=0;Et<9;Et++){const K=new Gt(F,i.rim),C=Et/9*Math.PI*2;K.position.set(0,Math.cos(C)*.09,Math.sin(C)*.09),K.rotation.x=-C,K.rotation.y=.5,_t.add(K)}_t.add(new Gt(new Sn(.04,.04,.04,12).rotateZ(Math.PI/2),i.metal)),L.push(_t)}const O=new Fe;O.position.set(-1.78,.86,0),e.add(O),S(new qt(.32,.025,1.72),i.carbon,0,.14,0,0,0,0,O);for(const X of[-.55,.55])S(new qt(.08,.16,.02),i.carbon,.02,.06,X,0,0,0,O);for(const X of[-.87,.87])S(new qt(.3,.09,.012),i.carbon,0,.15,X,0,0,0,O);O.userData.blade=O.children[0];const N={},Z=new Kr([new gt(.035,0),new gt(.045,.03),new gt(.07,.09),new gt(.085,.12)],16);for(const X of r.thrusters){const st=X.max>15e3?1.25:X.max>9e3?1:.6,_t=new Gt(Z,i.nozzle);_t.scale.setScalar(st);const Et=new D(...X.pos);Et.y+=0,_t.position.copy(Et);const K=new D(...X.dir).negate();_t.quaternion.setFromUnitVectors(new D(0,1,0),K),_t.userData.exhaust=K,e.add(_t),N[X.id]=_t}const z=[],tt=(X,st)=>{const _t=new Fe,Et=[],K=X,C=X*.74;for(let ut=0;ut<=10;ut++){const dt=-Math.PI/2+ut/10*Math.PI;Et.push(new gt(C+(K-C)*(.55+.45*Math.cos(dt)),st/2*Math.sin(dt)))}const ht=new Gt(new Kr(Et,32).rotateX(Math.PI/2),i.tire);ht.castShadow=!0,_t.add(ht);const mt=new Gt(new Sn(C,C,st*.7,28).rotateX(Math.PI/2),i.rim);_t.add(mt);for(let ut=0;ut<6;ut++){const dt=new Gt(new qt(.05,C*.95,.03),i.metal);dt.rotation.z=ut/6*Math.PI*2,dt.position.z=st*.36,_t.add(dt)}return _t.add(new Gt(new Sn(.05,.05,st*.8,12).rotateX(Math.PI/2),i.metal)),_t},G=[{x:bi,z:r.trackF/2,r:r.wheelRadiusF,w:r.wheelWidthF,front:!0},{x:bi,z:-r.trackF/2,r:r.wheelRadiusF,w:r.wheelWidthF,front:!0},{x:Ti,z:r.trackR/2,r:r.wheelRadiusR,w:r.wheelWidthR,front:!1},{x:Ti,z:-r.trackR/2,r:r.wheelRadiusR,w:r.wheelWidthR,front:!1}];for(const X of G){const st=new Fe;st.position.set(X.x,X.r,X.z),e.add(st);const _t=tt(X.r,X.w);X.z<0&&(_t.rotation.y=Math.PI);const Et=new Fe;Et.add(_t),st.add(Et);const K=new Gt(new Sn(X.r*.62,X.r*.62,.03,24).rotateX(Math.PI/2),i.metal);K.position.z=-Math.sign(X.z)*.04,st.add(K);const C=new Gt(new qt(.16,.09,.06),i.caliper);C.position.set(-.12,.12,Math.sign(X.z)*0),st.add(C),z.push({pivot:st,spin:_t,holder:Et,...X,baseY:X.r});const ht=new Gt(new Sn(m-.01,m-.01,.34,20,1,!0,0,Math.PI).rotateX(Math.PI/2).rotateZ(-Math.PI/2),new te({color:328965,side:He}));ht.rotation.set(Math.PI/2,0,0),ht.geometry=new Sn(m-.01,m-.01,.36,20,1,!0,Math.PI/2,Math.PI),ht.rotation.set(Math.PI/2,0,0),ht.position.set(X.x,X.r,X.z*.98),e.add(ht)}const et=new Fe;e.add(et),S(new qt(.5,.12,1.5),i.suede,.62,.66,0,0,0,-.2,et),S(new qt(.02,.2,.3),i.screen,.42,.78,0,0,0,.35,et);const pt=r.seats===1?[0]:[-.33,.33],Ot=pt[0];for(const X of pt)S(new qt(.55,.1,.48),i.seat,-.25,.26,X,0,0,0,et),S(new qt(.1,.62,.46),i.seat,-.58,.55,X,0,0,.32,et);const J=new Fe;J.position.set(.3,.62,Ot),J.rotation.z=.35,et.add(J),S(new qt(.03,.08,.3),i.black,0,0,0,0,0,0,J);for(const X of[-.15,.15])S(new qt(.035,.16,.035),i.black,0,.04,X,0,0,0,J);for(const X of[-.12,.12])S(new qt(.015,.07,.11),i.screen,.46,.76,Ot+X,0,0,.4,et);const ot=new Fe;ot.position.set(-.2,.32,Ot),et.add(ot);const bt=new te({color:16053492,roughness:.35,metalness:.2}),vt=new te({color:1118741,roughness:.2,metalness:.6});S(new qt(.22,.42,.34),bt,-.16,.3,0,0,0,.3,ot),S(new ds(.105,16,12),bt,-.04,.62,0,0,0,0,ot),S(new ds(.09,16,12,-Math.PI/2.4,Math.PI/1.2,Math.PI/3,Math.PI/3),vt,0,.62,0,0,0,0,ot);for(const X of[-.15,.15])S(new qt(.36,.06,.06),vt,.08,.36,X,0,0,-.35,ot),S(new qt(.4,.08,.09),bt,.15,.04,X*.8,0,0,0,ot);return e.traverse(X=>{X.isMesh&&(X.receiveShadow=!0)}),{group:e,wheels:z,fans:L,wing:O,nozzles:N,interior:et,robot:ot,mats:i,driverEye:new D(-.12,1,Ot)}}const Kl=1.2,jl=287,Zl=293,Vx=9.80665,Ir=()=>new w,Xe=(r,t,e)=>Math.max(t,Math.min(e,r));class Wx{constructor(t,e){this.world=t,this.spec=e;const n=e.suspension;this.Lmax=n.rest,this.cg=e.cgHeight;const i=e.tank;this.airMaxKg=i?i.fillBar*1e5*i.volumeL/1e3/(jl*Zl):0,this.airKg=this.airMaxKg,this.body=new Pt({mass:e.massDry+this.airKg,collisionFilterGroup:Bx,collisionFilterMask:Bs|jr,angularDamping:.02,linearDamping:0}),this.body.addShape(new Wn(new w(1.9,.25,.95)),new w(0,-this.cg+.2+.25,0)),this.body.addShape(new Wn(new w(.85,.16,.55)),new w(-.1,-this.cg+.16+.54+.16,0)),this._tireSpheres=!0,this.body.material=new js({friction:.08,restitution:.02}),t.addBody(this.body);const s=this.body.mass;this.wheels=[{x:bi,z:e.trackF/2,front:!0},{x:bi,z:-e.trackF/2,front:!0},{x:Ti,z:e.trackR/2,front:!1},{x:Ti,z:-e.trackR/2,front:!1}].map(o=>{const a=o.front?e.wheelRadiusF:e.wheelRadiusR,c=o.front?n.kF:n.kR,l=-Ti/(bi-Ti),d=s*ti*(o.front?l:1-l)/2/c,u=-this.cg+a+this.Lmax-d;return{...o,r:a,k:c,x0:d,mount:new w(o.x,u,o.z),comp:d,prevComp:d,len:this.Lmax-d,contact:!1,point:Ir(),normal:Ir(),Fz:0,Fx:0,Fy:0,steer:0,spin:0,omega:0,slip:0,slipAngle:0,body:null}}),this.floorY=-this.cg+.14,this.body.updateMassProperties(),this.thrusters=e.thrusters.map(o=>({...o,p:new w(o.pos[0],o.pos[1]-this.cg,o.pos[2]),d:new w(...o.dir),cmd:0,level:0,force:0})),this.input={throttle:0,brake:0,steer:0,handbrake:0,boost:0,lift:0,pitch:0,roll:0,yaw:0,park:0},this.fanMode=1,this.fan=0,this.fanCmd=0,this.suctionN=0,this.seal=0,this.wingHigh=!0,this.trackMode=!1,this.assist=!0,this.landAssist=e.id==="rocket",this.gForce=new D,this._vPrev=Ir(),this.powerKW=0,this.fanKW=0,this.motorKW=0,this.contacts=0,this.airTime=0,this.energyKWh=e.battery.kWh,this.thrustTotal=0,this.refilling=!1,this._ray=new fs,this.time=0,this._pre=()=>this.step(t.dt??1/120),t.addEventListener("preStep",this._pre)}get pressureBar(){const t=this.spec.tank;return t?this.airKg*jl*Zl/(t.volumeL/1e3)/1e5:0}get speed(){return this.body.velocity.length()}get forwardSpeed(){const t=this.body.quaternion.vmult(new w(1,0,0));return this.body.velocity.dot(t)}dispose(){this.world.removeEventListener("preStep",this._pre),this.world.removeBody(this.body)}reset(t,e,n,i){const s=this.body;s.position.set(t,e??this.cg+.02,n),s.quaternion.setFromEuler(0,i,0),s.velocity.setZero(),s.angularVelocity.setZero(),s.force.setZero(),s.torque.setZero(),this.refill(),this.fan=0,this.thrusters.forEach(o=>{o.level=0,o.cmd=0}),this.wheels.forEach(o=>{o.comp=o.x0,o.prevComp=o.x0,o.omega=0}),this._vPrev.setZero(),this.airTime=0}refill(){this.airKg=this.airMaxKg,this.updateMass()}updateMass(){this.body.mass=this.spec.massDry+this.airKg,this.body.updateMassProperties()}step(t){const e=this.body,n=this.spec,i=this.input;this.time+=t;const s=e.quaternion,o=s.vmult(new w(0,1,0)),a=s.vmult(new w(1,0,0)),c=s.vmult(new w(0,0,1)),l=e.velocity,h=l.dot(a),d=l.length(),u=e.mass,p=i.steer*n.steerMax/(1+Math.abs(h)/22);for(const G of this.wheels)if(G.front){const et=1+.12*Math.sign(p)*Math.sign(G.z);G.steer+=(p*et-G.steer)*Math.min(1,t*12)}const m=n.suspension,v=this.trackMode?.05:0;let f=0;const g=Ir();let _=0;for(const G of this.wheels){const et=e.pointToWorldFrame(G.mount),pt=this.Lmax+G.r+.05,Ot=et.vadd(o.scale(-pt));this._ray.reset(),this.world.raycastClosest(et,Ot,{collisionFilterMask:Bs|jr|nu,skipBackfaces:!0},this._ray),G.prevComp=G.comp,this._ray.hasHit&&this._ray.distance-G.r<=this.Lmax?(G.contact=!0,f++,G.len=Math.max(0,this._ray.distance-G.r),G.comp=this.Lmax-G.len,G.point.copy(this._ray.hitPointWorld),G.normal.copy(this._ray.hitNormalWorld),G.body=this._ray.body,g.vadd(G.normal,g),_+=G.len):(G.contact=!1,G.len=this.Lmax,G.comp=0,G.Fz=0,G.body=null)}this.contacts=f;const y=(this.wheels[0].comp-this.wheels[1].comp)*m.antiRoll,M=(this.wheels[2].comp-this.wheels[3].comp)*m.antiRoll;for(let G=0;G<4;G++){const et=this.wheels[G];if(!et.contact)continue;const pt=et.comp-v+(this.trackMode,0),Ot=(et.comp-et.prevComp)/t;let J=et.k*Math.max(pt,0)+m.damp*Ot+(G<2?G===0?y:-y:G===2?M:-M);et.comp>this.Lmax-.025&&(J+=(et.comp-(this.Lmax-.025))*9e5+Math.max(0,Ot)*2e4),et.Fz=Math.max(0,J);const ot=et.point.vsub(e.position);e.applyForce(o.scale(et.Fz),ot)}const R=n.fan.maxPowerKW*this.fan**3;this.fanKW=R;const A=Math.min(n.motorPowerKW,n.battery.peakPowerKW-R);let T=0;const I=i.throttle,q=i.brake;I>0&&h<n.vMax&&(T=I*Math.min(n.motorForce,A*1e3/Math.max(Math.abs(h),1)));let x=!1;this._revT=q>0&&Math.abs(h)<.6&&I===0&&!i.park||this._revT>0&&q>0&&h<.6&&!i.park?(this._revT||0)+t:0,this._revT>.35&&(x=!0,T=h>-9?-q*n.motorForce*.35:0);const S=x?0:Math.max(q,i.park?1:0)*4.2*u*ti;this.motorKW=Math.abs(T*h)/1e3;const k=n.tire;let L=0;for(const G of this.wheels){if(!G.contact||G.Fz<=0){G.Fx=G.Fy=0,G.slip=0,G.omega*=.995;continue}const et=G.normal,pt=Math.cos(G.steer),Ot=Math.sin(G.steer),J=a.scale(pt).vadd(c.scale(Ot)),ot=J.vsub(et.scale(J.dot(et)));ot.normalize();const bt=ot.cross(et);bt.normalize();const vt=G.point.vsub(e.position),X=l.vadd(e.angularVelocity.cross(vt)),st=X.dot(ot),_t=X.dot(bt),Et=Math.atan2(_t,Math.max(Math.abs(st),4));G.slipAngle=Et;const K=!G.front&&i.handbrake>0?.45:1,C=k.muLat*K,ht=k.mu*K,mt=2.07/k.peakSlipAngle;let dt=-C*G.Fz*Math.sin(1.4*Math.atan(mt*Et));const Ft=(G.front?.4:.6)/2;let Mt=T*Ft;const P=(G.front?.6:.4)/2,E=u/4;let W=S*P+(i.handbrake>0&&!G.front?.8*u*ti/2:0)+k.rollRes*G.Fz+(I===0&&!x?.02*G.Fz:0);W>0&&(Mt-=Xe(st*E/t,-W,W));const nt=ht*G.Fz,at=Math.hypot(Mt/ht*C,dt),it=C*G.Fz;if(G.slip=0,at>it){const St=it/at;G.slip=1-St,Mt*=St,dt*=St}Math.abs(Mt)>nt&&(G.slip=Math.max(G.slip,1-nt/Math.abs(Mt)),Mt=Math.sign(Mt)*nt),G.slip=Math.max(G.slip,Xe((Math.abs(Et)-k.peakSlipAngle)*3,0,1)),L=Math.max(L,G.slip),G.Fx=Mt,G.Fy=dt;const Lt=ot.scale(Mt).vadd(bt.scale(dt));e.applyForce(Lt,vt),G.body&&G.body.mass>0&&G.body.applyForce(Lt.scale(-1),G.point.vsub(G.body.position)),G.omega=st/G.r*(1+(T>0?G.slip*.6:-G.slip*.6))}this.slipMax=L;for(const G of this.wheels)G.contact||(G.omega*=.99),G.spin-=G.omega*t;const F=n.aero,O=this.wingHigh?F.CdA_high:F.CdA_low,N=this.wingHigh?F.ClA_high:F.ClA_low;if(d>.5){e.applyForce(l.scale(-.5*Kl*O*d));const G=.5*Kl*N*h*h;e.applyForce(o.scale(-G),a.scale(-.15)),this.downforceN=G}else this.downforceN=0;let Z=0;if(this.fanMode===2)Z=1;else if(this.fanMode===1){const G=o.y<.5,et=Math.abs(i.steer)*Xe(d/30,0,1);Z=Xe(Math.max(G?1:0,o.y<.95?.9:0,et*.8,(I+q)*Xe(d/15,.35,1)*.8,.15),0,1)}if(i.lift>.3&&(Z=0),this.fanCmd=Z,this.fan+=(Z-this.fan)*Math.min(1,t/(Z<this.fan&&i.lift>.3?.08:n.fan.spoolTime)),f>=3){const G=_/f,et=this.wheels[0],pt=Math.max(.02,this.floorY-(et.mount.y-G-et.r));this.gap=pt,this.seal=Xe((n.fan.sealGap-pt)/(n.fan.sealGap-n.fan.sealFull),0,1);const Ot=Math.min(n.fan.maxSuctionG*u*ti,n.fan.maxSuctionG*u*ti*this.fan*this.fan*this.seal);g.normalize(),this.suctionN=Ot,e.applyForce(g.scale(-Ot),o.scale(this.floorY))}else this.seal=0,this.suctionN=0,this.gap=1;this.updateThrusters(t,o,f),n.tank&&(f>=3&&d<1&&this.thrustTotal<10&&(this.airKg=Math.min(this.airMaxKg,this.airKg+(this.refilling?30:n.tank.compressorKgS)*t)),this.updateMass()),this.powerKW=this.motorKW+R,this.energyKWh-=this.powerKW*t/3600;const z=l.vsub(this._vPrev).scale(1/t);this._vPrev.copy(l),z.y+=ti;const tt=new D(z.dot(a),z.dot(o),z.dot(c)).multiplyScalar(1/ti);this.gForce.lerp(tt,Math.min(1,t*8)),this.airTime=f===0?this.airTime+t:0}updateThrusters(t,e,n){const i=this.body,s=this.input,o=this.spec;if(!this.thrusters.length){this.thrustTotal=0;return}const a=o.tank,c=this.pressureBar,l=Xe((c-a.minBar)/(a.fullThrustBar-a.minBar),0,1);this.pressureFactor=l;const h=i.quaternion.conjugate().vmult(i.angularVelocity),d=n===0;let u={x:0,y:0,z:0},p=s.lift;if(o.id==="rocket"){const f=Math.abs(s.pitch)+Math.abs(s.roll)+Math.abs(s.yaw)>.05;let g={x:s.roll*5.5,y:-s.yaw*2.5,z:-s.pitch*4.5};if(d&&!f&&this.assist){const y=i.quaternion.conjugate().vmult(new w(0,1,0)),M=new w(0,1,0).cross(y),R=Math.acos(Xe(y.y,-1,1));M.length()<.05&&R>1&&M.set(Math.sign(h.x||1),0,0),M.normalize();const A=Math.min(R,1.2)*4.5;g={x:M.x*A,y:0,z:M.z*A}}(d||f&&s.lift>.3)&&(u={x:Xe((g.x-h.x)*.9,-1,1),y:Xe((g.y-h.y)*.9,-1,1),z:Xe((g.z-h.z)*.9,-1,1)});const _=i.position.y-this.cg;if(this.landAssist&&d&&e.y>.3&&i.velocity.y<-.5&&_<16){const M=9.81+3*(-Xe(.55*_+.8,1,9)-i.velocity.y),R=this.thrusters.filter(A=>A.group==="lift").reduce((A,T)=>A+T.max,0);p=Math.max(p,Xe(i.mass*M/(R*Math.max(l,.05)*e.y),0,1))}}let m=0,v=0;for(const f of this.thrusters){let g=0;f.group==="boost"?(g=s.boost,g+=u.y*Math.sign(f.p.z)*.6):f.group==="lift"?g=p+u.x*Math.sign(-f.p.z)+u.z*Math.sign(f.p.x):f.group==="side"&&(g=u.y*Math.sign(-f.p.x*f.d.z)),f.cmd=Xe(g,0,1),this.airKg<=.01&&(f.cmd=0),f.level+=(f.cmd-f.level)*Math.min(1,t/.04),f.force=f.level*f.max*l,m+=f.force,v+=f.force/(a.isp*Vx),f.force>1&&i.applyForce(i.quaternion.vmult(f.d).scale(f.force),i.quaternion.vmult(f.p))}this.thrustTotal=m,this.airKg=Math.max(0,this.airKg-v*t)}getState(){const t=this.body;return{p:[t.position.x,t.position.y,t.position.z],q:[t.quaternion.x,t.quaternion.y,t.quaternion.z,t.quaternion.w],w:this.wheels.map(e=>[e.len,e.steer,e.spin]),t:this.thrusters.map(e=>e.level),fan:this.fan,v:this.speed,slip:this.slipMax||0}}}class Xx{constructor(t,e=6e3){this.max=e,this.n=0,this.i=0;const n=new ze;this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.size=new Float32Array(e),this.grow=new Float32Array(e),this.alpha=new Float32Array(e),this.col=new Float32Array(e*3),this.drag=new Float32Array(e),n.setAttribute("position",new Ge(this.pos,3)),n.setAttribute("size",new Ge(this.size,1)),n.setAttribute("alpha",new Ge(this.alpha,1)),n.setAttribute("color",new Ge(this.col,3));const i=(()=>{const o=document.createElement("canvas");o.width=o.height=64;const a=o.getContext("2d"),c=a.createRadialGradient(32,32,0,32,32,32);return c.addColorStop(0,"rgba(255,255,255,1)"),c.addColorStop(.4,"rgba(255,255,255,0.5)"),c.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=c,a.fillRect(0,0,64,64),new io(o)})(),s=new An({uniforms:{map:{value:i},scale:{value:600}},transparent:!0,depthWrite:!1,vertexShader:`attribute float size; attribute float alpha; attribute vec3 color; varying float vA; varying vec3 vC; uniform float scale;
        void main(){ vA=alpha; vC=color; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=size*scale/max(-mv.z,0.1); gl_Position=projectionMatrix*mv; }`,fragmentShader:"uniform sampler2D map; varying float vA; varying vec3 vC; void main(){ vec4 t=texture2D(map,gl_PointCoord); gl_FragColor=vec4(vC, t.a*vA); if(gl_FragColor.a<0.01) discard; }"});this.points=new Rg(n,s),this.points.frustumCulled=!1,t.add(this.points),this.geo=n}emit(t,e,{life:n=1,size:i=.5,grow:s=1,color:o=[1,1,1],alpha:a=.6,drag:c=1.5,spread:l=0}={}){const h=this.i;this.i=(this.i+1)%this.max,this.pos.set([t.x,t.y,t.z],h*3),this.vel.set([e.x+(Math.random()-.5)*l,e.y+(Math.random()-.5)*l,e.z+(Math.random()-.5)*l],h*3),this.life[h]=n,this.maxLife[h]=n,this.size[h]=i,this.grow[h]=s,this.alpha[h]=a,this.col.set(o,h*3),this.drag[h]=c,this.a0=this.a0||new Float32Array(this.max),this.a0[h]=a}update(t){for(let e=0;e<this.max;e++){if(this.life[e]<=0){this.alpha[e]=0;continue}this.life[e]-=t;const n=Math.exp(-this.drag[e]*t);for(let s=0;s<3;s++)this.vel[e*3+s]*=n,this.pos[e*3+s]+=this.vel[e*3+s]*t;this.vel[e*3+1]+=.3*t,this.pos[e*3+1]<.05&&(this.pos[e*3+1]=.05,this.vel[e*3+1]*=-.2),this.size[e]+=this.grow[e]*t;const i=this.life[e]/this.maxLife[e];this.alpha[e]=this.a0[e]*i*Math.min(1,(1-i)*8+.2)}this.geo.attributes.position.needsUpdate=this.geo.attributes.size.needsUpdate=this.geo.attributes.alpha.needsUpdate=this.geo.attributes.color.needsUpdate=!0}}class qx{constructor(){this.ctx=null,this.enabled=!0}start(){if(this.ctx){this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const e=this.ctx=new t,n=this.master=e.createGain();n.gain.value=.5;const i=e.createDynamicsCompressor();n.connect(i),i.connect(e.destination);const s=e.createBuffer(1,e.sampleRate*2,e.sampleRate),o=s.getChannelData(0);let a=0;for(let h=0;h<o.length;h++){const d=Math.random()*2-1;a=(a+.02*d)/1.02,o[h]=d*.6+a*3}const c=()=>{const h=e.createBufferSource();return h.buffer=s,h.loop=!0,h.start(),h};this.motor=[["sawtooth",.08],["square",.03],["sine",.05]].map(([h,d])=>{const u=e.createOscillator();u.type=h;const p=e.createGain();p.gain.value=0;const m=e.createBiquadFilter();return m.type="lowpass",m.frequency.value=3e3,u.connect(m),m.connect(p),p.connect(n),u.start(),{o:u,gn:p,g:d,f:m}});const l=(h,d,u)=>{const p=c(),m=e.createBiquadFilter();m.type=h,m.frequency.value=d,m.Q.value=u;const v=e.createGain();return v.gain.value=0,p.connect(m),m.connect(v),v.connect(n),{f:m,gn:v}};this.fan=l("bandpass",900,.8),this.fanTone=e.createOscillator(),this.fanTone.type="triangle",this.fanToneG=e.createGain(),this.fanToneG.gain.value=0,this.fanTone.connect(this.fanToneG),this.fanToneG.connect(n),this.fanTone.start(),this.thrust=l("lowpass",2500,.5),this.thrustHi=l("highpass",4e3,.7),this.tire=l("bandpass",1400,6),this.wind=l("lowpass",500,.3),this.impactBuf=s}impact(t){if(!this.ctx)return;const e=this.ctx,n=e.createBufferSource();n.buffer=this.impactBuf;const i=e.createBiquadFilter();i.type="lowpass",i.frequency.value=300;const s=e.createGain();s.gain.setValueAtTime(Math.min(1,t),e.currentTime),s.gain.exponentialRampToValueAtTime(.001,e.currentTime+.5),n.connect(i),i.connect(s),s.connect(this.master),n.start(),n.stop(e.currentTime+.6)}update(t){if(!this.ctx)return;const e=this.ctx.currentTime,n=.05,i=(l,h)=>l.setTargetAtTime(h,e,n);i(this.master.gain,this.enabled?.5:0);const s=Math.abs(t.speed),o=Math.min(1,t.motorKW/800),a=60+s*22;this.motor.forEach((l,h)=>{i(l.o.frequency,a*[1,2.97,7.3][h]),i(l.gn.gain,l.g*(.25+o)*Math.min(1,s/3+o))}),i(this.fan.gn.gain,t.fan*.35),i(this.fan.f.frequency,400+t.fan*1800),i(this.fanTone.frequency,180+t.fan*520),i(this.fanToneG.gain,t.fan*.03);const c=Math.min(1,t.thrust/6e4);i(this.thrust.gn.gain,c*.9),i(this.thrustHi.gn.gain,c*.25),i(this.tire.gn.gain,Math.min(.25,t.slip*.4)*(s>2?1:0)),i(this.wind.gn.gain,Math.min(.5,s*s/9e3))}}class Yx{constructor(){this.keys=new Set,this.pressed=new Set,this.touch={steer:0,pitch:0,throttle:0,brake:0,boost:0,lift:0},this.gpPrev=[],addEventListener("keydown",t=>{["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.code)&&t.preventDefault(),this.keys.has(t.code)||this.pressed.add(t.code),this.keys.add(t.code)}),addEventListener("keyup",t=>this.keys.delete(t.code)),addEventListener("blur",()=>this.keys.clear()),this.setupTouch()}setupTouch(){const t=document.getElementById("touch");if(!t||!("ontouchstart"in window)&&!navigator.maxTouchPoints)return;t.style.display="block";const e=document.getElementById("stick"),n=document.getElementById("knob");let i=null,s=null;e.addEventListener("touchstart",o=>{i=o.changedTouches[0].identifier;const c=e.getBoundingClientRect();s={x:c.left+c.width/2,y:c.top+c.height/2,R:c.width/2},o.preventDefault()},{passive:!1}),addEventListener("touchmove",o=>{for(const a of o.changedTouches)if(a.identifier===i){const c=Math.max(-1,Math.min(1,(a.clientX-s.x)/s.R)),l=Math.max(-1,Math.min(1,(a.clientY-s.y)/s.R));this.touch.steer=c,this.touch.pitch=-l,n.style.transform=`translate(${c*40}px,${l*40}px)`}},{passive:!1}),addEventListener("touchend",o=>{for(const a of o.changedTouches)a.identifier===i&&(i=null,this.touch.steer=this.touch.pitch=0,n.style.transform="")}),t.querySelectorAll("[data-hold]").forEach(o=>{const a=o.dataset.hold;o.addEventListener("touchstart",c=>{this.touch[a]=1,o.classList.add("on"),c.preventDefault()},{passive:!1}),o.addEventListener("touchend",()=>{this.touch[a]=0,o.classList.remove("on")})}),t.querySelectorAll("[data-tap]").forEach(o=>o.addEventListener("touchstart",a=>{this.pressed.add(o.dataset.tap),a.preventDefault()},{passive:!1}))}k(...t){return t.some(e=>this.keys.has(e))?1:0}tap(t){return this.pressed.has(t)}read(){const t={throttle:this.k("KeyW","ArrowUp"),brake:this.k("KeyS","ArrowDown"),steer:this.k("KeyD","ArrowRight")-this.k("KeyA","ArrowLeft"),handbrake:this.k("KeyX"),boost:this.k("Space"),lift:this.k("ShiftLeft","ShiftRight"),yaw:this.k("KeyE")-this.k("KeyQ"),pitch:0,roll:0,gamepad:!1};t.pitch=t.throttle-t.brake,t.roll=t.steer;const e=this.touch;t.steer=t.steer||e.steer,t.roll=t.roll||e.steer,t.pitch=t.pitch||e.pitch,t.throttle=Math.max(t.throttle,e.throttle),t.brake=Math.max(t.brake,e.brake),t.boost=Math.max(t.boost,e.boost),t.lift=Math.max(t.lift,e.lift);const n=navigator.getGamepads?navigator.getGamepads():[];for(const i of n){if(!i)continue;t.gamepad=!0;const s=i.axes,o=i.buttons.map(l=>l.value??(l.pressed?1:0)),a=l=>Math.abs(l)<.12?0:l;a(s[0])&&(t.steer=a(s[0]),t.roll=a(s[0])),a(s[1])&&(t.pitch=-a(s[1])),a(s[2])&&(t.yaw=a(s[2])),t.throttle=Math.max(t.throttle,o[7]||0),t.brake=Math.max(t.brake,o[6]||0),t.boost=Math.max(t.boost,o[0]||0),t.lift=Math.max(t.lift,o[1]||0),o[4]&&(t.yaw=-1),o[5]&&(t.yaw=1);const c={2:"KeyF",3:"KeyC",9:"KeyR",8:"KeyV",12:"KeyT",13:"KeyG",14:"KeyL",15:"KeyB"};for(const[l,h]of Object.entries(c))o[l]&&!this.gpPrev[l]&&this.pressed.add(h);this.gpPrev=o;break}return t}endFrame(){this.pressed.clear()}}class $x{constructor(t,e){this.camera=t,this.mode=0,this.names=["Chase","Cockpit","Cinematic"],this.world=e,this.pos=new D(-8,3,0),this.look=new D,this.cineIdx=0,this.cineT=0,this.upS=new D(0,1,0)}next(){this.mode=(this.mode+1)%3,this.cineT=99}update(t,e,n,i=!1){const s=this.camera,o=i?2:this.mode,a=e.position,c=e.quaternion,l=new D(1,0,0).applyQuaternion(c),h=new D(0,1,0).applyQuaternion(c);if(n.interior.visible=!0,n.robot.visible=o!==1,o===0){const d=e.velocity,u=d.length(),p=u>3?new D(d.x,d.y,d.z).normalize().lerp(l,.5).normalize():l.clone();this.upS.lerp(h.y<.2?h:new D(0,1,0),Math.min(1,t*1.5)).normalize();const m=7.5+Math.min(u,80)*.03,v=a.clone().addScaledVector(p,-m).addScaledVector(this.upS,2.2);if(v.y<.6&&(v.y=.6),this.occluder){const f=a.clone().addScaledVector(h,2),g=this.occluder(f,v);g!=null&&v.copy(f).addScaledVector(v.clone().sub(f).normalize(),Math.max(.8,g-.4))}this.pos.lerp(v,1-Math.exp(-t*(this.occluder&&this._occl?20:6))),this.look.lerp(a.clone().addScaledVector(l,2).addScaledVector(this.upS,.6),1-Math.exp(-t*12)),s.position.copy(this.pos),s.up.copy(this.upS),s.lookAt(this.look),s.fov+=(62+Math.min(u,100)*.12-s.fov)*t*3}else if(o===1){const d=n.driverEye.clone();d.y-=e.cg,d.applyQuaternion(c).add(a),s.position.copy(d),s.up.copy(h),s.lookAt(d.clone().addScaledVector(l,10).addScaledVector(h,-.6)),s.fov+=(78-s.fov)*t*4}else{this.cineT+=t;const d=this.world.cinematicCams;if(this.cineT>4.5){this.cineT=0;let u=-1,p=1e9;d.forEach((m,v)=>{const f=m.distanceTo(a);f<p&&v!==this.cineIdx&&(p=f,u=v)}),this.cineIdx=p<70?u:-1,this.droneA=Math.random()*6.28}if(this.cineIdx>=0){s.position.copy(d[this.cineIdx]);const u=s.position.distanceTo(a);s.fov+=(Fa.clamp(900/(u+5),12,60)-s.fov)*t*2}else this.droneA+=t*.25,s.position.set(a.x+Math.cos(this.droneA)*14,Math.max(a.y+5,3),a.z+Math.sin(this.droneA)*14),s.fov+=(50-s.fov)*t*2;s.up.set(0,1,0),this.look.lerp(a,1-Math.exp(-t*8)),s.lookAt(this.look)}s.updateProjectionMatrix()}}const Jt=r=>document.getElementById(r);class Kx{constructor(t){this.env=t,this.t=0,this.shake=0,this.gctx=Jt("gcv").getContext("2d"),this.trail=[],this.toastT=0,this.helpOn=!1}setStatic(t,e,n){Jt("variantName").textContent=`${t.spec.name} · ${t.spec.tag}`,Jt("modeName").textContent={drag:"DRAG STRIP",stunt:"EVENT STUNT COURSE",free:"FREE ROAM"}[e.mode],Jt("airBlock").style.display=t.spec.tank?"":"none",Jt("thr").innerHTML=t.thrusters.map(i=>`<div id="th_${i.id}">${i.id}</div>`).join(""),Jt("spdUnit").textContent=e.units==="kmh"?"km/h":"mph"}toast(t,e=2.2){const n=Jt("toast");n.innerHTML=t,n.style.opacity=t?1:0,this.toastT=e}toggleHelp(){this.helpOn=!this.helpOn;const t=Jt("help");t.style.display=this.helpOn?"block":"none",t.innerHTML=document.querySelector(".keys").innerHTML}update(t,e,n,i,s,o,a){var u,p;if(this.toastT>0&&(this.toastT-=t,this.toastT<=0&&(Jt("toast").style.opacity=0)),this.drawG(e),this.t+=t,this.t<.06)return;this.t=0;const c=i.units==="kmh",l=Math.abs(e.forwardSpeed);Jt("spd").textContent=Math.round(c?l*3.6:l/yn),Jt("pwr").textContent=`${Math.round(e.powerKW)} kW`,Jt("pwrBar").style.width=`${Math.min(100,e.powerKW/e.spec.battery.peakPowerKW*100)}%`,Jt("df").textContent=`${((e.downforceN||0)/1e3).toFixed(1)} kN`,Jt("bat").textContent=`${Math.max(0,e.energyKWh/e.spec.battery.kWh*100).toFixed(1)} %`;const h=e.suctionN/(e.body.mass*9.81);if(Jt("suc").textContent=`${h.toFixed(2)} g / ${e.spec.fan.maxSuctionG.toFixed(1)} g`,Jt("sucBar").style.width=`${h/e.spec.fan.maxSuctionG*100}%`,Jt("fanMode").textContent=["OFF","AUTO","MAX"][e.fanMode],Jt("fanKW").textContent=`fan ${Math.round(e.fanKW)} kW · ${Math.round(e.fan*100)}%`,Jt("seal").textContent=`seal ${Math.round(e.seal*100)}% · gap ${e.gap<1?(e.gap*1e3).toFixed(0)+" mm":"—"}`,e.spec.tank){const m=e.pressureBar;Jt("air").textContent=`${m.toFixed(0)} bar · ${e.airKg.toFixed(0)} kg${e.refilling?" ⟳ REFILL":""}`,Jt("airBar").style.width=`${m/e.spec.tank.fillBar*100}%`,Jt("airBar").style.background=m<e.spec.tank.fullThrustBar?"var(--bad)":"var(--ok)",Jt("thrust").textContent=`${(e.thrustTotal/1e3).toFixed(1)} kN`,Jt("thrBar").style.width=`${Math.min(100,e.thrustTotal/1e3)}%`,e.thrusters.forEach(v=>{const f=Jt("th_"+v.id);f&&(f.style.background=`rgba(255,${150-v.level*100},90,${.1+v.level*.9})`)})}Jt("camName").textContent=`cam: ${s.names[s.mode]}${a.active?" (replay)":""}`,Jt("fps").textContent=`${o.toFixed(0)} fps`,Jt("flags").textContent=[e.trackMode?"TRACK MODE":"STREET",e.wingHigh?"WING: HIGH DF":"WING: LOW DRAG",e.spec.id==="rocket"?e.assist?"ATT-ASSIST":"ATT-MANUAL":"",e.landAssist?"LAND-ASSIST":"",i.paused?"PAUSED":""].filter(Boolean).join(" · ");const d=((u=n.timerInfo)==null?void 0:u.call(n))||{label:"TIMER",value:"",splits:""};Jt("timerLbl").textContent=d.label,Jt("timerVal").textContent=d.value,Jt("splits").innerHTML=d.splits||"",Jt("objective").innerHTML=((p=n.objective)==null?void 0:p.call(n))||"",Jt("objective").style.display=Jt("objective").innerHTML?"":"none",Jt("replaybar").style.display=a.active?"block":"none",a.active&&(Jt("replayInfo").textContent=`${(a.idx/60).toFixed(1)} s / ${(a.buf.length/60).toFixed(1)} s · ${a.speed}×`)}drawG(t){const e=this.gctx,n=150,i=75,s=75,o=62;e.clearRect(0,0,n,170),e.strokeStyle="rgba(255,255,255,.18)",e.lineWidth=1;for(const h of[1,2,3])e.beginPath(),e.arc(i,s,o*h/3,0,7),e.stroke();e.beginPath(),e.moveTo(i-o,s),e.lineTo(i+o,s),e.moveTo(i,s-o),e.lineTo(i,s+o),e.stroke();const a=t.gForce,c=i+Math.max(-3,Math.min(3,a.z))/3*o,l=s-Math.max(-3,Math.min(3,a.x))/3*o;this.trail.push([c,l]),this.trail.length>40&&this.trail.shift(),e.strokeStyle="rgba(127,208,255,.4)",e.beginPath(),this.trail.forEach(([h,d],u)=>u?e.lineTo(h,d):e.moveTo(h,d)),e.stroke(),e.fillStyle="#7fd0ff",e.beginPath(),e.arc(c,l,5,0,7),e.fill(),e.fillStyle="#cfd8e4",e.font="11px system-ui",e.fillText(`long ${a.x.toFixed(2)}g  lat ${a.z.toFixed(2)}g`,4,152),e.fillText(`vert ${a.y.toFixed(2)}g  (1g/ring)`,4,166)}}const Zr=(r,t,e)=>Math.max(t,Math.min(e,r));new D;function Jr(r){const t=new ms(r.quaternion.x,r.quaternion.y,r.quaternion.z,r.quaternion.w);return{fwd:new D(1,0,0).applyQuaternion(t),up:new D(0,1,0).applyQuaternion(t),right:new D(0,0,1).applyQuaternion(t)}}function ei(r,t){const{fwd:e}=Jr(r);return Zr(-.12*(r.position.z-t)-1.6*e.z,-1,1)}function Gr(r,t,e){const n=e-t;r.throttle=Zr(n*.25,0,1),r.brake=Zr(-n*.3,0,1)}const nn=r=>r==null?"—":r.toFixed(3);class fc{constructor(t){Object.assign(this,t),this.t=0}ai(){const t=this.vehicle.input;return Object.assign(t,{park:0,throttle:0,brake:0,steer:0,boost:0,lift:0,pitch:0,roll:0,yaw:0,handbrake:0}),t}}class jx extends fc{reset(){const t=Re.drag;this.vehicle.reset(t.startX-1.6,void 0,t.z,0),this.state="staged",this.t=0,this.res={},this.launchT=null,this.topSpeed=0,this.foul=!1,this.env.treeLights.forEach(e=>e.emissiveIntensity=0),this.drawBoard()}get dist(){return this.vehicle.body.position.x+1.6-Re.drag.startX}control(t){const e=this.vehicle,n=e.input;this.autopilot?(this.ai(),e.fanMode=2,e.wingHigh=this.dist<402,this.state==="staged"&&this.t>.6&&(this.state="countdown",this.t=0),this.state==="run"&&(this.dist<402.4+5?(n.throttle=1,n.boost=e.thrusters.length?1:0):n.brake=.5,n.steer=ei(e.body,Re.drag.z)),this.state==="done"&&(n.brake=.6,n.park=e.speed<1?1:0,n.steer=ei(e.body,Re.drag.z))):this.state==="staged"&&(n.throttle>0||n.boost>0)&&(this.state="countdown",this.t=0),(this.state==="staged"||this.state==="countdown")&&(!this.autopilot&&this.state==="countdown"&&this.t>.3&&e.forwardSpeed>.2&&(this.foul=!0),n.park=1,n.brake=1,this.state==="countdown"&&this.autopilot,n.throttle=0,n.boost=0,e.fanMode=Math.max(e.fanMode,1))}update(t){this.t+=t;const e=this.vehicle,n=this.env.treeLights;if(this.state==="countdown"){const i=Math.floor(this.t/.5);n.forEach((s,o)=>s.emissiveIntensity=o<3&&o<i||o===3&&i>=3?4:0),this.foul&&(n[4].emissiveIntensity=5),i>=3&&(this.state="run",this.t=0,this.hud.toast(this.foul?'<span style="color:#f55">RED LIGHT</span>':'<span style="color:#6f9">GO!</span>',1))}if(this.state==="run"||this.state==="done"){const i=e.forwardSpeed;this.topSpeed=Math.max(this.topSpeed,i),this.launchT==null&&i>.15&&(this.launchT=this.t);const s=this.launchT==null?null:this.t-this.launchT,o=this.res;o.t60==null&&i>=60*yn&&(o.t60=s),o.t100k==null&&i>=100/3.6&&(o.t100k=s),o.t100m==null&&i>=100*yn&&(o.t100m=s),o.t200==null&&i>=200*yn&&(o.t200=s);const a=this.dist;for(const[c,l]of[["ft60",18.288],["eighth",201.168],["quarter",402.336],["km",1e3],["mile",1609.344]])o[c]==null&&a>=l&&(o[c]=this.t,c==="quarter"&&(o.trap=i,this.state="done",this.hud.toast(`1/4 mile ${this.t.toFixed(3)} s @ ${(i/yn).toFixed(1)} mph`,3)),this.drawBoard());o.t60!=null&&!this._t60shown&&(this._t60shown=!0,this.hud.toast(`0-60 mph: ${o.t60.toFixed(2)} s`,2),this.drawBoard())}}timerInfo(){const t=this.res,e=this.state==="run"||this.state==="done"?t.quarter??this.t:0;return{label:this.state==="staged"?"STAGED · press throttle/boost to start tree":this.state==="countdown"?"WATCH THE TREE":"ELAPSED (from green)",value:e.toFixed(3),splits:`<span>0-60 ${nn(t.t60)}</span><span>60ft ${nn(t.ft60)}</span><span>1/8 ${nn(t.eighth)}</span><span>1/4 ${nn(t.quarter)}</span><span>trap ${t.trap?(t.trap/yn).toFixed(1):"—"}</span>`}}objective(){const t=this.res;return this.state==="done"?`<b>Run complete.</b> 0-60 ${nn(t.t60)} s · 0-100 km/h ${nn(t.t100k)} s · 0-100 mph ${nn(t.t100m)} s · 1/4 ${nn(t.quarter)} s @ ${(t.trap/yn).toFixed(1)} mph · top ${(this.topSpeed/yn).toFixed(1)} mph.<br>Keep going for 1 km / 1 mile / top speed (>230 mph needs ~1.5 km) · <kbd>Enter</kbd> restart`:this.state==="staged"?"Tip: set fan <b>MAX</b> (F) and Track Mode (T) for launch grip; Thrust/Rocket: hold <b>Space</b> for cold-gas boost.":""}drawBoard(){const{canvas:t,tex:e}=this.env.dragBoard,n=t.getContext("2d"),i=this.res||{};n.fillStyle="#05070a",n.fillRect(0,0,1024,384),n.fillStyle="#ffb000",n.font="bold 44px monospace",n.fillText(`${this.vehicle.spec.name.toUpperCase()}`,30,60);const s=[["0-60 MPH",nn(i.t60)],["60 FT",nn(i.ft60)],["1/8 MILE",nn(i.eighth)],["1/4 MILE",nn(i.quarter)],["TRAP MPH",i.trap?(i.trap/yn).toFixed(1):"—"]];n.font="bold 50px monospace",s.forEach(([o,a],c)=>{n.fillStyle="#ff5a2a",n.fillText(o,30,120+c*54),n.fillStyle="#fff2c0",n.fillText(a.padStart(8),560,120+c*54)}),e.needsUpdate=!0}}class Zx extends fc{reset(){const t=Re.stuntSpawn;this.vehicle.reset(t.x,void 0,t.z,t.yaw),this.phase="ramp",this.score=0,this.events=[],this.holdT=0,this.held=!1,this.inAir=!1,this.t=0,this.ap="approach",this.apT=0,this.lastRampT=-9,this.hitLineup=!1,this.lineupClear=!1,this.vyPrev=0,this.maxInv=0}respawn(){if(this.phase==="lineup")this.next();else{const t={score:this.score,events:this.events};this.reset(),Object.assign(this,t)}}next(){const t=Re.lineup;this.vehicle.reset(t.spawnX,void 0,t.z,0),this.phase="lineup",this.ap="run",this.apT=0,this.hitLineup=!1,this.lineupClear=!1,this.inAir=!1,this.passed=!1}add(t,e){this.score+=e,this.events.push(`${t} +${e}`),this.hud.toast(`${t}<br><span style="font-size:24px">+${e}</span>`,2.4)}onCollide(t,e){this.env.lineupCars.some(n=>n.body===t)&&(this.hitLineup||this.hud.toast('<span style="color:#f55">Contact with lineup!</span>',1.5),this.hitLineup=!0)}onRamp(){return this.vehicle.wheels.some(t=>t.contact&&this.env.rampSegments.includes(t.body))}control(t){if(!this.autopilot)return;const e=this.vehicle,n=e.body,i=this.ai();this.apT+=t;const{up:s}=Jr(n),o=e.forwardSpeed;e.fanMode=2,e.assist=!0,e.landAssist=!0;const a=e.spec.id==="rocket";switch(this.ap){case"approach":Gr(i,o,9),i.steer=ei(n,0),this.onRamp()&&n.position.y>.8&&(this.ap="climb",this.apT=0);break;case"climb":Gr(i,o,5.5),i.steer=ei(n,0),s.y<-.97&&(this.ap="stop",this.apT=0);break;case"stop":i.park=1,i.steer=ei(n,0),Math.abs(o)<.2&&this.apT>.5&&(this.ap="hold",this.apT=0);break;case"hold":i.park=1,this.apT>2.8&&(this.ap=a?"exit":"descend",this.apT=0);break;case"descend":i.brake=.35,s.y>.95&&n.position.y<1&&(this.ap="end");break;case"exit":i.throttle=.7,i.steer=ei(n,0),e.contacts===0&&(this.ap="air",this.apT=0);break;case"air":e.contacts>=3&&this.apT>.5&&(this.ap="settle",this.apT=0),this.apT>6&&e.speed<.3&&this.respawnAt("landing");break;case"settle":i.park=1,this.apT>2.5&&this.phase==="ramp"&&this.next();break;case"run":Gr(i,o,22),i.steer=ei(n,Re.lineup.z),a&&n.position.x>Re.lineup.x0-22&&(this.ap="hop",this.apT=0);break;case"hop":i.lift=this.apT<.55?1:0,i.boost=this.apT<.5?.3:0,this.apT>1&&e.contacts>=3&&(this.ap="brake",this.apT=0);break;case"brake":i.brake=.8,i.park=e.speed<1?1:0,i.steer=ei(n,Re.lineup.z);break;default:i.park=1}}respawnAt(t){if(this.phase==="lineup"){this.next(),this.ap="brake";return}const e=this.env.landingZone;this.vehicle.reset(e.x-8,void 0,e.z,0),this.ap="settle",this.apT=0,this.hud.toast("Recovered",1)}update(t){this.t+=t;const e=this.vehicle,n=e.body,{up:i}=Jr(n);this.stuckT=(i.y<.3&&!this.onRamp()||e.contacts===0)&&e.speed<.4?(this.stuckT||0)+t:0,this.stuckT>2.5?this.autopilot?this.respawnAt("landing"):this._stuckToast||(this._stuckToast=!0,this.hud.toast("Stuck · press R to recover",2.5)):this._stuckToast=!1;const s=this.onRamp();if(s&&(this.lastRampT=this.t),s&&i.y<-.85?(this.maxInv=Math.max(this.maxInv,-i.y),e.speed<1.5&&(this.holdT+=t,this.holdT>2&&!this.held&&(this.held=!0,this.add(`Inverted hold (${(e.suctionN/(n.mass*9.81)).toFixed(2)} g suction)`,1e3)))):(!s||i.y>-.5)&&(this.holdT=0),e.contacts===0)this.inAir||(this.inAir=!0,this.airStart=this.t,this.rot=0,this.maxH=0,this.fromRamp=this.t-this.lastRampT<.4,this.startUpY=i.y),this.rot+=n.angularVelocity.length()*t,this.maxH=Math.max(this.maxH,n.position.y),this.vyPrev=n.velocity.y;else if(this.inAir&&e.contacts>=2){const o=this.t-this.airStart;if(this.inAir=!1,o>.5){const a=Math.abs(this.vyPrev);if(i.y>.8){const c=Math.floor(this.rot/Math.PI+.2),l=Math.round(Math.max(0,1-a/7)*1e3);if(this.add(`Landing ${a.toFixed(1)} m/s · ${o.toFixed(1)} s air`,400+l),c>0&&this.add(`${c*180}° rotation`,c*600),this.fromRamp){const h=Math.hypot(n.position.x-this.env.landingZone.x,n.position.z-this.env.landingZone.z);h<6&&this.add(h<2?"Bullseye landing":"Landing zone",h<2?800:300),this.phase==="ramp"&&(this.rampDone=!0)}this.phase==="lineup"&&this.passed&&!this.hitLineup?(this.add("Cleared all 5 vehicles",2e3),this.phase="done",this.finish()):this.phase==="lineup"&&this.passed&&(this.phase="done",this.finish())}else this.hud.toast('<span style="color:#f55">CRASH LANDING</span>',2),this.events.push("Crash landing +0")}}this.phase==="lineup"&&n.position.x>this.env.lineupEnd+.5&&!this.passed&&(this.passed=!0,e.contacts!==0&&(this.hitLineup=!0)),this.phase==="ramp"&&this.rampDone&&e.speed<.5&&!this.autopilot&&!this._prompted&&(this._prompted=!0)}finish(){const t=this.score;this.grade=t>6500?"S":t>5e3?"A":t>3500?"B":t>2e3?"C":"D",setTimeout(()=>this.hud.toast(`RUN COMPLETE · ${t} pts · grade ${this.grade}`,5),2500)}timerInfo(){return{label:`SCORE · ${this.phase.toUpperCase()}`,value:`${this.score}`,splits:`<span>t ${this.t.toFixed(1)} s</span><span>${this.inAir?"AIR "+(this.t-this.airStart).toFixed(1)+" s":""}</span><span>${this.holdT>0?"HOLD "+this.holdT.toFixed(1)+" s":""}</span>`}}objective(){const t=this.events.slice(-3).join(" · "),e=this.vehicle.spec.id==="rocket";return this.phase==="ramp"?`<b>Stage 1 · C-ramp:</b> drive up the ramp (fan suction MAX), stop upside-down for 2 s${e?", then drive off the top, flip upright and hover-land in the ring":" (no thrusters: back down carefully)"}. ${this.rampDone||!e?"<kbd>N</kbd> → Stage 2":""}<br><small>${t}</small>`:this.phase==="lineup"?`<b>Stage 2 · Lineup jump:</b> build speed, hold <b>Shift</b> (lift thrusters) ~12 m before the cars and clear all five, then land. ${e?"":"<i>Needs the Rocket variant.</i>"}<br><small>${t}</small>`:`<b>Run complete · ${this.score} pts · grade ${this.grade}</b><br><small>${this.events.join(" · ")}</small><br><kbd>Enter</kbd> restart`}}class Jx extends fc{reset(){const t=Re.freeSpawn;this.vehicle.reset(t.x,void 0,t.z,t.yaw),this.t=0,this.top=0}control(t){if(!this.autopilot)return;const e=this.vehicle,n=e.body,i=this.ai(),s=new D(180,0,120),o=40,a=new D(n.position.x,0,n.position.z),c=Math.atan2(a.z-s.z,a.x-s.x)+.35,l=new D(s.x+Math.cos(c)*o,0,s.z+Math.sin(c)*o),{fwd:h,right:d}=Jr(n),u=l.sub(a);i.steer=Zr(Math.atan2(u.dot(d),u.dot(h))*1.5,-1,1),Gr(i,e.forwardSpeed,16)}update(t){this.t+=t,this.top=Math.max(this.top,this.vehicle.forwardSpeed)}timerInfo(){return{label:"FREE ROAM · session",value:this.t.toFixed(1),splits:`<span>top ${(this.top/yn).toFixed(1)} mph</span>`}}objective(){return this.t<12?"Open test site: C-ramp (center), lineup (north), drag strip (south), skidpad + cone slalom (east). Blue pads refill the air tank.":""}}const gn=new URLSearchParams(location.search),Cn=r=>document.getElementById(r),Ee={variant:gn.get("variant")||"rocket",mode:gn.get("mode")||"stunt",quality:gn.get("q")||"medium",units:"mph",paused:!1,running:!1},Qx=Cn("c"),Pn=new Eg({canvas:Qx,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:gn.has("shot")});Pn.setPixelRatio(Math.min(devicePixelRatio,Ee.quality==="high"?2:1.25));Pn.setSize(innerWidth,innerHeight);Pn.shadowMap.enabled=!0;Pn.shadowMap.type=nh;Pn.toneMapping=sh;Pn.toneMappingExposure=.85;Pn.outputColorSpace=qe;const qs=new Fh,ii=new Je(62,innerWidth/innerHeight,.05,3e4);addEventListener("resize",()=>{Pn.setSize(innerWidth,innerHeight),ii.aspect=innerWidth/innerHeight,ii.updateProjectionMatrix()});const on=new Ix({gravity:new w(0,-ti,0)});on.broadphase=new Qi(on);on.solver.iterations=12;on.allowSleep=!1;on.defaultContactMaterial.friction=.15;on.defaultContactMaterial.restitution=.05;const Gn=kx(qs,on,Pn,Ee.quality),ts=new Xx(qs,Ee.quality==="low"?2500:7e3),Ys=new qx,ks=new Yx,bn=new $x(ii,Gn),rn=new Kx(Gn);gn.get("cam")&&(bn.mode=+gn.get("cam"));{const r=new fs;bn.occluder=(t,e)=>(r.reset(),on.raycastClosest(new w(t.x,t.y,t.z),new w(e.x,e.y,e.z),{collisionFilterMask:9,skipBackfaces:!1},r),bn._occl=r.hasHit,r.hasHit?r.distance:null)}let Ht=null,En=null,Pe=null,de=null;const Yt={buf:[],max:3600,active:!1,idx:0,speed:1,acc:0};function ty(){Ht&&(Ht.dispose(),qs.remove(Pe));const r=eu[Ee.variant];Ht=new Wx(on,r),En=Gx(r),Pe=new Fe,En.group.position.y=-r.cgHeight,Pe.add(En.group),qs.add(Pe),Ht.body.addEventListener("collide",t=>{var n;const e=Math.abs(t.contact.getImpactVelocityAlongNormal());e>2&&(Ys.impact(e/12),rn.shake=Math.min(1,e/10)),(n=de==null?void 0:de.onCollide)==null||n.call(de,t.body,e)})}function su(){ty();const r={drag:jx,stunt:Zx,free:Jx}[Ee.mode];de=new r({vehicle:Ht,env:Gn,hud:rn,autopilot:Cn("autopilot").checked||gn.has("autopilot"),particles:ts}),de.reset(),Yt.buf.length=0,Yt.active=!1,Ee.running=!0,Cn("menu").style.display="none",rn.setStatic(Ht,Ee,bn)}const ey={drag:["Drag Strip","0-60 / 60 ft / 1/8 / 1/4 mile timing with a christmas tree start"],stunt:["Event Stunt Course","C-ramp inverted hold → jump-off flip → hover landing → hop over the 5-vehicle lineup"],free:["Free-Roam Test Track","Open test site: skidpad, cones, ramp, strip and lineup"]};function Wa(){Cn("variants").innerHTML=Object.values(eu).map(r=>`<div class="card ${r.id===Ee.variant?"sel":""}" data-v="${r.id}"><b>${r.name}</b><small>${r.tag}</small><small>0-60 mph ${r.claim0to60} · &gt;230 mph</small><small>${r.desc}</small><small>${r.thrusters.length} thrusters · ${r.price}</small></div>`).join(""),Cn("modes").innerHTML=Object.entries(ey).map(([r,[t,e]])=>`<div class="card ${r===Ee.mode?"sel":""}" data-m="${r}"><b>${t}</b><small>${e}</small></div>`).join(""),document.querySelectorAll("[data-v]").forEach(r=>r.onclick=()=>{Ee.variant=r.dataset.v,Wa()}),document.querySelectorAll("[data-m]").forEach(r=>r.onclick=()=>{Ee.mode=r.dataset.m,Wa()})}Wa();Cn("units").onchange=r=>Ee.units=r.target.value;Cn("go").onclick=()=>{Ys.start(),su()};gn.has("autostart")&&(gn.has("autopilot")&&(Cn("autopilot").checked=!0),su());const Jl=new D;function pc(r){Pe.position.set(...r.p),Pe.quaternion.set(...r.q);const t=Ht.spec;En.wheels.forEach((i,s)=>{const[o,a,c]=r.w[s],l=Ht.wheels[s];i.pivot.position.y=l.mount.y+t.cgHeight-o,i.pivot.rotation.y=-a,i.holder.rotation.z=c}),En.fans.forEach(i=>i.rotation.x+=r.fan*1.4);const e=En.wing,n=Ht.wingHigh;e.position.y+=((n?.96:.84)-e.position.y)*.1,e.rotation.z+=((n?.18:0)-e.rotation.z)*.1,En.group.position.y=-t.cgHeight-(Ht.trackMode,0)}function ny(r,t){const n=Ht.body.velocity;if(Ht.thrusters.forEach((i,s)=>{const o=t.t[s];if(o<.03)return;const a=En.nozzles[i.id];a.getWorldPosition(Jl);const c=a.userData.exhaust.clone().applyQuaternion(Pe.quaternion),l=Math.ceil(o*(Ee.quality==="low"?3:7));for(let h=0;h<l;h++)ts.emit(Jl.clone().addScaledVector(c,.1+Math.random()*.4),{x:n.x+c.x*45*o,y:n.y+c.y*45*o,z:n.z+c.z*45*o},{life:.5+Math.random()*.6,size:.25+o*.4,grow:5*o,alpha:.35+o*.3,color:[.93,.95,1],drag:4,spread:4*o})}),!Yt.active&&(Ht.wheels.forEach(i=>{if(i.contact&&i.slip>.25&&Ht.speed>2&&ts.emit(i.point,{x:n.x*.2,y:.6,z:n.z*.2},{life:1.6,size:.5,grow:2.5,alpha:.25*i.slip,color:[.75,.75,.75],drag:1.2,spread:1}),i.contact&&(i.comp-i.prevComp)/.0083>2.5)for(let s=0;s<10;s++)ts.emit(i.point,{x:0,y:1.5,z:0},{life:1.4,size:.6,grow:3,alpha:.4,color:[.62,.52,.4],drag:2,spread:6})}),Ht.fan>.4&&Ht.contacts>=3&&Math.random()<Ht.fan*.6)){const i=new D(-2.2,.3-Ht.spec.cgHeight,(Math.random()-.5)*1.2).applyQuaternion(Pe.quaternion).add(Pe.position);ts.emit(i,{x:n.x*.5,y:.5,z:n.z*.5},{life:1.2,size:.4,grow:1.8,alpha:.12*Ht.fan,color:[.7,.62,.52],drag:1.5,spread:2})}}const si=1/120;let Nr=0,Ql=performance.now(),Zo=0,Dr=0,th=0,Qr=0;window.__sim={get vehicle(){return Ht},get mode(){return de},state:Ee,errors:[],world:on,env:Gn,step(r){var t;for(let e=0;e<r;e++)(t=de.control)==null||t.call(de,si),on.step(si),de.update(si),Qr++,Qr%2===0&&(Yt.buf.push(Ht.getState()),Yt.buf.length>Yt.max&&Yt.buf.shift());pc(Ht.getState())},settleCam(r){r!=null&&(bn.mode=r);const t={position:Pe.position,quaternion:Pe.quaternion,velocity:Ht.body.velocity,cg:Ht.spec.cgHeight};for(let e=0;e<80;e++)bn.update(.05,t,En)}};function ru(r){var e;requestAnimationFrame(ru);let t=Math.min(.05,(r-Ql)/1e3);if(Ql=r,Zo++,Dr+=t,Dr>.5&&(th=Zo/Dr,Zo=0,Dr=0),gn.has("fixeddt")&&(t=1/60),iy(),Ee.running&&Ht){if(Yt.active)sy(t);else if(!Ee.paused){const i=ks.read();Object.assign(Ht.input,{park:0,throttle:i.throttle,brake:i.brake,steer:i.steer,handbrake:i.handbrake,boost:i.boost,lift:i.lift,pitch:i.pitch,roll:i.roll,yaw:i.yaw}),Ht.contacts>0&&(Ht.input.pitch=Ht.input.roll=0),Ht.refilling=Gn.refillPads.some(c=>Math.hypot(c.x-Ht.body.position.x,c.z-Ht.body.position.z)<3.5);const s=+(gn.get("turbo")||0);Nr+=s||t;let o=0;const a=s?1e5:8;for(;Nr>=si&&o<a;)(e=de.control)==null||e.call(de,si),on.step(si),de.update(si),Nr-=si,o++,Qr++,Qr%2===0&&(Yt.buf.push(Ht.getState()),Yt.buf.length>Yt.max&&Yt.buf.shift());o===a&&(Nr=0),Gn.dynamic.forEach(c=>{c.mesh.position.copy(c.body.position),c.mesh.quaternion.copy(c.body.quaternion)}),pc(Ht.getState()),Ys.update({speed:Ht.speed,motorKW:Ht.motorKW,fan:Ht.fan,thrust:Ht.thrustTotal,slip:Ht.slipMax||0})}const n=Yt.active?Yt.buf[Yt.idx|0]:Ht.getState();n&&ny(t,n),bn.update(t,Yt.active?{position:Pe.position,quaternion:Pe.quaternion,velocity:new D,cg:Ht.spec.cgHeight}:{position:Pe.position,quaternion:Pe.quaternion,velocity:Ht.body.velocity,cg:Ht.spec.cgHeight},En,Yt.active&&bn.mode===0),Gn.sun.position.copy(Pe.position).addScaledVector(Gn.sunDir,200),Gn.sun.target.position.copy(Pe.position),rn.update(t,Ht,de,Ee,bn,th,Yt)}else{const n=r/1e3;ii.position.set(Math.cos(n*.1)*30,9,Math.sin(n*.1)*30-3),ii.lookAt(0,5,0)}ts.update(t),rn.shake>0&&(ii.position.x+=(Math.random()-.5)*rn.shake*.15,ii.position.y+=(Math.random()-.5)*rn.shake*.15,rn.shake*=.9,rn.shake<.01&&(rn.shake=0)),Pn.render(qs,ii),ks.endFrame()}function iy(){var t;const r=e=>ks.tap(e);r("Escape")&&(Cn("menu").style.display=Cn("menu").style.display==="none"?"flex":"none"),Ht&&(r("KeyC")&&bn.next(),r("KeyP")&&(Ee.paused=!Ee.paused),r("KeyM")&&(Ys.enabled=!Ys.enabled),r("KeyH")&&rn.toggleHelp(),r("KeyF")&&(Ht.fanMode=(Ht.fanMode+1)%3),r("KeyT")&&(Ht.trackMode=!Ht.trackMode),r("KeyG")&&(Ht.wingHigh=!Ht.wingHigh),r("KeyL")&&(Ht.assist=!Ht.assist),r("KeyB")&&(Ht.landAssist=!Ht.landAssist),r("KeyR")&&(de.respawn?de.respawn():de.reset()),r("Enter")&&de.reset(),r("KeyN")&&((t=de.next)==null||t.call(de)),r("KeyV")&&(Yt.active=!Yt.active&&Yt.buf.length>10,Yt.idx=Math.max(0,Yt.buf.length-1200),rn.toast(Yt.active?"REPLAY":"")),Yt.active&&(ks.keys.has("ArrowLeft")&&(Yt.idx=Math.max(0,Yt.idx-6)),ks.keys.has("ArrowRight")&&(Yt.idx=Math.min(Yt.buf.length-1,Yt.idx+6)),r("ArrowUp")&&(Yt.speed=Yt.speed===1?.25:Yt.speed===.25?.5:1)))}function sy(r){Yt.idx+=r*60*Yt.speed,Yt.idx>=Yt.buf.length-1&&(Yt.idx=Math.max(0,Yt.buf.length-1200));const t=Yt.buf[Yt.idx|0];t&&pc(t)}addEventListener("error",r=>window.__sim.errors.push(String(r.message)));requestAnimationFrame(ru);
