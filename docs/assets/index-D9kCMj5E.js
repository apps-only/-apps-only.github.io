var sn=Object.defineProperty;var rn=(e,t,o)=>t in e?sn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var Ct=(e,t,o)=>rn(e,typeof t!="symbol"?t+"":t,o);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();const Vs=e=>`<!--${e}-->`,A=(e,...t)=>({values:t,getTemplateHTML:()=>{const o=Vs(String(Math.random()).slice(2)),s=document.createElement("template");return s.innerHTML=e.join(o),{mark:o,template:s}}}),Ks=(e,t,o)=>{e.forEach(s=>{var r;if(s.nodeType===Node.TEXT_NODE&&((r=s.textContent)!=null&&r.includes(t))&&(s.textContent=s.textContent.replaceAll(t,()=>String(o.value))),s.nodeType===Node.COMMENT_NODE&&s.textContent&&t===Vs(s.textContent)&&s.parentNode.replaceChild(document.createTextNode(String(o.value)),s),s.nodeType===Node.ELEMENT_NODE){const n=s;n.getAttributeNames().forEach(l=>{const a=n.getAttribute(l);if(l==="ref"&&a===t)return n.removeAttribute(l),o.value(n);if(l.startsWith("@")){const[f,c]=l.slice(1).split("."),m=a===t&&o.value;return n.addEventListener(f,h=>{m&&m(h,n),c==="stop"&&h.stopPropagation(),c==="prevent"&&h.preventDefault()},{passive:c==="passive"}),n.removeAttribute(l)}a!=null&&a.includes(t)&&n.setAttribute(l,a.replaceAll(t,()=>String(o.value)))}),Ks(s.childNodes,t,o)}})},ro={},nn=(e,t)=>{ro[e]||(ro[e]=t.getTemplateHTML());const{mark:o,template:s}=ro[e],r=s.cloneNode(!0),n={index:0,get value(){const i=t.values[this.index];return this.index++,i}};return Ks(r.content.childNodes,o,n),r.content},ln=(e,t)=>{if(e===void 0)return t;if(typeof t=="string")return String(e);if(typeof t=="number")return Number(e);if(typeof t=="boolean")return typeof e=="boolean"?e:e==="true";throw new TypeError},Gs=new CSSStyleSheet;Gs.replaceSync(":host{ user-select: none;-webkit-user-select: none }");const I=e=>{const t=new Map,o=[];for(const n in e.props)o.push(n);const s=new CSSStyleSheet;s.replaceSync(e.style??"");class r extends HTMLElement{constructor(){var m,h;super();const i=this.attachShadow({mode:"closed"}),l={...e.props},a={props:{...e.props}},f={};for(const b in this)b in HTMLElement.prototype||(f[b]=this[b]);for(const b in l)Object.defineProperty(this,b,{enumerable:!0,get:()=>l[b],set:C=>{var W,Z,R;let N=ln(C,a.props[b]);if(N!==l[b]){if(e.propSyncs===!0||(W=e.propSyncs)!=null&&W.includes(b)){const V=this.getAttribute(b),Y=String(N);if(V!==null&&N===a.props[b]){this.removeAttribute(b);return}if(Y!==V&&N!==a.props[b]){this.setAttribute(b,Y);return}}l[b]=N,(R=(Z=a.watches)==null?void 0:Z[b])==null||R.call(Z,N)}}});for(const b in f)this[b]=f[b];const c=(m=e.setup)==null?void 0:m.apply(this,[i]);i.adoptedStyleSheets=[Gs,s],i.appendChild(nn(e.name,c.render())),a.events={adopted:c.adopted,mounted:c.mounted,unmounted:c.unmounted},a.watches=c.watches,(h=c.created)==null||h.call(c);for(const b in c.expose)Object.defineProperty(this,b,{get:()=>{var L;return(L=c.expose)==null?void 0:L[b]}});t.set(this,a)}connectedCallback(){var i,l,a;(a=(l=(i=t.get(this))==null?void 0:i.events)==null?void 0:l.mounted)==null||a.call(l)}disconnectedCallback(){var i,l,a;(a=(l=(i=t.get(this))==null?void 0:i.events)==null?void 0:l.unmounted)==null||a.call(l)}adoptedCallback(){var i,l,a;(a=(l=(i=t.get(this))==null?void 0:i.events)==null?void 0:l.adopted)==null||a.call(l)}attributeChangedCallback(i,l,a){this[i]=a??void 0}}return Ct(r,"observedAttributes",o),r.define=function(){!customElements.get(e.name)&&customElements.define(e.name,this)},r},an=`
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
`,cn="s-badge",dn={};class fn extends I({name:cn,props:dn,style:an,setup(){return{render:()=>A`
        <slot></slot>
      `}}}){}fn.define();const vo=matchMedia("(pointer:coarse)");vo.addEventListener("change",({matches:e})=>me.touched=e);const me={touched:vo.matches,addEventListener:e=>vo.addEventListener("change",()=>e(me.touched))},It=document.createElement("div");It.setAttribute("style","position: fixed;right: 0;bottom: 0;width: 100%;height: 100%;pointer-events: none");const Wt=e=>{e.appendChild(It);const t=It.getBoundingClientRect();return e.removeChild(It),{left:t.left,top:t.top,width:t.width,height:t.height}},pn=`
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
`,un="s-ripple",hn={centered:!1,attached:!1},ds=e=>{const t=()=>{e(),document.removeEventListener("pointerup",t),document.removeEventListener("pointercancel",t)};document.addEventListener("pointerup",t),document.addEventListener("pointercancel",t)};class mn extends I({name:un,style:pn,props:hn,propSyncs:["attached"],setup(){let t;const o=()=>!me.touched&&t.classList.add("hover"),s=()=>!me.touched&&t.classList.remove("hover"),r=(c,m)=>{const h=document.createElement("div");h.className="animation";const{offsetWidth:b,offsetHeight:L}=t;let C=Math.sqrt(b*b+L*L);const N={x:"50%",y:"50%"};if(!this.centered){const{left:R,top:V}=t.getBoundingClientRect(),Y=c.clientX-R,O=c.clientY-V,de=L/2,ae=b/2,Ke=(Math.abs(de-O)+de)*2,ve=(Math.abs(ae-Y)+ae)*2;C=Math.sqrt(Ke*Ke+ve*ve),N.x=`${Y}px`,N.y=`${O}px`}h.setAttribute("style",`--size: ${C}px;--x: ${N.x};--y: ${N.y};`);const W=()=>h.isConnected&&t.removeChild(h);h.addEventListener("transitionend",W,{once:!0}),h.addEventListener("transitioncancel",W,{once:!0});const Z=()=>h.style.opacity="0";if(t.appendChild(h),h.animate([{transform:"translate(-50%, -50%) scale(0)"},{transform:"translate(-50%, -50%) scale(1)"}],{duration:800,fill:"forwards",easing:"cubic-bezier(.2, .9, .1, .9)"}),!m)return ds(Z);window.getComputedStyle(h).top,Z()},n=c=>{if(c.pointerType==="mouse")return r(c);let m=!1;const h=()=>clearTimeout(b),b=setTimeout(()=>{r(c,m),document.removeEventListener("pointermove",h)},80);ds(()=>m=!0),document.addEventListener("pointermove",h,{once:!0})},i=c=>{c.button===0&&n(c)};let l=this;const a=()=>{l=this.attached?this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode:this,l==null||l.addEventListener("mouseover",o),l==null||l.addEventListener("mouseleave",s),l==null||l.addEventListener("wheel",s,{passive:!0}),l==null||l.addEventListener("pointerdown",i)},f=()=>{l==null||l.removeEventListener("mouseover",o),l==null||l.removeEventListener("mouseleave",s),l==null||l.removeEventListener("wheel",s),l==null||l.removeEventListener("pointerdown",i)};return{mounted:a,unmounted:f,watches:{attached:()=>{f(),a()}},render:()=>A`
        <slot></slot>
        <div class="container" ref="${c=>t=c}"></div>
      `}}}){}mn.define();const gn=`
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
`,xn="s-button",vn={disabled:!1,type:"filled"};class bn extends I({name:xn,style:gn,props:vn,propSyncs:!0,setup(){return{render:()=>A`
        <slot name="start"></slot>
        <slot></slot>
        <slot name="end"></slot>
        <s-ripple class="ripple" attached="true"></s-ripple>
      `}}}){}bn.define();const yn=`
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
`,wn="s-card",_n={type:"elevated",clickable:!1};class kn extends I({name:wn,style:yn,props:_n,propSyncs:!0,setup(){return{render:()=>A`
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
      `}}}){}kn.define();const $n=`
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
`,Cn="s-carousel",En={duration:4e3};class Tn extends I({name:Cn,style:$n,props:En,setup(){let t,o,s,r=0,n=0,i=0;const l=()=>{var c,m;t.style.transform=`translateX(-${r*100}%)`,(c=o.querySelector(".checked"))==null||c.classList.remove("checked"),(m=o.children[r])==null||m.classList.add("checked")},a=()=>{clearInterval(i),l(),n!==0&&(i=setInterval(()=>{const c=r+1;r=c===n?0:c,l()},this.duration))},f=()=>{o.innerHTML="";const c=s.assignedElements(),m=document.createDocumentFragment();for(const h in c){const b=document.createElement("div"),L=Number(h);b.className=L===0?"item checked":"item",b.addEventListener("click",()=>{r=L,a()}),m.appendChild(b)}n=c.length,o.appendChild(m),r=0,a()};return{mounted:a,unmounted:()=>clearInterval(i),watches:{duration:a},render:()=>A`
        <div class="container" ref="${c=>t=c}">
          <slot ref="${c=>s=c}" @slotchange="${f}"></slot>
        </div>
        <div class="dot" ref="${c=>o=c}"></div>
      `}}}){}Tn.define();const Sn=`
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
`,Ln="s-checkbox",Mn={disabled:!1,checked:!1,indeterminate:!1},Xe={indeterminate:"M280-440h400v-80H280v80Zm-80 320q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z",uncheck:"M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z",checked:"m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"};class An extends I({name:Ln,style:Sn,props:Mn,propSyncs:!0,setup(){let t;return this.addEventListener("click",()=>{if(this.indeterminate)return this.indeterminate=!1;this.checked=!this.checked,this.dispatchEvent(new Event("change"))}),{watches:{indeterminate:o=>t.setAttribute("d",o?Xe.indeterminate:this.checked?Xe.checked:Xe.uncheck),checked:o=>!this.indeterminate&&t.setAttribute("d",o?Xe.checked:Xe.uncheck)},render:()=>A`
        <svg class="icon color" viewBox="0 -960 960 960">
          <path ref="${o=>t=o}" d="${Xe.uncheck}"></path>
        </svg>
        <s-ripple class="color" attached="true" centered="true"></s-ripple>
      `}}}){}An.define();const In=`
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
`,qn="s-chip",zn={type:"outlined",clickable:!1};class Pn extends I({name:qn,style:In,props:zn,propSyncs:!0,setup(){return{render:()=>A`
        <slot name="start"></slot>
        <slot></slot>
        <slot name="end"></slot>
        <slot name="action" @pointerdown.stop></slot>
        <s-ripple class="ripple" attached="true"></s-ripple>
      `}}}){}Pn.define();const On=`
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
`,Hn="s-circular-progress",Nn={indeterminate:!1,max:100,value:0};class Rn extends I({name:Hn,style:On,props:Nn,propSyncs:["indeterminate"],setup(){let t;const r=44*Math.PI,n=()=>{const i=Math.min(this.value,this.max)/this.max*100;t.style.strokeDashoffset=`${r-r*(i/100)}px`};return{watches:{max:n,value:n},render:()=>A`
        <svg class="determinable" viewBox="0 0 48 48" style="transform: rotate(-90deg);--dasharray: ${r}px;">
          <circle class="unckecked" cx="${48/2}" cy="${48/2}" r="${44/2}" style="stroke-width: ${4}px" />
          <circle ref="${i=>t=i}" cx="${48/2}" cy="${48/2}" r="${44/2}" style="stroke-dashoffset: ${r}px;stroke-width: ${4}px" />
        </svg>
        <div class="indeterminate">
          <svg viewBox="0 0 48 48" style="animation: stroke-rotate 5.2s ease-in-out infinite;--dasharray: ${r}px;">
            <circle transform="rotate(-90, ${48/2}, ${48/2})" cx="${48/2}" cy="${48/2}" r=" ${44/2}" style="animation: stroke 1.3s ease-in-out infinite;stroke-width: ${4}px"></circle>
          </svg>
        </div>
      `}}}){}Rn.define();const jn=`
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
`,Fn="s-scroll-view",Bn={};class Dn extends I({name:Fn,style:jn,props:Bn,setup(){return{render:()=>A`
        <slot></slot>
      `}}}){}Dn.define();const Wn=`
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
`,Zn="s-dialog",Un={size:"basic"},Vn=e=>{let t=document.body;const o=new qo,s=document.body.firstElementChild;s&&s.tagName==="S-PAGE"&&(t=s);const r=document.createElement("div");if(r.slot="text",typeof e=="string")r.textContent=e,o.appendChild(r);else{if(e.root&&(t=e.root),e.headline){const n=document.createElement("div");n.slot="headline",n.textContent=e.headline,o.appendChild(n)}r.textContent=e.text,o.appendChild(r);for(const n of e.actions??[]){const i=document.createElement("s-button");i.slot="action",i.type="text",i.textContent=n.text,n.click&&i.addEventListener("click",n.click),o.appendChild(i)}}t.appendChild(o),o.addEventListener("dismissed",()=>t.removeChild(o)),o.show()};class qo extends I({name:Zn,style:Wn,props:Un,propSyncs:["size"],setup(t){let o;const s=()=>{const i=Wt(t);(i.top!==0||i.left!==0)&&o.setAttribute("style",`width: ${innerWidth}px;height: ${innerHeight}px;top: ${0-i.top}px;left: ${0-i.left}px`),o.classList.add("show"),this.dispatchEvent(new Event("show"))},r=()=>{o.classList.remove("show"),this.dispatchEvent(new Event("dismiss"))},n=i=>{if(i.propertyName!=="transform")return;const l=o.classList.contains("show");this.dispatchEvent(new Event(l?"showed":"dismissed"))};return{expose:{show:s,dismiss:r},render:()=>A`
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
      `}}}){}Ct(qo,"show",Vn);qo.define();const Kn=`
:host{
  display: block;
  height: 1px;
  background: var(--s-color-outline-variant, #c7c5d0);
  margin: 0 16px;
}
`,Gn="s-divider",Xn={};class Yn extends I({name:Gn,style:Kn,props:Xn,setup(){return{render:()=>A`
        <slot></slot>
      `}}}){}Yn.define();const Jn=`
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
`,Qn="s-drawer",ei={fold:840};class ti extends I({name:Qn,props:ei,style:Jn,setup(){let t;const o={start:void 0,end:void 0},s={start:void 0,end:void 0},r=200,n=(f="start",c)=>{var N;const m=c===void 0?t.classList.contains("folded"):c,h=m?`show-fold-${f}`:`show-${f}`;if(t.classList.contains(h))return;t.classList.add(h);const b=((N=s[f])==null?void 0:N.offsetWidth)??0,L=f==="start"?b*-1:b,C=m?[{transform:`translateX(${L}px)`},{transform:"translateX(0px)"}]:[{width:0},{width:`${b}px`}];o[f].animate(C,{duration:r})},i=(f="start",c)=>{var N;const m=c===void 0?t.classList.contains("folded"):c,h=m?`show-fold-${f}`:`show-${f}`;if(!t.classList.contains(h))return;const b=((N=s[f])==null?void 0:N.offsetWidth)??0;t.classList.remove(h);const L=f==="start"?b*-1:b,C=m?[{transform:"translateX(0px)",visibility:"visible"},{transform:`translateX(${L}px)`,visibility:"visible"}]:[{width:`${b}px`},{width:0}];o[f].animate(C,{duration:r})},l=(f="start",c)=>{const h=(c===void 0?t.classList.contains("folded"):c)?`show-fold-${f}`:`show-${f}`;t.classList.contains(h)?i(f,c):n(f,c)};return new ResizeObserver(()=>this.offsetWidth<this.fold?t.classList.add("folded"):t.classList.remove("folded")).observe(this),{expose:{show:n,dismiss:i,toggle:l},render:()=>A`
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
      `}}}){}ti.define();const oi=`
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
`,si="s-dropdown",ri={align:"center"};class ni extends I({name:si,style:oi,props:ri,setup(t){let o,s,r;const n=a=>{if(!this.isConnected||s.classList.contains("show"))return;const f=Wt(t);(f.top!==0||f.left!==0)&&s.setAttribute("style",`width: ${innerWidth}px;height: ${innerHeight}px;top: ${0-f.top}px;left: ${0-f.left}px`);const c={top:0,left:0,origin:[]};if(!a||a instanceof HTMLElement){const m=a||o;s.style.setProperty("--dropdown-min-width",`${m.offsetWidth}px`);const h=m.getBoundingClientRect(),b=r.offsetWidth,L=r.offsetHeight;c.origin=["center","top"],c.top=h.y+h.height,c.left=h.x-(b-h.width)/2;let C={left:{value:h.x,origin:"left"},right:{value:h.x+h.width-b,origin:"right"},top:{value:h.top-L,origin:"bottom"}};this.align==="left"&&(c.origin[0]="right",c.left=h.x-b,c.top=h.y,C={left:{value:h.x+h.width,origin:"left"},right:{value:c.left,origin:c.origin[0]},top:{value:h.y+h.height-L,origin:"bottom"}}),this.align==="right"&&(c.origin[0]="left",c.left=h.x+h.width,c.top=h.y,C={left:{value:c.left,origin:c.origin[0]},right:{value:h.x-b,origin:"right"},top:{value:h.y+h.height-L,origin:"bottom"}}),c.left<0&&(c.origin[0]=C.left.origin,c.left=C.left.value),c.left+b>innerWidth&&(c.origin[0]=C.right.origin,c.left=Math.max(C.right.value,0)),c.top+L>innerHeight&&(c.origin[1]=C.top.origin,c.top=Math.max(C.top.value,0))}else c.top=a.y,c.left=a.x,c.origin=a.origin?a.origin.split(" "):["left","top"],a.x+r.offsetWidth>innerWidth&&(c.left=a.x-r.offsetWidth,c.origin[0]="right"),a.y+r.offsetHeight>innerHeight&&(c.top=a.y-r.offsetHeight,c.origin[1]="bottom");r.style.transformOrigin=c.origin.join(" "),r.style.top=`${c.top}px`,r.style.left=`${c.left}px`,s.classList.add("show"),r.animate([{transform:"scale(.9)",opacity:0},{transform:"scale(1)",opacity:1}],{duration:100})},i=()=>{!this.isConnected||!s.classList.contains("show")||(s.classList.remove("show"),r.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.9)",opacity:0}],{duration:100}))};return{expose:{show:n,dismiss:i,toggle:a=>{this.isConnected&&(s.classList.contains("show")?i():n(a))}},mounted:()=>addEventListener("resize",i),unmounted:()=>removeEventListener("resize",i),render:()=>A`
        <div ref="${a=>o=a}" @click="${()=>n()}">
          <slot name="trigger"></slot>
        </div>
        <div class="wrapper" ref="${a=>s=a}">
          <div class="scrim" @pointerdown="${i}"></div>
          <div class="container" ref="${a=>r=a}">
            <slot></slot>
          </div>
        </div>
      `}}}){}ni.define();const ii=`
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
`,li="s-fab",ai={size:"medium",extended:!1};class ci extends I({name:li,style:ii,props:ai,propSyncs:!0,setup(){let t;return{watches:{extended:o=>t.setAttribute("centered",String(!o))},render:()=>A`
        <s-ripple attached="true" centered="true" ref="${o=>t=o}"></s-ripple>
        <slot name="start"></slot>
        <slot></slot>
        <slot name="end"></slot>
      `}}}){}ci.define();const di=`
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
`,fi="s-icon-button",pi={disabled:!1,type:"standard"};class ui extends I({name:fi,style:di,props:pi,propSyncs:!0,setup(){return{render:()=>A`
        <slot name="start"></slot>
        <slot></slot>
        <slot name="end"></slot>
        <s-ripple class="ripple" attached="true" centered="true"></s-ripple>
      `}}}){}ui.define();const hi=`
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
`,no={none:"",home:"M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z",add:"M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z",search:"M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z",menu:"M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z",arrow_back:"m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z",arrow_forward:{name:"arrow_back",angle:180},arrow_upward:{name:"arrow_back",angle:90},arrow_downward:{name:"arrow_back",angle:-90},arrow_drop_up:"m280-400 200-200 200 200H280Z",arrow_drop_down:{name:"arrow_drop_up",angle:180},arrow_drop_left:{name:"arrow_drop_up",angle:-90},arrow_drop_right:{name:"arrow_drop_up",angle:90},more_vert:"M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z",more_horiz:{name:"more_vert",angle:90},close:"m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z",done:"M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z",chevron_up:"M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z",chevron_down:{name:"chevron_up",angle:180},chevron_left:{name:"chevron_up",angle:-90},chevron_right:{name:"chevron_up",angle:90},light_mode:"M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z",dark_mode:"M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z",star:"m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z",favorite:"m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"},mi="s-icon",gi={type:"none"};class xi extends I({name:mi,style:hi,props:gi,propSyncs:["type"],setup(){let t;return{watches:{type:o=>{let s=no[o];typeof s=="object"?(t.setAttribute("transform",`rotate(${s.angle} 480 -480)`),s=no[s.name]):t.removeAttribute("transform"),t.setAttribute("d",s)}},render:()=>A`
        <slot>
          <svg viewBox="0 -960 960 960">
            <path ref="${o=>t=o}" d="${no.none}"></path>
          </svg>
        </slot>
      `}}}){}xi.define();const vi=`
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
`,bi="s-linear-progress",yi={indeterminate:!1,max:100,value:0};class wi extends I({name:bi,style:vi,props:yi,propSyncs:["indeterminate"],setup(){let t;const o=()=>{const s=Math.min(this.value,this.max)/this.max*100;t.style.transform=`translateX(-${100-s}%)`};return{watches:{max:o,value:o},render:()=>A`
        <div class="track"></div>
        <div class="determinable float" ref="${s=>t=s}"></div>
        <div class="indeterminate float"></div>
      `}}}){}wi.define();const _i=`
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
`,ki="s-menu",$i={group:""};class zo extends I({name:ki,style:_i,props:$i,propSyncs:["group"],setup(){let t;const o=n=>t.show(n),s=()=>t.dismiss(),r=n=>t.toggle(n);return this.addEventListener("menu-item:click",n=>{n.stopPropagation(),s()}),{mounted:()=>{this.parentNode instanceof zo&&t.setAttribute("align","right")},expose:{show:o,dismiss:s,toggle:r},render:()=>A`
        <s-dropdown class="dropdown" ref="${n=>t=n}">
          <slot slot="trigger" name="trigger" @click.stop="${()=>o()}"></slot>
          <s-scroll-view class="container">
            <slot></slot>
          </div>
        </s-scroll-view>
      `}}}){}const Ci=`
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
`,Ei="s-menu-item",Ti={};class Si extends I({name:Ei,style:Ci,props:Ti,setup(){const t=()=>{this.dispatchEvent(new Event("menu-item:click",{bubbles:!0}))};return{render:()=>A`
        <s-ripple class="container" @click="${t}">
          <slot name="start"></slot>
          <div class="text">
            <slot></slot>
          </div>
          <slot name="end"></slot>
        </s-ripple>
      `}}}){}zo.define();Si.define();const Li=`
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
`,Mi="s-navigation",Ai={mode:"bottom"};class bo extends I({name:Mi,style:Li,props:Ai,propSyncs:!0,setup(){let t=[],o=-1,s=!1;const r=(i,l)=>{t=l.assignedElements().filter(f=>f instanceof Xs),o=-1;let a=null;for(const f of t)f.selected&&(a=f);a&&n(a)},n=i=>{if(t.length===0||!i.selected)return o=-1;for(const l of t)l!==i&&l.selected&&l.removeAttribute("selected");o=t.indexOf(i),s&&(this.dispatchEvent(new Event("change")),s=!1)};return this.addEventListener("navigation-item:update",i=>{i.stopPropagation(),n(i.target)}),this.addEventListener("navigation-item:change",i=>{i.stopPropagation(),s=!0}),{expose:{get options(){return t},get selectedIndex(){return o}},render:()=>A`
        <slot name="start"></slot>
        <slot @slotchange="${r}"></slot>
        <slot name="end"></slot>
      `}}}){}const Ii=`
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
`,qi="s-navigation-item",zi={selected:!1};class Xs extends I({name:qi,style:Ii,props:zi,propSyncs:!0,setup(){return this.addEventListener("click",()=>{this.selected||(this.parentNode instanceof bo&&this.dispatchEvent(new Event("navigation-item:change",{bubbles:!0})),this.selected=!0)}),{watches:{selected:()=>{this.parentNode instanceof bo&&this.dispatchEvent(new Event("navigation-item:update",{bubbles:!0}))}},render:()=>A`
        <div class="icon">
          <slot name="icon"></slot>
        </div>
        <slot name="text"></slot>
        <div class="badge">
          <slot name="badge"></slot>
        </div>
        <s-ripple attached="true" class="ripple"></s-ripple>
      `}}}){}bo.define();Xs.define();const fs=`
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
`,Pi=`
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
  ${fs}
}
@media (prefers-color-scheme: dark){
  :host([theme=auto]){
    ${fs}
  }
}
`,Oi="s-page",Hi={theme:"light"};class Ni extends I({name:Oi,style:Pi,props:Hi,propSyncs:["theme"],setup(){return{render:()=>A`
        <slot></slot>
      `}}}){}Ni.define();const Ri=`
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
`,ji="s-radio-button",Fi={disabled:!1,checked:!1,name:""},io={uncheck:"M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z",checked:"M480-280q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm0 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"};class Bi extends I({name:ji,style:Ri,props:Fi,propSyncs:!0,setup(){let t;return{created:()=>{this.addEventListener("click",()=>{this.checked=!0,this.name&&document.querySelectorAll(`${this.tagName}[name='${this.name}']`).forEach(o=>{o!==this&&(o.checked=!1)}),this.dispatchEvent(new Event("change"))})},watches:{checked:o=>t.setAttribute("d",o?io.checked:io.uncheck)},render:()=>A`
        <svg class="icon color" viewBox="0 -960 960 960">
          <path ref="${o=>t=o}" d="${io.uncheck}"></path>
        </svg>
        <s-ripple class="color" attached="true" centered="true"></s-ripple>
      `}}}){}Bi.define();const Di=`
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
`,Wi="s-rate",Zi={readonly:!1,max:10,min:0,value:5,step:1};class Ui extends I({name:Wi,style:Di,props:Zi,propSyncs:["readonly"],setup(){let t,o;const s=()=>{const n=(Number(o.value)-this.min)*100/this.max-this.min;t.style.width=`${n}%`};return{watches:{max:r=>{const n=String(r);o.max!==n&&(o.max=n,s())},min:r=>{const n=String(r);o.min!==n&&(o.min=n,s())},step:r=>{const n=String(r);o.step!==n&&(o.step=n,s())},value:r=>{const n=String(r);o.value!==n&&(o.value=n,s())}},render:()=>A`
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
      `}}}){}Ui.define();const Vi=`
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
`,Ki="s-search",Gi={size:"medium"};class Xi extends I({name:Ki,style:Vi,props:Gi,propSyncs:!0,setup(){return{render:()=>A`
        <div class="drop">
          <slot name="drop" @mousedown.prevent></slot>
        </div>
        <div class="container">
          <slot name="start"></slot>
          <slot></slot>
          <slot name="end"></slot>
        </div>
      `}}}){}Xi.define();const Yi=`
:host{
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  border: solid 1px var(--s-color-outline, #777680);
  border-radius: 20px;
  height: 40px;
  overflow: hidden;
}
`,Ji="s-segmented-button",Qi={};class yo extends I({name:Ji,style:Yi,props:Qi,setup(){let t=[],o=-1,s=!1;const r=(i,l)=>{t=l.assignedElements().filter(f=>f instanceof Ys),o=-1;let a=null;for(const f of t)f.selected&&(a=f);a&&n(a)},n=i=>{if(t.length===0||!i.selected)return o=-1;for(const l of t)l!==i&&l.selected&&l.removeAttribute("selected");o=t.indexOf(i),s&&(this.dispatchEvent(new Event("change")),s=!1)};return this.addEventListener("segmented-button-item:update",i=>{i.stopPropagation(),n(i.target)}),this.addEventListener("segmented-button-item:change",i=>{i.stopPropagation(),s=!0}),{expose:{get options(){return t},get selectedIndex(){return o}},render:()=>A`
        <slot @slotchange="${r}"></slot>
      `}}}){}const el=`
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
`,tl="s-segmented-button-item",ol={selected:!1,disabled:!1,selectable:!0};class Ys extends I({name:tl,style:el,props:ol,propSyncs:["selected","disabled"],setup(){return this.addEventListener("click",()=>{if(this.selectable){if(this.selected)return;this.parentNode instanceof yo&&this.dispatchEvent(new Event("navigation-item:change",{bubbles:!0})),this.selected=!0}}),{watches:{selected:()=>{this.parentNode instanceof yo&&this.dispatchEvent(new Event("segmented-button-item:update",{bubbles:!0}))}},render:()=>A`
        <slot name="start"></slot>
        <slot></slot>
        <slot name="end"></slot>
        <s-ripple class="ripple" attached="true"></s-ripple>
      `}}}){}yo.define();Ys.define();const sl=`
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
`,rl="s-slider",nl={disabled:!1,labeled:!1,max:100,min:0,step:1,value:50};class il extends I({name:rl,style:sl,props:nl,propSyncs:["disabled","labeled"],setup(){let t,o,s,r;const n=()=>{const a=100-((Number(s.value)-this.min)*100/this.max-this.min);t.style.transform=`translateX(-${a}%)`,o.style.transform=`translateX(calc(-${a}% + ${a*.4}px))`,this.value=Number(s.value),r.textContent=s.value};return{watches:{max:i=>{const l=String(i);s.max!==l&&(s.max=l,n())},min:i=>{const l=String(i);s.min!==l&&(s.min=l,n())},step:i=>{const l=String(i);s.step!==l&&(s.step=l,n())},value:i=>{const l=String(i);s.value!==l&&(s.value=l,n())}},render:()=>A`
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
      `}}}){}il.define();const ll=`
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
`,al="s-snackbar",cl={duration:5e3},dl=e=>{let t=document.body;const o=new Po,s=document.body.firstElementChild;if(s&&s.tagName==="S-PAGE"&&(t=s),typeof e=="string")o.textContent=e;else{if(e.root&&(t=e.root),o.textContent=e.text,e.action){const r=document.createElement("s-button");r.type="text",r.slot="action",r.textContent=e.action.text,e.action.click&&r.addEventListener("click",e.action.click),o.appendChild(r)}e.duration&&(o.duration=e.duration)}t.appendChild(o),o.addEventListener("dismissed",()=>t.removeChild(o)),o.show()};class Po extends I({name:al,style:ll,props:cl,setup(t){let o;const s={timer:0},r=()=>{const l=Wt(t);(l.top!==0||l.left!==0)&&o.setAttribute("style",`width: ${innerWidth}px;height: ${innerHeight}px;top: ${0-l.top}px;left: ${0-l.left}px`),clearTimeout(s.timer),getComputedStyle(o).top,o.classList.add("show"),this.dispatchEvent(new Event("show")),this.duration>0&&(s.timer=setTimeout(n,this.duration))},n=()=>{clearTimeout(s.timer),o.classList.remove("show"),this.dispatchEvent(new Event("dismiss"))},i=l=>{if(l.propertyName!=="transform")return;const a=o.classList.contains("show");this.dispatchEvent(new Event(a?"showed":"dismissed"))};return{expose:{show:r,dismiss:n},render:()=>A`
        <slot name="trigger" @click="${r}"></slot>
        <div class="wrapper" ref="${l=>o=l}" @transitionend="${i}">
          <div class="container" part="container">
            <div class="supporting-text">
              <slot></slot>
            </div>
            <slot name="action" @click="${n}"></slot>
          </div>
        </div>
      `}}}){}Ct(Po,"show",dl);Po.define();const fl=`
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
`,pl="s-switch",ul={disabled:!1,checked:!1};class hl extends I({name:pl,style:fl,props:ul,propSyncs:!0,setup(){return this.addEventListener("click",()=>{this.checked=!this.checked,this.dispatchEvent(new Event("change"))}),{render:()=>A`
        <div class="track">
        </div>
        <s-ripple attached="true" centered="true" class="ripple">
          <div class="thumb">
            <svg class="icon" viewBox="0 -960 960 960">
              <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"></path>
            </svg>
          </div>
        </s-ripple>
      `}}}){}hl.define();const ml=`
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
`,gl="s-tab",xl={mode:"scrollable"};class wo extends I({name:gl,style:ml,props:xl,propSyncs:["mode"],setup(){let t,o=[],s=-1,r=!1;const n=(l,a)=>{o=a.assignedElements().filter(c=>c instanceof Js),s=-1;let f=null;for(const c of o)c.selected&&(f=c);f&&i(f)},i=l=>{if(o.length===0||!l.selected)return s=-1;let a=null;for(const f of o)f!==l&&f.selected&&(a=f,f.removeAttribute("selected"));if(s=o.indexOf(l),r&&(this.dispatchEvent(new Event("change")),r=!1),this.isConnected){if(t.scrollWidth!==t.offsetWidth){const f=l.offsetLeft-t.offsetWidth+t.offsetWidth/2+l.offsetWidth/2;t.scrollTo({left:f,behavior:"smooth"})}if(a){a.indicator.addEventListener("transitionend",()=>{a==null||a.indicator.removeAttribute("style"),l.indicator.removeAttribute("style")},{once:!0});const f=a.indicator.getBoundingClientRect().left,c=l.indicator.getBoundingClientRect();l.indicator.setAttribute("style","transition:none;filter:opacity(0)"),a.indicator.setAttribute("style",`transition: transform .2s, width .2s;filter:opacity(1);transform:translateX(${c.left-f}px);width: ${c.width}px`)}}};return this.addEventListener("tab-item:update",l=>{l.stopPropagation(),i(l.target)}),this.addEventListener("tab-item:change",l=>{l.stopPropagation(),r=!0}),{expose:{get options(){return o},get selectedIndex(){return s}},render:()=>A`
        <div class="container" ref="${l=>t=l}">
          <slot @slotchange="${n}"></slot>
        </div>
      `}}}){}const vl=`
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
`,bl="s-tab-item",yl={selected:!1};class Js extends I({name:bl,style:vl,props:yl,propSyncs:!0,setup(){let t,o;const s=(r,n)=>{const i=n.assignedElements().length;t.classList[i>0?"add":"remove"]("icon")};return this.addEventListener("click",()=>{this.selected||(this.parentNode instanceof wo&&this.dispatchEvent(new Event("tab-item:change",{bubbles:!0})),this.selected=!0)}),{expose:{get indicator(){return o}},watches:{selected:()=>{this.parentNode instanceof wo&&this.dispatchEvent(new Event("tab-item:update",{bubbles:!0}))}},render:()=>A`
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
      `}}}){}wo.define();Js.define();const wl=`
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
`,_l="s-table",kl={};class $l extends I({name:_l,style:wl,props:kl,setup(){return{render:()=>A`
        <div class="container" part="container">
          <slot></slot>
        </div>
      `}}}){}const Cl=`
:host{
  display: table-header-group;
  font-weight: 600;
  color: var(--s-color-on-surface-variant, #46464f);
}
`,El="s-thead",Tl={};class Sl extends I({name:El,style:Cl,props:Tl,setup(){return{render:()=>A`
        <slot></slot>
      `}}}){}const Ll=`
:host{
  display: table-row-group;
  color: var(--s-color-on-surface, #1c1b1f);
  position: relative;
}
::slotted(s-tr){
  border-top: solid 1px var(--s-color-outline-variant, #c7c5d0);
}
`,Ml="s-tbody",Al={};class Il extends I({name:Ml,style:Ll,props:Al,setup(){return{render:()=>A`
        <slot></slot>
      `}}}){}const ql=`
:host{
  display: table-row;
}
`,zl="s-tr",Pl={};class Ol extends I({name:zl,style:ql,props:Pl,setup(){return{render:()=>A`
        <slot></slot>
      `}}}){}const Hl=`
:host{
  display: table-cell;
  padding: 16px;
}
:host(:not(:first-child)){
  width: 0;
  text-align: right;
}
`,Nl="s-th",Rl={};class jl extends I({name:Nl,style:Hl,props:Rl,setup(){return{render:()=>A`
        <slot></slot>
      `}}}){}const Fl=`
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
`,Bl="s-td",Dl={colspan:1,rowspan:1};class Wl extends I({name:Bl,style:Fl,props:Dl,setup(){let t;return{watches:{colspan:o=>t.colSpan=o,rowspan:o=>t.rowSpan=o},render:()=>A`
        <td ref="${o=>t=o}" rowspan="${this.rowspan}" colspan="${this.colspan}">
          <slot></slot>
        </td>
      `}}}){}$l.define();Sl.define();Il.define();Ol.define();jl.define();Wl.define();const Zl=`
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
`,Ul="s-text-field",Vl={label:""};class Kl extends I({name:Ul,style:Zl,props:Vl,propSyncs:!0,setup(){let t,o,s,r,n;const i=()=>{!r||r.parentNode!==this||(r.value===""?t.classList.remove("not-empty"):t.classList.add("not-empty"),r instanceof HTMLTextAreaElement&&(n.textContent=r.value,r.offsetHeight!==n.offsetHeight&&(r.style.height=`${n.offsetHeight}px`)))},l=f=>{f.addEventListener("input",i);const c=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(f),"value");if(c){const m=c.set;c.set=h=>{m==null||m.apply(f,[h]),!(!r||r.parentNode!==this)&&i()},Object.defineProperty(f,"value",c)}r=f,i()},a=()=>{const f=s.assignedElements()[0];!f||!(f instanceof HTMLInputElement)&&!(f instanceof HTMLTextAreaElement)||l(f)};return{watches:{label:f=>o.textContent=f},render:()=>A`
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
      `}}}){}Kl.define();const Gl=`
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
`,Xl="s-tooltip",Yl={};class Jl extends I({name:Xl,style:Gl,props:Yl,setup(t){let o,s;const r={showed:!1,timer:0},n=()=>{if(!this.isConnected||r.showed)return;const c=o.getBoundingClientRect(),m=Wt(t),h=4,b=s.offsetWidth,L=s.offsetHeight,C={top:c.top-h-L,left:c.left-(b-c.width)/2};C.left<0&&(C.left=c.left),C.left+b>innerWidth&&(C.left=c.left+c.width-b),C.top<0&&(C.top=c.top+o.offsetHeight+h),s.setAttribute("style",`left: ${C.left-m.left}px;top: ${C.top-m.top}px`),s.classList.add("show"),r.showed=!0},i=()=>{!this.isConnected||!r.showed||(s.classList.remove("show"),r.showed=!1)},l=()=>{s.classList.contains("show")||s.removeAttribute("style")},a=()=>{clearTimeout(r.timer),r.timer=setTimeout(n,600)},f=()=>{clearTimeout(r.timer),i()};return{render:()=>A`
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
      `}}}){}Jl.define();const Ql=`
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
`,ea="s-top-app-bar",ta={};class oa extends I({name:ea,style:Ql,props:ta,setup(){return{render:()=>A`
        <slot name="navigation"></slot>
        <div class="headline">
          <slot name="headline"></slot>
        </div>
        <div class="grow">
          <slot></slot>
        </div>
        <slot name="action"></slot>
      `}}}){}oa.define();/**
* @vue/shared v3.4.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Oo(e,t){const o=new Set(e.split(","));return s=>o.has(s)}const U={},Ye=[],pe=()=>{},sa=()=>!1,Zt=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Ho=e=>e.startsWith("onUpdate:"),Q=Object.assign,No=(e,t)=>{const o=e.indexOf(t);o>-1&&e.splice(o,1)},ra=Object.prototype.hasOwnProperty,H=(e,t)=>ra.call(e,t),S=Array.isArray,Je=e=>Ut(e)==="[object Map]",Qs=e=>Ut(e)==="[object Set]",q=e=>typeof e=="function",X=e=>typeof e=="string",Ne=e=>typeof e=="symbol",G=e=>e!==null&&typeof e=="object",er=e=>(G(e)||q(e))&&q(e.then)&&q(e.catch),tr=Object.prototype.toString,Ut=e=>tr.call(e),na=e=>Ut(e).slice(8,-1),or=e=>Ut(e)==="[object Object]",Ro=e=>X(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,at=Oo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vt=e=>{const t=Object.create(null);return o=>t[o]||(t[o]=e(o))},ia=/-(\w)/g,et=Vt(e=>e.replace(ia,(t,o)=>o?o.toUpperCase():"")),la=/\B([A-Z])/g,ot=Vt(e=>e.replace(la,"-$1").toLowerCase()),sr=Vt(e=>e.charAt(0).toUpperCase()+e.slice(1)),lo=Vt(e=>e?`on${sr(e)}`:""),He=(e,t)=>!Object.is(e,t),ao=(e,...t)=>{for(let o=0;o<e.length;o++)e[o](...t)},rr=(e,t,o,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:o})},aa=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ps;const nr=()=>ps||(ps=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function jo(e){if(S(e)){const t={};for(let o=0;o<e.length;o++){const s=e[o],r=X(s)?pa(s):jo(s);if(r)for(const n in r)t[n]=r[n]}return t}else if(X(e)||G(e))return e}const ca=/;(?![^(]*\))/g,da=/:([^]+)/,fa=/\/\*[^]*?\*\//g;function pa(e){const t={};return e.replace(fa,"").split(ca).forEach(o=>{if(o){const s=o.split(da);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Fo(e){let t="";if(X(e))t=e;else if(S(e))for(let o=0;o<e.length;o++){const s=Fo(e[o]);s&&(t+=s+" ")}else if(G(e))for(const o in e)e[o]&&(t+=o+" ");return t.trim()}const ua="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ha=Oo(ua);function ir(e){return!!e||e===""}const qt=e=>X(e)?e:e==null?"":S(e)||G(e)&&(e.toString===tr||!q(e.toString))?JSON.stringify(e,lr,2):String(e),lr=(e,t)=>t&&t.__v_isRef?lr(e,t.value):Je(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((o,[s,r],n)=>(o[co(s,n)+" =>"]=r,o),{})}:Qs(t)?{[`Set(${t.size})`]:[...t.values()].map(o=>co(o))}:Ne(t)?co(t):G(t)&&!S(t)&&!or(t)?String(t):t,co=(e,t="")=>{var o;return Ne(e)?`Symbol(${(o=e.description)!=null?o:t})`:e};/**
* @vue/reactivity v3.4.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let he;class ma{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=he,!t&&he&&(this.index=(he.scopes||(he.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const o=he;try{return he=this,t()}finally{he=o}}}on(){he=this}off(){he=this.parent}stop(t){if(this._active){let o,s;for(o=0,s=this.effects.length;o<s;o++)this.effects[o].stop();for(o=0,s=this.cleanups.length;o<s;o++)this.cleanups[o]();if(this.scopes)for(o=0,s=this.scopes.length;o<s;o++)this.scopes[o].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function ga(e,t=he){t&&t.active&&t.effects.push(e)}function xa(){return he}let Ue;class Bo{constructor(t,o,s,r){this.fn=t,this.trigger=o,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=5,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,ga(this,r)}get dirty(){if(this._dirtyLevel===2)return!1;if(this._dirtyLevel===3||this._dirtyLevel===4){this._dirtyLevel=1,Re();for(let t=0;t<this._depsLength;t++){const o=this.deps[t];if(o.computed){if(o.computed.effect._dirtyLevel===2)return Le(),!0;if(va(o.computed),this._dirtyLevel>=5)break}}this._dirtyLevel===1&&(this._dirtyLevel=0),Le()}return this._dirtyLevel>=5}set dirty(t){this._dirtyLevel=t?5:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=ze,o=Ue;try{return ze=!0,Ue=this,this._runnings++,us(this),this.fn()}finally{hs(this),this._runnings--,Ue=o,ze=t}}stop(){this.active&&(us(this),hs(this),this.onStop&&this.onStop(),this.active=!1)}}function va(e){return e.value}function us(e){e._trackId++,e._depsLength=0}function hs(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)ar(e.deps[t],e);e.deps.length=e._depsLength}}function ar(e,t){const o=e.get(t);o!==void 0&&t._trackId!==o&&(e.delete(t),e.size===0&&e.cleanup())}let ze=!0,_o=0;const cr=[];function Re(){cr.push(ze),ze=!1}function Le(){const e=cr.pop();ze=e===void 0?!0:e}function Do(){_o++}function Wo(){for(_o--;!_o&&ko.length;)ko.shift()()}function dr(e,t,o){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const s=e.deps[e._depsLength];s!==t?(s&&ar(s,e),e.deps[e._depsLength++]=t):e._depsLength++}}const ko=[];function fr(e,t,o){Do();for(const s of e.keys()){let r;if(!e.computed&&s.computed&&s._runnings>0&&(r??(r=e.get(s)===s._trackId))){s._dirtyLevel=2;continue}s._dirtyLevel<t&&(r??(r=e.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s.computed&&s._dirtyLevel===2&&(s._shouldSchedule=!0),s._dirtyLevel=t),s._shouldSchedule&&(r??(r=e.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==3&&(s._shouldSchedule=!1,s.scheduler&&ko.push(s.scheduler)))}Wo()}const pr=(e,t)=>{const o=new Map;return o.cleanup=e,o.computed=t,o},$o=new WeakMap,Ve=Symbol(""),Co=Symbol("");function ie(e,t,o){if(ze&&Ue){let s=$o.get(e);s||$o.set(e,s=new Map);let r=s.get(o);r||s.set(o,r=pr(()=>s.delete(o))),dr(Ue,r)}}function Se(e,t,o,s,r,n){const i=$o.get(e);if(!i)return;let l=[];if(t==="clear")l=[...i.values()];else if(o==="length"&&S(e)){const a=Number(s);i.forEach((f,c)=>{(c==="length"||!Ne(c)&&c>=a)&&l.push(f)})}else switch(o!==void 0&&l.push(i.get(o)),t){case"add":S(e)?Ro(o)&&l.push(i.get("length")):(l.push(i.get(Ve)),Je(e)&&l.push(i.get(Co)));break;case"delete":S(e)||(l.push(i.get(Ve)),Je(e)&&l.push(i.get(Co)));break;case"set":Je(e)&&l.push(i.get(Ve));break}Do();for(const a of l)a&&fr(a,5);Wo()}const ba=Oo("__proto__,__v_isRef,__isVue"),ur=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ne)),ms=ya();function ya(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...o){const s=F(this);for(let n=0,i=this.length;n<i;n++)ie(s,"get",n+"");const r=s[t](...o);return r===-1||r===!1?s[t](...o.map(F)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...o){Re(),Do();const s=F(this)[t].apply(this,o);return Wo(),Le(),s}}),e}function wa(e){Ne(e)||(e=String(e));const t=F(this);return ie(t,"has",e),t.hasOwnProperty(e)}class hr{constructor(t=!1,o=!1){this._isReadonly=t,this._isShallow=o}get(t,o,s){const r=this._isReadonly,n=this._isShallow;if(o==="__v_isReactive")return!r;if(o==="__v_isReadonly")return r;if(o==="__v_isShallow")return n;if(o==="__v_raw")return s===(r?n?za:vr:n?xr:gr).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const i=S(t);if(!r){if(i&&H(ms,o))return Reflect.get(ms,o,s);if(o==="hasOwnProperty")return wa}const l=Reflect.get(t,o,s);return(Ne(o)?ur.has(o):ba(o))||(r||ie(t,"get",o),n)?l:le(l)?i&&Ro(o)?l:l.value:G(l)?r?br(l):Vo(l):l}}class mr extends hr{constructor(t=!1){super(!1,t)}set(t,o,s,r){let n=t[o];if(!this._isShallow){const a=ut(n);if(!Rt(s)&&!ut(s)&&(n=F(n),s=F(s)),!S(t)&&le(n)&&!le(s))return a?!1:(n.value=s,!0)}const i=S(t)&&Ro(o)?Number(o)<t.length:H(t,o),l=Reflect.set(t,o,s,r);return t===F(r)&&(i?He(s,n)&&Se(t,"set",o,s):Se(t,"add",o,s)),l}deleteProperty(t,o){const s=H(t,o);t[o];const r=Reflect.deleteProperty(t,o);return r&&s&&Se(t,"delete",o,void 0),r}has(t,o){const s=Reflect.has(t,o);return(!Ne(o)||!ur.has(o))&&ie(t,"has",o),s}ownKeys(t){return ie(t,"iterate",S(t)?"length":Ve),Reflect.ownKeys(t)}}class _a extends hr{constructor(t=!1){super(!0,t)}set(t,o){return!0}deleteProperty(t,o){return!0}}const ka=new mr,$a=new _a,Ca=new mr(!0);const Zo=e=>e,Kt=e=>Reflect.getPrototypeOf(e);function Et(e,t,o=!1,s=!1){e=e.__v_raw;const r=F(e),n=F(t);o||(He(t,n)&&ie(r,"get",t),ie(r,"get",n));const{has:i}=Kt(r),l=s?Zo:o?Go:ht;if(i.call(r,t))return l(e.get(t));if(i.call(r,n))return l(e.get(n));e!==r&&e.get(t)}function Tt(e,t=!1){const o=this.__v_raw,s=F(o),r=F(e);return t||(He(e,r)&&ie(s,"has",e),ie(s,"has",r)),e===r?o.has(e):o.has(e)||o.has(r)}function St(e,t=!1){return e=e.__v_raw,!t&&ie(F(e),"iterate",Ve),Reflect.get(e,"size",e)}function gs(e){e=F(e);const t=F(this);return Kt(t).has.call(t,e)||(t.add(e),Se(t,"add",e,e)),this}function xs(e,t){t=F(t);const o=F(this),{has:s,get:r}=Kt(o);let n=s.call(o,e);n||(e=F(e),n=s.call(o,e));const i=r.call(o,e);return o.set(e,t),n?He(t,i)&&Se(o,"set",e,t):Se(o,"add",e,t),this}function vs(e){const t=F(this),{has:o,get:s}=Kt(t);let r=o.call(t,e);r||(e=F(e),r=o.call(t,e)),s&&s.call(t,e);const n=t.delete(e);return r&&Se(t,"delete",e,void 0),n}function bs(){const e=F(this),t=e.size!==0,o=e.clear();return t&&Se(e,"clear",void 0,void 0),o}function Lt(e,t){return function(s,r){const n=this,i=n.__v_raw,l=F(i),a=t?Zo:e?Go:ht;return!e&&ie(l,"iterate",Ve),i.forEach((f,c)=>s.call(r,a(f),a(c),n))}}function Mt(e,t,o){return function(...s){const r=this.__v_raw,n=F(r),i=Je(n),l=e==="entries"||e===Symbol.iterator&&i,a=e==="keys"&&i,f=r[e](...s),c=o?Zo:t?Go:ht;return!t&&ie(n,"iterate",a?Co:Ve),{next(){const{value:m,done:h}=f.next();return h?{value:m,done:h}:{value:l?[c(m[0]),c(m[1])]:c(m),done:h}},[Symbol.iterator](){return this}}}}function Ae(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Ea(){const e={get(n){return Et(this,n)},get size(){return St(this)},has:Tt,add:gs,set:xs,delete:vs,clear:bs,forEach:Lt(!1,!1)},t={get(n){return Et(this,n,!1,!0)},get size(){return St(this)},has:Tt,add:gs,set:xs,delete:vs,clear:bs,forEach:Lt(!1,!0)},o={get(n){return Et(this,n,!0)},get size(){return St(this,!0)},has(n){return Tt.call(this,n,!0)},add:Ae("add"),set:Ae("set"),delete:Ae("delete"),clear:Ae("clear"),forEach:Lt(!0,!1)},s={get(n){return Et(this,n,!0,!0)},get size(){return St(this,!0)},has(n){return Tt.call(this,n,!0)},add:Ae("add"),set:Ae("set"),delete:Ae("delete"),clear:Ae("clear"),forEach:Lt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(n=>{e[n]=Mt(n,!1,!1),o[n]=Mt(n,!0,!1),t[n]=Mt(n,!1,!0),s[n]=Mt(n,!0,!0)}),[e,o,t,s]}const[Ta,Sa,La,Ma]=Ea();function Uo(e,t){const o=t?e?Ma:La:e?Sa:Ta;return(s,r,n)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(H(o,r)&&r in s?o:s,r,n)}const Aa={get:Uo(!1,!1)},Ia={get:Uo(!1,!0)},qa={get:Uo(!0,!1)};const gr=new WeakMap,xr=new WeakMap,vr=new WeakMap,za=new WeakMap;function Pa(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Oa(e){return e.__v_skip||!Object.isExtensible(e)?0:Pa(na(e))}function Vo(e){return ut(e)?e:Ko(e,!1,ka,Aa,gr)}function Ha(e){return Ko(e,!1,Ca,Ia,xr)}function br(e){return Ko(e,!0,$a,qa,vr)}function Ko(e,t,o,s,r){if(!G(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const n=r.get(e);if(n)return n;const i=Oa(e);if(i===0)return e;const l=new Proxy(e,i===2?s:o);return r.set(e,l),l}function ct(e){return ut(e)?ct(e.__v_raw):!!(e&&e.__v_isReactive)}function ut(e){return!!(e&&e.__v_isReadonly)}function Rt(e){return!!(e&&e.__v_isShallow)}function yr(e){return e?!!e.__v_raw:!1}function F(e){const t=e&&e.__v_raw;return t?F(t):e}function Na(e){return Object.isExtensible(e)&&rr(e,"__v_skip",!0),e}const ht=e=>G(e)?Vo(e):e,Go=e=>G(e)?br(e):e;class wr{constructor(t,o,s,r){this.getter=t,this._setter=o,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Bo(()=>t(this._value),()=>zt(this,this.effect._dirtyLevel===3?3:4)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const t=F(this),o=t.effect._dirtyLevel;return(!t._cacheable||t.effect.dirty)&&He(t._value,t._value=t.effect.run())&&o!==3&&zt(t,5),_r(t),t.effect._dirtyLevel>=2&&zt(t,3),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function Ra(e,t,o=!1){let s,r;const n=q(e);return n?(s=e,r=pe):(s=e.get,r=e.set),new wr(s,r,n||!r,o)}function _r(e){var t;ze&&Ue&&(e=F(e),dr(Ue,(t=e.dep)!=null?t:e.dep=pr(()=>e.dep=void 0,e instanceof wr?e:void 0)))}function zt(e,t=5,o,s){e=F(e);const r=e.dep;r&&fr(r,t)}function le(e){return!!(e&&e.__v_isRef===!0)}function ys(e){return ja(e,!1)}function ja(e,t){return le(e)?e:new Fa(e,t)}class Fa{constructor(t,o){this.__v_isShallow=o,this.dep=void 0,this.__v_isRef=!0,this._rawValue=o?t:F(t),this._value=o?t:ht(t)}get value(){return _r(this),this._value}set value(t){const o=this.__v_isShallow||Rt(t)||ut(t);t=o?t:F(t),He(t,this._rawValue)&&(this._rawValue,this._rawValue=t,this._value=o?t:ht(t),zt(this,5))}}function kr(e){return le(e)?e.value:e}const Ba={get:(e,t,o)=>kr(Reflect.get(e,t,o)),set:(e,t,o,s)=>{const r=e[t];return le(r)&&!le(o)?(r.value=o,!0):Reflect.set(e,t,o,s)}};function $r(e){return ct(e)?e:new Proxy(e,Ba)}/**
* @vue/runtime-core v3.4.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Pe(e,t,o,s){try{return s?e(...s):e()}catch(r){Gt(r,t,o)}}function xe(e,t,o,s){if(q(e)){const r=Pe(e,t,o,s);return r&&er(r)&&r.catch(n=>{Gt(n,t,o)}),r}if(S(e)){const r=[];for(let n=0;n<e.length;n++)r.push(xe(e[n],t,o,s));return r}}function Gt(e,t,o,s=!0){const r=t?t.vnode:null;if(t){let n=t.parent;const i=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${o}`;for(;n;){const f=n.ec;if(f){for(let c=0;c<f.length;c++)if(f[c](e,i,l)===!1)return}n=n.parent}const a=t.appContext.config.errorHandler;if(a){Re(),Pe(a,null,10,[e,i,l]),Le();return}}Da(e,o,r,s)}function Da(e,t,o,s=!0){console.error(e)}let mt=!1,Eo=!1;const ee=[];let ke=0;const Qe=[];let Ie=null,We=0;const Cr=Promise.resolve();let Xo=null;function Wa(e){const t=Xo||Cr;return e?t.then(this?e.bind(this):e):t}function Za(e){let t=ke+1,o=ee.length;for(;t<o;){const s=t+o>>>1,r=ee[s],n=gt(r);n<e||n===e&&r.pre?t=s+1:o=s}return t}function Yo(e){(!ee.length||!ee.includes(e,mt&&e.allowRecurse?ke+1:ke))&&(e.id==null?ee.push(e):ee.splice(Za(e.id),0,e),Er())}function Er(){!mt&&!Eo&&(Eo=!0,Xo=Cr.then(Sr))}function Ua(e){const t=ee.indexOf(e);t>ke&&ee.splice(t,1)}function Va(e){S(e)?Qe.push(...e):(!Ie||!Ie.includes(e,e.allowRecurse?We+1:We))&&Qe.push(e),Er()}function ws(e,t,o=mt?ke+1:0){for(;o<ee.length;o++){const s=ee[o];if(s&&s.pre){if(e&&s.id!==e.uid)continue;ee.splice(o,1),o--,s()}}}function Tr(e){if(Qe.length){const t=[...new Set(Qe)].sort((o,s)=>gt(o)-gt(s));if(Qe.length=0,Ie){Ie.push(...t);return}for(Ie=t,We=0;We<Ie.length;We++){const o=Ie[We];o.active!==!1&&o()}Ie=null,We=0}}const gt=e=>e.id==null?1/0:e.id,Ka=(e,t)=>{const o=gt(e)-gt(t);if(o===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return o};function Sr(e){Eo=!1,mt=!0,ee.sort(Ka);try{for(ke=0;ke<ee.length;ke++){const t=ee[ke];t&&t.active!==!1&&Pe(t,null,14)}}finally{ke=0,ee.length=0,Tr(),mt=!1,Xo=null,(ee.length||Qe.length)&&Sr()}}function Ga(e,t,...o){if(e.isUnmounted)return;const s=e.vnode.props||U;let r=o;const n=t.startsWith("update:"),i=n&&t.slice(7);if(i&&i in s){const c=`${i==="modelValue"?"model":i}Modifiers`,{number:m,trim:h}=s[c]||U;h&&(r=o.map(b=>X(b)?b.trim():b)),m&&(r=o.map(aa))}let l,a=s[l=lo(t)]||s[l=lo(et(t))];!a&&n&&(a=s[l=lo(ot(t))]),a&&xe(a,e,6,r);const f=s[l+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,xe(f,e,6,r)}}function Lr(e,t,o=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const n=e.emits;let i={},l=!1;if(!q(e)){const a=f=>{const c=Lr(f,t,!0);c&&(l=!0,Q(i,c))};!o&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!n&&!l?(G(e)&&s.set(e,null),null):(S(n)?n.forEach(a=>i[a]=null):Q(i,n),G(e)&&s.set(e,i),i)}function Xt(e,t){return!e||!Zt(t)?!1:(t=t.slice(2).replace(/Once$/,""),H(e,t[0].toLowerCase()+t.slice(1))||H(e,ot(t))||H(e,t))}let $e=null,Yt=null;function jt(e){const t=$e;return $e=e,Yt=e&&e.type.__scopeId||null,t}function Mr(e){Yt=e}function Ar(){Yt=null}function Xa(e,t=$e,o){if(!t||e._n)return e;const s=(...r)=>{s._d&&Is(-1);const n=jt(t);let i;try{i=e(...r)}finally{jt(n),s._d&&Is(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function fo(e){const{type:t,vnode:o,proxy:s,withProxy:r,propsOptions:[n],slots:i,attrs:l,emit:a,render:f,renderCache:c,props:m,data:h,setupState:b,ctx:L,inheritAttrs:C}=e,N=jt(e);let W,Z;try{if(o.shapeFlag&4){const V=r||s,Y=V;W=_e(f.call(Y,V,c,m,b,h,L)),Z=l}else{const V=t;W=_e(V.length>1?V(m,{attrs:l,slots:i,emit:a}):V(m,null)),Z=t.props?l:Ya(l)}}catch(V){pt.length=0,Gt(V,e,1),W=Oe(xt)}let R=W;if(Z&&C!==!1){const V=Object.keys(Z),{shapeFlag:Y}=R;V.length&&Y&7&&(n&&V.some(Ho)&&(Z=Ja(Z,n)),R=tt(R,Z,!1,!0))}return o.dirs&&(R=tt(R,null,!1,!0),R.dirs=R.dirs?R.dirs.concat(o.dirs):o.dirs),o.transition&&(R.transition=o.transition),W=R,jt(N),W}const Ya=e=>{let t;for(const o in e)(o==="class"||o==="style"||Zt(o))&&((t||(t={}))[o]=e[o]);return t},Ja=(e,t)=>{const o={};for(const s in e)(!Ho(s)||!(s.slice(9)in t))&&(o[s]=e[s]);return o};function Qa(e,t,o){const{props:s,children:r,component:n}=e,{props:i,children:l,patchFlag:a}=t,f=n.emitsOptions;if(t.dirs||t.transition)return!0;if(o&&a>=0){if(a&1024)return!0;if(a&16)return s?_s(s,i,f):!!i;if(a&8){const c=t.dynamicProps;for(let m=0;m<c.length;m++){const h=c[m];if(i[h]!==s[h]&&!Xt(f,h))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===i?!1:s?i?_s(s,i,f):!0:!!i;return!1}function _s(e,t,o){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const n=s[r];if(t[n]!==e[n]&&!Xt(o,n))return!0}return!1}function ec({vnode:e,parent:t},o){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=o,t=t.parent;else break}}const tc=Symbol.for("v-ndc"),oc=e=>e.__isSuspense;function sc(e,t){t&&t.pendingBranch?S(e)?t.effects.push(...e):t.effects.push(e):Va(e)}function Jt(e,t,o=se,s=!1){if(o){const r=o[e]||(o[e]=[]),n=t.__weh||(t.__weh=(...i)=>{Re();const l=bt(o),a=xe(t,o,e,i);return l(),Le(),a});return s?r.unshift(n):r.push(n),n}}const Me=e=>(t,o=se)=>{(!eo||e==="sp")&&Jt(e,(...s)=>t(...s),o)},rc=Me("bm"),nc=Me("m"),ic=Me("bu"),lc=Me("u"),ac=Me("bum"),Ir=Me("um"),cc=Me("sp"),dc=Me("rtg"),fc=Me("rtc");function pc(e,t=se){Jt("ec",e,t)}function Be(e,t,o,s){const r=e.dirs,n=t&&t.dirs;for(let i=0;i<r.length;i++){const l=r[i];n&&(l.oldValue=n[i].value);let a=l.dir[s];a&&(Re(),xe(a,o,8,[e.el,l,e,t]),Le())}}function qr(e,t,o,s){let r;const n=o;if(S(e)||X(e)){r=new Array(e.length);for(let i=0,l=e.length;i<l;i++)r[i]=t(e[i],i,void 0,n)}else if(typeof e=="number"){r=new Array(e);for(let i=0;i<e;i++)r[i]=t(i+1,i,void 0,n)}else if(G(e))if(e[Symbol.iterator])r=Array.from(e,(i,l)=>t(i,l,void 0,n));else{const i=Object.keys(e);r=new Array(i.length);for(let l=0,a=i.length;l<a;l++){const f=i[l];r[l]=t(e[f],f,l,n)}}else r=[];return r}const Pt=e=>!!e.type.__asyncLoader,To=e=>e?Qr(e)?ts(e):To(e.parent):null,dt=Q(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>To(e.parent),$root:e=>To(e.root),$emit:e=>e.emit,$options:e=>Jo(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,Yo(e.update)}),$nextTick:e=>e.n||(e.n=Wa.bind(e.proxy)),$watch:e=>qc.bind(e)}),po=(e,t)=>e!==U&&!e.__isScriptSetup&&H(e,t),uc={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:o,setupState:s,data:r,props:n,accessCache:i,type:l,appContext:a}=e;let f;if(t[0]!=="$"){const b=i[t];if(b!==void 0)switch(b){case 1:return s[t];case 2:return r[t];case 4:return o[t];case 3:return n[t]}else{if(po(s,t))return i[t]=1,s[t];if(r!==U&&H(r,t))return i[t]=2,r[t];if((f=e.propsOptions[0])&&H(f,t))return i[t]=3,n[t];if(o!==U&&H(o,t))return i[t]=4,o[t];So&&(i[t]=0)}}const c=dt[t];let m,h;if(c)return t==="$attrs"&&ie(e.attrs,"get",""),c(e);if((m=l.__cssModules)&&(m=m[t]))return m;if(o!==U&&H(o,t))return i[t]=4,o[t];if(h=a.config.globalProperties,H(h,t))return h[t]},set({_:e},t,o){const{data:s,setupState:r,ctx:n}=e;return po(r,t)?(r[t]=o,!0):s!==U&&H(s,t)?(s[t]=o,!0):H(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(n[t]=o,!0)},has({_:{data:e,setupState:t,accessCache:o,ctx:s,appContext:r,propsOptions:n}},i){let l;return!!o[i]||e!==U&&H(e,i)||po(t,i)||(l=n[0])&&H(l,i)||H(s,i)||H(dt,i)||H(r.config.globalProperties,i)},defineProperty(e,t,o){return o.get!=null?e._.accessCache[t]=0:H(o,"value")&&this.set(e,t,o.value,null),Reflect.defineProperty(e,t,o)}};function ks(e){return S(e)?e.reduce((t,o)=>(t[o]=null,t),{}):e}let So=!0;function hc(e){const t=Jo(e),o=e.proxy,s=e.ctx;So=!1,t.beforeCreate&&$s(t.beforeCreate,e,"bc");const{data:r,computed:n,methods:i,watch:l,provide:a,inject:f,created:c,beforeMount:m,mounted:h,beforeUpdate:b,updated:L,activated:C,deactivated:N,beforeDestroy:W,beforeUnmount:Z,destroyed:R,unmounted:V,render:Y,renderTracked:O,renderTriggered:de,errorCaptured:ae,serverPrefetch:Ke,expose:ve,inheritAttrs:st,components:wt,directives:_t,filters:oo}=t;if(f&&mc(f,s,null),i)for(const K in i){const B=i[K];q(B)&&(s[K]=B.bind(o))}if(r){const K=r.call(o,o);G(K)&&(e.data=Vo(K))}if(So=!0,n)for(const K in n){const B=n[K],je=q(B)?B.bind(o,o):q(B.get)?B.get.bind(o,o):pe,kt=!q(B)&&q(B.set)?B.set.bind(o):pe,Fe=Jc({get:je,set:kt});Object.defineProperty(s,K,{enumerable:!0,configurable:!0,get:()=>Fe.value,set:be=>Fe.value=be})}if(l)for(const K in l)zr(l[K],s,o,K);if(a){const K=q(a)?a.call(o):a;Reflect.ownKeys(K).forEach(B=>{wc(B,K[B])})}c&&$s(c,e,"c");function te(K,B){S(B)?B.forEach(je=>K(je.bind(o))):B&&K(B.bind(o))}if(te(rc,m),te(nc,h),te(ic,b),te(lc,L),te(zc,C),te(Pc,N),te(pc,ae),te(fc,O),te(dc,de),te(ac,Z),te(Ir,V),te(cc,Ke),S(ve))if(ve.length){const K=e.exposed||(e.exposed={});ve.forEach(B=>{Object.defineProperty(K,B,{get:()=>o[B],set:je=>o[B]=je})})}else e.exposed||(e.exposed={});Y&&e.render===pe&&(e.render=Y),st!=null&&(e.inheritAttrs=st),wt&&(e.components=wt),_t&&(e.directives=_t)}function mc(e,t,o=pe){S(e)&&(e=Lo(e));for(const s in e){const r=e[s];let n;G(r)?"default"in r?n=Ot(r.from||s,r.default,!0):n=Ot(r.from||s):n=Ot(r),le(n)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>n.value,set:i=>n.value=i}):t[s]=n}}function $s(e,t,o){xe(S(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,o)}function zr(e,t,o,s){const r=s.includes(".")?Vr(o,s):()=>o[s];if(X(e)){const n=t[e];q(n)&&ho(r,n)}else if(q(e))ho(r,e.bind(o));else if(G(e))if(S(e))e.forEach(n=>zr(n,t,o,s));else{const n=q(e.handler)?e.handler.bind(o):t[e.handler];q(n)&&ho(r,n,e)}}function Jo(e){const t=e.type,{mixins:o,extends:s}=t,{mixins:r,optionsCache:n,config:{optionMergeStrategies:i}}=e.appContext,l=n.get(t);let a;return l?a=l:!r.length&&!o&&!s?a=t:(a={},r.length&&r.forEach(f=>Ft(a,f,i,!0)),Ft(a,t,i)),G(t)&&n.set(t,a),a}function Ft(e,t,o,s=!1){const{mixins:r,extends:n}=t;n&&Ft(e,n,o,!0),r&&r.forEach(i=>Ft(e,i,o,!0));for(const i in t)if(!(s&&i==="expose")){const l=gc[i]||o&&o[i];e[i]=l?l(e[i],t[i]):t[i]}return e}const gc={data:Cs,props:Es,emits:Es,methods:lt,computed:lt,beforeCreate:oe,created:oe,beforeMount:oe,mounted:oe,beforeUpdate:oe,updated:oe,beforeDestroy:oe,beforeUnmount:oe,destroyed:oe,unmounted:oe,activated:oe,deactivated:oe,errorCaptured:oe,serverPrefetch:oe,components:lt,directives:lt,watch:vc,provide:Cs,inject:xc};function Cs(e,t){return t?e?function(){return Q(q(e)?e.call(this,this):e,q(t)?t.call(this,this):t)}:t:e}function xc(e,t){return lt(Lo(e),Lo(t))}function Lo(e){if(S(e)){const t={};for(let o=0;o<e.length;o++)t[e[o]]=e[o];return t}return e}function oe(e,t){return e?[...new Set([].concat(e,t))]:t}function lt(e,t){return e?Q(Object.create(null),e,t):t}function Es(e,t){return e?S(e)&&S(t)?[...new Set([...e,...t])]:Q(Object.create(null),ks(e),ks(t??{})):t}function vc(e,t){if(!e)return t;if(!t)return e;const o=Q(Object.create(null),e);for(const s in t)o[s]=oe(e[s],t[s]);return o}function Pr(){return{app:null,config:{isNativeTag:sa,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let bc=0;function yc(e,t){return function(s,r=null){q(s)||(s=Q({},s)),r!=null&&!G(r)&&(r=null);const n=Pr(),i=new WeakSet;let l=!1;const a=n.app={_uid:bc++,_component:s,_props:r,_container:null,_context:n,_instance:null,version:Qc,get config(){return n.config},set config(f){},use(f,...c){return i.has(f)||(f&&q(f.install)?(i.add(f),f.install(a,...c)):q(f)&&(i.add(f),f(a,...c))),a},mixin(f){return n.mixins.includes(f)||n.mixins.push(f),a},component(f,c){return c?(n.components[f]=c,a):n.components[f]},directive(f,c){return c?(n.directives[f]=c,a):n.directives[f]},mount(f,c,m){if(!l){const h=Oe(s,r);return h.appContext=n,m===!0?m="svg":m===!1&&(m=void 0),c&&t?t(h,f):e(h,f,m),l=!0,a._container=f,f.__vue_app__=a,ts(h.component)}},unmount(){l&&(e(null,a._container),delete a._container.__vue_app__)},provide(f,c){return n.provides[f]=c,a},runWithContext(f){const c=ft;ft=a;try{return f()}finally{ft=c}}};return a}}let ft=null;function wc(e,t){if(se){let o=se.provides;const s=se.parent&&se.parent.provides;s===o&&(o=se.provides=Object.create(s)),o[e]=t}}function Ot(e,t,o=!1){const s=se||$e;if(s||ft){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:ft._context.provides;if(r&&e in r)return r[e];if(arguments.length>1)return o&&q(t)?t.call(s&&s.proxy):t}}const Or={},Hr=()=>Object.create(Or),Nr=e=>Object.getPrototypeOf(e)===Or;function _c(e,t,o,s=!1){const r={},n=Hr();e.propsDefaults=Object.create(null),Rr(e,t,r,n);for(const i in e.propsOptions[0])i in r||(r[i]=void 0);o?e.props=s?r:Ha(r):e.type.props?e.props=r:e.props=n,e.attrs=n}function kc(e,t,o,s){const{props:r,attrs:n,vnode:{patchFlag:i}}=e,l=F(r),[a]=e.propsOptions;let f=!1;if((s||i>0)&&!(i&16)){if(i&8){const c=e.vnode.dynamicProps;for(let m=0;m<c.length;m++){let h=c[m];if(Xt(e.emitsOptions,h))continue;const b=t[h];if(a)if(H(n,h))b!==n[h]&&(n[h]=b,f=!0);else{const L=et(h);r[L]=Mo(a,l,L,b,e,!1)}else b!==n[h]&&(n[h]=b,f=!0)}}}else{Rr(e,t,r,n)&&(f=!0);let c;for(const m in l)(!t||!H(t,m)&&((c=ot(m))===m||!H(t,c)))&&(a?o&&(o[m]!==void 0||o[c]!==void 0)&&(r[m]=Mo(a,l,m,void 0,e,!0)):delete r[m]);if(n!==l)for(const m in n)(!t||!H(t,m))&&(delete n[m],f=!0)}f&&Se(e.attrs,"set","")}function Rr(e,t,o,s){const[r,n]=e.propsOptions;let i=!1,l;if(t)for(let a in t){if(at(a))continue;const f=t[a];let c;r&&H(r,c=et(a))?!n||!n.includes(c)?o[c]=f:(l||(l={}))[c]=f:Xt(e.emitsOptions,a)||(!(a in s)||f!==s[a])&&(s[a]=f,i=!0)}if(n){const a=F(o),f=l||U;for(let c=0;c<n.length;c++){const m=n[c];o[m]=Mo(r,a,m,f[m],e,!H(f,m))}}return i}function Mo(e,t,o,s,r,n){const i=e[o];if(i!=null){const l=H(i,"default");if(l&&s===void 0){const a=i.default;if(i.type!==Function&&!i.skipFactory&&q(a)){const{propsDefaults:f}=r;if(o in f)s=f[o];else{const c=bt(r);s=f[o]=a.call(null,t),c()}}else s=a}i[0]&&(n&&!l?s=!1:i[1]&&(s===""||s===ot(o))&&(s=!0))}return s}function jr(e,t,o=!1){const s=t.propsCache,r=s.get(e);if(r)return r;const n=e.props,i={},l=[];let a=!1;if(!q(e)){const c=m=>{a=!0;const[h,b]=jr(m,t,!0);Q(i,h),b&&l.push(...b)};!o&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!n&&!a)return G(e)&&s.set(e,Ye),Ye;if(S(n))for(let c=0;c<n.length;c++){const m=et(n[c]);Ts(m)&&(i[m]=U)}else if(n)for(const c in n){const m=et(c);if(Ts(m)){const h=n[c],b=i[m]=S(h)||q(h)?{type:h}:Q({},h);if(b){const L=Ms(Boolean,b.type),C=Ms(String,b.type);b[0]=L>-1,b[1]=C<0||L<C,(L>-1||H(b,"default"))&&l.push(m)}}}const f=[i,l];return G(e)&&s.set(e,f),f}function Ts(e){return e[0]!=="$"&&!at(e)}function Ss(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function Ls(e,t){return Ss(e)===Ss(t)}function Ms(e,t){return S(t)?t.findIndex(o=>Ls(o,e)):q(t)&&Ls(t,e)?0:-1}const Fr=e=>e[0]==="_"||e==="$stable",Qo=e=>S(e)?e.map(_e):[_e(e)],$c=(e,t,o)=>{if(t._n)return t;const s=Xa((...r)=>Qo(t(...r)),o);return s._c=!1,s},Br=(e,t,o)=>{const s=e._ctx;for(const r in e){if(Fr(r))continue;const n=e[r];if(q(n))t[r]=$c(r,n,s);else if(n!=null){const i=Qo(n);t[r]=()=>i}}},Dr=(e,t)=>{const o=Qo(t);e.slots.default=()=>o},Cc=(e,t)=>{const o=e.slots=Hr();if(e.vnode.shapeFlag&32){const s=t._;s?(Q(o,t),rr(o,"_",s,!0)):Br(t,o)}else t&&Dr(e,t)},Ec=(e,t,o)=>{const{vnode:s,slots:r}=e;let n=!0,i=U;if(s.shapeFlag&32){const l=t._;l?o&&l===1?n=!1:(Q(r,t),!o&&l===1&&delete r._):(n=!t.$stable,Br(t,r)),i=t}else t&&(Dr(e,t),i={default:1});if(n)for(const l in r)!Fr(l)&&i[l]==null&&delete r[l]};function Ao(e,t,o,s,r=!1){if(S(e)){e.forEach((h,b)=>Ao(h,t&&(S(t)?t[b]:t),o,s,r));return}if(Pt(s)&&!r)return;const n=s.shapeFlag&4?ts(s.component):s.el,i=r?null:n,{i:l,r:a}=e,f=t&&t.r,c=l.refs===U?l.refs={}:l.refs,m=l.setupState;if(f!=null&&f!==a&&(X(f)?(c[f]=null,H(m,f)&&(m[f]=null)):le(f)&&(f.value=null)),q(a))Pe(a,l,12,[i,c]);else{const h=X(a),b=le(a);if(h||b){const L=()=>{if(e.f){const C=h?H(m,a)?m[a]:c[a]:a.value;r?S(C)&&No(C,n):S(C)?C.includes(n)||C.push(n):h?(c[a]=[n],H(m,a)&&(m[a]=c[a])):(a.value=[n],e.k&&(c[e.k]=a.value))}else h?(c[a]=i,H(m,a)&&(m[a]=i)):b&&(a.value=i,e.k&&(c[e.k]=i))};i?(L.id=-1,re(L,o)):L()}}}const re=sc;function Tc(e){return Sc(e)}function Sc(e,t){const o=nr();o.__VUE__=!0;const{insert:s,remove:r,patchProp:n,createElement:i,createText:l,createComment:a,setText:f,setElementText:c,parentNode:m,nextSibling:h,setScopeId:b=pe,insertStaticContent:L}=e,C=(d,p,u,g=null,x=null,w=null,k=void 0,y=null,_=!!p.dynamicChildren)=>{if(d===p)return;d&&!it(d,p)&&(g=$t(d),be(d,x,w,!0),d=null),p.patchFlag===-2&&(_=!1,p.dynamicChildren=null);const{type:v,ref:$,shapeFlag:T}=p;switch(v){case Qt:N(d,p,u,g);break;case xt:W(d,p,u,g);break;case mo:d==null&&Z(p,u,g,k);break;case fe:wt(d,p,u,g,x,w,k,y,_);break;default:T&1?Y(d,p,u,g,x,w,k,y,_):T&6?_t(d,p,u,g,x,w,k,y,_):(T&64||T&128)&&v.process(d,p,u,g,x,w,k,y,_,rt)}$!=null&&x&&Ao($,d&&d.ref,w,p||d,!p)},N=(d,p,u,g)=>{if(d==null)s(p.el=l(p.children),u,g);else{const x=p.el=d.el;p.children!==d.children&&f(x,p.children)}},W=(d,p,u,g)=>{d==null?s(p.el=a(p.children||""),u,g):p.el=d.el},Z=(d,p,u,g)=>{[d.el,d.anchor]=L(d.children,p,u,g,d.el,d.anchor)},R=({el:d,anchor:p},u,g)=>{let x;for(;d&&d!==p;)x=h(d),s(d,u,g),d=x;s(p,u,g)},V=({el:d,anchor:p})=>{let u;for(;d&&d!==p;)u=h(d),r(d),d=u;r(p)},Y=(d,p,u,g,x,w,k,y,_)=>{p.type==="svg"?k="svg":p.type==="math"&&(k="mathml"),d==null?O(p,u,g,x,w,k,y,_):Ke(d,p,x,w,k,y,_)},O=(d,p,u,g,x,w,k,y)=>{let _,v;const{props:$,shapeFlag:T,transition:E,dirs:M}=d;if(_=d.el=i(d.type,w,$&&$.is,$),T&8?c(_,d.children):T&16&&ae(d.children,_,null,g,x,uo(d,w),k,y),M&&Be(d,null,g,"created"),de(_,d,d.scopeId,k,g),$){for(const D in $)D!=="value"&&!at(D)&&n(_,D,null,$[D],w,d.children,g,x,Ee);"value"in $&&n(_,"value",null,$.value,w),(v=$.onVnodeBeforeMount)&&we(v,g,d)}M&&Be(d,null,g,"beforeMount");const z=Lc(x,E);z&&E.beforeEnter(_),s(_,p,u),((v=$&&$.onVnodeMounted)||z||M)&&re(()=>{v&&we(v,g,d),z&&E.enter(_),M&&Be(d,null,g,"mounted")},x)},de=(d,p,u,g,x)=>{if(u&&b(d,u),g)for(let w=0;w<g.length;w++)b(d,g[w]);if(x){let w=x.subTree;if(p===w){const k=x.vnode;de(d,k,k.scopeId,k.slotScopeIds,x.parent)}}},ae=(d,p,u,g,x,w,k,y,_=0)=>{for(let v=_;v<d.length;v++){const $=d[v]=y?qe(d[v]):_e(d[v]);C(null,$,p,u,g,x,w,k,y)}},Ke=(d,p,u,g,x,w,k)=>{const y=p.el=d.el;let{patchFlag:_,dynamicChildren:v,dirs:$}=p;_|=d.patchFlag&16;const T=d.props||U,E=p.props||U;let M;if(u&&De(u,!1),(M=E.onVnodeBeforeUpdate)&&we(M,u,p,d),$&&Be(p,d,u,"beforeUpdate"),u&&De(u,!0),v?ve(d.dynamicChildren,v,y,u,g,uo(p,x),w):k||B(d,p,y,null,u,g,uo(p,x),w,!1),_>0){if(_&16)st(y,p,T,E,u,g,x);else if(_&2&&T.class!==E.class&&n(y,"class",null,E.class,x),_&4&&n(y,"style",T.style,E.style,x),_&8){const z=p.dynamicProps;for(let D=0;D<z.length;D++){const j=z[D],J=T[j],ue=E[j];(ue!==J||j==="value")&&n(y,j,J,ue,x,d.children,u,g,Ee)}}_&1&&d.children!==p.children&&c(y,p.children)}else!k&&v==null&&st(y,p,T,E,u,g,x);((M=E.onVnodeUpdated)||$)&&re(()=>{M&&we(M,u,p,d),$&&Be(p,d,u,"updated")},g)},ve=(d,p,u,g,x,w,k)=>{for(let y=0;y<p.length;y++){const _=d[y],v=p[y],$=_.el&&(_.type===fe||!it(_,v)||_.shapeFlag&70)?m(_.el):u;C(_,v,$,null,g,x,w,k,!0)}},st=(d,p,u,g,x,w,k)=>{if(u!==g){if(u!==U)for(const y in u)!at(y)&&!(y in g)&&n(d,y,u[y],null,k,p.children,x,w,Ee);for(const y in g){if(at(y))continue;const _=g[y],v=u[y];_!==v&&y!=="value"&&n(d,y,v,_,k,p.children,x,w,Ee)}"value"in g&&n(d,"value",u.value,g.value,k)}},wt=(d,p,u,g,x,w,k,y,_)=>{const v=p.el=d?d.el:l(""),$=p.anchor=d?d.anchor:l("");let{patchFlag:T,dynamicChildren:E,slotScopeIds:M}=p;M&&(y=y?y.concat(M):M),d==null?(s(v,u,g),s($,u,g),ae(p.children||[],u,$,x,w,k,y,_)):T>0&&T&64&&E&&d.dynamicChildren?(ve(d.dynamicChildren,E,u,x,w,k,y),(p.key!=null||x&&p===x.subTree)&&Wr(d,p,!0)):B(d,p,u,$,x,w,k,y,_)},_t=(d,p,u,g,x,w,k,y,_)=>{p.slotScopeIds=y,d==null?p.shapeFlag&512?x.ctx.activate(p,u,g,k,_):oo(p,u,g,x,w,k,_):os(d,p,_)},oo=(d,p,u,g,x,w,k)=>{const y=d.component=Uc(d,g,x);if(Kr(d)&&(y.ctx.renderer=rt),Vc(y),y.asyncDep){if(x&&x.registerDep(y,te,k),!d.el){const _=y.subTree=Oe(xt);W(null,_,p,u)}}else te(y,d,p,u,x,w,k)},os=(d,p,u)=>{const g=p.component=d.component;if(Qa(d,p,u))if(g.asyncDep&&!g.asyncResolved){K(g,p,u);return}else g.next=p,Ua(g.update),g.effect.dirty=!0,g.update();else p.el=d.el,g.vnode=p},te=(d,p,u,g,x,w,k)=>{const y=()=>{if(d.isMounted){let{next:$,bu:T,u:E,parent:M,vnode:z}=d;{const Ge=Zr(d);if(Ge){$&&($.el=z.el,K(d,$,k)),Ge.asyncDep.then(()=>{d.isUnmounted||y()});return}}let D=$,j;De(d,!1),$?($.el=z.el,K(d,$,k)):$=z,T&&ao(T),(j=$.props&&$.props.onVnodeBeforeUpdate)&&we(j,M,$,z),De(d,!0);const J=fo(d),ue=d.subTree;d.subTree=J,C(ue,J,m(ue.el),$t(ue),d,x,w),$.el=J.el,D===null&&ec(d,J.el),E&&re(E,x),(j=$.props&&$.props.onVnodeUpdated)&&re(()=>we(j,M,$,z),x)}else{let $;const{el:T,props:E}=p,{bm:M,m:z,parent:D}=d,j=Pt(p);if(De(d,!1),M&&ao(M),!j&&($=E&&E.onVnodeBeforeMount)&&we($,D,p),De(d,!0),T&&is){const J=()=>{d.subTree=fo(d),is(T,d.subTree,d,x,null)};j?p.type.__asyncLoader().then(()=>!d.isUnmounted&&J()):J()}else{const J=d.subTree=fo(d);C(null,J,u,g,d,x,w),p.el=J.el}if(z&&re(z,x),!j&&($=E&&E.onVnodeMounted)){const J=p;re(()=>we($,D,J),x)}(p.shapeFlag&256||D&&Pt(D.vnode)&&D.vnode.shapeFlag&256)&&d.a&&re(d.a,x),d.isMounted=!0,p=u=g=null}},_=d.effect=new Bo(y,pe,()=>Yo(v),d.scope),v=d.update=()=>{_.dirty&&_.run()};v.id=d.uid,De(d,!0),v()},K=(d,p,u)=>{p.component=d;const g=d.vnode.props;d.vnode=p,d.next=null,kc(d,p.props,g,u),Ec(d,p.children,u),Re(),ws(d),Le()},B=(d,p,u,g,x,w,k,y,_=!1)=>{const v=d&&d.children,$=d?d.shapeFlag:0,T=p.children,{patchFlag:E,shapeFlag:M}=p;if(E>0){if(E&128){kt(v,T,u,g,x,w,k,y,_);return}else if(E&256){je(v,T,u,g,x,w,k,y,_);return}}M&8?($&16&&Ee(v,x,w),T!==v&&c(u,T)):$&16?M&16?kt(v,T,u,g,x,w,k,y,_):Ee(v,x,w,!0):($&8&&c(u,""),M&16&&ae(T,u,g,x,w,k,y,_))},je=(d,p,u,g,x,w,k,y,_)=>{d=d||Ye,p=p||Ye;const v=d.length,$=p.length,T=Math.min(v,$);let E;for(E=0;E<T;E++){const M=p[E]=_?qe(p[E]):_e(p[E]);C(d[E],M,u,null,x,w,k,y,_)}v>$?Ee(d,x,w,!0,!1,T):ae(p,u,g,x,w,k,y,_,T)},kt=(d,p,u,g,x,w,k,y,_)=>{let v=0;const $=p.length;let T=d.length-1,E=$-1;for(;v<=T&&v<=E;){const M=d[v],z=p[v]=_?qe(p[v]):_e(p[v]);if(it(M,z))C(M,z,u,null,x,w,k,y,_);else break;v++}for(;v<=T&&v<=E;){const M=d[T],z=p[E]=_?qe(p[E]):_e(p[E]);if(it(M,z))C(M,z,u,null,x,w,k,y,_);else break;T--,E--}if(v>T){if(v<=E){const M=E+1,z=M<$?p[M].el:g;for(;v<=E;)C(null,p[v]=_?qe(p[v]):_e(p[v]),u,z,x,w,k,y,_),v++}}else if(v>E)for(;v<=T;)be(d[v],x,w,!0),v++;else{const M=v,z=v,D=new Map;for(v=z;v<=E;v++){const ce=p[v]=_?qe(p[v]):_e(p[v]);ce.key!=null&&D.set(ce.key,v)}let j,J=0;const ue=E-z+1;let Ge=!1,ls=0;const nt=new Array(ue);for(v=0;v<ue;v++)nt[v]=0;for(v=M;v<=T;v++){const ce=d[v];if(J>=ue){be(ce,x,w,!0);continue}let ye;if(ce.key!=null)ye=D.get(ce.key);else for(j=z;j<=E;j++)if(nt[j-z]===0&&it(ce,p[j])){ye=j;break}ye===void 0?be(ce,x,w,!0):(nt[ye-z]=v+1,ye>=ls?ls=ye:Ge=!0,C(ce,p[ye],u,null,x,w,k,y,_),J++)}const as=Ge?Mc(nt):Ye;for(j=as.length-1,v=ue-1;v>=0;v--){const ce=z+v,ye=p[ce],cs=ce+1<$?p[ce+1].el:g;nt[v]===0?C(null,ye,u,cs,x,w,k,y,_):Ge&&(j<0||v!==as[j]?Fe(ye,u,cs,2):j--)}}},Fe=(d,p,u,g,x=null)=>{const{el:w,type:k,transition:y,children:_,shapeFlag:v}=d;if(v&6){Fe(d.component.subTree,p,u,g);return}if(v&128){d.suspense.move(p,u,g);return}if(v&64){k.move(d,p,u,rt);return}if(k===fe){s(w,p,u);for(let T=0;T<_.length;T++)Fe(_[T],p,u,g);s(d.anchor,p,u);return}if(k===mo){R(d,p,u);return}if(g!==2&&v&1&&y)if(g===0)y.beforeEnter(w),s(w,p,u),re(()=>y.enter(w),x);else{const{leave:T,delayLeave:E,afterLeave:M}=y,z=()=>s(w,p,u),D=()=>{T(w,()=>{z(),M&&M()})};E?E(w,z,D):D()}else s(w,p,u)},be=(d,p,u,g=!1,x=!1)=>{const{type:w,props:k,ref:y,children:_,dynamicChildren:v,shapeFlag:$,patchFlag:T,dirs:E,memoIndex:M}=d;if(T===-2&&(x=!1),y!=null&&Ao(y,null,u,d,!0),M!=null&&(p.renderCache[M]=void 0),$&256){p.ctx.deactivate(d);return}const z=$&1&&E,D=!Pt(d);let j;if(D&&(j=k&&k.onVnodeBeforeUnmount)&&we(j,p,d),$&6)on(d.component,u,g);else{if($&128){d.suspense.unmount(u,g);return}z&&Be(d,null,p,"beforeUnmount"),$&64?d.type.remove(d,p,u,rt,g):v&&(w!==fe||T>0&&T&64)?Ee(v,p,u,!1,!0):(w===fe&&T&384||!x&&$&16)&&Ee(_,p,u),g&&ss(d)}(D&&(j=k&&k.onVnodeUnmounted)||z)&&re(()=>{j&&we(j,p,d),z&&Be(d,null,p,"unmounted")},u)},ss=d=>{const{type:p,el:u,anchor:g,transition:x}=d;if(p===fe){tn(u,g);return}if(p===mo){V(d);return}const w=()=>{r(u),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(d.shapeFlag&1&&x&&!x.persisted){const{leave:k,delayLeave:y}=x,_=()=>k(u,w);y?y(d.el,w,_):_()}else w()},tn=(d,p)=>{let u;for(;d!==p;)u=h(d),r(d),d=u;r(p)},on=(d,p,u)=>{const{bum:g,scope:x,update:w,subTree:k,um:y,m:_,a:v}=d;As(_),As(v),g&&ao(g),x.stop(),w&&(w.active=!1,be(k,d,p,u)),y&&re(y,p),re(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ee=(d,p,u,g=!1,x=!1,w=0)=>{for(let k=w;k<d.length;k++)be(d[k],p,u,g,x)},$t=d=>d.shapeFlag&6?$t(d.component.subTree):d.shapeFlag&128?d.suspense.next():h(d.anchor||d.el);let so=!1;const rs=(d,p,u)=>{d==null?p._vnode&&be(p._vnode,null,null,!0):C(p._vnode||null,d,p,null,null,null,u),so||(so=!0,ws(),Tr(),so=!1),p._vnode=d},rt={p:C,um:be,m:Fe,r:ss,mt:oo,mc:ae,pc:B,pbc:ve,n:$t,o:e};let ns,is;return{render:rs,hydrate:ns,createApp:yc(rs,ns)}}function uo({type:e,props:t},o){return o==="svg"&&e==="foreignObject"||o==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:o}function De({effect:e,update:t},o){e.allowRecurse=t.allowRecurse=o}function Lc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Wr(e,t,o=!1){const s=e.children,r=t.children;if(S(s)&&S(r))for(let n=0;n<s.length;n++){const i=s[n];let l=r[n];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[n]=qe(r[n]),l.el=i.el),!o&&l.patchFlag!==-2&&Wr(i,l)),l.type===Qt&&(l.el=i.el)}}function Mc(e){const t=e.slice(),o=[0];let s,r,n,i,l;const a=e.length;for(s=0;s<a;s++){const f=e[s];if(f!==0){if(r=o[o.length-1],e[r]<f){t[s]=r,o.push(s);continue}for(n=0,i=o.length-1;n<i;)l=n+i>>1,e[o[l]]<f?n=l+1:i=l;f<e[o[n]]&&(n>0&&(t[s]=o[n-1]),o[n]=s)}}for(n=o.length,i=o[n-1];n-- >0;)o[n]=i,i=t[i];return o}function Zr(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Zr(t)}function As(e){if(e)for(let t=0;t<e.length;t++)e[t].active=!1}const Ac=Symbol.for("v-scx"),Ic=()=>Ot(Ac),At={};function ho(e,t,o){return Ur(e,t,o)}function Ur(e,t,{immediate:o,deep:s,flush:r,once:n,onTrack:i,onTrigger:l}=U){if(t&&n){const O=t;t=(...de)=>{O(...de),Y()}}const a=se,f=O=>s===!0?O:Ze(O,s===!1?1:void 0);let c,m=!1,h=!1;if(le(e)?(c=()=>e.value,m=Rt(e)):ct(e)?(c=()=>f(e),m=!0):S(e)?(h=!0,m=e.some(O=>ct(O)||Rt(O)),c=()=>e.map(O=>{if(le(O))return O.value;if(ct(O))return f(O);if(q(O))return Pe(O,a,2)})):q(e)?t?c=()=>Pe(e,a,2):c=()=>(b&&b(),xe(e,a,3,[L])):c=pe,t&&s){const O=c;c=()=>Ze(O())}let b,L=O=>{b=R.onStop=()=>{Pe(O,a,4),b=R.onStop=void 0}},C;if(eo)if(L=pe,t?o&&xe(t,a,3,[c(),h?[]:void 0,L]):c(),r==="sync"){const O=Ic();C=O.__watcherHandles||(O.__watcherHandles=[])}else return pe;let N=h?new Array(e.length).fill(At):At;const W=()=>{if(!(!R.active||!R.dirty))if(t){const O=R.run();(s||m||(h?O.some((de,ae)=>He(de,N[ae])):He(O,N)))&&(b&&b(),xe(t,a,3,[O,N===At?void 0:h&&N[0]===At?[]:N,L]),N=O)}else R.run()};W.allowRecurse=!!t;let Z;r==="sync"?Z=W:r==="post"?Z=()=>re(W,a&&a.suspense):(W.pre=!0,a&&(W.id=a.uid),Z=()=>Yo(W));const R=new Bo(c,pe,Z),V=xa(),Y=()=>{R.stop(),V&&No(V.effects,R)};return t?o?W():N=R.run():r==="post"?re(R.run.bind(R),a&&a.suspense):R.run(),C&&C.push(Y),Y}function qc(e,t,o){const s=this.proxy,r=X(e)?e.includes(".")?Vr(s,e):()=>s[e]:e.bind(s,s);let n;q(t)?n=t:(n=t.handler,o=t);const i=bt(this),l=Ur(r,n.bind(s),o);return i(),l}function Vr(e,t){const o=t.split(".");return()=>{let s=e;for(let r=0;r<o.length&&s;r++)s=s[o[r]];return s}}function Ze(e,t=1/0,o){if(t<=0||!G(e)||e.__v_skip||(o=o||new Set,o.has(e)))return e;if(o.add(e),t--,le(e))Ze(e.value,t,o);else if(S(e))for(let s=0;s<e.length;s++)Ze(e[s],t,o);else if(Qs(e)||Je(e))e.forEach(s=>{Ze(s,t,o)});else if(or(e)){for(const s in e)Ze(e[s],t,o);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&Ze(e[s],t,o)}return e}const Kr=e=>e.type.__isKeepAlive;function zc(e,t){Gr(e,"a",t)}function Pc(e,t){Gr(e,"da",t)}function Gr(e,t,o=se){const s=e.__wdc||(e.__wdc=()=>{let r=o;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Jt(t,s,o),o){let r=o.parent;for(;r&&r.parent;)Kr(r.parent.vnode)&&Oc(s,t,o,r),r=r.parent}}function Oc(e,t,o,s){const r=Jt(t,e,s,!0);Ir(()=>{No(s[t],r)},o)}function Xr(e,t){e.shapeFlag&6&&e.component?Xr(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}const Hc=e=>e.__isTeleport,fe=Symbol.for("v-fgt"),Qt=Symbol.for("v-txt"),xt=Symbol.for("v-cmt"),mo=Symbol.for("v-stc"),pt=[];let ge=null;function ne(e=!1){pt.push(ge=e?null:[])}function Nc(){pt.pop(),ge=pt[pt.length-1]||null}let vt=1;function Is(e){vt+=e}function Yr(e){return e.dynamicChildren=vt>0?ge||Ye:null,Nc(),vt>0&&ge&&ge.push(e),e}function Ce(e,t,o,s,r,n){return Yr(P(e,t,o,s,r,n,!0))}function Bt(e,t,o,s,r){return Yr(Oe(e,t,o,s,r,!0))}function Rc(e){return e?e.__v_isVNode===!0:!1}function it(e,t){return e.type===t.type&&e.key===t.key}const Jr=({key:e})=>e??null,Ht=({ref:e,ref_key:t,ref_for:o})=>(typeof e=="number"&&(e=""+e),e!=null?X(e)||le(e)||q(e)?{i:$e,r:e,k:t,f:!!o}:e:null);function P(e,t=null,o=null,s=0,r=null,n=e===fe?0:1,i=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Jr(t),ref:t&&Ht(t),scopeId:Yt,slotScopeIds:null,children:o,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:n,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:$e};return l?(es(a,o),n&128&&e.normalize(a)):o&&(a.shapeFlag|=X(o)?8:16),vt>0&&!i&&ge&&(a.patchFlag>0||n&6)&&a.patchFlag!==32&&ge.push(a),a}const Oe=jc;function jc(e,t=null,o=null,s=0,r=null,n=!1){if((!e||e===tc)&&(e=xt),Rc(e)){const l=tt(e,t,!0);return o&&es(l,o),vt>0&&!n&&ge&&(l.shapeFlag&6?ge[ge.indexOf(e)]=l:ge.push(l)),l.patchFlag=-2,l}if(Yc(e)&&(e=e.__vccOpts),t){t=Fc(t);let{class:l,style:a}=t;l&&!X(l)&&(t.class=Fo(l)),G(a)&&(yr(a)&&!S(a)&&(a=Q({},a)),t.style=jo(a))}const i=X(e)?1:oc(e)?128:Hc(e)?64:G(e)?4:q(e)?2:0;return P(e,t,o,s,r,i,n,!0)}function Fc(e){return e?yr(e)||Nr(e)?Q({},e):e:null}function tt(e,t,o=!1,s=!1){const{props:r,ref:n,patchFlag:i,children:l,transition:a}=e,f=t?Dc(r||{},t):r,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&Jr(f),ref:t&&t.ref?o&&n?S(n)?n.concat(Ht(t)):[n,Ht(t)]:Ht(t):n,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==fe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&tt(e.ssContent),ssFallback:e.ssFallback&&tt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&s&&Xr(c,a.clone(c)),c}function Bc(e=" ",t=0){return Oe(Qt,null,e,t)}function _e(e){return e==null||typeof e=="boolean"?Oe(xt):S(e)?Oe(fe,null,e.slice()):typeof e=="object"?qe(e):Oe(Qt,null,String(e))}function qe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:tt(e)}function es(e,t){let o=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(S(t))o=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),es(e,r()),r._c&&(r._d=!0));return}else{o=32;const r=t._;!r&&!Nr(t)?t._ctx=$e:r===3&&$e&&($e.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else q(t)?(t={default:t,_ctx:$e},o=32):(t=String(t),s&64?(o=16,t=[Bc(t)]):o=8);e.children=t,e.shapeFlag|=o}function Dc(...e){const t={};for(let o=0;o<e.length;o++){const s=e[o];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=Fo([t.class,s.class]));else if(r==="style")t.style=jo([t.style,s.style]);else if(Zt(r)){const n=t[r],i=s[r];i&&n!==i&&!(S(n)&&n.includes(i))&&(t[r]=n?[].concat(n,i):i)}else r!==""&&(t[r]=s[r])}return t}function we(e,t,o,s=null){xe(e,t,7,[o,s])}const Wc=Pr();let Zc=0;function Uc(e,t,o){const s=e.type,r=(t?t.appContext:e.appContext)||Wc,n={uid:Zc++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new ma(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:jr(s,r),emitsOptions:Lr(s,r),emit:null,emitted:null,propsDefaults:U,inheritAttrs:s.inheritAttrs,ctx:U,data:U,props:U,attrs:U,slots:U,refs:U,setupState:U,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:o,suspenseId:o?o.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return n.ctx={_:n},n.root=t?t.root:n,n.emit=Ga.bind(null,n),e.ce&&e.ce(n),n}let se=null,Dt,Io;{const e=nr(),t=(o,s)=>{let r;return(r=e[o])||(r=e[o]=[]),r.push(s),n=>{r.length>1?r.forEach(i=>i(n)):r[0](n)}};Dt=t("__VUE_INSTANCE_SETTERS__",o=>se=o),Io=t("__VUE_SSR_SETTERS__",o=>eo=o)}const bt=e=>{const t=se;return Dt(e),e.scope.on(),()=>{e.scope.off(),Dt(t)}},qs=()=>{se&&se.scope.off(),Dt(null)};function Qr(e){return e.vnode.shapeFlag&4}let eo=!1;function Vc(e,t=!1){t&&Io(t);const{props:o,children:s}=e.vnode,r=Qr(e);_c(e,o,r,t),Cc(e,s);const n=r?Kc(e,t):void 0;return t&&Io(!1),n}function Kc(e,t){const o=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,uc);const{setup:s}=o;if(s){const r=e.setupContext=s.length>1?Xc(e):null,n=bt(e);Re();const i=Pe(s,e,0,[e.props,r]);if(Le(),n(),er(i)){if(i.then(qs,qs),t)return i.then(l=>{zs(e,l,t)}).catch(l=>{Gt(l,e,0)});e.asyncDep=i}else zs(e,i,t)}else en(e,t)}function zs(e,t,o){q(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:G(t)&&(e.setupState=$r(t)),en(e,o)}let Ps;function en(e,t,o){const s=e.type;if(!e.render){if(!t&&Ps&&!s.render){const r=s.template||Jo(e).template;if(r){const{isCustomElement:n,compilerOptions:i}=e.appContext.config,{delimiters:l,compilerOptions:a}=s,f=Q(Q({isCustomElement:n,delimiters:l},i),a);s.render=Ps(r,f)}}e.render=s.render||pe}{const r=bt(e);Re();try{hc(e)}finally{Le(),r()}}}const Gc={get(e,t){return ie(e,"get",""),e[t]}};function Xc(e){const t=o=>{e.exposed=o||{}};return{attrs:new Proxy(e.attrs,Gc),slots:e.slots,emit:e.emit,expose:t}}function ts(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy($r(Na(e.exposed)),{get(t,o){if(o in t)return t[o];if(o in dt)return dt[o](e)},has(t,o){return o in t||o in dt}})):e.proxy}function Yc(e){return q(e)&&"__vccOpts"in e}const Jc=(e,t)=>Ra(e,t,eo),Qc="3.4.30";/**
* @vue/runtime-dom v3.4.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const ed="http://www.w3.org/2000/svg",td="http://www.w3.org/1998/Math/MathML",Te=typeof document<"u"?document:null,Os=Te&&Te.createElement("template"),od={insert:(e,t,o)=>{t.insertBefore(e,o||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,o,s)=>{const r=t==="svg"?Te.createElementNS(ed,e):t==="mathml"?Te.createElementNS(td,e):o?Te.createElement(e,{is:o}):Te.createElement(e);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>Te.createTextNode(e),createComment:e=>Te.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Te.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,o,s,r,n){const i=o?o.previousSibling:t.lastChild;if(r&&(r===n||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),o),!(r===n||!(r=r.nextSibling)););else{Os.innerHTML=s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e;const l=Os.content;if(s==="svg"||s==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,o)}return[i?i.nextSibling:t.firstChild,o?o.previousSibling:t.lastChild]}},sd=Symbol("_vtc");function rd(e,t,o){const s=e[sd];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):o?e.setAttribute("class",t):e.className=t}const Hs=Symbol("_vod"),nd=Symbol("_vsh"),id=Symbol(""),ld=/(^|;)\s*display\s*:/;function ad(e,t,o){const s=e.style,r=X(o);let n=!1;if(o&&!r){if(t)if(X(t))for(const i of t.split(";")){const l=i.slice(0,i.indexOf(":")).trim();o[l]==null&&Nt(s,l,"")}else for(const i in t)o[i]==null&&Nt(s,i,"");for(const i in o)i==="display"&&(n=!0),Nt(s,i,o[i])}else if(r){if(t!==o){const i=s[id];i&&(o+=";"+i),s.cssText=o,n=ld.test(o)}}else t&&e.removeAttribute("style");Hs in e&&(e[Hs]=n?s.display:"",e[nd]&&(s.display="none"))}const Ns=/\s*!important$/;function Nt(e,t,o){if(S(o))o.forEach(s=>Nt(e,t,s));else if(o==null&&(o=""),t.startsWith("--"))e.setProperty(t,o);else{const s=cd(e,t);Ns.test(o)?e.setProperty(ot(s),o.replace(Ns,""),"important"):e[s]=o}}const Rs=["Webkit","Moz","ms"],go={};function cd(e,t){const o=go[t];if(o)return o;let s=et(t);if(s!=="filter"&&s in e)return go[t]=s;s=sr(s);for(let r=0;r<Rs.length;r++){const n=Rs[r]+s;if(n in e)return go[t]=n}return t}const js="http://www.w3.org/1999/xlink";function Fs(e,t,o,s,r,n=ha(t)){s&&t.startsWith("xlink:")?o==null?e.removeAttributeNS(js,t.slice(6,t.length)):e.setAttributeNS(js,t,o):o==null||n&&!ir(o)?e.removeAttribute(t):e.setAttribute(t,n?"":Ne(o)?String(o):o)}function dd(e,t,o,s,r,n,i){if(t==="innerHTML"||t==="textContent"){s&&i(s,r,n),e[t]=o??"";return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){const f=l==="OPTION"?e.getAttribute("value")||"":e.value,c=o==null?"":String(o);(f!==c||!("_value"in e))&&(e.value=c),o==null&&e.removeAttribute(t),e._value=o;return}let a=!1;if(o===""||o==null){const f=typeof e[t];f==="boolean"?o=ir(o):o==null&&f==="string"?(o="",a=!0):f==="number"&&(o=0,a=!0)}try{e[t]=o}catch{}a&&e.removeAttribute(t)}function fd(e,t,o,s){e.addEventListener(t,o,s)}function pd(e,t,o,s){e.removeEventListener(t,o,s)}const Bs=Symbol("_vei");function ud(e,t,o,s,r=null){const n=e[Bs]||(e[Bs]={}),i=n[t];if(s&&i)i.value=s;else{const[l,a]=hd(t);if(s){const f=n[t]=xd(s,r);fd(e,l,f,a)}else i&&(pd(e,l,i,a),n[t]=void 0)}}const Ds=/(?:Once|Passive|Capture)$/;function hd(e){let t;if(Ds.test(e)){t={};let s;for(;s=e.match(Ds);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ot(e.slice(2)),t]}let xo=0;const md=Promise.resolve(),gd=()=>xo||(md.then(()=>xo=0),xo=Date.now());function xd(e,t){const o=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=o.attached)return;xe(vd(s,o.value),t,5,[s])};return o.value=e,o.attached=gd(),o}function vd(e,t){if(S(t)){const o=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{o.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const Ws=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,bd=(e,t,o,s,r,n,i,l,a)=>{const f=r==="svg";t==="class"?rd(e,s,f):t==="style"?ad(e,o,s):Zt(t)?Ho(t)||ud(e,t,o,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):yd(e,t,s,f))?(dd(e,t,s,n,i,l,a),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Fs(e,t,s,f,i,t!=="value")):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Fs(e,t,s,f))};function yd(e,t,o,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&Ws(t)&&q(o));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Ws(t)&&X(o)?!1:t in e}const wd=Q({patchProp:bd},od);let Zs;function _d(){return Zs||(Zs=Tc(wd))}const kd=(...e)=>{const t=_d().createApp(...e),{mount:o}=t;return t.mount=s=>{const r=Cd(s);if(!r)return;const n=t._component;!q(n)&&!n.render&&!n.template&&(n.template=r.innerHTML),r.innerHTML="";const i=o(r,!1,$d(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},t};function $d(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Cd(e){return X(e)?document.querySelector(e):e}const Ed="/assets/desk-note-B75wHffG.png",Td="/assets/todo-DHQw0TSW.png",Sd="/assets/translator-BxY8RubY.png",to=(e,t)=>{const o=e.__vccOpts||e;for(const[s,r]of t)o[s]=r;return o},Ld=["innerHTML"],Md={key:1,type:"link.icon",id:"icon"},Ad={id:"text"},Id={__name:"LinkButton",props:["link"],setup(e){function t(o){window.open(o,"_blank")}return(o,s)=>(ne(),Ce("s-ripple",{onClick:s[0]||(s[0]=r=>t(e.link.url)),id:"container"},[e.link.icon.includes("svg")?(ne(),Ce("s-icon",{key:0,id:"icon",innerHTML:e.link.icon},null,8,Ld)):(ne(),Ce("s-icon",Md)),P("div",Ad,qt(e.link.name),1)]))}},qd=to(Id,[["__scopeId","data-v-8a693471"]]),zd={class:"app-container"},Pd={style:{display:"flex","align-items":"center"}},Od=["src"],Hd={class:"app-info-header"},Nd={class:"app-name",id:"app-name"},Rd={class:"app-developer",id:"app-developer"},jd={class:"app-description",id:"app-description"},Fd={class:"app-downloads"},Bd={__name:"AppInfo",props:["appItem"],setup(e){return(t,o)=>(ne(),Ce("div",zd,[P("div",Pd,[P("img",{class:"app-logo",id:"app-logo",src:e.appItem.logo},null,8,Od),P("div",Hd,[P("div",Nd,qt(e.appItem.name),1),P("div",Rd,qt(e.appItem.developer),1)])]),P("div",jd,[P("p",null,qt(e.appItem.description),1)]),P("div",Fd,[(ne(!0),Ce(fe,null,qr(e.appItem.links,s=>(ne(),Bt(qd,{link:s},null,8,["link"]))),256))])]))}},Us=to(Bd,[["__scopeId","data-v-e38685a9"]]),Dd=e=>(Mr("data-v-eeb7670b"),e=e(),Ar(),e),Wd={class:"app-view"},Zd={class:"app-view-column"},Ud=["src"],Vd={class:"app-view-column"},Kd=["src"],Gd=Dd(()=>P("div",{style:{height:"96px"}},null,-1)),Xd={__name:"AppItem",props:["appItem","index"],setup(e){const t=o=>new URL(Object.assign({"../assets/images/desk-note.png":Ed,"../assets/images/todo.png":Td,"../assets/images/translator.png":Sd})[`../assets/images/${o}`],import.meta.url).href;return ys("red"),ys("#1e90ff"),(o,s)=>(ne(),Ce(fe,null,[P("div",Wd,[P("div",Zd,[e.index%2==0?(ne(),Bt(Us,{key:0,appItem:e.appItem},null,8,["appItem"])):(ne(),Ce("img",{key:1,class:"app-view-preview",src:t(e.appItem.preview)},null,8,Ud))]),P("div",Vd,[e.index%2==1?(ne(),Bt(Us,{key:0,appItem:e.appItem},null,8,["appItem"])):(ne(),Ce("img",{key:1,class:"app-view-preview",src:t(e.appItem.preview)},null,8,Kd))])]),Gd],64))}},Yd=to(Xd,[["__scopeId","data-v-eeb7670b"]]),Jd=[{logo:"https://boybeak.github.io/images/justtodo-icon-256.png",name:"JustTodo",preview:"todo.png",developer:"boybeak",description:"May be the simplest todo app for macOS.",background:"lightskyblue",links:[{icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" /></svg>',name:"Github",url:"https://github.com/boybeak/JustTodo"}]},{logo:"https://boybeak.github.io/images/desknote-icon-256.png",name:"DeskNote",preview:"desk-note.png",developer:"boybeak",description:"A Windows 7 style desk note for macOS, support customize colors, transparency, font size and style.",background:"darkseagreen",links:[{icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" /></svg>',name:"Github",url:"https://github.com/boybeak/DeskNote"}]},{logo:"https://boybeak.github.io/images/translator-icon-256.png",name:"Translator",preview:"translator.png",developer:"boybeak",description:"A translator app for macOS, docked on menu bar.",background:"burlywood",links:[{icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" /></svg>',name:"Github",url:"https://github.com/boybeak/TranslatorDocs"}]}],yt=e=>(Mr("data-v-4cf6551e"),e=e(),Ar(),e),Qd={id:"app",theme:"auto"},ef=yt(()=>P("s-icon-button",{slot:"navigation"},[P("s-icon",null,[P("svg",{t:"1719235779585",class:"icon",viewBox:"0 0 1279 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"28921",width:"200",height:"200"},[P("path",{d:"M1037.14636 242.803063l223.988416 223.988415c24.998707 24.998707 24.998707 65.396618 0 90.395325l-223.988416 223.988416c-24.998707 24.998707-65.396618 24.998707-90.395325 0s-24.998707-65.396618 0-90.395325l178.590764-178.790753-178.590764-178.790754c-24.998707-24.998707-24.998707-65.396618 0-90.395324s65.396618-24.998707 90.395325 0z m-703.963592 90.395324L154.49201 511.989141l178.690758 178.790753c24.998707 24.998707 24.998707 65.396618 0 90.395325s-65.396618 24.998707-90.395325 0L18.743031 557.186803c-24.990708-24.998707-24.990708-65.396618 0-90.395325l224.044412-223.988415c24.998707-24.998707 65.396618-24.998707 90.395325 0s24.998707 65.396618 0 90.395324z","p-id":"28922"}),P("path",{d:"M829.557096 81.5914l-255.98676 895.973662c-9.799493 33.998242-45.197662 53.597228-79.195904 43.997724-33.998242-9.799493-53.597228-45.197662-43.997725-79.195904l255.986761-895.933663c9.799493-33.986242 45.197662-53.665225 79.195904-43.953727 33.998242 9.709498 53.597228 45.133666 43.997724 79.111908z",opacity:".4","p-id":"28923"})])])],-1)),tf=yt(()=>P("div",{slot:"headline",style:{"font-weight":"bold"}},"Apps Only",-1)),of=yt(()=>P("s-icon-button",{slot:"action"},[P("s-icon",null,[P("svg",{t:"1719235052681",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"18061",width:"200",height:"200"},[P("path",{d:"M928 128h-32l-46.24-92.5C838.8 13.75 816.8 0 792.6 0H231.6C207.26 0 185.26 13.75 174.26 35.5L128 128H96C78.25 128 64 142.26 64 160v64c0 17.8 14.25 32 32 32h832c17.8 0 32-14.2 32-32V160c0-17.74-14.2-32-32-32zM202.64 832h618.8l26.66-320H174.2l28.44 320z","p-id":"18062"}),P("path",{d:"M213.76 965.2c2.74 33.4 30.5 58.8 63.84 58.8h469c33.24 0 61-25.5 63.76-58.76L821.4 832H202.64l11.12 133.2zM154.66 256l21.32 256h672l21.32-256H154.66z",opacity:".4","p-id":"18063"})])])],-1)),sf=yt(()=>P("s-icon",null,[P("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[P("title",null,"newspaper"),P("path",{d:"M20,11H4V8H20M20,15H13V13H20M20,19H13V17H20M11,19H4V13H11M20.33,4.67L18.67,3L17,4.67L15.33,3L13.67,4.67L12,3L10.33,4.67L8.67,3L7,4.67L5.33,3L3.67,4.67L2,3V19A2,2 0 0,0 4,21H20A2,2 0 0,0 22,19V3L20.33,4.67Z"})])],-1)),rf=[sf],nf=yt(()=>P("s-icon",null,[P("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512"},[P("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})])],-1)),lf=[nf],af={__name:"App",setup(e){function t(o){window.open(o,"_blank")}return(o,s)=>(ne(),Ce("s-page",Qd,[P("s-top-app-bar",null,[ef,tf,of,P("s-icon-button",{slot:"action",onClick:s[0]||(s[0]=r=>t("https://boybeak.github.io/"))},rf),P("s-icon-button",{slot:"action",onClick:s[1]||(s[1]=r=>t("https://github.com/boybeak"))},lf)]),(ne(!0),Ce(fe,null,qr(kr(Jd),(r,n)=>(ne(),Bt(Yd,{appItem:r,index:n},null,8,["appItem","index"]))),256))]))}},cf=to(af,[["__scopeId","data-v-4cf6551e"]]);kd(cf).mount("#app");
