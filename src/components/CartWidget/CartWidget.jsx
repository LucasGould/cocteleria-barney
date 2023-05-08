import React from "react";

import cart from "./assets/carticon.png";
import './assets/cartwidget.css'


export const CartWidget = ({counter}) => {
    return (
        <>
            <img src={cart} alt="" id="cartwidget-img"/>
            <span id="cartwidget-span">{counter}</span>
        </>
    );
}