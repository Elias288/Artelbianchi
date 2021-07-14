/*------------------------------------------------TRAER LISTA DE IMAGENES------------------------------------------------*/

let lista = document.querySelector(".leftcolumn");
fetch("IndexPhoto.json")
    .then(response => response.json())
    .then(data => {
        data.reverse();


        /*----------------------------ULTIMA PUBLICACION----------------------------*/
        for (let index = 0; index < 2; index++) {
            //console.log(data[index]);
            let uP = document.getElementById('ultimasPublicaciones');
            let div = document.createElement('div');
            let uImg = document.createElement('img');
            let uTi = document.createElement('h4');

            let ultima = data[index];
            let fotosLength = Object.keys(ultima.fotos).length; //OBTIENE LA CANTIDAD DE FOTOS
            //console.log(fotosLength);
            let fotoPrincipal = ultima.fotos[fotosLength - 1]; //OBTIENE LA ULTIMA FOTO
            //console.log(fotosLength + ": " + fotoPrincipal);

            uTi.innerText = ultima.nombre;
            uImg.src = fotoPrincipal;

            div.appendChild(uImg);
            div.append(uTi)
            uP.appendChild(div);
        }


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
            let info = document.createElement('div');
            let titulo = document.createElement('h2');
            let fech = document.createElement('h5');
            let desc = document.createElement('p');

            card.className = "card";
            imagen.src = fotoPrincipal;

            info.className = "info";
            titulo.innerText = `${nombre}`
            desc.innerText = `${descripcion}`
            fech.innerText = `${fechas}`

            card.append(imagen);
            info.append(titulo);
            info.append(fech);
            info.append(desc);
            card.append(info);
            lista.append(card);
        }
    });