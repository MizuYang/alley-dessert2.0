import{_ as V}from"./DYs2Jnmw.js";import{_ as F}from"./Dpjm6Tmp.js";import{_ as H}from"./tY8b0otZ.js";import{_ as I}from"./DO8KFTFS.js";import{P as L,r as _,o as a,c as m,a as t,d as c,u as r,z as k,_ as h,s as w,H as z,A as R,b as l,F as C,m as T,B as u,w as M,T as j}from"./DOkxriL9.js";import{u as b}from"./teGnrIEv.js";import{_ as A}from"./C5v-9CP9.js";import"./D8gQVhjj.js";const f=L("useOrderPaymentModalStore",()=>{const d=_(!1);function e(){d.value=!0}function i(){d.value=!1}return{isPaymentModalShow:d,modalShow:e,modalHide:i}}),E={class:"border-primary border border-t-0 border-solid p-5 pt-0 text-center"},q={__name:"paymentModal",setup(d){const{modalHide:e}=f(),{payment:i}=b();return(x,o)=>(a(),m("div",{class:"fixed -inset-20 z-[9999] flex items-center justify-center bg-black/50",onClick:o[3]||(o[3]=k((...s)=>r(e)&&r(e)(...s),["stop"]))},[t("div",{class:"min-w-[400px] bg-black",onClick:o[2]||(o[2]=k(()=>{},["stop"]))},[o[4]||(o[4]=t("header",{class:"border-primary border border-b-0 border-solid p-3"},[t("i",{class:"bi bi-exclamation-octagon-fill"}),c(" 檢查資料及付款 ")],-1)),o[5]||(o[5]=t("main",{class:"border-primary border border-b-0 border-solid p-5 text-lg"},[c(" 請確認您的資料是否正確 "),t("br"),c(" 如果資料正確，即可確認付款。 ")],-1)),t("footer",E,[t("button",{type:"button",class:"border-primary hover:bg-primary/20 active:bg-primary/25 me-3 inline-block border border-solid px-3 py-1",onClick:o[0]||(o[0]=(...s)=>r(e)&&r(e)(...s))}," 取消 "),t("button",{type:"button",class:"inline-block bg-green-600 px-3 py-[5.5px] text-white hover:bg-green-600/80 active:bg-green-600/85",onClick:o[1]||(o[1]=(...s)=>r(i)&&r(i)(...s))}," 確認付款 ")])])]))}},G={class:"pb-14 pt-10"},J={class:"mx-auto max-w-[1200px]"},K={class:"text-center"},Q={__name:"orderPayment",setup(d){const{orderPaymentData:e}=w(b()),{orderId:i,getOrder:x}=b(),o=z(),{isPaymentModalShow:s}=w(f()),{modalShow:y}=f();let g=_(!0);const v=_(!1);return R(async()=>{var p,n;if(await x(),!((p=e==null?void 0:e.value)!=null&&p.id)){v.value=!0;return}(n=e==null?void 0:e.value)!=null&&n.is_paid&&o.push(`/orderComplated?orderId=${i}`),g.value=!1}),(p,n)=>{const O=V,S=F,$=H,P=I,B=q;return a(),m(C,null,[t("main",G,[t("div",null,[l(O,{title:"確認付款"})]),t("div",J,[l(S,{class:"mb-12"}),r(g)?r(v)?(a(),u(A,{key:1,errorTitle:"找不到訂單",errorCode:"404"},{errorContent:M(()=>n[1]||(n[1]=[t("p",null,"請重新確認訂單編號",-1)])),_:1})):(a(),u(P,{key:2})):(a(),m(C,{key:0},[l($),t("div",K,[r(e).is_paid===!1?(a(),m("button",{key:0,type:"button",class:"bg-green-800 px-3 py-2 text-xl hover:bg-green-700/90 active:bg-green-600/80",onClick:n[0]||(n[0]=(...N)=>r(y)&&r(y)(...N))}," 付款 ")):T("",!0)])],64))])]),l(j,{name:"fade"},{default:M(()=>[r(s)?(a(),u(B,{key:0})):T("",!0)]),_:1})],64)}}},te=h(Q,[["__scopeId","data-v-3f97326d"]]);export{te as default};
