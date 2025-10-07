const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {// Función para agregar una tarea a la lista
  if (inputBox.value === '') { // Verifica si el campo de entrada está vacío
    alert("Debe escribir algo"); // Si está vacío, muestra una alerta para que el usuario ingrese algo
  } else {
    let li = document.createElement("li"); // Crea un nuevo elemento de lista (li)
    
    li.innerHTML = inputBox.value; // Establece el texto del elemento de lista como el valor ingresado por el usuario 
    
    listContainer.appendChild(li);  // Agrega el elemento de lista al contenedor de la lista
    
    let span = document.createElement("span"); // Crea un nuevo elemento span
    
    span.innerHTML = "\u00d7"; // Establece el contenido del span como un símbolo de cruz (×)
    
    li.appendChild(span); // Agrega el span al elemento de lista (li)
    }   
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function(e) { // Agrega un evento de clic al contenedor de la lista
  
    if (e.target.tagName === "LI") { // Verifica si el elemento clickeado es un elemento de lista (li)
    
        e.target.classList.toggle("checked"); // Alterna la clase "checked" en el elemento de lista
        saveData();
    } else if (e.target.tagName === "SPAN") { // Verifica si el elemento clickeado es un span
    
        e.target.parentElement.remove(); // Elimina el elemento de lista padre del span clickeado
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);//Guardar datos en el navegador
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");//muestra los datos almacenados al refresh
}
showTask();

