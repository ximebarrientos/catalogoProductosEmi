import { Row, Col, Form, Button } from "react-bootstrap";

const Login = () => {

  return (
    <section className="container">
      <h1 className="display-4 my-3">Login</h1>
      <Row xs={1} md={2}>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ej: juanperez@mail.com" />
              <Form.Text className="text-danger">
               aqui muestro el error
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Ingresa tu contraseña" />
               <Form.Text className="text-danger">
               aqui muestro el error
              </Form.Text>
            </Form.Group>
            <Button variant="success" type="submit">
              Enviar
            </Button>
          </Form>
        </Col>
        <Col>
        <img src="https://images.pexels.com/photos/885021/pexels-photo-885021.jpeg" alt="Imagen de cafe" className="img-login rounded-3" />
        </Col>
      </Row>
    </section>
  );
};

export default Login;
