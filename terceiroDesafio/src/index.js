const arrayNumbers = [2, 9, 10.75, 14.74, 22.33];

arrayNumbers.forEach((number) => {
  if (arrayNumbers.indexOf(number) === 0) {
    console.log(`Quadrado de ${number}: ${Math.pow(number, 2)}`);
  }
  if (arrayNumbers.indexOf(number) === 1) {
    console.log(`Raiz quadrada de ${number}: ${Math.sqrt(number)}`);
  }
  if (arrayNumbers.indexOf(number) === 2) {
    console.log(`Parte inteira de ${number}: ${Math.trunc(number)}`);
  }
  if (arrayNumbers.indexOf(number) === 3) {
    console.log(
      `Arredondando para baixo o número ${number}: ${Math.floor(number)}`
    );
  }
  if (arrayNumbers.indexOf(number) === 4) {
    console.log(
      `Arredondando para cima o número ${number}: ${Math.ceil(number)}`
    );
  }
});
