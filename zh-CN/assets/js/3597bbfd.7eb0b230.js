"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[7518],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=o,f=d["".concat(c,".").concat(u)]||d[u]||h[u]||r;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},242:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const r={title:"Transactions",sidebar_position:8.5,keywords:["transaction"]},i=void 0,s={unversionedId:"general/conflux-basics/transactions",id:"general/conflux-basics/transactions",title:"Transactions",description:"This section introduces transaction concepts from a high level. For more details on core space transactions, please refer to core space transactions. For espace transactions, you may find it helpful to refer to Ethereum transactions as they are almost exactly same in format and functionality.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/general/conflux-basics/transactions.md",sourceDirName:"general/conflux-basics",slug:"/general/conflux-basics/transactions",permalink:"/zh-CN/docs/general/conflux-basics/transactions",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:8.5,frontMatter:{title:"Transactions",sidebar_position:8.5,keywords:["transaction"]},sidebar:"tutorialSidebar",previous:{title:"Accounts and Addresses",permalink:"/zh-CN/docs/general/conflux-basics/accounts"},next:{title:"Contracts",permalink:"/zh-CN/docs/general/conflux-basics/contracts"}},c={},l=[{value:"Concept of Transaction",id:"concept-of-transaction",level:2},{value:"Transaction Fields",id:"transaction-fields",level:2},{value:"Transaction Lifecycle",id:"transaction-lifecycle",level:2}],p={toc:l},d="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This section introduces transaction concepts from a high level. For more details on core space transactions, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/core/learn/core-space-basics/transaction_explain"},"core space transactions"),". For espace transactions, you may find it helpful to refer to ",(0,o.kt)("a",{parentName:"p",href:"https://ethereum.org/developers/docs/transactions/"},"Ethereum transactions")," as they are almost exactly same in format and functionality.")),(0,o.kt)("h2",{id:"concept-of-transaction"},"Concept of Transaction"),(0,o.kt)("p",null,"A transaction is a single instruction composed by an external actor with a Conflux account, and this instruction is cryptographically signed using the sender account\u2019s private key. A transaction can involve a simple transfer of CFX (the native currency of Conflux), a transfer of tokens (such as ERC20 or ERC721), a deployment of a new smart contract, or an execution of a function on an existing smart contract. Transactions are the only way to store or update data on the blockchain."),(0,o.kt)("h2",{id:"transaction-fields"},"Transaction Fields"),(0,o.kt)("p",null,"Generally speaking, a transaction contains:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"-")," Who send the transaction: A ",(0,o.kt)("inlineCode",{parentName:"p"},"from")," field in an unsigned transaction or the transaction signature fields indicating the signer. This tells the network who is responsible for initiating the transaction and who will pay for the fees."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"-")," What this transaction will do, including:"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-")," Who will be the transaction receiver or which smart contract to interact with(",(0,o.kt)("inlineCode",{parentName:"p"},"to")," field). This specifies the destination address of the transaction, which can be either user account or a smart contract that can execute some logic or empty to create a contract."),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"-"),"  How much native token will be send(",(0,o.kt)("inlineCode",{parentName:"p"},"value")," field). This indicates how much CFX (the native token of Conflux) will be transferred from the sender to the receiver. If the receiver is a smart contract, this value can also be used as an input parameter for its logic."),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"-"),"  How to interact with a smart contract(",(0,o.kt)("inlineCode",{parentName:"p"},"data")," field). This contains additional information for calling a smart contract function or deploying a new smart contract. It can encode the name and arguments of the function to be invoked or the bytecode of the new contract to be created."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"-"),"  Transaction fee information, including:"),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"-")," Field(s) indicating base transaction fee (",(0,o.kt)("inlineCode",{parentName:"p"},"gas")," in both spaces, and extra ",(0,o.kt)("inlineCode",{parentName:"p"},"storageLimit")," field in core space). These fields is determine according to how much computational resources are required to execute the transaction and (in core space) how much storage space are occupied by its effects."),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-"),'  Field indicating how much "tip" sender is willing to pay to miner(',(0,o.kt)("inlineCode",{parentName:"p"},"gasPrice")," field). This field allows senders to adjust their priority in getting their transactions packed by miners. A higher ",(0,o.kt)("inlineCode",{parentName:"p"},"gasPrice")," means a higher chance of being included in a block sooner."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"-"),' Field indicating when or where the transaction is "valid" (',(0,o.kt)("inlineCode",{parentName:"p"},"chainId"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"nonce")," in both spaces, and ",(0,o.kt)("inlineCode",{parentName:"p"},"epochHeight")," in core space). ",(0,o.kt)("inlineCode",{parentName:"p"},"chainId")," prevents a transaction being executed on another chain and ",(0,o.kt)("inlineCode",{parentName:"p"},"nonce")," field ensures the sent transactions are executed in the expected order. ",(0,o.kt)("inlineCode",{parentName:"p"},"epochHeight"),' field sets an expiration time for the transaction based on the epoch number (a concept similar to "block number" in Conflux). A transaction can only be executed within an epoch range associated with ',(0,o.kt)("inlineCode",{parentName:"p"},"epochHeight"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Transaction fields are slightly different between ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/general/conflux-basics/spaces"},"spaces"),". Core space transactions follow the definition of ",(0,o.kt)("a",{parentName:"p",href:"https://www.confluxnetwork.org/files/Conflux_Protocol_Specification.pdf"},"Conflux Protocol"),". Espace transactions follow the ",(0,o.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-155"},"EIP-155")," specification.")),(0,o.kt)("h2",{id:"transaction-lifecycle"},"Transaction Lifecycle"),(0,o.kt)("p",null,"Transactions go through several stages from the time they are constructed to the time they are finally confirmed on the chain. A good understanding of these stages will help users and developers better identify problems with sending transactions and ultimately ensure that transactions are successfully confirmed."),(0,o.kt)("p",null,"The following are the main stages of a transaction from construction to confirmation."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. Transaction construction"),': This is the stage where users or developers create a transaction with all the necessary fields and parameters and get it signed. The transaction object can be created using various tools or libraries, such as Fluent Wallet, Conflux SDK, etc. The transaction will be encoded into a hex string as "rawTransaction" before it is sent.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. Broadcast"),": This is the stage where users or developers send their signed transaction to a Conflux node via RPC or WebSocket. The node will validate the transaction and broadcast it to other nodes in the network if it passes the validation. The node will also return a transaction hash (a unique identifier) to the sender for tracking purposes."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3. Packed into a block -> Mined"),": This is the stage where miners select transactions from their mempool (a pool of pending transactions) and include them in their blocks. Miners will prioritize transactions with higher ",(0,o.kt)("inlineCode",{parentName:"p"},"gasPrice"),". Once a block containing a transaction is mined, it will be propagated to other nodes in the network."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4. Deferring 5 epochs -> Executed"),": This is the stage where transactions are executed by nodes after being deferred for 5 epochs (about 5 seconds). This means that nodes will run the logic of the transactions and update their state accordingly. The execution results of each transaction will be recorded in a receipt, which contains information such as status (success or failure), gas used, logs and events emitted by smart contracts and can be retrieved using transaction hash."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"5. Waiting for about 50 epochs -> Confirmed"),': This is the stage where transactions are confirmed by nodes after being executed for about 50 epochs (about 50 seconds). A transaction is executed does not mean that the status of the transaction will not change anymore. Due to the structure of blockchain, the blockchain may fork or shift the main chain due to the arrival or creation of new blocks, which may revert certain transactions. A confirmed transaction means that it has been included in a "deep" enough block and has a extremely low probability of being reverted.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"6. Waiting for PoS chain Finalization -> Finalized"),": This is the final stage where transactions are finalized by nodes after being referenced by Conflux's ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/general/conflux-basics/consensus-mechanisms/proof-of-stake/pos_overview"},"PoS chain"),". Conflux's PoS chain periodically refers a stable PoW block to provide finality for transactions. A finalized transaction means that it has zero probability of being reverted unless the attacker possesses more than 67% of the CFX staked in PoS."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Transaction",src:n(8124).Z,width:"1434",height:"1900"})))}h.isMDXComponent=!0},8124:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/transaction-stages-8bcdab5873c9062a0705324908afa456.bin"}}]);