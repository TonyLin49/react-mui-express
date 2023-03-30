const Sequelize = require('sequelize');
const sqlserver = require('../../../database/dockerSqlserver')
module.exports = sqlserver.define(
  'Department', {
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
    deptName: { field: 'DeptName',
      type: Sequelize.STRING(50),
      allowNull: true
    },
    parentId: { field: 'ParentId',
      type: Sequelize.STRING(50),
      allowNull: true
    },
    heads: { field: 'Heads',
      type: Sequelize.STRING(50),
      allowNull: true
    },
    deptCode: { field: 'DeptCode',
      type: Sequelize.STRING(50),
      allowNull: true
    },
    canApprove: { field: 'CanApprove',
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    budgetControler: { field: 'BudgetControler',
      type: Sequelize.STRING(50),
      allowNull: true
    },
    subDeptFlag: { field: 'SubDeptFlag',
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    company: { field: 'Company',
      type: Sequelize.STRING(50),
      allowNull: true
    },
    sysNo: { field: 'SysNo',
      type: Sequelize.STRING(50),
      allowNull: true
    },
    code: { field: 'Code',
      type: Sequelize.STRING(50),
      allowNull: true
    },
    orderKey: { field: 'OrderKey',
      type: Sequelize.STRING(10),
      allowNull: true
    },
    isBudgetControl: { field: 'IsBudgetControl',
      type: Sequelize.CHAR(1),
      allowNull: true
    }
  }, {
    sqlserver,
    tableName: 'Department',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "_WA_Sys_BudgetControler_0CBAE877",
        fields: [
          { name: "BudgetControler" },
        ]
      },
      {
        name: "_WA_Sys_Code_0CBAE877",
        fields: [
          { name: "Code" },
        ]
      },
      {
        name: "_WA_Sys_Company_0CBAE877",
        fields: [
          { name: "Company" },
        ]
      },
      {
        name: "_WA_Sys_DeptName_0CBAE877",
        fields: [
          { name: "DeptName" },
        ]
      },
      {
        name: "_WA_Sys_Heads_0CBAE877",
        fields: [
          { name: "Heads" },
        ]
      },
      {
        name: "_WA_Sys_ParentId_0CBAE877",
        fields: [
          { name: "ParentId" },
        ]
      },
      {
        name: "_WA_Sys_SysNo_0CBAE877",
        fields: [
          { name: "SysNo" },
        ]
      },
      {
        name: "PK__Departme__4B913AC7FFED610E",
        unique: true,
        fields: [
          { name: "FlowKey" },
        ]
      },
    ]
  });

