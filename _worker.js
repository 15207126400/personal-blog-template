export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith('/api/')) {
      return new Response('API routes are not supported in static exports', { status: 404 });
    }
    return env.ASSETS.fetch(request);
  }
}; 