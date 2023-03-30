const Sequelize = require('sequelize');
const sqlserver = require('../../../database/dockerSqlserver')
module.exports = sqlserver.define(
  'Group', {
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
    leader: { field: 'Leader',
      type: Sequelize.STRING(50),
      allowNull: false
    }
  }, {
    sqlserver,
    tableName: 'Groups',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "_WA_Sys_Code_15502E78",
        fields: [
          { name: "Code" },
        ]
      },
      {
        name: "_WA_Sys_Leader_15502E78",
        fields: [
          { name: "Leader" },
        ]
      },
      {
        name: "_WA_Sys_SysNo_15502E78",
        fields: [
          { name: "SysNo" },
        ]
      },
      {
        name: "PK__Groups__4B913AC708B8F8BC",
        unique: true,
        fields: [
          { name: "FlowKey" },
        ]
      },
    ]
  });

