import { home } from '../views/home.js';

const leftcolumn = document.getElementById('leftcolumn');

const router = (route) => {
    leftcolumn.innerHTML = '';
    switch (route) {
        case '#/':
            return leftcolumn.appendChild(home());
        case '#/view':
            return console.log('view')
        case '#/About':
            return console.log('about')
        default:
            return console.log('404')
    }
};

export { router };