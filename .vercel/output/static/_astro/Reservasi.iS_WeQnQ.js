import{j as e}from"./jsx-runtime.D5qyYPMi.js";import{r as s}from"./index.CZlPm10g.js";const f=()=>{const[t,r]=s.useState(""),[n,l]=s.useState(""),[o,u]=s.useState(""),[m,d]=s.useState(""),c=a=>{a.preventDefault();const i=`*Pesan Reservasi:*

*Nama:* ${t}
*Tanggal:* ${n}
*Waktu:* ${o}
*Jumlah Orang:* ${m}

*Mohon konfirmasi reservasi.*

*Terima kasih.*`,x=encodeURIComponent(i);r(""),l(""),u(""),d(""),window.open(`https://wa.me/6282251389896?text=${x}`,"_blank")};return e.jsx("div",{className:"min-h-screen flex justify-start items-center px-10 bg-[#1c0000]",children:e.jsxs("div",{className:"w-full max-w-md bg-white rounded-lg shadow-md p-8",children:[e.jsxs("h1",{className:"text-2xl font-bold text-gray-700 mb-6 flex gap-2 ",children:[e.jsx("span",{children:e.jsx("img",{src:"src\\assets\\images\\b42e38.png",className:"w-8 h-8 object-cover rounded-full shadow-md",alt:""})}),"Reservasi Meja"]}),e.jsxs("form",{className:"space-y-4",onSubmit:c,children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("label",{htmlFor:"name",className:"text-sm font-medium text-gray-700",children:"Nama"}),e.jsx("input",{type:"text",name:"name",id:"name",className:"w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent",required:!0,value:t,onChange:a=>r(a.target.value)})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"date",className:"text-sm font-medium text-gray-700",children:"Tanggal"}),e.jsx("input",{type:"date",name:"date",id:"date",className:"w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent",required:!0,value:n,onChange:a=>l(a.target.value)})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"time",className:"text-sm font-medium text-gray-700",children:"Waktu"}),e.jsx("input",{type:"time",name:"time",id:"time",className:"w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent",required:!0,value:o,onChange:a=>u(a.target.value)})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"people",className:"text-sm font-medium text-gray-700",children:"Jumlah Orang"}),e.jsx("input",{type:"number",name:"people",id:"people",className:"w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent",required:!0,value:m,onChange:a=>d(a.target.value)})]}),e.jsxs("button",{type:"submit",className:"w-full flex justify-center items-center py-2 px-4 gap-2 bg-[#A3080C] hover:bg-[#ff1d1d] text-white  font-bold rounded-md",children:["Lanjutkan Ke Whatsapp"," ",e.jsx("span",{children:e.jsx("img",{src:"src\\assets\\icons\\whatsapp.png",className:"h-6 w-6 object-cover",alt:""})})]})]})]})})};export{f as default};