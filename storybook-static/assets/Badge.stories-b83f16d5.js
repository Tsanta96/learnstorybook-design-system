import{a,j as l,F as q}from"./emotion-react-jsx-runtime.browser.esm-70191a0a.js";import{c as z,I as T}from"./Icon-19295267.js";import{P as D}from"./index-2baff29e.js";import{c as t}from"./emotion-react.browser.esm-da5d36c9.js";import{t as V,c as s,b as p}from"./styles-969f1f37.js";import"./jsx-runtime-bc5d6cf6.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-cdebb298.js";import"./extends-98964cd2.js";const C=z("div",{target:"ef9j7g70"})("display:inline-block;vertical-align:top;font-size:11px;line-height:12px;padding:4px 12px;border-radius:3em;font-weight:",V.weight.bold,";svg{height:12px;width:12px;margin-right:4px;margin-top:-2px;}",e=>e.status==="positive"&&t("color:",s.positive,";background:",p.positive,";",""),";",e=>e.status==="negative"&&t("color:",s.negative,";background:",p.negative,";",""),";",e=>e.status==="warning"&&t("color:",s.warning,";background:",p.warning,";",""),";",e=>e.status==="error"&&t("color:",s.lightest,";background:",s.negative,";",""),";",e=>e.status==="neutral"&&t("color:",s.dark,";background:",s.mediumlight,";",""),";");function r({...e}){return a(C,{...e})}r.propTypes={status:D.oneOf(["positive","negative","neutral","error","warning"])};r.defaultProps={status:"neutral"};r.__docgenInfo={description:"**Badges?!** We don't need no stinkin' badges!!",methods:[],displayName:"Badge",props:{status:{defaultValue:{value:"'neutral'",computed:!1},description:"",type:{name:"enum",value:[{value:"'positive'",computed:!1},{value:"'negative'",computed:!1},{value:"'neutral'",computed:!1},{value:"'error'",computed:!1},{value:"'warning'",computed:!1}]},required:!1}}};const Y={title:"Design System/Badge",component:r},n={args:{icon:"facehappy",inline:!0},name:"all badges",render:e=>l(q,{children:[a(r,{status:"positive",children:"Positive"}),a(r,{status:"negative",children:"Negative"}),a(r,{status:"neutral",children:"Neutral"}),a(r,{status:"error",children:"Error"}),a(r,{status:"warning",children:"Warning"}),l(r,{status:"positive",children:[a(T,{...e}),"with icon"]})]})},o={args:{status:"positive",children:"Positive"}},i={args:{status:"negative",children:"Negative"}},c={args:{status:"warning",children:"Warning"}},g={args:{status:"neutral",children:"Neutral"}},d={args:{status:"error",children:"Error"}},u={args:{status:"warning",icon:"check",inline:!0},name:"with icon",render:e=>l(r,{...e,children:[a(T,{...e}),"with icon"]})};var m,v,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    icon: 'facehappy',
    inline: true
  },
  name: 'all badges',
  render: args => <>
      <Badge status='positive'>Positive</Badge>
      <Badge status='negative'>Negative</Badge>
      <Badge status='neutral'>Neutral</Badge>
      <Badge status='error'>Error</Badge>
      <Badge status='warning'>Warning</Badge>
      <Badge status='positive'>
        <Icon {...args} />
        with icon
      </Badge>
    </>
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var f,B,w;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    status: 'positive',
    children: 'Positive'
  }
}`,...(w=(B=o.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};var b,N,x;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    status: 'negative',
    children: 'Negative'
  }
}`,...(x=(N=i.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};var k,y,W;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    status: 'warning',
    children: 'Warning'
  }
}`,...(W=(y=c.parameters)==null?void 0:y.docs)==null?void 0:W.source}}};var P,S,E;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    status: 'neutral',
    children: 'Neutral'
  }
}`,...(E=(S=g.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var I,_,j;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    status: 'error',
    children: 'Error'
  }
}`,...(j=(_=d.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var A,F,O;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    status: 'warning',
    icon: 'check',
    inline: true
  },
  name: 'with icon',
  render: args => <Badge {...args}>
      <Icon {...args} />
      with icon
    </Badge>
}`,...(O=(F=u.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};const Z=["AllBadges","Positive","Negative","Warning","Neutral","Error","WithIcon"];export{n as AllBadges,d as Error,i as Negative,g as Neutral,o as Positive,c as Warning,u as WithIcon,Z as __namedExportsOrder,Y as default};
