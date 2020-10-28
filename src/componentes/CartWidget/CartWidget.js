import React from 'react';

const CartWidget = () => {
    const cart = {
        "height": "2.6em",
        "minWidth": "7em",
        "cursor": "pointer",
    }
    const bigFont = {
        "font-size": "120%"
    }
    return (
        <div className="cart rounded-lg d-flex align-items-center bg-success" style={cart}>
            <div className="w-25 p-3 border-right h-100 d-flex align-items-center justify-content-center">
                <i class="fas fa-shopping-cart"></i>
            </div>
            <div className="w-75 p-2 d-flex justify-content-center">
                <span style={bigFont}>3</span>
            </div>
        </div>
    )
}
export default CartWidget