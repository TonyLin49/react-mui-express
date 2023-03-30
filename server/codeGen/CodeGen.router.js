const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser');
const { 
    createOriginalModel, 
    createSequelizeModel, 
    createExpressRouter,
    createReactMasterApi, 
    createReactMasterLocale,
    createReactMasterForm,
    createReactMastersTable,
} = require('./codeGenUtil');
router.use(bodyParser.json());

router.get('/api/createOriginalModel/:modelName', (req, res)=>{
  createOriginalModel(req.params.modelName)
  res.send('create success')
})

router.get('/api/createServerCode/:modelName', (req, res)=>{
    createSequelizeModel(req.params.modelName)
    createExpressRouter(req.params.modelName)
    res.send('create success')
})

router.get('/api/createReactCode/:modelName', (req, res)=>{
    createReactMasterApi(req.params.modelName)
    createReactMasterLocale(req.params.modelName)
    createReactMasterForm(req.params.modelName)
    createReactMastersTable(req.params.modelName)
    res.send('create success')
})

module.exports = router