const express = require('express');
const app = express();
const port = 2323;
app.get('/', (req, res) => res.send('Recluse is Alive!'));

app.listen(port, () => console.log(`Recluse is listening to http://localhost:${port}`));
