'use strict';

const Controller = require('egg').Controller;
const utils = require('../utils');

class UserController extends Controller {
  async login() {
    const { ctx } = this;
    // const results = await this.app.mysql.query('select * from users where id = ?', ctx.params.id);
    const user = await this.app.mysql.get('users', {
      username: ctx.request.body.username,
      password: ctx.request.body.password,
    });
    if (user != null) {
      ctx.body = user;
      ctx.session.user = user;
    } else {
      ctx.body = { msg: 'Wrong username or password.' };
      ctx.status = 403;
    }
  }

  async isLogin() {
    const { ctx } = this;
    // const results = await this.app.mysql.query('select * from users where id = ?', ctx.params.id);
    if (ctx.session.user) {
      ctx.body = { username: ctx.session.user.username };
    } else {
      ctx.body = {};
    }
  }

  async logout() {
    const { ctx } = this;
    // const results = await this.app.mysql.query('select * from users where id = ?', ctx.params.id);
    ctx.session.user = null;
    ctx.body = { msg: 'ok' };
  }

  async username() {
    const { ctx } = this;
    if (ctx.session.user) {
      ctx.body = { username: ctx.session.user.username };
    } else {
      ctx.body = { username: 'anonymous' };
    }
  }

  async uid() {
    const { ctx } = this;
    if (ctx.session.user) {
      ctx.body = { uid: ctx.session.user.id };
    } else {
      ctx.body = { uid: -1 };
    }
  }

  async encryptedUsername() {
    const { ctx } = this;
    if (ctx.session.user) {
      ctx.body = { username: utils.encryptUsername(ctx.session.user.username, this.app) };
    } else {
      ctx.body = { username: utils.encryptUsername('anonymous', this.app) };
    }
  }
}

module.exports = UserController;
