(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[201],{4356:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resources/qbx_medical/Functions/Server/Hooks",function(){return n(1560)}])},967:function(e,r,n){"use strict";var o=n(1527);n(959);var t=n(6125),s=n(2349);let i={logo:(0,o.jsx)("div",{style:{paddingLeft:"50px",lineHeight:"38px",background:"url(/qbox-duck.png) no-repeat left",backgroundSize:"38px",fontWeight:550},children:"Qbox"}),project:{link:"https://github.com/Qbox-project"},chat:{link:"https://discord.gg/qbox"},docsRepositoryBase:"https://github.com/Qbox-project/qbox-project.github.io",footer:{text:"Qbox Project"},primaryHue:{dark:200,light:200},head:function(){let{asPath:e}=(0,s.useRouter)(),{frontMatter:r,title:n}=(0,t.ZR)(),i=r.description||"Documentation for the Qbox Project";return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,o.jsx)("link",{rel:"icon",type:"image/x-icon",href:"/qbox-duck.ico"}),(0,o.jsx)("meta",{httpEquiv:"Content-Language",content:"en"}),(0,o.jsx)("meta",{name:"description",content:i}),(0,o.jsx)("meta",{name:"og:title",content:n}),(0,o.jsx)("meta",{name:"og:description",content:i}),(0,o.jsx)("meta",{name:"og:url",content:"https://qbox-project.github.io".concat(e)})]})},useNextSeoProps:function(){let{asPath:e}=(0,s.useRouter)(),r=e.replace(/[-_]/g," ").split("/"),n="#"!==r[1][0]&&r[1]||"Qbox",o=r[r.length-1],t=/[a-z]/.test(o)&&/[A-Z]/.test(o)?o:"%s";return{titleTemplate:"".concat(t," - ").concat(o===n?"Documentation":n.replace(/(^\w|\s\w)/g,e=>e.toUpperCase()))}}};r.Z=i},1560:function(e,r,n){"use strict";n.r(r),n.d(r,{__toc:function(){return c}});var o=n(1527),t=n(3630),s=n(6125),i=n(967);n(4552);var a=n(6119);let c=[{depth:2,value:"registerHook",id:"registerhook"},{depth:3,value:"respawn",id:"respawn"},{depth:2,value:"removeHooks",id:"removehooks"}];function d(e){let r=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",span:"span",ul:"ul",li:"li",h3:"h3",br:"br"},(0,a.a)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h1,{children:"Hooks"}),"\n",(0,o.jsx)(r.p,{children:"Credit to overextended for the hook system."}),"\n",(0,o.jsx)(r.p,{children:"Event hooks allow 3rd party resources to define new behaviour without modifying the inventory code directly."}),"\n",(0,o.jsx)(r.h2,{id:"registerhook",children:"registerHook"}),"\n",(0,o.jsx)(r.pre,{"data-language":"lua","data-theme":"default",children:(0,o.jsx)(r.code,{"data-language":"lua","data-theme":"default",children:(0,o.jsxs)(r.span,{className:"line",children:[(0,o.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"exports.qbx_medical:"}),(0,o.jsx)(r.span,{style:{color:"var(--shiki-token-function)"},children:"registerHook"}),(0,o.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"(eventName, "}),(0,o.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,o.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(r.span,{style:{color:"var(--shiki-token-parameter)"},children:"payload"}),(0,o.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,o.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,o.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})})}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["eventName: ",(0,o.jsx)(r.code,{children:"string"})]}),"\n",(0,o.jsxs)(r.li,{children:["payload: ",(0,o.jsx)(r.code,{children:"table"})]}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"Return:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["hookId: ",(0,o.jsx)(r.code,{children:"number"})]}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"respawn",children:"respawn"}),"\n",(0,o.jsxs)(r.p,{children:['Triggered when moving any item from one slot to another, or when "giving" an item.',(0,o.jsx)(r.br,{}),"\n","By returning ",(0,o.jsx)(r.code,{children:"false"}),", you can cancel the action and revert the inventory state."]}),"\n",(0,o.jsx)(r.pre,{"data-language":"lua","data-theme":"default",children:(0,o.jsx)(r.code,{"data-language":"lua","data-theme":"default",children:(0,o.jsxs)(r.span,{className:"line",children:[(0,o.jsx)(r.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,o.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"@param"}),(0,o.jsx)(r.span,{style:{color:"var(--shiki-token-comment)"},children:" payload "}),(0,o.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"{"}),(0,o.jsx)(r.span,{style:{color:"var(--shiki-token-constant)"},children:"source"}),(0,o.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:": "}),(0,o.jsx)(r.span,{style:{color:"var(--shiki-token-constant)"},children:"number"}),(0,o.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"}"})]})})}),"\n",(0,o.jsx)(r.h2,{id:"removehooks",children:"removeHooks"}),"\n",(0,o.jsxs)(r.p,{children:["Removes a hook created by the invoking resource with the the specified id.",(0,o.jsx)(r.br,{}),"\n","If no id is specified then all hooks registered by the resource are removed."]}),"\n",(0,o.jsx)(r.pre,{"data-language":"lua","data-theme":"default",children:(0,o.jsx)(r.code,{"data-language":"lua","data-theme":"default",children:(0,o.jsxs)(r.span,{className:"line",children:[(0,o.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"exports.qbx_medical:"}),(0,o.jsx)(r.span,{style:{color:"var(--shiki-token-function)"},children:"removeHooks"}),(0,o.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"(id)"})]})})}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["id?: ",(0,o.jsx)(r.code,{children:"number"})]}),"\n"]})]})}let l={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,a.a)(),e.components);return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/resources/qbx_medical/Functions/Server/Hooks.mdx",route:"/resources/qbx_medical/Functions/Server/Hooks",pageMap:[{kind:"Meta",data:{index:"Introduction",installation:"Installation",resources:"Resources",converting:"Converting from QB",contributors:"Contributing",developers:"Developer's Guide",release:"Release Readiness",faq:"FAQ"}},{kind:"MdxPage",name:"contributors",route:"/contributors"},{kind:"MdxPage",name:"converting",route:"/converting"},{kind:"MdxPage",name:"developers",route:"/developers"},{kind:"MdxPage",name:"faq",route:"/faq"},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"installation",route:"/installation"},{kind:"MdxPage",name:"release",route:"/release"},{kind:"Folder",name:"resources",route:"/resources",children:[{kind:"Meta",data:{core:"Core"}},{kind:"Folder",name:"core",route:"/resources/core",children:[{kind:"Meta",data:{functions:"Functions",events:"Events",import:"Import",player:"Player"}},{kind:"Folder",name:"events",route:"/resources/core/events",children:[{kind:"Meta",data:{client:"Client",server:"Server"}},{kind:"MdxPage",name:"client",route:"/resources/core/events/client"},{kind:"MdxPage",name:"server",route:"/resources/core/events/server"}]},{kind:"Folder",name:"functions",route:"/resources/core/functions",children:[{kind:"Meta",data:{client:"Client",server:"Server",shared:"Shared"}},{kind:"MdxPage",name:"client",route:"/resources/core/functions/client"},{kind:"MdxPage",name:"server",route:"/resources/core/functions/server"},{kind:"MdxPage",name:"shared",route:"/resources/core/functions/shared"}]},{kind:"MdxPage",name:"import",route:"/resources/core/import"},{kind:"MdxPage",name:"player",route:"/resources/core/player"}]},{kind:"MdxPage",name:"core",route:"/resources/core"},{kind:"Folder",name:"qbx_diving",route:"/resources/qbx_diving",children:[{kind:"Folder",name:"Events",route:"/resources/qbx_diving/Events",children:[{kind:"MdxPage",name:"server",route:"/resources/qbx_diving/Events/server"},{kind:"Meta",data:{server:"Server"}}]}]},{kind:"Folder",name:"qbx_medical",route:"/resources/qbx_medical",children:[{kind:"Folder",name:"Events",route:"/resources/qbx_medical/Events",children:[{kind:"MdxPage",name:"Server",route:"/resources/qbx_medical/Events/Server"},{kind:"Meta",data:{Server:"Server"}}]},{kind:"Folder",name:"Functions",route:"/resources/qbx_medical/Functions",children:[{kind:"MdxPage",name:"Client",route:"/resources/qbx_medical/Functions/Client"},{kind:"Folder",name:"Server",route:"/resources/qbx_medical/Functions/Server",children:[{kind:"MdxPage",name:"Hooks",route:"/resources/qbx_medical/Functions/Server/Hooks"},{kind:"Meta",data:{Hooks:"Hooks"}}]},{kind:"Meta",data:{Client:"Client"}}]}]}]},{kind:"MdxPage",name:"resources",route:"/resources"}],flexsearch:{codeblocks:!0},title:"Hooks",headings:c},pageNextRoute:"/resources/qbx_medical/Functions/Server/Hooks",nextraLayout:s.ZP,themeConfig:i.Z};r.default=(0,t.j)(l)}},function(e){e.O(0,[791,774,888,179],function(){return e(e.s=4356)}),_N_E=e.O()}]);