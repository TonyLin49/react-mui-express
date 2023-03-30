const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Sponsor', {
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
    Description: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Emp_id: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Memo: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Sponsor',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Sponsor__4B913AC7E1507B20",
        unique: true,
        fields: [
          { name: "FlowKey" },
        ]
      },
    ]
  });
};
