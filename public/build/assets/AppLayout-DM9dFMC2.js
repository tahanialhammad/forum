import{q as v,d as l,s as g,e as o,o as r,f as d,n as m,a as e,t as f,i as _,b as p,u as w,m as h,r as x}from"./app-DGSPsVh4.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";const b={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},y={class:"flex items-center justify-between flex-wrap"},z={class:"w-0 flex-1 flex items-center min-w-0"},B={key:0,class:"size-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},M={key:1,class:"size-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},j={class:"ms-3 font-medium text-sm text-white truncate"},C={class:"shrink-0 sm:ms-3"},L={__name:"Banner",setup(i){const n=v(),a=l(!0),t=l("success"),c=l("");return g(async()=>{var u,s;t.value=((u=n.props.jetstream.flash)==null?void 0:u.bannerStyle)||"success",c.value=((s=n.props.jetstream.flash)==null?void 0:s.banner)||"",a.value=!0}),(u,s)=>(r(),o("div",null,[a.value&&c.value?(r(),o("div",{key:0,class:m({"bg-indigo-500":t.value=="success","bg-red-700":t.value=="danger"})},[e("div",b,[e("div",y,[e("div",z,[e("span",{class:m(["flex p-2 rounded-lg",{"bg-indigo-600":t.value=="success","bg-red-600":t.value=="danger"}])},[t.value=="success"?(r(),o("svg",B,s[1]||(s[1]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)]))):d("",!0),t.value=="danger"?(r(),o("svg",M,s[2]||(s[2]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"},null,-1)]))):d("",!0)],2),e("p",j,f(c.value),1)]),e("div",C,[e("button",{type:"button",class:m(["-me-1 flex p-2 rounded-md focus:outline-none sm:-me-2 transition",{"hover:bg-indigo-600 focus:bg-indigo-600":t.value=="success","hover:bg-red-600 focus:bg-red-600":t.value=="danger"}]),"aria-label":"Dismiss",onClick:s[0]||(s[0]=_(A=>a.value=!1,["prevent"]))},s[3]||(s[3]=[e("svg",{class:"size-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1)]),2)])])])],2)):d("",!0)]))}},$={};function N(i,n){return" navbar "}const S=k($,[["render",N]]),V={class:"min-h-screen bg-gray-100"},q={__name:"AppLayout",props:{title:String},setup(i){return l(!1),(n,a)=>(r(),o("div",null,[p(w(h),{title:i.title},null,8,["title"]),p(L),e("div",V,[p(S),e("main",null,[x(n.$slots,"default")])])]))}};export{q as _};
