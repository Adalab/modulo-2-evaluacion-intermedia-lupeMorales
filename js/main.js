"use strict";
const inputNumber = document.querySelector(".js-inputNum");
const button = document.querySelector(".js-btn");
const clue = document.querySelector(".js-clue");
const count = document.querySelector(".js-count");
const reset = document.querySelector(".js-reset");

// creo un contador de intentos con la variable acc
//la funcion showCount pinta ese contador en pantalla
let acc = 0;
function showCount() {
  acc = acc + 1;
  count.innerHTML = `Números de intentos: ${acc}`;
}
//la funcion genera un random al cargar pagina y la guarda en la variable random
function getRandom() {
  return Math.ceil(Math.random() * 100);
}
const random = getRandom();
console.log(`random: ${random}`);

//pinto en html
function writeClue(message) {
  clue.innerHTML = message;
}
//valida el numero introducido por usuaria
function validateNum(num) {
  const maxNum = 101;

  num = parseInt(inputNumber.value);

  if (num >= maxNum || isNaN(num)) {
    writeClue("Debes intruducir un número entre 1 y 100");
  } else if (num > random) {
    writeClue("Demasiado alto");
  } else if (num < random) {
    writeClue("Demasiado bajo");
  } else {
    writeClue("Has ganado, campeona!!!");
  }
}
function resetCount() {
  acc = 0;
  count.innerHTML = `Números de intentos: ${acc}`;
}
function resetClue() {
  clue.innerHTML = "Pista: Escribe el número y dale a Prueba";
}
function handleClick(ev) {
  ev.preventDefault();
  showCount();
  validateNum();
}
function handleClickReset(ev) {
  /*  ev.preventDefault(); */
  resetCount();
  resetClue();
}
//boton a la escucha
button.addEventListener("click", handleClick);
reset.addEventListener("click", handleClickReset);
