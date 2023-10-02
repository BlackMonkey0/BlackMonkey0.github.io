// Obtén referencias a los elementos HTML en la página de historial
const transactionList = document.getElementById('transaction-list');

// Función para cargar los registros de ingresos desde el almacenamiento local
function loadTransactions() {
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];

    transactions.forEach((transaction) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${transaction.amount}€ (${transaction.date})`;
        transactionList.appendChild(listItem);
    });
}

// Llama a esta función al cargar la página de historial
loadTransactions();
