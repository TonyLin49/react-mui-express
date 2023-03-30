const Sequelize = require('sequelize');
const sqlserver = require('../../../database/dockerSqlserver')
module.exports = sqlserver.define(
  'Sponsor', {
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
    description: { field: 'Description',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    empId: { field: 'Emp_id',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    memo: { field: 'Memo',
      type: Sequelize.STRING(50),
      allowNull: false
    }
  }, {
    sqlserver,
    tableName: 'Sponsor',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Sponsor__4B913AC7E1507B20",
        unique: true,
        fields: [
          { name: "FlowKey" },
        ]
      },
    ]
  });

