import React from "react";
import { useState, useEffect } from "react";
import ListPesanan from "../ListPesanan";


const Dashboard = () => {
   const [date, setDate] = useState(new Date());
   const [orders, setOrders] = useState([]);
   const [selectedOrder, setSelectedOrder] = useState(null);
   const [total, setTotal] = useState(0);

   const handleSelect = (order) => {
      setSelectedOrder(order);
      setTotal(order.total);
   };

   useEffect(() => {
      const timer = setInterval(() => setDate(new Date()), 1000);

      return function cleanup() {
         clearInterval(timer);
      };
   });

   function generateTransactionId() {
      const randomNumber = Math.floor(100000 + Math.random() * 900000);
      return randomNumber.toString();
    }

   const updateStatus = async (orderId) => {
      const response = await fetch("api/getOrders.json", {
         method: "PUT",
         headers: {
            "Content-Type": "application/json",
         },

         body: JSON.stringify({
            id: orderId,
            status: "Selesai",
         }),
      });

      if (response.ok) {
         // insert table transaction
         const id = generateTransactionId();
         const order_id = orderId;
         const tanggal = date;
         const data = { id, tanggal, order_id };
         const response = await fetch("api/getTransaksi.json", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
         });
         if (response.ok) {
            console.log("Transaction created");
         }

         const updatedOrders = orders.map((order) => {
            if (order.id === orderId) {
               return { ...order, status: "Selesai" };
            }
            return order;
         });

         setOrders(updatedOrders);
         setSelectedOrder(null);
         setTotal(0);
      }
   };

   useEffect(() => {
      const fetchOrders = async () => {
         const response = await fetch("api/getOrders.json");
         const data = await response.json();
         setOrders(data.data);
      };

      fetchOrders(); // Fetch orders immediately

      const interval = setInterval(fetchOrders, 5000); // Fetch orders every 5 seconds

      return () => clearInterval(interval);
   }, []);

   if (orders.length === 0) {
      return (
         <div className="rounded-md border place-content-center grid border-[#d1d1d3] bg-[#fefefe] h-full row-span-6">
            <h1 className=" text-xl">Loading...</h1>
         </div>
      );
   }

   return (
      <div className="rounded-md border grid grid-rows-11 gap-1 border-[#d1d1d3] p-2 bg-[#fefefe] h-full row-span-6">
         <div className="border flex gap-2 bg-[#e2e2e4] rounded-t-md p-2">
            <h1>Orders today </h1>
            <h3 className="bg-white rounded-sm px-1">
               📅{date.toLocaleDateString()}
            </h3>
         </div>
         <div className="row-span-10 grid grid-cols-3 gap-1">
            <div className="border-[#d1d1d3] rounded-sm border bg-white col-span-2 h-full">
               <table className="rounded-sm">
                  <thead className="bg-[#e1dbd6]">
                     <tr>
                        <th>Order ID</th>
                        <th>Customer Name</th>
                        <th>Table Number</th>
                        <th>Status Pembayaran</th>
                        <th>Status Pesanan</th>
                     </tr>
                  </thead>
                  <tbody className="overflow-auto">
                     {orders.map((order) => (
                        <tr
                           className={`hover:bg-gray-300 ${
                              selectedOrder?.id === order.id
                                 ? "bg-gray-200"
                                 : ""
                           }`}
                           onClick={() => handleSelect(order)}
                           key={order.id}
                        >
                           <td>{order.id}</td>
                           <td>{order.customer_detail.name}</td>
                           <td>{order.table}</td>
                           <td>{order.status_pembayaran}</td>
                           <td>{order.status_pesanan}</td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
            {!selectedOrder ? (
               <div className="grid place-content-center border bg-white p-3">
                  <h1>Silahkan Pilih Orderan</h1>
               </div>
            ) : (
               selectedOrder && (
                  <div className="border rounded-sm bg-[#fefefe] p-3">
                     <h1 className="flex justify-between items-center">
                        <span>Order Details </span>
                        <button
                           className="bg-green-600 p-1 rounded-md text-white"
                           onClick={() => {
                              updateStatus(selectedOrder.id);
                           }}
                        >
                           Tandai Selesai
                        </button>
                     </h1>
                     <div className="grid  grid-rows-3 gap-2 ">
                        <div className="p-2 border-y row-span-2">
                           <h1>Item Details :</h1>
                           <ul className="px-2 overflow-y-auto">
                              {selectedOrder.item_detail.map((item) => (
                                 <div key={item.id} className="flex justify-between">
                                    <li key={item.id}>
                                       {item.name} x {item.quantity}
                                    </li>
                                    <p>
                                       {(
                                          item.price * item.quantity
                                       ).toLocaleString("id-ID", {
                                          style: "currency",
                                          currency: "IDR",
                                       })}
                                    </p>
                                 </div>
                              ))}
                           </ul>
                        </div>
                        <div className="p-2 border-b">
                           <h1>Customer Details :</h1>
                           <ul key={selectedOrder.id} className="px-2">
                              <li>
                                 Name:{" "}
                                 {selectedOrder.customer_detail.first_name}{" "}
                                 {selectedOrder.customer_detail.last_name}
                              </li>
                              <li>
                                 Email: {selectedOrder.customer_detail.email}
                              </li>
                              <li>
                                 Phone: {selectedOrder.customer_detail.phone}
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="p-1 flex justify-between">
                        <h1>Total : </h1>
                        <h3>
                           {total.toLocaleString("id-ID", {
                              style: "currency",
                              currency: "IDR",
                           })}
                        </h3>
                     </div>
                  </div>
               )
            )}
         </div>
      </div>
   );
};

export default Dashboard;
