export const prerender = false;
import { supabase } from "../../services/supabase";
import type { APIRoute } from "astro"

export const POST: APIRoute = async ({ request }) => {
    const { id, tanggal, order_id } = await request.json();
    
    const { data, error } = await
    supabase.from("transaksi").insert([{ id, tanggal, order_id }]);
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
}

export const GET: APIRoute = async (context) => {
    const { data, error } = await supabase.from("transaksi").select("*").order("tanggal", { ascending: false });

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