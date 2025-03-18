import{d as o,o as t,a as r,b as l,e as i,c as d,F as p,g as m,h as f,t as g,i as h,u as v,W as _}from"./app-ZzVSykTz.js";import{_ as k}from"./GradientCircle-CqRkghuA.js";import b from"./AddMarketing-CaDiNVPg.js";import{S as n}from"./sweetalert2.esm.all-B0Dix5B2.js";import{r as x}from"./TrashIcon-CQpznweK.js";import"./Modal-CpV-8qJ8.js";import"./PrimaryButton-it_B8zmT.js";import"./InputLabel-BWFG4LyV.js";import"./TextInput-CAOJlXhb.js";import"./InputError-BTd2dKaJ.js";import"./SecondaryButton-BIhARJ67.js";const y={class:"relative flex flex-col gap-4 items-start mt-20"},w={class:"relative mb-8 flex justify-between w-full"},$={key:0},B={class:"flex flex-wrap gap-4 w-full max-h-64 overflow-y-scroll"},C={class:"relative z-10 flex justify-between w-full"},z={class:"relative font-black text-3xl"},S={class:"flex flex-col gap-1 border-s-2 border-slate-500 h-full ps-2"},M={key:0},D=["onClick"],G={__name:"Marketing",props:["marketings"],setup(u){const c=e=>{n.fire({title:"Are you sure?",text:`Do you want to delete this marketing item "${e.title}"?`,icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel",reverseButtons:!0}).then(s=>{s.isConfirmed?_.delete(route("marketings.destroyMarketing",e),{preserveScroll:!0}):n.fire("Cancelled","The marketing item was not deleted.","info")})};return(e,s)=>(t(),o("div",y,[r("div",w,[s[0]||(s[0]=r("h1",{class:"relative font-black text-4xl z-10 uppercase"}," All Marketings ",-1)),l(k,{class:"absolute -top-8 -left-10 z-0"}),e.$page.props.auth.user?(t(),o("div",$,[e.$page.props.auth.user.is_admin?(t(),d(b,{key:0})):i("",!0)])):i("",!0)]),r("div",B,[(t(!0),o(p,null,m(u.marketings,a=>(t(),o("div",{key:a.id,class:"relative group bg-slate-900 p-8 h-40 w-full rounded-3xl flex items-center bg-cover bg-center transition-all duration-300 ease-in-out",style:f({backgroundImage:`url(${a.image})`})},[s[1]||(s[1]=r("div",{class:"absolute inset-0 bg-gradient-to-l from-slate-800 via-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"},null,-1)),r("div",C,[r("h3",z,g(a.title),1),r("div",S,[e.$page.props.auth.user?(t(),o("div",M,[e.$page.props.auth.user.is_admin?(t(),o("button",{key:0,method:"delete",as:"button",type:"button",class:"text-red-600 hover:text-red-800",onClick:h(N=>c(a),["prevent"])},[l(v(x),{class:"size-4 inline-block mr-1"})],8,D)):i("",!0)])):i("",!0)])])],4))),128))])]))}};export{G as default};
