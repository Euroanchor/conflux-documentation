"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[469],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),p=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(u.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=p(n),c=r,k=s["".concat(u,".").concat(c)]||s[c]||d[c]||l;return n?a.createElement(k,i(i({ref:e},m),{},{components:n})):a.createElement(k,i({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o[s]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2903:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:4,title:"Network Endpoints"},i=void 0,o={unversionedId:"espace/build/network-endpoints",id:"espace/build/network-endpoints",title:"Network Endpoints",description:"Confura",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/espace/build/network-endpoints.md",sourceDirName:"espace/build",slug:"/espace/build/network-endpoints",permalink:"/zh-CN/docs/espace/build/network-endpoints",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Network Endpoints"},sidebar:"tutorialSidebar",previous:{title:"EVM Compatibility",permalink:"/zh-CN/docs/espace/build/evm-compatibility"},next:{title:"Resources",permalink:"/zh-CN/docs/category/resources"}},u={},p=[{value:"Confura",id:"confura",level:2},{value:"Hong Kong",id:"hong-kong",level:3},{value:"US East",id:"us-east",level:3},{value:"Rate Limits",id:"rate-limits",level:3},{value:"Common causes and mitigations",id:"common-causes-and-mitigations",level:3},{value:"Other Notes",id:"other-notes",level:3},{value:"Confura",id:"confura-1",level:2},{value:"Hardfork number",id:"hardfork-number",level:2}],m={toc:p},s="wrapper";function d(t){let{components:e,...n}=t;return(0,r.kt)(s,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"confura"},"Confura"),(0,r.kt)("h3",{id:"hong-kong"},"Hong Kong"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Network"),(0,r.kt)("th",{parentName:"tr",align:null},"Chain ID"),(0,r.kt)("th",{parentName:"tr",align:null},"RPC Endpoint URL"),(0,r.kt)("th",{parentName:"tr",align:null},"Explorer"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#mainnet"},"Mainnet")),(0,r.kt)("td",{parentName:"tr",align:null},"1030 (0x406)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://evm.confluxrpc.com"},"https://evm.confluxrpc.com")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://evm.confluxscan.net"},"https://evm.confluxscan.net"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#testnet"},"Testnet")),(0,r.kt)("td",{parentName:"tr",align:null},"71 (0x47)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://evmtestnet.confluxrpc.com"},"https://evmtestnet.confluxrpc.com")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://evmtestnet.confluxscan.net"},"https://evmtestnet.confluxscan.net"))))),(0,r.kt)("h3",{id:"us-east"},"US East"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Network"),(0,r.kt)("th",{parentName:"tr",align:null},"Chain ID"),(0,r.kt)("th",{parentName:"tr",align:null},"RPC Endpoint URL"),(0,r.kt)("th",{parentName:"tr",align:null},"Explorer"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#mainnet"},"Mainnet")),(0,r.kt)("td",{parentName:"tr",align:null},"1030 (0x406)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://evm.confluxrpc.org"},"https://evm.confluxrpc.org")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://evm.confluxscan.io"},"https://evm.confluxscan.io"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#testnet"},"Testnet")),(0,r.kt)("td",{parentName:"tr",align:null},"71 (0x47)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://evmtestnet.confluxrpc.org"},"https://evmtestnet.confluxrpc.org")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://evmtestnet.confluxscan.io"},"https://evmtestnet.confluxscan.io"))))),(0,r.kt)("h3",{id:"rate-limits"},"Rate Limits"),(0,r.kt)("p",null,"To ensure the service availability, we've added several rate limiters (implemented with token bucket algorithm) to mitigrate against bursts of incoming traffic. Users who send many requests in quick succession may see error responses that show up as status code ",(0,r.kt)("inlineCode",{parentName:"p"},"429"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"QPS"),(0,r.kt)("th",{parentName:"tr",align:null},"Burst"),(0,r.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"all"),(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"1000"),(0,r.kt)("td",{parentName:"tr",align:null},"limits the number of all requests per second")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eth_getLogs"),(0,r.kt)("td",{parentName:"tr",align:null},"20"),(0,r.kt)("td",{parentName:"tr",align:null},"20"),(0,r.kt)("td",{parentName:"tr",align:null},"limits the number of ",(0,r.kt)("inlineCode",{parentName:"td"},"eth_getLogs")," requests per second")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eth_call"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"limits the number of ",(0,r.kt)("inlineCode",{parentName:"td"},"eth_call")," requests per second")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eth_sendRawTransaction"),(0,r.kt)("td",{parentName:"tr",align:null},"50"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"limits the number of ",(0,r.kt)("inlineCode",{parentName:"td"},"eth_sendRawTransaction")," requests per second")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eth_getTransactionCount"),(0,r.kt)("td",{parentName:"tr",align:null},"50"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"limits the number of ",(0,r.kt)("inlineCode",{parentName:"td"},"eth_getTransactionCount")," requests per second")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eth_getBlockByNumber"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"limits the number of ",(0,r.kt)("inlineCode",{parentName:"td"},"eth_getBlockByNumber")," requests per second")))),(0,r.kt)("p",null,"If you are in the demand for higher QPS need, please visit ",(0,r.kt)("a",{parentName:"p",href:"https://test.confluxhub.io/payment/consumer/app/subscription/0x4805C5B2741088B8458ed781083eA8940186E477"},"Conflux Hub")," to purchase our VIP subscription plan (testnet supported only for the moment) with the following new QPS standards."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"QPS"),(0,r.kt)("th",{parentName:"tr",align:null},"Burst"),(0,r.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"all"),(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"1000"),(0,r.kt)("td",{parentName:"tr",align:null},"limits the number of all requests per second")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eth_getLogs"),(0,r.kt)("td",{parentName:"tr",align:null},"20"),(0,r.kt)("td",{parentName:"tr",align:null},"20"),(0,r.kt)("td",{parentName:"tr",align:null},"limits the number of ",(0,r.kt)("inlineCode",{parentName:"td"},"eth_getLogs")," requests per second")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eth_call"),(0,r.kt)("td",{parentName:"tr",align:null},"20"),(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"limits the number of ",(0,r.kt)("inlineCode",{parentName:"td"},"eth_call")," requests per second")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eth_sendRawTransaction"),(0,r.kt)("td",{parentName:"tr",align:null},"50"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"limits the number of ",(0,r.kt)("inlineCode",{parentName:"td"},"eth_sendRawTransaction")," requests per second")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eth_getTransactionCount"),(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"limits the number of ",(0,r.kt)("inlineCode",{parentName:"td"},"eth_getTransactionCount")," requests per second")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eth_getBlockByNumber"),(0,r.kt)("td",{parentName:"tr",align:null},"20"),(0,r.kt)("td",{parentName:"tr",align:null},"50"),(0,r.kt)("td",{parentName:"tr",align:null},"limits the number of ",(0,r.kt)("inlineCode",{parentName:"td"},"eth_getBlockByNumber")," requests per second")))),(0,r.kt)("h3",{id:"common-causes-and-mitigations"},"Common causes and mitigations"),(0,r.kt)("p",null,"Rate limiting can occur under a variety of conditions, but it\u2019s most common in these scenarios:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Issuing multiple state call requests all at once can lead to rate limitting. We recommend using ",(0,r.kt)("inlineCode",{parentName:"li"},"Multicall"),", which aggregates results from multiple contract constant function calls, and reduces the number of separate JSON RPC requests that need to be sent."),(0,r.kt)("li",{parentName:"ul"},"Running high frequency ",(0,r.kt)("inlineCode",{parentName:"li"},"eth_getLogs")," requests to catch up latest block can trigger rate limitting. As ",(0,r.kt)("inlineCode",{parentName:"li"},"eth_getLogs")," request calls are expensive, we recommend adapting the epoch range or block range within your log query filter to reduces request calls.")),(0,r.kt)("h3",{id:"other-notes"},"Other Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"eth_getLogs")," method no longer restrict the maximum gap between ",(0,r.kt)("inlineCode",{parentName:"li"},"from_block")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"to_block")," for log query filter. Instead the query is now bounded with reasonable queryset size, 3s maximum running time and no more than 10,000 resultset size, under other circumstance you may need to narrow down your search condition.")),(0,r.kt)("h2",{id:"confura-1"},"Confura"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Network"),(0,r.kt)("th",{parentName:"tr",align:null},"Chain ID"),(0,r.kt)("th",{parentName:"tr",align:null},"RPC Endpoint URL"),(0,r.kt)("th",{parentName:"tr",align:null},"Explorer"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#mainnet"},"Mainnet")),(0,r.kt)("td",{parentName:"tr",align:null},"1030 (0x406)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://conflux-espace-public.unifra.io"},"https://conflux-espace-public.unifra.io")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://evm.confluxscan.net"},"https://evm.confluxscan.net"))))),(0,r.kt)("h2",{id:"hardfork-number"},"Hardfork number"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mainnet: EpochNumber 36935000, BlockNumber 92060600"),(0,r.kt)("li",{parentName:"ul"},"Testnet: EpochNumber 61465000, BlockNumber 77340000")))}d.isMDXComponent=!0}}]);