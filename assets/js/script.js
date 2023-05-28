const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const nombreBarraLateral = document.querySelectorAll(".nombreBarraLateral");

nombreBarraLateral.forEach(nombreBarraLateral => {
    nombreBarraLateral.addEventListener('click', function() {
  
      nombreBarraLateral.setAttribute('style', 'font-weight: 400;');
    });
});

// persona1.addEventListener('click', function(){    
//     document.getElementById("persona1").style.fontWeight = "400";
// })

// persona2.addEventListener('click', function(){    
//     document.getElementById("persona2").style.fontWeight = "400";
// })

// persona3.addEventListener('click', function(){    
//     document.getElementById("persona3").style.fontWeight = "400";
// })

// persona4.addEventListener('click', function(){    
//     document.getElementById("persona4").style.fontWeight = "400";
// })

// persona5.addEventListener('click', function(){    
//     document.getElementById("persona5").style.fontWeight = "400";
// })

// persona6.addEventListener('click', function(){    
//     document.getElementById("persona6").style.fontWeight = "400";
// })








// function myFunction() {
//     document.getElementById("domi").style.fontWeight = "100";
//   }