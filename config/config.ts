/*
 * @Author: porter_zhang
 * @Date: 2021-02-25 11:00:02
 * @LastEditTime: 2021-03-12 11:03:28
 */
import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  routes,
  // proxy: {//打开注释后mock即失效
  //   '/api': {
  //     'target': 'http://jsonplaceholder.typicode.com/',
  //     'changeOrigin': true,
  //     'pathRewrite': { '^/api' : '' },
  //   },
  // },
  // mock: false,//false只能关闭请求的返回值，不能关闭请求
});