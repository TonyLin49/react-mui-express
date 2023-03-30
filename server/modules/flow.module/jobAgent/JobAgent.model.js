const Sequelize = require('sequelize');
const sqlserver = require('../../../database/dockerSqlserver')
module.exports = sqlserver.define(
  'JobAgent', {
    id: { field: 'FlowKey',
      type: Sequelize.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    sysNo: { field: 'SysNo',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    code: { field: 'Code',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    applicant: { field: 'Applicant',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    createDept: { field: 'CreateDept',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    empId: { field: 'Emp_id',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    agent: { field: 'Agent',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    timeFrom: { field: 'TimeFrom',
      type: Sequelize.STRING(20),
      allowNull: false
    },
    timeTo: { field: 'TimeTo',
      type: Sequelize.STRING(20),
      allowNull: false
    }
  }, {
    sqlserver,
    tableName: 'JobAgent',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__JobAgent__4B913AC70BE92D0E",
        unique: true,
        fields: [
          { name: "FlowKey" },
        ]
      },
    ]
  });

