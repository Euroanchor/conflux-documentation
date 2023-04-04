"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[5245],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,d=u["".concat(l,".").concat(m)]||u[m]||h[m]||o;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4044:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2,title:"CIPs"},i="CIPs",s={unversionedId:"general/conflux-basics/conflux-governance/cips",id:"general/conflux-basics/conflux-governance/cips",title:"CIPs",description:"\u6982\u89c8",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/general/conflux-basics/conflux-governance/cips.md",sourceDirName:"general/conflux-basics/conflux-governance",slug:"/general/conflux-basics/conflux-governance/cips",permalink:"/zh-CN/docs/general/conflux-basics/conflux-governance/cips",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"CIPs"},sidebar:"tutorialSidebar",previous:{title:"Governance Overview",permalink:"/zh-CN/docs/general/conflux-basics/conflux-governance/governance-overview"},next:{title:"Papers",permalink:"/zh-CN/docs/general/conflux-basics/additional-resources/conflux_papers"}},l={},c=[{value:"\u6982\u89c8",id:"\u6982\u89c8",level:2},{value:"Highlighted CIPs",id:"highlighted-cips",level:2},{value:"How can I submit a CIP?",id:"how-can-i-submit-a-cip",level:2},{value:"Next steps",id:"next-steps",level:2}],p={toc:c},u="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cips"},"CIPs"),(0,r.kt)("h2",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,r.kt)("p",null,"As a decentralized network, major changes to the Conflux protocol need to reach consensus before they can be enacted. Such changes are proposed in the form of a ",(0,r.kt)("strong",{parentName:"p"},"Conflux Improvement Proposal"),", or CIP for short. After a CIP is discussed, the specification is finalized, and popular support is achieved, a set of CIPs is implemented and rolled out as a network upgrade, also known as a hard fork."),(0,r.kt)("p",null,"The process of submitting a CIP is described in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-1.md"},"CIP-1"),". CIPs have the following stages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[ IDEA ] -> [ DRAFT ] -> [ LAST CALL ] -> [ ACCEPTED ] -> [ FINAL ]\n")),(0,r.kt)("p",null,"For more details, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-1.md"},"CIP-1"),"."),(0,r.kt)("h2",{id:"highlighted-cips"},"Highlighted CIPs"),(0,r.kt)("p",null,"Below are some of the most impactful CIPs since the launch of the Conflux mainnet."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-23.md"},"CIP-23"),": ",(0,r.kt)("strong",{parentName:"li"},"Typed structured data hashing and signing"),". This CIP defined Conflux signature standards, based on Ethereum\u2019s ",(0,r.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-712"},"EIP-712"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-37.md"},"CIP-37"),": ",(0,r.kt)("strong",{parentName:"li"},"Introduce Base32 Checksum Addresses"),". The Core Space address format that you\u2019re familiar with from ",(0,r.kt)("a",{parentName:"li",href:"https://fluentwallet.com/"},"Fluent")," and other wallets was defined in CIP-37."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-40.md"},"CIP-40"),": ",(0,r.kt)("strong",{parentName:"li"},"Reduce block base reward to 2 CFX"),". In the first hard fork upgrade after mainnet launch, the block base reward was reduced from 7 CFX to 2 CFX. This was also the first CIP that was confirmed in a ",(0,r.kt)("a",{parentName:"li",href:"https://governance.confluxnetwork.org/en/governance/"},"governance vote"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-43.md"},"CIP-43"),": ",(0,r.kt)("strong",{parentName:"li"},"Introduce Finality via Voting Among Staked"),". This CIP introduced the idea of the hybrid PoW-PoS consensus, implemented in the Hydra hard fork."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-90.md"},"CIP-90"),": ",(0,r.kt)("strong",{parentName:"li"},"A Space Fully EVM compatible"),". The other major update in the Hydra hard fork was the introduction of ",(0,r.kt)("a",{parentName:"li",href:"https://medium.com/conflux-network/conflux-espace-a-high-level-overview-cdca29bc422a"},"Conflux eSpace"),", defined in this CIP."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-94.md"},"CIP-94"),": ",(0,r.kt)("strong",{parentName:"li"},"On-chain DAO Vote for Chain Parameters"),". On-chain mechanism for community governance, to be rolled out in an upcoming network upgrade.")),(0,r.kt)("h2",{id:"how-can-i-submit-a-cip"},"How can I submit a CIP?"),(0,r.kt)("p",null,"If you want to submit a Conflux Improvement Proposal, you should start by copying the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/CIPs/blob/master/cip-template.md"},"CIP Markdown template")," and filling some basic information in the preamble, such as the title of this CIP, the list of authors, and the type of the change that. you are proposing. After this, you can proceed to fill all the sections: ",(0,r.kt)("inlineCode",{parentName:"p"},"Simple Summary"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Abstract"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Motivation"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Specification"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Rationale"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Backwards Compatibility"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Test Cases"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Implementation"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Security Considerations"),". Once your CIP draft is ready for its initial publication, submit it to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/CIPs"},"CIPs GitHub repository")," in a new ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request"},"PR"),"."),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"Once your CIP draft has been submitted, the CIP editors will review it and address any editorial issues. At this point, you should share the CIP with the Conflux community, start a discussion, find and address issues, and work to achieve popular support for the proposed change or improvement."))}h.isMDXComponent=!0}}]);