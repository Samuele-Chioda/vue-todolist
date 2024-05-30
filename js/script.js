const {createApp} = Vue;
createApp({
    data() {
        return {
            todolist: [
                { text: 'fai allenamento', done: true },
                { text: 'fai la spesa', done: false },
                { text: 'fai esercizio', done: false },
                { text: 'fai riposo pomeridiano', done: false },
                { text: 'fai lavoro', done: false }
            ]
        }
    },
    methods: {
        removeTodo(index) {
            this.todolist.splice(index, 1);
        }
    }
}).mount('#app');