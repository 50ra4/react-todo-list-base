import{j as a}from"./jsx-runtime-6eef64cc.js";import{R as _}from"./index-c013ead5.js";function t({className:e,titleAccess:r,viewBox:n="0 0 24 24",children:l=null}){return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:e,"aria-hidden":r?void 0:!0,"aria-label":r||void 0,role:r?"img":void 0,viewBox:n,children:l})}try{t.displayName="SvgIcon",t.__docgenInfo={description:"",displayName:"SvgIcon",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},titleAccess:{defaultValue:null,description:"",name:"titleAccess",required:!1,type:{name:"string"}},viewBox:{defaultValue:{value:"0 0 24 24"},description:"",name:"viewBox",required:!1,type:{name:"string"}}}}}catch{}function i(e){return a.jsx(t,{...e,viewBox:"0 -960 960 960",children:a.jsx("path",{d:"M480-328 225-583h510L480-328Z"})})}try{i.displayName="ArrowDropDownIcon",i.__docgenInfo={description:"",displayName:"ArrowDropDownIcon",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},titleAccess:{defaultValue:null,description:"",name:"titleAccess",required:!1,type:{name:"string"}}}}}catch{}const d=_.forwardRef(function({className:r,id:n,name:l,items:o,selectedId:u,isInvalid:c,describedId:p,onChange:m,onBlur:f},g){return a.jsxs("div",{className:`relative w-100 flex ${r||""}`,children:[a.jsx("select",{ref:g,id:n,name:l,className:`
          border border-gray-300 border-solid rounded-sm
          flex-grow flex-shrink
          h-11 pl-1 pr-4
          ${c?"border-red-600 bg-red-200":""}
          appearance-none`,value:u,"aria-describedby":p,onChange:m,onBlur:f,children:o.map(({id:s,text:y})=>a.jsx("option",{value:s,children:y},s))}),a.jsx(i,{className:`
          pointer-events-none
          absolute top-4 right-0
          h-4 w-4 fill-gray-800`})]})});try{d.displayName="Pulldown",d.__docgenInfo={description:"",displayName:"Pulldown",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"{ id: string; text: string; }[]"}},selectedId:{defaultValue:null,description:"",name:"selectedId",required:!1,type:{name:"string"}},isInvalid:{defaultValue:null,description:"",name:"isInvalid",required:!1,type:{name:"boolean"}},describedId:{defaultValue:null,description:"",name:"describedId",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLSelectElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"ChangeEventHandler<HTMLSelectElement>"}}}}}catch{}let w=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((r,n)=>(n&=63,n<36?r+=n.toString(36):n<62?r+=(n-26).toString(36).toUpperCase():n>62?r+="-":r+="_",r),"");const x=["技術調査","要件定義","基本設計","詳細設計","実装","単体テスト","結合テスト","システムテスト","運用"].map(e=>({id:w(),text:e}));export{x as C,d as P};
//# sourceMappingURL=category-87c93660.js.map
