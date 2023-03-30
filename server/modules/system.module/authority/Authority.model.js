const Sequelize = require('sequelize');
const sqlserver = require('../../../database/dockerSqlserver')
module.exports = sqlserver.define(
  'Authority', {
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
      type: Sequelize.STRING(200),
      allowNull: false
    },
    authorityType: { field: 'AuthorityType',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    typeValue: { field: 'TypeValue',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    extendsValue: { field: 'ExtendsValue',
      type: Sequelize.STRING(200),
      allowNull: false
    }
  }, {
    sqlserver,
    tableName: 'Authority',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Authorit__4B913AC7DE82059E",
        unique: true,
        fields: [
          { name: "FlowKey" },
        ]
      },
    ]
  });

