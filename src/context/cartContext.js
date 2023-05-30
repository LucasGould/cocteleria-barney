import { createContext } from "react";

const CartContext = createContext([])

export const CartProvider = ({ children }) => (
    <CartContext.Provider value={[]}>{children}</CartContext.Provider>
)