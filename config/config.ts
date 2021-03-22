/*
 * @Author: porter_zhang
 * @Date: 2021-02-25 11:00:02
 * @LastEditTime: 2021-03-22 15:39:13
 */
import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  hash: true, // 打包文件开启hash值去缓存
  routes,
  // proxy: {//打开注释后mock即失效
  //   '/api': {
  //     'target': 'http://jsonplaceholder.typicode.com/',
  //     'changeOrigin': true,
  //     'pathRewrite': { '^/api' : '' },
  //   },
  // },
  // mock: false,//false只能关闭请求的返回值，不能关闭请求
  dynamicImport: {}, //异步加载  会有loading效果
});
