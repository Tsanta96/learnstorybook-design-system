import{a as r,j as p,F as w}from"./emotion-react-jsx-runtime.browser.esm-70191a0a.js";import{I as h,c as i}from"./Icon-19295267.js";import{a as x,S as b}from"./StoryLinkWrapper-64c9ec46.js";import{P as n}from"./index-2baff29e.js";import{c as a}from"./emotion-react.browser.esm-da5d36c9.js";import{c as g}from"./polished.esm-ed3ce7df.js";import{c as t}from"./styles-969f1f37.js";import"./jsx-runtime-bc5d6cf6.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-cdebb298.js";import"./extends-98964cd2.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";var I={name:"1qhkosj",styles:"border:0;border-radius:0;background:none;padding:0;font-size:inherit"},W={name:"13jr1vs",styles:"color:inherit;&:hover,&:active{color:inherit;text-decoration:underline;}"},S={name:"m8gvx1",styles:"svg{height:1em;width:1em;vertical-align:middle;position:relative;bottom:0;margin-right:0;}"};const k=a("display:inline-block;transition:transform 150ms ease-out,color 150ms ease-out;text-decoration:none;color:",t.secondary,";&:hover,&:focus{cursor:pointer;transform:translateY(-1px);color:",g(.07,t.secondary),";}&:active{transform:translateY(0);color:",g(.1,t.secondary),";}svg{display:inline-block;height:1em;width:1em;vertical-align:text-top;position:relative;bottom:-0.125em;margin-right:0.4em;}",e=>e.containsIcon&&S,";",e=>e.secondary&&a("color:",t.mediumdark,";&:hover{color:",t.dark,";}&:active{color:",t.darker,";}",""),";",e=>e.tertiary&&a("color:",t.dark,";&:hover{color:",t.darkest,";}&:active{color:",t.mediumdark,";}",""),";",e=>e.nochrome&&W,";",e=>e.inverse&&a("color:",t.lightest,";&:hover{color:",t.lighter,";}&:active{color:",t.light,";}",""),";",e=>e.isButton&&I,";","");var q={name:"1xo3o5q",styles:">svg:last-of-type{height:0.7em;width:0.7em;margin-right:0;margin-left:0.25em;bottom:auto;vertical-align:inherit;}"};const V=i("span",{target:"e8l8el13"})(e=>e.withArrow&&q,";"),_=i("a",{target:"e8l8el12"})(k,";"),A=i("button",{target:"e8l8el11"})("background:none;color:inherit;border:none;padding:0;font:inherit;cursor:pointer;outline:inherit;",k,";"),B=e=>e&&i(({containsIcon:l,inverse:c,nochrome:m,secondary:f,tertiary:y,...d})=>r(e,{...d}),{target:"e8l8el10"})(k,";");function o({isButton:e,withArrow:l,LinkWrapper:c,children:m,...f}){const y=r(w,{children:p(V,{withArrow:l,children:[m,l&&r(h,{icon:"arrowright"})]})}),d=B(c);let u=_;return c?u=d:e&&(u=A),r(u,{...f,children:y})}o.propTypes={isButton:n.bool,children:n.node,withArrow:n.bool,containsIcon:n.bool,LinkWrapper:n.oneOfType([n.func,n.object]),inverse:n.bool,nochrome:n.bool,secondary:n.bool,tertiary:n.bool};o.defaultProps={isButton:!1,children:null,withArrow:!1,containsIcon:!1,LinkWrapper:void 0,inverse:!1,nochrome:!1,secondary:!1,tertiary:!1};o.__docgenInfo={description:"Links can contains text and/or icons. Be careful using only icons, you must provide a text alternative via aria-label for accessibility.",methods:[],displayName:"Link",props:{isButton:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},withArrow:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},containsIcon:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},LinkWrapper:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"union",value:[{name:"func"},{name:"object"}]},required:!1},inverse:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},nochrome:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},secondary:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},tertiary:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1}}};const C=i(o,{target:"e5uri5a0"})({name:"13kmxi1",styles:"&&{color:red;}"}),N=x("onLinkClick"),Q={title:"Design System/Link",component:o},s={render:()=>p("div",{children:[r(o,{href:"https://storybook.js.org/tutorials/",children:"Default"}),r("br",{}),r(o,{secondary:!0,href:"https://storybook.js.org/tutorials/",children:"Secondary"}),r("br",{}),r(o,{tertiary:!0,href:"https://storybook.js.org/tutorials/",children:"tertiary"}),r("br",{}),r(o,{nochrome:!0,href:"https://storybook.js.org/tutorials/",children:"nochrome"}),r("br",{}),p(o,{href:"https://storybook.js.org/tutorials/",children:[r(h,{icon:"discord","aria-hidden":!0}),"With icon in front"]}),r("br",{}),r(o,{containsIcon:!0,href:"https://storybook.js.org/tutorials/","aria-label":"Toggle side bar",children:r(h,{icon:"sidebar","aria-hidden":!0})}),r("br",{}),r(o,{containsIcon:!0,withArrow:!0,href:"https://storybook.js.org/tutorials/",children:"With arrow behind"}),r("br",{}),r("span",{style:{background:"#333"},children:r(o,{inverse:!0,href:"https://storybook.js.org/tutorials/",children:"Inverted colors"})}),r("br",{}),r(o,{isButton:!0,onClick:N,children:"is actually a button"}),r("br",{}),r(o,{tertiary:!0,LinkWrapper:b,href:"http://storybook.js.org",children:"has a LinkWrapper like GatsbyLink or NextLink"}),r("br",{}),r(C,{tertiary:!0,LinkWrapper:b,href:"http://storybook.js.org",children:"has a LinkWrapper like GatsbyLink or NextLink with custom styling"})]})};var L,v,j;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div>
      <Link href='https://storybook.js.org/tutorials/'>Default</Link>
      <br />
      <Link secondary href='https://storybook.js.org/tutorials/'>
        Secondary
      </Link>
      <br />
      <Link tertiary href='https://storybook.js.org/tutorials/'>
        tertiary
      </Link>
      <br />
      <Link nochrome href='https://storybook.js.org/tutorials/'>
        nochrome
      </Link>
      <br />
      <Link href='https://storybook.js.org/tutorials/'>
        <Icon icon='discord' aria-hidden />
        With icon in front
      </Link>
      <br />
      <Link containsIcon href='https://storybook.js.org/tutorials/' aria-label='Toggle side bar'>
        <Icon icon='sidebar' aria-hidden />
      </Link>
      <br />
      <Link containsIcon withArrow href='https://storybook.js.org/tutorials/'>
        With arrow behind
      </Link>
      <br />
      <span style={{
      background: '#333'
    }}>
        <Link inverse href='https://storybook.js.org/tutorials/'>
          Inverted colors
        </Link>
      </span>
      <br />
      {/* gatsby and styled-components don't work nicely together  */}
      {/* eslint-disable-next-line */}
      <Link isButton onClick={onLinkClick}>
        is actually a button
      </Link>
      <br />
      <Link tertiary LinkWrapper={StoryLinkWrapper} href='http://storybook.js.org'>
        has a LinkWrapper like GatsbyLink or NextLink
      </Link>
      <br />
      <CustomLink tertiary LinkWrapper={StoryLinkWrapper} href='http://storybook.js.org'>
        has a LinkWrapper like GatsbyLink or NextLink with custom styling
      </CustomLink>
    </div>
}`,...(j=(v=s.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};const R=["ALL"];export{s as ALL,R as __namedExportsOrder,Q as default};
