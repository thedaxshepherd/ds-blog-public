"use strict";(self.webpackChunkds_blog_source=self.webpackChunkds_blog_source||[]).push([[610],{9703:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),l=a(5999),r=a(2244);function s(e){const{metadata:t}=e,{previousPage:a,nextPage:s}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,l.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(r.Z,{permalink:a,title:n.createElement(l.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),s&&n.createElement(r.Z,{permalink:s,title:n.createElement(l.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},9985:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),l=a(9460),r=a(1324);function s(e){let{items:t,component:a=r.Z}=e;return n.createElement(n.Fragment,null,t.map((e=>{let{content:t}=e;return n.createElement(l.n,{key:t.metadata.permalink,content:t},n.createElement(a,null,n.createElement(t,null)))})))}},1714:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var n=a(7294),l=a(6010),r=a(5999),s=a(8824),o=a(1944),i=a(5281),c=a(9960),g=a(9058),m=a(9703),u=a(197),p=a(9985);function d(e){const t=function(){const{selectMessage:e}=(0,s.c)();return t=>e(t,(0,r.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,r.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function h(e){let{tag:t}=e;const a=d(t);return n.createElement(n.Fragment,null,n.createElement(o.d,{title:a}),n.createElement(u.Z,{tag:"blog_tags_posts"}))}function E(e){let{tag:t,items:a,sidebar:l,listMetadata:s}=e;const o=d(t);return n.createElement(g.Z,{sidebar:l},n.createElement("header",{className:"margin-bottom--xl"},n.createElement("h1",null,o),n.createElement(c.Z,{href:t.allTagsPath},n.createElement(r.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),n.createElement(p.Z,{items:a}),n.createElement(m.Z,{metadata:s}))}function b(e){return n.createElement(o.FG,{className:(0,l.Z)(i.k.wrapper.blogPages,i.k.page.blogTagPostListPage)},n.createElement(h,e),n.createElement(E,e))}},4516:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(7294),l=a(5397),r=a(9460),s=a(5742),o=a(7870),i=a(2263),c=a(2949);function g(e){const{siteConfig:t}=(0,i.Z)(),{metadata:a,isBlogPostPage:g}=(0,r.C)(),{colorMode:m}=(0,c.I)(),{frontMatter:u,slug:p,title:d}=a,{comments:h=!0}=u;return g?n.createElement(n.Fragment,null,n.createElement(s.Z,null,n.createElement("title",null,a.title)),n.createElement(l.Z,e),n.createElement("div",{className:"margin-vert--xl"},h&&n.createElement(o.Z,{id:"comments",repo:"thedaxshepherd/ds-blog-comments",repoId:"R_kgDOIJajrA",category:"Announcements",categoryId:"DIC_kwDOIJajrM4CR1TB",mapping:"pathname",strict:"0",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",theme:"dark",lang:"en",loading:"lazy",crossorigin:"anonymous"}))):n.createElement(l.Z,e)}}}]);