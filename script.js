// Obtén referencias a los elementos HTML
const totalAmount = document.getElementById('total-amount');
const amountInput = document.getElementById('amount');
const addTransactionButton = document.getElementById('add-transaction');
const resetButton = document.getElementById('reset-button');

// Variable para almacenar los ingresos
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
 
// Función para calcular el total
function calculateTotal() {
    return transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
}

// Función para actualizar el total y almacenarlo en localStorage
function updateTotal() {
    const total = calculateTotal();
    totalAmount.textContent = `${total}€`;
    localStorage.setItem('total', total);
}

// Función para actualizar la lista de ingresos
function updateTransactionList() {
    const transactionList = document.getElementById('transaction-list');
    transactionList.innerHTML = '';

    transactions.forEach((transaction) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${transaction.amount}€ (${transaction.date})`;
        transactionList.appendChild(listItem);
    });
}

// Agrega un nuevo ingreso cuando se hace clic en el botón "Añadir"
addTransactionButton.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);
    if (!isNaN(amount)) {
        const date = new Date().toLocaleDateString();
        transactions.push({ amount, date });

        // Actualiza el total
        updateTotal();

        // Actualiza la lista de ingresos
        updateTransactionList();

        // Limpia el campo de cantidad
        amountInput.value = '';
    }
});

// Agrega un controlador de eventos para el botón de reset
resetButton.addEventListener('click', () => {
    transactions = [];
    localStorage.removeItem('total'); // Elimina el total del almacenamiento local

    // Actualiza el total
    updateTotal();

    // Actualiza la lista de ingresos
    updateTransactionList();
});

// Llama a esta función al cargar la página para mostrar cualquier ingreso previo
updateTransactionList();

// Recupera y muestra el total almacenado en localStorage al cargar la página
const storedTotal = localStorage.getItem('total');
if (storedTotal !== null) {
    totalAmount.textContent = `${storedTotal}€`;
}
