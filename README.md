<!--
 * @Author: porter_zhang
 * @Date: 2021-03-12 11:11:28
 * @LastEditTime: 2021-03-22 15:20:25
-->
###########UmiJS

###########依赖
IE9及以上
node v10+
React 16.8.0以上


<!-- ###########目录结构描述
├── Readme.md                   // help
├── app                         // 应用
├── config                      // 配置
│   ├── default.json
│   ├── dev.json                // 开发环境
│   ├── experiment.json         // 实验
│   ├── index.js                // 配置控制
│   ├── local.json              // 本地
│   ├── production.json         // 生产环境
│   └── test.json               // 测试环境
├── data
├── doc                         // 文档
├── environment
├── gulpfile.js
├── locales
├── logger-service.js           // 启动日志配置
├── node_modules
├── package.json
├── app-service.js              // 启动应用配置
├── static                      // web静态资源加载
│   └── initjson
│   	└── config.js 		// 提供给前端的配置
├── test
├── test-service.js
└── tools -->



########### 目前配置项
1. 配置路由	 父子路由
2. 状态管理	 redux/hooks reducer
3. 请求封装	 umi请求封装
4. 跨域请求代理	 proxy
5. mock	 模拟请求数据
6. 环境变量	 dev\test\prod环境变量配置
7. vconsole	 移动端vconsole配置
8. 移动端适配	 移动端flexible配置
9. 样式重置	 全局样式重置
10. 按需加载  打包拆分