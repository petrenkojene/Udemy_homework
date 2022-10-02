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
function sayHello(text) {
  return `Hello, ${text}`;
}
sayHello("Anton");
function returnNeighboringNumbers(number) {
  let arr = [];
  arr[0] = number - 1;
  arr[1] = number;
  arr[2] = number + 1;
  console.log(arr);
}
returnNeighboringNumbers(5);
function getMathResult(a, b) {
  let result = "";
  if (typeof b !== "number" || b <= 0) {
    console.log(a);
  }
  for (let i = 1; i <= b; i++) {
    if (i === b) {
      result += `${a * i}`;
    } else {
      result += `${a * i}---`;
    }
  }

  console.log(result);
}
getMathResult(3, 5);
