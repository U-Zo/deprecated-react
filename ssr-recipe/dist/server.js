!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=8)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("fs")},function(e,t){e.exports={}},function(e,t){e.exports={}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),c=n(4),i=n.n(c),a=n(2),u=n.n(a),l=n(1),s=function(){return o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(l.Link,{to:"/red"},"Red")),o.a.createElement("li",null,o.a.createElement(l.Link,{to:"/blue"},"Blue")))},f=(n(6),function(){return o.a.createElement("div",{className:"Red"},"Red")}),p=function(){return o.a.createElement(f,null)},d=(n(7),function(){return o.a.createElement("div",{className:"Blue"},"Blue")}),m=function(){return o.a.createElement(d,null)},h=function(){return o.a.createElement("div",null,o.a.createElement(s,null),o.a.createElement("hr",null),o.a.createElement(l.Route,{path:"/red",component:p}),o.a.createElement(l.Route,{path:"/blue",component:m}))},v=n(3),b=n.n(v),x=n(5),y=n.n(x),E=JSON.parse(y.a.readFileSync(b.a.resolve("./build/asset-manifest.json"),"utf-8")),j=Object.keys(E.files).filter((function(e){return/chunk\.js$/.exec(e)})).map((function(e){return'<script src="'.concat(E.files[e],'"><\/script>')})).join("");var g=u()(),O=u.a.static(b.a.resolve("./build"),{index:!1});g.use(O),g.use((function(e,t,n){var r=o.a.createElement(l.StaticRouter,{location:e.url,context:{}},o.a.createElement(h,null)),c=i.a.renderToString(r);t.send(function(e){return'<!DOCTYPE html>\n<html lang="en">\n    <head>\n        <meta charset="utf-8"/>\n        <link rel="shortcut icon" href="/favicon.ico"/>\n        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>\n        <meta name="theme-color" content="#000000"/>\n        <title>React App</title>\n        <link href="'.concat(E.files["main.css"],'" rel="stylesheet"/>\n    </head>\n        <body>\n        <noscript>You need to enable JavaScript to run this app.</noscript>\n        <div id="root">\n            ').concat(e,'\n        </div>\n        <script src="').concat(E.files["runtime-main.js"],'"><\/script>\n        ').concat(j,'\n        <script src="').concat(E.files["main.js"],'"><\/script>\n    </body>\n</html>\n')}(c))})),g.listen(5e3,(function(){console.log("Running on http://localhost:5000")}))}]);