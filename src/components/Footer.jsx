import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaYoutube, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <style>{`
        .footer-root {
          background: #0a0806;
          font-family: 'Montserrat', sans-serif;
          border-top: 1px solid rgba(212,168,83,0.1);
        }
        .footer-main {
          max-width: 1280px; margin: 0 auto;
          padding: 80px 60px 60px;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 60px;
        }
        .footer-brand-logo {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 20px;
        }
        .footer-logo-img {
          width: 40px; height: 40px;
          border-radius: 50%; object-fit: cover;
          border: 1.5px solid rgba(212,168,83,0.3);
        }
        .footer-brand-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px; font-weight: 400;
          color: #fff; letter-spacing: 2px;
        }
        .footer-brand-name span { color: #d4a853; }
        .footer-brand-desc {
          font-size: 12px; line-height: 1.8;
          color: rgba(255,255,255,0.35);
          max-width: 260px; margin-bottom: 28px;
        }
        .footer-socials {
          display: flex; gap: 8px;
        }
        .footer-social-btn {
          width: 36px; height: 36px;
          border: 1px solid rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.4);
          font-size: 14px; cursor: pointer;
          transition: all 0.2s; border-radius: 2px;
          background: none;
        }
        .footer-social-btn:hover {
          border-color: #d4a853; color: #d4a853;
          background: rgba(212,168,83,0.08);
        }
        .footer-col-title {
          font-size: 8px; font-weight: 700; letter-spacing: 3px;
          text-transform: uppercase; color: #d4a853;
          margin-bottom: 20px; padding-bottom: 12px;
          border-bottom: 1px solid rgba(212,168,83,0.15);
        }
        .footer-col-links {
          display: flex; flex-direction: column; gap: 10px;
        }
        .footer-col-link {
          font-size: 12px; color: rgba(255,255,255,0.35);
          text-decoration: none; cursor: pointer;
          transition: color 0.2s; background: none; border: none;
          text-align: left; padding: 0;
          font-family: 'Montserrat', sans-serif;
        }
        .footer-col-link:hover { color: #d4a853; }
        .footer-contact-item {
          display: flex; align-items: flex-start; gap: 10px;
          margin-bottom: 12px;
        }
        .footer-contact-icon {
          color: #d4a853; font-size: 12px; margin-top: 1px; flex-shrink: 0;
        }
        .footer-contact-text {
          font-size: 12px; color: rgba(255,255,255,0.35);
          line-height: 1.5;
        }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.05);
          padding: 24px 60px;
          max-width: 1280px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 12px;
        }
        .footer-copy {
          font-size: 11px; color: rgba(255,255,255,0.2);
        }
        .footer-copy span { color: rgba(212,168,83,0.5); }
        .footer-bottom-links {
          display: flex; gap: 20px;
        }
        .footer-bottom-link {
          font-size: 10px; letter-spacing: 1px;
          color: rgba(255,255,255,0.2);
          text-decoration: none; transition: color 0.2s;
        }
        .footer-bottom-link:hover { color: #d4a853; }

        @media(max-width: 900px) {
          .footer-main { grid-template-columns: 1fr 1fr; gap: 40px; padding: 60px 24px 40px; }
          .footer-bottom { padding: 20px 24px; }
        }
        @media(max-width: 560px) {
          .footer-main { grid-template-columns: 1fr; }
        }
      `}</style>

      <footer id="lokasi" className="footer-root">
        <div className="footer-main">
          {/* Brand col */}
          <div>
            <div className="footer-brand-logo">
              <img
                className="footer-logo-img"
                src="https://ujchqhvrzsuscnkdwvyi.supabase.co/storage/v1/object/public/images/images/logo-jima.png?t=2024-06-22T15%3A24%3A04.578Z"
                alt="Jima"
              />
              <div className="footer-brand-name">
                <span>JIM</span>A
              </div>
            </div>
            <p className="footer-brand-desc">
              Sebuah cangkir kebahagiaan, dibuat dengan hati untuk setiap pelanggan yang datang ke Jima Coffee House.
            </p>
            <div className="footer-socials">
              <button className="footer-social-btn"><FaYoutube /></button>
              <button className="footer-social-btn"><FaTwitter /></button>
              <button className="footer-social-btn"><FaInstagram /></button>
              <button className="footer-social-btn"><FaLinkedin /></button>
            </div>
          </div>

          {/* Navigate col */}
          <div>
            <div className="footer-col-title">Navigate</div>
            <div className="footer-col-links">
              {["Home", "About", "Menu", "Partnership", "Contact"].map(l => (
                <span key={l} className="footer-col-link">{l}</span>
              ))}
            </div>
          </div>

          {/* Services col */}
          <div>
            <div className="footer-col-title">Services</div>
            <div className="footer-col-links">
              {["Dine In", "Take Away", "Reservasi Meja", "Custom Order", "Partnership"].map(l => (
                <span key={l} className="footer-col-link">{l}</span>
              ))}
            </div>
          </div>

          {/* Contact col */}
          <div>
            <div className="footer-col-title">Contact</div>
            <div className="footer-contact-item">
              <FaLocationDot className="footer-contact-icon" />
              <span className="footer-contact-text">
                Jl. Urai Bawadi Gg. Tria 1 (no. 5),<br />Kota Pontianak, Indonesia
              </span>
            </div>
            <div className="footer-contact-item">
              <IoLogoWhatsapp className="footer-contact-icon" />
              <span className="footer-contact-text">0878-3223-4119</span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon" style={{ fontSize: "11px" }}>✉</span>
              <span className="footer-contact-text">jimacorp@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            © 2024 <span>Jima Coffee House</span>. All rights reserved.
          </div>
          <div className="footer-bottom-links">
            <a className="footer-bottom-link" href="#">Privacy</a>
            <a className="footer-bottom-link" href="#">Terms</a>
            <a className="footer-bottom-link" href="#">Cookies</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
