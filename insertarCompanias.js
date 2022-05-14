function insertarCompanias() {

    let compania = {
        id: document.getElementById("id").value,
        logo: document.getElementById("logo").value,
        compania: document.getElementById("compania").value,
        descripcion: document.getElementById("descripcion").value,
        localizacion: document.getElementById("localizacion").value,
        logo: document.getElementById("logo").value
        
    };

    const dataForInsert = {
        operation: "insert",
        table: "companias",
        object: compania
    };

    const idImplementacion = "AKfycbzLwB4khjIBqhXWhhZSjhgcNvaXpH6-_i4wbkeOnvLf6vraz7L0WXu1cyQzPboRpvjL";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForInsert,
        insertarCompaniasTerminado);
}

function insertarCompaniasTerminado(response) {
    console.log(response);
}


insertarCompanias();