'use strict';
const lodash = require('lodash');

const Controller = require('egg').Controller;

class LodashPrototypeController extends Controller {
  async echo() {
    const { ctx } = this;
    const query = ctx.request.body;
    const query2 = {};
    lodash.merge(query2, query);
    const compiled = lodash.template(query2);
    // eslint-disable-next-line no-unused-vars
    const rendered = compiled(); // rce

    ctx.body = { msg: query2.msg };

    // 清空原型链
    for (const a in {}) {
      delete Object.prototype[a];
    }
  }
}

module.exports = LodashPrototypeController;
