

let btnGuardar = document.querySelector('#guardar');
let inputTarea = document.querySelector('#tarea');
let seccionTareas = document.querySelector('.secciontareas');
let priTarea = document.querySelector('#addtarea')
let btnEliminar = document.querySelector('#eliminar');
let contadorTarea = 2;





btnGuardar.addEventListener('click', capturarTarea);


function capturarTarea(event) {
    event.preventDefault();

    let tarea = inputTarea.value;
    let prioridad = priTarea.value;


    const newTarea = {
        id: contadorTarea,
        tarea: tarea,
        prioridad: prioridad
    }
    guardarTarea(newTarea);

    pintarTarea(newTarea);
    inputTarea.value = "";
    contadorTarea++;

}


function pintarTarea(pTarea) {
    seccionTareas.innerHTML += `<article data-id=${pTarea.id} id="tarea_${pTarea.id}">
                            <h3>${pTarea.tarea}</h3>
                             <p>${pTarea.prioridad}</p >
                            <a onclick="borrarTarea('tarea_${pTarea.id}')" class="eliminar" >Eliminar</a>
                            </article >`
}




function borrarTarea(pId) {
    let tareaBorrar = document.getElementById(pId);
    seccionTareas.removeChild(tareaBorrar);
    borrar(pId);


}

let btnBuscarXPrioridad = document.querySelector('#buscar');
let selectorPrioridad = document.querySelector('#selectorprioridad');

selectorPrioridad.addEventListener('change', buscarXPrioridad);

function buscarXPrioridad(event) {
    let seleccionPrioridad = event.target.value;
    let listaXPrioridad = filtrarXPrioridad(listaTareas, seleccionPrioridad);
    pintarTareasXPrioridad(listaXPrioridad);



}
function filtrarXPrioridad(pListaTareas, pPrioridad) {
    let listaFiltradaXPrioridad = new Array();

    listaFiltradaXPrioridad = pListaTareas.filter(tarea => tarea.prioridad == pPrioridad);

    return listaFiltradaXPrioridad;
}

function pintarTareasXPrioridad(pListaXPrioridad) {
    seccionTareas.innerHTML = "";
    seccionTareas.innerText = pListaXPrioridad.length;
    pListaXPrioridad.forEach(tarea => {
        pintarTarea(tarea)
    });

} 