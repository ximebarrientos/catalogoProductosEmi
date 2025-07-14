import { BrowserRouter, Routes, Route } from "react-router";
import Administrador from "./components/pages/Administrador";
import DetalleProducto from "./components/pages/DetalleProducto";
import Error404 from "./components/pages/Error404";
import Inicio from "./components/pages/Inicio";
import CardProducto from "./components/pages/producto/CardProducto";
import FormularioProducto from "./components/pages/producto/FormularioProducto";
import Footer from "./components/shared/Footer";
import Menu from "./components/shared/Menu";
import Login from "./components/pages/Login";
import { useEffect, useState } from "react";
import ProtectorRutas from "./components/routes/ProtectorRutas";

function App() {
const usuarioSessionStorage = JSON.parse(sessionStorage.getItem('userKey')) || false  
const productosLocalStorage = JSON.parse(localStorage.getItem('productos-cafe')) || []
const [usuarioLogueado, setUsuarioLogueado] = useState(usuarioSessionStorage)
const [productos, setProductos] = useState(productosLocalStorage)

useEffect(()=>{
  localStorage.setItem('productos-cafe', JSON.stringify(productos))
},[productos])

const cargarProducto = (productoNuevo)=>{
  setProductos([...productos,productoNuevo])
  return true;
}

  return (
    <>
      <BrowserRouter>
        <Menu usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></Menu>
        <main>
          <Routes>
            <Route path="/" element={<Inicio productos={productos}></Inicio>}></Route>
            <Route path="/detalle" element={<DetalleProducto/>}></Route>
            <Route path="/login" element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}></Route>
            <Route path="/administrador" element={
              <ProtectorRutas usuarioLogueado={usuarioLogueado}>
              </ProtectorRutas>
              }>
                <Route index element={<Administrador setProductos={setProductos} productos={productos}></Administrador>}></Route>
                <Route path="crear" element={<FormularioProducto titulo={'Crear producto'}></FormularioProducto>}></Route>
                <Route path="editar" element={<FormularioProducto titulo={'Editar producto'}></FormularioProducto>}></Route>
            </Route>
            <Route path="*" element={<Error404></Error404> }></Route>
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
