// Obtén referencias a los elementos HTML en la página principal
const totalAmount = document.getElementById('total-amount');
const transactionList = document.getElementById('transaction-list');
const amountInput = document.getElementById('amount');
const addTransactionButton = document.getElementById('add-transaction');
const resetButton = document.getElementById('reset-button');
const showHistoryButton = document.getElementById('show-history'); // Botón para mostrar el historial

// Variable para almacenar los ingresos
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

// Función para actualizar la lista de ingresos y el total
function updateTransactions() {
    transactionList.innerHTML = '';

    transactions.forEach((transaction) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${transaction.amount}€ (${transaction.date})`;
        transactionList.appendChild(listItem);
    });

    const total = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
    totalAmount.textContent = `${total}€`;

    localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Agrega un nuevo ingreso cuando se hace clic en el botón "Añadir"
addTransactionButton.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);
    if (!isNaN(amount)) {
        const date = new Date().toLocaleDateString();

        transactions.push({ amount, date });

        updateTransactions();
    }
});

// Agrega un controlador de eventos para el botón de reset
resetButton.addEventListener('click', () => {
    transactions = [];
    updateTransactions();
});

// Agrega un controlador de eventos para el botón de mostrar historial
showHistoryButton.addEventListener('click', () => {
    // Redirige a la página de historial
    window.location.href = 'historial.html';
});

// Llama a esta función al cargar la página para mostrar cualquier ingreso previo
updateTransactions();
