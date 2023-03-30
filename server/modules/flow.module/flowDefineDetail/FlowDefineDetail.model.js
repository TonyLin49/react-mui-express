const Sequelize = require('sequelize');
const sqlserver = require('../../../database/dockerSqlserver')
module.exports = sqlserver.define(
  'FlowDefineDetail', {
    id: { field: 'Id',
      type: Sequelize.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    code: { field: 'FlowKey',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    seqNo: { field: 'Seq_no',
      type: Sequelize.INTEGER,
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
    signType: { field: 'SignType',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    signValue: { field: 'SignValue',
      type: Sequelize.STRING(50),
      allowNull: false
    },
    isNecessary: { field: 'IsNecessary',
      type: Sequelize.CHAR(1),
      allowNull: false
    },
    canDecided: { field: 'CanDecided',
      type: Sequelize.CHAR(1),
      allowNull: false
    },
    defaultSkip: { field: 'DefaultSkip',
      type: Sequelize.CHAR(1),
      allowNull: false
    },
    skipValue: { field: 'SkipValue',
      type: Sequelize.STRING(200),
      allowNull: false
    },
    decidedValue: { field: 'DecidedValue',
      type: Sequelize.STRING(200),
      allowNull: false
    },
    resetFlow: { field: 'ResetFlow',
      type: Sequelize.CHAR(1),
      allowNull: false
    },
    canEditField: { field: 'CanEditField',
      type: Sequelize.STRING(200),
      allowNull: false
    },
    countersign: { field: 'Countersign',
      type: Sequelize.STRING(50),
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
    tableName: 'FlowDefine_detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__FlowDefi__3214EC073FCF584B",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });

