import React, { useState, useEffect } from "react";

const Thanks = () => {
    const [countdown, setCountdown] = useState(10); // Waktu hitung mundur dalam detik

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        // Membersihkan timer saat komponen tidak lagi dirender
        return () => clearInterval(timer);
    }, []);

    // Redirect ke beranda setelah waktu hitung mundur habis
    useEffect(() => {
        if (countdown === 0) {
            window.location.href = "/";
        }
    }, [countdown]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    return (
        <div className="thanks-container">
            <h1>Terima Kasih!</h1>
            <p>Pesanan sedang diproses🤗</p>
            <p>Anda akan diarahkan kembali ke beranda dalam {formatTime(countdown)}.</p>
        </div>
    );
};

export default Thanks;
