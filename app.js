

function cambiarTextoASalida(){
    let valorEntrada = document.getElementById('1');
    let valorSalida = document.getElementById('2');
    valorSalida.value = valorEntrada.value;
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

