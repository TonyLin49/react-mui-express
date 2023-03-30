const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path');

const { project_path } = require('../../../codeGen/codeGenUtil')
//console.log('project_path', project_path)

const baseUrl = '/api'

router.post(`${baseUrl}/upload/files`, (req, res) => {
    if (req.files === null) {
      return res.status(400).json({ msg: 'no upload file' });
    }
    const file = req.files.file;
    file.mv(`${project_path}/server/uploads/files/${file.name}`, err => {
      if (err) {
        return res.status(500).send(err);
      }
      res.json({ fileName: file.name, filePath: `/download/${file.name}` });
    });
});

router.post(`${baseUrl}/upload/images`, (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'no upload file' });
  }
  const _fileName = Object.keys(req.files)[0]
  const file = req.files.file || req.files[_fileName];
  const _subName = file.name.split('.')[1]
  file.mv(`${project_path}/client/public/images/${_fileName}.${_subName}`, err => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ fileName: file.name, filePath: `/images/${_fileName}.${_subName}` });
  });
});

router.post(`${baseUrl}/upload/avatar`, (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'no upload file' });
  }
  const _fileName = Object.keys(req.files)[0]
  const file = req.files.file || req.files[_fileName];
  const _subName = file.name.split('.')[1]
  file.mv(`${project_path}/client/public/avatars/${_fileName}.${_subName}`, err => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ fileName: file.name, filePath: `/avatars/${_fileName}.${_subName}` });
  });
});

router.post(`${baseUrl}/upload/signature`, (req, res) => {
  if (req.files.signature === null) {
    return res.status(400).json({ msg: 'no upload file' });
  }

  const file = req.files.signature;
  const dirPath = path.join(project_path, 'client', 'public', 'signatures');
  const filePath = path.join(dirPath, file.name);

  // Create the directory if it doesn't exist
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  // Write the file to the signatures directory
  fs.writeFile(filePath, file.data, (err) => {
    if (err) {
      console.log(`fs.writeFile(${filePath}).error: `, err);
      return res.status(500).send(err);
    }
    res.json({ fileName: file.name, filePath: `/signatures/${file.name}` });
  });
});

router.get(`${baseUrl}/download/:fileName`, (req, res)=>{
    res.download('../client/public/uploads/'+req.params.fileName)
})

module.exports = router