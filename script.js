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

        // Obten el registro de cantidades ingresadas del almacenamiento local
        let registroGuardado = localStorage.getItem("registro") || "[]";
        let registro = JSON.parse(registroGuardado);

        // Agrega la cantidad y la fecha al registro
        registro.push({ cantidad, fecha });

        // Guarda el registro actualizado en el almacenamiento local
        localStorage.setItem("registro", JSON.stringify(registro));

        // Calcula el total ahorrado
        let totalAhorrado = 0;
        for (const item of registro) {
            totalAhorrado += item.cantidad;
        }

        // Actualiza la visualización del total ahorrado
        totalAhorradoElement.textContent = totalAhorrado.toFixed(2);

        // Agrega un registro a la lista
        const registroActual = `${cantidad.toFixed(2)} (Fecha: ${fecha})`;
        const listItem = document.createElement("li");
        listItem.textContent = registroActual;
        registroLista.appendChild(listItem);

        // Borra el contenido del input
        cantidadInput.value = "";
    }
}

// Función para borrar el registro almacenado
function borrarRegistro() {
    localStorage.removeItem("registro");
    totalAhorradoElement.textContent = "0.00";
    registroLista.innerHTML = ""; // Borra la lista
}

// Carga el registro almacenado desde el almacenamiento local al cargar la página
window.addEventListener("load", () => {
    // Obten el registro almacenado
    let registroGuardado = localStorage.getItem("registro") || "[]";
    let registro = JSON.parse(registroGuardado);

    // Calcula el total ahorrado
    let totalAhorrado = 0;
    for (const item of registro) {
        totalAhorrado += item.cantidad;
    }

    // Actualiza la visualización del total ahorrado
    totalAhorradoElement.textContent = totalAhorrado.toFixed(2);

    // Muestra la lista de registros
    for (const item of registro) {
        const registroActual = `${item.cantidad.toFixed(2)} (Fecha: ${item.fecha})`;
        const listItem = document.createElement("li");
        listItem.textContent = registroActual;
        registroLista.appendChild(listItem);
    }
});
