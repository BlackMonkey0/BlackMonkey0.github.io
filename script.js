document.addEventListener('DOMContentLoaded', function () {
    const spreadsheet = document.getElementById('spreadsheet');
    const tbody = spreadsheet.querySelector('tbody');
    const totalAmountCell = document.getElementById('total-amount');
    const addRowButton = document.getElementById('add-row');

    // Función para actualizar el total
    function updateTotal() {
        const euroCells = document.querySelectorAll('tbody td:nth-child(2)'); // Celdas de euros
        let total = 0;

        euroCells.forEach(function (cell) {
            const euroValue = parseFloat(cell.textContent) || 0;
            total += euroValue;
        });

        totalAmountCell.textContent = total.toFixed(2) + ' €'; // Muestra el total con 2 decimales
    }

    // Función para agregar una nueva fila
    function addRow() {
        const rowCount = tbody.children.length;
        const newRow = document.createElement('tr');

        newRow.innerHTML = `
            <td>${rowCount + 1}</td>
            <td contentEditable="true"></td>
        `;

        tbody.appendChild(newRow);
        updateTotal();
    }

    // Agregar evento al botón "Agregar Fila"
    addRowButton.addEventListener('click', addRow);

    // Agregar evento para calcular el total cuando se edita una celda
    spreadsheet.addEventListener('input', function (event) {
        const targetCell = event.target;
        if (targetCell.cellIndex === 1) { // Si la celda editada es la de euros (€)
            updateTotal();
        }
    });
});
