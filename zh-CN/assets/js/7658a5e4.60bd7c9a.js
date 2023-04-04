"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[7595],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(t),d=o,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||c;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var u=2;u<c;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7818:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var r=t(7462),o=(t(7294),t(3905));const c={sidebar_position:4,title:"ConfluxContext"},a=void 0,i={unversionedId:"core/learn/core-space-basics/internal-contracts/conflux-context",id:"core/learn/core-space-basics/internal-contracts/conflux-context",title:"ConfluxContext",description:"This contract can be used to query Conflux network info including:",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/core/learn/core-space-basics/internal-contracts/conflux-context.md",sourceDirName:"core/learn/core-space-basics/internal-contracts",slug:"/core/learn/core-space-basics/internal-contracts/conflux-context",permalink:"/zh-CN/docs/core/learn/core-space-basics/internal-contracts/conflux-context",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"ConfluxContext"},sidebar:"tutorialSidebar",previous:{title:"Staking",permalink:"/zh-CN/docs/core/learn/core-space-basics/internal-contracts/staking"},next:{title:"PoSRegister",permalink:"/zh-CN/docs/core/learn/core-space-basics/internal-contracts/poSRegister"}},l={},u=[],s={toc:u},p="wrapper";function f(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This contract can be used to query Conflux network info including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"epochNumber")," - Current epoch number"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"posHeight")," - Current block height of PoS chain"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"finalizedEpochNumber")," - The latest finalized (by PoS chain) PoW epoch number")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ConfluxContext"),"'s hex40 contract address is ",(0,o.kt)("inlineCode",{parentName:"p"},"0x0888000000000000000000000000000000000004")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// SPDX-License-Identifier: MIT\npragma solidity >=0.4.15;\n\ninterface ConfluxContext {\n    /*** Query Functions ***/\n    /**\n     * @dev get the current epoch number\n     * @return the current epoch number\n     */\n    function epochNumber() external view returns (uint256);\n    /**\n     * @dev get the height of the referred PoS block in the last epoch\n`    * @return the current PoS block height\n     */\n    function posHeight() external view returns (uint256);\n    /**\n     * @dev get the epoch number of the finalized pivot block.\n     * @return the finalized epoch number\n     */\n    function finalizedEpochNumber() external view returns (uint256);\n}\n\n")))}f.isMDXComponent=!0}}]);