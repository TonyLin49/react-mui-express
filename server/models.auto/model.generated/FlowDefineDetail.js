const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FlowDefine_detail', {
    Id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    FlowKey: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Seq_no: {
      type: DataTypes.INTEGER,
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
    SignType: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    SignValue: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    IsNecessary: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    CanDecided: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    DefaultSkip: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    SkipValue: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    DecidedValue: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    ResetFlow: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    CanEditField: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    Countersign: {
      type: DataTypes.STRING(50),
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
    tableName: 'FlowDefine_detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__FlowDefi__3214EC073FCF584B",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
