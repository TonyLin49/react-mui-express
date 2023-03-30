const Sequelize = require('sequelize');
const sqlserver = require('../../../database/dockerSqlserver')
module.exports = sqlserver.define(
  'Accounting', {
    id: { field: 'FlowKey',
      type: Sequelize.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    createDept: { field: 'CreateDept',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    applicant: { field: 'Applicant',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    names: { field: 'Names',
      type: Sequelize.STRING(100),
      allowNull: false
    },
    budgetCode: { field: 'BudgetCode',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    parentId: { field: 'ParentId',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    dorC: { field: 'DorC',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    accProperty: { field: 'AccProperty',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    isSumCode: { field: 'IsSumCode',
      type: Sequelize.CHAR(1),
      allowNull: false
    },
    isAccCode: { field: 'IsAccCode',
      type: Sequelize.CHAR(1),
      allowNull: false
    },
    accSponsor: { field: 'AccSponsor',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    program: { field: 'Program',
      type: Sequelize.STRING(200),
      allowNull: false
    },
    sysNo: { field: 'SysNo',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    code: { field: 'Code',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    isReceipt: { field: 'IsReceipt',
      type: Sequelize.CHAR(1),
      allowNull: false
    },
    accType: { field: 'AccType',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    accUserType: { field: 'AccUserType',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    reportCode: { field: 'ReportCode',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    orderKey: { field: 'OrderKey',
      type: Sequelize.STRING(50),
      allowNull: false
    }
  }, {
    sqlserver,
    tableName: 'Accounts',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Accounts__4B913AC74A35EF3D",
        unique: true,
        fields: [
          { name: "FlowKey" },
        ]
      },
    ]
  });

