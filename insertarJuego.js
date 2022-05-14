function insertarJuego() {

    let juego = {
        id: document.getElementById("id").value,
        titulo: document.getElementById("titulo").value,
        genero: document.getElementById("genero").value,
        compania: document.getElementById("compania").value,
        fecha: document.getElementById("fecha").value,
        sinopsis: document.getElementById("sinopsis").value,
        imagen: document.getElementById("imagen").value
        
    };

    const dataForInsert = {
        operation: "insert",
        table: "juegos",
        object: juego
    };

    const idImplementacion = "AKfycbzLwB4khjIBqhXWhhZSjhgcNvaXpH6-_i4wbkeOnvLf6vraz7L0WXu1cyQzPboRpvjL";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForInsert,
        insertarJuegoTerminado);
}

function insertarJuegoTerminado(response) {
    console.log(response);
}


insertarJuego();