'use strict';
const { execSync } = require('child_process');
const iconv = require('iconv-lite');
const os = require('os');
const Controller = require('egg').Controller;

class Container {
    prop;

    setProp(s) {
        this.prop = s;
    }

    getProp(s) {
        return this.prop;
    }
}

// good
class Rce2Controller extends Controller {
    async ping() {
        const { ctx } = this;
        const win_encoding = 'gbk';
        const ip = ctx.query.ip;

        let good = new Container();
        let bad = new Container();
        bad.setProp(ip);
        good.setProp("safe");
        
        if (os.platform()
            .toString()
            .indexOf('win') !== -1) {
            const res = execSync(`ping -n 1 ${good.getProp()}`, win_encoding);
            ctx.body = { msg: iconv.decode(new Buffer(res), win_encoding) };
        } else {
            const res = execSync(`ping -c 1 ${good.getProp()}`);
            ctx.body = { msg: res };
        }
    }
}

module.exports = Rce2Controller;
