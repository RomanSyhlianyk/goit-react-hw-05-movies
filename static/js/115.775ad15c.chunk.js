"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[115],{713:function(e,t,n){n.d(t,{Df:function(){return s},IQ:function(){return l},Jh:function(){return p},Pg:function(){return f},Pt:function(){return o}});var r=n(861),a=n(757),i=n.n(a),c=n(263);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var u="ab77f0c04f8ab9ce7b6392ae1e254264",s=function(){var e=(0,r.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.Z.get("trending/movie/day",{params:{api_key:u}}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.Z.get("search/movie",{params:{api_key:u,query:t}}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){return c.Z.get("movie/".concat(e),{params:{api_key:u}})},l=function(e){return c.Z.get("movie/".concat(e,"/credits"),{params:{api_key:u}})},p=function(e){return c.Z.get("movie/".concat(e,"/reviews"),{params:{api_key:u}})}},854:function(e,t,n){n.d(t,{a:function(){return a}});var r=n(184),a=function(){return(0,r.jsx)("div",{className:" fixed top-0 left-0 z-20 flex h-full w-full items-center justify-center bg-gray-900 bg-opacity-90",children:(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center gap-4 text-slate-50",children:[(0,r.jsx)("h2",{className:"text-4xl font-bold",children:"Loading"}),(0,r.jsx)("svg",{fill:"none",className:"h-14 w-14 animate-spin",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{clipRule:"evenodd",d:"M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z",fill:"currentColor",fillRule:"evenodd"})})]})})}},115:function(e,t,n){n.r(t);var r=n(861),a=n(439),i=n(757),c=n.n(i),u=n(713),s=n(854),o=n(791),f=n(689),l=n(184);t.default=function(){var e=(0,f.UO)(null).movieId,t=(0,o.useState)([]),n=(0,a.Z)(t,2),i=n[0],p=n[1],d=(0,o.useState)(!1),h=(0,a.Z)(d,2),v=h[0],m=h[1],x=(0,o.useState)(!1),g=(0,a.Z)(x,2),w=g[0],b=g[1];return(0,o.useEffect)((function(){b(!0);var t=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,b(!0),t.next=4,(0,u.IQ)(e);case 4:n=t.sent,p(n.data.cast),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),m(!0);case 11:return t.prev=11,b(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),v?(0,l.jsx)("p",{children:"Error"}):w?(0,l.jsx)(s.a,{}):(0,l.jsx)("div",{children:(0,l.jsx)("ul",{children:i.length>0&&i.map((function(e){var t=e.name,n=e.profile_path,r=e.id;return(0,l.jsxs)("li",{children:[n&&(0,l.jsx)("img",{width:"120",src:"https://image.tmdb.org/t/p/w500".concat(n),alt:""}),(0,l.jsx)("h3",{children:t})]},r)}))})})}}}]);
//# sourceMappingURL=115.775ad15c.chunk.js.map