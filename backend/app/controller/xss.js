'use strict';

const Controller = require('egg').Controller;

class XSSController extends Controller {
  async echo() {
    const { ctx } = this;
    const query = ctx.query;
    ctx.body = { msg: query.xss };
  }

  async store_get() {
    const { ctx } = this;
    const msgs = await this.app.mysql.select('msgs');
    ctx.body = msgs;
  }

  async store_post() {
    const { ctx } = this;
    await this.app.mysql.insert('msgs', { content: ctx.request.body.msg });
    const msgs = await this.app.mysql.select('msgs');
    ctx.body = msgs;
  }

  async store_delete() {
    const { ctx } = this;
    await this.app.mysql.delete('msgs', { id: ctx.query.id });
    const msgs = await this.app.mysql.select('msgs');
    ctx.body = msgs;
  }
}

module.exports = XSSController;
