import './App.css';
import { ItemDetailContainer } from './components/ItemDetailContainer.jsx/ItemDetailContainer';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './container/ItemListContainer';
import { WildCard } from './components/WildCard/Wildcard';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={ <ItemListContainer greeting={"Bienvenido a Barney's."} />}></Route>
        <Route path="/category/:id" element={ <ItemListContainer greeting="Productos" />}></Route>
        <Route path="/item/:id" element={ <ItemDetailContainer />}></Route>
        <Route path="*" element={ <WildCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
