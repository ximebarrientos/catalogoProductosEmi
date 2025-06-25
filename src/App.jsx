import Administrador from "./components/pages/Administrador";
import DetalleProducto from "./components/pages/DetalleProducto";
import Error404 from "./components/pages/Error404";
import Inicio from "./components/pages/Inicio";
import CardProducto from "./components/pages/producto/CardProducto";
import FormularioProducto from "./components/pages/producto/FormularioProducto";
import Footer from "./components/shared/Footer";
import Menu from "./components/shared/Menu";

function App() {
  return (
    <>
      <Menu></Menu>
      <main>
        {/* <Error404></Error404> */}
        {/* <Inicio></Inicio> */}
        {/* <Administrador></Administrador> */}
        {/* <DetalleProducto></DetalleProducto> */}
        <FormularioProducto></FormularioProducto>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
