import './App.css';
import { ItemDetailContainer } from './components/ItemDetailContainer.jsx/ItemDetailContainer';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './container/ItemListContainer';
import { WildCard } from './components/WildCard/Wildcard';
import { CartProvider } from './context/cartContext';
import { Cart } from './components/Cart/Cart';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    < CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={ <ItemListContainer greeting={"Bienvenido a Barney's."} />}></Route>
          <Route path="/category/:id" element={ <ItemListContainer greeting="Productos" />}></Route>
          <Route path="/item/:id" element={ <ItemDetailContainer />}></Route>
          <Route path='/cart' element={<Cart/>} />
          <Route path="*" element={ <WildCard />} />
          
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
