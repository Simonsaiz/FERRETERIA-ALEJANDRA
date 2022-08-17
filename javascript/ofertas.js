const boton = document.querySelector("#btn");
const ofertas = document.querySelector("#fetch");


const datosOfertas = ()=>{
    fetch("../data.json")
        .then(response => response.json())
        .then(result => {
            result.forEach(oferta => {
                ofertas.innerHTML += `
                <div>
                    <h3>${oferta.herramienta}</h3>
                    <p>${oferta.precio}</p>
                </div>
                `
                
            })
        })
        .catch(error=> console.log(error))
    .finally(()=>{
    })
} 



boton.onclick = () => {
    datosOfertas();
}
