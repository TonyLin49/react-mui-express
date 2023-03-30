const Sequelize = require('sequelize');
const sqlserver = require('../../../database/dockerSqlserver')
module.exports = sqlserver.define(
  'Company', {
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
    vatNo: { field: 'VatNo',
      type: Sequelize.STRING(20),
      allowNull: false
    },
    taxNo: { field: 'TaxNo',
      type: Sequelize.STRING(20),
      allowNull: false
    },
    names: { field: 'Names',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    invoiceAddress: { field: 'InvoiceAddress',
      type: Sequelize.STRING(100),
      allowNull: false
    },
    englishName: { field: 'EnglishName',
      type: Sequelize.STRING(100),
      allowNull: false
    },
    englishAddress: { field: 'EnglishAddress',
      type: Sequelize.STRING(100),
      allowNull: false
    },
    responsiblePersons: { field: 'ResponsiblePersons',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    tel: { field: 'Tel',
      type: Sequelize.STRING(20),
      allowNull: false
    },
    fax: { field: 'Fax',
      type: Sequelize.STRING(20),
      allowNull: false
    },
    isGeneralLedger: { field: 'IsGeneralLedger',
      type: Sequelize.CHAR(1),
      allowNull: false
    },
    taxOrgNo: { field: 'TaxOrgNo',
      type: Sequelize.STRING(20),
      allowNull: false
    }
  }, {
    sqlserver,
    tableName: 'Company',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "_WA_Sys_Code_07020F21",
        fields: [
          { name: "Code" },
        ]
      },
      {
        name: "_WA_Sys_IsGeneralLedger_07020F21",
        fields: [
          { name: "IsGeneralLedger" },
        ]
      },
      {
        name: "_WA_Sys_SysNo_07020F21",
        fields: [
          { name: "SysNo" },
        ]
      },
      {
        name: "PK__Company__4B913AC7A1161D20",
        unique: true,
        fields: [
          { name: "FlowKey" },
        ]
      },
    ]
  });

