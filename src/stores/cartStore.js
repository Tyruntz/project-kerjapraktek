// src/stores/cartStore.js
import { atom } from 'nanostores';

export const isCartOpen = atom(false);
export const cartItems = atom([]);

export const addItemToCart = (item) => {
    const currentItems = cartItems.get();
    const itemIndex = currentItems.findIndex(cartItem => cartItem.id === item.id);
    
    if (itemIndex !== -1) {
        // Item sudah ada di keranjang, perbarui quantity
        const updatedItems = currentItems.map(cartItem =>
            cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
        cartItems.set(updatedItems);
    } else {
        // Item tidak ada di keranjang, tambahkan dengan quantity 1
        cartItems.set([...currentItems, { ...item, quantity: 1 }]);
    }

    console.log("cartItems", cartItems.get());
};

export const removeItemFromCart = (itemId) => {
    cartItems.set(cartItems.get().filter(item => item.id !== itemId));
};
