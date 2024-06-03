const contenedortarjetas = document.getElementById("productos-container");

function creartarjetasproductosinicio(productos) {
    productos.forEach(producto => {
        const nuevocomic = document.createElement("div");
        nuevocomic.classList = "tarjeta-producto";
        nuevocomic.innerHTML = `
            <img src="${producto.img}">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <h6>$${producto.precio} CLP</h6>
            <button>agregar al carrito</button>
            `
        contenedortarjetas.appendChild(nuevocomic);
        nuevocomic.getElementsByTagName("button")[0].addEventListener("click", () => agregaralcarrito(producto))
    });
}

creartarjetasproductosinicio(comics);