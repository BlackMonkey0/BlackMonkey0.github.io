// Obtén referencias a los elementos HTML
const totalAmount = document.getElementById('total-amount');
const transactionList = document.getElementById('transaction-list');
const toggleTransactionsButton = document.getElementById('toggle-transactions');
const amountInput = document.getElementById('amount');
const addTransactionButton = document.getElementById('add-transaction');
const resetButton = document.getElementById('reset-button');

// Variable para almacenar los ingresos
let transactions = [];

// Función para actualizar la lista de ingresos y el total
function updateTransactions() {
    transactionList.innerHTML = ''; // Borra la lista actual

    // Recorre los ingresos y crea elementos de lista
    transactions.forEach((transaction) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${transaction.amount}€ (${transaction.date})`;
        transactionList.appendChild(listItem);
    });

    // Calcula y actualiza el total
    const total = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
    totalAmount.textContent = `${total}€`;
}

// Agrega un controlador de eventos para el botón de mostrar/ocultar ingresos
toggleTransactionsButton.addEventListener('click', () => {
    if (transactionList.classList.contains('hidden')) {
        transactionList.classList.remove('hidden');
        toggleTransactionsButton.textContent = 'Ocultar Ingresos';
    } else {
        transactionList.classList.add('hidden');
        toggleTransactionsButton.textContent = 'Mostrar Ingresos';
    }
});

// Agrega un nuevo ingreso cuando se hace clic en el botón "Añadir"
addTransactionButton.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);
    if (!isNaN(amount)) {
        const date = new Date().toLocaleDateString(); // Obtiene la fecha actual

        // Agrega el ingreso a la lista
        transactions.push({ amount, date });

        // Limpia el campo de cantidad
        amountInput.value = '';

        // Actualiza la lista y el total
        updateTransactions();
    }
});

// Agrega un controlador de eventos para el botón de reinicio
resetButton.addEventListener('click', () => {
    // Reinicia la lista de transacciones y actualiza la página
    transactions = [];
    updateTransactions();
});

// Llama a esta función al cargar la página para mostrar cualquier ingreso previo
updateTransactions();
