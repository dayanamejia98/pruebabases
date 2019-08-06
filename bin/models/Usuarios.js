const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsuariosSchema = new Schema({
    nombre1: String,
    nombre2: String,
    apellido1: String,
    apellido2: String,
    correo: String,
    contrasena: String,
    id_curso: [
        {
            type: Schema.Types.ObjectId,
            ref: "Cursos"
        }
    ],
    id_evaluacion: [
        {
            type: Schema.Types.ObjectId,
            ref: "Evaluaciones"
        }
    ],
});

var Usuarios = mongoose.model("usuarios", UsuariosSchema);
module.exports = Usuarios;