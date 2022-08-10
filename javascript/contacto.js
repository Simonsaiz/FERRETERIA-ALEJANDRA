//FORMULARIO

window.addEventListener ('load', ()=> {
    const formulario = document.querySelector('#formulario');
    const nombreFormulario = document.querySelector('#nombreContacto');
    const apellidoFormulario = document.querySelector('#apellidoContacto');
    const emailFormulario = document.querySelector('#emailContacto');
    const telefonoFormulario = document.querySelector('#telefonoContacto');
    const mensajeFormulario = document.querySelector('#mensajeContacto');


//Validacion datos

    const validarCampos = ()=> {
        nombre = nombreFormulario.value.trim();
        apellido = apellidoFormulario.value.trim();
        email = emailFormulario.value.trim();
        telefono = telefonoFormulario.value.trim();
        mensaje = mensajeFormulario.value.trim();
    

        if(nombre === "" || apellido === "" || email === "" || telefono === "" || mensaje === "") {
            Swal.fire({
                icon: 'error',
                title: 'Completar campo',
            })
        }
        else { 
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Su consulta fue enviada',
            showConfirmButton: false,
            timer: 2000
        })
        formulario.reset ();
        }

        localStorage.setItem('Nombre', nombre)
        localStorage.setItem('Apellido', apellido)
        localStorage.setItem('Email', email)
        localStorage.setItem('Telefono', telefono)
        localStorage.setItem('Mensaje', mensaje)
    }
//Almacenar datos en el storage
    formulario.addEventListener("submit", (e)=> {

        e.preventDefault();
        validarCampos();
    })


})

