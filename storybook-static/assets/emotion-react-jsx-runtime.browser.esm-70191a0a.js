import{a as Se,F as qe,j as ve}from"./jsx-runtime-bc5d6cf6.js";import{r as _}from"./index-c013ead5.js";import{a as Be}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-cdebb298.js";function He(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}function Ke(e){var r=document.createElement("style");return r.setAttribute("data-emotion",e.key),e.nonce!==void 0&&r.setAttribute("nonce",e.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var Ue=function(){function e(t){var n=this;this._insertTag=function(a){var s;n.tags.length===0?n.insertionPoint?s=n.insertionPoint.nextSibling:n.prepend?s=n.container.firstChild:s=n.before:s=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(a,s),n.tags.push(a)},this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var r=e.prototype;return r.hydrate=function(n){n.forEach(this._insertTag)},r.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Ke(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var s=He(a);try{s.insertRule(n,s.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(n));this.ctr++},r.flush=function(){this.tags.forEach(function(n){return n.parentNode&&n.parentNode.removeChild(n)}),this.tags=[],this.ctr=0},e}(),v="-ms-",Z="-moz-",o="-webkit-",Te="comm",pe="rule",ye="decl",Ze="@import",Oe="@keyframes",Je="@layer",Qe=Math.abs,J=String.fromCharCode,Xe=Object.assign;function er(e,r){return x(e,0)^45?(((r<<2^x(e,0))<<2^x(e,1))<<2^x(e,2))<<2^x(e,3):0}function Re(e){return e.trim()}function rr(e,r){return(e=r.exec(e))?e[0]:e}function f(e,r,t){return e.replace(r,t)}function le(e,r){return e.indexOf(r)}function x(e,r){return e.charCodeAt(r)|0}function G(e,r,t){return e.slice(r,t)}function O(e){return e.length}function be(e){return e.length}function B(e,r){return r.push(e),e}function tr(e,r){return e.map(r).join("")}var Q=1,z=1,Me=0,C=0,y=0,L="";function X(e,r,t,n,a,s,c){return{value:e,root:r,parent:t,type:n,props:a,children:s,line:Q,column:z,length:c,return:""}}function W(e,r){return Xe(X("",null,null,"",null,null,0),e,{length:-e.length},r)}function nr(){return y}function ar(){return y=C>0?x(L,--C):0,z--,y===10&&(z=1,Q--),y}function A(){return y=C<Me?x(L,C++):0,z++,y===10&&(z=1,Q++),y}function M(){return x(L,C)}function H(){return C}function Y(e,r){return G(L,e,r)}function D(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ne(e){return Q=z=1,Me=O(L=e),C=0,[]}function _e(e){return L="",e}function K(e){return Re(Y(C-1,he(e===91?e+2:e===40?e+1:e)))}function sr(e){for(;(y=M())&&y<33;)A();return D(e)>2||D(y)>3?"":" "}function cr(e,r){for(;--r&&A()&&!(y<48||y>102||y>57&&y<65||y>70&&y<97););return Y(e,H()+(r<6&&M()==32&&A()==32))}function he(e){for(;A();)switch(y){case e:return C;case 34:case 39:e!==34&&e!==39&&he(y);break;case 40:e===41&&he(e);break;case 92:A();break}return C}function ir(e,r){for(;A()&&e+y!==47+10;)if(e+y===42+42&&M()===47)break;return"/*"+Y(r,C-1)+"*"+J(e===47?e:A())}function or(e){for(;!D(M());)A();return Y(e,C)}function fr(e){return _e(U("",null,null,null,[""],e=Ne(e),0,[0],e))}function U(e,r,t,n,a,s,c,i,d){for(var m=0,b=0,w=c,N=0,I=0,E=0,h=1,$=1,p=1,S=0,P="",q=a,F=s,T=n,l=P;$;)switch(E=S,S=A()){case 40:if(E!=108&&x(l,w-1)==58){le(l+=f(K(S),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:l+=K(S);break;case 9:case 10:case 13:case 32:l+=sr(E);break;case 92:l+=cr(H()-1,7);continue;case 47:switch(M()){case 42:case 47:B(ur(ir(A(),H()),r,t),d);break;default:l+="/"}break;case 123*h:i[m++]=O(l)*p;case 125*h:case 59:case 0:switch(S){case 0:case 125:$=0;case 59+b:p==-1&&(l=f(l,/\f/g,"")),I>0&&O(l)-w&&B(I>32?Ce(l+";",n,t,w-1):Ce(f(l," ","")+";",n,t,w-2),d);break;case 59:l+=";";default:if(B(T=$e(l,r,t,m,b,a,i,P,q=[],F=[],w),s),S===123)if(b===0)U(l,r,T,T,q,s,w,i,F);else switch(N===99&&x(l,3)===110?100:N){case 100:case 108:case 109:case 115:U(e,T,T,n&&B($e(e,T,T,0,0,a,i,P,a,q=[],w),F),a,F,w,i,n?q:F);break;default:U(l,T,T,T,[""],F,0,i,F)}}m=b=I=0,h=p=1,P=l="",w=c;break;case 58:w=1+O(l),I=E;default:if(h<1){if(S==123)--h;else if(S==125&&h++==0&&ar()==125)continue}switch(l+=J(S),S*h){case 38:p=b>0?1:(l+="\f",-1);break;case 44:i[m++]=(O(l)-1)*p,p=1;break;case 64:M()===45&&(l+=K(A())),N=M(),b=w=O(P=l+=or(H())),S++;break;case 45:E===45&&O(l)==2&&(h=0)}}return s}function $e(e,r,t,n,a,s,c,i,d,m,b){for(var w=a-1,N=a===0?s:[""],I=be(N),E=0,h=0,$=0;E<n;++E)for(var p=0,S=G(e,w+1,w=Qe(h=c[E])),P=e;p<I;++p)(P=Re(h>0?N[p]+" "+S:f(S,/&\f/g,N[p])))&&(d[$++]=P);return X(e,r,t,a===0?pe:i,d,m,b)}function ur(e,r,t){return X(e,r,t,Te,J(nr()),G(e,2,-2),0)}function Ce(e,r,t,n){return X(e,r,t,ye,G(e,0,n),G(e,n+1,-1),n)}function j(e,r){for(var t="",n=be(e),a=0;a<n;a++)t+=r(e[a],a,e,r)||"";return t}function dr(e,r,t,n){switch(e.type){case Je:if(e.children.length)break;case Ze:case ye:return e.return=e.return||e.value;case Te:return"";case Oe:return e.return=e.value+"{"+j(e.children,n)+"}";case pe:e.value=e.props.join(",")}return O(t=j(e.children,n))?e.return=e.value+"{"+t+"}":""}function lr(e){var r=be(e);return function(t,n,a,s){for(var c="",i=0;i<r;i++)c+=e[i](t,n,a,s)||"";return c}}function hr(e){return function(r){r.root||(r=r.return)&&e(r)}}function mr(e){var r=Object.create(null);return function(t){return r[t]===void 0&&(r[t]=e(t)),r[t]}}var pr=function(r,t,n){for(var a=0,s=0;a=s,s=M(),a===38&&s===12&&(t[n]=1),!D(s);)A();return Y(r,C)},yr=function(r,t){var n=-1,a=44;do switch(D(a)){case 0:a===38&&M()===12&&(t[n]=1),r[n]+=pr(C-1,t,n);break;case 2:r[n]+=K(a);break;case 4:if(a===44){r[++n]=M()===58?"&\f":"",t[n]=r[n].length;break}default:r[n]+=J(a)}while(a=A());return r},br=function(r,t){return _e(yr(Ne(r),t))},Ee=new WeakMap,gr=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var t=r.value,n=r.parent,a=r.column===n.column&&r.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(r.props.length===1&&t.charCodeAt(0)!==58&&!Ee.get(n))&&!a){Ee.set(r,!0);for(var s=[],c=br(t,s),i=n.props,d=0,m=0;d<c.length;d++)for(var b=0;b<i.length;b++,m++)r.props[m]=s[d]?c[d].replace(/&\f/g,i[b]):i[b]+" "+c[d]}}},xr=function(r){if(r.type==="decl"){var t=r.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(r.return="",r.value="")}};function Ie(e,r){switch(er(e,r)){case 5103:return o+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return o+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return o+e+Z+e+v+e+e;case 6828:case 4268:return o+e+v+e+e;case 6165:return o+e+v+"flex-"+e+e;case 5187:return o+e+f(e,/(\w+).+(:[^]+)/,o+"box-$1$2"+v+"flex-$1$2")+e;case 5443:return o+e+v+"flex-item-"+f(e,/flex-|-self/,"")+e;case 4675:return o+e+v+"flex-line-pack"+f(e,/align-content|flex-|-self/,"")+e;case 5548:return o+e+v+f(e,"shrink","negative")+e;case 5292:return o+e+v+f(e,"basis","preferred-size")+e;case 6060:return o+"box-"+f(e,"-grow","")+o+e+v+f(e,"grow","positive")+e;case 4554:return o+f(e,/([^-])(transform)/g,"$1"+o+"$2")+e;case 6187:return f(f(f(e,/(zoom-|grab)/,o+"$1"),/(image-set)/,o+"$1"),e,"")+e;case 5495:case 3959:return f(e,/(image-set\([^]*)/,o+"$1$`$1");case 4968:return f(f(e,/(.+:)(flex-)?(.*)/,o+"box-pack:$3"+v+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+o+e+e;case 4095:case 3583:case 4068:case 2532:return f(e,/(.+)-inline(.+)/,o+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(O(e)-1-r>6)switch(x(e,r+1)){case 109:if(x(e,r+4)!==45)break;case 102:return f(e,/(.+:)(.+)-([^]+)/,"$1"+o+"$2-$3$1"+Z+(x(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~le(e,"stretch")?Ie(f(e,"stretch","fill-available"),r)+e:e}break;case 4949:if(x(e,r+1)!==115)break;case 6444:switch(x(e,O(e)-3-(~le(e,"!important")&&10))){case 107:return f(e,":",":"+o)+e;case 101:return f(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+o+(x(e,14)===45?"inline-":"")+"box$3$1"+o+"$2$3$1"+v+"$2box$3")+e}break;case 5936:switch(x(e,r+11)){case 114:return o+e+v+f(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return o+e+v+f(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return o+e+v+f(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return o+e+v+e+e}return e}var wr=function(r,t,n,a){if(r.length>-1&&!r.return)switch(r.type){case ye:r.return=Ie(r.value,r.length);break;case Oe:return j([W(r,{value:f(r.value,"@","@"+o)})],a);case pe:if(r.length)return tr(r.props,function(s){switch(rr(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return j([W(r,{props:[f(s,/:(read-\w+)/,":"+Z+"$1")]})],a);case"::placeholder":return j([W(r,{props:[f(s,/:(plac\w+)/,":"+o+"input-$1")]}),W(r,{props:[f(s,/:(plac\w+)/,":"+Z+"$1")]}),W(r,{props:[f(s,/:(plac\w+)/,v+"input-$1")]})],a)}return""})}},Sr=[wr],vr=function(r){var t=r.key;if(t==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(h){var $=h.getAttribute("data-emotion");$.indexOf(" ")!==-1&&(document.head.appendChild(h),h.setAttribute("data-s",""))})}var a=r.stylisPlugins||Sr,s={},c,i=[];c=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(h){for(var $=h.getAttribute("data-emotion").split(" "),p=1;p<$.length;p++)s[$[p]]=!0;i.push(h)});var d,m=[gr,xr];{var b,w=[dr,hr(function(h){b.insert(h)})],N=lr(m.concat(a,w)),I=function($){return j(fr($),N)};d=function($,p,S,P){b=S,I($?$+"{"+p.styles+"}":p.styles),P&&(E.inserted[p.name]=!0)}}var E={key:t,sheet:new Ue({key:t,container:c,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:s,registered:{},insert:d};return E.sheet.hydrate(i),E},Fe={exports:{}},u={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g=typeof Symbol=="function"&&Symbol.for,ge=g?Symbol.for("react.element"):60103,xe=g?Symbol.for("react.portal"):60106,ee=g?Symbol.for("react.fragment"):60107,re=g?Symbol.for("react.strict_mode"):60108,te=g?Symbol.for("react.profiler"):60114,ne=g?Symbol.for("react.provider"):60109,ae=g?Symbol.for("react.context"):60110,we=g?Symbol.for("react.async_mode"):60111,se=g?Symbol.for("react.concurrent_mode"):60111,ce=g?Symbol.for("react.forward_ref"):60112,ie=g?Symbol.for("react.suspense"):60113,$r=g?Symbol.for("react.suspense_list"):60120,oe=g?Symbol.for("react.memo"):60115,fe=g?Symbol.for("react.lazy"):60116,Cr=g?Symbol.for("react.block"):60121,Er=g?Symbol.for("react.fundamental"):60117,Ar=g?Symbol.for("react.responder"):60118,kr=g?Symbol.for("react.scope"):60119;function k(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case ge:switch(e=e.type,e){case we:case se:case ee:case te:case re:case ie:return e;default:switch(e=e&&e.$$typeof,e){case ae:case ce:case fe:case oe:case ne:return e;default:return r}}case xe:return r}}}function je(e){return k(e)===se}u.AsyncMode=we;u.ConcurrentMode=se;u.ContextConsumer=ae;u.ContextProvider=ne;u.Element=ge;u.ForwardRef=ce;u.Fragment=ee;u.Lazy=fe;u.Memo=oe;u.Portal=xe;u.Profiler=te;u.StrictMode=re;u.Suspense=ie;u.isAsyncMode=function(e){return je(e)||k(e)===we};u.isConcurrentMode=je;u.isContextConsumer=function(e){return k(e)===ae};u.isContextProvider=function(e){return k(e)===ne};u.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ge};u.isForwardRef=function(e){return k(e)===ce};u.isFragment=function(e){return k(e)===ee};u.isLazy=function(e){return k(e)===fe};u.isMemo=function(e){return k(e)===oe};u.isPortal=function(e){return k(e)===xe};u.isProfiler=function(e){return k(e)===te};u.isStrictMode=function(e){return k(e)===re};u.isSuspense=function(e){return k(e)===ie};u.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ee||e===se||e===te||e===re||e===ie||e===$r||typeof e=="object"&&e!==null&&(e.$$typeof===fe||e.$$typeof===oe||e.$$typeof===ne||e.$$typeof===ae||e.$$typeof===ce||e.$$typeof===Er||e.$$typeof===Ar||e.$$typeof===kr||e.$$typeof===Cr)};u.typeOf=k;Fe.exports=u;var Pr=Fe.exports,ze=Pr,Tr={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Or={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Le={};Le[ze.ForwardRef]=Tr;Le[ze.Memo]=Or;var Rr=!0;function Mr(e,r,t){var n="";return t.split(" ").forEach(function(a){e[a]!==void 0?r.push(e[a]+";"):n+=a+" "}),n}var We=function(r,t,n){var a=r.key+"-"+t.name;(n===!1||Rr===!1)&&r.registered[a]===void 0&&(r.registered[a]=t.styles)},Nr=function(r,t,n){We(r,t,n);var a=r.key+"-"+t.name;if(r.inserted[t.name]===void 0){var s=t;do r.insert(t===s?"."+a:"",s,r.sheet,!0),s=s.next;while(s!==void 0)}};function _r(e){for(var r=0,t,n=0,a=e.length;a>=4;++n,a-=4)t=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,r=(t&65535)*1540483477+((t>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(a){case 3:r^=(e.charCodeAt(n+2)&255)<<16;case 2:r^=(e.charCodeAt(n+1)&255)<<8;case 1:r^=e.charCodeAt(n)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var Ir={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Fr=/[A-Z]|^ms/g,jr=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Ge=function(r){return r.charCodeAt(1)===45},Ae=function(r){return r!=null&&typeof r!="boolean"},de=mr(function(e){return Ge(e)?e:e.replace(Fr,"-$&").toLowerCase()}),ke=function(r,t){switch(r){case"animation":case"animationName":if(typeof t=="string")return t.replace(jr,function(n,a,s){return R={name:a,styles:s,next:R},a})}return Ir[r]!==1&&!Ge(r)&&typeof t=="number"&&t!==0?t+"px":t};function V(e,r,t){if(t==null)return"";if(t.__emotion_styles!==void 0)return t;switch(typeof t){case"boolean":return"";case"object":{if(t.anim===1)return R={name:t.name,styles:t.styles,next:R},t.name;if(t.styles!==void 0){var n=t.next;if(n!==void 0)for(;n!==void 0;)R={name:n.name,styles:n.styles,next:R},n=n.next;var a=t.styles+";";return a}return zr(e,r,t)}case"function":{if(e!==void 0){var s=R,c=t(e);return R=s,V(e,r,c)}break}}if(r==null)return t;var i=r[t];return i!==void 0?i:t}function zr(e,r,t){var n="";if(Array.isArray(t))for(var a=0;a<t.length;a++)n+=V(e,r,t[a])+";";else for(var s in t){var c=t[s];if(typeof c!="object")r!=null&&r[c]!==void 0?n+=s+"{"+r[c]+"}":Ae(c)&&(n+=de(s)+":"+ke(s,c)+";");else if(Array.isArray(c)&&typeof c[0]=="string"&&(r==null||r[c[0]]===void 0))for(var i=0;i<c.length;i++)Ae(c[i])&&(n+=de(s)+":"+ke(s,c[i])+";");else{var d=V(e,r,c);switch(s){case"animation":case"animationName":{n+=de(s)+":"+d+";";break}default:n+=s+"{"+d+"}"}}}return n}var Pe=/label:\s*([^\s;\n{]+)\s*(;|$)/g,R,Lr=function(r,t,n){if(r.length===1&&typeof r[0]=="object"&&r[0]!==null&&r[0].styles!==void 0)return r[0];var a=!0,s="";R=void 0;var c=r[0];c==null||c.raw===void 0?(a=!1,s+=V(n,t,c)):s+=c[0];for(var i=1;i<r.length;i++)s+=V(n,t,r[i]),a&&(s+=c[i]);Pe.lastIndex=0;for(var d="",m;(m=Pe.exec(s))!==null;)d+="-"+m[1];var b=_r(s)+d;return{name:b,styles:s,next:R}},ue={}.hasOwnProperty,De=_.createContext(typeof HTMLElement<"u"?vr({key:"css"}):null);De.Provider;var Wr=function(r){return _.forwardRef(function(t,n){var a=_.useContext(De);return r(t,a,n)})},Gr=_.createContext({}),me="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Ve=function(r,t){var n={};for(var a in t)ue.call(t,a)&&(n[a]=t[a]);return n[me]=r,n},Dr=function(r){var t=r.cache,n=r.serialized,a=r.isStringTag;return We(t,n,a),Be(function(){return Nr(t,n,a)}),null},Vr=Wr(function(e,r,t){var n=e.css;typeof n=="string"&&r.registered[n]!==void 0&&(n=r.registered[n]);var a=e[me],s=[n],c="";typeof e.className=="string"?c=Mr(r.registered,s,e.className):e.className!=null&&(c=e.className+" ");var i=Lr(s,void 0,_.useContext(Gr));c+=r.key+"-"+i.name;var d={};for(var m in e)ue.call(e,m)&&m!=="css"&&m!==me&&(d[m]=e[m]);return d.ref=t,d.className=c,_.createElement(_.Fragment,null,_.createElement(Dr,{cache:r,serialized:i,isStringTag:typeof a=="string"}),_.createElement(a,d))}),Ye=Vr,Hr=qe;function Kr(e,r,t){return ue.call(r,"css")?ve(Ye,Ve(e,r),t):ve(e,r,t)}function Ur(e,r,t){return ue.call(r,"css")?Se(Ye,Ve(e,r),t):Se(e,r,t)}export{Hr as F,Gr as T,Kr as a,Mr as g,Nr as i,Ur as j,mr as m,We as r,Lr as s,Wr as w};
