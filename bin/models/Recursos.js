const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecursosSchema = new Schema({
    nombre: String,
    url: String,
    id_modulo: Array
});

var Recursos = mongoose.model("Recursos", RecursosSchema);
module.exports = Recursos;