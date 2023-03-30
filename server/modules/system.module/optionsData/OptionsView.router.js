const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser');
router.use(bodyParser.json());

const OptionsView = require('./OptionsView.model');
const { findAndCountAllOptions } = require('../../../utils/requestUtil');

const optionsBaseUrl = '/api/options'

router.get(`${optionsBaseUrl}`, async (req, res)=>{
    try {
        const lists = await OptionsView.findAll({where: req.query, order: [['value', 'ASC']]})
        res.send(lists)
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
})

const baseUrl = '/api/optionsView'

router.get(`${baseUrl}s`, async (req, res)=>{
    try {
        const lists = await OptionsView.findAndCountAll(findAndCountAllOptions(req))
        res.send({ success: true, data: lists })
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
})

router.get(`${baseUrl}/:id`, async (req, res)=>{
    try {
        const entity = await OptionsView.findByPk(req.params.id)
        res.send({ success: true, data: entity })
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
})

router.get(`${baseUrl}`, async (req, res)=>{
    try {
        const entity = await OptionsView.findOne({where: req.query})
        res.send({ success: true, data: entity })
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
})

module.exports = router