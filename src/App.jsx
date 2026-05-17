import "./css/styles.css";
import "./css/listaProyectos.css";
import "./css/detalleProyecto.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ListaProyectos from "./components/ListaProyectos";
import Footer from "./components/Footer";
import DetalleProyecto from "./components/DetalleProyecto";

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <ListaProyectos />
      <DetalleProyecto />
      <Footer />
    </div>
  );
};

export default App;
