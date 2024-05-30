const {createApp} = Vue;
createApp({
    data() {
        return {
            todolist; [
                { text: 'fai allenamento', done: false },
                { text: 'fai la spesa', done: false },
                { text: 'fai esercizio', done: false },
                { text: 'fai riposo pomeridiano', done: false },
                { text: 'fai lavoro', done: false }
            ]
        }
    }
}).mount('#app')