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
   
  });
  aula.associate = function (models) {
    aula.hasaMany(models.horario, {foreignKey: 'id_aula', as: 'horario'});
  };
  
  return aula;
};