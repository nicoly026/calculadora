const input1 = document.querySelector("input#input1")
const input2 = document.querySelector("input#input2")
const inputResultado = document.querySelector("#inputResultado")

const button = document.querySelector("button");
button.onclick = function() {
  const p = document.querySelector("p");
  console.log(p);
  p.innerHTML = new Date();
};
