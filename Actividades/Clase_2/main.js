/*function setTextHM(msg) {
    $("div.holaMundo").text(msg);
}*/

$(document).ready(() => {

    //alert("Hola Mundo");
    $("body").css("background-color", "#313131");

    // Esta es una función de scope local, solo funciona dentro del document.ready (block-scoped function)
    // let setTextHM = (msg) => {
    //     $("div.holaMundo").text(msg);
    // }

    //setTextHM("Hola Mundo");

    /*setTimeout(() => {
        setTextHM("Adios!");
    }, 3000);*/

    /*
    let loteria = 0;
    while (loteria !== 5) {
        loteria = Math.floor(Math.random() * 10000);
    }
    setTextHM("adios");
    */

    let prom = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("No se ganó la lotería.")
        }, 3000);
        let loteria = 0;
        while (loteria !== 5) {
            loteria = Math.floor(Math.random() * 10000);
        }
        resolve("Ganó la lotería!!!!");
    });

    // setTextHM("Realizando la lotería...");
    // prom.then(msg => {
    //     setTextHM(msg);
    // }).catch(msg => {
    //     setTextHM(msg);
    // });

    $.ajax({
        url: "data.json"

    }).done((data) => {
        console.log(data);
        let comment = data["_comment"];
        console.log(comment);
        let alumnos = data["alumnos"];
        console.log(alumnos);

        alumnos.forEach(e => {
            console.log(e);
            $("div.nombre").append('<li style="color: white; list-style: none;">' + e["nombre"]+ "</li>");
            $("div.edad").append('<li style= "color: white; list-style: none;">' + e["edad"]+ "</li>");
            $("div.semestre").append('<li style= "color: white; list-style: none;">' + e["semestre"]+ "</li>");
        });
    });

});