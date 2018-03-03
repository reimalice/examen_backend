module.exports = (sequelize, DataType) => {
  const docente = sequelize.define('docente', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    paterno: {
      type: DataType.STRING,
      allowNull: false
    },
    materno:{
      type: DataType.STRING,
      allowNull: false
    },
    nombres: {
      type: DataType.STRING,
      allowNull: false
    }

  });
  docente.associate = function (models) {
    docente.hasOne(models.materia, {foreignKey: 'id_docente', as: 'materia'});
  };
  
  return docente;
};