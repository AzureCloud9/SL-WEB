import{b as u,j as a,a as j}from"./index.esm-FKu5Xl1q.js";import{I as c}from"./input-F-ArJFaH.js";import{B as _}from"./button-BeqgVg-s.js";import{H as C}from"./Heading-ljLPcp_1.js";import{S as A}from"./switch-BwqQY7vP.js";import{S as T,a as B,b as z,c as V,f as M}from"./select-DHJ89fPN.js";import"./index-ySlEDRV5.js";import"./index-DSbpcquf.js";import"./index-YxhsKbe_.js";function E({onOptionChange:f,pageCount:i}){const o=(e,r,m)=>{const b=Math.max(0,m-2),v=Math.ceil(b/2);return e+v*r},t=[{name:"Regulier",description:"We printen je document, zorgen voor een envelop, frankeren en verzenden zonder Track & Trace. Verwachte levertijd: 3-5 werkdagen.",basePrice:2,additionalCostPerTwoPages:3,price:0},{name:"Spoed",description:"Je document wordt met spoed behandeld en verzonden met Track & Trace. Verwachte levertijd: 1-2 werkdagen.",basePrice:3.2,additionalCostPerTwoPages:5.5,price:0},{name:"Aangetekend",description:"Je document wordt aangetekend verzonden met Track & Trace en handtekening voor ontvangst. Verwachte levertijd: 2-3 werkdagen.",basePrice:10.5,additionalCostPerTwoPages:13,price:0}],[s,n]=u.useState(()=>{const e=t[0];return e.price=o(e.basePrice,e.additionalCostPerTwoPages,i),e});u.useEffect(()=>{n(e=>{const r=o(e.basePrice,e.additionalCostPerTwoPages,i);return{...e,price:r}})},[i]),u.useEffect(()=>{f(s)},[s,f]);const x=e=>{const r=t.find(m=>m.name===e);if(r){const m=o(r.basePrice,r.additionalCostPerTwoPages,i);n({...r,price:m}),f({...r,price:m})}};return a.jsxs("div",{className:"w-full max-w-screen mx-auto bg-swift_black p-6 rounded-lg shadow-md",children:[a.jsx("div",{className:"flex justify-around mb-4",children:t.map(e=>a.jsx("div",{className:`px-4 py-2 cursor-pointer rounded-md transition-all duration-300 ${s.name===e.name?"bg-white text-black font-bold font-roboto shadow-md transform scale-105":"bg-primary-light text-white hover:bg-primary-dark hover:text-white"}`,onClick:()=>x(e.name),children:e.name},e.name))}),a.jsxs("div",{className:"bg-primary-dark text-white p-6 rounded-lg",children:[a.jsxs("h3",{className:"text-lg font-semibold font-roboto",children:[s.name," brief"]}),a.jsx("p",{className:"mt-2 font-sen",children:s.description}),a.jsxs("p",{className:"mt-4 font-bold font-sen",children:["Prijs: €",s.price.toFixed(2)]})]})]})}const y=[{name:"Afghanistan",flag:"🇦🇫"},{name:"Albania",flag:"🇦🇱"},{name:"Algeria",flag:"🇩🇿"},{name:"Andorra",flag:"🇦🇩"},{name:"Angola",flag:"🇦🇴"},{name:"Antigua and Barbuda",flag:"🇦🇬"},{name:"Argentina",flag:"🇦🇷"},{name:"Armenia",flag:"🇦🇲"},{name:"Australia",flag:"🇦🇺"},{name:"Austria",flag:"🇦🇹"},{name:"Azerbaijan",flag:"🇦🇿"},{name:"Bahamas",flag:"🇧🇸"},{name:"Bahrain",flag:"🇧🇭"},{name:"Bangladesh",flag:"🇧🇩"},{name:"Barbados",flag:"🇧🇧"},{name:"Belarus",flag:"🇧🇾"},{name:"Belgium",flag:"🇧🇪"},{name:"Belize",flag:"🇧🇿"},{name:"Benin",flag:"🇧🇯"},{name:"Bhutan",flag:"🇧🇹"},{name:"Bolivia",flag:"🇧🇴"},{name:"Bosnia and Herzegovina",flag:"🇧🇦"},{name:"Botswana",flag:"🇧🇼"},{name:"Brazil",flag:"🇧🇷"},{name:"Brunei",flag:"🇧🇳"},{name:"Bulgaria",flag:"🇧🇬"},{name:"Burkina Faso",flag:"🇧🇫"},{name:"Burundi",flag:"🇧🇮"},{name:"Cabo Verde",flag:"🇨🇻"},{name:"Cambodia",flag:"🇰🇭"},{name:"Cameroon",flag:"🇨🇲"},{name:"Canada",flag:"🇨🇦"},{name:"Central African Republic",flag:"🇨🇫"},{name:"Chad",flag:"🇹🇩"},{name:"Chile",flag:"🇨🇱"},{name:"China",flag:"🇨🇳"},{name:"Colombia",flag:"🇨🇴"},{name:"Comoros",flag:"🇰🇲"},{name:"Congo, Republic of the",flag:"🇨🇬"},{name:"Congo, Democratic Republic of the",flag:"🇨🇩"},{name:"Costa Rica",flag:"🇨🇷"},{name:"Croatia",flag:"🇭🇷"},{name:"Cuba",flag:"🇨🇺"},{name:"Cyprus",flag:"🇨🇾"},{name:"Czech Republic",flag:"🇨🇿"},{name:"Denmark",flag:"🇩🇰"},{name:"Djibouti",flag:"🇩🇯"},{name:"Dominica",flag:"🇩🇲"},{name:"Dominican Republic",flag:"🇩🇴"},{name:"Ecuador",flag:"🇪🇨"},{name:"Egypt",flag:"🇪🇬"},{name:"El Salvador",flag:"🇸🇻"},{name:"Equatorial Guinea",flag:"🇬🇶"},{name:"Eritrea",flag:"🇪🇷"},{name:"Estonia",flag:"🇪🇪"},{name:"Eswatini",flag:"🇸🇿"},{name:"Ethiopia",flag:"🇪🇹"},{name:"Fiji",flag:"🇫🇯"},{name:"Finland",flag:"🇫🇮"},{name:"France",flag:"🇫🇷"},{name:"Gabon",flag:"🇬🇦"},{name:"Gambia",flag:"🇬🇲"},{name:"Georgia",flag:"🇬🇪"},{name:"Germany",flag:"🇩🇪"},{name:"Ghana",flag:"🇬🇭"},{name:"Greece",flag:"🇬🇷"},{name:"Grenada",flag:"🇬🇩"},{name:"Guatemala",flag:"🇬🇹"},{name:"Guinea",flag:"🇬🇳"},{name:"Guinea-Bissau",flag:"🇬🇼"},{name:"Guyana",flag:"🇬🇾"},{name:"Haiti",flag:"🇭🇹"},{name:"Honduras",flag:"🇭🇳"},{name:"Hungary",flag:"🇭🇺"},{name:"Iceland",flag:"🇮🇸"},{name:"India",flag:"🇮🇳"},{name:"Indonesia",flag:"🇮🇩"},{name:"Iran",flag:"🇮🇷"},{name:"Iraq",flag:"🇮🇶"},{name:"Ireland",flag:"🇮🇪"},{name:"Israel",flag:"🇮🇱"},{name:"Italy",flag:"🇮🇹"},{name:"Jamaica",flag:"🇯🇲"},{name:"Japan",flag:"🇯🇵"},{name:"Jordan",flag:"🇯🇴"},{name:"Kazakhstan",flag:"🇰🇿"},{name:"Kenya",flag:"🇰🇪"},{name:"Kiribati",flag:"🇰🇮"},{name:"Korea, North",flag:"🇰🇵"},{name:"Korea, South",flag:"🇰🇷"},{name:"Kosovo",flag:"🇽🇰"},{name:"Kuwait",flag:"🇰🇼"},{name:"Kyrgyzstan",flag:"🇰🇬"},{name:"Laos",flag:"🇱🇦"},{name:"Latvia",flag:"🇱🇻"},{name:"Lebanon",flag:"🇱🇧"},{name:"Lesotho",flag:"🇱🇸"},{name:"Liberia",flag:"🇱🇷"},{name:"Libya",flag:"🇱🇾"},{name:"Liechtenstein",flag:"🇱🇮"},{name:"Lithuania",flag:"🇱🇹"},{name:"Luxembourg",flag:"🇱🇺"},{name:"Madagascar",flag:"🇲🇬"},{name:"Malawi",flag:"🇲🇼"},{name:"Malaysia",flag:"🇲🇾"},{name:"Maldives",flag:"🇲🇻"},{name:"Mali",flag:"🇲🇱"},{name:"Malta",flag:"🇲🇹"},{name:"Marshall Islands",flag:"🇲🇭"},{name:"Mauritania",flag:"🇲🇷"},{name:"Mauritius",flag:"🇲🇺"},{name:"Mexico",flag:"🇲🇽"},{name:"Micronesia",flag:"🇫🇲"},{name:"Moldova",flag:"🇲🇩"},{name:"Monaco",flag:"🇲🇨"},{name:"Mongolia",flag:"🇲🇳"},{name:"Montenegro",flag:"🇲🇪"},{name:"Morocco",flag:"🇲🇦"},{name:"Mozambique",flag:"🇲🇿"},{name:"Myanmar",flag:"🇲🇲"},{name:"Namibia",flag:"🇳🇦"},{name:"Nauru",flag:"🇳🇷"},{name:"Nepal",flag:"🇳🇵"},{name:"Netherlands",flag:"🇳🇱"},{name:"New Zealand",flag:"🇳🇿"},{name:"Nicaragua",flag:"🇳🇮"},{name:"Niger",flag:"🇳🇪"},{name:"Nigeria",flag:"🇳🇬"},{name:"North Macedonia",flag:"🇲🇰"},{name:"Norway",flag:"🇳🇴"},{name:"Oman",flag:"🇴🇲"},{name:"Pakistan",flag:"🇵🇰"},{name:"Palau",flag:"🇵🇼"},{name:"Palestine",flag:"🇵🇸"},{name:"Panama",flag:"🇵🇦"},{name:"Papua New Guinea",flag:"🇵🇬"},{name:"Paraguay",flag:"🇵🇾"},{name:"Peru",flag:"🇵🇪"},{name:"Philippines",flag:"🇵🇭"},{name:"Poland",flag:"🇵🇱"},{name:"Portugal",flag:"🇵🇹"},{name:"Qatar",flag:"🇶🇦"},{name:"Romania",flag:"🇷🇴"},{name:"Russia",flag:"🇷🇺"},{name:"Rwanda",flag:"🇷🇼"},{name:"Saint Kitts and Nevis",flag:"🇰🇳"},{name:"Saint Lucia",flag:"🇱🇨"},{name:"Saint Vincent and the Grenadines",flag:"🇻🇨"},{name:"Samoa",flag:"🇼🇸"},{name:"San Marino",flag:"🇸🇲"},{name:"Sao Tome and Principe",flag:"🇸🇹"},{name:"Saudi Arabia",flag:"🇸🇦"},{name:"Senegal",flag:"🇸🇳"},{name:"Serbia",flag:"🇷🇸"},{name:"Seychelles",flag:"🇸🇨"},{name:"Sierra Leone",flag:"🇸🇱"},{name:"Singapore",flag:"🇸🇬"},{name:"Slovakia",flag:"🇸🇰"},{name:"Slovenia",flag:"🇸🇮"},{name:"Solomon Islands",flag:"🇸🇧"},{name:"Somalia",flag:"🇸🇴"},{name:"South Africa",flag:"🇿🇦"},{name:"South Sudan",flag:"🇸🇸"},{name:"Spain",flag:"🇪🇸"},{name:"Sri Lanka",flag:"🇱🇰"},{name:"Sudan",flag:"🇸🇩"},{name:"Suriname",flag:"🇸🇷"},{name:"Sweden",flag:"🇸🇪"},{name:"Switzerland",flag:"🇨🇭"},{name:"Syria",flag:"🇸🇾"},{name:"Taiwan",flag:"🇹🇼"},{name:"Tajikistan",flag:"🇹🇯"},{name:"Tanzania",flag:"🇹🇿"},{name:"Thailand",flag:"🇹🇭"},{name:"Timor-Leste",flag:"🇹🇱"},{name:"Togo",flag:"🇹🇬"},{name:"Tonga",flag:"🇹🇴"},{name:"Trinidad and Tobago",flag:"🇹🇹"},{name:"Tunisia",flag:"🇹🇳"},{name:"Turkey",flag:"🇹🇷"},{name:"Turkmenistan",flag:"🇹🇲"},{name:"Tuvalu",flag:"🇹🇻"},{name:"Uganda",flag:"🇺🇬"},{name:"Ukraine",flag:"🇺🇦"},{name:"United Arab Emirates",flag:"🇦🇪"},{name:"United Kingdom",flag:"🇬🇧"},{name:"United States",flag:"🇺🇸"},{name:"Uruguay",flag:"🇺🇾"},{name:"Uzbekistan",flag:"🇺🇿"},{name:"Vanuatu",flag:"🇻🇺"},{name:"Vatican City",flag:"🇻🇦"},{name:"Venezuela",flag:"🇻🇪"},{name:"Vietnam",flag:"🇻🇳"},{name:"Yemen",flag:"🇾🇪"},{name:"Zambia",flag:"🇿🇲"},{name:"Zimbabwe",flag:"🇿🇼"}],K=({onCountryChange:f,selectedCountry:i})=>{var o;return a.jsxs(T,{onValueChange:f,value:i,children:[a.jsx(B,{className:"w-full",children:a.jsx(z,{placeholder:"Select Country",children:i?((o=y.find(t=>t.name===i))==null?void 0:o.flag)+" "+i:"Select Country"})}),a.jsx(V,{children:y.map((t,s)=>a.jsxs(M,{value:t.name,children:[t.flag," ",t.name]},s))})]})},R=({onNext:f,onBack:i,sessionDetails:o})=>{const[t,s]=u.useState(!1),[n,x]=u.useState({first_name:"",last_name:"",street_address:"",postal_code:"",city:"",country:"Netherlands",sender_first_name:"",sender_last_name:"",email:""}),[e,r]=u.useState({}),[m,b]=u.useState({name:"Regulier",description:"",basePrice:1.6,price:1.6}),v=()=>{m.name!=="Aangetekend"?s(l=>!l):s(!0)},g=l=>{const{name:h,value:p}=l.target;x({...n,[h]:p})},d=l=>{l.key==="Enter"&&l.preventDefault()},S=l=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(l),w=()=>{const l={};return n.first_name||(l.first_name="Voornaam is verplicht"),n.last_name||(l.last_name="Achternaam is verplicht"),n.street_address||(l.street_address="Adres is verplicht"),n.postal_code||(l.postal_code="Postcode is verplicht"),n.city||(l.city="Stad is verplicht"),n.country||(l.country="Land is verplicht"),t&&(n.sender_first_name||(l.sender_first_name="Voornaam is verplicht"),n.sender_last_name||(l.sender_last_name="Achternaam is verplicht"),n.email?S(n.email)||(l.email="Voer een geldig emailadres in"):l.email="Email is verplicht"),l},N=async l=>{l.preventDefault();const h=w();if(Object.keys(h).length>0){r(h);return}r({});try{const p=await j.post("/recipients",{recipient_name:`${n.first_name} ${n.last_name}`,recipient_address:n.street_address,recipient_postcode:n.postal_code,recipient_city:n.city,recipient_country:n.country,delivery_option:m.name,user_price:m.price});if(console.log("Recipient added successfully:",p.data),t){const P=await j.post("/senders",{sender_first_name:n.sender_first_name,sender_last_name:n.sender_last_name,email:n.email});console.log("Sender added successfully:",P.data)}f()}catch(p){console.error("There was an error submitting the form:",p)}},k=l=>{b(l),l.name==="Aangetekend"?s(!0):t&&m.name==="Aangetekend"&&s(!1)};return a.jsx("div",{className:"flex justify-center items-center min-h-screen",children:a.jsxs("div",{className:"w-full max-w-2xl bg-white shadow-lg rounded-lg p-8 lg:p-12",children:[a.jsx(C,{title:"Voer Ontvanger In",text1:"Vul de onderstaande gegevens in om ervoor te zorgen dat uw brief correct wordt bezorgd. Zorg ervoor dat alle informatie nauwkeurig en volledig is.",text2:"",showButton:!1,buttonText:"",secondaryButtonText:""}),a.jsxs("form",{onSubmit:N,className:"space-y-6",children:[a.jsxs("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block text-lg font-medium text-gray-700",children:"Voornaam Ontvanger"}),a.jsx(c,{name:"first_name",placeholder:"Voornaam",value:n.first_name,onChange:g,onKeyPress:d,className:"text-lg"}),e.first_name&&a.jsx("p",{className:"text-red-500",children:e.first_name})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-lg font-medium text-gray-700",children:"Achternaam Ontvanger"}),a.jsx(c,{name:"last_name",placeholder:"Achternaam",value:n.last_name,onChange:g,onKeyPress:d,className:"text-lg"}),e.last_name&&a.jsx("p",{className:"text-red-500",children:e.last_name})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-lg font-medium text-gray-700",children:"Adres Ontvanger"}),a.jsx(c,{name:"street_address",placeholder:"Straatnaam en Huisnummer",value:n.street_address,onChange:g,onKeyPress:d,className:"text-lg"}),e.street_address&&a.jsx("p",{className:"text-red-500",children:e.street_address})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-lg font-medium text-gray-700",children:"Postcode Ontvanger"}),a.jsx(c,{name:"postal_code",placeholder:"1234 AB",value:n.postal_code,onChange:g,onKeyPress:d,className:"text-lg"}),e.postal_code&&a.jsx("p",{className:"text-red-500",children:e.postal_code})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-lg font-medium text-gray-700",children:"Stad Ontvanger"}),a.jsx(c,{name:"city",placeholder:"Amsterdam",value:n.city,onChange:g,onKeyPress:d,className:"text-lg"}),e.city&&a.jsx("p",{className:"text-red-500",children:e.city})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-lg font-medium text-gray-700",children:"Land Ontvanger"}),a.jsx(K,{selectedCountry:n.country,onCountryChange:l=>x({...n,country:l})}),e.country&&a.jsx("p",{className:"text-red-500",children:e.country})]}),a.jsx(E,{onOptionChange:k,pageCount:o.pageCount}),a.jsx("h3",{className:"text-xl font-bold mb-4",children:"Afzender toevoegen (optioneel)"}),a.jsx("div",{children:a.jsx(A,{checked:t,onCheckedChange:v})}),t&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block text-lg font-medium text-gray-700",children:"Voornaam Afzender"}),a.jsx(c,{name:"sender_first_name",placeholder:"Voornaam",value:n.sender_first_name,onChange:g,onKeyPress:d,className:"text-lg"}),e.sender_first_name&&a.jsx("p",{className:"text-red-500",children:e.sender_first_name})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-lg font-medium text-gray-700",children:"Achternaam Afzender"}),a.jsx(c,{name:"sender_last_name",placeholder:"Achternaam",value:n.sender_last_name,onChange:g,onKeyPress:d,className:"text-lg"}),e.sender_last_name&&a.jsx("p",{className:"text-red-500",children:e.sender_last_name})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-lg font-medium text-gray-700",children:"Email Afzender"}),a.jsx(c,{name:"email",placeholder:"emailadres",value:n.email,onChange:g,onKeyPress:d,className:"text-lg"}),e.email&&a.jsx("p",{className:"text-red-500",children:e.email})]})]}),a.jsxs("div",{className:"flex justify-between mt-4",children:[a.jsx(_,{variant:"back",onClick:i,children:"Terug"}),a.jsx(_,{variant:"next",type:"submit",children:"Volgende"})]})]})]})})},$=R;export{$ as default};
