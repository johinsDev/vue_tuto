const vm = new Vue({
    el: 'main',
    data: {
        tareas: [
            {name: 'Hacer las compras', prioridad: 'Baja'},
            {name: 'Hacer las tareas', prioridad: 'Alta'},
            {name: 'Hacer el almuerzo', prioridad: 'Media'},
        ],
        persona: {
            nombre: 'Johan',
            profesion: 'dev',
            ciudad: 'Valencia'
        }
    }
});