// Seleccionar elementos del DOM
const botonMas = document.querySelector('.boton-mas');
const botonMenos = document.querySelector('.boton-menos');
const campoCantidad = document.querySelector('.cantidad');
const totalAPagar = document.querySelector('.total');

// Obtener datos iniciales
let cantidad = parseInt(campoCantidad.textContent) || 0; // Inicializar a 0 si no hay valor
const precioUnitario = 400000; // Ajusta el precio unitario según tu producto

// Función para actualizar la cantidad y el total
function actualizarCantidadYTotal() {
    // Asegurar que la cantidad no sea negativa
    cantidad = Math.max(cantidad, 0);

    // Actualizar el DOM
    campoCantidad.textContent = cantidad;
    totalAPagar.textContent = cantidad * precioUnitario;
}

// Event listeners para los botones
botonMas.addEventListener('click', () => {
    cantidad++;
    actualizarCantidadYTotal();
});

botonMenos.addEventListener('click', () => {
    cantidad--;
    actualizarCantidadYTotal();
});

// reinicio del total al cargar la página
actualizarCantidadYTotal();