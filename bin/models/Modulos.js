const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ModulosSchema = new Schema({
    nombres: String,
    contenido: String,
    id_nivel: {
        type: Schema.Types.ObjectId,
        ref: "Nivel"
    }
});

var Modulos = mongoose.model("Modulos", ModulosSchema);
module.exports = Modulos;