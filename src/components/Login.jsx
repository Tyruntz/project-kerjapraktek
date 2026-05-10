import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/login.json', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      if (response.ok) {
        window.location.href = '/admin';
      } else {
        const result = await response.json();
        setError(result.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Akun tidak ditemukan');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Montserrat:wght@400;500;600;700&display=swap');

        .login-page {
          min-height: 100vh;
          display: flex;
          background: #0a0806;
          font-family: 'Montserrat', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .login-bg {
          position: absolute; inset: 0;
          background: url('https://ujchqhvrzsuscnkdwvyi.supabase.co/storage/v1/object/public/images/images/8543918D-D235-4968-BADE-CC3D638968A9.JPG') center/cover;
          opacity: 0.12;
        }
        .login-grain {
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          opacity: 0.4;
        }
        .login-left {
          flex: 1;
          display: flex; align-items: center; justify-content: center;
          padding: 60px;
          position: relative;
        }
        .login-left-inner { max-width: 380px; }
        .login-eyebrow {
          font-size: 8px; letter-spacing: 5px;
          text-transform: uppercase; color: #d4a853;
          font-weight: 600; margin-bottom: 24px;
          display: flex; align-items: center; gap: 12px;
        }
        .login-eyebrow::before, .login-eyebrow::after {
          content: ''; flex: 1; height: 1px; background: rgba(212,168,83,0.3);
        }
        .login-headline {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(40px, 6vw, 64px);
          font-weight: 300;
          color: #fff;
          line-height: 1.05;
          margin-bottom: 24px;
        }
        .login-headline em { color: #d4a853; font-style: italic; }
        .login-desc {
          font-size: 12px; line-height: 1.8;
          color: rgba(255,255,255,0.35);
          max-width: 300px;
        }
        .login-divider-gold {
          width: 1px; height: 120px;
          background: linear-gradient(to bottom, transparent, rgba(212,168,83,0.3), transparent);
          margin: 0 60px;
          align-self: center;
          flex-shrink: 0;
        }
        .login-right {
          display: flex; align-items: center; justify-content: center;
          padding: 60px;
          position: relative;
          flex: 0 0 420px;
        }
        .login-card {
          width: 100%; max-width: 360px;
          background: rgba(250,249,246,0.04);
          border: 1px solid rgba(212,168,83,0.15);
          border-radius: 4px;
          padding: 48px 40px;
          backdrop-filter: blur(20px);
        }
        .login-card-logo {
          display: flex; flex-direction: column;
          align-items: center; margin-bottom: 36px;
        }
        .login-logo-img {
          width: 52px; height: 52px;
          border-radius: 50%; object-fit: cover;
          border: 2px solid rgba(212,168,83,0.4);
          margin-bottom: 12px;
        }
        .login-logo-name {
          font-size: 13px; font-weight: 700;
          color: #fff; letter-spacing: 4px;
          text-transform: uppercase;
        }
        .login-logo-sub {
          font-size: 8px; color: rgba(212,168,83,0.6);
          letter-spacing: 3px; text-transform: uppercase;
          margin-top: 3px;
        }
        .login-card-title {
          font-size: 11px; font-weight: 600;
          letter-spacing: 2px; text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          text-align: center; margin-bottom: 28px;
        }
        .login-field { margin-bottom: 16px; }
        .login-field-label {
          display: block;
          font-size: 8px; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase;
          color: rgba(212,168,83,0.7); margin-bottom: 8px;
        }
        .login-field-input {
          width: 100%; padding: 13px 16px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 2px;
          font-size: 13px; color: #fff;
          font-family: 'Montserrat', sans-serif;
          outline: none; transition: border-color 0.2s;
          box-sizing: border-box;
        }
        .login-field-input:focus { border-color: rgba(212,168,83,0.5); }
        .login-field-input::placeholder { color: rgba(255,255,255,0.2); }
        .login-submit {
          width: 100%; padding: 14px;
          margin-top: 8px;
          background: linear-gradient(135deg, #b8651a 0%, #d4a853 100%);
          color: #fff; border: none; border-radius: 2px;
          font-size: 9px; font-weight: 700;
          letter-spacing: 3px; text-transform: uppercase;
          cursor: pointer; transition: all 0.3s;
          font-family: 'Montserrat', sans-serif;
        }
        .login-submit:hover:not(:disabled) {
          box-shadow: 0 8px 30px rgba(184,101,26,0.4);
          transform: translateY(-1px);
        }
        .login-submit:disabled { opacity: 0.5; cursor: not-allowed; }
        .login-error {
          margin-top: 14px; padding: 10px 14px;
          background: rgba(192,57,43,0.1);
          border: 1px solid rgba(192,57,43,0.2);
          border-radius: 2px;
          font-size: 11px; color: #e74c3c;
          text-align: center;
        }

        @media(max-width: 900px) {
          .login-left { display: none; }
          .login-divider-gold { display: none; }
          .login-right { flex: 1; }
          .login-card { max-width: 400px; }
        }
        @media(max-width: 480px) {
          .login-right { padding: 24px; }
          .login-card { padding: 32px 24px; }
        }
      `}</style>

      <div className="login-page">
        <div className="login-bg" />
        <div className="login-grain" />

        {/* Left */}
        <div className="login-left">
          <div className="login-left-inner">
            <div className="login-eyebrow">Admin Portal</div>
            <h1 className="login-headline">
              Manage<br />Your <em>Coffee</em><br />Empire
            </h1>
            <p className="login-desc">
              Pantau pesanan real-time, kelola menu, dan lihat laporan penjualan Jima Coffee dalam satu dashboard.
            </p>
          </div>
        </div>

        <div className="login-divider-gold" />

        {/* Right */}
        <div className="login-right">
          <div className="login-card">
            <div className="login-card-logo">
              <img
                className="login-logo-img"
                src="https://ujchqhvrzsuscnkdwvyi.supabase.co/storage/v1/object/public/images/images/logo-jima.png?t=2024-06-22T15%3A24%3A04.578Z"
                alt="Jima"
              />
              <div className="login-logo-name">Jima</div>
              <div className="login-logo-sub">Coffee House</div>
            </div>

            <div className="login-card-title">Sign In to Dashboard</div>

            <form onSubmit={handleSubmit}>
              <div className="login-field">
                <label className="login-field-label" htmlFor="email">Email Address</label>
                <input
                  className="login-field-input"
                  type="text" id="email"
                  placeholder="admin@jimacoffee.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="login-field">
                <label className="login-field-label" htmlFor="password">Password</label>
                <input
                  className="login-field-input"
                  type="password" id="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="login-submit" type="submit" disabled={loading}>
                {loading ? "Signing In..." : "Sign In"}
              </button>
            </form>

            {error && <div className="login-error">{error}</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
