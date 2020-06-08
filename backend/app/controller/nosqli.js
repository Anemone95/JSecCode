'use strict';

const Controller = require('egg').Controller;
const utils = require('../utils');

class NoSQLIController extends Controller {
  async getDetail() {
    const { ctx } = this;
    // const results = await this.app.mysql.query('select * from users where id = ?', ctx.params.id);
    const users = await this.ctx.model.User.find({ username: utils.decryptUsername(ctx.request.body.name, this.app) });
    users.forEach(user => {
      user.tel = user.tel.substr(0, 4) + '****' + user.tel.substr(-4, 4);
      user.bankcard = user.bankcard.substr(0, 4) + '****' + user.bankcard.substr(-4, 4);
    });
    ctx.body = users;
  }


}

module.exports = NoSQLIController;
