export class ApiEmpleados{
    async consApiEmpleados(){
        const url = await fetch('./data/empleados.json')

        const respuesta = await url.json();

        return{
            respuesta
        }
    }
}

export class ApiClientes{
    async consApiClientes() {
        const url = await fetch('https://jsonplaceholder.typicode.com/users')

        const respuesta = await url.json();

        return{
            respuesta
        }
    }
}