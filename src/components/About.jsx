import React from "react";

const About = (props) => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Montserrat:wght@400;500;600;700&display=swap');

        .about-root {
          font-family: 'Montserrat', sans-serif;
          color: #1a1714;
        }

        /* ── Section shared ── */
        .about-section {
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }
        .about-section:nth-child(even) { background: #faf9f6; }
        .about-section:nth-child(odd)  { background: #fff; }

        .about-tag {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 8px; font-weight: 700; letter-spacing: 4px;
          text-transform: uppercase; color: #b8651a;
          margin-bottom: 18px;
        }
        .about-tag::before {
          content: ''; width: 32px; height: 1px; background: #b8651a;
        }

        .about-headline {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 5vw, 60px);
          font-weight: 300;
          color: #1a1714;
          line-height: 1.05;
          margin-bottom: 20px;
        }
        .about-headline em { color: #b8651a; font-style: italic; }

        .about-body {
          font-size: 14px; line-height: 1.9;
          color: #6b6560; max-width: 480px;
        }

        /* ── Section 1: Our Story ── */
        .about-s1-inner {
          max-width: 1280px; margin: 0 auto;
          padding: 0 60px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px; align-items: center;
        }
        .about-s1-img-wrap {
          position: relative;
        }
        .about-s1-img {
          width: 100%; height: 580px;
          object-fit: cover;
          display: block;
        }
        .about-s1-img-frame {
          position: absolute;
          top: 24px; left: 24px; right: -24px; bottom: -24px;
          border: 1px solid rgba(184,101,26,0.2);
          pointer-events: none;
          z-index: -1;
        }
        .about-s1-year {
          position: absolute;
          bottom: -20px; right: -20px;
          width: 100px; height: 100px;
          background: #1a1714;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 2px;
        }
        .about-s1-year-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px; font-weight: 300; color: #d4a853; line-height: 1;
        }
        .about-s1-year-label {
          font-size: 7px; letter-spacing: 2px; color: rgba(255,255,255,0.4);
          text-transform: uppercase;
        }

        /* ── Section 2: Important ── */
        .about-s2-inner {
          max-width: 1280px; margin: 0 auto;
          padding: 0 60px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px; align-items: center;
        }
        .about-s2-img-wrap { position: relative; order: 2; }
        .about-s2-left { order: 1; }
        .about-s2-img {
          width: 100%; height: 460px;
          object-fit: cover; display: block;
        }
        .about-s2-quote {
          margin-top: 32px;
          padding: 24px 28px;
          border-left: 2px solid #d4a853;
          background: #fdf8f0;
        }
        .about-s2-quote-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px; font-style: italic;
          color: #1a1714; line-height: 1.5;
          margin-bottom: 8px;
        }
        .about-s2-quote-author {
          font-size: 9px; letter-spacing: 2px;
          text-transform: uppercase; color: #b8651a; font-weight: 600;
        }

        /* ── Section 3: Our Story ── */
        .about-s3-inner {
          max-width: 1280px; margin: 0 auto;
          padding: 0 60px;
        }
        .about-s3-header {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 60px; margin-bottom: 60px;
          align-items: end;
        }
        .about-s3-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px; background: #ede9e0;
          border: 1px solid #ede9e0;
          margin-top: 40px;
        }
        .about-s3-stat {
          background: #fff; padding: 28px 24px;
          text-align: center;
        }
        .about-s3-stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 40px; font-weight: 300;
          color: #b8651a; line-height: 1;
          margin-bottom: 6px;
        }
        .about-s3-stat-label {
          font-size: 8px; letter-spacing: 2px;
          text-transform: uppercase; color: #9e9890; font-weight: 600;
        }
        .about-s3-img-row {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 2px;
        }
        .about-s3-img-main {
          width: 100%; height: 400px;
          object-fit: cover; display: block;
        }
        .about-s3-img-side {
          width: 100%; height: 400px;
          object-fit: cover; display: block;
          filter: brightness(0.7);
        }

        /* ── Divider ── */
        .about-divider {
          width: 60px; height: 1px;
          background: linear-gradient(to right, #b8651a, transparent);
          margin: 24px 0;
        }

        @media(max-width: 900px) {
          .about-s1-inner, .about-s2-inner { grid-template-columns: 1fr; gap: 40px; padding: 0 24px; }
          .about-s2-img-wrap { order: 1; }
          .about-s2-left { order: 2; }
          .about-section { padding: 60px 0; }
          .about-s3-inner { padding: 0 24px; }
          .about-s3-header { grid-template-columns: 1fr; gap: 24px; }
          .about-s3-img-row { grid-template-columns: 1fr; }
          .about-s3-img-side { display: none; }
          .about-s1-img, .about-s2-img { height: 320px; }
        }
      `}</style>

      <div id="about" className="about-root">

        {/* ── Section 1: Our Story ── */}
        <section className="about-section">
          <div className="about-s1-inner">
            <div>
              <div className="about-tag">Our Story</div>
              <h2 className="about-headline">
                Mari<br /><em>Berkenalan</em>
              </h2>
              <div className="about-divider" />
              <p className="about-body">
                Mari berkenalan dengan tim kami mulai dari toko, lingkungan, dan orang-orang yang bekerja bersama kami. Setiap cangkir yang kami sajikan adalah cerita tentang dedikasi dan passion.
              </p>
            </div>
            <div className="about-s1-img-wrap">
              <img
                src="https://ujchqhvrzsuscnkdwvyi.supabase.co/storage/v1/object/public/images/images/C1B9322C-4591-46BB-B357-A4289FB3D84E.jpg"
                alt="Jima Coffee Team"
                className="about-s1-img"
              />
              <div className="about-s1-img-frame" />
              <div className="about-s1-year">
                <span className="about-s1-year-num">2023</span>
                <span className="about-s1-year-label">Founded</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 2: Tell a Story ── */}
        <section className="about-section">
          <div className="about-s2-inner">
            <div className="about-s2-left">
              <div className="about-tag">Tell a Story</div>
              <h2 className="about-headline">
                Penting untuk<br /><em>Hari Ini</em>
              </h2>
              <div className="about-divider" />
              <p className="about-body">
                Di dunia yang serba cepat, mudah sekali kita kehilangan fokus terhadap apa yang sebenarnya penting. Jima menyediakan tempat bernaung, dimana kamu bisa beristirahat sejenak dan menikmati secangkir kopi buatan dari Hati.
              </p>
              <div className="about-s2-quote">
                <p className="about-s2-quote-text">
                  "Jima ingin menginspirasi orang untuk menyadari hal penting dalam kehidupan di tengah-tengah kesibukan mereka."
                </p>
                <span className="about-s2-quote-author">— Jima Coffee Philosophy</span>
              </div>
            </div>
            <div className="about-s2-img-wrap">
              <img
                src="https://ujchqhvrzsuscnkdwvyi.supabase.co/storage/v1/object/public/images/images/8543918D-D235-4968-BADE-CC3D638968A9.JPG"
                alt="Coffee Moment"
                className="about-s2-img"
              />
            </div>
          </div>
        </section>

        {/* ── Section 3: About Jima ── */}
        <section className="about-section">
          <div className="about-s3-inner">
            <div className="about-s3-header">
              <div>
                <div className="about-tag">About Jima</div>
                <h2 className="about-headline">
                  Cerita<br /><em>Kami</em>
                </h2>
                <div className="about-s3-stats">
                  <div className="about-s3-stat">
                    <div className="about-s3-stat-num">2023</div>
                    <div className="about-s3-stat-label">Est. Year</div>
                  </div>
                  <div className="about-s3-stat">
                    <div className="about-s3-stat-num">100%</div>
                    <div className="about-s3-stat-label">Premium Beans</div>
                  </div>
                  <div className="about-s3-stat">
                    <div className="about-s3-stat-num">∞</div>
                    <div className="about-s3-stat-label">Happy Cups</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="about-divider" />
                <p className="about-body">
                  Didirikan pada tahun 2023, Jima Coffee adalah startup kopi yang bercita-cita membuat kopi spesial terbaik untuk pelanggan. Kami ingin kehadiran kami bisa meningkatkan kualitas kopi dalam komunitas kita.
                </p>
                <br />
                <p className="about-body">
                  Dengan jaringan dan pengalaman, kami menggunakan teknologi terkini untuk alat dan biji kopi kami. Diambil langsung dari petani pilihan, biji kopi berkualitas tinggi diproses dan dipanggang sempurna oleh kami.
                </p>
              </div>
            </div>
            <div className="about-s3-img-row">
              <img
                src="https://ujchqhvrzsuscnkdwvyi.supabase.co/storage/v1/object/public/images/images/IMG_3983.jpg"
                alt="Jima Coffee"
                className="about-s3-img-main"
              />
              <img
                src="https://ujchqhvrzsuscnkdwvyi.supabase.co/storage/v1/object/public/images/images/C1B9322C-4591-46BB-B357-A4289FB3D84E.jpg"
                alt="Coffee Detail"
                className="about-s3-img-side"
              />
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default About;
