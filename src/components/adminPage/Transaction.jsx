import React, { useState, useEffect } from "react";
import { supabase } from "../../services/supabase";

const Transaction = () => {
   const [transactions, setTransactions] = useState([]);
   const [search, setSearch] = useState("");
   const [filteredTransactions, setFilteredTransactions] = useState([]);
   const [selectedOrder, setSelectedOrder] = useState(null);
   const [loading, setLoading] = useState(true);

   const handleSearch = () => {
      setFilteredTransactions(
         transactions.filter((transaksi) => transaksi.tanggal.includes(search))
      );
   };

   const getOrderById = async (orderId) => {
      const { data, error } = await supabase
         .from("order")
         .select("*")
         .eq("id", orderId);

      if (error) {
         console.error("Error fetching order data:", error.message);
         return;
      }

      setSelectedOrder(data[0]);
   };

   useEffect(() => {
      const fetchTransactions = async () => {
         const response = await fetch("api/getTransaksi.json");
         const data = await response.json();
         setTransactions(data.data);
         setFilteredTransactions(data.data); // Initialize with all transactions
         setLoading(false);
      };

      fetchTransactions();
   }, []);

   if (loading) {
      return (
         <div className="rounded-md border place-content-center grid border-[#d1d1d3] bg-[#fefefe] h-full row-span-6">
            <h1 className=" text-xl">Loading...</h1>
         </div>
      );
   }

   return (
      <div className="rounded-md border grid grid-rows-11 gap-1 border-[#d1d1d3] p-2 bg-[#fefefe] h-full row-span-6">
         <div className="border flex gap-2 bg-[#e2e2e4] rounded-t-md p-2">
            <p>Cari Berdasarkan Tanggal Transaksi </p>
            <input
               type="date"
               name="date"
               id="date"
               className="py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
               required
               value={search}
               onChange={(e) => setSearch(e.target.value)}
            />
            <button
               className="bg-[#6f0000] hover:bg-[#9c0000] rounded-md"
               onClick={handleSearch}
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#fefefe"
               >
                  <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
               </svg>
            </button>
         </div>
         <div className="row-span-10 grid grid-cols-3 gap-1">
            <div className="border-[#d1d1d3] rounded-sm border bg-white col-span-2 h-full">
               <table className="rounded-sm w-full">
                  <thead className="bg-[#e1dbd6]">
                     <tr>
                        <th>Transaksi ID</th>
                        <th>Tanggal Transaksi</th>
                        <th>Order ID</th>
                     </tr>
                  </thead>
                  <tbody className="overflow-auto max-h-[340px]">
                     {filteredTransactions.length === 0 ? (
                        <tr>
                           <td colSpan="3">Tidak ada transaksi</td>
                        </tr>
                     ) : (
                        filteredTransactions.map((transaksi) => (
                           <tr
                              key={transaksi.id}
                              className={`hover:bg-gray-300 ${
                                 selectedOrder?.id === transaksi.order_id
                                    ? "bg-gray-200"
                                    : ""
                              }`}
                              onClick={() => getOrderById(transaksi.order_id)}
                           >
                              <td>{transaksi.id}</td>
                              <td>
                                 {new Date(
                                    transaksi.tanggal
                                 ).toLocaleDateString("en-GB")}
                              </td>
                              <td>{transaksi.order_id}</td>
                           </tr>
                        ))
                     )}
                  </tbody>
               </table>
            </div>
            <div className="col-span-1 border border-[#d1d1d3] rounded-sm bg-white h-full p-4 text-sm">
               {selectedOrder && filteredTransactions.length > 0 ? (
                  <div className="flex flex-col h-full">
                     <h1 className="text-center text-base font-semibold mb-4">
                        Detail Order
                     </h1>
                     <div className="flex flex-col gap-4 flex-grow">
                        <div className="flex justify-between border-b pb-2">
                           <div>
                              <p>Order ID:</p>
                              <p>Tanggal Order:</p>
                              <p>Nama Customer:</p>
                           </div>
                           <div className="text-right">
                              <p>{selectedOrder.id}</p>
                              <p>
                                 {new Date(
                                    selectedOrder.created_at
                                 ).toLocaleDateString("en-GB")}
                              </p>
                              <p>{selectedOrder.customer_detail.name}</p>
                           </div>
                        </div>
                        <div className="border-b pb-2 flex-grow overflow-auto">
                           <p className="font-semibold mb-2">Item:</p>
                           <table className="w-full text-left">
                              <thead>
                                 <tr className="border-b">
                                    <th className="py-1">Nama</th>
                                    <th className="py-1 text-right">Harga</th>
                                    <th className="py-1 text-right">Jumlah</th>
                                 </tr>
                              </thead>
                              <tbody className="overflow-y-auto max-h-[150px]">
                                 {selectedOrder.item_detail.map((item) => (
                                    <tr key={item.id} className="border-b">
                                       <td className="py-1">{item.name}</td>
                                       <td className="py-1 text-right">
                                          {item.price.toLocaleString("id-ID", {
                                             style: "currency",
                                             currency: "IDR",
                                          })}
                                       </td>
                                       <td className="py-1 text-right">
                                          {item.quantity}
                                       </td>
                                    </tr>
                                 ))}
                              </tbody>
                           </table>
                        </div>
                        <div className="pt-2">
                           <p className="text-right font-semibold">
                              Total:{" "}
                              {selectedOrder.total.toLocaleString("id-ID", {
                                 style: "currency",
                                 currency: "IDR",
                              })}
                           </p>
                        </div>
                     </div>
                  </div>
               ) : (
                  <div className="grid place-content-center h-full bg-white p-3">
                     <h1>Pilih transaksi untuk melihat detail orderan</h1>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
};

export default Transaction;
