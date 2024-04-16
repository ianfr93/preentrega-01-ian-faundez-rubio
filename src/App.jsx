import "./App.css";
import Brand from "./Components/Brand";
import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";

function App() {
  return (
    <div>
      <div className="header__wrapper">
        <Brand />
        <NavBar />
      </div>
      <ItemListContainer Saludo="Hola a todos los visitantes de este sitio web"/>
    </div>
  );
}

export default App;
