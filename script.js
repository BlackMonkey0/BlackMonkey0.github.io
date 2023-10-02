// Obtén referencias a los elementos HTML
const totalAmount = document.getElementById('total-amount');
const amountInput = document.getElementById('amount');
const resetButton = document.getElementById('reset-button');

// Variable para almacenar el total
let total = 0;

// Función para actualizar el total
function updateTotal() {
    totalAmount.textContent = `${total}€`;
}

// Agrega un nuevo ingreso cuando se hace clic en el botón "Añadir"
addTransactionButton.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);
    if (!isNaN(amount)) {
        total += amount;
        updateTotal();
    }
});

// Agrega un controlador de eventos para el botón de reset
resetButton.addEventListener('click', () => {
    total = 0;
    updateTotal();
});

// Llama a esta función al cargar la página para mostrar cualquier total previo
updateTotal();
