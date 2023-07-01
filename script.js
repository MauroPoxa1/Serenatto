const noit = document.querySelector('#modoNoturno');
const elemento = document.querySelector('body');


noit.addEventListener('click', ()=>{
    const modo = noit.checked ? 'dark' : 'light'
    elemento.setAttribute('data-bs-theme',modo)
});

