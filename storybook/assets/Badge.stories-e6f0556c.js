import{j as n}from"./jsx-runtime-6eef64cc.js";import{R as g}from"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const f=(...s)=>s.filter(t=>!!t).join(" "),e=g.memo(function({className:t,label:m,required:u}){return n.jsx("span",{className:f("px-1.5 py-1 text-white text-xs",u?"bg-red-600":"bg-orange-500",t),children:m})});try{e.displayName="Badge",e.__docgenInfo={description:"",displayName:"Badge",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}}}}}catch{}const q={component:e},r={render:()=>n.jsx(e,{required:!0,label:"必須"})},a={render:()=>n.jsx(e,{label:"任意"})};var o,d,l;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <Badge required={true} label="必須" />
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var i,c,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <Badge label="任意" />
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const y=["Required","Optional"];export{a as Optional,r as Required,y as __namedExportsOrder,q as default};
//# sourceMappingURL=Badge.stories-e6f0556c.js.map
