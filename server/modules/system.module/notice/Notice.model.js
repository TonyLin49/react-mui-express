const Sequelize = require('sequelize');
const sqlserver = require('../../../database/dockerSqlserver')
module.exports = sqlserver.define(
  'Notice', {
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
    createDept: { field: 'CreateDept',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    applicant: { field: 'Applicant',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    summary: { field: 'Summary',
      type: Sequelize.TEXT,
      allowNull: false
    },
    content: { field: 'Content',
      type: Sequelize.TEXT,
      allowNull: false
    },
    appendix: { field: 'Appendix',
      type: Sequelize.STRING(100),
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
    linkUrl: { field: 'LinkUrl',
      type: Sequelize.STRING(100),
      allowNull: false
    },
    objectType: {
      field: 'ObjectType',
      type: Sequelize.STRING(50),
      allowNull: true
    },
    objectValues: {
      field: 'ObjectValues',
      type: Sequelize.STRING(200),
      allowNull: true
    }
  }, {
    sqlserver,
    tableName: 'Notice',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Notice__4B913AC7FC095201",
        unique: true,
        fields: [
          { name: "FlowKey" },
        ]
      },
    ]
  });

