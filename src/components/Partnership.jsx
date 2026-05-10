import React from "react";

const Partnership = () => {
  return (
    <>
      <style>{`
        .partner-section {
          background: #0a0806;
          padding: 120px 60px;
          position: relative;
          overflow: hidden;
          font-family: 'Montserrat', sans-serif;
        }
        .partner-bg-text {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(80px, 15vw, 180px);
          font-weight: 700;
          color: rgba(255,255,255,0.02);
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          letter-spacing: 10px;
        }
        .partner-inner {
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 60px;
          align-items: center;
        }
        .partner-jima {
          text-align: right;
        }
        .partner-brand-tag {
          font-size: 8px; letter-spacing: 4px;
          text-transform: uppercase; color: rgba(212,168,83,0.6);
          font-weight: 600; margin-bottom: 12px;
        }
        .partner-brand-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 300; color: #fff;
          line-height: 1;
        }
        .partner-brand-name span { color: #d4a853; }
        .partner-brand-sub {
          font-size: 9px; letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          margin-top: 6px;
        }
        .partner-x {
          display: flex; flex-direction: column;
          align-items: center; gap: 12px;
        }
        .partner-x-line {
          width: 1px; height: 40px;
          background: linear-gradient(to bottom, transparent, rgba(212,168,83,0.4), transparent);
        }
        .partner-x-symbol {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px; font-weight: 300;
          color: rgba(212,168,83,0.5);
        }
        .partner-copa {
          text-align: left;
        }
        .partner-copa-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 300;
          color: #fff; line-height: 1;
          text-decoration: none;
          display: block;
          transition: color 0.2s;
        }
        .partner-copa-name:hover { color: #d4a853; }
        .partner-copa-name em {
          color: #d4a853; font-style: italic;
        }
        .partner-desc {
          margin-top: 60px;
          text-align: center;
          max-width: 560px;
          margin-left: auto; margin-right: auto;
        }
        .partner-desc-text {
          font-size: 14px; line-height: 1.8;
          color: rgba(255,255,255,0.4);
        }
        .partner-desc-text strong {
          color: #d4a853; font-weight: 600;
        }
        .partner-dots {
          display: flex; justify-content: center;
          gap: 8px; margin-top: 32px;
        }
        .partner-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: rgba(212,168,83,0.3);
        }
        .partner-dot.active { background: #d4a853; }

        @media(max-width: 600px) {
          .partner-section { padding: 80px 24px; }
          .partner-inner { grid-template-columns: 1fr; gap: 24px; }
          .partner-jima { text-align: center; }
          .partner-copa { text-align: center; }
          .partner-x { flex-direction: row; }
          .partner-x-line { width: 40px; height: 1px;
            background: linear-gradient(to right, transparent, rgba(212,168,83,0.4), transparent);
          }
        }
      `}</style>

      <div id="kemitraan" className="partner-section">
        <div className="partner-bg-text">PARTNER</div>

        <div className="partner-inner">
          <div className="partner-jima">
            <div className="partner-brand-tag">Coffee House</div>
            <div className="partner-brand-name">
              <span>JIM</span>A
            </div>
            <div className="partner-brand-sub">Pontianak, Indonesia</div>
          </div>

          <div className="partner-x">
            <div className="partner-x-line" />
            <div className="partner-x-symbol">×</div>
            <div className="partner-x-line" />
          </div>

          <div className="partner-copa">
            <div className="partner-brand-tag">Food Partner</div>
            <a className="partner-copa-name" href="#">
              Copa<em>banana</em>
            </a>
            <div className="partner-brand-sub">Snack & Bites</div>
          </div>
        </div>

        <div className="partner-desc">
          <p className="partner-desc-text">
            Teman berbisnis kami <strong>Copabanana</strong> menyediakan layanan makanan ringan premium untuk menemani waktumu di Jima. Nikmati kombinasi sempurna antara kopi spesial dan camilan pilihan.
          </p>
          <div className="partner-dots">
            <div className="partner-dot active" />
            <div className="partner-dot" />
            <div className="partner-dot" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Partnership;
