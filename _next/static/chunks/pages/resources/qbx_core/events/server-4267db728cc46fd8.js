(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[432],{6224:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resources/qbx_core/events/server",function(){return s(849)}])},849:function(e,r,s){"use strict";s.r(r),s.d(r,{__toc:function(){return t}});var n=s(1527),o=s(7154),l=s(5424),i=s(1890);let t=[{depth:2,value:"Non-Networked Events",id:"non-networked-events"},{depth:3,value:"QBCore:Server:OnPlayerUnload",id:"qbcoreserveronplayerunload"},{depth:3,value:"QBCore:Server:OnPermissionUpdate",id:"qbcoreserveronpermissionupdate"},{depth:3,value:"QBCore:Server:OnJobUpdate",id:"qbcoreserveronjobupdate"},{depth:3,value:"QBCore:Server:OnGangUpdate",id:"qbcoreserverongangupdate"},{depth:3,value:"QBCore:Server:SetDuty",id:"qbcoreserversetduty"},{depth:3,value:"qbx_core:server:onGroupUpdate",id:"qbx_coreserverongroupupdate"},{depth:3,value:"QBCore:Server:OnMoneyChange",id:"qbcoreserveronmoneychange"},{depth:2,value:"Networked Events",id:"networked-events"},{depth:3,value:"QBCore:Server:OnPlayerLoaded",id:"qbcoreserveronplayerloaded"},{depth:3,value:"qbx_core:server:onSetMetaData",id:"qbx_coreserveronsetmetadata"}];function _createMdxContent(e){let r=Object.assign({h1:"h1",p:"p",strong:"strong",h2:"h2",h3:"h3",br:"br",pre:"pre",code:"code",span:"span",ul:"ul",li:"li"},(0,l.a)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:"Server Events"}),"\n",(0,n.jsx)(i.UW,{type:"warning",children:(0,n.jsxs)(r.p,{children:["These events ",(0,n.jsx)(r.strong,{children:"MUST NOT"})," be triggered by any other scripts."]})}),"\n",(0,n.jsx)(i.UW,{type:"info",children:(0,n.jsx)(r.p,{children:"Some of these events use custom types.\nYou can learn more about those in the Types section of this resource."})}),"\n",(0,n.jsx)(r.h2,{id:"non-networked-events",children:"Non-Networked Events"}),"\n",(0,n.jsx)(r.h3,{id:"qbcoreserveronplayerunload",children:"QBCore:Server:OnPlayerUnload"}),"\n",(0,n.jsxs)(r.p,{children:["Triggered when aplayer begins the process of logging out. ",(0,n.jsx)(r.br,{}),"\n","There is no guarantee that the player still exists in qbx_core's memory at the time this event is triggered."]}),"\n",(0,n.jsx)(r.pre,{"data-language":"lua","data-theme":"default",children:(0,n.jsx)(r.code,{"data-language":"lua","data-theme":"default",children:(0,n.jsxs)(r.span,{className:"line",children:[(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-function)"},children:"AddEventHandler"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'QBCore:Server:OnPlayerUnload'"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-parameter)"},children:"source"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["source: ",(0,n.jsx)(r.code,{children:"integer"})]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"qbcoreserveronpermissionupdate",children:"QBCore:Server:OnPermissionUpdate"}),"\n",(0,n.jsxs)(r.p,{children:["Triggered when the player's permissions are updated. ",(0,n.jsx)(r.br,{}),"\n","Only applies to permissions created through QB permission functions."]}),"\n",(0,n.jsx)(r.pre,{"data-language":"lua","data-theme":"default",children:(0,n.jsx)(r.code,{"data-language":"lua","data-theme":"default",children:(0,n.jsxs)(r.span,{className:"line",children:[(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-function)"},children:"AddEventHandler"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'QBCore:Server:OnPermissionUpdate'"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-parameter)"},children:"source"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["source: ",(0,n.jsx)(r.code,{children:"integer"})]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"qbcoreserveronjobupdate",children:"QBCore:Server:OnJobUpdate"}),"\n",(0,n.jsx)(r.p,{children:"Triggered when a player's job updates."}),"\n",(0,n.jsx)(r.pre,{"data-language":"lua","data-theme":"default",children:(0,n.jsx)(r.code,{"data-language":"lua","data-theme":"default",children:(0,n.jsxs)(r.span,{className:"line",children:[(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-function)"},children:"AddEventHandler"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'QBCore:Server:OnJobUpdate'"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-parameter)"},children:"source"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-parameter)"},children:"job"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["source: ",(0,n.jsx)(r.code,{children:"integer"})]}),"\n",(0,n.jsxs)(r.li,{children:["job: ",(0,n.jsx)(r.code,{children:"Job"})]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"qbcoreserverongangupdate",children:"QBCore:Server:OnGangUpdate"}),"\n",(0,n.jsx)(r.p,{children:"Triggered when a player's gang updates."}),"\n",(0,n.jsx)(r.pre,{"data-language":"lua","data-theme":"default",children:(0,n.jsx)(r.code,{"data-language":"lua","data-theme":"default",children:(0,n.jsxs)(r.span,{className:"line",children:[(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-function)"},children:"AddEventHandler"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'QBCore:Server:OnGangUpdate'"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-parameter)"},children:"source"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-parameter)"},children:"gang"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["source: ",(0,n.jsx)(r.code,{children:"integer"})]}),"\n",(0,n.jsxs)(r.li,{children:["gang: ",(0,n.jsx)(r.code,{children:"Gang"})]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"qbcoreserversetduty",children:"QBCore:Server:SetDuty"}),"\n",(0,n.jsx)(r.p,{children:"Triggered when a player's job duty updates."}),"\n",(0,n.jsx)(r.pre,{"data-language":"lua","data-theme":"default",children:(0,n.jsx)(r.code,{"data-language":"lua","data-theme":"default",children:(0,n.jsxs)(r.span,{className:"line",children:[(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-function)"},children:"AddEventHandler"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'QBCore:Server:SetDuty'"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-parameter)"},children:"source"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-parameter)"},children:"onDuty"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["source: ",(0,n.jsx)(r.code,{children:"integer"})]}),"\n",(0,n.jsxs)(r.li,{children:["onDuty: ",(0,n.jsx)(r.code,{children:"boolean"})]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"qbx_coreserverongroupupdate",children:"qbx_core:server:onGroupUpdate"}),"\n",(0,n.jsx)(r.p,{children:"Triggered when the player's groups are updated. If grade is nil then group was removed otherwise group was added"}),"\n",(0,n.jsx)(r.pre,{"data-language":"lua","data-theme":"default",children:(0,n.jsx)(r.code,{"data-language":"lua","data-theme":"default",children:(0,n.jsxs)(r.span,{className:"line",children:[(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-function)"},children:"AddEventHandler"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'qbx_core:server:onGroupUpdate'"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-parameter)"},children:"source"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-parameter)"},children:"groupName"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-parameter)"},children:"groupGrade"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["source: ",(0,n.jsx)(r.code,{children:"integer"})]}),"\n",(0,n.jsxs)(r.li,{children:["groupName: ",(0,n.jsx)(r.code,{children:"string"})]}),"\n",(0,n.jsxs)(r.li,{children:["groupGrade: ",(0,n.jsx)(r.code,{children:"number?"})]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"qbcoreserveronmoneychange",children:"QBCore:Server:OnMoneyChange"}),"\n",(0,n.jsx)(r.p,{children:"Triggered when a player's cash/bank balance updates."}),"\n",(0,n.jsx)(r.pre,{"data-language":"lua","data-theme":"default",children:(0,n.jsx)(r.code,{"data-language":"lua","data-theme":"default",children:(0,n.jsxs)(r.span,{className:"line",children:[(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-function)"},children:"AddEventHandler"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'QBCore:Server:OnMoneyChange'"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-parameter)"},children:"source"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-parameter)"},children:"moneyType"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-parameter)"},children:"amount"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-parameter)"},children:"operation"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-parameter)"},children:"reason"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["source: ",(0,n.jsx)(r.code,{children:"integer"})]}),"\n",(0,n.jsxs)(r.li,{children:["moneyType: ",(0,n.jsx)(r.code,{children:"'cash' | 'bank' | 'crypto'"})]}),"\n",(0,n.jsxs)(r.li,{children:["amount: ",(0,n.jsx)(r.code,{children:"number"})]}),"\n",(0,n.jsxs)(r.li,{children:["operation: ",(0,n.jsx)(r.code,{children:"'add' | 'remove' | 'set'"})]}),"\n",(0,n.jsxs)(r.li,{children:["reason: ",(0,n.jsx)(r.code,{children:"string"})]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"networked-events",children:"Networked Events"}),"\n",(0,n.jsx)(r.h3,{id:"qbcoreserveronplayerloaded",children:"QBCore:Server:OnPlayerLoaded"}),"\n",(0,n.jsx)(r.p,{children:"Triggered when a player has finished loading."}),"\n",(0,n.jsx)(r.pre,{"data-language":"lua","data-theme":"default",children:(0,n.jsx)(r.code,{"data-language":"lua","data-theme":"default",children:(0,n.jsxs)(r.span,{className:"line",children:[(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-function)"},children:"RegisterNetEvent"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'QBCore:Server:OnPlayerLoaded'"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"() "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})})}),"\n",(0,n.jsx)(r.h3,{id:"qbx_coreserveronsetmetadata",children:"qbx_core:server:onSetMetaData"}),"\n",(0,n.jsx)(r.p,{children:"Triggered when player.Functions.setMetaData() is used."}),"\n",(0,n.jsx)(r.pre,{"data-language":"lua","data-theme":"default",children:(0,n.jsx)(r.code,{"data-language":"lua","data-theme":"default",children:(0,n.jsxs)(r.span,{className:"line",children:[(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-function)"},children:"RegisterNetEvent"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'qbx_core:server:onSetMetaData'"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-parameter)"},children:"key"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-parameter)"},children:"oldValue"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-parameter)"},children:"newValue"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-parameter)"},children:"source"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["key: ",(0,n.jsx)(r.code,{children:"string"})]}),"\n",(0,n.jsxs)(r.li,{children:["oldValue: ",(0,n.jsx)(r.code,{children:"any"})]}),"\n",(0,n.jsxs)(r.li,{children:["newValue: ",(0,n.jsx)(r.code,{children:"any"})]}),"\n",(0,n.jsxs)(r.li,{children:["source: ",(0,n.jsx)(r.code,{children:"number"})]}),"\n"]})]})}r.default=(0,o.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,l.a)(),e.components);return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/resources/qbx_core/events/server.mdx",route:"/resources/qbx_core/events/server",title:"Server Events",headings:t},pageNextRoute:"/resources/qbx_core/events/server"})}},function(e){e.O(0,[154,774,888,179],function(){return e(e.s=6224)}),_N_E=e.O()}]);