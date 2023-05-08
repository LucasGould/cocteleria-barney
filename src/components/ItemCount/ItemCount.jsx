import React, { useState } from "react";
import Button from "react-bootstrap/Button"

import './assets/ItemCount.css'

export const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const addCount = () =>{   
        if (quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const removeCount = () => { 
        if (quantity > 0) {
            setQuantity(quantity-1)
        }
    }



    return (
        <div id="counter-container">
            <Button variant="dark" onClick={removeCount} id="counter-button">-</Button>
            <div id="counter-num">{quantity}</div>
            <Button variant="dark" onClick={addCount} id="counter-button">+</Button>
            <Button variant="primary" id="add-button" onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al Carrito</Button>
        </div>
    )
}