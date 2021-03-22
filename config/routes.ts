/*
 * @Author: your name
 * @Date: 2021-02-25 11:00:27
 * @LastEditTime: 2021-03-22 10:54:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \UmiJS\src\config\routes.ts
 */
export default [
  {
    path: '/',
    component: '@/layouts/MainRoute',
    routes: [
      {
        path: '/main',
        component: '@/layouts/SecondaryRoute',
        routes: [
          { path: '/main/areaA', component: '@/pages/a/a', title: 'a组件' },
          { path: '/main/areaB', component: '@/pages/b/b' },
          { path: '/main', redirect: '/main/areaA' },
        ],
      },
      { path: '/404', component: '@/pages/404/404' }, //管理同层routes所有区域的404
      { path: '/', redirect: '/main' }, //指向当前区域的重定向，不管下级，下级重定向由下级去控制
    ],
  },
  // { path: '/404', component: '@/pages/404/404' },//管理同层routes所有区域的404
];
