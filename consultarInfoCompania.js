function consultarInfoDeCompania() {

    const urlParams = new URLSearchParams(window.location.search);
    const idJuego= urlParams.get("id");

    const dataForSelect = {
        operation: "select",
        table: "companias",
        key: idJuego
    };

    const idImplementacion = "AKfycbzLwB4khjIBqhXWhhZSjhgcNvaXpH6-_i4wbkeOnvLf6vraz7L0WXu1cyQzPboRpvjL";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        consultarInfoDeCompaniaTerminado);
}

function consultarInfoDeCompaniaTerminado(response) {
    document.getElementById("compania").innerHTML = response.value.compania;
    document.getElementById("genero").innerHTML = response.value.genero;
    document.getElementById("logo").setAttribute("src", response.value.logo);
    document.getElementById("descripcion").innerHTML = response.value.descripcion;
    document.getElementById("localizacion").innerHTML = response.value.localizacion;
}

consultarInfoDeCompania();