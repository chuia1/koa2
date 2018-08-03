var Router = require('koa-router');
const router=new Router();

const test=require('./controller/test');
router
	
	.get('/test', test.getlist)
	.post('/query', test.querylist)
	.post('/del', test.dellist)
	.post('/add', test.adduser)
module.exports = router