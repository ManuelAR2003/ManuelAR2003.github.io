function consultarJuegos() {
    const dataForSelect = {
        operation: "select",
        table: "juegos"
    };

    const idImplementacion = "AKfycbzLwB4khjIBqhXWhhZSjhgcNvaXpH6-_i4wbkeOnvLf6vraz7L0WXu1cyQzPboRpvjL";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        consultarInfoDeJuegoTerminado);
}

function consultarCompania() {
    const dataForSelect = {
        operation: "select",
        table: "companias"
    };

    const idImplementacion = "AKfycbzLwB4khjIBqhXWhhZSjhgcNvaXpH6-_i4wbkeOnvLf6vraz7L0WXu1cyQzPboRpvjL";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        consultarcompaniaTerminado);
}

let companias = null;

function consultarcompaniaTerminado(response) {
    companias = {};

    for (let i = 0; i < response.values.length; i++) {
        companias[response.values[i].id] = response.values[i];
    }

    consultarGenero();
}

function consultarGenero() {
    const dataForSelect = {
        operation: "select",
        table: "generos"
    };

    const idImplementacion = "AKfycbzLwB4khjIBqhXWhhZSjhgcNvaXpH6-_i4wbkeOnvLf6vraz7L0WXu1cyQzPboRpvjL";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        consultargeneroTerminado);
}

let generos = null;

function consultargeneroTerminado(response) {
    generos = {};

    for (let i = 0; i < response.values.length; i++) {
        generos[response.values[i].id] = response.values[i];
    }

    consultarJuegos();
}

function consultarInfoDeJuegoTerminado(response) {
    // <div class="juegos"></div>
    let divJuegos = document.createElement("div");
    divJuegos.className = "juegos";

    for (let i = 0; i < response.values.length; i++) {
        // Div juego
       
        let divJuego = document.createElement("div");
        divJuego.className = "juego";
        divJuego.setAttribute("onclick", "clickSobreJuego(" + response.values[i].id + ")");

        // titulo
        let titulo = document.createElement("h1");
        titulo.innerHTML = response.values[i].titulo; 

        divJuego.append(titulo);

        // Todos los datos del juego

        let compania = document.createElement("h4");
        compania.innerHTML = "Compañía: " + companias[response.values[i].compania].compania;
        divJuego.append(compania);

        let genero = document.createElement("h4");
        genero.innerHTML = "Género: " + generos[response.values[i].genero].genero;
        divJuego.append(genero);

        let fecha = document.createElement("h4");
        fecha.innerHTML = "Fecha: " + response.values[i].fecha;
        divJuego.append(fecha);



        let imagen = document.createElement("img");
        imagen.setAttribute("src", response.values[i].imagen);

        divJuego.append(imagen);


        let enlace = document.createElement("a");
        enlace.setAttribute("href", "info-juego.html?id=" + response.values[i].id);
        enlace.innerHTML = "Más información";

        let parrafoEnlace = document.createElement("p");
        parrafoEnlace.append(enlace);
        divJuego.append(parrafoEnlace);       

        divJuegos.append(divJuego);
    }

    document.getElementById("resultado").append(divJuegos);
}

function clickSobreJuego(id) {
    window.location = "info-juego.html?id=" + id;
}

consultarCompania();