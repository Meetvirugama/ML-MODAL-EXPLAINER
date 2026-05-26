(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const Zc="178",ws={ROTATE:0,DOLLY:1,PAN:2},ys={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},nf=0,zl=1,sf=2,pu=1,mu=2,$n=3,Mi=0,Qe=1,je=2,gi=0,Ts=1,kl=2,Gl=3,Vl=4,rf=5,Gi=100,of=101,af=102,cf=103,lf=104,hf=200,uf=201,df=202,ff=203,Ha=204,Wa=205,pf=206,mf=207,_f=208,gf=209,vf=210,xf=211,yf=212,Mf=213,Sf=214,Xa=0,qa=1,Ya=2,Ds=3,Ka=4,ja=5,Za=6,$a=7,$c=0,Ef=1,wf=2,vi=0,Tf=1,bf=2,Af=3,Rf=4,Cf=5,Pf=6,Df=7,_u=300,Ls=301,Is=302,Ja=303,Qa=304,Fo=306,tc=1e3,Hi=1001,ec=1002,Nn=1003,Lf=1004,Fr=1005,kn=1006,jo=1007,Wi=1008,Vn=1009,gu=1010,vu=1011,fr=1012,Jc=1013,$i=1014,ti=1015,Cr=1016,Qc=1017,tl=1018,pr=1020,xu=35902,yu=1021,Mu=1022,Un=1023,mr=1026,_r=1027,Su=1028,el=1029,Eu=1030,nl=1031,il=1033,uo=33776,fo=33777,po=33778,mo=33779,nc=35840,ic=35841,sc=35842,rc=35843,oc=36196,ac=37492,cc=37496,lc=37808,hc=37809,uc=37810,dc=37811,fc=37812,pc=37813,mc=37814,_c=37815,gc=37816,vc=37817,xc=37818,yc=37819,Mc=37820,Sc=37821,_o=36492,Ec=36494,wc=36495,wu=36283,Tc=36284,bc=36285,Ac=36286,If=3200,Uf=3201,sl=0,Nf=1,fi="",Tn="srgb",Us="srgb-linear",Eo="linear",ee="srgb",ss=7680,Hl=519,Of=512,Ff=513,Bf=514,Tu=515,zf=516,kf=517,Gf=518,Vf=519,Wl=35044,Xl="300 es",ei=2e3,wo=2001;class ts{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ql=1234567;const cr=Math.PI/180,Ns=180/Math.PI;function Xs(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[s&255]+ke[s>>8&255]+ke[s>>16&255]+ke[s>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function kt(s,t,e){return Math.max(t,Math.min(e,s))}function rl(s,t){return(s%t+t)%t}function Hf(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Wf(s,t,e){return s!==t?(e-s)/(t-s):0}function lr(s,t,e){return(1-e)*s+e*t}function Xf(s,t,e,n){return lr(s,t,1-Math.exp(-e*n))}function qf(s,t=1){return t-Math.abs(rl(s,t*2)-t)}function Yf(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Kf(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function jf(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Zf(s,t){return s+Math.random()*(t-s)}function $f(s){return s*(.5-Math.random())}function Jf(s){s!==void 0&&(ql=s);let t=ql+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Qf(s){return s*cr}function tp(s){return s*Ns}function ep(s){return(s&s-1)===0&&s!==0}function np(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ip(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function sp(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*p,a*l);break;case"YXY":s.set(c*p,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function xs(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ye(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const gr={DEG2RAD:cr,RAD2DEG:Ns,generateUUID:Xs,clamp:kt,euclideanModulo:rl,mapLinear:Hf,inverseLerp:Wf,lerp:lr,damp:Xf,pingpong:qf,smoothstep:Yf,smootherstep:Kf,randInt:jf,randFloat:Zf,randFloatSpread:$f,seededRandom:Jf,degToRad:Qf,radToDeg:tp,isPowerOfTwo:ep,ceilPowerOfTwo:np,floorPowerOfTwo:ip,setQuaternionFromProperEuler:sp,normalize:Ye,denormalize:xs};class Ut{constructor(t=0,e=0){Ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ji{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==p||h!==g){let m=1-a;const f=c*d+l*p+h*g+u*_,S=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){const T=Math.sqrt(E),R=Math.atan2(T,f*S);m=Math.sin(m*R)/T,a=Math.sin(a*R)/T}const v=a*S;if(c=c*m+d*v,l=l*m+p*v,h=h*m+g*v,u=u*m+_*v,m===1-a){const T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*p-l*d,t[e+1]=c*g+h*d+l*u-a*p,t[e+2]=l*g+h*p+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),p=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(kt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(t=0,e=0,n=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Yl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Zo.copy(this).projectOnVector(t),this.sub(Zo)}reflect(t){return this.sub(Zo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zo=new A,Yl=new Ji;class Ft{constructor(t,e,n,i,r,o,a,c,l){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],S=i[1],E=i[4],v=i[7],T=i[2],R=i[5],b=i[8];return r[0]=o*_+a*S+c*T,r[3]=o*m+a*E+c*R,r[6]=o*f+a*v+c*b,r[1]=l*_+h*S+u*T,r[4]=l*m+h*E+u*R,r[7]=l*f+h*v+u*b,r[2]=d*_+p*S+g*T,r[5]=d*m+p*E+g*R,r[8]=d*f+p*v+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,p=l*r-o*c,g=e*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*l-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(h*e-i*c)*_,t[5]=(i*r-a*e)*_,t[6]=p*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply($o.makeScale(t,e)),this}rotate(t){return this.premultiply($o.makeRotation(-t)),this}translate(t,e){return this.premultiply($o.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const $o=new Ft;function bu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function To(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function rp(){const s=To("canvas");return s.style.display="block",s}const Kl={};function bs(s){s in Kl||(Kl[s]=!0,console.warn(s))}function op(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ap(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function cp(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const jl=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zl=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lp(){const s={enabled:!0,workingColorSpace:Us,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ee&&(i.r=ni(i.r),i.g=ni(i.g),i.b=ni(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ee&&(i.r=As(i.r),i.g=As(i.g),i.b=As(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===fi?Eo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return bs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return bs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Us]:{primaries:t,whitePoint:n,transfer:Eo,toXYZ:jl,fromXYZ:Zl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Tn},outputColorSpaceConfig:{drawingBufferColorSpace:Tn}},[Tn]:{primaries:t,whitePoint:n,transfer:ee,toXYZ:jl,fromXYZ:Zl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Tn}}}),s}const Kt=lp();function ni(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function As(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let rs;class hp{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{rs===void 0&&(rs=To("canvas")),rs.width=t.width,rs.height=t.height;const i=rs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=rs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=To("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ni(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ni(e[n]/255)*255):e[n]=ni(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let up=0;class ol{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=Xs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Jo(i[o].image)):r.push(Jo(i[o]))}else r=Jo(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Jo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?hp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dp=0;const Qo=new A;class tn extends ts{constructor(t=tn.DEFAULT_IMAGE,e=tn.DEFAULT_MAPPING,n=Hi,i=Hi,r=kn,o=Wi,a=Un,c=Vn,l=tn.DEFAULT_ANISOTROPY,h=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Xs(),this.name="",this.source=new ol(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Qo).x}get height(){return this.source.getSize(Qo).y}get depth(){return this.source.getSize(Qo).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_u)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tc:t.x=t.x-Math.floor(t.x);break;case Hi:t.x=t.x<0?0:1;break;case ec:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tc:t.y=t.y-Math.floor(t.y);break;case Hi:t.y=t.y<0?0:1;break;case ec:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=_u;tn.DEFAULT_ANISOTROPY=1;class Ee{constructor(t=0,e=0,n=0,i=1){Ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(l+1)/2,v=(p+1)/2,T=(f+1)/2,R=(h+d)/4,b=(u+_)/4,P=(g+m)/4;return E>v&&E>T?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=R/n,r=b/n):v>T?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=R/i,r=P/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=b/r,i=P/r),this.set(n,i,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-_)/S,this.z=(d-h)/S,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this.w=kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this.w=kt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fp extends ts{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e);const i={width:t,height:e,depth:n.depth},r=new tn(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:kn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new ol(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends fp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Au extends tn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class pp extends tn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pr{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Pn):Pn.fromBufferAttribute(r,o),Pn.applyMatrix4(t.matrixWorld),this.expandByPoint(Pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Br.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Br.copy(n.boundingBox)),Br.applyMatrix4(t.matrixWorld),this.union(Br)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pn),Pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zs),zr.subVectors(this.max,Zs),os.subVectors(t.a,Zs),as.subVectors(t.b,Zs),cs.subVectors(t.c,Zs),oi.subVectors(as,os),ai.subVectors(cs,as),Di.subVectors(os,cs);let e=[0,-oi.z,oi.y,0,-ai.z,ai.y,0,-Di.z,Di.y,oi.z,0,-oi.x,ai.z,0,-ai.x,Di.z,0,-Di.x,-oi.y,oi.x,0,-ai.y,ai.x,0,-Di.y,Di.x,0];return!ta(e,os,as,cs,zr)||(e=[1,0,0,0,1,0,0,0,1],!ta(e,os,as,cs,zr))?!1:(kr.crossVectors(oi,ai),e=[kr.x,kr.y,kr.z],ta(e,os,as,cs,zr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const qn=[new A,new A,new A,new A,new A,new A,new A,new A],Pn=new A,Br=new Pr,os=new A,as=new A,cs=new A,oi=new A,ai=new A,Di=new A,Zs=new A,zr=new A,kr=new A,Li=new A;function ta(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Li.fromArray(s,r);const a=i.x*Math.abs(Li.x)+i.y*Math.abs(Li.y)+i.z*Math.abs(Li.z),c=t.dot(Li),l=e.dot(Li),h=n.dot(Li);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const mp=new Pr,$s=new A,ea=new A;class Dr{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):mp.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$s.subVectors(t,this.center);const e=$s.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector($s,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ea.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($s.copy(t.center).add(ea)),this.expandByPoint($s.copy(t.center).sub(ea))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Yn=new A,na=new A,Gr=new A,ci=new A,ia=new A,Vr=new A,sa=new A;class Bo{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yn.copy(this.origin).addScaledVector(this.direction,e),Yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){na.copy(t).add(e).multiplyScalar(.5),Gr.copy(e).sub(t).normalize(),ci.copy(this.origin).sub(na);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Gr),a=ci.dot(this.direction),c=-ci.dot(Gr),l=ci.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(na).addScaledVector(Gr,d),p}intersectSphere(t,e){Yn.subVectors(t.center,this.origin);const n=Yn.dot(this.direction),i=Yn.dot(Yn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Yn)!==null}intersectTriangle(t,e,n,i,r){ia.subVectors(e,t),Vr.subVectors(n,t),sa.crossVectors(ia,Vr);let o=this.direction.dot(sa),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ci.subVectors(this.origin,t);const c=a*this.direction.dot(Vr.crossVectors(ci,Vr));if(c<0)return null;const l=a*this.direction.dot(ia.cross(ci));if(l<0||c+l>o)return null;const h=-a*ci.dot(sa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,n,i,r,o,a,c,l,h,u,d,p,g,_,m){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,u,d,p,g,_,m)}set(t,e,n,i,r,o,a,c,l,h,u,d,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ls.setFromMatrixColumn(t,0).length(),r=1/ls.setFromMatrixColumn(t,1).length(),o=1/ls.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,p=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,p=c*u,g=l*h,_=l*u;e[0]=d+_*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,p=c*u,g=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,p=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-p,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_p,t,gp)}lookAt(t,e,n){const i=this.elements;return hn.subVectors(t,e),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),li.crossVectors(n,hn),li.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),li.crossVectors(n,hn)),li.normalize(),Hr.crossVectors(hn,li),i[0]=li.x,i[4]=Hr.x,i[8]=hn.x,i[1]=li.y,i[5]=Hr.y,i[9]=hn.y,i[2]=li.z,i[6]=Hr.z,i[10]=hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],S=n[3],E=n[7],v=n[11],T=n[15],R=i[0],b=i[4],P=i[8],x=i[12],M=i[1],D=i[5],F=i[9],O=i[13],V=i[2],W=i[6],H=i[10],Y=i[14],G=i[3],nt=i[7],lt=i[11],gt=i[15];return r[0]=o*R+a*M+c*V+l*G,r[4]=o*b+a*D+c*W+l*nt,r[8]=o*P+a*F+c*H+l*lt,r[12]=o*x+a*O+c*Y+l*gt,r[1]=h*R+u*M+d*V+p*G,r[5]=h*b+u*D+d*W+p*nt,r[9]=h*P+u*F+d*H+p*lt,r[13]=h*x+u*O+d*Y+p*gt,r[2]=g*R+_*M+m*V+f*G,r[6]=g*b+_*D+m*W+f*nt,r[10]=g*P+_*F+m*H+f*lt,r[14]=g*x+_*O+m*Y+f*gt,r[3]=S*R+E*M+v*V+T*G,r[7]=S*b+E*D+v*W+T*nt,r[11]=S*P+E*F+v*H+T*lt,r[15]=S*x+E*O+v*Y+T*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*p-n*c*p)+_*(+e*c*p-e*l*d+r*o*d-i*o*p+i*l*h-r*c*h)+m*(+e*l*u-e*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+f*(-i*a*h-e*c*u+e*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],S=u*m*l-_*d*l+_*c*p-a*m*p-u*c*f+a*d*f,E=g*d*l-h*m*l-g*c*p+o*m*p+h*c*f-o*d*f,v=h*_*l-g*u*l+g*a*p-o*_*p-h*a*f+o*u*f,T=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,R=e*S+n*E+i*v+r*T;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/R;return t[0]=S*b,t[1]=(_*d*r-u*m*r-_*i*p+n*m*p+u*i*f-n*d*f)*b,t[2]=(a*m*r-_*c*r+_*i*l-n*m*l-a*i*f+n*c*f)*b,t[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*p-n*c*p)*b,t[4]=E*b,t[5]=(h*m*r-g*d*r+g*i*p-e*m*p-h*i*f+e*d*f)*b,t[6]=(g*c*r-o*m*r-g*i*l+e*m*l+o*i*f-e*c*f)*b,t[7]=(o*d*r-h*c*r+h*i*l-e*d*l-o*i*p+e*c*p)*b,t[8]=v*b,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*f-e*u*f)*b,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*f+e*a*f)*b,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*p-e*a*p)*b,t[12]=T*b,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*m+e*u*m)*b,t[14]=(g*a*i-o*_*i-g*n*c+e*_*c+o*n*m-e*a*m)*b,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*d+e*a*d)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,p=r*h,g=r*u,_=o*h,m=o*u,f=a*u,S=c*l,E=c*h,v=c*u,T=n.x,R=n.y,b=n.z;return i[0]=(1-(_+f))*T,i[1]=(p+v)*T,i[2]=(g-E)*T,i[3]=0,i[4]=(p-v)*R,i[5]=(1-(d+f))*R,i[6]=(m+S)*R,i[7]=0,i[8]=(g+E)*b,i[9]=(m-S)*b,i[10]=(1-(d+_))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ls.set(i[0],i[1],i[2]).length();const o=ls.set(i[4],i[5],i[6]).length(),a=ls.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Dn.copy(this);const l=1/r,h=1/o,u=1/a;return Dn.elements[0]*=l,Dn.elements[1]*=l,Dn.elements[2]*=l,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=u,Dn.elements[9]*=u,Dn.elements[10]*=u,e.setFromRotationMatrix(Dn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=ei){const c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let p,g;if(a===ei)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===wo)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=ei){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*l,p=(n+i)*h;let g,_;if(a===ei)g=(o+r)*u,_=-2*u;else if(a===wo)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ls=new A,Dn=new ce,_p=new A(0,0,0),gp=new A(1,1,1),li=new A,Hr=new A,hn=new A,$l=new ce,Jl=new Ji;class On{constructor(t=0,e=0,n=0,i=On.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return $l.makeRotationFromQuaternion(t),this.setFromRotationMatrix($l,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Jl.setFromEuler(this),this.setFromQuaternion(Jl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class Ru{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vp=0;const Ql=new A,hs=new Ji,Kn=new ce,Wr=new A,Js=new A,xp=new A,yp=new Ji,th=new A(1,0,0),eh=new A(0,1,0),nh=new A(0,0,1),ih={type:"added"},Mp={type:"removed"},us={type:"childadded",child:null},ra={type:"childremoved",child:null};class be extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=Xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DEFAULT_UP.clone();const t=new A,e=new On,n=new Ji,i=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ce},normalMatrix:{value:new Ft}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ru,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(th,t)}rotateY(t){return this.rotateOnAxis(eh,t)}rotateZ(t){return this.rotateOnAxis(nh,t)}translateOnAxis(t,e){return Ql.copy(t).applyQuaternion(this.quaternion),this.position.add(Ql.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(th,t)}translateY(t){return this.translateOnAxis(eh,t)}translateZ(t){return this.translateOnAxis(nh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Wr.copy(t):Wr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Js,Wr,this.up):Kn.lookAt(Wr,Js,this.up),this.quaternion.setFromRotationMatrix(Kn),i&&(Kn.extractRotation(i.matrixWorld),hs.setFromRotationMatrix(Kn),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ih),us.child=t,this.dispatchEvent(us),us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Mp),ra.child=t,this.dispatchEvent(ra),ra.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ih),us.child=t,this.dispatchEvent(us),us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,t,xp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,yp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}be.DEFAULT_UP=new A(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new A,jn=new A,oa=new A,Zn=new A,ds=new A,fs=new A,sh=new A,aa=new A,ca=new A,la=new A,ha=new Ee,ua=new Ee,da=new Ee;class In{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ln.subVectors(t,e),i.cross(Ln);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ln.subVectors(i,e),jn.subVectors(n,e),oa.subVectors(t,e);const o=Ln.dot(Ln),a=Ln.dot(jn),c=Ln.dot(oa),l=jn.dot(jn),h=jn.dot(oa),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,Zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Zn.x),c.addScaledVector(o,Zn.y),c.addScaledVector(a,Zn.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return ha.setScalar(0),ua.setScalar(0),da.setScalar(0),ha.fromBufferAttribute(t,e),ua.fromBufferAttribute(t,n),da.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(ha,r.x),o.addScaledVector(ua,r.y),o.addScaledVector(da,r.z),o}static isFrontFacing(t,e,n,i){return Ln.subVectors(n,e),jn.subVectors(t,e),Ln.cross(jn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),Ln.cross(jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return In.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return In.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return In.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return In.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return In.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;ds.subVectors(i,n),fs.subVectors(r,n),aa.subVectors(t,n);const c=ds.dot(aa),l=fs.dot(aa);if(c<=0&&l<=0)return e.copy(n);ca.subVectors(t,i);const h=ds.dot(ca),u=fs.dot(ca);if(h>=0&&u<=h)return e.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(ds,o);la.subVectors(t,r);const p=ds.dot(la),g=fs.dot(la);if(g>=0&&p<=g)return e.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(fs,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return sh.subVectors(r,i),a=(u-h)/(u-h+(p-g)),e.copy(i).addScaledVector(sh,a);const f=1/(m+_+d);return o=_*f,a=d*f,e.copy(n).addScaledVector(ds,o).addScaledVector(fs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Cu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},Xr={h:0,s:0,l:0};function fa(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Kt.workingColorSpace){if(t=rl(t,1),e=kt(e,0,1),n=kt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=fa(o,r,t+1/3),this.g=fa(o,r,t),this.b=fa(o,r,t-1/3)}return Kt.colorSpaceToWorking(this,i),this}setStyle(t,e=Tn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Tn){const n=Cu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ni(t.r),this.g=ni(t.g),this.b=ni(t.b),this}copyLinearToSRGB(t){return this.r=As(t.r),this.g=As(t.g),this.b=As(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Tn){return Kt.workingToColorSpace(Ge.copy(this),t),Math.round(kt(Ge.r*255,0,255))*65536+Math.round(kt(Ge.g*255,0,255))*256+Math.round(kt(Ge.b*255,0,255))}getHexString(t=Tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.workingToColorSpace(Ge.copy(this),e);const n=Ge.r,i=Ge.g,r=Ge.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.workingToColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=Tn){Kt.workingToColorSpace(Ge.copy(this),t);const e=Ge.r,n=Ge.g,i=Ge.b;return t!==Tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(hi),this.setHSL(hi.h+t,hi.s+e,hi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(hi),t.getHSL(Xr);const n=lr(hi.h,Xr.h,e),i=lr(hi.s,Xr.s,e),r=lr(hi.l,Xr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ge=new Gt;Gt.NAMES=Cu;let Sp=0;class bi extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=Xs(),this.name="",this.type="Material",this.blending=Ts,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ha,this.blendDst=Wa,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(n.blending=this.blending),this.side!==Mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ha&&(n.blendSrc=this.blendSrc),this.blendDst!==Wa&&(n.blendDst=this.blendDst),this.blendEquation!==Gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class qs extends bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=$c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Pe=new A,qr=new Ut;let Ep=0;class en{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ep++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wl,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)qr.fromBufferAttribute(this,e),qr.applyMatrix3(t),this.setXY(e,qr.x,qr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=xs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ye(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=xs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=xs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=xs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=xs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array),i=Ye(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array),i=Ye(i,this.array),r=Ye(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wl&&(t.usage=this.usage),t}}class Pu extends en{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Du extends en{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ae extends en{constructor(t,e,n){super(new Float32Array(t),e,n)}}let wp=0;const En=new ce,pa=new be,ps=new A,un=new Pr,Qs=new Pr,Oe=new A;class Ht extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=Xs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bu(t)?Du:Pu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,n){return En.makeTranslation(t,e,n),this.applyMatrix4(En),this}scale(t,e,n){return En.makeScale(t,e,n),this.applyMatrix4(En),this}lookAt(t){return pa.lookAt(t),pa.updateMatrix(),this.applyMatrix4(pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ae(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];un.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const n=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Qs.setFromBufferAttribute(a),this.morphTargetsRelative?(Oe.addVectors(un.min,Qs.min),un.expandByPoint(Oe),Oe.addVectors(un.max,Qs.max),un.expandByPoint(Oe)):(un.expandByPoint(Qs.min),un.expandByPoint(Qs.max))}un.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Oe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Oe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Oe.fromBufferAttribute(a,l),c&&(ps.fromBufferAttribute(t,l),Oe.add(ps)),i=Math.max(i,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new A,c[P]=new A;const l=new A,h=new A,u=new A,d=new Ut,p=new Ut,g=new Ut,_=new A,m=new A;function f(P,x,M){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,x),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,P),p.fromBufferAttribute(r,x),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),p.sub(d),g.sub(d);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(D),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(D),a[P].add(_),a[x].add(_),a[M].add(_),c[P].add(m),c[x].add(m),c[M].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let P=0,x=S.length;P<x;++P){const M=S[P],D=M.start,F=M.count;for(let O=D,V=D+F;O<V;O+=3)f(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const E=new A,v=new A,T=new A,R=new A;function b(P){T.fromBufferAttribute(i,P),R.copy(T);const x=a[P];E.copy(x),E.sub(T.multiplyScalar(T.dot(x))).normalize(),v.crossVectors(R,x);const D=v.dot(c[P])<0?-1:1;o.setXYZW(P,E.x,E.y,E.z,D)}for(let P=0,x=S.length;P<x;++P){const M=S[P],D=M.start,F=M.count;for(let O=D,V=D+F;O<V;O+=3)b(t.getX(O+0)),b(t.getX(O+1)),b(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new A,r=new A,o=new A,a=new A,c=new A,l=new A,h=new A,u=new A;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new en(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ht,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],p=t(d,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rh=new ce,Ii=new Bo,Yr=new Dr,oh=new A,Kr=new A,jr=new A,Zr=new A,ma=new A,$r=new A,ah=new A,Jr=new A;class ot extends be{constructor(t=new Ht,e=new qs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){$r.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(ma.fromBufferAttribute(u,t),o?$r.addScaledVector(ma,h):$r.addScaledVector(ma.sub(e),h))}e.add($r)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(r),Ii.copy(t.ray).recast(t.near),!(Yr.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(Yr,oh)===null||Ii.origin.distanceToSquared(oh)>(t.far-t.near)**2))&&(rh.copy(r).invert(),Ii.copy(t.ray).applyMatrix4(rh),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ii)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],S=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=S,T=E;v<T;v+=3){const R=a.getX(v),b=a.getX(v+1),P=a.getX(v+2);i=Qr(this,f,t,n,l,h,u,R,b,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const S=a.getX(m),E=a.getX(m+1),v=a.getX(m+2);i=Qr(this,o,t,n,l,h,u,S,E,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],S=Math.max(m.start,p.start),E=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=S,T=E;v<T;v+=3){const R=v,b=v+1,P=v+2;i=Qr(this,f,t,n,l,h,u,R,b,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const S=m,E=m+1,v=m+2;i=Qr(this,o,t,n,l,h,u,S,E,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Tp(s,t,e,n,i,r,o,a){let c;if(t.side===Qe?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===Mi,a),c===null)return null;Jr.copy(a),Jr.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Jr);return l<e.near||l>e.far?null:{distance:l,point:Jr.clone(),object:s}}function Qr(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,Kr),s.getVertexPosition(c,jr),s.getVertexPosition(l,Zr);const h=Tp(s,t,e,n,Kr,jr,Zr,ah);if(h){const u=new A;In.getBarycoord(ah,Kr,jr,Zr,u),i&&(h.uv=In.getInterpolatedAttribute(i,a,c,l,u,new Ut)),r&&(h.uv1=In.getInterpolatedAttribute(r,a,c,l,u,new Ut)),o&&(h.normal=In.getInterpolatedAttribute(o,a,c,l,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new A,materialIndex:0};In.getNormal(Kr,jr,Zr,d.normal),h.face=d,h.barycoord=u}return h}class de extends Ht{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Ae(l,3)),this.setAttribute("normal",new Ae(h,3)),this.setAttribute("uv",new Ae(u,2));function g(_,m,f,S,E,v,T,R,b,P,x){const M=v/b,D=T/P,F=v/2,O=T/2,V=R/2,W=b+1,H=P+1;let Y=0,G=0;const nt=new A;for(let lt=0;lt<H;lt++){const gt=lt*D-O;for(let Lt=0;Lt<W;Lt++){const Jt=Lt*M-F;nt[_]=Jt*S,nt[m]=gt*E,nt[f]=V,l.push(nt.x,nt.y,nt.z),nt[_]=0,nt[m]=0,nt[f]=R>0?1:-1,h.push(nt.x,nt.y,nt.z),u.push(Lt/b),u.push(1-lt/P),Y+=1}}for(let lt=0;lt<P;lt++)for(let gt=0;gt<b;gt++){const Lt=d+gt+W*lt,Jt=d+gt+W*(lt+1),X=d+(gt+1)+W*(lt+1),et=d+(gt+1)+W*lt;c.push(Lt,Jt,et),c.push(Jt,X,et),G+=6}a.addGroup(p,G,x),p+=G,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new de(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Os(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ke(s){const t={};for(let e=0;e<s.length;e++){const n=Os(s[e]);for(const i in n)t[i]=n[i]}return t}function bp(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Lu(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const Ap={clone:Os,merge:Ke};var Rp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Si extends bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rp,this.fragmentShader=Cp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Os(t.uniforms),this.uniformsGroups=bp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Iu extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=ei}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ui=new A,ch=new Ut,lh=new Ut;class fn extends Iu{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ns*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(cr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ns*2*Math.atan(Math.tan(cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ui.x,ui.y).multiplyScalar(-t/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-t/ui.z)}getViewSize(t,e){return this.getViewBounds(t,ch,lh),e.subVectors(lh,ch)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(cr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ms=-90,_s=1;class Pp extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new fn(ms,_s,t,e);i.layers=this.layers,this.add(i);const r=new fn(ms,_s,t,e);r.layers=this.layers,this.add(r);const o=new fn(ms,_s,t,e);o.layers=this.layers,this.add(o);const a=new fn(ms,_s,t,e);a.layers=this.layers,this.add(a);const c=new fn(ms,_s,t,e);c.layers=this.layers,this.add(c);const l=new fn(ms,_s,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===ei)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===wo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Uu extends tn{constructor(t=[],e=Ls,n,i,r,o,a,c,l,h){super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Dp extends Qi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Uu(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new de(5,5,5),r=new Si({name:"CubemapFromEquirect",uniforms:Os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:gi});r.uniforms.tEquirect.value=e;const o=new ot(i,r),a=e.minFilter;return e.minFilter===Wi&&(e.minFilter=kn),new Pp(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}class Wt extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lp={type:"move"};class _a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lp)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Wt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Ip extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const ga=new A,Up=new A,Np=new Ft;class di{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ga.subVectors(n,e).cross(Up.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ga),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Np.getNormalMatrix(t),i=this.coplanarPoint(ga).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new Dr,Op=new Ut(.5,.5),to=new A;class al{constructor(t=new di,e=new di,n=new di,i=new di,r=new di,o=new di){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ei){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],p=i[8],g=i[9],_=i[10],m=i[11],f=i[12],S=i[13],E=i[14],v=i[15];if(n[0].setComponents(c-r,d-l,m-p,v-f).normalize(),n[1].setComponents(c+r,d+l,m+p,v+f).normalize(),n[2].setComponents(c+o,d+h,m+g,v+S).normalize(),n[3].setComponents(c-o,d-h,m-g,v-S).normalize(),n[4].setComponents(c-a,d-u,m-_,v-E).normalize(),e===ei)n[5].setComponents(c+a,d+u,m+_,v+E).normalize();else if(e===wo)n[5].setComponents(a,u,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(t){Ui.center.set(0,0,0);const e=Op.distanceTo(t.center);return Ui.radius=.7071067811865476+e,Ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(to.x=i.normal.x>0?t.max.x:t.min.x,to.y=i.normal.y>0?t.max.y:t.min.y,to.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(to)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fe extends bi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const bo=new A,Ao=new A,hh=new ce,tr=new Bo,eo=new Dr,va=new A,uh=new A;class Re extends be{constructor(t=new Ht,e=new Fe){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)bo.fromBufferAttribute(e,i-1),Ao.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=bo.distanceTo(Ao);t.setAttribute("lineDistance",new Ae(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(i),eo.radius+=r,t.ray.intersectsSphere(eo)===!1)return;hh.copy(i).invert(),tr.copy(t.ray).applyMatrix4(hh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const f=h.getX(_),S=h.getX(_+1),E=no(this,t,tr,c,f,S,_);E&&e.push(E)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),f=no(this,t,tr,c,_,m,g-1);f&&e.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const f=no(this,t,tr,c,_,_+1,_);f&&e.push(f)}if(this.isLineLoop){const _=no(this,t,tr,c,g-1,p,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function no(s,t,e,n,i,r,o){const a=s.geometry.attributes.position;if(bo.fromBufferAttribute(a,i),Ao.fromBufferAttribute(a,r),e.distanceSqToSegment(bo,Ao,va,uh)>n)return;va.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(va);if(!(l<t.near||l>t.far))return{distance:l,point:uh.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}class cl extends bi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const dh=new ce,Rc=new Bo,io=new Dr,so=new A;class Nu extends be{constructor(t=new Ht,e=new cl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(i),io.radius+=r,t.ray.intersectsSphere(io)===!1)return;dh.copy(i).invert(),Rc.copy(t.ray).applyMatrix4(dh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=l.getX(g);so.fromBufferAttribute(u,m),fh(so,m,c,i,t,e,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,_=p;g<_;g++)so.fromBufferAttribute(u,g),fh(so,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function fh(s,t,e,n,i,r,o){const a=Rc.distanceSqToPoint(s);if(a<e){const c=new A;Rc.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Ou extends tn{constructor(t,e,n=$i,i,r,o,a=Nn,c=Nn,l,h=mr,u=1){if(h!==mr&&h!==_r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ol(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class ii extends Ht{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=n/2;let f=0;S(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Ae(u,3)),this.setAttribute("normal",new Ae(d,3)),this.setAttribute("uv",new Ae(p,2));function S(){const v=new A,T=new A;let R=0;const b=(e-t)/n;for(let P=0;P<=r;P++){const x=[],M=P/r,D=M*(e-t)+t;for(let F=0;F<=i;F++){const O=F/i,V=O*c+a,W=Math.sin(V),H=Math.cos(V);T.x=D*W,T.y=-M*n+m,T.z=D*H,u.push(T.x,T.y,T.z),v.set(W,b,H).normalize(),d.push(v.x,v.y,v.z),p.push(O,1-M),x.push(g++)}_.push(x)}for(let P=0;P<i;P++)for(let x=0;x<r;x++){const M=_[x][P],D=_[x+1][P],F=_[x+1][P+1],O=_[x][P+1];(t>0||x!==0)&&(h.push(M,D,O),R+=3),(e>0||x!==r-1)&&(h.push(D,F,O),R+=3)}l.addGroup(f,R,0),f+=R}function E(v){const T=g,R=new Ut,b=new A;let P=0;const x=v===!0?t:e,M=v===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),g++;const D=g;for(let F=0;F<=i;F++){const V=F/i*c+a,W=Math.cos(V),H=Math.sin(V);b.x=x*H,b.y=m*M,b.z=x*W,u.push(b.x,b.y,b.z),d.push(0,M,0),R.x=W*.5+.5,R.y=H*.5*M+.5,p.push(R.x,R.y),g++}for(let F=0;F<i;F++){const O=T+F,V=D+F;v===!0?h.push(V,V+1,O):h.push(V+1,V,O),P+=3}l.addGroup(f,P,v===!0?1:2),f+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ii(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class zo extends ii{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new zo(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ko extends Ht{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,d=e/c,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const S=f*d-o;for(let E=0;E<l;E++){const v=E*u-r;g.push(v,-S,0),_.push(0,0,1),m.push(E/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let S=0;S<a;S++){const E=S+l*f,v=S+l*(f+1),T=S+1+l*(f+1),R=S+1+l*f;p.push(E,v,R),p.push(v,T,R)}this.setIndex(p),this.setAttribute("position",new Ae(g,3)),this.setAttribute("normal",new Ae(_,3)),this.setAttribute("uv",new Ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ko(t.width,t.height,t.widthSegments,t.heightSegments)}}class Fs extends Ht{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let u=t;const d=(e-t)/i,p=new A,g=new Ut;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const f=r+m/n*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let f=0;f<n;f++){const S=f+m,E=S,v=S+n+1,T=S+n+2,R=S+1;a.push(E,v,R),a.push(v,T,R)}}this.setIndex(a),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(l,3)),this.setAttribute("uv",new Ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fs(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ie extends Ht{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new A,d=new A,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const S=[],E=f/n;let v=0;f===0&&o===0?v=.5/e:f===n&&c===Math.PI&&(v=-.5/e);for(let T=0;T<=e;T++){const R=T/e;u.x=-t*Math.cos(i+R*r)*Math.sin(o+E*a),u.y=t*Math.cos(o+E*a),u.z=t*Math.sin(i+R*r)*Math.sin(o+E*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(R+v,1-E),S.push(l++)}h.push(S)}for(let f=0;f<n;f++)for(let S=0;S<e;S++){const E=h[f][S+1],v=h[f][S],T=h[f+1][S],R=h[f+1][S+1];(f!==0||o>0)&&p.push(E,v,R),(f!==n-1||c<Math.PI)&&p.push(v,T,R)}this.setIndex(p),this.setAttribute("position",new Ae(g,3)),this.setAttribute("normal",new Ae(_,3)),this.setAttribute("uv",new Ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ie(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ll extends Ht{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new A,u=new A,d=new A;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const _=g/i*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const _=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,S=(i+1)*p+g;o.push(_,m,S),o.push(m,f,S)}this.setIndex(o),this.setAttribute("position",new Ae(a,3)),this.setAttribute("normal",new Ae(c,3)),this.setAttribute("uv",new Ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ll(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Fu extends bi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sl,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Et extends bi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Gt(16777215),this.specular=new Gt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sl,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=$c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Fp extends bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=If,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Bp extends bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Go extends Fe{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}class hl extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const xa=new ce,ph=new A,mh=new A;class Bu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.mapType=Vn,this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new al,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ph.setFromMatrixPosition(t.matrixWorld),e.position.copy(ph),mh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(mh),e.updateMatrixWorld(),xa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class zp extends Bu{constructor(){super(new fn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=Ns*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class kp extends hl{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new zp}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class zu extends Iu{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Gp extends Bu{constructor(){super(new zu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vp extends hl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new Gp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Hp extends hl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Wp extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class _h{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=kt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(kt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const gh=new A;let ro,ya;class vh extends be{constructor(t=new A(0,0,1),e=new A(0,0,0),n=1,i=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",ro===void 0&&(ro=new Ht,ro.setAttribute("position",new Ae([0,0,0,0,1,0],3)),ya=new zo(.5,1,5,1),ya.translate(0,-.5,0)),this.position.copy(e),this.line=new Re(ro,new Fe({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new ot(ya,new qs({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{gh.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(gh,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Xp extends ts{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function xh(s,t,e,n){const i=qp(n);switch(e){case yu:return s*t;case Su:return s*t/i.components*i.byteLength;case el:return s*t/i.components*i.byteLength;case Eu:return s*t*2/i.components*i.byteLength;case nl:return s*t*2/i.components*i.byteLength;case Mu:return s*t*3/i.components*i.byteLength;case Un:return s*t*4/i.components*i.byteLength;case il:return s*t*4/i.components*i.byteLength;case uo:case fo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case po:case mo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ic:case rc:return Math.max(s,16)*Math.max(t,8)/4;case nc:case sc:return Math.max(s,8)*Math.max(t,8)/2;case oc:case ac:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case cc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case lc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case hc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case uc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case dc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case fc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case pc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case mc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case _c:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case gc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case vc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case xc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case yc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Mc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Sc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case _o:case Ec:case wc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case wu:case Tc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case bc:case Ac:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qp(s){switch(s){case Vn:case gu:return{byteLength:1,components:1};case fr:case vu:case Cr:return{byteLength:2,components:1};case Qc:case tl:return{byteLength:2,components:4};case $i:case Jc:case ti:return{byteLength:4,components:1};case xu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zc);function ku(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Yp(s){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=s.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=s.SHORT;else if(l instanceof Uint32Array)p=s.UNSIGNED_INT;else if(l instanceof Int32Array)p=s.INT;else if(l instanceof Int8Array)p=s.BYTE;else if(l instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var Kp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jp=`#ifdef USE_ALPHAHASH
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
#endif`,Zp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$p=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tm=`#ifdef USE_AOMAP
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
#endif`,em=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nm=`#ifdef USE_BATCHING
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
#endif`,im=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,om=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,am=`#ifdef USE_IRIDESCENCE
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
#endif`,cm=`#ifdef USE_BUMPMAP
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
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_m=`#if defined( USE_COLOR_ALPHA )
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
#endif`,gm=`#define PI 3.141592653589793
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
} // validated`,vm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xm=`vec3 transformedNormal = objectNormal;
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
#endif`,ym=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Em=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bm=`#ifdef USE_ENVMAP
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
#endif`,Am=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rm=`#ifdef USE_ENVMAP
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
#endif`,Cm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pm=`#ifdef USE_ENVMAP
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
#endif`,Dm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Im=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Um=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nm=`#ifdef USE_GRADIENTMAP
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
}`,Om=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zm=`uniform bool receiveShadow;
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
#endif`,km=`#ifdef USE_ENVMAP
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
#endif`,Gm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xm=`PhysicalMaterial material;
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
#endif`,qm=`struct PhysicalMaterial {
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
}`,Ym=`
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
#endif`,Km=`#if defined( RE_IndirectDiffuse )
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
#endif`,jm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$m=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,t_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,e_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,n_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,i_=`#if defined( USE_POINTS_UV )
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
#endif`,s_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,r_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,o_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,a_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,c_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l_=`#ifdef USE_MORPHTARGETS
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
#endif`,h_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,d_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,f_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,__=`#ifdef USE_NORMALMAP
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
#endif`,g_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,v_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,x_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,y_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,M_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,S_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,E_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,w_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,T_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,A_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,R_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,C_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,P_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,D_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,L_=`float getShadowMask() {
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
}`,I_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,U_=`#ifdef USE_SKINNING
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
#endif`,N_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,O_=`#ifdef USE_SKINNING
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
#endif`,F_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,B_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,z_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,k_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,G_=`#ifdef USE_TRANSMISSION
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
#endif`,V_=`#ifdef USE_TRANSMISSION
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
#endif`,H_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Y_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K_=`uniform sampler2D t2D;
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
}`,j_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q_=`#include <common>
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
}`,tg=`#if DEPTH_PACKING == 3200
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
}`,eg=`#define DISTANCE
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
}`,ng=`#define DISTANCE
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
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rg=`uniform float scale;
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
}`,og=`uniform vec3 diffuse;
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
}`,ag=`#include <common>
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
}`,cg=`uniform vec3 diffuse;
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
}`,lg=`#define LAMBERT
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
}`,hg=`#define LAMBERT
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
}`,ug=`#define MATCAP
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
}`,dg=`#define MATCAP
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
}`,fg=`#define NORMAL
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
}`,pg=`#define NORMAL
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
}`,mg=`#define PHONG
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
}`,_g=`#define PHONG
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
}`,gg=`#define STANDARD
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
}`,vg=`#define STANDARD
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
}`,xg=`#define TOON
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
}`,yg=`#define TOON
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
}`,Mg=`uniform float size;
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
}`,Sg=`uniform vec3 diffuse;
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
}`,Eg=`#include <common>
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
}`,wg=`uniform vec3 color;
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
}`,Tg=`uniform float rotation;
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
}`,bg=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:Kp,alphahash_pars_fragment:jp,alphamap_fragment:Zp,alphamap_pars_fragment:$p,alphatest_fragment:Jp,alphatest_pars_fragment:Qp,aomap_fragment:tm,aomap_pars_fragment:em,batching_pars_vertex:nm,batching_vertex:im,begin_vertex:sm,beginnormal_vertex:rm,bsdfs:om,iridescence_fragment:am,bumpmap_pars_fragment:cm,clipping_planes_fragment:lm,clipping_planes_pars_fragment:hm,clipping_planes_pars_vertex:um,clipping_planes_vertex:dm,color_fragment:fm,color_pars_fragment:pm,color_pars_vertex:mm,color_vertex:_m,common:gm,cube_uv_reflection_fragment:vm,defaultnormal_vertex:xm,displacementmap_pars_vertex:ym,displacementmap_vertex:Mm,emissivemap_fragment:Sm,emissivemap_pars_fragment:Em,colorspace_fragment:wm,colorspace_pars_fragment:Tm,envmap_fragment:bm,envmap_common_pars_fragment:Am,envmap_pars_fragment:Rm,envmap_pars_vertex:Cm,envmap_physical_pars_fragment:km,envmap_vertex:Pm,fog_vertex:Dm,fog_pars_vertex:Lm,fog_fragment:Im,fog_pars_fragment:Um,gradientmap_pars_fragment:Nm,lightmap_pars_fragment:Om,lights_lambert_fragment:Fm,lights_lambert_pars_fragment:Bm,lights_pars_begin:zm,lights_toon_fragment:Gm,lights_toon_pars_fragment:Vm,lights_phong_fragment:Hm,lights_phong_pars_fragment:Wm,lights_physical_fragment:Xm,lights_physical_pars_fragment:qm,lights_fragment_begin:Ym,lights_fragment_maps:Km,lights_fragment_end:jm,logdepthbuf_fragment:Zm,logdepthbuf_pars_fragment:$m,logdepthbuf_pars_vertex:Jm,logdepthbuf_vertex:Qm,map_fragment:t_,map_pars_fragment:e_,map_particle_fragment:n_,map_particle_pars_fragment:i_,metalnessmap_fragment:s_,metalnessmap_pars_fragment:r_,morphinstance_vertex:o_,morphcolor_vertex:a_,morphnormal_vertex:c_,morphtarget_pars_vertex:l_,morphtarget_vertex:h_,normal_fragment_begin:u_,normal_fragment_maps:d_,normal_pars_fragment:f_,normal_pars_vertex:p_,normal_vertex:m_,normalmap_pars_fragment:__,clearcoat_normal_fragment_begin:g_,clearcoat_normal_fragment_maps:v_,clearcoat_pars_fragment:x_,iridescence_pars_fragment:y_,opaque_fragment:M_,packing:S_,premultiplied_alpha_fragment:E_,project_vertex:w_,dithering_fragment:T_,dithering_pars_fragment:b_,roughnessmap_fragment:A_,roughnessmap_pars_fragment:R_,shadowmap_pars_fragment:C_,shadowmap_pars_vertex:P_,shadowmap_vertex:D_,shadowmask_pars_fragment:L_,skinbase_vertex:I_,skinning_pars_vertex:U_,skinning_vertex:N_,skinnormal_vertex:O_,specularmap_fragment:F_,specularmap_pars_fragment:B_,tonemapping_fragment:z_,tonemapping_pars_fragment:k_,transmission_fragment:G_,transmission_pars_fragment:V_,uv_pars_fragment:H_,uv_pars_vertex:W_,uv_vertex:X_,worldpos_vertex:q_,background_vert:Y_,background_frag:K_,backgroundCube_vert:j_,backgroundCube_frag:Z_,cube_vert:$_,cube_frag:J_,depth_vert:Q_,depth_frag:tg,distanceRGBA_vert:eg,distanceRGBA_frag:ng,equirect_vert:ig,equirect_frag:sg,linedashed_vert:rg,linedashed_frag:og,meshbasic_vert:ag,meshbasic_frag:cg,meshlambert_vert:lg,meshlambert_frag:hg,meshmatcap_vert:ug,meshmatcap_frag:dg,meshnormal_vert:fg,meshnormal_frag:pg,meshphong_vert:mg,meshphong_frag:_g,meshphysical_vert:gg,meshphysical_frag:vg,meshtoon_vert:xg,meshtoon_frag:yg,points_vert:Mg,points_frag:Sg,shadow_vert:Eg,shadow_frag:wg,sprite_vert:Tg,sprite_frag:bg},st={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},Bn={basic:{uniforms:Ke([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Ke([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Gt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Ke([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Ke([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Ke([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Gt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Ke([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Ke([st.points,st.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Ke([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Ke([st.common,st.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Ke([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Ke([st.sprite,st.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Ke([st.common,st.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Ke([st.lights,st.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};Bn.physical={uniforms:Ke([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const oo={r:0,b:0,g:0},Ni=new On,Ag=new ce;function Rg(s,t,e,n,i,r,o){const a=new Gt(0);let c=r===!0?0:1,l,h,u=null,d=0,p=null;function g(E){let v=E.isScene===!0?E.background:null;return v&&v.isTexture&&(v=(E.backgroundBlurriness>0?e:t).get(v)),v}function _(E){let v=!1;const T=g(E);T===null?f(a,c):T&&T.isColor&&(f(T,1),v=!0);const R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(E,v){const T=g(v);T&&(T.isCubeTexture||T.mapping===Fo)?(h===void 0&&(h=new ot(new de(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:Os(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,b,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ni.copy(v.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ag.makeRotationFromEuler(Ni)),h.material.toneMapped=Kt.getTransfer(T.colorSpace)!==ee,(u!==T||d!==T.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=T,d=T.version,p=s.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new ot(new ko(2,2),new Si({name:"BackgroundMaterial",uniforms:Os(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Kt.getTransfer(T.colorSpace)!==ee,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||d!==T.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,u=T,d=T.version,p=s.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function f(E,v){E.getRGB(oo,Lu(s)),n.buffers.color.setClear(oo.r,oo.g,oo.b,v,o)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,v=1){a.set(E),c=v,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,f(a,c)},render:_,addToRenderList:m,dispose:S}}function Cg(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(M,D,F,O,V){let W=!1;const H=u(O,F,D);r!==H&&(r=H,l(r.object)),W=p(M,O,F,V),W&&g(M,O,F,V),V!==null&&t.update(V,s.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,v(M,D,F,O),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return s.createVertexArray()}function l(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,D,F){const O=F.wireframe===!0;let V=n[M.id];V===void 0&&(V={},n[M.id]=V);let W=V[D.id];W===void 0&&(W={},V[D.id]=W);let H=W[O];return H===void 0&&(H=d(c()),W[O]=H),H}function d(M){const D=[],F=[],O=[];for(let V=0;V<e;V++)D[V]=0,F[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:O,object:M,attributes:{},index:null}}function p(M,D,F,O){const V=r.attributes,W=D.attributes;let H=0;const Y=F.getAttributes();for(const G in Y)if(Y[G].location>=0){const lt=V[G];let gt=W[G];if(gt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(gt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(gt=M.instanceColor)),lt===void 0||lt.attribute!==gt||gt&&lt.data!==gt.data)return!0;H++}return r.attributesNum!==H||r.index!==O}function g(M,D,F,O){const V={},W=D.attributes;let H=0;const Y=F.getAttributes();for(const G in Y)if(Y[G].location>=0){let lt=W[G];lt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(lt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(lt=M.instanceColor));const gt={};gt.attribute=lt,lt&&lt.data&&(gt.data=lt.data),V[G]=gt,H++}r.attributes=V,r.attributesNum=H,r.index=O}function _(){const M=r.newAttributes;for(let D=0,F=M.length;D<F;D++)M[D]=0}function m(M){f(M,0)}function f(M,D){const F=r.newAttributes,O=r.enabledAttributes,V=r.attributeDivisors;F[M]=1,O[M]===0&&(s.enableVertexAttribArray(M),O[M]=1),V[M]!==D&&(s.vertexAttribDivisor(M,D),V[M]=D)}function S(){const M=r.newAttributes,D=r.enabledAttributes;for(let F=0,O=D.length;F<O;F++)D[F]!==M[F]&&(s.disableVertexAttribArray(F),D[F]=0)}function E(M,D,F,O,V,W,H){H===!0?s.vertexAttribIPointer(M,D,F,V,W):s.vertexAttribPointer(M,D,F,O,V,W)}function v(M,D,F,O){_();const V=O.attributes,W=F.getAttributes(),H=D.defaultAttributeValues;for(const Y in W){const G=W[Y];if(G.location>=0){let nt=V[Y];if(nt===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(nt=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(nt=M.instanceColor)),nt!==void 0){const lt=nt.normalized,gt=nt.itemSize,Lt=t.get(nt);if(Lt===void 0)continue;const Jt=Lt.buffer,X=Lt.type,et=Lt.bytesPerElement,St=X===s.INT||X===s.UNSIGNED_INT||nt.gpuType===Jc;if(nt.isInterleavedBufferAttribute){const ht=nt.data,wt=ht.stride,jt=nt.offset;if(ht.isInstancedInterleavedBuffer){for(let Pt=0;Pt<G.locationSize;Pt++)f(G.location+Pt,ht.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Pt=0;Pt<G.locationSize;Pt++)m(G.location+Pt);s.bindBuffer(s.ARRAY_BUFFER,Jt);for(let Pt=0;Pt<G.locationSize;Pt++)E(G.location+Pt,gt/G.locationSize,X,lt,wt*et,(jt+gt/G.locationSize*Pt)*et,St)}else{if(nt.isInstancedBufferAttribute){for(let ht=0;ht<G.locationSize;ht++)f(G.location+ht,nt.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let ht=0;ht<G.locationSize;ht++)m(G.location+ht);s.bindBuffer(s.ARRAY_BUFFER,Jt);for(let ht=0;ht<G.locationSize;ht++)E(G.location+ht,gt/G.locationSize,X,lt,gt*et,gt/G.locationSize*ht*et,St)}}else if(H!==void 0){const lt=H[Y];if(lt!==void 0)switch(lt.length){case 2:s.vertexAttrib2fv(G.location,lt);break;case 3:s.vertexAttrib3fv(G.location,lt);break;case 4:s.vertexAttrib4fv(G.location,lt);break;default:s.vertexAttrib1fv(G.location,lt)}}}}S()}function T(){P();for(const M in n){const D=n[M];for(const F in D){const O=D[F];for(const V in O)h(O[V].object),delete O[V];delete D[F]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const D=n[M.id];for(const F in D){const O=D[F];for(const V in O)h(O[V].object),delete O[V];delete D[F]}delete n[M.id]}function b(M){for(const D in n){const F=n[D];if(F[M.id]===void 0)continue;const O=F[M.id];for(const V in O)h(O[V].object),delete O[V];delete F[M.id]}}function P(){x(),o=!0,r!==i&&(r=i,l(r.object))}function x(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:x,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function Pg(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function c(l,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Dg(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(b){return!(b!==Un&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const P=b===Cr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Vn&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==ti&&!P)}function c(b){if(b==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:T,maxSamples:R}}function Lg(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new di,a=new Ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const S=r?0:n,E=S*4;let v=f.clippingState||null;c.value=v,v=h(g,d,E,p);for(let T=0;T!==E;++T)v[T]=e[T];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,v=p;E!==_;++E,v+=4)o.copy(u[E]).applyMatrix4(S,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Ig(s){let t=new WeakMap;function e(o,a){return a===Ja?o.mapping=Ls:a===Qa&&(o.mapping=Is),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ja||a===Qa)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Dp(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Ms=4,yh=[.125,.215,.35,.446,.526,.582],Vi=20,Ma=new zu,Mh=new Gt;let Sa=null,Ea=0,wa=0,Ta=!1;const zi=(1+Math.sqrt(5))/2,gs=1/zi,Sh=[new A(-zi,gs,0),new A(zi,gs,0),new A(-gs,0,zi),new A(gs,0,zi),new A(0,zi,-gs),new A(0,zi,gs),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],Ug=new A;class Eh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){const{size:o=256,position:a=Ug}=r;Sa=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),Ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Th(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Sa,Ea,wa),this._renderer.xr.enabled=Ta,t.scissorTest=!1,ao(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ls||t.mapping===Is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sa=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),Ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:Cr,format:Un,colorSpace:Us,depthBuffer:!1},i=wh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ng(r)),this._blurMaterial=Og(r,t,e)}return i}_compileMaterial(t){const e=new ot(this._lodPlanes[0],t);this._renderer.compile(e,Ma)}_sceneToCubeUV(t,e,n,i,r){const c=new fn(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Mh),u.toneMapping=vi,u.autoClear=!1;const g=new qs({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1}),_=new ot(new de,g);let m=!1;const f=t.background;f?f.isColor&&(g.color.copy(f),t.background=null,m=!0):(g.color.copy(Mh),m=!0);for(let S=0;S<6;S++){const E=S%3;E===0?(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[S],r.y,r.z)):E===1?(c.up.set(0,0,l[S]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[S],r.z)):(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[S]));const v=this._cubeSize;ao(i,E*v,S>2?v:0,v,v),u.setRenderTarget(i),m&&u.render(_,c),u.render(t,c)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=p,u.autoClear=d,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ls||t.mapping===Is;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=bh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Th());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new ot(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;ao(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Ma)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Sh[(i-r-1)%Sh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ot(this._lodPlanes[i],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Vi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Vi;m>Vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vi}`);const f=[];let S=0;for(let b=0;b<Vi;++b){const P=b/_,x=Math.exp(-P*P/2);f.push(x),b===0?S+=x:b<m&&(S+=2*x)}for(let b=0;b<f.length;b++)f[b]=f[b]/S;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;const v=this._sizeLods[i],T=3*v*(i>E-Ms?i-E+Ms:0),R=4*(this._cubeSize-v);ao(e,T,R,3*v,2*v),c.setRenderTarget(e),c.render(u,Ma)}}function Ng(s){const t=[],e=[],n=[];let i=s;const r=s-Ms+1+yh.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>s-Ms?c=yh[o-s+Ms-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,S=new Float32Array(_*g*p),E=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let R=0;R<p;R++){const b=R%3*2/3-1,P=R>2?0:-1,x=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];S.set(x,_*g*R),E.set(d,m*g*R);const M=[R,R,R,R,R,R];v.set(M,f*g*R)}const T=new Ht;T.setAttribute("position",new en(S,_)),T.setAttribute("uv",new en(E,m)),T.setAttribute("faceIndex",new en(v,f)),t.push(T),i>Ms&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function wh(s,t,e){const n=new Qi(s,t,e);return n.texture.mapping=Fo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ao(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Og(s,t,e){const n=new Float32Array(Vi),i=new A(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ul(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Th(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ul(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function bh(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function ul(){return`

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
	`}function Fg(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ja||c===Qa,h=c===Ls||c===Is;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Eh(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new Eh(s)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Bg(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&bs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function zg(s,t,e,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const p in d)t.update(d[p],s.ARRAY_BUFFER)}function l(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const S=p.array;_=p.version;for(let E=0,v=S.length;E<v;E+=3){const T=S[E+0],R=S[E+1],b=S[E+2];d.push(T,R,R,b,b,T)}}else if(g!==void 0){const S=g.array;_=g.version;for(let E=0,v=S.length/3-1;E<v;E+=3){const T=E+0,R=E+1,b=E+2;d.push(T,R,R,b,b,T)}}else return;const m=new(bu(d)?Du:Pu)(d,1);m.version=_;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function kg(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){s.drawElements(n,p,r,d*o),e.update(p,n,1)}function l(d,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,d*o,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,g);let f=0;for(let S=0;S<g;S++)f+=p[S]*_[S];e.update(f,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Gg(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Vg(s,t,e){const n=new WeakMap,i=new Ee;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let T=a.attributes.position.count*v,R=1;T>t.maxTextureSize&&(R=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const b=new Float32Array(T*R*4*u),P=new Au(b,T,R,u);P.type=ti,P.needsUpdate=!0;const x=v*4;for(let D=0;D<u;D++){const F=f[D],O=S[D],V=E[D],W=T*R*4*D;for(let H=0;H<F.count;H++){const Y=H*x;g===!0&&(i.fromBufferAttribute(F,H),b[W+Y+0]=i.x,b[W+Y+1]=i.y,b[W+Y+2]=i.z,b[W+Y+3]=0),_===!0&&(i.fromBufferAttribute(O,H),b[W+Y+4]=i.x,b[W+Y+5]=i.y,b[W+Y+6]=i.z,b[W+Y+7]=0),m===!0&&(i.fromBufferAttribute(V,H),b[W+Y+8]=i.x,b[W+Y+9]=i.y,b[W+Y+10]=i.z,b[W+Y+11]=V.itemSize===4?i.w:1)}}d={count:u,texture:P,size:new Ut(T,R)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Hg(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const Gu=new tn,Ah=new Ou(1,1),Vu=new Au,Hu=new pp,Wu=new Uu,Rh=[],Ch=[],Ph=new Float32Array(16),Dh=new Float32Array(9),Lh=new Float32Array(4);function Ys(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Rh[i];if(r===void 0&&(r=new Float32Array(i),Rh[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ue(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ne(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Vo(s,t){let e=Ch[t];e===void 0&&(e=new Int32Array(t),Ch[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Wg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Xg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2fv(this.addr,t),Ne(e,t)}}function qg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;s.uniform3fv(this.addr,t),Ne(e,t)}}function Yg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4fv(this.addr,t),Ne(e,t)}}function Kg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Lh.set(n),s.uniformMatrix2fv(this.addr,!1,Lh),Ne(e,n)}}function jg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Dh.set(n),s.uniformMatrix3fv(this.addr,!1,Dh),Ne(e,n)}}function Zg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Ph.set(n),s.uniformMatrix4fv(this.addr,!1,Ph),Ne(e,n)}}function $g(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Jg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2iv(this.addr,t),Ne(e,t)}}function Qg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;s.uniform3iv(this.addr,t),Ne(e,t)}}function t0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4iv(this.addr,t),Ne(e,t)}}function e0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function n0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2uiv(this.addr,t),Ne(e,t)}}function i0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;s.uniform3uiv(this.addr,t),Ne(e,t)}}function s0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4uiv(this.addr,t),Ne(e,t)}}function r0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Ah.compareFunction=Tu,r=Ah):r=Gu,e.setTexture2D(t||r,i)}function o0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Hu,i)}function a0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Wu,i)}function c0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Vu,i)}function l0(s){switch(s){case 5126:return Wg;case 35664:return Xg;case 35665:return qg;case 35666:return Yg;case 35674:return Kg;case 35675:return jg;case 35676:return Zg;case 5124:case 35670:return $g;case 35667:case 35671:return Jg;case 35668:case 35672:return Qg;case 35669:case 35673:return t0;case 5125:return e0;case 36294:return n0;case 36295:return i0;case 36296:return s0;case 35678:case 36198:case 36298:case 36306:case 35682:return r0;case 35679:case 36299:case 36307:return o0;case 35680:case 36300:case 36308:case 36293:return a0;case 36289:case 36303:case 36311:case 36292:return c0}}function h0(s,t){s.uniform1fv(this.addr,t)}function u0(s,t){const e=Ys(t,this.size,2);s.uniform2fv(this.addr,e)}function d0(s,t){const e=Ys(t,this.size,3);s.uniform3fv(this.addr,e)}function f0(s,t){const e=Ys(t,this.size,4);s.uniform4fv(this.addr,e)}function p0(s,t){const e=Ys(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function m0(s,t){const e=Ys(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function _0(s,t){const e=Ys(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function g0(s,t){s.uniform1iv(this.addr,t)}function v0(s,t){s.uniform2iv(this.addr,t)}function x0(s,t){s.uniform3iv(this.addr,t)}function y0(s,t){s.uniform4iv(this.addr,t)}function M0(s,t){s.uniform1uiv(this.addr,t)}function S0(s,t){s.uniform2uiv(this.addr,t)}function E0(s,t){s.uniform3uiv(this.addr,t)}function w0(s,t){s.uniform4uiv(this.addr,t)}function T0(s,t,e){const n=this.cache,i=t.length,r=Vo(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Gu,r[o])}function b0(s,t,e){const n=this.cache,i=t.length,r=Vo(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Hu,r[o])}function A0(s,t,e){const n=this.cache,i=t.length,r=Vo(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Wu,r[o])}function R0(s,t,e){const n=this.cache,i=t.length,r=Vo(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Vu,r[o])}function C0(s){switch(s){case 5126:return h0;case 35664:return u0;case 35665:return d0;case 35666:return f0;case 35674:return p0;case 35675:return m0;case 35676:return _0;case 5124:case 35670:return g0;case 35667:case 35671:return v0;case 35668:case 35672:return x0;case 35669:case 35673:return y0;case 5125:return M0;case 36294:return S0;case 36295:return E0;case 36296:return w0;case 35678:case 36198:case 36298:case 36306:case 35682:return T0;case 35679:case 36299:case 36307:return b0;case 35680:case 36300:case 36308:case 36293:return A0;case 36289:case 36303:case 36311:case 36292:return R0}}class P0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=l0(e.type)}}class D0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=C0(e.type)}}class L0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const ba=/(\w+)(\])?(\[|\.)?/g;function Ih(s,t){s.seq.push(t),s.map[t.id]=t}function I0(s,t,e){const n=s.name,i=n.length;for(ba.lastIndex=0;;){const r=ba.exec(n),o=ba.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Ih(e,l===void 0?new P0(a,s,t):new D0(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new L0(a),Ih(e,u)),e=u}}}class go{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);I0(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Uh(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const U0=37297;let N0=0;function O0(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Nh=new Ft;function F0(s){Kt._getMatrix(Nh,Kt.workingColorSpace,s);const t=`mat3( ${Nh.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(s)){case Eo:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Oh(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+O0(s.getShaderSource(t),o)}else return i}function B0(s,t){const e=F0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function z0(s,t){let e;switch(t){case Tf:e="Linear";break;case bf:e="Reinhard";break;case Af:e="Cineon";break;case Rf:e="ACESFilmic";break;case Pf:e="AgX";break;case Df:e="Neutral";break;case Cf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const co=new A;function k0(){Kt.getLuminanceCoefficients(co);const s=co.x.toFixed(4),t=co.y.toFixed(4),e=co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function G0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sr).join(`
`)}function V0(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function H0(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function sr(s){return s!==""}function Fh(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const W0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cc(s){return s.replace(W0,q0)}const X0=new Map;function q0(s,t){let e=zt[t];if(e===void 0){const n=X0.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Cc(e)}const Y0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zh(s){return s.replace(Y0,K0)}function K0(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function kh(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function j0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===pu?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===mu?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===$n&&(t="SHADOWMAP_TYPE_VSM"),t}function Z0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ls:case Is:t="ENVMAP_TYPE_CUBE";break;case Fo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $0(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Is&&(t="ENVMAP_MODE_REFRACTION"),t}function J0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case $c:t="ENVMAP_BLENDING_MULTIPLY";break;case Ef:t="ENVMAP_BLENDING_MIX";break;case wf:t="ENVMAP_BLENDING_ADD";break}return t}function Q0(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function tv(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=j0(e),l=Z0(e),h=$0(e),u=J0(e),d=Q0(e),p=G0(e),g=V0(r),_=i.createProgram();let m,f,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sr).join(`
`),f.length>0&&(f+=`
`)):(m=[kh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),f=[kh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vi?"#define TONE_MAPPING":"",e.toneMapping!==vi?zt.tonemapping_pars_fragment:"",e.toneMapping!==vi?z0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,B0("linearToOutputTexel",e.outputColorSpace),k0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(sr).join(`
`)),o=Cc(o),o=Fh(o,e),o=Bh(o,e),a=Cc(a),a=Fh(a,e),a=Bh(a,e),o=zh(o),a=zh(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Xl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=S+m+o,v=S+f+a,T=Uh(i,i.VERTEX_SHADER,E),R=Uh(i,i.FRAGMENT_SHADER,v);i.attachShader(_,T),i.attachShader(_,R),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(D){if(s.debug.checkShaderErrors){const F=i.getProgramInfoLog(_).trim(),O=i.getShaderInfoLog(T).trim(),V=i.getShaderInfoLog(R).trim();let W=!0,H=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,T,R);else{const Y=Oh(i,T,"vertex"),G=Oh(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+F+`
`+Y+`
`+G)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(O===""||V==="")&&(H=!1);H&&(D.diagnostics={runnable:W,programLog:F,vertexShader:{log:O,prefix:m},fragmentShader:{log:V,prefix:f}})}i.deleteShader(T),i.deleteShader(R),P=new go(i,_),x=H0(i,_)}let P;this.getUniforms=function(){return P===void 0&&b(this),P};let x;this.getAttributes=function(){return x===void 0&&b(this),x};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,U0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=N0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=R,this}let ev=0;class nv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new iv(t),e.set(t,n)),n}}class iv{constructor(t){this.id=ev++,this.code=t,this.usedTimes=0}}function sv(s,t,e,n,i,r,o){const a=new Ru,c=new nv,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,M,D,F,O){const V=F.fog,W=O.geometry,H=x.isMeshStandardMaterial?F.environment:null,Y=(x.isMeshStandardMaterial?e:t).get(x.envMap||H),G=Y&&Y.mapping===Fo?Y.image.height:null,nt=g[x.type];x.precision!==null&&(p=i.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const lt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,gt=lt!==void 0?lt.length:0;let Lt=0;W.morphAttributes.position!==void 0&&(Lt=1),W.morphAttributes.normal!==void 0&&(Lt=2),W.morphAttributes.color!==void 0&&(Lt=3);let Jt,X,et,St;if(nt){const Qt=Bn[nt];Jt=Qt.vertexShader,X=Qt.fragmentShader}else Jt=x.vertexShader,X=x.fragmentShader,c.update(x),et=c.getVertexShaderID(x),St=c.getFragmentShaderID(x);const ht=s.getRenderTarget(),wt=s.state.buffers.depth.getReversed(),jt=O.isInstancedMesh===!0,Pt=O.isBatchedMesh===!0,me=!!x.map,_e=!!x.matcap,Zt=!!Y,L=!!x.aoMap,Xe=!!x.lightMap,$t=!!x.bumpMap,ae=!!x.normalMap,xt=!!x.displacementMap,qt=!!x.emissiveMap,bt=!!x.metalnessMap,Bt=!!x.roughnessMap,Le=x.anisotropy>0,C=x.clearcoat>0,y=x.dispersion>0,B=x.iridescence>0,K=x.sheen>0,Z=x.transmission>0,q=Le&&!!x.anisotropyMap,yt=C&&!!x.clearcoatMap,rt=C&&!!x.clearcoatNormalMap,vt=C&&!!x.clearcoatRoughnessMap,Mt=B&&!!x.iridescenceMap,$=B&&!!x.iridescenceThicknessMap,ut=K&&!!x.sheenColorMap,Ct=K&&!!x.sheenRoughnessMap,Rt=!!x.specularMap,it=!!x.specularColorMap,Nt=!!x.specularIntensityMap,I=Z&&!!x.transmissionMap,at=Z&&!!x.thicknessMap,J=!!x.gradientMap,pt=!!x.alphaMap,Q=x.alphaTest>0,j=!!x.alphaHash,mt=!!x.extensions;let Ot=vi;x.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Ot=s.toneMapping);const le={shaderID:nt,shaderType:x.type,shaderName:x.name,vertexShader:Jt,fragmentShader:X,defines:x.defines,customVertexShaderID:et,customFragmentShaderID:St,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:Pt,batchingColor:Pt&&O._colorsTexture!==null,instancing:jt,instancingColor:jt&&O.instanceColor!==null,instancingMorph:jt&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ht===null?s.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Us,alphaToCoverage:!!x.alphaToCoverage,map:me,matcap:_e,envMap:Zt,envMapMode:Zt&&Y.mapping,envMapCubeUVHeight:G,aoMap:L,lightMap:Xe,bumpMap:$t,normalMap:ae,displacementMap:d&&xt,emissiveMap:qt,normalMapObjectSpace:ae&&x.normalMapType===Nf,normalMapTangentSpace:ae&&x.normalMapType===sl,metalnessMap:bt,roughnessMap:Bt,anisotropy:Le,anisotropyMap:q,clearcoat:C,clearcoatMap:yt,clearcoatNormalMap:rt,clearcoatRoughnessMap:vt,dispersion:y,iridescence:B,iridescenceMap:Mt,iridescenceThicknessMap:$,sheen:K,sheenColorMap:ut,sheenRoughnessMap:Ct,specularMap:Rt,specularColorMap:it,specularIntensityMap:Nt,transmission:Z,transmissionMap:I,thicknessMap:at,gradientMap:J,opaque:x.transparent===!1&&x.blending===Ts&&x.alphaToCoverage===!1,alphaMap:pt,alphaTest:Q,alphaHash:j,combine:x.combine,mapUv:me&&_(x.map.channel),aoMapUv:L&&_(x.aoMap.channel),lightMapUv:Xe&&_(x.lightMap.channel),bumpMapUv:$t&&_(x.bumpMap.channel),normalMapUv:ae&&_(x.normalMap.channel),displacementMapUv:xt&&_(x.displacementMap.channel),emissiveMapUv:qt&&_(x.emissiveMap.channel),metalnessMapUv:bt&&_(x.metalnessMap.channel),roughnessMapUv:Bt&&_(x.roughnessMap.channel),anisotropyMapUv:q&&_(x.anisotropyMap.channel),clearcoatMapUv:yt&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:rt&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:$&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&_(x.sheenRoughnessMap.channel),specularMapUv:Rt&&_(x.specularMap.channel),specularColorMapUv:it&&_(x.specularColorMap.channel),specularIntensityMapUv:Nt&&_(x.specularIntensityMap.channel),transmissionMapUv:I&&_(x.transmissionMap.channel),thicknessMapUv:at&&_(x.thicknessMap.channel),alphaMapUv:pt&&_(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(ae||Le),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!W.attributes.uv&&(me||pt),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:wt,skinning:O.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:Lt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ot,decodeVideoTexture:me&&x.map.isVideoTexture===!0&&Kt.getTransfer(x.map.colorSpace)===ee,decodeVideoTextureEmissive:qt&&x.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(x.emissiveMap.colorSpace)===ee,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===je,flipSided:x.side===Qe,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:mt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&x.extensions.multiDraw===!0||Pt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return le.vertexUv1s=l.has(1),le.vertexUv2s=l.has(2),le.vertexUv3s=l.has(3),l.clear(),le}function f(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)M.push(D),M.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(S(M,x),E(M,x),M.push(s.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function S(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function E(x,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),x.push(a.mask)}function v(x){const M=g[x.type];let D;if(M){const F=Bn[M];D=Ap.clone(F.uniforms)}else D=x.uniforms;return D}function T(x,M){let D;for(let F=0,O=h.length;F<O;F++){const V=h[F];if(V.cacheKey===M){D=V,++D.usedTimes;break}}return D===void 0&&(D=new tv(s,M,x,r),h.push(D)),D}function R(x){if(--x.usedTimes===0){const M=h.indexOf(x);h[M]=h[h.length-1],h.pop(),x.destroy()}}function b(x){c.remove(x)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:T,releaseProgram:R,releaseShaderCache:b,programs:h,dispose:P}}function rv(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function ov(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Gh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Vh(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,p,g,_,m){let f=s[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function a(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function c(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function l(u,d){e.length>1&&e.sort(u||ov),n.length>1&&n.sort(d||Gh),i.length>1&&i.sort(d||Gh)}function h(){for(let u=t,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function av(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Vh,s.set(n,[o])):i>=r.length?(o=new Vh,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function cv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new Gt};break;case"SpotLight":e={position:new A,direction:new A,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new A,halfWidth:new A,halfHeight:new A};break}return s[t.id]=e,e}}}function lv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let hv=0;function uv(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function dv(s){const t=new cv,e=lv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new A);const i=new A,r=new ce,o=new ce;function a(l){let h=0,u=0,d=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,S=0,E=0,v=0,T=0,R=0,b=0;l.sort(uv);for(let x=0,M=l.length;x<M;x++){const D=l[x],F=D.color,O=D.intensity,V=D.distance,W=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=F.r*O,u+=F.g*O,d+=F.b*O;else if(D.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(D.sh.coefficients[H],O);b++}else if(D.isDirectionalLight){const H=t.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Y=D.shadow,G=e.get(D);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=W,n.directionalShadowMatrix[p]=D.shadow.matrix,S++}n.directional[p]=H,p++}else if(D.isSpotLight){const H=t.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(F).multiplyScalar(O),H.distance=V,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,n.spot[_]=H;const Y=D.shadow;if(D.map&&(n.spotLightMap[T]=D.map,T++,Y.updateMatrices(D),D.castShadow&&R++),n.spotLightMatrix[_]=Y.matrix,D.castShadow){const G=e.get(D);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=W,v++}_++}else if(D.isRectAreaLight){const H=t.get(D);H.color.copy(F).multiplyScalar(O),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=H,m++}else if(D.isPointLight){const H=t.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),H.distance=D.distance,H.decay=D.decay,D.castShadow){const Y=D.shadow,G=e.get(D);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,G.shadowCameraNear=Y.camera.near,G.shadowCameraFar=Y.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=D.shadow.matrix,E++}n.point[g]=H,g++}else if(D.isHemisphereLight){const H=t.get(D);H.skyColor.copy(D.color).multiplyScalar(O),H.groundColor.copy(D.groundColor).multiplyScalar(O),n.hemi[f]=H,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==S||P.numPointShadows!==E||P.numSpotShadows!==v||P.numSpotMaps!==T||P.numLightProbes!==b)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=v+T-R,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=b,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=S,P.numPointShadows=E,P.numSpotShadows=v,P.numSpotMaps=T,P.numLightProbes=b,n.version=hv++)}function c(l,h){let u=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,S=l.length;f<S;f++){const E=l[f];if(E.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(E.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Hh(s){const t=new dv(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function fv(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new Hh(s),t.set(i,[a])):r>=o.length?(a=new Hh(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const pv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mv=`uniform sampler2D shadow_pass;
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
}`;function _v(s,t,e){let n=new al;const i=new Ut,r=new Ut,o=new Ee,a=new Fp({depthPacking:Uf}),c=new Bp,l={},h=e.maxTextureSize,u={[Mi]:Qe,[Qe]:Mi,[je]:je},d=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:pv,fragmentShader:mv}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ht;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ot(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pu;let f=this.type;this.render=function(R,b,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const x=s.getRenderTarget(),M=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),F=s.state;F.setBlending(gi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const O=f!==$n&&this.type===$n,V=f===$n&&this.type!==$n;for(let W=0,H=R.length;W<H;W++){const Y=R[W],G=Y.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const nt=G.getFrameExtents();if(i.multiply(nt),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/nt.x),i.x=r.x*nt.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/nt.y),i.y=r.y*nt.y,G.mapSize.y=r.y)),G.map===null||O===!0||V===!0){const gt=this.type!==$n?{minFilter:Nn,magFilter:Nn}:{};G.map!==null&&G.map.dispose(),G.map=new Qi(i.x,i.y,gt),G.map.texture.name=Y.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const lt=G.getViewportCount();for(let gt=0;gt<lt;gt++){const Lt=G.getViewport(gt);o.set(r.x*Lt.x,r.y*Lt.y,r.x*Lt.z,r.y*Lt.w),F.viewport(o),G.updateMatrices(Y,gt),n=G.getFrustum(),v(b,P,G.camera,Y,this.type)}G.isPointLightShadow!==!0&&this.type===$n&&S(G,P),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(x,M,D)};function S(R,b){const P=t.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Qi(i.x,i.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(b,null,P,d,_,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(b,null,P,p,_,null)}function E(R,b,P,x){let M=null;const D=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)M=D;else if(M=P.isPointLight===!0?c:a,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const F=M.uuid,O=b.uuid;let V=l[F];V===void 0&&(V={},l[F]=V);let W=V[O];W===void 0&&(W=M.clone(),V[O]=W,b.addEventListener("dispose",T)),M=W}if(M.visible=b.visible,M.wireframe=b.wireframe,x===$n?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:u[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=s.properties.get(M);F.light=P}return M}function v(R,b,P,x,M){if(R.visible===!1)return;if(R.layers.test(b.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===$n)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const O=t.update(R),V=R.material;if(Array.isArray(V)){const W=O.groups;for(let H=0,Y=W.length;H<Y;H++){const G=W[H],nt=V[G.materialIndex];if(nt&&nt.visible){const lt=E(R,nt,x,M);R.onBeforeShadow(s,R,b,P,O,lt,G),s.renderBufferDirect(P,null,O,lt,R,G),R.onAfterShadow(s,R,b,P,O,lt,G)}}}else if(V.visible){const W=E(R,V,x,M);R.onBeforeShadow(s,R,b,P,O,W,null),s.renderBufferDirect(P,null,O,W,R,null),R.onAfterShadow(s,R,b,P,O,W,null)}}const F=R.children;for(let O=0,V=F.length;O<V;O++)v(F[O],b,P,x,M)}function T(R){R.target.removeEventListener("dispose",T);for(const P in l){const x=l[P],M=R.target.uuid;M in x&&(x[M].dispose(),delete x[M])}}}const gv={[Xa]:qa,[Ya]:Za,[Ka]:$a,[Ds]:ja,[qa]:Xa,[Za]:Ya,[$a]:Ka,[ja]:Ds};function vv(s,t){function e(){let I=!1;const at=new Ee;let J=null;const pt=new Ee(0,0,0,0);return{setMask:function(Q){J!==Q&&!I&&(s.colorMask(Q,Q,Q,Q),J=Q)},setLocked:function(Q){I=Q},setClear:function(Q,j,mt,Ot,le){le===!0&&(Q*=Ot,j*=Ot,mt*=Ot),at.set(Q,j,mt,Ot),pt.equals(at)===!1&&(s.clearColor(Q,j,mt,Ot),pt.copy(at))},reset:function(){I=!1,J=null,pt.set(-1,0,0,0)}}}function n(){let I=!1,at=!1,J=null,pt=null,Q=null;return{setReversed:function(j){if(at!==j){const mt=t.get("EXT_clip_control");j?mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.ZERO_TO_ONE_EXT):mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.NEGATIVE_ONE_TO_ONE_EXT),at=j;const Ot=Q;Q=null,this.setClear(Ot)}},getReversed:function(){return at},setTest:function(j){j?ht(s.DEPTH_TEST):wt(s.DEPTH_TEST)},setMask:function(j){J!==j&&!I&&(s.depthMask(j),J=j)},setFunc:function(j){if(at&&(j=gv[j]),pt!==j){switch(j){case Xa:s.depthFunc(s.NEVER);break;case qa:s.depthFunc(s.ALWAYS);break;case Ya:s.depthFunc(s.LESS);break;case Ds:s.depthFunc(s.LEQUAL);break;case Ka:s.depthFunc(s.EQUAL);break;case ja:s.depthFunc(s.GEQUAL);break;case Za:s.depthFunc(s.GREATER);break;case $a:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pt=j}},setLocked:function(j){I=j},setClear:function(j){Q!==j&&(at&&(j=1-j),s.clearDepth(j),Q=j)},reset:function(){I=!1,J=null,pt=null,Q=null,at=!1}}}function i(){let I=!1,at=null,J=null,pt=null,Q=null,j=null,mt=null,Ot=null,le=null;return{setTest:function(Qt){I||(Qt?ht(s.STENCIL_TEST):wt(s.STENCIL_TEST))},setMask:function(Qt){at!==Qt&&!I&&(s.stencilMask(Qt),at=Qt)},setFunc:function(Qt,Cn,Xn){(J!==Qt||pt!==Cn||Q!==Xn)&&(s.stencilFunc(Qt,Cn,Xn),J=Qt,pt=Cn,Q=Xn)},setOp:function(Qt,Cn,Xn){(j!==Qt||mt!==Cn||Ot!==Xn)&&(s.stencilOp(Qt,Cn,Xn),j=Qt,mt=Cn,Ot=Xn)},setLocked:function(Qt){I=Qt},setClear:function(Qt){le!==Qt&&(s.clearStencil(Qt),le=Qt)},reset:function(){I=!1,at=null,J=null,pt=null,Q=null,j=null,mt=null,Ot=null,le=null}}}const r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,S=null,E=null,v=null,T=null,R=null,b=new Gt(0,0,0),P=0,x=!1,M=null,D=null,F=null,O=null,V=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Y=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(G)[1]),H=Y>=1):G.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),H=Y>=2);let nt=null,lt={};const gt=s.getParameter(s.SCISSOR_BOX),Lt=s.getParameter(s.VIEWPORT),Jt=new Ee().fromArray(gt),X=new Ee().fromArray(Lt);function et(I,at,J,pt){const Q=new Uint8Array(4),j=s.createTexture();s.bindTexture(I,j),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let mt=0;mt<J;mt++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(at,0,s.RGBA,1,1,pt,0,s.RGBA,s.UNSIGNED_BYTE,Q):s.texImage2D(at+mt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Q);return j}const St={};St[s.TEXTURE_2D]=et(s.TEXTURE_2D,s.TEXTURE_2D,1),St[s.TEXTURE_CUBE_MAP]=et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[s.TEXTURE_2D_ARRAY]=et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),St[s.TEXTURE_3D]=et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ht(s.DEPTH_TEST),o.setFunc(Ds),$t(!1),ae(zl),ht(s.CULL_FACE),L(gi);function ht(I){h[I]!==!0&&(s.enable(I),h[I]=!0)}function wt(I){h[I]!==!1&&(s.disable(I),h[I]=!1)}function jt(I,at){return u[I]!==at?(s.bindFramebuffer(I,at),u[I]=at,I===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=at),I===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=at),!0):!1}function Pt(I,at){let J=p,pt=!1;if(I){J=d.get(at),J===void 0&&(J=[],d.set(at,J));const Q=I.textures;if(J.length!==Q.length||J[0]!==s.COLOR_ATTACHMENT0){for(let j=0,mt=Q.length;j<mt;j++)J[j]=s.COLOR_ATTACHMENT0+j;J.length=Q.length,pt=!0}}else J[0]!==s.BACK&&(J[0]=s.BACK,pt=!0);pt&&s.drawBuffers(J)}function me(I){return g!==I?(s.useProgram(I),g=I,!0):!1}const _e={[Gi]:s.FUNC_ADD,[of]:s.FUNC_SUBTRACT,[af]:s.FUNC_REVERSE_SUBTRACT};_e[cf]=s.MIN,_e[lf]=s.MAX;const Zt={[hf]:s.ZERO,[uf]:s.ONE,[df]:s.SRC_COLOR,[Ha]:s.SRC_ALPHA,[vf]:s.SRC_ALPHA_SATURATE,[_f]:s.DST_COLOR,[pf]:s.DST_ALPHA,[ff]:s.ONE_MINUS_SRC_COLOR,[Wa]:s.ONE_MINUS_SRC_ALPHA,[gf]:s.ONE_MINUS_DST_COLOR,[mf]:s.ONE_MINUS_DST_ALPHA,[xf]:s.CONSTANT_COLOR,[yf]:s.ONE_MINUS_CONSTANT_COLOR,[Mf]:s.CONSTANT_ALPHA,[Sf]:s.ONE_MINUS_CONSTANT_ALPHA};function L(I,at,J,pt,Q,j,mt,Ot,le,Qt){if(I===gi){_===!0&&(wt(s.BLEND),_=!1);return}if(_===!1&&(ht(s.BLEND),_=!0),I!==rf){if(I!==m||Qt!==x){if((f!==Gi||v!==Gi)&&(s.blendEquation(s.FUNC_ADD),f=Gi,v=Gi),Qt)switch(I){case Ts:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case kl:s.blendFunc(s.ONE,s.ONE);break;case Gl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Vl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ts:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case kl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Gl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,E=null,T=null,R=null,b.set(0,0,0),P=0,m=I,x=Qt}return}Q=Q||at,j=j||J,mt=mt||pt,(at!==f||Q!==v)&&(s.blendEquationSeparate(_e[at],_e[Q]),f=at,v=Q),(J!==S||pt!==E||j!==T||mt!==R)&&(s.blendFuncSeparate(Zt[J],Zt[pt],Zt[j],Zt[mt]),S=J,E=pt,T=j,R=mt),(Ot.equals(b)===!1||le!==P)&&(s.blendColor(Ot.r,Ot.g,Ot.b,le),b.copy(Ot),P=le),m=I,x=!1}function Xe(I,at){I.side===je?wt(s.CULL_FACE):ht(s.CULL_FACE);let J=I.side===Qe;at&&(J=!J),$t(J),I.blending===Ts&&I.transparent===!1?L(gi):L(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const pt=I.stencilWrite;a.setTest(pt),pt&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),qt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ht(s.SAMPLE_ALPHA_TO_COVERAGE):wt(s.SAMPLE_ALPHA_TO_COVERAGE)}function $t(I){M!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),M=I)}function ae(I){I!==nf?(ht(s.CULL_FACE),I!==D&&(I===zl?s.cullFace(s.BACK):I===sf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):wt(s.CULL_FACE),D=I}function xt(I){I!==F&&(H&&s.lineWidth(I),F=I)}function qt(I,at,J){I?(ht(s.POLYGON_OFFSET_FILL),(O!==at||V!==J)&&(s.polygonOffset(at,J),O=at,V=J)):wt(s.POLYGON_OFFSET_FILL)}function bt(I){I?ht(s.SCISSOR_TEST):wt(s.SCISSOR_TEST)}function Bt(I){I===void 0&&(I=s.TEXTURE0+W-1),nt!==I&&(s.activeTexture(I),nt=I)}function Le(I,at,J){J===void 0&&(nt===null?J=s.TEXTURE0+W-1:J=nt);let pt=lt[J];pt===void 0&&(pt={type:void 0,texture:void 0},lt[J]=pt),(pt.type!==I||pt.texture!==at)&&(nt!==J&&(s.activeTexture(J),nt=J),s.bindTexture(I,at||St[I]),pt.type=I,pt.texture=at)}function C(){const I=lt[nt];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function y(){try{s.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function B(){try{s.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{s.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{s.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{s.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function yt(){try{s.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function rt(){try{s.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function vt(){try{s.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Mt(){try{s.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{s.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ut(I){Jt.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),Jt.copy(I))}function Ct(I){X.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),X.copy(I))}function Rt(I,at){let J=l.get(at);J===void 0&&(J=new WeakMap,l.set(at,J));let pt=J.get(I);pt===void 0&&(pt=s.getUniformBlockIndex(at,I.name),J.set(I,pt))}function it(I,at){const pt=l.get(at).get(I);c.get(at)!==pt&&(s.uniformBlockBinding(at,pt,I.__bindingPointIndex),c.set(at,pt))}function Nt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},nt=null,lt={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,S=null,E=null,v=null,T=null,R=null,b=new Gt(0,0,0),P=0,x=!1,M=null,D=null,F=null,O=null,V=null,Jt.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ht,disable:wt,bindFramebuffer:jt,drawBuffers:Pt,useProgram:me,setBlending:L,setMaterial:Xe,setFlipSided:$t,setCullFace:ae,setLineWidth:xt,setPolygonOffset:qt,setScissorTest:bt,activeTexture:Bt,bindTexture:Le,unbindTexture:C,compressedTexImage2D:y,compressedTexImage3D:B,texImage2D:Mt,texImage3D:$,updateUBOMapping:Rt,uniformBlockBinding:it,texStorage2D:rt,texStorage3D:vt,texSubImage2D:K,texSubImage3D:Z,compressedTexSubImage2D:q,compressedTexSubImage3D:yt,scissor:ut,viewport:Ct,reset:Nt}}function xv(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ut,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,y){return p?new OffscreenCanvas(C,y):To("canvas")}function _(C,y,B){let K=1;const Z=Le(C);if((Z.width>B||Z.height>B)&&(K=B/Math.max(Z.width,Z.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const q=Math.floor(K*Z.width),yt=Math.floor(K*Z.height);u===void 0&&(u=g(q,yt));const rt=y?g(q,yt):u;return rt.width=q,rt.height=yt,rt.getContext("2d").drawImage(C,0,0,q,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+q+"x"+yt+")."),rt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function m(C){return C.generateMipmaps}function f(C){s.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(C,y,B,K,Z=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let q=y;if(y===s.RED&&(B===s.FLOAT&&(q=s.R32F),B===s.HALF_FLOAT&&(q=s.R16F),B===s.UNSIGNED_BYTE&&(q=s.R8)),y===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.R8UI),B===s.UNSIGNED_SHORT&&(q=s.R16UI),B===s.UNSIGNED_INT&&(q=s.R32UI),B===s.BYTE&&(q=s.R8I),B===s.SHORT&&(q=s.R16I),B===s.INT&&(q=s.R32I)),y===s.RG&&(B===s.FLOAT&&(q=s.RG32F),B===s.HALF_FLOAT&&(q=s.RG16F),B===s.UNSIGNED_BYTE&&(q=s.RG8)),y===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.RG8UI),B===s.UNSIGNED_SHORT&&(q=s.RG16UI),B===s.UNSIGNED_INT&&(q=s.RG32UI),B===s.BYTE&&(q=s.RG8I),B===s.SHORT&&(q=s.RG16I),B===s.INT&&(q=s.RG32I)),y===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.RGB8UI),B===s.UNSIGNED_SHORT&&(q=s.RGB16UI),B===s.UNSIGNED_INT&&(q=s.RGB32UI),B===s.BYTE&&(q=s.RGB8I),B===s.SHORT&&(q=s.RGB16I),B===s.INT&&(q=s.RGB32I)),y===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),B===s.UNSIGNED_INT&&(q=s.RGBA32UI),B===s.BYTE&&(q=s.RGBA8I),B===s.SHORT&&(q=s.RGBA16I),B===s.INT&&(q=s.RGBA32I)),y===s.RGB&&B===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),y===s.RGBA){const yt=Z?Eo:Kt.getTransfer(K);B===s.FLOAT&&(q=s.RGBA32F),B===s.HALF_FLOAT&&(q=s.RGBA16F),B===s.UNSIGNED_BYTE&&(q=yt===ee?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function v(C,y){let B;return C?y===null||y===$i||y===pr?B=s.DEPTH24_STENCIL8:y===ti?B=s.DEPTH32F_STENCIL8:y===fr&&(B=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===$i||y===pr?B=s.DEPTH_COMPONENT24:y===ti?B=s.DEPTH_COMPONENT32F:y===fr&&(B=s.DEPTH_COMPONENT16),B}function T(C,y){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Nn&&C.minFilter!==kn?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function R(C){const y=C.target;y.removeEventListener("dispose",R),P(y),y.isVideoTexture&&h.delete(y)}function b(C){const y=C.target;y.removeEventListener("dispose",b),M(y)}function P(C){const y=n.get(C);if(y.__webglInit===void 0)return;const B=C.source,K=d.get(B);if(K){const Z=K[y.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&x(C),Object.keys(K).length===0&&d.delete(B)}n.remove(C)}function x(C){const y=n.get(C);s.deleteTexture(y.__webglTexture);const B=C.source,K=d.get(B);delete K[y.__cacheKey],o.memory.textures--}function M(C){const y=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let Z=0;Z<y.__webglFramebuffer[K].length;Z++)s.deleteFramebuffer(y.__webglFramebuffer[K][Z]);else s.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)s.deleteFramebuffer(y.__webglFramebuffer[K]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const B=C.textures;for(let K=0,Z=B.length;K<Z;K++){const q=n.get(B[K]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(B[K])}n.remove(C)}let D=0;function F(){D=0}function O(){const C=D;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),D+=1,C}function V(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function W(C,y){const B=n.get(C);if(C.isVideoTexture&&bt(C),C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){const K=C.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{St(B,C,y);return}}e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+y)}function H(C,y){const B=n.get(C);if(C.version>0&&B.__version!==C.version){St(B,C,y);return}e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+y)}function Y(C,y){const B=n.get(C);if(C.version>0&&B.__version!==C.version){St(B,C,y);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+y)}function G(C,y){const B=n.get(C);if(C.version>0&&B.__version!==C.version){ht(B,C,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+y)}const nt={[tc]:s.REPEAT,[Hi]:s.CLAMP_TO_EDGE,[ec]:s.MIRRORED_REPEAT},lt={[Nn]:s.NEAREST,[Lf]:s.NEAREST_MIPMAP_NEAREST,[Fr]:s.NEAREST_MIPMAP_LINEAR,[kn]:s.LINEAR,[jo]:s.LINEAR_MIPMAP_NEAREST,[Wi]:s.LINEAR_MIPMAP_LINEAR},gt={[Of]:s.NEVER,[Vf]:s.ALWAYS,[Ff]:s.LESS,[Tu]:s.LEQUAL,[Bf]:s.EQUAL,[Gf]:s.GEQUAL,[zf]:s.GREATER,[kf]:s.NOTEQUAL};function Lt(C,y){if(y.type===ti&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===kn||y.magFilter===jo||y.magFilter===Fr||y.magFilter===Wi||y.minFilter===kn||y.minFilter===jo||y.minFilter===Fr||y.minFilter===Wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,nt[y.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,nt[y.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,nt[y.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,lt[y.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,lt[y.minFilter]),y.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,gt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Nn||y.minFilter!==Fr&&y.minFilter!==Wi||y.type===ti&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Jt(C,y){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",R));const K=y.source;let Z=d.get(K);Z===void 0&&(Z={},d.set(K,Z));const q=V(y);if(q!==C.__cacheKey){Z[q]===void 0&&(Z[q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Z[q].usedTimes++;const yt=Z[C.__cacheKey];yt!==void 0&&(Z[C.__cacheKey].usedTimes--,yt.usedTimes===0&&x(y)),C.__cacheKey=q,C.__webglTexture=Z[q].texture}return B}function X(C,y,B){return Math.floor(Math.floor(C/B)/y)}function et(C,y,B,K){const q=C.updateRanges;if(q.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,B,K,y.data);else{q.sort(($,ut)=>$.start-ut.start);let yt=0;for(let $=1;$<q.length;$++){const ut=q[yt],Ct=q[$],Rt=ut.start+ut.count,it=X(Ct.start,y.width,4),Nt=X(ut.start,y.width,4);Ct.start<=Rt+1&&it===Nt&&X(Ct.start+Ct.count-1,y.width,4)===it?ut.count=Math.max(ut.count,Ct.start+Ct.count-ut.start):(++yt,q[yt]=Ct)}q.length=yt+1;const rt=s.getParameter(s.UNPACK_ROW_LENGTH),vt=s.getParameter(s.UNPACK_SKIP_PIXELS),Mt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let $=0,ut=q.length;$<ut;$++){const Ct=q[$],Rt=Math.floor(Ct.start/4),it=Math.ceil(Ct.count/4),Nt=Rt%y.width,I=Math.floor(Rt/y.width),at=it,J=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Nt),s.pixelStorei(s.UNPACK_SKIP_ROWS,I),e.texSubImage2D(s.TEXTURE_2D,0,Nt,I,at,J,B,K,y.data)}C.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,rt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,vt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Mt)}}function St(C,y,B){let K=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=s.TEXTURE_3D);const Z=Jt(C,y),q=y.source;e.bindTexture(K,C.__webglTexture,s.TEXTURE0+B);const yt=n.get(q);if(q.version!==yt.__version||Z===!0){e.activeTexture(s.TEXTURE0+B);const rt=Kt.getPrimaries(Kt.workingColorSpace),vt=y.colorSpace===fi?null:Kt.getPrimaries(y.colorSpace),Mt=y.colorSpace===fi||rt===vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let $=_(y.image,!1,i.maxTextureSize);$=Bt(y,$);const ut=r.convert(y.format,y.colorSpace),Ct=r.convert(y.type);let Rt=E(y.internalFormat,ut,Ct,y.colorSpace,y.isVideoTexture);Lt(K,y);let it;const Nt=y.mipmaps,I=y.isVideoTexture!==!0,at=yt.__version===void 0||Z===!0,J=q.dataReady,pt=T(y,$);if(y.isDepthTexture)Rt=v(y.format===_r,y.type),at&&(I?e.texStorage2D(s.TEXTURE_2D,1,Rt,$.width,$.height):e.texImage2D(s.TEXTURE_2D,0,Rt,$.width,$.height,0,ut,Ct,null));else if(y.isDataTexture)if(Nt.length>0){I&&at&&e.texStorage2D(s.TEXTURE_2D,pt,Rt,Nt[0].width,Nt[0].height);for(let Q=0,j=Nt.length;Q<j;Q++)it=Nt[Q],I?J&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,it.width,it.height,ut,Ct,it.data):e.texImage2D(s.TEXTURE_2D,Q,Rt,it.width,it.height,0,ut,Ct,it.data);y.generateMipmaps=!1}else I?(at&&e.texStorage2D(s.TEXTURE_2D,pt,Rt,$.width,$.height),J&&et(y,$,ut,Ct)):e.texImage2D(s.TEXTURE_2D,0,Rt,$.width,$.height,0,ut,Ct,$.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){I&&at&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,Rt,Nt[0].width,Nt[0].height,$.depth);for(let Q=0,j=Nt.length;Q<j;Q++)if(it=Nt[Q],y.format!==Un)if(ut!==null)if(I){if(J)if(y.layerUpdates.size>0){const mt=xh(it.width,it.height,y.format,y.type);for(const Ot of y.layerUpdates){const le=it.data.subarray(Ot*mt/it.data.BYTES_PER_ELEMENT,(Ot+1)*mt/it.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,Ot,it.width,it.height,1,ut,le)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,it.width,it.height,$.depth,ut,it.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Q,Rt,it.width,it.height,$.depth,0,it.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?J&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,it.width,it.height,$.depth,ut,Ct,it.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Q,Rt,it.width,it.height,$.depth,0,ut,Ct,it.data)}else{I&&at&&e.texStorage2D(s.TEXTURE_2D,pt,Rt,Nt[0].width,Nt[0].height);for(let Q=0,j=Nt.length;Q<j;Q++)it=Nt[Q],y.format!==Un?ut!==null?I?J&&e.compressedTexSubImage2D(s.TEXTURE_2D,Q,0,0,it.width,it.height,ut,it.data):e.compressedTexImage2D(s.TEXTURE_2D,Q,Rt,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?J&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,it.width,it.height,ut,Ct,it.data):e.texImage2D(s.TEXTURE_2D,Q,Rt,it.width,it.height,0,ut,Ct,it.data)}else if(y.isDataArrayTexture)if(I){if(at&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,Rt,$.width,$.height,$.depth),J)if(y.layerUpdates.size>0){const Q=xh($.width,$.height,y.format,y.type);for(const j of y.layerUpdates){const mt=$.data.subarray(j*Q/$.data.BYTES_PER_ELEMENT,(j+1)*Q/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,j,$.width,$.height,1,ut,Ct,mt)}y.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ut,Ct,$.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Rt,$.width,$.height,$.depth,0,ut,Ct,$.data);else if(y.isData3DTexture)I?(at&&e.texStorage3D(s.TEXTURE_3D,pt,Rt,$.width,$.height,$.depth),J&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ut,Ct,$.data)):e.texImage3D(s.TEXTURE_3D,0,Rt,$.width,$.height,$.depth,0,ut,Ct,$.data);else if(y.isFramebufferTexture){if(at)if(I)e.texStorage2D(s.TEXTURE_2D,pt,Rt,$.width,$.height);else{let Q=$.width,j=$.height;for(let mt=0;mt<pt;mt++)e.texImage2D(s.TEXTURE_2D,mt,Rt,Q,j,0,ut,Ct,null),Q>>=1,j>>=1}}else if(Nt.length>0){if(I&&at){const Q=Le(Nt[0]);e.texStorage2D(s.TEXTURE_2D,pt,Rt,Q.width,Q.height)}for(let Q=0,j=Nt.length;Q<j;Q++)it=Nt[Q],I?J&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,ut,Ct,it):e.texImage2D(s.TEXTURE_2D,Q,Rt,ut,Ct,it);y.generateMipmaps=!1}else if(I){if(at){const Q=Le($);e.texStorage2D(s.TEXTURE_2D,pt,Rt,Q.width,Q.height)}J&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ut,Ct,$)}else e.texImage2D(s.TEXTURE_2D,0,Rt,ut,Ct,$);m(y)&&f(K),yt.__version=q.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function ht(C,y,B){if(y.image.length!==6)return;const K=Jt(C,y),Z=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+B);const q=n.get(Z);if(Z.version!==q.__version||K===!0){e.activeTexture(s.TEXTURE0+B);const yt=Kt.getPrimaries(Kt.workingColorSpace),rt=y.colorSpace===fi?null:Kt.getPrimaries(y.colorSpace),vt=y.colorSpace===fi||yt===rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const Mt=y.isCompressedTexture||y.image[0].isCompressedTexture,$=y.image[0]&&y.image[0].isDataTexture,ut=[];for(let j=0;j<6;j++)!Mt&&!$?ut[j]=_(y.image[j],!0,i.maxCubemapSize):ut[j]=$?y.image[j].image:y.image[j],ut[j]=Bt(y,ut[j]);const Ct=ut[0],Rt=r.convert(y.format,y.colorSpace),it=r.convert(y.type),Nt=E(y.internalFormat,Rt,it,y.colorSpace),I=y.isVideoTexture!==!0,at=q.__version===void 0||K===!0,J=Z.dataReady;let pt=T(y,Ct);Lt(s.TEXTURE_CUBE_MAP,y);let Q;if(Mt){I&&at&&e.texStorage2D(s.TEXTURE_CUBE_MAP,pt,Nt,Ct.width,Ct.height);for(let j=0;j<6;j++){Q=ut[j].mipmaps;for(let mt=0;mt<Q.length;mt++){const Ot=Q[mt];y.format!==Un?Rt!==null?I?J&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt,0,0,Ot.width,Ot.height,Rt,Ot.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt,Nt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt,0,0,Ot.width,Ot.height,Rt,it,Ot.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt,Nt,Ot.width,Ot.height,0,Rt,it,Ot.data)}}}else{if(Q=y.mipmaps,I&&at){Q.length>0&&pt++;const j=Le(ut[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,pt,Nt,j.width,j.height)}for(let j=0;j<6;j++)if($){I?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ut[j].width,ut[j].height,Rt,it,ut[j].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Nt,ut[j].width,ut[j].height,0,Rt,it,ut[j].data);for(let mt=0;mt<Q.length;mt++){const le=Q[mt].image[j].image;I?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt+1,0,0,le.width,le.height,Rt,it,le.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt+1,Nt,le.width,le.height,0,Rt,it,le.data)}}else{I?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Rt,it,ut[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Nt,Rt,it,ut[j]);for(let mt=0;mt<Q.length;mt++){const Ot=Q[mt];I?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt+1,0,0,Rt,it,Ot.image[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt+1,Nt,Rt,it,Ot.image[j])}}}m(y)&&f(s.TEXTURE_CUBE_MAP),q.__version=Z.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function wt(C,y,B,K,Z,q){const yt=r.convert(B.format,B.colorSpace),rt=r.convert(B.type),vt=E(B.internalFormat,yt,rt,B.colorSpace),Mt=n.get(y),$=n.get(B);if($.__renderTarget=y,!Mt.__hasExternalTextures){const ut=Math.max(1,y.width>>q),Ct=Math.max(1,y.height>>q);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?e.texImage3D(Z,q,vt,ut,Ct,y.depth,0,yt,rt,null):e.texImage2D(Z,q,vt,ut,Ct,0,yt,rt,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),qt(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,Z,$.__webglTexture,0,xt(y)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,Z,$.__webglTexture,q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function jt(C,y,B){if(s.bindRenderbuffer(s.RENDERBUFFER,C),y.depthBuffer){const K=y.depthTexture,Z=K&&K.isDepthTexture?K.type:null,q=v(y.stencilBuffer,Z),yt=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=xt(y);qt(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt,q,y.width,y.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,q,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,q,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,yt,s.RENDERBUFFER,C)}else{const K=y.textures;for(let Z=0;Z<K.length;Z++){const q=K[Z],yt=r.convert(q.format,q.colorSpace),rt=r.convert(q.type),vt=E(q.internalFormat,yt,rt,q.colorSpace),Mt=xt(y);B&&qt(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Mt,vt,y.width,y.height):qt(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Mt,vt,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,vt,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pt(C,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(y.depthTexture);K.__renderTarget=y,(!K.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),W(y.depthTexture,0);const Z=K.__webglTexture,q=xt(y);if(y.depthTexture.format===mr)qt(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(y.depthTexture.format===_r)qt(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function me(C){const y=n.get(C),B=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const K=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){const Z=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",Z)};K.addEventListener("dispose",Z),y.__depthDisposeCallback=Z}y.__boundDepthTexture=K}if(C.depthTexture&&!y.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const K=C.texture.mipmaps;K&&K.length>0?Pt(y.__webglFramebuffer[0],C):Pt(y.__webglFramebuffer,C)}else if(B){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=s.createRenderbuffer(),jt(y.__webglDepthbuffer[K],C,!1);else{const Z=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=y.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,q)}}else{const K=C.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),jt(y.__webglDepthbuffer,C,!1);else{const Z=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,q)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function _e(C,y,B){const K=n.get(C);y!==void 0&&wt(K.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&me(C)}function Zt(C){const y=C.texture,B=n.get(C),K=n.get(y);C.addEventListener("dispose",b);const Z=C.textures,q=C.isWebGLCubeRenderTarget===!0,yt=Z.length>1;if(yt||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=y.version,o.memory.textures++),q){B.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[rt]=[];for(let vt=0;vt<y.mipmaps.length;vt++)B.__webglFramebuffer[rt][vt]=s.createFramebuffer()}else B.__webglFramebuffer[rt]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let rt=0;rt<y.mipmaps.length;rt++)B.__webglFramebuffer[rt]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(yt)for(let rt=0,vt=Z.length;rt<vt;rt++){const Mt=n.get(Z[rt]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&qt(C)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let rt=0;rt<Z.length;rt++){const vt=Z[rt];B.__webglColorRenderbuffer[rt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[rt]);const Mt=r.convert(vt.format,vt.colorSpace),$=r.convert(vt.type),ut=E(vt.internalFormat,Mt,$,vt.colorSpace,C.isXRRenderTarget===!0),Ct=xt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct,ut,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.RENDERBUFFER,B.__webglColorRenderbuffer[rt])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),jt(B.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),Lt(s.TEXTURE_CUBE_MAP,y);for(let rt=0;rt<6;rt++)if(y.mipmaps&&y.mipmaps.length>0)for(let vt=0;vt<y.mipmaps.length;vt++)wt(B.__webglFramebuffer[rt][vt],C,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,vt);else wt(B.__webglFramebuffer[rt],C,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(y)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let rt=0,vt=Z.length;rt<vt;rt++){const Mt=Z[rt],$=n.get(Mt);e.bindTexture(s.TEXTURE_2D,$.__webglTexture),Lt(s.TEXTURE_2D,Mt),wt(B.__webglFramebuffer,C,Mt,s.COLOR_ATTACHMENT0+rt,s.TEXTURE_2D,0),m(Mt)&&f(s.TEXTURE_2D)}e.unbindTexture()}else{let rt=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(rt=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(rt,K.__webglTexture),Lt(rt,y),y.mipmaps&&y.mipmaps.length>0)for(let vt=0;vt<y.mipmaps.length;vt++)wt(B.__webglFramebuffer[vt],C,y,s.COLOR_ATTACHMENT0,rt,vt);else wt(B.__webglFramebuffer,C,y,s.COLOR_ATTACHMENT0,rt,0);m(y)&&f(rt),e.unbindTexture()}C.depthBuffer&&me(C)}function L(C){const y=C.textures;for(let B=0,K=y.length;B<K;B++){const Z=y[B];if(m(Z)){const q=S(C),yt=n.get(Z).__webglTexture;e.bindTexture(q,yt),f(q),e.unbindTexture()}}}const Xe=[],$t=[];function ae(C){if(C.samples>0){if(qt(C)===!1){const y=C.textures,B=C.width,K=C.height;let Z=s.COLOR_BUFFER_BIT;const q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,yt=n.get(C),rt=y.length>1;if(rt)for(let Mt=0;Mt<y.length;Mt++)e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer);const vt=C.texture.mipmaps;vt&&vt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let Mt=0;Mt<y.length;Mt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),rt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,yt.__webglColorRenderbuffer[Mt]);const $=n.get(y[Mt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$,0)}s.blitFramebuffer(0,0,B,K,0,0,B,K,Z,s.NEAREST),c===!0&&(Xe.length=0,$t.length=0,Xe.push(s.COLOR_ATTACHMENT0+Mt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Xe.push(q),$t.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,$t)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Xe))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),rt)for(let Mt=0;Mt<y.length;Mt++){e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.RENDERBUFFER,yt.__webglColorRenderbuffer[Mt]);const $=n.get(y[Mt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.TEXTURE_2D,$,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const y=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function xt(C){return Math.min(i.maxSamples,C.samples)}function qt(C){const y=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function bt(C){const y=o.render.frame;h.get(C)!==y&&(h.set(C,y),C.update())}function Bt(C,y){const B=C.colorSpace,K=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==Us&&B!==fi&&(Kt.getTransfer(B)===ee?(K!==Un||Z!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),y}function Le(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=F,this.setTexture2D=W,this.setTexture2DArray=H,this.setTexture3D=Y,this.setTextureCube=G,this.rebindTextures=_e,this.setupRenderTarget=Zt,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=qt}function yv(s,t){function e(n,i=fi){let r;const o=Kt.getTransfer(i);if(n===Vn)return s.UNSIGNED_BYTE;if(n===Qc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===tl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===xu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===gu)return s.BYTE;if(n===vu)return s.SHORT;if(n===fr)return s.UNSIGNED_SHORT;if(n===Jc)return s.INT;if(n===$i)return s.UNSIGNED_INT;if(n===ti)return s.FLOAT;if(n===Cr)return s.HALF_FLOAT;if(n===yu)return s.ALPHA;if(n===Mu)return s.RGB;if(n===Un)return s.RGBA;if(n===mr)return s.DEPTH_COMPONENT;if(n===_r)return s.DEPTH_STENCIL;if(n===Su)return s.RED;if(n===el)return s.RED_INTEGER;if(n===Eu)return s.RG;if(n===nl)return s.RG_INTEGER;if(n===il)return s.RGBA_INTEGER;if(n===uo||n===fo||n===po||n===mo)if(o===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===uo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===uo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nc||n===ic||n===sc||n===rc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===nc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ic)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===rc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oc||n===ac||n===cc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===oc||n===ac)return o===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===cc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===lc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===_c||n===gc||n===vc||n===xc||n===yc||n===Mc||n===Sc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===lc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===uc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===dc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===mc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_c)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_o||n===Ec||n===wc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===_o)return o===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ec)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wu||n===Tc||n===bc||n===Ac)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===_o)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Tc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===bc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ac)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===pr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const Mv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sv=`
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

}`;class Ev{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new tn,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Si({vertexShader:Mv,fragmentShader:Sv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ot(new ko(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wv extends ts{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null;const _=new Ev,m=e.getContextAttributes();let f=null,S=null;const E=[],v=[],T=new Ut;let R=null;const b=new fn;b.viewport=new Ee;const P=new fn;P.viewport=new Ee;const x=[b,P],M=new Wp;let D=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let et=E[X];return et===void 0&&(et=new _a,E[X]=et),et.getTargetRaySpace()},this.getControllerGrip=function(X){let et=E[X];return et===void 0&&(et=new _a,E[X]=et),et.getGripSpace()},this.getHand=function(X){let et=E[X];return et===void 0&&(et=new _a,E[X]=et),et.getHandSpace()};function O(X){const et=v.indexOf(X.inputSource);if(et===-1)return;const St=E[et];St!==void 0&&(St.update(X.inputSource,X.frame,l||o),St.dispatchEvent({type:X.type,data:X.inputSource}))}function V(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",W);for(let X=0;X<E.length;X++){const et=v[X];et!==null&&(v[X]=null,E[X].disconnect(et))}D=null,F=null,_.reset(),t.setRenderTarget(f),p=null,d=null,u=null,i=null,S=null,Jt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",V),i.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(T),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,ht=null,wt=null;m.depth&&(wt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=m.stencil?_r:mr,ht=m.stencil?pr:$i);const jt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(jt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Qi(d.textureWidth,d.textureHeight,{format:Un,type:Vn,depthTexture:new Ou(d.textureWidth,d.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const St={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,St),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Qi(p.framebufferWidth,p.framebufferHeight,{format:Un,type:Vn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Jt.setContext(i),Jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function W(X){for(let et=0;et<X.removed.length;et++){const St=X.removed[et],ht=v.indexOf(St);ht>=0&&(v[ht]=null,E[ht].disconnect(St))}for(let et=0;et<X.added.length;et++){const St=X.added[et];let ht=v.indexOf(St);if(ht===-1){for(let jt=0;jt<E.length;jt++)if(jt>=v.length){v.push(St),ht=jt;break}else if(v[jt]===null){v[jt]=St,ht=jt;break}if(ht===-1)break}const wt=E[ht];wt&&wt.connect(St)}}const H=new A,Y=new A;function G(X,et,St){H.setFromMatrixPosition(et.matrixWorld),Y.setFromMatrixPosition(St.matrixWorld);const ht=H.distanceTo(Y),wt=et.projectionMatrix.elements,jt=St.projectionMatrix.elements,Pt=wt[14]/(wt[10]-1),me=wt[14]/(wt[10]+1),_e=(wt[9]+1)/wt[5],Zt=(wt[9]-1)/wt[5],L=(wt[8]-1)/wt[0],Xe=(jt[8]+1)/jt[0],$t=Pt*L,ae=Pt*Xe,xt=ht/(-L+Xe),qt=xt*-L;if(et.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(qt),X.translateZ(xt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),wt[10]===-1)X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const bt=Pt+xt,Bt=me+xt,Le=$t-qt,C=ae+(ht-qt),y=_e*me/Bt*bt,B=Zt*me/Bt*bt;X.projectionMatrix.makePerspective(Le,C,y,B,bt,Bt),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function nt(X,et){et===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(et.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let et=X.near,St=X.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(St=_.depthFar)),M.near=P.near=b.near=et,M.far=P.far=b.far=St,(D!==M.near||F!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,F=M.far),b.layers.mask=X.layers.mask|2,P.layers.mask=X.layers.mask|4,M.layers.mask=b.layers.mask|P.layers.mask;const ht=X.parent,wt=M.cameras;nt(M,ht);for(let jt=0;jt<wt.length;jt++)nt(wt[jt],ht);wt.length===2?G(M,b,P):M.projectionMatrix.copy(b.projectionMatrix),lt(X,M,ht)};function lt(X,et,St){St===null?X.matrix.copy(et.matrixWorld):(X.matrix.copy(St.matrixWorld),X.matrix.invert(),X.matrix.multiply(et.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ns*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let gt=null;function Lt(X,et){if(h=et.getViewerPose(l||o),g=et,h!==null){const St=h.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let ht=!1;St.length!==M.cameras.length&&(M.cameras.length=0,ht=!0);for(let Pt=0;Pt<St.length;Pt++){const me=St[Pt];let _e=null;if(p!==null)_e=p.getViewport(me);else{const L=u.getViewSubImage(d,me);_e=L.viewport,Pt===0&&(t.setRenderTargetTextures(S,L.colorTexture,L.depthStencilTexture),t.setRenderTarget(S))}let Zt=x[Pt];Zt===void 0&&(Zt=new fn,Zt.layers.enable(Pt),Zt.viewport=new Ee,x[Pt]=Zt),Zt.matrix.fromArray(me.transform.matrix),Zt.matrix.decompose(Zt.position,Zt.quaternion,Zt.scale),Zt.projectionMatrix.fromArray(me.projectionMatrix),Zt.projectionMatrixInverse.copy(Zt.projectionMatrix).invert(),Zt.viewport.set(_e.x,_e.y,_e.width,_e.height),Pt===0&&(M.matrix.copy(Zt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ht===!0&&M.cameras.push(Zt)}const wt=i.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){const Pt=u.getDepthInformation(St[0]);Pt&&Pt.isValid&&Pt.texture&&_.init(t,Pt,i.renderState)}}for(let St=0;St<E.length;St++){const ht=v[St],wt=E[St];ht!==null&&wt!==void 0&&wt.update(ht,et,l||o)}gt&&gt(X,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const Jt=new ku;Jt.setAnimationLoop(Lt),this.setAnimationLoop=function(X){gt=X},this.dispose=function(){}}}const Oi=new On,Tv=new ce;function bv(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Lu(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,S,E,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,S,E):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Qe&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Qe&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const S=t.get(f),E=S.envMap,v=S.envMapRotation;E&&(m.envMap.value=E,Oi.copy(v),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),m.envMapRotation.value.setFromMatrix4(Tv.makeRotationFromEuler(Oi)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,S,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=E*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Qe&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const S=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Av(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,E){const v=E.program;n.uniformBlockBinding(S,v)}function l(S,E){let v=i[S.id];v===void 0&&(g(S),v=h(S),i[S.id]=v,S.addEventListener("dispose",m));const T=E.program;n.updateUBOMapping(S,T);const R=t.render.frame;r[S.id]!==R&&(d(S),r[S.id]=R)}function h(S){const E=u();S.__bindingPointIndex=E;const v=s.createBuffer(),T=S.__size,R=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,T,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,v),v}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const E=i[S.id],v=S.uniforms,T=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let R=0,b=v.length;R<b;R++){const P=Array.isArray(v[R])?v[R]:[v[R]];for(let x=0,M=P.length;x<M;x++){const D=P[x];if(p(D,R,x,T)===!0){const F=D.__offset,O=Array.isArray(D.value)?D.value:[D.value];let V=0;for(let W=0;W<O.length;W++){const H=O[W],Y=_(H);typeof H=="number"||typeof H=="boolean"?(D.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,F+V,D.__data)):H.isMatrix3?(D.__data[0]=H.elements[0],D.__data[1]=H.elements[1],D.__data[2]=H.elements[2],D.__data[3]=0,D.__data[4]=H.elements[3],D.__data[5]=H.elements[4],D.__data[6]=H.elements[5],D.__data[7]=0,D.__data[8]=H.elements[6],D.__data[9]=H.elements[7],D.__data[10]=H.elements[8],D.__data[11]=0):(H.toArray(D.__data,V),V+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(S,E,v,T){const R=S.value,b=E+"_"+v;if(T[b]===void 0)return typeof R=="number"||typeof R=="boolean"?T[b]=R:T[b]=R.clone(),!0;{const P=T[b];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return T[b]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function g(S){const E=S.uniforms;let v=0;const T=16;for(let b=0,P=E.length;b<P;b++){const x=Array.isArray(E[b])?E[b]:[E[b]];for(let M=0,D=x.length;M<D;M++){const F=x[M],O=Array.isArray(F.value)?F.value:[F.value];for(let V=0,W=O.length;V<W;V++){const H=O[V],Y=_(H),G=v%T,nt=G%Y.boundary,lt=G+nt;v+=nt,lt!==0&&T-lt<Y.storage&&(v+=T-lt),F.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=Y.storage}}}const R=v%T;return R>0&&(v+=T-R),S.__size=v,S.__cache={},this}function _(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),E}function m(S){const E=S.target;E.removeEventListener("dispose",m);const v=o.indexOf(E.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function f(){for(const S in i)s.deleteBuffer(i[S]);o=[],i={},r={}}return{bind:c,update:l,dispose:f}}class Rv{constructor(t={}){const{canvas:e=rp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const S=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let T=!1;this._outputColorSpace=Tn;let R=0,b=0,P=null,x=-1,M=null;const D=new Ee,F=new Ee;let O=null;const V=new Gt(0);let W=0,H=e.width,Y=e.height,G=1,nt=null,lt=null;const gt=new Ee(0,0,H,Y),Lt=new Ee(0,0,H,Y);let Jt=!1;const X=new al;let et=!1,St=!1;const ht=new ce,wt=new ce,jt=new A,Pt=new Ee,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _e=!1;function Zt(){return P===null?G:1}let L=n;function Xe(w,U){return e.getContext(w,U)}try{const w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Zc}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",Q,!1),e.addEventListener("webglcontextcreationerror",j,!1),L===null){const U="webgl2";if(L=Xe(U,w),L===null)throw Xe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let $t,ae,xt,qt,bt,Bt,Le,C,y,B,K,Z,q,yt,rt,vt,Mt,$,ut,Ct,Rt,it,Nt,I;function at(){$t=new Bg(L),$t.init(),it=new yv(L,$t),ae=new Dg(L,$t,t,it),xt=new vv(L,$t),ae.reverseDepthBuffer&&d&&xt.buffers.depth.setReversed(!0),qt=new Gg(L),bt=new rv,Bt=new xv(L,$t,xt,bt,ae,it,qt),Le=new Ig(v),C=new Fg(v),y=new Yp(L),Nt=new Cg(L,y),B=new zg(L,y,qt,Nt),K=new Hg(L,B,y,qt),ut=new Vg(L,ae,Bt),vt=new Lg(bt),Z=new sv(v,Le,C,$t,ae,Nt,vt),q=new bv(v,bt),yt=new av,rt=new fv($t),$=new Rg(v,Le,C,xt,K,p,c),Mt=new _v(v,K,ae),I=new Av(L,qt,ae,xt),Ct=new Pg(L,$t,qt),Rt=new kg(L,$t,qt),qt.programs=Z.programs,v.capabilities=ae,v.extensions=$t,v.properties=bt,v.renderLists=yt,v.shadowMap=Mt,v.state=xt,v.info=qt}at();const J=new wv(v,L);this.xr=J,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=$t.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=$t.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(w){w!==void 0&&(G=w,this.setSize(H,Y,!1))},this.getSize=function(w){return w.set(H,Y)},this.setSize=function(w,U,z=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=w,Y=U,e.width=Math.floor(w*G),e.height=Math.floor(U*G),z===!0&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(H*G,Y*G).floor()},this.setDrawingBufferSize=function(w,U,z){H=w,Y=U,G=z,e.width=Math.floor(w*z),e.height=Math.floor(U*z),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(D)},this.getViewport=function(w){return w.copy(gt)},this.setViewport=function(w,U,z,k){w.isVector4?gt.set(w.x,w.y,w.z,w.w):gt.set(w,U,z,k),xt.viewport(D.copy(gt).multiplyScalar(G).round())},this.getScissor=function(w){return w.copy(Lt)},this.setScissor=function(w,U,z,k){w.isVector4?Lt.set(w.x,w.y,w.z,w.w):Lt.set(w,U,z,k),xt.scissor(F.copy(Lt).multiplyScalar(G).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(w){xt.setScissorTest(Jt=w)},this.setOpaqueSort=function(w){nt=w},this.setTransparentSort=function(w){lt=w},this.getClearColor=function(w){return w.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor(...arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha(...arguments)},this.clear=function(w=!0,U=!0,z=!0){let k=0;if(w){let N=!1;if(P!==null){const tt=P.texture.format;N=tt===il||tt===nl||tt===el}if(N){const tt=P.texture.type,ct=tt===Vn||tt===$i||tt===fr||tt===pr||tt===Qc||tt===tl,_t=$.getClearColor(),dt=$.getClearAlpha(),Dt=_t.r,It=_t.g,Tt=_t.b;ct?(g[0]=Dt,g[1]=It,g[2]=Tt,g[3]=dt,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Dt,_[1]=It,_[2]=Tt,_[3]=dt,L.clearBufferiv(L.COLOR,0,_))}else k|=L.COLOR_BUFFER_BIT}U&&(k|=L.DEPTH_BUFFER_BIT),z&&(k|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",Q,!1),e.removeEventListener("webglcontextcreationerror",j,!1),$.dispose(),yt.dispose(),rt.dispose(),bt.dispose(),Le.dispose(),C.dispose(),K.dispose(),Nt.dispose(),I.dispose(),Z.dispose(),J.dispose(),J.removeEventListener("sessionstart",Ll),J.removeEventListener("sessionend",Il),Ci.stop()};function pt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const w=qt.autoReset,U=Mt.enabled,z=Mt.autoUpdate,k=Mt.needsUpdate,N=Mt.type;at(),qt.autoReset=w,Mt.enabled=U,Mt.autoUpdate=z,Mt.needsUpdate=k,Mt.type=N}function j(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function mt(w){const U=w.target;U.removeEventListener("dispose",mt),Ot(U)}function Ot(w){le(w),bt.remove(w)}function le(w){const U=bt.get(w).programs;U!==void 0&&(U.forEach(function(z){Z.releaseProgram(z)}),w.isShaderMaterial&&Z.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,z,k,N,tt){U===null&&(U=me);const ct=N.isMesh&&N.matrixWorld.determinant()<0,_t=Zd(w,U,z,k,N);xt.setMaterial(k,ct);let dt=z.index,Dt=1;if(k.wireframe===!0){if(dt=B.getWireframeAttribute(z),dt===void 0)return;Dt=2}const It=z.drawRange,Tt=z.attributes.position;let Vt=It.start*Dt,te=(It.start+It.count)*Dt;tt!==null&&(Vt=Math.max(Vt,tt.start*Dt),te=Math.min(te,(tt.start+tt.count)*Dt)),dt!==null?(Vt=Math.max(Vt,0),te=Math.min(te,dt.count)):Tt!=null&&(Vt=Math.max(Vt,0),te=Math.min(te,Tt.count));const Me=te-Vt;if(Me<0||Me===1/0)return;Nt.setup(N,k,_t,z,dt);let he,se=Ct;if(dt!==null&&(he=y.get(dt),se=Rt,se.setIndex(he)),N.isMesh)k.wireframe===!0?(xt.setLineWidth(k.wireframeLinewidth*Zt()),se.setMode(L.LINES)):se.setMode(L.TRIANGLES);else if(N.isLine){let At=k.linewidth;At===void 0&&(At=1),xt.setLineWidth(At*Zt()),N.isLineSegments?se.setMode(L.LINES):N.isLineLoop?se.setMode(L.LINE_LOOP):se.setMode(L.LINE_STRIP)}else N.isPoints?se.setMode(L.POINTS):N.isSprite&&se.setMode(L.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)bs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),se.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if($t.get("WEBGL_multi_draw"))se.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const At=N._multiDrawStarts,ge=N._multiDrawCounts,Yt=N._multiDrawCount,cn=dt?y.get(dt).bytesPerElement:1,is=bt.get(k).currentProgram.getUniforms();for(let ln=0;ln<Yt;ln++)is.setValue(L,"_gl_DrawID",ln),se.render(At[ln]/cn,ge[ln])}else if(N.isInstancedMesh)se.renderInstances(Vt,Me,N.count);else if(z.isInstancedBufferGeometry){const At=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ge=Math.min(z.instanceCount,At);se.renderInstances(Vt,Me,ge)}else se.render(Vt,Me)};function Qt(w,U,z){w.transparent===!0&&w.side===je&&w.forceSinglePass===!1?(w.side=Qe,w.needsUpdate=!0,Or(w,U,z),w.side=Mi,w.needsUpdate=!0,Or(w,U,z),w.side=je):Or(w,U,z)}this.compile=function(w,U,z=null){z===null&&(z=w),f=rt.get(z),f.init(U),E.push(f),z.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),w!==z&&w.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const k=new Set;return w.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const tt=N.material;if(tt)if(Array.isArray(tt))for(let ct=0;ct<tt.length;ct++){const _t=tt[ct];Qt(_t,z,N),k.add(_t)}else Qt(tt,z,N),k.add(tt)}),f=E.pop(),k},this.compileAsync=function(w,U,z=null){const k=this.compile(w,U,z);return new Promise(N=>{function tt(){if(k.forEach(function(ct){bt.get(ct).currentProgram.isReady()&&k.delete(ct)}),k.size===0){N(w);return}setTimeout(tt,10)}$t.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let Cn=null;function Xn(w){Cn&&Cn(w)}function Ll(){Ci.stop()}function Il(){Ci.start()}const Ci=new ku;Ci.setAnimationLoop(Xn),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(w){Cn=w,J.setAnimationLoop(w),w===null?Ci.stop():Ci.start()},J.addEventListener("sessionstart",Ll),J.addEventListener("sessionend",Il),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(U),U=J.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,U,P),f=rt.get(w,E.length),f.init(U),E.push(f),wt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),X.setFromProjectionMatrix(wt),St=this.localClippingEnabled,et=vt.init(this.clippingPlanes,St),m=yt.get(w,S.length),m.init(),S.push(m),J.enabled===!0&&J.isPresenting===!0){const tt=v.xr.getDepthSensingMesh();tt!==null&&Yo(tt,U,-1/0,v.sortObjects)}Yo(w,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(nt,lt),_e=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,_e&&$.addToRenderList(m,w),this.info.render.frame++,et===!0&&vt.beginShadows();const z=f.state.shadowsArray;Mt.render(z,w,U),et===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,N=m.transmissive;if(f.setupLights(),U.isArrayCamera){const tt=U.cameras;if(N.length>0)for(let ct=0,_t=tt.length;ct<_t;ct++){const dt=tt[ct];Nl(k,N,w,dt)}_e&&$.render(w);for(let ct=0,_t=tt.length;ct<_t;ct++){const dt=tt[ct];Ul(m,w,dt,dt.viewport)}}else N.length>0&&Nl(k,N,w,U),_e&&$.render(w),Ul(m,w,U);P!==null&&b===0&&(Bt.updateMultisampleRenderTarget(P),Bt.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(v,w,U),Nt.resetDefaultState(),x=-1,M=null,E.pop(),E.length>0?(f=E[E.length-1],et===!0&&vt.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Yo(w,U,z,k){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||X.intersectsSprite(w)){k&&Pt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(wt);const ct=K.update(w),_t=w.material;_t.visible&&m.push(w,ct,_t,z,Pt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||X.intersectsObject(w))){const ct=K.update(w),_t=w.material;if(k&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Pt.copy(w.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Pt.copy(ct.boundingSphere.center)),Pt.applyMatrix4(w.matrixWorld).applyMatrix4(wt)),Array.isArray(_t)){const dt=ct.groups;for(let Dt=0,It=dt.length;Dt<It;Dt++){const Tt=dt[Dt],Vt=_t[Tt.materialIndex];Vt&&Vt.visible&&m.push(w,ct,Vt,z,Pt.z,Tt)}}else _t.visible&&m.push(w,ct,_t,z,Pt.z,null)}}const tt=w.children;for(let ct=0,_t=tt.length;ct<_t;ct++)Yo(tt[ct],U,z,k)}function Ul(w,U,z,k){const N=w.opaque,tt=w.transmissive,ct=w.transparent;f.setupLightsView(z),et===!0&&vt.setGlobalState(v.clippingPlanes,z),k&&xt.viewport(D.copy(k)),N.length>0&&Nr(N,U,z),tt.length>0&&Nr(tt,U,z),ct.length>0&&Nr(ct,U,z),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Nl(w,U,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[k.id]===void 0&&(f.state.transmissionRenderTarget[k.id]=new Qi(1,1,{generateMipmaps:!0,type:$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float")?Cr:Vn,minFilter:Wi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));const tt=f.state.transmissionRenderTarget[k.id],ct=k.viewport||D;tt.setSize(ct.z*v.transmissionResolutionScale,ct.w*v.transmissionResolutionScale);const _t=v.getRenderTarget(),dt=v.getActiveCubeFace(),Dt=v.getActiveMipmapLevel();v.setRenderTarget(tt),v.getClearColor(V),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),v.clear(),_e&&$.render(z);const It=v.toneMapping;v.toneMapping=vi;const Tt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),f.setupLightsView(k),et===!0&&vt.setGlobalState(v.clippingPlanes,k),Nr(w,z,k),Bt.updateMultisampleRenderTarget(tt),Bt.updateRenderTargetMipmap(tt),$t.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let te=0,Me=U.length;te<Me;te++){const he=U[te],se=he.object,At=he.geometry,ge=he.material,Yt=he.group;if(ge.side===je&&se.layers.test(k.layers)){const cn=ge.side;ge.side=Qe,ge.needsUpdate=!0,Ol(se,z,k,At,ge,Yt),ge.side=cn,ge.needsUpdate=!0,Vt=!0}}Vt===!0&&(Bt.updateMultisampleRenderTarget(tt),Bt.updateRenderTargetMipmap(tt))}v.setRenderTarget(_t,dt,Dt),v.setClearColor(V,W),Tt!==void 0&&(k.viewport=Tt),v.toneMapping=It}function Nr(w,U,z){const k=U.isScene===!0?U.overrideMaterial:null;for(let N=0,tt=w.length;N<tt;N++){const ct=w[N],_t=ct.object,dt=ct.geometry,Dt=ct.group;let It=ct.material;It.allowOverride===!0&&k!==null&&(It=k),_t.layers.test(z.layers)&&Ol(_t,U,z,dt,It,Dt)}}function Ol(w,U,z,k,N,tt){w.onBeforeRender(v,U,z,k,N,tt),w.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(v,U,z,k,w,tt),N.transparent===!0&&N.side===je&&N.forceSinglePass===!1?(N.side=Qe,N.needsUpdate=!0,v.renderBufferDirect(z,U,k,N,w,tt),N.side=Mi,N.needsUpdate=!0,v.renderBufferDirect(z,U,k,N,w,tt),N.side=je):v.renderBufferDirect(z,U,k,N,w,tt),w.onAfterRender(v,U,z,k,N,tt)}function Or(w,U,z){U.isScene!==!0&&(U=me);const k=bt.get(w),N=f.state.lights,tt=f.state.shadowsArray,ct=N.state.version,_t=Z.getParameters(w,N.state,tt,U,z),dt=Z.getProgramCacheKey(_t);let Dt=k.programs;k.environment=w.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(w.isMeshStandardMaterial?C:Le).get(w.envMap||k.environment),k.envMapRotation=k.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Dt===void 0&&(w.addEventListener("dispose",mt),Dt=new Map,k.programs=Dt);let It=Dt.get(dt);if(It!==void 0){if(k.currentProgram===It&&k.lightsStateVersion===ct)return Bl(w,_t),It}else _t.uniforms=Z.getUniforms(w),w.onBeforeCompile(_t,v),It=Z.acquireProgram(_t,dt),Dt.set(dt,It),k.uniforms=_t.uniforms;const Tt=k.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Tt.clippingPlanes=vt.uniform),Bl(w,_t),k.needsLights=Jd(w),k.lightsStateVersion=ct,k.needsLights&&(Tt.ambientLightColor.value=N.state.ambient,Tt.lightProbe.value=N.state.probe,Tt.directionalLights.value=N.state.directional,Tt.directionalLightShadows.value=N.state.directionalShadow,Tt.spotLights.value=N.state.spot,Tt.spotLightShadows.value=N.state.spotShadow,Tt.rectAreaLights.value=N.state.rectArea,Tt.ltc_1.value=N.state.rectAreaLTC1,Tt.ltc_2.value=N.state.rectAreaLTC2,Tt.pointLights.value=N.state.point,Tt.pointLightShadows.value=N.state.pointShadow,Tt.hemisphereLights.value=N.state.hemi,Tt.directionalShadowMap.value=N.state.directionalShadowMap,Tt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Tt.spotShadowMap.value=N.state.spotShadowMap,Tt.spotLightMatrix.value=N.state.spotLightMatrix,Tt.spotLightMap.value=N.state.spotLightMap,Tt.pointShadowMap.value=N.state.pointShadowMap,Tt.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=It,k.uniformsList=null,It}function Fl(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=go.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Bl(w,U){const z=bt.get(w);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function Zd(w,U,z,k,N){U.isScene!==!0&&(U=me),Bt.resetTextureUnits();const tt=U.fog,ct=k.isMeshStandardMaterial?U.environment:null,_t=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Us,dt=(k.isMeshStandardMaterial?C:Le).get(k.envMap||ct),Dt=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,It=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Tt=!!z.morphAttributes.position,Vt=!!z.morphAttributes.normal,te=!!z.morphAttributes.color;let Me=vi;k.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Me=v.toneMapping);const he=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,se=he!==void 0?he.length:0,At=bt.get(k),ge=f.state.lights;if(et===!0&&(St===!0||w!==M)){const qe=w===M&&k.id===x;vt.setState(k,w,qe)}let Yt=!1;k.version===At.__version?(At.needsLights&&At.lightsStateVersion!==ge.state.version||At.outputColorSpace!==_t||N.isBatchedMesh&&At.batching===!1||!N.isBatchedMesh&&At.batching===!0||N.isBatchedMesh&&At.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&At.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&At.instancing===!1||!N.isInstancedMesh&&At.instancing===!0||N.isSkinnedMesh&&At.skinning===!1||!N.isSkinnedMesh&&At.skinning===!0||N.isInstancedMesh&&At.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&At.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&At.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&At.instancingMorph===!1&&N.morphTexture!==null||At.envMap!==dt||k.fog===!0&&At.fog!==tt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==vt.numPlanes||At.numIntersection!==vt.numIntersection)||At.vertexAlphas!==Dt||At.vertexTangents!==It||At.morphTargets!==Tt||At.morphNormals!==Vt||At.morphColors!==te||At.toneMapping!==Me||At.morphTargetsCount!==se)&&(Yt=!0):(Yt=!0,At.__version=k.version);let cn=At.currentProgram;Yt===!0&&(cn=Or(k,U,N));let is=!1,ln=!1,js=!1;const fe=cn.getUniforms(),Mn=At.uniforms;if(xt.useProgram(cn.program)&&(is=!0,ln=!0,js=!0),k.id!==x&&(x=k.id,ln=!0),is||M!==w){xt.buffers.depth.getReversed()?(ht.copy(w.projectionMatrix),ap(ht),cp(ht),fe.setValue(L,"projectionMatrix",ht)):fe.setValue(L,"projectionMatrix",w.projectionMatrix),fe.setValue(L,"viewMatrix",w.matrixWorldInverse);const Ze=fe.map.cameraPosition;Ze!==void 0&&Ze.setValue(L,jt.setFromMatrixPosition(w.matrixWorld)),ae.logarithmicDepthBuffer&&fe.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&fe.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,ln=!0,js=!0)}if(N.isSkinnedMesh){fe.setOptional(L,N,"bindMatrix"),fe.setOptional(L,N,"bindMatrixInverse");const qe=N.skeleton;qe&&(qe.boneTexture===null&&qe.computeBoneTexture(),fe.setValue(L,"boneTexture",qe.boneTexture,Bt))}N.isBatchedMesh&&(fe.setOptional(L,N,"batchingTexture"),fe.setValue(L,"batchingTexture",N._matricesTexture,Bt),fe.setOptional(L,N,"batchingIdTexture"),fe.setValue(L,"batchingIdTexture",N._indirectTexture,Bt),fe.setOptional(L,N,"batchingColorTexture"),N._colorsTexture!==null&&fe.setValue(L,"batchingColorTexture",N._colorsTexture,Bt));const Sn=z.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&ut.update(N,z,cn),(ln||At.receiveShadow!==N.receiveShadow)&&(At.receiveShadow=N.receiveShadow,fe.setValue(L,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Mn.envMap.value=dt,Mn.flipEnvMap.value=dt.isCubeTexture&&dt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(Mn.envMapIntensity.value=U.environmentIntensity),ln&&(fe.setValue(L,"toneMappingExposure",v.toneMappingExposure),At.needsLights&&$d(Mn,js),tt&&k.fog===!0&&q.refreshFogUniforms(Mn,tt),q.refreshMaterialUniforms(Mn,k,G,Y,f.state.transmissionRenderTarget[w.id]),go.upload(L,Fl(At),Mn,Bt)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(go.upload(L,Fl(At),Mn,Bt),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&fe.setValue(L,"center",N.center),fe.setValue(L,"modelViewMatrix",N.modelViewMatrix),fe.setValue(L,"normalMatrix",N.normalMatrix),fe.setValue(L,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const qe=k.uniformsGroups;for(let Ze=0,Ko=qe.length;Ze<Ko;Ze++){const Pi=qe[Ze];I.update(Pi,cn),I.bind(Pi,cn)}}return cn}function $d(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Jd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,U,z){const k=bt.get(w);k.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),bt.get(w.texture).__webglTexture=U,bt.get(w.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:z,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,U){const z=bt.get(w);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};const Qd=L.createFramebuffer();this.setRenderTarget=function(w,U=0,z=0){P=w,R=U,b=z;let k=!0,N=null,tt=!1,ct=!1;if(w){const dt=bt.get(w);if(dt.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(L.FRAMEBUFFER,null),k=!1;else if(dt.__webglFramebuffer===void 0)Bt.setupRenderTarget(w);else if(dt.__hasExternalTextures)Bt.rebindTextures(w,bt.get(w.texture).__webglTexture,bt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Tt=w.depthTexture;if(dt.__boundDepthTexture!==Tt){if(Tt!==null&&bt.has(Tt)&&(w.width!==Tt.image.width||w.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Bt.setupDepthRenderbuffer(w)}}const Dt=w.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(ct=!0);const It=bt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(It[U])?N=It[U][z]:N=It[U],tt=!0):w.samples>0&&Bt.useMultisampledRTT(w)===!1?N=bt.get(w).__webglMultisampledFramebuffer:Array.isArray(It)?N=It[z]:N=It,D.copy(w.viewport),F.copy(w.scissor),O=w.scissorTest}else D.copy(gt).multiplyScalar(G).floor(),F.copy(Lt).multiplyScalar(G).floor(),O=Jt;if(z!==0&&(N=Qd),xt.bindFramebuffer(L.FRAMEBUFFER,N)&&k&&xt.drawBuffers(w,N),xt.viewport(D),xt.scissor(F),xt.setScissorTest(O),tt){const dt=bt.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,dt.__webglTexture,z)}else if(ct){const dt=bt.get(w.texture),Dt=U;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,dt.__webglTexture,z,Dt)}else if(w!==null&&z!==0){const dt=bt.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,dt.__webglTexture,z)}x=-1},this.readRenderTargetPixels=function(w,U,z,k,N,tt,ct,_t=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=bt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ct!==void 0&&(dt=dt[ct]),dt){xt.bindFramebuffer(L.FRAMEBUFFER,dt);try{const Dt=w.textures[_t],It=Dt.format,Tt=Dt.type;if(!ae.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ae.textureTypeReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-k&&z>=0&&z<=w.height-N&&(w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+_t),L.readPixels(U,z,k,N,it.convert(It),it.convert(Tt),tt))}finally{const Dt=P!==null?bt.get(P).__webglFramebuffer:null;xt.bindFramebuffer(L.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(w,U,z,k,N,tt,ct,_t=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=bt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ct!==void 0&&(dt=dt[ct]),dt)if(U>=0&&U<=w.width-k&&z>=0&&z<=w.height-N){xt.bindFramebuffer(L.FRAMEBUFFER,dt);const Dt=w.textures[_t],It=Dt.format,Tt=Dt.type;if(!ae.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ae.textureTypeReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Vt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Vt),L.bufferData(L.PIXEL_PACK_BUFFER,tt.byteLength,L.STREAM_READ),w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+_t),L.readPixels(U,z,k,N,it.convert(It),it.convert(Tt),0);const te=P!==null?bt.get(P).__webglFramebuffer:null;xt.bindFramebuffer(L.FRAMEBUFFER,te);const Me=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await op(L,Me,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Vt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,tt),L.deleteBuffer(Vt),L.deleteSync(Me),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,U=null,z=0){const k=Math.pow(2,-z),N=Math.floor(w.image.width*k),tt=Math.floor(w.image.height*k),ct=U!==null?U.x:0,_t=U!==null?U.y:0;Bt.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,z,0,0,ct,_t,N,tt),xt.unbindTexture()};const tf=L.createFramebuffer(),ef=L.createFramebuffer();this.copyTextureToTexture=function(w,U,z=null,k=null,N=0,tt=null){tt===null&&(N!==0?(bs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),tt=N,N=0):tt=0);let ct,_t,dt,Dt,It,Tt,Vt,te,Me;const he=w.isCompressedTexture?w.mipmaps[tt]:w.image;if(z!==null)ct=z.max.x-z.min.x,_t=z.max.y-z.min.y,dt=z.isBox3?z.max.z-z.min.z:1,Dt=z.min.x,It=z.min.y,Tt=z.isBox3?z.min.z:0;else{const Sn=Math.pow(2,-N);ct=Math.floor(he.width*Sn),_t=Math.floor(he.height*Sn),w.isDataArrayTexture?dt=he.depth:w.isData3DTexture?dt=Math.floor(he.depth*Sn):dt=1,Dt=0,It=0,Tt=0}k!==null?(Vt=k.x,te=k.y,Me=k.z):(Vt=0,te=0,Me=0);const se=it.convert(U.format),At=it.convert(U.type);let ge;U.isData3DTexture?(Bt.setTexture3D(U,0),ge=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Bt.setTexture2DArray(U,0),ge=L.TEXTURE_2D_ARRAY):(Bt.setTexture2D(U,0),ge=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const Yt=L.getParameter(L.UNPACK_ROW_LENGTH),cn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),is=L.getParameter(L.UNPACK_SKIP_PIXELS),ln=L.getParameter(L.UNPACK_SKIP_ROWS),js=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,he.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,he.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Dt),L.pixelStorei(L.UNPACK_SKIP_ROWS,It),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Tt);const fe=w.isDataArrayTexture||w.isData3DTexture,Mn=U.isDataArrayTexture||U.isData3DTexture;if(w.isDepthTexture){const Sn=bt.get(w),qe=bt.get(U),Ze=bt.get(Sn.__renderTarget),Ko=bt.get(qe.__renderTarget);xt.bindFramebuffer(L.READ_FRAMEBUFFER,Ze.__webglFramebuffer),xt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ko.__webglFramebuffer);for(let Pi=0;Pi<dt;Pi++)fe&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,bt.get(w).__webglTexture,N,Tt+Pi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,bt.get(U).__webglTexture,tt,Me+Pi)),L.blitFramebuffer(Dt,It,ct,_t,Vt,te,ct,_t,L.DEPTH_BUFFER_BIT,L.NEAREST);xt.bindFramebuffer(L.READ_FRAMEBUFFER,null),xt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(N!==0||w.isRenderTargetTexture||bt.has(w)){const Sn=bt.get(w),qe=bt.get(U);xt.bindFramebuffer(L.READ_FRAMEBUFFER,tf),xt.bindFramebuffer(L.DRAW_FRAMEBUFFER,ef);for(let Ze=0;Ze<dt;Ze++)fe?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Sn.__webglTexture,N,Tt+Ze):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Sn.__webglTexture,N),Mn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,qe.__webglTexture,tt,Me+Ze):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,qe.__webglTexture,tt),N!==0?L.blitFramebuffer(Dt,It,ct,_t,Vt,te,ct,_t,L.COLOR_BUFFER_BIT,L.NEAREST):Mn?L.copyTexSubImage3D(ge,tt,Vt,te,Me+Ze,Dt,It,ct,_t):L.copyTexSubImage2D(ge,tt,Vt,te,Dt,It,ct,_t);xt.bindFramebuffer(L.READ_FRAMEBUFFER,null),xt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Mn?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(ge,tt,Vt,te,Me,ct,_t,dt,se,At,he.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(ge,tt,Vt,te,Me,ct,_t,dt,se,he.data):L.texSubImage3D(ge,tt,Vt,te,Me,ct,_t,dt,se,At,he):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,tt,Vt,te,ct,_t,se,At,he.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,tt,Vt,te,he.width,he.height,se,he.data):L.texSubImage2D(L.TEXTURE_2D,tt,Vt,te,ct,_t,se,At,he);L.pixelStorei(L.UNPACK_ROW_LENGTH,Yt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,cn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,is),L.pixelStorei(L.UNPACK_SKIP_ROWS,ln),L.pixelStorei(L.UNPACK_SKIP_IMAGES,js),tt===0&&U.generateMipmaps&&L.generateMipmap(ge),xt.unbindTexture()},this.copyTextureToTexture3D=function(w,U,z=null,k=null,N=0){return bs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,U,z,k,N)},this.initRenderTarget=function(w){bt.get(w).__webglFramebuffer===void 0&&Bt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Bt.setTextureCube(w,0):w.isData3DTexture?Bt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Bt.setTexture2DArray(w,0):Bt.setTexture2D(w,0),xt.unbindTexture()},this.resetState=function(){R=0,b=0,P=null,xt.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}}const Wh={type:"change"},dl={type:"start"},Xu={type:"end"},lo=new Bo,Xh=new di,Cv=Math.cos(70*gr.DEG2RAD),Ie=new A,$e=2*Math.PI,ne={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Aa=1e-6;class Pv extends Xp{constructor(t,e=null){super(t,e),this.state=ne.NONE,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ws.ROTATE,MIDDLE:ws.DOLLY,RIGHT:ws.PAN},this.touches={ONE:ys.ROTATE,TWO:ys.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new A,this._lastQuaternion=new Ji,this._lastTargetPosition=new A,this._quat=new Ji().setFromUnitVectors(t.up,new A(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new _h,this._sphericalDelta=new _h,this._scale=1,this._panOffset=new A,this._rotateStart=new Ut,this._rotateEnd=new Ut,this._rotateDelta=new Ut,this._panStart=new Ut,this._panEnd=new Ut,this._panDelta=new Ut,this._dollyStart=new Ut,this._dollyEnd=new Ut,this._dollyDelta=new Ut,this._dollyDirection=new A,this._mouse=new Ut,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Lv.bind(this),this._onPointerDown=Dv.bind(this),this._onPointerUp=Iv.bind(this),this._onContextMenu=kv.bind(this),this._onMouseWheel=Ov.bind(this),this._onKeyDown=Fv.bind(this),this._onTouchStart=Bv.bind(this),this._onTouchMove=zv.bind(this),this._onMouseDown=Uv.bind(this),this._onMouseMove=Nv.bind(this),this._interceptControlDown=Gv.bind(this),this._interceptControlUp=Vv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Wh),this.update(),this.state=ne.NONE}update(t=null){const e=this.object.position;Ie.copy(e).sub(this.target),Ie.applyQuaternion(this._quat),this._spherical.setFromVector3(Ie),this.autoRotate&&this.state===ne.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=$e:n>Math.PI&&(n-=$e),i<-Math.PI?i+=$e:i>Math.PI&&(i-=$e),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ie.setFromSpherical(this._spherical),Ie.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ie),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ie.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new A(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new A(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Ie.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(lo.origin.copy(this.object.position),lo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(lo.direction))<Cv?this.object.lookAt(this.target):(Xh.setFromNormalAndCoplanarPoint(this.object.up,this.target),lo.intersectPlane(Xh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Aa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Aa||this._lastTargetPosition.distanceToSquared(this.target)>Aa?(this.dispatchEvent(Wh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?$e/60*this.autoRotateSpeed*t:$e/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ie.setFromMatrixColumn(e,0),Ie.multiplyScalar(-t),this._panOffset.add(Ie)}_panUp(t,e){this.screenSpacePanning===!0?Ie.setFromMatrixColumn(e,1):(Ie.setFromMatrixColumn(e,0),Ie.crossVectors(this.object.up,Ie)),Ie.multiplyScalar(t),this._panOffset.add(Ie)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Ie.copy(i).sub(this.target);let r=Ie.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft($e*this._rotateDelta.x/e.clientHeight),this._rotateUp($e*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp($e*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-$e*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft($e*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-$e*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft($e*this._rotateDelta.x/e.clientHeight),this._rotateUp($e*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ut,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Dv(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Lv(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Iv(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Xu),this.state=ne.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Uv(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ws.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ne.DOLLY;break;case ws.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ne.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ne.ROTATE}break;case ws.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ne.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ne.PAN}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(dl)}function Nv(s){switch(this.state){case ne.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ne.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ne.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Ov(s){this.enabled===!1||this.enableZoom===!1||this.state!==ne.NONE||(s.preventDefault(),this.dispatchEvent(dl),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Xu))}function Fv(s){this.enabled!==!1&&this._handleKeyDown(s)}function Bv(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case ys.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ne.TOUCH_ROTATE;break;case ys.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ne.TOUCH_PAN;break;default:this.state=ne.NONE}break;case 2:switch(this.touches.TWO){case ys.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ne.TOUCH_DOLLY_PAN;break;case ys.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ne.TOUCH_DOLLY_ROTATE;break;default:this.state=ne.NONE}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(dl)}function zv(s){switch(this._trackPointer(s),this.state){case ne.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ne.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ne.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ne.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ne.NONE}}function kv(s){this.enabled!==!1&&s.preventDefault()}function Gv(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Vv(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ft={scenes:[{name:"INTRO",duration:5e3,description:"Welcome to the ML Explainer",explanation:"Welcome to the Kaggle Contest Explainer. Visualizing how machine learning models work is crucial to building intuition and communicating results. We will walk through the core algorithms and concepts used in top Kaggle solutions.",subtitles:[{progress:0,text:"Welcome to the <span style='color: #4cc9ff'>Kaggle Contest 3D Explainer</span>."},{progress:35,text:"Visualizing models is key to building <span style='color: #00ff88'>intuition</span> and communicating results."},{progress:70,text:"Let's explore the core algorithms used in <span style='color: #4cc9ff'>winning Kaggle solutions</span>!"}]},{name:"KAGGLER_PIPELINE",duration:6e3,description:"Kaggle Competition Pipeline",explanation:"A top Kaggle workflow starts with raw training data, extracts predictive features, trains individual models, ensembles them together, and submits predictions to the Leaderboard. Light pulses show data progressing through this flow.",subtitles:[{progress:0,text:"Every Kaggle solution starts with an end-to-end <span style='color: #4cc9ff'>data pipeline</span>."},{progress:25,text:"We load Raw Data, perform <span style='color: #00ff88'>Feature Engineering</span>, and train Models."},{progress:50,text:"These models are combined using <span style='color: #00ff88'>Ensembling</span> and Blending."},{progress:75,text:"Finally, we submit predictions to the <span style='color: #4cc9ff'>Leaderboard</span>!"}]},{name:"BIAS_VARIANCE",duration:6e3,description:"Bias-Variance Tradeoff",explanation:"Generalization vs Overfitting. High Bias (Underfit, left target) consistently misses the bullseye. High Variance (Overfit, right target) scatters predictions widely. Balanced (Optimal, center target) clusters tightly on the bullseye.",subtitles:[{progress:0,text:"The <span style='color: #4cc9ff'>Bias-Variance tradeoff</span> is fundamental to model performance."},{progress:25,text:"<span style='color: #ff4444'>High Bias</span> (left target) is underfitting — it consistently misses the bullseye."},{progress:50,text:"<span style='color: #ffaa00'>High Variance</span> (right target) is overfitting — predictions scatter widely."},{progress:75,text:"A <span style='color: #00ff88'>Balanced</span> model (center target) hits the bullseye and generalizes well!"}]},{name:"CROSS_VALIDATION",duration:6e3,description:"K-Fold Cross-Validation",explanation:"To avoid leaderboard overfitting, we divide our training dataset into K folds. Sequentially, one fold is held out as validation (lime) and the other K-1 folds train the model (blue), ensuring reliable score estimation.",subtitles:[{progress:0,text:"<span style='color: #4cc9ff'>K-Fold Cross-Validation</span> ensures robust evaluation without overfitting."},{progress:25,text:"We partition the dataset into <span style='color: #00ff88'>K equal blocks</span> (folds)."},{progress:50,text:"K-1 folds <span style='color: #4cc9ff'>train</span> the model, while 1 fold <span style='color: #00ff88'>validates</span> it."},{progress:75,text:"Rotating the validation fold provides a highly reliable <span style='color: #4cc9ff'>score estimate</span>."}]},{name:"LINEAR_REGRESSION",duration:6e3,description:"Linear Regression fitting",explanation:"Linear Regression fits a straight line of best fit to predict continuous values. It measures vertical error lines (residuals) from points to the line, and rotates to minimize the Sum of Squared Errors until it turns green.",subtitles:[{progress:0,text:"<span style='color: #4cc9ff'>Linear Regression</span> fits a straight line to predict continuous outcomes."},{progress:25,text:"We measure vertical errors, or <span style='color: #ffaa00'>residuals</span>, from points to the line."},{progress:50,text:"The model shifts to <span style='color: #00ff88'>minimize</span> the Sum of Squared Errors."},{progress:75,text:"The line turns <span style='color: #00ff88'>green</span> when it finds the optimal fit."}]},{name:"LOGISTIC",duration:6e3,description:"Logistic Regression learning",explanation:"Logistic Regression finds a linear boundary separating classes. The boundary starts incorrect (red), then Gradient Descent adjustments align it perfectly to separate the Cyan and Lime clusters, turning Green.",subtitles:[{progress:0,text:"<span style='color: #4cc9ff'>Logistic Regression</span> finds a linear boundary to separate classes."},{progress:25,text:"The decision boundary initially starts in an <span style='color: #ff4444'>incorrect position</span>."},{progress:50,text:"<span style='color: #00ff88'>Gradient Descent</span> updates weights to shift and rotate the boundary."},{progress:75,text:"It turns <span style='color: #00ff88'>green</span> once it perfectly separates the two clusters."}]},{name:"REGULARIZATION",duration:6e3,description:"L1 & L2 Regularization",explanation:"Regularization prevents overfitting by penalizing large weights. Ridge (L2) adds a circular penalty constraint, while Lasso (L1) adds a diamond-shaped constraint. We see loss contours expand until they touch the constraint boundaries, showing how Lasso drives some coefficients to exactly zero.",subtitles:[{progress:0,text:"<span style='color: #4cc9ff'>Regularization</span> penalizes large weights to prevent overfitting."},{progress:25,text:"<span style='color: #00ff88'>Ridge (L2)</span> uses a circular penalty, shrinking weights evenly."},{progress:50,text:"<span style='color: #4cc9ff'>Lasso (L1)</span> uses a diamond penalty, driving some weights exactly to zero."},{progress:75,text:"This built-in <span style='color: #00ff88'>feature selection</span> makes Lasso great for sparse data."}]},{name:"DECISION_TREE",duration:6e3,description:"Decision Tree splits",explanation:"A Decision Tree splits data recursively. Raw samples flow from the top root node, split down branches based on feature thresholds, and sort into left (cyan) or right (lime) leaves, making a final classification.",subtitles:[{progress:0,text:"A <span style='color: #00ff88'>Decision Tree</span> splits data recursively to make classifications."},{progress:25,text:"Data flows from the <span style='color: #4cc9ff'>root node</span> down split branches."},{progress:55,text:"At each node, a <span style='color: #ffaa00'>feature threshold</span> divides the data."},{progress:75,text:"Samples reach the <span style='color: #00ff88'>leaves</span> to form final predictions."}]},{name:"RANDOM_FOREST",duration:6e3,description:"Random Forest Ensemble",explanation:"A Random Forest is a bagging ensemble of independent decision trees. A data point traverses 5 separate trees, each voting Cyan or Lime. The majority vote (shown in the register at the bottom) wins, reducing variance.",subtitles:[{progress:0,text:"A <span style='color: #00ff88'>Random Forest</span> is an ensemble of independent decision trees."},{progress:25,text:"We feed a data point into multiple <span style='color: #4cc9ff'>randomly trained</span> trees."},{progress:50,text:"Each tree makes an independent vote for <span style='color: #4cc9ff'>Cyan</span> or <span style='color: #00ff88'>Lime</span>."},{progress:75,text:"The <span style='color: #00ff88'>majority vote wins</span>, creating a stable, low-variance model."}]},{name:"XGBOOST",duration:6e3,description:"XGBoost Gradient Boosting",explanation:"XGBoost builds trees sequentially. The first tree fits the target data. The remaining residual error (y-axis dispersion) is calculated, and the second tree is trained specifically on those residuals, shrinking the error to near-zero.",subtitles:[{progress:0,text:"<span style='color: #4cc9ff'>XGBoost</span> uses Gradient Boosting to train trees sequentially."},{progress:25,text:"The first tree fits the data, leaving behind <span style='color: #ffaa00'>residual errors</span>."},{progress:50,text:"The next tree is trained <span style='color: #00ff88'>directly on those residuals</span>."},{progress:75,text:"Sequential boosting shrinks the overall error to <span style='color: #4cc9ff'>near-zero</span>!"}]},{name:"SVM",duration:6e3,description:"Support Vector Machines",explanation:"Support Vector Machines (SVM) find a decision boundary plane that maximizes the margin (gap) between classes. The closest boundary-defining points are called Support Vectors, shown here with glowing rings.",subtitles:[{progress:0,text:"<span style='color: #4cc9ff'>Support Vector Machines</span> find a boundary maximizing class separation."},{progress:25,text:"We highlight <span style='color: #00ff88'>Support Vectors</span>, the critical points nearest the boundary."},{progress:50,text:"The <span style='color: #ffaa00'>margins</span> expand outwards from the boundary line."},{progress:75,text:"The boundary locks in place once it <span style='color: #00ff88'>maximizes the margin gap</span>!"}]},{name:"KNN",duration:6e3,description:"K-Nearest Neighbors",explanation:"K-Nearest Neighbors (KNN) classifies query points based on proximity. A circular radar sweeps outward from a query point in the center, draws connections (yellow lines) to the K=5 nearest neighbors, and classifies by majority vote.",subtitles:[{progress:0,text:"<span style='color: #4cc9ff'>K-Nearest Neighbors</span> classifies data strictly based on proximity."},{progress:25,text:"A radar sweep expands from the query point to <span style='color: #00ff88'>measure distances</span>."},{progress:50,text:"It identifies the <span style='color: #ffaa00'>K=5 closest points</span> (yellow lines)."},{progress:75,text:"The query point inherits the <span style='color: #00ff88'>majority class</span> of its neighbors!"}]},{name:"NAIVE_BAYES",duration:6e3,description:"Naive Bayes classifier",explanation:"Naive Bayes calculates the probability of each class given features using Bayes' Theorem. It assumes features are conditionally independent. Overlapping Gaussian curves show probability densities for classes, and we sweep a query line to find relative likelihoods.",subtitles:[{progress:0,text:"<span style='color: #4cc9ff'>Naive Bayes</span> is a probabilistic classifier based on Bayes' Theorem."},{progress:25,text:"It assumes <span style='color: #00ff88'>feature independence</span> for simple, fast calculations."},{progress:50,text:"Overlapping curves show the <span style='color: #4cc9ff'>probability distributions</span> of classes."},{progress:75,text:"We compare likelihoods to determine the most <span style='color: #00ff88'>probable class</span>."}]},{name:"NEURAL_NET",duration:6e3,description:"Deep Neural Network",explanation:"Deep Learning models layers of neurons. Glowing cyan pulses propagate left-to-right (Forward Pass) triggering activations. Glowing magenta pulses propagate right-to-left (Backpropagation), updating weights to minimize loss.",subtitles:[{progress:0,text:"<span style='color: #4cc9ff'>Deep Neural Networks</span> model complex, non-linear relationships."},{progress:25,text:"In the <span style='color: #4cc9ff'>Forward Pass</span>, inputs propagate left-to-right (Cyan)."},{progress:50,text:"Neurons calculate activations using <span style='color: #00ff88'>weights and biases</span>."},{progress:75,text:"<span style='color: #ff00ff'>Backpropagation</span> runs in reverse (Magenta) to minimize loss!"}]},{name:"KMEANS",duration:6e3,description:"K-Means Clustering",explanation:"K-Means partitions data into clusters. Centroids (Red, Green, Blue spheres) start in random positions. Step-by-step, points are assigned to the nearest centroid (changing color) and centroids move to cluster centers.",subtitles:[{progress:0,text:"<span style='color: #4cc9ff'>K-Means</span> is an unsupervised clustering algorithm."},{progress:25,text:"Points are assigned to the <span style='color: #00ff88'>nearest centroid</span>."},{progress:50,text:"Centroids recalculate and move to the <span style='color: #4cc9ff'>center</span> of their clusters."},{progress:75,text:"This repeats iteratively until all clusters <span style='color: #00ff88'>stabilize</span>!"}]},{name:"PCA",duration:6e3,description:"Principal Component Analysis",explanation:"PCA reduces dimensionality by projecting data onto orthogonal principal axes of maximum variance. PC1 (cyan arrow) and PC2 (lime arrow) define the 2D plane onto which the 3D cloud collapses, preserving maximum information.",subtitles:[{progress:0,text:"<span style='color: #4cc9ff'>Principal Component Analysis</span> reduces dataset dimensionality."},{progress:25,text:"We identify orthogonal axes of <span style='color: #00ff88'>maximum variance</span> (PC1 & PC2)."},{progress:50,text:"The 3D point cloud <span style='color: #4cc9ff'>collapses</span> onto this 2D plane."},{progress:75,text:"This projection preserves maximum information in a <span style='color: #00ff88'>lower dimension</span>!"}]},{name:"EVALUATION",duration:6e3,description:"ROC Curve Evaluation",explanation:"We evaluate classifier performance using the Receiver Operating Characteristic (ROC) curve. It plots the True Positive Rate against the False Positive Rate. The Area Under the Curve (AUC) measures overall classification quality.",subtitles:[{progress:0,text:"We evaluate classification models using the <span style='color: #4cc9ff'>ROC Curve</span>."},{progress:25,text:"It plots the <span style='color: #00ff88'>True Positive Rate</span> vs. <span style='color: #ff4444'>False Positive Rate</span>."},{progress:50,text:"A random classifier is diagonal, but a <span style='color: #4cc9ff'>good model curves up</span>."},{progress:75,text:"The <span style='color: #00ff88'>Area Under the Curve (AUC)</span> measures overall performance."}]},{name:"ENDING",duration:5e3,description:"Submit to Kaggle!",explanation:"You're now ready to explain and submit your models. Building clear visualizations of your pipeline is the key to winning Kaggle contests and landing ML jobs. Happy coding!",subtitles:[{progress:0,text:"You are now ready to build and submit <span style='color: #4cc9ff'>top-tier models</span> to Kaggle!"},{progress:35,text:"<span style='color: #00ff88'>Interactive visualizations</span> are the key to presenting your work."},{progress:70,text:"Good luck on your machine learning journey, and <span style='color: #4cc9ff'>happy coding</span>!"}]}],sceneSwitchDuration:6e3,camera:{fov:75,near:.1,far:1e3,defaultZ:20},particles:{count:5e3,size:.2,color:"#4cc9ff",opacity:.8},neuralNetwork:{nodeCount:60,connectionCount:100,nodeSize:.15,nodeColor:"#00ffff",lineColor:"#4cc9ff",lineOpacity:.3},colors:{primary:"#4cc9ff",accent:"#00ff88",cyan:"#00ffff"}};class Hv{constructor(t){this.scene=t,this.createParticles()}createParticles(){const t=ft.particles.count,e=new Ht,n=new Float32Array(t*3),i=new Float32Array(t*3);for(let o=0;o<t*3;o+=3)n[o]=(Math.random()-.5)*200,n[o+1]=(Math.random()-.5)*200,n[o+2]=(Math.random()-.5)*200,i[o]=.3+Math.random()*.3,i[o+1]=.8+Math.random()*.2,i[o+2]=1;e.setAttribute("position",new en(n,3)),e.setAttribute("color",new en(i,3));const r=new cl({size:ft.particles.size,color:ft.particles.color,transparent:!0,opacity:ft.particles.opacity,vertexColors:!0,sizeAttenuation:!0});this.particles=new Nu(e,r),this.scene.add(this.particles),this.originalPositions=n.slice()}update(){if(!this.particles)return;const t=this.speedMultiplier!==void 0?this.speedMultiplier:1;this.particles.rotation.y+=5e-4*t,this.particles.rotation.x+=2e-4*t;const e=this.particles.geometry.attributes.position.array,n=Date.now()*.001*t;for(let i=0;i<e.length;i+=3)e[i]=this.originalPositions[i]+Math.sin(n+i)*.5,e[i+1]=this.originalPositions[i+1]+Math.cos(n+i*.5)*.5,e[i+2]=this.originalPositions[i+2]+Math.sin(n*.5+i)*.5;this.particles.geometry.attributes.position.needsUpdate=!0}}class Wv{constructor(t){this.scene=t,this.nodes=[],this.lines=[],this.createNetwork()}createNetwork(){const t=new ie(ft.neuralNetwork.nodeSize,8,8),e=new qs({color:ft.neuralNetwork.nodeColor});for(let n=0;n<ft.neuralNetwork.nodeCount;n++){const i=new ot(t,e);i.position.set((Math.random()-.5)*30,(Math.random()-.5)*20,(Math.random()-.5)*20),this.nodes.push(i),this.scene.add(i)}for(let n=0;n<ft.neuralNetwork.connectionCount;n++){const i=this.nodes[Math.floor(Math.random()*this.nodes.length)],r=this.nodes[Math.floor(Math.random()*this.nodes.length)],o=[i.position,r.position],a=new Ht().setFromPoints(o),c=new Fe({color:ft.neuralNetwork.lineColor,transparent:!0,opacity:ft.neuralNetwork.lineOpacity}),l=new Re(a,c);this.lines.push(l),this.scene.add(l)}}update(){this.nodes.forEach((t,e)=>{t.rotation.x+=.001,t.rotation.y+=.002,t.scale.y=1+Math.sin(Date.now()*.001+e)*.3}),this.lines.forEach((t,e)=>{t.material.opacity=ft.neuralNetwork.lineOpacity*(.5+.5*Math.sin(Date.now()*.002+e))})}}class Xv{constructor(t){this.camera=t,this.time=0}update(){const t=this.speedMultiplier!==void 0?this.speedMultiplier:1;this.time+=.005*t,this.camera.position.x=Math.sin(this.time)*8,this.camera.position.z=20+Math.cos(this.time)*5,this.camera.position.y=Math.sin(this.time*.5)*3,this.camera.lookAt(new A(0,0,0))}}class qv{constructor(){this.currentScene=0,this.scenes=ft.scenes.map(t=>t.name),this.isPlaying=!0,this.lastSwitch=Date.now(),this.pausedElapsed=0,this.narratorMode=!0,this._narratorProgress=0,this.onTimelineComplete=null}update(){if(!this.isPlaying){this.lastSwitch=Date.now()-this.pausedElapsed;return}if(this.narratorMode)return;const e=Date.now()-this.lastSwitch,n=ft.scenes[this.currentScene].duration||ft.sceneSwitchDuration;e>n&&(this.currentScene===this.scenes.length-1&&this.onTimelineComplete&&this.onTimelineComplete(),this.nextScene())}getCurrentScene(){return this.scenes[this.currentScene]}getProgress(){if(this.narratorMode)return this._narratorProgress;const e=Date.now()-this.lastSwitch,n=ft.scenes[this.currentScene].duration||ft.sceneSwitchDuration;return Math.min(100,Math.max(0,e/n*100))}setProgress(t){this._narratorProgress=Math.min(100,Math.max(0,t))}getSceneDescription(){return ft.scenes[this.currentScene].description}getSceneExplanation(){return ft.scenes[this.currentScene].explanation||""}togglePlayPause(){return this.isPlaying=!this.isPlaying,this.isPlaying?this.lastSwitch=Date.now()-this.pausedElapsed:this.pausedElapsed=Date.now()-this.lastSwitch,this.isPlaying}nextScene(){const t=this.currentScene===this.scenes.length-1;this.currentScene=(this.currentScene+1)%this.scenes.length,this.resetTimer(),t&&this.onTimelineComplete&&this.onTimelineComplete()}prevScene(){this.currentScene=(this.currentScene-1+this.scenes.length)%this.scenes.length,this.resetTimer()}setSceneByName(t){const e=this.scenes.indexOf(t);e!==-1&&(this.currentScene=e,this.resetTimer())}resetTimer(){this.lastSwitch=Date.now(),this.pausedElapsed=0,this._narratorProgress=0}}class Yv{constructor(t){this.canvas=t,this.recordedChunks=[],this.mediaRecorder=null,this.mimeType="video/webm"}start(t=null){this.mediaRecorder&&this.mediaRecorder.state!=="inactive"&&(console.warn("VideoRecorder: already recording, stopping previous recording first"),this.mediaRecorder.stop(),this.mediaRecorder=null),this.recordedChunks=[];let e;if(this.canvas.captureStream)e=this.canvas.captureStream(60);else if(this.canvas.mozCaptureStream)e=this.canvas.mozCaptureStream(60);else throw new Error("Canvas captureStream is not supported in this browser. Try Chrome or Firefox.");if(t)try{const r=e.getVideoTracks(),o=t.getAudioTracks();o.length>0&&(e=new MediaStream([...r,...o]))}catch(r){console.warn("VideoRecorder: failed to merge audio tracks, recording video only:",r)}const n=["video/webm;codecs=vp9,opus","video/webm;codecs=vp8,opus","video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"];let i={};for(const r of n)if(MediaRecorder.isTypeSupported(r)){i.mimeType=r,this.mimeType=r;break}try{this.mediaRecorder=new MediaRecorder(e,i)}catch(r){console.warn("VideoRecorder: failed with options, trying without:",r);try{this.mediaRecorder=new MediaRecorder(e),this.mimeType=this.mediaRecorder.mimeType||"video/webm"}catch(o){throw new Error("MediaRecorder is not supported: "+o.message)}}this.mediaRecorder.ondataavailable=r=>{r.data&&r.data.size>0&&this.recordedChunks.push(r.data)},this.mediaRecorder.onerror=r=>{console.error("MediaRecorder error:",r.error)},this.mediaRecorder.start(250),console.log("🎬 Recording started | MIME:",this.mimeType,"| Audio:",t?"YES":"NO")}stop(){return new Promise((t,e)=>{if(!this.mediaRecorder||this.mediaRecorder.state==="inactive"){console.warn("VideoRecorder: stop() called but no active recording"),t(null);return}this.mediaRecorder.state==="recording"&&this.mediaRecorder.requestData(),this.mediaRecorder.onstop=()=>{if(this.recordedChunks.length===0){console.warn("VideoRecorder: no data was recorded"),t(null);return}const n=new Blob(this.recordedChunks,{type:this.mimeType});if(n.size===0){console.warn("VideoRecorder: blob is empty (0 bytes)"),t(null);return}const i=URL.createObjectURL(n),r=document.createElement("a");r.href=i;const o=this.mimeType.includes("mp4"),a=new Date().toISOString().slice(0,19).replace(/[T:]/g,"-");r.download=o?`kaggle-explainer-${a}.mp4`:`kaggle-explainer-${a}.webm`,document.body.appendChild(r),r.click(),document.body.removeChild(r),setTimeout(()=>URL.revokeObjectURL(i),5e3),console.log(`✅ Recording saved: ${r.download} (${(n.size/1024/1024).toFixed(2)} MB)`),this.recordedChunks=[],this.mediaRecorder=null,t(n)},this.mediaRecorder.onerror=n=>{console.error("MediaRecorder error during stop:",n.error),e(n.error)},this.mediaRecorder.stop()})}isRecording(){return!!(this.mediaRecorder&&this.mediaRecorder.state==="recording")}isPaused(){return!!(this.mediaRecorder&&this.mediaRecorder.state==="paused")}isActive(){return this.isRecording()||this.isPaused()}}function Jn(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function qu(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var gn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},vr={duration:.5,overwrite:!1,delay:0},fl,ze,pe,bn=1e8,oe=1/bn,Pc=Math.PI*2,Kv=Pc/4,jv=0,Yu=Math.sqrt,Zv=Math.cos,$v=Math.sin,Be=function(t){return typeof t=="string"},we=function(t){return typeof t=="function"},si=function(t){return typeof t=="number"},pl=function(t){return typeof t>"u"},Hn=function(t){return typeof t=="object"},nn=function(t){return t!==!1},ml=function(){return typeof window<"u"},ho=function(t){return we(t)||Be(t)},Ku=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},He=Array.isArray,Jv=/random\([^)]+\)/g,Qv=/,\s*/g,qh=/(?:-?\.?\d|\.)+/gi,ju=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ss=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ra=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Zu=/[+-]=-?[.\d]+/,tx=/[^,'"\[\]\s]+/gi,ex=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,xe,Fn,Dc,_l,xn={},Ro={},$u,Ju=function(t){return(Ro=Bs(t,xn))&&an},gl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},xr=function(t,e){return!e&&console.warn(t)},Qu=function(t,e){return t&&(xn[t]=e)&&Ro&&(Ro[t]=e)||xn},yr=function(){return 0},nx={suppressEvents:!0,isStart:!0,kill:!1},vo={suppressEvents:!0,kill:!1},ix={suppressEvents:!0},vl={},xi=[],Lc={},td,dn={},Ca={},Yh=30,xo=[],xl="",yl=function(t){var e=t[0],n,i;if(Hn(e)||we(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=xo.length;i--&&!xo[i].targetTest(e););n=xo[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Sd(t[i],n)))||t.splice(i,1);return t},qi=function(t){return t._gsap||yl(An(t))[0]._gsap},ed=function(t,e,n){return(n=t[e])&&we(n)?t[e]():pl(n)&&t.getAttribute&&t.getAttribute(e)||n},sn=function(t,e){return(t=t.split(",")).forEach(e)||t},Te=function(t){return Math.round(t*1e5)/1e5||0},ve=function(t){return Math.round(t*1e7)/1e7||0},Rs=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},sx=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Co=function(){var t=xi.length,e=xi.slice(0),n,i;for(Lc={},xi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ml=function(t){return!!(t._initted||t._startAt||t.add)},nd=function(t,e,n,i){xi.length&&!ze&&Co(),t.render(e,n,!!(ze&&e<0&&Ml(t))),xi.length&&!ze&&Co()},id=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(tx).length<2?e:Be(t)?t.trim():t},sd=function(t){return t},yn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},rx=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Bs=function(t,e){for(var n in e)t[n]=e[n];return t},Kh=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Hn(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},Po=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},hr=function(t){var e=t.parent||xe,n=t.keyframes?rx(He(t.keyframes)):yn;if(nn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},ox=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},rd=function(t,e,n,i,r){var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Ho=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Ei=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Yi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},ax=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Ic=function(t,e,n,i){return t._startAt&&(ze?t._startAt.revert(vo):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},cx=function s(t){return!t||t._ts&&s(t.parent)},jh=function(t){return t._repeat?zs(t._tTime,t=t.duration()+t._rDelay)*t:0},zs=function(t,e){var n=Math.floor(t=ve(t/e));return t&&n===t?n-1:n},Do=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Wo=function(t){return t._end=ve(t._start+(t._tDur/Math.abs(t._ts||t._rts||oe)||0))},Xo=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=ve(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Wo(t),n._dirty||Yi(n,t)),t},od=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Do(t.rawTime(),e),(!e._dur||Lr(0,e.totalDuration(),n)-e._tTime>oe)&&e.render(n,!0)),Yi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-oe}},zn=function(t,e,n,i){return e.parent&&Ei(e),e._start=ve((si(n)?n:n||t!==xe?wn(t,n,e):t._time)+e._delay),e._end=ve(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),rd(t,e,"_first","_last",t._sort?"_start":0),Uc(e)||(t._recent=e),i||od(t,e),t._ts<0&&Xo(t,t._tTime),t},ad=function(t,e){return(xn.ScrollTrigger||gl("scrollTrigger",e))&&xn.ScrollTrigger.create(e,t)},cd=function(t,e,n,i,r){if(El(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!ze&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&td!==pn.frame)return xi.push(t),t._lazy=[r,i],1},lx=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},Uc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},hx=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&lx(t)&&!(!t._initted&&Uc(t))||(t._ts<0||t._dp._ts<0)&&!Uc(t))?0:1,a=t._rDelay,c=0,l,h,u;if(a&&t._repeat&&(c=Lr(0,t._tDur,e),h=zs(c,a),t._yoyo&&h&1&&(o=1-o),h!==zs(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||ze||i||t._zTime===oe||!e&&t._zTime){if(!t._initted&&cd(t,e,i,n,c))return;for(u=t._zTime,t._zTime=e||(n?oe:0),n||(n=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=c,l=t._pt;l;)l.r(o,l.d),l=l._next;e<0&&Ic(t,e,n,!0),t._onUpdate&&!n&&mn(t,"onUpdate"),c&&t._repeat&&!n&&t.parent&&mn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Ei(t,1),!n&&!ze&&(mn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},ux=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},ks=function(t,e,n,i){var r=t._repeat,o=ve(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:ve(o*(r+1)+t._rDelay*r):o,a>0&&!i&&Xo(t,t._tTime=t._tDur*a),t.parent&&Wo(t),n||Yi(t.parent,t),t},Zh=function(t){return t instanceof Je?Yi(t):ks(t,t._dur)},dx={_start:0,endTime:yr,totalDuration:yr},wn=function s(t,e,n){var i=t.labels,r=t._recent||dx,o=t.duration()>=bn?r.endTime(!1):t._dur,a,c,l;return Be(e)&&(isNaN(e)||e in i)?(c=e.charAt(0),l=e.substr(-1)==="%",a=e.indexOf("="),c==="<"||c===">"?(a>=0&&(e=e.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(l?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(c=parseFloat(e.charAt(a-1)+e.substr(a+1)),l&&n&&(c=c/100*(He(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+c:o+c)):e==null?o:+e},ur=function(t,e,n){var i=si(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,c;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,c=n;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=nn(c.vars.inherit)&&c.parent;o.immediateRender=nn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new De(e[0],o,e[r+1])},Ai=function(t,e){return t||t===0?e(t):e},Lr=function(t,e,n){return n<t?t:n>e?e:n},Ve=function(t,e){return!Be(t)||!(e=ex.exec(t))?"":e[1]},fx=function(t,e,n){return Ai(n,function(i){return Lr(t,e,i)})},Nc=[].slice,ld=function(t,e){return t&&Hn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Hn(t[0]))&&!t.nodeType&&t!==Fn},px=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return Be(i)&&!e||ld(i,1)?(r=n).push.apply(r,An(i)):n.push(i)})||n},An=function(t,e,n){return pe&&!e&&pe.selector?pe.selector(t):Be(t)&&!n&&(Dc||!Gs())?Nc.call((e||_l).querySelectorAll(t),0):He(t)?px(t,n):ld(t)?Nc.call(t,0):t?[t]:[]},Oc=function(t){return t=An(t)[0]||xr("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return An(e,n.querySelectorAll?n:n===t?xr("Invalid scope")||_l.createElement("div"):t)}},hd=function(t){return t.sort(function(){return .5-Math.random()})},ud=function(t){if(we(t))return t;var e=Hn(t)?t:{each:t},n=Ki(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,c=isNaN(i)||a,l=e.axis,h=i,u=i;return Be(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&c&&(h=i[0],u=i[1]),function(d,p,g){var _=(g||e).length,m=o[_],f,S,E,v,T,R,b,P,x;if(!m){if(x=e.grid==="auto"?0:(e.grid||[1,bn])[1],!x){for(b=-bn;b<(b=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(m=o[_]=[],f=c?Math.min(x,_)*h-.5:i%x,S=x===bn?0:c?_*u/x-.5:i/x|0,b=0,P=bn,R=0;R<_;R++)E=R%x-f,v=S-(R/x|0),m[R]=T=l?Math.abs(l==="y"?v:E):Yu(E*E+v*v),T>b&&(b=T),T<P&&(P=T);i==="random"&&hd(m),m.max=b-P,m.min=P,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(x>_?_-1:l?l==="y"?_/x:x:Math.max(x,_/x))||0)*(i==="edges"?-1:1),m.b=_<0?r-_:r,m.u=Ve(e.amount||e.each)||0,n=n&&_<0?Ax(n):n}return _=(m[d]-m.min)/m.max||0,ve(m.b+(n?n(_):_)*m.v)+m.u}},Fc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=ve(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(si(n)?0:Ve(n))}},dd=function(t,e){var n=He(t),i,r;return!n&&Hn(t)&&(i=n=t.radius||bn,t.values?(t=An(t.values),(r=!si(t[0]))&&(i*=i)):t=Fc(t.increment)),Ai(e,n?we(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),c=parseFloat(r?o.y:0),l=bn,h=0,u=t.length,d,p;u--;)r?(d=t[u].x-a,p=t[u].y-c,d=d*d+p*p):d=Math.abs(t[u]-a),d<l&&(l=d,h=u);return h=!i||l<=i?t[h]:o,r||h===o||si(o)?h:h+Ve(o)}:Fc(t))},fd=function(t,e,n,i){return Ai(He(t)?!e:n===!0?!!(n=0):!i,function(){return He(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},mx=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},_x=function(t,e){return function(n){return t(parseFloat(n))+(e||Ve(n))}},gx=function(t,e,n){return md(t,e,0,1,n)},pd=function(t,e,n){return Ai(n,function(i){return t[~~e(i)]})},vx=function s(t,e,n){var i=e-t;return He(t)?pd(t,s(0,t.length),e):Ai(n,function(r){return(i+(r-t)%i)%i+t})},xx=function s(t,e,n){var i=e-t,r=i*2;return He(t)?pd(t,s(0,t.length-1),e):Ai(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},Mr=function(t){return t.replace(Jv,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(Qv);return fd(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},md=function(t,e,n,i,r){var o=e-t,a=i-n;return Ai(r,function(c){return n+((c-t)/o*a||0)})},yx=function s(t,e,n,i){var r=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!r){var o=Be(t),a={},c,l,h,u,d;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(He(t)&&!He(e)){for(h=[],u=t.length,d=u-2,l=1;l<u;l++)h.push(s(t[l-1],t[l]));u--,r=function(g){g*=u;var _=Math.min(d,~~g);return h[_](g-_)},n=e}else i||(t=Bs(He(t)?[]:{},t));if(!h){for(c in e)Sl.call(a,t,c,"get",e[c]);r=function(g){return bl(g,a)||(o?t.p:t)}}}return Ai(n,r)},$h=function(t,e,n){var i=t.labels,r=bn,o,a,c;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(c=o,r=a);return c},mn=function(t,e,n){var i=t.vars,r=i[e],o=pe,a=t._ctx,c,l,h;if(r)return c=i[e+"Params"],l=i.callbackScope||t,n&&xi.length&&Co(),a&&(pe=a),h=c?r.apply(l,c):r.call(l),pe=o,h},rr=function(t){return Ei(t),t.scrollTrigger&&t.scrollTrigger.kill(!!ze),t.progress()<1&&mn(t,"onInterrupt"),t},Es,_d=[],gd=function(t){if(t)if(t=!t.name&&t.default||t,ml()||t.headless){var e=t.name,n=we(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:yr,render:bl,add:Sl,kill:Fx,modifier:Ox,rawVars:0},o={targetTest:0,get:0,getSetter:Tl,aliases:{},register:0};if(Gs(),t!==i){if(dn[e])return;yn(i,yn(Po(t,r),o)),Bs(i.prototype,Bs(r,Po(t,o))),dn[i.prop=e]=i,t.targetTest&&(xo.push(i),vl[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Qu(e,i),t.register&&t.register(an,i,rn)}else _d.push(t)},re=255,or={aqua:[0,re,re],lime:[0,re,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,re],navy:[0,0,128],white:[re,re,re],olive:[128,128,0],yellow:[re,re,0],orange:[re,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[re,0,0],pink:[re,192,203],cyan:[0,re,re],transparent:[re,re,re,0]},Pa=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*re+.5|0},vd=function(t,e,n){var i=t?si(t)?[t>>16,t>>8&re,t&re]:0:or.black,r,o,a,c,l,h,u,d,p,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),or[t])i=or[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&re,i&re,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&re,t&re]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(qh),!e)c=+i[0]%360/360,l=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(l+1):h+l-h*l,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=Pa(c+1/3,r,o),i[1]=Pa(c,r,o),i[2]=Pa(c-1/3,r,o);else if(~t.indexOf("="))return i=t.match(ju),n&&i.length<4&&(i[3]=1),i}else i=t.match(qh)||or.transparent;i=i.map(Number)}return e&&!g&&(r=i[0]/re,o=i[1]/re,a=i[2]/re,u=Math.max(r,o,a),d=Math.min(r,o,a),h=(u+d)/2,u===d?c=l=0:(p=u-d,l=h>.5?p/(2-u-d):p/(u+d),c=u===r?(o-a)/p+(o<a?6:0):u===o?(a-r)/p+2:(r-o)/p+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},xd=function(t){var e=[],n=[],i=-1;return t.split(yi).forEach(function(r){var o=r.match(Ss)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Jh=function(t,e,n){var i="",r=(t+i).match(yi),o=e?"hsla(":"rgba(",a=0,c,l,h,u;if(!r)return t;if(r=r.map(function(d){return(d=vd(d,e,1))&&o+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=xd(t),c=n.c,c.join(i)!==h.c.join(i)))for(l=t.replace(yi,"1").split(Ss),u=l.length-1;a<u;a++)i+=l[a]+(~c.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!l)for(l=t.split(yi),u=l.length-1;a<u;a++)i+=l[a]+r[a];return i+l[u]},yi=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in or)s+="|"+t+"\\b";return new RegExp(s+")","gi")})(),Mx=/hsl[a]?\(/,yd=function(t){var e=t.join(" "),n;if(yi.lastIndex=0,yi.test(e))return n=Mx.test(e),t[1]=Jh(t[1],n),t[0]=Jh(t[0],n,xd(t[1])),!0},Sr,pn=(function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],c,l,h,u,d,p,g=function _(m){var f=s()-i,S=m===!0,E,v,T,R;if((f>t||f<0)&&(n+=f-e),i+=f,T=i-n,E=T-o,(E>0||S)&&(R=++u.frame,d=T-u.time*1e3,u.time=T=T/1e3,o+=E+(E>=r?4:r-E),v=1),S||(c=l(_)),v)for(p=0;p<a.length;p++)a[p](T,d,R,m)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){$u&&(!Dc&&ml()&&(Fn=Dc=window,_l=Fn.document||{},xn.gsap=an,(Fn.gsapVersions||(Fn.gsapVersions=[])).push(an.version),Ju(Ro||Fn.GreenSockGlobals||!Fn.gsap&&Fn||{}),_d.forEach(gd)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&u.sleep(),l=h||function(m){return setTimeout(m,o-u.time*1e3+1|0)},Sr=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(c),Sr=0,l=yr},lagSmoothing:function(m,f){t=m||1/0,e=Math.min(f||33,t)},fps:function(m){r=1e3/(m||240),o=u.time*1e3+r},add:function(m,f,S){var E=f?function(v,T,R,b){m(v,T,R,b),u.remove(E)}:m;return u.remove(m),a[S?"unshift":"push"](E),Gs(),E},remove:function(m,f){~(f=a.indexOf(m))&&a.splice(f,1)&&p>=f&&p--},_listeners:a},u})(),Gs=function(){return!Sr&&pn.wake()},Xt={},Sx=/^[\d.\-M][\d.\-,\s]/,Ex=/["']/g,wx=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,c,l;r<o;r++)c=n[r],a=r!==o-1?c.lastIndexOf(","):c.length,l=c.substr(0,a),e[i]=isNaN(l)?l.replace(Ex,"").trim():+l,i=c.substr(a+1).trim();return e},Tx=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},bx=function(t){var e=(t+"").split("("),n=Xt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[wx(e[1])]:Tx(t).split(",").map(id)):Xt._CE&&Sx.test(t)?Xt._CE("",t):n},Ax=function(t){return function(e){return 1-t(1-e)}},Ki=function(t,e){return t&&(we(t)?t:Xt[t]||bx(t))||e},es=function(t,e,n,i){n===void 0&&(n=function(c){return 1-e(1-c)}),i===void 0&&(i=function(c){return c<.5?e(c*2)/2:1-e((1-c)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return sn(t,function(a){Xt[a]=xn[a]=r,Xt[o=a.toLowerCase()]=n;for(var c in r)Xt[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Xt[a+"."+c]=r[c]}),r},Md=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Da=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/Pc*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*$v((h-o)*r)+1},c=t==="out"?a:t==="in"?function(l){return 1-a(1-l)}:Md(a);return r=Pc/r,c.config=function(l,h){return s(t,l,h)},c},La=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:Md(n);return i.config=function(r){return s(t,r)},i};sn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;es(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Xt.Linear.easeNone=Xt.none=Xt.Linear.easeIn;es("Elastic",Da("in"),Da("out"),Da());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};es("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);es("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});es("Circ",function(s){return-(Yu(1-s*s)-1)});es("Sine",function(s){return s===1?1:-Zv(s*Kv)+1});es("Back",La("in"),La("out"),La());Xt.SteppedEase=Xt.steps=xn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-oe;return function(a){return((i*Lr(0,o,a)|0)+r)*n}}};vr.ease=Xt["quad.out"];sn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return xl+=s+","+s+"Params,"});var Sd=function(t,e){this.id=jv++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:ed,this.set=e?e.getSetter:Tl},Er=(function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,ks(this,+e.duration,1,1),this.data=e.data,pe&&(this._ctx=pe,pe.data.push(this)),Sr||pn.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,ks(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Gs(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Xo(this,n),!r._dp||r.parent||od(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&zn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===oe||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),nd(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+jh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+jh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?zs(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-oe?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Do(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-oe?0:this._rts,this.totalTime(Lr(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),Wo(this),ax(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Gs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==oe&&(this._tTime-=oe)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=ve(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&zn(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(nn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Do(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=ix);var i=ze;return ze=n,Ml(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),ze=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Zh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Zh(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(wn(this,n),nn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,nn(i)),this._dur||(this._zTime=-oe),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-oe:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-oe,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-oe)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,r=i._prom;return new Promise(function(o){var a=we(n)?n:sd,c=function(){var h=i.then;i.then=null,r&&r(),we(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?c():i._prom=c})},t.kill=function(){rr(this)},s})();yn(Er.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-oe,_prom:0,_ps:!1,_rts:1});var Je=(function(s){qu(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=nn(n.sortChildren),xe&&zn(n.parent||xe,Jn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&ad(Jn(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return ur(0,arguments,this),this},e.from=function(i,r,o){return ur(1,arguments,this),this},e.fromTo=function(i,r,o,a){return ur(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,hr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new De(i,r,wn(this,o),1),this},e.call=function(i,r,o){return zn(this,De.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,c,l,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=l,o.onCompleteParams=h,o.parent=this,new De(i,o,wn(this,c)),this},e.staggerFrom=function(i,r,o,a,c,l,h){return o.runBackwards=1,hr(o).immediateRender=nn(o.immediateRender),this.staggerTo(i,r,o,a,c,l,h)},e.staggerFromTo=function(i,r,o,a,c,l,h,u){return a.startAt=o,hr(a).immediateRender=nn(a.immediateRender),this.staggerTo(i,r,a,c,l,h,u)},e.render=function(i,r,o){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,h=i<=0?0:ve(i),u=this._zTime<0!=i<0&&(this._initted||!l),d,p,g,_,m,f,S,E,v,T,R,b;if(this!==xe&&h>c&&i>=0&&(h=c),h!==this._tTime||o||u){if(a!==this._time&&l&&(h+=this._time-a,i+=this._time-a),d=h,v=this._start,E=this._ts,f=!E,u&&(l||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(R=this._yoyo,m=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(d=ve(h%m),h===c?(_=this._repeat,d=l):(T=ve(h/m),_=~~T,_&&_===T&&(d=l,_--),d>l&&(d=l)),T=zs(this._tTime,m),!a&&this._tTime&&T!==_&&this._tTime-T*m-this._dur<=0&&(T=_),R&&_&1&&(d=l-d,b=1),_!==T&&!this._lock){var P=R&&T&1,x=P===(R&&_&1);if(_<T&&(P=!P),a=P?0:h%l?l:h,this._lock=1,this.render(a||(b?0:ve(_*m)),r,!l)._lock=0,this._tTime=h,!r&&this.parent&&mn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,T=_),a&&a!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,x&&(this._lock=2,a=P?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!f)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=ux(this,ve(a),ve(d)),S&&(h-=d-(d=S._start))),this._tTime=h,this._time=d,this._act=!!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&l&&!r&&!T&&(mn(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(p=this._first;p;){if(g=p._next,(p._act||d>=p._start)&&p._ts&&S!==p){if(p.parent!==this)return this.render(i,r,o);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,r,o),d!==this._time||!this._ts&&!f){S=0,g&&(h+=this._zTime=-oe);break}}p=g}else{p=this._last;for(var M=i<0?i:d;p;){if(g=p._prev,(p._act||M<=p._end)&&p._ts&&S!==p){if(p.parent!==this)return this.render(i,r,o);if(p.render(p._ts>0?(M-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(M-p._start)*p._ts,r,o||ze&&Ml(p)),d!==this._time||!this._ts&&!f){S=0,g&&(h+=this._zTime=M?-oe:oe);break}}p=g}}if(S&&!r&&(this.pause(),S.render(d>=a?0:-oe)._zTime=d>=a?1:-1,this._ts))return this._start=v,Wo(this),this.render(i,r,o);this._onUpdate&&!r&&mn(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&a)&&(v===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(h===c&&this._ts>0||!h&&this._ts<0)&&Ei(this,1),!r&&!(i<0&&!a)&&(h||a||!c)&&(mn(this,h===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(si(r)||(r=wn(this,r,i)),!(i instanceof Er)){if(He(i))return i.forEach(function(a){return o.add(a,r)}),this;if(Be(i))return this.addLabel(i,r);if(we(i))i=De.delayedCall(0,i);else return this}return this!==i?zn(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-bn);for(var c=[],l=this._first;l;)l._start>=a&&(l instanceof De?r&&c.push(l):(o&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,r,o)))),l=l._next;return c},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return Be(i)?this.removeLabel(i):we(i)?this.killTweensOf(i):(i.parent===this&&Ho(this,i),i===this._recent&&(this._recent=this._last),Yi(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ve(pn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=wn(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=De.delayedCall(0,r||yr,o);return a.data="isPause",this._hasPause=1,zn(this,a,wn(this,i))},e.removePause=function(i){var r=this._first;for(i=wn(this,i);r;)r._start===i&&r.data==="isPause"&&Ei(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),c=a.length;c--;)pi!==a[c]&&a[c].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=An(i),c=this._first,l=si(r),h;c;)c instanceof De?sx(c._targets,a)&&(l?(!pi||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&o.push(c):(h=c.getTweensOf(a,r)).length&&o.push.apply(o,h),c=c._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=wn(o,i),c=r,l=c.startAt,h=c.onStart,u=c.onStartParams,d=c.immediateRender,p,g=De.to(o,yn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale())||oe,onStart:function(){if(o.pause(),!p){var m=r.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale());g._dur!==m&&ks(g,m,0,1).render(g._time,!0,!0),p=1}h&&h.apply(g,u||[])}},r));return d?g.render(0):g},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,yn({startAt:{time:wn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),$h(this,wn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),$h(this,wn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+oe)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);var a=this._first,c=this.labels,l;for(i=ve(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(l in c)c[l]>=o&&(c[l]+=i);return Yi(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Yi(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,c=bn,l,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>c&&o._sort&&a._ts&&!o._lock?(o._lock=1,zn(o,a,h-a._delay,1)._lock=0):c=h,h<0&&a._ts&&(r-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=ve(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),c=0),a._end>r&&a._ts&&(r=a._end),a=l;ks(o,o===xe&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(xe._ts&&(nd(xe,Do(i,xe)),td=pn.frame),pn.frame>=Yh){Yh+=gn.autoSleep||120;var r=xe._first;if((!r||!r._ts)&&gn.autoSleep&&pn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||pn.sleep()}}},t})(Er);yn(Je.prototype,{_lock:0,_hasPause:0,_forcing:0});var Rx=function(t,e,n,i,r,o,a){var c=new rn(this._pt,t,e,0,1,Rd,null,r),l=0,h=0,u,d,p,g,_,m,f,S;for(c.b=n,c.e=i,n+="",i+="",(f=~i.indexOf("random("))&&(i=Mr(i)),o&&(S=[n,i],o(S,t,e),n=S[0],i=S[1]),d=n.match(Ra)||[];u=Ra.exec(i);)g=u[0],_=i.substring(l,u.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),g!==d[h++]&&(m=parseFloat(d[h-1])||0,c._pt={_next:c._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?Rs(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},l=Ra.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=a,(Zu.test(i)||f)&&(c.e=0),this._pt=c,c},Sl=function(t,e,n,i,r,o,a,c,l,h){we(i)&&(i=i(r||0,t,o));var u=t[e],d=n!=="get"?n:we(u)?l?t[e.indexOf("set")||!we(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():u,p=we(u)?l?Ix:bd:wl,g;if(Be(i)&&(~i.indexOf("random(")&&(i=Mr(i)),i.charAt(1)==="="&&(g=Rs(d,i)+(Ve(d)||0),(g||g===0)&&(i=g))),!h||d!==i||Bc)return!isNaN(d*i)&&i!==""?(g=new rn(this._pt,t,e,+d||0,i-(d||0),typeof u=="boolean"?Nx:Ad,0,p),l&&(g.fp=l),a&&g.modifier(a,this,t),this._pt=g):(!u&&!(e in t)&&gl(e,i),Rx.call(this,t,e,d,i,p,c||gn.stringFilter,l))},Cx=function(t,e,n,i,r){if(we(t)&&(t=dr(t,r,e,n,i)),!Hn(t)||t.style&&t.nodeType||He(t)||Ku(t))return Be(t)?dr(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=dr(t[a],r,e,n,i);return o},Ed=function(t,e,n,i,r,o){var a,c,l,h;if(dn[t]&&(a=new dn[t]).init(r,a.rawVars?e[t]:Cx(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=c=new rn(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==Es))for(l=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)l[a._props[h]]=c;return a},pi,Bc,El=function s(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,a=i.immediateRender,c=i.lazy,l=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,p=i.autoRevert,g=t._dur,_=t._startAt,m=t._targets,f=t.parent,S=f&&f.data==="nested"?f.vars.targets:m,E=t._overwrite==="auto"&&!fl,v=t.timeline,T=i.easeReverse||u,R,b,P,x,M,D,F,O,V,W,H,Y,G;if(v&&(!d||!r)&&(r="none"),t._ease=Ki(r,vr.ease),t._rEase=T&&(Ki(T)||t._ease),t._from=!v&&!!i.runBackwards,t._from&&(t.ratio=1),!v||d&&!i.stagger){if(O=m[0]?qi(m[0]).harness:0,Y=O&&i[O.prop],R=Po(i,vl),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!p?_.render(-1,!0):_.revert(h&&g?vo:nx),_._lazy=0),o){if(Ei(t._startAt=De.set(m,yn({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!_&&nn(c),startAt:null,delay:0,onUpdate:l&&function(){return mn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(ze||!a&&!p)&&t._startAt.revert(vo),a&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(a=!1),P=yn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&nn(c),immediateRender:a,stagger:0,parent:f},R),Y&&(P[O.prop]=Y),Ei(t._startAt=De.set(m,P)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(ze?t._startAt.revert(vo):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,oe,oe);else if(!e)return}for(t._pt=t._ptCache=0,c=g&&nn(c)||c&&!g,b=0;b<m.length;b++){if(M=m[b],F=M._gsap||yl(m)[b]._gsap,t._ptLookup[b]=W={},Lc[F.id]&&xi.length&&Co(),H=S===m?b:S.indexOf(M),O&&(V=new O).init(M,Y||R,t,H,S)!==!1&&(t._pt=x=new rn(t._pt,M,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(nt){W[nt]=x}),V.priority&&(D=1)),!O||Y)for(P in R)dn[P]&&(V=Ed(P,R,t,H,M,S))?V.priority&&(D=1):W[P]=x=Sl.call(t,M,P,"get",R[P],H,S,0,i.stringFilter);t._op&&t._op[b]&&t.kill(M,t._op[b]),E&&t._pt&&(pi=t,xe.killTweensOf(M,W,t.globalTime(e)),G=!t.parent,pi=0),t._pt&&c&&(Lc[F.id]=1)}D&&Cd(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!G,d&&e<=0&&v.render(bn,!0,!0)},Px=function(t,e,n,i,r,o,a,c){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,d,p;if(!l)for(l=t._ptCache[e]=[],d=t._ptLookup,p=t._targets.length;p--;){if(h=d[p][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Bc=1,t.vars[e]="+=0",El(t,a),Bc=0,c?xr(e+" not eligible for reset. Try splitting into individual properties"):1;l.push(h)}for(p=l.length;p--;)u=l[p],h=u._pt||u,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=Te(n)+Ve(u.e)),u.b&&(u.b=h.s+Ve(u.b))},Dx=function(t,e){var n=t[0]?qi(t[0]).harness:0,i=n&&n.aliases,r,o,a,c;if(!i)return e;r=Bs({},e);for(o in i)if(o in r)for(c=i[o].split(","),a=c.length;a--;)r[c[a]]=r[o];return r},Lx=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(He(e))a=n[t]||(n[t]=[]),e.forEach(function(c,l){return a.push({t:l/(e.length-1)*100,v:c,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},dr=function(t,e,n,i,r){return we(t)?t.call(e,n,i,r):Be(t)&&~t.indexOf("random(")?Mr(t):t},wd=xl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Td={};sn(wd+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Td[s]=1});var De=(function(s){qu(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:hr(i))||this;var c=a.vars,l=c.duration,h=c.delay,u=c.immediateRender,d=c.stagger,p=c.overwrite,g=c.keyframes,_=c.defaults,m=c.scrollTrigger,f=i.parent||xe,S=(He(n)||Ku(n)?si(n[0]):"length"in i)?[n]:An(n),E,v,T,R,b,P,x,M;if(a._targets=S.length?yl(S):xr("GSAP target "+n+" not found. https://gsap.com",!gn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,g||d||ho(l)||ho(h)){i=a.vars;var D=i.easeReverse||i.yoyoEase;if(E=a.timeline=new Je({data:"nested",defaults:_||{},targets:f&&f.data==="nested"?f.vars.targets:S}),E.kill(),E.parent=E._dp=Jn(a),E._start=0,d||ho(l)||ho(h)){if(R=S.length,x=d&&ud(d),Hn(d))for(b in d)~wd.indexOf(b)&&(M||(M={}),M[b]=d[b]);for(v=0;v<R;v++)T=Po(i,Td),T.stagger=0,D&&(T.easeReverse=D),M&&Bs(T,M),P=S[v],T.duration=+dr(l,Jn(a),v,P,S),T.delay=(+dr(h,Jn(a),v,P,S)||0)-a._delay,!d&&R===1&&T.delay&&(a._delay=h=T.delay,a._start+=h,T.delay=0),E.to(P,T,x?x(v,P,S):0),E._ease=Xt.none;E.duration()?l=h=0:a.timeline=0}else if(g){hr(yn(E.vars.defaults,{ease:"none"})),E._ease=Ki(g.ease||i.ease||"none");var F=0,O,V,W;if(He(g))g.forEach(function(H){return E.to(S,H,">")}),E.duration();else{T={};for(b in g)b==="ease"||b==="easeEach"||Lx(b,g[b],T,g.easeEach);for(b in T)for(O=T[b].sort(function(H,Y){return H.t-Y.t}),F=0,v=0;v<O.length;v++)V=O[v],W={ease:V.e,duration:(V.t-(v?O[v-1].t:0))/100*l},W[b]=V.v,E.to(S,W,F),F+=W.duration;E.duration()<l&&E.to({},{duration:l-E.duration()})}}l||a.duration(l=E.duration())}else a.timeline=0;return p===!0&&!fl&&(pi=Jn(a),xe.killTweensOf(S),pi=0),zn(f,Jn(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!l&&!g&&a._start===ve(f._time)&&nn(u)&&cx(Jn(a))&&f.data!=="nested")&&(a._tTime=-oe,a.render(Math.max(0,-h)||0)),m&&ad(Jn(a),m),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,c=this._tDur,l=this._dur,h=i<0,u=i>c-oe&&!h?c:i<oe?0:i,d,p,g,_,m,f,S,E;if(!l)hx(this,i,r,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,E=this.timeline,this._repeat){if(_=l+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,r,o);if(d=ve(u%_),u===c?(g=this._repeat,d=l):(m=ve(u/_),g=~~m,g&&g===m?(d=l,g--):d>l&&(d=l)),f=this._yoyo&&g&1,f&&(d=l-d),m=zs(this._tTime,_),d===a&&!o&&this._initted&&g===m)return this._tTime=u,this;g!==m&&this.vars.repeatRefresh&&!f&&!this._lock&&d!==_&&this._initted&&(this._lock=o=1,this.render(ve(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(cd(this,h?i:d,o,r,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(l!==this._dur)return this.render(i,r,o)}if(this._rEase){var v=d<a;if(v!==this._inv){var T=v?a:l-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=T?(v?-1:1)/T:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(d/l);if(this._from&&(this.ratio=S=1-S),this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&u&&!r&&!m&&(mn(this,"onStart"),this._tTime!==u))return this;for(p=this._pt;p;)p.r(S,p.d),p=p._next;E&&E.render(i<0?i:E._dur*E._ease(d/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&Ic(this,i,r,o),mn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&mn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Ic(this,i,!0,!0),(i||!l)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Ei(this,1),!r&&!(h&&!a)&&(u||a||f)&&(mn(this,u===c?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,a,c){Sr||pn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||El(this,l),h=this._ease(l/this._dur),Px(this,i,r,o,a,h,l,c)?this.resetTo(i,r,o,a,1):(Xo(this,0),this.parent||rd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?rr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ze),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,pi&&pi.vars.overwrite!==!0)._first||rr(this),this.parent&&o!==this.timeline.totalDuration()&&ks(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,c=i?An(i):a,l=this._ptLookup,h=this._pt,u,d,p,g,_,m,f;if((!r||r==="all")&&ox(a,c))return r==="all"&&(this._pt=0),rr(this);for(u=this._op=this._op||[],r!=="all"&&(Be(r)&&(_={},sn(r,function(S){return _[S]=1}),r=_),r=Dx(a,r)),f=a.length;f--;)if(~c.indexOf(a[f])){d=l[f],r==="all"?(u[f]=r,g=d,p={}):(p=u[f]=u[f]||{},g=r);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Ho(this,m,"_pt"),delete d[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&h&&rr(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return ur(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return ur(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return xe.killTweensOf(i,r,o)},t})(Er);yn(De.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});sn("staggerTo,staggerFrom,staggerFromTo",function(s){De[s]=function(){var t=new Je,e=Nc.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var wl=function(t,e,n){return t[e]=n},bd=function(t,e,n){return t[e](n)},Ix=function(t,e,n,i){return t[e](i.fp,n)},Ux=function(t,e,n){return t.setAttribute(e,n)},Tl=function(t,e){return we(t[e])?bd:pl(t[e])&&t.setAttribute?Ux:wl},Ad=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Nx=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Rd=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},bl=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Ox=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},Fx=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Ho(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Bx=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Cd=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},rn=(function(){function s(e,n,i,r,o,a,c,l,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||Ad,this.d=c||this,this.set=l||wl,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=Bx,this.m=n,this.mt=r,this.tween=i},s})();sn(xl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return vl[s]=1});xn.TweenMax=xn.TweenLite=De;xn.TimelineLite=xn.TimelineMax=Je;xe=new Je({sortChildren:!1,defaults:vr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});gn.stringFilter=yd;var ji=[],yo={},zx=[],Qh=0,kx=0,Ia=function(t){return(yo[t]||zx).map(function(e){return e()})},zc=function(){var t=Date.now(),e=[];t-Qh>2&&(Ia("matchMediaInit"),ji.forEach(function(n){var i=n.queries,r=n.conditions,o,a,c,l;for(a in i)o=Fn.matchMedia(i[a]).matches,o&&(c=1),o!==r[a]&&(r[a]=o,l=1);l&&(n.revert(),c&&e.push(n))}),Ia("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Qh=t,Ia("matchMedia"))},Pd=(function(){function s(e,n){this.selector=n&&Oc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=kx++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){we(n)&&(r=i,i=n,n=we);var o=this,a=function(){var l=pe,h=o.selector,u;return l&&l!==o&&l.data.push(o),r&&(o.selector=Oc(r)),pe=o,u=i.apply(o,arguments),we(u)&&o._r.push(u),pe=l,o.selector=h,o.isReverted=!1,u};return o.last=a,n===we?a(o,function(c){return o.add(null,c)}):n?o[n]=a:a},t.ignore=function(n){var i=pe;pe=null,n(this),pe=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof De&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?(function(){for(var a=r.getTweens(),c=r.data.length,l;c--;)l=r.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),c=r.data.length;c--;)l=r.data[c],l instanceof Je?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof De)&&l.revert&&l.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=ji.length;o--;)ji[o].id===this.id&&ji.splice(o,1)},t.revert=function(n){this.kill(n||{})},s})(),Gx=(function(){function s(e){this.contexts=[],this.scope=e,pe&&pe.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){Hn(n)||(n={matches:n});var o=new Pd(0,r||this.scope),a=o.conditions={},c,l,h;pe&&!o.selector&&(o.selector=pe.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(l in n)l==="all"?h=1:(c=Fn.matchMedia(n[l]),c&&(ji.indexOf(o)<0&&ji.push(o),(a[l]=c.matches)&&(h=1),c.addListener?c.addListener(zc):c.addEventListener("change",zc)));return h&&i(o,function(u){return o.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),Lo={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return gd(i)})},timeline:function(t){return new Je(t)},getTweensOf:function(t,e){return xe.getTweensOf(t,e)},getProperty:function(t,e,n,i){Be(t)&&(t=An(t)[0]);var r=qi(t||{}).get,o=n?sd:id;return n==="native"&&(n=""),t&&(e?o((dn[e]&&dn[e].get||r)(t,e,n,i)):function(a,c,l){return o((dn[a]&&dn[a].get||r)(t,a,c,l))})},quickSetter:function(t,e,n){if(t=An(t),t.length>1){var i=t.map(function(h){return an.quickSetter(h,e,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}t=t[0]||{};var o=dn[e],a=qi(t),c=a.harness&&(a.harness.aliases||{})[e]||e,l=o?function(h){var u=new o;Es._pt=0,u.init(t,n?h+n:h,Es,0,[t]),u.render(1,u),Es._pt&&bl(1,Es)}:a.set(t,c);return o?l:function(h){return l(t,c,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,r=an.to(t,yn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(c,l,h){return r.resetTo(e,c,l,h)};return o.tween=r,o},isTweening:function(t){return xe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ki(t.ease,vr.ease)),Kh(vr,t||{})},config:function(t){return Kh(gn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!dn[a]&&!xn[a]&&xr(e+" effect requires "+a+" plugin.")}),Ca[e]=function(a,c,l){return n(An(a),yn(c||{},r),l)},o&&(Je.prototype[e]=function(a,c,l){return this.add(Ca[e](a,Hn(c)?c:(l=c)&&{},this),l)})},registerEase:function(t,e){Xt[t]=Ki(e)},parseEase:function(t,e){return arguments.length?Ki(t,e):Xt},getById:function(t){return xe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Je(t),i,r;for(n.smoothChildTiming=nn(t.smoothChildTiming),xe.remove(n),n._dp=0,n._time=n._tTime=xe._time,i=xe._first;i;)r=i._next,(e||!(!i._dur&&i instanceof De&&i.vars.onComplete===i._targets[0]))&&zn(n,i,i._start-i._delay),i=r;return zn(xe,n,0),n},context:function(t,e){return t?new Pd(t,e):pe},matchMedia:function(t){return new Gx(t)},matchMediaRefresh:function(){return ji.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||zc()},addEventListener:function(t,e){var n=yo[t]||(yo[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=yo[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:vx,wrapYoyo:xx,distribute:ud,random:fd,snap:dd,normalize:gx,getUnit:Ve,clamp:fx,splitColor:vd,toArray:An,selector:Oc,mapRange:md,pipe:mx,unitize:_x,interpolate:yx,shuffle:hd},install:Ju,effects:Ca,ticker:pn,updateRoot:Je.updateRoot,plugins:dn,globalTimeline:xe,core:{PropTween:rn,globals:Qu,Tween:De,Timeline:Je,Animation:Er,getCache:qi,_removeLinkedListItem:Ho,reverting:function(){return ze},context:function(t){return t&&pe&&(pe.data.push(t),t._ctx=pe),pe},suppressOverwrites:function(t){return fl=t}}};sn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Lo[s]=De[s]});pn.add(Je.updateRoot);Es=Lo.to({},{duration:0});var Vx=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Hx=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=Vx(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},Ua=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var c,l;if(Be(r)&&(c={},sn(r,function(h){return c[h]=1}),r=c),e){c={};for(l in r)c[l]=e(r[l]);r=c}Hx(a,r)}}}},an=Lo.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,c;this.tween=n;for(o in e)c=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(c||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=c,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)ze?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Ua("roundProps",Fc),Ua("modifiers"),Ua("snap",dd))||Lo;De.version=Je.version=an.version="3.15.0";$u=1;ml()&&Gs();Xt.Power0;Xt.Power1;Xt.Power2;Xt.Power3;Xt.Power4;Xt.Linear;Xt.Quad;Xt.Cubic;Xt.Quart;Xt.Quint;Xt.Strong;Xt.Elastic;Xt.Back;Xt.SteppedEase;Xt.Bounce;Xt.Sine;Xt.Expo;Xt.Circ;var tu,mi,Cs,Al,Xi,eu,Rl,Wx=function(){return typeof window<"u"},ri={},ki=180/Math.PI,Ps=Math.PI/180,vs=Math.atan2,nu=1e8,Cl=/([A-Z])/g,Xx=/(left|right|width|margin|padding|x)/i,qx=/[\s,\(]\S/,Gn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},kc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Yx=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Kx=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},jx=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Zx=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Dd=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Ld=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},$x=function(t,e,n){return t.style[e]=n},Jx=function(t,e,n){return t.style.setProperty(e,n)},Qx=function(t,e,n){return t._gsap[e]=n},ty=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},ey=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},ny=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},ye="transform",on=ye+"Origin",iy=function s(t,e){var n=this,i=this.target,r=i.style,o=i._gsap;if(t in ri&&r){if(this.tfm=this.tfm||{},t!=="transform")t=Gn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Qn(i,a)}):this.tfm[t]=o.x?o[t]:Qn(i,t),t===on&&(this.tfm.zOrigin=o.zOrigin);else return Gn.transform.split(",").forEach(function(a){return s.call(n,a,e)});if(this.props.indexOf(ye)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(on,e,"")),t=ye}(r||e)&&this.props.push(t,e,r[t])},Id=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},sy=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(Cl,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Rl(),(!r||!r.isStart)&&!n[ye]&&(Id(n),i.zOrigin&&n[on]&&(n[on]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Ud=function(t,e){var n={target:t,props:[],revert:sy,save:iy};return t._gsap||an.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Nd,Gc=function(t,e){var n=mi.createElementNS?mi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):mi.createElement(t);return n&&n.style?n:mi.createElement(t)},_n=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Cl,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,Vs(e)||e,1)||""},iu="O,Moz,ms,Ms,Webkit".split(","),Vs=function(t,e,n){var i=e||Xi,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(iu[o]+t in r););return o<0?null:(o===3?"ms":o>=0?iu[o]:"")+t},Vc=function(){Wx()&&window.document&&(tu=window,mi=tu.document,Cs=mi.documentElement,Xi=Gc("div")||{style:{}},Gc("div"),ye=Vs(ye),on=ye+"Origin",Xi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Nd=!!Vs("perspective"),Rl=an.core.reverting,Al=1)},su=function(t){var e=t.ownerSVGElement,n=Gc("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),Cs.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),Cs.removeChild(n),r},ru=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Od=function(t){var e,n;try{e=t.getBBox()}catch{e=su(t),n=1}return e&&(e.width||e.height)||n||(e=su(t)),e&&!e.width&&!e.x&&!e.y?{x:+ru(t,["x","cx","x1"])||0,y:+ru(t,["y","cy","y1"])||0,width:0,height:0}:e},Fd=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Od(t))},wi=function(t,e){if(e){var n=t.style,i;e in ri&&e!==on&&(e=ye),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Cl,"-$1").toLowerCase())):n.removeAttribute(e)}},_i=function(t,e,n,i,r,o){var a=new rn(t._pt,e,n,0,1,o?Ld:Dd);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},ou={deg:1,rad:1,turn:1},ry={grid:1,flex:1},Ti=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Xi.style,c=Xx.test(e),l=t.tagName.toLowerCase()==="svg",h=(l?"client":"offset")+(c?"Width":"Height"),u=100,d=i==="px",p=i==="%",g,_,m,f;if(i===o||!r||ou[i]||ou[o])return r;if(o!=="px"&&!d&&(r=s(t,e,n,"px")),f=t.getCTM&&Fd(t),(p||o==="%")&&(ri[e]||~e.indexOf("adius")))return g=f?t.getBBox()[c?"width":"height"]:t[h],Te(p?r/g*u:r/100*g);if(a[c?"width":"height"]=u+(d?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!l?t:t.parentNode,f&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===mi||!_.appendChild)&&(_=mi.body),m=_._gsap,m&&p&&m.width&&c&&m.time===pn.time&&!m.uncache)return Te(r/m.width*u);if(p&&(e==="height"||e==="width")){var S=t.style[e];t.style[e]=u+i,g=t[h],S?t.style[e]=S:wi(t,e)}else(p||o==="%")&&!ry[_n(_,"display")]&&(a.position=_n(t,"position")),_===t&&(a.position="static"),_.appendChild(Xi),g=Xi[h],_.removeChild(Xi),a.position="absolute";return c&&p&&(m=qi(_),m.time=pn.time,m.width=_[h]),Te(d?g*r/u:g&&r?u/g*r:0)},Qn=function(t,e,n,i){var r;return Al||Vc(),e in Gn&&e!=="transform"&&(e=Gn[e],~e.indexOf(",")&&(e=e.split(",")[0])),ri[e]&&e!=="transform"?(r=Tr(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Uo(_n(t,on))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Io[e]&&Io[e](t,e,n)||_n(t,e)||ed(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Ti(t,e,r,n)+n:r},oy=function(t,e,n,i){if(!n||n==="none"){var r=Vs(e,t,1),o=r&&_n(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=_n(t,"borderTopColor"))}var a=new rn(this._pt,t.style,e,0,1,Rd),c=0,l=0,h,u,d,p,g,_,m,f,S,E,v,T;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=_n(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=_n(t,e)||i,_?t.style[e]=_:wi(t,e)),h=[n,i],yd(h),n=h[0],i=h[1],d=n.match(Ss)||[],T=i.match(Ss)||[],T.length){for(;u=Ss.exec(i);)m=u[0],S=i.substring(c,u.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),m!==(_=d[l++]||"")&&(p=parseFloat(_)||0,v=_.substr((p+"").length),m.charAt(1)==="="&&(m=Rs(p,m)+v),f=parseFloat(m),E=m.substr((f+"").length),c=Ss.lastIndex-E.length,E||(E=E||gn.units[e]||v,c===i.length&&(i+=E,a.e+=E)),v!==E&&(p=Ti(t,e,_,E)||0),a._pt={_next:a._pt,p:S||l===1?S:",",s:p,c:f-p,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=c<i.length?i.substring(c,i.length):""}else a.r=e==="display"&&i==="none"?Ld:Dd;return Zu.test(i)&&(a.e=0),this._pt=a,a},au={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ay=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=au[n]||n,e[1]=au[i]||i,e.join(" ")},cy=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,c,l;if(r==="all"||r===!0)i.cssText="",c=1;else for(r=r.split(","),l=r.length;--l>-1;)a=r[l],ri[a]&&(c=1,a=a==="transformOrigin"?on:ye),wi(n,a);c&&(wi(n,ye),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Tr(n,1),o.uncache=1,Id(i)))}},Io={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new rn(t._pt,e,n,0,0,cy);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},wr=[1,0,0,1,0,0],Bd={},zd=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},cu=function(t){var e=_n(t,ye);return zd(e)?wr:e.substr(7).match(ju).map(Te)},Pl=function(t,e){var n=t._gsap||qi(t),i=t.style,r=cu(t),o,a,c,l;return n.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?wr:r):(r===wr&&!t.offsetParent&&t!==Cs&&!n.svg&&(c=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(l=1,a=t.nextElementSibling,Cs.appendChild(t)),r=cu(t),c?i.display=c:wi(t,"display"),l&&(a?o.insertBefore(t,a):o?o.appendChild(t):Cs.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Hc=function(t,e,n,i,r,o){var a=t._gsap,c=r||Pl(t,!0),l=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,p=c[0],g=c[1],_=c[2],m=c[3],f=c[4],S=c[5],E=e.split(" "),v=parseFloat(E[0])||0,T=parseFloat(E[1])||0,R,b,P,x;n?c!==wr&&(b=p*m-g*_)&&(P=v*(m/b)+T*(-_/b)+(_*S-m*f)/b,x=v*(-g/b)+T*(p/b)-(p*S-g*f)/b,v=P,T=x):(R=Od(t),v=R.x+(~E[0].indexOf("%")?v/100*R.width:v),T=R.y+(~(E[1]||E[0]).indexOf("%")?T/100*R.height:T)),i||i!==!1&&a.smooth?(f=v-l,S=T-h,a.xOffset=u+(f*p+S*_)-f,a.yOffset=d+(f*g+S*m)-S):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=T,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[on]="0px 0px",o&&(_i(o,a,"xOrigin",l,v),_i(o,a,"yOrigin",h,T),_i(o,a,"xOffset",u,a.xOffset),_i(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+T)},Tr=function(t,e){var n=t._gsap||new Sd(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",c=getComputedStyle(t),l=_n(t,on)||"0",h,u,d,p,g,_,m,f,S,E,v,T,R,b,P,x,M,D,F,O,V,W,H,Y,G,nt,lt,gt,Lt,Jt,X,et;return h=u=d=_=m=f=S=E=v=0,p=g=1,n.svg=!!(t.getCTM&&Fd(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[ye]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[ye]!=="none"?c[ye]:"")),i.scale=i.rotate=i.translate="none"),b=Pl(t,n.svg),n.svg&&(n.uncache?(G=t.getBBox(),l=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",Y=""):Y=!e&&t.getAttribute("data-svg-origin"),Hc(t,Y||l,!!Y||n.originIsAbsolute,n.smooth!==!1,b)),T=n.xOrigin||0,R=n.yOrigin||0,b!==wr&&(D=b[0],F=b[1],O=b[2],V=b[3],h=W=b[4],u=H=b[5],b.length===6?(p=Math.sqrt(D*D+F*F),g=Math.sqrt(V*V+O*O),_=D||F?vs(F,D)*ki:0,S=O||V?vs(O,V)*ki+_:0,S&&(g*=Math.abs(Math.cos(S*Ps))),n.svg&&(h-=T-(T*D+R*O),u-=R-(T*F+R*V))):(et=b[6],Jt=b[7],lt=b[8],gt=b[9],Lt=b[10],X=b[11],h=b[12],u=b[13],d=b[14],P=vs(et,Lt),m=P*ki,P&&(x=Math.cos(-P),M=Math.sin(-P),Y=W*x+lt*M,G=H*x+gt*M,nt=et*x+Lt*M,lt=W*-M+lt*x,gt=H*-M+gt*x,Lt=et*-M+Lt*x,X=Jt*-M+X*x,W=Y,H=G,et=nt),P=vs(-O,Lt),f=P*ki,P&&(x=Math.cos(-P),M=Math.sin(-P),Y=D*x-lt*M,G=F*x-gt*M,nt=O*x-Lt*M,X=V*M+X*x,D=Y,F=G,O=nt),P=vs(F,D),_=P*ki,P&&(x=Math.cos(P),M=Math.sin(P),Y=D*x+F*M,G=W*x+H*M,F=F*x-D*M,H=H*x-W*M,D=Y,W=G),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,f=180-f),p=Te(Math.sqrt(D*D+F*F+O*O)),g=Te(Math.sqrt(H*H+et*et)),P=vs(W,H),S=Math.abs(P)>2e-4?P*ki:0,v=X?1/(X<0?-X:X):0),n.svg&&(Y=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!zd(_n(t,ye)),Y&&t.setAttribute("transform",Y))),Math.abs(S)>90&&Math.abs(S)<270&&(r?(p*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Te(p),n.scaleY=Te(g),n.rotation=Te(_)+a,n.rotationX=Te(m)+a,n.rotationY=Te(f)+a,n.skewX=S+a,n.skewY=E+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(l.split(" ")[2])||!e&&n.zOrigin||0)&&(i[on]=Uo(l)),n.xOffset=n.yOffset=0,n.force3D=gn.force3D,n.renderTransform=n.svg?hy:Nd?kd:ly,n.uncache=0,n},Uo=function(t){return(t=t.split(" "))[0]+" "+t[1]},Na=function(t,e,n){var i=Ve(e);return Te(parseFloat(e)+parseFloat(Ti(t,"x",n+"px",i)))+i},ly=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,kd(t,e)},Fi="0deg",er="0px",Bi=") ",kd=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,c=n.z,l=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,p=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,f=n.force3D,S=n.target,E=n.zOrigin,v="",T=f==="auto"&&t&&t!==1||f===!0;if(E&&(u!==Fi||h!==Fi)){var R=parseFloat(h)*Ps,b=Math.sin(R),P=Math.cos(R),x;R=parseFloat(u)*Ps,x=Math.cos(R),o=Na(S,o,b*x*-E),a=Na(S,a,-Math.sin(R)*-E),c=Na(S,c,P*x*-E+E)}m!==er&&(v+="perspective("+m+Bi),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(T||o!==er||a!==er||c!==er)&&(v+=c!==er||T?"translate3d("+o+", "+a+", "+c+") ":"translate("+o+", "+a+Bi),l!==Fi&&(v+="rotate("+l+Bi),h!==Fi&&(v+="rotateY("+h+Bi),u!==Fi&&(v+="rotateX("+u+Bi),(d!==Fi||p!==Fi)&&(v+="skew("+d+", "+p+Bi),(g!==1||_!==1)&&(v+="scale("+g+", "+_+Bi),S.style[ye]=v||"translate(0, 0)"},hy=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,c=n.rotation,l=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,p=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,f=n.yOffset,S=n.forceCSS,E=parseFloat(o),v=parseFloat(a),T,R,b,P,x;c=parseFloat(c),l=parseFloat(l),h=parseFloat(h),h&&(h=parseFloat(h),l+=h,c+=h),c||l?(c*=Ps,l*=Ps,T=Math.cos(c)*u,R=Math.sin(c)*u,b=Math.sin(c-l)*-d,P=Math.cos(c-l)*d,l&&(h*=Ps,x=Math.tan(l-h),x=Math.sqrt(1+x*x),b*=x,P*=x,h&&(x=Math.tan(h),x=Math.sqrt(1+x*x),T*=x,R*=x)),T=Te(T),R=Te(R),b=Te(b),P=Te(P)):(T=u,P=d,R=b=0),(E&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(E=Ti(p,"x",o,"px"),v=Ti(p,"y",a,"px")),(g||_||m||f)&&(E=Te(E+g-(g*T+_*b)+m),v=Te(v+_-(g*R+_*P)+f)),(i||r)&&(x=p.getBBox(),E=Te(E+i/100*x.width),v=Te(v+r/100*x.height)),x="matrix("+T+","+R+","+b+","+P+","+E+","+v+")",p.setAttribute("transform",x),S&&(p.style[ye]=x)},uy=function(t,e,n,i,r){var o=360,a=Be(r),c=parseFloat(r)*(a&&~r.indexOf("rad")?ki:1),l=c-i,h=i+l+"deg",u,d;return a&&(u=r.split("_")[1],u==="short"&&(l%=o,l!==l%(o/2)&&(l+=l<0?o:-o)),u==="cw"&&l<0?l=(l+o*nu)%o-~~(l/o)*o:u==="ccw"&&l>0&&(l=(l-o*nu)%o-~~(l/o)*o)),t._pt=d=new rn(t._pt,e,n,i,l,Yx),d.e=h,d.u="deg",t._props.push(n),d},lu=function(t,e){for(var n in e)t[n]=e[n];return t},dy=function(t,e,n){var i=lu({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,c,l,h,u,d,p,g;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),o[ye]=e,a=Tr(n,1),wi(n,ye),n.setAttribute("transform",l)):(l=getComputedStyle(n)[ye],o[ye]=e,a=Tr(n,1),o[ye]=l);for(c in ri)l=i[c],h=a[c],l!==h&&r.indexOf(c)<0&&(p=Ve(l),g=Ve(h),u=p!==g?Ti(n,c,l,g):parseFloat(l),d=parseFloat(h),t._pt=new rn(t._pt,a,c,u,d-u,kc),t._pt.u=g||0,t._props.push(c));lu(a,i)};sn("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});Io[t>1?"border"+s:s]=function(a,c,l,h,u){var d,p;if(arguments.length<4)return d=o.map(function(g){return Qn(a,g,l)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(h+"").split(" "),p={},o.forEach(function(g,_){return p[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(c,p,u)}});var Gd={name:"css",register:Vc,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,c=n.vars.startAt,l,h,u,d,p,g,_,m,f,S,E,v,T,R,b,P,x;Al||Vc(),this.styles=this.styles||Ud(t),P=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(dn[_]&&Ed(_,e,n,i,t,r)))){if(p=typeof h,g=Io[_],p==="function"&&(h=h.call(n,i,t,r),p=typeof h),p==="string"&&~h.indexOf("random(")&&(h=Mr(h)),g)g(this,t,_,h,n)&&(b=1);else if(_.substr(0,2)==="--")l=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",yi.lastIndex=0,yi.test(l)||(m=Ve(l),f=Ve(h),f?m!==f&&(l=Ti(t,_,l,f)+f):m&&(h+=m)),this.add(a,"setProperty",l,h,i,r,0,0,_),o.push(_),P.push(_,0,a[_]);else if(p!=="undefined"){if(c&&_ in c?(l=typeof c[_]=="function"?c[_].call(n,i,t,r):c[_],Be(l)&&~l.indexOf("random(")&&(l=Mr(l)),Ve(l+"")||l==="auto"||(l+=gn.units[_]||Ve(Qn(t,_))||""),(l+"").charAt(1)==="="&&(l=Qn(t,_))):l=Qn(t,_),d=parseFloat(l),S=p==="string"&&h.charAt(1)==="="&&h.substr(0,2),S&&(h=h.substr(2)),u=parseFloat(h),_ in Gn&&(_==="autoAlpha"&&(d===1&&Qn(t,"visibility")==="hidden"&&u&&(d=0),P.push("visibility",0,a.visibility),_i(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=Gn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),E=_ in ri,E){if(this.styles.save(_),x=h,p==="string"&&h.substring(0,6)==="var(--"){if(h=_n(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var M=t.style.perspective;t.style.perspective=h,h=_n(t,"perspective"),M?t.style.perspective=M:wi(t,"perspective")}u=parseFloat(h)}if(v||(T=t._gsap,T.renderTransform&&!e.parseTransform||Tr(t,e.parseTransform),R=e.smoothOrigin!==!1&&T.smooth,v=this._pt=new rn(this._pt,a,ye,0,1,T.renderTransform,T,0,-1),v.dep=1),_==="scale")this._pt=new rn(this._pt,T,"scaleY",T.scaleY,(S?Rs(T.scaleY,S+u):u)-T.scaleY||0,kc),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){P.push(on,0,a[on]),h=ay(h),T.svg?Hc(t,h,0,R,0,this):(f=parseFloat(h.split(" ")[2])||0,f!==T.zOrigin&&_i(this,T,"zOrigin",T.zOrigin,f),_i(this,a,_,Uo(l),Uo(h)));continue}else if(_==="svgOrigin"){Hc(t,h,1,R,0,this);continue}else if(_ in Bd){uy(this,T,_,d,S?Rs(d,S+h):h);continue}else if(_==="smoothOrigin"){_i(this,T,"smooth",T.smooth,h);continue}else if(_==="force3D"){T[_]=h;continue}else if(_==="transform"){dy(this,h,t);continue}}else _ in a||(_=Vs(_)||_);if(E||(u||u===0)&&(d||d===0)&&!qx.test(h)&&_ in a)m=(l+"").substr((d+"").length),u||(u=0),f=Ve(h)||(_ in gn.units?gn.units[_]:m),m!==f&&(d=Ti(t,_,l,f)),this._pt=new rn(this._pt,E?T:a,_,d,(S?Rs(d,S+u):u)-d,!E&&(f==="px"||_==="zIndex")&&e.autoRound!==!1?Zx:kc),this._pt.u=f||0,E&&x!==h?(this._pt.b=l,this._pt.e=x,this._pt.r=jx):m!==f&&f!=="%"&&(this._pt.b=l,this._pt.r=Kx);else if(_ in a)oy.call(this,t,_,l,S?S+h:h);else if(_ in t)this.add(t,_,l||t[_],S?S+h:h,i,r);else if(_!=="parseTransform"){gl(_,h);continue}E||(_ in a?P.push(_,0,a[_]):typeof t[_]=="function"?P.push(_,2,t[_]()):P.push(_,1,l||t[_])),o.push(_)}}b&&Cd(this)},render:function(t,e){if(e.tween._time||!Rl())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Qn,aliases:Gn,getSetter:function(t,e,n){var i=Gn[e];return i&&i.indexOf(",")<0&&(e=i),e in ri&&e!==on&&(t._gsap.x||Qn(t,"x"))?n&&eu===n?e==="scale"?ty:Qx:(eu=n||{})&&(e==="scale"?ey:ny):t.style&&!pl(t.style[e])?$x:~e.indexOf("-")?Jx:Tl(t,e)},core:{_removeProperty:wi,_getMatrix:Pl}};an.utils.checkPrefix=Vs;an.core.getStyleSaver=Ud;(function(s,t,e,n){var i=sn(s+","+t+","+e,function(r){ri[r]=1});sn(t,function(r){gn.units[r]="deg",Bd[r]=1}),Gn[i[13]]=s+","+t,sn(n,function(r){var o=r.split(":");Gn[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");sn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){gn.units[s]="px"});an.registerPlugin(Gd);var Mo=an.registerPlugin(Gd)||an;Mo.core.Tween;class fy{constructor(){this.overlay=null,this.createOverlay()}createOverlay(){this.overlay=document.createElement("div"),this.overlay.className="scene-transition-overlay",this.overlay.style.position="fixed",this.overlay.style.top="0",this.overlay.style.left="0",this.overlay.style.width="100%",this.overlay.style.height="100%",this.overlay.style.backgroundColor="#030511",this.overlay.style.zIndex="999",this.overlay.style.opacity="0",this.overlay.style.pointerEvents="none",this.overlay.style.display="flex",this.overlay.style.justifyContent="center",this.overlay.style.alignItems="center";const t=document.createElement("div");t.style.width="100%",t.style.height="4px",t.style.background="linear-gradient(90deg, transparent, #4cc9ff, #00ff88, #4cc9ff, transparent)",t.style.boxShadow="0 0 20px #4cc9ff, 0 0 10px #00ff88",t.style.position="absolute",this.glowBar=t,this.overlay.appendChild(t),document.body.appendChild(this.overlay)}trigger(t,e=.8){if(!this.overlay)return;Mo.killTweensOf(this.overlay),Mo.killTweensOf(this.glowBar),this.glowBar.style.top="0%",Mo.timeline().to(this.overlay,{opacity:1,duration:e*.4,ease:"power2.inOut",onComplete:()=>{t&&t()}}).to(this.glowBar,{top:"100%",duration:e*.6,ease:"power1.inOut"},"-=0.2").to(this.overlay,{opacity:0,duration:e*.4,ease:"power2.inOut"},"-=0.2")}}class py{constructor(){this._voices=[],this._queue=[],this._currentIdx=-1,this._utterance=null,this._safetyTimer=null,this._sceneAdvanceTimer=null,this._enabled=!1,this._paused=!1,this._stopped=!0,this.onSubtitleChange=null,this.onSceneComplete=null,this.onProgressUpdate=null,this.VOICE_KEY="kg_narrator_voice",this.RATE_KEY="kg_narrator_rate",this.speechRate=parseFloat(localStorage.getItem(this.RATE_KEY)||"0.92"),this.speechPitch=1,this._initVoices()}enable(){if(this._enabled=!0,window.speechSynthesis)try{const t=new SpeechSynthesisUtterance("");t.volume=0,window.speechSynthesis.speak(t)}catch{}this._initVoices()}startScene(t,e=3e4){if(this._stop(),this._queue=t.filter(n=>n&&n.trim()),this._currentIdx=-1,this._stopped=!1,this._paused=!1,this._queue.length===0){setTimeout(()=>this._fireSceneComplete(),500);return}clearTimeout(this._sceneAdvanceTimer),this._sceneAdvanceTimer=setTimeout(()=>{console.warn("[Narrator] Scene max-duration fallback triggered"),this._stop(),this._fireSceneComplete()},e),this._next()}pause(){this._paused||this._stopped||(this._paused=!0,window.speechSynthesis&&window.speechSynthesis.pause())}resume(){this._paused&&(this._paused=!1,window.speechSynthesis&&window.speechSynthesis.resume())}stop(){this._stop()}skipSubtitle(){this._cancelCurrentUtterance(),this._advance()}restartScene(t=3e4){const e=[...this._queue];this.startScene(e,t)}getProgress(){return this._queue.length===0?100:this._currentIdx<0?0:Math.min(100,Math.round(this._currentIdx/this._queue.length*100))}setSpeechRate(t){this.speechRate=Math.max(.5,Math.min(1.5,t)),localStorage.setItem(this.RATE_KEY,this.speechRate.toString())}setVoice(t){localStorage.setItem(this.VOICE_KEY,t)}getAvailableVoices(){return this._voices.filter(t=>t.lang.startsWith("en"))}_initVoices(){if(!window.speechSynthesis)return;const t=()=>{this._voices=window.speechSynthesis.getVoices()};t(),window.speechSynthesis.onvoiceschanged=()=>{t()}}_getBestVoice(){if(this._voices.length===0)return null;const t=localStorage.getItem(this.VOICE_KEY);if(t){const n=this._voices.find(i=>i.name===t);if(n)return n}const e=this._voices.find(n=>n.lang.startsWith("en")&&n.name.includes("Google")&&n.name.includes("US"))||this._voices.find(n=>n.lang.startsWith("en")&&(n.name.includes("Google")||n.name.includes("Natural")))||this._voices.find(n=>n.lang==="en-US"&&(n.name.includes("Samantha")||n.name.includes("Alex")))||this._voices.find(n=>n.lang.startsWith("en")&&(n.name.includes("Siri")||n.name.includes("Daniel")))||this._voices.find(n=>n.lang.startsWith("en")&&n.name.includes("Microsoft")&&!n.name.includes("Hazel"))||this._voices.find(n=>n.lang==="en-US")||this._voices.find(n=>n.lang.startsWith("en"));return e&&localStorage.setItem(this.VOICE_KEY,e.name),e||null}_next(){if(this._stopped||this._paused)return;if(this._currentIdx++,this._currentIdx>=this._queue.length){clearTimeout(this._sceneAdvanceTimer),this._stopped=!0,setTimeout(()=>this._fireSceneComplete(),400);return}const t=this._queue[this._currentIdx];this.onSubtitleChange&&this.onSubtitleChange(t,this._currentIdx,this._queue.length),this.onProgressUpdate&&this.onProgressUpdate(this.getProgress()),this._speak(t)}_speak(t){if(!this._enabled){const c=Math.max(2e3,t.length*70);setTimeout(()=>this._advance(),c);return}if(!window.speechSynthesis){const c=Math.max(2500,t.length*70);setTimeout(()=>this._advance(),c);return}window.speechSynthesis.speaking&&window.speechSynthesis.cancel();const e=t.replace(/<[^>]*>?/gm,""),n=new SpeechSynthesisUtterance(e);n.rate=this.speechRate,n.pitch=this.speechPitch,n.volume=1;const i=this._getBestVoice();i&&(n.voice=i),this._utterance=n;let r=!1;const o=()=>{r||(r=!0,clearTimeout(this._safetyTimer),this._utterance=null,setTimeout(()=>this._advance(),300))};n.onend=()=>{o()},n.onerror=c=>{c.error==="canceled"||c.error==="interrupted"||(console.warn("[Narrator] TTS error:",c.error,"| Text:",t.substring(0,40)),o())};const a=Math.max(3500,t.length*70+1500);this._safetyTimer=setTimeout(()=>{r||(console.warn("[Narrator] Safety timeout for:",t.substring(0,40)),o())},a),window.speechSynthesis.paused&&window.speechSynthesis.resume(),window.speechSynthesis.speak(n)}_advance(){this._stopped||this._paused||this._next()}_cancelCurrentUtterance(){clearTimeout(this._safetyTimer),this._utterance=null,window.speechSynthesis&&window.speechSynthesis.cancel()}_stop(){this._stopped=!0,this._paused=!1,this._currentIdx=-1,clearTimeout(this._safetyTimer),clearTimeout(this._sceneAdvanceTimer),this._cancelCurrentUtterance(),this._queue=[]}_fireSceneComplete(){this.onSceneComplete&&this.onSceneComplete()}}class my{constructor(t){this.scene=t,this.group=new Wt,this.visible=!1,this.create(),t.add(this.group)}create(){const t=new Ht,e=500,n=new Float32Array(e*3),i=new Float32Array(e*3);for(let c=0;c<e*3;c+=3)n[c]=(Math.random()-.5)*20,n[c+1]=(Math.random()-.5)*15,n[c+2]=(Math.random()-.5)*10,i[c]=.3+Math.random()*.7,i[c+1]=.5+Math.random()*.5,i[c+2]=1;t.setAttribute("position",new en(n,3)),t.setAttribute("color",new en(i,3));const r=new cl({size:.3,vertexColors:!0,transparent:!0,opacity:.8});this.particles=new Nu(t,r),this.group.add(this.particles);const o=new ie(.5,16,16),a=new Et({color:ft.colors.cyan,shininess:80,specular:5032447});this.orbitingSpheres=[];for(let c=0;c<3;c++){const l=new ot(o,a);l.angle=c/3*Math.PI*2,l.radius=5,l.castShadow=!0,l.receiveShadow=!0,this.orbitingSpheres.push(l),this.group.add(l)}}show(){this.visible=!0,this.group.visible=!0}hide(){this.visible=!1,this.group.visible=!1}update(){this.visible&&(this.particles&&(this.particles.rotation.y+=.001,this.particles.rotation.x+=5e-4),this.orbitingSpheres&&this.orbitingSpheres.forEach((t,e)=>{t.angle+=.005,t.position.x=Math.cos(t.angle)*t.radius,t.position.z=Math.sin(t.angle)*t.radius,t.scale.y=.8+.2*Math.sin(Date.now()*.003+e)}))}}class _y{constructor(t){this.scene=t,this.group=new Wt,this.visible=!1,this.nodes=[],this.particles=[],this.spawnTimer=0,this.create(),t.add(this.group)}create(){this.nodePositions=[new A(0,5,0),new A(-4,2.5,0),new A(4,2.5,0),new A(-6,0,0),new A(-2,0,0),new A(2,0,0),new A(6,0,0),new A(-7,-2.5,0),new A(-5,-2.5,0),new A(-3,-2.5,0),new A(-1,-2.5,0),new A(1,-2.5,0),new A(3,-2.5,0),new A(5,-2.5,0),new A(7,-2.5,0)],this.connections=[[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,7],[3,8],[4,9],[4,10],[5,11],[5,12],[6,13],[6,14]],this.paths=[[0,1,3,7],[0,1,3,8],[0,1,4,9],[0,1,4,10],[0,2,5,11],[0,2,5,12],[0,2,6,13],[0,2,6,14]];const t=new ie(.35,16,16);this.nodePositions.forEach((e,n)=>{let i=ft.colors.primary;n>=7&&n<=10&&(i="#ff00ff"),n>=11&&n<=14&&(i="#ffee00");const r=new Et({color:i,shininess:80,specular:4473924}),o=new ot(t,r);o.position.copy(e),o.castShadow=!0,o.receiveShadow=!0,this.nodes.push(o),this.group.add(o)}),this.connections.forEach(([e,n])=>{const i=this.nodePositions[e],r=this.nodePositions[n],o=[i,r],a=new Ht().setFromPoints(o),c=new Fe({color:ft.colors.primary,transparent:!0,opacity:.4}),l=new Re(a,c);this.group.add(l)})}spawnParticle(){const t=Math.floor(Math.random()*this.paths.length),e=this.paths[t],n=t<4?"#ff00ff":"#ffee00",i=new ie(.12,8,8),r=new Et({color:n,shininess:90,specular:16777215}),o=new ot(i,r);o.position.copy(this.nodePositions[0]),o.castShadow=!0,this.group.add(o),this.particles.push({mesh:o,path:e,progress:0,speed:.015+Math.random()*.01,targetLeaf:e[e.length-1]})}show(){this.visible=!0,this.group.visible=!0}hide(){this.visible=!1,this.group.visible=!1,this.particles.forEach(t=>this.group.remove(t.mesh)),this.particles=[]}update(){if(this.visible){this.group.rotation.y=Math.sin(Date.now()*5e-4)*.25,this.spawnTimer++,this.spawnTimer>12&&(this.spawnParticle(),this.spawnTimer=0);for(let t=this.particles.length-1;t>=0;t--){const e=this.particles[t];if(e.progress+=e.speed,e.progress>=1)this.nodes[e.targetLeaf].scale.set(1.4,1.4,1.4),this.group.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose(),this.particles.splice(t,1);else{const n=e.path.length-1,i=e.progress*n,r=Math.floor(i),o=i-r,a=this.nodePositions[e.path[r]],c=this.nodePositions[e.path[r+1]];e.mesh.position.lerpVectors(a,c,o)}}this.nodes.forEach(t=>{t.scale.lerp(new A(1,1,1),.08)})}}}class gy{constructor(t){this.scene=t,this.group=new Wt,this.visible=!1,this.trees=[],this.particles=[],this.voteSlots=[],this.cycleTimer=0,this.create(),t.add(this.group)}create(){this.localNodePositions=[new A(0,3,0),new A(-1.2,1.2,0),new A(1.2,1.2,0),new A(-1.8,-.6,0),new A(-.6,-.6,0),new A(.6,-.6,0),new A(1.8,-.6,0)],this.connections=[[0,1],[0,2],[1,3],[1,4],[2,5],[2,6]],this.treeSpecs=[{path:[0,1,3],leafColors:[!0,!1,!0,!1],voteIsCyan:!0},{path:[0,2,5],leafColors:[!0,!1,!1,!0],voteIsCyan:!1},{path:[0,2,6],leafColors:[!1,!0,!1,!1],voteIsCyan:!1},{path:[0,1,4],leafColors:[!1,!0,!0,!1],voteIsCyan:!0},{path:[0,2,5],leafColors:[!0,!1,!1,!1],voteIsCyan:!1}];const e=new ie(.18,8,8),n=new ie(.22,8,8);for(let c=0;c<5;c++){const l=new Wt;l.position.x=(c-2)*5.8,l.position.y=1;const h=this.treeSpecs[c];this.localNodePositions.forEach((u,d)=>{let p=ft.colors.primary,g=e;d>=3&&(g=n,p=h.leafColors[d-3]?ft.colors.cyan:ft.colors.accent);const _=new Et({color:p,shininess:70,specular:3355443}),m=new ot(g,_);m.position.copy(u),m.castShadow=!0,m.receiveShadow=!0,l.add(m)}),this.connections.forEach(([u,d])=>{const p=this.localNodePositions[u],g=this.localNodePositions[d],_=[p,g],m=new Ht().setFromPoints(_),f=new Fe({color:ft.colors.primary,transparent:!0,opacity:.35}),S=new Re(m,f);l.add(S)}),this.trees.push(l),this.group.add(l)}this.votingBoard=new Wt,this.votingBoard.position.set(0,-2.5,0);const i=new de(6.5,1,.1),r=new Et({color:1054e3,transparent:!0,opacity:.8,shininess:30}),o=new ot(i,r);o.receiveShadow=!0,this.votingBoard.add(o);const a=new ie(.2,8,8);for(let c=0;c<5;c++){const l=new Et({color:3355443,shininess:80}),h=new ot(a,l);h.position.set((c-2)*1,0,.1),h.castShadow=!0,h.receiveShadow=!0,this.voteSlots.push(h),this.votingBoard.add(h)}this.group.add(this.votingBoard)}startVotingCycle(){this.particles.forEach(n=>this.group.remove(n.mesh)),this.particles=[],this.voteSlots.forEach(n=>{n.material.color.setHex(3355443),n.scale.set(1,1,1)});const t=new A(0,4.8,0),e=new ie(.18,8,8);for(let n=0;n<5;n++){const i=this.treeSpecs[n],r=i.voteIsCyan?ft.colors.cyan:ft.colors.accent,o=new Et({color:r,transparent:!0,opacity:.95,shininess:90,specular:16777215}),a=new ot(e,o);a.position.copy(t),a.castShadow=!0,this.group.add(a);const c=this.trees[n].position,l=[t.clone(),new A().addVectors(this.localNodePositions[0],c),new A().addVectors(this.localNodePositions[i.path[1]],c),new A().addVectors(this.localNodePositions[i.path[2]],c),new A((n-2)*1,-2.5,.1)];this.particles.push({mesh:a,path:l,progress:0,speed:.008+Math.random()*.003,treeIdx:n,voteIsCyan:i.voteIsCyan})}}show(){this.visible=!0,this.group.visible=!0,this.cycleTimer=0,this.startVotingCycle()}hide(){this.visible=!1,this.group.visible=!1,this.particles.forEach(t=>this.group.remove(t.mesh)),this.particles=[]}update(){this.visible&&(this.trees.forEach(t=>{t.rotation.y=Math.sin(Date.now()*5e-4)*.15}),this.cycleTimer++,this.cycleTimer>350&&(this.startVotingCycle(),this.cycleTimer=0),this.particles.forEach(t=>{if(t.progress<1)if(t.progress+=t.speed,t.progress>=1){t.progress=1,t.mesh.position.copy(t.path[t.path.length-1]),t.mesh.visible=!1;const e=this.voteSlots[t.treeIdx],n=t.voteIsCyan?ft.colors.cyan:ft.colors.accent;e.material.color.set(n),e.scale.set(1.4,1.4,1.4)}else{const e=t.path.length-1,n=t.progress*e,i=Math.floor(n),r=n-i,o=t.path[i],a=t.path[i+1];t.mesh.position.lerpVectors(o,a,r)}}),this.voteSlots.forEach(t=>{t.scale.lerp(new A(1,1,1),.1)}))}}function Oa(s=0,t=1){let e=0,n=0;for(;e===0;)e=Math.random();for(;n===0;)n=Math.random();return Math.sqrt(-2*Math.log(e))*Math.cos(2*Math.PI*n)*t+s}class Hs{constructor(t,e,n,i,r,o=.15){this.parentGroup=t,this.count=e,this.center=n,this.stdDev=i,this.color=r,this.size=o,this.meshes=[],this.create()}create(){const t=new ie(this.size,8,8),e=new Et({color:this.color,shininess:80,specular:4473924});for(let n=0;n<this.count;n++){const i=new ot(t,e),r=Oa(this.center.x,this.stdDev),o=Oa(this.center.y,this.stdDev),a=Oa(this.center.z,this.stdDev*.4);i.position.set(r,o,a),i.originalY=o,i.castShadow=!0,i.receiveShadow=!0,this.parentGroup.add(i),this.meshes.push(i)}}update(t=0){const e=Date.now()*.003+t;this.meshes.forEach((n,i)=>{n.position.y=n.originalY+Math.sin(e+i)*.04,n.scale.setScalar(.95+.12*Math.sin(e*.8+i))})}destroy(){this.meshes.forEach(t=>{this.parentGroup.remove(t),t.geometry.dispose(),t.material.dispose()}),this.meshes=[]}}class vy{constructor(t,e){this.parentGroup=t,this.position=e,this.group=new Wt,this.group.position.copy(e),this.bars=[],this.targetHeights=[.2,2.2,.35],this.create(),this.parentGroup.add(this.group)}create(){const t=new de(4.5,.15,1.5),e=new Et({color:2237752}),n=new ot(t,e);n.position.set(0,-1,0),n.receiveShadow=!0,this.group.add(n);const i=[65535,65416,16711935],r=new ii(.35,.35,1,16);for(let o=0;o<3;o++){const a=new Et({color:i[o],shininess:90,specular:4473924}),c=new ot(r,a);c.position.set((o-1)*1.3,-1,0),c.scale.set(1,.1,1),c.castShadow=!0,c.receiveShadow=!0,this.group.add(c),this.bars.push(c)}}update(){const t=Date.now()*.003,e=1+Math.sin(t)*.08;this.bars.forEach((n,i)=>{let r=this.targetHeights[i];i===1&&(r*=e);const o=gr.lerp(n.scale.y,r,.08);n.scale.set(1,o,1),n.position.y=-1+o/2})}destroy(){this.parentGroup.remove(this.group),this.bars.forEach(t=>{t.geometry.dispose(),t.material.dispose()}),this.bars=[]}}class xy{constructor(t){this.scene=t,this.group=new Wt,this.visible=!1,this.points=[],this.boundary=null,this.targetSlope=.6,this.targetIntercept=.5,this.currentSlope=-.8,this.currentIntercept=-2.5,this.create(),t.add(this.group)}create(){this.clusterA=new Hs(this.group,20,new A(-3.5,-1,0),1.1,"#ff00ff",.18),this.clusterB=new Hs(this.group,20,new A(1.5,1.8,0),1.1,"#ffee00",.18),this.clusterA.meshes.forEach(n=>this.points.push(n)),this.clusterB.meshes.forEach(n=>this.points.push(n)),this.probGraph=new vy(this.group,new A(5.2,.5,0));const t=new Et({color:16711765,shininess:100,specular:16777215,side:je}),e=new de(10,.08,.08);this.boundary=new ot(e,t),this.boundary.castShadow=!0,this.boundary.receiveShadow=!0,this.group.add(this.boundary),this.updateLineGeometry(null,this.currentSlope,this.currentIntercept)}updateLineGeometry(t,e,n){const i=Math.atan(e);this.boundary.rotation.z=i,this.boundary.position.set(-1,n,0)}show(){this.visible=!0,this.group.visible=!0,this.currentSlope=-.8,this.currentIntercept=-2.5,this.boundary&&this.boundary.material.color.setHex(16711765)}hide(){this.visible=!1,this.group.visible=!1}update(){if(!this.visible)return;this.group.rotation.y=Math.sin(Date.now()*4e-4)*.15,this.clusterA.update(0),this.clusterB.update(Math.PI);const t=.015,e=this.targetSlope-this.currentSlope,n=this.targetIntercept-this.currentIntercept;this.currentSlope+=e*t,this.currentIntercept+=n*t,this.updateLineGeometry(null,this.currentSlope,this.currentIntercept);const i=Math.abs(e)+Math.abs(n);if(i<.08)this.boundary.material.color.setHex(65416);else{const r=Math.min(1,1-i/3);this.boundary.material.color.setRGB(1-r,r*.8,r)}this.probGraph.update()}}class yy{constructor(t){this.scene=t,this.group=new Wt,this.visible=!1,this.ellipses=[],this.create(),t.add(this.group)}createEllipseGeometry(t,e,n,i){const r=[];for(let a=0;a<=64;a++){const c=a/64*Math.PI*2;r.push(new A(t+Math.cos(c)*n,e+Math.sin(c)*i,0))}return new Ht().setFromPoints(r)}create(){this.ridgePos=new A(-3.5,.5,0);const t=new Wt;t.position.copy(this.ridgePos);const e=new ot(new de(4,.04,.04),new Et({color:5592405,shininess:20})),n=new ot(new de(.04,4,.04),new Et({color:5592405,shininess:20}));e.castShadow=!0,e.receiveShadow=!0,n.castShadow=!0,n.receiveShadow=!0,t.add(e),t.add(n),this.group.add(t);const i=new Fs(.01,1.2,32),r=new Et({color:2045024,side:je,transparent:!0,opacity:.6,shininess:30}),o=new ot(i,r);o.position.copy(this.ridgePos),o.castShadow=!0,o.receiveShadow=!0,this.group.add(o);const a=new Fs(1.17,1.2,32),c=new Et({color:ft.colors.cyan,side:je,shininess:50}),l=new ot(a,c);l.position.copy(this.ridgePos),l.position.z=.01,l.castShadow=!0,l.receiveShadow=!0,this.group.add(l),this.lassoPos=new A(3.5,.5,0);const h=new Wt;h.position.copy(this.lassoPos);const u=new ot(new de(4,.04,.04),new Et({color:5592405,shininess:20})),d=new ot(new de(.04,4,.04),new Et({color:5592405,shininess:20}));u.castShadow=!0,u.receiveShadow=!0,d.castShadow=!0,d.receiveShadow=!0,h.add(u),h.add(d),this.group.add(h);const p=new de(1.7,1.7,.02),g=new Fu({color:5051965,roughness:.4,metalness:.2,transparent:!0,opacity:.6}),_=new ot(p,g);_.position.copy(this.lassoPos),_.rotation.z=Math.PI/4,_.castShadow=!0,_.receiveShadow=!0,this.group.add(_);const m=[new A(0,1.2,.01),new A(1.2,0,.01),new A(0,-1.2,.01),new A(-1.2,0,.01),new A(0,1.2,.01)],f=new Ht().setFromPoints(m),S=new Fe({color:16711935,linewidth:2});this.diamondBorder=new Re(f,S),this.diamondBorder.position.copy(this.lassoPos),this.group.add(this.diamondBorder),this.ridgeLossCenter=new A(-3.5+2,.5+1.8,.02),this.lassLossCenter=new A(3.5+2.2,.5+1.6,.02),this.ridgeEllipseMat=new Fe({color:16755200,transparent:!0,opacity:.6}),this.lassoEllipseMat=new Fe({color:16755200,transparent:!0,opacity:.6});const E=new ie(.12,8,8);this.ridgeTouchPoint=new ot(E,new Et({color:16766720,shininess:100,specular:16777215}));const v=new A(-3.5+1.2*Math.cos(Math.PI/6),.5+1.2*Math.sin(Math.PI/6),.05);this.ridgeTouchPoint.position.copy(v),this.ridgeTouchPoint.castShadow=!0,this.ridgeTouchPoint.receiveShadow=!0,this.group.add(this.ridgeTouchPoint),this.lassoTouchPoint=new ot(E,new Et({color:16766720,shininess:100,specular:16777215}));const T=new A(3.5+1.2,.5,.05);this.lassoTouchPoint.position.copy(T),this.lassoTouchPoint.castShadow=!0,this.lassoTouchPoint.receiveShadow=!0,this.group.add(this.lassoTouchPoint),this.animTime=0}show(){this.visible=!0,this.group.visible=!0,this.animTime=0}hide(){this.visible=!1,this.group.visible=!1,this.ellipses.forEach(t=>this.group.remove(t)),this.ellipses=[]}update(){if(!this.visible)return;this.group.rotation.y=Math.sin(Date.now()*3e-4)*.15,this.animTime+=.008,this.animTime>1&&(this.animTime=0),this.ellipses.forEach(c=>this.group.remove(c)),this.ellipses=[];const t=this.animTime,e=2.4*t,n=1.6*t,i=2.5*t,r=1.8*t;for(let c=1;c<=3;c++){const l=c/3,h=this.createEllipseGeometry(this.ridgeLossCenter.x,this.ridgeLossCenter.y,e*l,n*l),u=new Re(h,this.ridgeEllipseMat);this.group.add(u),this.ellipses.push(u);const d=this.createEllipseGeometry(this.lassLossCenter.x,this.lassLossCenter.y,i*l,r*l),p=new Re(d,this.lassoEllipseMat);this.group.add(p),this.ellipses.push(p)}const o=t>.7&&t<.95,a=o?1.5+Math.sin(Date.now()*.015)*.2:1;this.ridgeTouchPoint.scale.set(a,a,a),this.lassoTouchPoint.scale.set(a,a,a),this.ridgeTouchPoint.material.color.setHex(o?65416:16755200),this.lassoTouchPoint.material.color.setHex(o?65416:16755200)}}class My{constructor(t){this.scene=t,this.group=new Wt,this.visible=!1,this.targets=[],this.hits=[],this.create(),t.add(this.group)}createTargetBoard(t,e,n){const i=new Wt,r=new ii(1.6,1.6,.1,32),o=new Et({color:t,shininess:30}),a=new ot(r,o);a.rotation.x=Math.PI/2,a.castShadow=!0,a.receiveShadow=!0,i.add(a);const c=new ii(1,1,.12,32),l=new Et({color:e,shininess:40}),h=new ot(c,l);h.rotation.x=Math.PI/2,h.position.z=.01,h.castShadow=!0,h.receiveShadow=!0,i.add(h);const u=new ii(.4,.4,.14,32),d=new Et({color:n,shininess:80,specular:16777215}),p=new ot(u,d);return p.rotation.x=Math.PI/2,p.position.z=.02,p.castShadow=!0,p.receiveShadow=!0,i.add(p),i}create(){const t=new ie(.08,8,8),e=16724787,n=65416,i=16755200,r=this.createTargetBoard(1185579,2041415,16724838);r.position.set(-6,.5,0),this.group.add(r),this.targets.push(r);for(let c=0;c<20;c++){const l=new Et({color:e,shininess:80,specular:16777215}),h=new ot(t,l),u=Math.random()*.35,d=Math.random()*Math.PI*2;h.position.set(-6-.8+Math.cos(d)*u,.5+.8+Math.sin(d)*u,.12+(Math.random()-.5)*.05),h.originalY=h.position.y,h.castShadow=!0,h.receiveShadow=!0,this.group.add(h),this.hits.push(h)}const o=this.createTargetBoard(1185579,2041415,65416);o.position.set(0,.5,0),this.group.add(o),this.targets.push(o);for(let c=0;c<20;c++){const l=new Et({color:n,shininess:80,specular:16777215}),h=new ot(t,l),u=Math.random()*.25,d=Math.random()*Math.PI*2;h.position.set(0+Math.cos(d)*u,.5+Math.sin(d)*u,.12+(Math.random()-.5)*.05),h.originalY=h.position.y,h.castShadow=!0,h.receiveShadow=!0,this.group.add(h),this.hits.push(h)}const a=this.createTargetBoard(1185579,2041415,16755200);a.position.set(6,.5,0),this.group.add(a),this.targets.push(a);for(let c=0;c<20;c++){const l=new Et({color:i,shininess:80,specular:16777215}),h=new ot(t,l),u=.3+Math.random()*1.1,d=Math.random()*Math.PI*2;h.position.set(6+Math.cos(d)*u,.5+Math.sin(d)*u,.12+(Math.random()-.5)*.05),h.originalY=h.position.y,h.castShadow=!0,h.receiveShadow=!0,this.group.add(h),this.hits.push(h)}}show(){this.visible=!0,this.group.visible=!0}hide(){this.visible=!1,this.group.visible=!1}update(){if(!this.visible)return;const t=Date.now()*.002;this.targets.forEach((e,n)=>{const i=Math.sin(t+n*2)*.3;e.position.y=.5+i;const r=n*20,o=r+20;for(let a=r;a<o;a++){const c=this.hits[a];c&&c.originalY!==void 0&&(c.position.y=c.originalY+i)}})}}class Sy{constructor(t){this.scene=t,this.group=new Wt,this.visible=!1,this.blocks=[],this.create(),t.add(this.group)}create(){const t=new de(2,.8,.2);for(let e=0;e<5;e++){const n=[],i=(2-e)*1.6;for(let r=0;r<5;r++){const o=(r-2)*2.3,a=r===e,c=a?ft.colors.accent:1847646,l=new Et({color:c,transparent:!0,opacity:.8,shininess:60,specular:3355443}),h=new ot(t,l);h.position.set(o,i,0),h.isValidation=a,h.rowIdx=e,h.colIdx=r,h.castShadow=!0,h.receiveShadow=!0,this.group.add(h),n.push(h)}this.blocks.push(n)}}show(){this.visible=!0,this.group.visible=!0}hide(){this.visible=!1,this.group.visible=!1}update(){if(!this.visible)return;this.group.rotation.y=Math.sin(Date.now()*4e-4)*.1;const t=Math.floor(Date.now()/1200)%5;for(let e=0;e<5;e++){const n=e===t,i=n?1:.25,r=n?1.08:.92;for(let o=0;o<5;o++){const a=this.blocks[e][o];a.scale.lerp(new A(r,r,r),.1),a.material.opacity=gr.lerp(a.material.opacity,i,.1),n?a.rotation.y=Math.sin(Date.now()*.003+o)*.15:a.rotation.y=gr.lerp(a.rotation.y,0,.1)}}}}class Ey{constructor(t,e){this.parentGroup=t,this.position=e,this.group=new Wt,this.group.position.copy(e),this.cells=[],this.bars=[],this.targetHeights=[1.5,.4,.3,2],this.create(),this.parentGroup.add(this.group)}create(){const t=new de(2,2,.15),e=[{x:-1.1,y:1.1,color:1847646},{x:1.1,y:1.1,color:16724821},{x:-1.1,y:-1.1,color:16724821},{x:1.1,y:-1.1,color:65416}],n=new ii(.3,.3,1,16);e.forEach((i,r)=>{const o=new Et({color:i.color,transparent:!0,opacity:.85,shininess:40}),a=new ot(t,o);a.position.set(i.x,i.y,0),a.castShadow=!0,a.receiveShadow=!0,this.group.add(a),this.cells.push(a);const c=new Et({color:i.color,shininess:100,specular:5592405}),l=new ot(n,c);l.rotation.x=Math.PI/2,l.position.set(i.x,i.y,.05),l.scale.set(1,.01,1),this.group.add(l),this.bars.push(l)})}update(){const t=Date.now()*.003;this.bars.forEach((e,n)=>{const i=this.targetHeights[n],r=gr.lerp(e.scale.y,i,.06);e.scale.set(1,r,1),e.position.z=.05+r/2,this.cells[n].scale.setScalar(1+Math.sin(t+n)*.015)})}destroy(){this.parentGroup.remove(this.group),this.cells.forEach(t=>{t.geometry.dispose(),t.material.dispose()}),this.bars.forEach(t=>{t.geometry.dispose(),t.material.dispose()}),this.cells=[],this.bars=[]}}class wy{constructor(t,e){this.parentGroup=t,this.position=e,this.group=new Wt,this.group.position.copy(e),this.curvePoints=[],this.progress=0,this.create(),this.parentGroup.add(this.group)}create(){const t=new de(6,.05,.05),e=new de(.05,5,.05),n=new Et({color:8947848}),i=new ot(t,n);i.position.set(0,-2.5,0),this.group.add(i);const r=new ot(e,n);r.position.set(-3,0,0),this.group.add(r);const o=[new A(-3,-2.5,0),new A(3,2.5,0)],a=new Ht().setFromPoints(o),c=new Go({color:5592405,dashSize:.2,gapSize:.2}),l=new Re(a,c);l.computeLineDistances(),this.group.add(l);const h=new Fe({color:65416,linewidth:3}),u=new Ht;this.curveLine=new Re(u,h),this.group.add(this.curveLine);const d=new ie(.12,8,8),p=new qs({color:65416});this.pulseDot=new ot(d,p),this.pulseDot.position.set(-3,-2.5,.02),this.group.add(this.pulseDot)}update(){this.progress+=.015,this.progress>1&&(this.progress=0,this.curvePoints=[]);const t=this.progress,e=-3+t*6,i=-2.5+Math.pow(t,.35)*5,r=new A(e,i,.01);this.curvePoints.push(r);const o=new Ht().setFromPoints(this.curvePoints);this.curveLine.geometry.dispose(),this.curveLine.geometry=o,this.pulseDot.position.copy(r);const a=1+Math.sin(Date.now()*.01)*.2;this.pulseDot.scale.set(a,a,1)}destroy(){this.parentGroup.remove(this.group),this.curveLine.geometry.dispose(),this.curveLine.material.dispose(),this.pulseDot.geometry.dispose(),this.pulseDot.material.dispose()}}class Ty{constructor(t){this.scene=t,this.group=new Wt,this.visible=!1,this.matrix=new Ey(this.group,new A(-3.5,0,0)),this.roc=new wy(this.group,new A(3.5,0,0)),t.add(this.group),this.hide()}show(){this.visible=!0,this.group.visible=!0}hide(){this.visible=!1,this.group.visible=!1}update(){this.visible&&(this.group.rotation.y=Math.sin(Date.now()*4e-4)*.15,this.matrix.update(),this.roc.update())}}class by{constructor(t){this.scene=t,this.group=new Wt,this.particles=[],this.visible=!1,this.create(),t.add(this.group)}create(){const t=new ie(.08,8,8);for(let e=0;e<300;e++){const n=Math.random()>.5?"#00ffff":"#ff00ff",i=new Et({color:n,shininess:80,specular:16777215}),r=new ot(t,i);r.position.set((Math.random()-.5)*30,(Math.random()-.5)*20,(Math.random()-.5)*20),r.castShadow=!0,r.receiveShadow=!0,this.particles.push(r),this.group.add(r)}}show(){this.visible=!0,this.group.visible=!0}hide(){this.visible=!1,this.group.visible=!1}update(){this.visible&&this.particles.forEach((t,e)=>{t.position.y+=.02,t.rotation.x+=.02,t.rotation.y+=.02,t.position.y>15&&(t.position.y=-15)})}}class Ay{constructor(t){this.scene=t,this.group=new Wt,this.visible=!1,this.nodes=[],this.lines=[],this.pulses=[],this.create(),t.add(this.group)}create(){this.stagePositions=[new A(-6,0,0),new A(-2,0,0),new A(2,0,0),new A(6,0,0)];const t=new de(1.2,1.2,1.2),e=new Et({color:5032447,shininess:90,specular:16777215,wireframe:!1}),n=new ot(t,e);n.position.copy(this.stagePositions[0]),n.castShadow=!0,n.receiveShadow=!0,this.group.add(n),this.nodes.push(n);const i=new ll(.7,.2,16,64),r=new Et({color:65416,shininess:80,specular:4473924}),o=new ot(i,r);o.position.copy(this.stagePositions[1]),o.castShadow=!0,o.receiveShadow=!0,this.group.add(o),this.nodes.push(o);const a=new Wt;a.position.copy(this.stagePositions[2]);const c=new zo(.6,1,16),l=new Et({color:16711935,shininess:80,specular:4473924}),h=new ot(c,l);h.rotation.x=Math.PI,h.position.y=-.3,h.castShadow=!0,h.receiveShadow=!0;const u=new ot(c,l);u.position.y=.3,u.castShadow=!0,u.receiveShadow=!0,a.add(h),a.add(u),this.group.add(a),this.nodes.push(a);const d=new Wt;d.position.copy(this.stagePositions[3]);const p=new ii(.7,.7,1.2,32),g=new Fu({color:16766720,metalness:.9,roughness:.1,name:"goldTrophy"}),_=new ot(p,g);_.castShadow=!0,_.receiveShadow=!0;const m=new de(1.6,.2,1.6),f=new Et({color:2236962,shininess:50}),S=new ot(m,f);S.position.y=-.7,S.castShadow=!0,S.receiveShadow=!0,d.add(_),d.add(S),this.group.add(d),this.nodes.push(d);for(let T=0;T<3;T++){const R=this.stagePositions[T],b=this.stagePositions[T+1],P=[R,b],x=new Ht().setFromPoints(P),M=new Fe({color:ft.colors.primary,transparent:!0,opacity:.3}),D=new Re(x,M);this.group.add(D),this.lines.push(D)}const E=new ie(.12,16,16),v=new Et({color:16777215,shininess:100});for(let T=0;T<3;T++){const R=new ot(E,v);R.position.copy(this.stagePositions[0]),R.progress=T*.33,R.castShadow=!0,this.group.add(R),this.pulses.push(R)}}show(){this.visible=!0,this.group.visible=!0}hide(){this.visible=!1,this.group.visible=!1}update(){this.visible&&(this.group.rotation.y=Math.sin(Date.now()*4e-4)*.15,this.nodes[0].rotation.x+=.01,this.nodes[0].rotation.y+=.01,this.nodes[1].rotation.y+=.015,this.nodes[2].rotation.y+=.02,this.nodes[3].rotation.y+=.006,this.pulses.forEach(t=>{t.progress+=.0055,t.progress>1&&(t.progress=0);const n=t.progress*3,i=Math.floor(n),r=n-i,o=this.stagePositions[i],a=this.stagePositions[i+1];t.position.lerpVectors(o,a,r)}))}}class Ry{constructor(t,e){this.parentGroup=t,this.position=e,this.group=new Wt,this.group.position.copy(e),this.linePoints=[],this.progress=0,this.create(),this.parentGroup.add(this.group)}create(){const t=new de(6,.05,.05),e=new de(.05,4.5,.05),n=new Et({color:8947848}),i=new ot(t,n);i.position.set(0,-2,0),this.group.add(i);const r=new ot(e,n);r.position.set(-3,.25,0),this.group.add(r);const o=new Fe({color:16711935,linewidth:3}),a=new Ht;this.curveLine=new Re(a,o),this.group.add(this.curveLine);const c=new ie(.12,8,8),l=new qs({color:16711935});this.pulseDot=new ot(c,l),this.pulseDot.position.set(-3,2,.02),this.group.add(this.pulseDot)}update(){this.progress+=.01,this.progress>1&&(this.progress=0,this.linePoints=[]);const t=this.progress,e=-3+t*6,n=-2+Math.pow(Math.E,-3*t)*4,i=new A(e,n,.01);this.linePoints.push(i);const r=new Ht().setFromPoints(this.linePoints);this.curveLine.geometry.dispose(),this.curveLine.geometry=r,this.pulseDot.position.copy(i);const o=1+Math.sin(Date.now()*.01)*.2;this.pulseDot.scale.set(o,o,1)}destroy(){this.parentGroup.remove(this.group),this.curveLine.geometry.dispose(),this.curveLine.material.dispose(),this.pulseDot.geometry.dispose(),this.pulseDot.material.dispose()}}class Cy{constructor(t){this.scene=t,this.group=new Wt,this.visible=!1,this.layers=[],this.connections=[],this.pulses=[],this.state=0,this.stateTimer=0,this.create(),t.add(this.group)}create(){const t=[{x:-6,count:4},{x:-3.5,count:6},{x:-1,count:6},{x:1.5,count:2}],e=new ie(.3,16,16);t.forEach((n,i)=>{const r=[],o=(n.count-1)*1.2/2;for(let a=0;a<n.count;a++){const c=a*1.2-o;let l=5934847;i===0&&(l=ft.colors.cyan),i===3&&(l=16711935);const h=new Et({color:l,transparent:!0,opacity:.95,shininess:90,specular:5592405}),u=new ot(e,h);u.position.set(n.x,c,0),u.castShadow=!0,u.receiveShadow=!0,this.group.add(u),r.push(u)}this.layers.push(r)});for(let n=0;n<this.layers.length-1;n++){const i=this.layers[n],r=this.layers[n+1];i.forEach(o=>{r.forEach(a=>{const c=[o.position,a.position],l=new Ht().setFromPoints(c),h=new Fe({color:ft.colors.primary,transparent:!0,opacity:.15}),u=new Re(l,h);this.group.add(u),this.connections.push({line:u,startPos:o.position,endPos:a.position,layerIdx:n})})})}this.lossGraph=new Ry(this.group,new A(5.2,0,0))}triggerForwardProp(){this.pulses=[],this.connections.forEach(t=>{t.layerIdx===0&&this.spawnPulse(t.startPos,t.endPos,ft.colors.cyan,.02,0)})}triggerBackprop(){this.pulses=[],this.connections.forEach(t=>{t.layerIdx===2&&this.spawnPulse(t.endPos,t.startPos,16711935,.02,2)})}spawnPulse(t,e,n,i,r){const o=new ie(.1,8,8),a=new Et({color:n,shininess:100,specular:16777215}),c=new ot(o,a);c.position.copy(t),this.group.add(c),this.pulses.push({mesh:c,start:t,end:e,progress:0,speed:i,color:n,layerIdx:r,triggeredNext:!1})}show(){this.visible=!0,this.group.visible=!0,this.state=0,this.stateTimer=0,this.triggerForwardProp()}hide(){this.visible=!1,this.group.visible=!1,this.pulses.forEach(t=>this.group.remove(t.mesh)),this.pulses=[]}update(){if(this.visible){if(this.group.rotation.y=Math.sin(Date.now()*4e-4)*.15,this.stateTimer++,this.lossGraph.update(),this.state===0){let t=!0;this.pulses.forEach(e=>{e.progress<1?(e.progress+=e.speed,e.mesh.position.lerpVectors(e.start,e.end,e.progress),t=!1):e.triggeredNext||(e.triggeredNext=!0,e.mesh.visible=!1,this.layers[e.layerIdx+1].forEach(n=>{n.position.equals(e.end)&&n.scale.set(1.4,1.4,1.4)}),e.layerIdx<2&&this.connections.forEach(n=>{n.layerIdx===e.layerIdx+1&&n.startPos.equals(e.end)&&this.spawnPulse(n.startPos,n.endPos,ft.colors.cyan,.02,e.layerIdx+1)}))}),t&&this.stateTimer>180&&(this.state=1,this.stateTimer=0,this.triggerBackprop())}else{let t=!0;this.pulses.forEach(e=>{e.progress<1?(e.progress+=e.speed,e.mesh.position.lerpVectors(e.start,e.end,e.progress),t=!1):e.triggeredNext||(e.triggeredNext=!0,e.mesh.visible=!1,this.layers[e.layerIdx].forEach(n=>{n.position.equals(e.end)&&n.scale.set(1.4,1.4,1.4)}),e.layerIdx>0&&this.connections.forEach(n=>{n.layerIdx===e.layerIdx-1&&n.endPos.equals(e.end)&&this.spawnPulse(n.endPos,n.startPos,16711935,.02,e.layerIdx-1)}))}),t&&this.stateTimer>180&&(this.state=0,this.stateTimer=0,this.triggerForwardProp())}this.layers.forEach(t=>{t.forEach(e=>{e.scale.lerp(new A(1,1,1),.08)})});for(let t=this.pulses.length-1;t>=0;t--){const e=this.pulses[t];e.progress>=1&&e.triggeredNext&&(this.group.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose(),this.pulses.splice(t,1))}}}}class Py{constructor(t){this.scene=t,this.group=new Wt,this.visible=!1,this.plots=[],this.trees=[],this.pulseTimer=0,this.create(),t.add(this.group)}createResidualPlot(t,e,n){const i=new Wt;i.position.set(t,e,0);const r=new de(3.2,.04,.04),o=new Et({color:8947848,shininess:30}),a=new ot(r,o);a.castShadow=!0,a.receiveShadow=!0,i.add(a);const c=new de(.04,1.6,.04),l=new ot(c,o);l.position.x=-1.6,l.castShadow=!0,l.receiveShadow=!0,i.add(l);const h=new ie(.08,8,8),u=[];for(let d=0;d<15;d++){const g=Math.random()>.5?ft.colors.cyan:ft.colors.accent,_=new Et({color:g,shininess:80,specular:16777215}),m=new ot(h,_),f=(d-7)*.22,S=(Math.random()-.5)*2*n;m.position.set(f,S,0),m.originalY=S,m.castShadow=!0,m.receiveShadow=!0,i.add(m),u.push(m)}return{group:i,points:u}}createMiniTree(t,e){const n=new Wt;n.position.set(t,e,0);const i=[new A(0,.8,0),new A(-.6,.1,0),new A(.6,.1,0),new A(-.9,-.6,0),new A(-.3,-.6,0),new A(.3,-.6,0),new A(.9,-.6,0)],r=[[0,1],[0,2],[1,3],[1,4],[2,5],[2,6]],o=new ie(.14,8,8),a=new Et({color:ft.colors.primary,shininess:80});return i.forEach((c,l)=>{let h=a;if(l>=3){const d=l%2===0?ft.colors.cyan:ft.colors.accent;h=new Et({color:d,shininess:80,specular:16777215})}const u=new ot(o,h);u.position.copy(c),u.castShadow=!0,u.receiveShadow=!0,n.add(u)}),r.forEach(([c,l])=>{const h=[i[c],i[l]],u=new Ht().setFromPoints(h),d=new Fe({color:ft.colors.primary,transparent:!0,opacity:.4}),p=new Re(u,d);n.add(p)}),n}create(){const t=this.createResidualPlot(-6,2,.8);this.group.add(t.group),this.plots.push(t);const e=this.createMiniTree(-1.5,2);this.group.add(e),this.trees.push(e);const n=this.createResidualPlot(3,2,.35);this.group.add(n.group),this.plots.push(n);const i=this.createMiniTree(-1.5,-1.8);this.group.add(i),this.trees.push(i);const r=this.createResidualPlot(3,-1.8,.1);this.group.add(r.group),this.plots.push(r);const o=new ie(.12,8,8),a=new Et({color:16777215,shininess:100,specular:16777215});this.pulseMesh=new ot(o,a),this.pulseMesh.castShadow=!0,this.pulseMesh.receiveShadow=!0,this.group.add(this.pulseMesh)}show(){this.visible=!0,this.group.visible=!0,this.pulseTimer=0}hide(){this.visible=!1,this.group.visible=!1}update(){if(!this.visible)return;this.group.rotation.y=Math.sin(Date.now()*3e-4)*.15;const t=Date.now()*.003;this.plots.forEach(a=>{a.points.forEach((c,l)=>{c.position.y=c.originalY+Math.sin(t+l)*.05})}),this.pulseTimer+=.005,this.pulseTimer>1&&(this.pulseTimer=0);const e=[new A(-6,2,0),new A(-1.5,2,0),new A(3,2,0),new A(-1.5,-1.8,0),new A(3,-1.8,0)],n=e.length-1,i=this.pulseTimer*n,r=Math.floor(i),o=i-r;this.pulseMesh.position.lerpVectors(e[r],e[r+1],o),this.plots.forEach((a,c)=>{const h=c===0&&r===0||c===1&&r===2||c===2&&r===4?1.08:1;a.group.scale.lerp(new A(h,h,h),.1)}),this.trees.forEach((a,c)=>{const h=c===0&&r===1||c===1&&r===3?1.15:1;a.scale.lerp(new A(h,h,h),.1)})}}class Dy{constructor(t){this.scene=t,this.group=new Wt,this.visible=!1,this.points=[],this.errorLines=[],this.currentSlope=-.5,this.currentIntercept=-2,this.targetSlope=.8,this.targetIntercept=.5,this.create(),t.add(this.group)}create(){const e=new ie(.15,8,8),n=new Et({color:ft.colors.cyan,shininess:80,specular:16777215});for(let o=0;o<30;o++){const a=(o-15)*.4,c=(Math.random()-.5)*1.5,l=this.targetSlope*a+this.targetIntercept+c,h=new ot(e,n);h.position.set(a,l,0),h.castShadow=!0,h.receiveShadow=!0,this.group.add(h),this.points.push(h)}const i=new Ht;this.updateLineGeometry(i,this.currentSlope,this.currentIntercept);const r=new Fe({color:16711765,linewidth:3,transparent:!0,opacity:.9});this.regressionLine=new Re(i,r),this.group.add(this.regressionLine),this.points.forEach(o=>{const a=this.currentSlope*o.position.x+this.currentIntercept,c=[o.position,new A(o.position.x,a,0)],l=new Ht().setFromPoints(c),h=new Go({color:16755200,dashSize:.2,gapSize:.2,transparent:!0,opacity:.6}),u=new Re(l,h);u.computeLineDistances(),this.group.add(u),this.errorLines.push(u)})}updateLineGeometry(t,e,n){const r=e*-6.5+n,o=6.5,a=e*o+n,c=[new A(-6.5,r,0),new A(o,a,0)];t.setFromPoints(c)}show(){this.visible=!0,this.group.visible=!0,this.currentSlope=-.5,this.currentIntercept=-2}hide(){this.visible=!1,this.group.visible=!1}update(){if(!this.visible)return;const t=.02;this.currentSlope+=(this.targetSlope-this.currentSlope)*t,this.currentIntercept+=(this.targetIntercept-this.currentIntercept)*t,this.updateLineGeometry(this.regressionLine.geometry,this.currentSlope,this.currentIntercept),this.regressionLine.geometry.attributes.position.needsUpdate=!0;const e=Math.abs(this.targetSlope-this.currentSlope)+Math.abs(this.targetIntercept-this.currentIntercept);if(e<.1)this.regressionLine.material.color.setHex(65416);else{const n=Math.min(1,1-e/2);this.regressionLine.material.color.setRGB(1-n,n,n)}this.points.forEach((n,i)=>{const r=this.currentSlope*n.position.x+this.currentIntercept,o=n.position,a=new A(n.position.x,r,0),c=this.errorLines[i],l=c.geometry,h=[o,a];l.setFromPoints(h),l.attributes.position.needsUpdate=!0,c.computeLineDistances(),c.material.opacity=Math.max(.15,e*.4)})}}class Ly{constructor(t){this.scene=t,this.group=new Wt,this.visible=!1,this.points=[],this.supportVectors=[],this.create(),t.add(this.group)}create(){this.clusterA=new Hs(this.group,10,new A(-3.8,1.8,0),1,ft.colors.cyan,.18),this.clusterB=new Hs(this.group,10,new A(3.8,-1.8,0),1,ft.colors.accent,.18),this.clusterA.meshes.forEach(l=>this.points.push(l)),this.clusterB.meshes.forEach(l=>this.points.push(l));const t=[...this.clusterA.meshes].sort((l,h)=>l.position.y-l.position.x-(h.position.y-h.position.x)),e=[...this.clusterB.meshes].sort((l,h)=>l.position.x-l.position.y-(h.position.x-h.position.y)),n=[t[0],t[1]],i=[e[0],e[1]],r=new Fs(.3,.38,16);n.forEach((l,h)=>{const u=new Et({color:ft.colors.cyan,side:je}),d=new ot(r,u);d.position.copy(l.position),d.position.z=.05,this.group.add(d),this.supportVectors.push({ring:d,p:l})}),i.forEach((l,h)=>{const u=new Et({color:ft.colors.accent,side:je}),d=new ot(r,u);d.position.copy(l.position),d.position.z=.05,this.group.add(d),this.supportVectors.push({ring:d,p:l})});const o=new de(16,.08,.08),a=new Et({color:16711935,shininess:90,specular:16777215});this.boundary=new ot(o,a),this.boundary.rotation.z=Math.PI/4,this.boundary.castShadow=!0,this.boundary.receiveShadow=!0,this.group.add(this.boundary);const c=new Go({color:8947848,dashSize:.2,gapSize:.2,transparent:!0,opacity:.6});this.marginAGeom=new Ht,this.updateLineGeometry(this.marginAGeom,.2),this.marginA=new Re(this.marginAGeom,c),this.marginA.computeLineDistances(),this.group.add(this.marginA),this.marginBGeom=new Ht,this.updateLineGeometry(this.marginBGeom,-.2),this.marginB=new Re(this.marginBGeom,c),this.marginB.computeLineDistances(),this.group.add(this.marginB),this.currentMargin=.2,this.targetMargin=1.4}updateLineGeometry(t,e){const i=-6+e,r=6,o=1*r+e,a=[new A(-6,i,0),new A(r,o,0)];t.setFromPoints(a)}show(){this.visible=!0,this.group.visible=!0,this.currentMargin=.2,this.boundary&&this.boundary.material.color.setHex(16711935)}hide(){this.visible=!1,this.group.visible=!1}update(){if(!this.visible)return;this.group.rotation.y=Math.sin(Date.now()*4e-4)*.15,this.clusterA.update(0),this.clusterB.update(Math.PI),this.currentMargin<this.targetMargin?(this.currentMargin+=.015,this.updateLineGeometry(this.marginA.geometry,this.currentMargin),this.marginA.geometry.attributes.position.needsUpdate=!0,this.marginA.computeLineDistances(),this.updateLineGeometry(this.marginB.geometry,-this.currentMargin),this.marginB.geometry.attributes.position.needsUpdate=!0,this.marginB.computeLineDistances()):this.boundary.material.color.setHex(65416);const t=Date.now()*.005;this.supportVectors.forEach((e,n)=>{e.ring.position.copy(e.p.position),e.ring.position.z=.05;const i=1+Math.sin(t+n)*.15;e.ring.scale.set(i,i,1)})}}class Iy{constructor(t){this.scene=t,this.group=new Wt,this.visible=!1,this.points=[],this.neighborLines=[],this.queryPoint=null,this.sweepCircle=null,this.timer=0,this.create(),t.add(this.group)}create(){this.clusterA=new Hs(this.group,12,new A(-3.2,1.6,0),1,ft.colors.cyan,.18),this.clusterB=new Hs(this.group,12,new A(3.2,-1.6,0),1,ft.colors.accent,.18),this.clusterA.meshes.forEach(i=>{i.isCyan=!0,this.points.push(i)}),this.clusterB.meshes.forEach(i=>{i.isCyan=!1,this.points.push(i)}),this.queryPos=new A(-.6,-.5,0);const t=new ie(.25,16,16);this.queryMat=new Et({color:16777215,shininess:90,specular:4473924}),this.queryPoint=new ot(t,this.queryMat),this.queryPoint.position.copy(this.queryPos),this.queryPoint.castShadow=!0,this.queryPoint.receiveShadow=!0,this.group.add(this.queryPoint);const e=new Fs(.01,.05,32),n=new Et({color:8947848,side:je,transparent:!0,opacity:.4});this.sweepCircle=new ot(e,n),this.sweepCircle.position.copy(this.queryPos),this.sweepCircle.position.z=-.05,this.group.add(this.sweepCircle)}runKNNSweep(){this.neighborLines.forEach(t=>this.group.remove(t)),this.neighborLines=[],this.queryMat.color.setHex(16777215),this.sweepCircle.scale.set(1,1,1),this.sweepCircle.material.opacity=.4}show(){this.visible=!0,this.group.visible=!0,this.timer=0,this.runKNNSweep()}hide(){this.visible=!1,this.group.visible=!1,this.neighborLines.forEach(t=>this.group.remove(t)),this.neighborLines=[]}update(){if(!this.visible)return;this.group.rotation.y=Math.sin(Date.now()*4e-4)*.15,this.clusterA.update(0),this.clusterB.update(Math.PI),this.timer++;const t=180;this.timer>t&&(this.runKNNSweep(),this.timer=0);const e=this.timer/t;if(e<.5){const n=e*2*90;this.sweepCircle.scale.set(n,n,1)}else if(e<.8){if(this.neighborLines.length===0){this.sweepCircle.material.opacity=.1;const n=this.points.map(o=>({pt:o,dist:o.position.distanceTo(this.queryPos)}));n.sort((o,a)=>o.dist-a.dist);let i=0;const r=5;for(let o=0;o<r;o++){const a=n[o].pt;a.isCyan&&i++;const c=[this.queryPos,a.position],l=new Ht().setFromPoints(c),h=new Fe({color:16755200,linewidth:2,transparent:!0,opacity:.8}),u=new Re(l,h);this.group.add(u),this.neighborLines.push(u),a.scale.set(1.4,1.4,1.4)}this.majorityIsCyan=i>r/2}}else{const n=this.majorityIsCyan?ft.colors.cyan:ft.colors.accent;this.queryMat.color.set(n);const i=1+Math.sin(Date.now()*.01)*.15;this.queryPoint.scale.set(i,i,i)}this.points.forEach(n=>{n.scale.lerp(new A(1,1,1),.08)})}}class Uy{constructor(t){this.scene=t,this.group=new Wt,this.visible=!1,this.create(),t.add(this.group)}calculateGaussianY(t,e,n,i,r){return r+i*Math.exp(-Math.pow(t-e,2)/(2*Math.pow(n,2)))}createCurveGeometry(t,e,n,i){const r=[];for(let a=-8;a<=8;a+=.1){const c=this.calculateGaussianY(a,t,e,n,i);r.push(new A(a,c,0))}return new Ht().setFromPoints(r)}create(){this.baselineY=-2,this.heightVal=4,this.sigmaVal=1.6,this.muA=-2.2,this.muB=2.2;const t=new de(16,.05,.05),e=new Et({color:8947848,shininess:30}),n=new ot(t,e);n.position.y=this.baselineY,n.castShadow=!0,n.receiveShadow=!0,this.group.add(n);const i=this.createCurveGeometry(this.muA,this.sigmaVal,this.heightVal,this.baselineY),r=new Fe({color:ft.colors.cyan,linewidth:3});this.curveA=new Re(i,r),this.group.add(this.curveA);const o=this.createCurveGeometry(this.muB,this.sigmaVal,this.heightVal,this.baselineY),a=new Fe({color:ft.colors.accent,linewidth:3});this.curveB=new Re(o,a),this.group.add(this.curveB);const c=[new A(0,-3,0),new A(0,5,0)],l=new Ht().setFromPoints(c),h=new Go({color:16777215,dashSize:.2,gapSize:.2});this.queryLine=new Re(l,h),this.queryLine.computeLineDistances(),this.group.add(this.queryLine);const u=new ie(.18,12,12),d=new Et({color:ft.colors.cyan,shininess:80,specular:16777215});this.intersectionDotA=new ot(u,d),this.intersectionDotA.castShadow=!0,this.intersectionDotA.receiveShadow=!0,this.group.add(this.intersectionDotA);const p=new Et({color:ft.colors.accent,shininess:80,specular:16777215});this.intersectionDotB=new ot(u,p),this.intersectionDotB.castShadow=!0,this.intersectionDotB.receiveShadow=!0,this.group.add(this.intersectionDotB),this.queryX=0}show(){this.visible=!0,this.group.visible=!0}hide(){this.visible=!1,this.group.visible=!1}update(){if(!this.visible)return;this.group.rotation.y=Math.sin(Date.now()*4e-4)*.15,this.queryX=Math.sin(Date.now()*.0012)*4.5,this.queryLine.position.x=this.queryX;const t=this.calculateGaussianY(this.queryX,this.muA,this.sigmaVal,this.heightVal,this.baselineY),e=this.calculateGaussianY(this.queryX,this.muB,this.sigmaVal,this.heightVal,this.baselineY);this.intersectionDotA.position.set(this.queryX,t,.02),this.intersectionDotB.position.set(this.queryX,e,.02);const n=.5+(t-this.baselineY)/this.heightVal*1.5,i=.5+(e-this.baselineY)/this.heightVal*1.5;this.intersectionDotA.scale.set(n,n,n),this.intersectionDotB.scale.set(i,i,i)}}class Ny{constructor(t){this.scene=t,this.group=new Wt,this.visible=!1,this.points=[],this.centroids=[],this.centroidTargets=[],this.centroidOriginals=[new A(-4,3,0),new A(4,2.5,0),new A(0,-3.5,0)],this.centroidColors=[16724821,65416,3385087],this.step=0,this.timer=0,this.create(),t.add(this.group)}create(){const t=[new A(-3.5,1,0),new A(3.5,1.5,0),new A(.5,-2,0)],e=new ie(.15,8,8),n=new Et({color:13421772,shininess:40});t.forEach((r,o)=>{for(let a=0;a<18;a++){const c=new ot(e,n.clone()),l=Math.random()*1.6,h=Math.random()*Math.PI*2;c.position.set(r.x+Math.cos(h)*l,r.y+Math.sin(h)*l,(Math.random()-.5)*1),c.clusterIdx=o,c.castShadow=!0,c.receiveShadow=!0,this.group.add(c),this.points.push(c)}});const i=new ie(.35,16,16);for(let r=0;r<3;r++){const o=new Et({color:this.centroidColors[r],shininess:100,specular:16777215,transparent:!0,opacity:.95}),a=new ot(i,o);a.position.copy(this.centroidOriginals[r]),a.castShadow=!0,a.receiveShadow=!0,this.group.add(a),this.centroids.push(a),this.centroidTargets.push(this.centroidOriginals[r].clone())}}runKMeansStep(){if(this.step++,this.step>4){this.step=0,this.centroids.forEach((t,e)=>{t.position.copy(this.centroidOriginals[e]),this.centroidTargets[e].copy(this.centroidOriginals[e])}),this.points.forEach(t=>{t.material.color.setHex(13421772)});return}if(this.step===1||this.step===3)this.points.forEach(t=>{let e=9999,n=0;this.centroids.forEach((i,r)=>{const o=t.position.distanceTo(i.position);o<e&&(e=o,n=r)}),t.material.color.setHex(this.centroidColors[n]),t.assignedCentroid=n,t.scale.set(1.4,1.4,1.4)});else if(this.step===2||this.step===4){const t=[0,0,0],e=[new A,new A,new A];this.points.forEach(n=>{const i=n.assignedCentroid!==void 0?n.assignedCentroid:n.clusterIdx;e[i].add(n.position),t[i]++});for(let n=0;n<3;n++)t[n]>0&&this.centroidTargets[n].copy(e[n].divideScalar(t[n]))}}show(){this.visible=!0,this.group.visible=!0,this.step=0,this.timer=0,this.centroids.forEach((t,e)=>{t.position.copy(this.centroidOriginals[e]),this.centroidTargets[e].copy(this.centroidOriginals[e])}),this.points.forEach(t=>{t.material.color.setHex(13421772),t.scale.set(1,1,1)})}hide(){this.visible=!1,this.group.visible=!1}update(){this.visible&&(this.group.rotation.y=Math.sin(Date.now()*5e-4)*.2,this.timer++,this.timer>90&&(this.runKMeansStep(),this.timer=0),this.centroids.forEach((t,e)=>{t.position.lerp(this.centroidTargets[e],.08);const n=Date.now()*.005,i=1+Math.sin(n+e)*.1;t.scale.set(i,i,i)}),this.points.forEach(t=>{t.scale.lerp(new A(1,1,1),.05)}))}}class Oy{constructor(t){this.scene=t,this.group=new Wt,this.visible=!1,this.points=[],this.arrows=[],this.create(),t.add(this.group)}create(){const e=new ie(.12,8,8),n=new Et({color:"#ff00ff",shininess:60,specular:5032447,transparent:!0,opacity:.8}),i=new ce().makeRotationZ(Math.PI/4).multiply(new ce().makeRotationX(Math.PI/9));for(let d=0;d<80;d++){const p=(Math.random()-.5)*8,g=(Math.random()-.5)*2,_=(Math.random()-.5)*.8,m=new A(p,g,_);m.applyMatrix4(i);const f=new ot(e,n);f.position.copy(m),f.originalPosition=m.clone(),f.castShadow=!0,f.receiveShadow=!0,this.group.add(f),this.points.push(f)}const r=new A(1,1,.3).normalize(),o=new A(0,0,0),a=5,c=new vh(r,o,a,ft.colors.cyan,.6,.3);this.group.add(c),this.arrows.push(c);const l=new A(-1,1,-.2).normalize(),h=2.5,u=new vh(l,o,h,"#ffee00",.6,.3);this.group.add(u),this.arrows.push(u),this.timer=0}show(){this.visible=!0,this.group.visible=!0,this.timer=0}hide(){this.visible=!1,this.group.visible=!1}update(){if(!this.visible)return;this.timer++;const t=300;this.timer>t&&(this.timer=0);const e=this.timer/t;e<.4?(this.group.rotation.x=Math.sin(Date.now()*5e-4)*.3,this.group.rotation.y=Math.sin(Date.now()*3e-4)*.6,this.group.rotation.z=0,this.points.forEach(i=>{i.position.copy(i.originalPosition)})):e<.8?this.points.forEach(i=>{const r=i.originalPosition,o=new A(1,1,.3).normalize(),a=new A(-1,1,-.2).normalize(),c=r.dot(o),l=r.dot(a),h=new A().addScaledVector(o,c).addScaledVector(a,l);i.position.lerpVectors(r,h,(e-.4)*2.5)}):this.points.forEach(i=>{const r=i.originalPosition,o=new A(1,1,.3).normalize(),a=new A(-1,1,-.2).normalize(),c=r.dot(o),l=r.dot(a),h=new A().addScaledVector(o,c).addScaledVector(a,l);i.position.copy(h)});const n=Date.now()*.005;this.arrows.forEach((i,r)=>{const o=1+Math.sin(n+r)*.08;i.scale.set(o,o,o)})}}const ue=new Ip;ue.background=new Gt(197905);const Ws=new fn(ft.camera.fov,window.innerWidth/window.innerHeight,ft.camera.near,ft.camera.far);Ws.position.z=ft.camera.defaultZ;const Ri=new Rv({canvas:document.querySelector("#scene"),antialias:!0,alpha:!1,preserveDrawingBuffer:!0});Ri.setSize(window.innerWidth,window.innerHeight);Ri.setPixelRatio(Math.min(window.devicePixelRatio,2));Ri.shadowMap.enabled=!0;Ri.shadowMap.type=mu;const Fy=new Hp(16777215,.35);ue.add(Fy);const Rn=new Vp(16777215,.8);Rn.position.set(15,20,15);Rn.castShadow=!0;Rn.shadow.mapSize.width=2048;Rn.shadow.mapSize.height=2048;Rn.shadow.camera.near=.5;Rn.shadow.camera.far=100;const qo=25;Rn.shadow.camera.left=-qo;Rn.shadow.camera.right=qo;Rn.shadow.camera.top=qo;Rn.shadow.camera.bottom=-qo;Rn.shadow.bias=-5e-4;ue.add(Rn);const Ir=new kp(65535,3,40,Math.PI/4,.5,1);Ir.position.set(-10,15,10);Ir.castShadow=!0;Ir.shadow.mapSize.width=1024;Ir.shadow.mapSize.height=1024;ue.add(Ir);const Zi=new Pv(Ws,Ri.domElement);Zi.enableDamping=!0;Zi.dampingFactor=.05;Zi.maxDistance=50;Zi.minDistance=2;const Vd=new Hv(ue),Wc=new Wv(ue),Hd=new Xv(Ws),Ce=new qv,br=new Yv(Ri.domElement),By=new fy,vn=new py,Xc={INTRO:new my(ue),KAGGLER_PIPELINE:new Ay(ue),BIAS_VARIANCE:new My(ue),CROSS_VALIDATION:new Sy(ue),LINEAR_REGRESSION:new Dy(ue),LOGISTIC:new xy(ue),REGULARIZATION:new yy(ue),DECISION_TREE:new _y(ue),RANDOM_FOREST:new gy(ue),XGBOOST:new Py(ue),SVM:new Ly(ue),KNN:new Iy(ue),NAIVE_BAYES:new Uy(ue),NEURAL_NET:new Cy(ue),KMEANS:new Ny(ue),PCA:new Oy(ue),EVALUATION:new Ty(ue),ENDING:new by(ue)};Object.values(Xc).forEach(s=>s.hide());window.addEventListener("resize",()=>{Ws.aspect=window.innerWidth/window.innerHeight,Ws.updateProjectionMatrix(),Ri.setSize(window.innerWidth,window.innerHeight)});const No=document.getElementById("select-scene");ft.scenes.forEach(s=>{const t=document.createElement("option");t.value=s.name,t.textContent=s.description,No.appendChild(t)});const zy=document.getElementById("btn-play-pause"),qc=document.getElementById("play-icon"),Yc=document.getElementById("pause-icon"),ky=document.getElementById("check-orbit"),Wd=document.getElementById("check-network"),Fa=document.getElementById("subtitle-text"),hu=document.getElementById("scene-progress"),So=document.getElementById("btn-record"),Kc=document.getElementById("record-text"),Oo=document.getElementById("btn-auto-record"),jc=document.getElementById("auto-record-text");vn.onSubtitleChange=(s,t,e)=>{Fa&&(Fa.innerHTML=s,Fa.style.opacity="1")};vn.onSceneComplete=()=>{if(!Ce.isPlaying)return;if(Ce.currentScene===ft.scenes.length-1){Rr&&setTimeout(()=>{Dl(!0).then(()=>{We("Auto-Recording complete! Video downloaded.","success")})},1e3);return}setTimeout(()=>{Ce.nextScene(),Ks(),qd(),setTimeout(()=>ns(),600)},200)};vn.onProgressUpdate=s=>{Ce.setProgress(s)};function ns(){const s=ft.scenes[Ce.currentScene];if(!s||!Ce.isPlaying)return;const t=s.subtitles?s.subtitles.map(n=>n.text):[],e=Math.max(15e3,t.length*8e3);vn.startScene(t,e)}let Se=null,Wn=null,Ba=[],ar=null,za=0,Ar=!1;function Ur(){if(Ar){Se&&Se.state==="suspended"&&Se.resume();return}Ar=!0,vn.enable();const s=window.AudioContext||window.webkitAudioContext;Se=new s,Wn=Se.createMediaStreamDestination(),ar=Se.createGain(),ar.gain.setValueAtTime(.06,Se.currentTime),ar.connect(Se.destination),ar.connect(Wn),Xd(),setTimeout(()=>ns(),300)}function Xd(){if(!Se||Se.state==="closed")return;const s=2,t=Se.currentTime;Ba.forEach(i=>{try{i.gainNode.gain.setValueAtTime(i.gainNode.gain.value,t),i.gainNode.gain.exponentialRampToValueAtTime(1e-4,t+s),setTimeout(()=>{i.stop(),i.disconnect()},s*1e3+100)}catch{}}),Ba=[];const e=[[55,110,164.81,196],[65.41,130.81,174.61,261.63],[65.41,130.81,196,246.94],[73.42,146.83,174.61,293.66]],n=e[za];za=(za+1)%e.length,n.forEach(i=>{const r=Se.createOscillator(),o=Se.createBiquadFilter(),a=Se.createGain();r.type="sawtooth",r.frequency.setValueAtTime(i,t),o.type="lowpass",o.frequency.setValueAtTime(320,t),o.Q.setValueAtTime(1,t),a.gain.setValueAtTime(1e-4,t),a.gain.exponentialRampToValueAtTime(.18,t+1.5),r.connect(o),o.connect(a),a.connect(ar),r.start(t),Ba.push({stop:()=>{try{r.stop()}catch{}},disconnect:()=>{try{r.disconnect(),o.disconnect(),a.disconnect()}catch{}},gainNode:a})}),setTimeout(Xd,6e3)}function qd(){if(!Se)return;const s=Se.currentTime,t=Se.createOscillator(),e=Se.createBiquadFilter(),n=Se.createGain();t.type="sine",t.frequency.setValueAtTime(880,s),t.frequency.exponentialRampToValueAtTime(440,s+.15),e.type="lowpass",e.frequency.setValueAtTime(1200,s),n.gain.setValueAtTime(1e-4,s),n.gain.linearRampToValueAtTime(.05,s+.02),n.gain.exponentialRampToValueAtTime(1e-4,s+.2),t.connect(e),e.connect(n),n.connect(Se.destination),Wn&&n.connect(Wn),t.start(s),t.stop(s+.25)}zy.addEventListener("click",()=>{Ur(),Ce.togglePlayPause()?(qc.style.display="none",Yc.style.display="block",vn.resume(),vn._stopped&&ns(),We("Playback resumed")):(qc.style.display="block",Yc.style.display="none",vn.pause(),We("Playback paused"))});document.getElementById("btn-prev").addEventListener("click",()=>{vn.stop(),Ce.prevScene(),Ks(),We("Previous scene"),Ce.isPlaying&&Ar&&ns()});document.getElementById("btn-next").addEventListener("click",()=>{vn.stop(),Ce.nextScene(),Ks(),We("Next scene"),Ce.isPlaying&&Ar&&ns()});No.addEventListener("change",s=>{vn.stop(),Ce.setSceneByName(s.target.value),Ks(),Ce.isPlaying&&Ar&&ns()});Wd.addEventListener("change",s=>{const t=s.target.checked;Wc.nodes.forEach(e=>e.visible=t),Wc.lines.forEach(e=>e.visible=t),We(t?"Neural network background active":"Neural network background disabled")});const Gy=document.getElementById("slider-particle-speed"),Vy=document.getElementById("val-particle-speed");Gy.addEventListener("input",s=>{const t=parseFloat(s.target.value);Vy.textContent=t.toFixed(1)+"x",Vd.speedMultiplier=t});const Hy=document.getElementById("slider-camera-speed"),Wy=document.getElementById("val-camera-speed");Hy.addEventListener("input",s=>{const t=parseFloat(s.target.value);Wy.textContent=t.toFixed(1)+"x",Hd.speedMultiplier=t});let Rr=!1,ka=null,uu=null;async function Yd(){if(!ka)try{ka=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1,noiseSuppression:!1,autoGainControl:!1},video:!1}),Se&&Wn&&(uu=Se.createMediaStreamSource(ka),uu.connect(Wn),We("Microphone connected to capture AI voice!","success"))}catch(s){console.warn("Mic access denied or failed:",s),We("Mic access denied. The AI voice will not be in the video.","warning")}}So.addEventListener("click",async()=>{if(Ur(),br.isRecording())await Dl(!1);else{So.classList.add("recording"),Kc.textContent="STOP RECORDING",await Yd(),We("Recording started... Click again to stop & download.","info");try{await new Promise(s=>setTimeout(s,100)),br.start(Wn?Wn.stream:null)}catch(s){console.error("Recording failed to start:",s),We("Recording failed: "+s.message,"error"),So.classList.remove("recording"),Kc.textContent="RECORD MANUAL VIDEO"}}});Oo.addEventListener("click",async()=>{Ur(),Rr||br.isRecording()?await Dl(!0):await Kd()});async function Kd(){Ur(),Rr=!0,vn.stop(),Ce.setSceneByName("INTRO"),Ce.isPlaying=!0,Ks(),qc.style.display="none",Yc.style.display="block",Oo.classList.add("recording"),jc.textContent="STOP AUTO RECORDING",await Yd(),We("Auto-Recording started. Will download when all scenes finish!","info"),setTimeout(()=>{try{br.start(Wn?Wn.stream:null)}catch(s){console.error("Auto-recording failed to start:",s),We("Auto-recording failed: "+s.message,"error"),Rr=!1,Oo.classList.remove("recording"),jc.textContent="START AUTOMATIC VIDEO";return}ns()},400)}async function Dl(s=!1){Rr=!1,s&&vn.stop(),So.classList.remove("recording"),Kc.textContent="RECORD MANUAL VIDEO",Oo.classList.remove("recording"),jc.textContent="START AUTOMATIC VIDEO",We("Recording stopped. Preparing download...","success");try{await br.stop()}catch(t){console.error("Error stopping recording:",t),We("Error saving recording: "+t.message,"error")}}function We(s,t="info"){const e=document.getElementById("toast-container"),n=document.createElement("div");n.className=`toast toast-${t}`,n.textContent=s,e.appendChild(n),setTimeout(()=>{n.style.transition="opacity 0.5s ease",n.style.opacity="0",setTimeout(()=>{n.parentNode===e&&e.removeChild(n)},500)},3500)}let Ga="",Va="";function Ks(){const s=Ce.getCurrentScene(),t=Ce.currentScene;No.value!==s&&(No.value=s);const e=document.getElementById("scene-title"),n=document.getElementById("scene-desc"),i=document.getElementById("scene-counter");e&&(e.textContent=ft.scenes[t].description),n&&(n.textContent=Ce.getSceneExplanation()),i&&(i.textContent=`${String(t+1).padStart(2,"0")} / ${String(ft.scenes.length).padStart(2,"0")}`)}function jd(){requestAnimationFrame(jd),Ce.update();const s=Ce.getCurrentScene();if(s!==Ga){const t=Ga;Ga=s,Ks(),qd(),t?By.trigger(()=>{Va=s}):Va=s}hu&&(hu.style.width=`${Ce.getProgress()}%`),ky.checked?(Zi.enabled=!1,Hd.update()):(Zi.enabled=!0,Zi.update()),Vd.update(),Wd.checked&&Wc.update(),Object.keys(Xc).forEach(t=>{const e=Xc[t];t===Va?(e.visible||e.show(),typeof e.update=="function"&&e.update()):e.visible&&e.hide()}),Ri.render(ue,Ws)}jd();const nr=document.getElementById("loading"),du=document.getElementById("loading-spinner"),fu=document.getElementById("loading-status"),ir=document.getElementById("btn-start");nr&&(setTimeout(()=>{du&&(du.style.display="none"),fu&&(fu.textContent="READY TO START"),ir?(ir.style.display="block",ir.focus()):(nr.classList.add("hidden"),setTimeout(()=>{nr.style.display="none"},600),We("Explainer Engine Online","success"))},800),ir&&ir.addEventListener("click",()=>{Ur(),nr.classList.add("hidden"),setTimeout(()=>{nr.style.display="none"},600),We("Explainer Engine Online — narration starting!","success"),(window.location.search.includes("autorecord")||window.location.search.includes("auto"))&&setTimeout(()=>Kd(),600)}));
