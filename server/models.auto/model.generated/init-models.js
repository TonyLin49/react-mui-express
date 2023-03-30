var DataTypes = require("sequelize").DataTypes;
var _FlowDefine_detail = require("./FlowDefine_detail");

function initModels(sequelize) {
  var FlowDefine_detail = _FlowDefine_detail(sequelize, DataTypes);


  return {
    FlowDefine_detail,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
