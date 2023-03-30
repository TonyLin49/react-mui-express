const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CancelSign', {
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
    FormName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    SrcFlowKey: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    SrcFlowName: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Reason: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'CancelSign',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__CancelSi__4B913AC759DFFBEF",
        unique: true,
        fields: [
          { name: "FlowKey" },
        ]
      },
    ]
  });
};
