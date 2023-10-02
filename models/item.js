'use strict';
const { Model, DataTypes} = require('sequelize');
module.exports = (sequelize) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.hasOne(models.Category, {
        foreignKey  : {
          type : DataTypes.INTEGER
        }
      })
    }
  }
  Item.init({
    id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      // defaultValue: DataTypes.INTEGER,
      autoIncrement : true
    },
    category_id : {
      type : DataTypes.INTEGER,
      allowNull : false,
      unique : true,
      // defaultValue : DataTypes.INTEGER,
      // autoIncrement : true
    },
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    size: {
      type : DataTypes.ENUM,
      values : ["large", "medium", "small"]
    }
  }, {
    sequelize,
    modelName: 'Item',
    tableName : "items",
    timestamps : true,
    createdAt : "created_at",
    updatedAt : "updated_at"
  });
  return Item;
};