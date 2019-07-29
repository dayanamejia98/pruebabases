const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RedesSchema = new Schema({
    nombre: String,
    url: String,
    id_curso: Array
});

var Redes = mongoose.model("Redes", RedesSchema);
module.exports = Redes;