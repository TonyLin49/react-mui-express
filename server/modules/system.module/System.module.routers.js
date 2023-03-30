const FileServerRouter = require('./system/FileServer.router')
const UserRouter = require('./user/User.router')
const EmployeeRouter = require('./employee/Employee.router')
const DepartmentRouter = require('./department/Department.router')
const CompanyRouter = require('./company/Company.router')
const CategoryRouter = require('./category/Category.router')
const UserCategoryRouter = require('./userCategory/UserCategory.router')
const GroupRouter = require('./group/Group.router')
const ProgramStructureRouter = require('./programStructure/ProgramStructure.router')
const OptionsViewRouter = require('./optionsData/OptionsView.router')
const AuthorityRouter = require('./authority/Authority.router')
const PermissionRouter = require('./permission/Permission.router')
const LogInfoRouter = require('./logInfo/LogInfo.router')
const NoticeRouter = require('./notice/Notice.router')

const SystemRouters = [
    FileServerRouter,
    UserRouter,
    EmployeeRouter,
    DepartmentRouter,
    CompanyRouter,
    CategoryRouter,
    UserCategoryRouter,
    GroupRouter,
    ProgramStructureRouter,
    OptionsViewRouter,
    AuthorityRouter,
    PermissionRouter,
    LogInfoRouter,
    NoticeRouter,
]

module.exports = SystemRouters