'use strict';

const Controller = require('egg').Controller;

class CSRFTokenController extends Controller {
  async get_token() {
    const { ctx } = this;
    // const results = await this.app.mysql.query('select * from users where id = ?', ctx.params.id);
    ctx.body = { csrf: ctx.csrf };
  }
}

module.exports = CSRFTokenController;
