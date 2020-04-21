'use strict';
const { execSync } = require('child_process');
const iconv = require('iconv-lite');
const os = require('os');
const Controller = require('egg').Controller;

class RceController extends Controller {
  async ping() {
    const { ctx } = this;
    const win_encoding = 'gbk';
    if (os.platform()
      .toString()
      .indexOf('win') !== -1) {
      const res = execSync(`ping -n 1 ${ctx.query.ip}`, win_encoding);
      ctx.body = { msg: iconv.decode(new Buffer(res), win_encoding) };
    } else {
      const res = execSync(`ping -c 1 ${ctx.query.ip}`);
      ctx.body = { msg: res };
    }
  }
}

module.exports = RceController;
