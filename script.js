"use strict";
const numberOfFilms = +prompt("Watt you see films?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt("end film?", ""),
      b = prompt("Grade?", ""),
      c = prompt("end film?", ""), 
      d = prompt("Grade?", "");
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);