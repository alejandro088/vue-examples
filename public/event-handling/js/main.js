new Vue({
    el: 'main',

    data: {
        
        tareas: [ 
            {nombre: "hacer la tarea", prioridad: 5},
            {nombre: "hacer las compras", prioridad: 3},
            {nombre: "pagar las cuentas", prioridad: 8},


        ],
        nuevaTarea: '',
    },
    methods: {
        agregarTarea: function(event) {
            console.log('Nueva tarea: ' + this.nuevaTarea + '!')
            this.tareas.unshift({nombre: this.nuevaTarea, prioridad: 0});
            this.nuevaTarea = '';
        }
    }
});