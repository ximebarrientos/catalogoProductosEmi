//GET
const urlProductos = import.meta.env.VITE_API_PRODUCTOS;

export const listarProductos = async () => {
  try {
    const respuesta = await fetch(urlProductos);
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};
//post
export const crearProductos = async (productoNuevo) => {
  try {
    console.log(productoNuevo)
    const respuesta = await fetch(urlProductos,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(productoNuevo)
    });
    console.log(respuesta)
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};
