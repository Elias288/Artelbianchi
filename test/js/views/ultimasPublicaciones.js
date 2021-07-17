export function lastPost() {
    const uP = document.getElementById('ultimasPublicaciones');
    fetch("IndexPhoto.json")
        .then(response => response.json())
        .then(data => {
            data.reverse();

            //----------------------------ULTIMAS PUBLICACIONES----------------------------
            for (let index = 0; index < 2; index++) {

                const div = document.createElement('div');
                let Cantfotos = Object.keys(data[index].fotos).length;
                div.innerHTML = `
                    <a href="#/view/${data[index].nombre.replace(/ /g, "-").toLowerCase()}">
                        <img src="${data[index].fotos[Cantfotos - 1]}">
                    </a>
                    <h4>${data[index].nombre}</h4>
                `;
                uP.appendChild(div);
            }
        });
}