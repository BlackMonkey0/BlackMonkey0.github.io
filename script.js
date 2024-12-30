let total = 0;
const totalElement = document.getElementById('total');
const historyTable = document.getElementById('historyTable').querySelector('tbody');
const moneyForm = document.getElementById('moneyForm');

moneyForm.addEventListener('submit', function(e) {
  e.preventDefault();

  // Obtener cantidad ingresada
  const amount = parseFloat(document.getElementById('amount').value);

  if (isNaN(amount)) return;

  // Actualizar total
  total += amount;
  totalElement.textContent = total.toFixed(2);

  // Registrar en el historial
  const row = document.createElement('tr');
  const date = new Date().toLocaleDateString();
  row.innerHTML = `
    <td>${date}</td>
    <td>${amount.toFixed(2)}</td>
    <td>${total.toFixed(2)}</td>
  `;
  historyTable.appendChild(row);

  // Limpiar el formulario
  moneyForm.reset();
});
