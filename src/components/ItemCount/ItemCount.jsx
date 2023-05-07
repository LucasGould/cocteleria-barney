import React, { useState } from "react";

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
        <>
            <button onClick={removeCount}>-</button>
            <div>{counter}</div>
            <button onClick={addCount} >+</button>
            <button>Agregar al carrito</button>
        </>
    )
}