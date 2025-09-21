let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");

    if (input.value == "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(input.value);

    input.value = "";
    
    mostrarLista();
}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");

    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += "<li>" + amigos[i] + "</li>";
    }
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert("No has agregado amigos.");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    
    let amigoSorteado = amigos[indice];

    let amigoElegido = document.getElementById("resultado");
    amigoElegido.innerHTML = `El amigo secreto es: ${amigoSorteado}`;
}