const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SponsorTrans', {
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
    DeptId: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    SrcSponsor: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    NewSponsor: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    WaitToSign: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    WaitToClose: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    WaitToPayGoodsApply: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    JobTrans: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    DateFrom: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    DateTo: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    Memo: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SponsorTrans',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__SponsorT__4B913AC78E3FB647",
        unique: true,
        fields: [
          { name: "FlowKey" },
        ]
      },
    ]
  });
};
