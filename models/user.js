'use strict';
const { Model, DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  User.init({
    id : { type: DataTypes.UUID, primaryKey: true, defaultValue : DataTypes.UUIDV4},
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    gender : {
      type : DataTypes.ENUM,
      values : ["male", "female"]
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
    tableName : "users",
    timestamps : true,
    createdAt : "created_at",
    updatedAt : "updated_at"
  });
  return User;
}; 
