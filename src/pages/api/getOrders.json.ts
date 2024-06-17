export const prerender = false;
import { supabase } from "../../services/supabase";
import type { APIRoute } from "astro";

export const GET: APIRoute = async (context) => {
   const { data, error } = await supabase
      .from("order")
      .select("*")
      .order("created_at", { ascending: false });

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

export const PUT: APIRoute = async ({ request }) => {
   const { id, status } = await request.json();
   console.log(id, status);

   try {
      const { error } = await supabase
         .from("order")
         .update({ status })
         .eq("id", id);

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
