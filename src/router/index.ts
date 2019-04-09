import * as Koa from 'koa'
import Router from 'koa-router'
import userController from '../controllers/user.controller'

const routerOpts: Router.IRouterOptions = { prefix: '/api' }
const router: Router = new Router(routerOpts)

router
  .get('/', async (ctx: Koa.Context) => {
    ctx.body = 'GET ALL'
  })
  .post('/login', userController.postLogin) // 登录
  .post('/signup', userController.createUser) // 注册
  .get('/user', userController.getUserInfo) // 获取用户信息

export default router
