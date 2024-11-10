const express = require('express');
const cors = require('cors');
const { dbConection } = require('../database/config');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        // Se definen las rutas que queramos que tenga cada modelo
        // this.{modelo}Path = '/api/{modelo}'

        // Conectar con la base de datos
        this.connectDB();

        // Middlewares
        this.middlewares();

        //Funciones de rutas
        this.routes();
    };

    async connectDB() {
        await dbConection();
    };

    middlewares (){
        // CORS
        this.app.use(cors());

        // Leer lo que envia el usuario por el cuerpo de la petición
        this.app.use(express.json());

        // Definir la carpeta pública
        this.app.use(express.static('public'));
    };

    routes() {
        // Vincula con el archivo en la carpeta route:
        // this.app.use(this.{modelo}Path, require('../routes/{modelo}'))
    };

    listen() {
        this.app.listen(this.port, () =>{
            console.log('Server online port: ', this.port);
        });
    }
}