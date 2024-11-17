let currentPage = 1; // Empezamos desde la página 1
const totalPages = 10; // Número total de páginas
const pages = document.querySelectorAll('.page');

// Función para cargar las páginas dinámicamente
function loadPage(pageIndex) {
  // Construir la URL del archivo de la página
  const pageUrl = `index(${pageIndex}).html`;

  // Usamos fetch para cargar el contenido del archivo HTML
  fetch(pageUrl)
    .then(response => response.text())
    .then(content => {
      pages[0].innerHTML = content;  // Cargar la primera página
      pages[1].innerHTML = content;  // Cargar la segunda página
    })
    .catch(error => {
      console.error("Error cargando la página:", error);
    });
}

// Función para voltear las páginas
function flipPage() {
  if (currentPage < totalPages) {
    currentPage++; // Avanzar a la siguiente página
  } else {
    currentPage = 2; // Volver a la primera página cuando se llega al final
  }

  // Cargar la siguiente página
  loadPage(currentPage);

  // Gira las páginas con el efecto 3D
  pages[0].style.transition = "transform 1s";  // Añadir transición suave
  pages[1].style.transition = "transform 1s";  // Añadir transición suave
  pages[0].style.transform = "rotateY(-180deg)"; // Voltear la primera página
  pages[1].style.transform = "rotateY(0deg)";   // Voltear la segunda página hacia el frente
}

// Añadir evento al botón para cambiar de página
document.querySelector('.flip-button').addEventListener('click', flipPage);

// Cargar la primera página al inicio
loadPage(currentPage);

// Función para redirigir a la siguiente página
function nextPage() {
  // Aplica el efecto 3D de la página volteándose
  document.querySelector('.cover').style.transition = "transform 1s";  // Añade una transición para que sea suave
  document.querySelector('.cover').style.transform = "rotateY(-180deg)";
  
  // Redirige a la siguiente página después de un pequeño retraso para que el efecto se vea
  setTimeout(function() {
    window.location.href = "pagina2.html";  // Actualiza el nombre de la página siguiente
  }, 1000);  // El retraso de 1 segundo coincide con la duración de la animación de 1 segundo
}

// Función para volver a la página anterior en el historial
function goBack() {
  // Aplica el efecto de retroceso de la página
  document.querySelector('.cover').style.transition = "transform 1s";
  document.querySelector('.cover').style.transform = "rotateY(180deg)";
  
  // Redirige a la página anterior después del retraso para mostrar el efecto
  setTimeout(function() {
    window.history.back();  // Vuelve a la página anterior
  }, 1000);
}
