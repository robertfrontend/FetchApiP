import * as UI from './ui.js';
import { ApiEmpleados, ApiClientes } from './apis.js';

var carga = `
    <div class="lds-dual-ring"></div>
`;

UI.btnEmpleados.addEventListener('click', e => {
    e.preventDefault();

    const api = new ApiEmpleados()

    // agregar spiner
    UI.divCarga.innerHTML = carga

    api.consApiEmpleados()
        .then(datos => {
            const res = datos.respuesta

            res.forEach(empleado => {

                // destructurar el json
                const { nombre, apellido, correo, puesto } = empleado;

                UI.divResultados.innerHTML += `
                     <div class="card tarjeta  border-info mb-3" style="max-width: 40rem;">
                         <div class="card-header">
                             <h3>Empleados</h3>
                         </div>
                         <div class="card-body">
                             <p><span>Nombre:</span> ${nombre}</p>
                             <p><span>Apellido:</span> ${apellido} </p>
                             <p><span>Correo:</span> ${correo} </p>
                             <p><span>Puesto:</span> ${puesto} </p>
                         </div>
                     </div>
                `;
            })
            //quitar el spiner
            UI.divCarga.innerHTML = ''

        })
} )

UI.btnClientes.addEventListener('click', e => {
    e.preventDefault();

    // agregar spiner
    UI.divCarga.innerHTML = carga;

    const api = new ApiClientes();

    api.consApiClientes()
        .then(datos => {
            const res = datos.respuesta

            res.forEach(clientes => {
                // destructurar el json
                const {  name, email, address, company  } = clientes;
                
                UI.divResultados.innerHTML += `
                  <div class="card tarjeta  border-success mb-3" style="max-width: 40rem;">
                      <div class="card-header">
                          <h3>Clientes</h3>
                      </div>
                      <div class="card-body">
                          <p><span>Nombre:</span> ${name}</p>
                          <p><span>Correo:</span> ${email} </p>
                          <p><span>Ciudad:</span> ${address.city} </p>
                          <p><span>Compañia:</span> ${company.name}  </p>
                      </div>
                  </div>
                `;
            })

            // quitar spiner
            UI.divCarga.innerHTML = ''

        })
})

document.getElementById('limpiarTodo').
addEventListener('click', borrarTodo);

function borrarTodo() {
    document.querySelector('.resultados').innerHTML = '';

}
