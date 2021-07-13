  /* === Ejercicio 3 === */

  var nombre3 = ["f", "e", "d", "e", "r", "i", "c", "o"], count = { }

  nombre3.map(function(contador){
  count[contador] = count[contador] + 1 || 1
  });

      // console.log(count)

      
      document.getElementById("boton3").onclick = function() {
          contador();
      }

      function contador() {
        console.log(count);
      }
