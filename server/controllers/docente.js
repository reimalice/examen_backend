const docente = require('../models').docente;
module.exports = {

    create(req, res) {
        return docente
            .create({
                paterno: req.body.paterno,
                materno: req.body.materno,
                nombres: req.body.nombres,
            })
            .then(docente => res.status(201).send(docente))
            .catch(error => res.status(400).send(error));
    },
    
    list(req, res) {
        return docente
          .findAll()
          .then(docente => res.status(200).send(docente))
          .catch(error => res.status(400).send(error));
    },



};