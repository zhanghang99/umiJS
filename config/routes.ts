/*
 * @Author: your name
 * @Date: 2021-02-25 11:00:27
 * @LastEditTime: 2021-03-30 17:53:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \UmiJS\src\config\routes.ts
 */
export default [
  {
    path: '/main',
    component: '@/layouts/MainLayout',
    // 一旦子路由使用了layout，那子路由只能包含一个路由，取余路由都在layout中设置
    routes: [
      {
        path: '/',
        component: '@/layouts/SecondaryLayout',
        routes: [
          {
            exact: true,
            path: '/main/areaA',
            component: '@/pages/a/a',
            title: 'a组件',
          },
          { exact: true, path: '/main/areaB', component: '@/pages/b/b' },
          { exact: true, path: '/main/404', component: '@/pages/404/404' }, //管理同层routes所有区域的404
          {
            exact: true,
            path: '/main',
            redirect: '/main/areaA',
            component: '@/pages/a/a',
          },
        ],
      },
    ],
  },
  { path: '/404', component: '@/pages/404/404' }, //管理同层routes所有区域的404
  { path: '/', redirect: '/main', component: '@/layouts/MainLayout' },
];
