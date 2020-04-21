'use strict';

const Controller = require('egg').Controller;

class SQLIController extends Controller {
  async integer() {
    const { ctx } = this;
    // const results = await this.app.mysql.query('select * from users where id = ?', ctx.params.id);
    const results = await this.app.mysql.query(`select * from users where id = ${ctx.params.id}`);
    ctx.body = results;
  }

  async insert() {
    const { ctx } = this;
    // const results = await this.app.mysql.query('select * from users where id = ?', ctx.params.id);
    await this.app.mysql.query(`insert into msgs (content, extra) values ("${ctx.request.body.msg}","nonce")`);
    const msgs = await this.app.mysql.select('msgs');
    ctx.body = msgs;
  }

  async delete() {
    const { ctx } = this;
    // const results = await this.app.mysql.query('select * from users where id = ?', ctx.params.id);
    await this.app.mysql.query(`delete from msgs where id=${ctx.params.id}`);
    const msgs = await this.app.mysql.select('msgs');
    ctx.body = msgs;
  }
}

module.exports = SQLIController;
