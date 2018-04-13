import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const invest = r => require.ensure([], () => r(require('../page/invest/invest')), 'invest')
const account = r => require.ensure([], () => r(require('../page/account/account')), 'account')
const news = r => require.ensure([], () => r(require('../page/news/news')), 'news')
const investDetail = r => require.ensure([], () => r(require('../page/investDetail/investDetail')), 'investDetail')

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
    {
      path: '*',
      redirect: '/home'
    }
]
