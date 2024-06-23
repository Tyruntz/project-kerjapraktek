import { s as supabase } from './_menuId__x_P2DjmS.mjs';
import midtransClient from 'midtrans-client';

const prerender = false;
let snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: "SB-Mid-server-y4FbNb0yJUvHTL4hvSJ3IAF_"
});
function insertOrder(data) {
  return supabase.from("order").insert([data]);
}
const POST = async ({ request }) => {
  const { id, items, total, meja, nama, nohp, email } = await request.json();
  let parameter = {
    transaction_details: {
      order_id: id,
      gross_amount: total
    },
    item_details: JSON.parse(items),
    customer_details: {
      first_name: nama,
      email,
      phone: nohp
    }
  };
  let dataOrder = {
    "id": id,
    "total": total,
    "table": meja,
    "status_pembayaran": "pending",
    "status_pesanan": "pending",
    "item_detail": JSON.parse(items),
    "customer_detail": {
      "name": nama,
      "email": email,
      "phone": nohp
    }
  };
  try {
    const transaction = await snap.createTransaction(parameter);
    await insertOrder(dataOrder);
    return new Response(
      JSON.stringify({
        success: true,
        token: transaction.token
      })
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message
      })
    );
  }
};

export { POST, prerender };
