let app = new Vue({
    el: 'main',

    data: {
        mensaje: '',
        conectado: false,
        edad: 34,
        semana: ['lunes', 'martes',
             'miercoles', 'jueves',
            'viernes'],
        tareas: [ 
            {nombre: "hacer la tarea", prioridad: 5},
            {nombre: "hacer las compras", prioridad: 3},
            {nombre: "pagar las cuentas", prioridad: 8},

        ],
        
    }
    
});