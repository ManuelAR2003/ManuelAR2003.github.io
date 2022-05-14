function insertarGeneros() {

    let genero = {
        id: document.getElementById("id").value,
        genero: document.getElementById("genero").value,
        descripcion: document.getElementById("descripcion").value,
        ejemplos: document.getElementById("ejemplos").value,
        imagen: document.getElementById("imagen").value
        
    };

    const dataForInsert = {
        operation: "insert",
        table: "generos",
        object: genero
    };

    const idImplementacion = "AKfycbzLwB4khjIBqhXWhhZSjhgcNvaXpH6-_i4wbkeOnvLf6vraz7L0WXu1cyQzPboRpvjL";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForInsert,
        insertarGenerosTerminado);
}

function insertarGenerosTerminado(response) {
    console.log(response);
}


insertarGeneros();