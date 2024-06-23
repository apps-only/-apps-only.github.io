var Js=Object.defineProperty;var Qs=(e,t,o)=>t in e?Js(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var _t=(e,t,o)=>Qs(e,typeof t!="symbol"?t+"":t,o);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const Zr=e=>`<!--${e}-->`,I=(e,...t)=>({values:t,getTemplateHTML:()=>{const o=Zr(String(Math.random()).slice(2)),r=document.createElement("template");return r.innerHTML=e.join(o),{mark:o,template:r}}}),Ur=(e,t,o)=>{e.forEach(r=>{var s;if(r.nodeType===Node.TEXT_NODE&&((s=r.textContent)!=null&&s.includes(t))&&(r.textContent=r.textContent.replaceAll(t,()=>String(o.value))),r.nodeType===Node.COMMENT_NODE&&r.textContent&&t===Zr(r.textContent)&&r.parentNode.replaceChild(document.createTextNode(String(o.value)),r),r.nodeType===Node.ELEMENT_NODE){const n=r;n.getAttributeNames().forEach(l=>{const a=n.getAttribute(l);if(l==="ref"&&a===t)return n.removeAttribute(l),o.value(n);if(l.startsWith("@")){const[f,c]=l.slice(1).split("."),m=a===t&&o.value;return n.addEventListener(f,h=>{m&&m(h,n),c==="stop"&&h.stopPropagation(),c==="prevent"&&h.preventDefault()},{passive:c==="passive"}),n.removeAttribute(l)}a!=null&&a.includes(t)&&n.setAttribute(l,a.replaceAll(t,()=>String(o.value)))}),Ur(r.childNodes,t,o)}})},Jt={},en=(e,t)=>{Jt[e]||(Jt[e]=t.getTemplateHTML());const{mark:o,template:r}=Jt[e],s=r.cloneNode(!0),n={index:0,get value(){const i=t.values[this.index];return this.index++,i}};return Ur(s.content.childNodes,o,n),s.content},tn=(e,t)=>{if(e===void 0)return t;if(typeof t=="string")return String(e);if(typeof t=="number")return Number(e);if(typeof t=="boolean")return typeof e=="boolean"?e:e==="true";throw new TypeError},Vr=new CSSStyleSheet;Vr.replaceSync(":host{ user-select: none;-webkit-user-select: none }");const P=e=>{const t=new Map,o=[];for(const n in e.props)o.push(n);const r=new CSSStyleSheet;r.replaceSync(e.style??"");class s extends HTMLElement{constructor(){var m,h;super();const i=this.attachShadow({mode:"closed"}),l={...e.props},a={props:{...e.props}},f={};for(const b in this)b in HTMLElement.prototype||(f[b]=this[b]);for(const b in l)Object.defineProperty(this,b,{enumerable:!0,get:()=>l[b],set:E=>{var W,D,R;let z=tn(E,a.props[b]);if(z!==l[b]){if(e.propSyncs===!0||(W=e.propSyncs)!=null&&W.includes(b)){const U=this.getAttribute(b),G=String(z);if(U!==null&&z===a.props[b]){this.removeAttribute(b);return}if(G!==U&&z!==a.props[b]){this.setAttribute(b,G);return}}l[b]=z,(R=(D=a.watches)==null?void 0:D[b])==null||R.call(D,z)}}});for(const b in f)this[b]=f[b];const c=(m=e.setup)==null?void 0:m.apply(this,[i]);i.adoptedStyleSheets=[Vr,r],i.appendChild(en(e.name,c.render())),a.events={adopted:c.adopted,mounted:c.mounted,unmounted:c.unmounted},a.watches=c.watches,(h=c.created)==null||h.call(c);for(const b in c.expose)Object.defineProperty(this,b,{get:()=>{var L;return(L=c.expose)==null?void 0:L[b]}});t.set(this,a)}connectedCallback(){var i,l,a;(a=(l=(i=t.get(this))==null?void 0:i.events)==null?void 0:l.mounted)==null||a.call(l)}disconnectedCallback(){var i,l,a;(a=(l=(i=t.get(this))==null?void 0:i.events)==null?void 0:l.unmounted)==null||a.call(l)}adoptedCallback(){var i,l,a;(a=(l=(i=t.get(this))==null?void 0:i.events)==null?void 0:l.adopted)==null||a.call(l)}attributeChangedCallback(i,l,a){this[i]=a??void 0}}return _t(s,"observedAttributes",o),s.define=function(){!customElements.get(e.name)&&customElements.define(e.name,this)},s},on=`
:host{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 18px;
  height: 18px;
  background: var(--s-color-error, #ba1a1a);
  color: var(--s-color-on-error, #ffffff);
  border-radius: 18px;
  padding: 0 3px;
  font-size: .625rem;
  box-sizing: border-box;
  vertical-align: middle;
}
:host(:empty){
  min-width: 8px;
  height: 8px;
  margin: 5px;
}
`,rn="s-badge",sn={};class nn extends P({name:rn,props:sn,style:on,setup(){return{render:()=>I`
        <slot></slot>
      `}}}){}nn.define();const ho=matchMedia("(pointer:coarse)");ho.addEventListener("change",({matches:e})=>ue.touched=e);const ue={touched:ho.matches,addEventListener:e=>ho.addEventListener("change",()=>e(ue.touched))},Lt=document.createElement("div");Lt.setAttribute("style","position: fixed;right: 0;bottom: 0;width: 100%;height: 100%;pointer-events: none");const Rt=e=>{e.appendChild(Lt);const t=Lt.getBoundingClientRect();return e.removeChild(Lt),{left:t.left,top:t.top,width:t.width,height:t.height}},ln=`
:host{
  display: inline-block;
  vertical-align: middle;
  position: relative;
  cursor: pointer;
}
:host([attached=true]){
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-radius: inherit;
}
.container{
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  pointer-events: none;
  overflow: hidden;
  border-radius: inherit;
}
.animation {
  background: var(--ripple-color, currentColor);
  border-radius: 50%;
  transition: opacity .8s;
  opacity: var(--ripple-opacity, .2);
  width: var(--size);
  height: var(--size);
  position: absolute;
  transform: translate(-50%, -50%) scale(0);
  left: var(--x);
  top: var(--y);
}
.container::before{
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: inherit;
  background: var(--ripple-color, currentColor);
  filter: opacity(0);
  transition: filter .2s;
  will-change: filter;
}
.container.hover::before{
  filter: opacity(.1);
}
`,an="s-ripple",cn={centered:!1,attached:!1},ar=e=>{const t=()=>{e(),document.removeEventListener("pointerup",t),document.removeEventListener("pointercancel",t)};document.addEventListener("pointerup",t),document.addEventListener("pointercancel",t)};class dn extends P({name:an,style:ln,props:cn,propSyncs:["attached"],setup(){let t;const o=()=>!ue.touched&&t.classList.add("hover"),r=()=>!ue.touched&&t.classList.remove("hover"),s=(c,m)=>{const h=document.createElement("div");h.className="animation";const{offsetWidth:b,offsetHeight:L}=t;let E=Math.sqrt(b*b+L*L);const z={x:"50%",y:"50%"};if(!this.centered){const{left:R,top:U}=t.getBoundingClientRect(),G=c.clientX-R,O=c.clientY-U,ce=L/2,ie=b/2,Ve=(Math.abs(ce-O)+ce)*2,ge=(Math.abs(ie-G)+ie)*2;E=Math.sqrt(Ve*Ve+ge*ge),z.x=`${G}px`,z.y=`${O}px`}h.setAttribute("style",`--size: ${E}px;--x: ${z.x};--y: ${z.y};`);const W=()=>h.isConnected&&t.removeChild(h);h.addEventListener("transitionend",W,{once:!0}),h.addEventListener("transitioncancel",W,{once:!0});const D=()=>h.style.opacity="0";if(t.appendChild(h),h.animate([{transform:"translate(-50%, -50%) scale(0)"},{transform:"translate(-50%, -50%) scale(1)"}],{duration:800,fill:"forwards",easing:"cubic-bezier(.2, .9, .1, .9)"}),!m)return ar(D);window.getComputedStyle(h).top,D()},n=c=>{if(c.pointerType==="mouse")return s(c);let m=!1;const h=()=>clearTimeout(b),b=setTimeout(()=>{s(c,m),document.removeEventListener("pointermove",h)},80);ar(()=>m=!0),document.addEventListener("pointermove",h,{once:!0})},i=c=>{c.button===0&&n(c)};let l=this;const a=()=>{l=this.attached?this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode:this,l==null||l.addEventListener("mouseover",o),l==null||l.addEventListener("mouseleave",r),l==null||l.addEventListener("wheel",r,{passive:!0}),l==null||l.addEventListener("pointerdown",i)},f=()=>{l==null||l.removeEventListener("mouseover",o),l==null||l.removeEventListener("mouseleave",r),l==null||l.removeEventListener("wheel",r),l==null||l.removeEventListener("pointerdown",i)};return{mounted:a,unmounted:f,watches:{attached:()=>{f(),a()}},render:()=>I`
        <slot></slot>
        <div class="container" ref="${c=>t=c}"></div>
      `}}}){}dn.define();const fn=`
:host{
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  display: inline-flex;
  vertical-align: middle;
  border-radius: 20px;
  padding: 0 24px;
  height: 40px;
  text-transform: capitalize;
  position: relative;
  cursor: pointer;
  font-size: .875rem;
  font-weight: 500;
  line-height: 1;
  white-space: nowrap;
  background: var(--s-color-primary, #5256a9);
  color: var(--s-color-on-primary, #ffffff);
  transition: box-shadow .2s;
  overflow: hidden;
}
:host([disabled=true]){
  pointer-events: none !important;
  background: color-mix(in srgb, var(--s-color-on-surface, #1c1b1f) 12%, transparent) !important;
  color: color-mix(in srgb, var(--s-color-on-surface, #1c1b1f) 38%, transparent) !important;
}
:host([type=elevated]){
  background: var(--s-color-surface-container-low, #f6f2f7);
  color: var(--s-color-primary, #5256a9);
  box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12));
}
:host([type=elevated][disabled=true]){
  box-shadow: none !important;
}
:host([type=filled-tonal]){
  background: var(--s-color-secondary-container, #e2e0f9);
  color: var(--s-color-on-secondary-container, #191a2c);
}
:host([type=outlined]){
  border: solid 1px var(--s-color-outline, #777680);
  background: none;
  color: var(--s-color-primary, #5256a9);
}
:host([type=outlined][disabled=true]){
  background: none !important;
  border-color: color-mix(in srgb, var(--s-color-on-surface, #1c1b1f) 12%, transparent) !important;
}
:host([type=text]){
  background: none;
  color: var(--s-color-primary, #5256a9);
  padding: 0 16px;
}
:host([type=text][disabled=true]){
  background: none !important;
}
.ripple{
  border-radius: 0;
}
::slotted(*){
  color: inherit;
  width: 18px;
  height: 18px;
}
::slotted(s-icon[slot=start]){
  margin: 0 4px 0 -8px;
}
::slotted(s-icon[slot=end]){
  margin: 0 -8px 0 4px;
}
::slotted(s-circular-progress[slot=start]){
  margin: 0 8px 0 -8px;
}
::slotted(s-circular-progress[slot=end]){
  margin: 0 -8px 0 8px;
}
:host([type=text]) ::slotted(s-icon[slot=start]){
  margin: 0 4px 0 -4px;
}
:host([type=text]) ::slotted(s-icon[slot=end]){
  margin: 0 -4px 0 4px;
}
@media (pointer: coarse){
  :host([type=elevated]:active){
    box-shadow: var(--s-elevation-level2, 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12));
  }
  :host(:active),
  :host([type=filled-tonal]:active){
    box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12));
  }
  :host([type=outlined]:active),
  :host([type=text]:active){
    box-shadow: none;
  }
}
@media (pointer: fine){
  :host([type=elevated]:hover){
    box-shadow: var(--s-elevation-level2, 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12));
  }
  :host(:hover),
  :host([type=filled-tonal]:hover){
    box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12));
  }
  :host([type=outlined]:hover),
  :host([type=text]:hover){
    box-shadow: none;
  }
}
`,pn="s-button",un={disabled:!1,type:"filled"};class hn extends P({name:pn,style:fn,props:un,propSyncs:!0,setup(){return{render:()=>I`
        <slot name="start"></slot>
        <slot></slot>
        <slot name="end"></slot>
        <s-ripple class="ripple" attached="true"></s-ripple>
      `}}}){}hn.define();const mn=`
:host{
  display: inline-block;
  vertical-align: middle;
  background: var(--s-color-surface-container-low, #f6f2f7);
  box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .1));
  border-radius: 12px;
  position: relative;
  font-size: .875rem;
  box-sizing: border-box;
  max-width: 280px;
  color: var(--s-color-on-surface, #1c1b1f);
  overflow: hidden;
}
:host([type=filled]){
  background: var(--s-color-surface-container-highest, #e5e1e6);
  box-shadow: none;
}
:host([type=outlined]){
  background: var(--s-color-surface, #fffbff);
  border: solid 1px var(--s-color-outline-variant, #c7c5d0);
  box-shadow: none;
}
:host([clickable=true]){
  cursor: pointer;
  transition: box-shadow .2s;
}
:host([clickable=true]) .ripple{
  display: block;
}
.action{
  display: flex;
  justify-content: flex-end;
  padding: 0 12px;
}
.ripple{
  display: none;
  border-radius: 0;
}
::slotted([slot=image]){
  display: block;
  height: 128px;
  background: var(--s-color-surface-container-high, #eae7ec);
}
::slotted([slot=headline]){
  font-size: 1.5rem;
  line-height: 1.6;
  margin: 16px 16px 0 16px;
}
::slotted([slot=subhead]){
  font-size: 1rem;
  line-height: 1.6;
  margin: 4px 16px;
}
::slotted([slot=text]){
  line-height: 1.6;
  margin: 8px 16px;
  color: var(--s-color-on-surface-variant, #46464f);
}
::slotted(s-button[slot=action]){
  margin: 16px 4px;
}
@media (pointer: fine){
  :host([clickable=true][type=filled]:hover),
  :host([clickable=true][type=outlined]:hover){
    box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .1));
  }
  :host([clickable=true]:hover){
    box-shadow: var(--s-elevation-level2, 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12));
  }
}
`,gn="s-card",xn={type:"elevated",clickable:!1};class vn extends P({name:gn,style:mn,props:xn,propSyncs:!0,setup(){return{render:()=>I`
        <slot name="start"></slot>
        <slot name="image"></slot>
        <slot name="headline"></slot>
        <slot name="subhead"></slot>
        <slot name="text"></slot>
        <slot></slot>
        <div class="action">
          <slot name="action" @pointerdown.stop></slot>
        </div>
        <slot name="end"></slot>
        <s-ripple class="ripple" attached="true"></s-ripple>
      `}}}){}vn.define();const bn=`
:host{
  display: block;
  height: 280px;
  background: var(--s-color-surface-container-low, #f6f2f7);
  border-radius: 8px;
  position: relative;
  color: var(--s-color-primary, #5256a9);
  overflow: hidden;
}
.container{
  display: flex;
  justify-content: flex-start;
  height: 100%;
  transition: transform .2s;
}
.dot{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}
.dot>.item{
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--s-color-secondary-container, #e2e0f9);
  flex-shrink: 0;
  margin: 16px 4px;
  cursor: pointer;
  pointer-events: auto;
}
.dot>.checked{
  background: currentColor;
  opacity: 1;
}
::slotted(*){
  display: block;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`,yn="s-carousel",wn={duration:4e3};class _n extends P({name:yn,style:bn,props:wn,setup(){let t,o,r,s=0,n=0,i=0;const l=()=>{var c,m;t.style.transform=`translateX(-${s*100}%)`,(c=o.querySelector(".checked"))==null||c.classList.remove("checked"),(m=o.children[s])==null||m.classList.add("checked")},a=()=>{clearInterval(i),l(),n!==0&&(i=setInterval(()=>{const c=s+1;s=c===n?0:c,l()},this.duration))},f=()=>{o.innerHTML="";const c=r.assignedElements(),m=document.createDocumentFragment();for(const h in c){const b=document.createElement("div"),L=Number(h);b.className=L===0?"item checked":"item",b.addEventListener("click",()=>{s=L,a()}),m.appendChild(b)}n=c.length,o.appendChild(m),s=0,a()};return{mounted:a,unmounted:()=>clearInterval(i),watches:{duration:a},render:()=>I`
        <div class="container" ref="${c=>t=c}">
          <slot ref="${c=>r=c}" @slotchange="${f}"></slot>
        </div>
        <div class="dot" ref="${c=>o=c}"></div>
      `}}}){}_n.define();const kn=`
:host{
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: var(--s-color-primary, #5256a9);
}
:host([disabled=true]){
  pointer-events: none !important;
}
.icon{
  width: 60%;
  height: 60%;
  fill: currentColor;
}
.color{
  color: var(--s-color-on-surface-variant, #46464f);
}
:host([checked=true]) .color,
:host([indeterminate=true]) .color{
  color: currentColor;
}
:host([disabled=true]) .color{
  color: color-mix(in srgb ,var(--s-color-on-surface, #1c1b1f) 38%, transparent) !important;
}
`,$n="s-checkbox",En={disabled:!1,checked:!1,indeterminate:!1},Xe={indeterminate:"M280-440h400v-80H280v80Zm-80 320q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z",uncheck:"M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z",checked:"m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"};class Tn extends P({name:$n,style:kn,props:En,propSyncs:!0,setup(){let t;return this.addEventListener("click",()=>{if(this.indeterminate)return this.indeterminate=!1;this.checked=!this.checked,this.dispatchEvent(new Event("change"))}),{watches:{indeterminate:o=>t.setAttribute("d",o?Xe.indeterminate:this.checked?Xe.checked:Xe.uncheck),checked:o=>!this.indeterminate&&t.setAttribute("d",o?Xe.checked:Xe.uncheck)},render:()=>I`
        <svg class="icon color" viewBox="0 -960 960 960">
          <path ref="${o=>t=o}" d="${Xe.uncheck}"></path>
        </svg>
        <s-ripple class="color" attached="true" centered="true"></s-ripple>
      `}}}){}Tn.define();const Cn=`
:host{
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  padding: 0 16px;
  height: 32px;
  border: solid 1px var(--s-color-color-outline, #777680);
  border-radius: 8px;
  box-sizing: border-box;
  font-size: .875rem;
  position: relative;
  cursor: pointer;
  overflow: hidden;
}
:host([type=elevated]){
  border: none;
  box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12));
}
:host([type=filled-tonal]){
  background: var(--s-color-secondary-container, #e2e0f9);
  color: var(--s-color-on-surface-variant, #46464f);
  border: none;
}
.ripple{
  display: none;
  border-radius: 0;
}
:host([clickable=true]) .ripple{
  display: block;
}
::slotted(*){
  width: 18px;
  height: 18px;
}
::slotted([slot=start]){
  margin: 0 8px 0 -8px;
}
::slotted([slot=end]){
  margin: 0 -8px 0 8px;
}
::slotted(s-icon-button[slot=action]){
  margin: 0 -12px 0 8px;
  width: 24px;
  height: 24px;
  padding: 3px;
  flex-shrink: 0;
}
`,Sn="s-chip",Ln={type:"outlined",clickable:!1};class An extends P({name:Sn,style:Cn,props:Ln,propSyncs:!0,setup(){return{render:()=>I`
        <slot name="start"></slot>
        <slot></slot>
        <slot name="end"></slot>
        <slot name="action" @pointerdown.stop></slot>
        <s-ripple class="ripple" attached="true"></s-ripple>
      `}}}){}An.define();const In=`
:host{
  display: inline-block;
  vertical-align: middle;
  position: relative;
  width: 48px;
  height: 48px;
  color: var(--s-color-primary, #5256a9);
}
:host([indeterminate=true]) .determinable,
.indeterminate{
  display: none;
}
:host([indeterminate=true]) .indeterminate{
  display: block;
  animation: rotate 1568ms linear infinite;
  width: inherit;
  height: inherit;
}
@keyframes stroke{
  0% { stroke-dashoffset: var(--dasharray) }
  50% { stroke-dashoffset: calc(var(--dasharray) / 4) }
  100% { stroke-dashoffset: var(--dasharray) }
}
@keyframes stroke-rotate{
  0% { transform: rotate(0deg) }
  12.5% { transform: rotate(0deg) }
  25% {transform: rotate(270deg)}
  37.5% {transform: rotate(270deg)}
  50% {transform: rotate(540deg)}
  62.5% {transform: rotate(540deg)}
  75% {transform: rotate(810deg)}
  87.5% {transform: rotate(810deg)}
  100% { transform: rotate(1080deg) }
  100% { transform: rotate(1080deg) }
}
@keyframes rotate{
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
}
svg{
  height: inherit;
  width: inherit;
  stroke: currentColor;
}
circle{
  stroke-linecap: round;
  fill: none;
  stroke-dasharray: var(--dasharray)
}
.unckecked{
  stroke: var(--s-color-secondary-container, #e2e0f9);
}
`,Pn="s-circular-progress",qn={indeterminate:!1,max:100,value:0};class Mn extends P({name:Pn,style:In,props:qn,propSyncs:["indeterminate"],setup(){let t;const s=44*Math.PI,n=()=>{const i=Math.min(this.value,this.max)/this.max*100;t.style.strokeDashoffset=`${s-s*(i/100)}px`};return{watches:{max:n,value:n},render:()=>I`
        <svg class="determinable" viewBox="0 0 48 48" style="transform: rotate(-90deg);--dasharray: ${s}px;">
          <circle class="unckecked" cx="${48/2}" cy="${48/2}" r="${44/2}" style="stroke-width: ${4}px" />
          <circle ref="${i=>t=i}" cx="${48/2}" cy="${48/2}" r="${44/2}" style="stroke-dashoffset: ${s}px;stroke-width: ${4}px" />
        </svg>
        <div class="indeterminate">
          <svg viewBox="0 0 48 48" style="animation: stroke-rotate 5.2s ease-in-out infinite;--dasharray: ${s}px;">
            <circle transform="rotate(-90, ${48/2}, ${48/2})" cx="${48/2}" cy="${48/2}" r=" ${44/2}" style="animation: stroke 1.3s ease-in-out infinite;stroke-width: ${4}px"></circle>
          </svg>
        </div>
      `}}}){}Mn.define();const On=`
:host{
  display: block;
  overflow: auto;
}
@media (pointer: fine){
  :host::-webkit-scrollbar{
    width: 6px;
    height: 6px;
    background: transparent;
  }
  :host::-webkit-scrollbar-thumb{
    background: var(--s-color-outline-variant, #c7c5d0);
    border-radius: 3px;
  }
  @supports not selector(::-webkit-scrollbar){
    :host{
      scrollbar-color: var(--s-color-outline-variant, #c7c5d0) transparent;
    }
  }
}
`,Nn="s-scroll-view",zn={};class Rn extends P({name:Nn,style:On,props:zn,setup(){return{render:()=>I`
        <slot></slot>
      `}}}){}Rn.define();const Hn=`
:host{
  display: inline-block;
  vertical-align: middle;
}
.wrapper{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
  transition: filter .2s;
  filter: opacity(0);
}
.wrapper.show{
  filter: opacity(1);
  pointer-events: auto;
}
.scrim{
  background: var(--s-color-scrim, #000000);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: opacity(.8);
}
.wrapper-container{
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scale(.9);
  transition: transform .2s;
}
.wrapper.show .wrapper-container{
  transform: scale(1);
}
.container{
  max-width: calc(100% - 48px);
  max-height: calc(100% - 48px);
  background: var(--s-color-surface-container-highest, #e5e1e6);
  position: relative;
  border-radius: 28px;
  box-shadow: var(--s-elevation-level5, 0 8px 10px -6px rgba(0, 0, 0, .2), 0 16px 24px 2px rgba(0, 0, 0, .14), 0 6px 30px 5px rgba(0, 0, 0, .12));
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.wrapper.show .container{
  pointer-events: auto;
}
:host([size=full]) .container{
  width: 100%;
  height: 100%;
  border-radius: 0;
  max-width: none;
  max-height: none;
}
::slotted([slot=headline]){
  padding: 24px 24px 0 24px;
  font-size: 1.5rem;
  line-height: 1.6;
  font-weight: 600;
  color: var(--s-color-on-surface, #1c1b1f);
  flex-shrink: 0;
}
.text{
  user-select: text;
  -webkit-user-select: text;
  flex-grow: 1;
}
::slotted([slot=text]){
  margin: 16px 24px;
  line-height: 1.6;
}
.action{
  display: flex;
  justify-content: flex-end;
  padding: 0 14px;
  flex-shrink: 0;
}
::slotted(s-button[slot=action]){
  min-width: 72px;
  margin: 20px 2px;
}
::slotted([slot=text]),
::slotted(:not([slot])){
  max-width: 520px;
  min-width: 280px;
}
:host([size=full]) ::slotted([slot=text]),
:host([size=full]) ::slotted(:not([slot])){
  max-width: none;
}
`,jn="s-dialog",Fn={size:"basic"},Bn=e=>{let t=document.body;const o=new Ao,r=document.body.firstElementChild;r&&r.tagName==="S-PAGE"&&(t=r);const s=document.createElement("div");if(s.slot="text",typeof e=="string")s.textContent=e,o.appendChild(s);else{if(e.root&&(t=e.root),e.headline){const n=document.createElement("div");n.slot="headline",n.textContent=e.headline,o.appendChild(n)}s.textContent=e.text,o.appendChild(s);for(const n of e.actions??[]){const i=document.createElement("s-button");i.slot="action",i.type="text",i.textContent=n.text,n.click&&i.addEventListener("click",n.click),o.appendChild(i)}}t.appendChild(o),o.addEventListener("dismissed",()=>t.removeChild(o)),o.show()};class Ao extends P({name:jn,style:Hn,props:Fn,propSyncs:["size"],setup(t){let o;const r=()=>{const i=Rt(t);(i.top!==0||i.left!==0)&&o.setAttribute("style",`width: ${innerWidth}px;height: ${innerHeight}px;top: ${0-i.top}px;left: ${0-i.left}px`),o.classList.add("show"),this.dispatchEvent(new Event("show"))},s=()=>{o.classList.remove("show"),this.dispatchEvent(new Event("dismiss"))},n=i=>{if(i.propertyName!=="transform")return;const l=o.classList.contains("show");this.dispatchEvent(new Event(l?"showed":"dismissed"))};return{expose:{show:r,dismiss:s},render:()=>I`
        <slot name="trigger" @click="${r}"></slot>
        <div class="wrapper" ref="${i=>o=i}" @transitionend="${n}">
          <div class="scrim" @click="${s}"></div>
          <div class="wrapper-container">
            <div class="container" part="container">
              <slot name="headline"></slot>
              <s-scroll-view class="text">
                <slot></slot>
                <slot name="text"></slot>
              </s-scroll-view>
              <div class="action">
                <slot name="action" @click="${s}"></slot>
              </div>
            </div>
          </div>
        </div>
      `}}}){}_t(Ao,"show",Bn);Ao.define();const Wn=`
:host{
  display: block;
  height: 1px;
  background: var(--s-color-outline-variant, #c7c5d0);
  margin: 0 16px;
}
`,Dn="s-divider",Zn={};class Un extends P({name:Dn,style:Wn,props:Zn,setup(){return{render:()=>I`
        <slot></slot>
      `}}}){}Un.define();const Vn=`
:host{
  display: block;
  height: 100%;
}
.container{
  display: flex;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.scrim{
  background: var(--s-color-scrim, #000000);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: opacity(0);
  pointer-events: none;
  transition: filter .2s;
}
.start,
.end{
  min-width: 0;
  height: 100%;
  width: 0;
  overflow: hidden;
  flex-shrink: 0;
}
.show-start>.start,
.show-end>.end{
  width: auto;
}
.start{
  order: -1;
}
::slotted(:not([slot])){
  flex-grow: 1;
  min-width: 0;
}
::slotted([slot=start]),
::slotted([slot=end]){
  width: 280px;
  display: flow-root;
  flex-shrink: 0;
  background: var(--s-color-surface-container-low, #f6f2f7);
  border-color: var(--s-color-surface-container-high, #eae7ec);
  border-width: 1px;
  height: 100%;
  box-sizing: border-box;
  position: relative;
}
::slotted([slot=start]){
  border-right-style: solid;
}
::slotted([slot=end]){
  border-left-style: solid;
}
.folded>.start,
.folded>.end{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  visibility: hidden;
  display: flex;
}
.folded>.end{
  justify-content: flex-end;
}
.folded ::slotted([slot=start]),
.folded ::slotted([slot=end]){
  pointer-events: auto;
  max-width: 75%;
  border-style: none;
  box-shadow: var(--s-elevation-level3, 0 5px 5px -3px rgba(0, 0, 0, .2), 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12));
}
.folded.show-fold-start>.scrim,
.folded.show-fold-end>.scrim{
  filter: opacity(.8);
  pointer-events: auto;
}
.folded.show-fold-start>.start,
.folded.show-fold-end>.end{
  visibility: visible;
}
`,Kn="s-drawer",Xn={fold:840};class Gn extends P({name:Kn,props:Xn,style:Vn,setup(){let t;const o={start:void 0,end:void 0},r={start:void 0,end:void 0},s=200,n=(f="start",c)=>{var z;const m=c===void 0?t.classList.contains("folded"):c,h=m?`show-fold-${f}`:`show-${f}`;if(t.classList.contains(h))return;t.classList.add(h);const b=((z=r[f])==null?void 0:z.offsetWidth)??0,L=f==="start"?b*-1:b,E=m?[{transform:`translateX(${L}px)`},{transform:"translateX(0px)"}]:[{width:0},{width:`${b}px`}];o[f].animate(E,{duration:s})},i=(f="start",c)=>{var z;const m=c===void 0?t.classList.contains("folded"):c,h=m?`show-fold-${f}`:`show-${f}`;if(!t.classList.contains(h))return;const b=((z=r[f])==null?void 0:z.offsetWidth)??0;t.classList.remove(h);const L=f==="start"?b*-1:b,E=m?[{transform:"translateX(0px)",visibility:"visible"},{transform:`translateX(${L}px)`,visibility:"visible"}]:[{width:`${b}px`},{width:0}];o[f].animate(E,{duration:s})},l=(f="start",c)=>{const h=(c===void 0?t.classList.contains("folded"):c)?`show-fold-${f}`:`show-${f}`;t.classList.contains(h)?i(f,c):n(f,c)};return new ResizeObserver(()=>this.offsetWidth<this.fold?t.classList.add("folded"):t.classList.remove("folded")).observe(this),{expose:{show:n,dismiss:i,toggle:l},render:()=>I`
        <div class="container show-start show-end" ref="${f=>t=f}">
          <slot></slot>
          <div class="scrim" @click="${()=>{i("start"),i("end")}}"></div>
          <div class="start" ref="${f=>o.start=f}">
            <slot name="start" @slotchange="${(f,c)=>r.start=c.assignedElements()[0]}"></slot>
          </div>
          <div class="end" ref="${f=>o.end=f}">
            <slot name="end" @slotchange="${(f,c)=>r.end=c.assignedElements()[0]}"></slot>
          </div>
        </div>
      `}}}){}Gn.define();const Yn=`
:host{
  display: inline-block;
  vertical-align: middle;
  text-align: start;
}
.wrapper{
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  overflow: hidden;
}
.scrim{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.show .scrim{
  pointer-events: auto;
}
.container{
  position: absolute;
  pointer-events: none;
  white-space: nowrap;
  opacity: 0;
}
.show .container{
  pointer-events: auto;
  opacity: 1;
}
::slotted(*:not([slot])){
  background: var(--s-color-surface-container-low, #f6f2f7);
  border-radius: 4px;
  box-shadow: var(--s-elevation-level2, 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12));
  min-width: var(--dropdown-min-width, auto);
  max-height: 100vh;
}
`,Jn="s-dropdown",Qn={align:"center"};class ei extends P({name:Jn,style:Yn,props:Qn,setup(t){let o,r,s;const n=a=>{if(!this.isConnected||r.classList.contains("show"))return;const f=Rt(t);(f.top!==0||f.left!==0)&&r.setAttribute("style",`width: ${innerWidth}px;height: ${innerHeight}px;top: ${0-f.top}px;left: ${0-f.left}px`);const c={top:0,left:0,origin:[]};if(!a||a instanceof HTMLElement){const m=a||o;r.style.setProperty("--dropdown-min-width",`${m.offsetWidth}px`);const h=m.getBoundingClientRect(),b=s.offsetWidth,L=s.offsetHeight;c.origin=["center","top"],c.top=h.y+h.height,c.left=h.x-(b-h.width)/2;let E={left:{value:h.x,origin:"left"},right:{value:h.x+h.width-b,origin:"right"},top:{value:h.top-L,origin:"bottom"}};this.align==="left"&&(c.origin[0]="right",c.left=h.x-b,c.top=h.y,E={left:{value:h.x+h.width,origin:"left"},right:{value:c.left,origin:c.origin[0]},top:{value:h.y+h.height-L,origin:"bottom"}}),this.align==="right"&&(c.origin[0]="left",c.left=h.x+h.width,c.top=h.y,E={left:{value:c.left,origin:c.origin[0]},right:{value:h.x-b,origin:"right"},top:{value:h.y+h.height-L,origin:"bottom"}}),c.left<0&&(c.origin[0]=E.left.origin,c.left=E.left.value),c.left+b>innerWidth&&(c.origin[0]=E.right.origin,c.left=Math.max(E.right.value,0)),c.top+L>innerHeight&&(c.origin[1]=E.top.origin,c.top=Math.max(E.top.value,0))}else c.top=a.y,c.left=a.x,c.origin=a.origin?a.origin.split(" "):["left","top"],a.x+s.offsetWidth>innerWidth&&(c.left=a.x-s.offsetWidth,c.origin[0]="right"),a.y+s.offsetHeight>innerHeight&&(c.top=a.y-s.offsetHeight,c.origin[1]="bottom");s.style.transformOrigin=c.origin.join(" "),s.style.top=`${c.top}px`,s.style.left=`${c.left}px`,r.classList.add("show"),s.animate([{transform:"scale(.9)",opacity:0},{transform:"scale(1)",opacity:1}],{duration:100})},i=()=>{!this.isConnected||!r.classList.contains("show")||(r.classList.remove("show"),s.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.9)",opacity:0}],{duration:100}))};return{expose:{show:n,dismiss:i,toggle:a=>{this.isConnected&&(r.classList.contains("show")?i():n(a))}},mounted:()=>addEventListener("resize",i),unmounted:()=>removeEventListener("resize",i),render:()=>I`
        <div ref="${a=>o=a}" @click="${()=>n()}">
          <slot name="trigger"></slot>
        </div>
        <div class="wrapper" ref="${a=>r=a}">
          <div class="scrim" @pointerdown="${i}"></div>
          <div class="container" ref="${a=>s=a}">
            <slot></slot>
          </div>
        </div>
      `}}}){}ei.define();const ti=`
:host{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
  height: 56px;
  width: 56px;
  border-radius: 28px;
  background: var(--s-color-primary-container, #e1e0ff);
  color: var(--s-color-on-primary-container, #090764);
  transition: box-shadow .2s;
  font-size: .875rem;
  font-weight: 500;
  white-space: nowrap;
  line-height: 1;
  text-transform: capitalize;
  box-shadow: var(--s-elevation-level2, 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12));
}
:host([size=small]){
  height: 48px;
  width: 48px;
  border-radius: 24px;
}
:host([extended=true]){
  padding: 0 16px;
  width: auto;
  height: 48px;
  border-radius: 24px;
}
:host(:not([extended=true])[size=large]){
  height: 72px;
  width: 72px;
  border-radius: 36px;
}
:host(:not([extended=true])[size=large]) ::slotted(*){
  width: 36px;
  height: 36px;
}
::slotted(s-icon){
  color: inherit;
}
::slotted(s-icon[slot=start]){
  margin: 0 8px 0 0;
}
::slotted(s-icon[slot=end]){
  margin: 0 0 0 8px;
}
@media (pointer: coarse){
  :host(:active){
    box-shadow: var(--s-elevation-level4, 0 5px 5px -3px rgba(0, 0, 0, .2), 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12));
  }
}
@media (pointer: fine){
  :host(:hover){
    box-shadow: var(--s-elevation-level4, 0 5px 5px -3px rgba(0, 0, 0, .2), 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12));
  }
}
`,oi="s-fab",ri={size:"medium",extended:!1};class si extends P({name:oi,style:ti,props:ri,propSyncs:!0,setup(){let t;return{watches:{extended:o=>t.setAttribute("centered",String(!o))},render:()=>I`
        <s-ripple attached="true" centered="true" ref="${o=>t=o}"></s-ripple>
        <slot name="start"></slot>
        <slot></slot>
        <slot name="end"></slot>
      `}}}){}si.define();const ni=`
:host{
  display: inline-flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: var(--s-color-on-surface-variant, #46464f);
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
}
:host([disabled=true]){
  pointer-events: none !important;
  color: color-mix(in srgb, var(--s-color-on-surface, #1c1b1f) 38%, transparent) !important;
}
:host([type=filled]){
  background: var(--s-color-primary, #5256a9);
  color: var(--s-color-on-primary, #ffffff);
}
:host([type=filled][disabled=true]){
  background: color-mix(in srgb ,var(--s-color-on-surface, #1c1b1f) 12%, transparent) !important;
}
:host([type=filled-tonal]){
  background: var(--s-color-secondary-container, #e2e0f9);
  color: var(--s-color-on-secondary-container, #191a2c);
}
:host([type=filled-tonal][disabled=true]){
  background: color-mix(in srgb, var(--s-color-on-surface, #1c1b1f) 12%, transparent) !important;
}
:host([type=outlined]){
  border: solid 1px var(--s-color-outline, #777680)
}
:host([type=outlined][disabled=true]){
  border-color: color-mix(in srgb, var(--s-color-on-surface, #1c1b1f)) !important;
}
.ripple{
  border-radius: 0;
}
::slotted(*){
  color: inherit;
}
`,ii="s-icon-button",li={disabled:!1,type:"standard"};class ai extends P({name:ii,style:ni,props:li,propSyncs:!0,setup(){return{render:()=>I`
        <slot name="start"></slot>
        <slot></slot>
        <slot name="end"></slot>
        <s-ripple class="ripple" attached="true" centered="true"></s-ripple>
      `}}}){}ai.define();const ci=`
:host{
  display: inline-flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  color: var(--s-color-on-surface-variant, #46464f);
  fill: currentColor;
  box-sizing: border-box;
}
svg{
  width: 100%;
  height: 100%;
}
::slotted(*){
  width: 100%;
  height: 100%;
}
`,Qt={none:"",home:"M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z",add:"M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z",search:"M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z",menu:"M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z",arrow_back:"m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z",arrow_forward:{name:"arrow_back",angle:180},arrow_upward:{name:"arrow_back",angle:90},arrow_downward:{name:"arrow_back",angle:-90},arrow_drop_up:"m280-400 200-200 200 200H280Z",arrow_drop_down:{name:"arrow_drop_up",angle:180},arrow_drop_left:{name:"arrow_drop_up",angle:-90},arrow_drop_right:{name:"arrow_drop_up",angle:90},more_vert:"M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z",more_horiz:{name:"more_vert",angle:90},close:"m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z",done:"M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z",chevron_up:"M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z",chevron_down:{name:"chevron_up",angle:180},chevron_left:{name:"chevron_up",angle:-90},chevron_right:{name:"chevron_up",angle:90},light_mode:"M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z",dark_mode:"M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z",star:"m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z",favorite:"m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"},di="s-icon",fi={type:"none"};class pi extends P({name:di,style:ci,props:fi,propSyncs:["type"],setup(){let t;return{watches:{type:o=>{let r=Qt[o];typeof r=="object"?(t.setAttribute("transform",`rotate(${r.angle} 480 -480)`),r=Qt[r.name]):t.removeAttribute("transform"),t.setAttribute("d",r)}},render:()=>I`
        <slot>
          <svg viewBox="0 -960 960 960">
            <path ref="${o=>t=o}" d="${Qt.none}"></path>
          </svg>
        </slot>
      `}}}){}pi.define();const ui=`
:host{
  display: block;
  height: 4px;
  color: var(--s-color-primary, #5256a9);
  position: relative;
  border-radius: 2px;
  overflow: hidden;
}
.track{
  background: var(--s-color-secondary-container, #e2e0f9);
  height: 100%;
}
.float{
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
}
.determinable{
  background: currentColor;
  transform: translateX(-100%);
}
.indeterminate::before,
.indeterminate::after{
  content: '';
  position: absolute;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  background: currentColor;
  animation: translate 2s linear infinite;
}
.indeterminate::after{
  animation: translate2 2s linear infinite;
}
:host([indeterminate=true]) .determinable,
.indeterminate{
  display: none;
}
:host([indeterminate=true]) .indeterminate{
  display: block;
}
@keyframes translate{
  0% { left: 0; width: 0 }
  50% { left: 30%; width: 70% }
  75% { left: 100%; width: 0 }
}
@keyframes translate2{
  0% { left: 0; width: 0 }
  50% { left: 0; width: 0 }
  75% { left: 0; width: 25% }
  100% { left: 100%; width: 0 }
}
`,hi="s-linear-progress",mi={indeterminate:!1,max:100,value:0};class gi extends P({name:hi,style:ui,props:mi,propSyncs:["indeterminate"],setup(){let t;const o=()=>{const r=Math.min(this.value,this.max)/this.max*100;t.style.transform=`translateX(-${100-r}%)`};return{watches:{max:o,value:o},render:()=>I`
        <div class="track"></div>
        <div class="determinable float" ref="${r=>t=r}"></div>
        <div class="indeterminate float"></div>
      `}}}){}gi.define();const xi=`
:host{
  display: inline-block;
  vertical-align: middle;
  font-size: .875rem;
  color: var(--s-color-on-surface, #1c1b1f);
}
.dropdown{
  display: block;
}
.container{
  padding: 8px 0;
  max-width: 224px;
  min-height: auto;
  box-sizing: border-box;
}
::slotted(s-menu){
  display: block;
}
::slotted(s-menu[group=start]){
  border-top: solid 1px var(--s-color-outline-variant, #c7c5d0);
  margin-top: 8px;
  padding-top: 8px;
}
::slotted(s-menu[group=end]){
  border-bottom: solid 1px var(--s-color-outline-variant, #c7c5d0);
  margin-bottom: 8px;
  padding-bottom: 8px;
}
`,vi="s-menu",bi={group:""};class Io extends P({name:vi,style:xi,props:bi,propSyncs:["group"],setup(){let t;const o=n=>t.show(n),r=()=>t.dismiss(),s=n=>t.toggle(n);return this.addEventListener("menu-item:click",n=>{n.stopPropagation(),r()}),{mounted:()=>{this.parentNode instanceof Io&&t.setAttribute("align","right")},expose:{show:o,dismiss:r,toggle:s},render:()=>I`
        <s-dropdown class="dropdown" ref="${n=>t=n}">
          <slot slot="trigger" name="trigger" @click.stop="${()=>o()}"></slot>
          <s-scroll-view class="container">
            <slot></slot>
          </div>
        </s-scroll-view>
      `}}}){}const yi=`
:host{
  display: block;
  height: 44px;
}
.container{
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  position: relative;
}
.text{
  flex-grow: 1;
  padding: 0 16px;
}
::slotted([slot=start]){
  flex-shrink: 0;
  margin-left: 16px;
  margin-right: -4px;
}
::slotted([slot=end]){
  flex-shrink: 0;
  margin-right: 8px;
}
`,wi="s-menu-item",_i={};class ki extends P({name:wi,style:yi,props:_i,setup(){const t=()=>{this.dispatchEvent(new Event("menu-item:click",{bubbles:!0}))};return{render:()=>I`
        <s-ripple class="container" @click="${t}">
          <slot name="start"></slot>
          <div class="text">
            <slot></slot>
          </div>
          <slot name="end"></slot>
        </s-ripple>
      `}}}){}Io.define();ki.define();const $i=`
:host{
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: var(--s-color-surface, #fffbff);
  box-shadow: var(--s-elevation-level2, 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12));
  position: relative;
}
:host([mode=rail]){
  flex-direction: column;
  justify-content: flex-start;
  width: 80px;
  box-shadow: none;
  height: 100%;
  background: none;
}
::slotted(s-navigation-item){
  height: 64px;
}
:host([mode=rail]) ::slotted(s-navigation-item){
  height: 72px;
}
:host([mode=rail]) ::slotted(s-icon-button[slot=start]){
  width: 56px;
  height: 56px;
  margin: 16px 0 8px 0;
  border-radius: 12px;
}
:host([mode=rail]) ::slotted([slot=end]){
  flex-grow: 1;
}
`,Ei="s-navigation",Ti={mode:"bottom"};class mo extends P({name:Ei,style:$i,props:Ti,propSyncs:!0,setup(){let t=[],o=-1,r=!1;const s=(i,l)=>{t=l.assignedElements().filter(f=>f instanceof Kr),o=-1;let a=null;for(const f of t)f.selected&&(a=f);a&&n(a)},n=i=>{if(t.length===0||!i.selected)return o=-1;for(const l of t)l!==i&&l.selected&&l.removeAttribute("selected");o=t.indexOf(i),r&&(this.dispatchEvent(new Event("change")),r=!1)};return this.addEventListener("navigation-item:update",i=>{i.stopPropagation(),n(i.target)}),this.addEventListener("navigation-item:change",i=>{i.stopPropagation(),r=!0}),{expose:{get options(){return t},get selectedIndex(){return o}},render:()=>I`
        <slot name="start"></slot>
        <slot @slotchange="${s}"></slot>
        <slot name="end"></slot>
      `}}}){}const Ci=`
:host{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  font-size: .75rem;
  font-weight: 500;
  box-sizing: border-box;
  width: 100%;
  max-width: 80px;
  text-transform: capitalize;
  color: var(--s-color-on-surface-variant, #46464f);
  transition: color .2s;
}
:host([selected=true]){
  color: var(--s-color-primary, #5256a9);
}
.icon{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;
  width: 48px;
  border-radius: 14px;
}
.icon::before{
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  left: 0;
  top: 0;
  transform: scale(0);
  transition: transform .2s;
  background: var(--s-color-secondary-container, #e2e0f9);
}
:host([selected=true]) .icon::before{
  transform: scale(1);
}
.badge{
  position: absolute;
  top: 8px;
  left: 50%;
  margin-left: 4px;
}
::slotted([slot=icon]){
  position: relative;
  pointer-events: none;
  color: inherit;
}
::slotted([slot=text]){
  position: relative;
  pointer-events: none;
  margin-top: 4px;
}
`,Si="s-navigation-item",Li={selected:!1};class Kr extends P({name:Si,style:Ci,props:Li,propSyncs:!0,setup(){return this.addEventListener("click",()=>{this.selected||(this.parentNode instanceof mo&&this.dispatchEvent(new Event("navigation-item:change",{bubbles:!0})),this.selected=!0)}),{watches:{selected:()=>{this.parentNode instanceof mo&&this.dispatchEvent(new Event("navigation-item:update",{bubbles:!0}))}},render:()=>I`
        <div class="icon">
          <slot name="icon"></slot>
        </div>
        <slot name="text"></slot>
        <div class="badge">
          <slot name="badge"></slot>
        </div>
        <s-ripple attached="true" class="ripple"></s-ripple>
      `}}}){}mo.define();Kr.define();const cr=`
  --s-color-primary: var(--s-color-dark-primary) !important;
  --s-color-on-primary: var(--s-color-dark-on-primary) !important;
  --s-color-primary-container: var(--s-color-dark-primary-container) !important;
  --s-color-on-primary-container: var(--s-color-dark-on-primary-container) !important;
  --s-color-secondary: var(--s-color-dark-secondary) !important;
  --s-color-on-secondary: var(--s-color-dark-on-secondary) !important;
  --s-color-secondary-container: var(--s-color-dark-secondary-container) !important;
  --s-color-on-secondary-container: var(--s-color-dark-on-secondary-container) !important;
  --s-color-tertiary: var(--s-color-dark-tertiary) !important;
  --s-color-on-tertiary: var(--s-color-dark-on-tertiary) !important;
  --s-color-tertiary-container: var(--s-color-dark-tertiary-container) !important;
  --s-color-on-tertiary-container: var(--s-color-dark-on-tertiary-container) !important;
  --s-color-error: var(--s-color-dark-error) !important;
  --s-color-on-error: var(--s-color-dark-on-error) !important;
  --s-color-error-container: var(--s-color-dark-error-container) !important;
  --s-color-on-error-container: var(--s-color-dark-on-error-container) !important;
  --s-color-background: var(--s-color-dark-background) !important;
  --s-color-on-background: var(--s-color-dark-on-background) !important;
  --s-color-outline: var(--s-color-dark-outline) !important;
  --s-color-outline-variant: var(--s-color-dark-outline-variant) !important;
  --s-color-surface: var(--s-color-dark-surface) !important;
  --s-color-on-surface: var(--s-color-dark-on-surface) !important;
  --s-color-surface-variant: var(--s-color-dark-surface-variant) !important;
  --s-color-on-surface-variant: var(--s-color-dark-on-surface-variant) !important;
  --s-color-inverse-surface: var(--s-color-dark-inverse-surface) !important;
  --s-color-inverse-on-surface: var(--s-color-dark-inverse-on-surface) !important;
  --s-color-inverse-primary: var(--s-color-dark-inverse-primary) !important;
  --s-color-surface-container: var(--s-color-dark-surface-container) !important;
  --s-color-surface-container-high: var(--s-color-dark-surface-container-high) !important;
  --s-color-surface-container-highest: var(--s-color-dark-surface-container-highest) !important;
  --s-color-surface-container-low: var(--s-color-dark-surface-container-low) !important;
  --s-color-surface-container-lowest: var(--s-color-dark-surface-container-lowest) !important;
`,Ai=`
:host{
  display: flow-root;
  color: var(--s-color-on-background);
  background: var(--s-color-background);
  font-family: Roboto, system-ui;
  height: 100%;
  --s-color-scrim: #000000;

  --s-color-primary: #5256a9;
  --s-color-on-primary: #ffffff;
  --s-color-primary-container: #e1e0ff;
  --s-color-on-primary-container: #090764;
  --s-color-secondary: #5d5d72;
  --s-color-on-secondary: #ffffff;
  --s-color-secondary-container: #e2e0f9;
  --s-color-on-secondary-container: #191a2c;
  --s-color-tertiary: #79536a;
  --s-color-on-tertiary: #ffffff;
  --s-color-tertiary-container: #ffd8ed;
  --s-color-on-tertiary-container: #2e1125;
  --s-color-error: #ba1a1a;
  --s-color-on-error: #ffffff;
  --s-color-error-container: #ffdad6;
  --s-color-on-error-container: #410002;
  --s-color-background: #fffbff;
  --s-color-on-background: #1c1b1f;
  --s-color-outline: #777680;
  --s-color-outline-variant: #c7c5d0;
  --s-color-surface: #fffbff;
  --s-color-on-surface:#1c1b1f;
  --s-color-surface-variant: #e4e1ec;
  --s-color-on-surface-variant: #46464f;
  --s-color-inverse-surface: #313034;
  --s-color-inverse-on-surface: #f3eff4;
  --s-color-inverse-primary: #c0c1ff;
  --s-color-surface-container: #f0edf1;
  --s-color-surface-container-high: #eae7ec;
  --s-color-surface-container-highest: #e5e1e6;
  --s-color-surface-container-low: #f6f2f7;
  --s-color-surface-container-lowest: #ffffff;

  --s-color-dark-primary: #c0c1ff;
  --s-color-dark-on-primary: #222578;
  --s-color-dark-primary-container: #3a3d8f;
  --s-color-dark-on-primary-container: #e1e0ff;
  --s-color-dark-secondary: #c5c4dd;
  --s-color-dark-on-secondary: #2e2f42;
  --s-color-dark-secondary-container: #454559;
  --s-color-dark-on-secondary-container: #e2e0f9;
  --s-color-dark-tertiary: #e8b9d4;
  --s-color-dark-on-tertiary: #46263b;
  --s-color-dark-tertiary-container: #5f3c52;
  --s-color-dark-on-tertiary-container: #ffd8ed;
  --s-color-dark-error: #ffb4ab;
  --s-color-dark-on-error: #690005;
  --s-color-dark-error-container: #93000a;
  --s-color-dark-on-error-container: #ffb4ab;
  --s-color-dark-background: #1c1b1f;
  --s-color-dark-on-background: #e5e1e6;
  --s-color-dark-outline: #918f9a;
  --s-color-dark-outline-variant: #46464f;
  --s-color-dark-surface: #1c1b1f;
  --s-color-dark-on-surface:#e5e1e6;
  --s-color-dark-surface-variant: #46464f;
  --s-color-dark-on-surface-variant: #c7c5d0;
  --s-color-dark-inverse-surface: #e5e1e6;
  --s-color-dark-inverse-on-surface: #313034;
  --s-color-dark-inverse-primary: #5256a9;
  --s-color-dark-surface-container: #201f23;
  --s-color-dark-surface-container-high: #2a292d;
  --s-color-dark-surface-container-highest: #353438;
  --s-color-dark-surface-container-low: #1c1b1f;
  --s-color-dark-surface-container-lowest: #0e0e11;

  --s-elevation-level1: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);
  --s-elevation-level2: 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12);
  --s-elevation-level3: 0 5px 5px -3px rgba(0, 0, 0, .2), 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12);
  --s-elevation-level4: 0 5px 5px -3px rgba(0, 0, 0, .2), 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12);
  --s-elevation-level5: 0 8px 10px -6px rgba(0, 0, 0, .2), 0 16px 24px 2px rgba(0, 0, 0, .14), 0 6px 30px 5px rgba(0, 0, 0, .12);
}
:host([theme=dark]){
  ${cr}
}
@media (prefers-color-scheme: dark){
  :host([theme=auto]){
    ${cr}
  }
}
`,Ii="s-page",Pi={theme:"light"};class qi extends P({name:Ii,style:Ai,props:Pi,propSyncs:["theme"],setup(){return{render:()=>I`
        <slot></slot>
      `}}}){}qi.define();const Mi=`
:host{
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: relative;
  color: var(--s-color-primary, #5256a9);
}
:host([disabled=true]){
  pointer-events: none;
}
.icon{
  width: 60%;
  height: 60%;
  fill: currentColor;
}
.color{
  color: var(--s-color-on-surface-variant, #46464f);
}
:host([checked=true]) .color,
:host([indeterminate=true]) .color{
  color: currentColor;
}
:host([disabled=true]) .color{
  color: color-mix(in srgb ,var(--s-color-on-surface, #1c1b1f) 38%, transparent) !important;
}
`,Oi="s-radio-button",Ni={disabled:!1,checked:!1,name:""},eo={uncheck:"M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z",checked:"M480-280q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm0 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"};class zi extends P({name:Oi,style:Mi,props:Ni,propSyncs:!0,setup(){let t;return{created:()=>{this.addEventListener("click",()=>{this.checked=!0,this.name&&document.querySelectorAll(`${this.tagName}[name='${this.name}']`).forEach(o=>{o!==this&&(o.checked=!1)}),this.dispatchEvent(new Event("change"))})},watches:{checked:o=>t.setAttribute("d",o?eo.checked:eo.uncheck)},render:()=>I`
        <svg class="icon color" viewBox="0 -960 960 960">
          <path ref="${o=>t=o}" d="${eo.uncheck}"></path>
        </svg>
        <s-ripple class="color" attached="true" centered="true"></s-ripple>
      `}}}){}zi.define();const Ri=`
:host{
  display: inline-flex;
  vertical-align: middle;
  font-size: 24px;
  position: relative;
  overflow: hidden;
  width: calc(1em * 5);
  --rate-unchecked-color: var(--s-color-secondary-container, #e2e0f9);
  --rate-checked-color: var(--s-color-primary, #5256a9);
}
.unchecked{
  width: 100%;
  display: flex;
}
.unchecked svg,
::slotted([slot=unchecked]){
  fill: var(--rate-unchecked-color);
  filter: drop-shadow(1em 0 0 var(--rate-unchecked-color)) drop-shadow(2em 0 0 var(--rate-unchecked-color)) drop-shadow(3em 0 0 var(--rate-unchecked-color));
}
.checked{
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 50%;
  overflow: hidden;
  display: flex;
}
.checked svg,
::slotted([slot=checked]){
  fill: var(--rate-checked-color);
  filter: drop-shadow(1em 0 0 var(--rate-checked-color)) drop-shadow(2em 0 0 var(--rate-checked-color)) drop-shadow(3em 0 0 var(--rate-checked-color));
}
svg,
::slotted(*){
  height: 1em;
  width: 1em;
  flex-shrink: 0;
}
input{
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  cursor: pointer;
  opacity: 0;
  margin: 0;
}
:host([readonly=true]) input{
  display: none;
}
`,Hi="s-rate",ji={readonly:!1,max:10,min:0,value:5,step:1};class Fi extends P({name:Hi,style:Ri,props:ji,propSyncs:["readonly"],setup(){let t,o;const r=()=>{const n=(Number(o.value)-this.min)*100/this.max-this.min;t.style.width=`${n}%`};return{watches:{max:s=>{const n=String(s);o.max!==n&&(o.max=n,r())},min:s=>{const n=String(s);o.min!==n&&(o.min=n,r())},step:s=>{const n=String(s);o.step!==n&&(o.step=n,r())},value:s=>{const n=String(s);o.value!==n&&(o.value=n,r())}},render:()=>I`
        <div class="unchecked">
          <slot name="unchecked">
            <svg viewBox="0 -960 960 960">
              <path d="m305-704 112-145q12-16 28.5-23.5T480-880q18 0 34.5 7.5T543-849l112 145 170 57q26 8 41 29.5t15 47.5q0 12-3.5 24T866-523L756-367l4 164q1 35-23 59t-56 24q-2 0-22-3l-179-50-179 50q-5 2-11 2.5t-11 .5q-32 0-56-24t-23-59l4-165L95-523q-8-11-11.5-23T80-570q0-25 14.5-46.5T135-647l170-57Z"/>
            </svg>
          </slot>
        </div>
        <div class="checked" ref="${s=>t=s}">
          <slot name="checked">
            <svg viewBox="0 -960 960 960">
              <path d="m305-704 112-145q12-16 28.5-23.5T480-880q18 0 34.5 7.5T543-849l112 145 170 57q26 8 41 29.5t15 47.5q0 12-3.5 24T866-523L756-367l4 164q1 35-23 59t-56 24q-2 0-22-3l-179-50-179 50q-5 2-11 2.5t-11 .5q-32 0-56-24t-23-59l4-165L95-523q-8-11-11.5-23T80-570q0-25 14.5-46.5T135-647l170-57Z"/>
            </svg>
          </slot>
        </div>
        <input
          type="range"
          ref="${s=>o=s}"
          max="${this.max}"
          min="${this.min}"
          step="${this.step}"
          value="${this.value}"
          @change="${()=>this.dispatchEvent(new Event("change"))}"
          @input="${()=>{r(),this.dispatchEvent(new Event("input"))}}"
        />
      `}}}){}Fi.define();const Bi=`
:host{
  display: inline-flex;
  vertical-align: middle;
  max-width: 520px;
  min-width: 240px;
  height: 48px;
  background: var(--s-color-surface-container-high, #eae7ec);
  color: var(--s-color-on-surface, #1c1b1f);
  border-radius: 24px;
  font-size: .875rem;
  position: relative;
}
:host([size=small]){
  height: 40px;
  min-width: 196px;
  border-radius: 20px;
}
:host([size=large]){
  height: 56px;
  min-width: 280px;
  font-size: 1rem;
  border-radius: 28px;
}
.container{
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
  flex-grow: 1;
}
:host(:focus-within) .container{
  z-index: 1;
}
.drop{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  pointer-events: none;
  background: inherit;
  box-shadow: var(--s-elevation-level2, 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12));
  border-radius: 4px;
  opacity: 0;
  transition: opacity .1s;
}
:host(:focus-within) .drop{
  opacity: 1;
  pointer-events: auto;
  z-index: 1;
}
::slotted([slot=drop]){
  border-top: solid 1px var(--s-color-outline-variant, #c7c5d0);
  margin-top: 48px;
  border-radius: 4px;
}
:host([size=small]:focus-within) ::slotted([slot=drop]){
  margin-top: 40px;
}
:host([size=large]:focus-within) ::slotted([slot=drop]){
  margin-top: 56px;
}
::slotted(input[type=text]){
  border: none;
  padding: 0 16px;
  height: 100%;
  width: 100%;
  flex-grow: 1;
  background: none;
  outline: none;
  font-size: inherit;
  color: inherit;
  box-sizing: border-box;
  line-height: 1;
  font-family: inherit;
}
::slotted(input[type=text])::placeholder{
  color: var(--s-color-outline, #777680);
}
:host([size=large]) ::slotted(input[type=text]){
  padding: 0 24px;
}
::slotted([slot]){
  flex-shrink: 0;
}
::slotted(s-icon[slot=start]){
  margin: 0 -6px 0 12px;
}
::slotted(s-icon[slot=end]){
  margin: 0 12px 0 -6px;
}
:host([size=small]) ::slotted(s-icon-button[slot=start]),
:host([size=small]) ::slotted(s-icon-button[slot=end]){
  width: 40px;
  height: 40px;
}
::slotted(s-icon-button[slot=start]){
  margin: 0 -12px 0 4px;
}
::slotted(s-icon-button[slot=end]){
  margin: 0 4px 0 -12px;
}
:host([size=small]) ::slotted(s-icon-button[slot=start]){
  margin: 0 -12px 0 0;
}
:host([size=small]) ::slotted(s-icon-button[slot=end]){
  margin: 0 0 0 -12px;
}
:host([size=small]) ::slotted(s-icon[slot=start]){
  margin: 0 -6px 0 8px;
}
:host([size=small]) ::slotted(s-icon[slot=end]){
  margin: 0 8px 0 -6px;
}
:host([size=large]) ::slotted(s-icon-button[slot=start]){
  margin: 0 -16px 0 8px;
}
:host([size=large]) ::slotted(s-icon-button[slot=end]){
  margin: 0 8px 0 -16px;
}
:host([size=large]) ::slotted(s-icon[slot=start]){
  margin: 0 -8px 0 16px;
}
:host([size=large]) ::slotted(s-icon[slot=end]){
  margin: 0 16px 0 -8px;
}
`,Wi="s-search",Di={size:"medium"};class Zi extends P({name:Wi,style:Bi,props:Di,propSyncs:!0,setup(){return{render:()=>I`
        <div class="drop">
          <slot name="drop" @mousedown.prevent></slot>
        </div>
        <div class="container">
          <slot name="start"></slot>
          <slot></slot>
          <slot name="end"></slot>
        </div>
      `}}}){}Zi.define();const Ui=`
:host{
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  border: solid 1px var(--s-color-outline, #777680);
  border-radius: 20px;
  height: 40px;
  overflow: hidden;
}
`,Vi="s-segmented-button",Ki={};class go extends P({name:Vi,style:Ui,props:Ki,setup(){let t=[],o=-1,r=!1;const s=(i,l)=>{t=l.assignedElements().filter(f=>f instanceof Xr),o=-1;let a=null;for(const f of t)f.selected&&(a=f);a&&n(a)},n=i=>{if(t.length===0||!i.selected)return o=-1;for(const l of t)l!==i&&l.selected&&l.removeAttribute("selected");o=t.indexOf(i),r&&(this.dispatchEvent(new Event("change")),r=!1)};return this.addEventListener("segmented-button-item:update",i=>{i.stopPropagation(),n(i.target)}),this.addEventListener("segmented-button-item:change",i=>{i.stopPropagation(),r=!0}),{expose:{get options(){return t},get selectedIndex(){return o}},render:()=>I`
        <slot @slotchange="${s}"></slot>
      `}}}){}const Xi=`
:host{
  flex-basis: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--s-color-on-surface, #1c1b1f);
  height: 100%;
  min-width: 48px;
  padding: 0 16px;
  text-transform: capitalize;
  font-weight: 500;
  font-size: .875rem;
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
  border-left: solid 1px var(--s-color-outline, #777680);
}
:host(:first-child){
  border-left-color: transparent;
  margin-left: -1px;
}
:host([selected=true]){
  background: var(--s-color-secondary-container, #e2e0f9);
  color: var(--s-color-on-secondary-container, #191a2c);
}
:host([disabled=true]){
  pointer-events: none;
  color: color-mix(in srgb, var(--s-color-on-surface, #1c1b1f) 38%, transparent);
}
::slotted(s-icon){
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}
::slotted(s-icon[slot=start]){
  margin-right: 4px;
}
::slotted(s-icon[slot=end]){
  margin-right: 4px;
}
`,Gi="s-segmented-button-item",Yi={selected:!1,disabled:!1,selectable:!0};class Xr extends P({name:Gi,style:Xi,props:Yi,propSyncs:["selected","disabled"],setup(){return this.addEventListener("click",()=>{if(this.selectable){if(this.selected)return;this.parentNode instanceof go&&this.dispatchEvent(new Event("navigation-item:change",{bubbles:!0})),this.selected=!0}}),{watches:{selected:()=>{this.parentNode instanceof go&&this.dispatchEvent(new Event("segmented-button-item:update",{bubbles:!0}))}},render:()=>I`
        <slot name="start"></slot>
        <slot></slot>
        <slot name="end"></slot>
        <s-ripple class="ripple" attached="true"></s-ripple>
      `}}}){}go.define();Xr.define();const Ji=`
:host{
  display: block;
  color: var(--s-color-primary, #5256a9);
  height: 40px;
  cursor: pointer;
  position: relative;
}
:host([disabled=true]){
  pointer-events: none;
  opacity: .38;
}
.wrapper{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  pointer-events: none;
}
.track{
  width: calc(100% - 20px);
  height: 4px;
  overflow: hidden;
  position: relative;
  background: var(--s-color-secondary-container, #e2e0f9);
  border-radius: 2px;
}
:host([disabled=true]) .track{
  background: color-mix(in srgb, var(--s-color-on-surface, #1c1b1f) 31.57894736842105%, transparent);
}
.track>.active-track{
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: currentColor;
  transform: translateX(-50%);
}
:host([disabled=true]) .track>.active-track{
  background: var(--s-color-on-surface, #1c1b1f);
}
.container{
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  transform: translateX(calc(-50% + 20px));
}
.container::before{
  content:'';
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: currentColor;
  filter: opacity(0);
  transition: filter .2s;
}
.active.container::before{
  filter: opacity(.12);
}
.handle{
  width: 20px;
  height: 20px;
  background: currentColor;
  border-radius: 10px;
  box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12));
  margin: 10px;
}
:host([disabled=true]) .handle{
  background: var(--s-color-on-surface, #1c1b1f);
  box-shadow: none;
}
.label{
  position: absolute;
  right: 6px;
  margin-bottom: 28px;
  width: 28px;
  height: 28px;
  filter: opacity(0);
  transition: filter .2s,transform .2s;
  transform: scale(.5) translateY(100%);
  transform-origin: center;
  display: none;
}
:host([labeled=true]) .label{
  display: block;
}
.active>.label{
  filter: opacity(1);
  transform: scale(1) translateY(0%);
}
.label::before{
  content: '';
  position: absolute;
  background: currentColor;
  bottom: 23px;
  left: 0;
  width: 28px;
  height: 28px;
  border-radius: 14px;
}
.label::after{
  content: '';
  width: 0;
  display: block;
  border-color: currentColor;
  border-top: 14px solid currentColor;
  border-left: 11px solid transparent;
  border-right: 11px solid transparent;
  margin-left: 3px;
}
.label>span{
  position: absolute;
  color: var(--s-color-on-primary, #ffffff);
  font-size: .625rem;
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -22px;
}
input{
  margin: 0;
  height: 100%;
  width: calc(100% - 20px);
  cursor: inherit;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 10px;
}
`,Qi="s-slider",el={disabled:!1,labeled:!1,max:100,min:0,step:1,value:50};class tl extends P({name:Qi,style:Ji,props:el,propSyncs:["disabled","labeled"],setup(){let t,o,r,s;const n=()=>{const a=100-((Number(r.value)-this.min)*100/this.max-this.min);t.style.transform=`translateX(-${a}%)`,o.style.transform=`translateX(calc(-${a}% + ${a*.4}px))`,this.value=Number(r.value),s.textContent=r.value};return{watches:{max:i=>{const l=String(i);r.max!==l&&(r.max=l,n())},min:i=>{const l=String(i);r.min!==l&&(r.min=l,n())},step:i=>{const l=String(i);r.step!==l&&(r.step=l,n())},value:i=>{const l=String(i);r.value!==l&&(r.value=l,n())}},render:()=>I`
        <div class="wrapper">
          <div class="track">
            <div class="active-track" ref="${i=>t=i}"></div>
          </div>
          <div class="container labeled" ref="${i=>o=i}">
            <div class="handle"></div>
            <div class="label">
              <span ref="${i=>s=i}">${this.value}</span>
            </div>
          </div>
        </div>
        <input
          ref="${i=>r=i}"
          type="range"
          max="${this.max}"
          min="${this.min}"
          step="${this.step}"
          value="${this.value}"
          @change="${()=>this.dispatchEvent(new Event("change"))}"
          @input="${()=>{n(),this.dispatchEvent(new Event("input"))}}"
          @mousedown="${i=>{i.button===0&&!ue.touched&&o.classList.add("active")}}"
          @mouseup="${()=>!ue.touched&&o.classList.remove("active")}"
          @touchstart.passive="${()=>ue.touched&&o.classList.add("active")}"
          @touchend.passive="${()=>ue.touched&&o.classList.remove("active")}"
          @touchcancel.passive="${()=>ue.touched&&o.classList.remove("active")}"
        />
      `}}}){}tl.define();const ol=`
:host{
  display: inline-flex;
  vertical-align: middle;
}
.wrapper{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  pointer-events: none;
  z-index: 2;
  overflow: hidden;
}
.container{
  background: var(--s-color-inverse-surface, #313034);
  color: var(--s-color-inverse-on-surface, #f3eff4);
  min-height: 48px;
  border-radius: 4px;
  box-shadow: var(--s-elevation-level3, 0 5px 5px -3px rgba(0, 0, 0, .2), 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12));
  line-height: 1.6;
  display: inline-flex;
  align-items: center;
  min-width: 320px;
  max-width: 480px;
  font-size: .875rem;
  font-weight: 400;
  margin: 16px;
  pointer-events: auto;
  transform: translateY(100%);
  filter: opacity(0);
  transition: transform .2s, filter .2s;
}
.wrapper.show .container{
  transform: translateY(0%);
  filter: opacity(1);
}
.supporting-text{
  margin: 12px 16px;
  flex-grow: 1;
  user-select: text;
  -webkit-user-select: text;
}
::slotted(s-button[slot=action]){
  font-size: inherit;
  flex-shrink: 0;
  border-radius: 4px;
  color: var(--s-color-inverse-primary, #c0c1ff);
  margin-right: 8px;
  margin-left: -8px;
  height: 36px;
}
@media (max-width: 320px){
  .container{
    margin: 8px;
    flex-grow: 1;
    min-width: auto;
  }
}
`,rl="s-snackbar",sl={duration:5e3},nl=e=>{let t=document.body;const o=new Po,r=document.body.firstElementChild;if(r&&r.tagName==="S-PAGE"&&(t=r),typeof e=="string")o.textContent=e;else{if(e.root&&(t=e.root),o.textContent=e.text,e.action){const s=document.createElement("s-button");s.type="text",s.slot="action",s.textContent=e.action.text,e.action.click&&s.addEventListener("click",e.action.click),o.appendChild(s)}e.duration&&(o.duration=e.duration)}t.appendChild(o),o.addEventListener("dismissed",()=>t.removeChild(o)),o.show()};class Po extends P({name:rl,style:ol,props:sl,setup(t){let o;const r={timer:0},s=()=>{const l=Rt(t);(l.top!==0||l.left!==0)&&o.setAttribute("style",`width: ${innerWidth}px;height: ${innerHeight}px;top: ${0-l.top}px;left: ${0-l.left}px`),clearTimeout(r.timer),getComputedStyle(o).top,o.classList.add("show"),this.dispatchEvent(new Event("show")),this.duration>0&&(r.timer=setTimeout(n,this.duration))},n=()=>{clearTimeout(r.timer),o.classList.remove("show"),this.dispatchEvent(new Event("dismiss"))},i=l=>{if(l.propertyName!=="transform")return;const a=o.classList.contains("show");this.dispatchEvent(new Event(a?"showed":"dismissed"))};return{expose:{show:s,dismiss:n},render:()=>I`
        <slot name="trigger" @click="${s}"></slot>
        <div class="wrapper" ref="${l=>o=l}" @transitionend="${i}">
          <div class="container" part="container">
            <div class="supporting-text">
              <slot></slot>
            </div>
            <slot name="action" @click="${n}"></slot>
          </div>
        </div>
      `}}}){}_t(Po,"show",nl);Po.define();const il=`
:host{
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  cursor: pointer;
  position: relative;
  color: var(--s-color-primary, #5256a9);
  font-size: 32px;
  width: 1.625em;
  height: 1em;
  border-radius: .5em;
}
:host([disabled=true]){
  pointer-events: none;
}
.track{
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background: var(--s-color-outline, #777680);
  position: absolute;
  padding: .0625em;
  overflow: hidden;
  box-sizing: border-box;
  transition: background .2s;
}
:host([checked=true]) .track{
  background: currentColor;
}
:host([disabled=true]) .track{
  background: var(--s-color-on-surface, #1c1b1f);
  opacity: .12;
}
:host([checked=true][disabled=true]) .track{
  background: var(--s-color-on-surface, #1c1b1f);
}
.track::before{
  content: '';
  display: block;
  height: 100%;
  background: var(--s-color-surface-container-highest, #e5e1e6);
  border-radius: inherit;
}
:host([checked=true]) .track::before{
  opacity: 0;
}
:host([disabled=true]) .track::before{
  background: var(--s-color-surface, #fffbff);
}
.ripple{
  height: 1.25em;
  width: 1.25em;
  border-radius: 50%;
  top: auto;
  margin-left: -0.125em;
  transition: transform .2s;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  color: var(--s-color-outline, #777680);
}
:host([checked=true]) .ripple{
  transform: translateX(50%);
  color: currentColor;
}
.thumb{
  background: var(--s-color-outline, #777680);
  border-radius: 50%;
  width: .75em;
  height: .75em;
  transform: scale(.6666666666666667) translateX(0px);
  transform-origin: center;
  transition: transform .2s,box-shadow .2s;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}
:host([checked=true]) .thumb{
  background: var(--s-color-on-primary, #ffffff);
  transform: scale(1);
  box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12));
}
:host([disabled=true]) .thumb{
  background: color-mix(in srgb, var(--s-color-on-surface, #1c1b1f) 38%, transparent);
  box-shadow: none;
}
:host([checked=true][disabled=true]) .thumb{
  background: var(--s-color-surface, #fffbff);
}
.icon{
  width: .5em;
  height: .5em;
  fill: currentColor;
  opacity: 0;
  transition: opacity .2s;
}
:host([checked=true]) .icon{
  opacity: 1;
}
:host([checked=true][disabled=true]) .icon{
  fill: color-mix(in srgb, var(--s-color-on-surface, #1c1b1f) 12%, transparent);
}
`,ll="s-switch",al={disabled:!1,checked:!1};class cl extends P({name:ll,style:il,props:al,propSyncs:!0,setup(){return this.addEventListener("click",()=>{this.checked=!this.checked,this.dispatchEvent(new Event("change"))}),{render:()=>I`
        <div class="track">
        </div>
        <s-ripple attached="true" centered="true" class="ripple">
          <div class="thumb">
            <svg class="icon" viewBox="0 -960 960 960">
              <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"></path>
            </svg>
          </div>
        </s-ripple>
      `}}}){}cl.define();const dl=`
:host{
  display: flex;
  justify-content: center;
  position: relative;
  background: var(--s-color-surface, #fffbff);
  color: var(--s-color-on-surface-variant, #46464f);
}
:host::before{
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  background: var(--s-color-surface-variant, #e4e1ec);
  bottom: 0;
  left: 0;
}
.container{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  scrollbar-width: none;
  overflow-x: auto;
}
.container::-webkit-scrollbar{
  display: none;
}
:host([mode=fixed]) .container{
  overflow: hidden;
  width: 100%;
}
::slotted(s-tab-item){
  flex-shrink: 0;
  flex-basis: auto;
}
:host([mode=fixed]) ::slotted(s-tab-item){
  flex-basis: 100%;
  flex-shrink: 1;
}
`,fl="s-tab",pl={mode:"scrollable"};class xo extends P({name:fl,style:dl,props:pl,propSyncs:["mode"],setup(){let t,o=[],r=-1,s=!1;const n=(l,a)=>{o=a.assignedElements().filter(c=>c instanceof Gr),r=-1;let f=null;for(const c of o)c.selected&&(f=c);f&&i(f)},i=l=>{if(o.length===0||!l.selected)return r=-1;let a=null;for(const f of o)f!==l&&f.selected&&(a=f,f.removeAttribute("selected"));if(r=o.indexOf(l),s&&(this.dispatchEvent(new Event("change")),s=!1),this.isConnected){if(t.scrollWidth!==t.offsetWidth){const f=l.offsetLeft-t.offsetWidth+t.offsetWidth/2+l.offsetWidth/2;t.scrollTo({left:f,behavior:"smooth"})}if(a){a.indicator.addEventListener("transitionend",()=>{a==null||a.indicator.removeAttribute("style"),l.indicator.removeAttribute("style")},{once:!0});const f=a.indicator.getBoundingClientRect().left,c=l.indicator.getBoundingClientRect();l.indicator.setAttribute("style","transition:none;filter:opacity(0)"),a.indicator.setAttribute("style",`transition: transform .2s, width .2s;filter:opacity(1);transform:translateX(${c.left-f}px);width: ${c.width}px`)}}};return this.addEventListener("tab-item:update",l=>{l.stopPropagation(),i(l.target)}),this.addEventListener("tab-item:change",l=>{l.stopPropagation(),s=!0}),{expose:{get options(){return o},get selectedIndex(){return r}},render:()=>I`
        <div class="container" ref="${l=>t=l}">
          <slot @slotchange="${n}"></slot>
        </div>
      `}}}){}const ul=`
:host{
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  position: relative;
  cursor: pointer;
  font-size: .875rem;
  font-weight: 500;
  text-transform: capitalize;
  padding: 0 16px;
}
:host([selected=true]){
  color: var(--s-color-primary, #5256a9);
}
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  min-height: inherit;
}
.indicator{
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 100%;
  background: var(--s-color-primary, #5256a9);
  border-radius: 1.5px 1.5px 0 0;
  filter: opacity(0);
}
:host([selected=true]) .indicator{
  filter: opacity(1);
}
.text{
  display: flex;
  align-items: center;
}
.icon .badge{
  position: absolute;
  top: 8px;
  left: 50%;
}
::slotted([slot=icon]){
  height: 42px;
  color: inherit;
}
::slotted([slot=text]){
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 1;
}
.icon ::slotted([slot=text]){
  height: 26px;
  margin-top: -4px;
}
::slotted([slot=badge]){
  margin-left: 4px;
}
`,hl="s-tab-item",ml={selected:!1};class Gr extends P({name:hl,style:ul,props:ml,propSyncs:!0,setup(){let t,o;const r=(s,n)=>{const i=n.assignedElements().length;t.classList[i>0?"add":"remove"]("icon")};return this.addEventListener("click",()=>{this.selected||(this.parentNode instanceof xo&&this.dispatchEvent(new Event("tab-item:change",{bubbles:!0})),this.selected=!0)}),{expose:{get indicator(){return o}},watches:{selected:()=>{this.parentNode instanceof xo&&this.dispatchEvent(new Event("tab-item:update",{bubbles:!0}))}},render:()=>I`
        <div class="container" ref="${s=>t=s}">
          <slot name="icon" @slotchange="${r}"></slot>
          <div class="text">
            <slot name="text"></slot>
            <div class="badge">
              <slot name="badge"></slot>
            </div>
          </div>
          <div class="indicator" ref="${s=>o=s}"></div>
        </div>
        <s-ripple attached="true"></s-ripple>
      `}}}){}xo.define();Gr.define();const gl=`
:host{
  display: block;
  font-size: .875rem;
  border: solid 1px var(--s-color-outline-variant, #c7c5d0);
  border-radius: 8px;
  white-space: nowrap;
  overflow: hidden;
}
.container{
  display: table;
  width: 100%;
  border-collapse: collapse;
}
`,xl="s-table",vl={};class bl extends P({name:xl,style:gl,props:vl,setup(){return{render:()=>I`
        <div class="container" part="container">
          <slot></slot>
        </div>
      `}}}){}const yl=`
:host{
  display: table-header-group;
  font-weight: 600;
  color: var(--s-color-on-surface-variant, #46464f);
}
`,wl="s-thead",_l={};class kl extends P({name:wl,style:yl,props:_l,setup(){return{render:()=>I`
        <slot></slot>
      `}}}){}const $l=`
:host{
  display: table-row-group;
  color: var(--s-color-on-surface, #1c1b1f);
  position: relative;
}
::slotted(s-tr){
  border-top: solid 1px var(--s-color-outline-variant, #c7c5d0);
}
`,El="s-tbody",Tl={};class Cl extends P({name:El,style:$l,props:Tl,setup(){return{render:()=>I`
        <slot></slot>
      `}}}){}const Sl=`
:host{
  display: table-row;
}
`,Ll="s-tr",Al={};class Il extends P({name:Ll,style:Sl,props:Al,setup(){return{render:()=>I`
        <slot></slot>
      `}}}){}const Pl=`
:host{
  display: table-cell;
  padding: 16px;
}
:host(:not(:first-child)){
  width: 0;
  text-align: right;
}
`,ql="s-th",Ml={};class Ol extends P({name:ql,style:Pl,props:Ml,setup(){return{render:()=>I`
        <slot></slot>
      `}}}){}const Nl=`
:host{
  display: contents;
  user-select: text;
  padding: 12px 16px;
}
:host(:not(:first-child)){
  text-align: right;
}
td{
  padding: inherit;
  vertical-align: middle;
}
`,zl="s-td",Rl={colspan:1,rowspan:1};class Hl extends P({name:zl,style:Nl,props:Rl,setup(){let t;return{watches:{colspan:o=>t.colSpan=o,rowspan:o=>t.rowSpan=o},render:()=>I`
        <td ref="${o=>t=o}" rowspan="${this.rowspan}" colspan="${this.colspan}">
          <slot></slot>
        </td>
      `}}}){}bl.define();kl.define();Cl.define();Il.define();Ol.define();Hl.define();const jl=`
:host{
  display: inline-block;
  vertical-align: middle;
  min-width: 280px;
  border-radius: 4px;
  position: relative;
  color: var(--s-color-primary, #5256a9);
}
.container{
  border-radius: inherit;
  color: var(--s-color-outline, #777680);
  display: flex;
  align-items: center;
}
:host(:focus-within) .container{
  color: currentColor;
}
.outline{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: solid 1px currentColor;
  box-sizing: border-box;
  border-radius: inherit;
  pointer-events: none;
  border-top: none;
  transition: box-shadow .2s;
}
:host(:focus-within) .outline{
  box-shadow: 1px 0 currentColor inset, -1px 0 currentColor inset, 0 -1px currentColor inset;
}
.label{
  display: flex;
  align-items: flex-end;
  height: 16px;
  width: 100%;
  position: absolute;
  top: -8px;
  left: 0;
  pointer-events: none;
}
.label::before{
  content: '';
  border-color: currentColor;
  border-width: 1px;
  border-top-style: solid;
  border-left-style: solid;
  height: 8px;
  width: 12px;
  box-sizing: border-box;
  border-top-left-radius: 4px;
  transition: box-shadow .2s;
  flex-shrink: 0;
}
:host(:focus-within) .label::before{
  border-color: currentColor;
  box-shadow: 0 1px currentColor inset, 1px 0 currentColor inset;
}
.label::after{
  content: '';
  border-color: var(--s-color-outline, #777680);
  border-width: 1px;
  border-top-style: solid;
  border-right-style: solid;
  height: 8px;
  flex-grow: 1;
  box-sizing: border-box;
  border-top-right-radius: 4px;
  transition: box-shadow .2s;
}
:host(:focus-within) .label::after{
  border-color: currentColor;
  box-shadow: -1px 0 currentColor inset, 0 1px currentColor inset;
}
.label>span{
  padding: 0 4px;
  transform-origin: left;
  transition: font-size .2s, color .2s, transform .2s;
  left: 12px;
  font-size: 1rem;
  transform: translateY(31px);
  position: absolute;
}
.not-empty .label>span,
:host(:focus-within) .label>span{
  transform: translateY(0);
  font-size: .75rem;
  position: static;
}
.label>span:empty{
  padding: 0;
}
.content{
  position: relative;
  flex-grow: 1;
}
::slotted(input[type=text]),
::slotted(textarea),
.textarea{
  border: none;
  padding: 0 16px;
  min-height: 56px;
  width: 100%;
  flex-grow: 1;
  background: none;
  outline: none;
  font-size: inherit;
  color: var(--s-color-on-surface, #1c1b1f);
  box-sizing: border-box;
  line-height: 1;
  font-family: inherit;
  display: block;
}
::slotted(textarea){
  height: 0;
}
::slotted(textarea),
.textarea{
  padding: 16px;
  scrollbar-width: none;
  resize: none;
  line-height: 1.5;
  word-wrap: break-word;
  word-break: break-all;
  white-space: pre-wrap;
}
.textarea{
  position: absolute;
  left: 0;
  top: 0;
  height: auto;
  pointer-events: none;
  visibility: hidden;
}
.textarea::after{
  content: ' ';
}
::slotted(input[type=text])::placeholder,
::slotted(textarea)::placeholder{
  color: var(--s-color-outline, #777680);
}
::slotted([slot=end]){
  flex-shrink: 0;
}
::slotted(s-icon[slot=end]){
  margin: 0 12px 0 -8px;
}
::slotted(s-icon-button[slot=end]){
  margin: 0 4px 0 -12px;
}
.focus ::slotted([slot=end]){
  color: currentColor;
}
`,Fl="s-text-field",Bl={label:""};class Wl extends P({name:Fl,style:jl,props:Bl,propSyncs:!0,setup(){let t,o,r,s,n;const i=()=>{!s||s.parentNode!==this||(s.value===""?t.classList.remove("not-empty"):t.classList.add("not-empty"),s instanceof HTMLTextAreaElement&&(n.textContent=s.value,s.offsetHeight!==n.offsetHeight&&(s.style.height=`${n.offsetHeight}px`)))},l=f=>{f.addEventListener("input",i);const c=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(f),"value");if(c){const m=c.set;c.set=h=>{m==null||m.apply(f,[h]),!(!s||s.parentNode!==this)&&i()},Object.defineProperty(f,"value",c)}s=f,i()},a=()=>{const f=r.assignedElements()[0];!f||!(f instanceof HTMLInputElement)&&!(f instanceof HTMLTextAreaElement)||l(f)};return{watches:{label:f=>o.textContent=f},render:()=>I`
        <div class="container" ref="${f=>t=f}">
          <div class="outline"></div>
          <div class="label">
            <span ref="${f=>o=f}"></span>
          </div>
          <div class="content">
            <slot style="min-height: inherit;" @slotchange="${a}" ref="${f=>r=f}"></slot>
            <div ref="${f=>n=f}" class="textarea"></div>
          </div>
          <slot name="end"></slot>
        </div>
      `}}}){}Wl.define();const Dl=`
:host{
  position: relative;
  display: inline-flex;
  vertical-align: middle;
}
.container{
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  background: var(--s-color-inverse-surface, #313034);
  color: var(--s-color-inverse-on-surface, #f3eff4);
  font-size: .875rem;
  font-weight: 400;
  padding: 6px 8px;
  border-radius: 4px;
  white-space: nowrap;
  opacity: .95;
  filter: opacity(0);
  transition: filter .2s;
  pointer-events: none;
}
.container.show{
  filter: opacity(1);
}
::slotted(img){
  display: block;
  border-radius: 4px;
  margin: 2px 0;
}
`,Zl="s-tooltip",Ul={};class Vl extends P({name:Zl,style:Dl,props:Ul,setup(t){let o,r;const s={showed:!1,timer:0},n=()=>{if(!this.isConnected||s.showed)return;const c=o.getBoundingClientRect(),m=Rt(t),h=4,b=r.offsetWidth,L=r.offsetHeight,E={top:c.top-h-L,left:c.left-(b-c.width)/2};E.left<0&&(E.left=c.left),E.left+b>innerWidth&&(E.left=c.left+c.width-b),E.top<0&&(E.top=c.top+o.offsetHeight+h),r.setAttribute("style",`left: ${E.left-m.left}px;top: ${E.top-m.top}px`),r.classList.add("show"),s.showed=!0},i=()=>{!this.isConnected||!s.showed||(r.classList.remove("show"),s.showed=!1)},l=()=>{r.classList.contains("show")||r.removeAttribute("style")},a=()=>{clearTimeout(s.timer),s.timer=setTimeout(n,600)},f=()=>{clearTimeout(s.timer),i()};return{render:()=>I`
        <div ref="${c=>o=c}" 
          @wheel.passive="${i}"
          @mouseover="${()=>!ue.touched&&n()}"
          @mouseleave="${()=>!ue.touched&&i()}"
          @touchstart="${a}"
          @touchend="${f}"
        >
          <slot name="trigger"></slot>
        </div>
        <div class="container" part="container" ref="${c=>r=c}" @transitionend="${l}">
          <slot></slot>
        </div>
      `}}}){}Vl.define();const Kl=`
:host{
  display: flex;
  height: 64px;
  background: var(--s-color-surface-container, #f0edf1);
  color: var(--s-color-on-surface, #1c1b1f);
  align-items: center;
  padding: 0 8px;
}
slot[name=navigation]{
  display: block;
  flex-shrink: 0;
}
::slotted([slot=navigation]){
  margin: 0 4px;
}
slot[name=action]{
  display: block;
  flex-shrink: 0;
}
::slotted([slot=action]){
  margin: 0 4px;
}
::slotted(s-search){
  background: var(--s-color-surface, #fffbff);
}
::slotted(s-top-app-bar){
  height: 100%;
  width: 100%;
  max-width: 1280px;
  padding: 0;
  background: none;
  margin: 0 auto;
}
.headline{
  overflow: hidden;
}
.grow{
  flex-grow: 1;
  min-width: 0;
  height: 100%;
}
::slotted([slot=headline]){
  font-size: 1.375rem;
  font-weight: 400;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 16px;
}
@media(max-width: 840px){
  :host{
    height: 56px;
  }
}
`,Xl="s-top-app-bar",Gl={};class Yl extends P({name:Xl,style:Kl,props:Gl,setup(){return{render:()=>I`
        <slot name="navigation"></slot>
        <div class="headline">
          <slot name="headline"></slot>
        </div>
        <div class="grow">
          <slot></slot>
        </div>
        <slot name="action"></slot>
      `}}}){}Yl.define();/**
* @vue/shared v3.4.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function qo(e,t){const o=new Set(e.split(","));return r=>o.has(r)}const Z={},Ge=[],de=()=>{},Jl=()=>!1,Ht=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Mo=e=>e.startsWith("onUpdate:"),J=Object.assign,Oo=(e,t)=>{const o=e.indexOf(t);o>-1&&e.splice(o,1)},Ql=Object.prototype.hasOwnProperty,N=(e,t)=>Ql.call(e,t),S=Array.isArray,Ye=e=>jt(e)==="[object Map]",Yr=e=>jt(e)==="[object Set]",q=e=>typeof e=="function",X=e=>typeof e=="string",Ne=e=>typeof e=="symbol",K=e=>e!==null&&typeof e=="object",Jr=e=>(K(e)||q(e))&&q(e.then)&&q(e.catch),Qr=Object.prototype.toString,jt=e=>Qr.call(e),ea=e=>jt(e).slice(8,-1),es=e=>jt(e)==="[object Object]",No=e=>X(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,at=qo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ft=e=>{const t=Object.create(null);return o=>t[o]||(t[o]=e(o))},ta=/-(\w)/g,et=Ft(e=>e.replace(ta,(t,o)=>o?o.toUpperCase():"")),oa=/\B([A-Z])/g,ot=Ft(e=>e.replace(oa,"-$1").toLowerCase()),ts=Ft(e=>e.charAt(0).toUpperCase()+e.slice(1)),to=Ft(e=>e?`on${ts(e)}`:""),Ue=(e,t)=>!Object.is(e,t),oo=(e,...t)=>{for(let o=0;o<e.length;o++)e[o](...t)},os=(e,t,o,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:o})},ra=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let dr;const rs=()=>dr||(dr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Bt(e){if(S(e)){const t={};for(let o=0;o<e.length;o++){const r=e[o],s=X(r)?la(r):Bt(r);if(s)for(const n in s)t[n]=s[n]}return t}else if(X(e)||K(e))return e}const sa=/;(?![^(]*\))/g,na=/:([^]+)/,ia=/\/\*[^]*?\*\//g;function la(e){const t={};return e.replace(ia,"").split(sa).forEach(o=>{if(o){const r=o.split(na);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function zo(e){let t="";if(X(e))t=e;else if(S(e))for(let o=0;o<e.length;o++){const r=zo(e[o]);r&&(t+=r+" ")}else if(K(e))for(const o in e)e[o]&&(t+=o+" ");return t.trim()}const aa="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ca=qo(aa);function ss(e){return!!e||e===""}const ro=e=>X(e)?e:e==null?"":S(e)||K(e)&&(e.toString===Qr||!q(e.toString))?JSON.stringify(e,ns,2):String(e),ns=(e,t)=>t&&t.__v_isRef?ns(e,t.value):Ye(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((o,[r,s],n)=>(o[so(r,n)+" =>"]=s,o),{})}:Yr(t)?{[`Set(${t.size})`]:[...t.values()].map(o=>so(o))}:Ne(t)?so(t):K(t)&&!S(t)&&!es(t)?String(t):t,so=(e,t="")=>{var o;return Ne(e)?`Symbol(${(o=e.description)!=null?o:t})`:e};/**
* @vue/reactivity v3.4.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let pe;class da{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=pe,!t&&pe&&(this.index=(pe.scopes||(pe.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const o=pe;try{return pe=this,t()}finally{pe=o}}}on(){pe=this}off(){pe=this.parent}stop(t){if(this._active){let o,r;for(o=0,r=this.effects.length;o<r;o++)this.effects[o].stop();for(o=0,r=this.cleanups.length;o<r;o++)this.cleanups[o]();if(this.scopes)for(o=0,r=this.scopes.length;o<r;o++)this.scopes[o].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function fa(e,t=pe){t&&t.active&&t.effects.push(e)}function pa(){return pe}let De;class Ro{constructor(t,o,r,s){this.fn=t,this.trigger=o,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=5,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,fa(this,s)}get dirty(){if(this._dirtyLevel===2)return!1;if(this._dirtyLevel===3||this._dirtyLevel===4){this._dirtyLevel=1,ze();for(let t=0;t<this._depsLength;t++){const o=this.deps[t];if(o.computed){if(o.computed.effect._dirtyLevel===2)return Se(),!0;if(ua(o.computed),this._dirtyLevel>=5)break}}this._dirtyLevel===1&&(this._dirtyLevel=0),Se()}return this._dirtyLevel>=5}set dirty(t){this._dirtyLevel=t?5:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=Me,o=De;try{return Me=!0,De=this,this._runnings++,fr(this),this.fn()}finally{pr(this),this._runnings--,De=o,Me=t}}stop(){this.active&&(fr(this),pr(this),this.onStop&&this.onStop(),this.active=!1)}}function ua(e){return e.value}function fr(e){e._trackId++,e._depsLength=0}function pr(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)is(e.deps[t],e);e.deps.length=e._depsLength}}function is(e,t){const o=e.get(t);o!==void 0&&t._trackId!==o&&(e.delete(t),e.size===0&&e.cleanup())}let Me=!0,vo=0;const ls=[];function ze(){ls.push(Me),Me=!1}function Se(){const e=ls.pop();Me=e===void 0?!0:e}function Ho(){vo++}function jo(){for(vo--;!vo&&bo.length;)bo.shift()()}function as(e,t,o){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&is(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const bo=[];function cs(e,t,o){Ho();for(const r of e.keys()){let s;if(!e.computed&&r.computed&&r._runnings>0&&(s??(s=e.get(r)===r._trackId))){r._dirtyLevel=2;continue}r._dirtyLevel<t&&(s??(s=e.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r.computed&&r._dirtyLevel===2&&(r._shouldSchedule=!0),r._dirtyLevel=t),r._shouldSchedule&&(s??(s=e.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==3&&(r._shouldSchedule=!1,r.scheduler&&bo.push(r.scheduler)))}jo()}const ds=(e,t)=>{const o=new Map;return o.cleanup=e,o.computed=t,o},yo=new WeakMap,Ze=Symbol(""),wo=Symbol("");function ne(e,t,o){if(Me&&De){let r=yo.get(e);r||yo.set(e,r=new Map);let s=r.get(o);s||r.set(o,s=ds(()=>r.delete(o))),as(De,s)}}function Te(e,t,o,r,s,n){const i=yo.get(e);if(!i)return;let l=[];if(t==="clear")l=[...i.values()];else if(o==="length"&&S(e)){const a=Number(r);i.forEach((f,c)=>{(c==="length"||!Ne(c)&&c>=a)&&l.push(f)})}else switch(o!==void 0&&l.push(i.get(o)),t){case"add":S(e)?No(o)&&l.push(i.get("length")):(l.push(i.get(Ze)),Ye(e)&&l.push(i.get(wo)));break;case"delete":S(e)||(l.push(i.get(Ze)),Ye(e)&&l.push(i.get(wo)));break;case"set":Ye(e)&&l.push(i.get(Ze));break}Ho();for(const a of l)a&&cs(a,5);jo()}const ha=qo("__proto__,__v_isRef,__isVue"),fs=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ne)),ur=ma();function ma(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...o){const r=j(this);for(let n=0,i=this.length;n<i;n++)ne(r,"get",n+"");const s=r[t](...o);return s===-1||s===!1?r[t](...o.map(j)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...o){ze(),Ho();const r=j(this)[t].apply(this,o);return jo(),Se(),r}}),e}function ga(e){Ne(e)||(e=String(e));const t=j(this);return ne(t,"has",e),t.hasOwnProperty(e)}class ps{constructor(t=!1,o=!1){this._isReadonly=t,this._isShallow=o}get(t,o,r){const s=this._isReadonly,n=this._isShallow;if(o==="__v_isReactive")return!s;if(o==="__v_isReadonly")return s;if(o==="__v_isShallow")return n;if(o==="__v_raw")return r===(s?n?La:gs:n?ms:hs).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const i=S(t);if(!s){if(i&&N(ur,o))return Reflect.get(ur,o,r);if(o==="hasOwnProperty")return ga}const l=Reflect.get(t,o,r);return(Ne(o)?fs.has(o):ha(o))||(s||ne(t,"get",o),n)?l:ae(l)?i&&No(o)?l:l.value:K(l)?s?xs(l):Wo(l):l}}class us extends ps{constructor(t=!1){super(!1,t)}set(t,o,r,s){let n=t[o];if(!this._isShallow){const a=Mt(n);if(!_o(r)&&!Mt(r)&&(n=j(n),r=j(r)),!S(t)&&ae(n)&&!ae(r))return a?!1:(n.value=r,!0)}const i=S(t)&&No(o)?Number(o)<t.length:N(t,o),l=Reflect.set(t,o,r,s);return t===j(s)&&(i?Ue(r,n)&&Te(t,"set",o,r):Te(t,"add",o,r)),l}deleteProperty(t,o){const r=N(t,o);t[o];const s=Reflect.deleteProperty(t,o);return s&&r&&Te(t,"delete",o,void 0),s}has(t,o){const r=Reflect.has(t,o);return(!Ne(o)||!fs.has(o))&&ne(t,"has",o),r}ownKeys(t){return ne(t,"iterate",S(t)?"length":Ze),Reflect.ownKeys(t)}}class xa extends ps{constructor(t=!1){super(!0,t)}set(t,o){return!0}deleteProperty(t,o){return!0}}const va=new us,ba=new xa,ya=new us(!0);const Fo=e=>e,Wt=e=>Reflect.getPrototypeOf(e);function kt(e,t,o=!1,r=!1){e=e.__v_raw;const s=j(e),n=j(t);o||(Ue(t,n)&&ne(s,"get",t),ne(s,"get",n));const{has:i}=Wt(s),l=r?Fo:o?Uo:Zo;if(i.call(s,t))return l(e.get(t));if(i.call(s,n))return l(e.get(n));e!==s&&e.get(t)}function $t(e,t=!1){const o=this.__v_raw,r=j(o),s=j(e);return t||(Ue(e,s)&&ne(r,"has",e),ne(r,"has",s)),e===s?o.has(e):o.has(e)||o.has(s)}function Et(e,t=!1){return e=e.__v_raw,!t&&ne(j(e),"iterate",Ze),Reflect.get(e,"size",e)}function hr(e){e=j(e);const t=j(this);return Wt(t).has.call(t,e)||(t.add(e),Te(t,"add",e,e)),this}function mr(e,t){t=j(t);const o=j(this),{has:r,get:s}=Wt(o);let n=r.call(o,e);n||(e=j(e),n=r.call(o,e));const i=s.call(o,e);return o.set(e,t),n?Ue(t,i)&&Te(o,"set",e,t):Te(o,"add",e,t),this}function gr(e){const t=j(this),{has:o,get:r}=Wt(t);let s=o.call(t,e);s||(e=j(e),s=o.call(t,e)),r&&r.call(t,e);const n=t.delete(e);return s&&Te(t,"delete",e,void 0),n}function xr(){const e=j(this),t=e.size!==0,o=e.clear();return t&&Te(e,"clear",void 0,void 0),o}function Tt(e,t){return function(r,s){const n=this,i=n.__v_raw,l=j(i),a=t?Fo:e?Uo:Zo;return!e&&ne(l,"iterate",Ze),i.forEach((f,c)=>r.call(s,a(f),a(c),n))}}function Ct(e,t,o){return function(...r){const s=this.__v_raw,n=j(s),i=Ye(n),l=e==="entries"||e===Symbol.iterator&&i,a=e==="keys"&&i,f=s[e](...r),c=o?Fo:t?Uo:Zo;return!t&&ne(n,"iterate",a?wo:Ze),{next(){const{value:m,done:h}=f.next();return h?{value:m,done:h}:{value:l?[c(m[0]),c(m[1])]:c(m),done:h}},[Symbol.iterator](){return this}}}}function Ae(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function wa(){const e={get(n){return kt(this,n)},get size(){return Et(this)},has:$t,add:hr,set:mr,delete:gr,clear:xr,forEach:Tt(!1,!1)},t={get(n){return kt(this,n,!1,!0)},get size(){return Et(this)},has:$t,add:hr,set:mr,delete:gr,clear:xr,forEach:Tt(!1,!0)},o={get(n){return kt(this,n,!0)},get size(){return Et(this,!0)},has(n){return $t.call(this,n,!0)},add:Ae("add"),set:Ae("set"),delete:Ae("delete"),clear:Ae("clear"),forEach:Tt(!0,!1)},r={get(n){return kt(this,n,!0,!0)},get size(){return Et(this,!0)},has(n){return $t.call(this,n,!0)},add:Ae("add"),set:Ae("set"),delete:Ae("delete"),clear:Ae("clear"),forEach:Tt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(n=>{e[n]=Ct(n,!1,!1),o[n]=Ct(n,!0,!1),t[n]=Ct(n,!1,!0),r[n]=Ct(n,!0,!0)}),[e,o,t,r]}const[_a,ka,$a,Ea]=wa();function Bo(e,t){const o=t?e?Ea:$a:e?ka:_a;return(r,s,n)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(N(o,s)&&s in r?o:r,s,n)}const Ta={get:Bo(!1,!1)},Ca={get:Bo(!1,!0)},Sa={get:Bo(!0,!1)};const hs=new WeakMap,ms=new WeakMap,gs=new WeakMap,La=new WeakMap;function Aa(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ia(e){return e.__v_skip||!Object.isExtensible(e)?0:Aa(ea(e))}function Wo(e){return Mt(e)?e:Do(e,!1,va,Ta,hs)}function Pa(e){return Do(e,!1,ya,Ca,ms)}function xs(e){return Do(e,!0,ba,Sa,gs)}function Do(e,t,o,r,s){if(!K(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const n=s.get(e);if(n)return n;const i=Ia(e);if(i===0)return e;const l=new Proxy(e,i===2?r:o);return s.set(e,l),l}function ct(e){return Mt(e)?ct(e.__v_raw):!!(e&&e.__v_isReactive)}function Mt(e){return!!(e&&e.__v_isReadonly)}function _o(e){return!!(e&&e.__v_isShallow)}function vs(e){return e?!!e.__v_raw:!1}function j(e){const t=e&&e.__v_raw;return t?j(t):e}function qa(e){return Object.isExtensible(e)&&os(e,"__v_skip",!0),e}const Zo=e=>K(e)?Wo(e):e,Uo=e=>K(e)?xs(e):e;class bs{constructor(t,o,r,s){this.getter=t,this._setter=o,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Ro(()=>t(this._value),()=>no(this,this.effect._dirtyLevel===3?3:4)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=j(this),o=t.effect._dirtyLevel;return(!t._cacheable||t.effect.dirty)&&Ue(t._value,t._value=t.effect.run())&&o!==3&&no(t,5),Oa(t),t.effect._dirtyLevel>=2&&no(t,3),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function Ma(e,t,o=!1){let r,s;const n=q(e);return n?(r=e,s=de):(r=e.get,s=e.set),new bs(r,s,n||!s,o)}function Oa(e){var t;Me&&De&&(e=j(e),as(De,(t=e.dep)!=null?t:e.dep=ds(()=>e.dep=void 0,e instanceof bs?e:void 0)))}function no(e,t=5,o,r){e=j(e);const s=e.dep;s&&cs(s,t)}function ae(e){return!!(e&&e.__v_isRef===!0)}function Na(e){return ae(e)?e.value:e}const za={get:(e,t,o)=>Na(Reflect.get(e,t,o)),set:(e,t,o,r)=>{const s=e[t];return ae(s)&&!ae(o)?(s.value=o,!0):Reflect.set(e,t,o,r)}};function ys(e){return ct(e)?e:new Proxy(e,za)}/**
* @vue/runtime-core v3.4.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Oe(e,t,o,r){try{return r?e(...r):e()}catch(s){Dt(s,t,o)}}function me(e,t,o,r){if(q(e)){const s=Oe(e,t,o,r);return s&&Jr(s)&&s.catch(n=>{Dt(n,t,o)}),s}if(S(e)){const s=[];for(let n=0;n<e.length;n++)s.push(me(e[n],t,o,r));return s}}function Dt(e,t,o,r=!0){const s=t?t.vnode:null;if(t){let n=t.parent;const i=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${o}`;for(;n;){const f=n.ec;if(f){for(let c=0;c<f.length;c++)if(f[c](e,i,l)===!1)return}n=n.parent}const a=t.appContext.config.errorHandler;if(a){ze(),Oe(a,null,10,[e,i,l]),Se();return}}Ra(e,o,s,r)}function Ra(e,t,o,r=!0){console.error(e)}let ut=!1,ko=!1;const ee=[];let _e=0;const Je=[];let Ie=null,Be=0;const ws=Promise.resolve();let Vo=null;function Ha(e){const t=Vo||ws;return e?t.then(this?e.bind(this):e):t}function ja(e){let t=_e+1,o=ee.length;for(;t<o;){const r=t+o>>>1,s=ee[r],n=ht(s);n<e||n===e&&s.pre?t=r+1:o=r}return t}function Ko(e){(!ee.length||!ee.includes(e,ut&&e.allowRecurse?_e+1:_e))&&(e.id==null?ee.push(e):ee.splice(ja(e.id),0,e),_s())}function _s(){!ut&&!ko&&(ko=!0,Vo=ws.then($s))}function Fa(e){const t=ee.indexOf(e);t>_e&&ee.splice(t,1)}function Ba(e){S(e)?Je.push(...e):(!Ie||!Ie.includes(e,e.allowRecurse?Be+1:Be))&&Je.push(e),_s()}function vr(e,t,o=ut?_e+1:0){for(;o<ee.length;o++){const r=ee[o];if(r&&r.pre){if(e&&r.id!==e.uid)continue;ee.splice(o,1),o--,r()}}}function ks(e){if(Je.length){const t=[...new Set(Je)].sort((o,r)=>ht(o)-ht(r));if(Je.length=0,Ie){Ie.push(...t);return}for(Ie=t,Be=0;Be<Ie.length;Be++){const o=Ie[Be];o.active!==!1&&o()}Ie=null,Be=0}}const ht=e=>e.id==null?1/0:e.id,Wa=(e,t)=>{const o=ht(e)-ht(t);if(o===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return o};function $s(e){ko=!1,ut=!0,ee.sort(Wa);try{for(_e=0;_e<ee.length;_e++){const t=ee[_e];t&&t.active!==!1&&Oe(t,null,14)}}finally{_e=0,ee.length=0,ks(),ut=!1,Vo=null,(ee.length||Je.length)&&$s()}}function Da(e,t,...o){if(e.isUnmounted)return;const r=e.vnode.props||Z;let s=o;const n=t.startsWith("update:"),i=n&&t.slice(7);if(i&&i in r){const c=`${i==="modelValue"?"model":i}Modifiers`,{number:m,trim:h}=r[c]||Z;h&&(s=o.map(b=>X(b)?b.trim():b)),m&&(s=o.map(ra))}let l,a=r[l=to(t)]||r[l=to(et(t))];!a&&n&&(a=r[l=to(ot(t))]),a&&me(a,e,6,s);const f=r[l+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,me(f,e,6,s)}}function Es(e,t,o=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const n=e.emits;let i={},l=!1;if(!q(e)){const a=f=>{const c=Es(f,t,!0);c&&(l=!0,J(i,c))};!o&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!n&&!l?(K(e)&&r.set(e,null),null):(S(n)?n.forEach(a=>i[a]=null):J(i,n),K(e)&&r.set(e,i),i)}function Zt(e,t){return!e||!Ht(t)?!1:(t=t.slice(2).replace(/Once$/,""),N(e,t[0].toLowerCase()+t.slice(1))||N(e,ot(t))||N(e,t))}let ke=null,Ut=null;function Ot(e){const t=ke;return ke=e,Ut=e&&e.type.__scopeId||null,t}function Ts(e){Ut=e}function Cs(){Ut=null}function Za(e,t=ke,o){if(!t||e._n)return e;const r=(...s)=>{r._d&&Lr(-1);const n=Ot(t);let i;try{i=e(...s)}finally{Ot(n),r._d&&Lr(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function io(e){const{type:t,vnode:o,proxy:r,withProxy:s,propsOptions:[n],slots:i,attrs:l,emit:a,render:f,renderCache:c,props:m,data:h,setupState:b,ctx:L,inheritAttrs:E}=e,z=Ot(e);let W,D;try{if(o.shapeFlag&4){const U=s||r,G=U;W=we(f.call(G,U,c,m,b,h,L)),D=l}else{const U=t;W=we(U.length>1?U(m,{attrs:l,slots:i,emit:a}):U(m,null)),D=t.props?l:Ua(l)}}catch(U){pt.length=0,Dt(U,e,1),W=Ce(mt)}let R=W;if(D&&E!==!1){const U=Object.keys(D),{shapeFlag:G}=R;U.length&&G&7&&(n&&U.some(Mo)&&(D=Va(D,n)),R=tt(R,D,!1,!0))}return o.dirs&&(R=tt(R,null,!1,!0),R.dirs=R.dirs?R.dirs.concat(o.dirs):o.dirs),o.transition&&(R.transition=o.transition),W=R,Ot(z),W}const Ua=e=>{let t;for(const o in e)(o==="class"||o==="style"||Ht(o))&&((t||(t={}))[o]=e[o]);return t},Va=(e,t)=>{const o={};for(const r in e)(!Mo(r)||!(r.slice(9)in t))&&(o[r]=e[r]);return o};function Ka(e,t,o){const{props:r,children:s,component:n}=e,{props:i,children:l,patchFlag:a}=t,f=n.emitsOptions;if(t.dirs||t.transition)return!0;if(o&&a>=0){if(a&1024)return!0;if(a&16)return r?br(r,i,f):!!i;if(a&8){const c=t.dynamicProps;for(let m=0;m<c.length;m++){const h=c[m];if(i[h]!==r[h]&&!Zt(f,h))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===i?!1:r?i?br(r,i,f):!0:!!i;return!1}function br(e,t,o){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const n=r[s];if(t[n]!==e[n]&&!Zt(o,n))return!0}return!1}function Xa({vnode:e,parent:t},o){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=o,t=t.parent;else break}}const Ga=Symbol.for("v-ndc"),Ya=e=>e.__isSuspense;function Ja(e,t){t&&t.pendingBranch?S(e)?t.effects.push(...e):t.effects.push(e):Ba(e)}function Vt(e,t,o=re,r=!1){if(o){const s=o[e]||(o[e]=[]),n=t.__weh||(t.__weh=(...i)=>{ze();const l=xt(o),a=me(t,o,e,i);return l(),Se(),a});return r?s.unshift(n):s.push(n),n}}const Le=e=>(t,o=re)=>{(!Xt||e==="sp")&&Vt(e,(...r)=>t(...r),o)},Qa=Le("bm"),ec=Le("m"),tc=Le("bu"),oc=Le("u"),rc=Le("bum"),Ss=Le("um"),sc=Le("sp"),nc=Le("rtg"),ic=Le("rtc");function lc(e,t=re){Vt("ec",e,t)}function je(e,t,o,r){const s=e.dirs,n=t&&t.dirs;for(let i=0;i<s.length;i++){const l=s[i];n&&(l.oldValue=n[i].value);let a=l.dir[r];a&&(ze(),me(a,o,8,[e.el,l,e,t]),Se())}}function ac(e,t,o,r){let s;const n=o;if(S(e)||X(e)){s=new Array(e.length);for(let i=0,l=e.length;i<l;i++)s[i]=t(e[i],i,void 0,n)}else if(typeof e=="number"){s=new Array(e);for(let i=0;i<e;i++)s[i]=t(i+1,i,void 0,n)}else if(K(e))if(e[Symbol.iterator])s=Array.from(e,(i,l)=>t(i,l,void 0,n));else{const i=Object.keys(e);s=new Array(i.length);for(let l=0,a=i.length;l<a;l++){const f=i[l];s[l]=t(e[f],f,l,n)}}else s=[];return s}const At=e=>!!e.type.__asyncLoader,$o=e=>e?Ks(e)?Jo(e):$o(e.parent):null,dt=J(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>$o(e.parent),$root:e=>$o(e.root),$emit:e=>e.emit,$options:e=>Xo(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,Ko(e.update)}),$nextTick:e=>e.n||(e.n=Ha.bind(e.proxy)),$watch:e=>Lc.bind(e)}),lo=(e,t)=>e!==Z&&!e.__isScriptSetup&&N(e,t),cc={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:o,setupState:r,data:s,props:n,accessCache:i,type:l,appContext:a}=e;let f;if(t[0]!=="$"){const b=i[t];if(b!==void 0)switch(b){case 1:return r[t];case 2:return s[t];case 4:return o[t];case 3:return n[t]}else{if(lo(r,t))return i[t]=1,r[t];if(s!==Z&&N(s,t))return i[t]=2,s[t];if((f=e.propsOptions[0])&&N(f,t))return i[t]=3,n[t];if(o!==Z&&N(o,t))return i[t]=4,o[t];Eo&&(i[t]=0)}}const c=dt[t];let m,h;if(c)return t==="$attrs"&&ne(e.attrs,"get",""),c(e);if((m=l.__cssModules)&&(m=m[t]))return m;if(o!==Z&&N(o,t))return i[t]=4,o[t];if(h=a.config.globalProperties,N(h,t))return h[t]},set({_:e},t,o){const{data:r,setupState:s,ctx:n}=e;return lo(s,t)?(s[t]=o,!0):r!==Z&&N(r,t)?(r[t]=o,!0):N(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(n[t]=o,!0)},has({_:{data:e,setupState:t,accessCache:o,ctx:r,appContext:s,propsOptions:n}},i){let l;return!!o[i]||e!==Z&&N(e,i)||lo(t,i)||(l=n[0])&&N(l,i)||N(r,i)||N(dt,i)||N(s.config.globalProperties,i)},defineProperty(e,t,o){return o.get!=null?e._.accessCache[t]=0:N(o,"value")&&this.set(e,t,o.value,null),Reflect.defineProperty(e,t,o)}};function yr(e){return S(e)?e.reduce((t,o)=>(t[o]=null,t),{}):e}let Eo=!0;function dc(e){const t=Xo(e),o=e.proxy,r=e.ctx;Eo=!1,t.beforeCreate&&wr(t.beforeCreate,e,"bc");const{data:s,computed:n,methods:i,watch:l,provide:a,inject:f,created:c,beforeMount:m,mounted:h,beforeUpdate:b,updated:L,activated:E,deactivated:z,beforeDestroy:W,beforeUnmount:D,destroyed:R,unmounted:U,render:G,renderTracked:O,renderTriggered:ce,errorCaptured:ie,serverPrefetch:Ve,expose:ge,inheritAttrs:rt,components:vt,directives:bt,filters:Gt}=t;if(f&&fc(f,r,null),i)for(const V in i){const F=i[V];q(F)&&(r[V]=F.bind(o))}if(s){const V=s.call(o,o);K(V)&&(e.data=Wo(V))}if(Eo=!0,n)for(const V in n){const F=n[V],Re=q(F)?F.bind(o,o):q(F.get)?F.get.bind(o,o):de,yt=!q(F)&&q(F.set)?F.set.bind(o):de,He=Kc({get:Re,set:yt});Object.defineProperty(r,V,{enumerable:!0,configurable:!0,get:()=>He.value,set:xe=>He.value=xe})}if(l)for(const V in l)Ls(l[V],r,o,V);if(a){const V=q(a)?a.call(o):a;Reflect.ownKeys(V).forEach(F=>{xc(F,V[F])})}c&&wr(c,e,"c");function te(V,F){S(F)?F.forEach(Re=>V(Re.bind(o))):F&&V(F.bind(o))}if(te(Qa,m),te(ec,h),te(tc,b),te(oc,L),te(Ac,E),te(Ic,z),te(lc,ie),te(ic,O),te(nc,ce),te(rc,D),te(Ss,U),te(sc,Ve),S(ge))if(ge.length){const V=e.exposed||(e.exposed={});ge.forEach(F=>{Object.defineProperty(V,F,{get:()=>o[F],set:Re=>o[F]=Re})})}else e.exposed||(e.exposed={});G&&e.render===de&&(e.render=G),rt!=null&&(e.inheritAttrs=rt),vt&&(e.components=vt),bt&&(e.directives=bt)}function fc(e,t,o=de){S(e)&&(e=To(e));for(const r in e){const s=e[r];let n;K(s)?"default"in s?n=It(s.from||r,s.default,!0):n=It(s.from||r):n=It(s),ae(n)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>n.value,set:i=>n.value=i}):t[r]=n}}function wr(e,t,o){me(S(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,o)}function Ls(e,t,o,r){const s=r.includes(".")?Bs(o,r):()=>o[r];if(X(e)){const n=t[e];q(n)&&co(s,n)}else if(q(e))co(s,e.bind(o));else if(K(e))if(S(e))e.forEach(n=>Ls(n,t,o,r));else{const n=q(e.handler)?e.handler.bind(o):t[e.handler];q(n)&&co(s,n,e)}}function Xo(e){const t=e.type,{mixins:o,extends:r}=t,{mixins:s,optionsCache:n,config:{optionMergeStrategies:i}}=e.appContext,l=n.get(t);let a;return l?a=l:!s.length&&!o&&!r?a=t:(a={},s.length&&s.forEach(f=>Nt(a,f,i,!0)),Nt(a,t,i)),K(t)&&n.set(t,a),a}function Nt(e,t,o,r=!1){const{mixins:s,extends:n}=t;n&&Nt(e,n,o,!0),s&&s.forEach(i=>Nt(e,i,o,!0));for(const i in t)if(!(r&&i==="expose")){const l=pc[i]||o&&o[i];e[i]=l?l(e[i],t[i]):t[i]}return e}const pc={data:_r,props:kr,emits:kr,methods:lt,computed:lt,beforeCreate:oe,created:oe,beforeMount:oe,mounted:oe,beforeUpdate:oe,updated:oe,beforeDestroy:oe,beforeUnmount:oe,destroyed:oe,unmounted:oe,activated:oe,deactivated:oe,errorCaptured:oe,serverPrefetch:oe,components:lt,directives:lt,watch:hc,provide:_r,inject:uc};function _r(e,t){return t?e?function(){return J(q(e)?e.call(this,this):e,q(t)?t.call(this,this):t)}:t:e}function uc(e,t){return lt(To(e),To(t))}function To(e){if(S(e)){const t={};for(let o=0;o<e.length;o++)t[e[o]]=e[o];return t}return e}function oe(e,t){return e?[...new Set([].concat(e,t))]:t}function lt(e,t){return e?J(Object.create(null),e,t):t}function kr(e,t){return e?S(e)&&S(t)?[...new Set([...e,...t])]:J(Object.create(null),yr(e),yr(t??{})):t}function hc(e,t){if(!e)return t;if(!t)return e;const o=J(Object.create(null),e);for(const r in t)o[r]=oe(e[r],t[r]);return o}function As(){return{app:null,config:{isNativeTag:Jl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let mc=0;function gc(e,t){return function(r,s=null){q(r)||(r=J({},r)),s!=null&&!K(s)&&(s=null);const n=As(),i=new WeakSet;let l=!1;const a=n.app={_uid:mc++,_component:r,_props:s,_container:null,_context:n,_instance:null,version:Xc,get config(){return n.config},set config(f){},use(f,...c){return i.has(f)||(f&&q(f.install)?(i.add(f),f.install(a,...c)):q(f)&&(i.add(f),f(a,...c))),a},mixin(f){return n.mixins.includes(f)||n.mixins.push(f),a},component(f,c){return c?(n.components[f]=c,a):n.components[f]},directive(f,c){return c?(n.directives[f]=c,a):n.directives[f]},mount(f,c,m){if(!l){const h=Ce(r,s);return h.appContext=n,m===!0?m="svg":m===!1&&(m=void 0),c&&t?t(h,f):e(h,f,m),l=!0,a._container=f,f.__vue_app__=a,Jo(h.component)}},unmount(){l&&(e(null,a._container),delete a._container.__vue_app__)},provide(f,c){return n.provides[f]=c,a},runWithContext(f){const c=ft;ft=a;try{return f()}finally{ft=c}}};return a}}let ft=null;function xc(e,t){if(re){let o=re.provides;const r=re.parent&&re.parent.provides;r===o&&(o=re.provides=Object.create(r)),o[e]=t}}function It(e,t,o=!1){const r=re||ke;if(r||ft){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:ft._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return o&&q(t)?t.call(r&&r.proxy):t}}const Is={},Ps=()=>Object.create(Is),qs=e=>Object.getPrototypeOf(e)===Is;function vc(e,t,o,r=!1){const s={},n=Ps();e.propsDefaults=Object.create(null),Ms(e,t,s,n);for(const i in e.propsOptions[0])i in s||(s[i]=void 0);o?e.props=r?s:Pa(s):e.type.props?e.props=s:e.props=n,e.attrs=n}function bc(e,t,o,r){const{props:s,attrs:n,vnode:{patchFlag:i}}=e,l=j(s),[a]=e.propsOptions;let f=!1;if((r||i>0)&&!(i&16)){if(i&8){const c=e.vnode.dynamicProps;for(let m=0;m<c.length;m++){let h=c[m];if(Zt(e.emitsOptions,h))continue;const b=t[h];if(a)if(N(n,h))b!==n[h]&&(n[h]=b,f=!0);else{const L=et(h);s[L]=Co(a,l,L,b,e,!1)}else b!==n[h]&&(n[h]=b,f=!0)}}}else{Ms(e,t,s,n)&&(f=!0);let c;for(const m in l)(!t||!N(t,m)&&((c=ot(m))===m||!N(t,c)))&&(a?o&&(o[m]!==void 0||o[c]!==void 0)&&(s[m]=Co(a,l,m,void 0,e,!0)):delete s[m]);if(n!==l)for(const m in n)(!t||!N(t,m))&&(delete n[m],f=!0)}f&&Te(e.attrs,"set","")}function Ms(e,t,o,r){const[s,n]=e.propsOptions;let i=!1,l;if(t)for(let a in t){if(at(a))continue;const f=t[a];let c;s&&N(s,c=et(a))?!n||!n.includes(c)?o[c]=f:(l||(l={}))[c]=f:Zt(e.emitsOptions,a)||(!(a in r)||f!==r[a])&&(r[a]=f,i=!0)}if(n){const a=j(o),f=l||Z;for(let c=0;c<n.length;c++){const m=n[c];o[m]=Co(s,a,m,f[m],e,!N(f,m))}}return i}function Co(e,t,o,r,s,n){const i=e[o];if(i!=null){const l=N(i,"default");if(l&&r===void 0){const a=i.default;if(i.type!==Function&&!i.skipFactory&&q(a)){const{propsDefaults:f}=s;if(o in f)r=f[o];else{const c=xt(s);r=f[o]=a.call(null,t),c()}}else r=a}i[0]&&(n&&!l?r=!1:i[1]&&(r===""||r===ot(o))&&(r=!0))}return r}function Os(e,t,o=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const n=e.props,i={},l=[];let a=!1;if(!q(e)){const c=m=>{a=!0;const[h,b]=Os(m,t,!0);J(i,h),b&&l.push(...b)};!o&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!n&&!a)return K(e)&&r.set(e,Ge),Ge;if(S(n))for(let c=0;c<n.length;c++){const m=et(n[c]);$r(m)&&(i[m]=Z)}else if(n)for(const c in n){const m=et(c);if($r(m)){const h=n[c],b=i[m]=S(h)||q(h)?{type:h}:J({},h);if(b){const L=Cr(Boolean,b.type),E=Cr(String,b.type);b[0]=L>-1,b[1]=E<0||L<E,(L>-1||N(b,"default"))&&l.push(m)}}}const f=[i,l];return K(e)&&r.set(e,f),f}function $r(e){return e[0]!=="$"&&!at(e)}function Er(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function Tr(e,t){return Er(e)===Er(t)}function Cr(e,t){return S(t)?t.findIndex(o=>Tr(o,e)):q(t)&&Tr(t,e)?0:-1}const Ns=e=>e[0]==="_"||e==="$stable",Go=e=>S(e)?e.map(we):[we(e)],yc=(e,t,o)=>{if(t._n)return t;const r=Za((...s)=>Go(t(...s)),o);return r._c=!1,r},zs=(e,t,o)=>{const r=e._ctx;for(const s in e){if(Ns(s))continue;const n=e[s];if(q(n))t[s]=yc(s,n,r);else if(n!=null){const i=Go(n);t[s]=()=>i}}},Rs=(e,t)=>{const o=Go(t);e.slots.default=()=>o},wc=(e,t)=>{const o=e.slots=Ps();if(e.vnode.shapeFlag&32){const r=t._;r?(J(o,t),os(o,"_",r,!0)):zs(t,o)}else t&&Rs(e,t)},_c=(e,t,o)=>{const{vnode:r,slots:s}=e;let n=!0,i=Z;if(r.shapeFlag&32){const l=t._;l?o&&l===1?n=!1:(J(s,t),!o&&l===1&&delete s._):(n=!t.$stable,zs(t,s)),i=t}else t&&(Rs(e,t),i={default:1});if(n)for(const l in s)!Ns(l)&&i[l]==null&&delete s[l]};function So(e,t,o,r,s=!1){if(S(e)){e.forEach((h,b)=>So(h,t&&(S(t)?t[b]:t),o,r,s));return}if(At(r)&&!s)return;const n=r.shapeFlag&4?Jo(r.component):r.el,i=s?null:n,{i:l,r:a}=e,f=t&&t.r,c=l.refs===Z?l.refs={}:l.refs,m=l.setupState;if(f!=null&&f!==a&&(X(f)?(c[f]=null,N(m,f)&&(m[f]=null)):ae(f)&&(f.value=null)),q(a))Oe(a,l,12,[i,c]);else{const h=X(a),b=ae(a);if(h||b){const L=()=>{if(e.f){const E=h?N(m,a)?m[a]:c[a]:a.value;s?S(E)&&Oo(E,n):S(E)?E.includes(n)||E.push(n):h?(c[a]=[n],N(m,a)&&(m[a]=c[a])):(a.value=[n],e.k&&(c[e.k]=a.value))}else h?(c[a]=i,N(m,a)&&(m[a]=i)):b&&(a.value=i,e.k&&(c[e.k]=i))};i?(L.id=-1,se(L,o)):L()}}}const se=Ja;function kc(e){return $c(e)}function $c(e,t){const o=rs();o.__VUE__=!0;const{insert:r,remove:s,patchProp:n,createElement:i,createText:l,createComment:a,setText:f,setElementText:c,parentNode:m,nextSibling:h,setScopeId:b=de,insertStaticContent:L}=e,E=(d,p,u,g=null,x=null,w=null,k=void 0,y=null,_=!!p.dynamicChildren)=>{if(d===p)return;d&&!it(d,p)&&(g=wt(d),xe(d,x,w,!0),d=null),p.patchFlag===-2&&(_=!1,p.dynamicChildren=null);const{type:v,ref:$,shapeFlag:C}=p;switch(v){case Kt:z(d,p,u,g);break;case mt:W(d,p,u,g);break;case fo:d==null&&D(p,u,g,k);break;case ye:vt(d,p,u,g,x,w,k,y,_);break;default:C&1?G(d,p,u,g,x,w,k,y,_):C&6?bt(d,p,u,g,x,w,k,y,_):(C&64||C&128)&&v.process(d,p,u,g,x,w,k,y,_,st)}$!=null&&x&&So($,d&&d.ref,w,p||d,!p)},z=(d,p,u,g)=>{if(d==null)r(p.el=l(p.children),u,g);else{const x=p.el=d.el;p.children!==d.children&&f(x,p.children)}},W=(d,p,u,g)=>{d==null?r(p.el=a(p.children||""),u,g):p.el=d.el},D=(d,p,u,g)=>{[d.el,d.anchor]=L(d.children,p,u,g,d.el,d.anchor)},R=({el:d,anchor:p},u,g)=>{let x;for(;d&&d!==p;)x=h(d),r(d,u,g),d=x;r(p,u,g)},U=({el:d,anchor:p})=>{let u;for(;d&&d!==p;)u=h(d),s(d),d=u;s(p)},G=(d,p,u,g,x,w,k,y,_)=>{p.type==="svg"?k="svg":p.type==="math"&&(k="mathml"),d==null?O(p,u,g,x,w,k,y,_):Ve(d,p,x,w,k,y,_)},O=(d,p,u,g,x,w,k,y)=>{let _,v;const{props:$,shapeFlag:C,transition:T,dirs:A}=d;if(_=d.el=i(d.type,w,$&&$.is,$),C&8?c(_,d.children):C&16&&ie(d.children,_,null,g,x,ao(d,w),k,y),A&&je(d,null,g,"created"),ce(_,d,d.scopeId,k,g),$){for(const B in $)B!=="value"&&!at(B)&&n(_,B,null,$[B],w,d.children,g,x,$e);"value"in $&&n(_,"value",null,$.value,w),(v=$.onVnodeBeforeMount)&&be(v,g,d)}A&&je(d,null,g,"beforeMount");const M=Ec(x,T);M&&T.beforeEnter(_),r(_,p,u),((v=$&&$.onVnodeMounted)||M||A)&&se(()=>{v&&be(v,g,d),M&&T.enter(_),A&&je(d,null,g,"mounted")},x)},ce=(d,p,u,g,x)=>{if(u&&b(d,u),g)for(let w=0;w<g.length;w++)b(d,g[w]);if(x){let w=x.subTree;if(p===w){const k=x.vnode;ce(d,k,k.scopeId,k.slotScopeIds,x.parent)}}},ie=(d,p,u,g,x,w,k,y,_=0)=>{for(let v=_;v<d.length;v++){const $=d[v]=y?Pe(d[v]):we(d[v]);E(null,$,p,u,g,x,w,k,y)}},Ve=(d,p,u,g,x,w,k)=>{const y=p.el=d.el;let{patchFlag:_,dynamicChildren:v,dirs:$}=p;_|=d.patchFlag&16;const C=d.props||Z,T=p.props||Z;let A;if(u&&Fe(u,!1),(A=T.onVnodeBeforeUpdate)&&be(A,u,p,d),$&&je(p,d,u,"beforeUpdate"),u&&Fe(u,!0),v?ge(d.dynamicChildren,v,y,u,g,ao(p,x),w):k||F(d,p,y,null,u,g,ao(p,x),w,!1),_>0){if(_&16)rt(y,p,C,T,u,g,x);else if(_&2&&C.class!==T.class&&n(y,"class",null,T.class,x),_&4&&n(y,"style",C.style,T.style,x),_&8){const M=p.dynamicProps;for(let B=0;B<M.length;B++){const H=M[B],Y=C[H],fe=T[H];(fe!==Y||H==="value")&&n(y,H,Y,fe,x,d.children,u,g,$e)}}_&1&&d.children!==p.children&&c(y,p.children)}else!k&&v==null&&rt(y,p,C,T,u,g,x);((A=T.onVnodeUpdated)||$)&&se(()=>{A&&be(A,u,p,d),$&&je(p,d,u,"updated")},g)},ge=(d,p,u,g,x,w,k)=>{for(let y=0;y<p.length;y++){const _=d[y],v=p[y],$=_.el&&(_.type===ye||!it(_,v)||_.shapeFlag&70)?m(_.el):u;E(_,v,$,null,g,x,w,k,!0)}},rt=(d,p,u,g,x,w,k)=>{if(u!==g){if(u!==Z)for(const y in u)!at(y)&&!(y in g)&&n(d,y,u[y],null,k,p.children,x,w,$e);for(const y in g){if(at(y))continue;const _=g[y],v=u[y];_!==v&&y!=="value"&&n(d,y,v,_,k,p.children,x,w,$e)}"value"in g&&n(d,"value",u.value,g.value,k)}},vt=(d,p,u,g,x,w,k,y,_)=>{const v=p.el=d?d.el:l(""),$=p.anchor=d?d.anchor:l("");let{patchFlag:C,dynamicChildren:T,slotScopeIds:A}=p;A&&(y=y?y.concat(A):A),d==null?(r(v,u,g),r($,u,g),ie(p.children||[],u,$,x,w,k,y,_)):C>0&&C&64&&T&&d.dynamicChildren?(ge(d.dynamicChildren,T,u,x,w,k,y),(p.key!=null||x&&p===x.subTree)&&Hs(d,p,!0)):F(d,p,u,$,x,w,k,y,_)},bt=(d,p,u,g,x,w,k,y,_)=>{p.slotScopeIds=y,d==null?p.shapeFlag&512?x.ctx.activate(p,u,g,k,_):Gt(p,u,g,x,w,k,_):er(d,p,_)},Gt=(d,p,u,g,x,w,k)=>{const y=d.component=Bc(d,g,x);if(Ws(d)&&(y.ctx.renderer=st),Wc(y),y.asyncDep){if(x&&x.registerDep(y,te,k),!d.el){const _=y.subTree=Ce(mt);W(null,_,p,u)}}else te(y,d,p,u,x,w,k)},er=(d,p,u)=>{const g=p.component=d.component;if(Ka(d,p,u))if(g.asyncDep&&!g.asyncResolved){V(g,p,u);return}else g.next=p,Fa(g.update),g.effect.dirty=!0,g.update();else p.el=d.el,g.vnode=p},te=(d,p,u,g,x,w,k)=>{const y=()=>{if(d.isMounted){let{next:$,bu:C,u:T,parent:A,vnode:M}=d;{const Ke=js(d);if(Ke){$&&($.el=M.el,V(d,$,k)),Ke.asyncDep.then(()=>{d.isUnmounted||y()});return}}let B=$,H;Fe(d,!1),$?($.el=M.el,V(d,$,k)):$=M,C&&oo(C),(H=$.props&&$.props.onVnodeBeforeUpdate)&&be(H,A,$,M),Fe(d,!0);const Y=io(d),fe=d.subTree;d.subTree=Y,E(fe,Y,m(fe.el),wt(fe),d,x,w),$.el=Y.el,B===null&&Xa(d,Y.el),T&&se(T,x),(H=$.props&&$.props.onVnodeUpdated)&&se(()=>be(H,A,$,M),x)}else{let $;const{el:C,props:T}=p,{bm:A,m:M,parent:B}=d,H=At(p);if(Fe(d,!1),A&&oo(A),!H&&($=T&&T.onVnodeBeforeMount)&&be($,B,p),Fe(d,!0),C&&sr){const Y=()=>{d.subTree=io(d),sr(C,d.subTree,d,x,null)};H?p.type.__asyncLoader().then(()=>!d.isUnmounted&&Y()):Y()}else{const Y=d.subTree=io(d);E(null,Y,u,g,d,x,w),p.el=Y.el}if(M&&se(M,x),!H&&($=T&&T.onVnodeMounted)){const Y=p;se(()=>be($,B,Y),x)}(p.shapeFlag&256||B&&At(B.vnode)&&B.vnode.shapeFlag&256)&&d.a&&se(d.a,x),d.isMounted=!0,p=u=g=null}},_=d.effect=new Ro(y,de,()=>Ko(v),d.scope),v=d.update=()=>{_.dirty&&_.run()};v.id=d.uid,Fe(d,!0),v()},V=(d,p,u)=>{p.component=d;const g=d.vnode.props;d.vnode=p,d.next=null,bc(d,p.props,g,u),_c(d,p.children,u),ze(),vr(d),Se()},F=(d,p,u,g,x,w,k,y,_=!1)=>{const v=d&&d.children,$=d?d.shapeFlag:0,C=p.children,{patchFlag:T,shapeFlag:A}=p;if(T>0){if(T&128){yt(v,C,u,g,x,w,k,y,_);return}else if(T&256){Re(v,C,u,g,x,w,k,y,_);return}}A&8?($&16&&$e(v,x,w),C!==v&&c(u,C)):$&16?A&16?yt(v,C,u,g,x,w,k,y,_):$e(v,x,w,!0):($&8&&c(u,""),A&16&&ie(C,u,g,x,w,k,y,_))},Re=(d,p,u,g,x,w,k,y,_)=>{d=d||Ge,p=p||Ge;const v=d.length,$=p.length,C=Math.min(v,$);let T;for(T=0;T<C;T++){const A=p[T]=_?Pe(p[T]):we(p[T]);E(d[T],A,u,null,x,w,k,y,_)}v>$?$e(d,x,w,!0,!1,C):ie(p,u,g,x,w,k,y,_,C)},yt=(d,p,u,g,x,w,k,y,_)=>{let v=0;const $=p.length;let C=d.length-1,T=$-1;for(;v<=C&&v<=T;){const A=d[v],M=p[v]=_?Pe(p[v]):we(p[v]);if(it(A,M))E(A,M,u,null,x,w,k,y,_);else break;v++}for(;v<=C&&v<=T;){const A=d[C],M=p[T]=_?Pe(p[T]):we(p[T]);if(it(A,M))E(A,M,u,null,x,w,k,y,_);else break;C--,T--}if(v>C){if(v<=T){const A=T+1,M=A<$?p[A].el:g;for(;v<=T;)E(null,p[v]=_?Pe(p[v]):we(p[v]),u,M,x,w,k,y,_),v++}}else if(v>T)for(;v<=C;)xe(d[v],x,w,!0),v++;else{const A=v,M=v,B=new Map;for(v=M;v<=T;v++){const le=p[v]=_?Pe(p[v]):we(p[v]);le.key!=null&&B.set(le.key,v)}let H,Y=0;const fe=T-M+1;let Ke=!1,nr=0;const nt=new Array(fe);for(v=0;v<fe;v++)nt[v]=0;for(v=A;v<=C;v++){const le=d[v];if(Y>=fe){xe(le,x,w,!0);continue}let ve;if(le.key!=null)ve=B.get(le.key);else for(H=M;H<=T;H++)if(nt[H-M]===0&&it(le,p[H])){ve=H;break}ve===void 0?xe(le,x,w,!0):(nt[ve-M]=v+1,ve>=nr?nr=ve:Ke=!0,E(le,p[ve],u,null,x,w,k,y,_),Y++)}const ir=Ke?Tc(nt):Ge;for(H=ir.length-1,v=fe-1;v>=0;v--){const le=M+v,ve=p[le],lr=le+1<$?p[le+1].el:g;nt[v]===0?E(null,ve,u,lr,x,w,k,y,_):Ke&&(H<0||v!==ir[H]?He(ve,u,lr,2):H--)}}},He=(d,p,u,g,x=null)=>{const{el:w,type:k,transition:y,children:_,shapeFlag:v}=d;if(v&6){He(d.component.subTree,p,u,g);return}if(v&128){d.suspense.move(p,u,g);return}if(v&64){k.move(d,p,u,st);return}if(k===ye){r(w,p,u);for(let C=0;C<_.length;C++)He(_[C],p,u,g);r(d.anchor,p,u);return}if(k===fo){R(d,p,u);return}if(g!==2&&v&1&&y)if(g===0)y.beforeEnter(w),r(w,p,u),se(()=>y.enter(w),x);else{const{leave:C,delayLeave:T,afterLeave:A}=y,M=()=>r(w,p,u),B=()=>{C(w,()=>{M(),A&&A()})};T?T(w,M,B):B()}else r(w,p,u)},xe=(d,p,u,g=!1,x=!1)=>{const{type:w,props:k,ref:y,children:_,dynamicChildren:v,shapeFlag:$,patchFlag:C,dirs:T,memoIndex:A}=d;if(C===-2&&(x=!1),y!=null&&So(y,null,u,d,!0),A!=null&&(p.renderCache[A]=void 0),$&256){p.ctx.deactivate(d);return}const M=$&1&&T,B=!At(d);let H;if(B&&(H=k&&k.onVnodeBeforeUnmount)&&be(H,p,d),$&6)Ys(d.component,u,g);else{if($&128){d.suspense.unmount(u,g);return}M&&je(d,null,p,"beforeUnmount"),$&64?d.type.remove(d,p,u,st,g):v&&(w!==ye||C>0&&C&64)?$e(v,p,u,!1,!0):(w===ye&&C&384||!x&&$&16)&&$e(_,p,u),g&&tr(d)}(B&&(H=k&&k.onVnodeUnmounted)||M)&&se(()=>{H&&be(H,p,d),M&&je(d,null,p,"unmounted")},u)},tr=d=>{const{type:p,el:u,anchor:g,transition:x}=d;if(p===ye){Gs(u,g);return}if(p===fo){U(d);return}const w=()=>{s(u),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(d.shapeFlag&1&&x&&!x.persisted){const{leave:k,delayLeave:y}=x,_=()=>k(u,w);y?y(d.el,w,_):_()}else w()},Gs=(d,p)=>{let u;for(;d!==p;)u=h(d),s(d),d=u;s(p)},Ys=(d,p,u)=>{const{bum:g,scope:x,update:w,subTree:k,um:y,m:_,a:v}=d;Sr(_),Sr(v),g&&oo(g),x.stop(),w&&(w.active=!1,xe(k,d,p,u)),y&&se(y,p),se(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},$e=(d,p,u,g=!1,x=!1,w=0)=>{for(let k=w;k<d.length;k++)xe(d[k],p,u,g,x)},wt=d=>d.shapeFlag&6?wt(d.component.subTree):d.shapeFlag&128?d.suspense.next():h(d.anchor||d.el);let Yt=!1;const or=(d,p,u)=>{d==null?p._vnode&&xe(p._vnode,null,null,!0):E(p._vnode||null,d,p,null,null,null,u),Yt||(Yt=!0,vr(),ks(),Yt=!1),p._vnode=d},st={p:E,um:xe,m:He,r:tr,mt:Gt,mc:ie,pc:F,pbc:ge,n:wt,o:e};let rr,sr;return{render:or,hydrate:rr,createApp:gc(or,rr)}}function ao({type:e,props:t},o){return o==="svg"&&e==="foreignObject"||o==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:o}function Fe({effect:e,update:t},o){e.allowRecurse=t.allowRecurse=o}function Ec(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Hs(e,t,o=!1){const r=e.children,s=t.children;if(S(r)&&S(s))for(let n=0;n<r.length;n++){const i=r[n];let l=s[n];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[n]=Pe(s[n]),l.el=i.el),!o&&l.patchFlag!==-2&&Hs(i,l)),l.type===Kt&&(l.el=i.el)}}function Tc(e){const t=e.slice(),o=[0];let r,s,n,i,l;const a=e.length;for(r=0;r<a;r++){const f=e[r];if(f!==0){if(s=o[o.length-1],e[s]<f){t[r]=s,o.push(r);continue}for(n=0,i=o.length-1;n<i;)l=n+i>>1,e[o[l]]<f?n=l+1:i=l;f<e[o[n]]&&(n>0&&(t[r]=o[n-1]),o[n]=r)}}for(n=o.length,i=o[n-1];n-- >0;)o[n]=i,i=t[i];return o}function js(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:js(t)}function Sr(e){if(e)for(let t=0;t<e.length;t++)e[t].active=!1}const Cc=Symbol.for("v-scx"),Sc=()=>It(Cc),St={};function co(e,t,o){return Fs(e,t,o)}function Fs(e,t,{immediate:o,deep:r,flush:s,once:n,onTrack:i,onTrigger:l}=Z){if(t&&n){const O=t;t=(...ce)=>{O(...ce),G()}}const a=re,f=O=>r===!0?O:We(O,r===!1?1:void 0);let c,m=!1,h=!1;if(ae(e)?(c=()=>e.value,m=_o(e)):ct(e)?(c=()=>f(e),m=!0):S(e)?(h=!0,m=e.some(O=>ct(O)||_o(O)),c=()=>e.map(O=>{if(ae(O))return O.value;if(ct(O))return f(O);if(q(O))return Oe(O,a,2)})):q(e)?t?c=()=>Oe(e,a,2):c=()=>(b&&b(),me(e,a,3,[L])):c=de,t&&r){const O=c;c=()=>We(O())}let b,L=O=>{b=R.onStop=()=>{Oe(O,a,4),b=R.onStop=void 0}},E;if(Xt)if(L=de,t?o&&me(t,a,3,[c(),h?[]:void 0,L]):c(),s==="sync"){const O=Sc();E=O.__watcherHandles||(O.__watcherHandles=[])}else return de;let z=h?new Array(e.length).fill(St):St;const W=()=>{if(!(!R.active||!R.dirty))if(t){const O=R.run();(r||m||(h?O.some((ce,ie)=>Ue(ce,z[ie])):Ue(O,z)))&&(b&&b(),me(t,a,3,[O,z===St?void 0:h&&z[0]===St?[]:z,L]),z=O)}else R.run()};W.allowRecurse=!!t;let D;s==="sync"?D=W:s==="post"?D=()=>se(W,a&&a.suspense):(W.pre=!0,a&&(W.id=a.uid),D=()=>Ko(W));const R=new Ro(c,de,D),U=pa(),G=()=>{R.stop(),U&&Oo(U.effects,R)};return t?o?W():z=R.run():s==="post"?se(R.run.bind(R),a&&a.suspense):R.run(),E&&E.push(G),G}function Lc(e,t,o){const r=this.proxy,s=X(e)?e.includes(".")?Bs(r,e):()=>r[e]:e.bind(r,r);let n;q(t)?n=t:(n=t.handler,o=t);const i=xt(this),l=Fs(s,n.bind(r),o);return i(),l}function Bs(e,t){const o=t.split(".");return()=>{let r=e;for(let s=0;s<o.length&&r;s++)r=r[o[s]];return r}}function We(e,t=1/0,o){if(t<=0||!K(e)||e.__v_skip||(o=o||new Set,o.has(e)))return e;if(o.add(e),t--,ae(e))We(e.value,t,o);else if(S(e))for(let r=0;r<e.length;r++)We(e[r],t,o);else if(Yr(e)||Ye(e))e.forEach(r=>{We(r,t,o)});else if(es(e)){for(const r in e)We(e[r],t,o);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&We(e[r],t,o)}return e}const Ws=e=>e.type.__isKeepAlive;function Ac(e,t){Ds(e,"a",t)}function Ic(e,t){Ds(e,"da",t)}function Ds(e,t,o=re){const r=e.__wdc||(e.__wdc=()=>{let s=o;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Vt(t,r,o),o){let s=o.parent;for(;s&&s.parent;)Ws(s.parent.vnode)&&Pc(r,t,o,s),s=s.parent}}function Pc(e,t,o,r){const s=Vt(t,e,r,!0);Ss(()=>{Oo(r[t],s)},o)}function Zs(e,t){e.shapeFlag&6&&e.component?Zs(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}const qc=e=>e.__isTeleport,ye=Symbol.for("v-fgt"),Kt=Symbol.for("v-txt"),mt=Symbol.for("v-cmt"),fo=Symbol.for("v-stc"),pt=[];let he=null;function qe(e=!1){pt.push(he=e?null:[])}function Mc(){pt.pop(),he=pt[pt.length-1]||null}let gt=1;function Lr(e){gt+=e}function Us(e){return e.dynamicChildren=gt>0?he||Ge:null,Mc(),gt>0&&he&&he.push(e),e}function Qe(e,t,o,r,s,n){return Us(Q(e,t,o,r,s,n,!0))}function Ar(e,t,o,r,s){return Us(Ce(e,t,o,r,s,!0))}function Oc(e){return e?e.__v_isVNode===!0:!1}function it(e,t){return e.type===t.type&&e.key===t.key}const Vs=({key:e})=>e??null,Pt=({ref:e,ref_key:t,ref_for:o})=>(typeof e=="number"&&(e=""+e),e!=null?X(e)||ae(e)||q(e)?{i:ke,r:e,k:t,f:!!o}:e:null);function Q(e,t=null,o=null,r=0,s=null,n=e===ye?0:1,i=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Vs(t),ref:t&&Pt(t),scopeId:Ut,slotScopeIds:null,children:o,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:n,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ke};return l?(Yo(a,o),n&128&&e.normalize(a)):o&&(a.shapeFlag|=X(o)?8:16),gt>0&&!i&&he&&(a.patchFlag>0||n&6)&&a.patchFlag!==32&&he.push(a),a}const Ce=Nc;function Nc(e,t=null,o=null,r=0,s=null,n=!1){if((!e||e===Ga)&&(e=mt),Oc(e)){const l=tt(e,t,!0);return o&&Yo(l,o),gt>0&&!n&&he&&(l.shapeFlag&6?he[he.indexOf(e)]=l:he.push(l)),l.patchFlag=-2,l}if(Vc(e)&&(e=e.__vccOpts),t){t=zc(t);let{class:l,style:a}=t;l&&!X(l)&&(t.class=zo(l)),K(a)&&(vs(a)&&!S(a)&&(a=J({},a)),t.style=Bt(a))}const i=X(e)?1:Ya(e)?128:qc(e)?64:K(e)?4:q(e)?2:0;return Q(e,t,o,r,s,i,n,!0)}function zc(e){return e?vs(e)||qs(e)?J({},e):e:null}function tt(e,t,o=!1,r=!1){const{props:s,ref:n,patchFlag:i,children:l,transition:a}=e,f=t?Hc(s||{},t):s,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&Vs(f),ref:t&&t.ref?o&&n?S(n)?n.concat(Pt(t)):[n,Pt(t)]:Pt(t):n,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ye?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&tt(e.ssContent),ssFallback:e.ssFallback&&tt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&r&&Zs(c,a.clone(c)),c}function Rc(e=" ",t=0){return Ce(Kt,null,e,t)}function we(e){return e==null||typeof e=="boolean"?Ce(mt):S(e)?Ce(ye,null,e.slice()):typeof e=="object"?Pe(e):Ce(Kt,null,String(e))}function Pe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:tt(e)}function Yo(e,t){let o=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(S(t))o=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Yo(e,s()),s._c&&(s._d=!0));return}else{o=32;const s=t._;!s&&!qs(t)?t._ctx=ke:s===3&&ke&&(ke.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else q(t)?(t={default:t,_ctx:ke},o=32):(t=String(t),r&64?(o=16,t=[Rc(t)]):o=8);e.children=t,e.shapeFlag|=o}function Hc(...e){const t={};for(let o=0;o<e.length;o++){const r=e[o];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=zo([t.class,r.class]));else if(s==="style")t.style=Bt([t.style,r.style]);else if(Ht(s)){const n=t[s],i=r[s];i&&n!==i&&!(S(n)&&n.includes(i))&&(t[s]=n?[].concat(n,i):i)}else s!==""&&(t[s]=r[s])}return t}function be(e,t,o,r=null){me(e,t,7,[o,r])}const jc=As();let Fc=0;function Bc(e,t,o){const r=e.type,s=(t?t.appContext:e.appContext)||jc,n={uid:Fc++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new da(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Os(r,s),emitsOptions:Es(r,s),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:r.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:o,suspenseId:o?o.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return n.ctx={_:n},n.root=t?t.root:n,n.emit=Da.bind(null,n),e.ce&&e.ce(n),n}let re=null,zt,Lo;{const e=rs(),t=(o,r)=>{let s;return(s=e[o])||(s=e[o]=[]),s.push(r),n=>{s.length>1?s.forEach(i=>i(n)):s[0](n)}};zt=t("__VUE_INSTANCE_SETTERS__",o=>re=o),Lo=t("__VUE_SSR_SETTERS__",o=>Xt=o)}const xt=e=>{const t=re;return zt(e),e.scope.on(),()=>{e.scope.off(),zt(t)}},Ir=()=>{re&&re.scope.off(),zt(null)};function Ks(e){return e.vnode.shapeFlag&4}let Xt=!1;function Wc(e,t=!1){t&&Lo(t);const{props:o,children:r}=e.vnode,s=Ks(e);vc(e,o,s,t),wc(e,r);const n=s?Dc(e,t):void 0;return t&&Lo(!1),n}function Dc(e,t){const o=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,cc);const{setup:r}=o;if(r){const s=e.setupContext=r.length>1?Uc(e):null,n=xt(e);ze();const i=Oe(r,e,0,[e.props,s]);if(Se(),n(),Jr(i)){if(i.then(Ir,Ir),t)return i.then(l=>{Pr(e,l,t)}).catch(l=>{Dt(l,e,0)});e.asyncDep=i}else Pr(e,i,t)}else Xs(e,t)}function Pr(e,t,o){q(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:K(t)&&(e.setupState=ys(t)),Xs(e,o)}let qr;function Xs(e,t,o){const r=e.type;if(!e.render){if(!t&&qr&&!r.render){const s=r.template||Xo(e).template;if(s){const{isCustomElement:n,compilerOptions:i}=e.appContext.config,{delimiters:l,compilerOptions:a}=r,f=J(J({isCustomElement:n,delimiters:l},i),a);r.render=qr(s,f)}}e.render=r.render||de}{const s=xt(e);ze();try{dc(e)}finally{Se(),s()}}}const Zc={get(e,t){return ne(e,"get",""),e[t]}};function Uc(e){const t=o=>{e.exposed=o||{}};return{attrs:new Proxy(e.attrs,Zc),slots:e.slots,emit:e.emit,expose:t}}function Jo(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ys(qa(e.exposed)),{get(t,o){if(o in t)return t[o];if(o in dt)return dt[o](e)},has(t,o){return o in t||o in dt}})):e.proxy}function Vc(e){return q(e)&&"__vccOpts"in e}const Kc=(e,t)=>Ma(e,t,Xt),Xc="3.4.30";/**
* @vue/runtime-dom v3.4.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Gc="http://www.w3.org/2000/svg",Yc="http://www.w3.org/1998/Math/MathML",Ee=typeof document<"u"?document:null,Mr=Ee&&Ee.createElement("template"),Jc={insert:(e,t,o)=>{t.insertBefore(e,o||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,o,r)=>{const s=t==="svg"?Ee.createElementNS(Gc,e):t==="mathml"?Ee.createElementNS(Yc,e):o?Ee.createElement(e,{is:o}):Ee.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>Ee.createTextNode(e),createComment:e=>Ee.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ee.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,o,r,s,n){const i=o?o.previousSibling:t.lastChild;if(s&&(s===n||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),o),!(s===n||!(s=s.nextSibling)););else{Mr.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const l=Mr.content;if(r==="svg"||r==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,o)}return[i?i.nextSibling:t.firstChild,o?o.previousSibling:t.lastChild]}},Qc=Symbol("_vtc");function ed(e,t,o){const r=e[Qc];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):o?e.setAttribute("class",t):e.className=t}const Or=Symbol("_vod"),td=Symbol("_vsh"),od=Symbol(""),rd=/(^|;)\s*display\s*:/;function sd(e,t,o){const r=e.style,s=X(o);let n=!1;if(o&&!s){if(t)if(X(t))for(const i of t.split(";")){const l=i.slice(0,i.indexOf(":")).trim();o[l]==null&&qt(r,l,"")}else for(const i in t)o[i]==null&&qt(r,i,"");for(const i in o)i==="display"&&(n=!0),qt(r,i,o[i])}else if(s){if(t!==o){const i=r[od];i&&(o+=";"+i),r.cssText=o,n=rd.test(o)}}else t&&e.removeAttribute("style");Or in e&&(e[Or]=n?r.display:"",e[td]&&(r.display="none"))}const Nr=/\s*!important$/;function qt(e,t,o){if(S(o))o.forEach(r=>qt(e,t,r));else if(o==null&&(o=""),t.startsWith("--"))e.setProperty(t,o);else{const r=nd(e,t);Nr.test(o)?e.setProperty(ot(r),o.replace(Nr,""),"important"):e[r]=o}}const zr=["Webkit","Moz","ms"],po={};function nd(e,t){const o=po[t];if(o)return o;let r=et(t);if(r!=="filter"&&r in e)return po[t]=r;r=ts(r);for(let s=0;s<zr.length;s++){const n=zr[s]+r;if(n in e)return po[t]=n}return t}const Rr="http://www.w3.org/1999/xlink";function Hr(e,t,o,r,s,n=ca(t)){r&&t.startsWith("xlink:")?o==null?e.removeAttributeNS(Rr,t.slice(6,t.length)):e.setAttributeNS(Rr,t,o):o==null||n&&!ss(o)?e.removeAttribute(t):e.setAttribute(t,n?"":Ne(o)?String(o):o)}function id(e,t,o,r,s,n,i){if(t==="innerHTML"||t==="textContent"){r&&i(r,s,n),e[t]=o??"";return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){const f=l==="OPTION"?e.getAttribute("value")||"":e.value,c=o==null?"":String(o);(f!==c||!("_value"in e))&&(e.value=c),o==null&&e.removeAttribute(t),e._value=o;return}let a=!1;if(o===""||o==null){const f=typeof e[t];f==="boolean"?o=ss(o):o==null&&f==="string"?(o="",a=!0):f==="number"&&(o=0,a=!0)}try{e[t]=o}catch{}a&&e.removeAttribute(t)}function ld(e,t,o,r){e.addEventListener(t,o,r)}function ad(e,t,o,r){e.removeEventListener(t,o,r)}const jr=Symbol("_vei");function cd(e,t,o,r,s=null){const n=e[jr]||(e[jr]={}),i=n[t];if(r&&i)i.value=r;else{const[l,a]=dd(t);if(r){const f=n[t]=ud(r,s);ld(e,l,f,a)}else i&&(ad(e,l,i,a),n[t]=void 0)}}const Fr=/(?:Once|Passive|Capture)$/;function dd(e){let t;if(Fr.test(e)){t={};let r;for(;r=e.match(Fr);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ot(e.slice(2)),t]}let uo=0;const fd=Promise.resolve(),pd=()=>uo||(fd.then(()=>uo=0),uo=Date.now());function ud(e,t){const o=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=o.attached)return;me(hd(r,o.value),t,5,[r])};return o.value=e,o.attached=pd(),o}function hd(e,t){if(S(t)){const o=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{o.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const Br=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,md=(e,t,o,r,s,n,i,l,a)=>{const f=s==="svg";t==="class"?ed(e,r,f):t==="style"?sd(e,o,r):Ht(t)?Mo(t)||cd(e,t,o,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):gd(e,t,r,f))?(id(e,t,r,n,i,l,a),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Hr(e,t,r,f,i,t!=="value")):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Hr(e,t,r,f))};function gd(e,t,o,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Br(t)&&q(o));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Br(t)&&X(o)?!1:t in e}const xd=J({patchProp:md},Jc);let Wr;function vd(){return Wr||(Wr=kc(xd))}const bd=(...e)=>{const t=vd().createApp(...e),{mount:o}=t;return t.mount=r=>{const s=wd(r);if(!s)return;const n=t._component;!q(n)&&!n.render&&!n.template&&(n.template=s.innerHTML),s.innerHTML="";const i=o(s,!1,yd(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),i},t};function yd(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function wd(e){return X(e)?document.querySelector(e):e}const Qo=(e,t)=>{const o=e.__vccOpts||e;for(const[r,s]of t)o[r]=s;return o},_d=e=>(Ts("data-v-9eb2d61c"),e=e(),Cs(),e),kd={class:"app-container"},$d={style:{display:"flex","align-items":"center"}},Ed=["src"],Td={class:"app-info-header"},Cd={class:"app-name",id:"app-name"},Sd={class:"app-developer",id:"app-developer"},Ld={class:"app-description",id:"app-description"},Ad=_d(()=>Q("div",{class:"app-downloads"},null,-1)),Id={__name:"AppInfo",props:["appItem"],setup(e){return(t,o)=>(qe(),Qe("div",kd,[Q("div",$d,[Q("img",{class:"app-logo",id:"app-logo",src:e.appItem.logo},null,8,Ed),Q("div",Td,[Q("div",Cd,ro(e.appItem.name),1),Q("div",Sd,ro(e.appItem.developer),1)])]),Q("div",Ld,[Q("p",null,ro(e.appItem.description),1)]),Ad]))}},Dr=Qo(Id,[["__scopeId","data-v-9eb2d61c"]]),Pd={class:"app-view-column"},qd=["src"],Md={class:"app-view-column"},Od=["src"],Nd={__name:"AppItem",props:["appItem","index"],setup(e){return(t,o)=>(qe(),Qe("div",{class:"app-view",style:Bt({backgroundColor:e.appItem.background})},[Q("div",Pd,[e.index%2==0?(qe(),Ar(Dr,{key:0,appItem:e.appItem},null,8,["appItem"])):(qe(),Qe("img",{key:1,class:"app-view-preview",src:e.appItem.preview},null,8,qd))]),Q("div",Md,[e.index%2==1?(qe(),Ar(Dr,{key:0,appItem:e.appItem},null,8,["appItem"])):(qe(),Qe("img",{key:1,class:"app-view-preview",src:e.appItem.preview},null,8,Od))])],4))}},zd=Qo(Nd,[["__scopeId","data-v-33bc4245"]]),Rd="/assets/todo-DHQw0TSW.png",Hd="/assets/desk-note-B75wHffG.png",jd="/assets/translator-BxY8RubY.png",Fd=e=>(Ts("data-v-31339f76"),e=e(),Cs(),e),Bd={id:"app",theme:"auto"},Wd=Fd(()=>Q("s-top-app-bar",null,[Q("div",{slot:"headline"},"Apps Only"),Q("s-icon-button",{slot:"action"},[Q("s-icon",{type:"search"})])],-1)),Dd={__name:"App",setup(e){const t=[{logo:"https://boybeak.github.io/images/justtodo-icon-256.png",name:"JustTodo",preview:Rd,developer:"boybeak",description:"A macOS todo app",background:"lightskyblue",links:[{icon:"",name:"",url:""}]},{logo:"https://boybeak.github.io/images/desknote-icon-256.png",name:"DeskNote",preview:Hd,developer:"boybeak",description:"A macOS todo app",background:"darkseagreen",links:[{icon:"",name:"",url:""}]},{logo:"https://boybeak.github.io/images/translator-icon-256.png",name:"Translator",preview:jd,developer:"boybeak",description:"A macOS todo app",background:"burlywood",links:[{icon:"",name:"",url:""}]}];return(o,r)=>(qe(),Qe("s-page",Bd,[Wd,(qe(),Qe(ye,null,ac(t,(s,n)=>Ce(zd,{appItem:s,index:n},null,8,["appItem","index"])),64))]))}},Zd=Qo(Dd,[["__scopeId","data-v-31339f76"]]);bd(Zd).mount("#app");
