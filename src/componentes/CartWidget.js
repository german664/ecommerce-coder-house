import React from 'react';

const CartWidget = () => {
    return (
        <div className="cart rounded-lg d-flex align-items-center">
            <div className="w-25 p-3 border-right h-100 d-flex align-items-center justify-content-center">
                <i class="fas fa-shopping-cart"></i>
            </div>
            <div className="w-75 p-2 d-flex justify-content-center">
                <span className="">3</span>
            </div>
        </div>
    )
}
export default CartWidget