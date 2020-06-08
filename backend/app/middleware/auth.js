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
      // 未登录白名单
      if (pathname.startsWith('/api/bac')) {
        ctx.throw(403, 'Unauthorized');
      } else {
        await next();
      }
    }
  };
};
