const {createApp} = Vue;
createApp({
    data() {
        return {
            todolist: [
                { text: 'completa allenamento', done: true },
                { text: 'fai la spesa', done: false },
                { text: 'esegui un esercizio', done: false },
                { text: 'fai riposo pomeridiano', done: true },
                { text: 'porta a termine il lavoro', done: false }
            ],
            newTodo:''
        }
    },
    methods: {
        removeTodo(index) {
            this.todolist.splice(index, 1);
        },
        addTodo() {
            if (this.newTodo.trim() !== '') {
                this.todolist.push({text: this.newTodo, done: false});
                this.newTodo='';
            }
        }
    }
}).mount('#app');