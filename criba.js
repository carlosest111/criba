var sieve = function() {
  var start = new Date().getTime();
  var primes = [];
  var LIMIT = document.getElementById("numb").value;
  if(isNaN(LIMIT)){
    document.getElementById('primos').innerHTML = "Ingresa un número válido por favor."
  	return;
  }
  var arr = Array();
  var upperLimit = Math.sqrt(LIMIT);

  for (var i = 0; i < LIMIT; i++) { // Fills up an array - Llena un arreglo
    arr.push(true);
  }

  for (var i = 2; i <= upperLimit; i++) { // Checks every number up to the upperLimit - Revisa hasta el tope
    if (arr[i]) { // If the n exists... - Si el num existe...
      for (j = i * i; j < LIMIT; j += i) { // ...deletes all its multiples - ... borra todos sus múltiplos
        arr[j] = false; // ... marking them as false - ... marcandolos como falsos.
      }
    }

  }

  for (var i = 2; i < LIMIT; i++) { // At last it loops over the array - Al final recorre el arreglo
    if (arr[i]) { // If a number is in the cribe
      primes.push(i); // ... it is added onto the array for easier printing - ... se agrega a otro arreglo
    }
  }
  document.getElementById('titulo').innerHTML = "Los números primos del 2 al " + LIMIT + " son: ";
  document.getElementById('primos').innerHTML = primes + ".";
  var end = new Date().getTime();
  var time = end - start;
  document.getElementById('tiempo').innerHTML = "El cálculo tardó " + time + " ms.";
}
