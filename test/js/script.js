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

                let fotosLength = Object.keys(todo.fotos).length; //OBTIENE LA CANTIDAD DE FOTOS
                //console.log(fotosLength);
                let fotoPrincipal = fotos[fotosLength - 1]; //OBTIENE LA ULTIMA FOTO
                //console.log(fotoPrincipal);
                /*for (let img in fotos) { //LISTA TODOS LOS ELEMENTOS DE FOTO
                    console.log(fotos[img]);
                }*/

                let card = document.createElement('div');
                let imagen = document.createElement('img');
                let content = document.createElement('div');
                let titulo = document.createElement('h2');
                let fech = document.createElement('h5');
                let desc = document.createElement('p');

                card.classList.add("card");
                card.addEventListener('click', function() {
                    abrirImagen(todo);
                });

                imagen.src = fotoPrincipal;

                content.className = "content";
                titulo.innerText = `${nombre}`
                desc.innerText = `${descripcion}`
                fech.innerText = `${fechas}`

                content.append(titulo);
                content.append(imagen);
                content.append(fech);
                content.append(desc);
                card.append(content);
                lista.append(card);
            }
        });
}

//------------------------------------------------ABRIR IMAGEN------------------------------------------------
function abrirImagen(obj) {
    //console.log(obj);

    const cards = document.querySelectorAll(".leftcolumn .card");
    //console.log(cards);

    //LIMPIO LA PANTALLA PRINCIPAL
    //console.log(cards.length);
    for (let index = 0; index < cards.length; index++) {
        //console.log(cards[index]);
        cards[index].style.display = 'none';
    }

    const lista = document.querySelector(".leftcolumn");
    const card = document.createElement('div')
    let Cantfotos = Object.keys(obj.fotos).length; //OBTIENE LA CANTIDAD DE FOTOS
    //console.log(Cantfotos);

    card.classList.toggle('card');

    for (let index = 0; index < Cantfotos - 1; index++) {
        let img = document.createElement('img');

        img.src = obj.fotos[index];

        card.append(img);
    }
    lista.append(card);
};

//------------------------------------------------MENU------------------------------------------------
document.getElementById('menutoggle').addEventListener('click', function(evt) {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
});


listarPublicaciones();