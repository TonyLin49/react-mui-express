const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('JobAgent', {
    FlowKey: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    SysNo: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Code: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Applicant: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    CreateDept: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Emp_id: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Agent: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    TimeFrom: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    TimeTo: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'JobAgent',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__JobAgent__4B913AC70BE92D0E",
        unique: true,
        fields: [
          { name: "FlowKey" },
        ]
      },
    ]
  });
};
