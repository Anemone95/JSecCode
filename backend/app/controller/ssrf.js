'use strict';
const Controller = require('egg').Controller;

class SSRFController extends Controller {
  async get() {
    const { ctx } = this;
    const url = decodeURIComponent(ctx.query.url);
    console.log('Get: ' + url);
    const result = await ctx.curl(url);
    ctx.body = { msg: result.res.data.toString() };
  }
}

module.exports = SSRFController;
