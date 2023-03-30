const Sequelize = require('sequelize');
const sqlserver = require('../../../database/dockerSqlserver')
module.exports = sqlserver.define(
  'FlowStep', {
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
    step: { field: 'Step',
      type: Sequelize.INTEGER,
      allowNull: false
    },
    stepName: { field: 'StepName',
      type: Sequelize.STRING(100),
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
    formTableName: { field: 'Form_tableName',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    resetFlow: { field: 'ResetFlow',
      type: Sequelize.CHAR(1),
      allowNull: false
    },
    canDecided: { field: 'CanDecided',
      type: Sequelize.CHAR(1),
      allowNull: false
    },
    canEditField: { field: 'CanEditField',
      type: Sequelize.STRING(200),
      allowNull: false
    },
    countersign: { field: 'Countersign',
      type: Sequelize.CHAR(50),
      allowNull: false
    },
    isSendMessage: { field: 'IsSendMessage',
      type: Sequelize.CHAR(1),
      allowNull: false
    },
    messageValue: { field: 'MessageValue',
      type: Sequelize.STRING(200),
      allowNull: false
    }
  }, {
    sqlserver,
    tableName: 'FlowSteps',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__FlowStep__4B913AC7331FFAF7",
        unique: true,
        fields: [
          { name: "FlowKey" },
        ]
      },
    ]
  });

