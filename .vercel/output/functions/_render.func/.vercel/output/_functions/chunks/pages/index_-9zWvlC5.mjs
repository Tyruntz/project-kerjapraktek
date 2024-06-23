/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderSlot, f as createAstro, s as spreadAttributes, g as renderComponent } from '../astro_DpERy_Um.mjs';
import 'kleur/colors';
import 'html-escaper';
import { s as supabase, a as $$Section, b as $$LayoutAdmin } from './_menuId__x_P2DjmS.mjs';
import 'clsx';
/* empty css                          */
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { $ as $$Layout } from './_orderId__DMOTsGqi.mjs';
/* empty css                          */
import { useStore } from '@nanostores/react';
import { atom } from 'nanostores';
/* empty css                          */
import { FaMugHot, FaLocationDot } from 'react-icons/fa6';
import { FaRegSnowflake, FaCartPlus, FaYoutube, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import emailjs from '@emailjs/browser';
/* empty css                          */

const $$Astro$4 = createAstro();
const $$Modal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Modal;
  const { id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<dialog${addAttribute(id, "id")} class="bg-zinc-950 w-1/4 border rounded-md p-4 border-zinc-100/20 backdrop:backdrop-blur-md backdrop:bg-zinc-900/60"> ${renderSlot($$result, $$slots["default"])} </dialog>`;
}, "C:/Users/ogaa/Desktop/project-kp/project-jima-coffee/src/components/Modal.astro", void 0);

const $$Astro$3 = createAstro();
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Link;
  const { clsPrimary = false, clsSecondary = false, cls, ...prop } = Astro2.props;
  const primary = clsPrimary && "btn-primary";
  const secondary = clsSecondary && "btn-secondary";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute([primary, secondary, cls], "class:list")}${spreadAttributes(prop)}>${renderSlot($$result, $$slots["default"])}</a>`;
}, "C:/Users/ogaa/Desktop/project-kp/project-jima-coffee/src/components/Link.astro", void 0);

