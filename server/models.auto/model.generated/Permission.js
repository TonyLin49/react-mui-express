const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Permission', {
    FlowKey: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    SysNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CreateDept: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Applicant: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Code: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: true
    },
    Names: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ParentTable: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ParentId: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ProgramId: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CanInsert: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    CanUpdate: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    CanDelete: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    SearchAuth: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Memo: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Permission',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Permissi__4B913AC7E8864108",
        unique: true,
        fields: [
          { name: "FlowKey" },
        ]
      },
    ]
  });
};
