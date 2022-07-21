const express = require('express');
const conectarDb = require('./config/db');
const cors = require('cors');


//Creando server
const app = express();

//Conectar a db
conectarDb();

app.use(cors());
//Middleware
app.use(express.json());
 
app.use('/api/notes', require('./routes/note'));



app.listen(4000, () => {
    console.log('SERVER RUNNING ON PORT ' + 4000);
})