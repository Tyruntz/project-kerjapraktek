import React from "react";

const navItems = [
  {
    section: "Menu Utama",
    items: [
      {
        name: "Dashboard",
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="7" height="9" rx="1" />
            <rect x="14" y="3" width="7" height="5" rx="1" />
            <rect x="14" y="12" width="7" height="9" rx="1" />
            <rect x="3" y="16" width="7" height="5" rx="1" />
          </svg>
        ),
      },
      {
        name: "Transaction",
        badge: null,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        ),
      },
      {
        name: "Menu",
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
            <line x1="6" y1="1" x2="6" y2="4" />
            <line x1="10" y1="1" x2="10" y2="4" />
            <line x1="14" y1="1" x2="14" y2="4" />
          </svg>
        ),
      },
    ],
  },
  {
    section: "Laporan",
    items: [
      {
        name: "Report",
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
          </svg>
        ),
      },
    ],
  },
  {
    section: "Akun",
    items: [
      {
        name: "Logout",
        className: "logout",
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16,17 21,12 16,7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
        ),
      },
    ],
  },
];

const Sidebar = ({ activeComponent, onItemClick, isOpen, onClose }) => {
  return (
    <aside className={`admin-sidebar${isOpen ? " open" : ""}`}>
      {/* Logo */}
      <div className="sidebar-logo">
        <div className="logo-mark">J</div>
        <div className="logo-info">
          <div className="logo-name">Jima Coffee</div>
          <div className="logo-role">Admin Panel</div>
        </div>
      </div>

      {/* Nav */}
      <nav className="sidebar-nav">
        {navItems.map((section) => (
          <div key={section.section}>
            <div className="nav-section-label">{section.section}</div>
            {section.items.map((item) => (
              <div
                key={item.name}
                className={`nav-item${activeComponent === item.name ? " active" : ""}${item.className ? ` ${item.className}` : ""}`}
                onClick={() => onItemClick(item.name)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && onItemClick(item.name)}
              >
                {item.icon}
                <span>{item.name}</span>
                {item.badge && <span className="nav-badge">{item.badge}</span>}
              </div>
            ))}
          </div>
        ))}
      </nav>

      {/* Footer user */}
      <div className="sidebar-footer">
        <div className="sidebar-user">
          <div className="user-avatar">YP</div>
          <div>
            <div className="user-name">Yoga Prayoga</div>
            <div className="user-role-label">Administrator</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
