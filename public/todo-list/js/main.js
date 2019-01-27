new Vue({
    el: 'main',
    data: {
        
        newTaskName: '',
        newTaskDuration: '',
        newTaskPriority: 1,
        taskEdited: '',
        tasks: [
            {   
                name: 'Design a nice theme',
                duration: '2 mins',
                priority: 1,
                completed: false 
            },
            {   
                name: 'Make the theme responsive',
                duration: '4 hours',
                priority: 2,
                completed: false 
            },
            {   
                name: 'Let theme shine like a star',
                duration: '1 day',
                priority: 3,
                completed: false 
            },
            {   
                name: 'Check your messages and notifications',
                duration: '1 week',
                priority: 4,
                completed: false 
            },
            {   
                name: 'Let theme shine like a star',
                duration: '1 month',
                priority: 5,
                completed: false 
            },
        ]
    },
    methods: {
        addNewTask: function() {
            
            this.tasks.push({name: this.newTaskName,
                        duration: this.newTaskDuration,
                        priority: this.newTaskPriority,
                        completed: false
                    });

            this.newTaskName = '';
            this.newTaskDuration = '';
            this.newTaskPriority = 1;
            
        },
        removeTask: function(index){
            let task = this.tasks[index];
            this.tasks.splice(index, 1)
            console.warn(`Tarea: ${task.name} eliminada`)
        },
        editTask: function(index){
            let task = this.tasks[index];
            this.taskEdited = index;
        },
        closeElem: function(e){
            console.log(e);
        },
        classTaskPriority: function(item) {
            return {'label-danger': (item.priority == 1),
            'label-info': (item.priority == 2),
            'label-warning': (item.priority == 3),
            'label-primary': (item.priority == 4),
            'label-success': (item.priority == 5),
            'label-default': (item.priority == 6)}
        }
    },
    computed: {
        
        
    }
});