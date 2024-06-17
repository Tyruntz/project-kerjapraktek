import type { APIRoute } from "astro";
import { supabase } from "../../services/supabase";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
   const { email, password } = await request.json();

   const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
   });

   if (error) {
      return new Response(
         JSON.stringify({
            success: false,
            message: error.message,
         }),
         {
            status: 401,
            headers: {
               "Content-Type": "application/json",
            },
         }
      );

   }

   return new Response(null, {
      status: 302,
      headers: {
         "Set-Cookie": "isLoggedIn=true; Path=/",
         Location: "/admin",
      },
   });
};
