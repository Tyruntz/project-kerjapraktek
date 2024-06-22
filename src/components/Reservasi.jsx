import React from "react";
import { useState, useEffect } from "react";

const Reservasi = () => {
   const [nama, setNama] = useState("");
   const [tanggal, setTanggal] = useState("");
   const [waktu, setWaktu] = useState("");
   const [jumlahOrang, setJumlahOrang] = useState("");
   

   const handleSubmit = (e) => {
      e.preventDefault();
      const formattedMessage = `*Pesan Reservasi:*\n\n*Nama:* ${nama}\n*Tanggal:* ${tanggal}\n*Waktu:* ${waktu}\n*Jumlah Orang:* ${jumlahOrang}\n\n*Mohon konfirmasi reservasi.*\n\n*Terima kasih.*`;
      
      const encodedMessage = encodeURIComponent(formattedMessage);
      setNama("");
        setTanggal("");
        setWaktu("");
        setJumlahOrang("");
      window.open(
         `https://wa.me/6282251389896?text=${encodedMessage}`,
         "_blank"
      );
   };

   return (
      <div className="min-h-screen flex justify-start items-center px-10 bg-[#1c0000]">
         <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
            <h1 className="text-2xl font-bold text-gray-700 mb-6 flex gap-2 ">
               <span>
                  <img
                     src="src\assets\images\b42e38.png"
                     className="w-8 h-8 object-cover rounded-full shadow-md"
                     alt=""
                  />
               </span>
               Reservasi Meja
            </h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
               <div className="flex flex-col gap-1">
                  <label
                     htmlFor="name"
                     className="text-sm font-medium text-gray-700"
                  >
                     Nama
                  </label>
                  <input
                     type="text"
                     name="name"
                     id="name"
                     className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                     required
                     value={nama}
                     onChange={(e) => setNama(e.target.value)}
                  />
               </div>
               <div className="flex flex-col">
                  <label
                     htmlFor="date"
                     className="text-sm font-medium text-gray-700"
                  >
                     Tanggal
                  </label>
                  <input
                     type="date"
                     name="date"
                     id="date"
                     className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                     required
                     value={tanggal}
                     onChange={(e) => setTanggal(e.target.value)}
                  />
               </div>
               <div className="flex flex-col">
                  <label
                     htmlFor="time"
                     className="text-sm font-medium text-gray-700"
                  >
                     Waktu
                  </label>
                  <input
                     type="time"
                     name="time"
                     id="time"
                     className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                     required
                     value={waktu}
                     onChange={(e) => setWaktu(e.target.value)}
                  />
               </div>
               <div className="flex flex-col">
                  <label
                     htmlFor="people"
                     className="text-sm font-medium text-gray-700"
                  >
                     Jumlah Orang
                  </label>
                  <input
                     type="number"
                     name="people"
                     id="people"
                     className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                     required
                     value={jumlahOrang}
                     onChange={(e) => setJumlahOrang(e.target.value)}
                  />
               </div>

               <button
                  type="submit"
                  className="w-full flex justify-center items-center py-2 px-4 gap-2 bg-[#A3080C] hover:bg-[#ff1d1d] text-white  font-bold rounded-md"
               >
                  Lanjutkan Ke Whatsapp{" "}
                  <span>
                     <img
                        src="src\assets\icons\whatsapp.png"
                        className="h-6 w-6 object-cover"
                        alt=""
                     />
                  </span>
               </button>
            </form>
         </div>
      </div>
   );
};

export default Reservasi;
