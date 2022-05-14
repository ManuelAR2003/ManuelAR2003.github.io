function consultarGenero() {
    const dataForSelect = {
        operation: "select",
        table: "generos"
    };

    const idImplementacion = "AKfycbzLwB4khjIBqhXWhhZSjhgcNvaXpH6-_i4wbkeOnvLf6vraz7L0WXu1cyQzPboRpvjL";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        consultarInfoDeGeneroTerminado);
}

function consultarInfoDeGeneroTerminado(response) {
    // <div class="juegos"></div>
    let divJuegos = document.createElement("div");
    divJuegos.className = "juegos";

    for (let i = 0; i < response.values.length; i++) {
        // Div juego
       
        let divJuego = document.createElement("div");
        divJuego.className = "juego";
        divJuego.setAttribute("onclick", "clickSobreJuego(" + response.values[i].id + ")");

        // genero
        let genero = document.createElement("h1");
        genero.innerHTML = response.values[i].genero; 

        divJuego.append(genero);

        // Todos los datos del juego

        let descripcion = document.createElement("h4");
        descripcion.innerHTML = "Descripción: " + response.values[i].descripcion;
        divJuego.append(descripcion);

        let enlace = document.createElement("a");
        enlace.setAttribute("href", "info-genero.html?id=" + response.values[i].id);
        enlace.innerHTML = "Más información";

        let parrafoEnlace = document.createElement("p");
        parrafoEnlace.append(enlace);
        divJuego.append(parrafoEnlace);       

        divJuegos.append(divJuego);
    }

    document.getElementById("resultado").append(divJuegos);
}

function clickSobreGenero(id) {
    window.location = "info-genero.html?id=" + id;
}

consultarGenero();