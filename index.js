const express = require('express');
const cors = require('cors');
const bunyan = require('bunyan');
const app = express();
const bragsRouter = require('./route/bragsRoutes'); 
const PORT = process.env.PORT || 3000

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const logger = bunyan.createLogger({ name: 'Servidor de mi aplicacion' });

app.use('/brags', bragsRouter); 

app.get('/', (req, res, next)=>{
    try {
        res.status(200).json("Haciendo GET en /")
    } catch (error) {
        next(error)
    }
})

app.use((err,req,res, next) =>{
    res.status(500).json("Error en la API")
})
app.listen(PORT, () => {
    console.log('Servidor encendido');
});
