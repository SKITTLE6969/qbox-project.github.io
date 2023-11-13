(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[788],{1769:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resources/qbx_medical/Functions/Client",function(){return a(7915)}])},967:function(e,n,a){"use strict";var t=a(1527);a(959);var s=a(6125),r=a(2349);let l={logo:(0,t.jsx)("div",{style:{paddingLeft:"50px",lineHeight:"38px",background:"url(/qbox-duck.png) no-repeat left",backgroundSize:"38px",fontWeight:550},children:"Qbox"}),project:{link:"https://github.com/Qbox-project"},chat:{link:"https://discord.gg/qbox"},docsRepositoryBase:"https://github.com/Qbox-project/qbox-project.github.io",footer:{text:"Qbox Project"},primaryHue:{dark:200,light:200},head:function(){let{asPath:e}=(0,r.useRouter)(),{frontMatter:n,title:a}=(0,s.ZR)(),l=n.description||"Documentation for the Qbox Project";return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,t.jsx)("link",{rel:"icon",type:"image/x-icon",href:"/qbox-duck.ico"}),(0,t.jsx)("meta",{httpEquiv:"Content-Language",content:"en"}),(0,t.jsx)("meta",{name:"description",content:l}),(0,t.jsx)("meta",{name:"og:title",content:a}),(0,t.jsx)("meta",{name:"og:description",content:l}),(0,t.jsx)("meta",{name:"og:url",content:"https://qbox-project.github.io".concat(e)})]})},useNextSeoProps:function(){let{asPath:e}=(0,r.useRouter)(),n=e.replace(/[-_]/g," ").split("/"),a="#"!==n[1][0]&&n[1]||"Qbox",t=n[n.length-1],s=/[a-z]/.test(t)&&/[A-Z]/.test(t)?t:"%s";return{titleTemplate:"".concat(s," - ").concat(t===a?"Documentation":a.replace(/(^\w|\s\w)/g,e=>e.toUpperCase()))}}};n.Z=l},7915:function(e,n,a){"use strict";a.r(n),a.d(n,{__toc:function(){return o}});var t=a(1527),s=a(3630),r=a(6125),l=a(967);a(4552);var i=a(6119),d=a(8891);let o=[{depth:2,value:"Exports",id:"exports"},{depth:3,value:"playDeadAnimation",id:"playdeadanimation"},{depth:3,value:"killPlayer",id:"killplayer"},{depth:3,value:"allowRespawn",id:"allowrespawn"},{depth:3,value:"disableRespawn",id:"disablerespawn"},{depth:3,value:"getBleedLevel",id:"getbleedlevel"},{depth:3,value:"setBleedLevel",id:"setbleedlevel"},{depth:3,value:"getInjuries",id:"getinjuries"},{depth:3,value:"getHp",id:"gethp"},{depth:3,value:"setHp",id:"sethp"},{depth:3,value:"isDead",id:"isdead"},{depth:3,value:"getLaststand",id:"getlaststand"},{depth:3,value:"getDeathTime",id:"getdeathtime"},{depth:3,value:"setDeathTime",id:"setdeathtime"},{depth:3,value:"getLaststandTime",id:"getlaststandtime"},{depth:3,value:"setLaststandTime",id:"setlaststandtime"},{depth:3,value:"resetMinorInjuries",id:"resetminorinjuries"},{depth:3,value:"resetAllInjuries",id:"resetallinjuries"},{depth:3,value:"createInjury",id:"createinjury"},{depth:3,value:"getPatientStatus",id:"getpatientstatus"},{depth:3,value:"makePlayerBlackout",id:"makeplayerblackout"},{depth:3,value:"makePlayerFadeOut",id:"makeplayerfadeout"},{depth:3,value:"removeBleed",id:"removebleed"}];function c(e){let n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",h3:"h3",pre:"pre",span:"span"},(0,i.a)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{children:"Client"}),"\n",(0,t.jsx)(n.h2,{id:"exports",children:"Exports"}),"\n",(0,t.jsx)(d.UW,{type:"info",children:(0,t.jsxs)(n.p,{children:["called using ",(0,t.jsx)(n.code,{children:"exports.qbx_medical:<FunctionName>"})]})}),"\n",(0,t.jsx)(n.h3,{id:"playdeadanimation",children:"playDeadAnimation"}),"\n",(0,t.jsx)(n.p,{children:"Puts player in the dead animation"}),"\n",(0,t.jsx)(n.h3,{id:"killplayer",children:"killPlayer"}),"\n",(0,t.jsx)(n.p,{children:"Puts player in death state"}),"\n",(0,t.jsx)(n.h3,{id:"allowrespawn",children:"allowRespawn"}),"\n",(0,t.jsx)(n.p,{children:"Allows player the ability to respawn"}),"\n",(0,t.jsx)(n.h3,{id:"disablerespawn",children:"disableRespawn"}),"\n",(0,t.jsx)(n.p,{children:"Does not allow the player the ability to respawn"}),"\n",(0,t.jsx)(n.h3,{id:"getbleedlevel",children:"getBleedLevel"}),"\n",(0,t.jsx)(n.p,{children:"0-4. How fast the player is bleeding"}),"\n",(0,t.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,t.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@return"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"integer level"})]})})}),"\n",(0,t.jsx)(n.h3,{id:"setbleedlevel",children:"setBleedLevel"}),"\n",(0,t.jsx)(n.p,{children:"0-4. How fast the player is bleeding"}),"\n",(0,t.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,t.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@param"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" integer "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"level"})]})})}),"\n",(0,t.jsx)(n.h3,{id:"getinjuries",children:"getInjuries"}),"\n",(0,t.jsx)(n.p,{children:"Gets the players injuries"}),"\n",(0,t.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,t.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@return"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Injury[]"})]})})}),"\n",(0,t.jsx)(n.h3,{id:"gethp",children:"getHp"}),"\n",(0,t.jsx)(n.p,{children:"Gets player's health"}),"\n",(0,t.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,t.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@return"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"number"})]})})}),"\n",(0,t.jsx)(n.h3,{id:"sethp",children:"setHp"}),"\n",(0,t.jsx)(n.p,{children:"Sets player's health"}),"\n",(0,t.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,t.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@param"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" number"})]})})}),"\n",(0,t.jsx)(n.h3,{id:"isdead",children:"isDead"}),"\n",(0,t.jsx)(n.p,{children:"Returns whether the player is in dead state or not"}),"\n",(0,t.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,t.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@return"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"boolean"})]})})}),"\n",(0,t.jsx)(n.h3,{id:"getlaststand",children:"getLaststand"}),"\n",(0,t.jsx)(n.p,{children:"Returns whether the player is in last stand state or not"}),"\n",(0,t.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,t.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@return"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"boolean"})]})})}),"\n",(0,t.jsx)(n.h3,{id:"getdeathtime",children:"getDeathTime"}),"\n",(0,t.jsx)(n.p,{children:"How many seconds until player's death timer reaches 0. This can only be used on a player in death state already."}),"\n",(0,t.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,t.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@return"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"integer"})]})})}),"\n",(0,t.jsx)(n.h3,{id:"setdeathtime",children:"setDeathTime"}),"\n",(0,t.jsx)(n.p,{children:"Set how many seconds left until player's death timer reaches 0. This can only be used on a player in death state already."}),"\n",(0,t.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,t.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@param"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" integer"})]})})}),"\n",(0,t.jsx)(n.h3,{id:"getlaststandtime",children:"getLaststandTime"}),"\n",(0,t.jsx)(n.p,{children:"How many seconds until player reaches death state. This can only be used on a player in last stand state."}),"\n",(0,t.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,t.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@return"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"integer"})]})})}),"\n",(0,t.jsx)(n.h3,{id:"setlaststandtime",children:"setLaststandTime"}),"\n",(0,t.jsx)(n.p,{children:"Set many seconds until player reaches death state. This can only be used on a player in last stand state."}),"\n",(0,t.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,t.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@param"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" integer"})]})})}),"\n",(0,t.jsx)(n.h3,{id:"resetminorinjuries",children:"resetMinorInjuries"}),"\n",(0,t.jsx)(n.p,{children:"Removes injuries with a severity of 2 or less."}),"\n",(0,t.jsx)(n.h3,{id:"resetallinjuries",children:"resetAllInjuries"}),"\n",(0,t.jsx)(n.p,{children:"Removes all injuries and satiates hunger and thirst"}),"\n",(0,t.jsx)(n.h3,{id:"createinjury",children:"createInjury"}),"\n",(0,t.jsx)(n.p,{children:"Creates an injury on a body part with random severity between 1 and maxSeverity."}),"\n",(0,t.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,t.jsxs)(n.code,{"data-language":"lua","data-theme":"default",children:[(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@param"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" bodyPart "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"BodyPart"})]}),"\n",(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@param"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" bone "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Bone"})]}),"\n",(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@param"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" maxSeverity "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"number"})]})]})}),"\n",(0,t.jsx)(n.h3,{id:"getpatientstatus",children:"getPatientStatus"}),"\n",(0,t.jsx)(n.p,{children:"Convert body parts to human readable strings"}),"\n",(0,t.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,t.jsxs)(n.code,{"data-language":"lua","data-theme":"default",children:[(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@param"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" damagedBodyParts "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"BodyParts"})]}),"\n",(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@return"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"string[]"})]})]})}),"\n",(0,t.jsx)(n.h3,{id:"makeplayerblackout",children:"makePlayerBlackout"}),"\n",(0,t.jsx)(n.p,{children:"Makes player ragdoll, and provides a blackout effect with screen shake"}),"\n",(0,t.jsx)(n.h3,{id:"makeplayerfadeout",children:"makePlayerFadeOut"}),"\n",(0,t.jsx)(n.p,{children:"Fades the screen out and back in"}),"\n",(0,t.jsx)(n.h3,{id:"removebleed",children:"removeBleed"}),"\n",(0,t.jsx)(n.p,{children:"Reduce bleeding by a certain amount"}),"\n",(0,t.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,t.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@param"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" integer"})]})})})]})}let h={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.a)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/resources/qbx_medical/Functions/Client.mdx",route:"/resources/qbx_medical/Functions/Client",pageMap:[{kind:"Meta",data:{index:"Introduction",installation:"Installation",resources:"Resources",converting:"Converting from QB",contributors:"Contributing",developers:"Developer's Guide",release:"Release Readiness",faq:"FAQ"}},{kind:"MdxPage",name:"contributors",route:"/contributors"},{kind:"MdxPage",name:"converting",route:"/converting"},{kind:"MdxPage",name:"developers",route:"/developers"},{kind:"MdxPage",name:"faq",route:"/faq"},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"installation",route:"/installation"},{kind:"MdxPage",name:"release",route:"/release"},{kind:"Folder",name:"resources",route:"/resources",children:[{kind:"Meta",data:{core:"Core"}},{kind:"Folder",name:"core",route:"/resources/core",children:[{kind:"Meta",data:{functions:"Functions",events:"Events",import:"Import",player:"Player"}},{kind:"Folder",name:"events",route:"/resources/core/events",children:[{kind:"Meta",data:{client:"Client",server:"Server"}},{kind:"MdxPage",name:"client",route:"/resources/core/events/client"},{kind:"MdxPage",name:"server",route:"/resources/core/events/server"}]},{kind:"Folder",name:"functions",route:"/resources/core/functions",children:[{kind:"Meta",data:{client:"Client",server:"Server",shared:"Shared"}},{kind:"MdxPage",name:"client",route:"/resources/core/functions/client"},{kind:"MdxPage",name:"server",route:"/resources/core/functions/server"},{kind:"MdxPage",name:"shared",route:"/resources/core/functions/shared"}]},{kind:"MdxPage",name:"import",route:"/resources/core/import"},{kind:"MdxPage",name:"player",route:"/resources/core/player"}]},{kind:"MdxPage",name:"core",route:"/resources/core"},{kind:"Folder",name:"qbx_diving",route:"/resources/qbx_diving",children:[{kind:"Folder",name:"Events",route:"/resources/qbx_diving/Events",children:[{kind:"MdxPage",name:"server",route:"/resources/qbx_diving/Events/server"},{kind:"Meta",data:{server:"Server"}}]}]},{kind:"Folder",name:"qbx_medical",route:"/resources/qbx_medical",children:[{kind:"Folder",name:"Events",route:"/resources/qbx_medical/Events",children:[{kind:"MdxPage",name:"Server",route:"/resources/qbx_medical/Events/Server"},{kind:"Meta",data:{Server:"Server"}}]},{kind:"Folder",name:"Functions",route:"/resources/qbx_medical/Functions",children:[{kind:"MdxPage",name:"Client",route:"/resources/qbx_medical/Functions/Client"},{kind:"Folder",name:"Server",route:"/resources/qbx_medical/Functions/Server",children:[{kind:"MdxPage",name:"Hooks",route:"/resources/qbx_medical/Functions/Server/Hooks"},{kind:"Meta",data:{Hooks:"Hooks"}}]},{kind:"Meta",data:{Client:"Client"}}]}]}]},{kind:"MdxPage",name:"resources",route:"/resources"}],flexsearch:{codeblocks:!0},title:"Client",headings:o},pageNextRoute:"/resources/qbx_medical/Functions/Client",nextraLayout:r.ZP,themeConfig:l.Z};n.default=(0,s.j)(h)}},function(e){e.O(0,[791,774,888,179],function(){return e(e.s=1769)}),_N_E=e.O()}]);