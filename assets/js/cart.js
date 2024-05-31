const contenedortarjetas = document.getElementById("productos-container");

function creartarjetasproductosinicio() {
    const productos = JSON.parse(localStorage.getItem("comics"));
    console.log(productos);
    if (productos && productos.lenght > 0) {
        productos.forEach((producto) => {
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
            nuevocomic.getElementsByTagName("button")[0].addEventListener("click", () => agregaralcarrito(producto));
        });
    }
}

creartarjetasproductosinicio();