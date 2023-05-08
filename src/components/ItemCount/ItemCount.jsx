import React, { useState } from "react";
import Button from "react-bootstrap/Button"

import './assets/ItemCount.css'

export const ItemCount  = () => {

    const [counter, setCounter] = useState (1)
    const aviableStock = 4
    
    const addCount = () => {
        if (counter<aviableStock) {
            setCounter(prev => prev +1 )
        }
    }

    const removeCount = () => {
        if (counter>1) {
        setCounter(prev => prev -1 )
        }
    }



    return (
        <div id="counter-container">
            <Button variant="dark" onClick={removeCount} id="counter-button">-</Button>
            <div id="counter-num">{counter}</div>
            <Button variant="dark" onClick={addCount} id="counter-button">+</Button>
            <Button variant="primary" id="add-button">Agregar al Carrito</Button>
        </div>
    )
}