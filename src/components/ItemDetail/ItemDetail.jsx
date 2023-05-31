import { useContext } from "react"

import { ItemCount } from "../ItemCount/ItemCount"
import { Card } from "react-bootstrap"
import { CartContext } from "../../context/cartContext"

import './assets/ItemDetail.css'

export const ItemDetail = ({product}) => {
	const { addItem } = useContext(CartContext)

	const onAdd = quantity => addItem(product, quantity)

	return (
		
		<Card className="text-center" style={{ width: '35rem' }} id="item-detail">
			<Card.Img variant="top" src={product.pictureUrl} alt={product.title} id="detail-img"/>
			<Card.Body>
				<Card.Title id="detail-title">{product.title}</Card.Title>
				<Card.Text id="detail-text">{product.description}</Card.Text>
				<Card.Text id="detail-price">${product.price} + iva</Card.Text>
				<ItemCount stock={product.stock} onAdd={onAdd}/>
			</Card.Body>
		</Card>
		
	)
}