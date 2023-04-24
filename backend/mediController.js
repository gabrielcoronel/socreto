let Item = require("./medicamentosMongo"); 

exports.guardar = function (req, res) {  
    Item.create({
        ...req.body,    
    });
    res.json({});
};

exports.mostrar = function (req, res) {
    Item.find()
        .then((datos) => res.json(datos));
};

exports.eliminar = async function (req, res) {
    await Item.deleteOne({ _id: req.body.id });
    res.json({});
};
