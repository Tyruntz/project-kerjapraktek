import { s as supabase } from './_menuId__x_P2DjmS.mjs';

const prerender = false;
const POST = async ({ request }) => {
  const { email, password } = await request.json();
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  if (error) {
    return new Response(
      JSON.stringify({
        success: false,
        message: error.message
      }),
      {
        status: 401,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
  return new Response(null, {
    status: 302,
    headers: {
      "Set-Cookie": "isLoggedIn=true; Path=/",
      Location: "/admin"
    }
  });
};

export { POST, prerender };
