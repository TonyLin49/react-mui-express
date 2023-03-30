const Sequelize = require('sequelize');
const sqlserver = require('../../../database/dockerSqlserver')
module.exports = sqlserver.define(
  'User', {
    id: {
      field: 'FlowKey',
      type: Sequelize.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    code: {
      field: 'Code',
      type: Sequelize.STRING(50),
      allowNull: true,
      require: true,
      unique: true
    },
    displayName: {
      field: 'DisplayName',
      type: Sequelize.STRING(50),
      allowNull: true,
      require: true
    },
    email: {
      field: 'Email',
      type: Sequelize.STRING(50),
      allowNull: true,
      require: true,
      unique: true
    },
    mobile: {
      field: 'Mobile',
      type: Sequelize.STRING(50),
      allowNull: true
    },
    password: {
      field: 'Password',
      type: Sequelize.STRING(100),
      allowNull: true
    },
    applyDate: {
      field: 'ApplyDate',
      type: Sequelize.STRING(20),
      allowNull: true
    },
    active: {
      field: 'Active',
      type: Sequelize.STRING(1),
      allowNull: true
    },
    role: {
      field: 'Role',
      type: Sequelize.STRING(100),
      allowNull: true,
      set: function(value) {
        if (Array.isArray(value)) {
          value = value.join(',');
        }
        this.setDataValue('role', value);
      }
    },
    sysNo: {
      field: 'SysNo',
      type: Sequelize.STRING(50),
      allowNull: true
    },
    empCode: {
      field: 'Applicant',
      type: Sequelize.STRING(50),
      allowNull: true
    },
    createDept: {
      field: 'CreateDept',
      type: Sequelize.STRING(50),
      allowNull: true
    },
    startDate: {
      field: 'StartDate',
      type: Sequelize.STRING(20),
      allowNull: true
    },
    endDate: {
      field: 'EndDate',
      type: Sequelize.STRING(20),
      allowNull: true
    }
  }, 
  {
    sqlserver,
    tableName: 'User',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__User__4B913AC7B83829E9",
        unique: true,
        fields: [
          { name: "FlowKey" },
        ]
      },
    ]
  }
);
