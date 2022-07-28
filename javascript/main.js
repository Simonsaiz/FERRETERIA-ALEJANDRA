//Proseso de verificacion para evaluar si el trabajador es apto para trabajos en altura.

/* for (let i = 1; i<=20; i++){
    let nombreApellido = prompt("Ingrese su nombre completo:");
    let trabajoAltura = prompt("¿Usted posee estudio psicofísico aprobado? \n*indique 1 para SI \n*indique 2 para NO");
    if ( trabajoAltura == 1) {
        alert (`${nombreApellido} se encuentra habilitado para realizar la tarea.`);
    }
    else {
        alert (`${nombreApellido} no podrá realizar la tarea, por favor dirigirse al área de Higiene y Seguridad. Gracias.`);
    }
} */


//Simulador de pago de un producto en diferentes cuotas
/* let nombre = prompt ("Ingrese su Nombre");
let apellido = prompt ("Ingrese su apellido");
    alert ( "Hola " + nombre + " " + apellido );
let monto = prompt ("Por favor ingrese el monto a pagar.");
let cuotas = prompt ("ingrese cantidad de cuotas: \n1-1 cuota sin interés. \n2-2 cuotas sin interés. \n3-3 cuotas sin interés.\n6-6 cuotas con 10% de interés. \n9-9 cuotas con un 15% de interés. \n12-12 cuotas con un 25% de interés.\nEscriba ESC para finalizar su consulta.");
while ( cuotas !== "ESC" && cuotas !== "esc"){
    if (cuotas <= 3) {
        let valor = (monto) / cuotas;
        alert(`El monto a pagar por mes será de $${valor}`);
        break;
    }
    else if (cuotas == 6) {
        let interes = monto * 1.10;
        let valor = interes / cuotas;
        alert(`El monto a pagar durante ${cuotas} meses, será de $${valor}`);
        break;
    }
    else if (cuotas == 9) {
        let interes = monto * 1.15;
        let valor = interes / cuotas;
        alert(`El monto a pagar durante ${cuotas} meses, será de $${valor}`);
        break;
    }
    else if (cuotas == 12) {
        let interes = monto * 1.25;
        let valor = interes / cuotas;
        alert(`El monto a pagar durante ${cuotas} meses, será de $${valor}`);
        break;
    }
    else {
        alert("No contamos con esa forma de pago.");
        break;
    }
} */


//Objetos (info clientes)
/* 
function Clientes (nombre, apellido, dni, direccion) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.direccion = direccion;
}

const nuevoCliente = ()=> {    
    let nombreCliente = prompt ("Escribe tu nombre:");
    let apellidoCliente = prompt ("Escribe tu apellido:");
    let dniCliente = parseInt(prompt ("Escribe tu DNI:"));
    let direccionCliente = prompt ("Escribe tu direccion:");

const nuevoCliente = new Clientes ( nombreCliente, apellidoCliente, dniCliente, direccionCliente);
    console.log(nuevoCliente);
}  */


//Arrays (busqueda de productos)

/* let herramientasBateria = ["atornilladora", "rotomartillo", "amoladora", "fresadora", "lijadora"];
let herramientasMano = ["martillo", "pinza", "tenaza", "serrucho", "destornillador"];
let pinturas = ["latex", "sintetico", "interior", "exterior", "membrana"];
let listaCompleta = herramientasBateria.concat(herramientasMano, pinturas);
console.log(listaCompleta); */

//COMPRA DE UNA HERRAMIENTA.

