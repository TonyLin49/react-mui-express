const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FlowDefine', {
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
    FlowName: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    CloserType: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    CloseCanReject: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    CloserValue: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DraftRight: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DraftRightValue: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Summary: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    CloseCanEditFields: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    CloseStepName: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'FlowDefine',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__FlowDefi__4B913AC743EB8548",
        unique: true,
        fields: [
          { name: "FlowKey" },
        ]
      },
    ]
  });
};
