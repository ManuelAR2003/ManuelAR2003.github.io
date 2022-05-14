function consultarInfoDeJuego() {

    const urlParams = new URLSearchParams(window.location.search);
    const idJuego= urlParams.get("id");

    const dataForSelect = {
        operation: "select",
        table: "juegos",
        key: idJuego
    };

    const idImplementacion = "AKfycbzLwB4khjIBqhXWhhZSjhgcNvaXpH6-_i4wbkeOnvLf6vraz7L0WXu1cyQzPboRpvjL";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        consultarInfoDeJuegoTerminado);
}

function consultarInfoDeJuegoTerminado(response) {
    document.getElementById("titulo").innerHTML = response.value.titulo + " (" + response.value.fecha + ")";
    document.getElementById("genero").innerHTML = response.value.genero;
    document.getElementById("imagen").setAttribute("src", response.value.imagen);
    document.getElementById("compania").innerHTML = response.value.compania;
    document.getElementById("sinopsis").innerHTML = response.value.sinopsis;
}

consultarInfoDeJuego();