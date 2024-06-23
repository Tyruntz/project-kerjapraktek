import { s as supabase } from './_menuId__x_P2DjmS.mjs';

const prerender = false;
const POST = async ({ request }) => {
  const { id, items, total, nama, nohp, email } = await request.json();
  const { data, error } = await supabase.from("transaksi").insert([
    {
      id,
      items,
      total,
      nama,
      nohp,
      email
    }
  ]);
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

export { POST, prerender };
