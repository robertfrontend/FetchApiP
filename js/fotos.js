
const linkFotos = 'https://picsum.photos/v2/list?page=1&limit=20'

var carga = `
    <div class="lds-dual-ring"></div>
`;

window.onload = () => {
        document.querySelector('.divCarga').innerHTML = carga
        fetch(linkFotos)
        .then(respuesta => {
            return respuesta.json();
        })
        .then(datos => {
            let miHtml = '' ;
            datos.forEach(photos => {
                
                miHtml += `
                    <div class="card tarjetaF border-primary ">
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
            document.querySelector('.divCarga').innerHTML = ''
    })
}

const linkOtras = 'https://picsum.photos/v2/list?page=2&limit=20'

const botonVerMas = document.getElementById('verOtras')
botonVerMas.addEventListener('click', paginaSigui )


function paginaSigui() {
    document.querySelector('.divCarga').innerHTML = carga
    fetch(linkOtras)
    .then(resul => {
        return resul.json()
    })
    .then(data => {
        let html2 = ''

        data.forEach(photos => {
            html2 += `
            <div class="card tarjetaF border-primary ">
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
        document.querySelector('.result').innerHTML = html2
        document.querySelector('.divCarga').innerHTML = ''
    })
}

