import React, { useEffect } from "react";
import { useState } from "react";
import { sectionIds } from "./sectionids.jsx";

const Navbar = ({ nomorMeja }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (sectionId) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const marginTop = 0;
      const scrollToY =
        element.getBoundingClientRect().top + window.scrollY - marginTop;
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
      setIsScrolled(window.scrollY > 60);
      determineActiveSection();
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const navLabels = {
    home: "Home",
    about: "About",
    "/menu": "Menu",
    partner: "Partnership",
    contact: "Contact",
  };

  return (
    <>
      <style>{`
        .jima-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          font-family: 'Montserrat', sans-serif;
        }
        .jima-nav.scrolled {
          background: rgba(10, 8, 6, 0.92);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(184, 141, 80, 0.15);
          box-shadow: 0 4px 40px rgba(0,0,0,0.4);
        }
        .jima-nav.top {
          background: linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 100%);
        }
        .nav-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          cursor: pointer;
        }
        .nav-logo-img {
          width: 38px; height: 38px;
          border-radius: 50%;
          object-fit: cover;
          border: 1.5px solid rgba(184,141,80,0.5);
        }
        .nav-brand-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }
        .nav-brand-name {
          font-size: 16px;
          font-weight: 700;
          color: #fff;
          letter-spacing: 3px;
          text-transform: uppercase;
        }
        .nav-brand-sub {
          font-size: 8px;
          color: rgba(184,141,80,0.8);
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-top: 2px;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 4px;
          list-style: none;
          margin: 0; padding: 0;
        }
        .nav-link-item {
          position: relative;
        }
        .nav-link {
          display: block;
          padding: 8px 16px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          cursor: pointer;
          text-decoration: none;
          transition: color 0.2s;
          border: none; background: none;
        }
        .nav-link:hover, .nav-link.active {
          color: #d4a853;
        }
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 0; left: 16px; right: 16px;
          height: 1px;
          background: #d4a853;
        }
        .nav-cta {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .nav-btn-order {
          padding: 9px 22px;
          background: linear-gradient(135deg, #b8651a, #d4a853);
          color: #fff;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          border: none;
          border-radius: 2px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .nav-btn-order:hover {
          background: linear-gradient(135deg, #d4a853, #b8651a);
          box-shadow: 0 4px 20px rgba(184,141,80,0.4);
          transform: translateY(-1px);
        }

        /* Mobile */
        .nav-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 6px;
          background: none; border: none;
        }
        .nav-hamburger span {
          display: block;
          width: 22px; height: 1.5px;
          background: #fff;
          transition: all 0.3s;
        }
        .nav-mobile-menu {
          display: none;
          flex-direction: column;
          background: rgba(10,8,6,0.97);
          border-top: 1px solid rgba(184,141,80,0.15);
          padding: 16px 0 24px;
        }
        .nav-mobile-menu.open { display: flex; }
        .nav-mobile-link {
          padding: 14px 32px;
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          cursor: pointer;
          text-decoration: none;
          border: none; background: none;
          text-align: left;
          transition: color 0.2s;
          font-weight: 600;
          font-family: 'Montserrat', sans-serif;
        }
        .nav-mobile-link:hover, .nav-mobile-link.active {
          color: #d4a853;
        }
        .nav-mobile-divider {
          height: 1px;
          background: rgba(184,141,80,0.1);
          margin: 8px 32px;
        }
        .nav-mobile-cta {
          margin: 8px 32px 0;
          padding: 12px;
          background: linear-gradient(135deg, #b8651a, #d4a853);
          color: #fff;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-align: center;
          border-radius: 2px;
          text-decoration: none;
          display: block;
        }

        @media (max-width: 768px) {
          .nav-links, .nav-cta { display: none; }
          .nav-hamburger { display: flex; }
          .nav-inner { padding: 0 20px; }
        }
      `}</style>

      <nav className={`jima-nav ${isScrolled ? "scrolled" : "top"}`}>
        <div className="nav-inner">
          {/* Brand */}
          <div className="nav-brand" onClick={() => scrollToSection("home")}>
            <img
              className="nav-logo-img"
              src="https://ujchqhvrzsuscnkdwvyi.supabase.co/storage/v1/object/public/images/images/logo-jima.png?t=2024-06-22T15%3A24%3A04.578Z"
              alt="Jima"
            />
            <div className="nav-brand-text">
              <span className="nav-brand-name">Jima</span>
              <span className="nav-brand-sub">Coffee House</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <ul className="nav-links">
            {sectionIds.map((sectionId, i) => (
              <li key={i} className="nav-link-item">
                {sectionId === "/menu" ? (
                  <a
                    className="nav-link"
                    href={`/menu?meja=${nomorMeja}`}
                  >
                    Menu
                  </a>
                ) : (
                  <button
                    className={`nav-link${activeLink === sectionId ? " active" : ""}`}
                    onClick={() => scrollToSection(sectionId)}
                  >
                    {navLabels[sectionId] || sectionId}
                  </button>
                )}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="nav-cta">
            <a className="nav-btn-order" href={`/menu?meja=${nomorMeja}`}>
              Order Now
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <span style={{ transform: isOpen ? "rotate(45deg) translateY(6.5px)" : "none" }} />
            <span style={{ opacity: isOpen ? 0 : 1 }} />
            <span style={{ transform: isOpen ? "rotate(-45deg) translateY(-6.5px)" : "none" }} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`nav-mobile-menu${isOpen ? " open" : ""}`}>
          {sectionIds.map((sectionId, i) => (
            sectionId === "/menu" ? (
              <a
                key={i}
                className="nav-mobile-link"
                href={`/menu?meja=${nomorMeja}`}
              >
                Menu
              </a>
            ) : (
              <button
                key={i}
                className={`nav-mobile-link${activeLink === sectionId ? " active" : ""}`}
                onClick={() => scrollToSection(sectionId)}
              >
                {navLabels[sectionId] || sectionId}
              </button>
            )
          ))}
          <div className="nav-mobile-divider" />
          <a className="nav-mobile-cta" href={`/menu?meja=${nomorMeja}`}>
            Order Now
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
