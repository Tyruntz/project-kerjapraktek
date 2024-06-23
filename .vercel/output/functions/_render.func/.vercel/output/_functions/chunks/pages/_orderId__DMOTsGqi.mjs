/* empty css                          */
import { c as createComponent, r as renderTemplate, e as renderSlot, h as renderHead, g as renderComponent, d as addAttribute, f as createAstro, m as maybeRenderHead } from '../astro_DpERy_Um.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$ViewTransitions, s as supabase } from './_menuId__x_P2DjmS.mjs';
/* empty css                          */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Website pemesanan dan reservasi Jima Coffee"><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- <link rel="icon" type="image/svg+xml" href="/favicon.svg" /> --><meta name="generator"', "><title>", "</title>", '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"><script type="text/javascript" src="https://app.sandbox.midtrans.com/snap/snap.js" data-client-key="SB-Mid-client-KcoaTXSjJrwG0KQx"><\/script>', '</head> <body class=""> ', "  </body> </html>"])), addAttribute(Astro2.generator, "content"), title + " | Jima", renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/Users/ogaa/Desktop/project-kp/project-jima-coffee/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$orderId = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$orderId;
  const { orderId } = Astro2.params;
  const { data: orders } = await supabase.from("order").select("*").eq("id", orderId).single();
  const items = JSON.parse(orders.items);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Detail Pesanan" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<form action=""> ${orders ? renderTemplate`<div class="w-full "> <header class="bg-slate-400 h-12 flex items-center justify-center"> <h1>Konfirmasi Pesanan</h1> </header> <main class="w-full lg:w-1/2"> <div class="flex flex-col p-5 pt-2 gap-2 items-stretch text-center border-b border-slate-200"> <label for="dataDiri">Data Diri</label> <input class="h-8 rounded-md bg-neutral-100" placeholder="Nama" name="nama" type="text"> <input class="h-8 rounded-md bg-neutral-100" placeholder="Phone" name="nohp" type="text"> <input class="h-8 rounded-md bg-neutral-100" placeholder="Email" name="email" type="text"> </div> <div> <label for="pesanan">Pesanan Anda</label> <div> <ul> ${items.map((item) => renderTemplate`<li>${item.nama} x ${item.quantity}</li>`)} </ul> </div> </div> </main> </div>` : renderTemplate`<p>Pesanan tidak ditemukan</p>`} </form> ` })}`;
}, "C:/Users/ogaa/Desktop/project-kp/project-jima-coffee/src/pages/menu/[orderId].astro", void 0);

const $$file = "C:/Users/ogaa/Desktop/project-kp/project-jima-coffee/src/pages/menu/[orderId].astro";
const $$url = "/menu/[orderId]";

const _orderId_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
   __proto__: null,
   default: $$orderId,
   file: $$file,
   url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _orderId_ as _ };
