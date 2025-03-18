import{r as C,C as V,c as k,o as n,w as i,b as l,a as s,f as d,t as v,u as a,i as E,n as P,p as U,d as p,F as $,g as h,B,e as y}from"./app-ZzVSykTz.js";import{_ as F}from"./PrimaryButton-it_B8zmT.js";import{_ as c}from"./InputLabel-BWFG4LyV.js";import{_ as I}from"./TextInput-CAOJlXhb.js";import{_ as f}from"./InputError-BTd2dKaJ.js";import{_ as S}from"./AppLayout-CPuV2_u1.js";import{C as D}from"./Container-BpC1E2d8.js";import{M}from"./MarkdownEditor-B-1tO6Xy.js";import{P as N}from"./PageHeading-BzrrdtDK.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ConfirmationModal-BDGR0-4W.js";import"./Modal-CpV-8qJ8.js";import"./SecondaryButton-BIhARJ67.js";import"./GradientLink-CGmOCsqh.js";import"./ApplicationLogo-kC_ahKsM.js";const H={class:"w-full md:w-3/4"},T={class:"mt-3"},L=["onClick"],R={class:"w-full md:w-1/4 mt-8 md:mt-0 ms-8"},j={class:""},z={class:"mt-3"},G=["value"],O={class:"mt-3"},q={key:0,class:"mt-2"},J=["src"],K=["src"],Q={__name:"Edit",props:{post:Object,topics:Array},setup(g){var _;const r=g,m=C(null),b=u=>{const t=u.target.files[0];if(t){const e=new FileReader;e.onload=x=>{m.value=x.target.result},e.readAsDataURL(t),o.image=t}},o=V({title:r.post.title||"",topic_id:r.post.topic_id||((_=r.topics[0])==null?void 0:_.id)||null,body:r.post.body||"",image:null});r.post.image&&(m.value=`/storage/${r.post.image}`);const w=()=>{o.post(route("posts.update",r.post.id),{forceFormData:!0,onSuccess:()=>{console.log("Post updated")},onError:u=>{console.error("Error updating the post:",u)}})};return(u,t)=>(n(),k(S,{title:"Edit a Post"},{default:i(()=>[l(D,null,{default:i(()=>[l(N,null,{default:i(()=>[d("Edit a Post "+v(a(o).title),1)]),_:1}),s("form",{onSubmit:E(w,["prevent"]),class:"mt-6 md:flex"},[s("div",H,[s("div",null,[l(c,{for:"title",class:"sr-only"},{default:i(()=>t[3]||(t[3]=[d("Title")])),_:1}),l(I,{id:"title",class:"w-full",modelValue:a(o).title,"onUpdate:modelValue":t[0]||(t[0]=e=>a(o).title=e),placeholder:"Give it a great title…"},null,8,["modelValue"]),l(f,{message:a(o).errors.title,class:"mt-1"},null,8,["message"])]),s("div",T,[l(c,{for:"body",class:"sr-only"},{default:i(()=>t[4]||(t[4]=[d("Body")])),_:1}),l(M,{modelValue:a(o).body,"onUpdate:modelValue":t[1]||(t[1]=e=>a(o).body=e)},{toolbar:i(({editor:e})=>[s("li",null,[s("button",{onClick:()=>e.chain().focus().toggleHeading({level:5}).run(),type:"button",class:P(["px-3 py-2",[e.isActive("heading",{level:5})?"bg-rose-500 text-white":"hover:bg-gray-200"]]),title:"Heading 4"},t[5]||(t[5]=[s("i",{class:"ri-h-4"},null,-1)]),10,L)])]),_:1},8,["modelValue"]),l(f,{message:a(o).errors.body,class:"mt-1"},null,8,["message"])])]),s("div",R,[s("div",j,[l(F,{type:"submit"},{default:i(()=>t[6]||(t[6]=[d("Update Post")])),_:1})]),s("div",z,[l(c,{for:"topic_id"},{default:i(()=>t[7]||(t[7]=[d("Select a Topic")])),_:1}),U(s("select",{"onUpdate:modelValue":t[2]||(t[2]=e=>a(o).topic_id=e),id:"topic_id",class:"mt-1 w-full rounded-md text-black border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"},[(n(!0),p($,null,h(g.topics,e=>(n(),p("option",{key:e.id,value:e.id},v(e.name),9,G))),128))],512),[[B,a(o).topic_id]]),l(f,{message:a(o).errors.topic_id,class:"mt-1"},null,8,["message"])]),s("div",O,[l(c,{for:"image"},{default:i(()=>t[8]||(t[8]=[d("Upload Image")])),_:1}),s("input",{type:"file",id:"image",onChange:b,class:"mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"},null,32),l(f,{message:a(o).errors.image,class:"mt-1"},null,8,["message"]),!m.value&&r.post.image?(n(),p("div",q,[s("img",{src:`/storage/${r.post.image}`,alt:"Current Image",class:"w-full rounded-md"},null,8,J),t[9]||(t[9]=s("p",{class:"text-sm text-gray-500 mt-2"},"Current Image",-1))])):y("",!0),m.value?(n(),p("img",{key:1,src:m.value,alt:"Image preview",class:"mt-2 w-full rounded-md"},null,8,K)):y("",!0)])])],32)]),_:1})]),_:1}))}},ut=A(Q,[["__scopeId","data-v-737517a2"]]);export{ut as default};
