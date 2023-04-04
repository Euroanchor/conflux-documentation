"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[3619],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(n),m=a,d=h["".concat(l,".").concat(m)]||h[m]||u[m]||o;return n?r.createElement(d,s(s({ref:t},c),{},{components:n})):r.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[h]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4095:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},s="Rigorous Testing Tools for Conflux",i={unversionedId:"general/build/rigorous-testing",id:"general/build/rigorous-testing",title:"Rigorous Testing Tools for Conflux",description:"Ensuring the correctness of a blockchain system like Conflux is a challenging task. The Conflux Rust implementation repository comes with several rigorous testing tools and scripts.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/general/build/rigorous-testing.md",sourceDirName:"general/build",slug:"/general/build/rigorous-testing",permalink:"/zh-CN/docs/general/build/rigorous-testing",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"The Conflux Consensus Layer Design and Implementation",permalink:"/zh-CN/docs/general/build/consensus-design"},next:{title:"Stratum Protocol in Conflux-Rust",permalink:"/zh-CN/docs/general/build/stratum"}},l={},p=[{value:"Unit Tests and Integration Tests",id:"unit-tests-and-integration-tests",level:2},{value:"Consensus Fuzzing Tool",id:"consensus-fuzzing-tool",level:2},{value:"Random Tracing Test",id:"random-tracing-test",level:2},{value:"Transaction Propagation and Performance Test",id:"transaction-propagation-and-performance-test",level:2},{value:"Storage Benchmark Test",id:"storage-benchmark-test",level:2},{value:"Consensus Performance Benchmark Tool",id:"consensus-performance-benchmark-tool",level:2}],c={toc:p},h="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rigorous-testing-tools-for-conflux"},"Rigorous Testing Tools for Conflux"),(0,a.kt)("p",null,"Ensuring the correctness of a blockchain system like Conflux is a challenging task. The Conflux Rust implementation repository comes with several rigorous testing tools and scripts."),(0,a.kt)("p",null,"Note that in some terminals, the default maximum number of open file descriptors may not be enough. This is especially true if you are using Mac with its default zsh terminal. You will need to change the limit to a larger number as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ ulimit -n 22288\n")),(0,a.kt)("h2",{id:"unit-tests-and-integration-tests"},"Unit Tests and Integration Tests"),(0,a.kt)("p",null,"Unit tests come together with the rust code. It can be invoked via ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo test\n--release --all")," after Conflux being complied from the source code. See the ",(0,a.kt)("a",{parentName:"p",href:"https://conflux-chain.github.io/conflux-doc/get_started/"},"Getting Started")," page for more information. Integration tests are python test scripts ended with ",(0,a.kt)("inlineCode",{parentName:"p"},"_test.py")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"tests/scripts")," directory. After compiled the ",(0,a.kt)("em",{parentName:"p"},"release")," version of the Conflux from code. One can run ",(0,a.kt)("inlineCode",{parentName:"p"},"tests/test_all.py")," to run all integration tests together. These tests are executed routinely for every commit to the Conflux Rust implementation."),(0,a.kt)("h2",{id:"consensus-fuzzing-tool"},"Consensus Fuzzing Tool"),(0,a.kt)("p",null,"Inside the directory ",(0,a.kt)("inlineCode",{parentName:"p"},"core/benchmark/consensus/test"),", there is a random fuzzing tool for the consensus component. It works as follows. ",(0,a.kt)("inlineCode",{parentName:"p"},"core/benchmark/consensus/test/gen-random-graph.cpp")," is a slow C++ implementation of the Conflux TreeGraph consensus algorithm together with a random graph generator that generates random TreeGraph blocks in a special format. ",(0,a.kt)("inlineCode",{parentName:"p"},"consensus_bench")," is capable of processing this input format, run the Conflux consensus, and compare the results with the slow C++ implementation. ",(0,a.kt)("inlineCode",{parentName:"p"},"iter-gen-random.py")," is a python script that iteratively invoke the generation-processing-comparing process. To run this fuzzing tool:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd core/benchmark/consensus/test\n$ g++ -O2 -o gen-random-graph gen-random-graph.cpp\n$ ./iter-gen-random.py 10000 3 30 10 10 100\n")),(0,a.kt)("p",null,"The python script will not stop until it finds an error or you manually terminate it. If the python script finds an error, the ",(0,a.kt)("inlineCode",{parentName:"p"},"rand.in")," file will correspond to the bug triggering input for the ",(0,a.kt)("inlineCode",{parentName:"p"},"consensus_bench")," program. The six parameters passed to the python scripts corresponds to the number of randomly generated block per test case, the ",(0,a.kt)("inlineCode",{parentName:"p"},"TIMER_CHAIN_BLOCK_DIFFICULTY_RATIO")," parameter, the ",(0,a.kt)("inlineCode",{parentName:"p"},"TIMER_CHAIN_BETA")," parameter, the ",(0,a.kt)("inlineCode",{parentName:"p"},"ADAPTIVE_WEIGHT_BETA")," parameter, the ",(0,a.kt)("inlineCode",{parentName:"p"},"HEAVY_BLOCK_DIFFICULTY_RATIO")," parameter, the ",(0,a.kt)("inlineCode",{parentName:"p"},"ERA_EPOCH_COUNT")," parameter, respectively. You can pass any legitimate consensus parameter to the python script. These numbers are default that we empirically find them useful for detecting bugs."),(0,a.kt)("p",null,"The python script will also print out the processing speed of the consensus graph in the test. The expected speed is ~1000 blocks per second (on a Mac Book Pro 2019 laptop) and ~350 blocks per second on m5a.xlarge. If the reported speed is significantly lower than expected, it typically means a potential performance issue. For every release, we execute this fuzzing for at least one hour using the default parameters."),(0,a.kt)("p",null,"Note that if you terminate this script brutally (which you will like do). It leaves two to three temporary directories with the ",(0,a.kt)("inlineCode",{parentName:"p"},"__")," prefix and ",(0,a.kt)("inlineCode",{parentName:"p"},"sqlite_db"),". You should remove these directories manually."),(0,a.kt)("h2",{id:"random-tracing-test"},"Random Tracing Test"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"tests/conflux_tracing.py")," is a random testing script with the failure injection capability. It will start a Conflux network with a fixed number of nodes and inject node crashes, db crashes, and node restarts during. During the running, it keep fetches states from different node and verify that these nodes have the consensus for the TreeGraph and block state. To run Conflux tracing, you need to first compile the release version of the Conflux Rust implementation from the source code. Then you can invoke the script as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ tests/conflux_tracing.py run\n")),(0,a.kt)("p",null,"The python script will then start 10 different instances together with a mock instance. It will run non-stop until it finds an error (inconsistent state or unexpected crash). For every release, we execute this tracing script for at least one hour."),(0,a.kt)("p",null,"In case of errors, it will generate trace files ",(0,a.kt)("inlineCode",{parentName:"p"},"snapshot*.json")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"txs*.json")," to help diagnose the issue. Note that if you terminate this script brutally (which you will likely do). It also generates these files so you may want to clean them manually."),(0,a.kt)("h2",{id:"transaction-propagation-and-performance-test"},"Transaction Propagation and Performance Test"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"tests/scripts/one_click.sh")," together with the remaining bash scripts in the same directory provide an automatic deployment of Conflux network on AWS for testing the simple payment TPS and transaction pool performance. You can run this test as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"First you need to download and install AWS CLI tools. Properly configure the AWS credential for the CLI tool.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Make your default public key registered as a named key pair in ",(0,a.kt)("em",{parentName:"p"},"the us-west-2 region"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Decide the branch of the Conflux repo you want to test. Note that this script pulls the source code from a GitHub repo that contains the Conflux rust implementation and compile them on the fly. You cannot run your local Conflux copy with this script. If you do not specify the repo/branch name, it will pull from the official Conflux-rust repo from the GitHub.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the following command:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd tests/scripts\n$ ./one_click.sh key-pair-name 20 branch-name [repo-name]\n")),(0,a.kt)("p",null,"This will start 20 instances at the us-west-2 region together with a random transaction generator. It will take roughly 15 minutes to setup the experiments and then 20 minutes to finish the run. In the end, it will report the TPS performance. The expected good TPS number is ~4000TPS. If you get a TPS number much lower than the expectation, there is a performance regression at the transaction pool or at the storage layer. For every release, we run this script to test its performance."),(0,a.kt)("h2",{id:"storage-benchmark-test"},"Storage Benchmark Test"),(0,a.kt)("p",null,"The storage layer in Conflux is often the performance bottleneck. ",(0,a.kt)("inlineCode",{parentName:"p"},"core/benchmark/storage")," therefore contains a benchmark tool to measure the performance of the storage layer, eliminating other layer from the execution. We also converted Ethereum network history payment transactions (first ~4m blocks) as the benchmark traces. Here are steps to run the storage benchmark test:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the AWS S3 ",(0,a.kt)("inlineCode",{parentName:"p"},"conflux-storage-bench")," bucket, download ",(0,a.kt)("inlineCode",{parentName:"p"},"foundation.json")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"eth_from_0_to_4141811_txs.rlp.tar.gz"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Untar the rlp history file to obtain ",(0,a.kt)("inlineCode",{parentName:"p"},"eth_from_0_to_4141811_txs.rlp"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to ",(0,a.kt)("inlineCode",{parentName:"p"},"core/benchmark/storage")," and run ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo build --release")," to compile the binary ",(0,a.kt)("inlineCode",{parentName:"p"},"storage_bench"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a temporary directory ",(0,a.kt)("inlineCode",{parentName:"p"},"tmp_storage_db")," for holding the blockchain database generated in the experiment.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Invoke the following command:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd core/benchmark/storage\n$ RUST_BACKTRACE=full target/release/storage_bench run -g /path/to/foundation.json -t /path/to/eth_from_0_to_4141811_txs.rlp -d /path/to/tmp_storage_db --txs_to_process 30000000 --skip 1156773812\n")),(0,a.kt)("p",null,"This command will process the first 30 million transactiosn from the parsed history file and then quit. It is a good idea to time the running time of this command for computing the achieved processing throughput of the storage layer. The performance will largely depend on the quality of the underlying disk I/O. In MacBook Pro 2019, the throughput is 25000-30000 TPS. In m5a.xlarge, the throughput is 15000-20000 TPS. If the performance is lower than the expectation, it indicates a potential regression at the storage layer. For every relealse, we will run this test to check the storage layer performance."),(0,a.kt)("h2",{id:"consensus-performance-benchmark-tool"},"Consensus Performance Benchmark Tool"),(0,a.kt)("p",null,"The consensus implementation is typically fast and can process close to one thousand blocks per second in the normal scenarios. However, if the TreeGraph is unstable and it contains a lot of forks, the consensus component may fail back to slow routines. Its performance under such unstable scenarios is critical because it corresponds to the catch-up speed during DoS attacks. ",(0,a.kt)("inlineCode",{parentName:"p"},"tests/attack_bench")," contains a list of python scripts to benchmark the consensus performance under attack scenarios:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"fork_same_height_merge.py")," creates a unstable TreeGraph with roughly 95000 blocks. In the TreeGraph, it has three branches and in each branch there are star shape forks attached at a fixed height. It corresponds to one worst case scenario for the consensus procesing engine. The expected speed is ~70 blocks/s on MacBook Pro 2019 and ~45 blocks/s on m5a.xlarge.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"fork_same_height_hiding.py")," tests the scenario where an attacker tries to actively mine at a fixed height, hides the mined blocks, and release them together. It measures the block generation capaiblity of the victim at this scenario. The expected generation speed is always faster than 1000 blocks in less than 1 minutes.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"fork_same_height_attack.py")," tests a similar attack as 2 but the attacker does not hide the blocks. The expected generation speed is always faster than 100 blocks in less than 10 seconds.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"fork_chain_hiding.py")," tests the scenario where an attacker tries to actively mine a separate chain, hides the mined blocks, and release them together. The expected generation speed of the victim is always faster than 100 blocks in less than 10 seconds.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"fork_chain_attack.py")," tests a similar attack as 4 but the attacker does not hide the blocks. The expected generation speed of the victim is always faster than 100 blocks in less than 10 seconds."))),(0,a.kt)("p",null,"Note that 2, 3, and 5 are long running test scripts and you can terminate the execution after the speed stablizes. For every release, we run these scripts to make sure that there is no performance regression."))}u.isMDXComponent=!0}}]);