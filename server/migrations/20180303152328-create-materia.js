'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('materia', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sigla: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descripcion: {
        type: Sequelize.STRING,
        allowNull: false
      },
      id_docente: {
        type: Sequelize.INTEGER,
        references: {
          model: 'docentes',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('materia');
  }
};