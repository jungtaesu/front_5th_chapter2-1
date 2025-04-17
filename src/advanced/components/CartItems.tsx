import { CartItemType } from "../types";

type Props = {
    items: CartItemType[];
}

const CartItems = ({ items }: Props) => {

    

    return (
        <div style={{ display: 'flex', gap: 10, justifyContent: 'space-between', flexDirection: 'column' }} id="cart-items">
            {items.length === 0 ? (
                <p>장바구니에 상품이 없습니다.</p>
            ) : (
                items.map((item, index) => (
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 10,
                        justifyContent: "space-between",
                    }} key={index} className="cart-item">
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: 10,
                        }}>
                            <h2>{item.name}</h2>
                            <p>- {item.price} 원</p>
                            <p>x {item.count}</p>
                        </div>

                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: 10,
                        }}>
                            <div style={{
                                backgroundColor: "blue",
                                color: "white",
                                padding: "5px 10px",
                                borderRadius: "5px",
                            }}>
                                -
                            </div>
                            <div style={{
                                backgroundColor: "blue",
                                color: "white",
                                padding: "5px 10px",
                                borderRadius: "5px",
                            }}>
                                +
                            </div>
                            <div style={{
                                backgroundColor: "red",
                                color: "white",
                                padding: "5px 10px",
                                borderRadius: "5px",
                            }}>
                                삭제
                            </div>
                        </div>

                    </div>
                ))
            )}
        </div>
    );
};

export default CartItems;