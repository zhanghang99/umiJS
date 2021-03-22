/*
 * @Author: porter_zhang
 * @Date: 2021-03-12 10:26:06
 * @LastEditTime: 2021-03-22 15:50:54
 */
export default {
  // 支持值为 Object 和 Array
  'POST /api/web/rest/UserRest/login': { users: [1, 2] },

  // GET 可忽略
  '/api/users/1': { id: 2 },

  // 支持自定义函数，API 参考 express@4
  'POST /api/users/create': (req, res) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('ok拉');
  },
};
