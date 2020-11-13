import React, { useState } from 'react';

const ItemCount = ({ stock, initialValue, onAdd, item }) => {
    const styleCounter = {
        "width": "100%",
        "height": "3em",
        "borderRadius": "5px",
        "display": "flex",
        "alignItems": "center"
    }
    const styleButtons = {
        "cursor": "pointer",
        "background": "#d0d0d0",
        "border": "none",
        "minWidth": "1.7em",
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


    return <div style={styleCounter} className="">
        <div className=" p-0 w-100 d-flex justify-content-center">

            <span className=" buttons d-flex justify-content-center align-items-center rounded-left" onClick={handleSubstract} style={styleButtons}>-</span>

            <span type="number" className="px-3 bg-white text-center border-top border-bottom pt-1" >{stock > initialValue ? value : stock}</span>

            <span className="buttons rounded-right d-flex justify-content-center align-items-center" onClick={handleSum} style={styleButtons}>+</span>

            <div className="add d-flex justify-content-center ml-2">

                <span className="btn btn-success p-1" onClick={() => {
                    if (stock > 0) {
                        onAdd(item, value, stock)
                        setValue(initialValue)
                    }

                }}> Agregar</span>
            </div>

        </div>

    </div>
}
export default ItemCount;