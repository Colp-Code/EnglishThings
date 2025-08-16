async function obtenerDatos() {
  try {
    const response = await fetch('http://localhost:3000/api/datos');
    const data = await response.json();

    console.log("Datos recibidos de la API:");
    console.log(data);
  } catch (error) {
    console.error("Error al consumir la API:", error);
  }
}

obtenerDatos();