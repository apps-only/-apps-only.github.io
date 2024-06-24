var en=Object.defineProperty;var tn=(e,t,o)=>t in e?en(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var $t=(e,t,o)=>tn(e,typeof t!="symbol"?t+"":t,o);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();const Us=e=>`<!--${e}-->`,I=(e,...t)=>({values:t,getTemplateHTML:()=>{const o=Us(String(Math.random()).slice(2)),s=document.createElement("template");return s.innerHTML=e.join(o),{mark:o,template:s}}}),Ks=(e,t,o)=>{e.forEach(s=>{var r;if(s.nodeType===Node.TEXT_NODE&&((r=s.textContent)!=null&&r.includes(t))&&(s.textContent=s.textContent.replaceAll(t,()=>String(o.value))),s.nodeType===Node.COMMENT_NODE&&s.textContent&&t===Us(s.textContent)&&s.parentNode.replaceChild(document.createTextNode(String(o.value)),s),s.nodeType===Node.ELEMENT_NODE){const n=s;n.getAttributeNames().forEach(l=>{const a=n.getAttribute(l);if(l==="ref"&&a===t)return n.removeAttribute(l),o.value(n);if(l.startsWith("@")){const[f,c]=l.slice(1).split("."),m=a===t&&o.value;return n.addEventListener(f,h=>{m&&m(h,n),c==="stop"&&h.stopPropagation(),c==="prevent"&&h.preventDefault()},{passive:c==="passive"}),n.removeAttribute(l)}a!=null&&a.includes(t)&&n.setAttribute(l,a.replaceAll(t,()=>String(o.value)))}),Ks(s.childNodes,t,o)}})},so={},on=(e,t)=>{so[e]||(so[e]=t.getTemplateHTML());const{mark:o,template:s}=so[e],r=s.cloneNode(!0),n={index:0,get value(){const i=t.values[this.index];return this.index++,i}};return Ks(r.content.childNodes,o,n),r.content},sn=(e,t)=>{if(e===void 0)return t;if(typeof t=="string")return String(e);if(typeof t=="number")return Number(e);if(typeof t=="boolean")return typeof e=="boolean"?e:e==="true";throw new TypeError},Vs=new CSSStyleSheet;Vs.replaceSync(":host{ user-select: none;-webkit-user-select: none }");const M=e=>{const t=new Map,o=[];for(const n in e.props)o.push(n);const s=new CSSStyleSheet;s.replaceSync(e.style??"");class r extends HTMLElement{constructor(){var m,h;super();const i=this.attachShadow({mode:"closed"}),l={...e.props},a={props:{...e.props}},f={};for(const b in this)b in HTMLElement.prototype||(f[b]=this[b]);for(const b in l)Object.defineProperty(this,b,{enumerable:!0,get:()=>l[b],set:C=>{var D,W,H;let N=sn(C,a.props[b]);if(N!==l[b]){if(e.propSyncs===!0||(D=e.propSyncs)!=null&&D.includes(b)){const U=this.getAttribute(b),Y=String(N);if(U!==null&&N===a.props[b]){this.removeAttribute(b);return}if(Y!==U&&N!==a.props[b]){this.setAttribute(b,Y);return}}l[b]=N,(H=(W=a.watches)==null?void 0:W[b])==null||H.call(W,N)}}});for(const b in f)this[b]=f[b];const c=(m=e.setup)==null?void 0:m.apply(this,[i]);i.adoptedStyleSheets=[Vs,s],i.appendChild(on(e.name,c.render())),a.events={adopted:c.adopted,mounted:c.mounted,unmounted:c.unmounted},a.watches=c.watches,(h=c.created)==null||h.call(c);for(const b in c.expose)Object.defineProperty(this,b,{get:()=>{var L;return(L=c.expose)==null?void 0:L[b]}});t.set(this,a)}connectedCallback(){var i,l,a;(a=(l=(i=t.get(this))==null?void 0:i.events)==null?void 0:l.mounted)==null||a.call(l)}disconnectedCallback(){var i,l,a;(a=(l=(i=t.get(this))==null?void 0:i.events)==null?void 0:l.unmounted)==null||a.call(l)}adoptedCallback(){var i,l,a;(a=(l=(i=t.get(this))==null?void 0:i.events)==null?void 0:l.adopted)==null||a.call(l)}attributeChangedCallback(i,l,a){this[i]=a??void 0}}return $t(r,"observedAttributes",o),r.define=function(){!customElements.get(e.name)&&customElements.define(e.name,this)},r},rn=`
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
`,nn="s-badge",ln={};class an extends M({name:nn,props:ln,style:rn,setup(){return{render:()=>I`
        <slot></slot>
      `}}}){}an.define();const xo=matchMedia("(pointer:coarse)");xo.addEventListener("change",({matches:e})=>me.touched=e);const me={touched:xo.matches,addEventListener:e=>xo.addEventListener("change",()=>e(me.touched))},It=document.createElement("div");It.setAttribute("style","position: fixed;right: 0;bottom: 0;width: 100%;height: 100%;pointer-events: none");const Dt=e=>{e.appendChild(It);const t=It.getBoundingClientRect();return e.removeChild(It),{left:t.left,top:t.top,width:t.width,height:t.height}},cn=`
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
`,dn="s-ripple",fn={centered:!1,attached:!1},cs=e=>{const t=()=>{e(),document.removeEventListener("pointerup",t),document.removeEventListener("pointercancel",t)};document.addEventListener("pointerup",t),document.addEventListener("pointercancel",t)};class pn extends M({name:dn,style:cn,props:fn,propSyncs:["attached"],setup(){let t;const o=()=>!me.touched&&t.classList.add("hover"),s=()=>!me.touched&&t.classList.remove("hover"),r=(c,m)=>{const h=document.createElement("div");h.className="animation";const{offsetWidth:b,offsetHeight:L}=t;let C=Math.sqrt(b*b+L*L);const N={x:"50%",y:"50%"};if(!this.centered){const{left:H,top:U}=t.getBoundingClientRect(),Y=c.clientX-H,z=c.clientY-U,de=L/2,ae=b/2,Ve=(Math.abs(de-z)+de)*2,ve=(Math.abs(ae-Y)+ae)*2;C=Math.sqrt(Ve*Ve+ve*ve),N.x=`${Y}px`,N.y=`${z}px`}h.setAttribute("style",`--size: ${C}px;--x: ${N.x};--y: ${N.y};`);const D=()=>h.isConnected&&t.removeChild(h);h.addEventListener("transitionend",D,{once:!0}),h.addEventListener("transitioncancel",D,{once:!0});const W=()=>h.style.opacity="0";if(t.appendChild(h),h.animate([{transform:"translate(-50%, -50%) scale(0)"},{transform:"translate(-50%, -50%) scale(1)"}],{duration:800,fill:"forwards",easing:"cubic-bezier(.2, .9, .1, .9)"}),!m)return cs(W);window.getComputedStyle(h).top,W()},n=c=>{if(c.pointerType==="mouse")return r(c);let m=!1;const h=()=>clearTimeout(b),b=setTimeout(()=>{r(c,m),document.removeEventListener("pointermove",h)},80);cs(()=>m=!0),document.addEventListener("pointermove",h,{once:!0})},i=c=>{c.button===0&&n(c)};let l=this;const a=()=>{l=this.attached?this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode:this,l==null||l.addEventListener("mouseover",o),l==null||l.addEventListener("mouseleave",s),l==null||l.addEventListener("wheel",s,{passive:!0}),l==null||l.addEventListener("pointerdown",i)},f=()=>{l==null||l.removeEventListener("mouseover",o),l==null||l.removeEventListener("mouseleave",s),l==null||l.removeEventListener("wheel",s),l==null||l.removeEventListener("pointerdown",i)};return{mounted:a,unmounted:f,watches:{attached:()=>{f(),a()}},render:()=>I`
        <slot></slot>
        <div class="container" ref="${c=>t=c}"></div>
      `}}}){}pn.define();const un=`
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
`,hn="s-button",mn={disabled:!1,type:"filled"};class gn extends M({name:hn,style:un,props:mn,propSyncs:!0,setup(){return{render:()=>I`
        <slot name="start"></slot>
        <slot></slot>
        <slot name="end"></slot>
        <s-ripple class="ripple" attached="true"></s-ripple>
      `}}}){}gn.define();const xn=`
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
`,vn="s-card",bn={type:"elevated",clickable:!1};class yn extends M({name:vn,style:xn,props:bn,propSyncs:!0,setup(){return{render:()=>I`
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
      `}}}){}yn.define();const wn=`
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
`,_n="s-carousel",kn={duration:4e3};class $n extends M({name:_n,style:wn,props:kn,setup(){let t,o,s,r=0,n=0,i=0;const l=()=>{var c,m;t.style.transform=`translateX(-${r*100}%)`,(c=o.querySelector(".checked"))==null||c.classList.remove("checked"),(m=o.children[r])==null||m.classList.add("checked")},a=()=>{clearInterval(i),l(),n!==0&&(i=setInterval(()=>{const c=r+1;r=c===n?0:c,l()},this.duration))},f=()=>{o.innerHTML="";const c=s.assignedElements(),m=document.createDocumentFragment();for(const h in c){const b=document.createElement("div"),L=Number(h);b.className=L===0?"item checked":"item",b.addEventListener("click",()=>{r=L,a()}),m.appendChild(b)}n=c.length,o.appendChild(m),r=0,a()};return{mounted:a,unmounted:()=>clearInterval(i),watches:{duration:a},render:()=>I`
        <div class="container" ref="${c=>t=c}">
          <slot ref="${c=>s=c}" @slotchange="${f}"></slot>
        </div>
        <div class="dot" ref="${c=>o=c}"></div>
      `}}}){}$n.define();const Cn=`
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
`,En="s-checkbox",Tn={disabled:!1,checked:!1,indeterminate:!1},Xe={indeterminate:"M280-440h400v-80H280v80Zm-80 320q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z",uncheck:"M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z",checked:"m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"};class Sn extends M({name:En,style:Cn,props:Tn,propSyncs:!0,setup(){let t;return this.addEventListener("click",()=>{if(this.indeterminate)return this.indeterminate=!1;this.checked=!this.checked,this.dispatchEvent(new Event("change"))}),{watches:{indeterminate:o=>t.setAttribute("d",o?Xe.indeterminate:this.checked?Xe.checked:Xe.uncheck),checked:o=>!this.indeterminate&&t.setAttribute("d",o?Xe.checked:Xe.uncheck)},render:()=>I`
        <svg class="icon color" viewBox="0 -960 960 960">
          <path ref="${o=>t=o}" d="${Xe.uncheck}"></path>
        </svg>
        <s-ripple class="color" attached="true" centered="true"></s-ripple>
      `}}}){}Sn.define();const Ln=`
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
`,An="s-chip",In={type:"outlined",clickable:!1};class Mn extends M({name:An,style:Ln,props:In,propSyncs:!0,setup(){return{render:()=>I`
        <slot name="start"></slot>
        <slot></slot>
        <slot name="end"></slot>
        <slot name="action" @pointerdown.stop></slot>
        <s-ripple class="ripple" attached="true"></s-ripple>
      `}}}){}Mn.define();const qn=`
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
`,Pn="s-circular-progress",zn={indeterminate:!1,max:100,value:0};class On extends M({name:Pn,style:qn,props:zn,propSyncs:["indeterminate"],setup(){let t;const r=44*Math.PI,n=()=>{const i=Math.min(this.value,this.max)/this.max*100;t.style.strokeDashoffset=`${r-r*(i/100)}px`};return{watches:{max:n,value:n},render:()=>I`
        <svg class="determinable" viewBox="0 0 48 48" style="transform: rotate(-90deg);--dasharray: ${r}px;">
          <circle class="unckecked" cx="${48/2}" cy="${48/2}" r="${44/2}" style="stroke-width: ${4}px" />
          <circle ref="${i=>t=i}" cx="${48/2}" cy="${48/2}" r="${44/2}" style="stroke-dashoffset: ${r}px;stroke-width: ${4}px" />
        </svg>
        <div class="indeterminate">
          <svg viewBox="0 0 48 48" style="animation: stroke-rotate 5.2s ease-in-out infinite;--dasharray: ${r}px;">
            <circle transform="rotate(-90, ${48/2}, ${48/2})" cx="${48/2}" cy="${48/2}" r=" ${44/2}" style="animation: stroke 1.3s ease-in-out infinite;stroke-width: ${4}px"></circle>
          </svg>
        </div>
      `}}}){}On.define();const Nn=`
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
`,Hn="s-scroll-view",Rn={};class jn extends M({name:Hn,style:Nn,props:Rn,setup(){return{render:()=>I`
        <slot></slot>
      `}}}){}jn.define();const Fn=`
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
`,Bn="s-dialog",Dn={size:"basic"},Wn=e=>{let t=document.body;const o=new Mo,s=document.body.firstElementChild;s&&s.tagName==="S-PAGE"&&(t=s);const r=document.createElement("div");if(r.slot="text",typeof e=="string")r.textContent=e,o.appendChild(r);else{if(e.root&&(t=e.root),e.headline){const n=document.createElement("div");n.slot="headline",n.textContent=e.headline,o.appendChild(n)}r.textContent=e.text,o.appendChild(r);for(const n of e.actions??[]){const i=document.createElement("s-button");i.slot="action",i.type="text",i.textContent=n.text,n.click&&i.addEventListener("click",n.click),o.appendChild(i)}}t.appendChild(o),o.addEventListener("dismissed",()=>t.removeChild(o)),o.show()};class Mo extends M({name:Bn,style:Fn,props:Dn,propSyncs:["size"],setup(t){let o;const s=()=>{const i=Dt(t);(i.top!==0||i.left!==0)&&o.setAttribute("style",`width: ${innerWidth}px;height: ${innerHeight}px;top: ${0-i.top}px;left: ${0-i.left}px`),o.classList.add("show"),this.dispatchEvent(new Event("show"))},r=()=>{o.classList.remove("show"),this.dispatchEvent(new Event("dismiss"))},n=i=>{if(i.propertyName!=="transform")return;const l=o.classList.contains("show");this.dispatchEvent(new Event(l?"showed":"dismissed"))};return{expose:{show:s,dismiss:r},render:()=>I`
        <slot name="trigger" @click="${s}"></slot>
        <div class="wrapper" ref="${i=>o=i}" @transitionend="${n}">
          <div class="scrim" @click="${r}"></div>
          <div class="wrapper-container">
            <div class="container" part="container">
              <slot name="headline"></slot>
              <s-scroll-view class="text">
                <slot></slot>
                <slot name="text"></slot>
              </s-scroll-view>
              <div class="action">
                <slot name="action" @click="${r}"></slot>
              </div>
            </div>
          </div>
        </div>
      `}}}){}$t(Mo,"show",Wn);Mo.define();const Zn=`
:host{
  display: block;
  height: 1px;
  background: var(--s-color-outline-variant, #c7c5d0);
  margin: 0 16px;
}
`,Un="s-divider",Kn={};class Vn extends M({name:Un,style:Zn,props:Kn,setup(){return{render:()=>I`
        <slot></slot>
      `}}}){}Vn.define();const Gn=`
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
`,Xn="s-drawer",Yn={fold:840};class Jn extends M({name:Xn,props:Yn,style:Gn,setup(){let t;const o={start:void 0,end:void 0},s={start:void 0,end:void 0},r=200,n=(f="start",c)=>{var N;const m=c===void 0?t.classList.contains("folded"):c,h=m?`show-fold-${f}`:`show-${f}`;if(t.classList.contains(h))return;t.classList.add(h);const b=((N=s[f])==null?void 0:N.offsetWidth)??0,L=f==="start"?b*-1:b,C=m?[{transform:`translateX(${L}px)`},{transform:"translateX(0px)"}]:[{width:0},{width:`${b}px`}];o[f].animate(C,{duration:r})},i=(f="start",c)=>{var N;const m=c===void 0?t.classList.contains("folded"):c,h=m?`show-fold-${f}`:`show-${f}`;if(!t.classList.contains(h))return;const b=((N=s[f])==null?void 0:N.offsetWidth)??0;t.classList.remove(h);const L=f==="start"?b*-1:b,C=m?[{transform:"translateX(0px)",visibility:"visible"},{transform:`translateX(${L}px)`,visibility:"visible"}]:[{width:`${b}px`},{width:0}];o[f].animate(C,{duration:r})},l=(f="start",c)=>{const h=(c===void 0?t.classList.contains("folded"):c)?`show-fold-${f}`:`show-${f}`;t.classList.contains(h)?i(f,c):n(f,c)};return new ResizeObserver(()=>this.offsetWidth<this.fold?t.classList.add("folded"):t.classList.remove("folded")).observe(this),{expose:{show:n,dismiss:i,toggle:l},render:()=>I`
        <div class="container show-start show-end" ref="${f=>t=f}">
          <slot></slot>
          <div class="scrim" @click="${()=>{i("start"),i("end")}}"></div>
          <div class="start" ref="${f=>o.start=f}">
            <slot name="start" @slotchange="${(f,c)=>s.start=c.assignedElements()[0]}"></slot>
          </div>
          <div class="end" ref="${f=>o.end=f}">
            <slot name="end" @slotchange="${(f,c)=>s.end=c.assignedElements()[0]}"></slot>
          </div>
        </div>
      `}}}){}Jn.define();const Qn=`
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
`,ei="s-dropdown",ti={align:"center"};class oi extends M({name:ei,style:Qn,props:ti,setup(t){let o,s,r;const n=a=>{if(!this.isConnected||s.classList.contains("show"))return;const f=Dt(t);(f.top!==0||f.left!==0)&&s.setAttribute("style",`width: ${innerWidth}px;height: ${innerHeight}px;top: ${0-f.top}px;left: ${0-f.left}px`);const c={top:0,left:0,origin:[]};if(!a||a instanceof HTMLElement){const m=a||o;s.style.setProperty("--dropdown-min-width",`${m.offsetWidth}px`);const h=m.getBoundingClientRect(),b=r.offsetWidth,L=r.offsetHeight;c.origin=["center","top"],c.top=h.y+h.height,c.left=h.x-(b-h.width)/2;let C={left:{value:h.x,origin:"left"},right:{value:h.x+h.width-b,origin:"right"},top:{value:h.top-L,origin:"bottom"}};this.align==="left"&&(c.origin[0]="right",c.left=h.x-b,c.top=h.y,C={left:{value:h.x+h.width,origin:"left"},right:{value:c.left,origin:c.origin[0]},top:{value:h.y+h.height-L,origin:"bottom"}}),this.align==="right"&&(c.origin[0]="left",c.left=h.x+h.width,c.top=h.y,C={left:{value:c.left,origin:c.origin[0]},right:{value:h.x-b,origin:"right"},top:{value:h.y+h.height-L,origin:"bottom"}}),c.left<0&&(c.origin[0]=C.left.origin,c.left=C.left.value),c.left+b>innerWidth&&(c.origin[0]=C.right.origin,c.left=Math.max(C.right.value,0)),c.top+L>innerHeight&&(c.origin[1]=C.top.origin,c.top=Math.max(C.top.value,0))}else c.top=a.y,c.left=a.x,c.origin=a.origin?a.origin.split(" "):["left","top"],a.x+r.offsetWidth>innerWidth&&(c.left=a.x-r.offsetWidth,c.origin[0]="right"),a.y+r.offsetHeight>innerHeight&&(c.top=a.y-r.offsetHeight,c.origin[1]="bottom");r.style.transformOrigin=c.origin.join(" "),r.style.top=`${c.top}px`,r.style.left=`${c.left}px`,s.classList.add("show"),r.animate([{transform:"scale(.9)",opacity:0},{transform:"scale(1)",opacity:1}],{duration:100})},i=()=>{!this.isConnected||!s.classList.contains("show")||(s.classList.remove("show"),r.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.9)",opacity:0}],{duration:100}))};return{expose:{show:n,dismiss:i,toggle:a=>{this.isConnected&&(s.classList.contains("show")?i():n(a))}},mounted:()=>addEventListener("resize",i),unmounted:()=>removeEventListener("resize",i),render:()=>I`
        <div ref="${a=>o=a}" @click="${()=>n()}">
          <slot name="trigger"></slot>
        </div>
        <div class="wrapper" ref="${a=>s=a}">
          <div class="scrim" @pointerdown="${i}"></div>
          <div class="container" ref="${a=>r=a}">
            <slot></slot>
          </div>
        </div>
      `}}}){}oi.define();const si=`
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
`,ri="s-fab",ni={size:"medium",extended:!1};class ii extends M({name:ri,style:si,props:ni,propSyncs:!0,setup(){let t;return{watches:{extended:o=>t.setAttribute("centered",String(!o))},render:()=>I`
        <s-ripple attached="true" centered="true" ref="${o=>t=o}"></s-ripple>
        <slot name="start"></slot>
        <slot></slot>
        <slot name="end"></slot>
      `}}}){}ii.define();const li=`
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
`,ai="s-icon-button",ci={disabled:!1,type:"standard"};class di extends M({name:ai,style:li,props:ci,propSyncs:!0,setup(){return{render:()=>I`
        <slot name="start"></slot>
        <slot></slot>
        <slot name="end"></slot>
        <s-ripple class="ripple" attached="true" centered="true"></s-ripple>
      `}}}){}di.define();const fi=`
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
`,ro={none:"",home:"M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z",add:"M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z",search:"M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z",menu:"M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z",arrow_back:"m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z",arrow_forward:{name:"arrow_back",angle:180},arrow_upward:{name:"arrow_back",angle:90},arrow_downward:{name:"arrow_back",angle:-90},arrow_drop_up:"m280-400 200-200 200 200H280Z",arrow_drop_down:{name:"arrow_drop_up",angle:180},arrow_drop_left:{name:"arrow_drop_up",angle:-90},arrow_drop_right:{name:"arrow_drop_up",angle:90},more_vert:"M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z",more_horiz:{name:"more_vert",angle:90},close:"m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z",done:"M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z",chevron_up:"M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z",chevron_down:{name:"chevron_up",angle:180},chevron_left:{name:"chevron_up",angle:-90},chevron_right:{name:"chevron_up",angle:90},light_mode:"M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z",dark_mode:"M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z",star:"m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z",favorite:"m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"},pi="s-icon",ui={type:"none"};class hi extends M({name:pi,style:fi,props:ui,propSyncs:["type"],setup(){let t;return{watches:{type:o=>{let s=ro[o];typeof s=="object"?(t.setAttribute("transform",`rotate(${s.angle} 480 -480)`),s=ro[s.name]):t.removeAttribute("transform"),t.setAttribute("d",s)}},render:()=>I`
        <slot>
          <svg viewBox="0 -960 960 960">
            <path ref="${o=>t=o}" d="${ro.none}"></path>
          </svg>
        </slot>
      `}}}){}hi.define();const mi=`
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
`,gi="s-linear-progress",xi={indeterminate:!1,max:100,value:0};class vi extends M({name:gi,style:mi,props:xi,propSyncs:["indeterminate"],setup(){let t;const o=()=>{const s=Math.min(this.value,this.max)/this.max*100;t.style.transform=`translateX(-${100-s}%)`};return{watches:{max:o,value:o},render:()=>I`
        <div class="track"></div>
        <div class="determinable float" ref="${s=>t=s}"></div>
        <div class="indeterminate float"></div>
      `}}}){}vi.define();const bi=`
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
`,yi="s-menu",wi={group:""};class qo extends M({name:yi,style:bi,props:wi,propSyncs:["group"],setup(){let t;const o=n=>t.show(n),s=()=>t.dismiss(),r=n=>t.toggle(n);return this.addEventListener("menu-item:click",n=>{n.stopPropagation(),s()}),{mounted:()=>{this.parentNode instanceof qo&&t.setAttribute("align","right")},expose:{show:o,dismiss:s,toggle:r},render:()=>I`
        <s-dropdown class="dropdown" ref="${n=>t=n}">
          <slot slot="trigger" name="trigger" @click.stop="${()=>o()}"></slot>
          <s-scroll-view class="container">
            <slot></slot>
          </div>
        </s-scroll-view>
      `}}}){}const _i=`
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
`,ki="s-menu-item",$i={};class Ci extends M({name:ki,style:_i,props:$i,setup(){const t=()=>{this.dispatchEvent(new Event("menu-item:click",{bubbles:!0}))};return{render:()=>I`
        <s-ripple class="container" @click="${t}">
          <slot name="start"></slot>
          <div class="text">
            <slot></slot>
          </div>
          <slot name="end"></slot>
        </s-ripple>
      `}}}){}qo.define();Ci.define();const Ei=`
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
`,Ti="s-navigation",Si={mode:"bottom"};class vo extends M({name:Ti,style:Ei,props:Si,propSyncs:!0,setup(){let t=[],o=-1,s=!1;const r=(i,l)=>{t=l.assignedElements().filter(f=>f instanceof Gs),o=-1;let a=null;for(const f of t)f.selected&&(a=f);a&&n(a)},n=i=>{if(t.length===0||!i.selected)return o=-1;for(const l of t)l!==i&&l.selected&&l.removeAttribute("selected");o=t.indexOf(i),s&&(this.dispatchEvent(new Event("change")),s=!1)};return this.addEventListener("navigation-item:update",i=>{i.stopPropagation(),n(i.target)}),this.addEventListener("navigation-item:change",i=>{i.stopPropagation(),s=!0}),{expose:{get options(){return t},get selectedIndex(){return o}},render:()=>I`
        <slot name="start"></slot>
        <slot @slotchange="${r}"></slot>
        <slot name="end"></slot>
      `}}}){}const Li=`
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
`,Ai="s-navigation-item",Ii={selected:!1};class Gs extends M({name:Ai,style:Li,props:Ii,propSyncs:!0,setup(){return this.addEventListener("click",()=>{this.selected||(this.parentNode instanceof vo&&this.dispatchEvent(new Event("navigation-item:change",{bubbles:!0})),this.selected=!0)}),{watches:{selected:()=>{this.parentNode instanceof vo&&this.dispatchEvent(new Event("navigation-item:update",{bubbles:!0}))}},render:()=>I`
        <div class="icon">
          <slot name="icon"></slot>
        </div>
        <slot name="text"></slot>
        <div class="badge">
          <slot name="badge"></slot>
        </div>
        <s-ripple attached="true" class="ripple"></s-ripple>
      `}}}){}vo.define();Gs.define();const ds=`
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
`,Mi=`
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
  ${ds}
}
@media (prefers-color-scheme: dark){
  :host([theme=auto]){
    ${ds}
  }
}
`,qi="s-page",Pi={theme:"light"};class zi extends M({name:qi,style:Mi,props:Pi,propSyncs:["theme"],setup(){return{render:()=>I`
        <slot></slot>
      `}}}){}zi.define();const Oi=`
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
`,Ni="s-radio-button",Hi={disabled:!1,checked:!1,name:""},no={uncheck:"M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z",checked:"M480-280q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm0 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"};class Ri extends M({name:Ni,style:Oi,props:Hi,propSyncs:!0,setup(){let t;return{created:()=>{this.addEventListener("click",()=>{this.checked=!0,this.name&&document.querySelectorAll(`${this.tagName}[name='${this.name}']`).forEach(o=>{o!==this&&(o.checked=!1)}),this.dispatchEvent(new Event("change"))})},watches:{checked:o=>t.setAttribute("d",o?no.checked:no.uncheck)},render:()=>I`
        <svg class="icon color" viewBox="0 -960 960 960">
          <path ref="${o=>t=o}" d="${no.uncheck}"></path>
        </svg>
        <s-ripple class="color" attached="true" centered="true"></s-ripple>
      `}}}){}Ri.define();const ji=`
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
`,Fi="s-rate",Bi={readonly:!1,max:10,min:0,value:5,step:1};class Di extends M({name:Fi,style:ji,props:Bi,propSyncs:["readonly"],setup(){let t,o;const s=()=>{const n=(Number(o.value)-this.min)*100/this.max-this.min;t.style.width=`${n}%`};return{watches:{max:r=>{const n=String(r);o.max!==n&&(o.max=n,s())},min:r=>{const n=String(r);o.min!==n&&(o.min=n,s())},step:r=>{const n=String(r);o.step!==n&&(o.step=n,s())},value:r=>{const n=String(r);o.value!==n&&(o.value=n,s())}},render:()=>I`
        <div class="unchecked">
          <slot name="unchecked">
            <svg viewBox="0 -960 960 960">
              <path d="m305-704 112-145q12-16 28.5-23.5T480-880q18 0 34.5 7.5T543-849l112 145 170 57q26 8 41 29.5t15 47.5q0 12-3.5 24T866-523L756-367l4 164q1 35-23 59t-56 24q-2 0-22-3l-179-50-179 50q-5 2-11 2.5t-11 .5q-32 0-56-24t-23-59l4-165L95-523q-8-11-11.5-23T80-570q0-25 14.5-46.5T135-647l170-57Z"/>
            </svg>
          </slot>
        </div>
        <div class="checked" ref="${r=>t=r}">
          <slot name="checked">
            <svg viewBox="0 -960 960 960">
              <path d="m305-704 112-145q12-16 28.5-23.5T480-880q18 0 34.5 7.5T543-849l112 145 170 57q26 8 41 29.5t15 47.5q0 12-3.5 24T866-523L756-367l4 164q1 35-23 59t-56 24q-2 0-22-3l-179-50-179 50q-5 2-11 2.5t-11 .5q-32 0-56-24t-23-59l4-165L95-523q-8-11-11.5-23T80-570q0-25 14.5-46.5T135-647l170-57Z"/>
            </svg>
          </slot>
        </div>
        <input
          type="range"
          ref="${r=>o=r}"
          max="${this.max}"
          min="${this.min}"
          step="${this.step}"
          value="${this.value}"
          @change="${()=>this.dispatchEvent(new Event("change"))}"
          @input="${()=>{s(),this.dispatchEvent(new Event("input"))}}"
        />
      `}}}){}Di.define();const Wi=`
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
`,Zi="s-search",Ui={size:"medium"};class Ki extends M({name:Zi,style:Wi,props:Ui,propSyncs:!0,setup(){return{render:()=>I`
        <div class="drop">
          <slot name="drop" @mousedown.prevent></slot>
        </div>
        <div class="container">
          <slot name="start"></slot>
          <slot></slot>
          <slot name="end"></slot>
        </div>
      `}}}){}Ki.define();const Vi=`
:host{
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  border: solid 1px var(--s-color-outline, #777680);
  border-radius: 20px;
  height: 40px;
  overflow: hidden;
}
`,Gi="s-segmented-button",Xi={};class bo extends M({name:Gi,style:Vi,props:Xi,setup(){let t=[],o=-1,s=!1;const r=(i,l)=>{t=l.assignedElements().filter(f=>f instanceof Xs),o=-1;let a=null;for(const f of t)f.selected&&(a=f);a&&n(a)},n=i=>{if(t.length===0||!i.selected)return o=-1;for(const l of t)l!==i&&l.selected&&l.removeAttribute("selected");o=t.indexOf(i),s&&(this.dispatchEvent(new Event("change")),s=!1)};return this.addEventListener("segmented-button-item:update",i=>{i.stopPropagation(),n(i.target)}),this.addEventListener("segmented-button-item:change",i=>{i.stopPropagation(),s=!0}),{expose:{get options(){return t},get selectedIndex(){return o}},render:()=>I`
        <slot @slotchange="${r}"></slot>
      `}}}){}const Yi=`
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
`,Ji="s-segmented-button-item",Qi={selected:!1,disabled:!1,selectable:!0};class Xs extends M({name:Ji,style:Yi,props:Qi,propSyncs:["selected","disabled"],setup(){return this.addEventListener("click",()=>{if(this.selectable){if(this.selected)return;this.parentNode instanceof bo&&this.dispatchEvent(new Event("navigation-item:change",{bubbles:!0})),this.selected=!0}}),{watches:{selected:()=>{this.parentNode instanceof bo&&this.dispatchEvent(new Event("segmented-button-item:update",{bubbles:!0}))}},render:()=>I`
        <slot name="start"></slot>
        <slot></slot>
        <slot name="end"></slot>
        <s-ripple class="ripple" attached="true"></s-ripple>
      `}}}){}bo.define();Xs.define();const el=`
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
`,tl="s-slider",ol={disabled:!1,labeled:!1,max:100,min:0,step:1,value:50};class sl extends M({name:tl,style:el,props:ol,propSyncs:["disabled","labeled"],setup(){let t,o,s,r;const n=()=>{const a=100-((Number(s.value)-this.min)*100/this.max-this.min);t.style.transform=`translateX(-${a}%)`,o.style.transform=`translateX(calc(-${a}% + ${a*.4}px))`,this.value=Number(s.value),r.textContent=s.value};return{watches:{max:i=>{const l=String(i);s.max!==l&&(s.max=l,n())},min:i=>{const l=String(i);s.min!==l&&(s.min=l,n())},step:i=>{const l=String(i);s.step!==l&&(s.step=l,n())},value:i=>{const l=String(i);s.value!==l&&(s.value=l,n())}},render:()=>I`
        <div class="wrapper">
          <div class="track">
            <div class="active-track" ref="${i=>t=i}"></div>
          </div>
          <div class="container labeled" ref="${i=>o=i}">
            <div class="handle"></div>
            <div class="label">
              <span ref="${i=>r=i}">${this.value}</span>
            </div>
          </div>
        </div>
        <input
          ref="${i=>s=i}"
          type="range"
          max="${this.max}"
          min="${this.min}"
          step="${this.step}"
          value="${this.value}"
          @change="${()=>this.dispatchEvent(new Event("change"))}"
          @input="${()=>{n(),this.dispatchEvent(new Event("input"))}}"
          @mousedown="${i=>{i.button===0&&!me.touched&&o.classList.add("active")}}"
          @mouseup="${()=>!me.touched&&o.classList.remove("active")}"
          @touchstart.passive="${()=>me.touched&&o.classList.add("active")}"
          @touchend.passive="${()=>me.touched&&o.classList.remove("active")}"
          @touchcancel.passive="${()=>me.touched&&o.classList.remove("active")}"
        />
      `}}}){}sl.define();const rl=`
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
`,nl="s-snackbar",il={duration:5e3},ll=e=>{let t=document.body;const o=new Po,s=document.body.firstElementChild;if(s&&s.tagName==="S-PAGE"&&(t=s),typeof e=="string")o.textContent=e;else{if(e.root&&(t=e.root),o.textContent=e.text,e.action){const r=document.createElement("s-button");r.type="text",r.slot="action",r.textContent=e.action.text,e.action.click&&r.addEventListener("click",e.action.click),o.appendChild(r)}e.duration&&(o.duration=e.duration)}t.appendChild(o),o.addEventListener("dismissed",()=>t.removeChild(o)),o.show()};class Po extends M({name:nl,style:rl,props:il,setup(t){let o;const s={timer:0},r=()=>{const l=Dt(t);(l.top!==0||l.left!==0)&&o.setAttribute("style",`width: ${innerWidth}px;height: ${innerHeight}px;top: ${0-l.top}px;left: ${0-l.left}px`),clearTimeout(s.timer),getComputedStyle(o).top,o.classList.add("show"),this.dispatchEvent(new Event("show")),this.duration>0&&(s.timer=setTimeout(n,this.duration))},n=()=>{clearTimeout(s.timer),o.classList.remove("show"),this.dispatchEvent(new Event("dismiss"))},i=l=>{if(l.propertyName!=="transform")return;const a=o.classList.contains("show");this.dispatchEvent(new Event(a?"showed":"dismissed"))};return{expose:{show:r,dismiss:n},render:()=>I`
        <slot name="trigger" @click="${r}"></slot>
        <div class="wrapper" ref="${l=>o=l}" @transitionend="${i}">
          <div class="container" part="container">
            <div class="supporting-text">
              <slot></slot>
            </div>
            <slot name="action" @click="${n}"></slot>
          </div>
        </div>
      `}}}){}$t(Po,"show",ll);Po.define();const al=`
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
`,cl="s-switch",dl={disabled:!1,checked:!1};class fl extends M({name:cl,style:al,props:dl,propSyncs:!0,setup(){return this.addEventListener("click",()=>{this.checked=!this.checked,this.dispatchEvent(new Event("change"))}),{render:()=>I`
        <div class="track">
        </div>
        <s-ripple attached="true" centered="true" class="ripple">
          <div class="thumb">
            <svg class="icon" viewBox="0 -960 960 960">
              <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"></path>
            </svg>
          </div>
        </s-ripple>
      `}}}){}fl.define();const pl=`
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
`,ul="s-tab",hl={mode:"scrollable"};class yo extends M({name:ul,style:pl,props:hl,propSyncs:["mode"],setup(){let t,o=[],s=-1,r=!1;const n=(l,a)=>{o=a.assignedElements().filter(c=>c instanceof Ys),s=-1;let f=null;for(const c of o)c.selected&&(f=c);f&&i(f)},i=l=>{if(o.length===0||!l.selected)return s=-1;let a=null;for(const f of o)f!==l&&f.selected&&(a=f,f.removeAttribute("selected"));if(s=o.indexOf(l),r&&(this.dispatchEvent(new Event("change")),r=!1),this.isConnected){if(t.scrollWidth!==t.offsetWidth){const f=l.offsetLeft-t.offsetWidth+t.offsetWidth/2+l.offsetWidth/2;t.scrollTo({left:f,behavior:"smooth"})}if(a){a.indicator.addEventListener("transitionend",()=>{a==null||a.indicator.removeAttribute("style"),l.indicator.removeAttribute("style")},{once:!0});const f=a.indicator.getBoundingClientRect().left,c=l.indicator.getBoundingClientRect();l.indicator.setAttribute("style","transition:none;filter:opacity(0)"),a.indicator.setAttribute("style",`transition: transform .2s, width .2s;filter:opacity(1);transform:translateX(${c.left-f}px);width: ${c.width}px`)}}};return this.addEventListener("tab-item:update",l=>{l.stopPropagation(),i(l.target)}),this.addEventListener("tab-item:change",l=>{l.stopPropagation(),r=!0}),{expose:{get options(){return o},get selectedIndex(){return s}},render:()=>I`
        <div class="container" ref="${l=>t=l}">
          <slot @slotchange="${n}"></slot>
        </div>
      `}}}){}const ml=`
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
`,gl="s-tab-item",xl={selected:!1};class Ys extends M({name:gl,style:ml,props:xl,propSyncs:!0,setup(){let t,o;const s=(r,n)=>{const i=n.assignedElements().length;t.classList[i>0?"add":"remove"]("icon")};return this.addEventListener("click",()=>{this.selected||(this.parentNode instanceof yo&&this.dispatchEvent(new Event("tab-item:change",{bubbles:!0})),this.selected=!0)}),{expose:{get indicator(){return o}},watches:{selected:()=>{this.parentNode instanceof yo&&this.dispatchEvent(new Event("tab-item:update",{bubbles:!0}))}},render:()=>I`
        <div class="container" ref="${r=>t=r}">
          <slot name="icon" @slotchange="${s}"></slot>
          <div class="text">
            <slot name="text"></slot>
            <div class="badge">
              <slot name="badge"></slot>
            </div>
          </div>
          <div class="indicator" ref="${r=>o=r}"></div>
        </div>
        <s-ripple attached="true"></s-ripple>
      `}}}){}yo.define();Ys.define();const vl=`
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
`,bl="s-table",yl={};class wl extends M({name:bl,style:vl,props:yl,setup(){return{render:()=>I`
        <div class="container" part="container">
          <slot></slot>
        </div>
      `}}}){}const _l=`
:host{
  display: table-header-group;
  font-weight: 600;
  color: var(--s-color-on-surface-variant, #46464f);
}
`,kl="s-thead",$l={};class Cl extends M({name:kl,style:_l,props:$l,setup(){return{render:()=>I`
        <slot></slot>
      `}}}){}const El=`
:host{
  display: table-row-group;
  color: var(--s-color-on-surface, #1c1b1f);
  position: relative;
}
::slotted(s-tr){
  border-top: solid 1px var(--s-color-outline-variant, #c7c5d0);
}
`,Tl="s-tbody",Sl={};class Ll extends M({name:Tl,style:El,props:Sl,setup(){return{render:()=>I`
        <slot></slot>
      `}}}){}const Al=`
:host{
  display: table-row;
}
`,Il="s-tr",Ml={};class ql extends M({name:Il,style:Al,props:Ml,setup(){return{render:()=>I`
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
`,zl="s-th",Ol={};class Nl extends M({name:zl,style:Pl,props:Ol,setup(){return{render:()=>I`
        <slot></slot>
      `}}}){}const Hl=`
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
`,Rl="s-td",jl={colspan:1,rowspan:1};class Fl extends M({name:Rl,style:Hl,props:jl,setup(){let t;return{watches:{colspan:o=>t.colSpan=o,rowspan:o=>t.rowSpan=o},render:()=>I`
        <td ref="${o=>t=o}" rowspan="${this.rowspan}" colspan="${this.colspan}">
          <slot></slot>
        </td>
      `}}}){}wl.define();Cl.define();Ll.define();ql.define();Nl.define();Fl.define();const Bl=`
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
`,Dl="s-text-field",Wl={label:""};class Zl extends M({name:Dl,style:Bl,props:Wl,propSyncs:!0,setup(){let t,o,s,r,n;const i=()=>{!r||r.parentNode!==this||(r.value===""?t.classList.remove("not-empty"):t.classList.add("not-empty"),r instanceof HTMLTextAreaElement&&(n.textContent=r.value,r.offsetHeight!==n.offsetHeight&&(r.style.height=`${n.offsetHeight}px`)))},l=f=>{f.addEventListener("input",i);const c=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(f),"value");if(c){const m=c.set;c.set=h=>{m==null||m.apply(f,[h]),!(!r||r.parentNode!==this)&&i()},Object.defineProperty(f,"value",c)}r=f,i()},a=()=>{const f=s.assignedElements()[0];!f||!(f instanceof HTMLInputElement)&&!(f instanceof HTMLTextAreaElement)||l(f)};return{watches:{label:f=>o.textContent=f},render:()=>I`
        <div class="container" ref="${f=>t=f}">
          <div class="outline"></div>
          <div class="label">
            <span ref="${f=>o=f}"></span>
          </div>
          <div class="content">
            <slot style="min-height: inherit;" @slotchange="${a}" ref="${f=>s=f}"></slot>
            <div ref="${f=>n=f}" class="textarea"></div>
          </div>
          <slot name="end"></slot>
        </div>
      `}}}){}Zl.define();const Ul=`
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
`,Kl="s-tooltip",Vl={};class Gl extends M({name:Kl,style:Ul,props:Vl,setup(t){let o,s;const r={showed:!1,timer:0},n=()=>{if(!this.isConnected||r.showed)return;const c=o.getBoundingClientRect(),m=Dt(t),h=4,b=s.offsetWidth,L=s.offsetHeight,C={top:c.top-h-L,left:c.left-(b-c.width)/2};C.left<0&&(C.left=c.left),C.left+b>innerWidth&&(C.left=c.left+c.width-b),C.top<0&&(C.top=c.top+o.offsetHeight+h),s.setAttribute("style",`left: ${C.left-m.left}px;top: ${C.top-m.top}px`),s.classList.add("show"),r.showed=!0},i=()=>{!this.isConnected||!r.showed||(s.classList.remove("show"),r.showed=!1)},l=()=>{s.classList.contains("show")||s.removeAttribute("style")},a=()=>{clearTimeout(r.timer),r.timer=setTimeout(n,600)},f=()=>{clearTimeout(r.timer),i()};return{render:()=>I`
        <div ref="${c=>o=c}" 
          @wheel.passive="${i}"
          @mouseover="${()=>!me.touched&&n()}"
          @mouseleave="${()=>!me.touched&&i()}"
          @touchstart="${a}"
          @touchend="${f}"
        >
          <slot name="trigger"></slot>
        </div>
        <div class="container" part="container" ref="${c=>s=c}" @transitionend="${l}">
          <slot></slot>
        </div>
      `}}}){}Gl.define();const Xl=`
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
`,Yl="s-top-app-bar",Jl={};class Ql extends M({name:Yl,style:Xl,props:Jl,setup(){return{render:()=>I`
        <slot name="navigation"></slot>
        <div class="headline">
          <slot name="headline"></slot>
        </div>
        <div class="grow">
          <slot></slot>
        </div>
        <slot name="action"></slot>
      `}}}){}Ql.define();/**
* @vue/shared v3.4.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function zo(e,t){const o=new Set(e.split(","));return s=>o.has(s)}const Z={},Ye=[],fe=()=>{},ea=()=>!1,Wt=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Oo=e=>e.startsWith("onUpdate:"),Q=Object.assign,No=(e,t)=>{const o=e.indexOf(t);o>-1&&e.splice(o,1)},ta=Object.prototype.hasOwnProperty,O=(e,t)=>ta.call(e,t),S=Array.isArray,Je=e=>Zt(e)==="[object Map]",Js=e=>Zt(e)==="[object Set]",q=e=>typeof e=="function",X=e=>typeof e=="string",He=e=>typeof e=="symbol",V=e=>e!==null&&typeof e=="object",Qs=e=>(V(e)||q(e))&&q(e.then)&&q(e.catch),er=Object.prototype.toString,Zt=e=>er.call(e),oa=e=>Zt(e).slice(8,-1),tr=e=>Zt(e)==="[object Object]",Ho=e=>X(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,at=zo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ut=e=>{const t=Object.create(null);return o=>t[o]||(t[o]=e(o))},sa=/-(\w)/g,et=Ut(e=>e.replace(sa,(t,o)=>o?o.toUpperCase():"")),ra=/\B([A-Z])/g,ot=Ut(e=>e.replace(ra,"-$1").toLowerCase()),or=Ut(e=>e.charAt(0).toUpperCase()+e.slice(1)),io=Ut(e=>e?`on${or(e)}`:""),Ne=(e,t)=>!Object.is(e,t),lo=(e,...t)=>{for(let o=0;o<e.length;o++)e[o](...t)},sr=(e,t,o,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:o})},na=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let fs;const rr=()=>fs||(fs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ro(e){if(S(e)){const t={};for(let o=0;o<e.length;o++){const s=e[o],r=X(s)?ca(s):Ro(s);if(r)for(const n in r)t[n]=r[n]}return t}else if(X(e)||V(e))return e}const ia=/;(?![^(]*\))/g,la=/:([^]+)/,aa=/\/\*[^]*?\*\//g;function ca(e){const t={};return e.replace(aa,"").split(ia).forEach(o=>{if(o){const s=o.split(la);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function jo(e){let t="";if(X(e))t=e;else if(S(e))for(let o=0;o<e.length;o++){const s=jo(e[o]);s&&(t+=s+" ")}else if(V(e))for(const o in e)e[o]&&(t+=o+" ");return t.trim()}const da="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fa=zo(da);function nr(e){return!!e||e===""}const Mt=e=>X(e)?e:e==null?"":S(e)||V(e)&&(e.toString===er||!q(e.toString))?JSON.stringify(e,ir,2):String(e),ir=(e,t)=>t&&t.__v_isRef?ir(e,t.value):Je(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((o,[s,r],n)=>(o[ao(s,n)+" =>"]=r,o),{})}:Js(t)?{[`Set(${t.size})`]:[...t.values()].map(o=>ao(o))}:He(t)?ao(t):V(t)&&!S(t)&&!tr(t)?String(t):t,ao=(e,t="")=>{var o;return He(e)?`Symbol(${(o=e.description)!=null?o:t})`:e};/**
* @vue/reactivity v3.4.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ue;class pa{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ue,!t&&ue&&(this.index=(ue.scopes||(ue.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const o=ue;try{return ue=this,t()}finally{ue=o}}}on(){ue=this}off(){ue=this.parent}stop(t){if(this._active){let o,s;for(o=0,s=this.effects.length;o<s;o++)this.effects[o].stop();for(o=0,s=this.cleanups.length;o<s;o++)this.cleanups[o]();if(this.scopes)for(o=0,s=this.scopes.length;o<s;o++)this.scopes[o].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function ua(e,t=ue){t&&t.active&&t.effects.push(e)}function ha(){return ue}let Ue;class Fo{constructor(t,o,s,r){this.fn=t,this.trigger=o,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=5,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,ua(this,r)}get dirty(){if(this._dirtyLevel===2)return!1;if(this._dirtyLevel===3||this._dirtyLevel===4){this._dirtyLevel=1,Re();for(let t=0;t<this._depsLength;t++){const o=this.deps[t];if(o.computed){if(o.computed.effect._dirtyLevel===2)return Le(),!0;if(ma(o.computed),this._dirtyLevel>=5)break}}this._dirtyLevel===1&&(this._dirtyLevel=0),Le()}return this._dirtyLevel>=5}set dirty(t){this._dirtyLevel=t?5:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=Pe,o=Ue;try{return Pe=!0,Ue=this,this._runnings++,ps(this),this.fn()}finally{us(this),this._runnings--,Ue=o,Pe=t}}stop(){this.active&&(ps(this),us(this),this.onStop&&this.onStop(),this.active=!1)}}function ma(e){return e.value}function ps(e){e._trackId++,e._depsLength=0}function us(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)lr(e.deps[t],e);e.deps.length=e._depsLength}}function lr(e,t){const o=e.get(t);o!==void 0&&t._trackId!==o&&(e.delete(t),e.size===0&&e.cleanup())}let Pe=!0,wo=0;const ar=[];function Re(){ar.push(Pe),Pe=!1}function Le(){const e=ar.pop();Pe=e===void 0?!0:e}function Bo(){wo++}function Do(){for(wo--;!wo&&_o.length;)_o.shift()()}function cr(e,t,o){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const s=e.deps[e._depsLength];s!==t?(s&&lr(s,e),e.deps[e._depsLength++]=t):e._depsLength++}}const _o=[];function dr(e,t,o){Bo();for(const s of e.keys()){let r;if(!e.computed&&s.computed&&s._runnings>0&&(r??(r=e.get(s)===s._trackId))){s._dirtyLevel=2;continue}s._dirtyLevel<t&&(r??(r=e.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s.computed&&s._dirtyLevel===2&&(s._shouldSchedule=!0),s._dirtyLevel=t),s._shouldSchedule&&(r??(r=e.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==3&&(s._shouldSchedule=!1,s.scheduler&&_o.push(s.scheduler)))}Do()}const fr=(e,t)=>{const o=new Map;return o.cleanup=e,o.computed=t,o},ko=new WeakMap,Ke=Symbol(""),$o=Symbol("");function ie(e,t,o){if(Pe&&Ue){let s=ko.get(e);s||ko.set(e,s=new Map);let r=s.get(o);r||s.set(o,r=fr(()=>s.delete(o))),cr(Ue,r)}}function Se(e,t,o,s,r,n){const i=ko.get(e);if(!i)return;let l=[];if(t==="clear")l=[...i.values()];else if(o==="length"&&S(e)){const a=Number(s);i.forEach((f,c)=>{(c==="length"||!He(c)&&c>=a)&&l.push(f)})}else switch(o!==void 0&&l.push(i.get(o)),t){case"add":S(e)?Ho(o)&&l.push(i.get("length")):(l.push(i.get(Ke)),Je(e)&&l.push(i.get($o)));break;case"delete":S(e)||(l.push(i.get(Ke)),Je(e)&&l.push(i.get($o)));break;case"set":Je(e)&&l.push(i.get(Ke));break}Bo();for(const a of l)a&&dr(a,5);Do()}const ga=zo("__proto__,__v_isRef,__isVue"),pr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(He)),hs=xa();function xa(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...o){const s=j(this);for(let n=0,i=this.length;n<i;n++)ie(s,"get",n+"");const r=s[t](...o);return r===-1||r===!1?s[t](...o.map(j)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...o){Re(),Bo();const s=j(this)[t].apply(this,o);return Do(),Le(),s}}),e}function va(e){He(e)||(e=String(e));const t=j(this);return ie(t,"has",e),t.hasOwnProperty(e)}class ur{constructor(t=!1,o=!1){this._isReadonly=t,this._isShallow=o}get(t,o,s){const r=this._isReadonly,n=this._isShallow;if(o==="__v_isReactive")return!r;if(o==="__v_isReadonly")return r;if(o==="__v_isShallow")return n;if(o==="__v_raw")return s===(r?n?Ia:xr:n?gr:mr).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const i=S(t);if(!r){if(i&&O(hs,o))return Reflect.get(hs,o,s);if(o==="hasOwnProperty")return va}const l=Reflect.get(t,o,s);return(He(o)?pr.has(o):ga(o))||(r||ie(t,"get",o),n)?l:le(l)?i&&Ho(o)?l:l.value:V(l)?r?vr(l):Uo(l):l}}class hr extends ur{constructor(t=!1){super(!1,t)}set(t,o,s,r){let n=t[o];if(!this._isShallow){const a=ut(n);if(!Ht(s)&&!ut(s)&&(n=j(n),s=j(s)),!S(t)&&le(n)&&!le(s))return a?!1:(n.value=s,!0)}const i=S(t)&&Ho(o)?Number(o)<t.length:O(t,o),l=Reflect.set(t,o,s,r);return t===j(r)&&(i?Ne(s,n)&&Se(t,"set",o,s):Se(t,"add",o,s)),l}deleteProperty(t,o){const s=O(t,o);t[o];const r=Reflect.deleteProperty(t,o);return r&&s&&Se(t,"delete",o,void 0),r}has(t,o){const s=Reflect.has(t,o);return(!He(o)||!pr.has(o))&&ie(t,"has",o),s}ownKeys(t){return ie(t,"iterate",S(t)?"length":Ke),Reflect.ownKeys(t)}}class ba extends ur{constructor(t=!1){super(!0,t)}set(t,o){return!0}deleteProperty(t,o){return!0}}const ya=new hr,wa=new ba,_a=new hr(!0);const Wo=e=>e,Kt=e=>Reflect.getPrototypeOf(e);function Ct(e,t,o=!1,s=!1){e=e.__v_raw;const r=j(e),n=j(t);o||(Ne(t,n)&&ie(r,"get",t),ie(r,"get",n));const{has:i}=Kt(r),l=s?Wo:o?Vo:ht;if(i.call(r,t))return l(e.get(t));if(i.call(r,n))return l(e.get(n));e!==r&&e.get(t)}function Et(e,t=!1){const o=this.__v_raw,s=j(o),r=j(e);return t||(Ne(e,r)&&ie(s,"has",e),ie(s,"has",r)),e===r?o.has(e):o.has(e)||o.has(r)}function Tt(e,t=!1){return e=e.__v_raw,!t&&ie(j(e),"iterate",Ke),Reflect.get(e,"size",e)}function ms(e){e=j(e);const t=j(this);return Kt(t).has.call(t,e)||(t.add(e),Se(t,"add",e,e)),this}function gs(e,t){t=j(t);const o=j(this),{has:s,get:r}=Kt(o);let n=s.call(o,e);n||(e=j(e),n=s.call(o,e));const i=r.call(o,e);return o.set(e,t),n?Ne(t,i)&&Se(o,"set",e,t):Se(o,"add",e,t),this}function xs(e){const t=j(this),{has:o,get:s}=Kt(t);let r=o.call(t,e);r||(e=j(e),r=o.call(t,e)),s&&s.call(t,e);const n=t.delete(e);return r&&Se(t,"delete",e,void 0),n}function vs(){const e=j(this),t=e.size!==0,o=e.clear();return t&&Se(e,"clear",void 0,void 0),o}function St(e,t){return function(s,r){const n=this,i=n.__v_raw,l=j(i),a=t?Wo:e?Vo:ht;return!e&&ie(l,"iterate",Ke),i.forEach((f,c)=>s.call(r,a(f),a(c),n))}}function Lt(e,t,o){return function(...s){const r=this.__v_raw,n=j(r),i=Je(n),l=e==="entries"||e===Symbol.iterator&&i,a=e==="keys"&&i,f=r[e](...s),c=o?Wo:t?Vo:ht;return!t&&ie(n,"iterate",a?$o:Ke),{next(){const{value:m,done:h}=f.next();return h?{value:m,done:h}:{value:l?[c(m[0]),c(m[1])]:c(m),done:h}},[Symbol.iterator](){return this}}}}function Ie(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function ka(){const e={get(n){return Ct(this,n)},get size(){return Tt(this)},has:Et,add:ms,set:gs,delete:xs,clear:vs,forEach:St(!1,!1)},t={get(n){return Ct(this,n,!1,!0)},get size(){return Tt(this)},has:Et,add:ms,set:gs,delete:xs,clear:vs,forEach:St(!1,!0)},o={get(n){return Ct(this,n,!0)},get size(){return Tt(this,!0)},has(n){return Et.call(this,n,!0)},add:Ie("add"),set:Ie("set"),delete:Ie("delete"),clear:Ie("clear"),forEach:St(!0,!1)},s={get(n){return Ct(this,n,!0,!0)},get size(){return Tt(this,!0)},has(n){return Et.call(this,n,!0)},add:Ie("add"),set:Ie("set"),delete:Ie("delete"),clear:Ie("clear"),forEach:St(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(n=>{e[n]=Lt(n,!1,!1),o[n]=Lt(n,!0,!1),t[n]=Lt(n,!1,!0),s[n]=Lt(n,!0,!0)}),[e,o,t,s]}const[$a,Ca,Ea,Ta]=ka();function Zo(e,t){const o=t?e?Ta:Ea:e?Ca:$a;return(s,r,n)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(O(o,r)&&r in s?o:s,r,n)}const Sa={get:Zo(!1,!1)},La={get:Zo(!1,!0)},Aa={get:Zo(!0,!1)};const mr=new WeakMap,gr=new WeakMap,xr=new WeakMap,Ia=new WeakMap;function Ma(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qa(e){return e.__v_skip||!Object.isExtensible(e)?0:Ma(oa(e))}function Uo(e){return ut(e)?e:Ko(e,!1,ya,Sa,mr)}function Pa(e){return Ko(e,!1,_a,La,gr)}function vr(e){return Ko(e,!0,wa,Aa,xr)}function Ko(e,t,o,s,r){if(!V(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const n=r.get(e);if(n)return n;const i=qa(e);if(i===0)return e;const l=new Proxy(e,i===2?s:o);return r.set(e,l),l}function ct(e){return ut(e)?ct(e.__v_raw):!!(e&&e.__v_isReactive)}function ut(e){return!!(e&&e.__v_isReadonly)}function Ht(e){return!!(e&&e.__v_isShallow)}function br(e){return e?!!e.__v_raw:!1}function j(e){const t=e&&e.__v_raw;return t?j(t):e}function za(e){return Object.isExtensible(e)&&sr(e,"__v_skip",!0),e}const ht=e=>V(e)?Uo(e):e,Vo=e=>V(e)?vr(e):e;class yr{constructor(t,o,s,r){this.getter=t,this._setter=o,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Fo(()=>t(this._value),()=>qt(this,this.effect._dirtyLevel===3?3:4)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const t=j(this),o=t.effect._dirtyLevel;return(!t._cacheable||t.effect.dirty)&&Ne(t._value,t._value=t.effect.run())&&o!==3&&qt(t,5),wr(t),t.effect._dirtyLevel>=2&&qt(t,3),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function Oa(e,t,o=!1){let s,r;const n=q(e);return n?(s=e,r=fe):(s=e.get,r=e.set),new yr(s,r,n||!r,o)}function wr(e){var t;Pe&&Ue&&(e=j(e),cr(Ue,(t=e.dep)!=null?t:e.dep=fr(()=>e.dep=void 0,e instanceof yr?e:void 0)))}function qt(e,t=5,o,s){e=j(e);const r=e.dep;r&&dr(r,t)}function le(e){return!!(e&&e.__v_isRef===!0)}function bs(e){return Na(e,!1)}function Na(e,t){return le(e)?e:new Ha(e,t)}class Ha{constructor(t,o){this.__v_isShallow=o,this.dep=void 0,this.__v_isRef=!0,this._rawValue=o?t:j(t),this._value=o?t:ht(t)}get value(){return wr(this),this._value}set value(t){const o=this.__v_isShallow||Ht(t)||ut(t);t=o?t:j(t),Ne(t,this._rawValue)&&(this._rawValue,this._rawValue=t,this._value=o?t:ht(t),qt(this,5))}}function _r(e){return le(e)?e.value:e}const Ra={get:(e,t,o)=>_r(Reflect.get(e,t,o)),set:(e,t,o,s)=>{const r=e[t];return le(r)&&!le(o)?(r.value=o,!0):Reflect.set(e,t,o,s)}};function kr(e){return ct(e)?e:new Proxy(e,Ra)}/**
* @vue/runtime-core v3.4.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ze(e,t,o,s){try{return s?e(...s):e()}catch(r){Vt(r,t,o)}}function xe(e,t,o,s){if(q(e)){const r=ze(e,t,o,s);return r&&Qs(r)&&r.catch(n=>{Vt(n,t,o)}),r}if(S(e)){const r=[];for(let n=0;n<e.length;n++)r.push(xe(e[n],t,o,s));return r}}function Vt(e,t,o,s=!0){const r=t?t.vnode:null;if(t){let n=t.parent;const i=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${o}`;for(;n;){const f=n.ec;if(f){for(let c=0;c<f.length;c++)if(f[c](e,i,l)===!1)return}n=n.parent}const a=t.appContext.config.errorHandler;if(a){Re(),ze(a,null,10,[e,i,l]),Le();return}}ja(e,o,r,s)}function ja(e,t,o,s=!0){console.error(e)}let mt=!1,Co=!1;const ee=[];let ke=0;const Qe=[];let Me=null,We=0;const $r=Promise.resolve();let Go=null;function Fa(e){const t=Go||$r;return e?t.then(this?e.bind(this):e):t}function Ba(e){let t=ke+1,o=ee.length;for(;t<o;){const s=t+o>>>1,r=ee[s],n=gt(r);n<e||n===e&&r.pre?t=s+1:o=s}return t}function Xo(e){(!ee.length||!ee.includes(e,mt&&e.allowRecurse?ke+1:ke))&&(e.id==null?ee.push(e):ee.splice(Ba(e.id),0,e),Cr())}function Cr(){!mt&&!Co&&(Co=!0,Go=$r.then(Tr))}function Da(e){const t=ee.indexOf(e);t>ke&&ee.splice(t,1)}function Wa(e){S(e)?Qe.push(...e):(!Me||!Me.includes(e,e.allowRecurse?We+1:We))&&Qe.push(e),Cr()}function ys(e,t,o=mt?ke+1:0){for(;o<ee.length;o++){const s=ee[o];if(s&&s.pre){if(e&&s.id!==e.uid)continue;ee.splice(o,1),o--,s()}}}function Er(e){if(Qe.length){const t=[...new Set(Qe)].sort((o,s)=>gt(o)-gt(s));if(Qe.length=0,Me){Me.push(...t);return}for(Me=t,We=0;We<Me.length;We++){const o=Me[We];o.active!==!1&&o()}Me=null,We=0}}const gt=e=>e.id==null?1/0:e.id,Za=(e,t)=>{const o=gt(e)-gt(t);if(o===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return o};function Tr(e){Co=!1,mt=!0,ee.sort(Za);try{for(ke=0;ke<ee.length;ke++){const t=ee[ke];t&&t.active!==!1&&ze(t,null,14)}}finally{ke=0,ee.length=0,Er(),mt=!1,Go=null,(ee.length||Qe.length)&&Tr()}}function Ua(e,t,...o){if(e.isUnmounted)return;const s=e.vnode.props||Z;let r=o;const n=t.startsWith("update:"),i=n&&t.slice(7);if(i&&i in s){const c=`${i==="modelValue"?"model":i}Modifiers`,{number:m,trim:h}=s[c]||Z;h&&(r=o.map(b=>X(b)?b.trim():b)),m&&(r=o.map(na))}let l,a=s[l=io(t)]||s[l=io(et(t))];!a&&n&&(a=s[l=io(ot(t))]),a&&xe(a,e,6,r);const f=s[l+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,xe(f,e,6,r)}}function Sr(e,t,o=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const n=e.emits;let i={},l=!1;if(!q(e)){const a=f=>{const c=Sr(f,t,!0);c&&(l=!0,Q(i,c))};!o&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!n&&!l?(V(e)&&s.set(e,null),null):(S(n)?n.forEach(a=>i[a]=null):Q(i,n),V(e)&&s.set(e,i),i)}function Gt(e,t){return!e||!Wt(t)?!1:(t=t.slice(2).replace(/Once$/,""),O(e,t[0].toLowerCase()+t.slice(1))||O(e,ot(t))||O(e,t))}let $e=null,Xt=null;function Rt(e){const t=$e;return $e=e,Xt=e&&e.type.__scopeId||null,t}function Ka(e){Xt=e}function Va(){Xt=null}function Ga(e,t=$e,o){if(!t||e._n)return e;const s=(...r)=>{s._d&&Is(-1);const n=Rt(t);let i;try{i=e(...r)}finally{Rt(n),s._d&&Is(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function co(e){const{type:t,vnode:o,proxy:s,withProxy:r,propsOptions:[n],slots:i,attrs:l,emit:a,render:f,renderCache:c,props:m,data:h,setupState:b,ctx:L,inheritAttrs:C}=e,N=Rt(e);let D,W;try{if(o.shapeFlag&4){const U=r||s,Y=U;D=_e(f.call(Y,U,c,m,b,h,L)),W=l}else{const U=t;D=_e(U.length>1?U(m,{attrs:l,slots:i,emit:a}):U(m,null)),W=t.props?l:Xa(l)}}catch(U){pt.length=0,Vt(U,e,1),D=Oe(xt)}let H=D;if(W&&C!==!1){const U=Object.keys(W),{shapeFlag:Y}=H;U.length&&Y&7&&(n&&U.some(Oo)&&(W=Ya(W,n)),H=tt(H,W,!1,!0))}return o.dirs&&(H=tt(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(o.dirs):o.dirs),o.transition&&(H.transition=o.transition),D=H,Rt(N),D}const Xa=e=>{let t;for(const o in e)(o==="class"||o==="style"||Wt(o))&&((t||(t={}))[o]=e[o]);return t},Ya=(e,t)=>{const o={};for(const s in e)(!Oo(s)||!(s.slice(9)in t))&&(o[s]=e[s]);return o};function Ja(e,t,o){const{props:s,children:r,component:n}=e,{props:i,children:l,patchFlag:a}=t,f=n.emitsOptions;if(t.dirs||t.transition)return!0;if(o&&a>=0){if(a&1024)return!0;if(a&16)return s?ws(s,i,f):!!i;if(a&8){const c=t.dynamicProps;for(let m=0;m<c.length;m++){const h=c[m];if(i[h]!==s[h]&&!Gt(f,h))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===i?!1:s?i?ws(s,i,f):!0:!!i;return!1}function ws(e,t,o){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const n=s[r];if(t[n]!==e[n]&&!Gt(o,n))return!0}return!1}function Qa({vnode:e,parent:t},o){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=o,t=t.parent;else break}}const ec=Symbol.for("v-ndc"),tc=e=>e.__isSuspense;function oc(e,t){t&&t.pendingBranch?S(e)?t.effects.push(...e):t.effects.push(e):Wa(e)}function Yt(e,t,o=se,s=!1){if(o){const r=o[e]||(o[e]=[]),n=t.__weh||(t.__weh=(...i)=>{Re();const l=bt(o),a=xe(t,o,e,i);return l(),Le(),a});return s?r.unshift(n):r.push(n),n}}const Ae=e=>(t,o=se)=>{(!Qt||e==="sp")&&Yt(e,(...s)=>t(...s),o)},sc=Ae("bm"),rc=Ae("m"),nc=Ae("bu"),ic=Ae("u"),lc=Ae("bum"),Lr=Ae("um"),ac=Ae("sp"),cc=Ae("rtg"),dc=Ae("rtc");function fc(e,t=se){Yt("ec",e,t)}function Be(e,t,o,s){const r=e.dirs,n=t&&t.dirs;for(let i=0;i<r.length;i++){const l=r[i];n&&(l.oldValue=n[i].value);let a=l.dir[s];a&&(Re(),xe(a,o,8,[e.el,l,e,t]),Le())}}function Ar(e,t,o,s){let r;const n=o;if(S(e)||X(e)){r=new Array(e.length);for(let i=0,l=e.length;i<l;i++)r[i]=t(e[i],i,void 0,n)}else if(typeof e=="number"){r=new Array(e);for(let i=0;i<e;i++)r[i]=t(i+1,i,void 0,n)}else if(V(e))if(e[Symbol.iterator])r=Array.from(e,(i,l)=>t(i,l,void 0,n));else{const i=Object.keys(e);r=new Array(i.length);for(let l=0,a=i.length;l<a;l++){const f=i[l];r[l]=t(e[f],f,l,n)}}else r=[];return r}const Pt=e=>!!e.type.__asyncLoader,Eo=e=>e?Xr(e)?es(e):Eo(e.parent):null,dt=Q(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Eo(e.parent),$root:e=>Eo(e.root),$emit:e=>e.emit,$options:e=>Yo(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,Xo(e.update)}),$nextTick:e=>e.n||(e.n=Fa.bind(e.proxy)),$watch:e=>Mc.bind(e)}),fo=(e,t)=>e!==Z&&!e.__isScriptSetup&&O(e,t),pc={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:o,setupState:s,data:r,props:n,accessCache:i,type:l,appContext:a}=e;let f;if(t[0]!=="$"){const b=i[t];if(b!==void 0)switch(b){case 1:return s[t];case 2:return r[t];case 4:return o[t];case 3:return n[t]}else{if(fo(s,t))return i[t]=1,s[t];if(r!==Z&&O(r,t))return i[t]=2,r[t];if((f=e.propsOptions[0])&&O(f,t))return i[t]=3,n[t];if(o!==Z&&O(o,t))return i[t]=4,o[t];To&&(i[t]=0)}}const c=dt[t];let m,h;if(c)return t==="$attrs"&&ie(e.attrs,"get",""),c(e);if((m=l.__cssModules)&&(m=m[t]))return m;if(o!==Z&&O(o,t))return i[t]=4,o[t];if(h=a.config.globalProperties,O(h,t))return h[t]},set({_:e},t,o){const{data:s,setupState:r,ctx:n}=e;return fo(r,t)?(r[t]=o,!0):s!==Z&&O(s,t)?(s[t]=o,!0):O(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(n[t]=o,!0)},has({_:{data:e,setupState:t,accessCache:o,ctx:s,appContext:r,propsOptions:n}},i){let l;return!!o[i]||e!==Z&&O(e,i)||fo(t,i)||(l=n[0])&&O(l,i)||O(s,i)||O(dt,i)||O(r.config.globalProperties,i)},defineProperty(e,t,o){return o.get!=null?e._.accessCache[t]=0:O(o,"value")&&this.set(e,t,o.value,null),Reflect.defineProperty(e,t,o)}};function _s(e){return S(e)?e.reduce((t,o)=>(t[o]=null,t),{}):e}let To=!0;function uc(e){const t=Yo(e),o=e.proxy,s=e.ctx;To=!1,t.beforeCreate&&ks(t.beforeCreate,e,"bc");const{data:r,computed:n,methods:i,watch:l,provide:a,inject:f,created:c,beforeMount:m,mounted:h,beforeUpdate:b,updated:L,activated:C,deactivated:N,beforeDestroy:D,beforeUnmount:W,destroyed:H,unmounted:U,render:Y,renderTracked:z,renderTriggered:de,errorCaptured:ae,serverPrefetch:Ve,expose:ve,inheritAttrs:st,components:yt,directives:wt,filters:to}=t;if(f&&hc(f,s,null),i)for(const K in i){const F=i[K];q(F)&&(s[K]=F.bind(o))}if(r){const K=r.call(o,o);V(K)&&(e.data=Uo(K))}if(To=!0,n)for(const K in n){const F=n[K],je=q(F)?F.bind(o,o):q(F.get)?F.get.bind(o,o):fe,_t=!q(F)&&q(F.set)?F.set.bind(o):fe,Fe=Yc({get:je,set:_t});Object.defineProperty(s,K,{enumerable:!0,configurable:!0,get:()=>Fe.value,set:be=>Fe.value=be})}if(l)for(const K in l)Ir(l[K],s,o,K);if(a){const K=q(a)?a.call(o):a;Reflect.ownKeys(K).forEach(F=>{yc(F,K[F])})}c&&ks(c,e,"c");function te(K,F){S(F)?F.forEach(je=>K(je.bind(o))):F&&K(F.bind(o))}if(te(sc,m),te(rc,h),te(nc,b),te(ic,L),te(qc,C),te(Pc,N),te(fc,ae),te(dc,z),te(cc,de),te(lc,W),te(Lr,U),te(ac,Ve),S(ve))if(ve.length){const K=e.exposed||(e.exposed={});ve.forEach(F=>{Object.defineProperty(K,F,{get:()=>o[F],set:je=>o[F]=je})})}else e.exposed||(e.exposed={});Y&&e.render===fe&&(e.render=Y),st!=null&&(e.inheritAttrs=st),yt&&(e.components=yt),wt&&(e.directives=wt)}function hc(e,t,o=fe){S(e)&&(e=So(e));for(const s in e){const r=e[s];let n;V(r)?"default"in r?n=zt(r.from||s,r.default,!0):n=zt(r.from||s):n=zt(r),le(n)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>n.value,set:i=>n.value=i}):t[s]=n}}function ks(e,t,o){xe(S(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,o)}function Ir(e,t,o,s){const r=s.includes(".")?Wr(o,s):()=>o[s];if(X(e)){const n=t[e];q(n)&&uo(r,n)}else if(q(e))uo(r,e.bind(o));else if(V(e))if(S(e))e.forEach(n=>Ir(n,t,o,s));else{const n=q(e.handler)?e.handler.bind(o):t[e.handler];q(n)&&uo(r,n,e)}}function Yo(e){const t=e.type,{mixins:o,extends:s}=t,{mixins:r,optionsCache:n,config:{optionMergeStrategies:i}}=e.appContext,l=n.get(t);let a;return l?a=l:!r.length&&!o&&!s?a=t:(a={},r.length&&r.forEach(f=>jt(a,f,i,!0)),jt(a,t,i)),V(t)&&n.set(t,a),a}function jt(e,t,o,s=!1){const{mixins:r,extends:n}=t;n&&jt(e,n,o,!0),r&&r.forEach(i=>jt(e,i,o,!0));for(const i in t)if(!(s&&i==="expose")){const l=mc[i]||o&&o[i];e[i]=l?l(e[i],t[i]):t[i]}return e}const mc={data:$s,props:Cs,emits:Cs,methods:lt,computed:lt,beforeCreate:oe,created:oe,beforeMount:oe,mounted:oe,beforeUpdate:oe,updated:oe,beforeDestroy:oe,beforeUnmount:oe,destroyed:oe,unmounted:oe,activated:oe,deactivated:oe,errorCaptured:oe,serverPrefetch:oe,components:lt,directives:lt,watch:xc,provide:$s,inject:gc};function $s(e,t){return t?e?function(){return Q(q(e)?e.call(this,this):e,q(t)?t.call(this,this):t)}:t:e}function gc(e,t){return lt(So(e),So(t))}function So(e){if(S(e)){const t={};for(let o=0;o<e.length;o++)t[e[o]]=e[o];return t}return e}function oe(e,t){return e?[...new Set([].concat(e,t))]:t}function lt(e,t){return e?Q(Object.create(null),e,t):t}function Cs(e,t){return e?S(e)&&S(t)?[...new Set([...e,...t])]:Q(Object.create(null),_s(e),_s(t??{})):t}function xc(e,t){if(!e)return t;if(!t)return e;const o=Q(Object.create(null),e);for(const s in t)o[s]=oe(e[s],t[s]);return o}function Mr(){return{app:null,config:{isNativeTag:ea,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vc=0;function bc(e,t){return function(s,r=null){q(s)||(s=Q({},s)),r!=null&&!V(r)&&(r=null);const n=Mr(),i=new WeakSet;let l=!1;const a=n.app={_uid:vc++,_component:s,_props:r,_container:null,_context:n,_instance:null,version:Jc,get config(){return n.config},set config(f){},use(f,...c){return i.has(f)||(f&&q(f.install)?(i.add(f),f.install(a,...c)):q(f)&&(i.add(f),f(a,...c))),a},mixin(f){return n.mixins.includes(f)||n.mixins.push(f),a},component(f,c){return c?(n.components[f]=c,a):n.components[f]},directive(f,c){return c?(n.directives[f]=c,a):n.directives[f]},mount(f,c,m){if(!l){const h=Oe(s,r);return h.appContext=n,m===!0?m="svg":m===!1&&(m=void 0),c&&t?t(h,f):e(h,f,m),l=!0,a._container=f,f.__vue_app__=a,es(h.component)}},unmount(){l&&(e(null,a._container),delete a._container.__vue_app__)},provide(f,c){return n.provides[f]=c,a},runWithContext(f){const c=ft;ft=a;try{return f()}finally{ft=c}}};return a}}let ft=null;function yc(e,t){if(se){let o=se.provides;const s=se.parent&&se.parent.provides;s===o&&(o=se.provides=Object.create(s)),o[e]=t}}function zt(e,t,o=!1){const s=se||$e;if(s||ft){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:ft._context.provides;if(r&&e in r)return r[e];if(arguments.length>1)return o&&q(t)?t.call(s&&s.proxy):t}}const qr={},Pr=()=>Object.create(qr),zr=e=>Object.getPrototypeOf(e)===qr;function wc(e,t,o,s=!1){const r={},n=Pr();e.propsDefaults=Object.create(null),Or(e,t,r,n);for(const i in e.propsOptions[0])i in r||(r[i]=void 0);o?e.props=s?r:Pa(r):e.type.props?e.props=r:e.props=n,e.attrs=n}function _c(e,t,o,s){const{props:r,attrs:n,vnode:{patchFlag:i}}=e,l=j(r),[a]=e.propsOptions;let f=!1;if((s||i>0)&&!(i&16)){if(i&8){const c=e.vnode.dynamicProps;for(let m=0;m<c.length;m++){let h=c[m];if(Gt(e.emitsOptions,h))continue;const b=t[h];if(a)if(O(n,h))b!==n[h]&&(n[h]=b,f=!0);else{const L=et(h);r[L]=Lo(a,l,L,b,e,!1)}else b!==n[h]&&(n[h]=b,f=!0)}}}else{Or(e,t,r,n)&&(f=!0);let c;for(const m in l)(!t||!O(t,m)&&((c=ot(m))===m||!O(t,c)))&&(a?o&&(o[m]!==void 0||o[c]!==void 0)&&(r[m]=Lo(a,l,m,void 0,e,!0)):delete r[m]);if(n!==l)for(const m in n)(!t||!O(t,m))&&(delete n[m],f=!0)}f&&Se(e.attrs,"set","")}function Or(e,t,o,s){const[r,n]=e.propsOptions;let i=!1,l;if(t)for(let a in t){if(at(a))continue;const f=t[a];let c;r&&O(r,c=et(a))?!n||!n.includes(c)?o[c]=f:(l||(l={}))[c]=f:Gt(e.emitsOptions,a)||(!(a in s)||f!==s[a])&&(s[a]=f,i=!0)}if(n){const a=j(o),f=l||Z;for(let c=0;c<n.length;c++){const m=n[c];o[m]=Lo(r,a,m,f[m],e,!O(f,m))}}return i}function Lo(e,t,o,s,r,n){const i=e[o];if(i!=null){const l=O(i,"default");if(l&&s===void 0){const a=i.default;if(i.type!==Function&&!i.skipFactory&&q(a)){const{propsDefaults:f}=r;if(o in f)s=f[o];else{const c=bt(r);s=f[o]=a.call(null,t),c()}}else s=a}i[0]&&(n&&!l?s=!1:i[1]&&(s===""||s===ot(o))&&(s=!0))}return s}function Nr(e,t,o=!1){const s=t.propsCache,r=s.get(e);if(r)return r;const n=e.props,i={},l=[];let a=!1;if(!q(e)){const c=m=>{a=!0;const[h,b]=Nr(m,t,!0);Q(i,h),b&&l.push(...b)};!o&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!n&&!a)return V(e)&&s.set(e,Ye),Ye;if(S(n))for(let c=0;c<n.length;c++){const m=et(n[c]);Es(m)&&(i[m]=Z)}else if(n)for(const c in n){const m=et(c);if(Es(m)){const h=n[c],b=i[m]=S(h)||q(h)?{type:h}:Q({},h);if(b){const L=Ls(Boolean,b.type),C=Ls(String,b.type);b[0]=L>-1,b[1]=C<0||L<C,(L>-1||O(b,"default"))&&l.push(m)}}}const f=[i,l];return V(e)&&s.set(e,f),f}function Es(e){return e[0]!=="$"&&!at(e)}function Ts(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function Ss(e,t){return Ts(e)===Ts(t)}function Ls(e,t){return S(t)?t.findIndex(o=>Ss(o,e)):q(t)&&Ss(t,e)?0:-1}const Hr=e=>e[0]==="_"||e==="$stable",Jo=e=>S(e)?e.map(_e):[_e(e)],kc=(e,t,o)=>{if(t._n)return t;const s=Ga((...r)=>Jo(t(...r)),o);return s._c=!1,s},Rr=(e,t,o)=>{const s=e._ctx;for(const r in e){if(Hr(r))continue;const n=e[r];if(q(n))t[r]=kc(r,n,s);else if(n!=null){const i=Jo(n);t[r]=()=>i}}},jr=(e,t)=>{const o=Jo(t);e.slots.default=()=>o},$c=(e,t)=>{const o=e.slots=Pr();if(e.vnode.shapeFlag&32){const s=t._;s?(Q(o,t),sr(o,"_",s,!0)):Rr(t,o)}else t&&jr(e,t)},Cc=(e,t,o)=>{const{vnode:s,slots:r}=e;let n=!0,i=Z;if(s.shapeFlag&32){const l=t._;l?o&&l===1?n=!1:(Q(r,t),!o&&l===1&&delete r._):(n=!t.$stable,Rr(t,r)),i=t}else t&&(jr(e,t),i={default:1});if(n)for(const l in r)!Hr(l)&&i[l]==null&&delete r[l]};function Ao(e,t,o,s,r=!1){if(S(e)){e.forEach((h,b)=>Ao(h,t&&(S(t)?t[b]:t),o,s,r));return}if(Pt(s)&&!r)return;const n=s.shapeFlag&4?es(s.component):s.el,i=r?null:n,{i:l,r:a}=e,f=t&&t.r,c=l.refs===Z?l.refs={}:l.refs,m=l.setupState;if(f!=null&&f!==a&&(X(f)?(c[f]=null,O(m,f)&&(m[f]=null)):le(f)&&(f.value=null)),q(a))ze(a,l,12,[i,c]);else{const h=X(a),b=le(a);if(h||b){const L=()=>{if(e.f){const C=h?O(m,a)?m[a]:c[a]:a.value;r?S(C)&&No(C,n):S(C)?C.includes(n)||C.push(n):h?(c[a]=[n],O(m,a)&&(m[a]=c[a])):(a.value=[n],e.k&&(c[e.k]=a.value))}else h?(c[a]=i,O(m,a)&&(m[a]=i)):b&&(a.value=i,e.k&&(c[e.k]=i))};i?(L.id=-1,re(L,o)):L()}}}const re=oc;function Ec(e){return Tc(e)}function Tc(e,t){const o=rr();o.__VUE__=!0;const{insert:s,remove:r,patchProp:n,createElement:i,createText:l,createComment:a,setText:f,setElementText:c,parentNode:m,nextSibling:h,setScopeId:b=fe,insertStaticContent:L}=e,C=(d,p,u,g=null,x=null,w=null,k=void 0,y=null,_=!!p.dynamicChildren)=>{if(d===p)return;d&&!it(d,p)&&(g=kt(d),be(d,x,w,!0),d=null),p.patchFlag===-2&&(_=!1,p.dynamicChildren=null);const{type:v,ref:$,shapeFlag:T}=p;switch(v){case Jt:N(d,p,u,g);break;case xt:D(d,p,u,g);break;case ho:d==null&&W(p,u,g,k);break;case he:yt(d,p,u,g,x,w,k,y,_);break;default:T&1?Y(d,p,u,g,x,w,k,y,_):T&6?wt(d,p,u,g,x,w,k,y,_):(T&64||T&128)&&v.process(d,p,u,g,x,w,k,y,_,rt)}$!=null&&x&&Ao($,d&&d.ref,w,p||d,!p)},N=(d,p,u,g)=>{if(d==null)s(p.el=l(p.children),u,g);else{const x=p.el=d.el;p.children!==d.children&&f(x,p.children)}},D=(d,p,u,g)=>{d==null?s(p.el=a(p.children||""),u,g):p.el=d.el},W=(d,p,u,g)=>{[d.el,d.anchor]=L(d.children,p,u,g,d.el,d.anchor)},H=({el:d,anchor:p},u,g)=>{let x;for(;d&&d!==p;)x=h(d),s(d,u,g),d=x;s(p,u,g)},U=({el:d,anchor:p})=>{let u;for(;d&&d!==p;)u=h(d),r(d),d=u;r(p)},Y=(d,p,u,g,x,w,k,y,_)=>{p.type==="svg"?k="svg":p.type==="math"&&(k="mathml"),d==null?z(p,u,g,x,w,k,y,_):Ve(d,p,x,w,k,y,_)},z=(d,p,u,g,x,w,k,y)=>{let _,v;const{props:$,shapeFlag:T,transition:E,dirs:A}=d;if(_=d.el=i(d.type,w,$&&$.is,$),T&8?c(_,d.children):T&16&&ae(d.children,_,null,g,x,po(d,w),k,y),A&&Be(d,null,g,"created"),de(_,d,d.scopeId,k,g),$){for(const B in $)B!=="value"&&!at(B)&&n(_,B,null,$[B],w,d.children,g,x,Ee);"value"in $&&n(_,"value",null,$.value,w),(v=$.onVnodeBeforeMount)&&we(v,g,d)}A&&Be(d,null,g,"beforeMount");const P=Sc(x,E);P&&E.beforeEnter(_),s(_,p,u),((v=$&&$.onVnodeMounted)||P||A)&&re(()=>{v&&we(v,g,d),P&&E.enter(_),A&&Be(d,null,g,"mounted")},x)},de=(d,p,u,g,x)=>{if(u&&b(d,u),g)for(let w=0;w<g.length;w++)b(d,g[w]);if(x){let w=x.subTree;if(p===w){const k=x.vnode;de(d,k,k.scopeId,k.slotScopeIds,x.parent)}}},ae=(d,p,u,g,x,w,k,y,_=0)=>{for(let v=_;v<d.length;v++){const $=d[v]=y?qe(d[v]):_e(d[v]);C(null,$,p,u,g,x,w,k,y)}},Ve=(d,p,u,g,x,w,k)=>{const y=p.el=d.el;let{patchFlag:_,dynamicChildren:v,dirs:$}=p;_|=d.patchFlag&16;const T=d.props||Z,E=p.props||Z;let A;if(u&&De(u,!1),(A=E.onVnodeBeforeUpdate)&&we(A,u,p,d),$&&Be(p,d,u,"beforeUpdate"),u&&De(u,!0),v?ve(d.dynamicChildren,v,y,u,g,po(p,x),w):k||F(d,p,y,null,u,g,po(p,x),w,!1),_>0){if(_&16)st(y,p,T,E,u,g,x);else if(_&2&&T.class!==E.class&&n(y,"class",null,E.class,x),_&4&&n(y,"style",T.style,E.style,x),_&8){const P=p.dynamicProps;for(let B=0;B<P.length;B++){const R=P[B],J=T[R],pe=E[R];(pe!==J||R==="value")&&n(y,R,J,pe,x,d.children,u,g,Ee)}}_&1&&d.children!==p.children&&c(y,p.children)}else!k&&v==null&&st(y,p,T,E,u,g,x);((A=E.onVnodeUpdated)||$)&&re(()=>{A&&we(A,u,p,d),$&&Be(p,d,u,"updated")},g)},ve=(d,p,u,g,x,w,k)=>{for(let y=0;y<p.length;y++){const _=d[y],v=p[y],$=_.el&&(_.type===he||!it(_,v)||_.shapeFlag&70)?m(_.el):u;C(_,v,$,null,g,x,w,k,!0)}},st=(d,p,u,g,x,w,k)=>{if(u!==g){if(u!==Z)for(const y in u)!at(y)&&!(y in g)&&n(d,y,u[y],null,k,p.children,x,w,Ee);for(const y in g){if(at(y))continue;const _=g[y],v=u[y];_!==v&&y!=="value"&&n(d,y,v,_,k,p.children,x,w,Ee)}"value"in g&&n(d,"value",u.value,g.value,k)}},yt=(d,p,u,g,x,w,k,y,_)=>{const v=p.el=d?d.el:l(""),$=p.anchor=d?d.anchor:l("");let{patchFlag:T,dynamicChildren:E,slotScopeIds:A}=p;A&&(y=y?y.concat(A):A),d==null?(s(v,u,g),s($,u,g),ae(p.children||[],u,$,x,w,k,y,_)):T>0&&T&64&&E&&d.dynamicChildren?(ve(d.dynamicChildren,E,u,x,w,k,y),(p.key!=null||x&&p===x.subTree)&&Fr(d,p,!0)):F(d,p,u,$,x,w,k,y,_)},wt=(d,p,u,g,x,w,k,y,_)=>{p.slotScopeIds=y,d==null?p.shapeFlag&512?x.ctx.activate(p,u,g,k,_):to(p,u,g,x,w,k,_):ts(d,p,_)},to=(d,p,u,g,x,w,k)=>{const y=d.component=Zc(d,g,x);if(Zr(d)&&(y.ctx.renderer=rt),Uc(y),y.asyncDep){if(x&&x.registerDep(y,te,k),!d.el){const _=y.subTree=Oe(xt);D(null,_,p,u)}}else te(y,d,p,u,x,w,k)},ts=(d,p,u)=>{const g=p.component=d.component;if(Ja(d,p,u))if(g.asyncDep&&!g.asyncResolved){K(g,p,u);return}else g.next=p,Da(g.update),g.effect.dirty=!0,g.update();else p.el=d.el,g.vnode=p},te=(d,p,u,g,x,w,k)=>{const y=()=>{if(d.isMounted){let{next:$,bu:T,u:E,parent:A,vnode:P}=d;{const Ge=Br(d);if(Ge){$&&($.el=P.el,K(d,$,k)),Ge.asyncDep.then(()=>{d.isUnmounted||y()});return}}let B=$,R;De(d,!1),$?($.el=P.el,K(d,$,k)):$=P,T&&lo(T),(R=$.props&&$.props.onVnodeBeforeUpdate)&&we(R,A,$,P),De(d,!0);const J=co(d),pe=d.subTree;d.subTree=J,C(pe,J,m(pe.el),kt(pe),d,x,w),$.el=J.el,B===null&&Qa(d,J.el),E&&re(E,x),(R=$.props&&$.props.onVnodeUpdated)&&re(()=>we(R,A,$,P),x)}else{let $;const{el:T,props:E}=p,{bm:A,m:P,parent:B}=d,R=Pt(p);if(De(d,!1),A&&lo(A),!R&&($=E&&E.onVnodeBeforeMount)&&we($,B,p),De(d,!0),T&&ns){const J=()=>{d.subTree=co(d),ns(T,d.subTree,d,x,null)};R?p.type.__asyncLoader().then(()=>!d.isUnmounted&&J()):J()}else{const J=d.subTree=co(d);C(null,J,u,g,d,x,w),p.el=J.el}if(P&&re(P,x),!R&&($=E&&E.onVnodeMounted)){const J=p;re(()=>we($,B,J),x)}(p.shapeFlag&256||B&&Pt(B.vnode)&&B.vnode.shapeFlag&256)&&d.a&&re(d.a,x),d.isMounted=!0,p=u=g=null}},_=d.effect=new Fo(y,fe,()=>Xo(v),d.scope),v=d.update=()=>{_.dirty&&_.run()};v.id=d.uid,De(d,!0),v()},K=(d,p,u)=>{p.component=d;const g=d.vnode.props;d.vnode=p,d.next=null,_c(d,p.props,g,u),Cc(d,p.children,u),Re(),ys(d),Le()},F=(d,p,u,g,x,w,k,y,_=!1)=>{const v=d&&d.children,$=d?d.shapeFlag:0,T=p.children,{patchFlag:E,shapeFlag:A}=p;if(E>0){if(E&128){_t(v,T,u,g,x,w,k,y,_);return}else if(E&256){je(v,T,u,g,x,w,k,y,_);return}}A&8?($&16&&Ee(v,x,w),T!==v&&c(u,T)):$&16?A&16?_t(v,T,u,g,x,w,k,y,_):Ee(v,x,w,!0):($&8&&c(u,""),A&16&&ae(T,u,g,x,w,k,y,_))},je=(d,p,u,g,x,w,k,y,_)=>{d=d||Ye,p=p||Ye;const v=d.length,$=p.length,T=Math.min(v,$);let E;for(E=0;E<T;E++){const A=p[E]=_?qe(p[E]):_e(p[E]);C(d[E],A,u,null,x,w,k,y,_)}v>$?Ee(d,x,w,!0,!1,T):ae(p,u,g,x,w,k,y,_,T)},_t=(d,p,u,g,x,w,k,y,_)=>{let v=0;const $=p.length;let T=d.length-1,E=$-1;for(;v<=T&&v<=E;){const A=d[v],P=p[v]=_?qe(p[v]):_e(p[v]);if(it(A,P))C(A,P,u,null,x,w,k,y,_);else break;v++}for(;v<=T&&v<=E;){const A=d[T],P=p[E]=_?qe(p[E]):_e(p[E]);if(it(A,P))C(A,P,u,null,x,w,k,y,_);else break;T--,E--}if(v>T){if(v<=E){const A=E+1,P=A<$?p[A].el:g;for(;v<=E;)C(null,p[v]=_?qe(p[v]):_e(p[v]),u,P,x,w,k,y,_),v++}}else if(v>E)for(;v<=T;)be(d[v],x,w,!0),v++;else{const A=v,P=v,B=new Map;for(v=P;v<=E;v++){const ce=p[v]=_?qe(p[v]):_e(p[v]);ce.key!=null&&B.set(ce.key,v)}let R,J=0;const pe=E-P+1;let Ge=!1,is=0;const nt=new Array(pe);for(v=0;v<pe;v++)nt[v]=0;for(v=A;v<=T;v++){const ce=d[v];if(J>=pe){be(ce,x,w,!0);continue}let ye;if(ce.key!=null)ye=B.get(ce.key);else for(R=P;R<=E;R++)if(nt[R-P]===0&&it(ce,p[R])){ye=R;break}ye===void 0?be(ce,x,w,!0):(nt[ye-P]=v+1,ye>=is?is=ye:Ge=!0,C(ce,p[ye],u,null,x,w,k,y,_),J++)}const ls=Ge?Lc(nt):Ye;for(R=ls.length-1,v=pe-1;v>=0;v--){const ce=P+v,ye=p[ce],as=ce+1<$?p[ce+1].el:g;nt[v]===0?C(null,ye,u,as,x,w,k,y,_):Ge&&(R<0||v!==ls[R]?Fe(ye,u,as,2):R--)}}},Fe=(d,p,u,g,x=null)=>{const{el:w,type:k,transition:y,children:_,shapeFlag:v}=d;if(v&6){Fe(d.component.subTree,p,u,g);return}if(v&128){d.suspense.move(p,u,g);return}if(v&64){k.move(d,p,u,rt);return}if(k===he){s(w,p,u);for(let T=0;T<_.length;T++)Fe(_[T],p,u,g);s(d.anchor,p,u);return}if(k===ho){H(d,p,u);return}if(g!==2&&v&1&&y)if(g===0)y.beforeEnter(w),s(w,p,u),re(()=>y.enter(w),x);else{const{leave:T,delayLeave:E,afterLeave:A}=y,P=()=>s(w,p,u),B=()=>{T(w,()=>{P(),A&&A()})};E?E(w,P,B):B()}else s(w,p,u)},be=(d,p,u,g=!1,x=!1)=>{const{type:w,props:k,ref:y,children:_,dynamicChildren:v,shapeFlag:$,patchFlag:T,dirs:E,memoIndex:A}=d;if(T===-2&&(x=!1),y!=null&&Ao(y,null,u,d,!0),A!=null&&(p.renderCache[A]=void 0),$&256){p.ctx.deactivate(d);return}const P=$&1&&E,B=!Pt(d);let R;if(B&&(R=k&&k.onVnodeBeforeUnmount)&&we(R,p,d),$&6)Qr(d.component,u,g);else{if($&128){d.suspense.unmount(u,g);return}P&&Be(d,null,p,"beforeUnmount"),$&64?d.type.remove(d,p,u,rt,g):v&&(w!==he||T>0&&T&64)?Ee(v,p,u,!1,!0):(w===he&&T&384||!x&&$&16)&&Ee(_,p,u),g&&os(d)}(B&&(R=k&&k.onVnodeUnmounted)||P)&&re(()=>{R&&we(R,p,d),P&&Be(d,null,p,"unmounted")},u)},os=d=>{const{type:p,el:u,anchor:g,transition:x}=d;if(p===he){Jr(u,g);return}if(p===ho){U(d);return}const w=()=>{r(u),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(d.shapeFlag&1&&x&&!x.persisted){const{leave:k,delayLeave:y}=x,_=()=>k(u,w);y?y(d.el,w,_):_()}else w()},Jr=(d,p)=>{let u;for(;d!==p;)u=h(d),r(d),d=u;r(p)},Qr=(d,p,u)=>{const{bum:g,scope:x,update:w,subTree:k,um:y,m:_,a:v}=d;As(_),As(v),g&&lo(g),x.stop(),w&&(w.active=!1,be(k,d,p,u)),y&&re(y,p),re(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ee=(d,p,u,g=!1,x=!1,w=0)=>{for(let k=w;k<d.length;k++)be(d[k],p,u,g,x)},kt=d=>d.shapeFlag&6?kt(d.component.subTree):d.shapeFlag&128?d.suspense.next():h(d.anchor||d.el);let oo=!1;const ss=(d,p,u)=>{d==null?p._vnode&&be(p._vnode,null,null,!0):C(p._vnode||null,d,p,null,null,null,u),oo||(oo=!0,ys(),Er(),oo=!1),p._vnode=d},rt={p:C,um:be,m:Fe,r:os,mt:to,mc:ae,pc:F,pbc:ve,n:kt,o:e};let rs,ns;return{render:ss,hydrate:rs,createApp:bc(ss,rs)}}function po({type:e,props:t},o){return o==="svg"&&e==="foreignObject"||o==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:o}function De({effect:e,update:t},o){e.allowRecurse=t.allowRecurse=o}function Sc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Fr(e,t,o=!1){const s=e.children,r=t.children;if(S(s)&&S(r))for(let n=0;n<s.length;n++){const i=s[n];let l=r[n];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[n]=qe(r[n]),l.el=i.el),!o&&l.patchFlag!==-2&&Fr(i,l)),l.type===Jt&&(l.el=i.el)}}function Lc(e){const t=e.slice(),o=[0];let s,r,n,i,l;const a=e.length;for(s=0;s<a;s++){const f=e[s];if(f!==0){if(r=o[o.length-1],e[r]<f){t[s]=r,o.push(s);continue}for(n=0,i=o.length-1;n<i;)l=n+i>>1,e[o[l]]<f?n=l+1:i=l;f<e[o[n]]&&(n>0&&(t[s]=o[n-1]),o[n]=s)}}for(n=o.length,i=o[n-1];n-- >0;)o[n]=i,i=t[i];return o}function Br(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Br(t)}function As(e){if(e)for(let t=0;t<e.length;t++)e[t].active=!1}const Ac=Symbol.for("v-scx"),Ic=()=>zt(Ac),At={};function uo(e,t,o){return Dr(e,t,o)}function Dr(e,t,{immediate:o,deep:s,flush:r,once:n,onTrack:i,onTrigger:l}=Z){if(t&&n){const z=t;t=(...de)=>{z(...de),Y()}}const a=se,f=z=>s===!0?z:Ze(z,s===!1?1:void 0);let c,m=!1,h=!1;if(le(e)?(c=()=>e.value,m=Ht(e)):ct(e)?(c=()=>f(e),m=!0):S(e)?(h=!0,m=e.some(z=>ct(z)||Ht(z)),c=()=>e.map(z=>{if(le(z))return z.value;if(ct(z))return f(z);if(q(z))return ze(z,a,2)})):q(e)?t?c=()=>ze(e,a,2):c=()=>(b&&b(),xe(e,a,3,[L])):c=fe,t&&s){const z=c;c=()=>Ze(z())}let b,L=z=>{b=H.onStop=()=>{ze(z,a,4),b=H.onStop=void 0}},C;if(Qt)if(L=fe,t?o&&xe(t,a,3,[c(),h?[]:void 0,L]):c(),r==="sync"){const z=Ic();C=z.__watcherHandles||(z.__watcherHandles=[])}else return fe;let N=h?new Array(e.length).fill(At):At;const D=()=>{if(!(!H.active||!H.dirty))if(t){const z=H.run();(s||m||(h?z.some((de,ae)=>Ne(de,N[ae])):Ne(z,N)))&&(b&&b(),xe(t,a,3,[z,N===At?void 0:h&&N[0]===At?[]:N,L]),N=z)}else H.run()};D.allowRecurse=!!t;let W;r==="sync"?W=D:r==="post"?W=()=>re(D,a&&a.suspense):(D.pre=!0,a&&(D.id=a.uid),W=()=>Xo(D));const H=new Fo(c,fe,W),U=ha(),Y=()=>{H.stop(),U&&No(U.effects,H)};return t?o?D():N=H.run():r==="post"?re(H.run.bind(H),a&&a.suspense):H.run(),C&&C.push(Y),Y}function Mc(e,t,o){const s=this.proxy,r=X(e)?e.includes(".")?Wr(s,e):()=>s[e]:e.bind(s,s);let n;q(t)?n=t:(n=t.handler,o=t);const i=bt(this),l=Dr(r,n.bind(s),o);return i(),l}function Wr(e,t){const o=t.split(".");return()=>{let s=e;for(let r=0;r<o.length&&s;r++)s=s[o[r]];return s}}function Ze(e,t=1/0,o){if(t<=0||!V(e)||e.__v_skip||(o=o||new Set,o.has(e)))return e;if(o.add(e),t--,le(e))Ze(e.value,t,o);else if(S(e))for(let s=0;s<e.length;s++)Ze(e[s],t,o);else if(Js(e)||Je(e))e.forEach(s=>{Ze(s,t,o)});else if(tr(e)){for(const s in e)Ze(e[s],t,o);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&Ze(e[s],t,o)}return e}const Zr=e=>e.type.__isKeepAlive;function qc(e,t){Ur(e,"a",t)}function Pc(e,t){Ur(e,"da",t)}function Ur(e,t,o=se){const s=e.__wdc||(e.__wdc=()=>{let r=o;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Yt(t,s,o),o){let r=o.parent;for(;r&&r.parent;)Zr(r.parent.vnode)&&zc(s,t,o,r),r=r.parent}}function zc(e,t,o,s){const r=Yt(t,e,s,!0);Lr(()=>{No(s[t],r)},o)}function Kr(e,t){e.shapeFlag&6&&e.component?Kr(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}const Oc=e=>e.__isTeleport,he=Symbol.for("v-fgt"),Jt=Symbol.for("v-txt"),xt=Symbol.for("v-cmt"),ho=Symbol.for("v-stc"),pt=[];let ge=null;function ne(e=!1){pt.push(ge=e?null:[])}function Nc(){pt.pop(),ge=pt[pt.length-1]||null}let vt=1;function Is(e){vt+=e}function Vr(e){return e.dynamicChildren=vt>0?ge||Ye:null,Nc(),vt>0&&ge&&ge.push(e),e}function Ce(e,t,o,s,r,n){return Vr(G(e,t,o,s,r,n,!0))}function Ft(e,t,o,s,r){return Vr(Oe(e,t,o,s,r,!0))}function Hc(e){return e?e.__v_isVNode===!0:!1}function it(e,t){return e.type===t.type&&e.key===t.key}const Gr=({key:e})=>e??null,Ot=({ref:e,ref_key:t,ref_for:o})=>(typeof e=="number"&&(e=""+e),e!=null?X(e)||le(e)||q(e)?{i:$e,r:e,k:t,f:!!o}:e:null);function G(e,t=null,o=null,s=0,r=null,n=e===he?0:1,i=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Gr(t),ref:t&&Ot(t),scopeId:Xt,slotScopeIds:null,children:o,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:n,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:$e};return l?(Qo(a,o),n&128&&e.normalize(a)):o&&(a.shapeFlag|=X(o)?8:16),vt>0&&!i&&ge&&(a.patchFlag>0||n&6)&&a.patchFlag!==32&&ge.push(a),a}const Oe=Rc;function Rc(e,t=null,o=null,s=0,r=null,n=!1){if((!e||e===ec)&&(e=xt),Hc(e)){const l=tt(e,t,!0);return o&&Qo(l,o),vt>0&&!n&&ge&&(l.shapeFlag&6?ge[ge.indexOf(e)]=l:ge.push(l)),l.patchFlag=-2,l}if(Xc(e)&&(e=e.__vccOpts),t){t=jc(t);let{class:l,style:a}=t;l&&!X(l)&&(t.class=jo(l)),V(a)&&(br(a)&&!S(a)&&(a=Q({},a)),t.style=Ro(a))}const i=X(e)?1:tc(e)?128:Oc(e)?64:V(e)?4:q(e)?2:0;return G(e,t,o,s,r,i,n,!0)}function jc(e){return e?br(e)||zr(e)?Q({},e):e:null}function tt(e,t,o=!1,s=!1){const{props:r,ref:n,patchFlag:i,children:l,transition:a}=e,f=t?Bc(r||{},t):r,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&Gr(f),ref:t&&t.ref?o&&n?S(n)?n.concat(Ot(t)):[n,Ot(t)]:Ot(t):n,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==he?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&tt(e.ssContent),ssFallback:e.ssFallback&&tt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&s&&Kr(c,a.clone(c)),c}function Fc(e=" ",t=0){return Oe(Jt,null,e,t)}function _e(e){return e==null||typeof e=="boolean"?Oe(xt):S(e)?Oe(he,null,e.slice()):typeof e=="object"?qe(e):Oe(Jt,null,String(e))}function qe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:tt(e)}function Qo(e,t){let o=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(S(t))o=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),Qo(e,r()),r._c&&(r._d=!0));return}else{o=32;const r=t._;!r&&!zr(t)?t._ctx=$e:r===3&&$e&&($e.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else q(t)?(t={default:t,_ctx:$e},o=32):(t=String(t),s&64?(o=16,t=[Fc(t)]):o=8);e.children=t,e.shapeFlag|=o}function Bc(...e){const t={};for(let o=0;o<e.length;o++){const s=e[o];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=jo([t.class,s.class]));else if(r==="style")t.style=Ro([t.style,s.style]);else if(Wt(r)){const n=t[r],i=s[r];i&&n!==i&&!(S(n)&&n.includes(i))&&(t[r]=n?[].concat(n,i):i)}else r!==""&&(t[r]=s[r])}return t}function we(e,t,o,s=null){xe(e,t,7,[o,s])}const Dc=Mr();let Wc=0;function Zc(e,t,o){const s=e.type,r=(t?t.appContext:e.appContext)||Dc,n={uid:Wc++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new pa(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Nr(s,r),emitsOptions:Sr(s,r),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:s.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:o,suspenseId:o?o.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return n.ctx={_:n},n.root=t?t.root:n,n.emit=Ua.bind(null,n),e.ce&&e.ce(n),n}let se=null,Bt,Io;{const e=rr(),t=(o,s)=>{let r;return(r=e[o])||(r=e[o]=[]),r.push(s),n=>{r.length>1?r.forEach(i=>i(n)):r[0](n)}};Bt=t("__VUE_INSTANCE_SETTERS__",o=>se=o),Io=t("__VUE_SSR_SETTERS__",o=>Qt=o)}const bt=e=>{const t=se;return Bt(e),e.scope.on(),()=>{e.scope.off(),Bt(t)}},Ms=()=>{se&&se.scope.off(),Bt(null)};function Xr(e){return e.vnode.shapeFlag&4}let Qt=!1;function Uc(e,t=!1){t&&Io(t);const{props:o,children:s}=e.vnode,r=Xr(e);wc(e,o,r,t),$c(e,s);const n=r?Kc(e,t):void 0;return t&&Io(!1),n}function Kc(e,t){const o=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,pc);const{setup:s}=o;if(s){const r=e.setupContext=s.length>1?Gc(e):null,n=bt(e);Re();const i=ze(s,e,0,[e.props,r]);if(Le(),n(),Qs(i)){if(i.then(Ms,Ms),t)return i.then(l=>{qs(e,l,t)}).catch(l=>{Vt(l,e,0)});e.asyncDep=i}else qs(e,i,t)}else Yr(e,t)}function qs(e,t,o){q(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:V(t)&&(e.setupState=kr(t)),Yr(e,o)}let Ps;function Yr(e,t,o){const s=e.type;if(!e.render){if(!t&&Ps&&!s.render){const r=s.template||Yo(e).template;if(r){const{isCustomElement:n,compilerOptions:i}=e.appContext.config,{delimiters:l,compilerOptions:a}=s,f=Q(Q({isCustomElement:n,delimiters:l},i),a);s.render=Ps(r,f)}}e.render=s.render||fe}{const r=bt(e);Re();try{uc(e)}finally{Le(),r()}}}const Vc={get(e,t){return ie(e,"get",""),e[t]}};function Gc(e){const t=o=>{e.exposed=o||{}};return{attrs:new Proxy(e.attrs,Vc),slots:e.slots,emit:e.emit,expose:t}}function es(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(kr(za(e.exposed)),{get(t,o){if(o in t)return t[o];if(o in dt)return dt[o](e)},has(t,o){return o in t||o in dt}})):e.proxy}function Xc(e){return q(e)&&"__vccOpts"in e}const Yc=(e,t)=>Oa(e,t,Qt),Jc="3.4.30";/**
* @vue/runtime-dom v3.4.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Qc="http://www.w3.org/2000/svg",ed="http://www.w3.org/1998/Math/MathML",Te=typeof document<"u"?document:null,zs=Te&&Te.createElement("template"),td={insert:(e,t,o)=>{t.insertBefore(e,o||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,o,s)=>{const r=t==="svg"?Te.createElementNS(Qc,e):t==="mathml"?Te.createElementNS(ed,e):o?Te.createElement(e,{is:o}):Te.createElement(e);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>Te.createTextNode(e),createComment:e=>Te.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Te.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,o,s,r,n){const i=o?o.previousSibling:t.lastChild;if(r&&(r===n||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),o),!(r===n||!(r=r.nextSibling)););else{zs.innerHTML=s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e;const l=zs.content;if(s==="svg"||s==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,o)}return[i?i.nextSibling:t.firstChild,o?o.previousSibling:t.lastChild]}},od=Symbol("_vtc");function sd(e,t,o){const s=e[od];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):o?e.setAttribute("class",t):e.className=t}const Os=Symbol("_vod"),rd=Symbol("_vsh"),nd=Symbol(""),id=/(^|;)\s*display\s*:/;function ld(e,t,o){const s=e.style,r=X(o);let n=!1;if(o&&!r){if(t)if(X(t))for(const i of t.split(";")){const l=i.slice(0,i.indexOf(":")).trim();o[l]==null&&Nt(s,l,"")}else for(const i in t)o[i]==null&&Nt(s,i,"");for(const i in o)i==="display"&&(n=!0),Nt(s,i,o[i])}else if(r){if(t!==o){const i=s[nd];i&&(o+=";"+i),s.cssText=o,n=id.test(o)}}else t&&e.removeAttribute("style");Os in e&&(e[Os]=n?s.display:"",e[rd]&&(s.display="none"))}const Ns=/\s*!important$/;function Nt(e,t,o){if(S(o))o.forEach(s=>Nt(e,t,s));else if(o==null&&(o=""),t.startsWith("--"))e.setProperty(t,o);else{const s=ad(e,t);Ns.test(o)?e.setProperty(ot(s),o.replace(Ns,""),"important"):e[s]=o}}const Hs=["Webkit","Moz","ms"],mo={};function ad(e,t){const o=mo[t];if(o)return o;let s=et(t);if(s!=="filter"&&s in e)return mo[t]=s;s=or(s);for(let r=0;r<Hs.length;r++){const n=Hs[r]+s;if(n in e)return mo[t]=n}return t}const Rs="http://www.w3.org/1999/xlink";function js(e,t,o,s,r,n=fa(t)){s&&t.startsWith("xlink:")?o==null?e.removeAttributeNS(Rs,t.slice(6,t.length)):e.setAttributeNS(Rs,t,o):o==null||n&&!nr(o)?e.removeAttribute(t):e.setAttribute(t,n?"":He(o)?String(o):o)}function cd(e,t,o,s,r,n,i){if(t==="innerHTML"||t==="textContent"){s&&i(s,r,n),e[t]=o??"";return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){const f=l==="OPTION"?e.getAttribute("value")||"":e.value,c=o==null?"":String(o);(f!==c||!("_value"in e))&&(e.value=c),o==null&&e.removeAttribute(t),e._value=o;return}let a=!1;if(o===""||o==null){const f=typeof e[t];f==="boolean"?o=nr(o):o==null&&f==="string"?(o="",a=!0):f==="number"&&(o=0,a=!0)}try{e[t]=o}catch{}a&&e.removeAttribute(t)}function dd(e,t,o,s){e.addEventListener(t,o,s)}function fd(e,t,o,s){e.removeEventListener(t,o,s)}const Fs=Symbol("_vei");function pd(e,t,o,s,r=null){const n=e[Fs]||(e[Fs]={}),i=n[t];if(s&&i)i.value=s;else{const[l,a]=ud(t);if(s){const f=n[t]=gd(s,r);dd(e,l,f,a)}else i&&(fd(e,l,i,a),n[t]=void 0)}}const Bs=/(?:Once|Passive|Capture)$/;function ud(e){let t;if(Bs.test(e)){t={};let s;for(;s=e.match(Bs);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ot(e.slice(2)),t]}let go=0;const hd=Promise.resolve(),md=()=>go||(hd.then(()=>go=0),go=Date.now());function gd(e,t){const o=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=o.attached)return;xe(xd(s,o.value),t,5,[s])};return o.value=e,o.attached=md(),o}function xd(e,t){if(S(t)){const o=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{o.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const Ds=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,vd=(e,t,o,s,r,n,i,l,a)=>{const f=r==="svg";t==="class"?sd(e,s,f):t==="style"?ld(e,o,s):Wt(t)?Oo(t)||pd(e,t,o,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):bd(e,t,s,f))?(cd(e,t,s,n,i,l,a),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&js(e,t,s,f,i,t!=="value")):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),js(e,t,s,f))};function bd(e,t,o,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&Ds(t)&&q(o));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Ds(t)&&X(o)?!1:t in e}const yd=Q({patchProp:vd},td);let Ws;function wd(){return Ws||(Ws=Ec(yd))}const _d=(...e)=>{const t=wd().createApp(...e),{mount:o}=t;return t.mount=s=>{const r=$d(s);if(!r)return;const n=t._component;!q(n)&&!n.render&&!n.template&&(n.template=r.innerHTML),r.innerHTML="";const i=o(r,!1,kd(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},t};function kd(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function $d(e){return X(e)?document.querySelector(e):e}const Cd="/assets/desk-note-B75wHffG.png",Ed="/assets/todo-DHQw0TSW.png",Td="/assets/translator-BxY8RubY.png",eo=(e,t)=>{const o=e.__vccOpts||e;for(const[s,r]of t)o[s]=r;return o},Sd=["innerHTML"],Ld={key:1,type:"link.icon"},Ad={id:"text"},Id={__name:"LinkButton",props:["link"],setup(e){function t(o){window.open(o,"_blank")}return(o,s)=>(ne(),Ce("s-ripple",{onClick:s[0]||(s[0]=r=>t(e.link.url)),id:"container"},[e.link.icon.includes("svg")?(ne(),Ce("s-icon",{key:0,id:"icon",innerHTML:e.link.icon},null,8,Sd)):(ne(),Ce("s-icon",Ld)),G("div",Ad,Mt(e.link.name),1)]))}},Md=eo(Id,[["__scopeId","data-v-708eb9a9"]]),qd={class:"app-container"},Pd={style:{display:"flex","align-items":"center"}},zd=["src"],Od={class:"app-info-header"},Nd={class:"app-name",id:"app-name"},Hd={class:"app-developer",id:"app-developer"},Rd={class:"app-description",id:"app-description"},jd={class:"app-downloads"},Fd={__name:"AppInfo",props:["appItem"],setup(e){return(t,o)=>(ne(),Ce("div",qd,[G("div",Pd,[G("img",{class:"app-logo",id:"app-logo",src:e.appItem.logo},null,8,zd),G("div",Od,[G("div",Nd,Mt(e.appItem.name),1),G("div",Hd,Mt(e.appItem.developer),1)])]),G("div",Rd,[G("p",null,Mt(e.appItem.description),1)]),G("div",jd,[(ne(!0),Ce(he,null,Ar(e.appItem.links,s=>(ne(),Ft(Md,{link:s},null,8,["link"]))),256))])]))}},Zs=eo(Fd,[["__scopeId","data-v-e38685a9"]]),Bd={class:"app-view"},Dd={class:"app-view-column"},Wd=["src"],Zd={class:"app-view-column"},Ud=["src"],Kd={__name:"AppItem",props:["appItem","index"],setup(e){const t=o=>new URL(Object.assign({"../assets/images/desk-note.png":Cd,"../assets/images/todo.png":Ed,"../assets/images/translator.png":Td})[`../assets/images/${o}`],import.meta.url).href;return bs("red"),bs("#1e90ff"),(o,s)=>(ne(),Ce("div",Bd,[G("div",Dd,[e.index%2==0?(ne(),Ft(Zs,{key:0,appItem:e.appItem},null,8,["appItem"])):(ne(),Ce("img",{key:1,class:"app-view-preview",src:t(e.appItem.preview)},null,8,Wd))]),G("div",Zd,[e.index%2==1?(ne(),Ft(Zs,{key:0,appItem:e.appItem},null,8,["appItem"])):(ne(),Ce("img",{key:1,class:"app-view-preview",src:t(e.appItem.preview)},null,8,Ud))])]))}},Vd=eo(Kd,[["__scopeId","data-v-16cbc43a"]]),Gd=[{logo:"https://boybeak.github.io/images/justtodo-icon-256.png",name:"JustTodo",preview:"todo.png",developer:"boybeak",description:"May be the simplest todo app for macOS.",background:"lightskyblue",links:[{icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" /></svg>',name:"Github",url:"https://github.com/boybeak/JustTodo"}]},{logo:"https://boybeak.github.io/images/desknote-icon-256.png",name:"DeskNote",preview:"desk-note.png",developer:"boybeak",description:"A Windows 7 style desk note for macOS, support customize colors, transparency, font size and style.",background:"darkseagreen",links:[{icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" /></svg>',name:"Github",url:"https://github.com/boybeak/DeskNote"}]},{logo:"https://boybeak.github.io/images/translator-icon-256.png",name:"Translator",preview:"translator.png",developer:"boybeak",description:"A translator app for macOS, docked on menu bar.",background:"burlywood",links:[{icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" /></svg>',name:"Github",url:"https://github.com/boybeak/TranslatorDocs"}]}],Xd=e=>(Ka("data-v-c5859e46"),e=e(),Va(),e),Yd={id:"app",theme:"auto"},Jd=Xd(()=>G("s-top-app-bar",null,[G("div",{slot:"headline",style:{"font-weight":"bold"}},"Apps Only"),G("s-icon-button",{slot:"action"},[G("s-icon",null,[G("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512"},[G("path",{d:"M96 64c0-17.7 14.3-32 32-32H448h64c70.7 0 128 57.3 128 128s-57.3 128-128 128H480c0 53-43 96-96 96H192c-53 0-96-43-96-96V64zM480 224h32c35.3 0 64-28.7 64-64s-28.7-64-64-64H480V224zM32 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"})])])])],-1)),Qd={__name:"App",setup(e){return(t,o)=>(ne(),Ce("s-page",Yd,[Jd,(ne(!0),Ce(he,null,Ar(_r(Gd),(s,r)=>(ne(),Ft(Vd,{appItem:s,index:r},null,8,["appItem","index"]))),256))]))}},ef=eo(Qd,[["__scopeId","data-v-c5859e46"]]);_d(ef).mount("#app");
