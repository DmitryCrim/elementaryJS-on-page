/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const removePromo = document.querySelectorAll('.promo__adv img');
removePromo.forEach((item)=> {
    item.remove()
});

const poster = document.querySelector('.promo__bg'),
      newGenre = poster.querySelector('.promo__genre'),
      removeFilms = document.querySelector('.promo__interactive-list')
newGenre.textContent = 'драма';
poster.style.backgroundImage = 'url("img/bg.jpg")';
removeFilms.innerHTML = '';

movieDB.movies.sort();
movieDB.movies.forEach((film, i)=> {
    removeFilms.innerHTML += `
    <li class="promo__interactive-item">${i+1} ${film}
    <div class="delete"></div>
</li>
    `;
})



const menuDB = {
    pink: [
        "меню из JS №1",
        "меню из JS №2",
        "меню из JS №3",
        "меню из JS №4",
        "меню из JS №5"
    ]
};
const menuL = document.querySelector('.promo__menu-list')
menuL.innerHTML = '';
menuDB.pink.forEach((i)=> {
    menuL.innerHTML += `
    <ul class="promo__menu-list1">
      <li><a class="promo__menu-item" href="#">${i}</a></li>
</ul>
    
    
    `;
})

