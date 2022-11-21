const $ = (element) => document.querySelector(element);
const $$ = (elements) => document.querySelectorAll(elements);

const body = $('body');
const h1 = $('h1');

console.log(body);

const darkMode = prompt('¿Desea usar el modo oscuro?');
const positiveAnswers = ['sí', 'si', 's', 'yes', 'y'];

h1.textContent += 'Listado de películas'.toUpperCase();
h1.style = 'color: white; background-color: teal; padding: 20px;';

if(darkMode && positiveAnswers.includes(darkMode.toLowerCase()))
{
    body.classList.add('fondoMoviesList');
    body.style.backgroundColor =  '#7f7f7f';
}