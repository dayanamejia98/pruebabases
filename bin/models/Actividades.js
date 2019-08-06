const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActividadesSchema = new Schema({
    nombre: String,
    descripcion: String,
    id_modulo:
        {
            type: Schema.Types.ObjectId,
            ref: "Modulos"
        }

});

var Actividades = mongoose.model("Actividades", ActividadesSchema);
module.exports = Actividades;