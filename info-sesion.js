function ComprobarUsuario() {
    const dataForSelect = {
        operation: "select",
        table: "usuarios"
    };

    const idImplementacion = "AKfycbzLwB4khjIBqhXWhhZSjhgcNvaXpH6-_i4wbkeOnvLf6vraz7L0WXu1cyQzPboRpvjL";

    document.getElementById("info").innerHTML = "Cargando...";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        ComprobarUsuarioTerminado);
}

function ComprobarUsuarioTerminado(response) {

    if (response.error == false) {
        document.getElementById("info").innerHTML = "";
    }
    else {
        document.getElementById("info").innerHTML = response.message;
    }

    let usuarioEncontrado = false;

    for (let i = 0; i < response.values.length; i++) {
        let password = document.getElementById("contrasenia").value;
        let usuario = document.getElementById("user").value;

        if (response.values[i].usuario == usuario && response.values[i].contrasenia == password && response.values[i].tipo == "admin") {
            console.log("El usuario es correcto, le redireccionamos a la página principal");
            usuarioEncontrado = true;
            window.location = "Pagina-principal.html";
        }
        else if (response.values[i].usuario == usuario && response.values[i].contrasenia == password && response.values[i].tipo == "usuario") {
            console.log("El usuario es correcto, le redireccionamos a la página principal");
            usuarioEncontrado = true;
            window.location = "Pagina-principal-usuario.html";
        }
    }

    if (usuarioEncontrado == false) {
        alert("El usuario y la contraseña no coinciden.");
    }
}

function insertarUsuario() {

    let registro = {
        usuario: document.getElementById("user2").value,
        contrasenia: document.getElementById("contrasenia2").value,
        tipo: document.getElementById("tipo2").value   
    };
   

    const dataForInsert = {
        operation: "insert",
        table: "usuarios",
        object: registro
    };
    if (document.getElementById("tipo2").value == "usuario") {
    const idImplementacion = "AKfycbzLwB4khjIBqhXWhhZSjhgcNvaXpH6-_i4wbkeOnvLf6vraz7L0WXu1cyQzPboRpvjL";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForInsert,
        insertarUsuarioTerminado);
    }
    else if (document.getElementById("tipo2").value == "admin") {
        const idImplementacion = "AKfycbzLwB4khjIBqhXWhhZSjhgcNvaXpH6-_i4wbkeOnvLf6vraz7L0WXu1cyQzPboRpvjL";
    
        GoogleSheetDataBaseOperation(
            idImplementacion,
            dataForInsert,
            insertarUsuarioTerminado);
        }
    else  {
        alert("El tipo de usuario no es correcto.")
    }

}

function insertarUsuarioTerminado(response) {
    console.log(response);
}

