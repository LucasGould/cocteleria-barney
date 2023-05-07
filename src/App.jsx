import './App.css';
import { ItemDetailContainer } from './components/ItemDetailContainer.jsx/ItemDetailContainer';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './container/ItemListContainer';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={ <ItemListContainer greeting={"Bienvenido a Barney's - Bebidas con alcohol."} />}></Route>
      <Route path="/category/:id" element={ <ItemListContainer greeting="Productos" />}></Route>
      <Route path="/item/:id" element={ <ItemDetailContainer />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
