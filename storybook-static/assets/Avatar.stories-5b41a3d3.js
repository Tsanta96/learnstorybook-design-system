import{a,j as p,F as h}from"./emotion-react-jsx-runtime.browser.esm-70191a0a.js";import{c as U,I as E}from"./Icon-19295267.js";import{P as n}from"./index-2baff29e.js";import{c as t}from"./emotion-react.browser.esm-da5d36c9.js";import{c as y,t as o}from"./styles-969f1f37.js";import{g as R}from"./animation-93db4f8f.js";import"./jsx-runtime-bc5d6cf6.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-cdebb298.js";import"./extends-98964cd2.js";const s={large:40,medium:28,small:20,tiny:16},B=U("div",{target:"e4gt52h1"})("background:",e=>e.loading?y.light:"transparent",";border-radius:50%;display:inline-block;vertical-align:top;overflow:hidden;text-transform:uppercase;height:",s.medium,"px;width:",s.medium,"px;line-height:",s.medium,"px;",e=>e.size==="tiny"&&t("height:",s.tiny,"px;width:",s.tiny,"px;line-height:",s.tiny,"px;","")," ",e=>e.size==="small"&&t("height:",s.small,"px;width:",s.small,"px;line-height:",s.small,"px;","")," ",e=>e.size==="large"&&t("height:",s.large,"px;width:",s.large,"px;line-height:",s.large,"px;","")," ",e=>!e.src&&t("background:",!e.loading&&"#37D5D3",";","")," img{width:100%;height:auto;display:block;}svg{position:relative;bottom:-2px;height:100%;width:100%;vertical-align:top;}path{fill:",y.medium,";animation:",R," 1.5s ease-in-out infinite;}"),G=U("div",{target:"e4gt52h0"})("color:",y.lightest,";text-align:center;font-size:",o.size.s2,"px;line-height:",s.medium,"px;",e=>e.size==="tiny"&&t("font-size:",o.size.s1-2,"px;line-height:",s.tiny,"px;","")," ",e=>e.size==="small"&&t("font-size:",o.size.s1,"px;line-height:",s.small,"px;","")," ",e=>e.size==="large"&&t("font-size:",o.size.s3,"px;line-height:",s.large,"px;",""),";");function r({loading:e,username:v,src:f,size:x,...M}){let z=a(E,{icon:"useralt"});const i={};return e?(i["aria-busy"]=!0,i["aria-label"]="Loading avatar ..."):f?z=a("img",{src:f,alt:v}):(i["aria-label"]=v,z=a(G,{size:x,"aria-hidden":"true",children:v.substring(0,1)})),a(B,{size:x,loading:e,src:f,...i,...M,children:z})}r.propTypes={loading:n.bool,username:n.string,src:n.string,size:n.oneOf(Object.keys(s))};r.defaultProps={loading:!1,username:"loading",src:null,size:"medium"};r.__docgenInfo={description:`- Use an avatar for attributing actions or content to specific users.
- The user's name should always be present when using Avatar – either printed beside the avatar or in a tooltip.`,methods:[],displayName:"Avatar",props:{loading:{defaultValue:{value:"false",computed:!1},description:"Use the loading state to indicate that the data Avatar needs is still loading.",type:{name:"bool"},required:!1},username:{defaultValue:{value:"'loading'",computed:!1},description:"Avatar falls back to the user's initial when no image is provided.\n    Supply a `username` and omit `src` to see what this looks like.",type:{name:"string"},required:!1},src:{defaultValue:{value:"null",computed:!1},description:"The URL of the Avatar's image.",type:{name:"string"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"Avatar comes in four sizes. In most cases, you'll be fine with `medium`.",type:{name:"enum",value:[{value:'"large"',computed:!1},{value:'"medium"',computed:!1},{value:'"small"',computed:!1},{value:'"tiny"',computed:!1}]},required:!1}}};const re={title:"Design System/Avatar",component:r},l={args:{size:"large",username:"Tom Coleman",src:"https://avatars2.githubusercontent.com/u/132554"}},m={args:{username:"Tom Coleman",src:"https://avatars2.githubusercontent.com/u/132554"},render:e=>p(h,{children:[a(r,{...e,size:"large"}),a(r,{...e,size:"medium"}),a(r,{...e,size:"small"}),a(r,{...e,size:"tiny"})]})},u={render:e=>p(h,{children:[a(r,{username:"Tom Coleman"}),a(r,{username:"Dominic Nguyen"}),a(r,{username:"Varun Vachhar"}),a(r,{username:"Michael Shilman"})]})},c={args:{loading:!0},render:e=>p(h,{children:[a(r,{...e,size:"large"}),a(r,{...e,size:"medium"}),a(r,{...e,size:"small"}),a(r,{...e,size:"tiny"})]})},d={render:()=>p(h,{children:[a(r,{loading:!0,size:"large"}),a(r,{size:"large",username:"Tom Coleman"}),a(r,{size:"large",username:"Tom Coleman",src:"https://avatars2.githubusercontent.com/u/132554"})]})},g={args:{loading:!1,size:"tiny",username:"Dominic Nguyen",src:"https://avatars.githubusercontent.com/u/263385"}};var b,A,S;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: 'large',
    username: 'Tom Coleman',
    src: 'https://avatars2.githubusercontent.com/u/132554'
  }
}`,...(S=(A=l.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var T,w,C;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    username: 'Tom Coleman',
    src: 'https://avatars2.githubusercontent.com/u/132554'
  },
  render: args => <>
      <Avatar {...args} size='large' />
      <Avatar {...args} size='medium' />
      <Avatar {...args} size='small' />
      <Avatar {...args} size='tiny' />
    </>
}`,...(C=(w=m.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var k,I,V;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <>
      <Avatar username='Tom Coleman' />
      <Avatar username='Dominic Nguyen' />
      <Avatar username='Varun Vachhar' />
      <Avatar username='Michael Shilman' />
    </>
}`,...(V=(I=u.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var D,L,N;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    loading: true
  },
  render: args => <>
      <Avatar {...args} size='large' />
      <Avatar {...args} size='medium' />
      <Avatar {...args} size='small' />
      <Avatar {...args} size='tiny' />
    </>
}`,...(N=(L=c.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var _,j,q;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <>
      <Avatar loading size='large' />
      <Avatar size='large' username='Tom Coleman' />
      <Avatar size='large' username='Tom Coleman' src='https://avatars2.githubusercontent.com/u/132554' />
    </>
}`,...(q=(j=d.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var P,F,O;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    loading: false,
    size: 'tiny',
    username: 'Dominic Nguyen',
    src: 'https://avatars.githubusercontent.com/u/263385'
  }
}`,...(O=(F=g.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};const se=["Standard","Sizes","Initials","Loading","Large","Controls"];export{g as Controls,u as Initials,d as Large,c as Loading,m as Sizes,l as Standard,se as __namedExportsOrder,re as default};
