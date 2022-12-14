/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

"use strict";

// Код возьмите из предыдущего домашнего задания
let numberOfFilms;
function howMuchSee() {
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms))
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
}
howMuchSee();
let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов?", ""),
        b = prompt("На сколько оцените его?", "");
      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
      } else {
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (
      personalMovieDB.count < 10 &&
      personalMovieDB.count != "" &&
      personalMovieDB.count != null
    ) {
      alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
      alert("Вы киноман");
    } else {
      alert("Произошла ошибка");
    }
  },
  showMyDB: function () {
    if (personalMovieDB.privat === false) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let a = prompt(`Ваш любимый жанр под номером ${i}`);
      if (a === "" || a === null) {
        i--;
        // let a = prompt(`Ваш любимый жанр под номером ${i}`);
        console.log("error");
      } else {
        let result = "";
        personalMovieDB.genres[i - 1] = a;
        personalMovieDB.genres.forEach(function (e, t) {
          result += `Любимый жанр ${t + 1} - это ${e}\n`;
        });
        console.log(result);
      }
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat === false) {
      personalMovieDB.privat = !personalMovieDB.privat;
    } else {
      personalMovieDB.privat = !personalMovieDB.privat;
    }
  },
};

personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();

console.log(personalMovieDB);
console.log(personalMovieDB.privat);
