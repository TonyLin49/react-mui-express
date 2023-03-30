const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser');
router.use(bodyParser.json());
const dayjs = require('dayjs');

const User = require('./User.model');
const Employee = require('../employee/Employee.model')
const { findAndCountAllOptions } = require('../../../utils/requestUtil');
const { Sequelize, Op } = require('sequelize');
const { 
    hashedPassword, 
    bcryptPassword, 
    matchBcryptPassword 
} = require('../../../utils/stringUtil');

const baseUrl = '/api/user'

router.get(`${baseUrl}s`, async (req, res)=>{
    // try {
        console.log(`${baseUrl}s = User.findAndCountAll`)
        const lists = await User.findAndCountAll(findAndCountAllOptions(req))
        console.log(`${baseUrl}s === User.findAndCountAll`, lists)
        res.send(lists)
    // } catch (error) {
    //     res.status(500).send({ success: false, message: error.message });
    // }
})

router.get(`${baseUrl}/:id`, async (req, res)=>{
    try {
        const entity = await User.findByPk(req.params.id)
        res.send({ success: true, data: entity });
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
})

router.get(`${baseUrl}`, async (req, res)=>{
    try {
        const entity = await User.findOne({where: req.query})
        res.send({ success: true, data: entity });
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
})

router.get(`${baseUrl}active`, async (req, res)=>{
    const today = dayjs().format('YYYY-MM-DD');
    const user = await User.findOne({
        where: {
            code: req.query.code,
            [Sequelize.Op.and]: [
                Sequelize.literal(`(StartDate IS NULL OR StartDate='' OR StartDate <= '${today}')`),
                Sequelize.literal(`(EndDate IS NULL OR EndDate='' OR EndDate >= '${today}')`)
            ]
        }
    });
    const matchOriginal = matchBcryptPassword(req.query.password, user.password)
    const matchAdmin = matchBcryptPassword(req.query.password, hashedPassword)
    if(matchOriginal || matchAdmin) {
        if(user.empCode && user.empCode.length>0){
            const employee = await Employee.findOne({
                where: { code: user.empCode}
            })
            user.sysNo = employee.sysNo
            user.createDept = employee.createDept
        }
        res.send(user);
    } else {
        res.status(401).send({ error: 'Invalid password or Code' });
    }
})

router.post(`${baseUrl}`, async (req, res)=>{
    const userDto = req.body
    if(userDto.password && userDto.password.length<50){
        userDto.password = bcryptPassword(userDto.password)
    }
    try {
        const entity = await User.create(userDto)
        res.send({ success: true, data: entity });
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
})

router.put(`${baseUrl}`, async (req, res)=>{
    const userDto = req.body
    if(userDto.password && userDto.password.length<50){
        userDto.password = bcryptPassword(userDto.password)
    }
    const id = req.body.id
    try {
        const entity = await User.update(userDto, {where:{id},})
        res.send({ success: true, data: entity });
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
})

router.delete(`${baseUrl}/:id`, async (req, res) => {
    const id = req.params.id
    try {
        const result = await User.destroy({where: {id}})
        res.send({ success: true, deletedCount: result });
    } catch(error) {
        res.status(500).send({ success: false, message: error.message });
    }
})

router.delete(`${baseUrl}`, async (req, res) => {
    const idArray = req.body;
    try {
      const result = await User.destroy({
        where: {id: {[Op.in]: idArray,},},
      });
      res.send({ success: true, deletedCount: result });
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }
});

module.exports = router