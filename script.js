// Obtén referencias a los elementos HTML
const totalAmount = document.getElementById('total-amount');
const transactionList = document.getElementById('transaction-list');
const amountInput = document.getElementById('amount');
const addTransactionButton = document.getElementById('add-transaction');
const resetButton = document.getElementById('reset-button');

// Variable para almacenar los ingresos
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

// Función para guardar los datos (total y registros de ingresos) en el almacenamiento local
function saveData() {
    localStorage.setItem('total', totalAmount.textContent);
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Función para cargar los datos (total y registros de ingresos) desde el almacenamiento local
function loadData() {
    const savedTotal = localStorage.getItem('total');
    if (savedTotal) {
        totalAmount.textContent = savedTotal;
    }

    const savedTransactions = JSON.parse(localStorage.getItem('transactions'));
    if (savedTransactions) {
        transactions = savedTransactions;
        updateTransactions();
    }
}

// Llama a esta función al cargar la página para cargar cualquier dato previamente guardado
loadData();

// Función para actualizar la lista de ingresos y el total
function updateTransactions() {
    transactionList.innerHTML = '';

    transactions.forEach((transaction) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${transaction.amount}€ (${transaction.date})`;
        transactionList.appendChild(listItem);
    });

    // Calcula y actualiza el total
    const total = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
    totalAmount.textContent = `${total}€`;

    // Guarda los datos en el almacenamiento local cada vez que se actualizan
    saveData();
}

// Agrega un nuevo ingreso cuando se hace clic en el botón "Añadir"
addTransactionButton.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);
    if (!isNaN(amount)) {
        const date = new Date().toLocaleDateString();

        transactions.push({ amount, date });

        amountInput.value = ''; // Limpia el campo de cantidad

        updateTransactions();
    }
});

// Agrega un controlador de eventos para el botón de reset
resetButton.addEventListener('click', () => {
    transactions = [];
    updateTransactions();
});
