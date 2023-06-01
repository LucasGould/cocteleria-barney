import { useContext } from "react"

import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import Table from "react-bootstrap/Table"

import { CartContext } from "../../context/cartContext"
import { Checkout } from "../Checkout/Checkout"
import './assets/Cart.css'

export const Cart = () => {
	const { addedProducts, deleteItem, clear , total , redirect } = useContext(CartContext)

	return (
		<Container className="mt-4">
			<h1 id="cart-title">Lista de productos</h1>
			{!addedProducts.length ? (
                <>
				    <h3 id="cart-subtitle">No hay productos. Redireccionando a página pincipal...</h3>
                    {redirect()}
                </>
			) : (
				<>
					<Table striped bordered hover variant="dark" id="cart-table">
						<thead>
							<tr>
								<th>Nombre</th>
								<th>Cantidad</th>
								<th>Precio</th>
								<th>
                                    <Button onClick={clear} variant="danger" id="cart-clear">
										Vaciar Carrito
									</Button></th>
							</tr>
						</thead>
						<tbody>
							{addedProducts.map(producto => (
								<tr key={producto.id}>
									<td>{producto.title}</td>
									<td>{producto.quantity}</td>
                                    <td>${producto.price}</td>
									<td>
										<Button onClick={() => deleteItem(producto.id)} variant="secondary" id="cart-deleteitem">
											Eliminar
										</Button>
									</td>
								</tr>
							))}
                            <tr></tr>
						</tbody>
						<tfoot>
							<tr>
								<td>Total:</td>
								<td></td>
								<td>${total()}</td>
								<td></td>

							</tr>
						</tfoot>
					</Table>
				</>
			)}

			<Checkout />
		</Container>
	)
}