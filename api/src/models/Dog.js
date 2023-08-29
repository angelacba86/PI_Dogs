const { DataTypes} = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Dog', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    image: {
      type: DataTypes.STRING,
      defaultValue:'https://www.infobae.com/new-resizer/8Tit5S6arE6wmjm30mTNDOnh8Yg=/992x558/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/VBTR5CBACNDMTMECPNZN6JAWDQ.jpg',
    },
    minHeight: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 100 },
      allowNull: false,
    },
    maxHeight: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 100 },
      allowNull: false,
    },
    minWeight: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 100 },
      allowNull: false,
    },
    maxWeight: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 100 },
      allowNull: false,
    },
    minLifeSpan: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 20 },
      allowNull: false,
    },
    maxLifeSpan: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 20 },
      allowNull: false,
    },
    origin: {
      type: DataTypes.STRING,
    }
  },{timestamps:false})
}
