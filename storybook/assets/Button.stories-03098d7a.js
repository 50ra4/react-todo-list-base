import{j as t}from"./jsx-runtime-6eef64cc.js";import{R as _}from"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const e=_.forwardRef(function({className:b,color:x,disabled:n,onClick:g,children:B}){return t.jsx("button",{className:`
      text-base
      rounded-3xl
      px-4 py-2.5
      ${x==="primary"?"bg-gray-300 text-gray-800":"bg-gray-700 text-white"}
      ${n?"bg-opacity-50":""}
      ${b}`,disabled:n,onClick:g,children:B})});try{e.displayName="Button",e.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const S={component:e},r={render:()=>t.jsx(e,{color:"primary",children:"primary"})},a={render:()=>t.jsx(e,{color:"secondary",children:"secondary"})},o={render:()=>t.jsx(e,{color:"secondary",disabled:!0,children:"disabled"})};var s,c,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <Button color="primary">primary</Button>
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,i,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <Button color="secondary">secondary</Button>
}`,...(u=(i=a.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var m,p,y;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Button color="secondary" disabled={true}>
      disabled
    </Button>
}`,...(y=(p=o.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};const q=["Primary","Secondary","Disabled"];export{o as Disabled,r as Primary,a as Secondary,q as __namedExportsOrder,S as default};
//# sourceMappingURL=Button.stories-03098d7a.js.map
