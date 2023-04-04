"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[6199],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,f=u["".concat(i,".").concat(d)]||u[d]||h[d]||r;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:o,s[1]=c;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7797:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:7,title:"Spaces"},s=void 0,c={unversionedId:"general/conflux-basics/spaces",id:"general/conflux-basics/spaces",title:"Spaces",description:"Introduction to Spaces",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/general/conflux-basics/spaces.md",sourceDirName:"general/conflux-basics",slug:"/general/conflux-basics/spaces",permalink:"/zh-CN/docs/general/conflux-basics/spaces",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Spaces"},sidebar:"tutorialSidebar",previous:{title:"Economics",permalink:"/zh-CN/docs/general/conflux-basics/economics"},next:{title:"Accounts and Addresses",permalink:"/zh-CN/docs/general/conflux-basics/accounts"}},i={},l=[{value:"<strong>Introduction to Spaces</strong>",id:"introduction-to-spaces",level:2},{value:"<strong>Why Introduce eSpace?</strong>",id:"why-introduce-espace",level:2},{value:"<strong>The Relationship Between the Two Spaces</strong>",id:"the-relationship-between-the-two-spaces",level:2},{value:"<strong>How to Communicate Between Spaces</strong>",id:"how-to-communicate-between-spaces",level:2},{value:"<strong>Which To Choose</strong>",id:"which-to-choose",level:2},{value:"Reference",id:"reference",level:2}],p={toc:l},u="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction-to-spaces"},(0,o.kt)("strong",{parentName:"h2"},"Introduction to Spaces")),(0,o.kt)("p",null,"In the Conflux v2.0 (Hydra) upgrade, a new feature called Spaces was introduced through ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-90.md"},"CIP-90")),". Spaces is an abstract concept that is used to distinguish Conflux-format transactions from Ethereum-format transactions. Spaces is a way to virtually create a sub-chain of the original Conflux network, known as ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"eSpace")),"."),(0,o.kt)("p",null,"Core Space refers to the original Conflux network, while eSpace is the virtualized Ethereum chain running on top of the Core Space network. The two spaces are logically independent of each other and do not affect each other."),(0,o.kt)("p",null,"In other words, we can think of Spaces as a virtualization technology from operating system concepts, where eSpace is a virtualized Ethereum chain running on the original Conflux network."),(0,o.kt)("h2",{id:"why-introduce-espace"},(0,o.kt)("strong",{parentName:"h2"},"Why Introduce eSpace?")),(0,o.kt)("p",null,"Conflux is a high-performance, fully decentralized public chain enabled by an innovative Tree-Graph consensus algorithm. The transaction fee of Conflux is very low, which can be seen as almost free compared to other networks such as Ethereum. However, Ethereum has already built a mature ecosystem, including tools, SDKs, wallets, and Solidity libraries. To reduce the migration cost of projects and users and make users experience the advantages of low fees and high TPS of Conflux, eSpace was introduced."),(0,o.kt)("p",null,"Through the fully compatible interface, smart contracts, and dApps of Ethereum can be directly deployed to eSpace without any modification. Development tools, SDKs, wallets, and services of Ethereum can be directly used in eSpace. Users do not need to learn new knowledge but can use the original tools to get started directly."),(0,o.kt)("p",null,"eSpace is very easy to use for Ethereum developers and users, just like BSC, Polygon, Aurora."),(0,o.kt)("h2",{id:"the-relationship-between-the-two-spaces"},(0,o.kt)("strong",{parentName:"h2"},"The Relationship Between the Two Spaces")),(0,o.kt)("p",null,"Core Space and eSpace are two logically independent spaces with their own transactions, account status, and contracts. They share the same ledger (chain) for underlying data storage. A block may contain transactions from both Spaces, and they are only differentiated by the transaction type when transactions are executed. Each will only impact the account status in its own Space."),(0,o.kt)("p",null,"To interact with Core Space, use Conflux-compatible wallet (Fluent), SDK (*-conflux-SDK), and development tools (chainIDE, conflux-truffle). To interact with eSpace directly, use the existing tools and products from the Ethereum ecosystem, such as Metamask, Truffle, Hardhat, Ethers.js, etc. (by simply setting the RPC network of the tool to ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/zh-CN/docs/espace/build/network-endpoints"},"Conflux eSpace RPC")),"."),(0,o.kt)("h2",{id:"how-to-communicate-between-spaces"},(0,o.kt)("strong",{parentName:"h2"},"How to Communicate Between Spaces")),(0,o.kt)("p",null,"To communicate between Conflux Core Space and eSpace, the ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/core/learn/core-space-basics/internal-contracts/crossSpaceCall"},"CrossSpaceCall")," contract can be used to transfer CFX and deploy contracts from Core Space to eSpace, as well as call eSpace contract methods in Core Space. Each account in Core Space has a corresponding ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/espace/learn/accounts#mapped-addresses-in-cross-space-operations"},"mirror address")," in eSpace, calculated by decoding the original Base32 address and hashing it with Keccak. The internal contract provides ",(0,o.kt)("strong",{parentName:"p"},"synchronous")," cross-space transfers of CFX, making it simple, safe, and fast. The built-in event system and On-chain Message Passing can also be used for communication between spaces."),(0,o.kt)("h2",{id:"which-to-choose"},(0,o.kt)("strong",{parentName:"h2"},"Which To Choose")),(0,o.kt)("p",null,"Conflux Core Space is a native space that supports ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/core/learn/core-space-basics/sponsor-mechanism"},"contract sponsorship")," and has more network capacity (higher TPS), but requires unique Base32 addresses, RPC, SDK, etc. Therefore, if you want to develop a brand new project, you can choose the Core Space. The contract sponsorship mechanism makes it possible for project users to interact with the contract without a balance, helping to lower the threshold of blockchain usage and expand the user base. Moreover, this feature allows developers to develop public chain applications in compliance with regulations in countries or regions where digital currencies are strictly monitored."),(0,o.kt)("p",null,"If you want to deploy an Ethereum project to take advantage of Conflux's high performance and low cost in order to reduce user costs, you can choose eSpace. The project can be deployed directly without any modification. If you are a skilled Ethereum engineer, you can also choose eSpace directly and use the tools and SDKs that you are familiar with to get started quickly."),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-90.md"},"CIP-90"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-CN/docs/espace/build/resources/json-rpc"},"Espace RPC Compatibility"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-CN/docs/espace/build/evm-compatibility"},"Espace EVM Compatibility"),".")))}h.isMDXComponent=!0}}]);