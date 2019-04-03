import Koa from 'koa' // 导入koa
import koaStatic from 'koa-static'
import { router } from './router'

const app: Koa = new Koa() // 新建一个Koa对象

app.use(koaStatic('./www'))
app.use(router.routes()) // 使用路由

app.listen(6060) // 监听8080端口
console.log('Server running on http://localhost:6060')
