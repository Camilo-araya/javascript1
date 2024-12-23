
const botonMas = document.querySelector('.boton-mas');
const botonMenos = document.querySelector('.boton-menos');
const campoCantidad = document.querySelector('.cantidad');
const totalAPagar = document.querySelector('.total');


let cantidad = parseInt(campoCantidad.textContent) || 0; 
const precioUnitario = 400000; 


function actualizarCantidadYTotal() {
    
    cantidad = Math.max(cantidad, 0);

    
    campoCantidad.textContent = cantidad;
    totalAPagar.textContent = cantidad * precioUnitario;
}


botonMas.addEventListener('click', () => {
    cantidad++;
    actualizarCantidadYTotal();
});

botonMenos.addEventListener('click', () => {
    cantidad--;
    actualizarCantidadYTotal();
});


actualizarCantidadYTotal();