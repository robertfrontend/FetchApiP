import * as UI from './ui.js';
import { ApiEmpleados, ApiClientes } from './apis.js';

var carga = `
    <div class="lds-dual-ring"></div>
`;

UI.btnEmpleados.addEventListener('click', e => {
    e.preventDefault();
    const api = new ApiEmpleados()
    api.consApiEmpleados()
        .then(datos => {
            const res = datos.respuesta

            res.forEach(empleado => {
                UI.divResultados.innerHTML += `
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
        })
} )

UI.btnClientes.addEventListener('click', e => {
    e.preventDefault();

    const api = new ApiClientes()
    api.consApiClientes()
        .then(datos => {
            const res = datos.respuesta

            res.forEach(clientes => {
                UI.divResultados.innerHTML += `
                  <div class="card tarjeta  border-success mb-3" style="max-width: 40rem;">
                      <div class="card-header">
                          <h3>Clientes</h3>
                      </div>
                      <div class="card-body">
                          <p><span>Nombre:</span> ${clientes.name}</p>
                          <p><span>Correo:</span> ${clientes.email} </p>
                          <p><span>Ciudad:</span> ${clientes.address.city} </p>
                          <p><span>Compañia:</span> ${clientes.company.name}  </p>
                      </div>
                  </div>
                `;
            })
        })
})

document.getElementById('limpiarTodo').addEventListener('click', borrarTodo)

function borrarTodo() {
    document.querySelector('.resultados').innerHTML = '';

}
