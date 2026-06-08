import "./css/styles.css";
import "./css/listaProyectos.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ListaProyectos from "./views/ListaProyectos";
import Footer from "./components/Footer";
import Dashboard from "./views/Dashboard";
import PerfilUsuario from "./views/PerfilUsuario";

const App = () => {
  return (
    <div>
      <Header />
      <Nav />/
      <ListaProyectos />
      <Footer />
    </div>
  );
};

export default App;
