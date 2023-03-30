const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Authority', {
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
    Names: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    AuthorityType: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    TypeValue: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ExtendsValue: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Authority',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Authorit__4B913AC7DE82059E",
        unique: true,
        fields: [
          { name: "FlowKey" },
        ]
      },
    ]
  });
};
