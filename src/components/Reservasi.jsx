import React from "react";
import { useState, useEffect } from "react";

const Reservasi = () => {
  const [nama, setNama] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [waktu, setWaktu] = useState("");
  const [jumlahOrang, setJumlahOrang] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedMessage = `*Pesan Reservasi:*\n\n*Nama:* ${nama}\n*Tanggal:* ${tanggal}\n*Waktu:* ${waktu}\n*Jumlah Orang:* ${jumlahOrang}\n\n*Mohon konfirmasi reservasi.*\n\n*Terima kasih.*`;
    const encodedMessage = encodeURIComponent(formattedMessage);
    setNama(""); setTanggal(""); setWaktu(""); setJumlahOrang("");
    window.open(`https://wa.me/6282251389896?text=${encodedMessage}`, "_blank");
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Montserrat:wght@400;500;600;700&display=swap');

        .res-page {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          font-family: 'Montserrat', sans-serif;
        }
        .res-left {
          background: #0a0806;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 60px;
          min-height: 100vh;
        }
        .res-left-bg {
          position: absolute; inset: 0;
          background: url('https://ujchqhvrzsuscnkdwvyi.supabase.co/storage/v1/object/public/images/images/C1B9322C-4591-46BB-B357-A4289FB3D84E.jpg') center/cover;
          opacity: 0.35;
        }
        .res-left-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(10,8,6,0.95) 0%, rgba(10,8,6,0.3) 60%, transparent 100%);
        }
        .res-left-content { position: relative; z-index: 1; }
        .res-left-tag {
          font-size: 9px; letter-spacing: 4px; text-transform: uppercase;
          color: #d4a853; margin-bottom: 16px; font-weight: 600;
        }
        .res-left-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 300;
          color: #fff;
          line-height: 1.1;
          margin-bottom: 20px;
        }
        .res-left-title em { color: #d4a853; font-style: italic; }
        .res-left-desc {
          font-size: 13px; line-height: 1.7;
          color: rgba(255,255,255,0.5);
          max-width: 340px;
        }
        .res-left-divider {
          width: 40px; height: 1px;
          background: #d4a853;
          margin: 20px 0;
        }
        .res-left-info {
          display: flex; flex-direction: column; gap: 8px;
        }
        .res-left-info-item {
          font-size: 11px; color: rgba(255,255,255,0.4);
          display: flex; align-items: center; gap: 8px;
        }
        .res-left-info-item::before {
          content: ''; width: 4px; height: 4px;
          border-radius: 50%; background: #d4a853; flex-shrink: 0;
        }

        .res-right {
          background: #faf9f6;
          display: flex; align-items: center; justify-content: center;
          padding: 60px 48px;
        }
        .res-form-wrap { width: 100%; max-width: 400px; }
        .res-form-logo {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 40px;
        }
        .res-form-logo-img {
          width: 40px; height: 40px;
          border-radius: 50%; object-fit: cover;
          border: 2px solid #d4a853;
        }
        .res-form-logo-text { line-height: 1.2; }
        .res-form-logo-name {
          font-size: 14px; font-weight: 700;
          color: #1a1714; letter-spacing: 2px; text-transform: uppercase;
        }
        .res-form-logo-sub {
          font-size: 8px; color: #9e9890;
          letter-spacing: 3px; text-transform: uppercase;
        }
        .res-form-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: 32px; font-weight: 400;
          color: #1a1714; margin-bottom: 6px;
        }
        .res-form-sub {
          font-size: 11px; color: #9e9890;
          margin-bottom: 36px; line-height: 1.5;
        }

        .res-field { margin-bottom: 20px; }
        .res-label {
          display: block;
          font-size: 8px; font-weight: 700;
          letter-spacing: 2.5px; text-transform: uppercase;
          color: #6b6560; margin-bottom: 8px;
        }
        .res-input {
          width: 100%; padding: 13px 16px;
          border: 1px solid #e8e4dc;
          background: #fff;
          border-radius: 2px;
          font-size: 13px; color: #1a1714;
          font-family: 'Montserrat', sans-serif;
          transition: border-color 0.2s;
          outline: none;
          box-sizing: border-box;
        }
        .res-input:focus { border-color: #b8651a; }
        .res-input::placeholder { color: #c5bfb5; }
        .res-input-row {
          display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
        }
        .res-submit {
          width: 100%; padding: 15px;
          background: #1a1714; color: #d4a853;
          border: none; border-radius: 2px;
          font-size: 10px; font-weight: 700;
          letter-spacing: 3px; text-transform: uppercase;
          cursor: pointer; margin-top: 8px;
          display: flex; align-items: center; justify-content: center; gap: 10px;
          transition: all 0.3s;
          font-family: 'Montserrat', sans-serif;
        }
        .res-submit:hover {
          background: #b8651a; color: #fff;
          box-shadow: 0 8px 30px rgba(184,101,26,0.3);
        }
        .res-submit img { width: 18px; height: 18px; object-fit: contain; }
        .res-note {
          margin-top: 16px; font-size: 10px;
          color: #9e9890; text-align: center; line-height: 1.5;
        }

        @media(max-width: 768px) {
          .res-page { grid-template-columns: 1fr; }
          .res-left { min-height: 280px; padding: 40px 28px; }
          .res-right { padding: 40px 24px; }
        }
      `}</style>

      <div className="res-page">
        {/* Left panel */}
        <div className="res-left">
          <div className="res-left-bg" />
          <div className="res-left-overlay" />
          <div className="res-left-content">
            <div className="res-left-tag">Jima Coffee House</div>
            <h1 className="res-left-title">
              Reserve Your<br /><em>Perfect Moment</em>
            </h1>
            <div className="res-left-divider" />
            <p className="res-left-desc">
              Nikmati pengalaman kopi yang tak terlupakan. Kami siapkan meja terbaik untuk momen spesial Anda.
            </p>
            <div className="res-left-divider" />
            <div className="res-left-info">
              <div className="res-left-info-item">Jl. Urai Bawadi Gg. Tria 1, Pontianak</div>
              <div className="res-left-info-item">Buka setiap hari, 08.00 – 22.00 WIB</div>
              <div className="res-left-info-item">Konfirmasi via WhatsApp dalam 1×24 jam</div>
            </div>
          </div>
        </div>

        {/* Right panel - form */}
        <div className="res-right">
          <div className="res-form-wrap">
            <div className="res-form-logo">
              <img
                className="res-form-logo-img"
                src="https://ujchqhvrzsuscnkdwvyi.supabase.co/storage/v1/object/public/images/images/logo-jima.png?t=2024-06-22T15%3A24%3A04.578Z"
                alt="Jima"
              />
              <div className="res-form-logo-text">
                <div className="res-form-logo-name">Jima</div>
                <div className="res-form-logo-sub">Coffee House</div>
              </div>
            </div>

            <h2 className="res-form-heading">Reservasi Meja</h2>
            <p className="res-form-sub">Isi form di bawah dan kami akan konfirmasi via WhatsApp</p>

            <form onSubmit={handleSubmit}>
              <div className="res-field">
                <label className="res-label">Nama Lengkap</label>
                <input
                  className="res-input"
                  type="text" name="name" required
                  placeholder="Masukkan nama Anda"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                />
              </div>

              <div className="res-input-row">
                <div className="res-field">
                  <label className="res-label">Tanggal</label>
                  <input
                    className="res-input"
                    type="date" name="date" required
                    value={tanggal}
                    onChange={(e) => setTanggal(e.target.value)}
                  />
                </div>
                <div className="res-field">
                  <label className="res-label">Waktu</label>
                  <input
                    className="res-input"
                    type="time" name="time" required
                    value={waktu}
                    onChange={(e) => setWaktu(e.target.value)}
                  />
                </div>
              </div>

              <div className="res-field">
                <label className="res-label">Jumlah Tamu</label>
                <input
                  className="res-input"
                  type="number" name="people" required
                  placeholder="Berapa orang?"
                  min="1"
                  value={jumlahOrang}
                  onChange={(e) => setJumlahOrang(e.target.value)}
                />
              </div>

              <button className="res-submit" type="submit">
                Lanjutkan ke WhatsApp
                <img
                  src="https://ujchqhvrzsuscnkdwvyi.supabase.co/storage/v1/object/public/images/images/whatsapp.png"
                  alt="WA"
                />
              </button>
            </form>

            <p className="res-note">
              Dengan mengirim form ini, Anda menyetujui untuk dihubungi<br />melalui WhatsApp untuk konfirmasi reservasi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservasi;
