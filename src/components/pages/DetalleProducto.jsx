import { useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";

const DetalleProducto = ({buscarProducto}) => {
  const {id} = useParams()
  const [productoBuscado, setProductoBuscado] = useState({})

  useEffect(()=>{
    const producto = buscarProducto(id)
    setProductoBuscado(producto)
  },[])

  return (
    <Container className="my-3 mainSection">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img
              variant="top"
              src={productoBuscado.imagen}
              alt={productoBuscado.nombreProducto}
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title className="primary-font">{productoBuscado.nombreProducto}</Card.Title>
              <hr />
              <Card.Text>
              {productoBuscado.descripcion_amplia}
              <br/>
              <br/>
              <span className="primary-font fw-semibold ">Categoria:</span> {productoBuscado.categoria}
              <br className='mb-3'/>
              <span className="primary-font fw-semibold ">Precio: ${productoBuscado.precio}</span></Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleProducto;
