module.exports = (sequelize, DataType) => {
  const materia = sequelize.define('materia', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    sigla: {
      type: DataType.STRING,
      allowNull: false
    },
    descripcion:{
      type: DataType.STRING,
      allowNull: false
    },
    id_docente: DataType.INTEGER
   
  });
  materia.associate = function(models) {
    materia.belongsTo(models.docente, { foreignKey: 'id_docente', as: 'docente' });
};
  
  return materia;
};