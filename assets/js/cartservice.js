function agregaralcarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("comics"));
    console.log(memoria);
    if(!memoria){
        const nuevoproducto = producto;
        nuevoproducto.cantidad = 1;
        localStorage.setItem("comics",JSON.stringify([nuevoproducto]));  
    } else {
        const indiceproducto = memoria.findindex(comic => comic.id)
        console.log(indiceproducto)
        if(indiceproducto === -1){
            const nuevamemoria = memoria;
            nuevamemoria.push(getnuevoproductoparamemoria(producto))
            localStorage.setItem("comics",JSON.stringify(nuevamemoria));
        } else {
            nuevamemoria[indiceproducto].cantidad ++;
        }
        localStorage.setItem("comics",JSON.stringify([nuevoproducto])); 
    }
    actualizarnumerocarrito();
}

/** toma nuevo producto  le agrega cantidad 1 y lo devuelve */
function getnuevoproductoparamemoria(producto){
    const nuevoproducto = producto;
    nuevoproducto.cantidad = 1;
    return nuevoproducto;
}

const cuentacarritoelement = document.getElementById("cuenta carrito");
function actualizarnumerocarrito(){
    const memoria = JSON.parse(localStorage.getItem("comics"));
    const cuenta = memoria.reduce((acum,current) => acum+current.cantidad,0 );
}

actualizarnumerocarrito();