
function main() {
    const canvas  = document.querySelector("#gl");
    const gl = canvas.getContext("webgl");

    try {
        if(!gl) {
            throw "No se pudo inicializar WebGL";
        }

        drawScene();
    } catch (error) {
        console.error(error);
    }
}

window.onload = main;