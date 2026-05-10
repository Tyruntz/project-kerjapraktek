import React, { useState, useEffect } from "react";
import { supabase } from "../../services/supabase";

const MenuModal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-backdrop" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        <div className="modal-header">
          <span className="modal-title">{title}</span>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        {children}
      </div>
    </div>
  );
};

const Menu = () => {
  const [menus, setMenus] = useState([]);
  const [kategori, setKategori] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalAdd, setModalAdd] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [form, setForm] = useState({ nama: "", kategori_id: "", harga_panas: "", harga_dingin: "" });
  const [imageFile, setImageFile] = useState(null);
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchAll();
  }, []);

  const fetchAll = async () => {
    const [menuRes, katRes] = await Promise.all([fetch("api/getMenus.json"), fetch("api/getKategori.json")]);
    const [menuData, katData] = await Promise.all([menuRes.json(), katRes.json()]);
    setMenus(menuData.data || []);
    setKategori(katData.data || []);
    setLoading(false);
  };

  const uploadImage = async (file) => {
    const reader = new FileReader();
    return new Promise((resolve) => {
      reader.readAsDataURL(file);
      reader.onload = () => {
        const img = new Image();
        img.src = reader.result;
        img.onload = async () => {
          const canvas = document.createElement("canvas");
          canvas.width = 500; canvas.height = 500;
          canvas.getContext("2d").drawImage(img, 0, 0, 500, 500);
          const dataUrl = canvas.toDataURL("image/jpeg");
          const bin = atob(dataUrl.split(",")[1]);
          const arr = new Uint8Array(bin.length).map((_, i) => bin.charCodeAt(i));
          const blob = new Blob([arr], { type: "image/jpeg" });
          await supabase.storage.from("images").upload(`images/${file.name}`, blob, { cacheControl: "3600", upsert: true });
          resolve(`https://ujchqhvrzsuscnkdwvyi.supabase.co/storage/v1/object/public/images/images/${file.name}`);
        };
      };
    });
  };

  const handleAdd = async () => {
    setSaving(true);
    let imageurl = "";
    if (imageFile) imageurl = await uploadImage(imageFile);
    const res = await fetch("api/addMenu.json", {
      method: "POST",
      body: JSON.stringify({ ...form, imageurl }),
    });
    const data = await res.json();
    setSaving(false);
    if (data.success) { fetchAll(); setModalAdd(false); setForm({ nama: "", kategori_id: "", harga_panas: "", harga_dingin: "" }); setImageFile(null); }
    else alert("Gagal menambah menu");
  };

  const handleEdit = async () => {
    setSaving(true);
    let extra = {};
    if (imageFile) extra.imageurl = await uploadImage(imageFile);
    const res = await fetch("api/addMenu.json", {
      method: "PUT",
      body: JSON.stringify({ id: selectedId, ...form, ...extra }),
    });
    const data = await res.json();
    setSaving(false);
    if (data.success) { fetchAll(); setModalEdit(false); }
    else alert("Gagal mengedit menu");
  };

  const handleDelete = async () => {
    const res = await fetch("api/deleteMenu.json", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: selectedId }),
    });
    const data = await res.json();
    if (data.success) { setMenus((p) => p.filter((m) => m.id !== selectedId)); setModalDelete(false); }
    else alert("Gagal menghapus");
  };

  const openEdit = (menu) => {
    setSelectedId(menu.id);
    setForm({ nama: menu.nama, kategori_id: menu.kategori_id, harga_panas: menu.harga_panas || "", harga_dingin: menu.harga_dingin || "" });
    setImageFile(null);
    setModalEdit(true);
  };

  const filtered = menus.filter((m) => m.nama.toLowerCase().includes(search.toLowerCase()));
  const katMap = Object.fromEntries(kategori.map((k) => [k.id, k.nama_kategori]));

  const FormFields = () => (
    <>
      <div>
        <label className="form-label">Nama Menu</label>
        <input className="form-input" placeholder="Contoh: Americano" value={form.nama} onChange={(e) => setForm((p) => ({ ...p, nama: e.target.value }))} />
      </div>
      <div>
        <label className="form-label">Kategori</label>
        <select className="form-select" value={form.kategori_id} onChange={(e) => setForm((p) => ({ ...p, kategori_id: e.target.value }))}>
          <option value="">Pilih kategori</option>
          {kategori.map((k) => <option key={k.id} value={k.id}>{k.nama_kategori}</option>)}
        </select>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
        <div>
          <label className="form-label">Harga Panas (Rp)</label>
          <input className="form-input" type="number" placeholder="25000" value={form.harga_panas} onChange={(e) => setForm((p) => ({ ...p, harga_panas: e.target.value }))} />
        </div>
        <div>
          <label className="form-label">Harga Dingin (Rp)</label>
          <input className="form-input" type="number" placeholder="28000" value={form.harga_dingin} onChange={(e) => setForm((p) => ({ ...p, harga_dingin: e.target.value }))} />
        </div>
      </div>
      <div>
        <label className="form-label">Foto Menu</label>
        <input className="form-input" type="file" accept="image/*" style={{ padding: "6px 10px" }} onChange={(e) => setImageFile(e.target.files[0])} />
      </div>
    </>
  );

  if (loading) return <div className="loading-state"><div className="spinner" /> Memuat menu...</div>;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
      {/* Toolbar */}
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
        <input
          className="form-input"
          style={{ maxWidth: "260px" }}
          placeholder="Cari nama menu..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-primary" onClick={() => { setForm({ nama: "", kategori_id: "", harga_panas: "", harga_dingin: "" }); setImageFile(null); setModalAdd(true); }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Tambah Menu
        </button>
        <button className="btn btn-secondary" onClick={fetchAll}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23,4 23,11 16,11"/><polyline points="1,20 1,13 8,13"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 11M1 13l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
          Refresh
        </button>
        <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--text-muted)" }}>{filtered.length} menu</span>
      </div>

      {/* Table */}
      <div className="panel">
        <div style={{ overflowX: "auto" }}>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Nama Menu</th>
                <th>Kategori</th>
                <th>Harga Panas</th>
                <th>Harga Dingin</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr><td colSpan={5} style={{ textAlign: "center", padding: "32px", color: "var(--text-muted)" }}>Tidak ada menu ditemukan</td></tr>
              ) : filtered.map((menu) => (
                <tr key={menu.id}>
                  <td style={{ fontWeight: 600, color: "var(--text-primary)" }}>{menu.nama}</td>
                  <td>{katMap[menu.kategori_id] || "—"}</td>
                  <td>{menu.harga_panas ? `Rp ${menu.harga_panas.toLocaleString()}` : <span style={{ color: "var(--text-muted)" }}>—</span>}</td>
                  <td>{menu.harga_dingin ? `Rp ${menu.harga_dingin.toLocaleString()}` : <span style={{ color: "var(--text-muted)" }}>—</span>}</td>
                  <td>
                    <div style={{ display: "flex", gap: "6px" }}>
                      <button className="btn btn-secondary btn-sm" onClick={() => openEdit(menu)}>Edit</button>
                      <button className="btn btn-danger btn-sm" onClick={() => { setSelectedId(menu.id); setModalDelete(true); }}>Hapus</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Tambah */}
      <MenuModal isOpen={modalAdd} onClose={() => setModalAdd(false)} title="Tambah Menu Baru">
        <div className="modal-body"><FormFields /></div>
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={() => setModalAdd(false)}>Batal</button>
          <button className="btn btn-primary" onClick={handleAdd} disabled={saving || !form.nama}>
            {saving ? "Menyimpan..." : "Simpan Menu"}
          </button>
        </div>
      </MenuModal>

      {/* Modal Edit */}
      <MenuModal isOpen={modalEdit} onClose={() => setModalEdit(false)} title="Edit Menu">
        <div className="modal-body"><FormFields /></div>
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={() => setModalEdit(false)}>Batal</button>
          <button className="btn btn-primary" onClick={handleEdit} disabled={saving}>
            {saving ? "Menyimpan..." : "Update Menu"}
          </button>
        </div>
      </MenuModal>

      {/* Modal Delete */}
      <MenuModal isOpen={modalDelete} onClose={() => setModalDelete(false)} title="Konfirmasi Hapus">
        <div className="modal-body">
          <p style={{ fontSize: "13px", color: "var(--text-secondary)" }}>Yakin ingin menghapus menu ini? Tindakan ini tidak bisa dibatalkan.</p>
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={() => setModalDelete(false)}>Batal</button>
          <button className="btn btn-danger" onClick={handleDelete}>Hapus</button>
        </div>
      </MenuModal>
    </div>
  );
};

export default Menu;
