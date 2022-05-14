function update() {
    let idGoogleSheet = "AKfycbzLwB4khjIBqhXWhhZSjhgcNvaXpH6-_i4wbkeOnvLf6vraz7L0WXu1cyQzPboRpvjL";
    let key           = document.getElementById("key").value;
    let tableName     = "juegos";
    let columnName1   = 'titulo';
    let columnValue1  = document.getElementById("columnValue1").value;
    let columnName2   = 'genero';
    let columnValue2  = document.getElementById("columnValue2").value;
    let columnName3   = 'compania';
    let columnValue3  = document.getElementById("columnValue3").value;
    let columnName4   = 'fecha';
    let columnValue4  = document.getElementById("columnValue4").value;
    let columnName5   = 'sinopsis';
    let columnValue5  = document.getElementById("columnValue5").value;
    let columnName6   = 'imagen';
    let columnValue6  = document.getElementById("columnValue6").value;
    
    
    const newRow = {};

    if (columnName1) {
        newRow[columnName1] = columnValue1;
    }

    if (columnName2) {
        newRow[columnName2] = columnValue2;
    }

    if (columnName3) {
        newRow[columnName3] = columnValue3;
    }
    if (columnName4) {
        newRow[columnName4] = columnValue4;
    }
    if (columnName5) {
        newRow[columnName5] = columnValue5;
    }
    if (columnName6) {
        newRow[columnName6] = columnValue6;
    }

    const dataForSelect = {
        operation: "update",
        table: tableName,
        key: key,
        object: newRow
    };

    document.getElementById("error").innerHTML = "Esperando resultado...";
    document.getElementById("message").innerHTML = "Esperando resultado...";

    GoogleSheetDataBaseOperation(
        idGoogleSheet,
        dataForSelect,
        updateFinished);
}

function updateFinished(response) {
    document.getElementById("error").innerHTML = response.error;
    document.getElementById("message").innerHTML = response.message;
}

