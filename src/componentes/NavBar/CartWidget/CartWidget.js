import React from 'react';
import { useCartContext } from '../../../store/Context/CartContext';

const CartWidget = () => {
    const icon = {
        "height": "2.6em",
        "minWidth": "7em",
        "cursor": "pointer",
        "color": "#ffffff"
    }
    const bigFont = {
        "fontSize": "120%",
        "color": "#ffffff"
    }

    const { cart } = useCartContext()
    return (

        <div className={cart.length === 0 ? "d-none " : "cart rounded-lg d-flex align-items-center bg-success"} style={icon}>
            <div className="w-25 p-3 border-right h-100 d-flex align-items-center justify-content-center">
                <i className="fas fa-shopping-cart d-flex"> </i>
                <div className="position-absolute mb-4 ml-4 ">
                    <span className="bg-danger rounded-circle px-1 ml-2"> {cart.length > 0 && cart.reduce((acc, item) => acc + item.qty, 0)}</span></div>

            </div>
            <div className="w-75 p-2 d-flex justify-content-center">
                <span style={bigFont} > ${new Intl.NumberFormat().format(cart.totalPrice)}</span>
            </div>
        </div>

    )
}
export default CartWidget