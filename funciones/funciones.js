

function guardarTarea(pTarea) {
    listaTareas.push(pTarea);
}

function borrar(pTareaBorrar) {
    let id = parseInt(pId);
    let posicionBorrar = listaTareas.findIndex(tarea => tarea.id == pId);
    listaTareas.slice(posicionBorrar, 1);
}