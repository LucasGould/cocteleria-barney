import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

import './assets/Item.css'


export const Item = ({ item }) => (
	<Card style={{ width: "18rem" }} key={item.id} className="float-start" id="card-item">
		<Card.Img variant="top" src={item.pictureUrl} />
		<Card.Body>
			<Card.Title id="card-title">{item.title}</Card.Title>
			<Card.Text id="card-price">${item.price} + iva</Card.Text>
			<Link to={`/item/${item.id}`} id="card-button"><Button variant="primary" >Ver detalle</Button></Link>
		</Card.Body>
	</Card>
)