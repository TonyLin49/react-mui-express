const fs = require('fs');

const project_path = __dirname.split('server')[0]
console.log(project_path)

const upperCase = (names) => {
    if(names.indexOf('_')===-1){
        return names.charAt(0).toUpperCase() + names.slice(1);
    } else {
        let nameInfo = names.split('_')
        return nameInfo[0].charAt(0).toUpperCase() + nameInfo[0].slice(1)
             + nameInfo[1].charAt(0).toUpperCase() + nameInfo[1].slice(1);
    }
}

const lowerCase = (names) => {
    if(names.indexOf('_')===-1){
        return names.charAt(0).toLowerCase() + names.slice(1);
    } else {
        let nameInfo = names.split('_')
        return nameInfo[0].charAt(0).toLowerCase() + nameInfo[0].slice(1)
             + nameInfo[1].charAt(0).toUpperCase() + nameInfo[1].slice(1);
    }
}

const createReactMasterApi = (modelName) => {
    let lowerCaseModelName = lowerCase(modelName);

    const sampleFilePath = `${project_path}client/src/code.auto.generate/sample/master/sample.api.js`;
    const newFileDir = `${project_path}client/src/code.auto.generate/code.generated/${lowerCaseModelName}`
    if (!fs.existsSync(newFileDir)) {
        fs.mkdirSync(newFileDir, { recursive: true });
    }
    const newFilePath = `${newFileDir}/${lowerCaseModelName}.api.js`;
  
    fs.readFile(sampleFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
    
        const fileContent = data.replace('sample', lowerCaseModelName);
    
        fs.writeFile(newFilePath, fileContent, (err) => {
            if (err) {
                console.error(err);
                return;
            }
    
            console.log('createReactMasterApi written successfully!');
        });
    });
};

const createExpressRouter = (modelName) => {
    let upperCaseModelName = upperCase(modelName);
    let lowerCaseModelName = lowerCase(modelName);

    const sampleFilePath = `${project_path}server/models.auto/sample/Sample.router.js`;
    const newFilePath = `${project_path}server/models.auto/model.generated/${upperCaseModelName}.router.js`;
  
    fs.readFile(sampleFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
    
        const fileContent = data.replaceAll('sample', lowerCaseModelName)
                                .replaceAll('Sample', upperCaseModelName);
    
        fs.writeFile(newFilePath, fileContent, (err) => {
            if (err) {
                console.error(err);
                return;
            }
    
            console.log('createExpressRouter written successfully!');
        });
    });
};

const createOriginalModel = async (modelName) => {
    const { exec } = require('child_process');

    exec(`TableName=${modelName} yarn createModel`, (err, stdout, stderr) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
    });
};

const createSequelizeModel = (modelName) => {
    let upperCaseModelName = upperCase(modelName);
    const templateFilePath = `${project_path}server/models.auto/model.generated/${upperCaseModelName}.js`
    fs.readFile(templateFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        const fileContent = data.replace('function(sequelize, DataTypes) {', 
                                         'sqlserver.define(')
                                .replace('return sequelize.define(', '')
                                .replaceAll('sequelize','sqlserver')
                                .replaceAll('DataTypes', 'Sequelize')
                                .replaceAll(': {', `: { field: '',`)
                                .replace('};', '')
                                .replace(`require('sqlserver');`,`require('sequelize');`)

        let originalContent = fileContent.toString();
        let lines = originalContent.split('\n');

        let idx = 0
        lines.forEach(line => {
            let fields = line.split(': {')
            if(fields.length>1) {
                let fieldName = fields[0].trim()
                let lowerName = lowerCase(fieldName);
                let newLine = line.replace(fieldName, lowerName)
                                  .replace(`field: ''`, `field: '${fieldName}'`)
                lines.splice(idx, 1, newLine);
            }
            idx++
        });

        let newLine = `const sqlserver = require('../../database/dockerSqlserver')`;
        lines.splice(1, 0, newLine);

        let modifiedContent = lines.join('\n');

        const outputFilePath = `${project_path}server/models.auto/model.generated/${upperCaseModelName}.model.js`
        fs.writeFile(outputFilePath, modifiedContent, (err) => {
            if (err) throw err;
            console.log('createSequelizeModel written successfully!');
        });
    })
}

