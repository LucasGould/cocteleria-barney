import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom"

import { CartContext } from "../../context/cartContext";


import cart from "./assets/carticon.png";
import Button from "react-bootstrap/Button"
import './assets/cartwidget.css'


export const CartWidget = () => {
	const { totalQuantity } = useContext(CartContext)

	return (
		!!totalQuantity() && (
			<Link to="/cart">
                <>
					<img src={cart} alt="Carrito de compras" id="cartwidget-img" />
					<span id="cartwidget-span">{totalQuantity()}</span>
				    <Button>Terminar mi compra</Button>
                </>
			</Link>
		)
	)
}