const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FlowSteps', {
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
    ParentId: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Step: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    StepName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Signer_id: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Signer_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Form_tableName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ResetFlow: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    CanDecided: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    CanEditField: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    Countersign: {
      type: DataTypes.CHAR(50),
      allowNull: false
    },
    IsSendMessage: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    MessageValue: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'FlowSteps',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__FlowStep__4B913AC7331FFAF7",
        unique: true,
        fields: [
          { name: "FlowKey" },
        ]
      },
    ]
  });
};
