import { topFunction } from '../main.js';

export function About() {
    topFunction();
    const card = document.createElement('div'),
        leftSobreMi = document.querySelector('.rightcolumn .sobremi');

    leftSobreMi.style.display = 'none';
    card.classList.toggle('card');
    card.classList.toggle('sobremi');
    card.innerHTML = `
    <div class="contenido">
        <img src="img/logoArtelbianchi.png" alt="Logo_Artelbianchi">
        <h2>Artelbianchi</h2>
        <h5>Elias Bianchi - Artist</h5>
        <div class="links">
            <a href="https://www.facebook.com/Artelbianchi"><i class="facebook"></i></a>
            <a href="https://github.com/Elias288/Artelbianchi"><i class="github"></i></a>
            <a href="https://www.instagram.com/artelbianchi/"><i class="instagram"></i></a>
        </div>
        <p>
            Me llamo Elias Bianchi soy uruguayo, pintar es mi hobby favorito, llevándolo a cabo desde hace 11 años, practico diferentes 
            técnicas en óleo y acrílico. Retratar personas es mi género de pintura favorito siendo la mayoría de mis últimos trabajos 
            retratos.<br>
            Me gusta mucho desarrollar mis técnicas de dibujo y pintura, por eso siempre intento salirme de mi zona de confort e innovar en 
            mis trabajos intentando que cada uno sea un reto personal.<br>
            Aquí podrás encontrar todos mis trabajos junto con sus desarrollos que voy registrando mientras trabajo. Sin más que decir, muchas 
            gracias por venir.

        </p>
    </div>`;

    return card;
}