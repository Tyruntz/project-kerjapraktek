import 'cookie';

function sequence(...handlers) {
  const filtered = handlers.filter((h) => !!h);
  const length = filtered.length;
  if (!length) {
    const handler = defineMiddleware((context, next) => {
      return next();
    });
    return handler;
  }
  return defineMiddleware((context, next) => {
    return applyHandle(0, context);
    function applyHandle(i, handleContext) {
      const handle = filtered[i];
      const result = handle(handleContext, async () => {
        if (i < length - 1) {
          return applyHandle(i + 1, handleContext);
        } else {
          return next();
        }
      });
      return result;
    }
  });
}

function defineMiddleware(fn) {
  return fn;
}

const onRequest$1 = defineMiddleware((context, next) => {
  const cookies = context.request.headers.get("cookie");
  const isLoggedIn = cookies && cookies.includes("isLoggedIn=true");
  if (context.url.pathname.startsWith("/admin") && !isLoggedIn) {
    return new Response(null, {
      status: 302,
      headers: {
        "Location": new URL("/login", context.url.origin).toString()
      }
    });
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { defineMiddleware as d, onRequest as o, sequence as s };
