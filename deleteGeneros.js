function ddelete() {
    let idGoogleSheet = "AKfycbzLwB4khjIBqhXWhhZSjhgcNvaXpH6-_i4wbkeOnvLf6vraz7L0WXu1cyQzPboRpvjL";
    let tableName     = "generos";
    let key           = document.getElementById("key").value;
    
    const dataForSelect = {
        operation: "delete",
        table: tableName,
        key: key
    };

    document.getElementById("error").innerHTML = "Esperando resultado...";
    document.getElementById("message").innerHTML = "Esperando resultado...";

    GoogleSheetDataBaseOperation(
        idGoogleSheet,
        dataForSelect,
        deleteFinished);
}

function deleteFinished(response) {
    document.getElementById("error").innerHTML = response.error;
    document.getElementById("message").innerHTML = response.message;
}

