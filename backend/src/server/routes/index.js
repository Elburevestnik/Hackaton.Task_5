const Router = require('koa-router');
const queries = require('../db/queries/index');

const router = new Router();
router.get('/getUsers', async (ctx) => {
    let all = await queries.getUsers();
    ctx.status = 200;
    ctx.body = all;
});
router.get('/findUser', async (ctx) => {
    console.log(ctx);
    const password = ctx.query.password;
    const email = ctx.query.email;
    let all = await queries.findUser(email, password);
    ctx.status = 200;
    ctx.body = all;
    console.log(ctx);
});
router.post('/addUsers', async (ctx) => {
    console.log(ctx.request.body);
    const name = ctx.request.body.name;
    const password = ctx.request.body.password;
    const email = ctx.request.body.email;
    await queries.addUsers(name, email, password);
    ctx.status = 200;
    ctx.body = {
        status:'ok'
    };
});
module.exports = router;