const Sequelize = require('sequelize');
const sqlserver = require('../../../database/dockerSqlserver')
module.exports = sqlserver.define(
  'Category', {
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
    groupCode: { field: 'GroupCode',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    names: { field: 'Names',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    orderSeq: { field: 'OrderSeq',
      type: Sequelize.STRING(10),
      allowNull: false
    },
    groupControl: { field: 'GroupControl',
      type: Sequelize.CHAR(1),
      allowNull: false
    },
    controler: { field: 'Controler',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    sponsor: { field: 'Sponsor',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    accounts: { field: 'Accounts',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    crossFlag: { field: 'CrossFlag',
      type: Sequelize.CHAR(1),
      allowNull: false
    },
    dateFrom: { field: 'DateFrom',
      type: Sequelize.STRING(20),
      allowNull: false
    },
    dateTo: { field: 'DateTo',
      type: Sequelize.STRING(20),
      allowNull: false
    }
  }, {
    sqlserver,
    tableName: 'Category',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "_WA_Sys_Code_060DEAE8",
        fields: [
          { name: "Code" },
        ]
      },
      {
        name: "_WA_Sys_Controler_060DEAE8",
        fields: [
          { name: "Controler" },
        ]
      },
      {
        name: "_WA_Sys_GroupCode_060DEAE8",
        fields: [
          { name: "GroupCode" },
        ]
      },
      {
        name: "_WA_Sys_Names_060DEAE8",
        fields: [
          { name: "Names" },
        ]
      },
      {
        name: "_WA_Sys_Sponsor_060DEAE8",
        fields: [
          { name: "Sponsor" },
        ]
      },
      {
        name: "_WA_Sys_SysNo_060DEAE8",
        fields: [
          { name: "SysNo" },
        ]
      },
      {
        name: "PK__Category__4B913AC7C7F4C1C9",
        unique: true,
        fields: [
          { name: "FlowKey" },
        ]
      },
    ]
  });

