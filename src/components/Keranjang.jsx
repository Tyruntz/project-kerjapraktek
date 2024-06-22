import React from "react";
import { useState, useEffect } from "react";
import { useStore } from "@nanostores/react";
import { cartItems, isCartOpen, removeItemFromCart } from "../stores/cartStore";
import "./keranjang.css";


const Keranjang = () => {
   const [table, setTable] = useState(0);

   useEffect(() => {
      // Ambil nilai 'meja' dari URL
      const meja = new URLSearchParams(window.location.search).get('meja');

      if (meja) {
         // Set nilai 'meja' ke state
         setTable(Number(meja));

         // Jika halaman belum direload sebelumnya, reload halaman
         if (!localStorage.getItem("reloaded")) {
            localStorage.setItem("reloaded", "true");
            window.location.reload();
         } else {
            // Setelah reload, hapus item dari localStorage
            localStorage.removeItem("reloaded");
         }
      }
   }, []);

   
   const $cartItems = useStore(cartItems);
   const $isCartOpen = useStore(isCartOpen);
   const [quantity, setQuantity] = useState(1);

   function handleCart() {
      isCartOpen.set(!$isCartOpen);

      const cart = document.querySelector(".cart");
      cart.classList.toggle("active");
   }
   const total = $cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
   );
   const [tokenFix, setToken] = useState(null);
   const [requestSuccess, setRequestSuccess] = useState(false);

   useEffect(() => {
      if (tokenFix) {
          window.snap.pay(tokenFix, {
              onSuccess: function (result) {
                  console.log("Payment Success:", result);
                  alert("Pembayaran Berhasil!");
                  setRequestSuccess(true); // Set state setelah pembayaran sukses
              },
              onPending: function (result) {
                  console.log("Payment Pending:", result);
                  alert("Pembayaran Sedang Diproses...");
              },
              onError: function (result) {
                  console.error("Payment Error:", result);
                  alert("Pembayaran Gagal. Silakan coba lagi.");
              },
              onClose: function () {
                  console.log("Payment popup closed");
                  alert("Pembayaran dibatalkan.");
              }
          });
      }
  }, [tokenFix]);

  // Menggunakan useEffect untuk menangani tindakan setelah requestSuccess berubah
  useEffect(() => {
      if (requestSuccess) {
          alert("Berhasil melakukan checkout");
          window.location.reload(); // Reload halaman setelah pembayaran selesai
      }
  }, [requestSuccess]);

   const [dataDiri, setDataDiri] = useState({
      nama: "",
      nohp: "",
      email: "",
   });

   return (
      <>
         <button
            className="flex px-5 font-bold hover:text-blue-400"
            onClick={handleCart}
         >
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth={1.5}
               stroke="currentColor"
               className="w-6 h-6 text-white"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
               />
            </svg>
            <span
               hidden={!$cartItems.length}
               className="bg-red-600 text-xs text-white rounded-full px-1 fixed right-5 top-2"
            >
               {$cartItems.length ? $cartItems.length : ""}
            </span>
         </button>

         <div className="cart w-full lg:w-[35rem] absolute right-[-100%] bg-white top-full">
            <header>
               <div className="head grid place-content-center font-semibold uppercase">
                  <h1>Keranjang</h1>
               </div>
            </header>
            <main>
               {$cartItems.map((item) => (
                  <div
                     key={item.id}
                     className="flex h-[80px] py-1 rounded-md shadow-xl bg-white"
                  >
                     <div className="flex items-center px-1">
                        <img
                           src={item.imgurl}
                           alt=""
                           className="h-[70px] w-[70px] rounded-md object-cover"
                           srcSet=""
                        />
                     </div>
                     <div className="flex w-full">
                        <table className="h-full w-full">
                           <tbody>
                              <tr className="">
                                 <th className="text-left">{item.name}</th>
                                 <th className="text-right">{item.price}</th>
                              </tr>
                              <tr className="">
                                 <td className="px-2 text-xs">
                                    <button
                                       onClick={() => {
                                          if (item.quantity > 1) {
                                             item.quantity -= 1;
                                             setQuantity(item.quantity);
                                          }
                                       }}
                                    >
                                       ➖
                                    </button>
                                    <span className="px-3 border rounded-sm border-black mx-1">
                                       {item.quantity}
                                    </span>
                                    <button
                                       onClick={() => {
                                          item.quantity += 1;
                                          setQuantity(item.quantity);
                                       }}
                                    >
                                       ➕
                                    </button>
                                 </td>
                                 <td className="text-right">
                                    {item.price * item.quantity}
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                        <div className="flex w-[80px] items-center m-2 justify-center">
                           <button
                              onClick={() => {
                                 removeItemFromCart(item.id);
                              }}
                              className="size-full flex items-center rounded-md justify-center "
                           >
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 strokeWidth={1.5}
                                 stroke="currentColor"
                                 className="w-8 h-8 hover:text-red-500 transition-all ease-in-out duration-150"
                              >
                                 <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                 />
                              </svg>
                           </button>
                        </div>
                     </div>
                  </div>
               ))}
            </main>
            <footer className="py-5 px-3">
               <form action="">
                  <div className="flex flex-col justify-center items-center gap-1">
                     <div className="flex gap-1 w-full justify-center">
                        <input type="hidden" name="meja" value={
                           table
                        } />
                        <input
                           type="hidden"
                           name="id"
                           value={Math.floor(Math.random() * 1000000)}
                        />
                        <input
                           type="hidden"
                           name="items"
                           value={JSON.stringify($cartItems)}
                        />
                        <input type="hidden" name="total" value={total} />
                     </div>
                     <div className="flex flex-col w-full  pt-0 gap-2  ">
                        <label htmlFor="dataDiri">Data Diri</label>
                        <input
                           onChange={(e) => {
                              setDataDiri({
                                 ...dataDiri,
                                 nama: e.target.value,
                              });
                           }}
                           className="h-8 rounded-md bg-neutral-100"
                           placeholder="Nama"
                           name="nama"
                           type="text"
                        />
                        <div className="grid grid-flow-col grid-cols-2 gap-2">
                           <input
                              onChange={(e) => {
                                 setDataDiri({
                                    ...dataDiri,
                                    nohp: e.target.value,
                                 });
                              }}
                              className="h-8 rounded-md bg-neutral-100"
                              placeholder="Phone"
                              name="nohp"
                              type="text"
                           />
                           <input
                              onChange={(e) => {
                                 setDataDiri({
                                    ...dataDiri,
                                    email: e.target.value,
                                 });
                              }}
                              className="h-8 rounded-md bg-neutral-100"
                              placeholder="Email"
                              name="email"
                              type="text"
                           />
                        </div>
                     </div>
                  </div>
                  <div className="flex justify-between p-2">
                     <span>Total</span>
                     <span>
                        {total.toLocaleString("id-ID", {
                           style: "currency",
                           currency: "IDR",
                        })}
                     </span>
                  </div>
                  <button
                     className={
                        !$cartItems.length ||
                        !dataDiri.nama ||
                        !dataDiri.nohp ||
                        !dataDiri.email
                           ? "bg-gray-300 text-white rounded-md p-2 w-full mb-12"
                           : "bg-blue-500 text-white rounded-md p-2 w-full mb-12"
                     }
                     disabled={
                        !$cartItems.length ||
                        !dataDiri.nama ||
                        !dataDiri.nohp ||
                        !dataDiri.email
                           ? true
                           : false
                     }
                     onClick={async (e) => {
                        e.preventDefault();
                    
                        const form = document.querySelector("form");
                        const data = new FormData(form);
                        const objData = Object.fromEntries(data);
                        const res = await fetch("/api/checkout.json", {
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(objData),
                        });
                        const requestData = await res.json();
                    
                        if (requestData.success) {
                            const token = requestData.token;
                            setToken(token);
                            // Menjalankan Snap.js untuk melakukan pembayaran
                            
                        } else {
                            alert("Gagal melakukan checkout");
                            console.log(requestData);
                        }
                    }}
                    
                  >
                     Checkout
                  </button>
                  
               </form>
            </footer>
         </div>
      </>
   );
};

export default Keranjang;
