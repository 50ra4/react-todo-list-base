import{j as t}from"./jsx-runtime-6eef64cc.js";import{R as j}from"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const e=j.forwardRef(function({className:f,type:x="button",color:g,disabled:n,onClick:B,children:_},v){return t.jsx("button",{ref:v,type:x,className:`
      text-base
      rounded-3xl
      px-4 py-2.5
      ${g==="primary"?"bg-gray-300 text-gray-800":"bg-gray-700 text-white"}
      ${n?"bg-opacity-50":""}
      ${f}`,disabled:n,onClick:B,children:_})});try{e.displayName="Button",e.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const S={component:e},r={render:()=>t.jsx(e,{color:"primary",children:"primary"})},a={render:()=>t.jsx(e,{color:"secondary",children:"secondary"})},o={render:()=>t.jsx(e,{color:"secondary",disabled:!0,children:"disabled"})};var s,d,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <Button color="primary">primary</Button>
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,u,i;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <Button color="secondary">secondary</Button>
}`,...(i=(u=a.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var m,p,y;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Button color="secondary" disabled={true}>
      disabled
    </Button>
}`,...(y=(p=o.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};const V=["Primary","Secondary","Disabled"];export{o as Disabled,r as Primary,a as Secondary,V as __namedExportsOrder,S as default};
//# sourceMappingURL=Button.stories-03f72038.js.map
