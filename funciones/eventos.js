// 2. capturamos todos los elementos con los que vayamos a trabajar:

let btnGuardar = document.querySelector('#guardar');
let btnBuscar = document.querySelector('#buscar');
let btnEliminar = document.querySelector('#eliminar');
let inputTarea = document.querySelector('#tarea');
let inputBuscarTarea = document.querySelector('#buscartarea');
let listaTareas = document.querySelector('#listatareas');
let priTarea = document.querySelector('#addtarea');
let priBuscar = document.querySelector('#buscartarea');
let contadorTarea = 0;



// 3.incluimos los listeners

btnGuardar.addEventListener('click', capturarTarea);

// 4. creamos la funcion guardarTarea que se ejecuta cuando se pulsa el boton guardar

function capturarTarea(event) {
    event.preventDefault();

    let tarea = inputTarea.value;

    const newTarea = {
        id: contadorTarea,
        tarea: tarea,
        prioridad: priTarea
    }

    guardarTarea(newTarea);
    pintarTarea(newTarea);

}



