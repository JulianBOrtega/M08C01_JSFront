const $ = (element) => document.querySelector(element);
const $$ = (elements) => document.querySelectorAll(elements);

const main = $('main');
const h2 = $('h2');
const a = $$('a');
const everyP = $$('p');

const userName = prompt('Ingrese su nombre.');
h2.textContent += userName ? userName : 'invitado';
h2.textContent = h2.textContent.toUpperCase();

// Podría simplemente haber hecho a.style.color, pero agregué otro 'a' arriba
a.forEach(a => a.style.color = '#E51B3E'); 

const setBg = confirm('¿Desea colocar un fondo de pantalla?');
if(setBg) document.body.classList.add('fondo');
else $('.contenido').style.paddingTop = '10px'; //* Quitando espacio innecesario

everyP.forEach((p, i) =>
    p.classList.add(((i+1) % 2 === 0) ? 'destacadoPar' : 'destacadoImpar'));

main.style.display = 'block';