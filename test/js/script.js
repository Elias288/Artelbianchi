let ImgIndex = 1;

//------------------------------------------------TRAER LISTA DE PUBLICACIONES------------------------------------------------

function listarPublicaciones() {

    let lista = document.querySelector(".leftcolumn");
    fetch("IndexPhoto.json")
        .then(response => response.json())
        .then(data => {
            data.reverse();


            //----------------------------ULTIMAS PUBLICACIONES----------------------------
            for (let index = 0; index < 2; index++) {
                //console.log(data[index]);
                let uP = document.getElementById('ultimasPublicaciones');
                let div = document.createElement('div');
                let uImg = document.createElement('img');
                let uTi = document.createElement('h4');

                let ultima = data[index];
                let Cantfotos = Object.keys(ultima.fotos).length; //OBTIENE LA CANTIDAD DE FOTOS
                //console.log(Cantfotos);
                let fotoPrincipal = ultima.fotos[Cantfotos - 1]; //OBTIENE LA ULTIMA FOTO
                //console.log(Cantfotos + ": " + fotoPrincipal);

                uTi.innerText = ultima.nombre;
                uImg.src = fotoPrincipal;

                div.addEventListener('click', function() {
                    abrirImagen(ultima);
                });

                div.appendChild(uImg);
                div.append(uTi)
                uP.appendChild(div);
            }

            //----------------------------TODAS LAS PUBLICACIONES----------------------------
            for (const todo of data) {
                let { nombre, descripcion, fechas, fotos } = todo;

                //console.log(fotosLength);
                let fotosLength = Object.keys(todo.fotos).length; //OBTIENE LA CANTIDAD DE FOTOS
                let fotoPrincipal = fotos[fotosLength - 1]; //OBTIENE LA ULTIMA FOTO

                const card = document.createElement('div'),
                    imagen = document.createElement('img'),
                    content = document.createElement('div'),
                    titulo = document.createElement('h2'),
                    fech = document.createElement('h5'),
                    desc = document.createElement('p');

                card.classList.add("card");
                card.addEventListener('click', () => {
                    abrirImagen(todo);
                });

                imagen.src = fotoPrincipal;

                content.className = "content";
                titulo.innerText = `${nombre}`

                var descri = `${descripcion}`.split('/')[0];
                desc.innerHTML = descri + '...';

                fech.innerText = `${fechas}`

                content.append(titulo);
                content.append(imagen);
                content.append(fech);
                content.append(desc);
                card.append(content);
                lista.append(card);
            }

            //let ultima = data[0];
            //abrirImagen(ultima);
        });
}

//------------------------------------------------ABRIR IMAGEN------------------------------------------------
function abrirImagen(obj) {
    //console.log(obj);
    topFunction();
    const cards = document.querySelectorAll(".leftcolumn .card");
    //console.log(cards);

    //--------------------------LIMPIO LA PANTALLA PRINCIPAL/--------------------------
    //console.log(cards.length);
    for (let index = 0; index < cards.length; index++) {
        //console.log(cards[index]);
        cards[index].style.display = 'none';
    }


    //--------------------------CREO LOS ELEMENTOS--------------------------
    const leftcolumn = document.querySelector(".leftcolumn"),
        card = document.createElement('div'),
        TituloImagen = document.createElement('h1'),
        contenido = document.createElement('div'),
        siguiente = document.createElement('a'),
        anterior = document.createElement('a'),
        TituloDescripcion = document.createElement('h3'),
        descripcion = document.createElement('p');

    let Cantfotos = Object.keys(obj.fotos).length; //OBTIENE LA CANTIDAD DE FOTOS
    //console.log(Cantfotos);

    card.classList.toggle('card');
    card.classList.toggle('carruseles');

    TituloImagen.innerText = obj.nombre;

    card.append(TituloImagen);

    contenido.classList.toggle('contenido');

    anterior.innerHTML = "&#10094;"; //anterior
    anterior.classList.toggle('anterior');
    anterior.addEventListener('click', function() {
        //console.log('anterior');
        SiguienteCarrusel(-1)
    });
    siguiente.innerHTML = "&#10095;"; //siguiente
    siguiente.classList.toggle('siguiente');
    siguiente.addEventListener('click', function() {
        //console.log('siguiente');
        SiguienteCarrusel(1);
    });
    contenido.append(anterior);

    for (let index = 0; index <= Cantfotos - 1; index++) {
        const carrusel = document.createElement('div'),
            img = document.createElement('img'),
            ContIndex = document.createElement('p');
        img.src = obj.fotos[index];

        ContIndex.id = "index";
        ContIndex.innerText = index + 1 + "/" + Cantfotos;

        carrusel.classList.toggle('carrusel');
        carrusel.append(img);
        carrusel.append(ContIndex);
        contenido.append(carrusel);
    }

    TituloDescripcion.innerHTML = "Descripcion: ";
    descripcion.innerHTML = obj.descripcion.split('/')[0] + obj.descripcion.split('/')[1];

    contenido.append(siguiente);

    card.append(contenido);
    card.append(TituloDescripcion);
    card.append(descripcion);

    leftcolumn.append(card);
    verCarrusel(ImgIndex);


};

//------------------------------------------------MENU------------------------------------------------
document.getElementById('menutoggle').addEventListener('click', function(evt) {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
});

function verCarrusel(n) {
    const carruseles = document.getElementsByClassName('carrusel');
    //console.log(carruseles.length);
    //console.log(n);

    if (n > carruseles.length) { ImgIndex = 1 }
    if (n < 1) { ImgIndex = carruseles.length }
    for (let index = 0; index < carruseles.length; index++) {
        carruseles[index].classList.remove('activo');
    }

    carruseles[ImgIndex - 1].classList.toggle('activo');
}

function SiguienteCarrusel(n) {
    verCarrusel(ImgIndex += n);
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

listarPublicaciones();