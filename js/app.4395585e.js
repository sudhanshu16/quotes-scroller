(function(t){function e(e){for(var o,i,s=e[0],u=e[1],c=e[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},a=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/quotes-scroller/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"back-button",on:{click:t.previousQuote}},[n("IconButton",{attrs:{name:"back"}})],1),n("div",{staticClass:"middle-section"},[n("div",[n("div",{staticClass:"quote-area"},[n("span",{staticClass:"quote",domProps:{innerHTML:t._s(t.quotes[t.currentQuote].split("-")[0])}}),n("br"),n("span",{staticClass:"author",domProps:{innerHTML:t._s(t.quotes[t.currentQuote].split("-")[1])}})]),n("div",{staticClass:"download-button",on:{click:t.download}},[n("IconButton",{attrs:{name:"download"}})],1)])]),n("div",{staticClass:"forward-button",on:{click:t.nextQuote}},[n("IconButton",{attrs:{name:"forward"}})],1)])},a=[],i=(n("ac1f"),n("1276"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"button-container"},["back"===t.name?n("ArrowBack",{attrs:{w:"100px",h:"100px"}}):t._e(),"forward"===t.name?n("ArrowForward",{attrs:{w:"100px",h:"100px"}}):t._e(),"download"===t.name?n("Download",{attrs:{w:"100px",h:"100px"}}):t._e()],1)}),s=[],u=n("1414"),c=n("6081"),l=n("31ed"),d={props:["name"],components:{ArrowBack:u["a"],ArrowForward:c["a"],Download:l["a"]}},p=d,f=(n("e4aa"),n("2877")),h=Object(f["a"])(p,i,s,!1,null,null,null),v=h.exports,w={name:"app",components:{IconButton:v},data:function(){return{quotes:["That's one small step for a man, one giant leap for mankind - Neil Armstrong","The Universe is under no obligation to make sense to you - Neil deGrasse Tyson","I would like to die on Mars. Just not on impact - Elon Musk","If we can conquer space, we can conquer childhood hunger - Buzz Aldrin","The eternal silence of these infinite spaces frightens me - Blaise Pascal"],currentQuote:0}},methods:{previousQuote:function(){0===this.currentQuote?this.currentQuote=this.quotes.length:this.currentQuote--},nextQuote:function(){this.currentQuote===this.quotes.length-1?this.currentQuote=0:this.currentQuote++},fillWrappedText:function(t,e,n,o,r,a){for(var i=e.split(" "),s="",u=[],c=0;c<i.length;c++){var l=s+i[c]+" ",d=t.measureText(l),p=d.width;p>r&&c>0?(u.push(s),s=i[c]+" "):s=l}for(var f=o-u.length*a/2,h=0;h<u.length;h++)t.fillText(u[h],n,f),f+=a;t.fillText(s,n,f)},downloadCanvas:function(t,e){var n,o=document.createElement("a");o.download=e,o.href=t.toDataURL("image/png;base64"),document.createEvent?(n=document.createEvent("MouseEvents"),n.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),o.dispatchEvent(n)):o.fireEvent&&o.fireEvent("onclick")},download:function(){var t=document.createElement("canvas");t.width=500,t.height=200;var e=t.getContext("2d");e.textAlign="center",e.fillStyle="red",e.font="20px 'Avenir', Helvetica, Arial, sans-serif",this.fillWrappedText(e,this.quotes[this.currentQuote],250,100,450,25),this.downloadCanvas(t,"quote by - "+this.quotes[this.currentQuote].split("- ")[1])}}},m=w,b=(n("5c0b"),Object(f["a"])(m,r,a,!1,null,null,null)),g=b.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(g)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("9c0c"),r=n.n(o);r.a},"9c0c":function(t,e,n){},dfb6:function(t,e,n){},e4aa:function(t,e,n){"use strict";var o=n("dfb6"),r=n.n(o);r.a}});
//# sourceMappingURL=app.4395585e.js.map