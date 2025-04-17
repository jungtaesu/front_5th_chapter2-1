import { CartItemType } from "../types";
type Props = {
    cartList: CartItemType[];
}

const CartTotal = ({ cartList }: Props) => {
    console.log('cartList:', cartList);

    const calcTotal = () => {
        return cartList.reduce((acc, item) => {
            return acc + item.price * item.count;
        }, 0);
    }

    const calcBonusPts = () => {

    }

    return (
        <div id="cart-total" className="text-xl font-bold my-4">
            총합: {calcTotal()} 원
        </div>
    );
};

export default CartTotal;