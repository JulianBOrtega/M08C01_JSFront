const $ = (element) => document.querySelector(element);
const $$ = (elements) => document.querySelectorAll(elements);

const h1 = $('h1');
const section = $('section');
const article = $('article');

h1.textContent += "Agregar películas".toUpperCase();
h1.classList.add('titulo');
section.classList.add('fondoCRUD');
article.classList.add('fondoTransparente');