const getFieldsArray = (filePath, callback) => {
    const fieldsArray = [];
  
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('getFieldsArray', err);
        return callback(err);
      }
  
      const lines = data.split('\n');
      lines.forEach(line => {
        const fields = line.split(': {')
        if (fields.length > 1) {
          const fieldName = fields[0].trim()
          fieldsArray.push(fieldName)
        }
      });
  
      if (typeof callback === 'function') { // Check if callback is a function before calling it
        callback(null, fieldsArray);
      }
    })
}
  

const createReactMasterLocale = (modelName) => {
    let lowerCaseModelName = lowerCase(modelName);
    let upperCaseModelName = upperCase(modelName);

    let modelFilePath = `${project_path}server/models.auto/model.generated/${upperCaseModelName}.js`
    getFieldsArray(modelFilePath, (err, fieldsArray) => {
        if (err) {
            console.error(err);
            return;
        }
    
        let props = []
        fieldsArray.forEach(fieldName => {
            let lowerFieldName = lowerCase(fieldName);
            let upperFieldName = upperCase(fieldName);
            if (fieldName.toLowerCase() !== 'flowkey'
                        && fieldName.toLowerCase() !== 'id') {
                let prop = `        ${lowerFieldName}: {"label": "${upperFieldName}"},`
                props.push(prop)
            }
        })

        const sampleFilePath = `${project_path}client/src/code.auto.generate/sample/master/sample.locale.js`;
        const newFileDir = `${project_path}client/src/code.auto.generate/code.generated/${lowerCaseModelName}`
        if (!fs.existsSync(newFileDir)) {
            fs.mkdirSync(newFileDir, { recursive: true });
        }
        const newFilePath = `${newFileDir}/${lowerCaseModelName}.locale.js`;
  
        fs.readFile(sampleFilePath, 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
    
            const fileContent = data.replaceAll('sample', lowerCaseModelName)
                                .replaceAll('Sample', upperCaseModelName)
                                .replaceAll('props: {}', props.join('\n').toString());
    
            fs.writeFile(newFilePath, fileContent, (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
    
                console.log('createReactMasterLocale written successfully!');
            }); 
        });
    });
}

const createReactMasterForm = (modelName) => {
    let lowerCaseModelName = lowerCase(modelName);
    let upperCaseModelName = upperCase(modelName);

    let modelFilePath = `${project_path}server/models.auto/model.generated/${upperCaseModelName}.js`
    getFieldsArray(modelFilePath, (err, fieldsArray) => {
        if (err) {
          console.error(err);
          return;
        }
    
        let props = []
        fieldsArray.forEach(fieldName => {
            let lowerFieldName = lowerCase(fieldName);
            let upperFieldName = upperCase(fieldName)
            let fieldType = 'TEXT_FIELD'
            let options = ''
            if (fieldName.toLowerCase() !== 'createdept'
                    && fieldName.toLowerCase() !== 'applicant'
                        && fieldName.toLowerCase() !== 'flowkey'
                            && fieldName.toLowerCase() !== 'sysno'
                                && fieldName.toLowerCase() !== 'code'
                                    && fieldName.toLowerCase() !== 'id') {
                if(fieldName.toLowerCase().indexOf('date')!==-1
                        || fieldName.toLowerCase().indexOf('day')!==-1) {
                    fieldType = 'DATE_FIELD'
                }
                if(fieldName.toLowerCase().startsWith('can')
                        || fieldName.toLowerCase().startsWith('is')) {
                    fieldType = 'CHECKBOX_FIELD'
                }
                if(fieldName.toLowerCase().indexOf('type')!==-1
                    || fieldName.toLowerCase().indexOf('dept')!==-1
                        || fieldName.toLowerCase()==='assistant'
                            || fieldName.toLowerCase()==='helper'
                                || fieldName.toLowerCase()==='sponsor'
                                    || fieldName.toLowerCase()==='empid') {
                    fieldType = 'AUTOCOMPLETE_FIELD'
                    if(fieldName.toLowerCase().indexOf('type')!==-1){
                        options = `
            options: groupUserCategories['${upperFieldName}'],`
                    }
                    if(fieldName.toLowerCase().indexOf('dept')!==-1){
                        options = `
            options: deptOptions,`
                    }
                    if(fieldName.toLowerCase()==='assistant'
                        || fieldName.toLowerCase()==='helper'
                            || fieldName.toLowerCase()==='sponsor'
                                || fieldName.toLowerCase()==='empid') {
                        options = `
            options: empOptions,`
                    }
                }
                let prop = `        {
            name: '${lowerFieldName}', 
            label: lan?.${lowerFieldName}?.label,
            fieldType: FIELD_TYPE.${fieldType}, 
            defaultValue: '',
            props: {...fieldProps},${options}
            xs:6, sm:6, md:6,
        },`
            props.push(prop)
          }
        })

        const sampleFilePath = `${project_path}client/src/code.auto.generate/sample/master/SampleForm.jsx`;
        const newFileDir = `${project_path}client/src/code.auto.generate/code.generated/${lowerCaseModelName}`
        if (!fs.existsSync(newFileDir)) {
            fs.mkdirSync(newFileDir, { recursive: true });
        }
        const newFilePath = `${newFileDir}/${upperCaseModelName}Form.jsx`;
  
        fs.readFile(sampleFilePath, 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
    
            const fileContent = data.replaceAll('sample', lowerCaseModelName)
                                .replaceAll('Sample', upperCaseModelName)
                                .replaceAll(`{fieldsSchemaSettings:''}`, props.join('\n').toString());
    
            fs.writeFile(newFilePath, fileContent, (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
    
                console.log('createReactMasterForm written successfully!');
            }); 
        });
    });
}

