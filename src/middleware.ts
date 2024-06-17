import { defineMiddleware } from "astro:middleware";

// Middleware untuk memeriksa otentikasi
export const onRequest = defineMiddleware((context, next ) => {
  const cookies = context.request.headers.get('cookie');
  const isLoggedIn = cookies && cookies.includes('isLoggedIn=true');

  

  if (context.url.pathname.startsWith('/admin') && !isLoggedIn) {
    
    return new Response(null, {
      status: 302,
      headers: {
        'Location': new URL('/login', context.url.origin).toString(),
      },
    });
  }

  return next();

});
