const app = require('./services/Root.service')
require('dotenv').config();

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json')
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

const CodeGenRouter = require('./codeGen/CodeGen.router')
app.use(CodeGenRouter)

const SystemRouters = require('./modules/system.module/System.module.routers')
app.use(SystemRouters)

const FlowRouters = require('./modules/flow.module/Flow.module.routers')
app.use(FlowRouters)

const AccountingRouters = require('./modules/accounting.module/Accounting.module.routers')
app.use(AccountingRouters)

app.listen(process.env.PORT || 5000, process.env.IP, function(){
  console.log(`Express Server is running on ${process.env.IP || 'http://localhost'}:${process.env.PORT || 5000}`);
});