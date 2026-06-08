import "./css/styles.css";
import "./css/listaProyectos.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ListaProyectos from "./views/ListaProyectos";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./views/Dashboard";
import DetalleProyecto from "./views/DetalleProyecto";
import PerfilUsuario from "./views/PerfilUsuario";

const App = () => {
  return (
    <Router>
      <Header />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/inicio" />} />
          <Route path="/inicio" element={<Dashboard />} />
          <Route path="/proyectos" element={<ListaProyectos />} />
          <Route path="/proyectos/:id" element={<DetalleProyecto />} />
          <Route path="/perfil" element={<PerfilUsuario />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
