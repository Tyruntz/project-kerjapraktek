import React, { useState, useEffect } from "react";
import { supabase } from "../../services/supabase"; // Pastikan Anda memiliki konfigurasi supabase yang benar

const Report = () => {
   const [startDate, setStartDate] = useState("");
   const [endDate, setEndDate] = useState("");
   const [salesReport, setSalesReport] = useState([]);
   const [loading, setLoading] = useState(false);

   const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      const start = startDate + "T00:00:00";
      const end = endDate + "T23:59:59";

      // Fetch transactions based on startDate and endDate
      const { data: transactions, error: transactionError } = await supabase
         .from("transaksi")
         .select("*")
         .gte("tanggal", start)
         .lte("tanggal", end);

      if (transactionError) {
         console.error(
            "Error fetching transactions:",
            transactionError.message
         );
         setLoading(false);
         return;
      }

      // Fetch orders based on the order_ids from transactions
      const orderIds = transactions.map((transaction) => transaction.order_id);
      const { data: orders, error: orderError } = await supabase
         .from("order")
         .select("*")
         .in("id", orderIds);

      if (orderError) {
         console.error("Error fetching orders:", orderError.message);
         setLoading(false);
         return;
      }

      // Combine transactions with their corresponding orders
      const combinedReport = transactions.map((transaction) => {
         const order = orders.find((o) => o.id === transaction.order_id);
         return {
            ...transaction,
            order,
            totalTransactions: order.item_detail.length,
            total: order.item_detail.reduce(
               (acc, item) => acc + item.price * item.quantity,
               0
            ),
         };
      });

      setSalesReport(combinedReport);
      setLoading(false);
   };

   return (
      <div className="rounded-md border border-[#e1dbd6] bg-[#fefefe] h-full p-3 gap-1 grid row-span-6 grid-cols-4">
         <div className="w-full h-full bg-[#f9f6f2] border border-[#e2e2e4] p-5">
            <h2 className="mb-4 text-lg font-semibold">Pilih Periode</h2>
            <form
               onSubmit={handleSubmit}
               className="max-w-md p-3 bg-white rounded shadow-md"
            >
               <div className="flex flex-col gap-4">
                  <label className="block mb-2">
                     <span className="text-gray-700">Tanggal Mulai:</span>
                     <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                        className="block w-full p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded"
                     />
                  </label>
                  <label className="block mb-2">
                     <span className="text-gray-700">Tanggal Akhir:</span>
                     <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        required
                        className="block w-full p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded"
                     />
                  </label>
               </div>
               <button
                  type="submit"
                  className="mt-4 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                  disabled={loading}
               >
                  {loading ? "Loading..." : "Cari Data"}
               </button>
            </form>
         </div>
         <div className="bg-white text-sm p-3 grid grid-rows-6 col-span-3">
            <h2 className="text-center border-b mb-4 text-lg font-semibold">
               Laporan Penjualan 
               <p className="text-sm">
               Periode {startDate?new Date(startDate).toLocaleDateString("id-ID"):"/"} - {" "}
               {endDate?new Date(endDate).toLocaleDateString("id-ID"):"/"}
            </p>
            </h2>
            
            <div className="row-span-5 overflow-auto">
               {salesReport.length ? (
                  <table className="min-w-full text-center bg-white">
                     <thead className="bg-gray-800 text-white">
                        <tr>
                           <th className="py-2 px-4">Transaksi ID</th>
                           <th className="py-2 px-4">Tanggal</th>
                           <th className="py-2 px-4">Order ID</th>
                           <th className="py-2 px-4">Nama Customer</th>
                           <th className="py-2 px-4">Nama Produk</th>
                           <th className="py-2 px-4">Jumlah</th>
                           <th className="py-2 px-4">Harga(Rp.)</th>
                           <th className="py-2 px-4">Total(Rp.)</th>
                        </tr>
                     </thead>
                     <tbody className="text-gray-700 max-h-[280px]">
                        {salesReport.map((report) =>
                           report.order.item_detail.map((item, index) => (
                              <tr
                                 key={`${report.id}-${item.id}-${index}`}
                                 className="border-b"
                              >
                                 <td className="py-2 px-4 text-center">
                                    {report.id}
                                 </td>
                                 <td className="py-2 px-4 text-center">
                                    {new Date(
                                       report.tanggal
                                    ).toLocaleDateString("id-ID")}
                                 </td>
                                 <td className="py-2 px-4 text-center">
                                    {report.order.id}
                                 </td>
                                 <td className="py-2 px-4 text-center">
                                    {report.order.customer_detail.first_name}
                                 </td>
                                 <td className="py-2 px-4 text-center">
                                    {item.name}
                                 </td>
                                 <td className="py-2 px-4 text-center">
                                    {item.quantity}
                                 </td>
                                 <td className="py-2 px-4 text-center">
                                    {item.price}
                                 </td>
                                 <td className="py-2 px-4 text-center">
                                    {item.price * item.quantity}
                                 </td>
                              </tr>
                           ))
                        )}
                     </tbody>
                  </table>
               ) : (
                  <p className="text-center mt-4">Tidak ada data</p>
               )}
            </div>
            <div className="text-center row-span-1 mt-4">
               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Cetak Laporan
               </button>
            </div>
         </div>
      </div>
   );
};

export default Report;
