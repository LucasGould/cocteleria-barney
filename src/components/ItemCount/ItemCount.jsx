import React, { useState } from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button"
import InputGroup from "react-bootstrap/InputGroup"
import Form from "react-bootstrap/Form"
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './assets/ItemCount.css'

export const ItemCount = ({ stock, onAdd, initial }) => {
	const [counter, setCounter] = useState(initial ?? 1)

	const handleIncreaseCount = () => {
		if (stock > counter) setCounter(counter + 1)
	}

	const handleDecreaseCount = () => {
		if (counter > 0) setCounter(counter - 1)
	}

	const notification = () => {
		toast.success('Item agregado!', {
			position: "bottom-right",
			autoClose: 5000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "dark",
			});
	} 

	return (
		<section>
			{stock > 0 ? (
				<>
					<InputGroup>
                        <Button
							variant="primary"
							onClick={handleDecreaseCount}
						>
							-
						</Button>
                        
						<Form.Control
							readOnly={true}
							value={counter}
							className="text-center"
						/>
                        <Button
							variant="primary"
							onClick={handleIncreaseCount}
						>
							+
						</Button>
					</InputGroup>
					<ToastContainer />
					{!!counter && (
						<Button
							variant="outline-primary"
							className="mt-4"
							onClick={() =>{ onAdd(counter) ; notification()}}
							
						>
							Agregar al carrito
						</Button>
					)}
				</>
			) : (
				<>
					<div className="mt-4">No hay stock</div>
					<Button>
						<Link to="/" id="link-home">Seguir Comprando</Link>
					</Button>
				</>
			)}
		</section>
	)
}