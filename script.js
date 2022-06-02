//Declaracion de Variables
let inputPrincipal;
let botonAgregar = document.querySelector(".boton-agregar");
let contenedor = document.querySelector(".container")


//Creacion Clase ITEM
class Item {
    constructor(inputPrincipal) {
        this.inputPrincipal = inputPrincipal;
    };
    crearDiv(tarea) {
        //Creacion de ELEMENTOS INPUT
        let inputItem = document.createElement("input");
        inputItem.setAttribute("type", "text");
        inputItem.setAttribute("disabled", true);
        inputItem.classList.add("item-input");
        inputItem.value = tarea;

        //CReacion del DIV
        let nuevoDiv = document.createElement("div");
        nuevoDiv.classList.add("item");
        console.log(nuevoDiv)

        //Creacion BOTON-EDITAR
        let botonEditar = document.createElement("button");
        botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
        botonEditar.classList.add("boton-editar");
        botonEditar.setAttribute("id", "boton-editar");

        //Creacion BOTON-REMOVER
        let botonRemover = document.createElement("button");
        botonRemover.innerHTML = "<i class='fas fa-trash'></i>";
        botonRemover.classList.add("boton-remover");

        //Agregar ELEMENTOS AL DIV
        nuevoDiv.appendChild(inputItem);
        nuevoDiv.appendChild(botonEditar);
        nuevoDiv.appendChild(botonRemover);

        //Agregar  DIV AL CONTAINER
        contenedor.appendChild(nuevoDiv);

        botonEditar.addEventListener("click", function () {
            if (inputItem.disabled == false) {
                inputItem.setAttribute("disabled", true);
                botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
            } else {
                inputItem.removeAttribute("disabled");
                botonEditar.innerHTML = "<i class='fas fa-lock-open'></i>";
            }
        })

        botonRemover.addEventListener("click", function () {
            nuevoDiv.removeChild(inputItem);
            nuevoDiv.removeChild(botonEditar);
            nuevoDiv.removeChild(botonRemover);
        })
    }
}
//tomar el evento CLICK - chequear input
botonAgregar.addEventListener("click", function () {
    chequearInput();
})

//Validar el Chequear INPUT
function chequearInput() {
    inputPrincipal = document.querySelector(".input").value;
    console.log(inputPrincipal)
    if (inputPrincipal.length !== 0) {
        let objItem = new Item(inputPrincipal);
        console.log(objItem)
        objItem.crearDiv(inputPrincipal);
        inputPrincipal.innerHTML = "";
        limpiarInput();
    } else {
        console.log("No se ha ingresado una tarea")
    }
}

function limpiarInput() {
    inputPrincipal = document.querySelector(".input").value = "";
}