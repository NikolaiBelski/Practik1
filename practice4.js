'use strict';

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





const  persFilmbase = {
    count: numberFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

             start: function() {
        persFilmbase.count = +prompt('Сколько фильмов вы посмотрели?', '');
        while (persFilmbase.count == '' || persFilmbase.count == null || isNaN(persFilmbase.count)) {
            persFilmbase.count = +prompt('Сколько фильмов вы посмотрели?', '');
        }
    },

            rememberFilm: function() {
                for (let i = 0; i < 2; i++) {
                    const a = prompt('Последний фильм?', ''),
                        b = prompt('Какая оценка?', '');
            
                    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            
                        persFilmbase.movies[a] = b;
                        console.log('Все прекрасно');
            
                    } else {
                        console.log('Ошибка');
                        i--;
                    }
            
                }
            },

           dPP: function() {
                if (persFilmbase.count < 10) {
                    console.log('Просмотрено мало фильмов');
                } else if (persFilmbase.count >= 10 && persFilmbase.count <= 30) {
                    console.log('Неплохо, малыш');
                } else if (persFilmbase.count > 30) {
                    console.log('Ты монстр');
                } else {
                    console.log('Сколько раз пытался, все никак');
                }
            },

            
            showMyDB: function (hidden) {
    if(!hidden) {
    console.log(persFilmbase);
    }
    },

    toggleVisibleMyDB:function() {

        if(persFilmbase.privat) {
            persFilmbase.privat = false
        } else{persFilmbase.privat = true};

    },
   
    
    loveGenres: function() {
    for(let i = 0; i<=2; i++) {
        
      let genre = prompt(`Ваш любимый жанр под номером ${i}`);
      if (genre === ''|| genre==null) {
          console.log('вы ввели ерунду');
          i--;
      } else {
          persFilmbase.movies[i-0] = genre;
      }
    }
}
};







