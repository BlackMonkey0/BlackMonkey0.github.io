// Obtén referencias a los elementos HTML
const totalAmount = document.getElementById('total-amount');
const amountInput = document.getElementById('amount');
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
        const date = new Date().toLocaleDateString();
        transactions.push({ amount, date });

        // Actualiza el total
        updateTotal();

        // Limpia el campo de cantidad
        amountInput.value = '';
    }
});

// Agrega un controlador de eventos para el botón de reset
resetButton.addEventListener('click', () => {
    transactions = [];
    // Actualiza el total
    updateTotal();
});

// Llama a esta función al cargar la página para mostrar cualquier ingreso previo
updateTotal();
