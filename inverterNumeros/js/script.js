function invertNumber() {
  const inputNumber = document.getElementById("inputNumber").value;
  const numberString = inputNumber.toString();
  let invertedNumberString = "";

  for (let i = numberString.length - 1; i >= 0; i--) {
    invertedNumberString += numberString[i];
  }

  const invertedNumber = parseInt(invertedNumberString);
  const resultElement = document.getElementById("result");
  resultElement.textContent = "Número invertido: " + invertedNumber;
}
