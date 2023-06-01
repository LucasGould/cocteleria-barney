import { useContext } from "react"
import { useState } from "react"
import { Link } from 'react-router-dom'

import { ItemCount } from "../ItemCount/ItemCount"
import { Button, Card } from "react-bootstrap"
import { CartContext } from "../../context/cartContext"

import './assets/ItemDetail.css'

export const ItemDetail = ({product}) => {
	const { addItem } = useContext(CartContext)
	const [clickedButton, setClickedButton] = useState(false)

	const onAdd = quantity => {
		addItem(product, quantity)
		setClickedButton(true)
	}

	return (
		
		<Card className="text-center" style={{ }} id="item-detail">
			<Card.Img variant="top" src={product.pictureUrl} alt={product.title} id="detail-img"/>
			<Card.Body>
				<Card.Title id="detail-title">{product.title}</Card.Title>
				<Card.Text id="detail-text">{product.description}</Card.Text>
				<Card.Text id="detail-price">${product.price} + iva</Card.Text>
				{clickedButton ? <Button ><Link to="/" id="link-home">Seguir Comprando</Link></Button> : <ItemCount stock={product.stock} onAdd={onAdd}/>}
			</Card.Body>
		</Card>
		
	)
}
