import { s as supabase } from './_menuId__x_P2DjmS.mjs';

const prerender = false;
const GET = async (context) => {
  const { data, error } = await supabase.from("kategori").select("*");
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

export { GET, prerender };
