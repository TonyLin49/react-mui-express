const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Notice', {
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
    CreateDept: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Applicant: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Summary: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Appendix: {
      type: DataTypes.STRING(100),
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
    LinkUrl: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Notice',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Notice__4B913AC7FC095201",
        unique: true,
        fields: [
          { name: "FlowKey" },
        ]
      },
    ]
  });
};
