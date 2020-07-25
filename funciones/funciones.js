

function guardarTarea(pTarea) {
    listaTareas.push(pTarea);
}


function filtrarXPrioridad(pListaTareas, pPrioridad) {
    let listaFiltradaXPrioridad = new Array();
    listaFiltradaXPrioridad = pListaTareas.filter(tarea => tarea.prioridad == pPrioridad);
    return listaFiltradaXPrioridad;
}