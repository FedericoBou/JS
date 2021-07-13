 /* === Ejercicio 2 === */


 var nombre2="federico";
 var vocales="aeiou";
    
 
 document.getElementById("boton2").onclick = function() {
     encontrar();
 }

 function encontrar() {
    for (i = 0; i < nombre2.length ; i++) {
        if (vocales.includes(nombre2[i])) {
        console.log("He encontrado una vocal:" +" " +  nombre2[i]);
            
        }else if (nombre2 != vocales){
        console.log("He encontrado una consonante:" + " " + nombre2[i])
        }
    
  }

   console.log(nombre2[i])
 }
