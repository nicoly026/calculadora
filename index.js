const input1 = document.querySelector("input#input1");
const input2 = document.querySelector("input#input2");
const divResultado = document.querySelector(".result");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");
button1.onclick = function() {
  console.log(+input1.value + +input2.value);
  divResultado.textContent = +input1.value + +input2.value;
};
button2.onclick = function() {
  console.log(+input1.value - +input2.value);
  divResultado.textContent = +input1.value - +input2.value;
};
button3.onclick = function() {
  console.log(+input1.value / +input2.value);
  divResultado.textContent = +input1.value / +input2.value;
};
button4.onclick = function() {
  console.log(+input1.value * +input2.value);
  divResultado.textContent = +input1.value * +input2.value;
};
button5.onclick = function() {
  console.log(Math.sqrt(input1.value));
  divResultado.textContent = Math.sqrt(input1.value);
};