const createReactMastersTable = (modelName) => {
    let lowerCaseModelName = lowerCase(modelName);
    let upperCaseModelName = upperCase(modelName);

    let modelFilePath = `${project_path}server/models.auto/model.generated/${upperCaseModelName}.js`
    getFieldsArray(modelFilePath, (err, fieldsArray) => {
        if (err) {
          console.error(err);
          return;
        }
    
        let props = []
        fieldsArray.forEach(fieldName => {
            let lowerFieldName = lowerCase(fieldName);
            let upperFieldName = upperCase(fieldName)
            if (fieldName.toLowerCase() !== 'createdept'
                    && fieldName.toLowerCase() !== 'applicant'
                        && fieldName.toLowerCase() !== 'flowkey'
                            && fieldName.toLowerCase() !== 'sysno'
                                && fieldName.toLowerCase() !== 'code'
                                    && fieldName.toLowerCase() !== 'id') {
                let cellSetting = ``
                if(lowerFieldName.startsWith('can')
                        || lowerFieldName.startsWith('is')) {
                    cellSetting = `   
    Cell: ({row})=><IsCheck value={row.original?.${lowerFieldName}} />,`
                }
                if(fieldName.toLowerCase().indexOf('dept')!==-1){
                    cellSetting =  `   
    Cell: ({row})=>handleShowCellContent(row.original?.${lowerFieldName}, deptOptions)`
                }
                if(fieldName.toLowerCase()==='assistant'
                    || fieldName.toLowerCase()==='sponsor'
                        || fieldName.toLowerCase()==='helper'
                            || fieldName.toLowerCase()==='empid'
                                || fieldName.toLowerCase()==='agent'){
                    cellSetting =  `   
    Cell: ({row})=>handleShowCellContent(row.original?.${lowerFieldName}, empOptions)`
                }
                if(fieldName.toLowerCase().indexOf('type')!==-1){
                    cellSetting =  `   
    Cell: ({row})=>handleShowCellContent(row.original?.${lowerFieldName}, groupUserCategories['${upperFieldName}'])`
                }
                let prop = `    { accessorKey:'${lowerFieldName}', header:lan?.${lowerFieldName}?.label, size:100, ${cellSetting}},`
                props.push(prop)
            }
        })

        const sampleFilePath = `${project_path}client/src/code.auto.generate/sample/master/SamplesTable.jsx`;
        const newFileDir = `${project_path}client/src/code.auto.generate/code.generated/${lowerCaseModelName}`
        if (!fs.existsSync(newFileDir)) {
            fs.mkdirSync(newFileDir, { recursive: true });
        }
        const newFilePath = `${newFileDir}/${upperCaseModelName}sTable.jsx`;
  
        fs.readFile(sampleFilePath, 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
    
            const fileContent = data.replaceAll('sample', lowerCaseModelName)
                                .replaceAll('Sample', upperCaseModelName)
                                .replaceAll(`{columnsDef: ''}`, props.join('\n').toString());
    
            fs.writeFile(newFilePath, fileContent, (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
    
                console.log('createReactMastersTable written successfully!');
            }); 
        });
    });
}

module.exports = {
    project_path,
    createOriginalModel,
    createExpressRouter,
    createReactMasterApi,
    createReactMasterLocale,
    createSequelizeModel,
    createReactMasterForm,
    createReactMastersTable,
}