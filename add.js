"use strict";
// let test = {
//   who: "Lena",
// };
// let result = "";
// let container = document.querySelector(".container");
// let answerAll = document.querySelectorAll(".answer");
// let check = document.querySelector(".answerText");

// container.addEventListener("click", (event) => {
//   const target = event.target;
//   if (target && target.classList.contains("answer")) {
//     result = target.lastChild.previousElementSibling.innerHTML;
//   } else if (target && target.classList.contains("answerText")) {
//     result = target.innerHTML;
//   } else if (target && target.classList.contains("checkbox")) {
//     result = target.nextSibling.nextSibling.innerHTML;
//   }
//   if (result === test.who) {
//     console.log("super");
//     target.style.backgroundColor = "red";
//   } else {
//     target.style.backgroundColor = "green";
//   }
// });
// function calculateVolumeAndArea(item) {
//   if (
//     typeof item !== "number" ||
//     item <= 0 ||
//     Number.isInteger(item) == false
//   ) {
//     console.log("При вычислении произошла ошибка");
//   } else {
//     let sqr = 6 * item * item;
//     let volume = item * item * item;
//     console.log(`Объем куба: ${sqr}, площадь всей поверхности: ${volume}`);
//   }
// }
// calculateVolumeAndArea(0.2);
// function getCoupeNumber(item) {
//   if (
//     typeof item !== "number" ||
//     item < 0 ||
//     Number.isInteger(item) === false
//   ) {
//     console.log("Ошибка. Проверьте правильность введенного номера места");
//   }
//   if (item === 0 || item > 36) {
//     console.log("Таких мест в вагоне не существует");
//   }
//   let numberTiket = Math.ceil(item / 4);
//   console.log(numberTiket);
// }
// getCoupeNumber(2);
// function getTimeFromMinutes(time) {
//   let hourse = Math.floor(time / 60);
//   let minutes = Math.floor(time % 60);
//   if (isNaN(time) || time < 0 || Number.isInteger(time) === false) {
//     console.log("Ошибка, проверьте данные");
//   } else {
//     let a = "";
//     if (hourse === 0 || hourse > 5) {
//       a = "часов";
//     }
//     if (hourse === 1) {
//       a = "час";
//     }
//     if (hourse >= 2 && hourse <= 4) {
//       a = "часа";
//       console.log(`Это ${hourse} ${a} ${minutes} минут`);
//     }
//   }
// }
// getTimeFromMinutes(150);
function maxNumber(a, b, c, d) {
  if (
    typeof a !== "number" ||
    typeof b !== "number" ||
    typeof c !== "number" ||
    typeof d !== "number"
  ) {
    return 0;
  } else {
    return Math.max(a, b, c, d);
  }
}
maxNumber(3, 6, 9, 7);
