export const prerender = false;
import { supabase } from "../../services/supabase";
import type { APIRoute } from "astro";

//insert data to supabase
export const POST: APIRoute = async ({ request }) => {
    const { nama, kategori_id, harga_panas, harga_dingin, imageurl } = await request.json();
    
    const { data, error } = await supabase.from("menus").insert([{ nama, kategori_id, harga_panas:harga_panas?harga_panas:null, harga_dingin:harga_dingin?harga_dingin:null, imageurl}]);
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
};

export const PUT: APIRoute = async ({ request }) => {
    const {id, nama, kategori_id, harga_panas, harga_dingin, imageurl } = await request.json();
    const { error } = await supabase
      .from("menus")
      .update({ nama, kategori_id, harga_panas:harga_panas?harga_panas:null, harga_dingin:harga_dingin?harga_dingin:null, imageurl})
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
};
