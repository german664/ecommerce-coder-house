import React, { useState, useContext, useEffect } from 'react'

export const Context = React.createContext()

export const useCartContext = () => useContext(Context)

const CartContext = ({ defaultValue = [], children }) => {

    const cartLocalStorage = JSON.parse(localStorage.getItem('cart'))

    const [cart, setCart] = useState(cartLocalStorage && cartLocalStorage.length > 0 ? cartLocalStorage : defaultValue)

    const methods = {
        addItem(item, qty) {
            const productExist = cart.some(cartItem => cartItem.id === item.id)

            if (productExist) {
                setCart(cart.map(cartItem => {
                    if (cartItem.id === item.id) {
                        return { ...cartItem, qty: cartItem.qty + qty }

                    } else {
                        return cartItem
                    }
                }))
            } else {
                setCart([...cart, { ...item, qty: qty }])
            }
        },

        removeItem(itemId) {
            setCart(cart.filter(cartItem => cartItem.id !== itemId))
        },

        clearCart() {
            setCart(defaultValue)
        },
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return (
        <Context.Provider value={{ cart, ...methods }}>
            {children}
        </Context.Provider>
    )
}

export default CartContext
