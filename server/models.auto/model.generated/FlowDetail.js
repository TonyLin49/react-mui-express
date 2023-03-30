const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FlowDetail', {
    Id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    FlowKey: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Seq_no: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Step: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Step_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Signer_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Signer_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Signer_department: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Signed_time: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Signed_result: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Form_tableName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Memo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
  }, {
    sequelize,
    tableName: 'FlowDetail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__FlowDeta__3214EC07E40F758A",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
