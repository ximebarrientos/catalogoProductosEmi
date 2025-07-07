import { Button } from "react-bootstrap";
import { Link } from "react-router";

const ItemProducto = ({producto, fila}) => {
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
        <Link className="me-lg-2 btn btn-warning" to={'/administrador/editar'}>
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger">
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
