'use strict';
const url = require('url');

module.exports = () => {
  return async function auth(ctx, next) {
    // 1.用户没有登录跳转到登录页面
    // 2.只有登录以后才可以访问后台管理系统
    const pathname = url.parse(ctx.request.url).pathname;
    if (ctx.session.user) {
      await next();
    } else {
      // 排除不需要做杼判断的页面
      if (pathname === '/api/user/login' || pathname === '/api/user/islogin' || pathname === '/api/csrftoken') {
        await next();
      } else {
        ctx.throw(403, 'Unauthorized');
      }
    }
  };
};
