const Sequelize = require('sequelize');
const sqlserver = require('../../../database/dockerSqlserver')
module.exports = sqlserver.define(
  'Flow', {
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
    flowId: { field: 'FlowId',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    flowName: { field: 'Flow_name',
      type: Sequelize.STRING(500),
      allowNull: false
    },
    applicantName: { field: 'Applicant_name',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    createTime: { field: 'Create_time',
      type: Sequelize.STRING(20),
      allowNull: false
    },
    srcSignerId: { field: 'SrcSigner_id',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    signerId: { field: 'Signer_id',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    signerName: { field: 'Signer_name',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    closerId: { field: 'Closer_id',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    closerName: { field: 'Closer_name',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    closedTime: { field: 'Closed_time',
      type: Sequelize.STRING(20),
      allowNull: false
    },
    deciderId: { field: 'Decider_id',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    deciderName: { field: 'Decider_name',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    decideTime: { field: 'Decide_time',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    totalSteps: { field: 'Total_steps',
      type: Sequelize.INTEGER,
      allowNull: false
    },
    finishedSteps: { field: 'Finished_steps',
      type: Sequelize.INTEGER,
      allowNull: false
    },
    status: { field: 'Status',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    formTableName: { field: 'Form_tableName',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    closeFlag: { field: 'CloseFlag',
      type: Sequelize.CHAR(1),
      allowNull: false
    },
    draftRight: { field: 'DraftRight',
      type: Sequelize.STRING(50),
      allowNull: false
    }
  }, {
    sqlserver,
    tableName: 'Flow',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "_WA_Sys_Applicant_5BAD9CC8",
        fields: [
          { name: "Applicant" },
        ]
      },
      {
        name: "_WA_Sys_Closed_time_5BAD9CC8",
        fields: [
          { name: "Closed_time" },
        ]
      },
      {
        name: "_WA_Sys_CloseFlag_5BAD9CC8",
        fields: [
          { name: "CloseFlag" },
        ]
      },
      {
        name: "_WA_Sys_Closer_id_5BAD9CC8",
        fields: [
          { name: "Closer_id" },
        ]
      },
      {
        name: "_WA_Sys_Code_5BAD9CC8",
        fields: [
          { name: "Code" },
        ]
      },
      {
        name: "_WA_Sys_CreateDept_5BAD9CC8",
        fields: [
          { name: "CreateDept" },
        ]
      },
      {
        name: "_WA_Sys_Decide_time_5BAD9CC8",
        fields: [
          { name: "Decide_time" },
        ]
      },
      {
        name: "_WA_Sys_DraftRight_5BAD9CC8",
        fields: [
          { name: "DraftRight" },
        ]
      },
      {
        name: "_WA_Sys_Finished_steps_5BAD9CC8",
        fields: [
          { name: "Finished_steps" },
        ]
      },
      {
        name: "_WA_Sys_FlowId_5BAD9CC8",
        fields: [
          { name: "FlowId" },
        ]
      },
      {
        name: "_WA_Sys_Form_tableName_5BAD9CC8",
        fields: [
          { name: "Form_tableName" },
        ]
      },
      {
        name: "_WA_Sys_Signer_id_5BAD9CC8",
        fields: [
          { name: "Signer_id" },
        ]
      },
      {
        name: "_WA_Sys_Signer_name_5BAD9CC8",
        fields: [
          { name: "Signer_name" },
        ]
      },
      {
        name: "_WA_Sys_SrcSigner_id_5BAD9CC8",
        fields: [
          { name: "SrcSigner_id" },
        ]
      },
      {
        name: "_WA_Sys_Status_5BAD9CC8",
        fields: [
          { name: "Status" },
        ]
      },
      {
        name: "_WA_Sys_SysNo_5BAD9CC8",
        fields: [
          { name: "SysNo" },
        ]
      },
      {
        name: "PK__Flow__4B913AC7717477F0",
        unique: true,
        fields: [
          { name: "FlowKey" },
        ]
      },
    ]
  });

