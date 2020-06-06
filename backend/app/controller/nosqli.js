'use strict';

const Controller = require('egg').Controller;

class NoSQLIController extends Controller {
  async getDetail() {
    const { ctx } = this;
    // const results = await this.app.mysql.query('select * from users where id = ?', ctx.params.id);
    const users = await this.ctx.model.User.find({ username: ctx.request.body.name });
    ctx.body = users;
  }

  async getUsername() {
    const { ctx } = this;
    if (ctx.session.user) {
      ctx.body = { username: ctx.session.user.username };
    } else {
      ctx.body = { username: null };
    }
  }

}

module.exports = NoSQLIController;
