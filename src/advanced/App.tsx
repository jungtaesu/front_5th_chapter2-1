import React, { useState, useEffect } from 'react';
import CartItems from './components/CartItems';
import CartTotal from './components/CartTotal';
import ProductSelect from './components/ProductSelect';
import AddToCartButton from './components/AddToCartButton';
import StockStatus from './components/StockStatus';
import { calcCart } from './utils/calcCart';
import { setEvents } from './utils/event';
import { notifyEvent, notifyDiscount } from './utils/notifyEvents';
import { prodList } from './constants';
import { CartItemType, ProductType } from './types';

export default function App() {
    const [cart, setCart] = useState<CartItemType[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<ProductType>(prodList[0]);
    const [stockStatus, setStockStatus] = useState('');

    useEffect(() => {
        // setEvents(setCart, setStockStatus);
        // notifyEvent();
        // notifyDiscount();
    }, []);

    const addToCart = () => {
        if (selectedProduct) {
            setCart((prevCart) => {
                const existingItem = prevCart.find((item) => item.id === selectedProduct.id);
                if (existingItem) {
                    console.log("existingItem:", existingItem)
                    return prevCart.map((item) =>
                        item.id === selectedProduct.id
                            ? { ...item, count: item.count + 1 }
                            : item
                    );
                } else {
                    return [...prevCart, { ...selectedProduct, count: 1 }];
                }
            });
        }
    };

    return (
        <div className="bg-gray-100 p-8">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8">
                <h1 className="text-2xl font-bold mb-4">장바구니</h1>
                <CartItems items={cart} />
                <CartTotal cartList={cart} />
                <ProductSelect prodList={prodList} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />
                <AddToCartButton addToCart={addToCart} />
                <StockStatus status={stockStatus} />
            </div>
        </div>
    );
}