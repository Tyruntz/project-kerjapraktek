/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderSlot, f as createAstro, g as renderComponent, h as renderHead } from '../astro_DpERy_Um.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */
/* empty css                             */
import { createClient } from '@supabase/supabase-js';
/* empty css                             */

const $$Astro$3 = createAstro();
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Section;
  const { sectionID } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(sectionID, "id")} class="min-h-screen p-5 border justify-center items-center m-4 border-white"> ${renderSlot($$result, $$slots["default"])} </section> `;
}, "C:/Users/ogaa/Desktop/project-kp/project-jima-coffee/src/components/Section.astro", void 0);

const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/ogaa/Desktop/project-kp/project-jima-coffee/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$1 = createAstro();
const $$LayoutAdmin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LayoutAdmin;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><!-- <link rel="icon" type="image/svg+xml" href="/favicon.svg" /> --><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet">${renderHead()}</head> <body> <nav class="bg-[#1e2129] mt-0"> <ul class="flex w-full justify-center gap-4"> <li><a href="/">Home</a></li> <li><a href="/about">Menu</a></li> <li><a href="/blog">Pesanan</a></li> <li><a href="/contact">Contact</a></li> </ul> </nav> ${renderSlot($$result, $$slots["default"])}  </body> </html>`;
}, "C:/Users/ogaa/Desktop/project-kp/project-jima-coffee/src/layouts/LayoutAdmin.astro", void 0);

const supabaseUrl = 'https://wxnmwtambphlaobvcbaa.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4bm13dGFtYnBobGFvYnZjYmFhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNDk4MTEzMCwiZXhwIjoyMDMwNTU3MTMwfQ.s3lF8-Gh9tJt8gDWoRqvJ9V2R-_RIJ4T773nEzKx0zE';

const supabase = createClient(supabaseUrl, supabaseKey);

const $$Astro = createAstro();
const $$menuId = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$menuId;
  const { menuId } = Astro2.params;
  const { data: menu } = await supabase.from("menus").select("*").eq("id", menuId).single();
  Astro2.request;
  const id = menuId;
  const { data, error } = await supabase.from("kategori").select();
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const { nama, kategori, hargapanas, hargadingin } = Object.fromEntries(
      formData.entries()
    );
    try {
      const hargaPanas = !hargapanas ? null : hargapanas;
      const hargaDingin = !hargadingin ? null : hargadingin;
      const { error: error2 } = await supabase.from("menus").update({ nama, kategori_id: kategori, harga_panas: hargaPanas, harga_dingin: hargaDingin }).eq("id", id);
      if (error2) {
        console.log(error2);
      }
    } catch (error2) {
      console.log(error2);
    }
    return Astro2.redirect("/admin/menu");
  }
  return renderTemplate`${renderComponent($$result, "LayoutAdmin", $$LayoutAdmin, { "title": "admin page", "data-astro-cid-fwiiztla": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, { "title": "Tambah Menu", "data-astro-cid-fwiiztla": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="w-full flex gap-5" data-astro-cid-fwiiztla> <form action="" method="post" enctype="multipart/form-data" data-astro-cid-fwiiztla> <input type="text"${addAttribute(menu.nama, "value")} name="nama" placeholder="masukan nama menu" data-astro-cid-fwiiztla> <select class="text-black" name="kategori" id="" data-astro-cid-fwiiztla> ${data.map((item) => {
    return renderTemplate`<option${addAttribute(item.id, "value")} data-astro-cid-fwiiztla>${item.nama_kategori}</option>`;
  })} </select> <span class="flex w-full" data-astro-cid-fwiiztla> <input class="w-[50%]"${addAttribute(menu.harga_panas, "value")} type="number" name="hargapanas" placeholder="harga menu(panas)" data-astro-cid-fwiiztla> <input class="w-[50%]"${addAttribute(menu.harga_dingin, "value")} type="number" name="hargadingin" placeholder="harga menu(dingin)" data-astro-cid-fwiiztla> </span> <input type="hidden" name="imgurl" data-astro-cid-fwiiztla> <input type="file" class="image" name="file" data-astro-cid-fwiiztla> <button type="submit" data-astro-cid-fwiiztla>Submit</button> </form> <div data-astro-cid-fwiiztla> <img${addAttribute(menu.imageurl, "src")} alt="" data-astro-cid-fwiiztla> </div> </div> ` })} ` })} `;
}, "C:/Users/ogaa/Desktop/project-kp/project-jima-coffee/src/pages/admin/menu/addMenu/[menuId].astro", void 0);

const $$file = "C:/Users/ogaa/Desktop/project-kp/project-jima-coffee/src/pages/admin/menu/addMenu/[menuId].astro";
const $$url = "/admin/menu/addMenu/[menuId]";

const _menuId_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$menuId,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ViewTransitions as $, _menuId_ as _, $$Section as a, $$LayoutAdmin as b, supabase as s };
