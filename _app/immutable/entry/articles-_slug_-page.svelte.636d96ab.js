import{S as O,i as P,s as j,k as _,q as k,a as G,K as A,l as h,m as p,r as D,h as m,c as H,L as K,n as o,M as F,b as L,D as s,u as M,I as N}from"../chunks/index.379d9a60.js";function R(u){let a,t,l,i=u[0].title+"",b,x,c,n,E,q,d,v=u[0].cover.data.attributes.caption+"",I,C,g,y=u[0].content+"";return{c(){a=_("div"),t=_("section"),l=_("h1"),b=k(i),x=G(),c=_("figure"),n=_("img"),q=G(),d=_("figcaption"),I=k(v),C=G(),g=new A(!1),this.h()},l(e){a=h(e,"DIV",{class:!0});var r=p(a);t=h(r,"SECTION",{class:!0});var f=p(t);l=h(f,"H1",{class:!0});var S=p(l);b=D(S,i),S.forEach(m),x=H(f),c=h(f,"FIGURE",{class:!0});var w=p(c);n=h(w,"IMG",{class:!0,src:!0}),q=H(w),d=h(w,"FIGCAPTION",{class:!0});var T=p(d);I=D(T,v),T.forEach(m),w.forEach(m),C=H(f),g=K(f,!1),f.forEach(m),r.forEach(m),this.h()},h(){o(l,"class","text-4xl font-bold mb-2"),o(n,"class","w-full rounded border bg-white dark:border-gray-700"),F(n.src,E=u[0].cover.data.attributes.url)||o(n,"src",E),o(d,"class","italic"),o(c,"class","py-4"),g.a=null,o(t,"class","mx-auto text-justify leading-relaxed svelte-18fr4p5"),o(a,"class","mx-4")},m(e,r){L(e,a,r),s(a,t),s(t,l),s(l,b),s(t,x),s(t,c),s(c,n),s(c,q),s(c,d),s(d,I),s(t,C),g.m(y,t)},p(e,[r]){r&1&&i!==(i=e[0].title+"")&&M(b,i),r&1&&!F(n.src,E=e[0].cover.data.attributes.url)&&o(n,"src",E),r&1&&v!==(v=e[0].cover.data.attributes.caption+"")&&M(I,v),r&1&&y!==(y=e[0].content+"")&&g.p(y)},i:N,o:N,d(e){e&&m(a)}}}function U(u,a,t){let{data:l}=a;return u.$$set=i=>{"data"in i&&t(0,l=i.data)},[l]}class z extends O{constructor(a){super(),P(this,a,U,R,j,{data:0})}}export{z as default};