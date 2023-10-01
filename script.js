// Obtén referencias a los elementos HTML
const totalAmount = document.getElementById('total-amount');
const transactionList = document.getElementById('transaction-list');
const toggleTransactionsButton = document.getElementById('toggle-transactions');
const noteInput = document.getElementById('note');
const addTransactionButton = document.getElementById('add-transaction');

// Variable para almacenar los ingresos
let transactions = [];

// Función para actualizar la lista de ingresos y el total
function updateTransactions() {
    // Borra la lista actual
    transactionList.innerHTML = '';

    // Recorre los ingresos y crea elementos de lista
    transactions.forEach((transaction) => {
        const listItem = document.createElement('li');
        const transactionText = transaction.note
            ? `${transaction.amount}€ (${transaction.date}) - ${transaction.note}`
            : `${transaction.amount}€ (${transaction.date})`;
        listItem.textContent = transactionText;
        transactionList.appendChild(listItem);
    });

    // Calcula y actualiza el total
    const total = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
    totalAmount.textContent = `${total}€`;
}

// Agrega un controlador de eventos para el botón de mostrar/ocultar ingresos
toggleTransactionsButton.addEventListener('click', () => {
    const isHidden = transactionList.classList.toggle('hidden');
    toggleTransactionsButton.textContent = isHidden ? 'Mostrar Ingresos' : 'Ocultar Ingresos';
});

// Agrega un nuevo ingreso cuando se hace clic en el botón "Añadir"
addTransactionButton.addEventListener('click', () => {
    const amount = parseFloat(prompt('Ingrese la cantidad en €'));
    if (!isNaN(amount)) {
        const date = new Date().toLocaleDateString(); // Obtiene la fecha actual
        const note = noteInput.value.trim(); // Obtiene la nota

        // Agrega el ingreso a la lista
        transactions.push({ amount, date, note });

        // Limpia el campo de nota
        noteInput.value = '';

        // Actualiza la lista y el total
        updateTransactions();
    }
});

// Llama a esta función al cargar la página para mostrar cualquier ingreso previo
updateTransactions();
