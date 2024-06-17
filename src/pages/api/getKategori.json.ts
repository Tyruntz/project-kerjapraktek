export const prerender = false;
import { supabase } from "../../services/supabase";
import type { APIRoute } from "astro";

export const GET: APIRoute = async (context) => {

    const { data, error } = await supabase.from("kategori").select("*");
    
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