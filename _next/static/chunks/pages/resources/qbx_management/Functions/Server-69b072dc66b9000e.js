(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[415],{1249:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resources/qbx_management/Functions/Server",function(){return r(7374)}])},967:function(e,n,r){"use strict";var s=r(1527);r(959);var o=r(6125),t=r(2349);let i={logo:(0,s.jsx)("div",{style:{paddingLeft:"50px",lineHeight:"38px",background:"url(/qbox-duck.png) no-repeat left",backgroundSize:"38px",fontWeight:550},children:"Qbox"}),project:{link:"https://github.com/Qbox-project"},chat:{link:"https://discord.gg/qbox"},docsRepositoryBase:"https://github.com/Qbox-project/qbox-project.github.io",footer:{text:"Qbox Project"},primaryHue:{dark:200,light:200},head:function(){let{asPath:e}=(0,t.useRouter)(),{frontMatter:n,title:r}=(0,o.ZR)(),i=n.description||"Documentation for the Qbox Project";return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,s.jsx)("link",{rel:"icon",type:"image/x-icon",href:"/qbox-duck.ico"}),(0,s.jsx)("meta",{httpEquiv:"Content-Language",content:"en"}),(0,s.jsx)("meta",{name:"description",content:i}),(0,s.jsx)("meta",{name:"og:title",content:r}),(0,s.jsx)("meta",{name:"og:description",content:i}),(0,s.jsx)("meta",{name:"og:url",content:"https://qbox-project.github.io".concat(e)})]})},useNextSeoProps:function(){let{asPath:e}=(0,t.useRouter)(),n=e.replace(/[-_]/g," ").split("/"),r="#"!==n[1][0]&&n[1]||"Qbox",s=n[n.length-1],o=/[a-z]/.test(s)&&/[A-Z]/.test(s)?s:"%s";return{titleTemplate:"".concat(o," - ").concat(s===r?"Documentation":r.replace(/(^\w|\s\w)/g,e=>e.toUpperCase()))}}};n.Z=i},7374:function(e,n,r){"use strict";r.r(n),r.d(n,{__toc:function(){return l}});var s=r(1527),o=r(3630),t=r(6125),i=r(967);r(4552);var a=r(6119),c=r(8891);let l=[{depth:2,value:"Exports",id:"exports"},{depth:3,value:"RegisterBossMenu",id:"registerbossmenu"}];function d(e){let n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",h3:"h3",pre:"pre",span:"span"},(0,a.a)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{children:"Server"}),"\n",(0,s.jsx)(n.h2,{id:"exports",children:"Exports"}),"\n",(0,s.jsx)(c.UW,{type:"info",children:(0,s.jsxs)(n.p,{children:["called using ",(0,s.jsx)(n.code,{children:"exports.qbx_management:<FunctionName>"})]})}),"\n",(0,s.jsx)(n.h3,{id:"registerbossmenu",children:"RegisterBossMenu"}),"\n",(0,s.jsx)(n.p,{children:"Creates a boss menu. This is a runtime only change and will not modify files."}),"\n",(0,s.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(n.code,{"data-language":"lua","data-theme":"default",children:[(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@class"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"MenuInfo"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@field"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" groupName "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"string Name of the group"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@field"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" type "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'job'"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'gang' "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Type of group"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@field"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" coords "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"vector3 Coordinates of the zone"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@field"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" size? "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"vector3 uses vec3"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"("}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"1.5"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:", "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"1"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:".5"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:", "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"1"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:".5"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:") "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"if not set"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@field"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" rotation? "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"number uses 0.0 if not set"})]})]})})]})}let u={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.a)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/resources/qbx_management/Functions/Server.mdx",route:"/resources/qbx_management/Functions/Server",pageMap:[{kind:"Meta",data:{index:"Introduction",installation:"Installation",resources:"Resources",converting:"Converting from QB",contributors:"Contributing",developers:"Developer's Guide",release:"Release Readiness",faq:"FAQ"}},{kind:"MdxPage",name:"contributors",route:"/contributors"},{kind:"MdxPage",name:"converting",route:"/converting"},{kind:"MdxPage",name:"developers",route:"/developers"},{kind:"MdxPage",name:"faq",route:"/faq"},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"installation",route:"/installation"},{kind:"MdxPage",name:"release",route:"/release"},{kind:"Folder",name:"resources",route:"/resources",children:[{kind:"Folder",name:"core",route:"/resources/core",children:[{kind:"MdxPage",name:"Modules",route:"/resources/core/Modules"},{kind:"Meta",data:{functions:"Functions",events:"Events",Modules:"Modules",player:"Player"}},{kind:"Folder",name:"events",route:"/resources/core/events",children:[{kind:"Meta",data:{client:"Client",server:"Server"}},{kind:"MdxPage",name:"client",route:"/resources/core/events/client"},{kind:"MdxPage",name:"server",route:"/resources/core/events/server"}]},{kind:"Folder",name:"functions",route:"/resources/core/functions",children:[{kind:"Meta",data:{client:"Client",server:"Server",shared:"Shared"}},{kind:"MdxPage",name:"client",route:"/resources/core/functions/client"},{kind:"MdxPage",name:"server",route:"/resources/core/functions/server"},{kind:"MdxPage",name:"shared",route:"/resources/core/functions/shared"}]},{kind:"MdxPage",name:"player",route:"/resources/core/player"}]},{kind:"Folder",name:"qbx_ambulancejob",route:"/resources/qbx_ambulancejob",children:[{kind:"Folder",name:"Events",route:"/resources/qbx_ambulancejob/Events",children:[{kind:"MdxPage",name:"Client",route:"/resources/qbx_ambulancejob/Events/Client"},{kind:"MdxPage",name:"Server",route:"/resources/qbx_ambulancejob/Events/Server"},{kind:"Meta",data:{Client:"Client",Server:"Server"}}]}]},{kind:"Folder",name:"qbx_diving",route:"/resources/qbx_diving",children:[{kind:"Folder",name:"Events",route:"/resources/qbx_diving/Events",children:[{kind:"MdxPage",name:"server",route:"/resources/qbx_diving/Events/server"},{kind:"Meta",data:{server:"Server"}}]}]},{kind:"Folder",name:"qbx_management",route:"/resources/qbx_management",children:[{kind:"Folder",name:"Functions",route:"/resources/qbx_management/Functions",children:[{kind:"MdxPage",name:"Server",route:"/resources/qbx_management/Functions/Server"},{kind:"Meta",data:{Server:"Server"}}]}]},{kind:"Folder",name:"qbx_medical",route:"/resources/qbx_medical",children:[{kind:"Folder",name:"Events",route:"/resources/qbx_medical/Events",children:[{kind:"MdxPage",name:"Server",route:"/resources/qbx_medical/Events/Server"},{kind:"Meta",data:{Server:"Server"}}]},{kind:"Folder",name:"Functions",route:"/resources/qbx_medical/Functions",children:[{kind:"MdxPage",name:"Client",route:"/resources/qbx_medical/Functions/Client"},{kind:"Folder",name:"Server",route:"/resources/qbx_medical/Functions/Server",children:[{kind:"MdxPage",name:"Hooks",route:"/resources/qbx_medical/Functions/Server/Hooks"},{kind:"Meta",data:{Hooks:"Hooks"}}]},{kind:"Meta",data:{Client:"Client"}}]}]}]},{kind:"MdxPage",name:"resources",route:"/resources"}],flexsearch:{codeblocks:!0},title:"Server",headings:l},pageNextRoute:"/resources/qbx_management/Functions/Server",nextraLayout:t.ZP,themeConfig:i.Z};n.default=(0,o.j)(u)}},function(e){e.O(0,[791,774,888,179],function(){return e(e.s=1249)}),_N_E=e.O()}]);