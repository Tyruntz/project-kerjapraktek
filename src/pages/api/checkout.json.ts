export const prerender = false;
import { supabase } from "../../services/supabase";
import type { APIRoute } from "astro";

export const GET: APIRoute = async (context) => {
   return new Response(
      JSON.stringify({
         success: true,
         data: {
            message: "Hello from the server!",
         },
      }) 
   );
};

import midtransClient from "midtrans-client";
// Create Snap API instance
let snap = new midtransClient.Snap({
   // Set to true if you want Production Environment (accept real transaction).
   isProduction: false,
   serverKey: "SB-Mid-server-y4FbNb0yJUvHTL4hvSJ3IAF_",
});

function insertOrder(data: any) {
   return supabase.from("order").insert([data]);
}



export const POST: APIRoute = async ({ request }) => {
   const { id, items, total, meja, nama, nohp, email } = await request.json();
   

   let parameter = {
    "transaction_details": {
      "order_id": id,
      "gross_amount": total
    },
    "item_details": JSON.parse(items),
    "customer_details": {
      "first_name": nama,
      "email": email,
      "phone": nohp,
    },
      
    };
    let dataOrder = {
      
      "id": id,
      "total": total,
      "table": meja,
      "status": "pending",
    
    "item_detail": JSON.parse(items),
    "customer_detail": {
      "first_name": nama,
      "email": email,
      "phone": nohp,
    },
      
    };
   try {
      const token = await snap.createTransaction(parameter);
      await insertOrder(dataOrder);
      
      return new Response(
         JSON.stringify({
            success: true,
            token: token,
            data: dataOrder,
         })
      );
      
   } catch (error) {
      return new Response(
         JSON.stringify({
            success: false,
            error: error.message,
            
         })
         
      );
   }

   
};
