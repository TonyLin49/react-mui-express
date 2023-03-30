const FlowRouter = require('./flow/Flow.router')
const FlowDefineRoutr = require('./flowDefine/FlowDefine.router')
const FlowStepRouter = require('./flowStep/FlowStep.router')
const FlowDetailRouter = require('./flowDetail/FlowDetail.router')
const SponsorRouter = require('./sponsor/Sponsor.router')
const SponsorTransRouter = require('./sponsorTrans/SponsorTrans.router')
const JobAgentRouter = require('./jobAgent/JobAgent.router')
const CancelSignRouter = require('./cancelSign/CancelSign.router')

const FlowRouters = [
    FlowRouter,
    FlowDefineRoutr,
    SponsorRouter,
    SponsorTransRouter,
    JobAgentRouter,
    CancelSignRouter,
    FlowStepRouter,
    FlowDetailRouter,
]

module.exports = FlowRouters