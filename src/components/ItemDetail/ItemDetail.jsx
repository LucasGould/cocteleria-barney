import { ItemCount } from "../ItemCount/ItemCount"

export const ItemDetail = ( {product} ) => {
	return (
		<>
			<h1>{product.title}</h1>
			<img src={product.pictureUrl} alt={product.title} />
			<p>$ {product.price}</p>
			<ItemCount stock={product.stock} />
		</>
	)
}