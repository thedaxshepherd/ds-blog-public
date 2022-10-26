"use strict";(self.webpackChunkds_blog_source=self.webpackChunkds_blog_source||[]).push([[450],{6029:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2021/11/10/website-hugo-for-blog","metadata":{"permalink":"/2021/11/10/website-hugo-for-blog","source":"@site/blog/2021-11-10-website-hugo-for-blog/index.md","title":"Using Hugo and GitHub Pages for my blog","description":"My Experience with using Hugo and deploying to Github Pages.","date":"2021-11-10T00:00:00.000Z","formattedDate":"November 10, 2021","tags":[{"label":"hugo","permalink":"/tags/hugo"},{"label":"github","permalink":"/tags/github"}],"readingTime":3.065,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"Using Hugo and GitHub Pages for my blog","keywords":["wordpress","migration","hugo","git","github","pages"],"description":"My Experience with using Hugo and deploying to Github Pages.","tags":["hugo","github"],"hide_table_of_contents":false,"draft":false,"comments":false}},"content":"![Sheep](./img/Sheep_Sitting.svg)\\r\\n\\r\\nI would like to say that this blog has been relaunched on GitHub using Hugo. If something never launched in the first place I am not sure it can be relaunched. \\r\\nI initially had a WordPress blog on SiteGround. It never made it out of test. I learned a lot about deploying WordPress and the different plugins. It did come \\r\\nin handy when my work started using WordPress for the company site. One of the things I immediately noticed is our site did not have a Favicon. \x3c!--truncate--\x3e\\r\\n\\r\\n### Hosting\\r\\n\\r\\nMoving the blog to GitHub pages was motivated by a couple of factors. The first, it is hard to justify paying for hosting when nothing is being posted to the public. \\r\\nWhen the renewal came due, it was time to try a different option.\\r\\n\\r\\nThe second reason is that by hosting it on GitHub it would encourage me to learn git. \\r\\n\\r\\n### Static Site Generator\\r\\n\\r\\nI chose Hugo as the static site generator for a couple reasons. It uses one executable for the program without a bunch of dependencies. It uses Go as the template \\r\\nlanguage and I was hoping for one that used a C like language. \\r\\n\\r\\n### Hugo Theme\\r\\n\\r\\nCurrently I am using the DPSG theme for Hugo. I had minimo while developing the site and then Mainroad. DPSG is a fork of Mainroad. I tend to fixate more on the theme \\r\\ninstead of the content. I am trying to stick with a theme until I create enough content. I am using Hugo modules for the theme. This makes it easy to update when a new \\r\\nversion of the theme comes out. \\r\\n\\r\\n### Syntax Highlighting\\r\\n\\r\\nI am using [PrismJS](https://prismjs.com/) for the syntax highlighting. Chroma which Hugo uses does not support languages such as DAX or M (Power Query). With PrismJS \\r\\nyou can select what languages and options you want to support and then add the references to the config file for the JS and CSS files.\\r\\n\\r\\nI chose to setup my deployment using 3 repositories. I use one for the source code that has the visibility set to private. I deploy using a Bash script.  The repository \\r\\nfor the Public folder is using a git submodule and is set to public visibility. Lastly, I have public repository for the comments. \\r\\n\\r\\n### Comments\\r\\n\\r\\nI am using [utterances](https://utteranc.es) for the blog comments. It uses GitHub issues to store the blog comments. I still have the option to turn off blog comments on \\r\\na per post basis using the variable in the front matter.\\r\\n\\r\\n### Tools\\r\\n\\r\\nTo edit the markdown I use  [Visual Studio Code](https://code.visualstudio.com). It allows me to preview the code as I write. I use \\r\\n[Windows Terminal](https://docs.microsoft.com/en-us/windows/terminal/)which allows me to have multiple tabs open with Git Bash, PowerShell, and Command Prompt. Windows Terminal \\r\\nis amazing and keeps getting better.\\r\\n\\r\\n### Art\\r\\n\\r\\nProfile picture and various art on the site is by [Martin B\xe9rub\xe9](https://www.how-to-draw-funny-cartoons.com/). I have zero artistic ability and really like his animated drawings. \\r\\nWhen I first setup the blog on WordPress I used the drawing of the sheep as a placeholder for my profile picture - watermark and all. When it came time to pick the actual profile \\r\\npicture I had become attached to the picture. I went ahead and purchased it from Martin.\\r\\n\\r\\n### My goal\\r\\n\\r\\nThis is a place where I can discuss my journey with learning new topics on things that interest me. The main focus will be around the Microsoft BI Stack. Topics such as the \\r\\nDAX language, DAX Studio, Tabular Editor, Analysis Services and Power BI. I also plan to discuss tools that help facilitate that journey such as Windows Terminal and Visual Studio \\r\\nCode."}]}')}}]);