import{S as te,i as ae,s as re,k as w,l as E,m as C,h as p,n as y,b as R,I as x,q as I,r as z,u as A,a as q,y as Q,c as S,z as X,D as d,A as Y,g as V,d as B,B as Z,K as De,e as G,L as ke,C as we,E as Ee,F as je,G as Ce,H as ee,O as Re,v as le,f as ie}from"../chunks/index.379d9a60.js";var Ie=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ze(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ne={},Le={get exports(){return ne},set exports(i){ne=i}};(function(i,e){(function(s,t){typeof ze=="function"?i.exports=t():s.pluralize=t()})(Ie,function(){var s=[],t=[],r={},o={},a={};function l(u){return typeof u=="string"?new RegExp("^"+u+"$","i"):u}function n(u,h){return u===h?h:u===u.toLowerCase()?h.toLowerCase():u===u.toUpperCase()?h.toUpperCase():u[0]===u[0].toUpperCase()?h.charAt(0).toUpperCase()+h.substr(1).toLowerCase():h.toLowerCase()}function f(u,h){return u.replace(/\$(\d{1,2})/g,function(_,g){return h[g]||""})}function m(u,h){return u.replace(h[0],function(_,g){var j=f(h[1],arguments);return n(_===""?u[g-1]:_,j)})}function c(u,h,_){if(!u.length||r.hasOwnProperty(u))return h;for(var g=_.length;g--;){var j=_[g];if(j[0].test(h))return m(h,j)}return h}function v(u,h,_){return function(g){var j=g.toLowerCase();return h.hasOwnProperty(j)?n(g,j):u.hasOwnProperty(j)?n(g,u[j]):c(j,g,_)}}function D(u,h,_,g){return function(j){var O=j.toLowerCase();return h.hasOwnProperty(O)?!0:u.hasOwnProperty(O)?!1:c(O,O,_)===O}}function $(u,h,_){var g=h===1?$.singular(u):$.plural(u);return(_?h+" ":"")+g}return $.plural=v(a,o,s),$.isPlural=D(a,o,s),$.singular=v(o,a,t),$.isSingular=D(o,a,t),$.addPluralRule=function(u,h){s.push([l(u),h])},$.addSingularRule=function(u,h){t.push([l(u),h])},$.addUncountableRule=function(u){if(typeof u=="string"){r[u.toLowerCase()]=!0;return}$.addPluralRule(u,"$0"),$.addSingularRule(u,"$0")},$.addIrregularRule=function(u,h){h=h.toLowerCase(),u=u.toLowerCase(),a[u]=h,o[h]=u},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach(function(u){return $.addIrregularRule(u[0],u[1])}),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach(function(u){return $.addPluralRule(u[0],u[1])}),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach(function(u){return $.addSingularRule(u[0],u[1])}),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[eé]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach($.addUncountableRule),$})})(Le);const Pe=ne;function qe(i){let e=i[3](i[0])+"",s;return{c(){s=I(e)},l(t){s=z(t,e)},m(t,r){R(t,s,r)},p(t,r){r&1&&e!==(e=t[3](t[0])+"")&&A(s,e)},d(t){t&&p(s)}}}function Se(i){let e=i[2](i[0])+"",s,t,r=i[2](i[1])+"",o;return{c(){s=I(e),t=I(" to "),o=I(r)},l(a){s=z(a,e),t=z(a," to "),o=z(a,r)},m(a,l){R(a,s,l),R(a,t,l),R(a,o,l)},p(a,l){l&1&&e!==(e=a[2](a[0])+"")&&A(s,e),l&2&&r!==(r=a[2](a[1])+"")&&A(o,r)},d(a){a&&p(s),a&&p(t),a&&p(o)}}}function Ve(i){let e;function s(o,a){return o[1]?Se:qe}let t=s(i),r=t(i);return{c(){e=w("h4"),r.c(),this.h()},l(o){e=E(o,"H4",{class:!0});var a=C(e);r.l(a),a.forEach(p),this.h()},h(){y(e,"class","font-mono text-gray-700 dark:text-gray-400 text-sm leading-tight")},m(o,a){R(o,e,a),r.m(e,null)},p(o,[a]){t===(t=s(o))&&r?r.p(o,a):(r.d(1),r=t(o),r&&(r.c(),r.m(e,null)))},i:x,o:x,d(o){o&&p(e),r.d()}}}function Te(i,e,s){let{startDate:t}=e,{endDate:r}=e;const o=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short"}),a=n=>{const f=o.formatToParts(new Date(n)).reduce((m,{type:c,value:v})=>({...m,[c]:v}),{});return`${f.year}-${f.month}`},l=n=>`${o.formatToParts(new Date(n)).reduce((m,{type:c,value:v})=>({...m,[c]:v}),{}).year}`;return i.$$set=n=>{"startDate"in n&&s(0,t=n.startDate),"endDate"in n&&s(1,r=n.endDate)},[t,r,a,l]}class He extends te{constructor(e){super(),ae(this,e,Te,Ve,re,{startDate:0,endDate:1})}}function fe(i){let e,s,t,r;return{c(){e=w("span"),s=I(":"),t=q(),r=I(i[4]),this.h()},l(o){e=E(o,"SPAN",{class:!0});var a=C(e);s=z(a,":"),a.forEach(p),t=S(o),r=z(o,i[4]),this.h()},h(){y(e,"class","text-gray-700 dark:text-gray-400")},m(o,a){R(o,e,a),d(e,s),R(o,t,a),R(o,r,a)},p(o,a){a&16&&A(r,o[4])},d(o){o&&p(e),o&&p(t),o&&p(r)}}}function Oe(i){let e,s,t,r;return{c(){e=w("div"),s=I("Repository: "),t=w("a"),r=I(i[5]),this.h()},l(o){e=E(o,"DIV",{class:!0});var a=C(e);s=z(a,"Repository: "),t=E(a,"A",{class:!0,href:!0,target:!0,rel:!0});var l=C(t);r=z(l,i[5]),l.forEach(p),a.forEach(p),this.h()},h(){y(t,"class","text-blue-600 underline"),y(t,"href",i[5]),y(t,"target","_blank"),y(t,"rel","noopener"),y(e,"class","text-sm")},m(o,a){R(o,e,a),d(e,s),d(e,t),d(t,r)},p(o,a){a&32&&A(r,o[5]),a&32&&y(t,"href",o[5])},d(o){o&&p(e)}}}function Be(i){let e,s,t,r,o;return{c(){e=w("div"),s=I(i[7]),t=I(": "),r=w("a"),o=I(i[6]),this.h()},l(a){e=E(a,"DIV",{class:!0});var l=C(e);s=z(l,i[7]),t=z(l,": "),r=E(l,"A",{class:!0,href:!0,target:!0,rel:!0});var n=C(r);o=z(n,i[6]),n.forEach(p),l.forEach(p),this.h()},h(){y(r,"class","text-blue-600 underline"),y(r,"href",i[6]),y(r,"target","_blank"),y(r,"rel","noopener"),y(e,"class","text-sm")},m(a,l){R(a,e,l),d(e,s),d(e,t),d(e,r),d(r,o)},p(a,l){l&128&&A(s,a[7]),l&64&&A(o,a[6]),l&64&&y(r,"href",a[6])},d(a){a&&p(e)}}}function ce(i){let e,s;return{c(){e=new De(!1),s=G(),this.h()},l(t){e=ke(t,!1),s=G(),this.h()},h(){e.a=s},m(t,r){e.m(i[2],t,r),R(t,s,r)},p(t,r){r&4&&e.p(t[2])},d(t){t&&p(s),t&&e.d()}}}function Ne(i){let e,s,t,r,o,a,l,n,f,m,c,v=i[4]&&fe(i);l=new He({props:{startDate:i[0],endDate:i[1]}});function D(_,g){if(_[6])return Be;if(_[5])return Oe}let $=D(i),u=$&&$(i),h=i[2]&&ce(i);return{c(){e=w("div"),s=w("div"),t=w("h3"),r=w("strong"),o=I(i[3]),v&&v.c(),a=q(),Q(l.$$.fragment),n=q(),u&&u.c(),f=q(),h&&h.c(),this.h()},l(_){e=E(_,"DIV",{class:!0});var g=C(e);s=E(g,"DIV",{class:!0});var j=C(s);t=E(j,"H3",{class:!0});var O=C(t);r=E(O,"STRONG",{class:!0});var N=C(r);o=z(N,i[3]),N.forEach(p),v&&v.l(O),O.forEach(p),a=S(j),X(l.$$.fragment,j),j.forEach(p),n=S(g),u&&u.l(g),f=S(g),h&&h.l(g),g.forEach(p),this.h()},h(){y(r,"class","font-bold"),y(t,"class","font-mono text-sm leading-tight"),y(s,"class","flex flex-row justify-between"),y(e,"class",m=i[2]||i[5]?"mb-2":"")},m(_,g){R(_,e,g),d(e,s),d(s,t),d(t,r),d(r,o),v&&v.m(t,null),d(s,a),Y(l,s,null),d(e,n),u&&u.m(e,null),d(e,f),h&&h.m(e,null),c=!0},p(_,[g]){(!c||g&8)&&A(o,_[3]),_[4]?v?v.p(_,g):(v=fe(_),v.c(),v.m(t,null)):v&&(v.d(1),v=null);const j={};g&1&&(j.startDate=_[0]),g&2&&(j.endDate=_[1]),l.$set(j),$===($=D(_))&&u?u.p(_,g):(u&&u.d(1),u=$&&$(_),u&&(u.c(),u.m(e,f))),_[2]?h?h.p(_,g):(h=ce(_),h.c(),h.m(e,null)):h&&(h.d(1),h=null),(!c||g&36&&m!==(m=_[2]||_[5]?"mb-2":""))&&y(e,"class",m)},i(_){c||(V(l.$$.fragment,_),c=!0)},o(_){B(l.$$.fragment,_),c=!1},d(_){_&&p(e),v&&v.d(),Z(l),u&&u.d(),h&&h.d()}}}function Ue(i,e,s){let{startDate:t}=e,{endDate:r}=e,{description:o}=e,{primary:a}=e,{secondary:l}=e,{repository:n}=e,{href:f}=e,{hrefLabel:m}=e;return i.$$set=c=>{"startDate"in c&&s(0,t=c.startDate),"endDate"in c&&s(1,r=c.endDate),"description"in c&&s(2,o=c.description),"primary"in c&&s(3,a=c.primary),"secondary"in c&&s(4,l=c.secondary),"repository"in c&&s(5,n=c.repository),"href"in c&&s(6,f=c.href),"hrefLabel"in c&&s(7,m=c.hrefLabel)},[t,r,o,a,l,n,f,m]}class oe extends te{constructor(e){super(),ae(this,e,Ue,Ne,re,{startDate:0,endDate:1,description:2,primary:3,secondary:4,repository:5,href:6,hrefLabel:7})}}function Ae(i){let e,s,t,r,o,a,l;const n=i[2].default,f=we(n,i,i[1],null);return{c(){e=w("section"),s=w("h2"),t=I(i[0]),r=q(),o=w("br"),a=q(),f&&f.c(),this.h()},l(m){e=E(m,"SECTION",{class:!0});var c=C(e);s=E(c,"H2",{class:!0});var v=C(s);t=z(v,i[0]),v.forEach(p),r=S(c),o=E(c,"BR",{}),a=S(c),f&&f.l(c),c.forEach(p),this.h()},h(){y(s,"class","font-mono text-blue-600 dark:text-blue-400 font-semibold text-lg leading-tight"),y(e,"class","mb-3")},m(m,c){R(m,e,c),d(e,s),d(s,t),d(e,r),d(e,o),d(e,a),f&&f.m(e,null),l=!0},p(m,[c]){(!l||c&1)&&A(t,m[0]),f&&f.p&&(!l||c&2)&&Ee(f,n,m,m[1],l?Ce(n,m[1],c,null):je(m[1]),null)},i(m){l||(V(f,m),l=!0)},o(m){B(f,m),l=!1},d(m){m&&p(e),f&&f.d(m)}}}function Fe(i,e,s){let{$$slots:t={},$$scope:r}=e,{heading:o}=e;return i.$$set=a=>{"heading"in a&&s(0,o=a.heading),"$$scope"in a&&s(1,r=a.$$scope)},[o,r,t]}class se extends te{constructor(e){super(),ae(this,e,Fe,Ae,re,{heading:0})}}function he(i,e,s){const t=i.slice();return t[5]=e[s][0],t[4]=e[s][1],t}function me(i,e,s){const t=i.slice();return t[8]=e[s].attributes.title,t[9]=e[s].attributes.institution,t[10]=e[s].attributes.startDate,t[11]=e[s].attributes.endDate,t}function de(i,e,s){const t=i.slice();return t[8]=e[s].attributes.title,t[14]=e[s].attributes.description,t[15]=e[s].attributes.project.data.attributes.title,t[10]=e[s].attributes.project.data.attributes.startDate,t[16]=e[s].attributes.project.data.attributes.hackathon,t[17]=e[s].attributes.project.data.attributes.href,t[18]=e[s].attributes.project.data.attributes.hrefLabel,t[19]=e[s].attributes.project.data.attributes.repository,t}function pe(i,e,s){const t=i.slice();return t[8]=e[s].attributes.title,t[22]=e[s].attributes.organization,t[10]=e[s].attributes.startDate,t[11]=e[s].attributes.endDate,t[14]=e[s].attributes.description,t}function _e(i,e,s){const t=i.slice();return t[25]=e[s].attributes.name,t[17]=e[s].attributes.href,t[8]=e[s].attributes.title,t[26]=e[s].attributes.icon,t}function ge(i){let e,s,t=i[26].data.attributes.html+"",r,o=i[8]+"",a,l,n,f=i[25]+"",m,c;return{c(){e=w("div"),s=new De(!1),r=q(),a=I(o),l=I(`:
              `),n=w("a"),m=I(f),c=q(),this.h()},l(v){e=E(v,"DIV",{});var D=C(e);s=ke(D,!1),r=S(D),a=z(D,o),l=z(D,`:
              `),n=E(D,"A",{target:!0,href:!0});var $=C(n);m=z($,f),$.forEach(p),c=S(D),D.forEach(p),this.h()},h(){s.a=r,y(n,"target","_blank"),y(n,"href",i[17])},m(v,D){R(v,e,D),s.m(t,e),d(e,r),d(e,a),d(e,l),d(e,n),d(n,m),d(e,c)},p:x,d(v){v&&p(e)}}}function be(i){let e,s;return e=new oe({props:{primary:i[22],secondary:i[8],startDate:i[10],endDate:i[11],description:i[14]}}),{c(){Q(e.$$.fragment)},l(t){X(e.$$.fragment,t)},m(t,r){Y(e,t,r),s=!0},p:x,i(t){s||(V(e.$$.fragment,t),s=!0)},o(t){B(e.$$.fragment,t),s=!1},d(t){Z(e,t)}}}function We(i){let e,s,t=i[1],r=[];for(let a=0;a<t.length;a+=1)r[a]=be(pe(i,t,a));const o=a=>B(r[a],1,1,()=>{r[a]=null});return{c(){for(let a=0;a<r.length;a+=1)r[a].c();e=G()},l(a){for(let l=0;l<r.length;l+=1)r[l].l(a);e=G()},m(a,l){for(let n=0;n<r.length;n+=1)r[n]&&r[n].m(a,l);R(a,e,l),s=!0},p(a,l){if(l&2){t=a[1];let n;for(n=0;n<t.length;n+=1){const f=pe(a,t,n);r[n]?(r[n].p(f,l),V(r[n],1)):(r[n]=be(f),r[n].c(),V(r[n],1),r[n].m(e.parentNode,e))}for(le(),n=t.length;n<r.length;n+=1)o(n);ie()}},i(a){if(!s){for(let l=0;l<t.length;l+=1)V(r[l]);s=!0}},o(a){r=r.filter(Boolean);for(let l=0;l<r.length;l+=1)B(r[l]);s=!1},d(a){ee(r,a),a&&p(e)}}}function ve(i){let e,s;return e=new oe({props:{primary:i[15],secondary:i[16],repository:i[19],href:i[17],hrefLabel:i[18],startDate:i[10],description:i[14]}}),{c(){Q(e.$$.fragment)},l(t){X(e.$$.fragment,t)},m(t,r){Y(e,t,r),s=!0},p:x,i(t){s||(V(e.$$.fragment,t),s=!0)},o(t){B(e.$$.fragment,t),s=!1},d(t){Z(e,t)}}}function Ge(i){let e,s,t=i[2],r=[];for(let a=0;a<t.length;a+=1)r[a]=ve(de(i,t,a));const o=a=>B(r[a],1,1,()=>{r[a]=null});return{c(){for(let a=0;a<r.length;a+=1)r[a].c();e=G()},l(a){for(let l=0;l<r.length;l+=1)r[l].l(a);e=G()},m(a,l){for(let n=0;n<r.length;n+=1)r[n]&&r[n].m(a,l);R(a,e,l),s=!0},p(a,l){if(l&4){t=a[2];let n;for(n=0;n<t.length;n+=1){const f=de(a,t,n);r[n]?(r[n].p(f,l),V(r[n],1)):(r[n]=ve(f),r[n].c(),V(r[n],1),r[n].m(e.parentNode,e))}for(le(),n=t.length;n<r.length;n+=1)o(n);ie()}},i(a){if(!s){for(let l=0;l<t.length;l+=1)V(r[l]);s=!0}},o(a){r=r.filter(Boolean);for(let l=0;l<r.length;l+=1)B(r[l]);s=!1},d(a){ee(r,a),a&&p(e)}}}function $e(i){let e,s,t,r;return e=new oe({props:{primary:i[9],secondary:i[8],startDate:i[10],endDate:i[11]}}),{c(){Q(e.$$.fragment),s=q(),t=w("br")},l(o){X(e.$$.fragment,o),s=S(o),t=E(o,"BR",{})},m(o,a){Y(e,o,a),R(o,s,a),R(o,t,a),r=!0},p(o,a){const l={};a&1&&(l.primary=o[9]),a&1&&(l.secondary=o[8]),a&1&&(l.startDate=o[10]),a&1&&(l.endDate=o[11]),e.$set(l)},i(o){r||(V(e.$$.fragment,o),r=!0)},o(o){B(e.$$.fragment,o),r=!1},d(o){Z(e,o),o&&p(s),o&&p(t)}}}function Ke(i){let e,s,t=i[0].educations,r=[];for(let a=0;a<t.length;a+=1)r[a]=$e(me(i,t,a));const o=a=>B(r[a],1,1,()=>{r[a]=null});return{c(){for(let a=0;a<r.length;a+=1)r[a].c();e=G()},l(a){for(let l=0;l<r.length;l+=1)r[l].l(a);e=G()},m(a,l){for(let n=0;n<r.length;n+=1)r[n]&&r[n].m(a,l);R(a,e,l),s=!0},p(a,l){if(l&1){t=a[0].educations;let n;for(n=0;n<t.length;n+=1){const f=me(a,t,n);r[n]?(r[n].p(f,l),V(r[n],1)):(r[n]=$e(f),r[n].c(),V(r[n],1),r[n].m(e.parentNode,e))}for(le(),n=t.length;n<r.length;n+=1)o(n);ie()}},i(a){if(!s){for(let l=0;l<t.length;l+=1)V(r[l]);s=!0}},o(a){r=r.filter(Boolean);for(let l=0;l<r.length;l+=1)B(r[l]);s=!1},d(a){ee(r,a),a&&p(e)}}}function ye(i){let e,s,t=Pe(i[5])+"",r,o,a,l=i[4].join(", ")+"",n,f;return{c(){e=w("section"),s=w("h2"),r=I(t),o=I(":"),a=q(),n=I(l),f=q(),this.h()},l(m){e=E(m,"SECTION",{class:!0});var c=C(e);s=E(c,"H2",{class:!0});var v=C(s);r=z(v,t),o=z(v,":"),v.forEach(p),a=S(c),n=z(c,l),f=S(c),c.forEach(p),this.h()},h(){y(s,"class","font-mono text-blue-600 dark:text-blue-400 font-semibold inline"),y(e,"class","text-xs")},m(m,c){R(m,e,c),d(e,s),d(s,r),d(s,o),d(e,a),d(e,n),d(e,f)},p:x,d(m){m&&p(e)}}}function Je(i){let e,s,t,r,o,a,l,n,f,m,c,v,D,$,u,h,_,g,j,O,N=i[3],L=[];for(let b=0;b<N.length;b+=1)L[b]=ge(_e(i,N,b));$=new se({props:{heading:"Work Experience",$$slots:{default:[We]},$$scope:{ctx:i}}}),h=new se({props:{heading:"Projects",$$slots:{default:[Ge]},$$scope:{ctx:i}}}),g=new se({props:{heading:"Education",$$slots:{default:[Ke]},$$scope:{ctx:i}}});let M=i[4],P=[];for(let b=0;b<M.length;b+=1)P[b]=ye(he(i,M,b));return{c(){e=w("div"),s=w("div"),t=w("div"),r=w("div"),o=w("div"),a=w("h1"),l=I("Harit Kapadia"),n=q(),f=w("div");for(let b=0;b<L.length;b+=1)L[b].c();m=q(),c=w("br"),v=q(),D=w("div"),Q($.$$.fragment),u=q(),Q(h.$$.fragment),_=q(),Q(g.$$.fragment),j=q();for(let b=0;b<P.length;b+=1)P[b].c();this.h()},l(b){e=E(b,"DIV",{class:!0});var T=C(e);s=E(T,"DIV",{class:!0});var H=C(s);t=E(H,"DIV",{class:!0});var U=C(t);r=E(U,"DIV",{class:!0});var K=C(r);o=E(K,"DIV",{class:!0});var k=C(o);a=E(k,"H1",{class:!0});var F=C(a);l=z(F,"Harit Kapadia"),F.forEach(p),k.forEach(p),n=S(K),f=E(K,"DIV",{class:!0});var ue=C(f);for(let J=0;J<L.length;J+=1)L[J].l(ue);ue.forEach(p),K.forEach(p),m=S(U),c=E(U,"BR",{}),v=S(U),D=E(U,"DIV",{});var W=C(D);X($.$$.fragment,W),u=S(W),X(h.$$.fragment,W),_=S(W),X(g.$$.fragment,W),j=S(W);for(let J=0;J<P.length;J+=1)P[J].l(W);W.forEach(p),U.forEach(p),H.forEach(p),T.forEach(p),this.h()},h(){y(a,"class","font-mono text-blue-600 dark:text-blue-400 font-black uppercase leading-none svelte-7p229p"),y(o,"class","name svelte-7p229p"),y(f,"class","contacts gap-x-4 text-xs svelte-7p229p"),y(r,"class","letterhead svelte-7p229p"),y(t,"class","content svelte-7p229p"),y(s,"class","page-box svelte-7p229p"),y(e,"class","mx-4")},m(b,T){R(b,e,T),d(e,s),d(s,t),d(t,r),d(r,o),d(o,a),d(a,l),d(r,n),d(r,f);for(let H=0;H<L.length;H+=1)L[H]&&L[H].m(f,null);d(t,m),d(t,c),d(t,v),d(t,D),Y($,D,null),d(D,u),Y(h,D,null),d(D,_),Y(g,D,null),d(D,j);for(let H=0;H<P.length;H+=1)P[H]&&P[H].m(D,null);O=!0},p(b,[T]){if(T&8){N=b[3];let k;for(k=0;k<N.length;k+=1){const F=_e(b,N,k);L[k]?L[k].p(F,T):(L[k]=ge(F),L[k].c(),L[k].m(f,null))}for(;k<L.length;k+=1)L[k].d(1);L.length=N.length}const H={};T&536870912&&(H.$$scope={dirty:T,ctx:b}),$.$set(H);const U={};T&536870912&&(U.$$scope={dirty:T,ctx:b}),h.$set(U);const K={};if(T&536870913&&(K.$$scope={dirty:T,ctx:b}),g.$set(K),T&16){M=b[4];let k;for(k=0;k<M.length;k+=1){const F=he(b,M,k);P[k]?P[k].p(F,T):(P[k]=ye(F),P[k].c(),P[k].m(D,null))}for(;k<P.length;k+=1)P[k].d(1);P.length=M.length}},i(b){O||(V($.$$.fragment,b),V(h.$$.fragment,b),V(g.$$.fragment,b),O=!0)},o(b){B($.$$.fragment,b),B(h.$$.fragment,b),B(g.$$.fragment,b),O=!1},d(b){b&&p(e),ee(L,b),Z($),Z(h),Z(g),ee(P,b)}}}function Qe(i,e,s){Re("headerWidth","8.5in");let{data:t}=e;const r=Object.entries(t.tags.reduce((n,{attributes:{name:f,type:m}})=>(m in n||(n[m]=[]),n[m].push(f),n),{})).map(([n,f])=>[n,f.sort()]).sort((n,f)=>n[0].localeCompare(f[0])),o=t.jobs.filter(n=>!n.attributes.project.data).sort((n,f)=>n.attributes.startDate.localeCompare(f.attributes.startDate)).reverse(),a=t.jobs.filter(n=>n.attributes.project.data).sort((n,f)=>n.attributes.project.data.attributes.startDate.localeCompare(f.attributes.project.data.attributes.startDate)).reverse(),l=t.contacts;return i.$$set=n=>{"data"in n&&s(0,t=n.data)},[t,o,a,l,r]}class Ye extends te{constructor(e){super(),ae(this,e,Qe,Je,re,{data:0})}}export{Ye as default};
