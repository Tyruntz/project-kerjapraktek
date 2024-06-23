import { s as supabase } from './_menuId__x_P2DjmS.mjs';

const prerender = false;
const GET = async (context) => {
  const { data, error } = await supabase.from("menus").select("*");
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
const DELETE = async ({ request }) => {
  const { id } = await request.json();
  console.log(id);
  return new Response(
    JSON.stringify({
      success: true
    })
  );
};

export { DELETE, GET, prerender };
