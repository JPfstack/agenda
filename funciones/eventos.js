

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
    seccionTareas.innerHTML += `<article data-id="tarea_${pTarea.id}">
                            <h3>${pTarea.tarea}</h3>
                             <p>${pTarea.prioridad}</p >
                            <button id="eliminar">Eliminar tarea</button>
                            </article >
                            <hr>`
}






