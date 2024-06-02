const contenedortarjetas = document.getElementById("productos-container");
const unidadeselement = document.getElementById("unidades");
const precioelement = document.getElementById("precio");
const carritovacioelement = document.getElementById("carrito-vacio");
const totaleselement = document.getElementById("totales");
const reiniciarcarritoelement = document.getElementById("Reiniciar");

function creartarjetasproductosinicio() {
    contenedortarjetas.innerHTML = "";
    const productos = JSON.parse(localStorage.getItem("comics"));
    console.log(productos)
    if (productos && productos.length > 0) {
        productos.forEach(producto => {
            const nuevocomic = document.createElement("div");
            nuevocomic.classList = "tarjeta-producto";
            nuevocomic.innerHTML = `
            <img src="${producto.img}">
            <h3>${producto.nombre}</h3>
            <h6>$${producto.precio} CLP</h6>
            <div>
             <button>-</button>
             <span class= "cantidad">${producto.cantidad}</span>
             <button>+</button>
            </div>
            `;
            contenedortarjetas.appendChild(nuevocomic);
            nuevocomic.getElementsByTagName("button")[1].addEventListener("click", (e) => agregaralcarrito(producto));
            const cuentaelement = e.target.parentelement.getElementsByTagName("span")[0];
            cuentaelement.innertext = agregaralcarrito(producto);
            actualizartotales();
        });
        contenedortarjetas.appendChild(nuevocomic);
        nuevocomic.getElementsByTagName("button")[0].addEventListener("click", (e) => restaralcarrito(producto));
        creartarjetasproductosinicio();
        actualizartotales();
    };
};



creartarjetasproductosinicio();
actualizartotales();

function actualizartotales() {
    const productos = JSON.parse(localStorage.getItem("comics"));
    let unidades = 0;
    let precio = 0;
    if (productos && productos.length > 0) {
        productos.forEach(producto => {
            unidades += producto.cantidad;
            precio += producto.precio * producto.unidades;
        })
        unidadeselement.innerText = unidades;
        precioelement.innertext = precio;
    }
}

function revisarmensajevacio() {
    const productos = JSON.parse(localStorage.getItem("comics"));
    console.log(productos, productos == true)
    carritovacioelement.classList.toggle("escondido", productos && productos.length>0);
    totaleselement.classList.toggle("escondido", !(productos && productos.length>0));
}

revisarmensajevacio();

reiniciarcarritoelement.addEventListener("click",reiniciarcarrito);
function reiniciarcarrito(){
    localStorage.removeItem("comics");
    actualizartotales();
    creartarjetasproductosinicio();
}