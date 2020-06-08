import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import SQLi from '@/components/sqli/SQLi'
import Where from '@/components/sqli/Where'
import Insert from '@/components/sqli/Insert'
import Delete from '@/components/sqli/Delete'
import NoSQLi from '@/components/NoSQLi'
import XSS from '@/components/xss/XSS'
import ReflectXSSBackend from '@/components/xss/ReflectXSSBackend'
import ReflectXSSFront from '@/components/xss/ReflectXSSFront'
import StoredXSS from '@/components/xss/StoredXSS'
import CSRF from '@/components/CSRF'
import PathTraversal from "@/components/PathTraversal";
import RCE from "@/components/RCE";
import SSRF from "@/components/SSRF";
import URLRedirect from "@/components/urlredirect/URLRedirect";
import URLRedirectFrontend from "@/components/urlredirect/Frontend";
import URLRedirectBackend from "@/components/urlredirect/Backend";
import BAC from "@/components/BAC";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/sqli',
      name: 'SQLi',
      component: SQLi,
      children: [
        {
          path: '/sqli/where',
          name: 'Where',
          component: Where
        },
        {
          path: '/sqli/insert',
          name: 'Insert',
          component: Insert
        },
        {
          path: '/sqli/delete',
          name: 'Delete',
          component: Delete
        },
      ]
    },
    {
      path: '/nosqli',
      name: 'NoSQLi',
      component: NoSQLi,
    },
    {
      path: '/xss',
      name: 'XSS',
      component: XSS,
      children: [
        {
          path: '/xss/reflectXSSBackend',
          name: 'ReflectXSSBackend',
          component: ReflectXSSBackend
        },
        {
          path: '/xss/reflectXSSFront/:xss',
          name: 'ReflectXSSFront',
          component: ReflectXSSFront
        },
        {
          path: '/xss/StoredXSS',
          name: 'StoredXSS',
          component: StoredXSS
        }
      ]
    },
    {
      path: '/csrf',
      name: 'CSRF',
      component: CSRF,
    },
    {
      path: '/pathtraversal',
      name: 'PathTraversal',
      component: PathTraversal,
    },
    {
      path: '/rce',
      name: 'RCE',
      component: RCE,
    },
    {
      path: '/ssrf',
      name: 'SSRF',
      component: SSRF,
    },
    {
      path: '/url',
      name: 'URLRedirect',
      component: URLRedirect,
      children: [
        {
          path: '/url/frontend',
          name: 'URLRedirectFrontend',
          component: URLRedirectFrontend
        },
        {
          path: '/xss/backend',
          name: 'URLRedirectBackend',
          component: URLRedirectBackend
        }
      ]
    },
    {
      path: '/bac',
      name: 'BAC',
      component: BAC,
    },
  ]
})
