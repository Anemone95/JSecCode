'use strict';
const fs = require('fs');
const util = require('util');

const Controller = require('egg').Controller;

const readFile = util.promisify(fs.readFile);

class PathtraversalController extends Controller {
  async file() {
    const { ctx } = this;
    const result = await readFile(ctx.params.file);
    ctx.body = { msg: result.toString() };
  }
}

module.exports = PathtraversalController;
