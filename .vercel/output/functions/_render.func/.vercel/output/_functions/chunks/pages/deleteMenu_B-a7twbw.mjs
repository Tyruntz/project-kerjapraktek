import { s as supabase } from './_menuId__x_P2DjmS.mjs';

const prerender = false;
const POST = async ({ request }) => {
  const { id } = await request.json();
  const { data, error } = await supabase.from("menus").delete().eq("id", id);
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
};

export { POST, prerender };
