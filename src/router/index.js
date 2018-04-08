import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')

export default [{
  path: '/',
  component: App, //顶层路由，对应index.html
  children: [ //二级路由。对应App.vue
    //地址为空时跳转home页面
    {
      path: '',
      redirect: '/home'
    },
    //投资
    {
      path: '/invest',
      component: invest
    },
    //首页
    {
      path: '/account',
      component: account
    },
  ]
}]
