const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CursosSchema = new Schema({
    nombre: String,
    plan_clases: String,
    id_usuario: Array
});

var Cursos = mongoose.model("Cursos", CursosSchema);
module.exports = Cursos;