function formLoad(e){


  var nombre = document.getElementById("nombre").value;
  document.getElementById("nom").innerHTML = nombre;
  var apellido = document.getElementById("apellido").value;
  document.getElementById("ape").innerHTML = apellido;
  var dni = document.getElementById("dni").value;
  document.getElementById("dnii").innerHTML = dni;
  var direccion = document.getElementById("direccion").value;
  document.getElementById("dire").innerHTML = direccion;

  document.getElementById("formu").onsubmit = function(e){
    e.preventDefault();
  }
}




// document.getElementById('nombre').innerHTML=nombre;
//
//
// document.getElementById('apellido').innerHTML=apellido;
//
//
// document.getElementById('dni').innerHTML=dni;
//
//
// document.getElementById('direccion').innerHTML= direccion;
