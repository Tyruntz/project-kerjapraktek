const prerender = false;
const POST = async ({ request }) => {
  return new Response(null, {
    status: 200,
    headers: {
      "Set-Cookie": "isLoggedIn=; Max-Age=0; Path=/"
    }
  });
};

export { POST, prerender };