/* let nombreApellido = prompt ("Ingrese su Nombre y Apellido");
    alert (`Hola ${nombreApellido}.`);
let herramientas = prompt("Este es nuestro catalogo de herramientas Einhell. Ingrese:" +
"\n1-Taladro inalambrico" +
"\n2-Rotomartillo" +
"\n3-Sierra circular" +
"\n4-Medidor digital" +
"\n5-Lijadora" +
"\n6-Lustralijadora" +
"\n7-Sierra caladora" +
"\n8-Fresadora" +
"\nESC para salir.");
while ( herramientas !== "ESC" && herramientas !== "esc"){
    if (herramientas == 1){
        let precioTaladro = 26099;
        alert (`El precio del taladro es de $${precioTaladro}`);
        let cantidad = parseInt(prompt("¿Cuantas unidades desea adquirir?"));
        let calculoTaladro = precioTaladro * cantidad;
        alert (`${nombreApellido} el total a abonar es $${calculoTaladro}`);
        break;
    }
    else if (herramientas == 2) {
        let precioRotomartillo = 19999;
        alert (`El precio del rotomartillo es de $${precioRotomartillo}`);
        let cantidad = parseInt(prompt("¿Cuantas unidades desea adquirir?"));
        let calculoRotomartillo = precioRotomartillo * cantidad;
        alert (`${nombreApellido} el total a abonar es $${calculoRotomartillo}`);
        break;
    }
    else if (herramientas == 3) {
        let precioSierraCircular = 36999;
        alert (`El precio de la Sierra circular es de $${precioSierraCircular}`);
        let cantidad = parseInt(prompt("¿Cuantas unidades desea adquirir?"));
        let calculoSierraCircular = precioSierraCircular * cantidad;
        alert (`${nombreApellido} el total a abonar es $${calculoSierraCircular}`);
        break;
    }
    else if (herramientas == 4) {
        let precioMedidorDigital = 12999;
        alert (`El precio del medidor laser es de $${precioMedidorDigital}`);
        let cantidad = parseInt(prompt("¿Cuantas unidades desea adquirir?"));
        let calculoMedidorDigital = precioMedidorDigital * cantidad;
        alert (`${nombreApellido} el total a abonar es $${calculoMedidorDigital}`);
        break;
    }
    else if (herramientas == 5) {
        let precioLijadora = 16999;
        alert (`El precio de la lijadora es de $${precioLijadora}`);
        let cantidad = parseInt(prompt("¿Cuantas unidades desea adquirir?"));
        let calculoLijadora = precioLijadora * cantidad;
        alert (`${nombreApellido} el total a abonar es $${calculoLijadora}`);
        break;
    }
    else if (herramientas == 6) {
        let precioLustraLijadora = 14900;
        alert (`El precio de la Lustra Lijadora es de $${precioLustraLijadora}`);
        let cantidad = parseInt(prompt("¿Cuantas unidades desea adquirir?"));
        let calculoLustraLijadora = precioLustraLijadora * cantidad;
        alert (`${nombreApellido} el total a abonar es $${calculoLustraLijadora}`);
        break;
    }
    else if (herramientas == 7) {
        let precioSierraCaladora = 26699;
        alert (`El precio de la Sierra Caladora es de $${precioSierraCaladora}`);
        let cantidad = parseInt(prompt("¿Cuantas unidades desea adquirir?"));
        let calculoSierraCaladora = precioSierraCaladora * cantidad;
        alert (`${nombreApellido} el total a abonar es $${calculoSierraCaladora}`);
        break;
    }
    else if (herramientas == 8) {
        let precioFresadora = 23900;
        alert (`El precio de la fresadora es de $${precioFresadora}`);
        let cantidad = parseInt(prompt("¿Cuantas unidades desea adquirir?"));
        let calculoFresadora = precioFresadora * cantidad;
        alert (`${nombreApellido} el total a abonar es $${calculoFresadora}`);
        break;
    }
    else {
        alert("No disponemos de esta herramienta en nuestro catalogo, desea ver otra herramienta?");
    }
    
    herramientas = prompt("Este es nuestro catalogo de herramientas Einhell. Ingrese:" +
    "\n1-Taladro inalambrico" +
    "\n2-Rotomartillo" +
    "\n3-Sierra circular" +
    "\n4-Medidor digital" +
    "\n5-Lijadora" +
    "\n6-Lustralijadora" +
    "\n7-Sierra caladora" +
    "\n8-Fresadora" +
    "\nESC para salir.");
} */


