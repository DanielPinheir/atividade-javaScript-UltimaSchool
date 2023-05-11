const fruitList = [
  "uva",
  "pera",
  "abacaxi",
  "banana",
  "laranja",
  "goiaba",
  "limão",
  "acerola",
  "manga",
  "caju",
];

//while
let contador = 0;
console.log("Loop com while");
while (contador < fruitList.length) {
  console.log(fruitList[contador]);
  contador++;
}

//do-while
contador = 0;
console.log("Loop com do-while");
do {
  console.log(fruitList[contador]);
  contador++;
} while (contador < fruitList.length);

//forEach
console.log("Loop com forEach");
fruitList.forEach((fruit) => console.log(fruit));
