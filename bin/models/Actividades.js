const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActividadesSchema = new Schema({
    nombre: String,
    descripcion: String,
    id_modulo: Array
});

var Actividades = mongoose.model("Actividades", ActividadesSchema);
module.exports = Actividades;