const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NivelesSchema = new Schema({
    nivel: Number,
    descripcion: String,
    id_curso: {
        type: Schema.Types.ObjectId,
        ref: "Cursos"
    }
});

var Niveles = mongoose.model("Niveles", NivelesSchema);
module.exports = Niveles;