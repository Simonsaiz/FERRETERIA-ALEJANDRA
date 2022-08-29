const boton = document.querySelector("#btn");
const nuevoCatalogo = document.querySelector("#fetch");


const herramientasNuevas = ()=>{
    fetch("../secciones/datos.json")
        .then(response => response.json())
        .then(result => {
            result.forEach(herramienta=> {
                nuevoCatalogo.innerHTML += `
                <div>
                    <img class="imgProdfFetch" src=${herramienta.img} alt="">
                    <p class="productosInfo">${herramienta.herramienta}</p>
                    <p class="productosInfo">${herramienta.descripcion}</p>
                </div>
                `
                
            })
        })
        .catch(error=> console.log(error))
    .finally(()=>{
    })
} 



boton.onclick = () => {
    herramientasNuevas();
}
