import React from "react";

const ListPesanan = ({ order }) => {
   return (
      <>
         <div className="grid h-14 w-full grid-cols-6 content-center justify-items-center gap-2 rounded-md bg-red-400 p-5">
           {
              order.map((item) => (
                <div key={item.id} className="">
                    
                    <div className="">{item.customer_detail.email}</div>
                    <div className="">{item.item_detail.quantity}</div>
                    <div className="">{item.table}</div>
                    <div className="">{item.status}</div>
                </div>
              ))
           }
         </div>
      </>
   );
};

export default ListPesanan;
