let ImgIndex = 1;
export function verGaleria(nom) {
    ImgIndex = 1;
    topFunction();
    let nom2 = nom.replace(/-/g, " ").replace(/%C3%B1/g, "ñ");
    console.log(nom2);

    const carruseles = document.createElement('div');
    carruseles.classList.toggle('card');
    carruseles.classList.toggle('carruseles');
    carruseles.innerHTML = `<div class="contenido"><a class=\"anterior\">&#10094;</a></div>`;


    fetch('IndexPhoto.json')
        .then(response => response.json())
        .then(data => {
            data.reverse();

            const anterior = document.querySelector('.carruseles .contenido .anterior');
            anterior.addEventListener('click', function() { SiguienteCarrusel(-1) });

            //----------------------------TODAS LAS PUBLICACIONES----------------------------
            for (const todo of data) {
                let { nombre, descripcion, fechas, fotos } = todo;

                if (todo.nombre === nom2) {

                    carruseles.insertAdjacentHTML('afterbegin', `<h1>${nombre}</h1>`);
                    const contenido = document.querySelector('.carruseles .contenido');
                    var Cantfotos = Object.keys(todo.fotos).length;
                    for (let i = 0; i <= Cantfotos - 1; i++) {
                        contenido.insertAdjacentHTML('beforeend', `
                            <div class="carrusel">
                                <img src="${fotos[i]}">
                                <p id="index"> ${i + 1} / ${Cantfotos} </p>
                            </div>
                        `);
                    }
                    contenido.insertAdjacentHTML('beforeend', '<a class="siguiente">&#10095;</a>');
                    carruseles.append(contenido);

                    carruseles.insertAdjacentHTML('beforeend', `
                        <h3>Descripcion:</h3>
                        <p>${descripcion}</p>
                    `);
                }

            }
            const siguiente = document.querySelector('.carruseles .contenido .siguiente');
            siguiente.addEventListener('click', function() { SiguienteCarrusel(1) });

            verCarrusel(ImgIndex);
        });

    //console.log(document.querySelector('.siguiente'));
    return carruseles;
}


export function verCarrusel(n) {
    const carruseles = document.getElementsByClassName('carrusel');

    if (n > carruseles.length) { ImgIndex = 1 }
    if (n < 1) { ImgIndex = carruseles.length }
    for (let index = 0; index < carruseles.length; index++) {
        carruseles[index].classList.remove('activo');
    }

    carruseles[ImgIndex - 1].classList.toggle('activo');
}

export function SiguienteCarrusel(n) {
    verCarrusel(ImgIndex += n);
}


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}