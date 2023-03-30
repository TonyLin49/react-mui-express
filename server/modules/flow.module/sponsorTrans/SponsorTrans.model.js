const Sequelize = require('sequelize');
const sqlserver = require('../../../database/dockerSqlserver')
module.exports = sqlserver.define(
  'SponsorTrans', {
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
    deptId: { field: 'DeptId',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    srcSponsor: { field: 'SrcSponsor',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    newSponsor: { field: 'NewSponsor',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    waitToSign: { field: 'WaitToSign',
      type: Sequelize.CHAR(1),
      allowNull: false
    },
    waitToClose: { field: 'WaitToClose',
      type: Sequelize.CHAR(1),
      allowNull: false
    },
    waitToPayGoodsApply: { field: 'WaitToPayGoodsApply',
      type: Sequelize.CHAR(1),
      allowNull: false
    },
    jobTrans: { field: 'JobTrans',
      type: Sequelize.CHAR(1),
      allowNull: false
    },
    dateFrom: { field: 'DateFrom',
      type: Sequelize.STRING(10),
      allowNull: false
    },
    dateTo: { field: 'DateTo',
      type: Sequelize.STRING(10),
      allowNull: false
    },
    memo: { field: 'Memo',
      type: Sequelize.STRING(100),
      allowNull: false
    }
  }, {
    sqlserver,
    tableName: 'SponsorTrans',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__SponsorT__4B913AC78E3FB647",
        unique: true,
        fields: [
          { name: "FlowKey" },
        ]
      },
    ]
  });

