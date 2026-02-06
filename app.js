'use strict';

// Declaración de utilidades y referencias
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

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
    const new_article = document.createElement('article');
    new_article.className = 'card';
    new_article.dataset.tags = 'agentes';
    new_article.innerHTML = `
        <h3 class="card-title">IA responsable</h3>
        <p class="card-text">
            Los agentes de IA pueden interactuar con su entorno 
            para lograr objetivos especificos
        </p>
        <div class="card-actions">
              <button class="btn small" type="button" data-action="like">👍 Like</button>
              <button class="btn small ghost" type="button" data-action="remove">Eliminar</button>
              <span class="badge" aria-label="likes">0</span>
         </div>
    `;
    listaArticulos2.append(new_article);
    setEstado('Nueva card agregada');
});