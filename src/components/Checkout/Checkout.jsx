import { useState } from "react"
import { useContext } from "react"

import { getFirestore, collection, addDoc, Timestamp } from "firebase/firestore"
import Form from "react-bootstrap/Form"
import { Button } from "react-bootstrap"
import Swal from 'sweetalert2'

import { CartContext } from "../../context/cartContext"
import './assets/Checkout.css'

export const Checkout = () => {
    const { addedProducts, clear , total , redirect } = useContext(CartContext)

    const [formValues, setFormValues] = useState({
		name: "",
		phone: "",
		email: "",
		email2: "",
	})

    const sendOrder = () => {
		const order = {
			buyer: formValues,
			items: addedProducts,
			total: total(),
			date: Timestamp.fromDate(new Date())
		}

		const db = getFirestore()
		const orderCollection = collection(db, "orders")

		addDoc(orderCollection, order).then(response => {
			if (response.id) {
				Swal.fire(
					'¡Compra realizada!',
					'Código de compra: ' + response.id,
					'success'
				  ).then((value) => {
					if (value=true) {
						clear()
					}
				})
				
			}
		})
	}

	const handleChange = ev => {
		setFormValues(prev => ({
			...prev,
			[ev.target.name]: ev.target.value,
		}))
	}

    return (
        <>
            
            {!addedProducts.length ? (
                <>
                    {redirect()}
                </>
			) : (
                <>
                    <h2 id="checkout-title">Datos del comprador/a</h2>
					<Form id="checkout-form" >
						<Form.Group
							className="mb-3"
						>
							<Form.Label>Nombre y Apellido</Form.Label>
							<Form.Control
								onChange={handleChange}
								value={formValues.name}
								type="text"
								name="name"
							/>
						</Form.Group>
                        <Form.Group className="mb-3">
							<Form.Label>Teléfono</Form.Label>
							<Form.Control
								onChange={handleChange}
								value={formValues.phone}
								type="text"
								name="phone"
							/>
						</Form.Group>
                        <Form.Group
							className="mb-3"
						>
							<Form.Label>Email</Form.Label>
							<Form.Control
								onChange={handleChange}
								value={formValues.email}
								type="email"
								name="email"
							/>
						</Form.Group>
						<Form.Group
							className="mb-3"
						>
							<Form.Label>Vuelva a ingresar su Email</Form.Label>
							<Form.Control
								onChange={handleChange}
								value={formValues.email}
								type="email"
								name="email"
							/>
						</Form.Group>

						{{...formValues.email} === {...formValues.email2} ? 
								<Button
								variant="primary"
								type="button"
								onClick={sendOrder}
							>
								Finalizar compra
							</Button> 
							: <>{Swal.fire(
								'Ocurrió un error',
								'Compruebe que los mails coincidan',
								'error'
							  )}
							  </>
							}
							
					</Form>
                </>
            )}
        </>
    )
} 