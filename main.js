const contenedor = document.querySelector('.flex-container')



let contador = 0;

function crearLlave(nombre, modelo, precio){

    contador ++;

    img = "<img class = 'llave-img' src = 'https://images-na.ssl-images-amazon.com/images/I/31Tg-A%2Bu2SL._SX342_.jpg'>";

    nombre =  `<h2>${nombre}</h2>`;

    Región =  `<h3 id='${modelo}'>${modelo}</h3>`;

    precio =  `<p> Precio: <b>${precio}</b></p>`;
    
    return[img, nombre,modelo, precio]

}






let documentFragment = document.createDocumentFragment();

for (var i = 1;  i <= 9 ; i++ ){

    let modeloRandom = Math.round(Math.random()*10000);
    let precioRandom = Math.round(Math.random()*10000);
    let llave = crearLlave(`Producto ${i}`,`Referencia ${modeloRandom}`, `precio COP $${precioRandom}` )
    let div = document.createElement('DIV');
    div.addEventListener('click', ()=>{
        document.querySelector('.key-data').value = modeloRandom; })
    div.tabIndex=i;
    div.classList.add(`item-${i}`,'flex-item');
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    documentFragment.appendChild(div)
}

contenedor.appendChild(documentFragment)


contenedor.changeHidden