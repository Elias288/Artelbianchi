export function home() {

    const listaCards = document.createElement('div');

    fetch("IndexPhoto.json")
        .then(response => response.json())
        .then(data => {
            data.reverse();

            //----------------------------TODAS LAS PUBLICACIONES----------------------------
            for (const todo of data) {
                let { nombre, descripcion, fechas, fotos } = todo;


                //console.log(fotosLength);
                let fotosLength = Object.keys(todo.fotos).length; //OBTIENE LA CANTIDAD DE FOTOS

                const card = document.createElement('div');
                card.classList.add("card");
                card.innerHTML = `
                    <div class="content">
                        <h2>${nombre}</h2>
                        <a href="#/view/${nombre.replace(/ /g, "-")}">
                            <img src="${fotos[fotosLength - 1]}">
                        </a>
                        <h5>${fechas}</5>
                        <p>${descripcion.split('/')[0]}...</p>
                    </div>
                `;
                listaCards.appendChild(card);
            }
        });

    return listaCards;
}