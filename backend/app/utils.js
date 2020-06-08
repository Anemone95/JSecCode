'use strict';

const crypto = require('crypto');

function encryptUsername(username, app) {
  const cipher = crypto.createCipheriv('aes-128-ecb', app.config.key, '');
  // cipher.setAutoPadding(false);
  let enc = cipher.update(username, 'utf8', 'hex');
  enc += cipher.final('hex');
  return enc;
}

function decryptUsername(username, app) {
  const decipher = crypto.createDecipheriv('aes-128-ecb', app.config.key, '');
  let dec = decipher.update(username, 'hex', 'utf8');
  dec += decipher.final('utf8');
  return dec;
}

module.exports = { encryptUsername, decryptUsername };
