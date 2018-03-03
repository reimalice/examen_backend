const aula = require('../models').aula;
module.exports = {

    create(req, res) {
        return aula
            .create({
                nombre: req.body.nombre
            })
            .then(aula => res.status(201).send(aula))
            .catch(error => res.status(400).send(error));
    },
    
    list(req, res) {
        return aula
          .findAll()
          .then(aula => res.status(200).send(aula))
          .catch(error => res.status(400).send(error));
    },



};