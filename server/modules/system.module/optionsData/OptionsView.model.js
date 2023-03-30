const Sequelize = require('sequelize');
const sqlserver = require('../../../database/dockerSqlserver')
module.exports = sqlserver.define(
  'OptionsView', {
    id: { field: 'id',
      type: Sequelize.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    tableName: { field: 'tableName',
      type: Sequelize.STRING(50),
      allowNull: true
    },
    groups: { field: 'groups',
      type: Sequelize.STRING(50),
      allowNull: true
    },
    value: { field: 'code',
      type: Sequelize.STRING(50),
      allowNull: true
    },
    label: { field: 'label',
      type: Sequelize.STRING(100),
      allowNull: true
    },
    effectDateFrom: { field: 'effectDateFrom',
      type: Sequelize.STRING(10),
      allowNull: true
    },
    effectDateTo: { field: 'effectDateTo',
      type: Sequelize.STRING(10),
      allowNull: true
    }
  }, {
    sqlserver,
    tableName: 'OptionsView',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__OptionsD__3213E83F800CDCAF",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });

