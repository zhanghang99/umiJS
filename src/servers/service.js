/*
 * @Author: porter_zhang
 * @Date: 2021-03-12 10:20:09
 * @LastEditTime: 2021-03-22 15:43:08
 */
import request from '@/utils/request';
import { TEST_API_PATH_HOST } from '../common/config';

// 测试登录
export async function Login(params) {
  // params 来自于effects中参数

  // 对应rest接口，/server/api/用的是config.js中proxy代理。详细配置在config.js中配置。
  return request(`${TEST_API_PATH_HOST}/web/rest/UserRest/login`, {
    // 请求方式
    method: 'POST',
    // 用data包裹参数是官方指定写法，如果data有参数umi-request会默认读取data里面参数。
    data: {
      cmd: 'login',
      type: 'request',
      request: {
        username: 'admin',
        password: 'admin',
      },
    },
  });
}

export async function MockGet() {
  return request(`${TEST_API_PATH_HOST}/users/1`, {
    method: 'GET',
  });
}

export async function MockPost() {
  return request(`${TEST_API_PATH_HOST}/users/create`, {
    method: 'POST',
    data: {
      username: 'admin',
      password: 'admin',
    },
  });
}
