import { elementEl } from '../main.original.js';
import { prodList, lastSelRef } from '../state.js';
import { calcCart } from '../main.original.js';

export function bindEventHandlers() {
let { cartDisp, addBtn } = elementEl();
  addBtn.addEventListener('click', handleAddToCart);
  cartDisp.addEventListener('click', handleCartInteraction);
}

function handleAddToCart() {
    let { cartDisp, sel, } = elementEl();
  const selItemId = sel.value;
  const itemToAdd = prodList.find((p) => p.id === selItemId);

  if (itemToAdd && itemToAdd.quantity > 0) {
    const existingItem = document.getElementById(itemToAdd.id);

    if (existingItem) {
      const newQty = parseInt(existingItem.querySelector('span').textContent.split('x ')[1]) + 1;
      if (newQty <= itemToAdd.quantity) {
        existingItem.querySelector('span').textContent = `${itemToAdd.name} - ${itemToAdd.price}원 x ${newQty}`;
        itemToAdd.quantity--;
      } else {
        alert('재고가 부족합니다.');
      }
    } else {
      const newItem = document.createElement('div');
      newItem.id = itemToAdd.id;
      newItem.className = 'flex justify-between items-center mb-2';
      newItem.innerHTML = `
        <span>${itemToAdd.name} - ${itemToAdd.price}원 x 1</span>
        <div>
          <button class="quantity-change bg-blue-500 text-white px-2 py-1 rounded mr-1" data-product-id="${itemToAdd.id}" data-change="-1">-</button>
          <button class="quantity-change bg-blue-500 text-white px-2 py-1 rounded mr-1" data-product-id="${itemToAdd.id}" data-change="1">+</button>
          <button class="remove-item bg-red-500 text-white px-2 py-1 rounded" data-product-id="${itemToAdd.id}">삭제</button>
        </div>`;
        cartDisp.appendChild(newItem);
      itemToAdd.quantity--;
    }

    lastSelRef.value = selItemId;
    calcCart();
  }
}

function handleCartInteraction(event) {

  const tgt = event.target;

  if (!tgt.closest('button')) return;

  const prodId = tgt.dataset.productId;
  const itemElem = document.getElementById(prodId);
  const prod = prodList.find((p) => p.id === prodId);

  if (!prod || !itemElem) return;

  if (tgt.classList.contains('quantity-change')) {
    const qtyChange = parseInt(tgt.dataset.change);
    const currentQty = parseInt(itemElem.querySelector('span').textContent.split('x ')[1]);
    const newQty = currentQty + qtyChange;

    if (newQty > 0 && newQty <= prod.quantity + currentQty) {
      itemElem.querySelector('span').textContent = `${prod.name} - ${prod.price}원 x ${newQty}`;
      prod.quantity -= qtyChange;
    } else if (newQty <= 0) {
      itemElem.remove();
      prod.quantity -= qtyChange;
    } else {
      alert('재고가 부족합니다.');
    }
  } else if (tgt.classList.contains('remove-item')) {
    const remQty = parseInt(itemElem.querySelector('span').textContent.split('x ')[1]);
    prod.quantity += remQty;
    itemElem.remove();
  }

  calcCart();
}
