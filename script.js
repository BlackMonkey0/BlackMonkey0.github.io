document.addEventListener('DOMContentLoaded', function () {
    const spreadsheet = document.getElementById('spreadsheet');
    const generateRowsButton = document.getElementById('generate-rows');

    // Agregar un controlador de eventos al botón "Generar Filas"
    generateRowsButton.addEventListener('click', function () {
        const tbody = spreadsheet.querySelector('tbody');
        const rowCount = tbody.rows.length; // Obtener la cantidad actual de filas

        // Definir el número de filas que deseas agregar (por ejemplo, 5)
        const rowsToAdd = 5;

        // Generar filas adicionales
        for (let i = 0; i < rowsToAdd; i++) {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${rowCount + i + 1}</td>
                <td contentEditable="true"></td>
                <td contentEditable="false"></td>
            `;
            tbody.appendChild(newRow);
        }
    });
});
