// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let listadoAmigos = [];

function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;


    if (nombreAmigo === ''){
        alert("Por favor, inserte un nombre.");
    } else {
        listadoAmigos.push(nombreAmigo);
        console.log(listadoAmigos)
        limpiarCaja();
        mostrarAmigos();
        return nombreAmigo;
    }
    
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}


function mostrarAmigos() {
    // Obtener la referencia al contenedor de la lista
    let listaHTML = document.getElementById('listaAmigos');

    // Limpiar la lista antes de agregar los nuevos elementos
    listaHTML.innerHTML = '';

    // Recorrer el array de amigos y agregar cada uno como un <li> dentro de la lista
    listadoAmigos.forEach(function(amigo) {
        let listItem = document.createElement('li');  // Crear un nuevo elemento <li>
        listItem.textContent = amigo;  // Asignar el nombre del amigo al <li>
        listaHTML.appendChild(listItem);  // Agregar el <li> a la lista
    });
}

function sortearAmigo(){
     // 1. Validar que haya amigos disponibles
    if (listadoAmigos.length === 0) {
        alert("No hay amigos disponibles para sortear.");
        return; // Salir de la función si no hay amigos
    }

    // 2. Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * listadoAmigos.length);

    // 3. Obtener el nombre sorteado
    let amigoSorteado = listadoAmigos[indiceAleatorio];

    // 4. Mostrar el resultado
    let resultadoElemento = document.getElementById('resultado'); // Asegúrate de tener un elemento con este id en tu HTML
    resultadoElemento.innerHTML = `Amigo sorteado: ${amigoSorteado}`;

    // 5. Ocultar la lista de amigos
    let listaHTML = document.getElementById('listaAmigos'); // Asegúrate de que este id coincida con tu HTML
    listaHTML.style.display = 'none'; // Ocultar la lista
}



