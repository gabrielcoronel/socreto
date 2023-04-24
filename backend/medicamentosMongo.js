let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let itemMongo = new Schema({
    medicamento: String,
    hora: String,
    minutos: String,
    padecimiento: String,
    foto: String,
});

module.exports = mongoose.model("Sneaker", itemMongo);
