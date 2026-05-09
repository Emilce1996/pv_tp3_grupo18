import "./css/styles.css";
import "./css/listaProyectos.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ListaProyectos from "./components/ListaProyectos";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <ListaProyectos />
      <Footer />
    </div>
  );
};

export default App;
