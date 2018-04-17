import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const invest = r => require.ensure([], () => r(require('../page/invest/invest')), 'invest')
const account = r => require.ensure([], () => r(require('../page/account/account')), 'account')
const news = r => require.ensure([], () => r(require('../page/news/news')), 'news')
const investDetail = r => require.ensure([], () => r(require('../page/investDetail/investDetail')), 'investDetail')
const tenderRecord = r => require.ensure([], () => r(require('../page/tenderRecord/tenderRecord')), 'tenderRecord')
const projectDetails = r => require.ensure([], () => r(require('../page/projectDetails/projectDetails')), 'projectDetails')
const BorrowerinfoAndRiskManage = r => require.ensure([], () => r(require('../page/BorrowerinfoAndRiskManage/BorrowerinfoAndRiskManage')), 'BorrowerinfoAndRiskManage')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')

const notFound = r => require.ensure([], () => r(require('../staticPage/404/404.vue')), 'notFound')

export default [
    //地址为空时跳转home页面
    {
      path: '',
      redirect: '/home'
    },
    //首页
    {
      path: '/home',
      component: home
    },
    //投资
    {
      path: '/invest',
      component: invest
    },
    //投资详情页
    {
      path: '/investDetail',
      component: investDetail,
    },
    //个人账户
    {
      path: '/account',
      component: account
    },
    //新闻
    {
      path: '/news',
      component: news
    },
    //投资记录
    {
      path: '/tenderRecord',
      component: tenderRecord
    },
    //项目详情
    {
      path: '/projectDetails',
      component: projectDetails
    },
    //投资人信息与风险管理
    {
      path: '/BorrowerinfoAndRiskManage',
      component: BorrowerinfoAndRiskManage
    },
    //登录
    {
      path: '/login',
      component: login
    },
    {
      path: '*',
      component: notFound
    }
]
