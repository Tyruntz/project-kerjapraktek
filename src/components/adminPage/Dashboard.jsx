import React, { useState, useEffect } from "react";

const StatCard = ({ label, value, sub, color, icon }) => (
  <div className={`stat-card stat-card--${color}`}>
    <div className="stat-card-icon">{icon}</div>
    <div className="stat-card-label">{label}</div>
    <div className="stat-card-value">{value}</div>
    {sub && <div className="stat-card-sub">{sub}</div>}
  </div>
);

const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch("api/getOrders.json");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        const today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        const filtered = data.data.filter((order) => {
          const od = new Date(order.created_at);
          return (
            od.getFullYear() === today.getFullYear() &&
            od.getMonth() === today.getMonth() &&
            od.getDate() === today.getDate()
          );
        });
        setOrders(filtered);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
    const interval = setInterval(fetchOrders, 5000);
    return () => clearInterval(interval);
  }, []);

  const totalRevenue = orders.reduce((a, o) => a + (o.total || 0), 0);
  const paid = orders.filter((o) => o.status_pembayaran === "paid").length;
  const pending = orders.filter((o) => o.status_pesanan === "pending").length;
  const done = orders.filter((o) => o.status_pesanan === "Selesai").length;

  function generateId() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  const handleDone = async (orderId) => {
    const res = await fetch("api/getOrders.json", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: orderId, status: "Selesai" }),
    });
    if (res.ok) {
      await fetch("api/getTransaksi.json", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: generateId(), tanggal: new Date(), order_id: orderId }),
      });
      setOrders((prev) =>
        prev.map((o) => (o.id === orderId ? { ...o, status_pesanan: "Selesai" } : o))
      );
      setSelectedOrder(null);
    }
  };

  const payBadge = (s) => {
    if (s === "paid") return <span className="badge badge-paid">Lunas</span>;
    if (s === "failed") return <span className="badge badge-cancel">Gagal</span>;
    return <span className="badge badge-pending">Pending</span>;
  };

  const orderBadge = (s) => {
    if (s === "Selesai") return <span className="badge badge-done">Selesai</span>;
    if (s === "pending") return <span className="badge badge-processing">Proses</span>;
    return <span className="badge badge-pending">{s}</span>;
  };

  return (
    <div className="dashboard">
      <style>{`
        .dashboard { display: flex; flex-direction: column; gap: 16px; }

        /* Stat Cards */
        .stat-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 12px; }
        .stat-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 16px;
          position: relative;
          transition: transform 0.15s, box-shadow 0.15s;
        }
        .stat-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }
        .stat-card-icon {
          width: 36px; height: 36px;
          border-radius: var(--radius-sm);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 12px;
        }
        .stat-card--amber .stat-card-icon { background: var(--accent-light); color: var(--accent); }
        .stat-card--green .stat-card-icon { background: var(--success-light); color: var(--success); }
        .stat-card--blue .stat-card-icon { background: var(--info-light); color: var(--info); }
        .stat-card--red .stat-card-icon { background: var(--danger-light); color: var(--danger); }
        .stat-card-label { font-size: 10px; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; color: var(--text-muted); margin-bottom: 6px; }
        .stat-card-value { font-size: 24px; font-weight: 700; color: var(--text-primary); line-height: 1; }
        .stat-card-sub { font-size: 11px; color: var(--text-muted); margin-top: 6px; }

        /* Panels */
        .dashboard-panels { display: grid; grid-template-columns: 1fr 300px; gap: 14px; }
        @media (max-width: 900px) { .dashboard-panels { grid-template-columns: 1fr; } }

        /* Order detail panel */
        .order-detail { padding: 16px; display: flex; flex-direction: column; gap: 12px; }
        .detail-row { display: flex; justify-content: space-between; font-size: 12px; padding: 4px 0; border-bottom: 1px solid var(--border); }
        .detail-row:last-child { border-bottom: none; }
        .detail-key { color: var(--text-muted); }
        .detail-val { color: var(--text-primary); font-weight: 600; }
        .item-list { display: flex; flex-direction: column; gap: 6px; }
        .item-row { display: flex; justify-content: space-between; font-size: 12px; }
        .total-row { display: flex; justify-content: space-between; font-size: 13px; font-weight: 700; padding-top: 10px; border-top: 1px solid var(--border); color: var(--text-primary); }

        .empty-orders {
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          padding: 48px 20px; gap: 8px; color: var(--text-muted);
        }

        .table-wrap { overflow-x: auto; }

        /* Table col accent */
        .order-id-cell { font-weight: 700; color: var(--accent); }

        .date-chip {
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 3px 10px;
          font-size: 11px;
          color: var(--text-muted);
        }
      `}</style>

      {/* Header row */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
        <h2 style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-primary)" }}>Orderan Hari Ini</h2>
        <span className="date-chip">📅 {date.toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}</span>
      </div>

      {/* Stat cards */}
      <div className="stat-grid">
        <StatCard
          label="Total Pemasukan"
          value={`Rp ${(totalRevenue / 1000).toFixed(0)}K`}
          sub={`${paid} order lunas`}
          color="amber"
          icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>}
        />
        <StatCard
          label="Total Order"
          value={orders.length}
          sub={`${pending} menunggu`}
          color="blue"
          icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>}
        />
        <StatCard
          label="Selesai"
          value={done}
          sub="order selesai"
          color="green"
          icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/></svg>}
        />
        <StatCard
          label="Pending"
          value={pending}
          sub="perlu diproses"
          color="red"
          icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>}
        />
      </div>

      {/* Panels */}
      {loading ? (
        <div className="loading-state"><div className="spinner" /> Memuat data...</div>
      ) : orders.length === 0 ? (
        <div className="panel">
          <div className="empty-orders">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/></svg>
            <p style={{ fontSize: "13px", fontWeight: 600 }}>Belum ada orderan hari ini</p>
            <p style={{ fontSize: "11px" }}>Order baru akan muncul otomatis</p>
          </div>
        </div>
      ) : (
        <div className="dashboard-panels">
          {/* Orders table */}
          <div className="panel">
            <div className="panel-header">
              <div className="panel-title">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/></svg>
                Live Orders
              </div>
              <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>Auto-refresh 5s</span>
            </div>
            <div className="table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Meja</th>
                    <th>Pembayaran</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr
                      key={order.id}
                      onClick={() => setSelectedOrder(selectedOrder?.id === order.id ? null : order)}
                      className={selectedOrder?.id === order.id ? "selected" : ""}
                    >
                      <td className="order-id-cell">#{order.id.slice(-6)}</td>
                      <td>{order.customer_detail?.name || "—"}</td>
                      <td>{order.table}</td>
                      <td>{payBadge(order.status_pembayaran)}</td>
                      <td>{orderBadge(order.status_pesanan)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Detail panel */}
          <div className="panel">
            <div className="panel-header">
              <div className="panel-title">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                Detail Order
              </div>
            </div>
            {!selectedOrder ? (
              <div className="empty-orders">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ opacity: 0.3 }}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                <p>Pilih order untuk detail</p>
              </div>
            ) : (
              <div className="order-detail">
                <div>
                  <div style={{ fontSize: "10px", color: "var(--text-muted)", marginBottom: "6px", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 700 }}>Info Customer</div>
                  <div className="detail-row"><span className="detail-key">Nama</span><span className="detail-val">{selectedOrder.customer_detail?.name}</span></div>
                  <div className="detail-row"><span className="detail-key">Email</span><span className="detail-val" style={{ fontSize: "11px" }}>{selectedOrder.customer_detail?.email}</span></div>
                  <div className="detail-row"><span className="detail-key">No HP</span><span className="detail-val">{selectedOrder.customer_detail?.phone}</span></div>
                  <div className="detail-row"><span className="detail-key">Meja</span><span className="detail-val">{selectedOrder.table}</span></div>
                </div>

                <div>
                  <div style={{ fontSize: "10px", color: "var(--text-muted)", marginBottom: "8px", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 700 }}>Item Pesanan</div>
                  <div className="item-list">
                    {selectedOrder.item_detail?.map((item, i) => (
                      <div key={i} className="item-row">
                        <span style={{ color: "var(--text-secondary)" }}>{item.name} ×{item.quantity}</span>
                        <span style={{ fontWeight: 600 }}>{(item.price * item.quantity).toLocaleString("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 })}</span>
                      </div>
                    ))}
                  </div>
                  <div className="total-row">
                    <span>Total</span>
                    <span style={{ color: "var(--accent)" }}>{selectedOrder.total?.toLocaleString("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 })}</span>
                  </div>
                </div>

                {selectedOrder.status_pesanan !== "Selesai" && (
                  <button className="btn btn-success" style={{ width: "100%", justifyContent: "center" }} onClick={() => handleDone(selectedOrder.id)}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20,6 9,17 4,12"/></svg>
                    Tandai Selesai
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
