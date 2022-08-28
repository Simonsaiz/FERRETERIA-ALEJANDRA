const Clickbutton = document.querySelectorAll('.boton')
const tbody = document.querySelector('.tbody')
let carrito = []


Clickbutton.forEach(btn => {
    btn.addEventListener('click', agregarAlCarrito)
})

function agregarAlCarrito(e){
    const boton = e.target
    const item = boton.closest('.prod')
    const itemTitulo = item.querySelector('.productosInfo').textContent;
    const itemPrecio = item.querySelector('.productosPrecio').textContent;
    const itemImg = item.querySelector('.imgProd').src;

const nuevoProducto =  {
    titulo: itemTitulo,
    precio: itemPrecio,
    imagen: itemImg,
    cantidad: 1
}

agregarNuevoProducto(nuevoProducto)
}

function agregarNuevoProducto (nuevoProducto){
  
  const InputElemento = tbody.getElementsByClassName('input__elemento')
  for(let i=0; i < carrito.length; i++){
    if(carrito[i].titulo.trim() === nuevoProducto.titulo.trim()){
      carrito[i].cantidad++;
      const inputValue = InputElemento[i]
      inputValue.value++;
      CarritoTotal()
      return null;
    }
  }
carrito.push(nuevoProducto)

renderCarrito()
}

function renderCarrito(){
  tbody.innerHTML = ''
  carrito.map(item => {
    const tr = document.createElement('tr')
    tr.classList.add('ItemCarrito')
    const Content = `
    
    <th scope="row">1</th>
            <td class="table__productos">
              <img src=${item.imagen}  alt="">
              <p class="title">${item.titulo}</p>
            </td>
            <td class="table__price"><p>${item.precio}</p></td>
            <td class="table__cantidad">
              <input type="number" min="1" value=${item.cantidad} class="input__elemento">
              <button class="delete btn btn-danger">X</button>
            </td>
    
    `
    tr.innerHTML = Content;
    tbody.append(tr)

    tr.querySelector(".delete").addEventListener('click', removeItemCarrito)
    tr.querySelector(".input__elemento").addEventListener('change', sumaCantidad)
  })
  CarritoTotal()
}

function CarritoTotal(){
  let Total = 0;
  const itemCartTotal = document.querySelector('.itemCartTotal')
  carrito.forEach((item) => {
    const precio = Number(item.precio.replace("$", ''))
    Total = Total + precio*item.cantidad
  })

  itemCartTotal.innerHTML = `Total $${Total}`
  addLocalStorage()
}

function removeItemCarrito(e){
  const buttonDelete = e.target
  const tr = buttonDelete.closest(".ItemCarrito")
  const titulo = tr.querySelector('.title').textContent;
  for(let i=0; i<carrito.length ; i++){

    if(carrito[i].titulo.trim() === titulo.trim()){
      carrito.splice(i, 1)
    }
  }
  tr.remove()
  CarritoTotal()
}

function sumaCantidad(e){
  const sumaInput  = e.target
  const tr = sumaInput.closest(".ItemCarrito")
  const titulo = tr.querySelector('.title').textContent;
  
  carrito.forEach(item => {
    if(item.titulo.trim() === titulo){
      sumaInput.value < 1 ?  (sumaInput.value = 1) : sumaInput.value;
      item.cantidad = sumaInput.value;
      CarritoTotal()
    }
  })
}

function addLocalStorage(){
  localStorage.setItem('carrito', JSON.stringify(carrito))
}

window.onload = function(){
  const storage = JSON.parse(localStorage.getItem('carrito'));
  if(storage){
    carrito = storage;
    renderCarrito()
  }
}