"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1923],{34576:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var a=n(27424),s=n.n(a),o=n(67294),i=n(85956),l=n(64236),r=n(84055),A=n(90482),c={};function h(){var e=(0,i.pC)(),t=(0,o.useState)(!0),n=s()(t,2),a=n[0],h=n[1],p=(0,o.useRef)(i.m8.location.pathname);return(0,o.useEffect)((function(){return i.m8.listen((function(e){e.location.pathname!==p.current&&(p.current=e.location.pathname,h(!0),document.documentElement.scrollTo(0,0))}))}),[]),o.createElement(l.D.Provider,{value:{pkg:{version:"",repository:{type:"git",url:"https://github.com/antvis/g2plot"}},entryExports:c,demos:r.DE,components:r.wx,locales:A.k,loading:a,setLoading:h,themeConfig:{footer:'Copyright © 2023 | Powered by <a href="https://d.umijs.org" target="_blank" rel="noreferrer">dumi</a>',prefersColor:{default:"light",switch:!0},title:"G2Plot",description:"A collection of charts made with the Grammar of Graphics",defaultLanguage:"zh",siteUrl:"https://antv.antgroup.com",isAntVSite:!1,githubUrl:"https://github.com/antvis/G2plot",showSearch:!0,showGithubCorner:!0,showGithubStars:!0,showAntVProductsCard:!0,showLanguageSwitcher:!0,showWxQrcode:!0,showChartResize:!0,showAPIDoc:!0,versions:{"2.4.26":"https://g2plot.antv.antgroup.com","1.x":"https://g2plot-v1.antv.vision"},navs:[{slug:"docs/manual",title:{zh:"教程",en:"Manual"},order:2},{slug:"docs/api",title:{zh:"API",en:"API"},order:1},{slug:"examples",title:{zh:"图表示例",en:"Examples"},order:0}],ecosystems:[{name:{zh:"Ant Design Charts（React）",en:"Ant Design Charts (React)"},url:"https://charts.ant.design/"},{name:{zh:"G2Plot 可视化圈子（博客文章）",en:"Blog posts of G2Plot"},url:"https://www.yuque.com/antv/g2plot"},{name:{zh:"图表性能检测工具",en:"Charts performance test"},url:"https://git.hust.cc/charts-perf/"},{name:{zh:"AntV ThemeSet（主题构建器）",en:"AntV ThemeSet"},url:"https://theme-set.antv.vision"},{name:{zh:"Vis Dashboard（可视化精选集）",en:"Vis Dashboard"},url:"https://vis-dashboard.antv.vision"}],detail:{title:{zh:"G2Plot 开箱即用的图表库",en:"G2Plot: a charting library"},description:{zh:"G2Plot 是开箱即用、易于配置、具有良好视觉和交互体验的通用统计图表库。",en:"G2Plot is an interactive and responsive charting library based on the grammar of graphics."},image:"https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*f_gcSbpq-6kAAAAAAAAAAABkARQnAQ",buttons:[{text:{zh:"图表示例",en:"Examples"},link:"/examples/",type:"primary"},{text:{zh:"开始使用",en:"Getting Started"},link:"/manual/introduction"}]},news:[{type:{zh:"论坛",en:"Forum"},title:{zh:"远方 · 远芳 AntV 2022 年度发布",en:"Yuanyuan · Yuanfang AntV 2022 Annual Release"},date:"2022.11.22",link:"https://www.yuque.com/antv/blog/1122_6"},{type:{zh:"论坛",en:"Forum"},title:{zh:"AntV 芒种日 图新物：GraphInsight 发布",en:"AntV Seeds Day Graph New: GraphInsight Released"},date:"2022.06.06",link:"https://github.com/antvis/GraphInsight"}],features:[{icon:"https://gw.alipayobjects.com/zos/basement_prod/eae0ee4e-acbf-4486-88eb-ea17f441a0d5.svg",title:{zh:"开箱即用",en:"Easy to use"},description:{zh:"配置项优化精简，仅需几行代码轻松生成图表",en:"Generating high quality statistical charts through a few lines of code."}},{icon:"https://gw.alipayobjects.com/zos/basement_prod/7269ccc5-fbe2-4e55-85d1-17c05917e8b0.svg",title:{zh:"默认好用",en:"Default by good"},description:{zh:"即使你是可视化或设计小白，也能制作优雅、标准的统计图表",en:"Even though you are not an expert in data visualization and design, you still can create elegant as well as standard charts as you want by using G2Plot."}},{icon:"https://gw.alipayobjects.com/zos/basement_prod/d77e48ed-4e4c-43f5-bd83-329e12c28c16.svg",title:{zh:"响应式图表",en:"Responsive plots"},description:{zh:"保证图表在任何显示尺寸、任何数据状态下的可读性",en:"The responsive ability of g2plot guarantee your chart's readability in any display space and data status."}}],cases:[{logo:"https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*Uh1MSpdcj-kAAAAAAAAAAABkARQnAQ",title:{zh:"图表实验室",en:"Advanced Features"},description:{zh:"来这里尝试一下我们正在开发中的高级图表功能",en:"We are now working on some advanced and powerful chart features."},link:"/examples",image:"https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*SXLtRaVPGvMAAAAAAAAAAABkARQnAQ",isAppLogo:!0}],companies:[{name:"阿里云",img:"https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*V_xMRIvw2iwAAAAAAAAAAABkARQnAQ"},{name:"支付宝",img:"https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*lYDrRZvcvD4AAAAAAAAAAABkARQnAQ"},{name:"天猫",img:"https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*BQrxRK6oemMAAAAAAAAAAABkARQnAQ"},{name:"淘宝网",img:"https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*1l8-TqUr7UcAAAAAAAAAAABkARQnAQ"},{name:"网上银行",img:"https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*ZAKFQJ5Bz4MAAAAAAAAAAABkARQnAQ"},{name:"京东",img:"https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*yh-HRr3hCpgAAAAAAAAAAABkARQnAQ"},{name:"yunos",img:"https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*_js7SaNosUwAAAAAAAAAAABkARQnAQ"},{name:"菜鸟",img:"https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*TgV-RZDODJIAAAAAAAAAAABkARQnAQ"}],docs:[{slug:"manual/plots",title:{zh:"图表指引",en:"Plot Guide"},order:3},{slug:"api/plots",title:{zh:"基础图表",en:"Plots"},order:2},{slug:"api/advanced-plots",title:{zh:"高级图表",en:"Advanced plots"},order:3},{slug:"api/components",title:{zh:"图表组件",en:"Components"},order:4},{slug:"api/options",title:{zh:"通用配置",en:"Common Configuration"},order:5}],examples:[{slug:"case",icon:"gallery",title:{zh:"场景案例",en:"Show Case"}},{slug:"line",icon:"line",title:{zh:"折线图",en:"Line"}},{slug:"area",icon:"area",title:{zh:"面积图",en:"Area"}},{slug:"column",icon:"column",title:{zh:"柱形图",en:"Column"}},{slug:"bar",icon:"bar",title:{zh:"条形图",en:"Bar"}},{slug:"pie",icon:"pie",title:{zh:"饼图",en:"Pie"}},{slug:"dual-axes",icon:"line",title:{zh:"双轴图",en:"Dual Axes"}},{slug:"progress-plots",icon:"gauge",title:{zh:"进度图",en:"Progress Plots"}},{slug:"scatter",icon:"point",title:{zh:"散点气泡图",en:"Scatter and Bubble"}},{slug:"rose",icon:"rose",title:{zh:"玫瑰图",en:"Rose"}},{slug:"relation-plots",icon:"sankey",title:{zh:"关系图",en:"Relation Plots"}},{slug:"heatmap",icon:"heatmap",title:{zh:"热力图",en:"Heatmap"}},{slug:"tiny",icon:"other",title:{zh:"迷你图",en:"Tiny Plots"}},{slug:"more-plots",icon:"other",title:{zh:"更多图表",en:"More Plots"}},{slug:"treemap",icon:"other",title:{zh:"矩形树图",en:"Treemap"}},{slug:"plugin",icon:"other",title:{zh:"高级图表",en:"Advanced Plots"}},{slug:"dynamic-plots",icon:"other",title:{zh:"动态交互",en:"Dynamic Plots"}},{slug:"component",icon:"other",title:{zh:"图表组件",en:"Components"}},{slug:"general",icon:"other",title:{zh:"通用配置",en:"General Configuration"}}],playground:{extraLib:"",devDependencies:{typescript:"latest"}},docsearchOptions:{apiKey:"0d19588d7661a81faa8b75f6ade80321",indexName:"antv_g2plot"},announcement:{zh:"",en:""}}}},e)}}}]);