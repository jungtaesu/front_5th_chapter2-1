import { calcCart } from "../utils/calcCart";
import { notifyEvent, updateSelOpts } from "../utils/notifyEvents";
import { setEvents } from "../utils/event";
import { notifyDiscount } from "../utils/notifyEvents";

export const elementms = {
    productSelect : document.createElement('select'),
    cartItems : document.createElement('div'),
    cartTotal : document.createElement('div'),
    addToCart : document.createElement('button'),
    stockStatus : document.createElement('div'),
}

export default function App() {

    var root = document.getElementById('app');
    let cont = document.createElement('div');
    var wrap = document.createElement('div');
    let hTxt = document.createElement('h1');

    //컴포넌트 id 및 클래스네임
    elementms.cartItems.id = 'cart-items';
    elementms.cartTotal.id = 'cart-total';
    elementms.productSelect.id = 'product-select';
    elementms.addToCart.id = 'add-to-cart';
    elementms.stockStatus.id = 'stock-status';
    cont.className = 'bg-gray-100 p-8';
    wrap.className = 'max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8';
    hTxt.className = 'text-2xl font-bold mb-4';
    elementms.cartTotal.className = 'text-xl font-bold my-4';
    elementms.productSelect.className = 'border rounded p-2 mr-2';
    elementms.addToCart.className = 'bg-blue-500 text-white px-4 py-2 rounded';
    elementms.stockStatus.className = 'text-sm text-gray-500 mt-2';

    hTxt.textContent = '장바구니';
    elementms.addToCart.textContent = '추가';
    setEvents();
    updateSelOpts();
    wrap.appendChild(hTxt);
    wrap.appendChild(elementms.cartItems);
    wrap.appendChild(elementms.cartTotal);
    wrap.appendChild(elementms.productSelect);
    wrap.appendChild(elementms.addToCart);
    wrap.appendChild(elementms.stockStatus);
    cont.appendChild(wrap);
    root.appendChild(cont);

    calcCart();
    notifyDiscount(); //함수 이름 설정
    notifyEvent();

};
