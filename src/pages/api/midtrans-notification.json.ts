export const prerender = false;
import { supabase } from "../../services/supabase";
import type { APIRoute } from "astro";

async function updateOrderStatus(orderId: string, status: string) {
    const { data, error } = await supabase
        .from("order")
        .update({ status_pembayaran: status })
        .eq("id", orderId);

    if (error) {
        console.error('Error updating order status:', error);
        return { success: false, error };
    } else {
        console.log(`Successfully updated the status of order ${orderId} to ${status}`);
        return { success: true, data };
    }
}
export const POST: APIRoute = async ({ request }) => {
    const notification = await request.json();

   const transactionStatus = notification.transaction_status;
   const orderId = notification.order_id;

   try {
      if (transactionStatus === 'capture' || transactionStatus === 'settlement') {
         await updateOrderStatus(orderId, 'paid');
      } else if (transactionStatus === 'cancel' || transactionStatus === 'deny' || transactionStatus === 'expire') {
         await updateOrderStatus(orderId, 'failed');
      } else if (transactionStatus === 'pending') {
         await updateOrderStatus(orderId, 'pending');
      }

      return new Response('OK', { status: 200 });
   } catch (error) {
      return new Response(
         JSON.stringify({
            success: false,
            error: error.message,
         }),
         { status: 500 }
      );
   }
   
};