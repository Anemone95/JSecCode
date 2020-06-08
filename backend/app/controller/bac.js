'use strict';

const Controller = require('egg').Controller;

class BacController extends Controller {
  async getDetail() {
    const { ctx } = this;

    const user = await this.app.mysql.get('users', {
      id: ctx.request.query.uid,
    });
    ctx.body = user;
  }


}

module.exports = BacController;