const $$Astro$2 = createAstro();
const $$Index$5 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$5;
  const req = Astro2.request;
  if (req.method === "POST") {
    try {
      const formData = await req.formData();
      const id = formData.get("id");
      try {
        const { error: error2 } = await supabase.from("menus").delete().eq("id", id);
      } catch (error2) {
        console.log("error saat menghapus data");
      }
      console.log("berhasil menghapus data");
    } catch (error2) {
      console.log("error saat menghapus data");
    }
  }
  const { data, error } = await supabase.from("menus").select();
  const { data: kategori, error: errorKategori } = await supabase.from("kategori").select();
  return renderTemplate`${renderComponent($$result, "LayoutAdmin", $$LayoutAdmin, { "title": "admin page", "data-astro-cid-mfwtwtu3": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Section", $$Section, { "data-astro-cid-mfwtwtu3": true }, { "default": ($$result3) => renderTemplate`${maybeRenderHead()}<div class="w-full flex justify-start mb-3" data-astro-cid-mfwtwtu3><a class="bg-slate-300 w-full text-center text-black p-2 rounded-md" href="/admin/menu/addMenu/addData" data-astro-cid-mfwtwtu3>Tambah Menu</a></div><table class="" data-astro-cid-mfwtwtu3><thead data-astro-cid-mfwtwtu3><tr data-astro-cid-mfwtwtu3><th data-astro-cid-mfwtwtu3>Nama</th><th data-astro-cid-mfwtwtu3>Kategori</th><th data-astro-cid-mfwtwtu3>Harga (Panas)</th><th data-astro-cid-mfwtwtu3>Harga (Dingin)</th><th data-astro-cid-mfwtwtu3>Action</th></tr></thead><tbody data-astro-cid-mfwtwtu3>${data?.map((menu) => renderTemplate`<tr data-astro-cid-mfwtwtu3><td data-astro-cid-mfwtwtu3>${menu.nama}</td><td data-astro-cid-mfwtwtu3>${kategori.map((kat) => {
    if (kat.id == menu.kategori_id) {
      return kat.nama_kategori;
    }
  })}</td><td data-astro-cid-mfwtwtu3>${menu.harga_panas}</td><td data-astro-cid-mfwtwtu3>${menu.harga_dingin}</td><td data-astro-cid-mfwtwtu3>${renderComponent($$result3, "Link", $$Link, { "clsPrimary": "true", "href": `/admin/menu/addMenu/${menu.id}`, "data-astro-cid-mfwtwtu3": true }, { "default": ($$result4) => renderTemplate`
Edit
` })}<span data-astro-cid-mfwtwtu3>|</span><button${addAttribute(menu.id, "value")} class="action" id="delete" data-astro-cid-mfwtwtu3>
Delete
</button></td></tr>`)}<!-- Add your table rows here --></tbody></table>` })}` })}${renderComponent($$result, "Modal", $$Modal, { "id": "modal-delete", "data-astro-cid-mfwtwtu3": true }, { "default": ($$result2) => renderTemplate`<h3 class="text-lg text-zinc-100 text-center" data-astro-cid-mfwtwtu3>Are you Sure?</h3><div class="flex gap-x-4 pt-8 justify-center" data-astro-cid-mfwtwtu3><form method="dialog" data-astro-cid-mfwtwtu3><button class="text-white hover:text-blue-400" data-astro-cid-mfwtwtu3>Close</button></form><form method="post" data-astro-cid-mfwtwtu3><input type="hidden" name="id" data-astro-cid-mfwtwtu3><button class="text-white hover:text-red-400" data-astro-cid-mfwtwtu3>Delete</button></form></div>` })}`;
}, "C:/Users/ogaa/Desktop/project-kp/project-jima-coffee/src/pages/admin/menu/index.astro", void 0);

const $$file$5 = "C:/Users/ogaa/Desktop/project-kp/project-jima-coffee/src/pages/admin/menu/index.astro";
const $$url$5 = "/admin/menu";

const index$5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$5,
  file: $$file$5,
  url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const pageids = [
  { pageName: "Dashboard", icon: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 -960 960 960", width: "24px", fill: "#5f6368", children: /* @__PURE__ */ jsx("path", { d: "M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" }) }) },
  { pageName: "Transaction", icon: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 -960 960 960", width: "24px", fill: "#5f6368", children: /* @__PURE__ */ jsx("path", { d: "M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z" }) }) },
  { pageName: "Menu", icon: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 -960 960 960", width: "24px", fill: "#5f6368", children: /* @__PURE__ */ jsx("path", { d: "M440-240q-117 0-198.5-81.5T160-520v-240q0-33 23.5-56.5T240-840h500q58 0 99 41t41 99q0 58-41 99t-99 41h-20v40q0 117-81.5 198.5T440-240ZM240-640h400v-120H240v120Zm200 320q83 0 141.5-58.5T640-520v-40H240v40q0 83 58.5 141.5T440-320Zm280-320h20q25 0 42.5-17.5T800-700q0-25-17.5-42.5T740-760h-20v120ZM160-120v-80h640v80H160Zm280-440Z" }) }) },
  { pageName: "Report", icon: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 -960 960 960", width: "24px", fill: "#5f6368", children: /* @__PURE__ */ jsx("path", { d: "M240-80q-50 0-85-35t-35-85v-120h120v-560l60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60v680q0 50-35 85t-85 35H240Zm480-80q17 0 28.5-11.5T760-200v-560H320v440h360v120q0 17 11.5 28.5T720-160ZM360-600v-80h240v80H360Zm0 120v-80h240v80H360Zm320-120q-17 0-28.5-11.5T640-640q0-17 11.5-28.5T680-680q17 0 28.5 11.5T720-640q0 17-11.5 28.5T680-600Zm0 120q-17 0-28.5-11.5T640-520q0-17 11.5-28.5T680-560q17 0 28.5 11.5T720-520q0 17-11.5 28.5T680-480ZM240-160h360v-80H200v40q0 17 11.5 28.5T240-160Zm-40 0v-80 80Z" }) }) },
  { pageName: "Logout", icon: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 -960 960 960", width: "24px", fill: "#5f6368", children: /* @__PURE__ */ jsx("path", { d: "M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" }) }) }
];

const Sidebar = ({ activeComponent, onItemClick }) => {
  return /* @__PURE__ */ jsxs("div", { className: "bg-[#d1d1d3] p-2 gap-2 grid grid-rows-4 h-screen w-1/2 lg:w-1/5  ", children: [
    /* @__PURE__ */ jsx("header", { className: "w-full rounded-md grid place-content-center border border-[#d1d1d3] bg-[#fefefe]", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center items-center", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          className: "h-[80px] w-[80px] object-cover rounded-full",
          src: "src\\assets\\images\\b42e38.png",
          alt: ""
        }
      ),
      /* @__PURE__ */ jsx("h1", { children: "Jima Coffee" })
    ] }) }),
    /* @__PURE__ */ jsx("main", { className: "row-span-3 border border-[#d1d1d3] bg-[#fefefe] rounded-md", children: /* @__PURE__ */ jsx("nav", { className: " h-full", children: /* @__PURE__ */ jsx("ul", { className: "h-full grid justify-items-start items-center grid-rows-5", children: pageids.map((pageid, index) => /* @__PURE__ */ jsxs(
      "li",
      {
        onClick: () => onItemClick(pageid.pageName),
        className: `p-2 h-full flex gap-3 justify-start items-center cursor-pointer w-full ${activeComponent === pageid.pageName ? "bg-[#e2e2e4]" : "hover:bg-gray-200 hover:text-black"}`,
        children: [
          /* @__PURE__ */ jsx("span", { children: pageid.icon }),
          pageid.pageName
        ]
      },
      index
    )) }) }) }),
    /* @__PURE__ */ jsx("footer", { className: "bg-[#fefefe] border border-[#d1d1d3] min-h-20  rounded-md", children: /* @__PURE__ */ jsx("p", { className: "text-center", children: "All rights reserved" }) })
  ] });
};

const Dashboard = () => {
  const [date, setDate] = useState(/* @__PURE__ */ new Date());
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [total, setTotal] = useState(0);
  const handleSelect = (order) => {
    setSelectedOrder(order);
    setTotal(order.total);
  };
  useEffect(() => {
    const timer = setInterval(() => setDate(/* @__PURE__ */ new Date()), 1e3);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  function generateTransactionId() {
    const randomNumber = Math.floor(1e5 + Math.random() * 9e5);
    return randomNumber.toString();
  }
  const updateStatus = async (orderId) => {
    const response = await fetch("api/getOrders.json", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: orderId,
        status: "Selesai"
      })
    });
    if (response.ok) {
      const id = generateTransactionId();
      const order_id = orderId;
      const tanggal = date;
      const data = { id, tanggal, order_id };
      const response2 = await fetch("api/getTransaksi.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      if (response2.ok) {
        console.log("Transaction created");
      }
      const updatedOrders = orders.map((order) => {
        if (order.id === orderId) {
          return { ...order, status: "Selesai" };
        }
        return order;
      });
      setOrders(updatedOrders);
      setSelectedOrder(null);
      setTotal(0);
    }
  };
  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch("api/getOrders.json");
      const data = await response.json();
      setOrders(data.data);
    };
    fetchOrders();
    const interval = setInterval(fetchOrders, 5e3);
    return () => clearInterval(interval);
  }, []);
  if (orders.length === 0) {
    return /* @__PURE__ */ jsx("div", { className: "rounded-md border place-content-center grid border-[#d1d1d3] bg-[#fefefe] h-full row-span-6", children: /* @__PURE__ */ jsx("h1", { className: " text-xl", children: "Loading..." }) });
  }
  return /* @__PURE__ */ jsxs("div", { className: "rounded-md border grid grid-rows-11 gap-1 border-[#d1d1d3] p-2 bg-[#fefefe] h-full row-span-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "border flex gap-2 bg-[#e2e2e4] rounded-t-md p-2", children: [
      /* @__PURE__ */ jsx("h1", { children: "Orders today " }),
      /* @__PURE__ */ jsxs("h3", { className: "bg-white rounded-sm px-1", children: [
        "📅",
        date.toLocaleDateString()
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "row-span-10 grid grid-cols-3 gap-1", children: [
      /* @__PURE__ */ jsx("div", { className: "border-[#d1d1d3] rounded-sm border bg-white col-span-2 h-full", children: /* @__PURE__ */ jsxs("table", { className: "rounded-sm", children: [
        /* @__PURE__ */ jsx("thead", { className: "bg-[#e1dbd6]", children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { children: "Order ID" }),
          /* @__PURE__ */ jsx("th", { children: "Customer Name" }),
          /* @__PURE__ */ jsx("th", { children: "Table Number" }),
          /* @__PURE__ */ jsx("th", { children: "Status Pembayaran" }),
          /* @__PURE__ */ jsx("th", { children: "Status Pesanan" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { className: "overflow-auto", children: orders.map((order) => /* @__PURE__ */ jsxs(
          "tr",
          {
            className: `hover:bg-gray-300 ${selectedOrder?.id === order.id ? "bg-gray-200" : ""}`,
            onClick: () => handleSelect(order),
            children: [
              /* @__PURE__ */ jsx("td", { children: order.id }),
              /* @__PURE__ */ jsx("td", { children: order.customer_detail.name }),
              /* @__PURE__ */ jsx("td", { children: order.table }),
              /* @__PURE__ */ jsx("td", { children: order.status_pembayaran }),
              /* @__PURE__ */ jsx("td", { children: order.status_pesanan })
            ]
          },
          order.id
        )) })
      ] }) }),
      !selectedOrder ? /* @__PURE__ */ jsx("div", { className: "grid place-content-center border bg-white p-3", children: /* @__PURE__ */ jsx("h1", { children: "Silahkan Pilih Orderan" }) }) : selectedOrder && /* @__PURE__ */ jsxs("div", { className: "border rounded-sm bg-[#fefefe] p-3", children: [
        /* @__PURE__ */ jsxs("h1", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ jsx("span", { children: "Order Details " }),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "bg-green-600 p-1 rounded-md text-white",
              onClick: () => {
                updateStatus(selectedOrder.id);
              },
              children: "Tandai Selesai"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid  grid-rows-3 gap-2 ", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-2 border-y row-span-2", children: [
            /* @__PURE__ */ jsx("h1", { children: "Item Details :" }),
            /* @__PURE__ */ jsx("ul", { className: "px-2 overflow-y-auto", children: selectedOrder.item_detail.map((item) => /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxs("li", { children: [
                item.name,
                " x ",
                item.quantity
              ] }, item.id),
              /* @__PURE__ */ jsx("p", { children: (item.price * item.quantity).toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR"
              }) })
            ] }, item.id)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-2 border-b", children: [
            /* @__PURE__ */ jsx("h1", { children: "Customer Details :" }),
            /* @__PURE__ */ jsxs("ul", { className: "px-2", children: [
              /* @__PURE__ */ jsxs("li", { children: [
                "Name:",
                " ",
                selectedOrder.customer_detail.first_name,
                " ",
                selectedOrder.customer_detail.last_name
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                "Email: ",
                selectedOrder.customer_detail.email
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                "Phone: ",
                selectedOrder.customer_detail.phone
              ] })
            ] }, selectedOrder.id)
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-1 flex justify-between", children: [
          /* @__PURE__ */ jsx("h1", { children: "Total : " }),
          /* @__PURE__ */ jsx("h3", { children: total.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR"
          }) })
        ] })
      ] })
    ] })
  ] });
};

const Transaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const handleSearch = () => {
    setFilteredTransactions(
      transactions.filter((transaksi) => transaksi.tanggal.includes(search))
    );
  };
  const getOrderById = async (orderId) => {
    const { data, error } = await supabase.from("order").select("*").eq("id", orderId);
    if (error) {
      console.error("Error fetching order data:", error.message);
      return;
    }
    setSelectedOrder(data[0]);
  };
  useEffect(() => {
    const fetchTransactions = async () => {
      const response = await fetch("api/getTransaksi.json");
      const data = await response.json();
      setTransactions(data.data);
      setFilteredTransactions(data.data);
      setLoading(false);
    };
    fetchTransactions();
  }, []);
  if (loading) {
    return /* @__PURE__ */ jsx("div", { className: "rounded-md border place-content-center grid border-[#d1d1d3] bg-[#fefefe] h-full row-span-6", children: /* @__PURE__ */ jsx("h1", { className: " text-xl", children: "Loading..." }) });
  }
  return /* @__PURE__ */ jsxs("div", { className: "rounded-md border grid grid-rows-11 gap-1 border-[#d1d1d3] p-2 bg-[#fefefe] h-full row-span-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "border flex gap-2 bg-[#e2e2e4] rounded-t-md p-2", children: [
      /* @__PURE__ */ jsx("p", { children: "Cari Berdasarkan Tanggal Transaksi " }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "date",
          name: "date",
          id: "date",
          className: "py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent",
          required: true,
          value: search,
          onChange: (e) => setSearch(e.target.value)
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "bg-[#6f0000] hover:bg-[#9c0000] rounded-md",
          onClick: handleSearch,
          children: /* @__PURE__ */ jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              height: "24px",
              viewBox: "0 -960 960 960",
              width: "24px",
              fill: "#fefefe",
              children: /* @__PURE__ */ jsx("path", { d: "M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" })
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "row-span-10 grid grid-cols-3 gap-1", children: [
      /* @__PURE__ */ jsx("div", { className: "border-[#d1d1d3] rounded-sm border bg-white col-span-2 h-full", children: /* @__PURE__ */ jsxs("table", { className: "rounded-sm w-full", children: [
        /* @__PURE__ */ jsx("thead", { className: "bg-[#e1dbd6]", children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { children: "Transaksi ID" }),
          /* @__PURE__ */ jsx("th", { children: "Tanggal Transaksi" }),
          /* @__PURE__ */ jsx("th", { children: "Order ID" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { className: "overflow-auto", children: filteredTransactions.length === 0 ? /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: "3", children: "Tidak ada transaksi" }) }) : filteredTransactions.map((transaksi) => /* @__PURE__ */ jsxs(
          "tr",
          {
            className: `hover:bg-gray-300 ${selectedOrder?.id === transaksi.order_id ? "bg-gray-200" : ""}`,
            onClick: () => getOrderById(transaksi.order_id),
            children: [
              /* @__PURE__ */ jsx("td", { children: transaksi.id }),
              /* @__PURE__ */ jsx("td", { children: new Date(
                transaksi.tanggal
              ).toLocaleDateString("en-GB") }),
              /* @__PURE__ */ jsx("td", { children: transaksi.order_id })
            ]
          },
          transaksi.id
        )) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "col-span-1 border border-[#d1d1d3] rounded-sm bg-white h-full p-4 text-sm", children: selectedOrder && filteredTransactions.length > 0 ? /* @__PURE__ */ jsxs("div", { className: "flex flex-col h-full", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-center text-base font-semibold mb-4", children: "Detail Order" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 flex-grow", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-b pb-2", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { children: "Order ID:" }),
              /* @__PURE__ */ jsx("p", { children: "Tanggal Order:" }),
              /* @__PURE__ */ jsx("p", { children: "Nama Customer:" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsx("p", { children: selectedOrder.id }),
              /* @__PURE__ */ jsx("p", { children: new Date(
                selectedOrder.created_at
              ).toLocaleDateString("en-GB") }),
              /* @__PURE__ */ jsx("p", { children: selectedOrder.customer_detail.name })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border-b pb-2 flex-grow overflow-auto", children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold mb-2", children: "Item:" }),
            /* @__PURE__ */ jsxs("table", { className: "w-full text-left", children: [
              /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
                /* @__PURE__ */ jsx("th", { className: "py-1", children: "Nama" }),
                /* @__PURE__ */ jsx("th", { className: "py-1 text-right", children: "Harga" }),
                /* @__PURE__ */ jsx("th", { className: "py-1 text-right", children: "Jumlah" })
              ] }) }),
              /* @__PURE__ */ jsx("tbody", { children: selectedOrder.item_detail.map((item) => /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
                /* @__PURE__ */ jsx("td", { className: "py-1", children: item.name }),
                /* @__PURE__ */ jsx("td", { className: "py-1 text-right", children: item.price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR"
                }) }),
                /* @__PURE__ */ jsx("td", { className: "py-1 text-right", children: item.quantity })
              ] }, item.id)) })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxs("p", { className: "text-right font-semibold", children: [
            "Total:",
            " ",
            selectedOrder.total.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR"
            })
          ] }) })
        ] })
      ] }) : /* @__PURE__ */ jsx("div", { className: "grid place-content-center h-full bg-white p-3", children: /* @__PURE__ */ jsx("h1", { children: "Pilih transaksi untuk melihat detail orderan" }) }) })
    ] })
  ] });
};

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen)
    return null;
  return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center", children: /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/3 relative", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "absolute top-0 text-2xl right-0 mt-2 mr-2 text-gray-600 hover:text-gray-900",
        onClick: onClose,
        children: "×"
      }
    ),
    children
  ] }) });
};

const Menu = () => {
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [menus, setMenu] = useState([]);
  const [kategori, setKategori] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const handleDeleteClick = (id) => {
    setSelectedId(id);
    setIsModalDeleteOpen(true);
  };
  const handleAddClick = () => {
    setIsModalAddOpen(true);
  };
  const handleEditClick = (id) => {
    setSelectedId(id);
    setIsModalEditOpen(true);
  };
  const uploadStream = async (buffer, option) => {
    const { data, error: error2 } = await supabase.storage.from("images").upload(option.path, buffer, {
      cacheControl: "3600",
      upsert: false
    });
    if (error2) {
      console.log(error2);
    }
  };
  const handleEditSubmit = async (id) => {
    const form = document.querySelector("form");
    const formData = new FormData(form);
    const file = document.getElementById("image").files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function() {
        const img = new Image();
        img.src = reader.result;
        img.onload = async function() {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          canvas.width = 500;
          canvas.height = 500;
          ctx.drawImage(img, 0, 0, 500, 500);
          const dataUrl = canvas.toDataURL("image/jpeg");
          const blobBin = atob(dataUrl.split(",")[1]);
          const array = [];
          for (let i = 0; i < blobBin.length; i++) {
            array.push(blobBin.charCodeAt(i));
          }
          const fileBlob = new Blob([new Uint8Array(array)], {
            type: "image/jpeg"
          });
          await uploadStream(fileBlob, { path: `images/${file.name}` });
          const imageurl = `https://wxnmwtambphlaobvcbaa.supabase.co/storage/v1/object/public/images/images/${file.name}`;
          formData.append("imageurl", imageurl);
          await submitFormData(id, formData);
        };
      };
    } else {
      await submitFormData(id, formData);
    }
  };
  const submitFormData = async (id, formData) => {
    const objData = Object.fromEntries(formData);
    objData.id = id;
    try {
      const res = await fetch("api/addMenu.json", {
        method: "PUT",
        body: JSON.stringify(objData)
      });
      const resData = await res.json();
      if (resData.success) {
        alert("Data berhasil diubah");
      } else {
        alert("Data gagal diubah");
      }
    } catch (error2) {
      console.error("Error updating data:", error2);
    } finally {
      handleCloseAddModal();
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = document.querySelector("form");
    const formData = new FormData(form);
    const file = document.getElementById("image").files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
      const img = new Image();
      img.src = reader.result;
      img.onload = function() {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = 500;
        canvas.height = 500;
        ctx.drawImage(img, 0, 0, 500, 500);
        const dataUrl = canvas.toDataURL("image/jpeg");
        const blobBin = atob(dataUrl.split(",")[1]);
        const array = [];
        for (let i = 0; i < blobBin.length; i++) {
          array.push(blobBin.charCodeAt(i));
        }
        const fileBlob = new Blob([new Uint8Array(array)], {
          type: "image/jpeg"
        });
        uploadStream(fileBlob, { path: `images/${file.name}` });
      };
    };
    const imageurl = `https://wxnmwtambphlaobvcbaa.supabase.co/storage/v1/object/public/images/images/${file.name}`;
    formData.append("imageurl", imageurl);
    const objData = Object.fromEntries(formData);
    try {
      const res = await fetch("api/addMenu.json", {
        method: "POST",
        body: JSON.stringify(objData)
      });
      const resData = await res.json();
      if (resData.success) {
        alert("Data berhasil ditambahkan");
      } else {
        alert("Data gagal ditambahkan");
      }
    } catch (error2) {
    } finally {
      handleCloseAddModal();
    }
  };
  const handleCloseDeleteModal = () => {
    setIsModalDeleteOpen(false);
    setSelectedId(null);
  };
  const handleCloseAddModal = () => {
    setIsModalAddOpen(false);
  };
  const handleCloseEditModal = () => {
    setIsModalEditOpen(false);
  };
  const handleReloadClick = async () => {
    try {
      const response = await fetch("api/getMenus.json");
      const data = await response.json();
      setMenu(data.data);
    } catch (error2) {
    }
  };
  const handleDelete = async () => {
    try {
      const res = await fetch("api/deleteMenu.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ id: selectedId })
      });
      const resData = await res.json();
      if (resData.success) {
        setMenu(menus.filter((menu) => menu.id !== selectedId));
        alert("Data berhasil dihapus");
      } else {
        alert("Data gagal dihapus");
      }
    } catch (error2) {
    } finally {
      handleCloseDeleteModal();
    }
  };
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch("api/getMenus.json");
        const data = await response.json();
        setMenu(data.data);
        setLoading(false);
      } catch (error2) {
        setError(error2);
        setLoading(false);
      }
    };
    const fetchKategori = async () => {
      try {
        const response = await fetch("api/getKategori.json");
        const data = await response.json();
        setKategori(data.data);
        setLoading(false);
      } catch (error2) {
        setError(error2);
        setLoading(false);
      }
    };
    fetchMenu();
    fetchKategori();
  }, []);
  if (loading)
    return /* @__PURE__ */ jsx("div", { className: "rounded-md border border-[#d1d1d3] bg-[#fefefe] h-full grid place-content-center p-3 row-span-6", children: "Loading..." });
  if (error)
    return /* @__PURE__ */ jsxs("div", { children: [
      "Error: ",
      error.message
    ] });
  return /* @__PURE__ */ jsxs("div", { className: "rounded-md border grid grid-rows-11 border-[#d1d1d3] bg-[#fefefe] h-full p-3 row-span-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-2 flex gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleAddClick,
          className: "bg-[#d1d1d3] border border-black text-sm p-2 rounded-lg",
          children: "➕ Add Menu"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleReloadClick,
          className: "bg-[#d1d1d3]  border border-black text-sm p-2 rounded-lg",
          children: "🔄 Reload"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "row-span-10", children: /* @__PURE__ */ jsxs("table", { className: "max-h-max", children: [
      /* @__PURE__ */ jsx("thead", { className: "text-sm", children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { children: "Nama" }),
        /* @__PURE__ */ jsx("th", { children: "Kategori" }),
        /* @__PURE__ */ jsx("th", { children: "Harga (Panas)" }),
        /* @__PURE__ */ jsx("th", { children: "Harga (Dingin)" }),
        /* @__PURE__ */ jsx("th", { children: "Action" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: menus.map((menu) => /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("td", { children: menu.nama }),
        /* @__PURE__ */ jsx("td", { children: kategori.find((kat) => kat.id === menu.kategori_id)?.nama_kategori || "Unknown" }),
        /* @__PURE__ */ jsx("td", { children: menu.harga_panas }),
        /* @__PURE__ */ jsx("td", { children: menu.harga_dingin }),
        /* @__PURE__ */ jsxs("td", { children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => handleEditClick(menu.id),
              className: "action",
              id: "edit",
              children: "Edit"
            }
          ),
          /* @__PURE__ */ jsx("span", { children: "|" }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => handleDeleteClick(menu.id),
              className: "action",
              id: "delete",
              children: "Delete"
            }
          )
        ] })
      ] }, menu.id)) })
    ] }) }),
    /* @__PURE__ */ jsx(Modal, { isOpen: isModalAddOpen, onClose: handleCloseAddModal, children: /* @__PURE__ */ jsx("div", { className: "modal-container", children: /* @__PURE__ */ jsxs("div", { className: "modal-content bg-white p-4 rounded-lg shadow-md", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-2", children: "Tambah Menu" }),
      /* @__PURE__ */ jsxs("form", { children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              className: "block text-gray-600",
              htmlFor: "nama-menu",
              children: "Nama Menu:"
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              name: "nama",
              type: "text",
              id: "nama-menu",
              className: "block w-full p-2 pl-10 text-gray-700",
              placeholder: "Masukkan nama menu"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              className: "block text-gray-600",
              htmlFor: "kategori",
              children: "Kategori:"
            }
          ),
          /* @__PURE__ */ jsx(
            "select",
            {
              className: "text-black",
              id: "kategori",
              name: "kategori_id",
              children: kategori.map((item) => {
                return /* @__PURE__ */ jsx(
                  "option",
                  {
                    className: "text-black",
                    value: item.id,
                    children: item.nama_kategori
                  },
                  item.id
                );
              })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              className: "block text-gray-600",
              htmlFor: "harga-dingin",
              children: "Harga Dingin:"
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              name: "harga_dingin",
              type: "number",
              id: "harga-dingin",
              className: "block w-full p-2 pl-10 text-gray-700",
              placeholder: "Masukkan harga dingin"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              className: "block text-gray-600",
              htmlFor: "harga-panas",
              children: "Harga Panas:"
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              name: "harga_panas",
              type: "number",
              id: "harga-panas",
              className: "block w-full p-2 pl-10 text-gray-700",
              placeholder: "Masukkan harga panas"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx("label", { className: "block text-gray-600", htmlFor: "image", children: "Gambar:" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              name: "image",
              type: "file",
              id: "image",
              className: "block w-full p-2 pl-10 text-gray-700"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded",
            onClick: handleSubmit,
            children: "Simpan"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded ml-2",
            onClick: handleCloseAddModal,
            children: "Batal"
          }
        )
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx(Modal, { isOpen: isModalEditOpen, onClose: handleCloseEditModal, children: /* @__PURE__ */ jsx("div", { className: "modal-container", children: /* @__PURE__ */ jsxs("div", { className: "modal-content bg-white p-4 rounded-lg shadow-md", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-2", children: "Tambah Menu" }),
      menus.map(
        (menu) => (
          //get menu by id
          menu.id === selectedId && /* @__PURE__ */ jsxs("form", { action: "", children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "hidden",
                  name: "id",
                  defaultValue: menu.id
                }
              ),
              /* @__PURE__ */ jsx(
                "label",
                {
                  className: "block text-gray-600",
                  htmlFor: "nama-menu",
                  children: "Nama Menu:"
                }
              ),
              /* @__PURE__ */ jsx(
                "input",
                {
                  defaultValue: menu.nama,
                  name: "nama",
                  type: "text",
                  id: "nama-menu",
                  className: "block w-full p-2 pl-10 text-gray-700",
                  placeholder: "Masukkan nama menu"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
              /* @__PURE__ */ jsx(
                "label",
                {
                  className: "block text-gray-600",
                  htmlFor: "kategori",
                  children: "Kategori:"
                }
              ),
              /* @__PURE__ */ jsx(
                "select",
                {
                  defaultValue: menu.kategori_id,
                  className: "text-black",
                  id: "kategori",
                  name: "kategori_id",
                  children: kategori.map((item) => {
                    return /* @__PURE__ */ jsx(
                      "option",
                      {
                        className: "text-black",
                        value: item.id,
                        children: item.nama_kategori
                      },
                      item.id
                    );
                  })
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
              /* @__PURE__ */ jsx(
                "label",
                {
                  className: "block text-gray-600",
                  htmlFor: "harga-dingin",
                  children: "Harga Dingin:"
                }
              ),
              /* @__PURE__ */ jsx(
                "input",
                {
                  defaultValue: menu.harga_dingin,
                  name: "harga_dingin",
                  type: "number",
                  id: "harga-dingin",
                  className: "block w-full p-2 pl-10 text-gray-700",
                  placeholder: "Masukkan harga dingin"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
              /* @__PURE__ */ jsx(
                "label",
                {
                  className: "block text-gray-600",
                  htmlFor: "harga-panas",
                  children: "Harga Panas:"
                }
              ),
              /* @__PURE__ */ jsx(
                "input",
                {
                  defaultValue: menu.harga_panas,
                  name: "harga_panas",
                  type: "number",
                  id: "harga-panas",
                  className: "block w-full p-2 pl-10 text-gray-700",
                  placeholder: "Masukkan harga panas"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
              /* @__PURE__ */ jsx(
                "label",
                {
                  className: "block text-gray-600",
                  htmlFor: "image",
                  children: "Gambar:"
                }
              ),
              /* @__PURE__ */ jsx(
                "input",
                {
                  name: "image",
                  type: "file",
                  id: "image",
                  className: "block w-full p-2 pl-10 text-gray-700"
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded",
                onClick: () => handleEditSubmit(menu.id),
                children: "Simpan"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded ml-2",
                onClick: handleCloseEditModal,
                children: "Batal"
              }
            )
          ] }, menu.id)
        )
      )
    ] }) }) }),
    /* @__PURE__ */ jsx(Modal, { isOpen: isModalDeleteOpen, onClose: handleCloseDeleteModal, children: /* @__PURE__ */ jsx("div", { className: "modal-container", children: /* @__PURE__ */ jsxs("div", { className: "modal-content bg-white p-4 rounded-lg shadow-md", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-2", children: "Konfirmasi Penghapusan" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: "Apakah Anda yakin ingin menghapus item ini?" }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-end", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded",
            onClick: handleDelete,
            children: "Ya, hapus"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded ml-2",
            onClick: handleCloseDeleteModal,
            children: "Batal"
          }
        )
      ] })
    ] }) }) })
  ] });
};

const Report = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [salesReport, setSalesReport] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const start = startDate + "T00:00:00";
    const end = endDate + "T23:59:59";
    const { data: transactions, error: transactionError } = await supabase.from("transaksi").select("*").gte("tanggal", start).lte("tanggal", end);
    if (transactionError) {
      console.error(
        "Error fetching transactions:",
        transactionError.message
      );
      setLoading(false);
      return;
    }
    const orderIds = transactions.map((transaction) => transaction.order_id);
    const { data: orders, error: orderError } = await supabase.from("order").select("*").in("id", orderIds);
    if (orderError) {
      console.error("Error fetching orders:", orderError.message);
      setLoading(false);
      return;
    }
    const combinedReport = transactions.map((transaction) => {
      const order = orders.find((o) => o.id === transaction.order_id);
      return {
        ...transaction,
        order,
        totalTransactions: order.item_detail.length,
        total: order.item_detail.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        )
      };
    });
    setSalesReport(combinedReport);
    setLoading(false);
  };
  return /* @__PURE__ */ jsxs("div", { className: "rounded-md border border-[#e1dbd6] bg-[#fefefe] h-full p-3 gap-1 grid row-span-6 grid-cols-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "w-full h-full bg-[#f9f6f2] border border-[#e2e2e4] p-5", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-4 text-lg font-semibold", children: "Pilih Periode" }),
      /* @__PURE__ */ jsxs(
        "form",
        {
          onSubmit: handleSubmit,
          className: "max-w-md p-3 bg-white rounded shadow-md",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
              /* @__PURE__ */ jsxs("label", { className: "block mb-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: "Tanggal Mulai:" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "date",
                    value: startDate,
                    onChange: (e) => setStartDate(e.target.value),
                    required: true,
                    className: "block w-full p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("label", { className: "block mb-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: "Tanggal Akhir:" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "date",
                    value: endDate,
                    onChange: (e) => setEndDate(e.target.value),
                    required: true,
                    className: "block w-full p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                className: "mt-4 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded",
                disabled: loading,
                children: loading ? "Loading..." : "Cari Data"
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white text-sm p-3 grid grid-rows-6 col-span-3", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-center border-b mb-4 text-lg font-semibold", children: [
        "Laporan Penjualan",
        /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
          "Periode ",
          startDate ? new Date(startDate).toLocaleDateString("id-ID") : "/",
          " - ",
          " ",
          endDate ? new Date(endDate).toLocaleDateString("id-ID") : "/"
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "row-span-5 overflow-auto", children: salesReport.length ? /* @__PURE__ */ jsxs("table", { className: "min-w-full text-center bg-white", children: [
        /* @__PURE__ */ jsx("thead", { className: "bg-gray-800 text-white", children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { className: "py-2 px-4", children: "Transaksi ID" }),
          /* @__PURE__ */ jsx("th", { className: "py-2 px-4", children: "Tanggal" }),
          /* @__PURE__ */ jsx("th", { className: "py-2 px-4", children: "Order ID" }),
          /* @__PURE__ */ jsx("th", { className: "py-2 px-4", children: "Nama Customer" }),
          /* @__PURE__ */ jsx("th", { className: "py-2 px-4", children: "Nama Produk" }),
          /* @__PURE__ */ jsx("th", { className: "py-2 px-4", children: "Jumlah" }),
          /* @__PURE__ */ jsx("th", { className: "py-2 px-4", children: "Harga(Rp.)" }),
          /* @__PURE__ */ jsx("th", { className: "py-2 px-4", children: "Total(Rp.)" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { className: "text-gray-700 max-h-[280px]", children: salesReport.map(
          (report) => report.order.item_detail.map((item, index) => /* @__PURE__ */ jsxs(
            "tr",
            {
              className: "border-b",
              children: [
                /* @__PURE__ */ jsx("td", { className: "py-2 px-4 text-center", children: report.id }),
                /* @__PURE__ */ jsx("td", { className: "py-2 px-4 text-center", children: new Date(
                  report.tanggal
                ).toLocaleDateString("id-ID") }),
                /* @__PURE__ */ jsx("td", { className: "py-2 px-4 text-center", children: report.order.id }),
                /* @__PURE__ */ jsx("td", { className: "py-2 px-4 text-center", children: report.order.customer_detail.first_name }),
                /* @__PURE__ */ jsx("td", { className: "py-2 px-4 text-center", children: item.name }),
                /* @__PURE__ */ jsx("td", { className: "py-2 px-4 text-center", children: item.quantity }),
                /* @__PURE__ */ jsx("td", { className: "py-2 px-4 text-center", children: item.price }),
                /* @__PURE__ */ jsx("td", { className: "py-2 px-4 text-center", children: item.price * item.quantity })
              ]
            },
            `${report.id}-${item.id}-${index}`
          ))
        ) })
      ] }) : /* @__PURE__ */ jsx("p", { className: "text-center mt-4", children: "Tidak ada data" }) }),
      /* @__PURE__ */ jsx("div", { className: "text-center row-span-1 mt-4", children: /* @__PURE__ */ jsx("button", { className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded", children: "Cetak Laporan" }) })
    ] })
  ] });
};

const Datetime = () => {
  const [date, setDate] = useState(/* @__PURE__ */ new Date());
  useEffect(() => {
    const timer = setInterval(() => setDate(/* @__PURE__ */ new Date()), 1e3);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  return /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-flow-rows text-left gap-1  bg-white p-2 py-1 text-sm", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsxs("h3", { children: [
        "Hari ",
        date.toLocaleDateString("id-ID", { weekday: "long" }),
        ","
      ] }),
      /* @__PURE__ */ jsxs("h2", { children: [
        "Tanggal ",
        date.toLocaleDateString("en-GB")
      ] })
    ] }),
    /* @__PURE__ */ jsxs("h1", { children: [
      "Jam",
      " ",
      date.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit"
      })
    ] })
  ] }) });
};

const Admin = () => {
  const [activeComponent, setActiveComponent] = useState("Dashboard");
  useState(false);
  const handleItemClick = (componentName) => {
    setActiveComponent(componentName);
  };
  const handleLogout = async () => {
    try {
      const response = await fetch("/api/logout.json", {
        method: "POST"
      });
      if (response.ok) {
        window.location.href = "/login";
      } else {
        console.error("Logout failed:", response.statusText);
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex", children: [
    /* @__PURE__ */ jsx(
      Sidebar,
      {
        activeComponent,
        onItemClick: handleItemClick
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "bg-[#d1d1d3] grid grid-rows-7 gap-2 w-full h-screen p-2", children: [
      /* @__PURE__ */ jsxs("header", { className: "w-full grid grid-cols-5 px-3 rounded-md border border-[#d1d1d3] bg-[#fefefe]", children: [
        /* @__PURE__ */ jsx("div", { className: "flex gap-3 col-span-3 items-center  p-2", children: /* @__PURE__ */ jsx("h1", { children: "Welcome" }) }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center ", children: /* @__PURE__ */ jsx(Datetime, {}) }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2 justify-center items-center", children: [
          /* @__PURE__ */ jsx("h1", { children: "Admin" }),
          /* @__PURE__ */ jsx("button", { onClick: () => {
            handleLogout();
          }, children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 -960 960 960", width: "24px", fill: "#5f6368", children: /* @__PURE__ */ jsx("path", { d: "M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" }) }) })
        ] })
      ] }),
      activeComponent === "Dashboard" && /* @__PURE__ */ jsx(Dashboard, {}),
      activeComponent === "Transaction" && /* @__PURE__ */ jsx(Transaction, {}),
      activeComponent === "Menu" && /* @__PURE__ */ jsx(Menu, {}),
      activeComponent === "Report" && /* @__PURE__ */ jsx(Report, {})
    ] })
  ] });
};

const $$Index$4 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "admin page", "data-astro-cid-u2h3djql": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Admin", Admin, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ogaa/Desktop/project-kp/project-jima-coffee/src/components/Admin", "client:component-export": "default", "data-astro-cid-u2h3djql": true })} ` })} `;
}, "C:/Users/ogaa/Desktop/project-kp/project-jima-coffee/src/pages/admin/index.astro", void 0);

const $$file$4 = "C:/Users/ogaa/Desktop/project-kp/project-jima-coffee/src/pages/admin/index.astro";
const $$url$4 = "/admin";

const index$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$4,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Index$3 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "checkout" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid min-h-screen place-content-center text-center"> <h1>Pembayaran berhasil</h1> <p>pesanan akan segera di proses!</p> <p>Terima Kasih 😊</p> </div> ` })}`;
}, "C:/Users/ogaa/Desktop/project-kp/project-jima-coffee/src/pages/checkout/index.astro", void 0);

const $$file$3 = "C:/Users/ogaa/Desktop/project-kp/project-jima-coffee/src/pages/checkout/index.astro";
const $$url$3 = "/checkout";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$3,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

// src/stores/cartStore.js

const isCartOpen = atom(false);
const cartItems = atom([]);

const addItemToCart = (item) => {
    const currentItems = cartItems.get();
    const itemIndex = currentItems.findIndex(cartItem => cartItem.id === item.id);
    
    if (itemIndex !== -1) {
        // Item sudah ada di keranjang, perbarui quantity
        const updatedItems = currentItems.map(cartItem =>
            cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
        cartItems.set(updatedItems);
    } else {
        // Item tidak ada di keranjang, tambahkan dengan quantity 1
        cartItems.set([...currentItems, { ...item, quantity: 1 }]);
    }

    console.log("cartItems", cartItems.get());
};

const removeItemFromCart = (itemId) => {
    cartItems.set(cartItems.get().filter(item => item.id !== itemId));
};

const Keranjang = () => {
  const [table, setTable] = useState(0);
  useEffect(() => {
    const meja = new URLSearchParams(window.location.search).get("meja");
    if (meja) {
      setTable(Number(meja));
      if (!localStorage.getItem("reloaded")) {
        localStorage.setItem("reloaded", "true");
        window.location.reload();
      } else {
        localStorage.removeItem("reloaded");
      }
    }
  }, []);
  const $cartItems = useStore(cartItems);
  const $isCartOpen = useStore(isCartOpen);
  const [quantity, setQuantity] = useState(1);
  function handleCart() {
    isCartOpen.set(!$isCartOpen);
    const cart = document.querySelector(".cart");
    cart.classList.toggle("active");
  }
  const total = $cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const [tokenFix, setToken] = useState(null);
  const [requestSuccess, setRequestSuccess] = useState(false);
  useEffect(() => {
    if (tokenFix) {
      window.snap.pay(tokenFix, {
        onSuccess: function(result) {
          console.log("Payment Success:", result);
          alert("Pembayaran Berhasil!");
          setRequestSuccess(true);
        },
        onPending: function(result) {
          console.log("Payment Pending:", result);
          alert("Pembayaran Sedang Diproses...");
        },
        onError: function(result) {
          console.error("Payment Error:", result);
          alert("Pembayaran Gagal. Silakan coba lagi.");
        },
        onClose: function() {
          console.log("Payment popup closed");
          alert("Pembayaran dibatalkan.");
        }
      });
    }
  }, [tokenFix]);
  useEffect(() => {
    if (requestSuccess) {
      alert("Berhasil melakukan checkout");
      window.location.reload();
    }
  }, [requestSuccess]);
  const [dataDiri, setDataDiri] = useState({
    nama: "",
    nohp: "",
    email: ""
  });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        className: "flex px-5 font-bold hover:text-blue-400",
        onClick: handleCart,
        children: [
          /* @__PURE__ */ jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 1.5,
              stroke: "currentColor",
              className: "w-6 h-6 text-white",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            "span",
            {
              hidden: !$cartItems.length,
              className: "bg-red-600 text-xs text-white rounded-full px-1 fixed right-5 top-2",
              children: $cartItems.length ? $cartItems.length : ""
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "cart w-full lg:w-[35rem] absolute right-[-100%] bg-white top-full", children: [
      /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx("div", { className: "head grid place-content-center font-semibold uppercase", children: /* @__PURE__ */ jsx("h1", { children: "Keranjang" }) }) }),
      /* @__PURE__ */ jsx("main", { children: $cartItems.map((item) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex h-[80px] py-1 rounded-md shadow-xl bg-white",
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-center px-1", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: item.imgurl,
                alt: "",
                className: "h-[70px] w-[70px] rounded-md object-cover",
                srcSet: ""
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "flex w-full", children: [
              /* @__PURE__ */ jsx("table", { className: "h-full w-full", children: /* @__PURE__ */ jsxs("tbody", { children: [
                /* @__PURE__ */ jsxs("tr", { className: "", children: [
                  /* @__PURE__ */ jsx("th", { className: "text-left", children: item.name }),
                  /* @__PURE__ */ jsx("th", { className: "text-right", children: item.price })
                ] }),
                /* @__PURE__ */ jsxs("tr", { className: "", children: [
                  /* @__PURE__ */ jsxs("td", { className: "px-2 text-xs", children: [
                    /* @__PURE__ */ jsx(
                      "button",
                      {
                        onClick: () => {
                          if (item.quantity > 1) {
                            item.quantity -= 1;
                            setQuantity(item.quantity);
                          }
                        },
                        children: "➖"
                      }
                    ),
                    /* @__PURE__ */ jsx("span", { className: "px-3 border rounded-sm border-black mx-1", children: item.quantity }),
                    /* @__PURE__ */ jsx(
                      "button",
                      {
                        onClick: () => {
                          item.quantity += 1;
                          setQuantity(item.quantity);
                        },
                        children: "➕"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsx("td", { className: "text-right", children: item.price * item.quantity })
                ] })
              ] }) }),
              /* @__PURE__ */ jsx("div", { className: "flex w-[80px] items-center m-2 justify-center", children: /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => {
                    removeItemFromCart(item.id);
                  },
                  className: "size-full flex items-center rounded-md justify-center ",
                  children: /* @__PURE__ */ jsx(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      strokeWidth: 1.5,
                      stroke: "currentColor",
                      className: "w-8 h-8 hover:text-red-500 transition-all ease-in-out duration-150",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        }
                      )
                    }
                  )
                }
              ) })
            ] })
          ]
        },
        item.id
      )) }),
      /* @__PURE__ */ jsx("footer", { className: "py-5 px-3", children: /* @__PURE__ */ jsxs("form", { action: "", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center items-center gap-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex gap-1 w-full justify-center", children: [
            /* @__PURE__ */ jsx("input", { type: "hidden", name: "meja", value: table }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "hidden",
                name: "id",
                value: Math.floor(Math.random() * 1e6)
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "hidden",
                name: "items",
                value: JSON.stringify($cartItems)
              }
            ),
            /* @__PURE__ */ jsx("input", { type: "hidden", name: "total", value: total })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-full  pt-0 gap-2  ", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "dataDiri", children: "Data Diri" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                onChange: (e) => {
                  setDataDiri({
                    ...dataDiri,
                    nama: e.target.value
                  });
                },
                className: "h-8 rounded-md bg-neutral-100",
                placeholder: "Nama",
                name: "nama",
                type: "text"
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-flow-col grid-cols-2 gap-2", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  onChange: (e) => {
                    setDataDiri({
                      ...dataDiri,
                      nohp: e.target.value
                    });
                  },
                  className: "h-8 rounded-md bg-neutral-100",
                  placeholder: "Phone",
                  name: "nohp",
                  type: "text"
                }
              ),
              /* @__PURE__ */ jsx(
                "input",
                {
                  onChange: (e) => {
                    setDataDiri({
                      ...dataDiri,
                      email: e.target.value
                    });
                  },
                  className: "h-8 rounded-md bg-neutral-100",
                  placeholder: "Email",
                  name: "email",
                  type: "text"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between p-2", children: [
          /* @__PURE__ */ jsx("span", { children: "Total" }),
          /* @__PURE__ */ jsx("span", { children: total.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR"
          }) })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: !$cartItems.length || !dataDiri.nama || !dataDiri.nohp || !dataDiri.email ? "bg-gray-300 text-white rounded-md p-2 w-full mb-12" : "bg-blue-500 text-white rounded-md p-2 w-full mb-12",
            disabled: !$cartItems.length || !dataDiri.nama || !dataDiri.nohp || !dataDiri.email ? true : false,
            onClick: async (e) => {
              e.preventDefault();
              const form = document.querySelector("form");
              const data = new FormData(form);
              const objData = Object.fromEntries(data);
              const res = await fetch("/api/checkout.json", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(objData)
              });
              const requestData = await res.json();
              if (requestData.success) {
                const token = requestData.token;
                setToken(token);
              } else {
                alert("Gagal melakukan checkout");
                console.log(requestData);
              }
            },
            children: "Checkout"
          }
        )
      ] }) })
    ] })
  ] });
};

