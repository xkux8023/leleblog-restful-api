import Koa = require('koa')
import koaStatic from 'koa-static'
import bodyParser from 'koa-bodyparser'
import router from './router'
import mongoose from 'mongoose'
import { Config } from './config'

const app: Koa = new Koa()

mongoose
  .connect(Config.mongoURI, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB Connect success...')
  })
  .catch((err: any) => {
    console.log(err)
  })

app.use(bodyParser())
app.use(koaStatic('./www'))
app.use(router.routes()).use(router.allowedMethods())

app.listen(6060)
console.log('Server running on http://localhost:6060')
