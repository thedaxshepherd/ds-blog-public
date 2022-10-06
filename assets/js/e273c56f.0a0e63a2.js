"use strict";(self.webpackChunkds_blog_source=self.webpackChunkds_blog_source||[]).push([[2362],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,g=m["".concat(i,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,l[1]=u;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2198:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={slug:"first-blog-post",title:"First Blog Post",authors:[],tags:["dax","dax studio"],draft:!1,comments:!0},l=void 0,u={permalink:"/first-blog-post",source:"@site/blog/2019-05-28-first-blog-post.md",title:"First Blog Post",description:"Testing out syntax highlighting.",date:"2019-05-28T00:00:00.000Z",formattedDate:"May 28, 2019",tags:[{label:"dax",permalink:"/tags/dax"},{label:"dax studio",permalink:"/tags/dax-studio"}],readingTime:.625,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"first-blog-post",title:"First Blog Post",authors:[],tags:["dax","dax studio"],draft:!1,comments:!0},prevItem:{title:"Long Blog Post",permalink:"/long-blog-post"}},i={authorsImageUrls:[]},s=[],p={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Testing out syntax highlighting."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dax",metastring:'title="DAX code for SelectColumns"',title:'"DAX',code:!0,for:!0,'SelectColumns"':!0},'--  SELECTCOLUMNS has a row context that can be used to write\n--  expressions that navigate through relationships.\nEVALUATE\nCALCULATETABLE (\n    SELECTCOLUMNS (\n        Sales,\n        "Order Number", Sales[Order Number],\n        "Order Line Number", Sales[Order Line Number],\n        "Customer", RELATED ( Customer[Name] ),\n        "Product", RELATED ( \'Product\'[Product Name] ),\n        "Quantity", Sales[Quantity],\n        "Line Amount", Sales[Quantity] * Sales[Net Price]\n    ),\n    \'Date\'[Date] = DATE ( 2007, 9, 19 ),\n    Customer[Customer Type] = "Person"\n)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powerquery",metastring:'title="power-query.m"',title:'"power-query.m"'},'let\n    Source = Excel.CurrentWorkbook(){[Name="Table1"]}[Content],\n    SplitColumnDelimiter = Table.SplitColumn(Source,"Input",Splitter.SplitTextByDelimiter(","),13),\n    Unpivot = Table.Unpivot(SplitColumnDelimiter,{"Input.1", "Input.2", "Input.3", "Input.4",\n    "Input.5", "Input.6",    "Input.7", "Input.8", "Input.9", "Input.10", "Input.11", "Input.12"\n    ,  "Input.13"},"Attribute","Value"),\n    RemovedColumns = Table.RemoveColumns(Unpivot,{"Attribute"}),\n    DuplicatesRemoved = Table.Distinct(RemovedColumns),\n    GroupedRows = Table.Group(DuplicatesRemoved, {"RowID"}, {{"Count of Distinct Values"\n    , each Table.RowCount(_), type number}})\nin\n    GroupedRows\n')))}c.isMDXComponent=!0}}]);