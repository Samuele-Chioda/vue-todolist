const {createApp} = Vue;
createApp({
    data() {
        return {
            todos: [
                { text: 'fai allenamento', done: false },
                { text: 'fai la spesa', done: false },
                { text: 'fai esercizio', done: false },
                { text: 'fai riposo pomeridiano', done: false },
                { text: 'fai lavoro', done: false }
            ]
        }
    },
    methods: {
        removeTodo(index) {
            this.todos.splice(index, 1);
        }
    }
}).mount('#app');