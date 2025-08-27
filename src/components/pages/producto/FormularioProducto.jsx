import { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import { crearProducto, editarProducto, obtenerProducto } from "../../../helpers/queries";
const FormularioProducto = ({ titulo, cargarProducto, buscarProducto, modificarProducto }) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const { id } = useParams();
  const navegacion = useNavigate()

  useEffect(()=>{
    if(titulo === 'Editar producto'){
      cargarDatos()
    }
  },[])

 const cargarDatos = async () => {
    const respuesta = await obtenerProducto(id);
    if (respuesta.status === 200) {
      const productoEditar = await respuesta.json();
      //dibujar los datos del producto en el formulario
      setValue("nombreProducto", productoEditar.nombreProducto);
      setValue("precio", productoEditar.precio);
      setValue("imagen", productoEditar.imagen);
      setValue("descripcion_breve", productoEditar.descripcion_breve);
      setValue("descripcion_amplia", productoEditar.descripcion_amplia);
      setValue("categoria", productoEditar.categoria);
    }
  };

  const onSubmit = async (producto) => {
    //si estoy creando
    if (titulo === "Crear producto") {
      const respuesta = await crearProducto(producto)
      if(respuesta.status === 201) {
        Swal.fire({
          title: "Creaste un producto",
          text: `El producto ${producto.nombreProducto} fue creado correctamente`,
          icon: "success",
        });
         //limpiar el formulario
        reset();
      }else{
         Swal.fire({
          title: "Ocurrio un error",
          text: `El producto ${producto.nombreProducto} no pudo ser creado. Intente nuevamente en unos minutos.`,
          icon: "Error",
        });
      }
    } else {
      const respuesta = await editarProducto(producto,id)
      if(respuesta.status===200){
        Swal.fire({
          title: "Editaste un producto",
          text: `El producto '${producto.nombreProducto}' fue editado correctamente`,
          icon: "success",
        });
      }
        //aqui quiero redireccionar
        navegacion('/administrador')
      }
    }
  };







  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">{titulo}</h1>
      <hr />
      <Form className="my-4" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Cafe"
            {...register("nombreProducto", {
              required: "El nombre del producto es un dato obligatorio",
              minLength: {
                value: 2,
                message:
                  "El nombre del producto debe tener almenos 2 caracteres",
              },
              maxLength: {
                value: 100,
                message:
                  "El nombre del producto debe tener como maximo 100 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 50"
            // step={0.1}
            {...register("precio", {
              required: "El precio es un valor obligatorio",
              min: {
                value: 50,
                message:
                  "El precio minimo del producto debe ser de almenos $50",
              },
              max: {
                value: 1000000,
                message:
                  "El precio maximo de un producto debe ser de hasta $1000000",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            {...register("imagen", {
              required: "La url de la imagen es un dato obligatorio",
              pattern: {
                value:
                  /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?(\.(jpg|jpeg|png|webp))$/,
                message:
                  "La imagen debe ser una url de imagen valida terminada en (jpg|jpeg|png|webp)",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoría*</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "Debe seleccionar una categoria",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="Infusiones">Infusiones</option>
            <option value="Batidos">Batidos</option>
            <option value="Dulce">Dulce</option>
            <option value="Salado">Salado</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Descripción breve*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Una taza de café suave y aromático."
            as="textarea"
            {...register("descripcion_breve", {
              required: "La descripción breve es un dato obligatorio",
              minLength: {
                value: 5,
                message: "La descrición breve debe tener almenos 5 caracteres",
              },
              maxLength: {
                value: 250,
                message:
                  "La descrición breve debe tener como máximo 250 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion_breve?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Descripción Amplia*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: El café americano es una bebida caliente que consiste en un espresso diluido con agua caliente, lo que resulta en una taza de café suave y aromático. Es una opción popular para aquellos que prefieren un café menos intenso que el espresso tradicional. Perfecto para disfrutar en cualquier momento del día."
            as="textarea"
            rows={4}
            {...register("descripcion_amplia", {
              required: "La descripción amplia es un dato obligatorio",
              minLength: {
                value: 10,
                message:
                  "La descrición amplia debe tener almenos 10 caracteres",
              },
              maxLength: {
                value: 500,
                message:
                  "La descrición amplia debe tener como máximo 500 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion_amplia?.message}
          </Form.Text>
        </Form.Group>

        <Button type="submit" variant="success">
          Guardar
        </Button>
      </Form>
    </section>
  );

export default FormularioProducto;
