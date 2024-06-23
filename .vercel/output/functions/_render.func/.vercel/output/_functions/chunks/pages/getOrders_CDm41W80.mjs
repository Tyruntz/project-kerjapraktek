import { s as supabase } from './_menuId__x_P2DjmS.mjs';

const prerender = false;
const GET = async (context) => {
  const { data, error } = await supabase.from("order").select("*").order("created_at", { ascending: false });
  if (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message
      })
    );
  }
  return new Response(
    JSON.stringify({
      success: true,
      data
    })
  );
};
const PUT = async ({ request }) => {
  const { id, status } = await request.json();
  console.log(id, status);
  try {
    const { error } = await supabase.from("order").update({ status_pesanan: status }).eq("id", id);
    if (error) {
      return new Response(
        JSON.stringify({
          success: false,
          error: error.message
        })
      );
    }
    return new Response(
      JSON.stringify({
        success: true
      })
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message
      })
    );
  }
};

export { GET, PUT, prerender };
