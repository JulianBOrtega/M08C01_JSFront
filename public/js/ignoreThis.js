console.log('test');

/* window.location.href = 'http://www.google.com'; */
    
const main = document.querySelector('main');
const msg = document.querySelector('.loadingMsg')
/* const main = document.querySelector('.container'); */
/* const main = document.querySelector('#mainContainer'); */

/* alert('Annoying message'); */
/* const answer = prompt('Es diego gay?'); */

setTimeout(() => 
{ 
  msg.style.display = "none"; 
  main.style.display = "block" 
}, 2000)

console.log(main);

/* if(answer && ['yes', 'si', 'y'].includes(answer?.toLowerCase())) {
  msg.textContent = "Tienes razón lol";
  msg.style.display = "block";
} */

/* const boolAnswer = confirm('Es diego gay?');

if(boolAnswer)
{
  document.body.style.backgroundColor = '#FFC0CB';
} */

document.querySelectorAll('p').forEach((p, i) => 
  ((i + 1) % 2 === 0) ? p.classList.add('destacadoPar') : p.classList.add('destacadoImpar'))