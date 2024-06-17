import React, { useState, useEffect } from "react";
import Kategori from "./Kategori.jsx";
import CardMenu from "./CardMenu.jsx";


const DaftarMenu = () => {
    const [menu, setMenu] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredMenu, setFilteredMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [kategori, setKategori] = useState([]);
    

    // Fetch kategori dan menu
    useEffect(() => {
        
        

        const fetchData = async () => {
            try {
                const [menuResponse, kategoriResponse] = await Promise.all([
                    fetch("api/getMenus.json"),
                    fetch("api/getKategori.json")
                ]);

                const menuData = await menuResponse.json();
                const kategoriData = await kategoriResponse.json();

                setMenu(menuData.data);
                setFilteredMenu(menuData.data); // Initialize filteredMenu with all menu items
                setKategori(kategoriData.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        setFilteredMenu(
            menu.filter(item => item.nama.toLowerCase().includes(search.toLowerCase()))
        );
    }, [search, menu]);

    if (loading) {
        return <div className="min-h-screen grid place-content-center">Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const groupedMenu = kategori.map(kat => ({
        ...kat,
        items: filteredMenu.filter(item => item.kategori_id === kat.id)
    }));

    return (
        <div className="mt-[3.5rem]">
            <div className="border-b flex p-1 justify-end gap-3">
                <input
                    className="rounded-md w-full"
                    type="search"
                    placeholder="Cari Menu"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className="">
                {search ? (
                    // Jika ada input pencarian, tampilkan hasil pencarian tanpa pengelompokan
                    filteredMenu.length > 0 ? (
                        filteredMenu.map((menu) => (
                            <CardMenu
                                key={menu.id}
                                id={menu.id}
                                nama={menu.nama}
                                hargapanas={menu.harga_panas}
                                hargadingin={menu.harga_dingin}
                                imgurl={menu.imageurl}
                            />
                        ))
                    ) : (
                        <p className="">Opss, Sepertinya menu yang kamu cari tidak ada🙁</p>
                    )
                ) : (
                    // Jika tidak ada input pencarian, tampilkan menu dengan pengelompokan kategori
                    groupedMenu.length > 0 ? (
                        groupedMenu.map((kat) => (
                            <Kategori key={kat.id} title={kat.nama_kategori}>
                                {kat.items.length > 0 ? (
                                    kat.items.map((menu) => (
                                        <CardMenu
                                            key={menu.id}
                                            id={menu.id}
                                            nama={menu.nama}
                                            hargapanas={menu.harga_panas}
                                            hargadingin={menu.harga_dingin}
                                            imgurl={menu.imageurl}
                                        />
                                    ))
                                ) : (
                                    <p>Menu tidak ditemukan di kategori ini</p>
                                )}
                            </Kategori>
                        ))
                    ) : (
                        <p>Menu tidak ditemukan</p>
                    )
                )}
            </div>
        </div>
    );
};

export default DaftarMenu;
