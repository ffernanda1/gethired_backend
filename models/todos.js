'use strict';
module.exports = function(sequelize, DataTypes) {
  var todos = sequelize.define('todos', {
    todo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    activity_group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "activities", key: "activity_id" }
    },
    title: DataTypes.STRING,
    priority: {
      type: DataTypes.STRING,
      defaultValue: "Very-High"
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },   
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return todos;
};