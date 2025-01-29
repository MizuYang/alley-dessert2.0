import{_ as k}from"./D6CgcnPw.js";import{_ as E,r as c,c as n,a,b as M,C as T,F as y,q as b,u as i,o as s,t as f,s as m,D as q,n as _,E as C,m as v}from"./xenmD9g2.js";import{a as V}from"./BpIcjdmt.js";const F={class:"pb-14 pt-10"},R={class:"mx-auto flex max-w-[1200px] justify-center"},N=["for"],U={class:"mb-2 inline-block font-bold"},$=["id","placeholder","onUpdate:modelValue"],B=["id","onUpdate:modelValue"],D=["disabled","selected"],S={key:2,class:"mt-2 inline-block text-xl font-bold text-red-500"},A={__name:"contact",setup(j){const o=c({category:"-請選擇聯絡類別-"}),x=c([{inputType:"input",type:"text",label:"姓名",id:"name",placeholder:"請輸入姓名",isInvalid:null,requireErrorMsg:"*姓名 為必填"},{inputType:"input",type:"text",label:"E-mail",id:"email",placeholder:"請輸入信箱, 例：xxx@gmail.com.tw",isInvalid:null,requireErrorMsg:"*信箱 為必填",isCustomRule:!0,rule:l=>/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/g.test(l)},{inputType:"input",type:"number",label:"電話",id:"tel",placeholder:"請輸入電話 / 例：09xxxxxxxx",isInvalid:null,requireErrorMsg:"*請輸入 09 開頭的正確電話號碼",isCustomRule:!0,rule:l=>/^09\d{8}$/g.test(l)},{inputType:"select",label:"聯絡類別",id:"category",options:["-請選擇聯絡類別-","退 / 換貨問題、我收到的東西有破損","重複付款或其他付款問題","我收到的產品有發霉、其它品質問題","優惠券相關問題","我沒收到訂購的產品","我要加盟","其它問題 / 請詳細描述"],isInvalid:null,requireErrorMsg:"*類別 為必填",isCustomRule:!0,rule:l=>l!=="-請選擇聯絡類別-"},{inputType:"input",type:"text",label:"留言",id:"message",placeholder:"請輸入留言",isInvalid:null,requireErrorMsg:"*留言 為必填"}]),d=c({}),I=({element:l,animateName:r})=>{const u=V({element:l,animateName:r});typeof u=="function"&&u()};function h(){console.log(o),w()}function w(){x.value.forEach(l=>{const r=d.value[l.id];l.isCustomRule?l.rule(o.value[l.id])?l.isInvalid=!1:g({element:r,item:l}):o.value[l.id]?l.isInvalid=!1:g({element:r,item:l})})}function g({element:l,item:r}){r.isInvalid=!0,I({element:l,animateName:"shakeX"})}return(l,r)=>{const u=k;return s(),n("main",F,[a("div",null,[M(u,{title:"聯絡我們"}),a("div",R,[a("form",{class:"border-primary mx-auto w-full max-w-[700px] rounded-3xl border-2 border-solid px-16 py-10 text-xl",onSubmit:T(h,["prevent"])},[(s(!0),n(y,null,b(i(x),e=>(s(),n("label",{for:e.id,key:e.id,class:"mb-4 inline-block w-full"},[a("span",U,f(e.label),1),r[0]||(r[0]=a("br",null,null,-1)),e.inputType==="input"?m((s(),n("input",{key:0,type:"text",class:_(["focus:ring-primary/50 w-full bg-gray-700/80 px-3 py-2 ring-1 ring-gray-400 focus:outline-none focus:ring-4",[{"!ring-red-500":e.isInvalid===!0},{"!ring-green-500":e.isInvalid===!1}]]),ref_for:!0,ref:t=>i(d)[e.id]=t,id:e.id,placeholder:e.placeholder,"onUpdate:modelValue":t=>i(o)[e.id]=t},null,10,$)),[[q,i(o)[e.id]]]):e.inputType==="select"?m((s(),n("select",{key:1,class:_(["focus:ring-primary/50 w-full bg-gray-700/80 px-3 py-2 ring-1 ring-gray-400 focus:outline-none focus:ring-4",[{"!ring-red-500":e.isInvalid===!0},{"!ring-green-500":e.isInvalid===!1}]]),ref_for:!0,ref:t=>i(d)[e.id]=t,id:e.id,"onUpdate:modelValue":t=>i(o)[e.id]=t},[(s(!0),n(y,null,b(e.options,(t,p)=>(s(),n("option",{key:`opt-${p}`,disabled:p===0,selected:p===0},f(t),9,D))),128))],10,B)),[[C,i(o)[e.id]]]):v("",!0),e.isInvalid===!0?(s(),n("span",S,f(e.requireErrorMsg),1)):v("",!0)],8,N))),128)),r[1]||(r[1]=a("button",{type:"submit",class:"text-primary mx-auto my-5 block w-full rounded-xl bg-red-800 px-4 py-1 text-2xl hover:bg-red-800/90 active:bg-red-800/80"}," 送出 ",-1)),r[2]||(r[2]=a("p",{class:"text-primary"}," 送出內容後，我們將在 3~5 個工作天內回覆您。 ",-1))],32)])])])}}},P=E(A,[["__scopeId","data-v-a587fc9c"]]);export{P as default};
