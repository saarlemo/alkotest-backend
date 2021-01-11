(this["webpackJsonpalkotest-frontend"]=this["webpackJsonpalkotest-frontend"]||[]).push([[0],{40:function(e,t,r){},65:function(e,t,r){},84:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r(0),i=r(6),a=r.n(i),o=(r(40),r(5)),s=r.n(o),l=r(9),u=r(12),d=r.n(u);console.log("url=".concat("https://alko-react-app.herokuapp.com/api/"));var j="https://alko-react-app.herokuapp.com/api/",h=function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get(j+"drinks");case 2:return t=e.sent,e.abrupt("return",t.data.drinks);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get(j+"nondrinks");case 2:return t=e.sent,e.abrupt("return",t.data.nondrinks);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get(j+"date");case 2:return t=e.sent,e.abrupt("return",t.data.date);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O={drinks:[],nondrinks:[]},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_ITEMS":return t.data;default:return e}},x=function(e){return{type:"SET_LIST_SIZE",data:e}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LIST_SIZE":return t.data;default:return e}},g=r(8),k={method:"price",toggleAlcoholic:!0,toggleOrder:!0,searchFilter:""},m=function(e){return{type:"method",data:e}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"method":return Object(g.a)(Object(g.a)({},e),{},{method:t.data.toLowerCase()});case"toggleAlcoholic":return Object(g.a)(Object(g.a)({},e),{},{toggleAlcoholic:!e.toggleAlcoholic});case"toggleOrder":return Object(g.a)(Object(g.a)({},e),{},{toggleOrder:!e.toggleOrder});case"filterSearch":return Object(g.a)(Object(g.a)({},e),{},{searchFilter:t.data});default:return e}},w=r(3),I=r(29),S=r(30),L=Object(S.a)([function(e){return e.sortOptions},function(e){return e.items.drinks},function(e){return e.listSize}],(function(e,t,r){switch(t=t.filter((function(t){return t.name.toLowerCase().includes(e.searchFilter)})),e.toggleAlcoholic){case!0:t=t.filter((function(e){return 0!==e.alcohol}));break;case!1:t=t.filter((function(e){return 0===e.alcohol}))}switch(e.method){case"price":t=t.sort((function(e,t){return t.price-e.price}));break;case"alcohol":t=t.sort((function(e,t){return t.alcohol-e.alcohol}));break;case"name":t=t.sort((function(e,t){return e.name.localeCompare(t.name)})).reverse();break;case"pple":t=t.sort((function(e,t){return t.priceperethanolL-e.priceperethanolL}));break;case"ppl":t=t.sort((function(e,t){return t.priceperL-e.priceperL}));break;case"size":t=t.sort((function(e,t){return t.size-e.size}));break;case"id":t=t.sort((function(e,t){return t.id-e.id}))}return e.toggleOrder&&(t=t.reverse()),t=t.slice(0,r)})),C=(r(65),function(e){var t=e.drink;return Object(n.jsxs)("div",{className:"drinkContainer",style:{},children:[Object(n.jsx)("div",{className:"drinkChildDiv drinkImg",children:Object(n.jsx)("img",{src:t.imgUrl,alt:t.name,crossOrigin:"anonymous"})}),Object(n.jsx)("div",{className:"drinkChildDiv drinkTable",children:Object(n.jsxs)("table",{children:[Object(n.jsx)("col",{style:{width:"50%"}}),Object(n.jsx)("col",{style:{width:"50%"}}),Object(n.jsx)("thead",{children:Object(n.jsx)("tr",{children:Object(n.jsx)("th",{colSpan:"2",children:t.name})})}),Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"price:"}),Object(n.jsxs)("td",{children:[t.price.toFixed(2),"\u20ac"]})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"alcohol:"}),Object(n.jsxs)("td",{children:[t.alcohol,"%"]})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"manufacturer:"}),Object(n.jsx)("td",{children:t.manufacturer})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"volume:"}),Object(n.jsxs)("td",{children:[t.size," L"]})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"price per L of ethanol:"}),Object(n.jsxs)("td",{children:[isNaN(t.priceperethanolL)?t.priceperethanolL:t.priceperethanolL.toFixed(2),isNaN(t.priceperethanolL)?"":"\u20ac"]})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"type:"}),Object(n.jsx)("td",{children:t.type})]})]})]})}),Object(n.jsx)("div",{className:"drinkChildDiv drinkDescription",children:t.description})]})}),T=function(){var e=Object(w.b)(),t=Object(w.c)((function(e){return e.listSize})),r=Object(w.c)(L);return Object(n.jsx)("div",{id:"drinkList",children:Object(n.jsx)(I.a,{dataLength:r.length,next:function(){e(x(t+20))},hasMore:!0,endMessage:Object(n.jsx)("h1",{children:"this is the end"}),children:r.map((function(e){return Object(n.jsx)(C,{drink:e},e.id)}))})})},N=r(34),D=function(){var e=Object(w.b)(),t=[{value:"name",label:"name"},{value:"price",label:"price"},{value:"alcohol",label:"alcohol content"},{value:"pple",label:"price per litre of pure ethanol"},{value:"ppl",label:"price per litre"},{value:"size",label:"size"},{value:"id",label:"id"}];return Object(n.jsxs)("div",{children:["order by:",Object(n.jsx)(N.a,{defaultValue:t.filter((function(e){return"pple"===e.value})),options:t,onChange:function(t){return function(t){e(m(t.value)),e(x(20))}(t)}})]})},E=function(){var e=Object(w.b)(),t=Object(w.c)((function(e){return e.sortOptions.toggleAlcoholic}));return Object(n.jsxs)("div",{children:["alcohol?",Object(n.jsx)("button",{onClick:function(){return e({type:"toggleAlcoholic"}),void e(x(20))},children:t?"yes":"no"})]})},z=function(){var e=Object(w.b)(),t=Object(w.c)((function(e){return e.sortOptions.toggleOrder}));return Object(n.jsxs)("div",{children:["order: ",t?"ascending":"descending",Object(n.jsx)("button",{onClick:function(){return e({type:"toggleOrder"}),void e(x(20))},children:"toggle"})]})},A=function(){var e=Object(w.b)();return Object(n.jsxs)("div",{children:["search",Object(n.jsx)("input",{type:"text",onChange:function(t){return(r=t).preventDefault(),void e({type:"filterSearch",data:r.target.value});var r}})]})},_=function(){var e=Object(w.c)((function(e){return e.date})),t=new Date(e);return Object(n.jsxs)("div",{children:["Information last fetched: ",t.toLocaleString()]})},F=function(){return Object(n.jsxs)("div",{style:{backgroundColor:"white",boxShadow:"0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -5px rgba(0,0,0,0.20)",padding:"10px"},children:[Object(n.jsx)(_,{}),Object(n.jsx)(D,{}),Object(n.jsx)(z,{}),Object(n.jsx)(E,{}),Object(n.jsx)(A,{})]})},M=r(31),J=r.n(M),U=function(){var e=Object(w.b)();return Object(n.jsx)(J.a,{showUnder:2500,style:{position:"fixed",bottom:0,right:0,left:0,height:"40px",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#386292",transitionDuration:"0.2s"},onHide:function(){return e(x(20))},duration:400,children:Object(n.jsx)("span",{style:{color:"white"},children:"back to top"})})},Z=[],B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_DATE":return t.data;default:return e}},H=function(){var e=Object(w.b)();return Object(c.useEffect)((function(){e(function(){var e=Object(l.a)(s.a.mark((function e(t){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:return r=e.sent,console.log("drinks: ".concat(r.length)),e.next=6,p();case 6:n=e.sent,console.log("non-drinks: ".concat(n.length)),t({type:"INIT_ITEMS",data:{drinks:r,nondrinks:n}});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e(function(){var e=Object(l.a)(s.a.mark((function e(t){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:r=e.sent,console.log("last fetched: ".concat(JSON.stringify(r))),t({type:"INIT_DATE",data:r});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e(x(20)),e(m("pple"))}),[e]),Object(n.jsxs)("div",{children:[Object(n.jsx)(F,{}),Object(n.jsx)(T,{}),Object(n.jsx)(U,{})]})},R=r(10),V=r(32),W=r(33),q=Object(R.combineReducers)({listSize:v,items:f,sortOptions:y,date:B}),G=Object(R.createStore)(q,Object(W.composeWithDevTools)(Object(R.applyMiddleware)(V.a)));a.a.render(Object(n.jsx)(w.a,{store:G,children:Object(n.jsx)(H,{})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.c61e9e78.chunk.js.map