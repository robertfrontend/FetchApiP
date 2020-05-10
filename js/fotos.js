
const linkFotos = 'https://picsum.photos/v2/list'

fetch(linkFotos)
.then(respuesta => {
    return respuesta.json();
})
.then(datos => {
    let miHtml = '' ;
    datos.forEach(photos => {

        miHtml += `
            <div class="card tarjeta border-primary ">
                <div>
                    <img class="card-img-top"src="${photos.download_url} " alt="">
                </div>
                <div class="card-body">
                    <h5 class="card-title" >
                        <span class="text-muted" >By:</span> ${photos.author}
                    </h5>
                    <a class="btn btn-danger" target="_blank"  href="${photos.url}" >
                        Descargar
                    </a>
                </div>
            </div>
        `;
    })
    document.querySelector('.result').innerHTML = miHtml
})
