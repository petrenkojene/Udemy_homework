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
document.querySelectorAll("button").forEach((e) => {
  e.style.backgroundColor = "red";
});
document.querySelector(".container").style.display = "flex";
document.querySelector(".container").style.justifyContent = "center";
let div = document.createElement("div");
div.classList.add("rembo");
div.innerHTML = "lorem";
document.querySelector(".container").prepend(div);
div.insertAdjacentHTML("beforebegin", "<div><p>bulya</p></div>");
