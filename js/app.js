const btnEmpleados = document.getElementById('btnEmpleados')
const btnClientes = document.getElementById('btnClientes')

btnEmpleados.addEventListener('click', mostrarEmpleados)
btnClientes.addEventListener('click', mostrarClientes)


var carga = `
    <div class="lds-dual-ring"></div>
`;

function mostrarEmpleados() {
    fetch('./data/empleados.json')
        .then(function(respuesta){
            return respuesta.json();
        })
        .then(function(data){
           document.querySelector('.divCarga').innerHTML = carga

            setTimeout(function(){
                let html = ''; 
                data.forEach(function(empleado){
                    html += `
                    <div class="tarjeta">
                        <div>
                            <h3>Empleados:</h3>
                            <br>
                            <p><span>Nombre:</span> ${empleado.nombre}</p>
                            <p><span>Apellido:</span> ${empleado.apellido} </p>
                            <p><span>Puesto:</span> ${empleado.puesto} </p>
                        </div>
                    </div>
                    `;
                })
                document.querySelector('.resultados').innerHTML = html
                document.querySelector('.divCarga').innerHTML = ''

            },1000)
        })
        .catch(function(error){
            console.log(error)
        });
}

function mostrarClientes() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(function(respuesta){
            return respuesta.json();
        })
        .then(function(data){
           document.querySelector('.divCarga').innerHTML = carga

            setTimeout(function(){
                let html = ''; 
                data.forEach(function(users){
                    html += `
                        <div class="tarjetaCli">
                            <div>
                                <h3>Clientes:</h3>
                                <br>
                                <p><span>Nombre:</span> ${users.name}</p>
                                <p><span>Apellido:</span> ${users.email} </p>
                                <p><span>Ciudad:</span> ${users.address.city} </p>
                            </div>
                        </div>
                    `;
                })
                document.querySelector('.resultados').innerHTML = html
                document.querySelector('.divCarga').innerHTML = ''

            },1000)
        })
        .catch(function(){
            alert('Error, verifica tu conexion')
        });
}

document.getElementById('limpiarTodo').addEventListener('click', borrarTodo)

function borrarTodo() {
    document.querySelector('.resultados').innerHTML = ''

}
