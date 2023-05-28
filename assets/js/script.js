const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const nombreBarraLateral = document.querySelectorAll(".nombreBarraLateral");

nombreBarraLateral.forEach(nombreBarraLateral => {
    nombreBarraLateral.addEventListener('click', function() {
  
      nombreBarraLateral.setAttribute('style', 'font-weight: 400;');
    });
});

