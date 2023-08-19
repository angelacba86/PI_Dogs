const { DataTypes} = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Dog', {
    id:{
      type:DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey:true,
    },
    image:{
      type:DataTypes.STRING,
      defaultValue:'https://www.infobae.com/new-resizer/8Tit5S6arE6wmjm30mTNDOnh8Yg=/992x558/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/VBTR5CBACNDMTMECPNZN6JAWDQ.jpg'
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    weight:{
      type:DataTypes.STRING,//INVESTIGAR TIP DATAJSON Y 
      allowNull: false,

    },
    life_span:{
      type:DataTypes.STRING,
      allowNull: false,
      
    },
    origin:{
      type: DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue:true
    }

  },{timestamps:false});
};
