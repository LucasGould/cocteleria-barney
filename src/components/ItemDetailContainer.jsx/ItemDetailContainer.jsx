import { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
import { useParams } from "react-router-dom"

import { ItemDetail } from "../ItemDetail/ItemDetail"
import products from "../../data/products.json"
import './assets/ItemDetailContainer.css'

export const ItemDetailContainer = () => {
	const [product, setProduct] = useState({})
	const { id } = useParams()

	useEffect(() => {
		const getItem = new Promise((resolve, reject) => {
			setTimeout(() => {
				const product = products.find(item => item.id === id)
				resolve(product)
			}, 2000)
		})
		getItem.then(result => setProduct(result))
	}, [id])

	 console.log(product)
	return (
		<Container id="item-detail-container">
			<ItemDetail product={product} />
		</Container>
	)
}