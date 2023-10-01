'use strict';
const { Model , DataTypes} = require('sequelize');
module.exports = (sequelize) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association heres
      Admin.hasOne(models.users, {
        foreignKey : {
          type : DataTypes.UUID
        }
      })
    }
  }
  Admin.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    user_id : {
      type: DataTypes.UUID, 
      allowNull: false,
      unique: true, 
    }
  }, {
    sequelize,
    modelName: 'admins',
    tableName : "admins",
    timestamps : true,
    createdAt : "created_at",
    updatedAt : "updated_at"
  });
  return Admin;
};