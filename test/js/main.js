import { router } from './router/index.routes.js'
import { lastPost } from './views/ultimasPublicaciones.js'

lastPost();

router(window.location.hash);

window.addEventListener('hashchange', () => {
    router(window.location.hash)
});


//------------------------------------------------MENU------------------------------------------------
document.getElementById('menutoggle').addEventListener('click', function(evt) {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
});