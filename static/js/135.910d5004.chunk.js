"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[135],{713:function(e,n,t){t.d(n,{Df:function(){return o},IQ:function(){return f},Jh:function(){return d},Pg:function(){return l},Pt:function(){return u}});var r=t(861),i=t(757),a=t.n(i),s=t(263);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="ab77f0c04f8ab9ce7b6392ae1e254264",o=function(){var e=(0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s.Z.get("trending/movie/day",{params:{api_key:c}}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s.Z.get("search/movie",{params:{api_key:c,query:n}}));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(e){return s.Z.get("movie/".concat(e),{params:{api_key:c}})},f=function(e){return s.Z.get("movie/".concat(e,"/credits"),{params:{api_key:c}})},d=function(e){return s.Z.get("movie/".concat(e,"/reviews"),{params:{api_key:c}})}},854:function(e,n,t){t.d(n,{a:function(){return i}});var r=t(184),i=function(){return(0,r.jsx)("div",{className:" fixed top-0 left-0 z-20 flex h-full w-full items-center justify-center bg-gray-900 bg-opacity-90",children:(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center gap-4 text-slate-50",children:[(0,r.jsx)("h2",{className:"text-4xl font-bold",children:"Loading"}),(0,r.jsx)("svg",{fill:"none",className:"h-14 w-14 animate-spin",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{clipRule:"evenodd",d:"M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z",fill:"currentColor",fillRule:"evenodd"})})]})})}},135:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var r=t(861),i=t(439),a=t(757),s=t.n(a),c=t(713),o=t(791),u=t(806),l=t(87),f=t(689),d=t(854),p={BackButton:"MovieDetails_BackButton__on4hH",Box:"MovieDetails_Box__AXGFq",Img:"MovieDetails_Img__BiNph",Link:"MovieDetails_Link__HT1W6"},h=t(184),v=function(){var e=(0,f.TH)().state,n=(0,f.UO)(null).movieId,t=(0,o.useState)({}),a=(0,i.Z)(t,2),v=a[0],x=a[1],m=(0,o.useState)(!1),_=(0,i.Z)(m,2),j=_[0],g=_[1],w=(0,o.useState)(!1),k=(0,i.Z)(w,2),b=k[0],y=k[1],B=null!==e&&void 0!==e&&e.from?e.from.pathname:"/",Z=(0,o.useRef)(B);return(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,y(!0),e.next=4,(0,c.Pg)(n);case 4:t=e.sent,x(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),g(!0);case 11:return e.prev=11,y(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),j?(0,h.jsx)("p",{children:"Error"}):b?(0,h.jsx)(d.a,{}):(0,h.jsxs)("section",{className:p.Section,children:[(0,h.jsx)(l.rU,{className:p.BackButton,to:null===Z||void 0===Z?void 0:Z.current,children:"Back"}),(0,h.jsxs)("div",{className:p.Box,children:[v.poster_path&&(0,h.jsx)("img",{className:p.Img,src:"https://image.tmdb.org/t/p/w500".concat(v.poster_path),alt:"",width:"300"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:v.title}),(0,h.jsxs)("p",{children:["User score: ",v.vote_average]}),(0,h.jsx)("h3",{children:"Overview"}),(0,h.jsx)("p",{children:v.overview}),(0,h.jsx)("h3",{children:"Genres"}),(null===v||void 0===v?void 0:v.genres)&&(0,h.jsx)("ul",{children:v.genres.map((function(e){var n=e.id,t=e.name;return(0,h.jsx)("li",{children:t},n)}))})]})]}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(l.rU,{className:p.Link,to:u._.CAST,children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(l.rU,{className:p.Link,to:u._.REVIEWS,children:"Reviews"})})]}),(0,h.jsx)(o.Suspense,{fallback:null,children:(0,h.jsx)(f.j3,{})})]})}}}]);
//# sourceMappingURL=135.910d5004.chunk.js.map