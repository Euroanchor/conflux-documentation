"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[2413],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(t),f=o,g=c["".concat(u,".").concat(f)]||c[f]||d[f]||a;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5319:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_position:4,title:"Running a Full Node"},i=void 0,l={unversionedId:"general/run-a-node/running-full-node",id:"general/run-a-node/running-full-node",title:"Running a Full Node",description:"Configuring Conflux Full Node",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/general/run-a-node/running-full-node.md",sourceDirName:"general/run-a-node",slug:"/general/run-a-node/running-full-node",permalink:"/zh-CN/docs/general/run-a-node/running-full-node",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Running a Full Node"},sidebar:"tutorialSidebar",previous:{title:"Compiling the Conflux Client",permalink:"/zh-CN/docs/general/run-a-node/compiling-conflux-client"},next:{title:"Running a Light Node",permalink:"/zh-CN/docs/general/run-a-node/running-light-node"}},u={},s=[{value:"Configuring Conflux Full Node",id:"configuring-conflux-full-node",level:2},{value:"Running Test",id:"running-test",level:2}],p={toc:s},c="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"configuring-conflux-full-node"},"Configuring Conflux Full Node"),(0,o.kt)("p",null,"Conflux can be configured using either the CLI options or a config file. Should the CLI flags and the config file disagree about a setting, the CLI takes precedence."),(0,o.kt)("p",null,"The config file follows the format of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/toml-lang/toml"},"TOML"),". The path of the configuration file can be set with the CLI option ",(0,o.kt)("inlineCode",{parentName:"p"},"--config path/to/conflux.toml"),". A default configuration file ",(0,o.kt)("inlineCode",{parentName:"p"},"hydra.toml")," with every configuration explained has been provided in the directory ",(0,o.kt)("inlineCode",{parentName:"p"},"run"),", and you can start customizing your configuration from there."),(0,o.kt)("p",null,"You can list all CLI options by running  ",(0,o.kt)("inlineCode",{parentName:"p"},"$ ./conflux --help"),". The vast majority of CLI options map to a setting in the TOML file, for example ",(0,o.kt)("inlineCode",{parentName:"p"},"--public-address 127.0.0.1:32323")," can be set by creating a config file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'public_address="127.0.0.1:32323"\n')),(0,o.kt)("p",null,"If you are going to set up a node and let it join the Conflux mainnet(testnet), you need to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"public_address"),' appropriately. It should be set as the IP address of your node which can be accessed publicly from Internet. If your node is covered under a public gateway, you can get its public address by searching "ip" in ',(0,o.kt)("a",{parentName:"p",href:"https://www.google.com"},"Google"),"."),(0,o.kt)("p",null,"If you want to let your node participate the mining process, you need to enable it by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"start_mining"),' as "true" and ',(0,o.kt)("inlineCode",{parentName:"p"},"mining_author")," as the account address that receives the mining reward."),(0,o.kt)("p",null,"If you want to open the http or websocket RPC, you need to enable it by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"jsonrpc_http_port")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"jsonrpc_ws_port"),". ",(0,o.kt)("strong",{parentName:"p"},"Note that to serve transaction-related RPCs, ",(0,o.kt)("inlineCode",{parentName:"strong"},"persist_tx_index")," should also be set to ",(0,o.kt)("inlineCode",{parentName:"strong"},"true")," or the node will only be able to handle very recent transactions.")),(0,o.kt)("h2",{id:"running-test"},"Running Test"),(0,o.kt)("p",null,"We have both unit tests written in Rust and integration tests written in python. After you make some modifications to the code, you can run these tests to see if the system still runs correctly."),(0,o.kt)("p",null,"First, you need to install the dependencies as instructed in ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/general/run-a-node/compiling-conflux-client#install-test-dependencies"},"Install Test Dependencies"),"."),(0,o.kt)("p",null,"Then you can run the tests as follows"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Linux:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  $ ./dev-support/test.sh\n")),(0,o.kt)("p",{parentName:"li"},"  This will automatically run the unit tests in our Rust code and the python tests.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Others:"),(0,o.kt)("p",{parentName:"li"},"  To run unit tests in Rust:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  $ cargo test --release --all\n")),(0,o.kt)("p",{parentName:"li"},"  To run python integration tests:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  $ ./tests/test_all.py\n")))))}d.isMDXComponent=!0}}]);