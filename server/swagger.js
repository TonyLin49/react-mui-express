require('dotenv').config();

const doc = {
    info: {
        title: '企業管理系統 API 接口規範',
        description: '提供企業管理系統後端各項資料的接口詳細說明及規範'
    },
    host: `${process.env.IP}:${process.env.PORT}`,
    schemes: ['http'],
    basePath:'/',
}

const outputFile = './swagger_output.json'; // 輸出的文件名稱
const endpointsFiles = [
    './server.js',
    './modules/system.module/system/FileServer.router.js',
    './modules/system.module/user/User.router.js',
    './modules/system.module/employee/Employee.router.js',
    './modules/system.module/department/Department.router.js',
    './modules/flow.module/flow/Flow.router.js',
]; 

const options = {
    openapi: null,          // Enable/Disable OpenAPI. By default is null
    language: 'zh-TW',         // Change response language. By default is 'en-US'
    disableLogs: false,     // Enable/Disable logs. By default is false
    autoHeaders: true,     // Enable/Disable automatic headers capture. By default is true
    autoQuery: true,       // Enable/Disable automatic query capture. By default is true
    autoBody: false         // Enable/Disable automatic body capture. By default is true
}
const swaggerAutogen = require('swagger-autogen');

swaggerAutogen(options)(outputFile, endpointsFiles, doc).then(
    async () => await import('./server.js')
);