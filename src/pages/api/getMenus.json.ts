export const prerender = false;
import { supabase } from "../../services/supabase";
import type { APIRoute } from "astro";

export const GET: APIRoute = async (context) => {

    const { data, error } = await supabase.from("menus").select("*");
    
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

//endpoint delete
export const DELETE: APIRoute = async ({request}) => {
    
    const {id} = await request.json();
    
    console.log(id);
    // const { error } = await supabase.from("menus").delete().eq("id", id);
    // if (error) {
    //     return new Response(
    //         JSON.stringify({
    //             success: false,
    //             error: error.message,
    //         })
    //     );
    // }
    return new Response(
        JSON.stringify({
            success: true,
            
        })
    );
};