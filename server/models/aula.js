module.exports = (sequelize, DataType) => {
  const aula = sequelize.define('aula', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    nombre: {
      type: DataType.STRING,
      allowNull: false
    },
    id_empleado: DataType.INTEGER
   
  });
  aula.associate = function(models) {
    aula.belongsTo(models.docente, { foreignKey: 'id_docente', as: 'docente' });
};
  
  return aula;
};