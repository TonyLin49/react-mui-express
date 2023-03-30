const Sequelize = require('sequelize');
const sqlserver = require('../../../database/dockerSqlserver')
module.exports = sqlserver.define(
  'CancelSign', {
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
    formName: { field: 'FormName',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    srcFlowKey: { field: 'SrcFlowKey',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    srcFlowName: { field: 'SrcFlowName',
      type: Sequelize.TEXT,
      allowNull: false
    },
    reason: { field: 'Reason',
      type: Sequelize.STRING(100),
      allowNull: false
    }
  }, {
    sqlserver,
    tableName: 'CancelSign',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__CancelSi__4B913AC759DFFBEF",
        unique: true,
        fields: [
          { name: "FlowKey" },
        ]
      },
    ]
  });

