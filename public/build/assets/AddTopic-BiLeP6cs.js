import{r as _,C as x,d as v,o as V,a as t,b as o,w as a,i as w,f as n,u as l}from"./app-ZzVSykTz.js";import{_ as b}from"./Modal-CpV-8qJ8.js";import{_ as g}from"./PrimaryButton-it_B8zmT.js";import{_ as f}from"./InputLabel-BWFG4LyV.js";import{_ as $}from"./TextInput-CAOJlXhb.js";import{_ as p}from"./InputError-BTd2dKaJ.js";import{_ as k}from"./TextArea-CehoRp_w.js";import{_ as y}from"./SecondaryButton-BIhARJ67.js";const C={class:"p-6"},T={class:"mt-3"},M={class:"mt-3 flex space-x-2 justify-end"},S={__name:"AddTopic",setup(A){const r=_(!1),d=()=>{r.value=!0},i=()=>{r.value=!1,e.reset()},e=x({name:"",description:""}),u=()=>{e.post(route("topics.store"),{onFinish:c=>{Object.keys(e.errors).length===0&&i()},onError:()=>{d()}})};return(c,s)=>(V(),v("div",null,[t("button",{onClick:d,class:"font-black text-3xl rounded-full"},"+"),o(b,{show:r.value,onClose:i,maxWidth:"xl",closeable:""},{default:a(()=>[t("div",C,[s[6]||(s[6]=t("h2",{class:"text-lg font-medium text-gray-900"},"Add new topic",-1)),t("form",{onSubmit:w(u,["prevent"]),class:"mt-6"},[t("div",null,[o(f,{for:"name",class:"sr-only"},{default:a(()=>s[2]||(s[2]=[n("Topic name")])),_:1}),o($,{id:"name",class:"w-full",modelValue:l(e).name,"onUpdate:modelValue":s[0]||(s[0]=m=>l(e).name=m),placeholder:"Give topic name…"},null,8,["modelValue"]),o(p,{message:l(e).errors.name,class:"mt-1"},null,8,["message"])]),t("div",T,[o(f,{for:"description",class:"sr-only"},{default:a(()=>s[3]||(s[3]=[n("Topic description")])),_:1}),o(k,{modelValue:l(e).description,"onUpdate:modelValue":s[1]||(s[1]=m=>l(e).description=m)},null,8,["modelValue"]),o(p,{message:l(e).errors.description,class:"mt-1"},null,8,["message"])]),t("div",M,[o(y,{onClick:i},{default:a(()=>s[4]||(s[4]=[n("Cancel")])),_:1}),o(g,{type:"submit"},{default:a(()=>s[5]||(s[5]=[n("Add Topic")])),_:1})])],32)])]),_:1},8,["show"])]))}};export{S as default};
