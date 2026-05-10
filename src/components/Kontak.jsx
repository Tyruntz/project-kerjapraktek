import React from "react";
import { FaPhoneVolume, FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import emailjs from '@emailjs/browser';
import { useRef, useEffect, useState } from "react";

const Kontak = () => {
  const [name, setName] = useState('');
  const [email, seEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceID = 'service_1ud0p7j';
    const templateID = 'template_2h3rdqg';
    const publicKey = 'Bpb3lYKY2-8NlmXRK';
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Jima',
      message: message,
    };
    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response);
        setName(''); seEmail(''); setMessage('');
        setSent(true);
        setTimeout(() => setSent(false), 4000);
      })
      .catch((error) => console.log('FAILED...', error));
  };

  return (
    <>
      <style>{`
        .kontak-section {
          background: #faf9f6;
          padding: 120px 60px;
          font-family: 'Montserrat', sans-serif;
        }
        .kontak-inner {
          max-width: 1100px; margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px; align-items: start;
        }
        .kontak-left-tag {
          font-size: 8px; font-weight: 700; letter-spacing: 4px;
          text-transform: uppercase; color: #b8651a;
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 18px;
        }
        .kontak-left-tag::before {
          content: ''; width: 32px; height: 1px; background: #b8651a;
        }
        .kontak-left-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 4vw, 52px);
          font-weight: 300; color: #1a1714;
          line-height: 1.1; margin-bottom: 20px;
        }
        .kontak-left-title em { color: #b8651a; font-style: italic; }
        .kontak-left-desc {
          font-size: 13px; line-height: 1.8;
          color: #6b6560; margin-bottom: 48px;
        }
        .kontak-left-desc a {
          color: #b8651a; text-decoration: none; font-weight: 600;
        }
        .kontak-info-list {
          display: flex; flex-direction: column; gap: 24px;
        }
        .kontak-info-item {
          display: flex; gap: 16px; align-items: flex-start;
        }
        .kontak-info-icon {
          width: 40px; height: 40px; flex-shrink: 0;
          background: #1a1714;
          display: flex; align-items: center; justify-content: center;
          color: #d4a853; font-size: 14px;
        }
        .kontak-info-content {}
        .kontak-info-label {
          font-size: 8px; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: #9e9890; margin-bottom: 4px;
        }
        .kontak-info-val {
          font-size: 13px; color: #1a1714; font-weight: 500;
        }

        /* Form */
        .kontak-form-wrap {
          background: #fff;
          border: 1px solid #ede9e0;
          padding: 48px 40px;
        }
        .kontak-form-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 24px; font-weight: 400;
          color: #1a1714; margin-bottom: 32px;
        }
        .kontak-field { margin-bottom: 20px; }
        .kontak-label {
          display: block; font-size: 8px; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase;
          color: #6b6560; margin-bottom: 8px;
        }
        .kontak-input {
          width: 100%; padding: 12px 16px;
          border: 1px solid #e8e4dc; background: #faf9f6;
          border-radius: 2px; font-size: 13px; color: #1a1714;
          font-family: 'Montserrat', sans-serif;
          outline: none; transition: border-color 0.2s;
          box-sizing: border-box;
        }
        .kontak-input:focus { border-color: #b8651a; background: #fff; }
        .kontak-input::placeholder { color: #c5bfb5; }
        .kontak-textarea {
          width: 100%; padding: 12px 16px;
          border: 1px solid #e8e4dc; background: #faf9f6;
          border-radius: 2px; font-size: 13px; color: #1a1714;
          font-family: 'Montserrat', sans-serif;
          outline: none; transition: border-color 0.2s;
          box-sizing: border-box; resize: vertical;
          min-height: 120px;
        }
        .kontak-textarea:focus { border-color: #b8651a; background: #fff; }
        .kontak-textarea::placeholder { color: #c5bfb5; }
        .kontak-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .kontak-submit {
          width: 100%; padding: 14px;
          background: #1a1714; color: #d4a853;
          border: none; border-radius: 2px;
          font-size: 9px; font-weight: 700;
          letter-spacing: 3px; text-transform: uppercase;
          cursor: pointer; transition: all 0.3s;
          font-family: 'Montserrat', sans-serif;
          margin-top: 8px;
        }
        .kontak-submit:hover {
          background: #b8651a; color: #fff;
          box-shadow: 0 8px 24px rgba(184,101,26,0.3);
        }
        .kontak-success {
          margin-top: 14px; padding: 12px;
          background: #edf7f2; border: 1px solid rgba(45,125,79,0.2);
          border-radius: 2px; font-size: 12px; color: #2d7d4f;
          text-align: center; font-weight: 600;
        }

        @media(max-width: 900px) {
          .kontak-section { padding: 80px 24px; }
          .kontak-inner { grid-template-columns: 1fr; gap: 48px; }
          .kontak-form-wrap { padding: 32px 24px; }
        }
      `}</style>

      <div id="contact" className="kontak-section">
        <div className="kontak-inner">
          {/* Left info */}
          <div>
            <div className="kontak-left-tag">Contact Us</div>
            <h2 className="kontak-left-title">
              Let's Have a<br /><em>Conversation</em>
            </h2>
            <p className="kontak-left-desc">
              For any support, please mail to{" "}
              <a href="mailto:jimacorp@gmail.com">jimacorp@gmail.com</a>
              . Our support team will get back to you within 24 hours.
            </p>
            <div className="kontak-info-list">
              <div className="kontak-info-item">
                <div className="kontak-info-icon">
                  <FaLocationDot />
                </div>
                <div className="kontak-info-content">
                  <div className="kontak-info-label">Location</div>
                  <div className="kontak-info-val">
                    Jl. Urai Bawadi Gg. Tria 1 (no. 5),<br />Kota Pontianak, Indonesia
                  </div>
                </div>
              </div>
              <div className="kontak-info-item">
                <div className="kontak-info-icon">
                  <IoMail />
                </div>
                <div className="kontak-info-content">
                  <div className="kontak-info-label">Email</div>
                  <div className="kontak-info-val">jimacorp@gmail.com</div>
                </div>
              </div>
              <div className="kontak-info-item">
                <div className="kontak-info-icon">
                  <FaPhoneVolume />
                </div>
                <div className="kontak-info-content">
                  <div className="kontak-info-label">WhatsApp</div>
                  <div className="kontak-info-val">0878-3223-4119</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="kontak-form-wrap">
            <h3 className="kontak-form-title">Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="kontak-field">
                <label className="kontak-label">Your Name</label>
                <input
                  className="kontak-input"
                  placeholder="John Doe"
                  type="text" name="user_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="kontak-row">
                <div className="kontak-field">
                  <label className="kontak-label">Email Address</label>
                  <input
                    className="kontak-input"
                    placeholder="you@email.com"
                    type="text" name="user_email"
                    value={email}
                    onChange={(e) => seEmail(e.target.value)}
                  />
                </div>
                <div className="kontak-field">
                  <label className="kontak-label">Phone Number</label>
                  <input
                    className="kontak-input"
                    placeholder="08xx-xxxx-xxxx"
                    type="text" name="phone"
                  />
                </div>
              </div>
              <div className="kontak-field">
                <label className="kontak-label">Message</label>
                <textarea
                  className="kontak-textarea"
                  placeholder="Tell us how we can help..."
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button className="kontak-submit" type="submit">
                Send Message
              </button>
            </form>
            {sent && (
              <div className="kontak-success">
                ✓ Pesan berhasil terkirim! Kami akan segera menghubungi Anda.
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Kontak;
