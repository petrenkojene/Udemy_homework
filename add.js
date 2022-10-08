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

const str = [2, 35, 43, 1, 24, 6];

console.log(str.sort(sortMumber));
function sortMumber(a, b) {
  return b - a;
}
