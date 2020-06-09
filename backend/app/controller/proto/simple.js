'use strict';

const Controller = require('egg').Controller;

class SimplePrototypeController extends Controller {
  async echo() {
    const { ctx } = this;
    const query = ctx.request.body;
    const query2 = {};
    this.merge(query2, query);
    ctx.body = { msg: ctx.pollution };
    // 清空原型链
    for (const a in {}) {
      delete Object.prototype[a];
    }
  }

  merge(target, source) {
    for (const key in source) {
      if (key in source && key in target) {
        // eslint-disable-next-line no-undef
        this.merge(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }
}

module.exports = SimplePrototypeController;
