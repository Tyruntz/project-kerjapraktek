export const prerender = false;
import { date } from "astro/zod";
import { supabase } from "../../services/supabase";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request }) => {
   const { searchParams } = new URL(request.url);
   const start = searchParams.get("start");
   const end = searchParams.get("end");
   const data = { start, end };

   try {
      // Query ke tabel transaksi menggunakan Supabase
      const { data, error } = await supabase
         .from("transaksi")
         .select("tanggal, order_id")
         .gte("tanggal", start)
         .lte("tanggal", end);

      if (error) {
         throw error;
      }

      // Mengelompokkan dan menjumlahkan total penjualan per tanggal
      const salesReport = data.reduce((acc, curr) => {
          const date = curr.tanggal;
          const orderId = curr.order_id;
          if (!acc[date]) {
            acc[date] = {
               date: date,
               total: 0,
               orders: [],
            };
          }
          acc[date].total += 1;
          acc[date].orders.push(orderId);
          
         return acc;
      }, {});

      // Mengubah objek hasil menjadi array
      const result = Object.values(salesReport);

      return new Response(
         JSON.stringify({
            success: true,
            result: result,
         }),
         { status: 200 }
      );
   } catch (error) {
      console.error(error);
      return new Response(
         JSON.stringify({
            success: false,
            error: error.message,
         }),
         { status: 500 }
      );
   }
};
