 /**
  * Función para inicializar los shaders del programas.
  * @param gl 
  * @param vsSource 
  * @param fsSource 
  */
 export function initShaderProgram(gl, vsSource, fsSource) {
    const shaderProgram = gl.createProgram();
    try {        
        const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
        const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

        gl.attachShader(shaderProgram, vertexShader);
        gl.attachShader(shaderProgram, fragmentShader);

        gl.linkProgram(shaderProgram);
        if(!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
            throw `No se pudo inicializar el shaderProgram ${gl.getProgramInfoLog(shaderProgram)}`;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}

/**
 * Función para cargar el Shader.
 * @param gl Contexto del shader.
 * @param type Typo de shader Fragment o Vertex.
 * @param source Código del shader.
 */
function loadShader(gl, type, source) {
    const shader = gl.createShader(type);
    try {
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)){
            throw `Error compilando el shader ${gl.getShaderInfoLog(shader)}`;
        }
    } catch (error) {
        console.log(error);
        gl.deleteShader(shader);
        return null;
    }
    return shader;
}