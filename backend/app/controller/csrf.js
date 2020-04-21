'use strict';

const Controller = require('egg').Controller;

class CSRFController extends Controller {
  async delete() {
    const { ctx } = this;
    // const results = await this.app.mysql.query('select * from users where id = ?', ctx.params.id);
    await this.app.mysql.delete('msgs', { id: ctx.query.id });
    const msgs = await this.app.mysql.select('msgs');
    ctx.body = msgs;
  }
}

module.exports = CSRFController;
