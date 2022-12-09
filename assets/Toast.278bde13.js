import{d as m,o as u,a as g,t as M,n as W,_ as q,p as Y,l as X,g as d,m as k,u as j,q as z,x as be,y as we,z as N,F as xe,A as O,B as C,C as Z,c as B,D as E,E as ee,G as F,e as te,j as ke}from"./index.17f0d779.js";function xt(){const e=m(null),t=m({message:"",type:"error"});return{toast:e,toastData:t,handleToast:(n,o)=>{var s;t.value.type=n,t.value.message=o,(s=e.value)==null||s.showToast()}}}function kt(){const e=m("");return{handleException:a=>{switch(a){case"auth/invalid-email":e.value="E-mail inv\xE1lido.";break;case"auth/email-already-in-use":e.value="Este e-mail j\xE1 foi utilizado por outro usu\xE1rio.";break;case"auth/user-not-found":e.value="Nenhuma conta encontrada para este e-mail.";break;case"auth/too-many-requests":e.value="Conta bloqueada por excesso de tentativas.";break;case"auth/wrong-password":e.value="Senha incorreta.";break;case"auth/weak-password":e.value="Sua senha deve possuir no m\xEDnimo 6 caracteres.";break;case"auth/invalid-email":e.value="E-mail inv\xE1lido";break;case"auth/user-disabled":e.value="Conta inativa.";break;case"auth/internal-error":e.value="Erro interno. Contate o administrador do sistema.";break;default:e.value="E-mail ou senha incorreta.";break}},exception:e}}const Et={__name:"Text",props:["size","text"],setup(e){return(t,a)=>(u(),g("span",{class:W([{"text-xs":e.size==="sm","text-sm":e.size==="md","text-md":e.size==="lg"},"text-gray-100 font-sans"])},M(e.text),3))}};const Ee={},P=e=>(Y("data-v-e09e3720"),e=e(),X(),e),Le={class:"dots"},Se=P(()=>d("span",{class:"dot-1"},null,-1)),Te=P(()=>d("span",{class:"dot-2"},null,-1)),$e=P(()=>d("span",{class:"dot-3"},null,-1)),je=[Se,Te,$e];function Ce(e,t){return u(),g("div",Le,je)}const Be=q(Ee,[["render",Ce],["__scopeId","data-v-e09e3720"]]),Fe={type:"submit",class:"py-3 px-4 bg-brand rounded font-semibold text-black text-sm w-full transition-colors hover:bg-brand-hover"},Oe={key:1},Lt={__name:"Button",props:["text","isLoading"],setup(e){return(t,a)=>(u(),g("button",Fe,[e.isLoading?(u(),k(Be,{key:0})):(u(),g("span",Oe,M(e.text),1))]))}};function Ae(e,t){return u(),g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[d("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"})])}function Ve(e,t){return u(),g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[d("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"})])}function ze(e,t){return u(),g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[d("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"})])}const Ie={class:"flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-brand-hover"},De=["type","placeholder","value"],St={__name:"TextInput",props:["type","icon","text","modelValue"],emits:["update:modelValue","onKeyupEnter"],setup(e,{emit:t}){const a=n=>{t("update:modelValue",n.target.value)};return(n,o)=>(u(),g("div",Ie,[e.icon==="UserIcon"?(u(),k(j(ze),{key:0,class:"w-6 h-6 text-gray-400"})):z("",!0),e.icon==="EnvelopeIcon"?(u(),k(j(Ae),{key:1,class:"w-6 h-6 text-gray-400"})):z("",!0),e.icon==="LockClosedIcon"?(u(),k(j(Ve),{key:2,class:"w-6 h-6 text-gray-400"})):z("",!0),d("input",{className:"bg-transparent flex-1 text-gray-100 text-base placeholder:text-gray-400 outline-none",type:e.type,placeholder:e.text,value:e.modelValue,onInput:a,onKeyup:o[0]||(o[0]=be(s=>n.$emit("onKeyupEnter"),["enter"]))},null,40,De)]))}},He="/login-firebase-vue/assets/vue.5532db34.svg",Me="/login-firebase-vue/assets/firebase.de0f2b74.svg",qe={},Ne={class:"flex flex-row justify-center items-center"},Pe=d("img",{src:He,alt:"Logo Vue JS",class:"ml-7 w-20 h-20"},null,-1),Re=d("span",{class:"ml-5 text-3xl text-white"}," + ",-1),Ue=d("img",{src:Me,alt:"Logo Vue JS",class:"w-32 h-32"},null,-1),Ke=[Pe,Re,Ue];function Je(e,t){return u(),g("div",Ne,Ke)}const Tt=q(qe,[["render",Je]]);function x(e,t,...a){if(e in t){let o=t[e];return typeof o=="function"?o(...a):o}let n=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,x),n}var ne=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(ne||{}),_=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(_||{});function ae({visible:e=!0,features:t=0,ourProps:a,theirProps:n,...o}){var s;let r=Ge(n,a),i=Object.assign(o,{props:r});if(e||t&2&&r.static)return I(i);if(t&1){let l=(s=r.unmount)==null||s?0:1;return x(l,{[0](){return null},[1](){return I({...o,props:{...r,hidden:!0,style:{display:"none"}}})}})}return I(i)}function I({props:e,attrs:t,slots:a,slot:n,name:o}){var s;let{as:r,...i}=re(e,["unmount","static"]),l=(s=a.default)==null?void 0:s.call(a,n),c={};if(n){let f=!1,p=[];for(let[h,v]of Object.entries(n))typeof v=="boolean"&&(f=!0),v===!0&&p.push(h);f&&(c["data-headlessui-state"]=p.join(" "))}if(r==="template"){if(l=oe(l!=null?l:[]),Object.keys(i).length>0||Object.keys(t).length>0){let[f,...p]=l!=null?l:[];if(!Qe(f)||p.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${o} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(i).concat(Object.keys(t)).sort((h,v)=>h.localeCompare(v)).map(h=>`  - ${h}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(h=>`  - ${h}`).join(`
`)].join(`
`));return we(f,Object.assign({},i,c))}return Array.isArray(l)&&l.length===1?l[0]:l}return N(r,Object.assign({},i,c),{default:()=>l})}function oe(e){return e.flatMap(t=>t.type===xe?oe(t.children):[t])}function Ge(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},a={};for(let n of e)for(let o in n)o.startsWith("on")&&typeof n[o]=="function"?(a[o]!=null||(a[o]=[]),a[o].push(n[o])):t[o]=n[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(a).map(n=>[n,void 0])));for(let n in a)Object.assign(t,{[n](o,...s){let r=a[n];for(let i of r){if(o instanceof Event&&o.defaultPrevented)return;i(o,...s)}}});return t}function re(e,t=[]){let a=Object.assign({},e);for(let n of t)n in a&&delete a[n];return a}function Qe(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let We=0;function Ye(){return++We}function Xe(){return Ye()}function G(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}let se=Symbol("Context");var L=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(L||{});function Ze(){return le()!==null}function le(){return O(se,null)}function et(e){C(se,e)}function ie(){let e=[],t=[],a={enqueue(n){t.push(n)},addEventListener(n,o,s,r){return n.addEventListener(o,s,r),a.add(()=>n.removeEventListener(o,s,r))},requestAnimationFrame(...n){let o=requestAnimationFrame(...n);a.add(()=>cancelAnimationFrame(o))},nextFrame(...n){a.requestAnimationFrame(()=>{a.requestAnimationFrame(...n)})},setTimeout(...n){let o=setTimeout(...n);a.add(()=>clearTimeout(o))},add(n){e.push(n)},dispose(){for(let n of e.splice(0))n()},async workQueue(){for(let n of t.splice(0))await n()}};return a}function tt(e){let t={called:!1};return(...a)=>{if(!t.called)return t.called=!0,e(...a)}}function D(e,...t){e&&t.length>0&&e.classList.add(...t)}function $(e,...t){e&&t.length>0&&e.classList.remove(...t)}var H=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(H||{});function nt(e,t){let a=ie();if(!e)return a.dispose;let{transitionDuration:n,transitionDelay:o}=getComputedStyle(e),[s,r]=[n,o].map(i=>{let[l=0]=i.split(",").filter(Boolean).map(c=>c.includes("ms")?parseFloat(c):parseFloat(c)*1e3).sort((c,f)=>f-c);return l});return s!==0?a.setTimeout(()=>t("finished"),s+r):t("finished"),a.add(()=>t("cancelled")),a.dispose}function Q(e,t,a,n,o,s){let r=ie(),i=s!==void 0?tt(s):()=>{};return $(e,...o),D(e,...t,...a),r.nextFrame(()=>{$(e,...a),D(e,...n),r.add(nt(e,l=>($(e,...n,...t),D(e,...o),i(l))))}),r.add(()=>$(e,...t,...a,...n,...o)),r.add(()=>i("cancelled")),r.dispose}function w(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let R=Symbol("TransitionContext");var at=(e=>(e.Visible="visible",e.Hidden="hidden",e))(at||{});function ot(){return O(R,null)!==null}function rt(){let e=O(R,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function st(){let e=O(U,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let U=Symbol("NestingContext");function A(e){return"children"in e?A(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function ue(e){let t=m([]),a=m(!1);E(()=>a.value=!0),ee(()=>a.value=!1);function n(s,r=_.Hidden){let i=t.value.findIndex(({id:l})=>l===s);i!==-1&&(x(r,{[_.Unmount](){t.value.splice(i,1)},[_.Hidden](){t.value[i].state="hidden"}}),!A(t)&&a.value&&(e==null||e()))}function o(s){let r=t.value.find(({id:i})=>i===s);return r?r.state!=="visible"&&(r.state="visible"):t.value.push({id:s,state:"visible"}),()=>n(s,_.Unmount)}return{children:t,register:o,unregister:n}}let de=ne.RenderStrategy,lt=Z({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:a,slots:n,expose:o}){if(!ot()&&Ze())return()=>N(ce,{...e,onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave")},n);let s=m(null),r=m("visible"),i=B(()=>e.unmount?_.Unmount:_.Hidden);o({el:s,$el:s});let{show:l,appear:c}=rt(),{register:f,unregister:p}=st(),h={value:!0},v=Xe(),S={value:!1},K=ue(()=>{S.value||(r.value="hidden",p(v),t("afterLeave"))});E(()=>{let y=f(v);ee(y)}),F(()=>{if(i.value===_.Hidden&&!!v){if(l&&r.value!=="visible"){r.value="visible";return}x(r.value,{hidden:()=>p(v),visible:()=>f(v)})}});let fe=w(e.enter),pe=w(e.enterFrom),ve=w(e.enterTo),J=w(e.entered),he=w(e.leave),me=w(e.leaveFrom),ge=w(e.leaveTo);E(()=>{F(()=>{if(r.value==="visible"){let y=G(s);if(y instanceof Comment&&y.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function ye(y){let V=h.value&&!c.value,b=G(s);!b||!(b instanceof HTMLElement)||V||(S.value=!0,l.value&&t("beforeEnter"),l.value||t("beforeLeave"),y(l.value?Q(b,fe,pe,ve,J,T=>{S.value=!1,T===H.Finished&&t("afterEnter")}):Q(b,he,me,ge,J,T=>{S.value=!1,T===H.Finished&&(A(K)||(r.value="hidden",p(v),t("afterLeave")))})))}return E(()=>{te([l],(y,V,b)=>{ye(b),h.value=!1},{immediate:!0})}),C(U,K),et(B(()=>x(r.value,{visible:L.Open,hidden:L.Closed}))),()=>{let{appear:y,show:V,enter:b,enterFrom:T,enterTo:mt,entered:gt,leave:yt,leaveFrom:_t,leaveTo:bt,..._e}=e;return ae({theirProps:_e,ourProps:{ref:s},slot:{},slots:n,attrs:a,features:de,visible:r.value==="visible",name:"TransitionChild"})}}}),it=lt,ce=Z({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:a,slots:n}){let o=le(),s=B(()=>e.show===null&&o!==null?x(o.value,{[L.Open]:!0,[L.Closed]:!1}):e.show);F(()=>{if(![!0,!1].includes(s.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let r=m(s.value?"visible":"hidden"),i=ue(()=>{r.value="hidden"}),l=m(!0),c={show:s,appear:B(()=>e.appear||!l.value)};return E(()=>{F(()=>{l.value=!1,s.value?r.value="visible":A(i)||(r.value="hidden")})}),C(U,i),C(R,c),()=>{let f=re(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),p={unmount:e.unmount};return ae({ourProps:{...p,as:"template"},theirProps:{},slot:{},slots:{...n,default:()=>[N(it,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...a,...p,...f},n.default)]},attrs:{},features:de,visible:r.value==="visible",name:"Transition"})}}});const ut=e=>(Y("data-v-b75ecda8"),e=e(),X(),e),dt={id:"toast",class:"toast",role:"alert"},ct={class:"w-5 h-5","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},ft=["d"],pt=ut(()=>d("span",{class:"sr-only"}," Icon ",-1)),vt={class:"toast-content"},ht={__name:"Toast",props:["toastData","type"],setup(e,{expose:t}){const a=e,n=m(!1),o=()=>{n.value=!0};return te(n,s=>{s&&setTimeout(()=>{n.value=!1},5e3)}),t({showToast:o}),(s,r)=>(u(),k(j(ce),{show:n.value,enter:"transition-opacity duration-75","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity duration-150","leave-from":"opacity-100","leave-to":"opacity-0"},{default:ke(()=>[d("div",dt,[d("div",{class:W(["toast-icon",{"text-success bg-success":a.toastData.type==="success","text-danger bg-danger":a.toastData.type==="error"}])},[(u(),g("svg",ct,[d("path",{"fill-rule":"evenodd",d:a.toastData.type==="success"?"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z":"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"},null,8,ft)])),pt],2),d("div",vt,M(a.toastData.message),1)])]),_:1},8,["show"]))}},$t=q(ht,[["__scopeId","data-v-b75ecda8"]]);export{Tt as L,$t as T,St as _,xt as a,Lt as b,Et as c,kt as u};
