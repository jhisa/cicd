const express = require('express');

const app = express();

app.get('/', (req, res) => {
<<<<<<< HEAD
  res.send('¡Hola mundo  ahora sera automatico CICD');
=======
  res.send('¡Hola mundo a todos! ahora si');
>>>>>>> fd9f589 (final CIDI)
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
