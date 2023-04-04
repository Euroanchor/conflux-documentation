"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[3520],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,h=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7628:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:3,title:"Funding Your Account on Testnet"},i=void 0,c={unversionedId:"core/learn/getting-started/funding-your-account",id:"core/learn/getting-started/funding-your-account",title:"Funding Your Account on Testnet",description:"Are you a new user of Conflux blockchain? Or are you a developer planning to develop a Dapp on Conflux? Then you may need some CFX to interact with the Conflux network. We provide the testnet CFX faucet service, which allows users to apply for the testnet CFX and experience it in the Conflux testnet environment.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/core/learn/getting-started/funding-your-account.md",sourceDirName:"core/learn/getting-started",slug:"/core/learn/getting-started/funding-your-account",permalink:"/zh-CN/docs/core/learn/getting-started/funding-your-account",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Funding Your Account on Testnet"},sidebar:"tutorialSidebar",previous:{title:"Installing a Wallet",permalink:"/zh-CN/docs/core/learn/getting-started/installing-a-wallet"},next:{title:"What to Do Next?",permalink:"/zh-CN/docs/core/learn/getting-started/what-to-do-next"}},l={},s=[{value:"Faucet Dapp",id:"faucet-dapp",level:2},{value:"Apply for testnet CFX",id:"apply-for-testnet-cfx",level:3}],u={toc:s},p="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Are you a new user of Conflux blockchain? Or are you a developer planning to develop a Dapp on Conflux? Then you may need some CFX to interact with the Conflux network. We provide the testnet CFX faucet service, which allows users to apply for the testnet CFX and experience it in the Conflux testnet environment."),(0,o.kt)("h2",{id:"faucet-dapp"},"Faucet Dapp"),(0,o.kt)("p",null,"We have developed a ",(0,o.kt)("a",{parentName:"p",href:"https://faucet.confluxnetwork.org/"},"Faucet Dapp"),", which not only can be used to claim ",(0,o.kt)("inlineCode",{parentName:"p"},"CFX")," but also tokens, currently includes ",(0,o.kt)("inlineCode",{parentName:"p"},"FC"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"cUSDT"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Dapp-faucet",src:n(1885).Z,width:"2844",height:"888"})),(0,o.kt)("p",null,'To use the Faucet Dapp, simply connect to the dapp using Fluent or Portal, and click "Claim".'),(0,o.kt)("h3",{id:"apply-for-testnet-cfx"},"Apply for testnet CFX"),(0,o.kt)("p",null,"The default Fluent network is ",(0,o.kt)("inlineCode",{parentName:"p"},"Conflux Hydra")," (mainnet). The first step is to switch the Fluent network to ",(0,o.kt)("inlineCode",{parentName:"p"},"Conflux testnet"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"SwitchNetwork",src:n(1649).Z,width:"377",height:"604"})),(0,o.kt)("p",null,"After switching the network, please note the warning message about the address change."),(0,o.kt)("p",null,"Now you can go to the ",(0,o.kt)("a",{parentName:"p",href:"http://faucet.confluxnetwork.org/"},"Faucet Dapp"),", and click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Connect"),' button in both the page and in the "Connect to this web site" form.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"FaucetConnectFluent",src:n(3129).Z,width:"1002",height:"783"})),(0,o.kt)("p",null,"When the wallet is connected, your CFX address appears in the Connect button and it is green now. You can select ",(0,o.kt)("inlineCode",{parentName:"p"},"CFX")," in the tokens list and clic on the ",(0,o.kt)("inlineCode",{parentName:"p"},"CLAIM")," button, a sign transaction window appears and you can click on the Confirm button ."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"SignTransaction",src:n(5513).Z,width:"373",height:"633"})),(0,o.kt)("p",null,"If successful, the interface will return the hash of the CFX transaction. Switch back to Fluent and you can see that the balance will increase by 1,000 CFX. You can use the hash to view the details of the transaction on ",(0,o.kt)("a",{parentName:"p",href:"https://testnet.confluxscan.io/"},"ConfluxScan"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"AddressWithTestCFX",src:n(3537).Z,width:"376",height:"609"})))}d.isMDXComponent=!0},3537:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/AddressWithTestCFX-ee7b81ef77eb554ba18c4dc2b364bddf.bin"},1885:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Dapp-faucet-1-2d73728df9d9ddee23bd18ff74cd75de.bin"},3129:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/FaucetConnectFluent-892789c07dff825aab0b51a01e1520c2.bin"},5513:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/SignTransaction-f1e87303f8432b363ec092643484c3df.bin"},1649:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/SwitchNetwork-66901a7bd0f8180c9128f14812d3a967.bin"}}]);