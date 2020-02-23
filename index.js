const input1 = document.querySelector("input#input1");
const input2 = document.querySelector("input#input2");
const divResultado = document.querySelector(".result");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");
button1.onclick = function() {
  input1.value = divResultado.textContent;
  input2.value = "+";
  divResultado.textContent = "0";
};
button2.onclick = function() {
  input1.value = divResultado.textContent;
  input2.value = "-";
  divResultado.textContent = "0";
};
button3.onclick = function() {
  input1.value = divResultado.textContent;
  input2.value = "/";
  divResultado.textContent = "0";
};
button4.onclick = function() {
  input1.value = divResultado.textContent;
  input2.value = "*";
  divResultado.textContent = "0";
};
button5.onclick = function() {
  input1.value = divResultado.textContent;
  input2.value = "sqrt";
  divResultado.textContent = "0";
};
const number1 = document.querySelector("#number1");
const number2 = document.querySelector("#number2");
const number3 = document.querySelector("#number3");
const number4 = document.querySelector("#number4");
const number5 = document.querySelector("#number5");
const number6 = document.querySelector("#number6");
const number7 = document.querySelector("#number7");
const number8 = document.querySelector("#number8");
const number9 = document.querySelector("#number9");
const number0 = document.querySelector("#number0");
number0.onclick = function() {
  divResultado.textContent = removerZero(divResultado.textContent + "0");
};
number1.onclick = function() {
  divResultado.textContent = removerZero(divResultado.textContent + "1");
};
number2.onclick = function() {
  divResultado.textContent = removerZero(divResultado.textContent + "2");
};
number3.onclick = function() {
  divResultado.textContent = removerZero(divResultado.textContent + "3");
};
number4.onclick = function() {
  divResultado.textContent = removerZero(divResultado.textContent + "4");
};
number5.onclick = function() {
  divResultado.textContent = removerZero(divResultado.textContent + "5");
};
number6.onclick = function() {
  divResultado.textContent = removerZero(divResultado.textContent + "6");
};
number7.onclick = function() {
  divResultado.textContent = removerZero(divResultado.textContent + "7");
};
number8.onclick = function() {
  divResultado.textContent = removerZero(divResultado.textContent + "8");
};
number9.onclick = function() {
  divResultado.textContent = removerZero(divResultado.textContent + "9");
};
function removerZero(text) {
  if (text[0] === "0") {
    return text.slice(1);
  }
  return text;
}
const buttonIgual = document.querySelector("#igual");
buttonIgual.onclick = function() {
  switch (input2.value) {
    case "+":
      divResultado.textContent = +input1.value + +divResultado.textContent;
      break;
    case "-":
      divResultado.textContent = +input1.value - +divResultado.textContent;
      break;
    case "/":
      divResultado.textContent = +input1.value / +divResultado.textContent;
      break;
    case "*":
      divResultado.textContent = +input1.value * +divResultado.textContent;
      break;
    default:
      break;
  }
};
