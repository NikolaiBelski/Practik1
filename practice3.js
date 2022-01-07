'use strict';

let numberFilm;

function start() {
    numberFilm = +prompt('Сколько фильмов вы посмотрели?', '');
    while (numberFilm == '' || numberFilm == null || isNaN(numberFilm)) {
        numberFilm = +prompt('Сколько фильмов вы посмотрели?', '');
    }
}
start();
let persFilmbase = {
    count: numberFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberFilm() {
    for (let i = 1; i < 3; i++) {
        let a = prompt('Последний фильм?', ''),
            b = prompt('Какая оценка?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {

            persFilmbase.movies[a] = b;
            console.log('Все прекрасно');

        } else {
            console.log('Ошибка');
            i--;
        }

    }
}
rememberFilm();

function dPP() {
    if (persFilmbase.count < 10) {
        console.log('Просмотрено мало фильмов');
    } else if (persFilmbase.count >= 10 && persFilmbase.count <= 30) {
        console.log('Неплохо, малыш');
    } else if (persFilmbase.count > 30) {
        console.log('Ты монстр');
    } else {
        console.log('Сколько раз пытался, все никак');
    }
}
dPP();

function showMyDB(hidden) {
if(!hidden) {
console.log(persFilmbase);
}

}
showMyDB(persFilmbase.privat);

function loveGenres() {
for(let i = 1; i<=3; i++) {
    persFilmbase.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
}

}
loveGenres();


