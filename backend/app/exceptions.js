'use strict';

class UnAuthorized extends Error {
  constructor(msg = '', code = '403', status = '403') {
    super();
    this.msg = msg;
    this.code = code;
    this.status = status;
  }
}

module.exports = {
  UnAuthorized,
}
