'use strict';

// Declaración de utilidades y referencias
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const buildcard = ({tittle, text, tags}) => {
    const article = document.createElement('article');
    article.className = 'card';
    article.dataset.tags = tags; 
    article.innerHTML = `
        <h3 class="card-title"></h3>
        <p class="card-text"></p>
        <div class="card-actions">
              <button class="btn small" type="button" data-action="like">👍 Like</button>
              <button class="btn small ghost" type="button" data-action="remove">Eliminar</button>
              <span class="badge" aria-label="likes">0</span>
         </div>
    `; 
    article.querySelector('.card-title').textContent = tittle;
    article.querySelector('.card-text').textContent = text;
    return article; 
};


const estadoUI = $('#estadoUI');
const setEstado = (msg) => { estadoUI.textContent = msg; };
setEstado('Listo');

//Referencias a elementos del DOM
const btnCambiarMensaje = $('#btnCambiarMensaje');
const titulo = $('#tituloPrincipal');
const subtitulo = $('#subtitulo');

//Manejador de eventos
btnCambiarMensaje.addEventListener('click', () => {
    const alt = titulo.dataset.alt === '1';

    titulo.textContent = alt
        ? 'Bienvenido a la Aplicacion'
        : 'Hola Mundo';

    subtitulo.textContent = alt
        ? 'Explora las funcionalidades disponibles'
        : 'Hoy veremos como manipular el DOM';

    titulo.daset.alt = alt ? '0' : '1';
    setEstado('Textos actualizados');

});

const listaArticulos = $('#listaArticulos');
listaArticulos.addEventListener('mouseover', (event) => {
    const card = event.target.closest('.card');
    if (!card) return;
    card.classList.add('is-highLight');
});
listaArticulos.addEventListener('mouseout', (event) => {
    const card = event.target.closest('.card');
    if (!card) return;
    card.classList.remove('is-highLight');
});

///"Agregar elementos al DOM
const btnAgregarCard = $('#btnAgregarCard');
const listaArticulos2 = $('#listaArticulos');

btnAgregarCard.addEventListener('click', () => {
    const article = buildcard({
        tittle: 'Nuevo Articulo',
        text: 'Este es un nuevo articulo agregado al DOM',
        tags: 'nuevo,articulo'
    });

    listaArticulos2.append(article);
    setEstado('Nueva card agregada');
});

//Eliminar elementos agregados al DOM
const btnEliminarCard = $('#btnLimpiar');
btnEliminarCard.addEventListener('click', () => {
    const cards = $$('#listaArticulos .card'); 
    let removed = 0;
    cards.forEach(card => {
       if ( card.dataset.seed == 'true' ) return;
       card.remove();
       removed++;
    });
    setEstado('Articulos eliminados: ' + removed);
});