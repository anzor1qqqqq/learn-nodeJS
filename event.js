const Emitter = require('events');

const emiter = new Emitter();

emiter.on('message', (str) => {
    console.log(`Строка сообщения ${str}`);
});

emiter.emit('message', 'Hello world');