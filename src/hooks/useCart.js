import { useState } from "react"

export const useCart = () => {
	const [addedProducts, setaddedProducts] = useState([])

    const totalQuantity = () =>
    addedProducts.reduce(
        (acc, currValue) =>
            acc + currValue.quantity,
        0
    )

	const addItem = (product, quantity) => {
		const { stock, ...rest } = product
		const alreadyExists = addedProducts.some(
			product => product.id === rest.id
		)
		if (!alreadyExists)
			setaddedProducts(prev => [
				...prev,
				{ ...rest, quantity },
			])
		else {
			const updateProducts = addedProducts.map(
				product => {
					if (product.id === rest.id)
						return {
							...product,
							quantity: product.quantity + quantity,
						}
					else return product
				}
			)
			setaddedProducts(updateProducts)
		}
	}

	const deleteItem = id => {
		const otherProducts = addedProducts.filter(
			producto => producto.id !== id
		)
		setaddedProducts(otherProducts)
	}

	const clear = () => setaddedProducts([])

	return {
		addedProducts,
        totalQuantity,
		addItem,
		clear,
		deleteItem,
	}
}