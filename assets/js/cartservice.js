function agregaralcarrito(producto) {
    const memoria = JSON.parse(localStorage.getItem("comics"));
    console.log(memoria);
    let cuenta = 0;
    if (!memoria) {
        const nuevoproducto = producto;
        nuevoproducto.cantidad = 1;
        localStorage.setItem("comics", JSON.stringify([nuevoproducto]));
        cuenta = 1;
    } else {
        const indiceproducto = memoria.findindex(comic => comic.id)
        console.log(indiceproducto)
        if (indiceproducto === -1) {
            const nuevamemoria = memoria;
            nuevamemoria.push(getnuevoproductoparamemoria(producto))
            localStorage.setItem("comics", JSON.stringify(nuevamemoria));
            cuenta = 1;
        } else {
            nuevamemoria[indiceproducto].cantidad++;
            cuenta = nuevamemoria[indiceproducto].cantidad;
        }
        localStorage.setItem("comics", JSON.stringify([nuevoproducto]));
        return cuenta;
    }   
    actualizarnumerocarrito();
}

function restaralcarrito(producto) {
    const memoria = JSON.parse(localStorage.getItem("comics"));
    const indiceproducto = memoria.findindex(comic => comic.id);
    if (memoria[indiceproducto].cantidad === 1) {
        memoria.splice(indiceproducto, 1);
    } else {
        memoria[indiceproducto].cantidad--;
    }
    localStorage.setItem("comics", JSON.stringify(memoria));
}





/** toma nuevo producto  le agrega cantidad 1 y lo devuelve */
function getnuevoproductoparamemoria(producto) {
    const nuevoproducto = producto;
    nuevoproducto.cantidad = 1;
    return nuevoproducto;
}

const cuentacarritoelement = document.getElementById("cuenta carrito");
function actualizarnumerocarrito() {
    const memoria = JSON.parse(localStorage.getItem("comics"));
    const cuenta = memoria.reduce((acum, current) => acum + current.cantidad, 0);
}

actualizarnumerocarrito();