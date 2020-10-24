import React, { useState } from 'react';

const ItemCount = ({ stock, initialValue, onAdd }) => {
    const styleCounter = {
        "width": "10.5em",
        "height": "6.5em",
        "borderRadius": "5px",
        "background": " #007969"
    }
    const styleButtons = {
        "cursor": "pointer",
        "background": "#d0d0d0",
        "border": "none",
        "minWidth": "1.7em",
        ':hover': {
            "background": "#000000",
            "color": "red"
        },
    }
    const [value, setValue] = useState(initialValue);
    const handleSum = () => {
        if (value < stock) {
            setValue(value + 1)
        }

    }
    const handleSubstract = () => {
        if (value > 0) {
            setValue(value - 1)
        }
    }
    const handleInput = (e) => {
        if (e.target.value <= stock) {
            setValue(parseInt(e.target.value))
        } else {
            alert("Excede el límite de stock disponible")
        }
    }


    return <div style={styleCounter} className="prueba">
        <div className=" p-2 w-100 d-flex justify-content-center">
            <span className="p-1 buttons d-flex justify-content-center align-items-center rounded-left" onClick={handleSubstract} style={styleButtons}>-</span>

            <input type="number" className="w-75 text-center border-0" value={stock > initialValue ? value : stock} onChange={handleInput} />
            <span className="buttons p-1 rounded-right d-flex justify-content-center align-items-center" onClick={handleSum} style={styleButtons}>+</span>

        </div>


        <div className="add d-flex justify-content-center">

            <span className="btn bg-white" onClick={() => {
                if (stock > 0) {
                    onAdd(value)
                    setValue(initialValue)
                }

            }}> Agregar</span>
        </div>

    </div>
}
export default ItemCount;