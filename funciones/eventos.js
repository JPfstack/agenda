

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
                            <a onclick="borrarTarea('${pTarea.id}')" class="eliminar" >Eliminar</a>
                            </article >`
}




function borrarTarea(pId) {
    let tareaBorrar = document.getElementById(pId);
    seccionTareas.removeChild(tareaBorrar);
    let id = parseInt(pId);
    posicionBorrar = listaTareas.findIndex(tarea => tarea.id == pId);
    listaTareas.splice(posicionBorrar, 1);

}

let btnBuscarXPrioridad = document.querySelector('#buscar');
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
    let inputBuscado = event.target.value;
    let resultadoBusqueda = buscarXInput(listaTareas, inputBuscado);
    pintarTareasXInput(resultadoBusqueda);

}

const listaXInputBuscado = new Array();

function buscarXInput(pListaTareas, pInputBuscado) {
    let listaXInputBuscado = pListaTareas.filter(tarea => tarea.tarea.includes(pInputBuscado));
    return listaXInputBuscado;

}

function pintarTareasXInput(pListaXInput) {
    seccionTareas.innerHTML = "";
    pListaXInput.forEach(tarea => { pintarTarea(tarea) });
}


   

    



/* function pintarUnaTarea(pTarea) {
    seccionTareas.innerHTML += `<article data-id=${pTarea.id} id="tarea_${pTarea.id}">
                                <h3>${pTarea.tarea}</h3>
                                <p>${pTarea.prioridad}</p >
                                <a onclick="borrarTarea('tarea_${pTarea.id}')" class="eliminar" >Eliminar</a>
                                 </article >`
 */

    /*    //crear los elementos
       let article = document.createElement('article');
       let h3 = document.createElement('h3');
       let p = document.createElement('p');
       let a = document.createElement('a');
       a.className = "eliminar";
   
   
       //creo los contenidos
   
       let contentH3 = document.createTextNode(pTarea.tarea);
       let contentp = document.createTextNode(pTarea.prioridad);
   
       //tiro los contenidos dentro de los elementos.
   
   
       h3.appendChild(contentH3);
       p.appendChild(contentp);
   
   
   
       article.appendChild(h3);
       article.appendChild(p);
       article.appendChild(a);
   
       seccionTareas.appendChild(article); */


