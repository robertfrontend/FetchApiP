const btnEmpleados = document.getElementById('btnEmpleados');
const btnClientes = document.getElementById('btnClientes');

btnEmpleados.addEventListener('click', mostrarEmpleados);
btnClientes.addEventListener('click', mostrarClientes);


var carga = `
    <div class="lds-dual-ring"></div>
`;

function mostrarEmpleados() {
    fetch('./data/empleados.json')
        .then(function(respuesta){
            return respuesta.json();
        })
        .then(function(data){

            let html = ''; 
            data.forEach(function(empleado){
                html += `
                    <div class="card tarjeta  border-info mb-3" style="max-width: 40rem;">
                        <div class="card-header">
                            <h3>Empleados</h3>
                        </div>
                        <div class="card-body">
                            <p><span>Nombre:</span> ${empleado.nombre}</p>
                            <p><span>Apellido:</span> ${empleado.apellido} </p>
                            <p><span>Correo:</span> ${empleado.correo} </p>
                            <p><span>Puesto:</span> ${empleado.puesto} </p>
                        </div>
                    </div>
                `;
            })
            document.querySelector('.resultados').innerHTML = html
            
        })
        .catch(function(error){
            console.log(error)
        });
        
}


function mostrarClientes() {
    document.querySelector('.divCarga').innerHTML = carga;
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(function(respuesta){
            return respuesta.json();
        })
        .then(function(data){
           document.querySelector('.divCarga').innerHTML = carga

            let html = ''; 
            data.forEach(function(users){
                html += `
                    <div class="card tarjeta  border-success mb-3" style="max-width: 40rem;">
                        <div class="card-header">
                            <h3>Clientes</h3>
                        </div>
                        <div class="card-body">
                            <p><span>Nombre:</span> ${users.name}</p>
                            <p><span>Correo:</span> ${users.email} </p>
                            <p><span>Ciudad:</span> ${users.address.city} </p>
                            <p><span>Compañia:</span> ${users.company.name}  </p>
                        </div>
                    </div>
                `;
            })
            document.querySelector('.resultados').innerHTML = html
            document.querySelector('.divCarga').innerHTML = ''

        })
        .catch(function(){
            console.log('errorrrr')
        });
}


document.getElementById('limpiarTodo').addEventListener('click', borrarTodo)

function borrarTodo() {
    document.querySelector('.resultados').innerHTML = '';

}
