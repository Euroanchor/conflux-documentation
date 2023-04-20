"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[9416],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),m=r,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return t?a.createElement(f,i(i({ref:n},u),{},{components:t})):a.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2767:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_position:2,title:"Send Transactions Using SDKs"},i=void 0,s={unversionedId:"core/build/send-transactions-using-SDK",id:"core/build/send-transactions-using-SDK",title:"Send Transactions Using SDKs",description:"Installation",source:"@site/docs/core/build/send-transactions-using-SDK.md",sourceDirName:"core/build",slug:"/core/build/send-transactions-using-SDK",permalink:"/docs/core/build/send-transactions-using-SDK",draft:!1,editUrl:"https://github.com/Conflux-Chain/conflux-documentation/edit/main/docs/core/build/send-transactions-using-SDK.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Send Transactions Using SDKs"},sidebar:"tutorialSidebar",previous:{title:"Network Endpoints",permalink:"/docs/core/build/sdks-and-tools/conflux_rpcs"},next:{title:"Foundation Gas Sponsorship",permalink:"/docs/core/build/gas-sponsorship"}},c={},l=[{value:"Installation",id:"installation",level:2},{value:"Send transaction using SDK",id:"send-transaction-using-sdk",level:2},{value:"Other language examples",id:"other-language-examples",level:2}],u={toc:l},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"npm install js-conflux-sdk")),(0,r.kt)("h2",{id:"send-transaction-using-sdk"},"Send transaction using SDK"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Import ",(0,r.kt)("inlineCode",{parentName:"li"},"js-conflux-sdk")," and set a Conflux provider. For the Conflux test-net, there is a node provided at ",(0,r.kt)("inlineCode",{parentName:"li"},"https://test.confluxrpc.com"),". It can also be changed to any other Conflux node, even your own.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const { Conflux, Drip } = require('js-conflux-sdk');\n\nconst conflux = new Conflux({\n  url: 'https://test.confluxrpc.com',\n  logger: console,\n  networkId: 1,\n});\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Paste your private key into the program")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const PRIVATE_KEY = 'Your Private Key';\n// const PRIVATE_KEY = '0x5f15f9e52fc5ec6f77115a9f306c120a7e80d83115212d33a843bb6b7989c261';\nconst account = conflux.wallet.addPrivateKey(PRIVATE_KEY); // create account instance\nconst receiver = 'cfxtest:aarc9abycue0hhzgyrr53m6cxedgccrmmy8m50bu1p'\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Compose your transaction:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let txParams = {\n  from: account, // from account instance and will by sign by account.privateKey\n  // nonce\n  // gasPrice\n  // gas\n  to: receiver, // accept address string or account instance\n  value: Drip.fromCFX(0.125), // use the conversion utility function\n  // storageLimit\n  // epochHeight\n  // data\n};\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The detailed explanation of each field can be found ",(0,r.kt)("a",{parentName:"p",href:"../learn/core-space-basics/core-transactions.md"},"here"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Send the composed transaction via ",(0,r.kt)("inlineCode",{parentName:"li"},"cfx.sendTransaction")," and get the returned transaction hash. Then you can view the transaction details by using ",(0,r.kt)("inlineCode",{parentName:"li"},"tx.mined()")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"tx.executed()"),", which APIs will return the transaction data or transaction receipt when transaction is mined or executed. Noting these 2 APIs are a simple wrapping layer for ",(0,r.kt)("inlineCode",{parentName:"li"},"cfx.getTransactionByHash")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"cfx.getTransactionReceipt"),". You can also search the hash at ",(0,r.kt)("a",{parentName:"li",href:"http://confluxscan.io/"},"Conflux Scan"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"async function main() {\n  const txHash = await conflux.cfx.sendTransaction(txParams);\n  console.log(txHash);\n  const txData = await txHash.mined()\n  console.log(txData)\n  const txReceipt = await txHash.executed()\n  console.log(txReceipt)\n}\n\nmain().catch(e => console.error(e));\n")),(0,r.kt)("h2",{id:"other-language-examples"},"Other language examples"),(0,r.kt)("p",null,"Refer to ",(0,r.kt)("a",{parentName:"p",href:"./sdks-and-tools/sdks.md"},"SDKs")," for examples of other SDKs."))}d.isMDXComponent=!0}}]);