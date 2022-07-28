//FORMULARIO

const form = document.querySelector('#formulario') 

const enviarContacto = (event) => {
    event.preventDefault();
    console.log(
        event.target.nombre.value,
        event.target.apellido.value,
        event.target.email.value,
        event.target.telefono.value,
        event.target.mensaje.value);
        alert ( "Muchas gracias por contactarnos. En la brevedad nos contactaremos con usted.")
        form.reset ();
    }
    
form.addEventListener("submit", enviarContacto);


