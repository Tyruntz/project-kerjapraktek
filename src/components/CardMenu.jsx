import React, { useState, useEffect } from "react";
import { useStore } from "@nanostores/react";
import { addItemToCart, cartItems } from "../stores/cartStore";
import Modal from "./Modal.jsx";
import { FaMugHot } from "react-icons/fa6";
import { FaRegSnowflake } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";

const CardMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const $cartItems = useStore(cartItems);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);

  useEffect(() => {
    if (selectedVariant === "Panas") setSelectedPrice(props.hargapanas);
    else if (selectedVariant === "Dingin") setSelectedPrice(props.hargadingin);
  }, [selectedVariant]);

  const handleAddToCart = () => {
    if (selectedVariant) {
      const existingItem = $cartItems.find(
        (item) => item.id === props.id && item.variant === selectedVariant
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        addItemToCart({
          id: props.id + selectedVariant,
          itemId: props.id,
          name: props.nama + " " + selectedVariant,
          price: selectedPrice,
          variant: selectedVariant,
          imgurl: props.imgurl,
          quantity: 1,
        });
        setIsOpen(false);
      }
    } else {
      alert("Please select a variant");
    }
  };

  return (
    <>
      <style>{`
        .menu-card {
          width: 160px;
          flex-shrink: 0;
          background: #fff;
          border: 1px solid #ede9e0;
          border-radius: 4px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
          font-family: 'Montserrat', sans-serif;
          position: relative;
        }
        .menu-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.12);
          border-color: #c9a96e;
        }
        .menu-card-img-wrap {
          position: relative;
          overflow: hidden;
          height: 130px;
        }
        .menu-card-img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .menu-card:hover .menu-card-img { transform: scale(1.08); }
        .menu-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,8,6,0.5) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .menu-card:hover .menu-card-overlay { opacity: 1; }
        .menu-card-body { padding: 10px; }
        .menu-card-name {
          font-size: 12px;
          font-weight: 700;
          color: #1a1714;
          text-align: center;
          margin-bottom: 6px;
          letter-spacing: 0.3px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .menu-card-prices {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 10px;
        }
        .menu-price-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
        }
        .menu-price-label {
          font-size: 8px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #9e9890;
          font-weight: 600;
        }
        .menu-price-val {
          font-size: 11px;
          font-weight: 700;
          color: #b8651a;
        }
        .menu-price-dash { color: #ccc; font-size: 11px; }
        .menu-card-btn {
          width: 100%;
          padding: 8px;
          background: #1a1714;
          color: #d4a853;
          border: none;
          border-radius: 2px;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: all 0.2s;
          font-family: 'Montserrat', sans-serif;
        }
        .menu-card-btn:hover {
          background: #b8651a;
          color: #fff;
        }

        /* Modal overrides */
        .luxury-modal-backdrop {
          position: fixed; inset: 0;
          background: rgba(10,8,6,0.7);
          z-index: 999;
          display: flex; align-items: center; justify-content: center;
          padding: 20px;
          backdrop-filter: blur(8px);
          font-family: 'Montserrat', sans-serif;
        }
        .luxury-modal {
          background: #faf9f6;
          border: 1px solid #ede9e0;
          border-radius: 4px;
          width: 100%; max-width: 480px;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(0,0,0,0.3);
        }
        .luxury-modal-header {
          background: #1a1714;
          padding: 20px 24px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .luxury-modal-title {
          font-size: 13px; font-weight: 700;
          color: #d4a853;
          letter-spacing: 2px; text-transform: uppercase;
        }
        .luxury-modal-close {
          background: none; border: none;
          color: rgba(255,255,255,0.5);
          font-size: 20px; cursor: pointer;
          transition: color 0.2s; line-height: 1;
          padding: 0;
        }
        .luxury-modal-close:hover { color: #fff; }
        .luxury-modal-body {
          display: flex; gap: 0;
        }
        .luxury-modal-img {
          width: 200px; flex-shrink: 0;
          object-fit: cover;
        }
        .luxury-modal-right {
          flex: 1; padding: 24px;
          display: flex; flex-direction: column; gap: 16px;
        }
        .luxury-modal-section-label {
          font-size: 8px; font-weight: 700;
          letter-spacing: 2.5px; text-transform: uppercase;
          color: #9e9890; margin-bottom: 8px;
        }
        .luxury-variant-btns {
          display: flex; gap: 8px;
        }
        .luxury-variant-btn {
          flex: 1; padding: 12px 8px;
          display: flex; flex-direction: column;
          align-items: center; gap: 6px;
          border: 1.5px solid #ede9e0;
          border-radius: 4px; background: #fff;
          cursor: pointer; transition: all 0.2s;
          font-family: 'Montserrat', sans-serif;
          font-size: 10px; font-weight: 600;
          color: #6b6560;
          letter-spacing: 1px; text-transform: uppercase;
        }
        .luxury-variant-btn:hover:not(:disabled) {
          border-color: #c9a96e; color: #b8651a;
        }
        .luxury-variant-btn.selected {
          border-color: #b8651a;
          background: #fdf3ea; color: #b8651a;
        }
        .luxury-variant-btn:disabled { opacity: 0.3; cursor: not-allowed; }
        .luxury-price-display {
          padding: 12px; background: #fff;
          border: 1px solid #ede9e0; border-radius: 4px;
          text-align: center;
        }
        .luxury-price-label {
          font-size: 8px; letter-spacing: 2px; text-transform: uppercase;
          color: #9e9890; margin-bottom: 4px;
        }
        .luxury-price-val {
          font-size: 20px; font-weight: 700; color: #b8651a;
        }
        .luxury-add-btn {
          width: 100%; padding: 12px;
          background: linear-gradient(135deg, #b8651a, #d4a853);
          color: #fff; border: none; border-radius: 2px;
          font-size: 10px; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase;
          cursor: pointer; transition: all 0.2s;
          font-family: 'Montserrat', sans-serif;
        }
        .luxury-add-btn:hover {
          box-shadow: 0 8px 24px rgba(184,101,26,0.4);
          transform: translateY(-1px);
        }

        @media(max-width: 480px) {
          .luxury-modal-img { display: none; }
        }
      `}</style>

      <div className="menu-card" key={props.id}>
        <div className="menu-card-img-wrap">
          <img className="menu-card-img" src={props.imgurl} alt={props.nama} />
          <div className="menu-card-overlay" />
        </div>
        <div className="menu-card-body">
          <div className="menu-card-name">{props.nama}</div>
          <div className="menu-card-prices">
            <div className="menu-price-item">
              <span className="menu-price-label">Hot</span>
              {props.hargapanas
                ? <span className="menu-price-val">{(props.hargapanas / 1000)}K</span>
                : <span className="menu-price-dash">—</span>}
            </div>
            <div style={{ width: "1px", background: "#ede9e0" }} />
            <div className="menu-price-item">
              <span className="menu-price-label">Ice</span>
              {props.hargadingin
                ? <span className="menu-price-val">{(props.hargadingin / 1000)}K</span>
                : <span className="menu-price-dash">—</span>}
            </div>
          </div>
          <button className="menu-card-btn" onClick={openModal}>
            <FaCartPlus style={{ fontSize: "11px" }} />
            Add to Order
          </button>
        </div>
      </div>

      {/* Luxury Modal */}
      {isOpen && (
        <div className="luxury-modal-backdrop" onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}>
          <div className="luxury-modal">
            <div className="luxury-modal-header">
              <span className="luxury-modal-title">
                {selectedVariant ? `${props.nama} — ${selectedVariant}` : props.nama}
              </span>
              <button className="luxury-modal-close" onClick={() => setIsOpen(false)}>×</button>
            </div>
            <div className="luxury-modal-body">
              <img className="luxury-modal-img" src={props.imgurl} alt={props.nama} />
              <div className="luxury-modal-right">
                <div>
                  <div className="luxury-modal-section-label">Pilih Varian</div>
                  <div className="luxury-variant-btns">
                    <button
                      className={`luxury-variant-btn${selectedVariant === "Panas" ? " selected" : ""}`}
                      onClick={() => setSelectedVariant("Panas")}
                      disabled={!props.hargapanas}
                    >
                      <FaMugHot style={{ fontSize: "16px" }} />
                      Panas
                    </button>
                    <button
                      className={`luxury-variant-btn${selectedVariant === "Dingin" ? " selected" : ""}`}
                      onClick={() => setSelectedVariant("Dingin")}
                      disabled={!props.hargadingin}
                    >
                      <FaRegSnowflake style={{ fontSize: "16px" }} />
                      Dingin
                    </button>
                  </div>
                </div>

                <div className="luxury-price-display">
                  <div className="luxury-price-label">Harga</div>
                  <div className="luxury-price-val">
                    {selectedVariant === "Panas"
                      ? `Rp ${props.hargapanas?.toLocaleString("id-ID")}`
                      : selectedVariant === "Dingin"
                      ? `Rp ${props.hargadingin?.toLocaleString("id-ID")}`
                      : "—"}
                  </div>
                </div>

                <button className="luxury-add-btn" onClick={handleAddToCart}>
                  Tambah ke Pesanan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardMenu;
