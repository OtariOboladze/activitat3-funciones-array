// ################################### 1. Encuentra el máximo

// Define una función `maxOfTwoNumbers` que tome dos números como argumentos y devuelva el mayor.

function maxOfTwoNumbers(a, b) {
      var a, b;
      if (a > b) {
            return a;
      } else {
            return b;
      }
}

// ################################### 2. Encuentra la palabra más larga

// Escribe una función `findLongestWord` que tome un array de palabras y devuelva la más larga. Si hay 2 con la misma longitud, debería devolver la primera.

// RETURNS FIRST AND THE LONGEST
function findLongestWord(array) {
      var x = 0;
      for (i = 0; i < array.length; i++) {
            if (array[i].length > x) {
                  x = array[i].length;
                  console.log(array[i], x);
            }
      }
}

// let words = [
//   'mystery',
//   'brother',
//   'aviator',
//   'crocodile',
//   'pearl',
//   'orchard',
//   'crackpot'
// ];

// ################################### 3. Calcula la suma

// Itera sobre un array sumando cada elemento.

// Semanticamente [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) es el mejor método para hacer esta operación, aunque se puede utilizar cualquier tipo de bucle de los que hemos visto.

// Crea una función `sumArray` que tome un array de números como parámetro y calcule la suma de todos sus miembros:

function sumArray(accumulator, currentValue) {
      return accumulator + currentValue;
}

function sumAr(array) {
      return array.reduce(sumArray);
}

sumAr(numbers);

// let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// ################################### 4. Calcula la media aritmética

// Para ello sigue el siguiente algoritmo:

// 1. Utiliza la suma del ejercicio anterior y divídela por el número de elementos.

// ################################### 4.1: Array de Números

// Escribe una función `averageNumbers` que reciba un array de números y calcule la media de los números:

function averageNumbers(numbers) {
      function sumArray(accumulator, currentValue) {
            return accumulator + currentValue;
      }

      function sumAr(array) {
            return array.reduce(sumArray);
      }

      return sumAr(numbers) / numbers.length;
}

// let numbers = [2, 6, 9, 10, 7, 4, 1, 9];

// ################################### 4.2: Array of Strings

// Escribe una función `averageWordLength` que reciba un array de palabras y calcule la media de la longitud de las palabras:

// CONVERT ARRAY-WORDS TO ARRAY-NUMBERS
function averageWordLength(word) {
      numbers2 = [];
      for (i = 0; i < word.length; i++) {
            numbers2.push(word[i].length);
      }
}

//USE ARRAY-NUMBERS AVERAGE FUNCTINO FROM PREVIOUS
function averageNumbers(numbers2) {
      function sumArray(accumulator, currentValue) {
            return accumulator + currentValue;
      }

      function sumAr(array) {
            return array.reduce(sumArray);
      }

      return sumAr(numbers2) / numbers2.length;
}

// TOTAL FUNCTION COMBINES BOTH NEW AND OLD FUNCTIONS
function total(array) {
      return averageWordLength(array), averageNumbers(numbers2);
}

// let words = [
//       "seat",
//       "correspond",
//       "linen",
//       "motif",
//       "hole",
//       "smell",
//       "smart",
//       "chaos",
//       "fuel",
//       "palace"
// ];

// ################################### 5. Unique Arrays

// Coge el siguiente array, elimina los duplicados y devuelve un nuevo array. Si lo necesitas consulta la función [`indexOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf).

// Realiza este ejercicio como una fución `uniquifyArray` que reciba un array de palabras como parámetro.

function uniquifyArray(array) {
      const uniqueValues = [...new Set(words)];
      return uniqueValues;
}

let words = [
      "crab",
      "poison",
      "contagious",
      "simple",
      "bring",
      "sharp",
      "playground",
      "poison",
      "communion",
      "simple",
      "bring",
];

// ################################### 6. Busca elementos

// Escribe una función `doesWordExist` que reciba un array de palabras como argumento y una palabra para buscar dentro del array. Devuelve `true` si existe, sino devuelve `false`. **No** utilices `indexOf` en este caso.

function doesWordExist(array, palabra) {
      var x = 0;
      for (var i = 0; i < array.length; i++) {
            if (palabra == array[i]) {
                  x = palabra;
            }
      }
      if (x == palabra) {
            return true;
      } else {
            return false;
      }
}

let words = [
      "machine",
      "subset",
      "trouble",
      "starting",
      "matter",
      "eating",
      "truth",
      "disobedience",
];

// ################################### 7. Cuenta repeticiones

// Escribe una función `howManyTimes` que tome un array de palabras como argumento y una palabra para buscar. La función devolverá el número de veces que una palabra aparece en el array.

function doesWordExist(array, palabra) {
      var x = [];
      for (var i = 0; i < array.length; i++) {
            if (palabra == array[i]) {
                  // let y = palabra;
                  x.push(palabra);
            }
      }
      return x.length;
}

let words = [
      "machine",
      "matter",
      "subset",
      "trouble",
      "starting",
      "matter",
      "eating",
      "matter",
      "truth",
      "disobedience",
      "matter",
];
