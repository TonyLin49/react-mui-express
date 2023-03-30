const Sequelize = require('sequelize');
const sqlserver = require('../../../database/dockerSqlserver')
module.exports = sqlserver.define(
  'Employee', {
    id: { field: 'flowKey',
      type: Sequelize.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    createDept: { field: 'createDept',
      type: Sequelize.STRING(50),
      defaultValue: '',
      allowNull: false
    },
    applicant: { field: 'applicant',
      type: Sequelize.STRING(50),
      defaultValue: '',
      allowNull: false
    },
    empName: { field: 'empName',
      type: Sequelize.STRING(50),
      defaultValue: '',
      allowNull: false
    },
    idType: { field: 'idType',
      type: Sequelize.STRING(50),
      defaultValue: '',
      allowNull: true
    },
    idNo: { field: 'idNo',
      type: Sequelize.STRING(12),
      defaultValue: '',
      allowNull: true
    },
    deptId: { field: 'deptId',
      type: Sequelize.STRING(50),
      defaultValue: '',
      allowNull: true
    },
    agent: { field: 'agent',
      type: Sequelize.STRING(50),
      defaultValue: '',
      allowNull: true
    },
    tel: { field: 'tel',
      type: Sequelize.STRING(50),
      defaultValue: '',
      allowNull: true
    },
    mobile: { field: 'mobile',
      type: Sequelize.STRING(50),
      defaultValue: '',
      allowNull: true
    },
    email: { field: 'email',
      type: Sequelize.STRING(50),
      defaultValue: '',
      allowNull: true
    },
    address: { field: 'address',
      type: Sequelize.STRING(100),
      defaultValue: '',
      allowNull: true
    },
    jobTitle: { field: 'jobTitle',
      type: Sequelize.STRING(50),
      defaultValue: '',
      allowNull: true
    },
    onBoardDate: { field: 'onBoardDate',
      type: Sequelize.STRING(20),
      defaultValue: '',
      allowNull: true
    },
    leavesDate: { field: 'leavesDate',
      type: Sequelize.STRING(20),
      defaultValue: '',
      allowNull: true
    },
    birthday: { field: 'birthday',
      type: Sequelize.STRING(10),
      defaultValue: '',
      allowNull: true
    },
    jobDegree: { field: 'jobDegree',
      type: Sequelize.STRING(50),
      defaultValue: '',
      allowNull: true
    },
    salaryLevel: { field: 'salaryLevel',
      type: Sequelize.STRING(50),
      defaultValue: '',
      allowNull: true
    },
    sysNo: { field: 'sysNo',
      type: Sequelize.STRING(50),
      defaultValue: '',
      allowNull: true
    },
    code: { field: 'code',
      type: Sequelize.STRING(50),
      allowNull: true,
      defaultValue: '',
      unique: true
    },
    hourlyWage: { field: 'hourlyWage',
      type: Sequelize.DECIMAL(18,2),
      allowNull: true,
      set(value) {
        if(isNaN(value) || value.length===0)
          this.setDataValue('hourlyWage', 0);
        else 
          this.setDataValue('hourlyWage', parseFloat(value));
      },
    },
    groupType: { field: 'groupType',
      type: Sequelize.STRING(50),
      defaultValue: '',
      allowNull: true
    },
    leader: { field: 'leader',
      type: Sequelize.STRING(50),
      defaultValue: '',
      allowNull: true
    },
    isHeads: { field: 'isHeads',
      type: Sequelize.CHAR(1),
      defaultValue: 'N',
      allowNull: true
    },
    agentDept: { field: 'agentDept',
      type: Sequelize.STRING(50),
      defaultValue: '',
      allowNull: true
    }
  }, {
    sqlserver,
    tableName: 'Employee',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "_WA_Sys_Agent_0EA330E9",
        fields: [
          { name: "agent" },
        ]
      },
      {
        name: "_WA_Sys_Applicant_0EA330E9",
        fields: [
          { name: "applicant" },
        ]
      },
      {
        name: "_WA_Sys_Code_0EA330E9",
        fields: [
          { name: "code" },
        ]
      },
      {
        name: "_WA_Sys_DeptId_0EA330E9",
        fields: [
          { name: "deptId" },
        ]
      },
      {
        name: "_WA_Sys_EmpName_0EA330E9",
        fields: [
          { name: "empName" },
        ]
      },
      {
        name: "_WA_Sys_GroupType_0EA330E9",
        fields: [
          { name: "groupType" },
        ]
      },
      {
        name: "_WA_Sys_IdNo_0EA330E9",
        fields: [
          { name: "idNo" },
        ]
      },
      {
        name: "_WA_Sys_JobTitle_0EA330E9",
        fields: [
          { name: "jobTitle" },
        ]
      },
      {
        name: "_WA_Sys_Leader_0EA330E9",
        fields: [
          { name: "leader" },
        ]
      },
      {
        name: "_WA_Sys_LeavesDate_0EA330E9",
        fields: [
          { name: "leavesDate" },
        ]
      },
      {
        name: "_WA_Sys_OnBoardDate_0EA330E9",
        fields: [
          { name: "onBoardDate" },
        ]
      },
      {
        name: "_WA_Sys_SysNo_0EA330E9",
        fields: [
          { name: "sysNo" },
        ]
      },
      {
        name: "PK__Employee__4B913AC754E50822",
        unique: true,
        fields: [
          { name: "flowKey" },
        ]
      },
    ]
  });

