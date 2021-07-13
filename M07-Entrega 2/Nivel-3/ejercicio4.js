 /* === Ejercicio 4 === */

 nombre4 = ["f", "e", "d", "e", "r", "i", "c", "o", " "]
 apellido = ["b", "o", "u"]


    
     document.getElementById("boton4").onclick = function() {
        conca();
    }

    function conca() {
        NombreApellido = nombre4.concat(apellido);
        console.log(NombreApellido);
    }

   