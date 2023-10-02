document.addEventListener('DOMContentLoaded', function () {
    const spreadsheet = document.getElementById('spreadsheet');
    const totalAmountCell = document.getElementById('total-amount');
    
    spreadsheet.addEventListener('input', function (event) {
        const targetCell = event.target;
        const rowIndex = targetCell.parentNode.rowIndex; // Fila actual
        const columnIndex = targetCell.cellIndex; // Columna actual

        if (columnIndex === 1) { // Si la columna es la de euros (€)
            updateTotal();
        }
    });

    function updateTotal() {
        const euroCells = document.querySelectorAll('tbody td:nth-child(2)'); // Celdas de euros
        let total = 0;

        euroCells.forEach(function (cell) {
            const euroValue = parseFloat(cell.textContent) || 0;
            total += euroValue;
        });

        totalAmountCell.textContent = total.toFixed(2); // Muestra el total con 2 decimales
    }
});
