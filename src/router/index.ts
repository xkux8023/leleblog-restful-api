import Router from 'koa-router'

const router: Router = new Router()

router.get('/*', async ctx => {
  ctx.body = 'hello world'
})

export { router }
