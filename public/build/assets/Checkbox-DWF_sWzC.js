import{j as l,p as r,v as u,d as i,o as p}from"./app-ZzVSykTz.js";const m=["value"],k={__name:"Checkbox",props:{checked:{type:[Array,Boolean],default:!1},value:{type:String,default:null}},emits:["update:checked"],setup(e,{emit:c}){const s=c,n=e,t=l({get(){return n.checked},set(o){s("update:checked",o)}});return(o,a)=>r((p(),i("input",{"onUpdate:modelValue":a[0]||(a[0]=d=>t.value=d),type:"checkbox",value:e.value,class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"},null,8,m)),[[u,t.value]])}};export{k as _};
