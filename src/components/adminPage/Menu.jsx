import React, { useState, useEffect } from "react";
import "./css/menu.css";
import Modal from "../Modal.jsx";
import { supabase } from "../../services/supabase";

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
      const { data, error } = await supabase.storage
         .from("images")
         .upload(option.path, buffer, {
            cacheControl: "3600",
            upsert: false,
         });
      if (error) {
         console.log(error);
      }
   };
   //handle edit
   const handleEditSubmit = async (id) => {
      const form = document.querySelector("form");
      const formData = new FormData(form);
      const file = document.getElementById("image").files[0];

      if (file) {
         // Resize image
         const reader = new FileReader();
         reader.readAsDataURL(file);
         reader.onload = function () {
            const img = new Image();
            img.src = reader.result;
            img.onload = async function () {
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
                  type: "image/jpeg",
               });

               await uploadStream(fileBlob, { path: `images/${file.name}` });

               const imageurl = `https://wxnmwtambphlaobvcbaa.supabase.co/storage/v1/object/public/images/images/${file.name}`;
               formData.append("imageurl", imageurl);

               // Continue with form submission after image upload
               await submitFormData(id, formData);
            };
         };
      } else {
         // Continue with form submission without image upload
         await submitFormData(id, formData);
      }
   };

   const submitFormData = async (id, formData) => {
      const objData = Object.fromEntries(formData);
      objData.id = id;

      try {
         const res = await fetch("api/addMenu.json", {
            method: "PUT",
            body: JSON.stringify(objData),
         });
         const resData = await res.json();
         if (resData.success) {
            alert("Data berhasil diubah");
         } else {
            alert("Data gagal diubah");
         }
      } catch (error) {
         console.error("Error updating data:", error);
      } finally {
         handleCloseAddModal();
      }
   };

   //Input data ke database
   const handleSubmit = async (e) => {
      e.preventDefault();
      const form = document.querySelector("form");
      const formData = new FormData(form);
      const file = document.getElementById("image").files[0];

      //resize image

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
         const img = new Image();
         img.src = reader.result;
         img.onload = function () {
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
               type: "image/jpeg",
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
            body: JSON.stringify(objData),
         });
         const resData = await res.json();
         if (resData.success) {
            alert("Data berhasil ditambahkan");
         } else {
            alert("Data gagal ditambahkan");
         }
      } catch (error) {
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
      } catch (error) {}
   };
   //Menghapus data dari database
   const handleDelete = async () => {
      try {
         const res = await fetch("api/deleteMenu.json", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: selectedId }),
         });
         const resData = await res.json();

         if (resData.success) {
            setMenu(menus.filter((menu) => menu.id !== selectedId));
            alert("Data berhasil dihapus");
         } else {
            alert("Data gagal dihapus");
         }
      } catch (error) {
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
         } catch (error) {
            setError(error);
            setLoading(false);
         }
      };

      const fetchKategori = async () => {
         try {
            const response = await fetch("api/getKategori.json");
            const data = await response.json();
            setKategori(data.data);
            setLoading(false);
         } catch (error) {
            setError(error);
            setLoading(false);
         }
      };

      fetchMenu();
      fetchKategori();
   }, []);

   if (loading)
      return (
         <div className="rounded-md border border-[#d1d1d3] bg-[#fefefe] h-full grid place-content-center p-3 row-span-6">
            Loading...
         </div>
      );

   if (error) return <div>Error: {error.message}</div>;

   return (
      <div className="rounded-md border grid grid-rows-11 border-[#d1d1d3] bg-[#fefefe] h-full p-3 row-span-6">
         <div className="mb-2 flex gap-2">
            <button
               onClick={handleAddClick}
               className="bg-[#d1d1d3] border border-black text-sm p-2 rounded-lg"
            >
               ➕ Add Menu
            </button>
            <button
               onClick={handleReloadClick}
               className="bg-[#d1d1d3]  border border-black text-sm p-2 rounded-lg"
            >
               🔄 Reload
            </button>
         </div>
         <div className="row-span-10">
            <table className="max-h-max">
               <thead className="text-sm">
                  <tr>
                     <th>Nama</th>
                     <th>Kategori</th>
                     <th>Harga (Panas)</th>
                     <th>Harga (Dingin)</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  {menus.map((menu) => (
                     <tr key={menu.id}>
                        <td>{menu.nama}</td>
                        <td>
                           {kategori.find((kat) => kat.id === menu.kategori_id)
                              ?.nama_kategori || "Unknown"}
                        </td>
                        <td>{menu.harga_panas}</td>
                        <td>{menu.harga_dingin}</td>
                        <td>
                           <button
                              onClick={() => handleEditClick(menu.id)}
                              className="action"
                              id="edit"
                           >
                              Edit
                           </button>
                           <span>|</span>
                           <button
                              onClick={() => handleDeleteClick(menu.id)}
                              className="action"
                              id="delete"
                           >
                              Delete
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>

         <Modal isOpen={isModalAddOpen} onClose={handleCloseAddModal}>
            <div className="modal-container">
               <div className="modal-content bg-white p-4 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-2">Tambah Menu</h2>
                  <form>
                     <div className="mb-4">
                        <label
                           className="block text-gray-600"
                           htmlFor="nama-menu"
                        >
                           Nama Menu:
                        </label>
                        <input
                           name="nama"
                           type="text"
                           id="nama-menu"
                           className="block w-full p-2 pl-10 text-gray-700"
                           placeholder="Masukkan nama menu"
                        />
                     </div>
                     <div className="mb-4">
                        <label
                           className="block text-gray-600"
                           htmlFor="kategori"
                        >
                           Kategori:
                        </label>
                        <select
                           className="text-black"
                           id="kategori"
                           name="kategori_id"
                        >
                           {kategori.map((item) => {
                              return (
                                 <option
                                    key={item.id}
                                    className="text-black"
                                    value={item.id}
                                 >
                                    {item.nama_kategori}
                                 </option>
                              );
                           })}
                        </select>
                     </div>
                     <div className="mb-4">
                        <label
                           className="block text-gray-600"
                           htmlFor="harga-dingin"
                        >
                           Harga Dingin:
                        </label>
                        <input
                           name="harga_dingin"
                           type="number"
                           id="harga-dingin"
                           className="block w-full p-2 pl-10 text-gray-700"
                           placeholder="Masukkan harga dingin"
                        />
                     </div>
                     <div className="mb-4">
                        <label
                           className="block text-gray-600"
                           htmlFor="harga-panas"
                        >
                           Harga Panas:
                        </label>
                        <input
                           name="harga_panas"
                           type="number"
                           id="harga-panas"
                           className="block w-full p-2 pl-10 text-gray-700"
                           placeholder="Masukkan harga panas"
                        />
                     </div>
                     <div className="mb-4">
                        <label className="block text-gray-600" htmlFor="image">
                           Gambar:
                        </label>
                        <input
                           name="image"
                           type="file"
                           id="image"
                           className="block w-full p-2 pl-10 text-gray-700"
                        />
                     </div>
                     <button
                        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleSubmit}
                     >
                        Simpan
                     </button>
                     <button
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded ml-2"
                        onClick={handleCloseAddModal}
                     >
                        Batal
                     </button>
                  </form>
               </div>
            </div>
         </Modal>

         <Modal isOpen={isModalEditOpen} onClose={handleCloseEditModal}>
            <div className="modal-container">
               <div className="modal-content bg-white p-4 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-2">Tambah Menu</h2>
                  {menus.map(
                     (menu) =>
                        //get menu by id
                        menu.id === selectedId && (
                           <form action="" key={menu.id}>
                              <div className="mb-4">
                                 <input
                                    type="hidden"
                                    name="id"
                                    defaultValue={menu.id}
                                 />
                                 <label
                                    className="block text-gray-600"
                                    htmlFor="nama-menu"
                                 >
                                    Nama Menu:
                                 </label>
                                 <input
                                    defaultValue={menu.nama}
                                    name="nama"
                                    type="text"
                                    id="nama-menu"
                                    className="block w-full p-2 pl-10 text-gray-700"
                                    placeholder="Masukkan nama menu"
                                 />
                              </div>
                              <div className="mb-4">
                                 <label
                                    className="block text-gray-600"
                                    htmlFor="kategori"
                                 >
                                    Kategori:
                                 </label>
                                 <select
                                    defaultValue={menu.kategori_id}
                                    className="text-black"
                                    id="kategori"
                                    name="kategori_id"
                                 >
                                    {kategori.map((item) => {
                                       return (
                                          <option
                                             key={item.id}
                                             className="text-black"
                                             value={item.id}
                                          >
                                             {item.nama_kategori}
                                          </option>
                                       );
                                    })}
                                 </select>
                              </div>
                              <div className="mb-4">
                                 <label
                                    className="block text-gray-600"
                                    htmlFor="harga-dingin"
                                 >
                                    Harga Dingin:
                                 </label>
                                 <input
                                    defaultValue={menu.harga_dingin}
                                    name="harga_dingin"
                                    type="number"
                                    id="harga-dingin"
                                    className="block w-full p-2 pl-10 text-gray-700"
                                    placeholder="Masukkan harga dingin"
                                 />
                              </div>
                              <div className="mb-4">
                                 <label
                                    className="block text-gray-600"
                                    htmlFor="harga-panas"
                                 >
                                    Harga Panas:
                                 </label>
                                 <input
                                    defaultValue={menu.harga_panas}
                                    name="harga_panas"
                                    type="number"
                                    id="harga-panas"
                                    className="block w-full p-2 pl-10 text-gray-700"
                                    placeholder="Masukkan harga panas"
                                 />
                              </div>
                              <div className="mb-4">
                                 <label
                                    className="block text-gray-600"
                                    htmlFor="image"
                                 >
                                    Gambar:
                                 </label>
                                 <input
                                    name="image"
                                    type="file"
                                    id="image"
                                    className="block w-full p-2 pl-10 text-gray-700"
                                 />
                              </div>
                              <button
                                 className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                                 onClick={() => handleEditSubmit(menu.id)}
                              >
                                 Simpan
                              </button>
                              <button
                                 className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded ml-2"
                                 onClick={handleCloseEditModal}
                              >
                                 Batal
                              </button>
                           </form>
                        )
                  )}
               </div>
            </div>
         </Modal>

         <Modal isOpen={isModalDeleteOpen} onClose={handleCloseDeleteModal}>
            <div className="modal-container">
               <div className="modal-content bg-white p-4 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-2">
                     Konfirmasi Penghapusan
                  </h2>
                  <p className="text-gray-600 mb-4">
                     Apakah Anda yakin ingin menghapus item ini?
                  </p>
                  <div className="flex justify-end">
                     <button
                        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleDelete}
                     >
                        Ya, hapus
                     </button>
                     <button
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded ml-2"
                        onClick={handleCloseDeleteModal}
                     >
                        Batal
                     </button>
                  </div>
               </div>
            </div>
         </Modal>
      </div>
   );
};

export default Menu;
