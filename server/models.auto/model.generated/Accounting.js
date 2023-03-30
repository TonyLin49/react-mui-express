const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Accounts', {
    FlowKey: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    CreateDept: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Applicant: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Names: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    BudgetCode: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ParentId: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DorC: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    AccProperty: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    IsSumCode: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    IsAccCode: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    AccSponsor: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Program: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    SysNo: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Code: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    IsReceipt: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    AccType: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    AccUserType: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ReportCode: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    OrderKey: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Accounts',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Accounts__4B913AC74A35EF3D",
        unique: true,
        fields: [
          { name: "FlowKey" },
        ]
      },
    ]
  });
};
