import { ItemCount } from "../ItemCount/ItemCount"
import { Card } from "react-bootstrap"

import './assets/ItemDetail.css'

export const ItemDetail = ({product}) => {
	return (
		<Card className="text-center" style={{ width: '35rem' }} id="item-detail">
			<Card.Img variant="top" src={product.pictureUrl} alt={product.title} id="detail-img"/>
			<Card.Body>
				<Card.Title id="detail-title">{product.title}</Card.Title>
				<Card.Text id="detail-text">{product.description}</Card.Text>
				<Card.Text id="detail-price">${product.price} + iva</Card.Text>
				<ItemCount initial={1} stock={product.stock} onAdd={(quantity) =>console.log("Cantidad agregada", quantity)}/>
			</Card.Body>
		</Card>
		
	)
}