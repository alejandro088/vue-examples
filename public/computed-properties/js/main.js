new Vue({
    el: 'main',

    data: {
        
        
        mensaje: 'hola mundo',
        tareas: [ 
            {nombre: "hacer la tarea", prioridad: 5},
            {nombre: "hacer las compras", prioridad: 3},
            {nombre: "pagar las cuentas", prioridad: 8},


        ],
    },
    computed: {
        // a computed getter
        reversedMessage: function () {
        // `this` points to the vm instance
        return this.mensaje.split('').reverse().join('')
      }
    }
});