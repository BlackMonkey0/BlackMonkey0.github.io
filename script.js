// Obtén referencias a los elementos HTML
const totalAmount = document.getElementById('total-amount');
const transactionList = document.getElementById('transaction-list');
const toggleTransactionsButton = document.getElementById('toggle-transactions');
const addTransactionButton = document.getElementById('add-transaction');
const resetButton = document.getElementById('reset-button');
const amountInput = document.getElementById('amount'); // Obtén la referencia al campo de entrada de cantidad

// Variable para almacenar los ingresos
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

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

    // Almacena los ingresos en el almacenamiento local
    localStorage.setItem('transactions', JSON.stringify(transactions));
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
    const amount = parseFloat(amountInput.value); // Obtén la cantidad ingresada desde el campo de entrada
    if (!isNaN(amount)) {
        const date = new Date().toLocaleDateString(); // Obtiene la fecha actual

        // Agrega el ingreso a la lista
        transactions.push({ amount, date });

        // Actualiza la lista y el total
        updateTransactions();

        // Limpia el campo de entrada de cantidad
        amountInput.value = '';
    }
});

// Agrega un controlador de eventos para el botón de reset
resetButton.addEventListener('click', () => {
    // Borra todos los ingresos y actualiza la lista y el total
    transactions = [];
    updateTransactions();
});

// Llama a esta función al cargar la página para mostrar cualquier ingreso previo
updateTransactions();
