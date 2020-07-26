

let btnGuardar = document.querySelector('#guardar');
let inputTarea = document.querySelector('#tarea');
let seccionTareas = document.querySelector('.secciontareas');
let priTarea = document.querySelector('#addtarea')
let btnEliminar = document.querySelector('#eliminar');
let contadorTarea = 0;


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
    seccionTareas.innerHTML += `<article  id="${pTarea.id}">
                            <h3>${pTarea.tarea}</h3>
                             <p class=${pTarea.prioridad}>${pTarea.prioridad}</p >
                             <i onclick="borrarTarea('${pTarea.id}')" class="fa fa-trash fa-lg" aria-hidden="true"></i>
                            </article >`
}


function borrarTarea(pId) {
    let tareaBorrar = document.getElementById(pId);
    tareaBorrar.setAttribute('style', 'transform: scale(2)')
    seccionTareas.removeChild(tareaBorrar);
    let id = parseInt(pId);
    posicionBorrar = listaTareas.findIndex(tarea => tarea.id == pId);
    listaTareas.splice(posicionBorrar, 1);

}

let selectorPrioridad = document.querySelector('#selectorprioridad');
selectorPrioridad.addEventListener('change', buscarXPrioridad);

function buscarXPrioridad(event) {
    let seleccionPrioridad = event.target.value;
    let listaXPrioridad = filtrarXPrioridad(listaTareas, seleccionPrioridad);
    pintarTareasXPrioridad(listaXPrioridad);
}


function pintarTareasXPrioridad(pListaXPrioridad) {
    seccionTareas.innerHTML = "";
    let selectorPrioridad = event.target.value;
    pListaXPrioridad.forEach(tarea => { pintarTarea(tarea) });
    if (selectorPrioridad == "Prioridad") {
        listaTareas.forEach(tarea => { pintarTarea(tarea) })
    }
}


let inputBuscarTarea = document.getElementById('buscartarea');
inputBuscarTarea.addEventListener('input', capturarXInput);


function capturarXInput(event) {
    let inputBuscado = event.target.value.toLowerCase();
    let resultadoBusqueda = buscarXInput(listaTareas, inputBuscado);
    pintarTareasXInput(resultadoBusqueda);

}



function buscarXInput(pListaTareas, pInputBuscado) {
    let listaXInputBuscado = new Array();

    listaXInputBuscado = pListaTareas.filter(tarea => {
        let tareaMinusculas = tarea.tarea.toLowerCase();
        return tareaMinusculas.includes(pInputBuscado);

    });
    return listaXInputBuscado;

}

function pintarTareasXInput(pListaXInput) {
    seccionTareas.innerHTML = "";
    pListaXInput.forEach(tarea => { pintarTarea(tarea) });
}



