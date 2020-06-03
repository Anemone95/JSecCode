'use strict';
const Controller = require('egg').Controller;

class URLRedirectController extends Controller {
  async unsafe() {
    const { ctx } = this;
    console.log(ctx.query.url);
    const url = decodeURIComponent(ctx.query.url);
    ctx.unsafeRedirect(url);
  }
  async safe() {
    const { ctx } = this;
    const url = decodeURIComponent(ctx.query.url);
    ctx.redirect(url);
  }
}

module.exports = URLRedirectController;