const Kategori = ({ title, children }) => {
  return /* @__PURE__ */ jsxs("div", { className: " border rounded-md h-auto p-3 m-3", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-center font-bold", children: title }),
    /* @__PURE__ */ jsx("div", { className: "grid content-center h-[250px] grid-flow-col gap-1 overflow-x-auto scroll-smooth scrollbar-hide", children })
  ] });
};

const CardMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const $cartItems = useStore(cartItems);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  useEffect(() => {
    if (selectedVariant === "Panas") {
      setSelectedPrice(props.hargapanas);
    } else if (selectedVariant === "Dingin") {
      setSelectedPrice(props.hargadingin);
    }
  }, [selectedVariant]);
  const handleAddToCart = () => {
    if (selectedVariant) {
      const existingItem = $cartItems.find(
        (item) => item.id === props.id && item.variant === selectedVariant
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        addItemToCart({
          id: props.id + selectedVariant,
          itemId: props.id,
          name: props.nama + " " + selectedVariant,
          price: selectedPrice,
          variant: selectedVariant,
          imgurl: props.imgurl,
          quantity: 1
        });
        setIsOpen(false);
      }
    } else {
      alert("Please select a variant");
    }
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "h-auto w-[150px] p-2 shadow-md", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        className: "h-[120px] rounded-t-lg hover:opacity-50 object-cover w-full transition ease-in-out duration-150",
        src: props.imgurl,
        alt: props.nama
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
      /* @__PURE__ */ jsx("p", { className: "text-center text-lg", children: props.nama }),
      /* @__PURE__ */ jsxs("table", { className: "text-center w-full", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "text-center text-gray-400", children: [
          /* @__PURE__ */ jsx("th", { children: "Hot" }),
          /* @__PURE__ */ jsx("th", { children: "Cold" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: /* @__PURE__ */ jsxs("tr", { className: "text-center text-sm", children: [
          /* @__PURE__ */ jsx("td", { children: props.hargapanas ? props.hargapanas / 1e3 + "K" : "-" }),
          /* @__PURE__ */ jsx("td", { children: props.hargadingin ? props.hargadingin / 1e3 + "K" : "-" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(Modal, { onClose: () => setIsOpen(false), isOpen, children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl mb-4", children: selectedVariant ? props.nama + " " + selectedVariant : props.nama }),
        /* @__PURE__ */ jsxs("div", { className: "flex", children: [
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
            "img",
            {
              src: props.imgurl,
              className: "h-[200px] w-[200px] object-cover rounded-md",
              alt: ""
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col p-5 justify-between items-center", children: [
            /* @__PURE__ */ jsx("h3", { children: "Pilih Varian" }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2 m-2", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  className: `${selectedVariant === "Panas" ? "bg-[#860101] text-white" : "bg-gray-300 text-black"} ${!props.hargapanas ? "opacity-25" : "opacity-100"} p-4 flex flex-col justify-center items-center rounded-md mr-2`,
                  onClick: () => setSelectedVariant("Panas"),
                  disabled: props.hargapanas === null,
                  children: [
                    /* @__PURE__ */ jsx(FaMugHot, { className: "h-6 w-6" }),
                    "Panas"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  className: `${selectedVariant === "Dingin" ? "bg-[#860101] text-white" : "bg-gray-300 text-black"} ${!props.hargadingin ? "opacity-25" : "opacity-100"} p-4 flex flex-col justify-center items-center  rounded-md`,
                  onClick: () => setSelectedVariant("Dingin"),
                  disabled: props.hargadingin === null,
                  children: [
                    /* @__PURE__ */ jsx(FaRegSnowflake, { className: "h-6 w-6" }),
                    "Dingin"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              "Harga :",
              selectedVariant == "Panas" ? " Rp. " + props.hargapanas : selectedVariant == "Dingin" ? " Rp. " + props.hargadingin : ""
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: handleAddToCart,
                className: "bg-[#ffb300] hover:scale-110 transition-all ease-in-out  px-4 py-2 rounded-md mt-2",
                children: "Add to Cart"
              }
            )
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center", children: /* @__PURE__ */ jsx(
      "button",
      {
        className: "bg-[#A3080C] py-1 text-sm flex justify-center items-center w-full rounded-md",
        onClick: openModal,
        children: /* @__PURE__ */ jsx(FaCartPlus, { className: "h-4 w-4 text-white" })
      }
    ) })
  ] }, props.id) });
};

const DaftarMenu = () => {
  const [menu, setMenu] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredMenu, setFilteredMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [kategori, setKategori] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [menuResponse, kategoriResponse] = await Promise.all([
          fetch("api/getMenus.json"),
          fetch("api/getKategori.json")
        ]);
        const menuData = await menuResponse.json();
        const kategoriData = await kategoriResponse.json();
        setMenu(menuData.data);
        setFilteredMenu(menuData.data);
        setKategori(kategoriData.data);
        setLoading(false);
      } catch (error2) {
        setError(error2);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    setFilteredMenu(
      menu.filter((item) => item.nama.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search, menu]);
  if (loading) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen grid place-content-center", children: "Loading..." });
  }
  if (error) {
    return /* @__PURE__ */ jsxs("div", { children: [
      "Error: ",
      error.message
    ] });
  }
  const groupedMenu = kategori.map((kat) => ({
    ...kat,
    items: filteredMenu.filter((item) => item.kategori_id === kat.id)
  }));
  return /* @__PURE__ */ jsxs("div", { className: "mt-[3.5rem]", children: [
    /* @__PURE__ */ jsx("div", { className: "border-b flex p-1 justify-end gap-3", children: /* @__PURE__ */ jsx(
      "input",
      {
        className: "rounded-md w-full",
        type: "search",
        placeholder: "Cari Menu",
        value: search,
        onChange: (e) => setSearch(e.target.value)
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "", children: search ? (
      // Jika ada input pencarian, tampilkan hasil pencarian tanpa pengelompokan
      filteredMenu.length > 0 ? filteredMenu.map((menu2) => /* @__PURE__ */ jsx(
        CardMenu,
        {
          id: menu2.id,
          nama: menu2.nama,
          hargapanas: menu2.harga_panas,
          hargadingin: menu2.harga_dingin,
          imgurl: menu2.imageurl
        },
        menu2.id
      )) : /* @__PURE__ */ jsx("p", { className: "", children: "Opss, Sepertinya menu yang kamu cari tidak ada🙁" })
    ) : (
      // Jika tidak ada input pencarian, tampilkan menu dengan pengelompokan kategori
      groupedMenu.length > 0 ? groupedMenu.map((kat) => /* @__PURE__ */ jsx(Kategori, { title: kat.nama_kategori, children: kat.items.length > 0 ? kat.items.map((menu2) => /* @__PURE__ */ jsx(
        CardMenu,
        {
          id: menu2.id,
          nama: menu2.nama,
          hargapanas: menu2.harga_panas,
          hargadingin: menu2.harga_dingin,
          imgurl: menu2.imageurl
        },
        menu2.id
      )) : /* @__PURE__ */ jsx("p", { children: "Menu tidak ditemukan di kategori ini" }) }, kat.id)) : /* @__PURE__ */ jsx("p", { children: "Menu tidak ditemukan" })
    ) })
  ] });
};

const $$Astro$1 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$2;
  await supabase.from("kategori").select();
  const req = Astro2.request;
  if (req.method === "POST") ;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Menu", "data-astro-cid-eyoas4jf": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="fixed h-12 top-0 w-full bg-[#000000] flex justify-between items-center p-2" data-astro-cid-eyoas4jf><a class="text-white" href="/" data-astro-cid-eyoas4jf><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF" data-astro-cid-eyoas4jf><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" data-astro-cid-eyoas4jf></path></svg></a> <h1 class="text-white" data-astro-cid-eyoas4jf>Daftar Menu</h1> ${renderComponent($$result2, "Keranjang", Keranjang, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ogaa/Desktop/project-kp/project-jima-coffee/src/components/Keranjang.jsx", "client:component-export": "default", "data-astro-cid-eyoas4jf": true })} </header> ${renderComponent($$result2, "DaftarMenu", DaftarMenu, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ogaa/Desktop/project-kp/project-jima-coffee/src/components/DaftarMenu", "client:component-export": "default", "data-astro-cid-eyoas4jf": true })} ` })} `;
}, "C:/Users/ogaa/Desktop/project-kp/project-jima-coffee/src/pages/menu/index.astro", void 0);

const $$file$2 = "C:/Users/ogaa/Desktop/project-kp/project-jima-coffee/src/pages/menu/index.astro";
const $$url$2 = "/menu";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const Reservasi = () => {
  const [nama, setNama] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [waktu, setWaktu] = useState("");
  const [jumlahOrang, setJumlahOrang] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedMessage = `*Pesan Reservasi:*

*Nama:* ${nama}
*Tanggal:* ${tanggal}
*Waktu:* ${waktu}
*Jumlah Orang:* ${jumlahOrang}

*Mohon konfirmasi reservasi.*

*Terima kasih.*`;
    const encodedMessage = encodeURIComponent(formattedMessage);
    setNama("");
    setTanggal("");
    setWaktu("");
    setJumlahOrang("");
    window.open(
      `https://wa.me/6282251389896?text=${encodedMessage}`,
      "_blank"
    );
  };
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex justify-start items-center px-10 bg-[#1c0000]", children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-md bg-white rounded-lg shadow-md p-8", children: [
    /* @__PURE__ */ jsxs("h1", { className: "text-2xl font-bold text-gray-700 mb-6 flex gap-2 ", children: [
      /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "src\\assets\\images\\b42e38.png",
          className: "w-8 h-8 object-cover rounded-full shadow-md",
          alt: ""
        }
      ) }),
      "Reservasi Meja"
    ] }),
    /* @__PURE__ */ jsxs("form", { className: "space-y-4", onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "name",
            className: "text-sm font-medium text-gray-700",
            children: "Nama"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "name",
            id: "name",
            className: "w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent",
            required: true,
            value: nama,
            onChange: (e) => setNama(e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "date",
            className: "text-sm font-medium text-gray-700",
            children: "Tanggal"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "date",
            name: "date",
            id: "date",
            className: "w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent",
            required: true,
            value: tanggal,
            onChange: (e) => setTanggal(e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "time",
            className: "text-sm font-medium text-gray-700",
            children: "Waktu"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "time",
            name: "time",
            id: "time",
            className: "w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent",
            required: true,
            value: waktu,
            onChange: (e) => setWaktu(e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "people",
            className: "text-sm font-medium text-gray-700",
            children: "Jumlah Orang"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "number",
            name: "people",
            id: "people",
            className: "w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent",
            required: true,
            value: jumlahOrang,
            onChange: (e) => setJumlahOrang(e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          type: "submit",
          className: "w-full flex justify-center items-center py-2 px-4 gap-2 bg-[#A3080C] hover:bg-[#ff1d1d] text-white  font-bold rounded-md",
          children: [
            "Lanjutkan Ke Whatsapp",
            " ",
            /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "src\\assets\\icons\\whatsapp.png",
                className: "h-6 w-6 object-cover",
                alt: ""
              }
            ) })
          ]
        }
      )
    ] })
  ] }) });
};

