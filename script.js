document.addEventListener('DOMContentLoaded', function () {
    const tableBody = document.querySelector('#spreadsheet tbody');
    
    // Genera 365 filas para los días
    for (let day = 1; day <= 365; day++) {
        const row = document.createElement('tr');
        const dayCell = document.createElement('td');
        dayCell.textContent = `Día ${day}`;
        row.appendChild(dayCell);
        
        const euroCell = document.createElement('td');
        euroCell.contentEditable = true;
        row.appendChild(euroCell);
        
        const totalCell = document.createElement('td');
        totalCell.textContent = '0';
        row.appendChild(totalCell);
        
        tableBody.appendChild(row);
    }

    // Agrega un controlador de eventos para calcular el total
    tableBody.addEventListener('input', function (e) {
        if (e.target.nodeName === 'TD' && e.target.cellIndex === 1) {
            const row = e.target.parentElement;
            const euroCells = Array.from(row.cells).slice(1, -1);
            const totalCell = row.cells[row.cells.length - 1];
            
            const total = euroCells.reduce((acc, cell) => {
                const amount = parseFloat(cell.textContent) || 0;
                return acc + amount;
            }, 0);
            
            totalCell.textContent = total.toFixed(2);
        }
    });

    // Recupera los datos almacenados en el almacenamiento local
    for (let day = 1; day <= 365; day++) {
        const euroCell = tableBody.rows[day - 1].cells[1];
        const totalCell = tableBody.rows[day - 1].cells[2];

        // Recupera los datos guardados en el almacenamiento local
        const storedData = localStorage.getItem(`day${day}`);
        if (storedData) {
            const { euros, total } = JSON.parse(storedData);
            euroCell.textContent = euros;
            totalCell.textContent = total;
        }
    });
