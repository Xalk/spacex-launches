(this.webpackJsonpspacex_launches=this.webpackJsonpspacex_launches||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},3:function(e,t,a){e.exports={innerBlock:"Ship_innerBlock__2WKfs",failStatus:"Ship_failStatus__2oCqh",shipBlock:"Ship_shipBlock__87gDM",name:"Ship_name__xLoz2",line:"Ship_line__1ozz8",data:"Ship_data__2neSz",description:"Ship_description__MGzPH",patch:"Ship_patch__h4gcw"}},46:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a.n(c),s=a(19),i=a.n(s),r=(a(25),a(26),a(6)),o=a.n(r),l=a.p+"static/media/spacex.5b6feb13.svg",d=a(0);var h=function(){return Object(d.jsx)("div",{className:o.a.header,children:Object(d.jsx)("div",{className:o.a.headerBody,children:Object(d.jsx)("img",{className:o.a.logo,src:l,alt:""})})})},u=a(10),p=a(7),j=a(9),_=a.n(j),m=a(3),f=a.n(m);var b=function(e){var t=e.name,a=e.data,c=e.description,n=e.patch,s=e.failures;return Object(d.jsx)("div",{className:f.a.shipBlock,children:Object(d.jsxs)("div",{className:s.length>0?f.a.innerBlock+" "+f.a.failStatus:f.a.innerBlock,children:[Object(d.jsx)("div",{className:f.a.name,children:t}),Object(d.jsx)("div",{className:f.a.data,children:a.slice(0,16).replace("T"," ")}),Object(d.jsx)("div",{className:f.a.line}),Object(d.jsx)("div",{className:f.a.description,children:c||"No description"}),Object(d.jsx)("div",{className:f.a.patch,children:Object(d.jsx)("img",{src:n,alt:""})})]})})},O=a(20),x=a.n(O),v=function(e){return x.a.post("https://api.spacexdata.com/v5/launches/query",{query:{},options:{page:e,limit:18}}).then((function(e){return e.data}))},S=a.p+"static/media/loader.938f4f85.svg";var g=function(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(1),i=Object(p.a)(s,2),r=i[0],o=i[1],l=Object(c.useState)(!0),h=Object(p.a)(l,2),j=h[0],m=h[1];Object(c.useEffect)((function(){j&&v(r).then((function(e){n([].concat(Object(u.a)(a),Object(u.a)(e.docs))),o((function(e){return e+1}))})).finally((function(){return m(!1)}))}),[j]),Object(c.useEffect)((function(){return document.addEventListener("scroll",f),function(){document.removeEventListener("scroll",f)}}),[]);var f=function(e){e.target.documentElement.scrollHeight-(e.target.documentElement.scrollTop+window.innerHeight)<100&&m(!0)};return Object(d.jsxs)("div",{className:_.a.ships,children:[a.map((function(e){return Object(d.jsx)(b,{name:e.name,data:e.date_local,description:e.details,patch:e.links.patch.small,failures:e.failures})})),j?Object(d.jsx)("img",{className:_.a.loader,src:S,alt:""}):""]})};var N=function(){return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(h,{}),Object(d.jsx)(g,{})]})};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root"))},6:function(e,t,a){e.exports={header:"Header_header__1H_nw",headerBody:"Header_headerBody__3GkI2",logo:"Header_logo__j7mOy"}},9:function(e,t,a){e.exports={ships:"Ships_ships__2dH2H",loader:"Ships_loader__3cPGl"}}},[[46,1,2]]]);
//# sourceMappingURL=main.c8950773.chunk.js.map