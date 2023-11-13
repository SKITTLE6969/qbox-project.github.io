(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[786],{7304:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resources/core/functions/shared",function(){return s(2556)}])},967:function(e,n,s){"use strict";var r=s(1527);s(959);var t=s(6125),a=s(2349);let o={logo:(0,r.jsx)("div",{style:{paddingLeft:"50px",lineHeight:"38px",background:"url(/qbox-duck.png) no-repeat left",backgroundSize:"38px",fontWeight:550},children:"Qbox"}),project:{link:"https://github.com/Qbox-project"},chat:{link:"https://discord.gg/qbox"},docsRepositoryBase:"https://github.com/Qbox-project/qbox-project.github.io",footer:{text:"Qbox Project"},primaryHue:{dark:200,light:200},head:function(){let{asPath:e}=(0,a.useRouter)(),{frontMatter:n,title:s}=(0,t.ZR)(),o=n.description||"Documentation for the Qbox Project";return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,r.jsx)("link",{rel:"icon",type:"image/x-icon",href:"/qbox-duck.ico"}),(0,r.jsx)("meta",{httpEquiv:"Content-Language",content:"en"}),(0,r.jsx)("meta",{name:"description",content:o}),(0,r.jsx)("meta",{name:"og:title",content:s}),(0,r.jsx)("meta",{name:"og:description",content:o}),(0,r.jsx)("meta",{name:"og:url",content:"https://qbox-project.github.io".concat(e)})]})},useNextSeoProps:function(){let{asPath:e}=(0,a.useRouter)(),n=e.replace(/[-_]/g," ").split("/"),s="#"!==n[1][0]&&n[1]||"Qbox",r=n[n.length-1],t=/[a-z]/.test(r)&&/[A-Z]/.test(r)?r:"%s";return{titleTemplate:"".concat(t," - ").concat(r===s?"Documentation":s.replace(/(^\w|\s\w)/g,e=>e.toUpperCase()))}}};n.Z=o},2556:function(e,n,s){"use strict";s.r(n),s.d(n,{__toc:function(){return c}});var r=s(1527),t=s(3630),a=s(6125),o=s(967);s(4552);var i=s(6119),l=s(8891);let c=[{depth:2,value:"Exports",id:"exports"},{depth:3,value:"GetJobs",id:"getjobs"},{depth:3,value:"GetGangs",id:"getgangs"},{depth:3,value:"GetVehiclesByName",id:"getvehiclesbyname"},{depth:3,value:"GetVehiclesByHash",id:"getvehiclesbyhash"},{depth:3,value:"GetWeapons",id:"getweapons"},{depth:3,value:"GetLocations",id:"getlocations"},{depth:2,value:"Module: utils",id:"module-utils"},{depth:3,value:"GetCoordsFromEntity",id:"getcoordsfromentity"},{depth:3,value:"GetPlate",id:"getplate"},{depth:3,value:"CommaValue",id:"commavalue"},{depth:3,value:"string.split",id:"stringsplit"},{depth:3,value:"string.trim",id:"stringtrim"},{depth:3,value:"string.firstToUpper",id:"stringfirsttoupper"},{depth:3,value:"math.round",id:"mathround"},{depth:3,value:"RandomLetter",id:"randomletter"},{depth:3,value:"RandomNumber",id:"randomnumber"},{depth:3,value:"RandomNumberOrLetter",id:"randomnumberorletter"},{depth:3,value:"GenerateRandomPlate",id:"generaterandomplate"}];function d(e){let n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",h3:"h3",pre:"pre",span:"span",a:"a"},(0,i.a)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{children:"Shared"}),"\n",(0,r.jsx)(n.h2,{id:"exports",children:"Exports"}),"\n",(0,r.jsx)(l.UW,{type:"info",children:(0,r.jsxs)(n.p,{children:["called using ",(0,r.jsx)(n.code,{children:"exports.qbx_core:<FunctionName>"})]})}),"\n",(0,r.jsx)(n.h3,{id:"getjobs",children:"GetJobs"}),"\n",(0,r.jsx)(n.p,{children:"Returns the jobs table"}),"\n",(0,r.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@return"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"table<string"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:", "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Job>"})]})})}),"\n",(0,r.jsx)(n.h3,{id:"getgangs",children:"GetGangs"}),"\n",(0,r.jsx)(n.p,{children:"Returns the gangs table"}),"\n",(0,r.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@return"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"table<string"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:", "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Gang>"})]})})}),"\n",(0,r.jsx)(n.h3,{id:"getvehiclesbyname",children:"GetVehiclesByName"}),"\n",(0,r.jsx)(n.p,{children:"Returns a table mapping vehicle name to vehicle"}),"\n",(0,r.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@return"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"table<string"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:", "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Vehicle>"})]})})}),"\n",(0,r.jsx)(n.h3,{id:"getvehiclesbyhash",children:"GetVehiclesByHash"}),"\n",(0,r.jsx)(n.p,{children:"Returns a table mapping vehicle hash to vehicle"}),"\n",(0,r.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@return"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"table<number"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:", "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Vehicle>"})]})})}),"\n",(0,r.jsx)(n.h3,{id:"getweapons",children:"GetWeapons"}),"\n",(0,r.jsx)(n.p,{children:"Returns the weapons table"}),"\n",(0,r.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@return"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"table<number"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:", "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Weapon>"})]})})}),"\n",(0,r.jsx)(n.h3,{id:"getlocations",children:"GetLocations"}),"\n",(0,r.jsx)(n.p,{children:"Returns the locations table"}),"\n",(0,r.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@return"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"table<string"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:", "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"vector4>"})]})})}),"\n",(0,r.jsx)(n.h2,{id:"module-utils",children:"Module: utils"}),"\n",(0,r.jsx)(l.UW,{type:"info",children:(0,r.jsxs)(n.p,{children:["called using ",(0,r.jsx)(n.code,{children:"<FunctionName>"})]})}),"\n",(0,r.jsx)(n.h3,{id:"getcoordsfromentity",children:"GetCoordsFromEntity"}),"\n",(0,r.jsx)(n.p,{children:"Get the coords including the heading from an entity"}),"\n",(0,r.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(n.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@param"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" entity "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"number"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@return"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"vector4"})]})]})}),"\n",(0,r.jsx)(n.h3,{id:"getplate",children:"GetPlate"}),"\n",(0,r.jsx)(n.p,{children:"Returns the number plate of the specified vehicle"}),"\n",(0,r.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(n.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@param"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" vehicle "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"integer"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@return"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"})]})]})}),"\n",(0,r.jsx)(n.h3,{id:"commavalue",children:"CommaValue"}),"\n",(0,r.jsx)(n.p,{children:"Converts a number to a string version with commas"}),"\n",(0,r.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(n.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@param"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" num "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"number"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@return"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"string"})]})]})}),"\n",(0,r.jsx)(n.h3,{id:"stringsplit",children:"string.split"}),"\n",(0,r.jsx)(n.p,{children:"Split a string by a character"}),"\n",(0,r.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(n.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@param"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" str "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"string"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@param"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" delimiter "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"string character"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@return"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"string[]"})]})]})}),"\n",(0,r.jsx)(n.h3,{id:"stringtrim",children:"string.trim"}),"\n",(0,r.jsx)(n.p,{children:"Trim unwanted characters off the string"}),"\n",(0,r.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(n.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@param"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" str "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"string"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@return"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@return"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"number"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"count"})]})]})}),"\n",(0,r.jsx)(n.h3,{id:"stringfirsttoupper",children:"string.firstToUpper"}),"\n",(0,r.jsx)(n.p,{children:"Returns a string with the first character uppercase'd"}),"\n",(0,r.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(n.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@param"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" str "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"string"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@return"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@return"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"number"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"count"})]})]})}),"\n",(0,r.jsx)(n.h3,{id:"mathround",children:"math.round"}),"\n",(0,r.jsx)(n.p,{children:"Returns a rounded number"}),"\n",(0,r.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(n.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@param"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" value "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"number"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@param"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" numDecimalPlaces "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"integer"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@return"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"integer"})]})]})}),"\n",(0,r.jsx)(n.h3,{id:"randomletter",children:"RandomLetter"}),"\n",(0,r.jsx)(n.p,{children:"Returns a random letter"}),"\n",(0,r.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(n.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@param"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" length "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"integer"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@return"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"string"})]})]})}),"\n",(0,r.jsx)(n.h3,{id:"randomnumber",children:"RandomNumber"}),"\n",(0,r.jsx)(n.p,{children:"Returns a random number"}),"\n",(0,r.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(n.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@param"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" length "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"integer"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@return"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"string"})]})]})}),"\n",(0,r.jsx)(n.h3,{id:"randomnumberorletter",children:"RandomNumberOrLetter"}),"\n",(0,r.jsx)(n.p,{children:"Returns a random number or letter"}),"\n",(0,r.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(n.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@param"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" length "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"integer"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@return"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"string"})]})]})}),"\n",(0,r.jsx)(n.h3,{id:"generaterandomplate",children:"GenerateRandomPlate"}),"\n",(0,r.jsxs)(n.p,{children:["Generates a random number plate according to a pattern, ",(0,r.jsx)(n.a,{href:"https://docs.fivem.net/natives/?_0x79780FD2",children:"pattern format"}),", ",(0,r.jsx)(n.a,{href:"https://github.com/citizenfx/fivem/blob/cb97fbc54050e2309930128d6deed515d004a1bd/code/components/extra-natives-five/src/VehicleNumberPlateNatives.cpp#L25-L112",children:"plate generation source"})]}),"\n",(0,r.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@return"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"string"})]})})})]})}let h={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.a)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/resources/core/functions/shared.mdx",route:"/resources/core/functions/shared",pageMap:[{kind:"Meta",data:{index:"Introduction",installation:"Installation",resources:"Resources",converting:"Converting from QB",contributors:"Contributing",developers:"Developer's Guide",release:"Release Readiness",faq:"FAQ"}},{kind:"MdxPage",name:"contributors",route:"/contributors"},{kind:"MdxPage",name:"converting",route:"/converting"},{kind:"MdxPage",name:"developers",route:"/developers"},{kind:"MdxPage",name:"faq",route:"/faq"},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"installation",route:"/installation"},{kind:"MdxPage",name:"release",route:"/release"},{kind:"Folder",name:"resources",route:"/resources",children:[{kind:"Meta",data:{core:"Core"}},{kind:"Folder",name:"core",route:"/resources/core",children:[{kind:"Meta",data:{functions:"Functions",events:"Events",import:"Import",player:"Player"}},{kind:"Folder",name:"events",route:"/resources/core/events",children:[{kind:"Meta",data:{client:"Client",server:"Server"}},{kind:"MdxPage",name:"client",route:"/resources/core/events/client"},{kind:"MdxPage",name:"server",route:"/resources/core/events/server"}]},{kind:"Folder",name:"functions",route:"/resources/core/functions",children:[{kind:"Meta",data:{client:"Client",server:"Server",shared:"Shared"}},{kind:"MdxPage",name:"client",route:"/resources/core/functions/client"},{kind:"MdxPage",name:"server",route:"/resources/core/functions/server"},{kind:"MdxPage",name:"shared",route:"/resources/core/functions/shared"}]},{kind:"MdxPage",name:"import",route:"/resources/core/import"},{kind:"MdxPage",name:"player",route:"/resources/core/player"}]},{kind:"MdxPage",name:"core",route:"/resources/core"},{kind:"Folder",name:"qbx_diving",route:"/resources/qbx_diving",children:[{kind:"Folder",name:"Events",route:"/resources/qbx_diving/Events",children:[{kind:"MdxPage",name:"server",route:"/resources/qbx_diving/Events/server"},{kind:"Meta",data:{server:"Server"}}]}]},{kind:"Folder",name:"qbx_medical",route:"/resources/qbx_medical",children:[{kind:"Folder",name:"Events",route:"/resources/qbx_medical/Events",children:[{kind:"MdxPage",name:"Server",route:"/resources/qbx_medical/Events/Server"},{kind:"Meta",data:{Server:"Server"}}]},{kind:"Folder",name:"Functions",route:"/resources/qbx_medical/Functions",children:[{kind:"MdxPage",name:"Client",route:"/resources/qbx_medical/Functions/Client"},{kind:"Folder",name:"Server",route:"/resources/qbx_medical/Functions/Server",children:[{kind:"MdxPage",name:"Hooks",route:"/resources/qbx_medical/Functions/Server/Hooks"},{kind:"Meta",data:{Hooks:"Hooks"}}]},{kind:"Meta",data:{Client:"Client"}}]}]}]},{kind:"MdxPage",name:"resources",route:"/resources"}],flexsearch:{codeblocks:!0},title:"Shared",headings:c},pageNextRoute:"/resources/core/functions/shared",nextraLayout:a.ZP,themeConfig:o.Z};n.default=(0,t.j)(h)}},function(e){e.O(0,[791,774,888,179],function(){return e(e.s=7304)}),_N_E=e.O()}]);