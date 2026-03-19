/**
 * ARCHIVO: script.js
 * FUNCIÓN: Dar vida y dinamismo al index.html
 */

// 1. ESPERAR A QUE CARGUE EL HTML
// Usamos window.onload para asegurarnos de que el HTML existe antes de intentar manipularlo
window.onload = function() {
    console.log("¡JavaScript vinculado correctamente! 🚀");

    // --- INTERACCIÓN CON EL TÍTULO (Eventos de Mouse) ---
    // Relación: Seleccionamos el <h1> dentro del <header>
    const tituloPrincipal = document.querySelector('header h1');

    tituloPrincipal.addEventListener('mouseenter', () => {
        tituloPrincipal.style.color = '#3498db'; // Cambia a azul al pasar el ratón
        tituloPrincipal.style.transition = '0.5s';
    });

    tituloPrincipal.addEventListener('mouseleave', () => {
        tituloPrincipal.style.color = 'white'; // Vuelve a blanco al sacar el ratón
    });


    // --- MANIPULACIÓN DEL DOM (Mensaje de Bienvenida) ---
    // Vamos a crear un elemento nuevo desde JS y meterlo en el HTML
    const saludo = document.createElement('p');
    saludo.innerHTML = "<strong>💡 Tip del día:</strong> ¡Has cargado esta página con éxito!";
    saludo.style.textAlign = 'center';
    saludo.style.color = '#27ae60';
    
    // Lo insertamos justo después del header
    document.querySelector('header').appendChild(saludo);


    // --- GESTIÓN DEL FORMULARIO (Captura de Datos) ---
    // Relación: Seleccionamos el <form> del index.html
    const formulario = document.querySelector('form');

    formulario.addEventListener('submit', function(event) {
        // Evitamos que la página se recargue (comportamiento por defecto)
        event.preventDefault();

        // Obtenemos los valores de los inputs usando su 'id'
        const nombreAlumno = document.getElementById('nombre').value;
        const emailAlumno = document.getElementById('correo').value;

        if (nombreAlumno === "") {
            alert("¡Ups! Por favor, dinos tu nombre antes de enviar.");
        } else {
            // Mostramos un mensaje dinámico usando Template Literals (las comillas invertidas)
            alert(`¡Excelente trabajo, ${nombreAlumno}! 
Tu mensaje ha sido "enviado" (simulado). 
Te contactaremos a: ${emailAlumno}`);
            
            console.log("Datos recibidos:", { nombreAlumno, emailAlumno });
            formulario.reset(); // Limpiamos el formulario
        }
    });

    // --- EFECTO SORPRESA EN LAS TABLAS ---
    // Relación: Seleccionamos todas las filas <tr> de la tabla
    const filasTabla = document.querySelectorAll('tbody tr');

    filasTabla.forEach(fila => {
        fila.addEventListener('click', () => {
            fila.style.backgroundColor = '#d1ecf1'; // Resalta la fila al hacer clic
        });
    });
};