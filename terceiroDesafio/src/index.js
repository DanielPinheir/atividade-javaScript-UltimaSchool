const arrayNumbers = [2, 9, 10.75, 14.74, 22.33];

arrayNumbers.forEach((number) => {
  if (arrayNumbers.indexOf(number) === 0) {
    console.log(Math.pow(number, 2));
  }
  if (arrayNumbers.indexOf(number) === 1) {
    console.log(Math.sqrt(number));
  }
  if (arrayNumbers.indexOf(number) === 2) {
    console.log(Math.trunc(number));
  }
  if (arrayNumbers.indexOf(number) === 3) {
    console.log(Math.floor(number));
  }
  if (arrayNumbers.indexOf(number) === 4) {
    console.log(Math.ceil(number));
  }
});
