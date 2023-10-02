document.addEventListener('input', function (e) {
    if (e.target.nodeName === 'TD') {
        // Obtiene la fila y columna de la celda modificada
        const row = e.target.parentElement.rowIndex - 1; // Restamos 1 para omitir la fila de encabezado
        const col = e.target.cellIndex - 1; // Restamos 1 para omitir la columna de encabezado
        
        // Obtiene el total para la fila
        const rowTotal = Array.from(e.target.parentElement.cells)
            .slice(1, -1) // Excluye la primera y última columna
            .map(cell => parseFloat(cell.textContent) || 0) // Convierte el contenido a número o 0
            .reduce((acc, val) => acc + val, 0);
        
        // Actualiza el total en la última celda de la fila
        const totalCell = document.getElementById(`total-${row}`);
        totalCell.textContent = rowTotal;
    }
});
