export const prerender = false;
import { supabase } from "../../services/supabase";
import type { APIRoute } from "astro";

//delete by id
export const POST: APIRoute = async ({ request }) => {
    const { id } = await request.json();
    const { data, error } = await supabase.from("menus").delete().eq("id", id);
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