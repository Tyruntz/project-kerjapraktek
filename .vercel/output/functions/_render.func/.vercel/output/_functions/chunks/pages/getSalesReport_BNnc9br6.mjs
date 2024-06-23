import { s as supabase } from './_menuId__x_P2DjmS.mjs';

const prerender = false;
const GET = async ({ request }) => {
  const { searchParams } = new URL(request.url);
  const start = searchParams.get("start");
  const end = searchParams.get("end");
  try {
    const { data: data2, error } = await supabase.from("transaksi").select("tanggal, order_id").gte("tanggal", start).lte("tanggal", end);
    if (error) {
      throw error;
    }
    const salesReport = data2.reduce((acc, curr) => {
      const date2 = curr.tanggal;
      const orderId = curr.order_id;
      if (!acc[date2]) {
        acc[date2] = {
          date: date2,
          total: 0,
          orders: []
        };
      }
      acc[date2].total += 1;
      acc[date2].orders.push(orderId);
      return acc;
    }, {});
    const result = Object.values(salesReport);
    return new Response(
      JSON.stringify({
        success: true,
        result
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message
      }),
      { status: 500 }
    );
  }
};

export { GET, prerender };
