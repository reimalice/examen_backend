module.exports = (sequelize, DataType) => {
  const horario = sequelize.define('horario', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    dia: {
      type: DataType.STRING,
      allowNull: false
    },
    hora_inicio: {
      type: DataType.TIME,
      allowNull: false
    },
    hora_fin: {
      type: DataType.TIME,
      allowNull: false
    },

    id_aula: DataType.INTEGER ,
    id_materia: DataType.INTEGER 
    
   
  });
  horario.associate = function (models) {
    horario.belongsTo(models.aula, { foreignKey: 'id_aula', as: 'aula' });
    horario.belongsTo(models.materia, { foreignKey: 'id_materia', as: 'materia' });
  };
  
  return horario;
};