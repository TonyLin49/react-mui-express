const Sequelize = require('sequelize');
const sqlserver = require('../../../database/dockerSqlserver')
module.exports = sqlserver.define(
  'FlowDetail', {
    id: { field: 'Id',
      type: Sequelize.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    code: { field: 'FlowKey',
      type: Sequelize.STRING(50),
      allowNull: true
    },
    seqNo: { field: 'Seq_no',
      type: Sequelize.INTEGER,
      allowNull: true
    },
    step: { field: 'Step',
      type: Sequelize.INTEGER,
      allowNull: true
    },
    stepName: { field: 'Step_name',
      type: Sequelize.STRING(100),
      allowNull: true
    },
    signerId: { field: 'Signer_id',
      type: Sequelize.STRING(50),
      allowNull: true
    },
    signerName: { field: 'Signer_name',
      type: Sequelize.STRING(50),
      allowNull: true
    },
    signerDepartment: { field: 'Signer_department',
      type: Sequelize.STRING(50),
      allowNull: true
    },
    signedTime: { field: 'Signed_time',
      type: Sequelize.STRING(20),
      allowNull: true
    },
    signedResult: { field: 'Signed_result',
      type: Sequelize.STRING(50),
      allowNull: true
    },
    formTableName: { field: 'Form_tableName',
      type: Sequelize.STRING(50),
      allowNull: true
    },
    memo: { field: 'Memo',
      type: Sequelize.TEXT,
      allowNull: true
    },
  }, {
    sqlserver,
    tableName: 'FlowDetail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__FlowDeta__3214EC07E40F758A",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });

