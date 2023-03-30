const Sequelize = require('sequelize');
const sqlserver = require('../../../database/dockerSqlserver')
module.exports = sqlserver.define(
  'UserCategory', {
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
    names: { field: 'Names',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    groupCode: { field: 'GroupCode',
      type: Sequelize.STRING(50),
      allowNull: true
    },
    parentId: { field: 'ParentId',
      type: Sequelize.STRING(50),
      allowNull: true
    },
    rate: { field: 'Rate',
      type: Sequelize.DECIMAL(18,6),
      allowNull: true,
      set(value) {
        if(isNaN(value) || value.length===0)
          this.setDataValue('rate', 0);
        else 
          this.setDataValue('rate', parseFloat(value));
      },
    },
    dateFrom: { field: 'DateFrom',
      type: Sequelize.STRING(10),
      allowNull: true
    },
    dateTo: { field: 'DateTo',
      type: Sequelize.STRING(10),
      allowNull: true
    },
    assistants: { field: 'Assistants',
      type: Sequelize.STRING(50),
      allowNull: true
    },
    sponsor: { field: 'Sponsor',
      type: Sequelize.STRING(50),
      allowNull: true
    },
    controler: { field: 'Controler',
      type: Sequelize.STRING(50),
      allowNull: true
    },
    accountsC: { field: 'Accounts_C',
      type: Sequelize.STRING(50),
      allowNull: true
    },
    groupControl: { field: 'GroupControl',
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    memo: { field: 'Memo',
      type: Sequelize.STRING(100),
      allowNull: true
    },
    crossFlag: { field: 'CrossFlag',
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    effectMonth: { field: 'EffectMonth',
      type: Sequelize.INTEGER,
      allowNull: true
    },
    accountsD: { field: 'Accounts_D',
      type: Sequelize.STRING(50),
      allowNull: true
    }
  }, {
    sqlserver,
    tableName: 'UserCategory',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "_WA_Sys_Accounts_C_4D94879B",
        fields: [
          { name: "Accounts_C" },
        ]
      },
      {
        name: "_WA_Sys_Accounts_D_4D94879B",
        fields: [
          { name: "Accounts_D" },
        ]
      },
      {
        name: "_WA_Sys_Assistants_4D94879B",
        fields: [
          { name: "Assistants" },
        ]
      },
      {
        name: "_WA_Sys_Code_4D94879B",
        fields: [
          { name: "Code" },
        ]
      },
      {
        name: "_WA_Sys_Controler_4D94879B",
        fields: [
          { name: "Controler" },
        ]
      },
      {
        name: "_WA_Sys_CrossFlag_4D94879B",
        fields: [
          { name: "CrossFlag" },
        ]
      },
      {
        name: "_WA_Sys_DateFrom_4D94879B",
        fields: [
          { name: "DateFrom" },
        ]
      },
      {
        name: "_WA_Sys_DateTo_4D94879B",
        fields: [
          { name: "DateTo" },
        ]
      },
      {
        name: "_WA_Sys_GroupCode_4D94879B",
        fields: [
          { name: "GroupCode" },
        ]
      },
      {
        name: "_WA_Sys_Memo_4D94879B",
        fields: [
          { name: "Memo" },
        ]
      },
      {
        name: "_WA_Sys_Names_4D94879B",
        fields: [
          { name: "Names" },
        ]
      },
      {
        name: "_WA_Sys_ParentId_4D94879B",
        fields: [
          { name: "ParentId" },
        ]
      },
      {
        name: "_WA_Sys_Sponsor_4D94879B",
        fields: [
          { name: "Sponsor" },
        ]
      },
      {
        name: "_WA_Sys_SysNo_4D94879B",
        fields: [
          { name: "SysNo" },
        ]
      },
      {
        name: "PK__UserCate__4B913AC70DB9D2AF",
        unique: true,
        fields: [
          { name: "FlowKey" },
        ]
      },
    ]
  });

