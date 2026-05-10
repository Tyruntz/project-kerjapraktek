import React, { useState, useEffect } from "react";
import { supabase } from "../../services/supabase";

const Transaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetch_ = async () => {
      const res = await fetch("api/getTransaksi.json");
      const data = await res.json();
      setTransactions(data.data || []);
      setFiltered(data.data || []);
      setLoading(false);
    };
    fetch_();
  }, []);

  const handleSearch = () => {
    if (!search) { setFiltered(transactions); return; }
    setFiltered(transactions.filter((t) => t.tanggal?.includes(search)));
  };

  const getOrder = async (orderId) => {
    const { data } = await supabase.from("order").select("*").eq("id", orderId);
    if (data?.[0]) setSelectedOrder(data[0]);
  };

  if (loading) return <div className="loading-state"><div className="spinner" /> Memuat transaksi...</div>;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
      {/* Toolbar */}
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
        <input
          type="date"
          className="form-input"
          style={{ maxWidth: "180px" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          Cari
        </button>
        {search && (
          <button className="btn btn-secondary" onClick={() => { setSearch(""); setFiltered(transactions); }}>Reset</button>
        )}
        <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--text-muted)" }}>{filtered.length} transaksi</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "14px" }}>
        <style>{`
          @media(max-width:800px){.txn-grid{grid-template-columns:1fr!important}}
        `}</style>

        {/* Table */}
        <div className="panel txn-grid">
          <div className="panel-header">
            <div className="panel-title">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              Riwayat Transaksi
            </div>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID Transaksi</th>
                  <th>Tanggal</th>
                  <th>Order ID</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr><td colSpan={3} style={{ textAlign: "center", padding: "32px", color: "var(--text-muted)" }}>Tidak ada transaksi</td></tr>
                ) : filtered.map((t) => (
                  <tr
                    key={t.id}
                    onClick={() => getOrder(t.order_id)}
                    className={selectedOrder?.id === t.order_id ? "selected" : ""}
                  >
                    <td style={{ fontWeight: 700, color: "var(--accent)" }}>#{t.id}</td>
                    <td>{new Date(t.tanggal).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" })}</td>
                    <td style={{ color: "var(--text-muted)", fontSize: "11px" }}>{t.order_id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Detail */}
        <div className="panel">
          <div className="panel-header">
            <div className="panel-title">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              Detail Order
            </div>
          </div>
          {!selectedOrder ? (
            <div className="empty-state">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/></svg>
              <p>Klik transaksi untuk detail</p>
            </div>
          ) : (
            <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div>
                <div style={{ fontSize: "10px", color: "var(--text-muted)", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 700, marginBottom: "8px" }}>Info Customer</div>
                {[
                  ["Order ID", selectedOrder.id?.slice(-8)],
                  ["Tanggal", new Date(selectedOrder.created_at).toLocaleDateString("id-ID")],
                  ["Nama", selectedOrder.customer_detail?.name],
                  ["Meja", selectedOrder.table],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", padding: "5px 0", borderBottom: "1px solid var(--border)" }}>
                    <span style={{ color: "var(--text-muted)" }}>{k}</span>
                    <span style={{ fontWeight: 600 }}>{v}</span>
                  </div>
                ))}
              </div>
              <div>
                <div style={{ fontSize: "10px", color: "var(--text-muted)", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 700, marginBottom: "8px" }}>Item</div>
                {selectedOrder.item_detail?.map((item, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", padding: "4px 0" }}>
                    <span style={{ color: "var(--text-secondary)" }}>{item.name} ×{item.quantity}</span>
                    <span style={{ fontWeight: 600 }}>{(item.price * item.quantity).toLocaleString("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 })}</span>
                  </div>
                ))}
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", fontWeight: 700, paddingTop: "10px", borderTop: "1px solid var(--border)", marginTop: "6px" }}>
                  <span>Total</span>
                  <span style={{ color: "var(--accent)" }}>{selectedOrder.total?.toLocaleString("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 })}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Transaction;
