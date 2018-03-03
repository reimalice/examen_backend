const materia = require('../models').materia;
const docente = require('../models').docente;
module.exports = {

    create(req, res) {
        return materia
            .create({
                sigla: req.body.sigla,
                descripcion: req.body.descripcion,
                id_docente: req.body.id_docente,
            })
            .then(materia => res.status(201).send(materia))
            .catch(error => res.status(400).send(error));
    },
    
    list(req, res) {
        return materia
          .findAll({
            include: [{
                model: docente,
                as: 'docente',
              }]
          })
          .then(materia => res.status(200).send(materia))
          .catch(error => res.status(400).send(error));
    },



};