const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Reservasi" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Reservasi", Reservasi, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ogaa/Desktop/project-kp/project-jima-coffee/src/components/Reservasi.jsx", "client:component-export": "default" })} ` })}`;
}, "C:/Users/ogaa/Desktop/project-kp/project-jima-coffee/src/pages/reservasi/index.astro", void 0);

const $$file$1 = "C:/Users/ogaa/Desktop/project-kp/project-jima-coffee/src/pages/reservasi/index.astro";
const $$url$1 = "/reservasi";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const Footer = () => {
  return /* @__PURE__ */ jsx("div", { id: "lokasi", children: /* @__PURE__ */ jsxs("div", { className: "bg-[#2f0000] h-[500px] lg:h-[300px] grid", children: [
    /* @__PURE__ */ jsx("div", { className: " grid place-content-center ", children: /* @__PURE__ */ jsxs("div", { className: " text-center", children: [
      /* @__PURE__ */ jsxs("h1", { className: "font-bold text-5xl ", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[#FDC82F]", children: "JIM" }),
        /* @__PURE__ */ jsx("span", { className: "text-[#A3080C]", children: "A" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-white", children: "Coffee House" })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "m-3 grid content-start text-white", children: [
      /* @__PURE__ */ jsx("h1", { className: "my-3", children: "Costumer Service" }),
      /* @__PURE__ */ jsxs("div", { className: " flex flex-col gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "mx-3 flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(FaLocationDot, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsx("div", { children: "Jl. Urai bawadi Gg. Tria 1 (no. 5), Kota Pontianak, Indonesia" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mx-3 flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(IoLogoWhatsapp, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsx("div", { children: "0878-3223-4119" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: " content-end", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-3 mb-5 text-3xl", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-white size-10 grid place-content-center rounded-full hover:scale-125 ease-in-out duration-150", children: /* @__PURE__ */ jsx(FaYoutube, { className: "" }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-white size-10 grid place-content-center rounded-full hover:scale-125 ease-in-out duration-150", children: /* @__PURE__ */ jsx(FaTwitter, {}) }),
      /* @__PURE__ */ jsx("div", { className: "bg-white size-10 grid place-content-center rounded-full hover:scale-125 ease-in-out duration-150", children: /* @__PURE__ */ jsx(FaInstagram, {}) }),
      /* @__PURE__ */ jsx("div", { className: "bg-white size-10 grid place-content-center rounded-full hover:scale-125 ease-in-out duration-150", children: /* @__PURE__ */ jsx(FaLinkedin, {}) })
    ] }) })
  ] }) });
};

const About = (props) => {
  return /* @__PURE__ */ jsxs("div", { id: "about", className: "grid grid-rows-3 w-full gap-3", children: [
    /* @__PURE__ */ jsxs("section", { className: "", children: [
      /* @__PURE__ */ jsx("h4", { className: "ml-6", children: "━━━━ Our Story" }),
      /* @__PURE__ */ jsx("h1", { className: "my-4 text-5xl font-bold ml-8", children: "Mari berkenalan" }),
      /* @__PURE__ */ jsxs("div", { className: "lg:flex", children: [
        /* @__PURE__ */ jsx("div", { className: "my-3 w-full lg:w-[80rem]", children: /* @__PURE__ */ jsx("p", { className: "text-left lg:text-2xl", children: "Mari berkenalan dengan tim kami mulai dari toko, lingkungan, dan orang-orang yang bekerja bersama kami!" }) }),
        /* @__PURE__ */ jsx("div", { className: " w-full", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "https://wxnmwtambphlaobvcbaa.supabase.co/storage/v1/object/public/images/images/C1B9322C-4591-46BB-B357-A4289FB3D84E.jpg",
            alt: "coffee",
            className: "w-full h-[600px] object-cover object-center"
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "", children: [
      /* @__PURE__ */ jsx("h4", { className: "ml-6", children: "━━━━ Tell a Story" }),
      /* @__PURE__ */ jsx("h1", { className: "my-4 text-5xl font-bold ml-8", children: "Penting untuk hari ini" }),
      /* @__PURE__ */ jsxs("div", { className: "lg:flex", children: [
        /* @__PURE__ */ jsx("div", { className: "my-3 w-full lg:w-[80rem]", children: /* @__PURE__ */ jsx("p", { className: "text-start lg:text-2xl", children: "Di dunia yang serba cepat, mudah sekali kita kehilangan fokus terhadap apa yang sebenarnya penting. Jima menyediakan tempat bernaung, dimana kamu bisa beristirahat sejenak dan menikmati secangkir kopi buatan dari Hati. Jima ingin menginspirasi orang untuk menyadari hal penting dalam kehidupan di tengah-tengah kesibukan mereka melalui tiap minuman yang kami sajikan" }) }),
        /* @__PURE__ */ jsxs("div", { className: " w-full", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "https://wxnmwtambphlaobvcbaa.supabase.co/storage/v1/object/public/images/images/8543918D-D235-4968-BADE-CC3D638968A9.JPG",
              alt: "coffee",
              className: "w-full h-[400px] object-cover object-center"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: " top-0 right-0 h-full w-11/12 bg-gradient-to-r from-transparent to-white" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "", children: [
      /* @__PURE__ */ jsx("h4", { className: "ml-6", children: "━━━━ About Jima" }),
      /* @__PURE__ */ jsx("h1", { className: "my-4 text-5xl font-bold ml-8", children: "Cerita Kami" }),
      /* @__PURE__ */ jsxs("div", { className: "lg:flex", children: [
        /* @__PURE__ */ jsx("div", { className: "my-3 w-full lg:w-[80rem]", children: /* @__PURE__ */ jsx("p", { className: "text-start lg:text-2xl", children: "Didirikan pada tahun 2023, Jima Coffee adalah startup kopi yang bercita-cita membuat kopi spesial terbaik untuk pelanggan. Kami ingin kehadiran kami bisa meningkatkan kualitas kopi dalam komunitas kita. Dengan jaringan dan pengalaman, kami menggunakan teknologi terkini untuk alat dan biji kopi kami. Diambil langsung dari petani pilihan, biji kopi berkualitas tinggi diproses dan dipanggang sempurna oleh kami, dan diajarkan kepada barista kompeten kami, dengan semangat untuk menyajikan satu cangkir kebahagiaan hanya untuk kamu." }) }),
        /* @__PURE__ */ jsxs("div", { className: " w-full", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "https://wxnmwtambphlaobvcbaa.supabase.co/storage/v1/object/public/images/images/IMG_3983.jpg",
              alt: "coffee",
              className: "w-full h-[400px] object-cover object-center"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: " top-0 right-0 h-full w-11/12 bg-gradient-to-r from-transparent to-white" })
        ] })
      ] })
    ] })
  ] });
};

const Kontak = () => {
  const [name, setName] = useState("");
  const [email, seEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceID = "service_1ud0p7j";
    const templateID = "template_2h3rdqg";
    const publicKey = "Bpb3lYKY2-8NlmXRK";
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Jima",
      message
    };
    emailjs.send(serviceID, templateID, templateParams, publicKey).then((response) => {
      console.log("SUCCESS!", response);
      setName("");
      seEmail("");
      setMessage("");
    }).catch((error) => {
      console.log("FAILED...", error);
    });
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center h-full items-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl", children: "Contact Us" }),
    /* @__PURE__ */ jsxs("p", { className: "p-3 text-center text-gray-400 text-sm", children: [
      "For any support, please mail to",
      " ",
      /* @__PURE__ */ jsxs("span", { className: "text-blue-500 underline", onClick: () => {
      }, children: [
        " ",
        "jimacorp@gmail.com"
      ] }),
      ", our support team will get back to you within 24 hours."
    ] }),
    /* @__PURE__ */ jsx("form", { onSubmit: handleSubmit, method: "post", children: /* @__PURE__ */ jsxs("div", { className: "grid p-5 gap-3 grid-rows-6 grid-flow-row", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          className: "border-orange-500 rounded-md",
          placeholder: "Name",
          type: "text",
          name: "user_name",
          value: name,
          onChange: (e) => setName(e.target.value)
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-2 grid-flow-col grid-cols-2", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            className: "border-orange-500 rounded-md",
            placeholder: "Email Address",
            type: "text",
            name: "user_email",
            value: email,
            onChange: (e) => seEmail(e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            className: "border-orange-500 rounded-md",
            placeholder: "Phone Number",
            type: "text",
            name: "phone"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          placeholder: "Enter message...",
          className: "row-span-3 border-orange-500 rounded-md",
          name: "message",
          id: "",
          cols: "",
          rows: "",
          value: message,
          onChange: (e) => setMessage(e.target.value)
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          className: "bg-[#8c0000] p-2 text-white rounded-md",
          value: "Send",
          children: "SUBMIT"
        }
      )
    ] }) })
  ] }) });
};

const Partnership = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { id: "kemitraan", className: "lg:grid lg:place-content-center w-full lg:h-[400px]", children: /* @__PURE__ */ jsxs("div", { className: " text-center p-2", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl lg:text-4xl mb-3", children: "Partnership" }),
    /* @__PURE__ */ jsxs("p", { className: "lg:text-2xl", children: [
      "Teman berbisnis kami ",
      /* @__PURE__ */ jsx("span", { className: "border-b text-yellow-600 border-black", children: "Copabanana" }),
      "  menyediakan layanan makanan ringan untuk menemani waktumu di Jima"
    ] })
  ] }) }) });
};

const sectionIds = [
  "home",
  "about",
  "/menu",
  "partner",
  "contact"
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollToSection = (sectionId) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const marginTop = 0;
      const scrollToY = element.getBoundingClientRect().top + window.scrollY - marginTop;
      window.scrollTo({ top: scrollToY, behavior: "smooth" });
    }
  };
  const determineActiveSection = () => {
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const section = document.getElementById(sectionIds[i]);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveLink(sectionIds[i]);
          break;
        }
      }
    }
  };
  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      determineActiveSection();
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "bg-[#000000] bg-opacity-70 fixed top-0 w-full", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center sm:flex-row ", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "pl-2 flex items-center gap-2 uppercase hover:font-bold", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            className: "w-10 h-10 object-cover rounded-full",
            src: "https://wxnmwtambphlaobvcbaa.supabase.co/storage/v1/object/public/images/images/logo-jima.png?t=2024-06-22T15%3A24%3A04.578Z",
            alt: ""
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "text-xl text-white", children: "Jima" })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        "button",
        {
          className: "p-2 block sm:hidden",
          onClick: () => {
            setIsOpen(!isOpen);
          },
          children: /* @__PURE__ */ jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 1.5,
              stroke: "currentColor",
              className: "w-6 h-6 stroke-2 text-white",
              children: [
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    className: isOpen ? "hidden" : "block",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M3.75 9h16.5m-16.5 6.75h16.5"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    className: isOpen ? "block" : "hidden",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M6 18 18 6M6 6l12 12"
                  }
                )
              ]
            }
          )
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `${isOpen ? "block" : "hidden"} text-end justify-between w-full sm:flex`,
        children: /* @__PURE__ */ jsx("div", { className: "p-3 mr-2 flex gap-3 w-full justify-center flex-col sm:flex-row", children: /* @__PURE__ */ jsx("ul", { className: "flex justify-center flex-col sm:flex-row", children: sectionIds.map((sectionId, i) => {
          return /* @__PURE__ */ jsx(
            "li",
            {
              onClick: () => {
                scrollToSection(sectionId);
              },
              className: "p-2 text-white hover:text-blue-400 uppercase",
              children: sectionId === "/menu" ? /* @__PURE__ */ jsx("a", { href: "/menu", children: "Menu" }) : /* @__PURE__ */ jsx(
                "label",
                {
                  className: activeLink === sectionId ? "text-[#ff9100] underline" : "",
                  children: sectionId
                }
              )
            },
            i
          );
        }) }) })
      }
    )
  ] }) });
};

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const nomorMeja = Astro2.url.searchParams.get("meja") || "1";
  console.log(nomorMeja);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Homepage", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <!-- <Navbar id1={"#home"} id2={"/menu"} id3={"#about"} id4={"#partner"} id5={"#contact"} client:load /> --> ${renderComponent($$result2, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ogaa/Desktop/project-kp/project-jima-coffee/src/components/navBar/Navbar", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} <section id="home" class="grid grid-rows-4 items-center min-h-screen" data-astro-cid-j7pv25f6> <div class="row-span-2 grid lg:justify-center grid-flow-col content-center px-5 h-full" data-astro-cid-j7pv25f6> <div class="col-span-2 lg:flex font-extrabold lg:gap-4" data-astro-cid-j7pv25f6> <h1 class="text-5xl lg:text-7xl" data-astro-cid-j7pv25f6>Welcome to</h1> <h1 class="text-orange-500 text-5xl lg:text-7xl" data-astro-cid-j7pv25f6>Jima</h1> <div class="text-right lg:flex lg:flex-col lg:items-center lg:justify-center lg:text-xl" data-astro-cid-j7pv25f6> <p class="" data-astro-cid-j7pv25f6>Inspirasi datang</p> <p data-astro-cid-j7pv25f6>dari secangkir kopi</p> </div> </div> </div> <div class="row-span-2 h-full grid p-8" data-astro-cid-j7pv25f6> <ul class="lg:flex lg:items-center lg:justify-center lg:gap-4" data-astro-cid-j7pv25f6> <li class="bg-[#191919] lg:h-[100px] rounded-md text-white  p-3 mb-3 w-[300px]" data-astro-cid-j7pv25f6> <a class="flex justify-between items-center"${addAttribute(`/menu?meja=${nomorMeja}`, "href")} data-astro-cid-j7pv25f6><div data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>Order Now</p><p class="text-sm" data-astro-cid-j7pv25f6>
