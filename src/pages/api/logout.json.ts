import type { APIRoute } from "astro";

export const prerender = false;



export const POST: APIRoute = async ({ request }) => {


  // Di sini Anda bisa melakukan proses logout seperti menghapus cookie atau state otentikasi
  // Misalnya, menghapus cookie isLoggedIn
  
  return new Response(null, {
    status: 200,
    headers: {
      'Set-Cookie': 'isLoggedIn=; Max-Age=0; Path=/',
    },
  });
};
