/* empty css                          */
import { c as createComponent, r as renderTemplate, g as renderComponent, f as createAstro, m as maybeRenderHead, d as addAttribute } from '../astro_DpERy_Um.mjs';
import 'kleur/colors';
import 'html-escaper';
import { s as supabase, a as $$Section, b as $$LayoutAdmin } from './_menuId__x_P2DjmS.mjs';
import sharp from 'sharp';
/* empty css                            */

const $$Astro = createAstro();
const $$AddData = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AddData;
  const { data, error } = await supabase.from("kategori").select();
  const uploadStream = async (buffer, option) => {
    const { data: data2, error: error2 } = await supabase.storage.from("images").upload(option.path, buffer, {
      cacheControl: "3600",
      upsert: false
    });
    if (error2) {
      console.log(error2);
    }
    console.log(data2);
  };
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const { nama, kategori, hargapanas, hargadingin } = Object.fromEntries(
      formData.entries()
    );
    const file = formData.get("file");
    const buffer = await file.arrayBuffer();
    const option = {
      path: `images/${file.name}`
    };
    const resizedBuffer = await sharp(buffer).resize({ width: 500 }).toBuffer();
    await uploadStream(new Uint8Array(resizedBuffer), option);
    const imageurl = `https://wxnmwtambphlaobvcbaa.supabase.co/storage/v1/object/public/images/images/${file.name}`;
    const { error: error2 } = await supabase.from("menus").insert({ nama, kategori_id: kategori, harga_panas: hargapanas, harga_dingin: hargadingin, imageurl });
    if (error2) {
      console.log(error2);
    }
    return Astro2.redirect("/admin/menu");
  }
  return renderTemplate`${renderComponent($$result, "LayoutAdmin", $$LayoutAdmin, { "title": "admin page", "data-astro-cid-qprrjizc": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, { "title": "Tambah Menu", "data-astro-cid-qprrjizc": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="w-full flex gap-5" data-astro-cid-qprrjizc> <form action="" method="post" enctype="multipart/form-data" data-astro-cid-qprrjizc> <input type="text" name="nama" placeholder="masukan nama menu" data-astro-cid-qprrjizc> <select class="text-black" name="kategori" data-astro-cid-qprrjizc> ${data.map((item) => {
    return renderTemplate`<option class="text-black"${addAttribute(item.id, "value")} data-astro-cid-qprrjizc>${item.nama_kategori}</option>`;
  })} </select> <span class="flex w-full" data-astro-cid-qprrjizc> <input class="w-[50%]" type="number" name="hargapanas" placeholder="harga menu(panas)" data-astro-cid-qprrjizc> <input class="w-[50%]" type="number" name="hargadingin" placeholder="harga menu(dingin)" data-astro-cid-qprrjizc> </span> <input type="hidden" name="imgurl" data-astro-cid-qprrjizc> <input type="file" class="image" name="file" data-astro-cid-qprrjizc> <button type="submit" data-astro-cid-qprrjizc>Submit</button> </form> </div> ` })} ` })} `;
}, "C:/Users/ogaa/Desktop/project-kp/project-jima-coffee/src/pages/admin/menu/addMenu/addData.astro", void 0);

const $$file = "C:/Users/ogaa/Desktop/project-kp/project-jima-coffee/src/pages/admin/menu/addMenu/addData.astro";
const $$url = "/admin/menu/addMenu/addData";

export { $$AddData as default, $$file as file, $$url as url };
