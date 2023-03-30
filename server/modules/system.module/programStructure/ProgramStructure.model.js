const Sequelize = require('sequelize');
const sqlserver = require('../../../database/dockerSqlserver')
module.exports = sqlserver.define(
  'ProgramStructure', {
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
    parentId: { field: 'ParentId',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    programName: { field: 'ProgramName',
      type: Sequelize.STRING(100),
      allowNull: false
    },
    isMenu: { field: 'IsMenu',
      type: Sequelize.CHAR(1),
      allowNull: false
    },
    orderKey: { field: 'OrderKey',
      type: Sequelize.INTEGER,
      allowNull: false
    },
    programUrl: { field: 'ProgramUrl',
      type: Sequelize.STRING(200),
      allowNull: false
    },
    bindFlow: { field: 'BindFlow',
      type: Sequelize.CHAR(1),
      allowNull: false
    },
    flowId: { field: 'FlowId',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    systemEncode: { field: 'SystemEncode',
      type: Sequelize.CHAR(1),
      allowNull: false
    },
    beginCode: { field: 'BeginCode',
      type: Sequelize.STRING(10),
      allowNull: false
    },
    connectChar: { field: 'ConnectChar',
      type: Sequelize.STRING(10),
      allowNull: false
    },
    endNoLength: { field: 'EndNoLength',
      type: Sequelize.INTEGER,
      allowNull: false
    },
    encodeRule: { field: 'EncodeRule',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    onlineHelp: { field: 'OnlineHelp',
      type: Sequelize.STRING(100),
      allowNull: false
    },
    logInsert: { field: 'LogInsert',
      type: Sequelize.CHAR(1),
      allowNull: false
    },
    logUpdate: { field: 'LogUpdate',
      type: Sequelize.CHAR(1),
      allowNull: false
    },
    logDelete: { field: 'LogDelete',
      type: Sequelize.CHAR(1),
      allowNull: false
    },
    logPrint: { field: 'LogPrint',
      type: Sequelize.CHAR(1),
      allowNull: false
    },
    logExport: { field: 'LogExport',
      type: Sequelize.CHAR(1),
      allowNull: false
    }
  }, {
    sqlserver,
    tableName: 'ProgramStructure',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "_WA_Sys_BindFlow_30F848ED",
        fields: [
          { name: "BindFlow" },
        ]
      },
      {
        name: "_WA_Sys_Code_30F848ED",
        fields: [
          { name: "Code" },
        ]
      },
      {
        name: "_WA_Sys_IsMenu_30F848ED",
        fields: [
          { name: "IsMenu" },
        ]
      },
      {
        name: "_WA_Sys_ParentId_30F848ED",
        fields: [
          { name: "ParentId" },
        ]
      },
      {
        name: "_WA_Sys_ProgramName_30F848ED",
        fields: [
          { name: "ProgramName" },
        ]
      },
      {
        name: "_WA_Sys_SysNo_30F848ED",
        fields: [
          { name: "SysNo" },
        ]
      },
      {
        name: "PK__ProgramS__4B913AC7457A2B9C",
        unique: true,
        fields: [
          { name: "FlowKey" },
        ]
      },
    ]
  });

