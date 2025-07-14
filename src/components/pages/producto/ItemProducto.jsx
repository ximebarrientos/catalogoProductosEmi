import { Button } from "react-bootstrap";
import { Link } from "react-router";
import Swal from "sweetalert2";

const ItemProducto = ({ producto, fila, borrarProducto }) => {
  const eliminarProducto = () => {
    Swal.fire({
      title: "¿Estas seguro de eliminar?",
      text: "No se puede revertir este paso posteriormente",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#198754",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        //invocar a la funcion que sabe borrar
        if (borrarProducto(producto.id)) {
          Swal.fire({
            title: "Producto eliminado",
            text: `El producto '${producto.nombreProducto}' fue eliminado correctamente`,
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Ocurrio un error",
            text: `El producto '${producto.nombreProducto}' no pudo ser eliminado`,
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <tr>
      <td className="text-center">{fila}</td>
      <td>{producto.nombreProducto}</td>
      <td className="text-end">${producto.precio}</td>
      <td className="text-center">
        <img
          src={producto.imagen}
          className="img-thumbnail"
          alt={producto.nombreProducto}
        ></img>
      </td>
      <td>{producto.categoria}</td>
      <td className="text-center">
        <Link className="me-lg-2 btn btn-warning" to={"/administrador/editar"}>
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger" onClick={eliminarProducto}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
