function consultarCompania() {
    const dataForSelect = {
        operation: "select",
        table: "companias"
    };

    const idImplementacion = "AKfycbzLwB4khjIBqhXWhhZSjhgcNvaXpH6-_i4wbkeOnvLf6vraz7L0WXu1cyQzPboRpvjL";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        consultarInfoDeCompaniaTerminado);
}

function consultarInfoDeCompaniaTerminado(response) {
    // <div class="juegos"></div>
    let divJuegos = document.createElement("div");
    divJuegos.className = "juegos";

    for (let i = 0; i < response.values.length; i++) {
        // Div juego
       
        let divJuego = document.createElement("div");
        divJuego.className = "juego";
        divJuego.setAttribute("onclick", "clickSobreJuego(" + response.values[i].id + ")");

        // genero
        let compania = document.createElement("h1");
        compania.innerHTML = response.values[i].compania; 

        divJuego.append(compania);

        // Todos los datos del juego

        let genero = document.createElement("h4");
        genero.innerHTML = "Descripción: " + response.values[i].genero;
        divJuego.append(genero);

        let localizacion = document.createElement("h4");
        localizacion.innerHTML = "Localización: " + response.values[i].localizacion;
        divJuego.append(localizacion);

        let logo = document.createElement("img");
        logo.setAttribute("src", response.values[i].logo);

        divJuego.append(logo);

        let enlace = document.createElement("a");
        enlace.setAttribute("href", "info-compania.html?id=" + response.values[i].id);
        enlace.innerHTML = "Más información";

        let parrafoEnlace = document.createElement("p");
        parrafoEnlace.append(enlace);
        divJuego.append(parrafoEnlace);       

        divJuegos.append(divJuego);
    }

    document.getElementById("resultado").append(divJuegos);
}

function clickSobreCompania(id) {
    window.location = "info-compania.html?id=" + id;
}

consultarCompania();