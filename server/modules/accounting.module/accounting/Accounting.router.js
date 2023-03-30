const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser');
router.use(bodyParser.json());

const Entity = require('./Accounting.model');
const { findAndCountAllOptions } = require('../../../utils/requestUtil');
const { Op } = require('sequelize');

const baseUrl = '/api/accounting'

router.get(`${baseUrl}s`, async (req, res)=>{
    try {
        const lists = await Entity.findAndCountAll(findAndCountAllOptions(req))
        res.send(lists)
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
})

router.get(`${baseUrl}/:id`, async (req, res)=>{
    try {
        const entity = await Entity.findByPk(req.params.id)
        res.send({ success: true, data: entity });
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
})

router.get(`${baseUrl}`, async (req, res)=>{
    try {
        const entity = await Entity.findOne({where: req.query})
        res.send({ success: true, data: entity });
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
})

router.post(`${baseUrl}`, async (req, res)=>{
    const entityDto = req.body
    try {
        const entity = await Entity.create(entityDto)
        res.send({ success: true, data: entity });
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
})

router.put(`${baseUrl}`, async (req, res)=>{
    const entityDto = req.body
    const id = entityDto.id
    try {
        const entity = await Entity.update(entityDto, {where:{id},})
        res.send({ success: true, data: entity });
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
})

router.delete(`${baseUrl}/:id`, async (req, res) => {
    const id = req.params.id
    try {
        const result = await Entity.destroy({where: {id}})
        res.send({ success: true, deletedCount: result });
    } catch(error) {
        res.status(500).send({ success: false, message: error.message });
    }
})

router.delete(`${baseUrl}`, async (req, res) => {
    const idArray = req.body;
    try {
      const result = await Entity.destroy({
        where: {id: {[Op.in]: idArray,},},
      });
      res.send({ success: true, deletedCount: result });
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }
});

module.exports = router