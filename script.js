// Obtén referencias a elementos HTML
const cantidadInput = document.getElementById("cantidad");
const totalAhorradoElement = document.getElementById("total-ahorrado");
const registroLista = document.getElementById("registro-lista");

// Función para agregar la cantidad ingresada
function agregarCantidad() {
    const cantidad = parseFloat(cantidadInput.value);

    if (!isNaN(cantidad) && cantidad > 0) {
        // Obten la fecha actual
        const fecha = new Date().toLocaleDateString();

        // Obten el total ahorrado del almacenamiento local
        let totalAhorrado = parseFloat(localStorage.getItem("totalAhorrado")) || 0;

        // Actualiza el total ahorrado
        totalAhorrado += cantidad;

        // Actualiza el total ahorrado en el almacenamiento local
        localStorage.setItem("totalAhorrado", totalAhorrado);

        // Registra la cantidad ingresada junto con la fecha
        const registro = `${cantidad.toFixed(2)} (Fecha: ${fecha})`;
        const listItem = document.createElement("li");
        listItem.textContent = registro;
        registroLista.appendChild(listItem);

        // Actualiza la visualización del total ahorrado
        totalAhorradoElement.textContent = totalAhorrado.toFixed(2);

        // Borra el contenido del input
        cantidadInput.value = "";
    }
}

// Función para borrar el registro almacenado
function borrarRegistro() {
    localStorage.removeItem("totalAhorrado");
    totalAhorradoElement.textContent = "0.00";
    registroLista.innerHTML = ""; // Borra la lista
}

// Carga el registro almacenado desde el almacenamiento local al cargar la página
window.addEventListener("load", () => {
    const totalAhorrado = parseFloat(localStorage.getItem("totalAhorrado")) || 0;
    totalAhorradoElement.textContent = totalAhorrado.toFixed(2);

    // Carga el registro almacenado
    const registroGuardado = localStorage.getItem("registro");
    if (registroGuardado) {
        const registros = registroGuardado.split(",");
        for (const registro of registros) {
            const listItem = document.createElement("li");
            listItem.textContent = registro;
            registroLista.appendChild(listItem);
        }
    }
});
