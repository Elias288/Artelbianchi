import { home } from '../views/home.js';
import { verGaleria } from '../views/verGaleria.js';
import { About } from '../views/about.js';

const leftcolumn = document.getElementById('leftcolumn');

const router = (route) => {
    leftcolumn.innerHTML = '';
    var params = route.split('/');

    if (params.length > 2) { //SI TIENE PARAMETROS
        switch (params[1]) {
            case 'view':
                var picture = params[2];
                return leftcolumn.appendChild(verGaleria(picture));
            default:
                break;
        }
    } else {
        switch (route) {
            case "":
            case "#/":
                return leftcolumn.appendChild(home());
            case '#/view':
                var picture = params[2];
                return leftcolumn.appendChild(verGaleria(picture));
            case '#/about':
                return leftcolumn.append(About());
            default:
                return console.log('404')
        }
    }
};

export { router };