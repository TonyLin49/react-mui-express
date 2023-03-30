const Sequelize = require('sequelize');
const sqlserver = require('../../../database/dockerSqlserver')
module.exports = sqlserver.define(
  'LogInfo', {
    id: { field: 'flowKey',
      type: Sequelize.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    sysNo: { field: 'sysNo',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    code: { field: 'code',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    applicant: { field: 'applicant',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    createDept: { field: 'createDept',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    action: { field: 'action',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    srcFlowKey: { field: 'srcFlowKey',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    updateAccount: { field: 'updateAccount',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    updateUserName: { field: 'updateUserName',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    srcTable: { field: 'srcTable',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    updateTime: { field: 'updateTime',
      type: Sequelize.STRING(20),
      allowNull: false
    },
    actionInfo: { field: 'actionInfo',
      type: Sequelize.TEXT,
      allowNull: false
    }
  }, {
    sqlserver,
    tableName: 'LogInfo',
    schema: 'dbo',
    timestamps: false
  });

