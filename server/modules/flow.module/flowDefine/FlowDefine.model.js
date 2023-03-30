const Sequelize = require('sequelize');
const sqlserver = require('../../../database/dockerSqlserver')
module.exports = sqlserver.define(
  'FlowDefine', {
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
      allowNull: false,
      unique: true
    },
    applicant: { field: 'Applicant',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    createDept: { field: 'CreateDept',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    flowName: { field: 'FlowName',
      type: Sequelize.STRING(200),
      allowNull: false
    },
    closerType: { field: 'CloserType',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    closeCanReject: { field: 'CloseCanReject',
      type: Sequelize.CHAR(1),
      allowNull: false
    },
    closerValue: { field: 'CloserValue',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    draftRight: { field: 'DraftRight',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    draftRightValue: { field: 'DraftRightValue',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    summary: { field: 'Summary',
      type: Sequelize.TEXT,
      allowNull: false
    },
    closeCanEditFields: { field: 'CloseCanEditFields',
      type: Sequelize.TEXT,
      allowNull: false
    },
    closeStepName: { field: 'CloseStepName',
      type: Sequelize.STRING(50),
      allowNull: false
    }
  }, {
    sqlserver,
    tableName: 'FlowDefine',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__FlowDefi__4B913AC743EB8548",
        unique: true,
        fields: [
          { name: "FlowKey" },
        ]
      },
    ]
  });

