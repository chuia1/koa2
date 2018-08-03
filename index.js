const Koa = require('koa');
const router=require('./router.js');
const cors = require('koa2-cors');
const koaBody = require('koa-body');

const app=new Koa();

app.use(koaBody());

app.use(cors({
    origin: function (ctx) {
    
        return 'http://localhost:8080'; 
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: false,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))

app.use(router.routes())
	.use(router.allowedMethods());

app.listen(3000);