Jelajahi Menu Jima.
</p> </div><img src="https://wxnmwtambphlaobvcbaa.supabase.co/storage/v1/object/public/images/images/JIMA_POST_-_13.png" class="h-[40px] w-[40px]" alt="" data-astro-cid-j7pv25f6></a> </li> <li class="bg-[#191919] lg:h-[100px] rounded-md text-white  p-3 mb-3 w-[300px]" data-astro-cid-j7pv25f6> <a class="flex justify-between items-center" href="/reservasi" data-astro-cid-j7pv25f6><div data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>Reservasi</p><p class="text-sm" data-astro-cid-j7pv25f6>
Boking Meja Sebelum Kehabisan.
</p> </div><img src="https://wxnmwtambphlaobvcbaa.supabase.co/storage/v1/object/public/images/images/JIMA_POST_-_12.png" class="h-[40px] w-[40px]" alt="" data-astro-cid-j7pv25f6></a> </li> </ul> </div> </section> <section id="about" class="min-h-screen p-3" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "About", About, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ogaa/Desktop/project-kp/project-jima-coffee/src/components/About", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} </section> <section id="partner" class="justify-center items-center grid" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Partnership", Partnership, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ogaa/Desktop/project-kp/project-jima-coffee/src/components/Partnership", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} </section> <section id="contact" class="justify-center items-center grid" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Kontak", Kontak, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ogaa/Desktop/project-kp/project-jima-coffee/src/components/Kontak", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} </section> ${renderComponent($$result2, "Footer", Footer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ogaa/Desktop/project-kp/project-jima-coffee/src/components/Footer", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} </main> ` })} `;
}, "C:/Users/ogaa/Desktop/project-kp/project-jima-coffee/src/pages/index.astro", void 0);

const $$file = "C:/Users/ogaa/Desktop/project-kp/project-jima-coffee/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$4 as a, index$3 as b, index$2 as c, index$1 as d, index as e, index$5 as i };
