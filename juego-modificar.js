function consultarInfoDeJuego() {

    const urlParams = new URLSearchParams(window.location.search);
    const idJuego = urlParams.get("id");

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
   
    document.getElementById("inputTitulo").value = response.value.titulo;
    document.getElementById("inputGenero").value = response.value.genero;
    document.getElementById("inputCompania").value = response.value.compania;
    document.getElementById("inputFecha").value = response.value.fecha;
    document.getElementById("inputSinopsis").value = response.value.sinopsis;
    document.getElementById("inputImagen").value = response.value.imagen;
}

function modificarDatos() {

    const tituloNuevo = document.getElementById("inputTitulo").value;
    const generoNuevo = document.getElementById("inputGenero").value;
    const companiaNuevo = document.getElementById("inputCompania").value;
    const fechaNuevo = document.getElementById("inputFecha").value;
    const sinopsisNuevo = document.getElementById("inputSinopsis").value;
    const imagenNuevo = document.getElementById("inputImagen").value;

    const urlParams = new URLSearchParams(window.location.search);
    const idJuego = urlParams.get("id");

    const dataForUpdate = {
        operation: "update",
        table: "juegos",
        key: idJuego,
        object: {
            titulo: tituloNuevo,
            genero: generoNuevo,
            compania: companiaNuevo,
            fecha: fechaNuevo,
            sinopsis: sinopsisNuevo,
            imagen: imagenNuevo
        }
    };   

    const idImplementacion = "AKfycbzLwB4khjIBqhXWhhZSjhgcNvaXpH6-_i4wbkeOnvLf6vraz7L0WXu1cyQzPboRpvjL";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForUpdate,
        updateJuegoTerminado);

}

function updateJuegoTerminado(response) {
    alert(response.message);
}

consultarInfoDeJuego();