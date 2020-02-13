import { fragmentShader } from "./shaders/basicShader/fragmentShader.mjs";
import { vertexShader } from "./shaders/basicShader/vertexShader.mjs";
import { initShaderProgram } from "./shaders/methods.mjs";
import { initBuffers } from "./shaders/basicShader/init.mjs";
import { drawScene } from "./scenes/scene01.mjs";
import { loadTexture } from "./shaders/methods.mjs";
function main() {
  const canvas = document.querySelector("#gl");
  const gl = canvas.getContext("webgl");
  try {
    if (!gl) {
      throw "No se pudo inicializar WebGL";
    }

    const shaderProgram = initShaderProgram(gl, vertexShader, fragmentShader);

    const programInfo = {
      program: shaderProgram,
      attribLocations: {
        //vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition")
        vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
        textureCoord: gl.getAttribLocation(shaderProgram, 'aTextureCoord'),
      },
      uniformLocations: {
        /*projectionMatrix: gl.getUniformLocation(
          shaderProgram,
          "uProjectionMatrix"
        ),
        modelViewMatrix: gl.getUniformLocation(
          shaderProgram,
          "uModelViewMatrix"
        )*/
        projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
        modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
        uSampler: gl.getUniformLocation(shaderProgram, 'uSampler'),
      }
    };

    const buffers = initBuffers(gl);

    const texture = loadTexture(gl, 'SolraSystem_Imageset2.png');

    drawScene(gl, programInfo, buffers, texture);
  } catch (error) {
    console.error(error);
  }
}
window.onload = main;
