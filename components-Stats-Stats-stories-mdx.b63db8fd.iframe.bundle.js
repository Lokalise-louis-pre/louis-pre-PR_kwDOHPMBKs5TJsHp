"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[7497],{"./node_modules/@lokalise/styled/dist/tokens/modifier.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>f});const f=(i,e)=>t=>("function"==typeof i?i(t):t[i])?e:void 0},"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>defaultComponents,r:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components};return new Promise(((resolve,reject)=>{__webpack_require__.e(9433).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI,{context,docsParameter}))),element))).then(resolve)}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$4:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4,E$:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.E$,UG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/components/Stats/Stats.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,alignRight:()=>alignRight,default:()=>Stats_stories,defaultStory:()=>defaultStory,linkToHref:()=>linkToHref});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),Link=__webpack_require__("./src/components/Link/Link.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),modifier=__webpack_require__("./node_modules/@lokalise/styled/dist/tokens/modifier.js"),theme=__webpack_require__("./src/utils/theme/index.ts");const Container=styled_components_browser_esm.ZP.p.withConfig({displayName:"Stats__Container",componentId:"sc-noudwb-0"})(["font-family:",";margin:0;display:grid;",""],(0,theme.S3)("font.family.graphik"),(0,modifier.c)("alignRight",styled_components_browser_esm.iv`
			text-align: right;
		`)),Title=styled_components_browser_esm.ZP.span.withConfig({displayName:"Stats__Title",componentId:"sc-noudwb-1"})(["",";text-transform:uppercase;color:",";white-space:nowrap;"],(0,theme.cp)("body.tiny.default"),(0,theme.S3)("color.text.light.default")),Value=styled_components_browser_esm.ZP.span.withConfig({displayName:"Stats__Value",componentId:"sc-noudwb-2"})(["font-size:20px;line-height:22px;font-weight:100;color:",";"],(0,theme.S3)("color.text.light.default"));var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Stats=_ref=>{let{title,children,href,clickable=!1,alignRight=!1,percent=!1,className}=_ref;return(0,jsx_runtime.jsxs)(Container,{alignRight,className,children:[(0,jsx_runtime.jsx)(Title,{children:title}),(0,jsx_runtime.jsx)(Value,{children:(()=>{const value=(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[children,percent&&"%"]});return href?(0,jsx_runtime.jsx)(Link.r,{href,children:value}):clickable?(0,jsx_runtime.jsx)(Link.r,{children:value}):value})()})]})};Stats.displayName="Stats",Stats.displayName="Stats";try{Stats.displayName="Stats",Stats.__docgenInfo={description:"",displayName:"Stats",props:{title:{defaultValue:null,description:"Title of the stat.",name:"title",required:!0,type:{name:"string"}},href:{defaultValue:null,description:"Link to some place, render as clickable when an href is passed.",name:"href",required:!1,type:{name:"string"}},clickable:{defaultValue:{value:"false"},description:"Indicate the stat is clickable.",name:"clickable",required:!1,type:{name:"boolean"}},alignRight:{defaultValue:{value:"false"},description:"Align text to right.",name:"alignRight",required:!1,type:{name:"boolean"}},percent:{defaultValue:{value:"false"},description:"Renders a styled percentage sign after the passed content.",name:"percent",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Renders text content.",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Stats/Stats.tsx#Stats"]={docgenInfo:Stats.__docgenInfo,name:"Stats",path:"src/components/Stats/Stats.tsx#Stats"})}catch(__react_docgen_typescript_loader_error){}const Template=args=>(0,jsx_runtime.jsx)(Stats,{...args});const defaultStory=Template.bind({});defaultStory.storyName="Default",defaultStory.args={title:"Some Information",href:void 0,alignRight:!1,percent:!0,children:"99"},defaultStory.parameters={storySource:{source:"args => <Stats {...args} />"}};const linkToHref=Template.bind({});linkToHref.storyName="Link to Href",linkToHref.args={title:"Project",href:"https://github.com/lokalise/louis",alignRight:!1,percent:!1,children:"Louis"},linkToHref.parameters={storySource:{source:"args => <Stats {...args} />"}};const alignRight=Template.bind({});alignRight.storyName="Align Right",alignRight.args={title:"Code coverage",href:void 0,alignRight:!0,percent:!0,children:"99.99"},alignRight.parameters={storySource:{source:"args => <Stats {...args} />"}};const componentMeta={title:"Components/Stats",parameters:{controls:{sort:"requiredFirst"},docs:{source:{excludeDecorators:!0}}},decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{padding:20},children:Story()})],component:Stats,tags:["stories-mdx"],includeStories:["defaultStory","linkToHref","alignRight"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({div:"div",h1:"h1",ul:"ul",li:"li",a:"a",p:"p",h3:"h3",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Components/Stats",component:Stats,parameters:{controls:{sort:"requiredFirst"},docs:{source:{excludeDecorators:!0}}},decorators:[Story=>(0,jsx_runtime.jsx)(_components.div,{style:{padding:20},children:Story()})]}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"stats",children:"Stats"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#figma-design-file",children:"Figma Design File"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#examples",children:"Examples"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)("h2",{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Stats is a component that can be used to show statistical information."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-bash",children:"npm install @lokalise/louis\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-tsx",children:"import { Stats } from '@lokalise/louis';\n\nexport default () => (\n\t<Stats title=\"Title\" href=\"https://link-to.some-place\" alignRight={false} percent={false}>\n\t\t'100'\n\t</Stats>\n);\n"})}),"\n",(0,jsx_runtime.jsx)("h2",{id:"figma-design-file",children:"Figma Design File"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=4028%3A25590",target:"_blank",rel:"nofollow noopener noreferrer",children:"Figma Source File | Stats"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)("h2",{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:Stats,sort:"requiredFirst"}),"\n",(0,jsx_runtime.jsx)("h2",{id:"examples",children:"Examples"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"open",children:(0,jsx_runtime.jsx)(dist.oG,{name:"Default",args:{title:"Some Information",href:void 0,alignRight:!1,percent:!0,children:"99"},children:Template.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"link-to-href",children:"Link to Href"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"open",children:(0,jsx_runtime.jsx)(dist.oG,{name:"Link to Href",args:{title:"Project",href:"https://github.com/lokalise/louis",alignRight:!1,percent:!1,children:"Louis"},children:Template.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"align-right",children:"Align Right"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"open",children:(0,jsx_runtime.jsx)(dist.oG,{name:"Align Right",args:{title:"Code coverage",href:void 0,alignRight:!0,percent:!0,children:"99.99"},children:Template.bind({})})})]})}}};const Stats_stories=componentMeta},"./src/components/Link/Link.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Link});var _lokalise_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_lokalise_styled__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@lokalise/styled/dist/tokens/modifier.js"),_utils_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/styles/link.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/theme/index.ts"),_Pressable__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Pressable/index.tsx");const Link=(0,_lokalise_styled__WEBPACK_IMPORTED_MODULE_0__.ZP)(_Pressable__WEBPACK_IMPORTED_MODULE_1__.s).withConfig({displayName:"Link",componentId:"sc-gfg66s-0"})(["",";",""],_utils_styles__WEBPACK_IMPORTED_MODULE_2__.J,(0,_lokalise_styled__WEBPACK_IMPORTED_MODULE_3__.c)((_ref=>{let{href}=_ref;return!href}),_lokalise_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
			&:disabled {
				cursor: not-allowed;
				color: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_4__.S3)("color.text.disabled")};
			}
		`));Link.displayName="Link"},"./src/components/Pressable/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>Pressable});var react=__webpack_require__("./node_modules/react/index.js");const Root=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.button.withConfig({displayName:"Pressable__Root",componentId:"sc-1gn6gwf-0"})(["cursor:pointer;"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const isAnchor=props=>void 0!==props.href,Pressable=(0,react.forwardRef)(((_ref,ref)=>{let{children,...props}=_ref;return isAnchor(props)?(0,jsx_runtime.jsx)(Root,{as:"a",...props,ref,children}):(0,jsx_runtime.jsx)(Root,{type:"button",...props,ref,children})}));Pressable.displayName="Pressable";try{isAnchor.displayName="Pressable",isAnchor.__docgenInfo={description:"",displayName:"Pressable",props:{href:{defaultValue:null,description:"Enables component as an HTML Anchor Element.",name:"href",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Pressable/index.tsx#Pressable"]={docgenInfo:Pressable.__docgenInfo,name:"Pressable",path:"src/components/Pressable/index.tsx#Pressable"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/styles/link.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>withLinkStyle});var _lokalise_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/theme/index.ts");const withLinkStyle=(0,_lokalise_styled__WEBPACK_IMPORTED_MODULE_0__.iv)(["cursor:pointer;font-size:inherit;font-weight:inherit;line-height:inherit;color:",";transition:color ",";background-color:transparent;padding:0;border:none;font-family:",";&:hover,&:focus,&:active,&:active:hover{color:",";}"],(0,_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("color.text.link.default"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("transition.default"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("font.family.graphik"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("color.text.link.hover"))}}]);
//# sourceMappingURL=components-Stats-Stats-stories-mdx.b63db8fd.iframe.bundle.js.map