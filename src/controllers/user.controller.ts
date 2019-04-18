import * as Koa from 'koa'
import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import userModel from '../model/user.model'
import { Config } from '../config'

export default class userController {
  static async login(ctx: Koa.Context) {
    const findResult = await userModel.find({ email: ctx.request.body.email })
    const user = findResult[0]
    const password = ctx.request.body.password

    if (findResult.length == 0) {
      ctx.status = 404
      ctx.body = { email: '用户不存在!' }
    } else {
      var result = await bcrypt.compareSync(password, user.password)
      // 验证通过
      if (result) {
        // 返回token
        const payload = { id: user.id, name: user.name, avatar: user.avatar }
        const token = jwt.sign(payload, Config.secretOrKey, { expiresIn: 3600 })

        ctx.status = 200
        ctx.body = { success: true, token: 'Bearer ' + token }
      } else {
        ctx.status = 400
        ctx.body = { password: '密码错误!' }
      }
    }
  }
  static register(ctx: Koa.Context) {
    ctx.body = 'createUser'
  }
  static getUserInfo(ctx: Koa.Context) {
    ctx.body = { msg: 'createUser' }
  }
}
