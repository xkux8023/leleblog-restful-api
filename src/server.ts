import Koa = require('koa')
import koaStatic from 'koa-static'
import bodyParser from 'koa-bodyparser'
import router from './router'
import mongoose from 'mongoose'

const app: Koa = new Koa()

const mongoURI: string = 'mongodb://127.0.0.1:27017/leleblog-restful-api'

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log('MongoDB Connect success...')
  })
  .catch((err: any) => {
    console.log(err)
  })

app.use(bodyParser)
app.use(koaStatic('./www'))
app.use(router.routes()).use(router.allowedMethods())

app.listen(6060) // 监听8080端口
console.log('Server running on http://localhost:6060')
