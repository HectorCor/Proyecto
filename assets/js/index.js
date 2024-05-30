const contenedortarjetas = document.getElementById("productos-container");

function creartarjetasproductosinicio(productos){
    productos.forEach(producto => {
        const nuevocomic =document.createElement("div");
        nuevocomic.classList = "tarjeta-producto";
        nuevocomic.innerHTML = `
            <img src="productos/${producto.id}.jpg">
            `
        contenedortarjetas.appendChild(nuevocomic);
    });
}

creartarjetasproductosinicio(comics);