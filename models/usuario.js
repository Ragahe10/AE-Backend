const {Schema, model} = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String, 
        required:[true, 'El nombre es obligatorio'],
        maxlength: 100
    },
    apellido: {
        type: String,
        required:[true, 'El apellido es obligatorio'],
        maxlength: 100
    },
    domicilio: {
        type: String,
        required:[true, 'El domicilio es obligatorio'],
        maxlength: 200
    },
    telefono: {
        type: String,
        required:[true, 'El telefono es obligatorio'],
        maxlength: 12
    },
    correo: {
        type: String,
        required:[true, 'El correo es obligatorio'],
        unique: true,
        maxlength: 150
    },
    password: {
        type: String,
        required:[true, 'La contraseña es obligatoria'],
        minlength:6,
        maxlength: 15
    },
    rol: {
        type: String,
        required: true //DOCENTE, ADMIN, ALUMNO
    }
});

modulo.export = model('Usuario', UsuarioSchema);