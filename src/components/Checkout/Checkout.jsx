import { useState } from "react"
import { useContext } from "react"

import { getFirestore, collection, addDoc, Timestamp } from "firebase/firestore"
import Form from "react-bootstrap/Form"
import { Button } from "react-bootstrap"

import { CartContext } from "../../context/cartContext"

export const Checkout = () => {
    const { addedProducts, clear , total , redirect } = useContext(CartContext)

    const [formValues, setFormValues] = useState({
		name: "",
		phone: "",
		email: "",
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
				clear()
				alert("Su orden: " + response.id + " ha sido completada!")
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
                    <h2>Ingresar datos de usuario</h2>
					<Form>
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
						
						<Button
							variant="primary"
							type="button"
							onClick={sendOrder}
						>
							Finalizar compra
						</Button>
					</Form>
                </>
            )}
        </>
    )
} 