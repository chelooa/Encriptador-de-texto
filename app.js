function cambiarTextoASalida(texto){
    let valorSalida = document.getElementById('2');
    valorSalida.value = texto;
}
function cambiarTextoAEntrada(texto){
  let valorEntrada = document.getElementById('1');
  valorEntrada.value = texto;
}


const copiarTexto = async () => {
  let texto = document.getElementById('2').value;
  try {
    await navigator.clipboard.writeText(texto);
    console.log('Contenido copiado al portapapeles');
  } catch (err) {
    console.error('Error al copiar: ', err);
  }
}

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
Debe funcionar solo con letras minúsculas
No deben ser utilizados letras con acentos ni caracteres especiales
Debe ser posible convertir una palabra para la versión encriptada 
también devolver una palabra encriptada para su versión original.*/

function encriptar() {
  let texto = document.getElementById('1').value;

  // Expresión regular con alternativas para 'a' y 'u'
  const expresionRegular = /(a|u|i|o|e)/g;
  
  // Función de reemplazo
  let nuevoTexto = texto.replace(expresionRegular, match => {
    if (match === 'a') return 'ai';
    if (match === 'u') return 'ufat';
    if (match === 'i') return 'imes';
    if (match === 'o') return 'ober';
    if (match === 'e') return 'enter';
    return match; // Por si acaso no coincide con 'a' ni con 'u'
  });

  cambiarTextoASalida(nuevoTexto);
}

function desencriptar() {
  let texto = document.getElementById('1').value;

  // Expresión regular con alternativas para 'a' y 'u'
  const expresionRegular = /(ai|ufat|imes|ober|enter)/g;
  
  // Función de reemplazo
  let nuevoTexto = texto.replace(expresionRegular, match => {
    if (match === 'ai') return 'a';
    if (match === 'ufat') return 'u';
    if (match === 'imes') return 'i';
    if (match === 'ober') return 'o';
    if (match === 'enter') return 'e';
    return match; // Por si acaso no coincide con 'a' ni con 'u'
  });

  cambiarTextoASalida(nuevoTexto);
}

function cambioLimpiar(){
  if (document.getElementById('1').value == "") {
      document.getElementById('x').style.display = 'none';
  } else {
    document.getElementById('x').style.display = 'block';
  }
}

document.getElementById('1').addEventListener('input', cambioLimpiar);

function limpiarCampo(){
  let texto = document.getElementById('1');
  texto.value = "";
  cambioLimpiar();
}

function intercambiar(){
  let intercambiadoAEntrada = document.getElementById('2').value;
  let intercambiadoASalida = document.getElementById('1').value;
  cambiarTextoASalida(intercambiadoASalida);
  cambiarTextoAEntrada(intercambiadoAEntrada);

}