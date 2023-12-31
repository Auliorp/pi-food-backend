const { DataTypes, UUIDV4 } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
   // defino el modelo
   sequelize.define(
      "diets",
      {
         id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
         },
         nombre: {
            type: DataTypes.STRING,
            allowNull: false,
         },
      },
      { timestamps: false }
   );
};
