import{R as g,r as s,j as o,c as d,a as e}from"./index-57d81519.js";import{b as y,E as b,L as v}from"./index-5a412697.js";import{n as C}from"./index-71f8d57a.js";const S=g.forwardRef(({placeholder:i,name:a,key:u,onChange:f,onFocus:p,className:h,type:t,...r},m)=>{const l=s.useRef(null),[n,w]=s.useState(!1),[x,c]=s.useState(t);return s.useEffect(()=>{t==="password"&&n&&c("text"),t==="password"&&!n&&c("password")},[t,n]),s.useImperativeHandle(m,()=>l.current),o("div",{className:d("rounded-rounded h-[40px] w-[280px] overflow-hidden border","bg-grey-5 inter-base-regular placeholder:text-grey-40","focus-within:shadow-input focus-within:border-violet-60","flex items-center",{"text-grey-40 pl-xsmall pointer-events-none focus-within:border-none focus-within:shadow-none":r.readOnly},h),children:[e("input",{className:d("remove-number-spinner leading-base w-full bg-transparent py-3 px-4 outline-none outline-0",{"pl-xsmall":r.readOnly}),ref:l,name:a,placeholder:i||"Placeholder",onChange:f,onFocus:p,type:x,...r},u||a),t==="password"&&e("button",{type:"button",onClick:()=>w(!n),className:"text-grey-40 focus:text-violet-60 px-4 focus:outline-none",children:n?e(y,{size:16}):e(b,{size:16})}),r.readOnly&&e(v,{size:16,className:"text-grey-40 mr-base"})]})});S.displayName="SigninInput";const j=({children:i})=>o("div",{className:"flex min-h-screen flex-col items-center justify-center",children:[e(C,{containerStyle:{top:24,left:24,bottom:24,right:24},position:"bottom-right"}),e("div",{className:"mb-large",children:e(I,{})}),i]}),I=()=>e("div",{className:"w-5xlarge h-5xlarge flex items-center justify-center rounded-full bg-gradient-to-t from-[#26292B] via-[#151718] to-[#151718]",children:e(L,{})}),L=()=>o("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M32.4895 7.84367L24.3377 3.15373C21.6705 1.61542 18.4022 1.61542 15.7351 3.15373L7.5457 7.84367C4.91608 9.38197 3.26318 12.2335 3.26318 15.2725V24.6899C3.26318 27.7665 4.91608 30.5805 7.5457 32.1188L15.6975 36.8463C18.3647 38.3846 21.6329 38.3846 24.3001 36.8463L32.4519 32.1188C35.1191 30.5805 36.7344 27.7665 36.7344 24.6899V15.2725C36.8095 12.2335 35.1566 9.38197 32.4895 7.84367ZM20.0176 28.3669C15.397 28.3669 11.6404 24.6149 11.6404 20C11.6404 15.3851 15.397 11.6331 20.0176 11.6331C24.6382 11.6331 28.4323 15.3851 28.4323 20C28.4323 24.6149 24.6758 28.3669 20.0176 28.3669Z",fill:"url(#paint0_linear_7693_9181)"}),e("defs",{children:o("linearGradient",{id:"paint0_linear_7693_9181",x1:"20",y1:"2",x2:"20",y2:"38",gradientUnits:"userSpaceOnUse",children:[e("stop",{stopColor:"white"}),e("stop",{offset:"1",stopColor:"white",stopOpacity:"0.8"})]})})]});export{j as P,S};
