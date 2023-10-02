// Obtén referencias a los elementos HTML
const totalAmount = document.getElementById('total-amount');
const amountInput = document.getElementById('amount'); // Modificamos la referencia
const addTransactionButton = document.getElementById('add-transaction');
const resetButton = document.getElementById('reset-button');

// Variable para almacenar los ingresos
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

// Función para actualizar el total
function updateTotal() {
    const total = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
    totalAmount.textContent = `${total}€`;
}

// Agrega un nuevo ingreso cuando se hace clic en el botón "Añadir"
addTransactionButton.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);
    if (!isNaN(amount)) {
        transactions.push({ amount });
        amountInput.value = ''; // Limpiar el campo de entrada
        updateTotal();
    }
});

// Agrega un controlador de eventos para el botón de reset
resetButton.addEventListener('click', () => {
    transactions = [];
    updateTotal();
});

// Llama a esta función al cargar la página para mostrar cualquier total previo
updateTotal();
