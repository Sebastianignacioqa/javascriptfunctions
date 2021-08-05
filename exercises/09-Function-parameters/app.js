// Your code goes here:
function renderPerson (nombre,nacimiento,ojos,edad,genero) {
  let palabra = String(nombre + " is a " + edad + " years old " + genero + " born in " + nacimiento + " with " + ojos + " eyes");
  return palabra
}


  ///*** Do not edit below this line ****/
  console.log(renderPerson('Bob', '05/22/1983', 'green', 23, 'male'));