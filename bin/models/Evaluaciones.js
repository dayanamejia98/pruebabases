const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EvaluacionesSchema = new Schema({
    nombre: String,
    url: String,
    id_modulo: Array,
    id_usuario: Array
});

var Evaluaciones = mongoose.model("Evaluaciones", EvaluacionesSchema);
module.exports = Evaluaciones;