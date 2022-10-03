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
function calculateVolumeAndArea(item) {
  if (
    typeof item !== "number" ||
    item <= 0 ||
    Number.isInteger(item) == false
  ) {
    console.log("При вычислении произошла ошибка");
  } else {
    let sqr = 6 * item * item;
    let volume = item * item * item;
    console.log(`Объем куба: ${sqr}, площадь всей поверхности: ${volume}`);
  }
}
calculateVolumeAndArea(0.2);
