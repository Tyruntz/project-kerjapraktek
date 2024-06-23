import { s as supabase } from './_menuId__x_P2DjmS.mjs';

const prerender = false;
const POST = async ({ request }) => {
  const { id, tanggal, order_id } = await request.json();
  const { data, error } = await supabase.from("transaksi").insert([{ id, tanggal, order_id }]);
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
const GET = async (context) => {
  const { data, error } = await supabase.from("transaksi").select("*").order("tanggal", { ascending: false });
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

export { GET, POST, prerender };
