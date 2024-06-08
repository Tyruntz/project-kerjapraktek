export const prerender = false;
import { supabase } from "../../services/supabase";
import type { APIRoute } from "astro";


export const POST: APIRoute = async ({ request }) => {
   const { id, items, total, nama, nohp, email } = await request.json();
   const { data, error } = await supabase.from("transaksi").insert([
      {
         id,
         items,
         total,
         nama,
         nohp,
         email,
      },
   ]);
   if (error) {
      return new Response(
         JSON.stringify({
            success: false,
            error: error.message,
         })
      );
   }
   return new Response(
      JSON.stringify({
         success: true,
         data: data,
      })
   );
};