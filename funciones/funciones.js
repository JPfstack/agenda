

function guardarTarea(pTarea) {
    listaTareas.push(pTarea);
}

/* function borrar(pId) {
    let id = parseInt(pId);
    let posicionBorrar = listaTareas.findIndex(tarea => tarea.id == pId);
    listaTareas.splice(posicionBorrar, 1);
    console.log(posicionBorrar);
} */

function filtrarXPrioridad(pListaTareas, pPrioridad) {
    let listaFiltradaXPrioridad = new Array();
    listaFiltradaXPrioridad = pListaTareas.filter(tarea => tarea.prioridad == pPrioridad);
    return listaFiltradaXPrioridad;
}