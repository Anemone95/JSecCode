'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/api/xss/echo', controller.xss.echo);
  router.get('/api/csrftoken', controller.csrftoken.get_token);
  router.get('/api/xss/store', controller.xss.store_get);
  router.post('/api/xss/store', controller.xss.store_post);
  router.delete('/api/xss/store', controller.xss.store_delete);
  router.get('/api/sqli/int/:id', controller.sqli.integer);
  router.post('/api/sqli/insert', controller.sqli.insert);
  router.delete('/api/sqli/msg', controller.sqli.delete);
  router.delete('/api/csrf/msg', controller.csrf.delete);
  router.get('/api/path/:file', controller.pathtraversal.file);
  router.get('/api/rce/ping', controller.rce.ping);
  router.get('/api/ssrf/get', controller.ssrf.get);
};
