"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[2245],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=n(7462),a=(n(7294),n(3905));n(4996);const r={sidebar_position:2,title:"Tools"},i=void 0,l={unversionedId:"core/build/sdks-and-tools/tools",id:"core/build/sdks-and-tools/tools",title:"Tools",description:"Conflux has tools that can help developers quickly build a dapp.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/core/build/sdks-and-tools/tools.md",sourceDirName:"core/build/sdks-and-tools",slug:"/core/build/sdks-and-tools/tools",permalink:"/zh-CN/docs/core/build/sdks-and-tools/tools",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Tools"},sidebar:"tutorialSidebar",previous:{title:"SDKs",permalink:"/zh-CN/docs/core/build/sdks-and-tools/sdks"},next:{title:"Network Endpoints",permalink:"/zh-CN/docs/core/build/sdks-and-tools/conflux_rpcs"}},s={},u=[{value:"hardhat-conflux",id:"hardhat-conflux",level:2},{value:"Conflux-Truffle",id:"conflux-truffle",level:2},{value:"Conflux ChainIDE",id:"conflux-chainide",level:2},{value:"Conflux studio",id:"conflux-studio",level:2},{value:"Conflux Studio Web",id:"conflux-studio-web",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Conflux has tools that can help developers quickly build a dapp."),(0,a.kt)("h2",{id:"hardhat-conflux"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/conflux-chain/hardhat-conflux"},"hardhat-conflux")),(0,a.kt)("p",null,"Hardhat is the morden Solidity developer toolkit, which can also used to develop contracts on ConfluxNetwork with the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/conflux-chain/hardhat-conflux"},"hardhat-conflux")," plugin. This plugin brings to Hardhat the ",(0,a.kt)("inlineCode",{parentName:"p"},"js-conflux-sdk"),", which allows you to interact with the Conflux blockchain in a simple way."),(0,a.kt)("h2",{id:"conflux-truffle"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/Conflux-Chain/conflux-truffle"},"Conflux-Truffle")),(0,a.kt)("p",null,"Truffle is a world class development environment, testing framework and asset pipeline for blockchains using the Ethereum Virtual Machine (EVM), aiming to make life as a developer easier. We have ported it to Conflux-Truffle, which will work with the Conflux network and will have the same features and usage experience."),(0,a.kt)("p",null,"To find out how to use it, you can read ",(0,a.kt)("a",{parentName:"p",href:"https://www.trufflesuite.com/docs/truffle/overview"},"Truffle's documentation"),". And ",(0,a.kt)("inlineCode",{parentName:"p"},"conflux-truffle"),"'s ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/conflux-truffle/blob/conflux/ultimate-guide.md"},"setup guide")),(0,a.kt)("h2",{id:"conflux-chainide"},(0,a.kt)("a",{parentName:"h2",href:"https://chainide.com/s/createTempProject/conflux"},"Conflux ChainIDE")),(0,a.kt)("p",null,"ChainIDE is a Cloud-Based Multi-Chain IDE. Developers don\u2019t need to install extra tools while working on smart contracts. ChainIDE supports multi-chain development environments that include Conflux(core), Conflux(eSpace), Ethereum, BNB Chain, Polygon, Dfinity, Nervos, Flow, and it also supports consortium blockchains such as Chain33 and FiscoBcos. For more information about how to use ChainIDE, please check ",(0,a.kt)("a",{parentName:"p",href:"https://chainide.gitbook.io/chainide-english-1/ethereum-ide-1/4.-conflux-ide"},"this page"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Chainide",src:n(734).Z,width:"864",height:"412"})),(0,a.kt)("h2",{id:"conflux-studio"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/ObsidianLabs/ConfluxStudio/blob/master/README-EN.md"},"Conflux studio")),(0,a.kt)("p",null,"Conflux Studio is an integrated development environment (IDE), making developing Conflux smart contracts faster and easier, developed by ",(0,a.kt)("a",{parentName:"p",href:"https://www.obsidians.io/"},"ObsidianLabs"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/ObsidianLabs/ConfluxStudio/raw/master/screenshots/compile.png",alt:null})),(0,a.kt)("p",null,"You can download it from its ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ObsidianLabs/ConfluxStudio/releases"},"Github release page"),". Windows, Mac, and Linux systems are supported."),(0,a.kt)("p",null,"You can find its documentation in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ObsidianLabs/ConfluxStudio"},"readme"),", and there is also a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ObsidianLabs/conflux-dapp-tutorial"},"tutorial")," about how to use it to develop a Dapp."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/ObsidianLabs/ConfluxStudio/raw/master/screenshots/compile.png",alt:null})),(0,a.kt)("h2",{id:"conflux-studio-web"},(0,a.kt)("a",{parentName:"h2",href:"https://conflux.ide.black/"},"Conflux Studio Web")),(0,a.kt)("p",null,"The Web version of Conflux studio, that enable user develop smart contract in browser with FluentWallet."))}p.isMDXComponent=!0},734:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/chainide-bcc31644afa70e51b82560999225f583.png"}}]);