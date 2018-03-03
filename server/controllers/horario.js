const horario = require('../models').horario;
const materia = require('../models').materia;
const aula = require('../models').aula;
const docente = require('../models').docente;
const Sequelize = require('sequelize');

const Op = Sequelize.Op;

module.exports = {

    create(req, res) {
        //validaciones
        //calidacion de la hora inicio y fin
        if (req.body.hora_inicio < req.body.hora_fin) {
            //validacion de dias de la semana del 1 al 7

                horario.findAll({
                    where: {
                        id_aula: req.body.id_aula,
                        dia: req.body.dia,
                        [Op.or]: [{
                            hora_inicio: {
                                [Op.between]: ['00:00:00', req.body.hora_inicio]
                            }
                        },
                        {
                            hora_fin: {
                                [Op.between]: [req.body.hora_inicio, req.body.hora_fin]
                            }
                        }]

                    }
                }).then(horarios => {
                    console.log(horarios)
                    //validacion de la asigacion de horario
                    if (horarios.length > 0) {
                        console.log('No esta disponible ese horario!');
                        return res.status(400);
                    }
                    //validado
                    else {
                        return horario
                            .create({
                                dia: req.body.dia,
                                hora_inicio: req.body.hora_inicio,
                                minuto_inicio: req.body.minuto_inicio,
                                hora_fin: req.body.hora_fin,
                                minuto_fin: req.body.minuto_fin,
                                id_materia: req.body.id_materia,
                                id_aula: req.body.id_aula
                            })
                            .then(horario => res.status(201).send(horario))
                            .catch(error => res.status(400).send(error));
                        console.log('insertado correctamente');

                    }

                });

        }
        else {
           return res.status(400)
        }

    },

    list(req, res) {
        return horario
            .findAll({
                include: [{
                    model: materia,
                    as: 'materia',
                    include: [{
                        model: docente,
                        as: 'docente',
                    }]
                }]

            })
            .then(horario => res.status(200).send(horario))
            .catch(error => res.status(400).send(error));
    },

};