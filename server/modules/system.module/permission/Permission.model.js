const Sequelize = require('sequelize');
const sqlserver = require('../../../database/dockerSqlserver')

const Permission = sqlserver.define('Permission', {
  id: {
    field: 'FlowKey',
    type: Sequelize.STRING(50),
    allowNull: false,
    primaryKey: true
  },
  sysNo: {
    field: 'SysNo',
    type: Sequelize.STRING(50),
    allowNull: false
  },
  createDept: {
    field: 'CreateDept',
    type: Sequelize.STRING(50),
    allowNull: false
  },
  applicant: {
    field: 'Applicant',
    type: Sequelize.STRING(50),
    allowNull: false
  },
  code: {
    field: 'Code',
    type: Sequelize.STRING(100),
    allowNull: false,
    unique: true
  },
  parentTable: {
    field: 'ParentTable',
    type: Sequelize.STRING(50),
    allowNull: false
  },
  parentId: {
    field: 'ParentId',
    type: Sequelize.STRING(50),
    allowNull: true
  },
  programId: {
    field: 'ProgramId',
    type: Sequelize.STRING(50),
    allowNull: false
  },
  canInsert: {
    field: 'CanInsert',
    type: Sequelize.CHAR(1),
    allowNull: true
  },
  updateAuth: {
    field: 'UpdateAuth',
    type: Sequelize.STRING(50),
    allowNull: true
  },
  deleteAuth: {
    field: 'DeleteAuth',
    type: Sequelize.STRING(50),
    allowNull: true
  },
  searchAuth: {
    field: 'SearchAuth',
    type: Sequelize.STRING(50),
    allowNull: true
  },
  multiDeptsAuth: {
    field: 'MultiDeptsAuth',
    type: Sequelize.STRING(255),
    allowNull: true,
    set: function(value) {
      if (Array.isArray(value)) {
        value = value.join(',');
      }
      this.setDataValue('multiDeptsAuth', value);
    }
  },
  memo: {
    field: 'Memo',
    type: Sequelize.STRING(255),
    allowNull: true
  }
}, {
  sqlserver,
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

// Hook to generate code column before creating a new record
Permission.beforeCreate((permission, options) => {
  permission.code = `${permission.parentTable}-${permission.parentId}-${permission.programId}`;
});

// Hook to generate code column before updating an existing record
Permission.beforeUpdate((permission, options) => {
  permission.code = `${permission.parentTable}-${permission.parentId}-${permission.programId}`;
});

module.exports = Permission;
