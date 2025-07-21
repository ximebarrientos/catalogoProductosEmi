import { Button, Table } from "react-bootstrap";
import ItemProducto from "./producto/ItemProducto";
import { Link } from "react-router";
import { productosPrueba } from "../../data/productosPrueba";

const Administrador = ({ setProductos, productos, borrarProducto }) => {
  console.log(productosPrueba);

  const cargarProductosPrueba = () => {
    //traer datos de prueba y cargarlo en el state
    setProductos(productosPrueba);
  };

  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Productos disponibles</h1>
        <div>
          <Link className="btn btn-primary me-2" to={"/administrador/crear"}>
            <i className="bi bi-file-earmark-plus"></i>
          </Link>
          <Button
            variant="info"
            className="text-light"
            onClick={cargarProductosPrueba}
          >
            <i className="bi bi-database-fill-up"></i>
          </Button>
        </div>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {
            productos.map((producto, indice)=> <ItemProducto key={producto.id} producto={producto} fila={indice+1} borrarProducto={borrarProducto}></ItemProducto>)
          }
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;
