import{d as k,r as x,b as t,o as i,e as V,w as l,f as e,C,g as c,u as w,s as S,a as p,c as N,h,F as B,t as A,_ as E}from"./index-0d2ca108.js";const L={class:"demo-image"},U={class:"demonstration"},j="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",F=k({__name:"NewServer",setup(I){const a=x({app:"",server:"",spec:""}),f=[{key:"k8s",name:"Kubernetes"},{key:"mysql",name:"MySQL"},{key:"elk",name:"ELK"}],r=()=>{console.log("submit!",JSON.stringify(a))};return(K,n)=>{const d=t("el-option"),b=t("el-select"),s=t("el-form-item"),m=t("el-input"),_=t("el-button"),y=t("el-form"),u=t("el-tab-pane"),v=t("el-image"),g=t("el-tabs");return i(),V(g,{type:"border-card",class:"demo-tabs"},{default:l(()=>[e(u,{label:"New Component"},{default:l(()=>[e(y,null,{default:l(()=>[e(s,{label:"Application"},{default:l(()=>[e(b,{modelValue:a.app,"onUpdate:modelValue":n[0]||(n[0]=o=>a.app=o),"allow-create":""},{default:l(()=>[e(d,{value:"app1",label:"App1"}),e(d,{value:"app2",label:"App2"})]),_:1},8,["modelValue"])]),_:1}),e(s,{label:"Component"},{default:l(()=>[e(m,{modelValue:a.server,"onUpdate:modelValue":n[1]||(n[1]=o=>a.server=o)},null,8,["modelValue"])]),_:1}),e(s,{label:"Spec"},{default:l(()=>[e(C,{modelValue:a.spec,"onUpdate:modelValue":n[2]||(n[2]=o=>a.spec=o)},null,8,["modelValue"])]),_:1}),e(s,null,{default:l(()=>[e(_,{type:"primary",onClick:r},{default:l(()=>[c("Submit")]),_:1}),e(_,{onClick:r},{default:l(()=>[c("Cancel")]),_:1})]),_:1})]),_:1})]),_:1}),e(u,{label:"Cloud Market"},{default:l(()=>[e(m,{placeholder:"Type something",style:{width:"300px","margin-bottom":"10px"},"prefix-icon":w(S)},null,8,["prefix-icon"]),p("div",L,[(i(),N(B,null,h(f,o=>p("div",{key:o.key,class:"block"},[p("span",U,A(o.name),1),e(v,{style:{width:"100px",height:"100px"},src:j,fit:"fill"}),p("div",null,[e(_,null,{default:l(()=>[c("Install")]),_:1})])])),64))])]),_:1})]),_:1})}}});const T=E(F,[["__scopeId","data-v-d6958639"]]);export{T as default};