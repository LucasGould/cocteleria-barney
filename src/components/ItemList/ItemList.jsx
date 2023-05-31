import { Item } from "../Item/Item"

import { Loader } from "../Loader/Loader"

export const ItemList = ({ list }) => (
	<>
		{!list.length &&
			<Loader />
		}

		{list.map(item => (
			<Item key={item.id} item={item} />
		))}
	</>
)