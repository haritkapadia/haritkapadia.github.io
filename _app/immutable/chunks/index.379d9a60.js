function E(){}function R(t,n){for(const e in n)t[e]=n[e];return t}function O(t){return t()}function H(){return Object.create(null)}function g(t){t.forEach(O)}function q(t){return typeof t=="function"}function dt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let b;function ht(t,n){return b||(b=document.createElement("a")),b.href=n,t===b.href}function W(t){return Object.keys(t).length===0}function Q(t,...n){if(t==null)return E;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function mt(t,n,e){t.$$.on_destroy.push(Q(n,e))}function pt(t,n,e,i){if(t){const r=D(t,n,e,i);return t[0](r)}}function D(t,n,e,i){return t[1]&&i?R(e.ctx.slice(),t[1](i(n))):e.ctx}function yt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const u=[],s=Math.max(n.dirty.length,r.length);for(let o=0;o<s;o+=1)u[o]=n.dirty[o]|r[o];return u}return n.dirty|r}return n.dirty}function gt(t,n,e,i,r,u){if(r){const s=D(n,e,i,u);t.p(s,r)}}function xt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function bt(t){return t??""}let N=!1;function U(){N=!0}function V(){N=!1}function X(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function Y(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<n.length;c++){const a=n[c];a.claim_order!==void 0&&l.push(a)}n=l}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let l=0;l<n.length;l++){const c=n[l].claim_order,a=(r>0&&n[e[r]].claim_order<=c?r+1:X(1,r,x=>n[e[x]].claim_order,c))-1;i[l]=e[a]+1;const f=a+1;e[f]=l,r=Math.max(f,r)}const u=[],s=[];let o=n.length-1;for(let l=e[r]+1;l!=0;l=i[l-1]){for(u.push(n[l-1]);o>=l;o--)s.push(n[o]);o--}for(;o>=0;o--)s.push(n[o]);u.reverse(),s.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<s.length;l++){for(;c<u.length&&s[l].claim_order>=u[c].claim_order;)c++;const a=c<u.length?u[c]:null;t.insertBefore(s[l],a)}}function Z(t,n){if(N){for(Y(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function tt(t,n,e){t.insertBefore(n,e||null)}function nt(t,n,e){N&&!e?Z(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function $t(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function G(t){return document.createElement(t)}function et(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function M(t){return document.createTextNode(t)}function Et(){return M(" ")}function wt(){return M("")}function Nt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function it(t){return Array.from(t.childNodes)}function z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function F(t,n,e,i,r=!1){z(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(n(o)){const l=e(o);return l===void 0?t.splice(s,1):t[s]=l,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(n(o)){const l=e(o);return l===void 0?t.splice(s,1):t[s]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function rt(t,n,e,i){return F(t,r=>r.nodeName===n,r=>{const u=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];e[o.name]||u.push(o.name)}u.forEach(s=>r.removeAttribute(s))},()=>i(n))}function Tt(t,n,e){return rt(t,n,e,G)}function st(t,n){return F(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>M(n),!0)}function At(t){return st(t," ")}function L(t,n,e){for(let i=e;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===n)return i}return t.length}function vt(t,n){const e=L(t,"HTML_TAG_START",0),i=L(t,"HTML_TAG_END",e);if(e===i)return new P(void 0,n);z(t);const r=t.splice(e,i-e+1);w(r[0]),w(r[r.length-1]);const u=r.slice(1,r.length-1);for(const s of u)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new P(u,n)}function Mt(t,n){n=""+n,t.data!==n&&(t.data=n)}function St(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}class lt{constructor(n=!1){this.is_svg=!1,this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=et(e.nodeName):this.e=G(e.nodeType===11?"TEMPLATE":e.nodeName),this.t=e.tagName!=="TEMPLATE"?e:e.content,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)tt(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(w)}}class P extends lt{constructor(n,e=!1){super(e),this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)nt(this.t,this.n[e],n)}}function jt(t,n){return new t(n)}let y;function p(t){y=t}function S(){if(!y)throw new Error("Function called outside component initialization");return y}function Ct(t){S().$$.on_mount.push(t)}function Ht(t){S().$$.after_update.push(t)}function Lt(t,n){return S().$$.context.set(t,n),n}const h=[],k=[];let m=[];const B=[],I=Promise.resolve();let A=!1;function J(){A||(A=!0,I.then(K))}function Pt(){return J(),I}function v(t){m.push(t)}const T=new Set;let d=0;function K(){if(d!==0)return;const t=y;do{try{for(;d<h.length;){const n=h[d];d++,p(n),ct(n.$$)}}catch(n){throw h.length=0,d=0,n}for(p(null),h.length=0,d=0;k.length;)k.pop()();for(let n=0;n<m.length;n+=1){const e=m[n];T.has(e)||(T.add(e),e())}m.length=0}while(h.length);for(;B.length;)B.pop()();A=!1,T.clear(),p(t)}function ct(t){if(t.fragment!==null){t.update(),g(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(v)}}function ot(t){const n=[],e=[];m.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),m=n}const $=new Set;let _;function kt(){_={r:0,c:[],p:_}}function Bt(){_.r||g(_.c),_=_.p}function ut(t,n){t&&t.i&&($.delete(t),t.i(n))}function Ot(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function qt(t){t&&t.c()}function Dt(t,n){t&&t.l(n)}function ft(t,n,e,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(n,e),i||v(()=>{const s=t.$$.on_mount.map(O).filter(q);t.$$.on_destroy?t.$$.on_destroy.push(...s):g(s),t.$$.on_mount=[]}),u.forEach(v)}function at(t,n){const e=t.$$;e.fragment!==null&&(ot(e.after_update),g(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function _t(t,n){t.$$.dirty[0]===-1&&(h.push(t),J(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Gt(t,n,e,i,r,u,s,o=[-1]){const l=y;p(t);const c=t.$$={fragment:null,ctx:[],props:u,update:E,not_equal:r,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(l?l.$$.context:[])),callbacks:H(),dirty:o,skip_bound:!1,root:n.target||l.$$.root};s&&s(c.root);let a=!1;if(c.ctx=e?e(t,n.props||{},(f,x,...j)=>{const C=j.length?j[0]:x;return c.ctx&&r(c.ctx[f],c.ctx[f]=C)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](C),a&&_t(t,f)),x}):[],c.update(),a=!0,g(c.before_update),c.fragment=i?i(c.ctx):!1,n.target){if(n.hydrate){U();const f=it(n.target);c.fragment&&c.fragment.l(f),f.forEach(w)}else c.fragment&&c.fragment.c();n.intro&&ut(t.$$.fragment),ft(t,n.target,n.anchor,n.customElement),V(),K()}p(l)}class zt{$destroy(){at(this,1),this.$destroy=E}$on(n,e){if(!q(e))return E;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!W(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{ft as A,at as B,pt as C,Z as D,gt as E,xt as F,yt as G,$t as H,E as I,mt as J,P as K,vt as L,ht as M,bt as N,Lt as O,zt as S,Et as a,nt as b,At as c,Ot as d,wt as e,Bt as f,ut as g,w as h,Gt as i,Ht as j,G as k,Tt as l,it as m,Nt as n,Ct as o,St as p,M as q,st as r,dt as s,Pt as t,Mt as u,kt as v,k as w,jt as x,qt as y,Dt as z};