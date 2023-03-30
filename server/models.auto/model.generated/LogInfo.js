const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LogInfo', {
    flowKey: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    sysNo: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    code: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    applicant: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    createDept: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    action: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    srcFlowKey: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    updateAccount: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    updateUserName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    srcTable: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    updateTime: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    actionInfo: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'LogInfo',
    schema: 'dbo',
    timestamps: false
  });
};
