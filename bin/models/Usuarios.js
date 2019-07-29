const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsuariosSchema = new Schema({
    nombre1: String,
    nombre2: String,
    apellido1: String,
    apellido2: String,
    correo: String,
    contrasena: String,
    id_curso: Array,
    id_evaluacion: Array,
});

var Usuarios = mongoose.model("Usuarios", UsuariosSchema);
module.exports = Usuarios;