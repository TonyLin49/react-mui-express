const { Op } = require("sequelize");

const findAndCountAllOptions = (req) => {
  const page = parseInt(req.query.page) || 0;
  const size = parseInt(req.query.size) || 10;
  const filters = JSON.parse(req.query.filters) || [];
  let sorting = JSON.parse(req.query.sorting) || [];
  if(sorting.length===0){
    sorting = [{id: "code",desc: true}]
  }
  const options = {
    where: {
      [Op.and]: filters.map(filter => ({
        [filter.id]: {
          [Op.like]: `%${filter.value}%`
        }
      })),
    },
    limit: size,
    offset: page * size,
    order: sorting.map(sort => [sort.id, sort.desc ? 'DESC' : 'ASC'])
  };
  return options
}


module.exports = { findAndCountAllOptions, ...module.exports }