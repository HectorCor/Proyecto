const contenedortarjetas = document.getElementById("productos-container");

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
             <span class= "cantidad">0</span>
             <button>+</button>
            </div>
            `;
            contenedortarjetas.appendChild(nuevocomic);
            nuevocomic.getElementsByTagName("button")[1].addEventListener("click", (e) => agregaralcarrito(producto));
            const cuentaelement = e.target.parentelement.getElementsByTagName("span")[0];
            cuentaelement.innertext = agregaralcarrito(producto);
            contenedortarjetas.appendChild(nuevocomic);
            nuevocomic.getElementsByTagName("button")[0].addEventListener("click", (e) => restaralcarrito(producto));
            creartarjetasproductosinicio();
        });
    }
}

creartarjetasproductosinicio();