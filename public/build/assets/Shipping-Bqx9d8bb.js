import{j as e,R as f,b as o}from"./index-CQ7TJZIJ.js";import{D as b}from"./DefaultLayout-DV2Dm-8r.js";import{S as h}from"./SectionLayout-DagR9Wbn.js";import j from"./FileUpload-DpvAh7uw.js";import w from"./RecipientInfo-CwtxgCFZ.js";import y from"./OrderSummary-BGywiG3k.js";import{b as S}from"./app-Bnlp6vnu.js";import"./button-IJP-gDH3.js";import"./sheet-DsC9kQAU.js";import"./index-UK5MF8U-.js";import"./select-Cl9cf3tq.js";import"./spinner-C2cRJf-z.js";import"./Heading-sO6oOdnh.js";import"./input-Cjl4qd-R.js";/* empty css            */function g({currentStep:s}){const n=[{number:1,label:`Pdf/Word
Upload`},{number:2,label:`Ontvanger/
Verzender`},{number:3,label:"Besteloverzicht"},{number:4,label:"Betaling"}];return e.jsx("div",{className:"flex justify-center items-center space-x-4 md:space-x-8",children:n.map(r=>e.jsxs("div",{className:"flex flex-col items-center h-20 justify-start",children:[e.jsx("div",{className:`w-8 h-8 md:w-12 md:h-12 flex justify-center items-center rounded-full ${s===r.number?"bg-swift_blue":"border-2 md:border-4 border-white"}`,children:e.jsx("span",{className:`font-bold text-sm md:text-base ${s===r.number,"text-white"}`,children:r.number})}),e.jsx("p",{className:"text-white font-sen font-bold mt-2 text-xs md:text-sm text-center",children:r.label.split(`
`).map((i,a)=>e.jsxs(f.Fragment,{children:[i,e.jsx("br",{})]},a))})]},r.number))})}function O(){const[s,n]=o.useState(1),[r,i]=o.useState(null),[a,p]=o.useState({}),[m,l]=o.useState(Date.now()),c=()=>{n(t=>t+1),l(Date.now())},d=()=>{n(t=>t-1),l(Date.now())};o.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[s]);const u=t=>{p(t),i(t.fileUpload.bestelnummer),c()},x=async()=>{try{const t=await S.post("/create-payment",{bestelnummer:r});window.location.href=t.data.checkout_url}catch(t){console.error("Failed to initiate payment",t)}};return e.jsxs(b,{children:[e.jsx(h,{backgroundColor:"bg-swift_black",fullWidth:!0,children:e.jsx(g,{currentStep:s})}),e.jsxs("div",{className:"mt-10",children:[s===1&&e.jsx(j,{onNext:u},m),s===2&&e.jsx(w,{onNext:c,onBack:d,sessionDetails:a},m),s===3&&e.jsx(y,{onBack:d,onPay:x,sessionDetails:a},m)]})]})}export{O as default};
