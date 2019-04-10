import * as Koa from 'koa'
import userModel from '../model/user.model'

export default class userController {
  static login(ctx: Koa.Context) {
    ctx.body = 'postLogin'
  }
  static register(ctx: Koa.Context) {
    ctx.body = 'createUser'
  }
  static getUserInfo(ctx: Koa.Context) {
    ctx.body = { msg: 'createUser' }
  }
}
