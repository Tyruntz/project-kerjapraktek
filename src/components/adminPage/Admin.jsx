import React, { useState, useEffect } from "react";
import Sidebar from "./sideBar/Sidebar";
import Dashboard from "./adminPage/Dashboard";
import Transaction from "./adminPage/Transaction";
import Menu from "./adminPage/Menu";
import Report from "./adminPage/Report";
import "./admin.css";

const Admin = () => {
  const [activeComponent, setActiveComponent] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleItemClick = (name) => {
    if (name === "Logout") {
      handleLogout();
      return;
    }
    setActiveComponent(name);
    setSidebarOpen(false);
  };

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/logout.json", { method: "POST" });
      if (res.ok) window.location.href = "/login";
    } catch (e) {
      console.error(e);
    }
  };

  const pageLabels = {
    Dashboard: "Dashboard",
    Transaction: "Riwayat Transaksi",
    Menu: "Manajemen Menu",
    Report: "Laporan Penjualan",
  };

  return (
    <div className="admin-root">
      {/* Overlay mobile */}
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />
      )}

      <Sidebar
        activeComponent={activeComponent}
        onItemClick={handleItemClick}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="admin-main">
        {/* Topbar */}
        <header className="admin-topbar">
          <div className="topbar-left">
            <button
              className="hamburger-btn"
              onClick={() => setSidebarOpen(true)}
              aria-label="Buka sidebar"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
            <div>
              <h1 className="topbar-title">{pageLabels[activeComponent] || activeComponent}</h1>
              <p className="topbar-sub">Jima Coffee Admin Panel</p>
            </div>
          </div>
          <div className="topbar-right">
            <div className="topbar-datetime">
              <span className="topbar-time">
                {date.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })}
              </span>
              <span className="topbar-date">
                {date.toLocaleDateString("id-ID", { weekday: "short", day: "numeric", month: "short" })}
              </span>
            </div>
            <button className="topbar-icon-btn" title="Notifikasi">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </button>
            <button className="topbar-logout-btn" onClick={handleLogout} title="Logout">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16,17 21,12 16,7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
              <span>Keluar</span>
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="admin-content">
          {activeComponent === "Dashboard" && <Dashboard />}
          {activeComponent === "Transaction" && <Transaction />}
          {activeComponent === "Menu" && <Menu />}
          {activeComponent === "Report" && <Report />}
        </main>
      </div>
    </div>
  );
};

export default Admin;
