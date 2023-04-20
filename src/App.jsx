import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './container/ItemListConstainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Bienvenido a Barney's - Coctelería a la puerta de tu casa."} />
    </>
  );
}

export default App;
