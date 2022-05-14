function consultarInfoDeGenero() {

    const urlParams = new URLSearchParams(window.location.search);
    const idJuego= urlParams.get("id");

    const dataForSelect = {
        operation: "select",
        table: "generos",
        key: idJuego
    };

    const idImplementacion = "AKfycbzLwB4khjIBqhXWhhZSjhgcNvaXpH6-_i4wbkeOnvLf6vraz7L0WXu1cyQzPboRpvjL";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        consultarInfoDeGeneroTerminado);
}

function consultarInfoDeGeneroTerminado(response) {
    document.getElementById("genero").innerHTML = response.value.genero;
    document.getElementById("descripcion").innerHTML = response.value.descripcion;
    document.getElementById("ejemplos").innerHTML = response.value.ejemplos;
    document.getElementById("imagen").setAttribute("src", response.value.imagen);

}

consultarInfoDeGenero();