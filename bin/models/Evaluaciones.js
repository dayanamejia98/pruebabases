const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EvaluacionesSchema = new Schema({
    nombre: String,
    url: String,
    id_modulo: {
        type: Schema.Types.ObjectId,
        ref: "Modulos"
    },
    id_usuario:[
        {
            type: Schema.Types.ObjectId,
            ref: "Usuarios"
        }
    ]
});

var Evaluaciones = mongoose.model("Evaluaciones", EvaluacionesSchema);
module.exports = Evaluaciones;