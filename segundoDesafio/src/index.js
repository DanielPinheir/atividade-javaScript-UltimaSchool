const leiaEntrada = require("readline");

const lendo = leiaEntrada.createInterface({
  input: process.stdin,
  output: process.stdout,
});

lendo.question("Quer qual tabuada?", (answer) => {
  for (let index = 1; index <= 10; index++) {
    console.log(`${Number(answer)} x ${index} = ${Number(answer) * index}`);
  }
});
